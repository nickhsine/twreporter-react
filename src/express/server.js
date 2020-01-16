import 'babel-polyfill'
import Compression from 'compression'
import Express from 'express'
import authMiddleware from './middlewares/auth'
import cookieParser from 'cookie-parser'
import dataLoaderMiddleware from './middlewares/data-loader'
import get from 'lodash/get'
import globalEnv from '../global-env'
import http from 'http'
import initReduxStoreMiddleware from './middlewares/init-redux-store'
import path from 'path'
import releaseBranchConsts from '@twreporter/core/lib/constants/release-branch'
import renderHTMLMiddleware from './middlewares/render-html'
import statusCodeConst from '../constants/status-code'
import loggerFactory from '../logger'

const _ = {
  get
}

const logger = loggerFactory.getLogger()

class ExpressServer {
  constructor() {
    this.app = new Express()
    this.server = new http.Server(this.app)
  }

  /**
   *  @param {string} cookieSecret - secret for cookie parser
   */
  __applyDefaultMiddlewares(cookieSecret) {
    this.app.use(Compression())
    this.app.use(cookieParser(cookieSecret))
  }

  __applyStaticRoutes() {
    const oneDay = 86400000
    this.app.use('/asset', Express.static(path.join(__dirname, '../../static/asset'), { maxAge: oneDay * 7 }))
    this.app.use('/dist', Express.static(path.join(__dirname, '../../dist'), { maxAge: oneDay * 30 }))
    this.app.use('/meta', Express.static(path.join(__dirname, '../../static/meta'), { maxAge: oneDay }))
  }

  __applyServiceWorkerRoutes() {
    this.app.get('/sw.js', function (req, res, next) {
      const options = {
        headers:{
          'Cache-Control': 'public, max-age=900, must-revalidate'
        },
        root: path.resolve(__dirname, '../../')
      }

      res.sendFile('sw.js', options, function (err) {
        if (err) {
          next(err)
        }
      })
    })
  }

  __applySearchEngineRoutes() {
    this.app.get('/BingSiteAuth.xml', function (req, res, next) {
      const options = {
        headers: {
          'Cache-Control': 'public, max-age=2419200, must-revalidate'
        },
        root: path.resolve(__dirname, '../../static/')
      }

      res.sendFile('BingSiteAuth.xml', options, function (err) {
        if (err) {
          next(err)
        }
      })
    })

    this.app.get('/robots.txt', (req, res) => {
      if (globalEnv.releaseBranch === releaseBranchConsts.release) {
        res.format({
          'text/plain': function () {
            res.status(statusCodeConst.ok).send('User-agent: * \n' +
              'Sitemap: https://www.twreporter.org/sitemaps/twreporter-sitemap.xml\n' +
              'Sitemap: https://www.twreporter.org/sitemaps/index-articles.xml'
            )
          }
        })
        return
      }

      // disallow search engine crawler
      res.format({
        'text/plain': function() {
          res.status(statusCodeConst.ok).send('User-agent: * \n' +
            'Disallow: /'
          )
        }
      })
    })
  }

  __applyResponseHeader() {
    this.app.use(function (req, res, next) {
      res.set('Access-Control-Allow-Origin', 'https://www.twreporter.org/')
      res.set('Access-Control-Allow-Headers', 'X-Requested-With')
      next()
    })
  }

  __applyHealthCheckRoutes() {
    this.app.get('/check', (req, res) => {
      res.status(statusCodeConst.ok)
      res.end('server is running')
    })

  }

