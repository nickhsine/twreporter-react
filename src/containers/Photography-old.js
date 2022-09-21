/* eslint no-unused-vars: [0, { "args": "all" }] */

import ArticleList from '../components/photography/article-list'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import SystemError from '../components/SystemError'
import categoryConst from '../constants/category-old'
import colors from '../constants/colors'
import dataLoaderConst from '../constants/data-loaders'
import loggerFactory from '../logger'
import siteMeta from '../constants/site-meta'
import twreporterRedux from '@twreporter/redux'
import { TopNews } from '../components/photography/top-news'
import { camelizeKeys } from 'humps'
import { connect } from 'react-redux'

// feature-toggle
import cloneUtilsNew from '../utils/shallow-clone-entity'
import cloneUtilsOld from '../utils/shallow-clone-entity-old'
import { ENABLE_NEW_INFO_ARCH } from '@twreporter/core/lib/constants/feature-flag'

// lodash
import forEach from 'lodash/forEach'
import get from 'lodash/get'
const cloneUtils = ENABLE_NEW_INFO_ARCH ? cloneUtilsNew : cloneUtilsOld

const _ = {
  forEach,
  get,
}

const logger = loggerFactory.getLogger()

const { fetchPostsByCategoryListId } = twreporterRedux.actions
const reduxStateFields = twreporterRedux.reduxStateFields

class Photography extends Component {
  componentDidMount() {
    this.fetchPostsWithCatch()
  }

  fetchPostsWithCatch = () => {
    const {
      fetchPostsByCategoryListId,
      hasMore,
      listId,
      nPerPage,
      posts,
    } = this.props

    if (!hasMore) {
      return
    }

    const page = Math.ceil(posts.length / nPerPage + 1)

    return fetchPostsByCategoryListId(listId, nPerPage, page).catch(
      failAction => {
        // TODO render alter message
        logger.errorReport({
          report: _.get(failAction, 'payload.error'),
          message: `Error to fetch posts (category id: ${listId}, page: ${page}, nPerPage: ${nPerPage}).`,
        })
      }
    )
  }

  render() {
    const { error, hasMore, isFetching, posts } = this.props

    // Error handling
    if (error) {
      return <SystemError error={error} />
    }

    const topNewsNum = 6

    const style = {
      backgroundColor: colors.photographyColor,
      color: '#FFFFEB',
    }

    const canonical = siteMeta.urlOrigin + '/photography'
    const title = '影像' + siteMeta.name.separator + siteMeta.name.full
    return (
      <div style={style}>
        <Helmet
          title={title}
          link={[{ rel: 'canonical', href: canonical }]}
          meta={[
            { name: 'description', content: siteMeta.desc },
            { name: 'twitter:title', content: title },
            { name: 'twitter:description', content: siteMeta.desc },
            { property: 'twitter:image', content: siteMeta.ogImage.url },
            { property: 'og:title', content: title },
            { property: 'og:description', content: siteMeta.desc },
            { property: 'og:image', content: siteMeta.ogImage.url },
            { property: 'og:image:width', content: siteMeta.ogImage.width },
            { property: 'og:image:height', content: siteMeta.ogImage.height },
            { property: 'og:type', content: 'website' },
            { property: 'og:url', content: canonical },
          ]}
        />
        <TopNews posts={posts.slice(0, topNewsNum)} />
        <ArticleList
          articles={posts.slice(topNewsNum)}
          hasMore={hasMore}
          loadMore={this.fetchPostsWithCatch}
        />
      </div>
    )
  }
}

Photography.defaultProps = {
  error: null,
  isFetching: false,
  listId: _.get(categoryConst, 'ids.photography', ''),
  posts: [],
  hasMore: false,
  nPerPage: dataLoaderConst.photographyPage.nPerPage,
}

Photography.propTypes = {
  error: PropTypes.object,
  isFetching: PropTypes.bool,
  listId: PropTypes.string,
  // TODO: PropTypes.arrayOf(propTypeConst.post),
  posts: PropTypes.array,
  hasMore: PropTypes.bool,
  nPerPage: PropTypes.number,
  fetchPostsByCategoryListId: PropTypes.func,
}

/**
 *  @typedef {import('@twreporter/redux/lib/typedef').ReduxState} ReduxState
 */

/**
 *  @typedef {import('../utils/shallow-clone-entity').MetaOfPost} MetaOfPost
 */

/**
 *  @param {ReduxState} state
 *  @param {string} listId - photography list id
 *  @return {Object} error object
 */
function errorProp(state, listId) {
  return _.get(state, [reduxStateFields.lists, listId, 'error'])
}

/**
 *  @param {ReduxState} state
 *  @param {string} listId - photography list id
 *  @return {boolean}
 */
function isFetchingProp(state, listId) {
  return _.get(state, [reduxStateFields.lists, listId, 'isFetching'])
}

/**
 *  @param {ReduxState} state
 *  @param {string} listId - photography list id
 *  @return {MetaOfPost[]}
 */
function postsProp(state, listId) {
  const { entities, postsInEntities, lists } = reduxStateFields
  const postEntities = _.get(state, [entities, postsInEntities, 'byId'])
  const listObj = _.get(state, [lists, listId])
  const postIds = _.get(listObj, 'items', [])
  const posts = []
  _.forEach(postIds, postId => {
    const post = _.get(postEntities, postId)
    if (post) {
      posts.push(cloneUtils.shallowCloneMetaOfPost(post))
    }
  })
  return posts
}

/**
 *  @param {ReduxState} state
 *  @param {string} listId - photography list id
 *  @return {boolean}
 */
function hasMoreProp(state, listId) {
  const listObj = _.get(state, [reduxStateFields.lists, listId], null)

  if (!listObj) {
    return true
  }

  const total = _.get(listObj, 'total', 0)
  const items = _.get(listObj, 'items.length', 0)

  return items < total
}

/**
 *  @typedef {Object} PhotographyProps
 *  @property {Object} error
 *  @property {boolean} hasMore
 *  @property {boolean} isFetching
 *  @property {string} listId
 *  @property {MetaOfPost[]} posts
 *  @property {number} nPerPage
 */

/**
 *  @param {ReduxState} state
 *  @return {PhotographyProps}
 */
function mapStateToProps(state) {
  console.log('categoryConst', categoryConst.id)
  const listId = _.get(categoryConst, 'ids.photography', '')
  console.log('listId', listId)
  return {
    error: errorProp(state, listId),
    hasMore: hasMoreProp(state, listId),
    isFetching: isFetchingProp(state, listId),
    listId,
    posts: postsProp(state, listId),
    nPerPage: dataLoaderConst.photographyPage.nPerPage,
  }
}

export { Photography }
export default connect(
  mapStateToProps,
  { fetchPostsByCategoryListId }
)(Photography)