  /**
   *  @param {Object} webpackAssets - it lists all the built webpack bundles we are going to use
   *  @param {Object} loadableStats - it presnets files, modules and webpack bundles relationship
   *  @param {Object} options
   *  @param {string} options.releaseBranch - release branch, it could be 'master', 'test', 'staging' or 'release'
   *  @param {string} options.nodeEnv - node environment, it could be 'development' or 'production'
   */
  __applyAppRoutes(webpackAssets, loadableStats, options) {
    const namespace = 'twreporter'

    // NOTICE:
    // the order of middlewares matters
    this.app.get('*', [
      (req, res, next) => {
        /**
         *  typedef middlewareContext
         *  @property {Object} middlewareContext.reduxStore - redux store instance
         *  @property {Object} middlewareContext.routerStaticContext - context of `StaticRouter` component
         *  @property {string} middlewareContext.html - html static markup
         */
        const middlewareContext = {
          reduxStore: null,
          routerStaticContext: null,
          html: ''
        }
        req[namespace] = middlewareContext
        next()
      },
      initReduxStoreMiddleware(namespace, options),
      authMiddleware(namespace, options),
      dataLoaderMiddleware(namespace),
      renderHTMLMiddleware(namespace, webpackAssets, loadableStats, options),
      (req, res) => {
        const { html, routerStaticContext } = req[namespace]

        if ( routerStaticContext.url ) {
          // somewhere a `<Redirect>` was rendered
          res.redirect(statusCodeConst.movedPermanently, routerStaticContext.url)
          return
        }

        const statusCode = _.get(routerStaticContext, 'statusCode', statusCodeConst.ok)
        if (!res.headersSent) {
          const idToken = _.get(req, 'cookies.id_token')
          if (idToken) {
            // not to cache personal response
            res.set('Cache-Control', 'no-store')
          } else {
            // set Cache-Control header for caching
            res.set('Cache-Control', 'public, max-age=300')
          }
        }

        if (statusCode == statusCodeConst.notFound ||
          statusCode == statusCode.internalServerError) {

          res.status(statusCode).send(html)
          return
        }

        // Do not set status code here.
        // the status code would be set
        // in `res.send()`
        // For instance, if current request is conditional request,
        // the request header will contains 'If-None-Match' directive;
        // if `req.get('If-None_match')` equals to `res.get('Etag')`,
        // the status code would be set to 304 automatically.
        res.send(html)
      }
    ])
  }

  __applyCustomErrorHandler() {

    this.app.use((err, req, res, next) => {
      if (res.headersSent) {
        logger.errorReport({
          report: err,
          message: 'Response header is already sent to the client. Error will be handled by Express default error handler.'
        })
        return next(err)
      }

      res.set('Cache-Control', 'no-store')
      if (_.get(err, 'statusCode') === 404) {
        res.redirect('/error/404')
      } else {
        logger.errorReport({
          report: err,
          message: 'Error was caught by Express custom error handler.'
        })
        res.redirect('/error/500')
      }
    })
  }

  async __applyLogger() {
    try {
      const mw = await loggerFactory.makeExpressMiddleware()
      this.app.use(mw)
    } catch(err) {
      logger.errorReport({
        report: err,
        message: 'Express cannot apply logger middleware.'
      })
    }
  }

  /**
   *  This function would set
   *  express application etag setting.
   *  After setting it,
   *  express will add `Etag` response header.
   *  Etag response header will make the browser send
   *  conditional requests afterwards.
   *  If `If-None-Match` request header equals to `Etag` response header,
   *  express will set the response status code to 304 Not Modified.
   *  For more information,
   *  see https://expressjs.com/zh-tw/api.html#etag.options.table
   */
  __applyConditionRequestHandler() {
    this.app.set('etag', 'strong')
  }

  /**
   *  @param {Object} webpackAssets - it lists all the built webpack bundles we are going to use
   *  @param {Object} loadableStats - it presnets files, modules and webpack bundles relationship
   *  @param {Object} options
   *  @param {string} options.releaseBranch - release branch, it could be 'master', 'test', 'staging' or 'release'
   *  @param {string} options.nodeEnv - node environment, it could be 'development' or 'production'
   *  @param {string} options.cookieSecret - secret for cookie parser
   */
  async setup(webpackAssets, loadableStats, options) {
    await this.__applyLogger()
    this.__applyConditionRequestHandler()
    this.__applyDefaultMiddlewares(options.cookieSecret)
    this.__applyStaticRoutes()
    this.__applyResponseHeader()
    if (globalEnv.isProduction) {
      this.__applyServiceWorkerRoutes()
    }
    this.__applySearchEngineRoutes()
    this.__applyHealthCheckRoutes()
    this.__applyAppRoutes(webpackAssets, loadableStats, options)
    this.__applyCustomErrorHandler()
  }

  /**
   *  @param {string} host - host of server
   *  @param {string|number} port - port server listens to
   */
  run(host, port) {
    if (port) {
      this.server.listen(port, (err) => {
        if (err) {
          logger.errorReport({
            report: err,
            message: `Express server cannot listen on host ${host} and port ${port}.`
          })
          return
        }
        logger.info(`==> 💻  Open http://${host}:${port} in a browser to view the app.`)
      })
    } else {
      logger.errorReport({
        message: '==>     ERROR: No PORT environment variable has been specified.'
      })
    }
  }
}

export default ExpressServer
