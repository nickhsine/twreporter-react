/* eslint-disable */ 'undefined' != typeof navigator &&
  (function(t, e) {
    'function' == typeof define && define.amd
      ? define(function() {
          return e(t)
        })
      : 'object' == typeof module && module.exports
      ? (module.exports = e(t))
      : ((t.lottie = e(t)), (t.bodymovin = t.lottie))
  })(window || {}, function(t) {
    'use strict'
    function e() {
      return {}
    }
    function s(t) {
      Ft = t
        ? Math.round
        : function(t) {
            return t
          }
    }
    function i(t, e, s, i) {
      ;(this.type = t),
        (this.currentTime = e),
        (this.totalTime = s),
        (this.direction = i < 0 ? -1 : 1)
    }
    function a(t, e) {
      ;(this.type = t), (this.direction = e < 0 ? -1 : 1)
    }
    function r(t, e, s, i) {
      ;(this.type = t),
        (this.currentLoop = s),
        (this.totalLoops = e),
        (this.direction = i < 0 ? -1 : 1)
    }
    function n(t, e, s) {
      ;(this.type = t), (this.firstFrame = e), (this.totalFrames = s)
    }
    function h(t, e) {
      ;(this.type = t), (this.target = e)
    }
    function o(t, e) {
      void 0 === e &&
        (e = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890')
      var s,
        i = ''
      for (s = t; s > 0; --s) i += e[Math.round(Math.random() * (e.length - 1))]
      return i
    }
    function l(t, e, s) {
      var i, a, r, n, h, o, l, p
      switch (
        ((n = Math.floor(6 * t)),
        (h = 6 * t - n),
        (o = s * (1 - e)),
        (l = s * (1 - h * e)),
        (p = s * (1 - (1 - h) * e)),
        n % 6)
      ) {
        case 0:
          ;(i = s), (a = p), (r = o)
          break
        case 1:
          ;(i = l), (a = s), (r = o)
          break
        case 2:
          ;(i = o), (a = s), (r = p)
          break
        case 3:
          ;(i = o), (a = l), (r = s)
          break
        case 4:
          ;(i = p), (a = o), (r = s)
          break
        case 5:
          ;(i = s), (a = o), (r = l)
      }
      return [i, a, r]
    }
    function p(t, e, s) {
      var i,
        a = Math.max(t, e, s),
        r = Math.min(t, e, s),
        n = a - r,
        h = 0 === a ? 0 : n / a,
        o = a / 255
      switch (a) {
        case r:
          i = 0
          break
        case t:
          ;(i = e - s + n * (e < s ? 6 : 0)), (i /= 6 * n)
          break
        case e:
          ;(i = s - t + 2 * n), (i /= 6 * n)
          break
        case s:
          ;(i = t - e + 4 * n), (i /= 6 * n)
      }
      return [i, h, o]
    }
    function f(t, e) {
      var s = p(255 * t[0], 255 * t[1], 255 * t[2])
      return (
        (s[1] += e),
        s[1] > 1 ? (s[1] = 1) : s[1] <= 0 && (s[1] = 0),
        l(s[0], s[1], s[2])
      )
    }
    function m(t, e) {
      var s = p(255 * t[0], 255 * t[1], 255 * t[2])
      return (
        (s[2] += e),
        s[2] > 1 ? (s[2] = 1) : s[2] < 0 && (s[2] = 0),
        l(s[0], s[1], s[2])
      )
    }
    function d(t, e) {
      var s = p(255 * t[0], 255 * t[1], 255 * t[2])
      return (
        (s[0] += e / 360),
        s[0] > 1 ? (s[0] -= 1) : s[0] < 0 && (s[0] += 1),
        l(s[0], s[1], s[2])
      )
    }
    function c() {}
    function u(t) {
      return Array.apply(null, { length: t })
    }
    function g(t) {
      return document.createElementNS(St, t)
    }
    function v(t) {
      return document.createElement(t)
    }
    function y() {}
    function b(t, e) {
      var s,
        i,
        a = t.length
      for (s = 0; s < a; s += 1) {
        i = t[s].prototype
        for (var r in i) i.hasOwnProperty(r) && (e.prototype[r] = i[r])
      }
    }
    function _(t) {
      function e() {}
      return (e.prototype = t), e
    }
    function k() {
      function t(t, e, s, i, a, r) {
        var n = t * i + e * a + s * r - a * i - r * t - s * e
        return n > -0.001 && n < 0.001
      }
      function e(e, s, i, a, r, n, h, o, l) {
        if (0 === i && 0 === n && 0 === l) return t(e, s, a, r, h, o)
        var p,
          f = Math.sqrt(
            Math.pow(a - e, 2) + Math.pow(r - s, 2) + Math.pow(n - i, 2)
          ),
          m = Math.sqrt(
            Math.pow(h - e, 2) + Math.pow(o - s, 2) + Math.pow(l - i, 2)
          ),
          d = Math.sqrt(
            Math.pow(h - a, 2) + Math.pow(o - r, 2) + Math.pow(l - n, 2)
          )
        return (
          (p =
            f > m
              ? f > d
                ? f - m - d
                : d - m - f
              : d > m
              ? d - m - f
              : m - f - d),
          p > -1e-4 && p < 1e-4
        )
      }
      function s(t) {
        var e,
          s = pe.newElement(),
          i = t.c,
          a = t.v,
          r = t.o,
          n = t.i,
          h = t._length,
          l = s.lengths,
          p = 0
        for (e = 0; e < h - 1; e += 1)
          (l[e] = o(a[e], a[e + 1], r[e], n[e + 1])), (p += l[e].addedLength)
        return (
          i && ((l[e] = o(a[e], a[0], r[e], n[0])), (p += l[e].addedLength)),
          (s.totalLength = p),
          s
        )
      }
      function i(t) {
        ;(this.segmentLength = 0), (this.points = new Array(t))
      }
      function a(t, e) {
        ;(this.partialLength = t), (this.point = e)
      }
      function r(t, e) {
        var s = e.percents,
          i = e.lengths,
          a = s.length,
          r = Rt((a - 1) * t),
          n = t * e.addedLength,
          h = 0
        if (r === a - 1 || 0 === r || n === i[r]) return s[r]
        for (var o = i[r] > n ? -1 : 1, l = !0; l; )
          if (
            (i[r] <= n && i[r + 1] > n
              ? ((h = (n - i[r]) / (i[r + 1] - i[r])), (l = !1))
              : (r += o),
            r < 0 || r >= a - 1)
          ) {
            if (r === a - 1) return s[r]
            l = !1
          }
        return s[r] + (s[r + 1] - s[r]) * h
      }
      function n(t, e, s, i, a, n) {
        var h = r(a, n),
          o = 1 - h,
          l =
            Math.round(
              1e3 *
                (o * o * o * t[0] +
                  (h * o * o + o * h * o + o * o * h) * s[0] +
                  (h * h * o + o * h * h + h * o * h) * i[0] +
                  h * h * h * e[0])
            ) / 1e3,
          p =
            Math.round(
              1e3 *
                (o * o * o * t[1] +
                  (h * o * o + o * h * o + o * o * h) * s[1] +
                  (h * h * o + o * h * h + h * o * h) * i[1] +
                  h * h * h * e[1])
            ) / 1e3
        return [l, p]
      }
      function h(t, e, s, i, a, n, h) {
        a = a < 0 ? 0 : a > 1 ? 1 : a
        var o = r(a, h)
        n = n > 1 ? 1 : n
        var l,
          f = r(n, h),
          m = t.length,
          d = 1 - o,
          c = 1 - f,
          u = d * d * d,
          g = o * d * d * 3,
          v = o * o * d * 3,
          y = o * o * o,
          b = d * d * c,
          _ = o * d * c + d * o * c + d * d * f,
          k = o * o * c + d * o * f + o * d * f,
          A = o * o * f,
          M = d * c * c,
          P = o * c * c + d * f * c + d * c * f,
          C = o * f * c + d * f * f + o * c * f,
          D = o * f * f,
          x = c * c * c,
          E = f * c * c + c * f * c + c * c * f,
          F = f * f * c + c * f * f + f * c * f,
          S = f * f * f
        for (l = 0; l < m; l += 1)
          (p[4 * l] =
            Math.round(1e3 * (u * t[l] + g * s[l] + v * i[l] + y * e[l])) /
            1e3),
            (p[4 * l + 1] =
              Math.round(1e3 * (b * t[l] + _ * s[l] + k * i[l] + A * e[l])) /
              1e3),
            (p[4 * l + 2] =
              Math.round(1e3 * (M * t[l] + P * s[l] + C * i[l] + D * e[l])) /
              1e3),
            (p[4 * l + 3] =
              Math.round(1e3 * (x * t[l] + E * s[l] + F * i[l] + S * e[l])) /
              1e3)
        return p
      }
      var o =
          (Math,
          (function() {
            return function(t, e, s, i) {
              var a,
                r,
                n,
                h,
                o,
                l,
                p = Ot,
                f = 0,
                m = [],
                d = [],
                c = fe.newElement()
              for (n = s.length, a = 0; a < p; a += 1) {
                for (o = a / (p - 1), l = 0, r = 0; r < n; r += 1)
                  (h =
                    Lt(1 - o, 3) * t[r] +
                    3 * Lt(1 - o, 2) * o * s[r] +
                    3 * (1 - o) * Lt(o, 2) * i[r] +
                    Lt(o, 3) * e[r]),
                    (m[r] = h),
                    null !== d[r] && (l += Lt(m[r] - d[r], 2)),
                    (d[r] = m[r])
                l && ((l = zt(l)), (f += l)),
                  (c.percents[a] = o),
                  (c.lengths[a] = f)
              }
              return (c.addedLength = f), c
            }
          })()),
        l = (function() {
          var e = {}
          return function(s) {
            var r = s.s,
              n = s.e,
              h = s.to,
              o = s.ti,
              l = (
                r[0] +
                '_' +
                r[1] +
                '_' +
                n[0] +
                '_' +
                n[1] +
                '_' +
                h[0] +
                '_' +
                h[1] +
                '_' +
                o[0] +
                '_' +
                o[1]
              ).replace(/\./g, 'p')
            if (e[l]) return void (s.bezierData = e[l])
            var p,
              f,
              m,
              d,
              c,
              g,
              v,
              y = Ot,
              b = 0,
              _ = null
            2 === r.length &&
              (r[0] != n[0] || r[1] != n[1]) &&
              t(r[0], r[1], n[0], n[1], r[0] + h[0], r[1] + h[1]) &&
              t(r[0], r[1], n[0], n[1], n[0] + o[0], n[1] + o[1]) &&
              (y = 2)
            var k = new i(y)
            for (m = h.length, p = 0; p < y; p += 1) {
              for (v = u(m), c = p / (y - 1), g = 0, f = 0; f < m; f += 1)
                (d =
                  Lt(1 - c, 3) * r[f] +
                  3 * Lt(1 - c, 2) * c * (r[f] + h[f]) +
                  3 * (1 - c) * Lt(c, 2) * (n[f] + o[f]) +
                  Lt(c, 3) * n[f]),
                  (v[f] = d),
                  null !== _ && (g += Lt(v[f] - _[f], 2))
              ;(g = zt(g)), (b += g), (k.points[p] = new a(g, v)), (_ = v)
            }
            ;(k.segmentLength = b), (s.bezierData = k), (e[l] = k)
          }
        })(),
        p = Gt('float32', 8)
      return {
        getSegmentsLength: s,
        getNewSegment: h,
        getPointInSegment: n,
        buildBezierData: l,
        pointOnLine2D: t,
        pointOnLine3D: e,
      }
    }
    function A() {
      function t(a, r, h) {
        var o,
          l,
          p,
          f,
          m,
          d,
          c,
          u,
          g = a.length
        for (f = 0; f < g; f += 1)
          if (((o = a[f]), 'ks' in o && !o.completed)) {
            if (
              ((o.completed = !0),
              o.tt && (a[f - 1].td = o.tt),
              (l = []),
              (p = -1),
              o.hasMask)
            ) {
              var v = o.masksProperties
              for (d = v.length, m = 0; m < d; m += 1)
                if (v[m].pt.k.i) i(v[m].pt.k)
                else
                  for (u = v[m].pt.k.length, c = 0; c < u; c += 1)
                    v[m].pt.k[c].s && i(v[m].pt.k[c].s[0]),
                      v[m].pt.k[c].e && i(v[m].pt.k[c].e[0])
            }
            0 === o.ty
              ? ((o.layers = e(o.refId, r)), t(o.layers, r, h))
              : 4 === o.ty
              ? s(o.shapes)
              : 5 == o.ty && n(o, h)
          }
      }
      function e(t, e) {
        for (var s = 0, i = e.length; s < i; ) {
          if (e[s].id === t)
            return e[s].layers.__used
              ? JSON.parse(JSON.stringify(e[s].layers))
              : ((e[s].layers.__used = !0), e[s].layers)
          s += 1
        }
      }
      function s(t) {
        var e,
          a,
          r,
          n = t.length,
          h = !1
        for (e = n - 1; e >= 0; e -= 1)
          if ('sh' == t[e].ty) {
            if (t[e].ks.k.i) i(t[e].ks.k)
            else
              for (r = t[e].ks.k.length, a = 0; a < r; a += 1)
                t[e].ks.k[a].s && i(t[e].ks.k[a].s[0]),
                  t[e].ks.k[a].e && i(t[e].ks.k[a].e[0])
            h = !0
          } else 'gr' == t[e].ty && s(t[e].it)
      }
      function i(t) {
        var e,
          s = t.i.length
        for (e = 0; e < s; e += 1)
          (t.i[e][0] += t.v[e][0]),
            (t.i[e][1] += t.v[e][1]),
            (t.o[e][0] += t.v[e][0]),
            (t.o[e][1] += t.v[e][1])
      }
      function a(t, e) {
        var s = e ? e.split('.') : [100, 100, 100]
        return (
          t[0] > s[0] ||
          (!(s[0] > t[0]) &&
            (t[1] > s[1] ||
              (!(s[1] > t[1]) && (t[2] > s[2] || (!(s[2] > t[2]) && void 0)))))
        )
      }
      function r(e, s) {
        e.__complete ||
          (l(e),
          h(e),
          o(e),
          p(e),
          t(e.layers, e.assets, s),
          (e.__complete = !0))
      }
      function n(t, e) {
        0 !== t.t.a.length || 'm' in t.t.p || (t.singleShape = !0)
      }
      var h = (function() {
          function t(t) {
            var e = t.t.d
            t.t.d = { k: [{ s: e, t: 0 }] }
          }
          function e(e) {
            var s,
              i = e.length
            for (s = 0; s < i; s += 1) 5 === e[s].ty && t(e[s])
          }
          var s = [4, 4, 14]
          return function(t) {
            if (a(s, t.v) && (e(t.layers), t.assets)) {
              var i,
                r = t.assets.length
              for (i = 0; i < r; i += 1)
                t.assets[i].layers && e(t.assets[i].layers)
            }
          }
        })(),
        o = (function() {
          var t = [4, 7, 99]
          return function(e) {
            if (e.chars && !a(t, e.v)) {
              var s,
                r,
                n,
                h,
                o,
                l = e.chars.length
              for (s = 0; s < l; s += 1)
                if (e.chars[s].data && e.chars[s].data.shapes)
                  for (
                    o = e.chars[s].data.shapes[0].it, n = o.length, r = 0;
                    r < n;
                    r += 1
                  )
                    (h = o[r].ks.k),
                      h.__converted || (i(o[r].ks.k), (h.__converted = !0))
            }
          }
        })(),
        l = (function() {
          function t(e) {
            var s,
              i,
              a,
              r = e.length
            for (s = 0; s < r; s += 1)
              if ('gr' === e[s].ty) t(e[s].it)
              else if ('fl' === e[s].ty || 'st' === e[s].ty)
                if (e[s].c.k && e[s].c.k[0].i)
                  for (a = e[s].c.k.length, i = 0; i < a; i += 1)
                    e[s].c.k[i].s &&
                      ((e[s].c.k[i].s[0] /= 255),
                      (e[s].c.k[i].s[1] /= 255),
                      (e[s].c.k[i].s[2] /= 255),
                      (e[s].c.k[i].s[3] /= 255)),
                      e[s].c.k[i].e &&
                        ((e[s].c.k[i].e[0] /= 255),
                        (e[s].c.k[i].e[1] /= 255),
                        (e[s].c.k[i].e[2] /= 255),
                        (e[s].c.k[i].e[3] /= 255))
                else
                  (e[s].c.k[0] /= 255),
                    (e[s].c.k[1] /= 255),
                    (e[s].c.k[2] /= 255),
                    (e[s].c.k[3] /= 255)
          }
          function e(e) {
            var s,
              i = e.length
            for (s = 0; s < i; s += 1) 4 === e[s].ty && t(e[s].shapes)
          }
          var s = [4, 1, 9]
          return function(t) {
            if (a(s, t.v) && (e(t.layers), t.assets)) {
              var i,
                r = t.assets.length
              for (i = 0; i < r; i += 1)
                t.assets[i].layers && e(t.assets[i].layers)
            }
          }
        })(),
        p = (function() {
          function t(e) {
            var s,
              i,
              a,
              r = e.length,
              n = !1
            for (s = r - 1; s >= 0; s -= 1)
              if ('sh' == e[s].ty) {
                if (e[s].ks.k.i) e[s].ks.k.c = e[s].closed
                else
                  for (a = e[s].ks.k.length, i = 0; i < a; i += 1)
                    e[s].ks.k[i].s && (e[s].ks.k[i].s[0].c = e[s].closed),
                      e[s].ks.k[i].e && (e[s].ks.k[i].e[0].c = e[s].closed)
                n = !0
              } else 'gr' == e[s].ty && t(e[s].it)
          }
          function e(e) {
            var s,
              i,
              a,
              r,
              n,
              h,
              o = e.length
            for (i = 0; i < o; i += 1) {
              if (((s = e[i]), s.hasMask)) {
                var l = s.masksProperties
                for (r = l.length, a = 0; a < r; a += 1)
                  if (l[a].pt.k.i) l[a].pt.k.c = l[a].cl
                  else
                    for (h = l[a].pt.k.length, n = 0; n < h; n += 1)
                      l[a].pt.k[n].s && (l[a].pt.k[n].s[0].c = l[a].cl),
                        l[a].pt.k[n].e && (l[a].pt.k[n].e[0].c = l[a].cl)
              }
              4 === s.ty && t(s.shapes)
            }
          }
          var s = [4, 4, 18]
          return function(t) {
            if (a(s, t.v) && (e(t.layers), t.assets)) {
              var i,
                r = t.assets.length
              for (i = 0; i < r; i += 1)
                t.assets[i].layers && e(t.assets[i].layers)
            }
          }
        })(),
        f = {}
      return (f.completeData = r), f
    }
    function M() {
      ;(this.c = !1),
        (this._length = 0),
        (this._maxLength = 8),
        (this.v = u(this._maxLength)),
        (this.o = u(this._maxLength)),
        (this.i = u(this._maxLength))
    }
    function P() {}
    function C() {}
    function D() {}
    function x() {}
    function E() {
      ;(this._length = 0),
        (this._maxLength = 4),
        (this.shapes = u(this._maxLength))
    }
    function F(t, e, s, i) {
      ;(this.elem = t),
        (this.frameId = -1),
        (this.dataProps = u(e.length)),
        (this.renderer = s),
        (this.k = !1),
        (this.dashStr = ''),
        (this.dashArray = Gt('float32', e.length ? e.length - 1 : 0)),
        (this.dashoffset = Gt('float32', 1)),
        this.initDynamicPropertyContainer(i)
      var a,
        r,
        n = e.length || 0
      for (a = 0; a < n; a += 1)
        (r = Ut.getProp(t, e[a].v, 0, 0, this)),
          (this.k = r.k || this.k),
          (this.dataProps[a] = { n: e[a].n, p: r })
      this.k || this.getValue(!0), (this._isAnimated = this.k)
    }
    function S(t, e) {
      ;(this.data = e), (this.c = Gt('uint8c', 4 * e.p))
      var s = e.k.k[0].s ? e.k.k[0].s.length - 4 * e.p : e.k.k.length - 4 * e.p
      ;(this.o = Gt('float32', s)),
        (this._cmdf = !1),
        (this._omdf = !1),
        (this._collapsable = this.checkCollapsable()),
        (this._hasOpacity = s),
        this.initDynamicPropertyContainer(t),
        (this.prop = Ut.getProp(t, e.k, 1, null, this)),
        (this.k = this.prop.k),
        this.getValue(!0)
    }
    function w(t, e, s) {
      ;(this._isFirstFrame = !0),
        (this._hasMaskedPath = !1),
        (this._frameId = -1),
        (this._textData = t),
        (this._renderType = e),
        (this._elem = s),
        (this._animatorsData = u(this._textData.a.length)),
        (this._pathData = {}),
        (this._moreOptions = { alignment: {} }),
        (this.renderedLetters = []),
        (this.lettersChangedFlag = !1),
        this.initDynamicPropertyContainer(s)
    }
    function T(t, e, s) {
      var i = { propType: !1 },
        a = Ut.getProp,
        r = e.a
      ;(this.a = {
        r: r.r ? a(t, r.r, 0, Bt, s) : i,
        rx: r.rx ? a(t, r.rx, 0, Bt, s) : i,
        ry: r.ry ? a(t, r.ry, 0, Bt, s) : i,
        sk: r.sk ? a(t, r.sk, 0, Bt, s) : i,
        sa: r.sa ? a(t, r.sa, 0, Bt, s) : i,
        s: r.s ? a(t, r.s, 1, 0.01, s) : i,
        a: r.a ? a(t, r.a, 1, 0, s) : i,
        o: r.o ? a(t, r.o, 0, 0.01, s) : i,
        p: r.p ? a(t, r.p, 1, 0, s) : i,
        sw: r.sw ? a(t, r.sw, 0, 0, s) : i,
        sc: r.sc ? a(t, r.sc, 1, 0, s) : i,
        fc: r.fc ? a(t, r.fc, 1, 0, s) : i,
        fh: r.fh ? a(t, r.fh, 0, 0, s) : i,
        fs: r.fs ? a(t, r.fs, 0, 0.01, s) : i,
        fb: r.fb ? a(t, r.fb, 0, 0.01, s) : i,
        t: r.t ? a(t, r.t, 0, 0, s) : i,
      }),
        (this.s = ae.getTextSelectorProp(t, e.s, s)),
        (this.s.t = e.s.t)
    }
    function I(t, e, s, i, a, r) {
      ;(this.o = t),
        (this.sw = e),
        (this.sc = s),
        (this.fc = i),
        (this.m = a),
        (this.p = r),
        (this._mdf = { o: !0, sw: !!e, sc: !!s, fc: !!i, m: !0, p: !0 })
    }
    function L(t, e) {
      ;(this._frameId = Tt),
        (this.pv = ''),
        (this.v = ''),
        (this.kf = !1),
        (this._isFirstFrame = !0),
        (this._mdf = !1),
        (this.data = e),
        (this.elem = t),
        (this.comp = this.elem.comp),
        (this.keysIndex = -1),
        (this.canResize = !1),
        (this.minimumFontSize = 1),
        (this.effectsSequence = []),
        (this.currentData = {
          ascent: 0,
          boxWidth: this.defaultBoxWidth,
          f: '',
          fStyle: '',
          fWeight: '',
          fc: '',
          j: '',
          justifyOffset: '',
          l: [],
          lh: 0,
          lineWidths: [],
          ls: '',
          of: '',
          s: '',
          sc: '',
          sw: 0,
          t: 0,
          tr: 0,
          sz: 0,
          ps: null,
          fillColorAnim: !1,
          strokeColorAnim: !1,
          strokeWidthAnim: !1,
          yOffset: 0,
          finalSize: 0,
          finalText: [],
          finalLineHeight: 0,
          __test: !0,
        }),
        this.copyFromDocumentData(this.data.d.k[0].s),
        this.searchProperty() ||
          (this.completeTextData(this.currentData), (this.keysIndex = 0))
    }
    function z() {}
    function R(t, e) {
      ;(this.animationItem = t),
        (this.layers = null),
        (this.renderedFrame = -1),
        (this.svgElement = g('svg'))
      var s = g('g')
      this.svgElement.appendChild(s), (this.layerElement = s)
      var i = g('defs')
      this.svgElement.appendChild(i),
        (this.renderConfig = {
          preserveAspectRatio: (e && e.preserveAspectRatio) || 'xMidYMid meet',
          progressiveLoad: (e && e.progressiveLoad) || !1,
          hideOnTransparent: !e || e.hideOnTransparent !== !1,
          viewBoxOnly: (e && e.viewBoxOnly) || !1,
          viewBoxSize: (e && e.viewBoxSize) || !1,
          className: (e && e.className) || '',
        }),
        (this.globalData = {
          _mdf: !1,
          frameNum: -1,
          defs: i,
          renderConfig: this.renderConfig,
        }),
        (this.elements = []),
        (this.pendingElements = []),
        (this.destroyed = !1)
    }
    function V(t, e, s) {
      ;(this.data = t),
        (this.element = e),
        (this.globalData = s),
        (this.storedData = []),
        (this.masksProperties = this.data.masksProperties || []),
        (this.maskElement = null)
      var i,
        a = this.globalData.defs,
        r = this.masksProperties ? this.masksProperties.length : 0
      ;(this.viewData = u(r)), (this.solidPath = '')
      var n,
        h,
        l,
        p,
        f,
        m,
        d,
        c = this.masksProperties,
        v = 0,
        y = [],
        b = o(10),
        _ = 'clipPath',
        k = 'clip-path'
      for (i = 0; i < r; i++)
        if (
          ((('a' !== c[i].mode && 'n' !== c[i].mode) ||
            c[i].inv ||
            100 !== c[i].o.k) &&
            ((_ = 'mask'), (k = 'mask')),
          ('s' != c[i].mode && 'i' != c[i].mode) || 0 !== v
            ? (p = null)
            : ((p = g('rect')),
              p.setAttribute('fill', '#ffffff'),
              p.setAttribute('width', this.element.comp.data.w || 0),
              p.setAttribute('height', this.element.comp.data.h || 0),
              y.push(p)),
          (n = g('path')),
          'n' != c[i].mode)
        ) {
          ;(v += 1),
            n.setAttribute('fill', 's' === c[i].mode ? '#000000' : '#ffffff'),
            n.setAttribute('clip-rule', 'nonzero')
          var A
          if (
            (0 !== c[i].x.k
              ? ((_ = 'mask'),
                (k = 'mask'),
                (d = Ut.getProp(this.element, c[i].x, 0, null, this.element)),
                (A = 'fi_' + o(10)),
                (f = g('filter')),
                f.setAttribute('id', A),
                (m = g('feMorphology')),
                m.setAttribute('operator', 'dilate'),
                m.setAttribute('in', 'SourceGraphic'),
                m.setAttribute('radius', '0'),
                f.appendChild(m),
                a.appendChild(f),
                n.setAttribute(
                  'stroke',
                  's' === c[i].mode ? '#000000' : '#ffffff'
                ))
              : ((m = null), (d = null)),
            (this.storedData[i] = {
              elem: n,
              x: d,
              expan: m,
              lastPath: '',
              lastOperator: '',
              filterId: A,
              lastRadius: 0,
            }),
            'i' == c[i].mode)
          ) {
            l = y.length
            var M = g('g')
            for (h = 0; h < l; h += 1) M.appendChild(y[h])
            var P = g('mask')
            P.setAttribute('mask-type', 'alpha'),
              P.setAttribute('id', b + '_' + v),
              P.appendChild(n),
              a.appendChild(P),
              M.setAttribute('mask', 'url(' + wt + '#' + b + '_' + v + ')'),
              (y.length = 0),
              y.push(M)
          } else y.push(n)
          c[i].inv &&
            !this.solidPath &&
            (this.solidPath = this.createLayerSolidPath()),
            (this.viewData[i] = {
              elem: n,
              lastPath: '',
              op: Ut.getProp(this.element, c[i].o, 0, 0.01, this.element),
              prop: Kt.getShapeProp(this.element, c[i], 3),
              invRect: p,
            }),
            this.viewData[i].prop.k ||
              this.drawPath(c[i], this.viewData[i].prop.v, this.viewData[i])
        } else
          (this.viewData[i] = {
            op: Ut.getProp(this.element, c[i].o, 0, 0.01, this.element),
            prop: Kt.getShapeProp(this.element, c[i], 3),
            elem: n,
            lastPath: '',
          }),
            a.appendChild(n)
      for (this.maskElement = g(_), r = y.length, i = 0; i < r; i += 1)
        this.maskElement.appendChild(y[i])
      v > 0 &&
        (this.maskElement.setAttribute('id', b),
        this.element.maskedElement.setAttribute(k, 'url(' + wt + '#' + b + ')'),
        a.appendChild(this.maskElement)),
        this.viewData.length && this.element.addRenderableComponent(this)
    }
    function N() {}
    function O() {}
    function B() {}
    function q() {}
    function j() {}
    function G(t, e) {
      ;(this.elem = t), (this.pos = e)
    }
    function W(t, e) {
      ;(this.data = t),
        (this.type = t.ty),
        (this.d = ''),
        (this.lvl = e),
        (this._mdf = !1),
        (this.closed = !1),
        (this.pElem = g('path')),
        (this.msElem = null)
    }
    function X(t, e, s) {
      ;(this.caches = []),
        (this.styles = []),
        (this.transformers = t),
        (this.lStr = ''),
        (this.sh = s),
        (this.lvl = e),
        (this._isAnimated = !!s.k)
      for (var i = 0, a = t.length; i < a; ) {
        if (t[i].mProps.dynamicProperties.length) {
          this._isAnimated = !0
          break
        }
        i += 1
      }
    }
    function Y(t, e, s) {
      ;(this.transform = { mProps: t, op: e, container: s }),
        (this.elements = []),
        (this._isAnimated =
          this.transform.mProps.dynamicProperties.length ||
          this.transform.op.effectsSequence.length)
    }
    function H(t, e, s) {
      this.initDynamicPropertyContainer(t),
        (this.getValue = this.iterateDynamicProperties),
        (this.o = Ut.getProp(t, e.o, 0, 0.01, this)),
        (this.w = Ut.getProp(t, e.w, 0, null, this)),
        (this.d = new F(t, e.d || {}, 'svg', this)),
        (this.c = Ut.getProp(t, e.c, 1, 255, this)),
        (this.style = s),
        (this._isAnimated = !!this._isAnimated)
    }
    function J(t, e, s) {
      this.initDynamicPropertyContainer(t),
        (this.getValue = this.iterateDynamicProperties),
        (this.o = Ut.getProp(t, e.o, 0, 0.01, this)),
        (this.c = Ut.getProp(t, e.c, 1, 255, this)),
        (this.style = s)
    }
    function U(t, e, s) {
      this.initDynamicPropertyContainer(t),
        (this.getValue = this.iterateDynamicProperties),
        this.initGradientData(t, e, s)
    }
    function Z(t, e, s) {
      this.initDynamicPropertyContainer(t),
        (this.getValue = this.iterateDynamicProperties),
        (this.w = Ut.getProp(t, e.w, 0, null, this)),
        (this.d = new F(t, e.d || {}, 'svg', this)),
        this.initGradientData(t, e, s),
        (this._isAnimated = !!this._isAnimated)
    }
    function K() {
      ;(this.it = []), (this.prevViewData = []), (this.gr = g('g'))
    }
    function Q() {}
    function $(t, e, s) {
      this.initFrame(),
        this.initBaseData(t, e, s),
        this.initFrame(),
        this.initTransform(t, e, s),
        this.initHierarchy()
    }
    function tt() {}
    function et() {}
    function st() {}
    function it() {}
    function at(t, e, s) {
      ;(this.assetData = e.getAssetData(t.refId)), this.initElement(t, e, s)
    }
    function rt(t, e, s) {
      this.initElement(t, e, s)
    }
    function nt(t, e, s) {
      ;(this.layers = t.layers),
        (this.supports3d = !0),
        (this.completeLayers = !1),
        (this.pendingElements = []),
        (this.elements = this.layers ? u(this.layers.length) : []),
        this.initElement(t, e, s),
        (this.tm = t.tm
          ? Ut.getProp(this, t.tm, 0, e.frameRate, this)
          : { _placeholder: !0 })
    }
    function ht(t, e, s) {
      ;(this.textSpans = []),
        (this.renderType = 'svg'),
        this.initElement(t, e, s)
    }
    function ot(t, e, s) {
      ;(this.shapes = []),
        (this.shapesData = t.shapes),
        (this.stylesList = []),
        (this.shapeModifiers = []),
        (this.itemsData = []),
        (this.processedElements = []),
        (this.animatedContents = []),
        this.initElement(t, e, s),
        (this.prevViewData = [])
    }
    function lt(t, e) {
      this.filterManager = e
      var s = g('feColorMatrix')
      if (
        (s.setAttribute('type', 'matrix'),
        s.setAttribute('color-interpolation-filters', 'linearRGB'),
        s.setAttribute(
          'values',
          '0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0'
        ),
        s.setAttribute('result', 'f1'),
        t.appendChild(s),
        (s = g('feColorMatrix')),
        s.setAttribute('type', 'matrix'),
        s.setAttribute('color-interpolation-filters', 'sRGB'),
        s.setAttribute('values', '1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0'),
        s.setAttribute('result', 'f2'),
        t.appendChild(s),
        (this.matrixFilter = s),
        100 !== e.effectElements[2].p.v || e.effectElements[2].p.k)
      ) {
        var i = g('feMerge')
        t.appendChild(i)
        var a
        ;(a = g('feMergeNode')),
          a.setAttribute('in', 'SourceGraphic'),
          i.appendChild(a),
          (a = g('feMergeNode')),
          a.setAttribute('in', 'f2'),
          i.appendChild(a)
      }
    }
    function pt(t, e) {
      this.filterManager = e
      var s = g('feColorMatrix')
      s.setAttribute('type', 'matrix'),
        s.setAttribute('color-interpolation-filters', 'sRGB'),
        s.setAttribute('values', '1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0'),
        t.appendChild(s),
        (this.matrixFilter = s)
    }
    function ft(t, e) {
      ;(this.initialized = !1),
        (this.filterManager = e),
        (this.elem = t),
        (this.paths = [])
    }
    function mt(t, e) {
      this.filterManager = e
      var s = g('feColorMatrix')
      s.setAttribute('type', 'matrix'),
        s.setAttribute('color-interpolation-filters', 'linearRGB'),
        s.setAttribute(
          'values',
          '0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0'
        ),
        s.setAttribute('result', 'f1'),
        t.appendChild(s)
      var i = g('feComponentTransfer')
      i.setAttribute('color-interpolation-filters', 'sRGB'),
        t.appendChild(i),
        (this.matrixFilter = i)
      var a = g('feFuncR')
      a.setAttribute('type', 'table'), i.appendChild(a), (this.feFuncR = a)
      var r = g('feFuncG')
      r.setAttribute('type', 'table'), i.appendChild(r), (this.feFuncG = r)
      var n = g('feFuncB')
      n.setAttribute('type', 'table'), i.appendChild(n), (this.feFuncB = n)
    }
    function dt(t, e) {
      this.filterManager = e
      var s = this.filterManager.effectElements,
        i = g('feComponentTransfer')
      ;(s[10].p.k ||
        0 !== s[10].p.v ||
        s[11].p.k ||
        1 !== s[11].p.v ||
        s[12].p.k ||
        1 !== s[12].p.v ||
        s[13].p.k ||
        0 !== s[13].p.v ||
        s[14].p.k ||
        1 !== s[14].p.v) &&
        (this.feFuncR = this.createFeFunc('feFuncR', i)),
        (s[17].p.k ||
          0 !== s[17].p.v ||
          s[18].p.k ||
          1 !== s[18].p.v ||
          s[19].p.k ||
          1 !== s[19].p.v ||
          s[20].p.k ||
          0 !== s[20].p.v ||
          s[21].p.k ||
          1 !== s[21].p.v) &&
          (this.feFuncG = this.createFeFunc('feFuncG', i)),
        (s[24].p.k ||
          0 !== s[24].p.v ||
          s[25].p.k ||
          1 !== s[25].p.v ||
          s[26].p.k ||
          1 !== s[26].p.v ||
          s[27].p.k ||
          0 !== s[27].p.v ||
          s[28].p.k ||
          1 !== s[28].p.v) &&
          (this.feFuncB = this.createFeFunc('feFuncB', i)),
        (s[31].p.k ||
          0 !== s[31].p.v ||
          s[32].p.k ||
          1 !== s[32].p.v ||
          s[33].p.k ||
          1 !== s[33].p.v ||
          s[34].p.k ||
          0 !== s[34].p.v ||
          s[35].p.k ||
          1 !== s[35].p.v) &&
          (this.feFuncA = this.createFeFunc('feFuncA', i)),
        (this.feFuncR || this.feFuncG || this.feFuncB || this.feFuncA) &&
          (i.setAttribute('color-interpolation-filters', 'sRGB'),
          t.appendChild(i),
          (i = g('feComponentTransfer'))),
        (s[3].p.k ||
          0 !== s[3].p.v ||
          s[4].p.k ||
          1 !== s[4].p.v ||
          s[5].p.k ||
          1 !== s[5].p.v ||
          s[6].p.k ||
          0 !== s[6].p.v ||
          s[7].p.k ||
          1 !== s[7].p.v) &&
          (i.setAttribute('color-interpolation-filters', 'sRGB'),
          t.appendChild(i),
          (this.feFuncRComposed = this.createFeFunc('feFuncR', i)),
          (this.feFuncGComposed = this.createFeFunc('feFuncG', i)),
          (this.feFuncBComposed = this.createFeFunc('feFuncB', i)))
    }
    function ct(t, e) {
      t.setAttribute('x', '-100%'),
        t.setAttribute('y', '-100%'),
        t.setAttribute('width', '400%'),
        t.setAttribute('height', '400%'),
        (this.filterManager = e)
      var s = g('feGaussianBlur')
      s.setAttribute('in', 'SourceAlpha'),
        s.setAttribute('result', 'drop_shadow_1'),
        s.setAttribute('stdDeviation', '0'),
        (this.feGaussianBlur = s),
        t.appendChild(s)
      var i = g('feOffset')
      i.setAttribute('dx', '25'),
        i.setAttribute('dy', '0'),
        i.setAttribute('in', 'drop_shadow_1'),
        i.setAttribute('result', 'drop_shadow_2'),
        (this.feOffset = i),
        t.appendChild(i)
      var a = g('feFlood')
      a.setAttribute('flood-color', '#00ff00'),
        a.setAttribute('flood-opacity', '1'),
        a.setAttribute('result', 'drop_shadow_3'),
        (this.feFlood = a),
        t.appendChild(a)
      var r = g('feComposite')
      r.setAttribute('in', 'drop_shadow_3'),
        r.setAttribute('in2', 'drop_shadow_2'),
        r.setAttribute('operator', 'in'),
        r.setAttribute('result', 'drop_shadow_4'),
        t.appendChild(r)
      var n = g('feMerge')
      t.appendChild(n)
      var h
      ;(h = g('feMergeNode')),
        n.appendChild(h),
        (h = g('feMergeNode')),
        h.setAttribute('in', 'SourceGraphic'),
        (this.feMergeNode = h),
        (this.feMerge = n),
        (this.originalNodeAdded = !1),
        n.appendChild(h)
    }
    function ut(t, e, s) {
      ;(this.initialized = !1),
        (this.filterManager = e),
        (this.filterElem = t),
        (this.elem = s),
        (s.matteElement = g('g')),
        s.matteElement.appendChild(s.layerElement),
        s.matteElement.appendChild(s.transformedElement),
        (s.baseElement = s.matteElement)
    }
    function gt(t) {
      var e,
        s = t.data.ef ? t.data.ef.length : 0,
        i = o(10),
        a = se.createFilter(i),
        r = 0
      this.filters = []
      var n
      for (e = 0; e < s; e += 1)
        (n = null),
          20 === t.data.ef[e].ty
            ? ((r += 1), (n = new lt(a, t.effectsManager.effectElements[e])))
            : 21 === t.data.ef[e].ty
            ? ((r += 1), (n = new pt(a, t.effectsManager.effectElements[e])))
            : 22 === t.data.ef[e].ty
            ? (n = new ft(t, t.effectsManager.effectElements[e]))
            : 23 === t.data.ef[e].ty
            ? ((r += 1), (n = new mt(a, t.effectsManager.effectElements[e])))
            : 24 === t.data.ef[e].ty
            ? ((r += 1), (n = new dt(a, t.effectsManager.effectElements[e])))
            : 25 === t.data.ef[e].ty
            ? ((r += 1), (n = new ct(a, t.effectsManager.effectElements[e])))
            : 28 === t.data.ef[e].ty &&
              (n = new ut(a, t.effectsManager.effectElements[e], t)),
          n && this.filters.push(n)
      r &&
        (t.globalData.defs.appendChild(a),
        t.layerElement.setAttribute('filter', 'url(' + wt + '#' + i + ')')),
        this.filters.length && t.addRenderableComponent(this)
    }
    function vt() {}
    function yt(t) {
      wt = t
    }
    function bt() {
      ye === !0 ? ue.searchAnimations(be, ye, _e) : ue.searchAnimations()
    }
    function _t(t) {
      It = t
    }
    function kt(t) {
      return (
        ye === !0 && (t.animationData = JSON.parse(be)), ue.loadAnimation(t)
      )
    }
    function At(t) {
      if ('string' == typeof t)
        switch (t) {
          case 'high':
            Ot = 200
            break
          case 'medium':
            Ot = 50
            break
          case 'low':
            Ot = 10
        }
      else !isNaN(t) && t > 1 && (Ot = t)
      s(!(Ot >= 50))
    }
    function Mt() {
      return 'undefined' != typeof navigator
    }
    function Pt(t, e) {
      'expressions' === t && (Et = e)
    }
    function Ct(t) {
      switch (t) {
        case 'propertyFactory':
          return Ut
        case 'shapePropertyFactory':
          return Kt
        case 'matrix':
          return Wt
      }
    }
    function Dt() {
      'complete' === document.readyState && (clearInterval(Ce), bt())
    }
    function xt(t) {
      for (var e = Pe.split('&'), s = 0; s < e.length; s++) {
        var i = e[s].split('=')
        if (decodeURIComponent(i[0]) == t) return decodeURIComponent(i[1])
      }
    }
    var Et,
      Ft,
      St = 'http://www.w3.org/2000/svg',
      wt = '',
      Tt = -999999,
      It = !0,
      Lt =
        (/^((?!chrome|android).)*safari/i.test(navigator.userAgent),
        Math.round,
        Math.pow),
      zt = Math.sqrt,
      Rt = (Math.abs, Math.floor),
      Vt = (Math.max, Math.min),
      Nt = {}
    !(function() {
      var t,
        e = Object.getOwnPropertyNames(Math),
        s = e.length
      for (t = 0; t < s; t += 1) Nt[e[t]] = Math[e[t]]
    })(),
      (Nt.random = Math.random),
      (Nt.abs = function(t) {
        var e = typeof t
        if ('object' === e && t.length) {
          var s,
            i = u(t.length),
            a = t.length
          for (s = 0; s < a; s += 1) i[s] = Math.abs(t[s])
          return i
        }
        return Math.abs(t)
      })
    var Ot = 150,
      Bt = Math.PI / 180,
      qt = 0.5519
    s(!1)
    var jt = (function() {
      var t,
        e,
        s = []
      for (t = 0; t < 256; t += 1)
        (e = t.toString(16)), (s[t] = 1 == e.length ? '0' + e : e)
      return function(t, e, i) {
        return (
          t < 0 && (t = 0),
          e < 0 && (e = 0),
          i < 0 && (i = 0),
          '#' + s[t] + s[e] + s[i]
        )
      }
    })()
    c.prototype = {
      triggerEvent: function(t, e) {
        if (this._cbs[t])
          for (var s = this._cbs[t].length, i = 0; i < s; i++)
            this._cbs[t][i](e)
      },
      addEventListener: function(t, e) {
        return (
          this._cbs[t] || (this._cbs[t] = []),
          this._cbs[t].push(e),
          function() {
            this.removeEventListener(t, e)
          }.bind(this)
        )
      },
      removeEventListener: function(t, e) {
        if (e) {
          if (this._cbs[t]) {
            for (var s = 0, i = this._cbs[t].length; s < i; )
              this._cbs[t][s] === e &&
                (this._cbs[t].splice(s, 1), (s -= 1), (i -= 1)),
                (s += 1)
            this._cbs[t].length || (this._cbs[t] = null)
          }
        } else this._cbs[t] = null
      },
    }
    var Gt = (function() {
      function t(t, e) {
        var s,
          i = 0,
          a = []
        switch (t) {
          case 'int16':
          case 'uint8c':
            s = 1
            break
          default:
            s = 1.1
        }
        for (i = 0; i < e; i += 1) a.push(s)
        return a
      }
      function e(t, e) {
        return 'float32' === t
          ? new Float32Array(e)
          : 'int16' === t
          ? new Int16Array(e)
          : 'uint8c' === t
          ? new Uint8ClampedArray(e)
          : void 0
      }
      return 'function' == typeof Uint8ClampedArray &&
        'function' == typeof Float32Array
        ? e
        : t
    })()
    y.prototype = {
      addDynamicProperty: function(t) {
        this.dynamicProperties.indexOf(t) === -1 &&
          (this.dynamicProperties.push(t),
          this.container.addDynamicProperty(this),
          (this._isAnimated = !0))
      },
      iterateDynamicProperties: function() {
        this._mdf = !1
        var t,
          e = this.dynamicProperties.length
        for (t = 0; t < e; t += 1)
          this.dynamicProperties[t].getValue(),
            this.dynamicProperties[t]._mdf && (this._mdf = !0)
      },
      initDynamicPropertyContainer: function(t) {
        ;(this.container = t),
          (this.dynamicProperties = []),
          (this._mdf = !1),
          (this._isAnimated = !1)
      },
    }
    var Wt = (function() {
      function t() {
        return (
          (this.props[0] = 1),
          (this.props[1] = 0),
          (this.props[2] = 0),
          (this.props[3] = 0),
          (this.props[4] = 0),
          (this.props[5] = 1),
          (this.props[6] = 0),
          (this.props[7] = 0),
          (this.props[8] = 0),
          (this.props[9] = 0),
          (this.props[10] = 1),
          (this.props[11] = 0),
          (this.props[12] = 0),
          (this.props[13] = 0),
          (this.props[14] = 0),
          (this.props[15] = 1),
          this
        )
      }
      function e(t) {
        if (0 === t) return this
        var e = E(t),
          s = F(t)
        return this._t(e, -s, 0, 0, s, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
      }
      function s(t) {
        if (0 === t) return this
        var e = E(t),
          s = F(t)
        return this._t(1, 0, 0, 0, 0, e, -s, 0, 0, s, e, 0, 0, 0, 0, 1)
      }
      function i(t) {
        if (0 === t) return this
        var e = E(t),
          s = F(t)
        return this._t(e, 0, s, 0, 0, 1, 0, 0, -s, 0, e, 0, 0, 0, 0, 1)
      }
      function a(t) {
        if (0 === t) return this
        var e = E(t),
          s = F(t)
        return this._t(e, -s, 0, 0, s, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
      }
      function r(t, e) {
        return this._t(1, e, t, 1, 0, 0)
      }
      function n(t, e) {
        return this.shear(S(t), S(e))
      }
      function h(t, e) {
        var s = E(e),
          i = F(e)
        return this._t(s, i, 0, 0, -i, s, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
          ._t(1, 0, 0, 0, S(t), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
          ._t(s, -i, 0, 0, i, s, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
      }
      function o(t, e, s) {
        return (
          (s = isNaN(s) ? 1 : s),
          1 == t && 1 == e && 1 == s
            ? this
            : this._t(t, 0, 0, 0, 0, e, 0, 0, 0, 0, s, 0, 0, 0, 0, 1)
        )
      }
      function l(t, e, s, i, a, r, n, h, o, l, p, f, m, d, c, u) {
        return (
          (this.props[0] = t),
          (this.props[1] = e),
          (this.props[2] = s),
          (this.props[3] = i),
          (this.props[4] = a),
          (this.props[5] = r),
          (this.props[6] = n),
          (this.props[7] = h),
          (this.props[8] = o),
          (this.props[9] = l),
          (this.props[10] = p),
          (this.props[11] = f),
          (this.props[12] = m),
          (this.props[13] = d),
          (this.props[14] = c),
          (this.props[15] = u),
          this
        )
      }
      function p(t, e, s) {
        return (
          (s = s || 0),
          0 !== t || 0 !== e || 0 !== s
            ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t, e, s, 1)
            : this
        )
      }
      function f(t, e, s, i, a, r, n, h, o, l, p, f, m, d, c, u) {
        var g = this.props
        if (
          1 === t &&
          0 === e &&
          0 === s &&
          0 === i &&
          0 === a &&
          1 === r &&
          0 === n &&
          0 === h &&
          0 === o &&
          0 === l &&
          1 === p &&
          0 === f
        )
          return (
            (g[12] = g[12] * t + g[15] * m),
            (g[13] = g[13] * r + g[15] * d),
            (g[14] = g[14] * p + g[15] * c),
            (g[15] = g[15] * u),
            (this._identityCalculated = !1),
            this
          )
        var v = g[0],
          y = g[1],
          b = g[2],
          _ = g[3],
          k = g[4],
          A = g[5],
          M = g[6],
          P = g[7],
          C = g[8],
          D = g[9],
          x = g[10],
          E = g[11],
          F = g[12],
          S = g[13],
          w = g[14],
          T = g[15]
        return (
          (g[0] = v * t + y * a + b * o + _ * m),
          (g[1] = v * e + y * r + b * l + _ * d),
          (g[2] = v * s + y * n + b * p + _ * c),
          (g[3] = v * i + y * h + b * f + _ * u),
          (g[4] = k * t + A * a + M * o + P * m),
          (g[5] = k * e + A * r + M * l + P * d),
          (g[6] = k * s + A * n + M * p + P * c),
          (g[7] = k * i + A * h + M * f + P * u),
          (g[8] = C * t + D * a + x * o + E * m),
          (g[9] = C * e + D * r + x * l + E * d),
          (g[10] = C * s + D * n + x * p + E * c),
          (g[11] = C * i + D * h + x * f + E * u),
          (g[12] = F * t + S * a + w * o + T * m),
          (g[13] = F * e + S * r + w * l + T * d),
          (g[14] = F * s + S * n + w * p + T * c),
          (g[15] = F * i + S * h + w * f + T * u),
          (this._identityCalculated = !1),
          this
        )
      }
      function m() {
        return (
          this._identityCalculated ||
            ((this._identity = !(
              1 !== this.props[0] ||
              0 !== this.props[1] ||
              0 !== this.props[2] ||
              0 !== this.props[3] ||
              0 !== this.props[4] ||
              1 !== this.props[5] ||
              0 !== this.props[6] ||
              0 !== this.props[7] ||
              0 !== this.props[8] ||
              0 !== this.props[9] ||
              1 !== this.props[10] ||
              0 !== this.props[11] ||
              0 !== this.props[12] ||
              0 !== this.props[13] ||
              0 !== this.props[14] ||
              1 !== this.props[15]
            )),
            (this._identityCalculated = !0)),
          this._identity
        )
      }
      function d(t) {
        for (var e = 0; e < 16; ) {
          if (t.props[e] !== this.props[e]) return !1
          e += 1
        }
        return !0
      }
      function c(t) {
        var e
        for (e = 0; e < 16; e += 1) t.props[e] = this.props[e]
      }
      function u(t) {
        var e
        for (e = 0; e < 16; e += 1) this.props[e] = t[e]
      }
      function g(t, e, s) {
        return {
          x:
            t * this.props[0] +
            e * this.props[4] +
            s * this.props[8] +
            this.props[12],
          y:
            t * this.props[1] +
            e * this.props[5] +
            s * this.props[9] +
            this.props[13],
          z:
            t * this.props[2] +
            e * this.props[6] +
            s * this.props[10] +
            this.props[14],
        }
      }
      function v(t, e, s) {
        return (
          t * this.props[0] +
          e * this.props[4] +
          s * this.props[8] +
          this.props[12]
        )
      }
      function y(t, e, s) {
        return (
          t * this.props[1] +
          e * this.props[5] +
          s * this.props[9] +
          this.props[13]
        )
      }
      function b(t, e, s) {
        return (
          t * this.props[2] +
          e * this.props[6] +
          s * this.props[10] +
          this.props[14]
        )
      }
      function _(t) {
        var e = this.props[0] * this.props[5] - this.props[1] * this.props[4],
          s = this.props[5] / e,
          i = -this.props[1] / e,
          a = -this.props[4] / e,
          r = this.props[0] / e,
          n =
            (this.props[4] * this.props[13] - this.props[5] * this.props[12]) /
            e,
          h =
            -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) /
            e
        return [t[0] * s + t[1] * a + n, t[0] * i + t[1] * r + h, 0]
      }
      function k(t) {
        var e,
          s = t.length,
          i = []
        for (e = 0; e < s; e += 1) i[e] = _(t[e])
        return i
      }
      function A(t, e, s) {
        var i = Gt('float32', 6)
        if (this.isIdentity())
          (i[0] = t[0]),
            (i[1] = t[1]),
            (i[2] = e[0]),
            (i[3] = e[1]),
            (i[4] = s[0]),
            (i[5] = s[1])
        else {
          var a = this.props[0],
            r = this.props[1],
            n = this.props[4],
            h = this.props[5],
            o = this.props[12],
            l = this.props[13]
          ;(i[0] = t[0] * a + t[1] * n + o),
            (i[1] = t[0] * r + t[1] * h + l),
            (i[2] = e[0] * a + e[1] * n + o),
            (i[3] = e[0] * r + e[1] * h + l),
            (i[4] = s[0] * a + s[1] * n + o),
            (i[5] = s[0] * r + s[1] * h + l)
        }
        return i
      }
      function M(t, e, s) {
        var i
        return (i = this.isIdentity()
          ? [t, e, s]
          : [
              t * this.props[0] +
                e * this.props[4] +
                s * this.props[8] +
                this.props[12],
              t * this.props[1] +
                e * this.props[5] +
                s * this.props[9] +
                this.props[13],
              t * this.props[2] +
                e * this.props[6] +
                s * this.props[10] +
                this.props[14],
            ])
      }
      function P(t, e) {
        if (this.isIdentity()) return t + ',' + e
        var s = this.props
        return (
          Math.round(100 * (t * s[0] + e * s[4] + s[12])) / 100 +
          ',' +
          Math.round(100 * (t * s[1] + e * s[5] + s[13])) / 100
        )
      }
      function C() {
        for (var t = 0, e = this.props, s = 'matrix3d(', i = 1e4; t < 16; )
          (s += w(e[t] * i) / i), (s += 15 === t ? ')' : ','), (t += 1)
        return s
      }
      function D(t) {
        var e = 1e4
        return (t < 1e-6 && t > 0) || (t > -1e-6 && t < 0) ? w(t * e) / e : t
      }
      function x() {
        var t = this.props,
          e = D(t[0]),
          s = D(t[1]),
          i = D(t[4]),
          a = D(t[5]),
          r = D(t[12]),
          n = D(t[13])
        return (
          'matrix(' + e + ',' + s + ',' + i + ',' + a + ',' + r + ',' + n + ')'
        )
      }
      var E = Math.cos,
        F = Math.sin,
        S = Math.tan,
        w = Math.round
      return function() {
        ;(this.reset = t),
          (this.rotate = e),
          (this.rotateX = s),
          (this.rotateY = i),
          (this.rotateZ = a),
          (this.skew = n),
          (this.skewFromAxis = h),
          (this.shear = r),
          (this.scale = o),
          (this.setTransform = l),
          (this.translate = p),
          (this.transform = f),
          (this.applyToPoint = g),
          (this.applyToX = v),
          (this.applyToY = y),
          (this.applyToZ = b),
          (this.applyToPointArray = M),
          (this.applyToTriplePoints = A),
          (this.applyToPointStringified = P),
          (this.toCSS = C),
          (this.to2dCSS = x),
          (this.clone = c),
          (this.cloneFromProps = u),
          (this.equals = d),
          (this.inversePoints = k),
          (this.inversePoint = _),
          (this._t = this.transform),
          (this.isIdentity = m),
          (this._identity = !0),
          (this._identityCalculated = !1),
          (this.props = Gt('float32', 16)),
          this.reset()
      }
    })()
    !(function(t, e) {
      function s(s, l, p) {
        var d = []
        l = l === !0 ? { entropy: !0 } : l || {}
        var y = n(r(l.entropy ? [s, o(t)] : null === s ? h() : s, 3), d),
          b = new i(d),
          _ = function() {
            for (var t = b.g(m), e = u, s = 0; t < g; )
              (t = (t + s) * f), (e *= f), (s = b.g(1))
            for (; t >= v; ) (t /= 2), (e /= 2), (s >>>= 1)
            return (t + s) / e
          }
        return (
          (_.int32 = function() {
            return 0 | b.g(4)
          }),
          (_.quick = function() {
            return b.g(4) / 4294967296
          }),
          (_['double'] = _),
          n(o(b.S), t),
          (l.pass ||
            p ||
            function(t, s, i, r) {
              return (
                r &&
                  (r.S && a(r, b),
                  (t.state = function() {
                    return a(b, {})
                  })),
                i ? ((e[c] = t), s) : t
              )
            })(_, y, 'global' in l ? l.global : this == e, l.state)
        )
      }
      function i(t) {
        var e,
          s = t.length,
          i = this,
          a = 0,
          r = (i.i = i.j = 0),
          n = (i.S = [])
        for (s || (t = [s++]); a < f; ) n[a] = a++
        for (a = 0; a < f; a++)
          (n[a] = n[(r = y & (r + t[a % s] + (e = n[a])))]), (n[r] = e)
        i.g = function(t) {
          for (var e, s = 0, a = i.i, r = i.j, n = i.S; t--; )
            (e = n[(a = y & (a + 1))]),
              (s = s * f + n[y & ((n[a] = n[(r = y & (r + e))]) + (n[r] = e))])
          return (i.i = a), (i.j = r), s
        }
      }
      function a(t, e) {
        return (e.i = t.i), (e.j = t.j), (e.S = t.S.slice()), e
      }
      function r(t, e) {
        var s,
          i = [],
          a = typeof t
        if (e && 'object' == a)
          for (s in t)
            try {
              i.push(r(t[s], e - 1))
            } catch (n) {}
        return i.length ? i : 'string' == a ? t : t + '\0'
      }
      function n(t, e) {
        for (var s, i = t + '', a = 0; a < i.length; )
          e[y & a] = y & ((s ^= 19 * e[y & a]) + i.charCodeAt(a++))
        return o(e)
      }
      function h() {
        try {
          if (l) return o(l.randomBytes(f))
          var e = new Uint8Array(f)
          return (p.crypto || p.msCrypto).getRandomValues(e), o(e)
        } catch (s) {
          var i = p.navigator,
            a = i && i.plugins
          return [+new Date(), p, a, p.screen, o(t)]
        }
      }
      function o(t) {
        return String.fromCharCode.apply(0, t)
      }
      var l,
        p = this,
        f = 256,
        m = 6,
        d = 52,
        c = 'random',
        u = e.pow(f, m),
        g = e.pow(2, d),
        v = 2 * g,
        y = f - 1
      ;(e['seed' + c] = s), n(e.random(), t)
    })([], Nt)
    var Xt = (function() {
      function t(t, e, s, i, a) {
        var r =
          a || ('bez_' + t + '_' + e + '_' + s + '_' + i).replace(/\./g, 'p')
        if (p[r]) return p[r]
        var n = new o([t, e, s, i])
        return (p[r] = n), n
      }
      function e(t, e) {
        return 1 - 3 * e + 3 * t
      }
      function s(t, e) {
        return 3 * e - 6 * t
      }
      function i(t) {
        return 3 * t
      }
      function a(t, a, r) {
        return ((e(a, r) * t + s(a, r)) * t + i(a)) * t
      }
      function r(t, a, r) {
        return 3 * e(a, r) * t * t + 2 * s(a, r) * t + i(a)
      }
      function n(t, e, s, i, r) {
        var n,
          h,
          o = 0
        do
          (h = e + (s - e) / 2), (n = a(h, i, r) - t), n > 0 ? (s = h) : (e = h)
        while (Math.abs(n) > d && ++o < c)
        return h
      }
      function h(t, e, s, i) {
        for (var n = 0; n < f; ++n) {
          var h = r(e, s, i)
          if (0 === h) return e
          var o = a(e, s, i) - t
          e -= o / h
        }
        return e
      }
      function o(t) {
        ;(this._p = t),
          (this._mSampleValues = v ? new Float32Array(u) : new Array(u)),
          (this._precomputed = !1),
          (this.get = this.get.bind(this))
      }
      var l = {}
      l.getBezierEasing = t
      var p = {},
        f = 4,
        m = 0.001,
        d = 1e-7,
        c = 10,
        u = 11,
        g = 1 / (u - 1),
        v = 'function' == typeof Float32Array
      return (
        (o.prototype = {
          get: function(t) {
            var e = this._p[0],
              s = this._p[1],
              i = this._p[2],
              r = this._p[3]
            return (
              this._precomputed || this._precompute(),
              e === s && i === r
                ? t
                : 0 === t
                ? 0
                : 1 === t
                ? 1
                : a(this._getTForX(t), s, r)
            )
          },
          _precompute: function() {
            var t = this._p[0],
              e = this._p[1],
              s = this._p[2],
              i = this._p[3]
            ;(this._precomputed = !0),
              (t === e && s === i) || this._calcSampleValues()
          },
          _calcSampleValues: function() {
            for (var t = this._p[0], e = this._p[2], s = 0; s < u; ++s)
              this._mSampleValues[s] = a(s * g, t, e)
          },
          _getTForX: function(t) {
            for (
              var e = this._p[0],
                s = this._p[2],
                i = this._mSampleValues,
                a = 0,
                o = 1,
                l = u - 1;
              o !== l && i[o] <= t;
              ++o
            )
              a += g
            --o
            var p = (t - i[o]) / (i[o + 1] - i[o]),
              f = a + p * g,
              d = r(f, e, s)
            return d >= m ? h(t, f, e, s) : 0 === d ? f : n(t, a, a + g, e, s)
          },
        }),
        l
      )
    })()
    !(function() {
      for (
        var e = 0, s = ['ms', 'moz', 'webkit', 'o'], i = 0;
        i < s.length && !t.requestAnimationFrame;
        ++i
      )
        (t.requestAnimationFrame = t[s[i] + 'RequestAnimationFrame']),
          (t.cancelAnimationFrame =
            t[s[i] + 'CancelAnimationFrame'] ||
            t[s[i] + 'CancelRequestAnimationFrame'])
      t.requestAnimationFrame ||
        (t.requestAnimationFrame = function(t, s) {
          var i = new Date().getTime(),
            a = Math.max(0, 16 - (i - e)),
            r = setTimeout(function() {
              t(i + a)
            }, a)
          return (e = i + a), r
        }),
        t.cancelAnimationFrame ||
          (t.cancelAnimationFrame = function(t) {
            clearTimeout(t)
          })
    })()
    var Yt = k(),
      Ht = A(),
      Jt = (function() {
        function e(t, e) {
          var s = v('span')
          s.style.fontFamily = e
          var i = v('span')
          ;(i.innerHTML = 'giItT1WQy@!-/#'),
            (s.style.position = 'absolute'),
            (s.style.left = '-10000px'),
            (s.style.top = '-10000px'),
            (s.style.fontSize = '300px'),
            (s.style.fontVariant = 'normal'),
            (s.style.fontStyle = 'normal'),
            (s.style.fontWeight = 'normal'),
            (s.style.letterSpacing = '0'),
            s.appendChild(i),
            document.body.appendChild(s)
          var a = i.offsetWidth
          return (
            (i.style.fontFamily = t + ', ' + e), { node: i, w: a, parent: s }
          )
        }
        function s() {
          var e,
            i,
            a,
            r = this.fonts.length,
            n = r
          for (e = 0; e < r; e += 1)
            if (this.fonts[e].loaded) n -= 1
            else if (
              't' === this.fonts[e].fOrigin ||
              2 === this.fonts[e].origin
            ) {
              if (t.Typekit && t.Typekit.load && 0 === this.typekitLoaded) {
                this.typekitLoaded = 1
                try {
                  t.Typekit.load({
                    async: !0,
                    active: function() {
                      this.typekitLoaded = 2
                    }.bind(this),
                  })
                } catch (h) {}
              }
              2 === this.typekitLoaded && (this.fonts[e].loaded = !0)
            } else
              'n' === this.fonts[e].fOrigin || 0 === this.fonts[e].origin
                ? (this.fonts[e].loaded = !0)
                : ((i = this.fonts[e].monoCase.node),
                  (a = this.fonts[e].monoCase.w),
                  i.offsetWidth !== a
                    ? ((n -= 1), (this.fonts[e].loaded = !0))
                    : ((i = this.fonts[e].sansCase.node),
                      (a = this.fonts[e].sansCase.w),
                      i.offsetWidth !== a &&
                        ((n -= 1), (this.fonts[e].loaded = !0))),
                  this.fonts[e].loaded &&
                    (this.fonts[e].sansCase.parent.parentNode.removeChild(
                      this.fonts[e].sansCase.parent
                    ),
                    this.fonts[e].monoCase.parent.parentNode.removeChild(
                      this.fonts[e].monoCase.parent
                    )))
          0 !== n && Date.now() - this.initTime < p
            ? setTimeout(s.bind(this), 20)
            : setTimeout(
                function() {
                  this.loaded = !0
                }.bind(this),
                0
              )
        }
        function i(t, e) {
          var s = g('text')
          ;(s.style.fontSize = '100px'),
            s.setAttribute('font-family', e.fFamily),
            s.setAttribute('font-style', e.fStyle),
            s.setAttribute('font-weight', e.fWeight),
            (s.textContent = '1'),
            e.fClass
              ? ((s.style.fontFamily = 'inherit'), (s.className = e.fClass))
              : (s.style.fontFamily = e.fFamily),
            t.appendChild(s)
          var i = v('canvas').getContext('2d')
          return (
            (i.font = e.fWeight + ' ' + e.fStyle + ' 100px ' + e.fFamily), s
          )
        }
        function a(t, a) {
          if (!t) return void (this.loaded = !0)
          if (this.chars) return (this.loaded = !0), void (this.fonts = t.list)
          var r,
            n = t.list,
            h = n.length
          for (r = 0; r < h; r += 1) {
            if (
              ((n[r].loaded = !1),
              (n[r].monoCase = e(n[r].fFamily, 'monospace')),
              (n[r].sansCase = e(n[r].fFamily, 'sans-serif')),
              n[r].fPath)
            ) {
              if ('p' === n[r].fOrigin || 3 === n[r].origin) {
                var o = v('style')
                ;(o.type = 'text/css'),
                  (o.innerHTML =
                    '@font-face {font-family: ' +
                    n[r].fFamily +
                    "; font-style: normal; src: url('" +
                    n[r].fPath +
                    "');}"),
                  a.appendChild(o)
              } else if ('g' === n[r].fOrigin || 1 === n[r].origin) {
                var l = v('link')
                ;(l.type = 'text/css'),
                  (l.rel = 'stylesheet'),
                  (l.href = n[r].fPath),
                  document.body.appendChild(l)
              } else if ('t' === n[r].fOrigin || 2 === n[r].origin) {
                var p = v('script')
                p.setAttribute('src', n[r].fPath), a.appendChild(p)
              }
            } else n[r].loaded = !0
            ;(n[r].helper = i(a, n[r])),
              (n[r].cache = {}),
              this.fonts.push(n[r])
          }
          setTimeout(
            function() {
              s.bind(this)()
            }.bind(this),
            100
          )
        }
        function r(t) {
          if (t) {
            this.chars || (this.chars = [])
            var e,
              s,
              i,
              a = t.length,
              r = this.chars.length
            for (e = 0; e < a; e += 1) {
              for (s = 0, i = !1; s < r; )
                this.chars[s].style === t[e].style &&
                  this.chars[s].fFamily === t[e].fFamily &&
                  this.chars[s].ch === t[e].ch &&
                  (i = !0),
                  (s += 1)
              i || (this.chars.push(t[e]), (r += 1))
            }
          }
        }
        function n(t, e, s) {
          for (var i = 0, a = this.chars.length; i < a; ) {
            if (
              this.chars[i].ch === t &&
              this.chars[i].style === e &&
              this.chars[i].fFamily === s
            )
              return this.chars[i]
            i += 1
          }
          return (
            console &&
              console.warn &&
              console.warn(
                'Missing character from exported characters list: ',
                t,
                e,
                s
              ),
            f
          )
        }
        function h(t, e, s) {
          var i = this.getFontByName(e),
            a = t.charCodeAt(0)
          if (!i.cache[a + 1]) {
            var r = i.helper
            ;(r.textContent = t),
              (i.cache[a + 1] = r.getComputedTextLength() / 100)
          }
          return i.cache[a + 1] * s
        }
        function o(t) {
          for (var e = 0, s = this.fonts.length; e < s; ) {
            if (this.fonts[e].fName === t) return this.fonts[e]
            e += 1
          }
          return this.fonts[0]
        }
        function l() {
          return m
        }
        var p = 5e3,
          f = { w: 0, size: 0, shapes: [] },
          m = []
        m = m.concat([
          2304,
          2305,
          2306,
          2307,
          2362,
          2363,
          2364,
          2364,
          2366,
          2367,
          2368,
          2369,
          2370,
          2371,
          2372,
          2373,
          2374,
          2375,
          2376,
          2377,
          2378,
          2379,
          2380,
          2381,
          2382,
          2383,
          2387,
          2388,
          2389,
          2390,
          2391,
          2402,
          2403,
        ])
        var d = function() {
          ;(this.fonts = []),
            (this.chars = null),
            (this.typekitLoaded = 0),
            (this.loaded = !1),
            (this.initTime = Date.now())
        }
        return (
          (d.getCombinedCharacterCodes = l),
          (d.prototype.addChars = r),
          (d.prototype.addFonts = a),
          (d.prototype.getCharData = n),
          (d.prototype.getFontByName = o),
          (d.prototype.measureText = h),
          d
        )
      })(),
      Ut = (function() {
        function t(t, a) {
          var r,
            n = this.offsetTime
          'multidimensional' === this.propType &&
            (r = Gt('float32', this.pv.length))
          for (
            var h,
              o,
              l = a.lastIndex,
              p = l,
              f = this.keyframes.length - 1,
              m = !0;
            m;

          ) {
            if (
              ((h = this.keyframes[p]),
              (o = this.keyframes[p + 1]),
              p == f - 1 && t >= o.t - n)
            ) {
              h.h && (h = o), (l = 0)
              break
            }
            if (o.t - n > t) {
              l = p
              break
            }
            p < f - 1 ? (p += 1) : ((l = 0), (m = !1))
          }
          var d, c, u, g, v, y
          if (h.to) {
            h.bezierData || Yt.buildBezierData(h)
            var b = h.bezierData
            if (t >= o.t - n || t < h.t - n) {
              var _ = t >= o.t - n ? b.points.length - 1 : 0
              for (c = b.points[_].point.length, d = 0; d < c; d += 1)
                r[d] = b.points[_].point[d]
              a._lastBezierData = null
            } else {
              h.__fnct
                ? (y = h.__fnct)
                : ((y = Xt.getBezierEasing(h.o.x, h.o.y, h.i.x, h.i.y, h.n)
                    .get),
                  (h.__fnct = y)),
                (u = y((t - (h.t - n)) / (o.t - n - (h.t - n))))
              var k,
                A = b.segmentLength * u,
                M =
                  a.lastFrame < t && a._lastBezierData === b
                    ? a._lastAddedLength
                    : 0
              for (
                v =
                  a.lastFrame < t && a._lastBezierData === b ? a._lastPoint : 0,
                  m = !0,
                  g = b.points.length;
                m;

              ) {
                if (
                  ((M += b.points[v].partialLength),
                  0 === A || 0 === u || v == b.points.length - 1)
                ) {
                  for (c = b.points[v].point.length, d = 0; d < c; d += 1)
                    r[d] = b.points[v].point[d]
                  break
                }
                if (A >= M && A < M + b.points[v + 1].partialLength) {
                  for (
                    k = (A - M) / b.points[v + 1].partialLength,
                      c = b.points[v].point.length,
                      d = 0;
                    d < c;
                    d += 1
                  )
                    r[d] =
                      b.points[v].point[d] +
                      (b.points[v + 1].point[d] - b.points[v].point[d]) * k
                  break
                }
                v < g - 1 ? (v += 1) : (m = !1)
              }
              ;(a._lastPoint = v),
                (a._lastAddedLength = M - b.points[v].partialLength),
                (a._lastBezierData = b)
            }
          } else {
            var P, C, D, x, E
            if (((f = h.s.length), this.sh && 1 !== h.h))
              if (t >= o.t - n)
                (r[0] = h.e[0]), (r[1] = h.e[1]), (r[2] = h.e[2])
              else if (t <= h.t - n)
                (r[0] = h.s[0]), (r[1] = h.s[1]), (r[2] = h.s[2])
              else {
                var F = i(h.s),
                  S = i(h.e),
                  w = (t - (h.t - n)) / (o.t - n - (h.t - n))
                s(r, e(F, S, w))
              }
            else
              for (p = 0; p < f; p += 1)
                1 !== h.h &&
                  (t >= o.t - n
                    ? (u = 1)
                    : t < h.t - n
                    ? (u = 0)
                    : (h.o.x.constructor === Array
                        ? (h.__fnct || (h.__fnct = []),
                          h.__fnct[p]
                            ? (y = h.__fnct[p])
                            : ((P = h.o.x[p] || h.o.x[0]),
                              (C = h.o.y[p] || h.o.y[0]),
                              (D = h.i.x[p] || h.i.x[0]),
                              (x = h.i.y[p] || h.i.y[0]),
                              (y = Xt.getBezierEasing(P, C, D, x).get),
                              (h.__fnct[p] = y)))
                        : h.__fnct
                        ? (y = h.__fnct)
                        : ((P = h.o.x),
                          (C = h.o.y),
                          (D = h.i.x),
                          (x = h.i.y),
                          (y = Xt.getBezierEasing(P, C, D, x).get),
                          (h.__fnct = y)),
                      (u = y((t - (h.t - n)) / (o.t - n - (h.t - n)))))),
                  (E = 1 === h.h ? h.s[p] : h.s[p] + (h.e[p] - h.s[p]) * u),
                  1 === f ? (r = E) : (r[p] = E)
          }
          return (a.lastIndex = l), r
        }
        function e(t, e, s) {
          var i,
            a,
            r,
            n,
            h,
            o = [],
            l = t[0],
            p = t[1],
            f = t[2],
            m = t[3],
            d = e[0],
            c = e[1],
            u = e[2],
            g = e[3]
          return (
            (a = l * d + p * c + f * u + m * g),
            a < 0 && ((a = -a), (d = -d), (c = -c), (u = -u), (g = -g)),
            1 - a > 1e-6
              ? ((i = Math.acos(a)),
                (r = Math.sin(i)),
                (n = Math.sin((1 - s) * i) / r),
                (h = Math.sin(s * i) / r))
              : ((n = 1 - s), (h = s)),
            (o[0] = n * l + h * d),
            (o[1] = n * p + h * c),
            (o[2] = n * f + h * u),
            (o[3] = n * m + h * g),
            o
          )
        }
        function s(t, e) {
          var s = e[0],
            i = e[1],
            a = e[2],
            r = e[3],
            n = Math.atan2(2 * i * r - 2 * s * a, 1 - 2 * i * i - 2 * a * a),
            h = Math.asin(2 * s * i + 2 * a * r),
            o = Math.atan2(2 * s * r - 2 * i * a, 1 - 2 * s * s - 2 * a * a)
          ;(t[0] = n / Bt), (t[1] = h / Bt), (t[2] = o / Bt)
        }
        function i(t) {
          var e = t[0] * Bt,
            s = t[1] * Bt,
            i = t[2] * Bt,
            a = Math.cos(e / 2),
            r = Math.cos(s / 2),
            n = Math.cos(i / 2),
            h = Math.sin(e / 2),
            o = Math.sin(s / 2),
            l = Math.sin(i / 2),
            p = a * r * n - h * o * l,
            f = h * o * n + a * r * l,
            m = h * r * n + a * o * l,
            d = a * o * n - h * r * l
          return [f, m, d, p]
        }
        function a() {
          var t = this.comp.renderedFrame - this.offsetTime,
            e = this.keyframes[0].t - this.offsetTime,
            s = this.keyframes[this.keyframes.length - 1].t - this.offsetTime
          if (
            !(
              t === this._caching.lastFrame ||
              (this._caching.lastFrame !== d &&
                ((this._caching.lastFrame >= s && t >= s) ||
                  (this._caching.lastFrame < e && t < e)))
            )
          ) {
            this._caching.lastIndex =
              this._caching.lastFrame < t ? this._caching.lastIndex : 0
            var i = this.interpolateValue(t, this._caching)
            this.pv = i
          }
          return (this._caching.lastFrame = t), this.pv
        }
        function r(t) {
          var e
          if ('unidimensional' === this.propType)
            (e = t * this.mult),
              c(this.v - e) > 1e-5 && ((this.v = e), (this._mdf = !0))
          else
            for (var s = 0, i = this.v.length; s < i; )
              (e = t[s] * this.mult),
                c(this.v[s] - e) > 1e-5 && ((this.v[s] = e), (this._mdf = !0)),
                (s += 1)
        }
        function n() {
          if (
            this.elem.globalData.frameId !== this.frameId &&
            this.effectsSequence.length
          ) {
            if (this.lock) return void this.setVValue(this.pv)
            ;(this.lock = !0), (this._mdf = this._isFirstFrame)
            var t,
              e = this.effectsSequence.length,
              s = this.kf ? this.pv : this.data.k
            for (t = 0; t < e; t += 1) s = this.effectsSequence[t](s)
            this.setVValue(s),
              (this._isFirstFrame = !1),
              (this.lock = !1),
              (this.frameId = this.elem.globalData.frameId)
          }
        }
        function h(t) {
          this.effectsSequence.push(t), this.container.addDynamicProperty(this)
        }
        function o(t, e, s, i) {
          ;(this.propType = 'unidimensional'),
            (this.mult = s || 1),
            (this.data = e),
            (this.v = s ? e.k * s : e.k),
            (this.pv = e.k),
            (this._mdf = !1),
            (this.elem = t),
            (this.container = i),
            (this.comp = t.comp),
            (this.k = !1),
            (this.kf = !1),
            (this.vel = 0),
            (this.effectsSequence = []),
            (this._isFirstFrame = !0),
            (this.getValue = n),
            (this.setVValue = r),
            (this.addEffect = h)
        }
        function l(t, e, s, i) {
          ;(this.propType = 'multidimensional'),
            (this.mult = s || 1),
            (this.data = e),
            (this._mdf = !1),
            (this.elem = t),
            (this.container = i),
            (this.comp = t.comp),
            (this.k = !1),
            (this.kf = !1),
            (this.frameId = -1)
          var a,
            o = e.k.length
          ;(this.v = Gt('float32', o)), (this.pv = Gt('float32', o))
          Gt('float32', o)
          for (this.vel = Gt('float32', o), a = 0; a < o; a += 1)
            (this.v[a] = e.k[a] * this.mult), (this.pv[a] = e.k[a])
          ;(this._isFirstFrame = !0),
            (this.effectsSequence = []),
            (this.getValue = n),
            (this.setVValue = r),
            (this.addEffect = h)
        }
        function p(e, s, i, o) {
          ;(this.propType = 'unidimensional'),
            (this.keyframes = s.k),
            (this.offsetTime = e.data.st),
            (this.frameId = -1),
            (this._caching = { lastFrame: d, lastIndex: 0, value: 0 }),
            (this.k = !0),
            (this.kf = !0),
            (this.data = s),
            (this.mult = i || 1),
            (this.elem = e),
            (this.container = o),
            (this.comp = e.comp),
            (this.v = d),
            (this.pv = d),
            (this._isFirstFrame = !0),
            (this.getValue = n),
            (this.setVValue = r),
            (this.interpolateValue = t),
            (this.effectsSequence = [a.bind(this)]),
            (this.addEffect = h)
        }
        function f(e, s, i, o) {
          this.propType = 'multidimensional'
          var l,
            p,
            f,
            m,
            c,
            u = s.k.length
          for (l = 0; l < u - 1; l += 1)
            s.k[l].to &&
              s.k[l].s &&
              s.k[l].e &&
              ((p = s.k[l].s),
              (f = s.k[l].e),
              (m = s.k[l].to),
              (c = s.k[l].ti),
              ((2 === p.length &&
                (p[0] !== f[0] || p[1] !== f[1]) &&
                Yt.pointOnLine2D(
                  p[0],
                  p[1],
                  f[0],
                  f[1],
                  p[0] + m[0],
                  p[1] + m[1]
                ) &&
                Yt.pointOnLine2D(
                  p[0],
                  p[1],
                  f[0],
                  f[1],
                  f[0] + c[0],
                  f[1] + c[1]
                )) ||
                (3 === p.length &&
                  (p[0] !== f[0] || p[1] !== f[1] || p[2] !== f[2]) &&
                  Yt.pointOnLine3D(
                    p[0],
                    p[1],
                    p[2],
                    f[0],
                    f[1],
                    f[2],
                    p[0] + m[0],
                    p[1] + m[1],
                    p[2] + m[2]
                  ) &&
                  Yt.pointOnLine3D(
                    p[0],
                    p[1],
                    p[2],
                    f[0],
                    f[1],
                    f[2],
                    f[0] + c[0],
                    f[1] + c[1],
                    f[2] + c[2]
                  ))) &&
                ((s.k[l].to = null), (s.k[l].ti = null)),
              p[0] === f[0] &&
                p[1] === f[1] &&
                0 === m[0] &&
                0 === m[1] &&
                0 === c[0] &&
                0 === c[1] &&
                (2 === p.length ||
                  (p[2] === f[2] && 0 === m[2] && 0 === c[2])) &&
                ((s.k[l].to = null), (s.k[l].ti = null)))
          ;(this.effectsSequence = [a.bind(this)]),
            (this.keyframes = s.k),
            (this.offsetTime = e.data.st),
            (this.k = !0),
            (this.kf = !0),
            (this._isFirstFrame = !0),
            (this.mult = i || 1),
            (this.elem = e),
            (this.container = o),
            (this.comp = e.comp),
            (this.getValue = n),
            (this.setVValue = r),
            (this.interpolateValue = t),
            (this.frameId = -1)
          var g = s.k[0].s.length
          for (
            this.v = Gt('float32', g), this.pv = Gt('float32', g), l = 0;
            l < g;
            l += 1
          )
            (this.v[l] = d), (this.pv[l] = d)
          ;(this._caching = {
            lastFrame: d,
            lastIndex: 0,
            value: Gt('float32', g),
          }),
            (this.addEffect = h)
        }
        function m(t, e, s, i, a) {
          var r
          if (0 === e.a) r = 0 === s ? new o(t, e, i, a) : new l(t, e, i, a)
          else if (1 === e.a)
            r = 0 === s ? new p(t, e, i, a) : new f(t, e, i, a)
          else if (e.k.length)
            if ('number' == typeof e.k[0]) r = new l(t, e, i, a)
            else
              switch (s) {
                case 0:
                  r = new p(t, e, i, a)
                  break
                case 1:
                  r = new f(t, e, i, a)
              }
          else r = new o(t, e, i, a)
          return r.effectsSequence.length && a.addDynamicProperty(r), r
        }
        var d = Tt,
          c = Math.abs,
          u = { getProp: m }
        return u
      })(),
      Zt = (function() {
        function t(t) {
          var e = this._mdf
          this.iterateDynamicProperties(),
            (this._mdf = this._mdf || e),
            this.a && t.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]),
            this.s && t.scale(this.s.v[0], this.s.v[1], this.s.v[2]),
            this.sk && t.skewFromAxis(-this.sk.v, this.sa.v),
            this.r
              ? t.rotate(-this.r.v)
              : t
                  .rotateZ(-this.rz.v)
                  .rotateY(this.ry.v)
                  .rotateX(this.rx.v)
                  .rotateZ(-this.or.v[2])
                  .rotateY(this.or.v[1])
                  .rotateX(this.or.v[0]),
            this.data.p.s
              ? this.data.p.z
                ? t.translate(this.px.v, this.py.v, -this.pz.v)
                : t.translate(this.px.v, this.py.v, 0)
              : t.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
        }
        function e(t) {
          if (this.elem.globalData.frameId !== this.frameId) {
            if (
              (this._isDirty &&
                (this.precalculateMatrix(), (this._isDirty = !1)),
              this.iterateDynamicProperties(),
              this._mdf || t)
            ) {
              if (
                (this.v.cloneFromProps(this.pre.props),
                this.appliedTransformations < 1 &&
                  this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]),
                this.appliedTransformations < 2 &&
                  this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]),
                this.sk &&
                  this.appliedTransformations < 3 &&
                  this.v.skewFromAxis(-this.sk.v, this.sa.v),
                this.r && this.appliedTransformations < 4
                  ? this.v.rotate(-this.r.v)
                  : !this.r &&
                    this.appliedTransformations < 4 &&
                    this.v
                      .rotateZ(-this.rz.v)
                      .rotateY(this.ry.v)
                      .rotateX(this.rx.v)
                      .rotateZ(-this.or.v[2])
                      .rotateY(this.or.v[1])
                      .rotateX(this.or.v[0]),
                this.autoOriented && this.p.keyframes && this.p.getValueAtTime)
              ) {
                var e, s
                this.p._caching.lastFrame + this.p.offsetTime <=
                this.p.keyframes[0].t
                  ? ((e = this.p.getValueAtTime(
                      (this.p.keyframes[0].t + 0.01) /
                        this.elem.globalData.frameRate,
                      0
                    )),
                    (s = this.p.getValueAtTime(
                      this.p.keyframes[0].t / this.elem.globalData.frameRate,
                      0
                    )))
                  : this.p._caching.lastFrame + this.p.offsetTime >=
                    this.p.keyframes[this.p.keyframes.length - 1].t
                  ? ((e = this.p.getValueAtTime(
                      this.p.keyframes[this.p.keyframes.length - 1].t /
                        this.elem.globalData.frameRate,
                      0
                    )),
                    (s = this.p.getValueAtTime(
                      (this.p.keyframes[this.p.keyframes.length - 1].t - 0.01) /
                        this.elem.globalData.frameRate,
                      0
                    )))
                  : ((e = this.p.pv),
                    (s = this.p.getValueAtTime(
                      (this.p._caching.lastFrame + this.p.offsetTime - 0.01) /
                        this.elem.globalData.frameRate,
                      this.p.offsetTime
                    ))),
                  this.v.rotate(-Math.atan2(e[1] - s[1], e[0] - s[0]))
              }
              this.data.p.s
                ? this.data.p.z
                  ? this.v.translate(this.px.v, this.py.v, -this.pz.v)
                  : this.v.translate(this.px.v, this.py.v, 0)
                : this.v.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
            }
            this.frameId = this.elem.globalData.frameId
          }
        }
        function s() {
          if (
            !this.a.k &&
            (this.pre.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]),
            (this.appliedTransformations = 1),
            !this.s.effectsSequence.length)
          ) {
            if (
              (this.pre.scale(this.s.v[0], this.s.v[1], this.s.v[2]),
              (this.appliedTransformations = 2),
              this.sk)
            ) {
              if (
                this.sk.effectsSequence.length ||
                this.sa.effectsSequence.length
              )
                return
              this.pre.skewFromAxis(-this.sk.v, this.sa.v),
                (this.appliedTransformations = 3)
            }
            if (this.r) {
              if (this.r.effectsSequence.length) return
              this.pre.rotate(-this.r.v), (this.appliedTransformations = 4)
            } else
              this.rz.effectsSequence.length ||
                this.ry.effectsSequence.length ||
                this.rx.effectsSequence.length ||
                this.or.effectsSequence.length ||
                (this.pre
                  .rotateZ(-this.rz.v)
                  .rotateY(this.ry.v)
                  .rotateX(this.rx.v)
                  .rotateZ(-this.or.v[2])
                  .rotateY(this.or.v[1])
                  .rotateX(this.or.v[0]),
                (this.appliedTransformations = 4))
          }
        }
        function i() {}
        function a(t) {
          this._addDynamicProperty(t),
            this.elem.addDynamicProperty(t),
            (this._isDirty = !0)
        }
        function r(t, e, s) {
          if (
            ((this.elem = t),
            (this.frameId = -1),
            (this.propType = 'transform'),
            (this.data = e),
            (this.v = new Wt()),
            (this.pre = new Wt()),
            (this.appliedTransformations = 0),
            this.initDynamicPropertyContainer(s || t),
            e.p.s
              ? ((this.px = Ut.getProp(t, e.p.x, 0, 0, this)),
                (this.py = Ut.getProp(t, e.p.y, 0, 0, this)),
                e.p.z && (this.pz = Ut.getProp(t, e.p.z, 0, 0, this)))
              : (this.p = Ut.getProp(t, e.p, 1, 0, this)),
            e.r)
          )
            this.r = Ut.getProp(t, e.r, 0, Bt, this)
          else if (e.rx) {
            if (
              ((this.rx = Ut.getProp(t, e.rx, 0, Bt, this)),
              (this.ry = Ut.getProp(t, e.ry, 0, Bt, this)),
              (this.rz = Ut.getProp(t, e.rz, 0, Bt, this)),
              e.or.k[0].ti)
            ) {
              var i,
                a = e.or.k.length
              for (i = 0; i < a; i += 1) e.or.k[i].to = e.or.k[i].ti = null
            }
            ;(this.or = Ut.getProp(t, e.or, 1, Bt, this)), (this.or.sh = !0)
          }
          e.sk &&
            ((this.sk = Ut.getProp(t, e.sk, 0, Bt, this)),
            (this.sa = Ut.getProp(t, e.sa, 0, Bt, this))),
            e.a && (this.a = Ut.getProp(t, e.a, 1, 0, this)),
            e.s && (this.s = Ut.getProp(t, e.s, 1, 0.01, this)),
            e.o
              ? (this.o = Ut.getProp(t, e.o, 0, 0.01, t))
              : (this.o = { _mdf: !1, v: 1 }),
            (this._isDirty = !0),
            this.dynamicProperties.length || this.getValue(!0)
        }
        function n(t, e, s) {
          return new r(t, e, s)
        }
        return (
          (r.prototype = {
            applyToMatrix: t,
            getValue: e,
            precalculateMatrix: s,
            autoOrient: i,
          }),
          b([y], r),
          (r.prototype.addDynamicProperty = a),
          (r.prototype._addDynamicProperty = y.prototype.addDynamicProperty),
          { getTransformProperty: n }
        )
      })()
    ;(M.prototype.setPathData = function(t, e) {
      ;(this.c = t), this.setLength(e)
      for (var s = 0; s < e; )
        (this.v[s] = he.newElement()),
          (this.o[s] = he.newElement()),
          (this.i[s] = he.newElement()),
          (s += 1)
    }),
      (M.prototype.setLength = function(t) {
        for (; this._maxLength < t; ) this.doubleArrayLength()
        this._length = t
      }),
      (M.prototype.doubleArrayLength = function() {
        ;(this.v = this.v.concat(u(this._maxLength))),
          (this.i = this.i.concat(u(this._maxLength))),
          (this.o = this.o.concat(u(this._maxLength))),
          (this._maxLength *= 2)
      }),
      (M.prototype.setXYAt = function(t, e, s, i, a) {
        var r
        switch (
          ((this._length = Math.max(this._length, i + 1)),
          this._length >= this._maxLength && this.doubleArrayLength(),
          s)
        ) {
          case 'v':
            r = this.v
            break
          case 'i':
            r = this.i
            break
          case 'o':
            r = this.o
        }
        ;(!r[i] || (r[i] && !a)) && (r[i] = he.newElement()),
          (r[i][0] = t),
          (r[i][1] = e)
      }),
      (M.prototype.setTripleAt = function(t, e, s, i, a, r, n, h) {
        this.setXYAt(t, e, 'v', n, h),
          this.setXYAt(s, i, 'o', n, h),
          this.setXYAt(a, r, 'i', n, h)
      }),
      (M.prototype.reverse = function() {
        var t = new M()
        t.setPathData(this.c, this._length)
        var e = this.v,
          s = this.o,
          i = this.i,
          a = 0
        this.c &&
          (t.setTripleAt(
            e[0][0],
            e[0][1],
            i[0][0],
            i[0][1],
            s[0][0],
            s[0][1],
            0,
            !1
          ),
          (a = 1))
        var r,
          n = this._length - 1,
          h = this._length
        for (r = a; r < h; r += 1)
          t.setTripleAt(
            e[n][0],
            e[n][1],
            i[n][0],
            i[n][1],
            s[n][0],
            s[n][1],
            r,
            !1
          ),
            (n -= 1)
        return t
      })
    var Kt = (function() {
        function t(t, e, s) {
          var i,
            a,
            r,
            n,
            h,
            o,
            l,
            p,
            f,
            m = s.lastIndex,
            d = this.keyframes
          if (t < d[0].t - this.offsetTime) (i = d[0].s[0]), (r = !0), (m = 0)
          else if (t >= d[d.length - 1].t - this.offsetTime)
            (i =
              1 === d[d.length - 2].h
                ? d[d.length - 1].s[0]
                : d[d.length - 2].e[0]),
              (r = !0)
          else {
            for (
              var c, u, g = m, v = d.length - 1, y = !0;
              y && ((c = d[g]), (u = d[g + 1]), !(u.t - this.offsetTime > t));

            )
              g < v - 1 ? (g += 1) : (y = !1)
            if (((r = 1 === c.h), (m = g), !r)) {
              if (t >= u.t - this.offsetTime) p = 1
              else if (t < c.t - this.offsetTime) p = 0
              else {
                var b
                c.__fnct
                  ? (b = c.__fnct)
                  : ((b = Xt.getBezierEasing(c.o.x, c.o.y, c.i.x, c.i.y).get),
                    (c.__fnct = b)),
                  (p = b(
                    (t - (c.t - this.offsetTime)) /
                      (u.t - this.offsetTime - (c.t - this.offsetTime))
                  ))
              }
              a = c.e[0]
            }
            i = c.s[0]
          }
          for (
            o = e._length, l = i.i[0].length, s.lastIndex = m, n = 0;
            n < o;
            n += 1
          )
            for (h = 0; h < l; h += 1)
              (f = r ? i.i[n][h] : i.i[n][h] + (a.i[n][h] - i.i[n][h]) * p),
                (e.i[n][h] = f),
                (f = r ? i.o[n][h] : i.o[n][h] + (a.o[n][h] - i.o[n][h]) * p),
                (e.o[n][h] = f),
                (f = r ? i.v[n][h] : i.v[n][h] + (a.v[n][h] - i.v[n][h]) * p),
                (e.v[n][h] = f)
        }
        function e() {
          var t = this.comp.renderedFrame - this.offsetTime,
            e = this.keyframes[0].t - this.offsetTime,
            s = this.keyframes[this.keyframes.length - 1].t - this.offsetTime,
            i = this._caching.lastFrame
          return (
            (i !== f && ((i < e && t < e) || (i > s && t > s))) ||
              ((this._caching.lastIndex = i < t ? this._caching.lastIndex : 0),
              this.interpolateShape(t, this.pv, this._caching)),
            (this._caching.lastFrame = t),
            this.pv
          )
        }
        function s() {
          this.paths = this.localShapeCollection
        }
        function i(t, e) {
          if (t._length !== e._length || t.c !== e.c) return !1
          var s,
            i = t._length
          for (s = 0; s < i; s += 1)
            if (
              t.v[s][0] !== e.v[s][0] ||
              t.v[s][1] !== e.v[s][1] ||
              t.o[s][0] !== e.o[s][0] ||
              t.o[s][1] !== e.o[s][1] ||
              t.i[s][0] !== e.i[s][0] ||
              t.i[s][1] !== e.i[s][1]
            )
              return !1
          return !0
        }
        function a() {
          if (!this.lock && this.elem.globalData.frameId !== this.frameId) {
            ;(this.lock = !0),
              (this.frameId = this.elem.globalData.frameId),
              (this._mdf = !1)
            var t,
              e = this.kf
                ? this.pv
                : this.data.ks
                ? this.data.ks.k
                : this.data.pt.k,
              s = this.effectsSequence.length
            for (t = 0; t < s; t += 1) e = this.effectsSequence[t](e)
            i(this.v, e) ||
              ((this.v = oe.clone(e)),
              this.localShapeCollection.releaseShapes(),
              this.localShapeCollection.addShape(this.v),
              (this._mdf = !0),
              (this.paths = this.localShapeCollection)),
              (this.lock = !1)
          }
        }
        function r(t, e, i) {
          ;(this.propType = 'shape'),
            (this.comp = t.comp),
            (this.container = t),
            (this.elem = t),
            (this.data = e),
            (this.k = !1),
            (this.kf = !1),
            (this._mdf = !1)
          var a = 3 === i ? e.pt.k : e.ks.k
          ;(this.v = oe.clone(a)),
            (this.pv = oe.clone(this.v)),
            (this.localShapeCollection = le.newShapeCollection()),
            (this.paths = this.localShapeCollection),
            this.paths.addShape(this.v),
            (this.reset = s),
            (this.effectsSequence = [])
        }
        function n(t) {
          this.effectsSequence.push(t), this.container.addDynamicProperty(this)
        }
        function h(t, i, a) {
          ;(this.propType = 'shape'),
            (this.comp = t.comp),
            (this.elem = t),
            (this.container = t),
            (this.offsetTime = t.data.st),
            (this.keyframes = 3 === a ? i.pt.k : i.ks.k),
            (this.k = !0),
            (this.kf = !0)
          var r = this.keyframes[0].s[0].i.length
          this.keyframes[0].s[0].i[0].length
          ;(this.v = oe.newElement()),
            this.v.setPathData(this.keyframes[0].s[0].c, r),
            (this.pv = oe.clone(this.v)),
            (this.localShapeCollection = le.newShapeCollection()),
            (this.paths = this.localShapeCollection),
            this.paths.addShape(this.v),
            (this.lastFrame = f),
            (this.reset = s),
            (this._caching = { lastFrame: f, lastIndex: 0 }),
            (this.effectsSequence = [e.bind(this)])
        }
        function o(t, e, s) {
          var i
          if (3 === s || 4 === s) {
            var a = 3 === s ? e.pt : e.ks,
              n = a.k
            i = 1 === a.a || n.length ? new h(t, e, s) : new r(t, e, s)
          } else
            5 === s
              ? (i = new c(t, e))
              : 6 === s
              ? (i = new m(t, e))
              : 7 === s && (i = new d(t, e))
          return i.k && t.addDynamicProperty(i), i
        }
        function l() {
          return r
        }
        function p() {
          return h
        }
        var f = -999999
        ;(r.prototype.interpolateShape = t),
          (r.prototype.getValue = a),
          (r.prototype.getValue = a),
          (r.prototype.addEffect = n),
          (h.prototype.getValue = a),
          (h.prototype.interpolateShape = t),
          (h.prototype.addEffect = n)
        var m = (function() {
            function t(t, e) {
              ;(this.v = oe.newElement()),
                this.v.setPathData(!0, 4),
                (this.localShapeCollection = le.newShapeCollection()),
                (this.paths = this.localShapeCollection),
                this.localShapeCollection.addShape(this.v),
                (this.d = e.d),
                (this.elem = t),
                (this.comp = t.comp),
                (this.frameId = -1),
                this.initDynamicPropertyContainer(t),
                (this.p = Ut.getProp(t, e.p, 1, 0, this)),
                (this.s = Ut.getProp(t, e.s, 1, 0, this)),
                this.dynamicProperties.length
                  ? (this.k = !0)
                  : ((this.k = !1), this.convertEllToPath())
            }
            var e = qt
            return (
              (t.prototype = {
                reset: s,
                getValue: function() {
                  this.elem.globalData.frameId !== this.frameId &&
                    ((this.frameId = this.elem.globalData.frameId),
                    this.iterateDynamicProperties(),
                    this._mdf && this.convertEllToPath())
                },
                convertEllToPath: function() {
                  var t = this.p.v[0],
                    s = this.p.v[1],
                    i = this.s.v[0] / 2,
                    a = this.s.v[1] / 2,
                    r = 3 !== this.d,
                    n = this.v
                  ;(n.v[0][0] = t),
                    (n.v[0][1] = s - a),
                    (n.v[1][0] = r ? t + i : t - i),
                    (n.v[1][1] = s),
                    (n.v[2][0] = t),
                    (n.v[2][1] = s + a),
                    (n.v[3][0] = r ? t - i : t + i),
                    (n.v[3][1] = s),
                    (n.i[0][0] = r ? t - i * e : t + i * e),
                    (n.i[0][1] = s - a),
                    (n.i[1][0] = r ? t + i : t - i),
                    (n.i[1][1] = s - a * e),
                    (n.i[2][0] = r ? t + i * e : t - i * e),
                    (n.i[2][1] = s + a),
                    (n.i[3][0] = r ? t - i : t + i),
                    (n.i[3][1] = s + a * e),
                    (n.o[0][0] = r ? t + i * e : t - i * e),
                    (n.o[0][1] = s - a),
                    (n.o[1][0] = r ? t + i : t - i),
                    (n.o[1][1] = s + a * e),
                    (n.o[2][0] = r ? t - i * e : t + i * e),
                    (n.o[2][1] = s + a),
                    (n.o[3][0] = r ? t - i : t + i),
                    (n.o[3][1] = s - a * e)
                },
              }),
              b([y], t),
              t
            )
          })(),
          d = (function() {
            function t(t, e) {
              ;(this.v = oe.newElement()),
                this.v.setPathData(!0, 0),
                (this.elem = t),
                (this.comp = t.comp),
                (this.data = e),
                (this.frameId = -1),
                (this.d = e.d),
                this.initDynamicPropertyContainer(t),
                1 === e.sy
                  ? ((this.ir = Ut.getProp(t, e.ir, 0, 0, this)),
                    (this.is = Ut.getProp(t, e.is, 0, 0.01, this)),
                    (this.convertToPath = this.convertStarToPath))
                  : (this.convertToPath = this.convertPolygonToPath),
                (this.pt = Ut.getProp(t, e.pt, 0, 0, this)),
                (this.p = Ut.getProp(t, e.p, 1, 0, this)),
                (this.r = Ut.getProp(t, e.r, 0, Bt, this)),
                (this.or = Ut.getProp(t, e.or, 0, 0, this)),
                (this.os = Ut.getProp(t, e.os, 0, 0.01, this)),
                (this.localShapeCollection = le.newShapeCollection()),
                this.localShapeCollection.addShape(this.v),
                (this.paths = this.localShapeCollection),
                this.dynamicProperties.length
                  ? (this.k = !0)
                  : ((this.k = !1), this.convertToPath())
            }
            return (
              (t.prototype = {
                reset: s,
                getValue: function() {
                  this.elem.globalData.frameId !== this.frameId &&
                    ((this.frameId = this.elem.globalData.frameId),
                    this.iterateDynamicProperties(),
                    this._mdf && this.convertToPath())
                },
                convertStarToPath: function() {
                  var t,
                    e,
                    s,
                    i,
                    a = 2 * Math.floor(this.pt.v),
                    r = (2 * Math.PI) / a,
                    n = !0,
                    h = this.or.v,
                    o = this.ir.v,
                    l = this.os.v,
                    p = this.is.v,
                    f = (2 * Math.PI * h) / (2 * a),
                    m = (2 * Math.PI * o) / (2 * a),
                    d = -Math.PI / 2
                  d += this.r.v
                  var c = 3 === this.data.d ? -1 : 1
                  for (this.v._length = 0, t = 0; t < a; t += 1) {
                    ;(e = n ? h : o), (s = n ? l : p), (i = n ? f : m)
                    var u = e * Math.cos(d),
                      g = e * Math.sin(d),
                      v = 0 === u && 0 === g ? 0 : g / Math.sqrt(u * u + g * g),
                      y = 0 === u && 0 === g ? 0 : -u / Math.sqrt(u * u + g * g)
                    ;(u += +this.p.v[0]),
                      (g += +this.p.v[1]),
                      this.v.setTripleAt(
                        u,
                        g,
                        u - v * i * s * c,
                        g - y * i * s * c,
                        u + v * i * s * c,
                        g + y * i * s * c,
                        t,
                        !0
                      ),
                      (n = !n),
                      (d += r * c)
                  }
                },
                convertPolygonToPath: function() {
                  var t,
                    e = Math.floor(this.pt.v),
                    s = (2 * Math.PI) / e,
                    i = this.or.v,
                    a = this.os.v,
                    r = (2 * Math.PI * i) / (4 * e),
                    n = -Math.PI / 2,
                    h = 3 === this.data.d ? -1 : 1
                  for (
                    n += this.r.v, this.v._length = 0, t = 0;
                    t < e;
                    t += 1
                  ) {
                    var o = i * Math.cos(n),
                      l = i * Math.sin(n),
                      p = 0 === o && 0 === l ? 0 : l / Math.sqrt(o * o + l * l),
                      f = 0 === o && 0 === l ? 0 : -o / Math.sqrt(o * o + l * l)
                    ;(o += +this.p.v[0]),
                      (l += +this.p.v[1]),
                      this.v.setTripleAt(
                        o,
                        l,
                        o - p * r * a * h,
                        l - f * r * a * h,
                        o + p * r * a * h,
                        l + f * r * a * h,
                        t,
                        !0
                      ),
                      (n += s * h)
                  }
                  ;(this.paths.length = 0), (this.paths[0] = this.v)
                },
              }),
              b([y], t),
              t
            )
          })(),
          c = (function() {
            function t(t, e) {
              ;(this.v = oe.newElement()),
                (this.v.c = !0),
                (this.localShapeCollection = le.newShapeCollection()),
                this.localShapeCollection.addShape(this.v),
                (this.paths = this.localShapeCollection),
                (this.elem = t),
                (this.comp = t.comp),
                (this.frameId = -1),
                (this.d = e.d),
                this.initDynamicPropertyContainer(t),
                (this.p = Ut.getProp(t, e.p, 1, 0, this)),
                (this.s = Ut.getProp(t, e.s, 1, 0, this)),
                (this.r = Ut.getProp(t, e.r, 0, 0, this)),
                this.dynamicProperties.length
                  ? (this.k = !0)
                  : ((this.k = !1), this.convertRectToPath())
            }
            return (
              (t.prototype = {
                convertRectToPath: function() {
                  var t = this.p.v[0],
                    e = this.p.v[1],
                    s = this.s.v[0] / 2,
                    i = this.s.v[1] / 2,
                    a = Vt(s, i, this.r.v),
                    r = a * (1 - qt)
                  ;(this.v._length = 0),
                    2 === this.d || 1 === this.d
                      ? (this.v.setTripleAt(
                          t + s,
                          e - i + a,
                          t + s,
                          e - i + a,
                          t + s,
                          e - i + r,
                          0,
                          !0
                        ),
                        this.v.setTripleAt(
                          t + s,
                          e + i - a,
                          t + s,
                          e + i - r,
                          t + s,
                          e + i - a,
                          1,
                          !0
                        ),
                        0 !== a
                          ? (this.v.setTripleAt(
                              t + s - a,
                              e + i,
                              t + s - a,
                              e + i,
                              t + s - r,
                              e + i,
                              2,
                              !0
                            ),
                            this.v.setTripleAt(
                              t - s + a,
                              e + i,
                              t - s + r,
                              e + i,
                              t - s + a,
                              e + i,
                              3,
                              !0
                            ),
                            this.v.setTripleAt(
                              t - s,
                              e + i - a,
                              t - s,
                              e + i - a,
                              t - s,
                              e + i - r,
                              4,
                              !0
                            ),
                            this.v.setTripleAt(
                              t - s,
                              e - i + a,
                              t - s,
                              e - i + r,
                              t - s,
                              e - i + a,
                              5,
                              !0
                            ),
                            this.v.setTripleAt(
                              t - s + a,
                              e - i,
                              t - s + a,
                              e - i,
                              t - s + r,
                              e - i,
                              6,
                              !0
                            ),
                            this.v.setTripleAt(
                              t + s - a,
                              e - i,
                              t + s - r,
                              e - i,
                              t + s - a,
                              e - i,
                              7,
                              !0
                            ))
                          : (this.v.setTripleAt(
                              t - s,
                              e + i,
                              t - s + r,
                              e + i,
                              t - s,
                              e + i,
                              2
                            ),
                            this.v.setTripleAt(
                              t - s,
                              e - i,
                              t - s,
                              e - i + r,
                              t - s,
                              e - i,
                              3
                            )))
                      : (this.v.setTripleAt(
                          t + s,
                          e - i + a,
                          t + s,
                          e - i + r,
                          t + s,
                          e - i + a,
                          0,
                          !0
                        ),
                        0 !== a
                          ? (this.v.setTripleAt(
                              t + s - a,
                              e - i,
                              t + s - a,
                              e - i,
                              t + s - r,
                              e - i,
                              1,
                              !0
                            ),
                            this.v.setTripleAt(
                              t - s + a,
                              e - i,
                              t - s + r,
                              e - i,
                              t - s + a,
                              e - i,
                              2,
                              !0
                            ),
                            this.v.setTripleAt(
                              t - s,
                              e - i + a,
                              t - s,
                              e - i + a,
                              t - s,
                              e - i + r,
                              3,
                              !0
                            ),
                            this.v.setTripleAt(
                              t - s,
                              e + i - a,
                              t - s,
                              e + i - r,
                              t - s,
                              e + i - a,
                              4,
                              !0
                            ),
                            this.v.setTripleAt(
                              t - s + a,
                              e + i,
                              t - s + a,
                              e + i,
                              t - s + r,
                              e + i,
                              5,
                              !0
                            ),
                            this.v.setTripleAt(
                              t + s - a,
                              e + i,
                              t + s - r,
                              e + i,
                              t + s - a,
                              e + i,
                              6,
                              !0
                            ),
                            this.v.setTripleAt(
                              t + s,
                              e + i - a,
                              t + s,
                              e + i - a,
                              t + s,
                              e + i - r,
                              7,
                              !0
                            ))
                          : (this.v.setTripleAt(
                              t - s,
                              e - i,
                              t - s + r,
                              e - i,
                              t - s,
                              e - i,
                              1,
                              !0
                            ),
                            this.v.setTripleAt(
                              t - s,
                              e + i,
                              t - s,
                              e + i - r,
                              t - s,
                              e + i,
                              2,
                              !0
                            ),
                            this.v.setTripleAt(
                              t + s,
                              e + i,
                              t + s - r,
                              e + i,
                              t + s,
                              e + i,
                              3,
                              !0
                            )))
                },
                getValue: function(t) {
                  this.elem.globalData.frameId !== this.frameId &&
                    ((this.frameId = this.elem.globalData.frameId),
                    this.iterateDynamicProperties(),
                    this._mdf && this.convertRectToPath())
                },
                reset: s,
              }),
              b([y], t),
              t
            )
          })(),
          u = {}
        return (
          (u.getShapeProp = o),
          (u.getConstructorFunction = l),
          (u.getKeyframedConstructorFunction = p),
          u
        )
      })(),
      Qt = (function() {
        function t(t, e) {
          i[t] || (i[t] = e)
        }
        function e(t, e, s) {
          return new i[t](e, s)
        }
        var s = {},
          i = {}
        return (s.registerModifier = t), (s.getModifier = e), s
      })()
    ;(P.prototype.initModifierProperties = function() {}),
      (P.prototype.addShapeToModifier = function() {}),
      (P.prototype.addShape = function(t) {
        if (!this.closed) {
          var e = {
            shape: t.sh,
            data: t,
            localShapeCollection: le.newShapeCollection(),
          }
          this.shapes.push(e),
            this.addShapeToModifier(e),
            this._isAnimated && t.setAsAnimated()
        }
      }),
      (P.prototype.init = function(t, e) {
        ;(this.shapes = []),
          (this.elem = t),
          this.initDynamicPropertyContainer(t),
          this.initModifierProperties(t, e),
          (this.frameId = Tt),
          (this.closed = !1),
          (this.k = !1),
          this.dynamicProperties.length ? (this.k = !0) : this.getValue(!0)
      }),
      (P.prototype.processKeys = function() {
        this.elem.globalData.frameId !== this.frameId &&
          ((this.frameId = this.elem.globalData.frameId),
          this.iterateDynamicProperties())
      }),
      b([y], P),
      b([P], C),
      (C.prototype.initModifierProperties = function(t, e) {
        ;(this.s = Ut.getProp(t, e.s, 0, 0.01, this)),
          (this.e = Ut.getProp(t, e.e, 0, 0.01, this)),
          (this.o = Ut.getProp(t, e.o, 0, 0, this)),
          (this.sValue = 0),
          (this.eValue = 0),
          (this.getValue = this.processKeys),
          (this.m = e.m),
          (this._isAnimated =
            !!this.s.effectsSequence.length ||
            !!this.e.effectsSequence.length ||
            !!this.o.effectsSequence.length)
      }),
      (C.prototype.addShapeToModifier = function(t) {
        t.pathsData = []
      }),
      (C.prototype.calculateShapeEdges = function(t, e, s, i, a) {
        var r = []
        e <= 1
          ? r.push({ s: t, e: e })
          : t >= 1
          ? r.push({ s: t - 1, e: e - 1 })
          : (r.push({ s: t, e: 1 }), r.push({ s: 0, e: e - 1 }))
        var n,
          h,
          o = [],
          l = r.length
        for (n = 0; n < l; n += 1)
          if (((h = r[n]), h.e * a < i || h.s * a > i + s));
          else {
            var p, f
            ;(p = h.s * a <= i ? 0 : (h.s * a - i) / s),
              (f = h.e * a >= i + s ? 1 : (h.e * a - i) / s),
              o.push([p, f])
          }
        return o.length || o.push([0, 0]), o
      }),
      (C.prototype.releasePathsData = function(t) {
        var e,
          s = t.length
        for (e = 0; e < s; e += 1) pe.release(t[e])
        return (t.length = 0), t
      }),
      (C.prototype.processShapes = function(t) {
        var e, s
        if (this._mdf || t) {
          var i = (this.o.v % 360) / 360
          if (
            (i < 0 && (i += 1), (e = this.s.v + i), (s = this.e.v + i), e > s)
          ) {
            var a = e
            ;(e = s), (s = a)
          }
          ;(e = Math.round(1e3 * e) / 1e3),
            (s = Math.round(1e3 * s) / 1e3),
            (this.sValue = e),
            (this.eValue = s)
        } else (e = this.sValue), (s = this.eValue)
        var r,
          n,
          h,
          o,
          l,
          p,
          f,
          m = this.shapes.length,
          d = 0
        if (s === e)
          for (n = 0; n < m; n += 1)
            this.shapes[n].localShapeCollection.releaseShapes(),
              (this.shapes[n].shape._mdf = !0),
              (this.shapes[n].shape.paths = this.shapes[n].localShapeCollection)
        else if ((1 === s && 0 === e) || (0 === s && 1 === e)) {
          if (this._mdf)
            for (n = 0; n < m; n += 1) this.shapes[n].shape._mdf = !0
        } else {
          var c,
            u,
            g = []
          for (n = 0; n < m; n += 1)
            if (
              ((c = this.shapes[n]),
              c.shape._mdf || this._mdf || t || 2 === this.m)
            ) {
              if (
                ((r = c.shape.paths),
                (o = r._length),
                (f = 0),
                !c.shape._mdf && c.pathsData.length)
              )
                f = c.totalShapeLength
              else {
                for (
                  l = this.releasePathsData(c.pathsData), h = 0;
                  h < o;
                  h += 1
                )
                  (p = Yt.getSegmentsLength(r.shapes[h])),
                    l.push(p),
                    (f += p.totalLength)
                ;(c.totalShapeLength = f), (c.pathsData = l)
              }
              ;(d += f), (c.shape._mdf = !0)
            } else c.shape.paths = c.localShapeCollection
          var v,
            y = e,
            b = s,
            _ = 0
          for (n = m - 1; n >= 0; n -= 1)
            if (((c = this.shapes[n]), c.shape._mdf)) {
              for (
                u = c.localShapeCollection,
                  u.releaseShapes(),
                  2 === this.m && m > 1
                    ? ((v = this.calculateShapeEdges(
                        e,
                        s,
                        c.totalShapeLength,
                        _,
                        d
                      )),
                      (_ += c.totalShapeLength))
                    : (v = [[y, b]]),
                  o = v.length,
                  h = 0;
                h < o;
                h += 1
              ) {
                ;(y = v[h][0]),
                  (b = v[h][1]),
                  (g.length = 0),
                  b <= 1
                    ? g.push({
                        s: c.totalShapeLength * y,
                        e: c.totalShapeLength * b,
                      })
                    : y >= 1
                    ? g.push({
                        s: c.totalShapeLength * (y - 1),
                        e: c.totalShapeLength * (b - 1),
                      })
                    : (g.push({
                        s: c.totalShapeLength * y,
                        e: c.totalShapeLength,
                      }),
                      g.push({ s: 0, e: c.totalShapeLength * (b - 1) }))
                var k = this.addShapes(c, g[0])
                if (g[0].s !== g[0].e) {
                  if (g.length > 1)
                    if (c.shape.v.c) {
                      var A = k.pop()
                      this.addPaths(k, u), (k = this.addShapes(c, g[1], A))
                    } else this.addPaths(k, u), (k = this.addShapes(c, g[1]))
                  this.addPaths(k, u)
                }
              }
              c.shape.paths = u
            }
        }
      }),
      (C.prototype.addPaths = function(t, e) {
        var s,
          i = t.length
        for (s = 0; s < i; s += 1) e.addShape(t[s])
      }),
      (C.prototype.addSegment = function(t, e, s, i, a, r, n) {
        a.setXYAt(e[0], e[1], 'o', r),
          a.setXYAt(s[0], s[1], 'i', r + 1),
          n && a.setXYAt(t[0], t[1], 'v', r),
          a.setXYAt(i[0], i[1], 'v', r + 1)
      }),
      (C.prototype.addSegmentFromArray = function(t, e, s, i) {
        e.setXYAt(t[1], t[5], 'o', s),
          e.setXYAt(t[2], t[6], 'i', s + 1),
          i && e.setXYAt(t[0], t[4], 'v', s),
          e.setXYAt(t[3], t[7], 'v', s + 1)
      }),
      (C.prototype.addShapes = function(t, e, s) {
        var i,
          a,
          r,
          n,
          h,
          o,
          l,
          p,
          f = t.pathsData,
          m = t.shape.paths.shapes,
          d = t.shape.paths._length,
          c = 0,
          u = [],
          g = !0
        for (
          s
            ? ((h = s._length), (p = s._length))
            : ((s = oe.newElement()), (h = 0), (p = 0)),
            u.push(s),
            i = 0;
          i < d;
          i += 1
        ) {
          for (
            o = f[i].lengths,
              s.c = m[i].c,
              r = m[i].c ? o.length : o.length + 1,
              a = 1;
            a < r;
            a += 1
          )
            if (((n = o[a - 1]), c + n.addedLength < e.s))
              (c += n.addedLength), (s.c = !1)
            else {
              if (c > e.e) {
                s.c = !1
                break
              }
              e.s <= c && e.e >= c + n.addedLength
                ? (this.addSegment(
                    m[i].v[a - 1],
                    m[i].o[a - 1],
                    m[i].i[a],
                    m[i].v[a],
                    s,
                    h,
                    g
                  ),
                  (g = !1))
                : ((l = Yt.getNewSegment(
                    m[i].v[a - 1],
                    m[i].v[a],
                    m[i].o[a - 1],
                    m[i].i[a],
                    (e.s - c) / n.addedLength,
                    (e.e - c) / n.addedLength,
                    o[a - 1]
                  )),
                  this.addSegmentFromArray(l, s, h, g),
                  (g = !1),
                  (s.c = !1)),
                (c += n.addedLength),
                (h += 1)
            }
          if (m[i].c) {
            if (((n = o[a - 1]), c <= e.e)) {
              var v = o[a - 1].addedLength
              e.s <= c && e.e >= c + v
                ? (this.addSegment(
                    m[i].v[a - 1],
                    m[i].o[a - 1],
                    m[i].i[0],
                    m[i].v[0],
                    s,
                    h,
                    g
                  ),
                  (g = !1))
                : ((l = Yt.getNewSegment(
                    m[i].v[a - 1],
                    m[i].v[0],
                    m[i].o[a - 1],
                    m[i].i[0],
                    (e.s - c) / v,
                    (e.e - c) / v,
                    o[a - 1]
                  )),
                  this.addSegmentFromArray(l, s, h, g),
                  (g = !1),
                  (s.c = !1))
            } else s.c = !1
            ;(c += n.addedLength), (h += 1)
          }
          if (
            (s._length &&
              (s.setXYAt(s.v[p][0], s.v[p][1], 'i', p),
              s.setXYAt(
                s.v[s._length - 1][0],
                s.v[s._length - 1][1],
                'o',
                s._length - 1
              )),
            c > e.e)
          )
            break
          i < d - 1 && ((s = oe.newElement()), (g = !0), u.push(s), (h = 0))
        }
        return u
      }),
      Qt.registerModifier('tm', C),
      b([P], D),
      (D.prototype.initModifierProperties = function(t, e) {
        ;(this.getValue = this.processKeys),
          (this.rd = Ut.getProp(t, e.r, 0, null, this)),
          (this._isAnimated = !!this.rd.effectsSequence.length)
      }),
      (D.prototype.processPath = function(t, e) {
        var s = oe.newElement()
        s.c = t.c
        var i,
          a,
          r,
          n,
          h,
          o,
          l,
          p,
          f,
          m,
          d,
          c,
          u,
          g = t._length,
          v = 0
        for (i = 0; i < g; i += 1)
          (a = t.v[i]),
            (n = t.o[i]),
            (r = t.i[i]),
            a[0] === n[0] && a[1] === n[1] && a[0] === r[0] && a[1] === r[1]
              ? (0 !== i && i !== g - 1) || t.c
                ? ((h = 0 === i ? t.v[g - 1] : t.v[i - 1]),
                  (o = Math.sqrt(
                    Math.pow(a[0] - h[0], 2) + Math.pow(a[1] - h[1], 2)
                  )),
                  (l = o ? Math.min(o / 2, e) / o : 0),
                  (p = c = a[0] + (h[0] - a[0]) * l),
                  (f = u = a[1] - (a[1] - h[1]) * l),
                  (m = p - (p - a[0]) * qt),
                  (d = f - (f - a[1]) * qt),
                  s.setTripleAt(p, f, m, d, c, u, v),
                  (v += 1),
                  (h = i === g - 1 ? t.v[0] : t.v[i + 1]),
                  (o = Math.sqrt(
                    Math.pow(a[0] - h[0], 2) + Math.pow(a[1] - h[1], 2)
                  )),
                  (l = o ? Math.min(o / 2, e) / o : 0),
                  (p = m = a[0] + (h[0] - a[0]) * l),
                  (f = d = a[1] + (h[1] - a[1]) * l),
                  (c = p - (p - a[0]) * qt),
                  (u = f - (f - a[1]) * qt),
                  s.setTripleAt(p, f, m, d, c, u, v),
                  (v += 1))
                : (s.setTripleAt(a[0], a[1], n[0], n[1], r[0], r[1], v),
                  (v += 1))
              : (s.setTripleAt(
                  t.v[i][0],
                  t.v[i][1],
                  t.o[i][0],
                  t.o[i][1],
                  t.i[i][0],
                  t.i[i][1],
                  v
                ),
                (v += 1))
        return s
      }),
      (D.prototype.processShapes = function(t) {
        var e,
          s,
          i,
          a,
          r = this.shapes.length,
          n = this.rd.v
        if (0 !== n) {
          var h, o, l
          for (s = 0; s < r; s += 1) {
            if (
              ((h = this.shapes[s]),
              (o = h.shape.paths),
              (l = h.localShapeCollection),
              h.shape._mdf || this._mdf || t)
            )
              for (
                l.releaseShapes(),
                  h.shape._mdf = !0,
                  e = h.shape.paths.shapes,
                  a = h.shape.paths._length,
                  i = 0;
                i < a;
                i += 1
              )
                l.addShape(this.processPath(e[i], n))
            h.shape.paths = h.localShapeCollection
          }
        }
        this.dynamicProperties.length || (this._mdf = !1)
      }),
      Qt.registerModifier('rd', D),
      b([P], x),
      (x.prototype.initModifierProperties = function(t, e) {
        ;(this.getValue = this.processKeys),
          (this.c = Ut.getProp(t, e.c, 0, null, this)),
          (this.o = Ut.getProp(t, e.o, 0, null, this)),
          (this.tr = Zt.getTransformProperty(t, e.tr, this)),
          (this.data = e),
          this.dynamicProperties.length || this.getValue(!0),
          (this._isAnimated = !!this.dynamicProperties.length),
          (this.pMatrix = new Wt()),
          (this.rMatrix = new Wt()),
          (this.sMatrix = new Wt()),
          (this.tMatrix = new Wt()),
          (this.matrix = new Wt())
      }),
      (x.prototype.applyTransforms = function(t, e, s, i, a, r) {
        var n = r ? -1 : 1,
          h = i.s.v[0] + (1 - i.s.v[0]) * (1 - a),
          o = i.s.v[1] + (1 - i.s.v[1]) * (1 - a)
        t.translate(i.p.v[0] * n * a, i.p.v[1] * n * a, i.p.v[2]),
          e.translate(-i.a.v[0], -i.a.v[1], i.a.v[2]),
          e.rotate(-i.r.v * n * a),
          e.translate(i.a.v[0], i.a.v[1], i.a.v[2]),
          s.translate(-i.a.v[0], -i.a.v[1], i.a.v[2]),
          s.scale(r ? 1 / h : h, r ? 1 / o : o),
          s.translate(i.a.v[0], i.a.v[1], i.a.v[2])
      }),
      (x.prototype.init = function(t, e, s, i) {
        ;(this.elem = t),
          (this.arr = e),
          (this.pos = s),
          (this.elemsData = i),
          (this._currentCopies = 0),
          (this._elements = []),
          (this._groups = []),
          (this.frameId = -1),
          this.initDynamicPropertyContainer(t),
          this.initModifierProperties(t, e[s])
        for (var a = 0; s > 0; )
          (s -= 1), this._elements.unshift(e[s]), (a += 1)
        this.dynamicProperties.length ? (this.k = !0) : this.getValue(!0)
      }),
      (x.prototype.resetElements = function(t) {
        var e,
          s = t.length
        for (e = 0; e < s; e += 1)
          (t[e]._processed = !1),
            'gr' === t[e].ty && this.resetElements(t[e].it)
      }),
      (x.prototype.cloneElements = function(t) {
        var e = (t.length, JSON.parse(JSON.stringify(t)))
        return this.resetElements(e), e
      }),
      (x.prototype.changeGroupRender = function(t, e) {
        var s,
          i = t.length
        for (s = 0; s < i; s += 1)
          (t[s]._render = e),
            'gr' === t[s].ty && this.changeGroupRender(t[s].it, e)
      }),
      (x.prototype.processShapes = function(t) {
        var e, s, i, a, r
        if (this._mdf || t) {
          var n = Math.ceil(this.c.v)
          if (this._groups.length < n) {
            for (; this._groups.length < n; ) {
              var h = { it: this.cloneElements(this._elements), ty: 'gr' }
              h.it.push({
                a: { a: 0, ix: 1, k: [0, 0] },
                nm: 'Transform',
                o: { a: 0, ix: 7, k: 100 },
                p: { a: 0, ix: 2, k: [0, 0] },
                r: {
                  a: 1,
                  ix: 6,
                  k: [{ s: 0, e: 0, t: 0 }, { s: 0, e: 0, t: 1 }],
                },
                s: { a: 0, ix: 3, k: [100, 100] },
                sa: { a: 0, ix: 5, k: 0 },
                sk: { a: 0, ix: 4, k: 0 },
                ty: 'tr',
              }),
                this.arr.splice(0, 0, h),
                this._groups.splice(0, 0, h),
                (this._currentCopies += 1)
            }
            this.elem.reloadShapes()
          }
          r = 0
          var o
          for (i = 0; i <= this._groups.length - 1; i += 1)
            (o = r < n),
              (this._groups[i]._render = o),
              this.changeGroupRender(this._groups[i].it, o),
              (r += 1)
          this._currentCopies = n
          var l = this.o.v,
            p = l % 1,
            f = l > 0 ? Math.floor(l) : Math.ceil(l),
            m = (this.tr.v.props, this.pMatrix.props),
            d = this.rMatrix.props,
            c = this.sMatrix.props
          this.pMatrix.reset(),
            this.rMatrix.reset(),
            this.sMatrix.reset(),
            this.tMatrix.reset(),
            this.matrix.reset()
          var u = 0
          if (l > 0) {
            for (; u < f; )
              this.applyTransforms(
                this.pMatrix,
                this.rMatrix,
                this.sMatrix,
                this.tr,
                1,
                !1
              ),
                (u += 1)
            p &&
              (this.applyTransforms(
                this.pMatrix,
                this.rMatrix,
                this.sMatrix,
                this.tr,
                p,
                !1
              ),
              (u += p))
          } else if (l < 0) {
            for (; u > f; )
              this.applyTransforms(
                this.pMatrix,
                this.rMatrix,
                this.sMatrix,
                this.tr,
                1,
                !0
              ),
                (u -= 1)
            p &&
              (this.applyTransforms(
                this.pMatrix,
                this.rMatrix,
                this.sMatrix,
                this.tr,
                -p,
                !0
              ),
              (u -= p))
          }
          ;(i = 1 === this.data.m ? 0 : this._currentCopies - 1),
            (a = 1 === this.data.m ? 1 : -1),
            (r = this._currentCopies)
          for (var g, v; r; ) {
            if (
              ((e = this.elemsData[i].it),
              (s = e[e.length - 1].transform.mProps.v.props),
              (v = s.length),
              (e[e.length - 1].transform.mProps._mdf = !0),
              (e[e.length - 1].transform.op._mdf = !0),
              0 !== u)
            ) {
              for (
                ((0 !== i && 1 === a) ||
                  (i !== this._currentCopies - 1 && a === -1)) &&
                  this.applyTransforms(
                    this.pMatrix,
                    this.rMatrix,
                    this.sMatrix,
                    this.tr,
                    1,
                    !1
                  ),
                  this.matrix.transform(
                    d[0],
                    d[1],
                    d[2],
                    d[3],
                    d[4],
                    d[5],
                    d[6],
                    d[7],
                    d[8],
                    d[9],
                    d[10],
                    d[11],
                    d[12],
                    d[13],
                    d[14],
                    d[15]
                  ),
                  this.matrix.transform(
                    c[0],
                    c[1],
                    c[2],
                    c[3],
                    c[4],
                    c[5],
                    c[6],
                    c[7],
                    c[8],
                    c[9],
                    c[10],
                    c[11],
                    c[12],
                    c[13],
                    c[14],
                    c[15]
                  ),
                  this.matrix.transform(
                    m[0],
                    m[1],
                    m[2],
                    m[3],
                    m[4],
                    m[5],
                    m[6],
                    m[7],
                    m[8],
                    m[9],
                    m[10],
                    m[11],
                    m[12],
                    m[13],
                    m[14],
                    m[15]
                  ),
                  g = 0;
                g < v;
                g += 1
              )
                s[g] = this.matrix.props[g]
              this.matrix.reset()
            } else
              for (this.matrix.reset(), g = 0; g < v; g += 1)
                s[g] = this.matrix.props[g]
            ;(u += 1), (r -= 1), (i += a)
          }
        } else
          for (r = this._currentCopies, i = 0, a = 1; r; )
            (e = this.elemsData[i].it),
              (s = e[e.length - 1].transform.mProps.v.props),
              (e[e.length - 1].transform.mProps._mdf = !1),
              (e[e.length - 1].transform.op._mdf = !1),
              (r -= 1),
              (i += a)
      }),
      (x.prototype.addShape = function() {}),
      Qt.registerModifier('rp', x),
      (E.prototype.addShape = function(t) {
        this._length === this._maxLength &&
          ((this.shapes = this.shapes.concat(u(this._maxLength))),
          (this._maxLength *= 2)),
          (this.shapes[this._length] = t),
          (this._length += 1)
      }),
      (E.prototype.releaseShapes = function() {
        var t
        for (t = 0; t < this._length; t += 1) oe.release(this.shapes[t])
        this._length = 0
      }),
      (F.prototype.getValue = function(t) {
        if (
          (this.elem.globalData.frameId !== this.frameId || t) &&
          ((this.frameId = this.elem.globalData.frameId),
          this.iterateDynamicProperties(),
          (this._mdf = this._mdf || t),
          this._mdf)
        ) {
          var e = 0,
            s = this.dataProps.length
          for (
            'svg' === this.renderer && (this.dashStr = ''), e = 0;
            e < s;
            e += 1
          )
            'o' != this.dataProps[e].n
              ? 'svg' === this.renderer
                ? (this.dashStr += ' ' + this.dataProps[e].p.v)
                : (this.dashArray[e] = this.dataProps[e].p.v)
              : (this.dashoffset[0] = this.dataProps[e].p.v)
        }
      }),
      b([y], F),
      (S.prototype.comparePoints = function(t, e) {
        for (var s, i = 0, a = this.o.length / 2; i < a; ) {
          if (((s = Math.abs(t[4 * i] - t[4 * e + 2 * i])), s > 0.01)) return !1
          i += 1
        }
        return !0
      }),
      (S.prototype.checkCollapsable = function() {
        if (this.o.length / 2 !== this.c.length / 4) return !1
        if (this.data.k.k[0].s)
          for (var t = 0, e = this.data.k.k.length; t < e; ) {
            if (!this.comparePoints(this.data.k.k[t].s, this.data.p)) return !1
            t += 1
          }
        else if (!this.comparePoints(this.data.k.k, this.data.p)) return !1
        return !0
      }),
      (S.prototype.getValue = function(t) {
        if (
          (this.prop.getValue(),
          (this._mdf = !1),
          (this._cmdf = !1),
          (this._omdf = !1),
          this.prop._mdf || t)
        ) {
          var e,
            s,
            i,
            a = 4 * this.data.p
          for (e = 0; e < a; e += 1)
            (s = e % 4 === 0 ? 100 : 255),
              (i = Math.round(this.prop.v[e] * s)),
              this.c[e] !== i && ((this.c[e] = i), (this._cmdf = !t))
          if (this.o.length)
            for (a = this.prop.v.length, e = 4 * this.data.p; e < a; e += 1)
              (s = e % 2 === 0 ? 100 : 1),
                (i =
                  e % 2 === 0
                    ? Math.round(100 * this.prop.v[e])
                    : this.prop.v[e]),
                this.o[e - 4 * this.data.p] !== i &&
                  ((this.o[e - 4 * this.data.p] = i), (this._omdf = !t))
          this._mdf = !t
        }
      }),
      b([y], S)
    var $t = function(t, e, s, i) {
        if (0 === e) return ''
        var a,
          r = t.o,
          n = t.i,
          h = t.v,
          o = ' M' + i.applyToPointStringified(h[0][0], h[0][1])
        for (a = 1; a < e; a += 1)
          o +=
            ' C' +
            i.applyToPointStringified(r[a - 1][0], r[a - 1][1]) +
            ' ' +
            i.applyToPointStringified(n[a][0], n[a][1]) +
            ' ' +
            i.applyToPointStringified(h[a][0], h[a][1])
        return (
          s &&
            e &&
            ((o +=
              ' C' +
              i.applyToPointStringified(r[a - 1][0], r[a - 1][1]) +
              ' ' +
              i.applyToPointStringified(n[0][0], n[0][1]) +
              ' ' +
              i.applyToPointStringified(h[0][0], h[0][1])),
            (o += 'z')),
          o
        )
      },
      te = (function() {
        function t() {
          ;(this.loadedAssets += 1),
            this.loadedAssets === this.totalImages &&
              this.imagesLoadedCb &&
              this.imagesLoadedCb(null)
        }
        function e(t) {
          var e = ''
          if (t.e) e = t.p
          else if (this.assetsPath) {
            var s = t.p
            s.indexOf('images/') !== -1 && (s = s.split('/')[1]),
              (e = this.assetsPath + s)
          } else (e = this.path), (e += t.u ? t.u : ''), (e += t.p)
          return e
        }
        function s(e) {
          var s = v('img')
          s.addEventListener('load', t.bind(this), !1),
            s.addEventListener('error', t.bind(this), !1),
            (s.src = e)
        }
        function i(t, i) {
          ;(this.imagesLoadedCb = i), (this.totalAssets = t.length)
          var a
          for (a = 0; a < this.totalAssets; a += 1)
            t[a].layers ||
              (s.bind(this)(e.bind(this)(t[a])), (this.totalImages += 1))
        }
        function a(t) {
          this.path = t || ''
        }
        function r(t) {
          this.assetsPath = t || ''
        }
        function n() {
          this.imagesLoadedCb = null
        }
        return function() {
          ;(this.loadAssets = i),
            (this.setAssetsPath = r),
            (this.setPath = a),
            (this.destroy = n),
            (this.assetsPath = ''),
            (this.path = ''),
            (this.totalAssets = 0),
            (this.totalImages = 0),
            (this.loadedAssets = 0),
            (this.imagesLoadedCb = null)
        }
      })(),
      ee = (function() {
        var t = { maskType: !0 }
        return (
          (/MSIE 10/i.test(navigator.userAgent) ||
            /MSIE 9/i.test(navigator.userAgent) ||
            /rv:11.0/i.test(navigator.userAgent) ||
            /Edge\/\d./i.test(navigator.userAgent)) &&
            (t.maskType = !1),
          t
        )
      })(),
      se = (function() {
        function t(t) {
          var e = g('filter')
          return (
            e.setAttribute('id', t),
            e.setAttribute('filterUnits', 'objectBoundingBox'),
            e.setAttribute('x', '0%'),
            e.setAttribute('y', '0%'),
            e.setAttribute('width', '100%'),
            e.setAttribute('height', '100%'),
            e
          )
        }
        function e() {
          var t = g('feColorMatrix')
          return (
            t.setAttribute('type', 'matrix'),
            t.setAttribute('color-interpolation-filters', 'sRGB'),
            t.setAttribute(
              'values',
              '0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1'
            ),
            t
          )
        }
        var s = {}
        return (s.createFilter = t), (s.createAlphaToLuminanceFilter = e), s
      })(),
      ie = (function() {
        function t(t) {
          return t.response && 'object' == typeof t.response
            ? t.response
            : t.response && 'string' == typeof t.response
            ? JSON.parse(t.response)
            : t.responseText
            ? JSON.parse(t.response)
            : void 0
        }
        function e(e, s, i) {
          var a,
            r = new XMLHttpRequest()
          r.open('GET', e, !0),
            (r.responseType = 'json'),
            r.send(),
            (r.onreadystatechange = function() {
              if (4 == r.readyState)
                if (200 == r.status) (a = t(r)), s(a)
                else
                  try {
                    ;(a = t(r)), s(a)
                  } catch (e) {
                    error_callback && error_callback(e)
                  }
            })
        }
        return { load: e }
      })()
    ;(w.prototype.searchProperties = function() {
      var t,
        e,
        s = this._textData.a.length,
        i = Ut.getProp
      for (t = 0; t < s; t += 1)
        (e = this._textData.a[t]),
          (this._animatorsData[t] = new T(this._elem, e, this))
      this._textData.p && 'm' in this._textData.p
        ? ((this._pathData = {
            f: i(this._elem, this._textData.p.f, 0, 0, this),
            l: i(this._elem, this._textData.p.l, 0, 0, this),
            r: this._textData.p.r,
            m: this._elem.maskManager.getMaskProperty(this._textData.p.m),
          }),
          (this._hasMaskedPath = !0))
        : (this._hasMaskedPath = !1),
        (this._moreOptions.alignment = i(
          this._elem,
          this._textData.m.a,
          1,
          0,
          this
        ))
    }),
      (w.prototype.getMeasures = function(t, e) {
        if (
          ((this.lettersChangedFlag = e),
          this._mdf ||
            this._isFirstFrame ||
            e ||
            (this._hasMaskedPath && this._pathData.m._mdf))
        ) {
          this._isFirstFrame = !1
          var s,
            i,
            a,
            r,
            n,
            h,
            o,
            l,
            p,
            c,
            u,
            g,
            v,
            y,
            b,
            _,
            k,
            A,
            M,
            P = this._moreOptions.alignment.v,
            C = this._animatorsData,
            D = this._textData,
            x = this.mHelper,
            E = this._renderType,
            F = this.renderedLetters.length,
            S = (this.data, t.l)
          if (this._hasMaskedPath) {
            if (
              ((M = this._pathData.m), !this._pathData.n || this._pathData._mdf)
            ) {
              var w = M.v
              this._pathData.r && (w = w.reverse()),
                (n = { tLength: 0, segments: [] }),
                (r = w._length - 1)
              var T
              for (_ = 0, a = 0; a < r; a += 1)
                (T = {
                  s: w.v[a],
                  e: w.v[a + 1],
                  to: [w.o[a][0] - w.v[a][0], w.o[a][1] - w.v[a][1]],
                  ti: [
                    w.i[a + 1][0] - w.v[a + 1][0],
                    w.i[a + 1][1] - w.v[a + 1][1],
                  ],
                }),
                  Yt.buildBezierData(T),
                  (n.tLength += T.bezierData.segmentLength),
                  n.segments.push(T),
                  (_ += T.bezierData.segmentLength)
              ;(a = r),
                M.v.c &&
                  ((T = {
                    s: w.v[a],
                    e: w.v[0],
                    to: [w.o[a][0] - w.v[a][0], w.o[a][1] - w.v[a][1]],
                    ti: [w.i[0][0] - w.v[0][0], w.i[0][1] - w.v[0][1]],
                  }),
                  Yt.buildBezierData(T),
                  (n.tLength += T.bezierData.segmentLength),
                  n.segments.push(T),
                  (_ += T.bezierData.segmentLength)),
                (this._pathData.pi = n)
            }
            if (
              ((n = this._pathData.pi),
              (h = this._pathData.f.v),
              (u = 0),
              (c = 1),
              (l = 0),
              (p = !0),
              (y = n.segments),
              h < 0 && M.v.c)
            )
              for (
                n.tLength < Math.abs(h) && (h = -Math.abs(h) % n.tLength),
                  u = y.length - 1,
                  v = y[u].bezierData.points,
                  c = v.length - 1;
                h < 0;

              )
                (h += v[c].partialLength),
                  (c -= 1),
                  c < 0 &&
                    ((u -= 1), (v = y[u].bezierData.points), (c = v.length - 1))
            ;(v = y[u].bezierData.points),
              (g = v[c - 1]),
              (o = v[c]),
              (b = o.partialLength)
          }
          ;(r = S.length), (s = 0), (i = 0)
          var L,
            z,
            R,
            V,
            N,
            O = 1.2 * t.finalSize * 0.714,
            B = !0
          V = C.length
          var q,
            j,
            G,
            W,
            X,
            Y,
            H,
            J,
            U,
            Z,
            K,
            Q,
            $,
            tt = -1,
            et = h,
            st = u,
            it = c,
            at = -1,
            rt = 0,
            nt = '',
            ht = this.defaultPropsArray
          if (2 === t.j || 1 === t.j) {
            var ot = 0,
              lt = 0,
              pt = 2 === t.j ? -0.5 : -1,
              ft = 0,
              mt = !0
            for (a = 0; a < r; a += 1)
              if (S[a].n) {
                for (ot && (ot += lt); ft < a; )
                  (S[ft].animatorJustifyOffset = ot), (ft += 1)
                ;(ot = 0), (mt = !0)
              } else {
                for (R = 0; R < V; R += 1)
                  (L = C[R].a),
                    L.t.propType &&
                      (mt && 2 === t.j && (lt += L.t.v * pt),
                      (z = C[R].s),
                      (q = z.getMult(S[a].anIndexes[R], D.a[R].s.totalChars)),
                      (ot += q.length ? L.t.v * q[0] * pt : L.t.v * q * pt))
                mt = !1
              }
            for (ot && (ot += lt); ft < a; )
              (S[ft].animatorJustifyOffset = ot), (ft += 1)
          }
          for (a = 0; a < r; a += 1) {
            if ((x.reset(), (X = 1), S[a].n))
              (s = 0),
                (i += t.yOffset),
                (i += B ? 1 : 0),
                (h = et),
                (B = !1),
                (rt = 0),
                this._hasMaskedPath &&
                  ((u = st),
                  (c = it),
                  (v = y[u].bezierData.points),
                  (g = v[c - 1]),
                  (o = v[c]),
                  (b = o.partialLength),
                  (l = 0)),
                ($ = Z = Q = nt = ''),
                (ht = this.defaultPropsArray)
            else {
              if (this._hasMaskedPath) {
                if (at !== S[a].line) {
                  switch (t.j) {
                    case 1:
                      h += _ - t.lineWidths[S[a].line]
                      break
                    case 2:
                      h += (_ - t.lineWidths[S[a].line]) / 2
                  }
                  at = S[a].line
                }
                tt !== S[a].ind &&
                  (S[tt] && (h += S[tt].extra),
                  (h += S[a].an / 2),
                  (tt = S[a].ind)),
                  (h += (P[0] * S[a].an) / 200)
                var dt = 0
                for (R = 0; R < V; R += 1)
                  (L = C[R].a),
                    L.p.propType &&
                      ((z = C[R].s),
                      (q = z.getMult(S[a].anIndexes[R], D.a[R].s.totalChars)),
                      (dt += q.length ? L.p.v[0] * q[0] : L.p.v[0] * q)),
                    L.a.propType &&
                      ((z = C[R].s),
                      (q = z.getMult(S[a].anIndexes[R], D.a[R].s.totalChars)),
                      (dt += q.length ? L.a.v[0] * q[0] : L.a.v[0] * q))
                for (p = !0; p; )
                  l + b >= h + dt || !v
                    ? ((k = (h + dt - l) / o.partialLength),
                      (G = g.point[0] + (o.point[0] - g.point[0]) * k),
                      (W = g.point[1] + (o.point[1] - g.point[1]) * k),
                      x.translate((-P[0] * S[a].an) / 200, -((P[1] * O) / 100)),
                      (p = !1))
                    : v &&
                      ((l += o.partialLength),
                      (c += 1),
                      c >= v.length &&
                        ((c = 0),
                        (u += 1),
                        y[u]
                          ? (v = y[u].bezierData.points)
                          : M.v.c
                          ? ((c = 0), (u = 0), (v = y[u].bezierData.points))
                          : ((l -= o.partialLength), (v = null))),
                      v && ((g = o), (o = v[c]), (b = o.partialLength)))
                ;(j = S[a].an / 2 - S[a].add), x.translate(-j, 0, 0)
              } else
                (j = S[a].an / 2 - S[a].add),
                  x.translate(-j, 0, 0),
                  x.translate((-P[0] * S[a].an) / 200, (-P[1] * O) / 100, 0)
              for (rt += S[a].l / 2, R = 0; R < V; R += 1)
                (L = C[R].a),
                  L.t.propType &&
                    ((z = C[R].s),
                    (q = z.getMult(S[a].anIndexes[R], D.a[R].s.totalChars)),
                    (0 === s && 0 === t.j) ||
                      (this._hasMaskedPath
                        ? (h += q.length ? L.t.v * q[0] : L.t.v * q)
                        : (s += q.length ? L.t.v * q[0] : L.t.v * q)))
              for (
                rt += S[a].l / 2,
                  t.strokeWidthAnim && (H = t.sw || 0),
                  t.strokeColorAnim &&
                    (Y = t.sc ? [t.sc[0], t.sc[1], t.sc[2]] : [0, 0, 0]),
                  t.fillColorAnim && t.fc && (J = [t.fc[0], t.fc[1], t.fc[2]]),
                  R = 0;
                R < V;
                R += 1
              )
                (L = C[R].a),
                  L.a.propType &&
                    ((z = C[R].s),
                    (q = z.getMult(S[a].anIndexes[R], D.a[R].s.totalChars)),
                    q.length
                      ? x.translate(
                          -L.a.v[0] * q[0],
                          -L.a.v[1] * q[1],
                          L.a.v[2] * q[2]
                        )
                      : x.translate(-L.a.v[0] * q, -L.a.v[1] * q, L.a.v[2] * q))
              for (R = 0; R < V; R += 1)
                (L = C[R].a),
                  L.s.propType &&
                    ((z = C[R].s),
                    (q = z.getMult(S[a].anIndexes[R], D.a[R].s.totalChars)),
                    q.length
                      ? x.scale(
                          1 + (L.s.v[0] - 1) * q[0],
                          1 + (L.s.v[1] - 1) * q[1],
                          1
                        )
                      : x.scale(
                          1 + (L.s.v[0] - 1) * q,
                          1 + (L.s.v[1] - 1) * q,
                          1
                        ))
              for (R = 0; R < V; R += 1) {
                if (
                  ((L = C[R].a),
                  (z = C[R].s),
                  (q = z.getMult(S[a].anIndexes[R], D.a[R].s.totalChars)),
                  L.sk.propType &&
                    (q.length
                      ? x.skewFromAxis(-L.sk.v * q[0], L.sa.v * q[1])
                      : x.skewFromAxis(-L.sk.v * q, L.sa.v * q)),
                  L.r.propType &&
                    (q.length
                      ? x.rotateZ(-L.r.v * q[2])
                      : x.rotateZ(-L.r.v * q)),
                  L.ry.propType &&
                    (q.length
                      ? x.rotateY(L.ry.v * q[1])
                      : x.rotateY(L.ry.v * q)),
                  L.rx.propType &&
                    (q.length
                      ? x.rotateX(L.rx.v * q[0])
                      : x.rotateX(L.rx.v * q)),
                  L.o.propType &&
                    (X += q.length
                      ? (L.o.v * q[0] - X) * q[0]
                      : (L.o.v * q - X) * q),
                  t.strokeWidthAnim &&
                    L.sw.propType &&
                    (H += q.length ? L.sw.v * q[0] : L.sw.v * q),
                  t.strokeColorAnim && L.sc.propType)
                )
                  for (U = 0; U < 3; U += 1)
                    q.length
                      ? (Y[U] = Y[U] + (L.sc.v[U] - Y[U]) * q[0])
                      : (Y[U] = Y[U] + (L.sc.v[U] - Y[U]) * q)
                if (t.fillColorAnim && t.fc) {
                  if (L.fc.propType)
                    for (U = 0; U < 3; U += 1)
                      q.length
                        ? (J[U] = J[U] + (L.fc.v[U] - J[U]) * q[0])
                        : (J[U] = J[U] + (L.fc.v[U] - J[U]) * q)
                  L.fh.propType &&
                    (J = q.length ? d(J, L.fh.v * q[0]) : d(J, L.fh.v * q)),
                    L.fs.propType &&
                      (J = q.length ? f(J, L.fs.v * q[0]) : f(J, L.fs.v * q)),
                    L.fb.propType &&
                      (J = q.length ? m(J, L.fb.v * q[0]) : m(J, L.fb.v * q))
                }
              }
              for (R = 0; R < V; R += 1)
                (L = C[R].a),
                  L.p.propType &&
                    ((z = C[R].s),
                    (q = z.getMult(S[a].anIndexes[R], D.a[R].s.totalChars)),
                    this._hasMaskedPath
                      ? q.length
                        ? x.translate(0, L.p.v[1] * q[0], -L.p.v[2] * q[1])
                        : x.translate(0, L.p.v[1] * q, -L.p.v[2] * q)
                      : q.length
                      ? x.translate(
                          L.p.v[0] * q[0],
                          L.p.v[1] * q[1],
                          -L.p.v[2] * q[2]
                        )
                      : x.translate(L.p.v[0] * q, L.p.v[1] * q, -L.p.v[2] * q))
              if (
                (t.strokeWidthAnim && (Z = H < 0 ? 0 : H),
                t.strokeColorAnim &&
                  (K =
                    'rgb(' +
                    Math.round(255 * Y[0]) +
                    ',' +
                    Math.round(255 * Y[1]) +
                    ',' +
                    Math.round(255 * Y[2]) +
                    ')'),
                t.fillColorAnim &&
                  t.fc &&
                  (Q =
                    'rgb(' +
                    Math.round(255 * J[0]) +
                    ',' +
                    Math.round(255 * J[1]) +
                    ',' +
                    Math.round(255 * J[2]) +
                    ')'),
                this._hasMaskedPath)
              ) {
                if (
                  (x.translate(0, -t.ls),
                  x.translate(0, (P[1] * O) / 100 + i, 0),
                  D.p.p)
                ) {
                  A = (o.point[1] - g.point[1]) / (o.point[0] - g.point[0])
                  var ct = (180 * Math.atan(A)) / Math.PI
                  o.point[0] < g.point[0] && (ct += 180),
                    x.rotate((-ct * Math.PI) / 180)
                }
                x.translate(G, W, 0),
                  (h -= (P[0] * S[a].an) / 200),
                  S[a + 1] &&
                    tt !== S[a + 1].ind &&
                    ((h += S[a].an / 2), (h += (t.tr / 1e3) * t.finalSize))
              } else {
                switch (
                  (x.translate(s, i, 0),
                  t.ps && x.translate(t.ps[0], t.ps[1] + t.ascent, 0),
                  t.j)
                ) {
                  case 1:
                    x.translate(
                      S[a].animatorJustifyOffset +
                        t.justifyOffset +
                        (t.boxWidth - t.lineWidths[S[a].line]),
                      0,
                      0
                    )
                    break
                  case 2:
                    x.translate(
                      S[a].animatorJustifyOffset +
                        t.justifyOffset +
                        (t.boxWidth - t.lineWidths[S[a].line]) / 2,
                      0,
                      0
                    )
                }
                x.translate(0, -t.ls),
                  x.translate(j, 0, 0),
                  x.translate((P[0] * S[a].an) / 200, (P[1] * O) / 100, 0),
                  (s += S[a].l + (t.tr / 1e3) * t.finalSize)
              }
              'html' === E
                ? (nt = x.toCSS())
                : 'svg' === E
                ? (nt = x.to2dCSS())
                : (ht = [
                    x.props[0],
                    x.props[1],
                    x.props[2],
                    x.props[3],
                    x.props[4],
                    x.props[5],
                    x.props[6],
                    x.props[7],
                    x.props[8],
                    x.props[9],
                    x.props[10],
                    x.props[11],
                    x.props[12],
                    x.props[13],
                    x.props[14],
                    x.props[15],
                  ]),
                ($ = X)
            }
            F <= a
              ? ((N = new I($, Z, K, Q, nt, ht)),
                this.renderedLetters.push(N),
                (F += 1),
                (this.lettersChangedFlag = !0))
              : ((N = this.renderedLetters[a]),
                (this.lettersChangedFlag =
                  N.update($, Z, K, Q, nt, ht) || this.lettersChangedFlag))
          }
        }
      }),
      (w.prototype.getValue = function() {
        this._elem.globalData.frameId !== this._frameId &&
          ((this._frameId = this._elem.globalData.frameId),
          this.iterateDynamicProperties())
      }),
      (w.prototype.mHelper = new Wt()),
      (w.prototype.defaultPropsArray = []),
      b([y], w),
      (I.prototype.update = function(t, e, s, i, a, r) {
        ;(this._mdf.o = !1),
          (this._mdf.sw = !1),
          (this._mdf.sc = !1),
          (this._mdf.fc = !1),
          (this._mdf.m = !1),
          (this._mdf.p = !1)
        var n = !1
        return (
          this.o !== t && ((this.o = t), (this._mdf.o = !0), (n = !0)),
          this.sw !== e && ((this.sw = e), (this._mdf.sw = !0), (n = !0)),
          this.sc !== s && ((this.sc = s), (this._mdf.sc = !0), (n = !0)),
          this.fc !== i && ((this.fc = i), (this._mdf.fc = !0), (n = !0)),
          this.m !== a && ((this.m = a), (this._mdf.m = !0), (n = !0)),
          !r.length ||
            (this.p[0] === r[0] &&
              this.p[1] === r[1] &&
              this.p[4] === r[4] &&
              this.p[5] === r[5] &&
              this.p[12] === r[12] &&
              this.p[13] === r[13]) ||
            ((this.p = r), (this._mdf.p = !0), (n = !0)),
          n
        )
      }),
      (L.prototype.defaultBoxWidth = [0, 0]),
      (L.prototype.copyFromDocumentData = function(t) {
        for (var e in t) this.currentData[e] = t[e]
      }),
      (L.prototype.setCurrentData = function(t, e) {
        this.currentData !== t
          ? (t.__complete || this.completeTextData(t),
            this.copyFromDocumentData(t),
            (this.currentData.boxWidth =
              this.currentData.boxWidth || this.defaultBoxWidth),
            (this.currentData.fillColorAnim =
              t.fillColorAnim || this.currentData.fillColorAnim),
            (this.currentData.strokeColorAnim =
              t.strokeColorAnim || this.currentData.strokeColorAnim),
            (this.currentData.strokeWidthAnim =
              t.strokeWidthAnim || this.currentData.strokeWidthAnim),
            (this._mdf = !0))
          : e !== this.currentData.t &&
            ((this._mdf = !0), this.completeTextData(t))
      }),
      (L.prototype.searchProperty = function() {
        return this.searchKeyframes()
      }),
      (L.prototype.searchKeyframes = function() {
        return (
          (this.kf = this.data.d.k.length > 1),
          this.kf && this.addEffect(this.getKeyframeValue.bind(this)),
          this.kf
        )
      }),
      (L.prototype.addEffect = function(t) {
        this.effectsSequence.push(t), this.elem.addDynamicProperty(this)
      }),
      (L.prototype.getValue = function(t) {
        if (
          (this.elem.globalData.frameId !== this.frameId &&
            this.effectsSequence.length) ||
          t
        ) {
          var e = this.currentData.t
          if (this.lock) return void this.setCurrentData(this.currentData, e)
          ;(this.lock = !0), (this._mdf = !1)
          var s,
            i = this.effectsSequence.length,
            a = t || this.currentData
          for (s = 0; s < i; s += 1) a = this.effectsSequence[s](a)
          this.setCurrentData(a, e),
            (this.pv = this.v = this.currentData),
            (this.lock = !1),
            (this.frameId = this.elem.globalData.frameId)
        }
      }),
      (L.prototype.getKeyframeValue = function(t) {
        for (
          var e,
            s = this.data.d.k,
            i = this.elem.comp.renderedFrame,
            a = 0,
            r = s.length;
          a <= r - 1 && ((e = s[a].s), !(a === r - 1 || s[a + 1].t > i));

        )
          a += 1
        return this.keysIndex !== a && ((t = e), (this.keysIndex = a)), t
      }),
      (L.prototype.buildFinalText = function(t) {
        for (
          var e = Jt.getCombinedCharacterCodes(), s = [], i = 0, a = t.length;
          i < a;

        )
          e.indexOf(t.charCodeAt(i)) !== -1
            ? (s[s.length - 1] += t.charAt(i))
            : s.push(t.charAt(i)),
            (i += 1)
        return s
      }),
      (L.prototype.completeTextData = function(t) {
        t.__complete = !0
        var e,
          s,
          i,
          a,
          r,
          n,
          h,
          o = this.elem.globalData.fontManager,
          l = this.data,
          p = [],
          f = 0,
          m = l.m.g,
          d = 0,
          c = 0,
          u = 0,
          g = [],
          v = 0,
          y = 0,
          b = o.getFontByName(t.f),
          _ = 0,
          k = b.fStyle ? b.fStyle.split(' ') : [],
          A = 'normal',
          M = 'normal'
        s = k.length
        var P
        for (e = 0; e < s; e += 1)
          switch ((P = k[e].toLowerCase())) {
            case 'italic':
              M = 'italic'
              break
            case 'bold':
              A = '700'
              break
            case 'black':
              A = '900'
              break
            case 'medium':
              A = '500'
              break
            case 'regular':
            case 'normal':
              A = '400'
              break
            case 'light':
            case 'thin':
              A = '200'
          }
        ;(t.fWeight = b.fWeight || A),
          (t.fStyle = M),
          (s = t.t.length),
          (t.finalSize = t.s),
          (t.finalText = this.buildFinalText(t.t)),
          (t.finalLineHeight = t.lh)
        var C = (t.tr / 1e3) * t.finalSize
        if (t.sz)
          for (var D, x, E = !0, F = t.sz[0], S = t.sz[1]; E; ) {
            ;(x = this.buildFinalText(t.t)),
              (D = 0),
              (v = 0),
              (s = x.length),
              (C = (t.tr / 1e3) * t.finalSize)
            var w = -1
            for (e = 0; e < s; e += 1)
              (i = !1),
                ' ' === x[e]
                  ? (w = e)
                  : 13 === x[e].charCodeAt(0) &&
                    ((v = 0),
                    (i = !0),
                    (D += t.finalLineHeight || 1.2 * t.finalSize)),
                o.chars
                  ? ((h = o.getCharData(x[e], b.fStyle, b.fFamily)),
                    (_ = i ? 0 : (h.w * t.finalSize) / 100))
                  : (_ = o.measureText(x[e], t.f, t.finalSize)),
                v + _ > F && ' ' !== x[e]
                  ? (w === -1 ? (s += 1) : (e = w),
                    (D += t.finalLineHeight || 1.2 * t.finalSize),
                    x.splice(e, w === e ? 1 : 0, '\r'),
                    (w = -1),
                    (v = 0))
                  : ((v += _), (v += C))
            ;(D += (b.ascent * t.finalSize) / 100),
              this.canResize && t.finalSize > this.minimumFontSize && S < D
                ? ((t.finalSize -= 1),
                  (t.finalLineHeight = (t.finalSize * t.lh) / t.s))
                : ((t.finalText = x), (s = t.finalText.length), (E = !1))
          }
        ;(v = -C), (_ = 0)
        var T,
          I = 0
        for (e = 0; e < s; e += 1)
          if (
            ((i = !1),
            (T = t.finalText[e]),
            ' ' === T
              ? (a = '\xa0')
              : 13 === T.charCodeAt(0)
              ? ((I = 0),
                g.push(v),
                (y = v > y ? v : y),
                (v = -2 * C),
                (a = ''),
                (i = !0),
                (u += 1))
              : (a = t.finalText[e]),
            o.chars
              ? ((h = o.getCharData(T, b.fStyle, o.getFontByName(t.f).fFamily)),
                (_ = i ? 0 : (h.w * t.finalSize) / 100))
              : (_ = o.measureText(a, t.f, t.finalSize)),
            ' ' === T ? (I += _ + C) : ((v += _ + C + I), (I = 0)),
            p.push({
              l: _,
              an: _,
              add: d,
              n: i,
              anIndexes: [],
              val: a,
              line: u,
              animatorJustifyOffset: 0,
            }),
            2 == m)
          ) {
            if (((d += _), '' === a || '\xa0' === a || e === s - 1)) {
              for (('' !== a && '\xa0' !== a) || (d -= _); c <= e; )
                (p[c].an = d), (p[c].ind = f), (p[c].extra = _), (c += 1)
              ;(f += 1), (d = 0)
            }
          } else if (3 == m) {
            if (((d += _), '' === a || e === s - 1)) {
              for ('' === a && (d -= _); c <= e; )
                (p[c].an = d), (p[c].ind = f), (p[c].extra = _), (c += 1)
              ;(d = 0), (f += 1)
            }
          } else (p[f].ind = f), (p[f].extra = 0), (f += 1)
        if (((t.l = p), (y = v > y ? v : y), g.push(v), t.sz))
          (t.boxWidth = t.sz[0]), (t.justifyOffset = 0)
        else
          switch (((t.boxWidth = y), t.j)) {
            case 1:
              t.justifyOffset = -t.boxWidth
              break
            case 2:
              t.justifyOffset = -t.boxWidth / 2
              break
            default:
              t.justifyOffset = 0
          }
        t.lineWidths = g
        var L,
          z,
          R = l.a
        n = R.length
        var V,
          N,
          O = []
        for (r = 0; r < n; r += 1) {
          for (
            L = R[r],
              L.a.sc && (t.strokeColorAnim = !0),
              L.a.sw && (t.strokeWidthAnim = !0),
              (L.a.fc || L.a.fh || L.a.fs || L.a.fb) && (t.fillColorAnim = !0),
              N = 0,
              V = L.s.b,
              e = 0;
            e < s;
            e += 1
          )
            (z = p[e]),
              (z.anIndexes[r] = N),
              ((1 == V && '' !== z.val) ||
                (2 == V && '' !== z.val && '\xa0' !== z.val) ||
                (3 == V && (z.n || '\xa0' == z.val || e == s - 1)) ||
                (4 == V && (z.n || e == s - 1))) &&
                (1 === L.s.rn && O.push(N), (N += 1))
          l.a[r].s.totalChars = N
          var B,
            q = -1
          if (1 === L.s.rn)
            for (e = 0; e < s; e += 1)
              (z = p[e]),
                q != z.anIndexes[r] &&
                  ((q = z.anIndexes[r]),
                  (B = O.splice(Math.floor(Math.random() * O.length), 1)[0])),
                (z.anIndexes[r] = B)
        }
        ;(t.yOffset = t.finalLineHeight || 1.2 * t.finalSize),
          (t.ls = t.ls || 0),
          (t.ascent = (b.ascent * t.finalSize) / 100)
      }),
      (L.prototype.updateDocumentData = function(t, e) {
        e = void 0 === e ? (this.keysIndex === -1 ? 0 : this.keysIndex) : e
        var s = this.data.d.k[e].s
        for (var i in t) s[i] = t[i]
        this.recalculate(e)
      }),
      (L.prototype.recalculate = function(t) {
        var e = this.data.d.k[t].s
        ;(e.__complete = !1),
          (this.keysIndex = this.kf ? -1 : 0),
          (this._isFirstFrame = !0),
          this.getValue(e)
      }),
      (L.prototype.canResizeFont = function(t) {
        ;(this.canResize = t), this.recalculate(this.keysIndex)
      }),
      (L.prototype.setMinimumFontSize = function(t) {
        ;(this.minimumFontSize = Math.floor(t) || 1),
          this.recalculate(this.keysIndex)
      })
    var ae = (function() {
        function t(t, e) {
          ;(this._currentTextLength = -1),
            (this.k = !1),
            (this.data = e),
            (this.elem = t),
            (this.comp = t.comp),
            (this.finalS = 0),
            (this.finalE = 0),
            this.initDynamicPropertyContainer(t),
            (this.s = Ut.getProp(t, e.s || { k: 0 }, 0, 0, this)),
            'e' in e
              ? (this.e = Ut.getProp(t, e.e, 0, 0, this))
              : (this.e = { v: 100 }),
            (this.o = Ut.getProp(t, e.o || { k: 0 }, 0, 0, this)),
            (this.xe = Ut.getProp(t, e.xe || { k: 0 }, 0, 0, this)),
            (this.ne = Ut.getProp(t, e.ne || { k: 0 }, 0, 0, this)),
            (this.a = Ut.getProp(t, e.a, 0, 0.01, this)),
            this.dynamicProperties.length || this.getValue()
        }
        function e(e, s, i) {
          return new t(e, s, i)
        }
        var s = Math.max,
          i = Math.min,
          a = Math.floor
        return (
          (t.prototype = {
            getMult: function(t) {
              this._currentTextLength !==
                this.elem.textProperty.currentData.l.length && this.getValue()
              var e = Xt.getBezierEasing(
                  this.ne.v / 100,
                  0,
                  1 - this.xe.v / 100,
                  1
                ).get,
                r = 0,
                n = this.finalS,
                h = this.finalE,
                o = this.data.sh
              if (2 == o)
                (r =
                  h === n
                    ? t >= h
                      ? 1
                      : 0
                    : s(0, i(0.5 / (h - n) + (t - n) / (h - n), 1))),
                  (r = e(r))
              else if (3 == o)
                (r =
                  h === n
                    ? t >= h
                      ? 0
                      : 1
                    : 1 - s(0, i(0.5 / (h - n) + (t - n) / (h - n), 1))),
                  (r = e(r))
              else if (4 == o)
                h === n
                  ? (r = 0)
                  : ((r = s(0, i(0.5 / (h - n) + (t - n) / (h - n), 1))),
                    r < 0.5 ? (r *= 2) : (r = 1 - 2 * (r - 0.5))),
                  (r = e(r))
              else if (5 == o) {
                if (h === n) r = 0
                else {
                  var l = h - n
                  t = i(s(0, t + 0.5 - n), h - n)
                  var p = -l / 2 + t,
                    f = l / 2
                  r = Math.sqrt(1 - (p * p) / (f * f))
                }
                r = e(r)
              } else
                6 == o
                  ? (h === n
                      ? (r = 0)
                      : ((t = i(s(0, t + 0.5 - n), h - n)),
                        (r =
                          (1 +
                            Math.cos(Math.PI + (2 * Math.PI * t) / (h - n))) /
                          2)),
                    (r = e(r)))
                  : (t >= a(n) &&
                      (r = t - n < 0 ? 1 - (n - t) : s(0, i(h - t, 1))),
                    (r = e(r)))
              return r * this.a.v
            },
            getValue: function(t) {
              this.iterateDynamicProperties(),
                (this._mdf = t || this._mdf),
                (this._currentTextLength =
                  this.elem.textProperty.currentData.l.length || 0),
                t && 2 === this.data.r && (this.e.v = this._currentTextLength)
              var e = 2 === this.data.r ? 1 : 100 / this._currentTextLength,
                s = this.o.v / e,
                i = this.s.v / e + s,
                a = this.e.v / e + s
              if (i > a) {
                var r = i
                ;(i = a), (a = r)
              }
              ;(this.finalS = i), (this.finalE = a)
            },
          }),
          b([y], t),
          { getTextSelectorProp: e }
        )
      })(),
      re = (function() {
        return function(t, e, s, i) {
          function a() {
            var t
            return n ? ((n -= 1), (t = o[n])) : (t = e()), t
          }
          function r(t) {
            n === h && ((o = ne['double'](o)), (h = 2 * h)),
              s && s(t),
              (o[n] = t),
              (n += 1)
          }
          var n = 0,
            h = t,
            o = u(h),
            l = { newElement: a, release: r }
          return l
        }
      })(),
      ne = (function() {
        function t(t) {
          return t.concat(u(t.length))
        }
        return { double: t }
      })(),
      he = (function() {
        function t() {
          return Gt('float32', 2)
        }
        return re(8, t)
      })(),
      oe = (function() {
        function t() {
          return new M()
        }
        function e(t) {
          var e,
            s = t._length
          for (e = 0; e < s; e += 1)
            he.release(t.v[e]),
              he.release(t.i[e]),
              he.release(t.o[e]),
              (t.v[e] = null),
              (t.i[e] = null),
              (t.o[e] = null)
          ;(t._length = 0), (t.c = !1)
        }
        function s(t) {
          var e,
            s = i.newElement(),
            a = void 0 === t._length ? t.v.length : t._length
          s.setLength(a), (s.c = t.c)
          for (e = 0; e < a; e += 1)
            s.setTripleAt(
              t.v[e][0],
              t.v[e][1],
              t.o[e][0],
              t.o[e][1],
              t.i[e][0],
              t.i[e][1],
              e
            )
          return s
        }
        var i = re(4, t, e)
        return (i.clone = s), i
      })(),
      le = (function() {
        function t() {
          var t
          return i ? ((i -= 1), (t = r[i])) : (t = new E()), t
        }
        function e(t) {
          var e,
            s = t._length
          for (e = 0; e < s; e += 1) oe.release(t.shapes[e])
          ;(t._length = 0),
            i === a && ((r = ne['double'](r)), (a = 2 * a)),
            (r[i] = t),
            (i += 1)
        }
        var s = { newShapeCollection: t, release: e },
          i = 0,
          a = 4,
          r = u(a)
        return s
      })(),
      pe = (function() {
        function t() {
          return { lengths: [], totalLength: 0 }
        }
        function e(t) {
          var e,
            s = t.lengths.length
          for (e = 0; e < s; e += 1) fe.release(t.lengths[e])
          t.lengths.length = 0
        }
        return re(8, t, e)
      })(),
      fe = (function() {
        function t() {
          return {
            addedLength: 0,
            percents: Gt('float32', Ot),
            lengths: Gt('float32', Ot),
          }
        }
        return re(8, t)
      })()
    ;(z.prototype.checkLayers = function(t) {
      var e,
        s,
        i = this.layers.length
      for (this.completeLayers = !0, e = i - 1; e >= 0; e--)
        this.elements[e] ||
          ((s = this.layers[e]),
          s.ip - s.st <= t - this.layers[e].st &&
            s.op - s.st > t - this.layers[e].st &&
            this.buildItem(e)),
          (this.completeLayers = !!this.elements[e] && this.completeLayers)
      this.checkPendingElements()
    }),
      (z.prototype.createItem = function(t) {
        switch (t.ty) {
          case 2:
            return this.createImage(t)
          case 0:
            return this.createComp(t)
          case 1:
            return this.createSolid(t)
          case 3:
            return this.createNull(t)
          case 4:
            return this.createShape(t)
          case 5:
            return this.createText(t)
          case 13:
            return this.createCamera(t)
        }
        return this.createNull(t)
      }),
      (z.prototype.createCamera = function() {
        throw new Error("You're using a 3d camera. Try the html renderer.")
      }),
      (z.prototype.buildAllItems = function() {
        var t,
          e = this.layers.length
        for (t = 0; t < e; t += 1) this.buildItem(t)
        this.checkPendingElements()
      }),
      (z.prototype.includeLayers = function(t) {
        this.completeLayers = !1
        var e,
          s,
          i = t.length,
          a = this.layers.length
        for (e = 0; e < i; e += 1)
          for (s = 0; s < a; ) {
            if (this.layers[s].id == t[e].id) {
              this.layers[s] = t[e]
              break
            }
            s += 1
          }
      }),
      (z.prototype.setProjectInterface = function(t) {
        this.globalData.projectInterface = t
      }),
      (z.prototype.initItems = function() {
        this.globalData.progressiveLoad || this.buildAllItems()
      }),
      (z.prototype.buildElementParenting = function(t, e, s) {
        for (
          var i = this.elements, a = this.layers, r = 0, n = a.length;
          r < n;

        )
          a[r].ind == e &&
            (i[r] && i[r] !== !0
              ? (s.push(i[r]),
                i[r].setAsParent(),
                void 0 !== a[r].parent
                  ? this.buildElementParenting(t, a[r].parent, s)
                  : t.setHierarchy(s))
              : (this.buildItem(r), this.addPendingElement(t))),
            (r += 1)
      }),
      (z.prototype.addPendingElement = function(t) {
        this.pendingElements.push(t)
      }),
      (z.prototype.searchExtraCompositions = function(t) {
        var e,
          s = t.length
        for (e = 0; e < s; e += 1)
          if (t[e].xt) {
            var i = this.createComp(t[e])
            i.initExpressions(),
              this.globalData.projectInterface.registerComposition(i)
          }
      }),
      (z.prototype.setupGlobalData = function(t, e) {
        ;(this.globalData.fontManager = new Jt()),
          this.globalData.fontManager.addChars(t.chars),
          this.globalData.fontManager.addFonts(t.fonts, e),
          (this.globalData.getAssetData = this.animationItem.getAssetData.bind(
            this.animationItem
          )),
          (this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(
            this.animationItem
          )),
          (this.globalData.elementLoaded = this.animationItem.elementLoaded.bind(
            this.animationItem
          )),
          (this.globalData.addPendingElement = this.animationItem.addPendingElement.bind(
            this.animationItem
          )),
          (this.globalData.frameId = 0),
          (this.globalData.frameRate = t.fr),
          (this.globalData.nm = t.nm),
          (this.globalData.compSize = { w: t.w, h: t.h })
      }),
      b([z], R),
      (R.prototype.createNull = function(t) {
        return new $(t, this.globalData, this)
      }),
      (R.prototype.createShape = function(t) {
        return new ot(t, this.globalData, this)
      }),
      (R.prototype.createText = function(t) {
        return new ht(t, this.globalData, this)
      }),
      (R.prototype.createImage = function(t) {
        return new at(t, this.globalData, this)
      }),
      (R.prototype.createComp = function(t) {
        return new nt(t, this.globalData, this)
      }),
      (R.prototype.createSolid = function(t) {
        return new rt(t, this.globalData, this)
      }),
      (R.prototype.configAnimation = function(t) {
        this.svgElement.setAttribute('xmlns', 'http://www.w3.org/2000/svg'),
          this.renderConfig.viewBoxSize
            ? this.svgElement.setAttribute(
                'viewBox',
                this.renderConfig.viewBoxSize
              )
            : this.svgElement.setAttribute('viewBox', '0 0 ' + t.w + ' ' + t.h),
          this.renderConfig.viewBoxOnly ||
            (this.svgElement.setAttribute('width', t.w),
            this.svgElement.setAttribute('height', t.h),
            (this.svgElement.style.width = '100%'),
            (this.svgElement.style.height = '100%'),
            (this.svgElement.style.transform = 'translate3d(0,0,0)')),
          this.renderConfig.className &&
            this.svgElement.setAttribute('class', this.renderConfig.className),
          this.svgElement.setAttribute(
            'preserveAspectRatio',
            this.renderConfig.preserveAspectRatio
          ),
          this.animationItem.wrapper.appendChild(this.svgElement)
        var e = this.globalData.defs
        this.setupGlobalData(t, e),
          (this.globalData.progressiveLoad = this.renderConfig.progressiveLoad),
          (this.data = t)
        var s = g('clipPath'),
          i = g('rect')
        i.setAttribute('width', t.w),
          i.setAttribute('height', t.h),
          i.setAttribute('x', 0),
          i.setAttribute('y', 0)
        var a = 'animationMask_' + o(10)
        s.setAttribute('id', a),
          s.appendChild(i),
          this.layerElement.setAttribute(
            'clip-path',
            'url(' + wt + '#' + a + ')'
          ),
          e.appendChild(s),
          (this.layers = t.layers),
          (this.elements = u(t.layers.length))
      }),
      (R.prototype.destroy = function() {
        ;(this.animationItem.wrapper.innerHTML = ''),
          (this.layerElement = null),
          (this.globalData.defs = null)
        var t,
          e = this.layers ? this.layers.length : 0
        for (t = 0; t < e; t++) this.elements[t] && this.elements[t].destroy()
        ;(this.elements.length = 0),
          (this.destroyed = !0),
          (this.animationItem = null)
      }),
      (R.prototype.updateContainerSize = function() {}),
      (R.prototype.buildItem = function(t) {
        var e = this.elements
        if (!e[t] && 99 != this.layers[t].ty) {
          e[t] = !0
          var s = this.createItem(this.layers[t])
          ;(e[t] = s),
            Et &&
              (0 === this.layers[t].ty &&
                this.globalData.projectInterface.registerComposition(s),
              s.initExpressions()),
            this.appendElementInPos(s, t),
            this.layers[t].tt &&
              (this.elements[t - 1] && this.elements[t - 1] !== !0
                ? s.setMatte(e[t - 1].layerId)
                : (this.buildItem(t - 1), this.addPendingElement(s)))
        }
      }),
      (R.prototype.checkPendingElements = function() {
        for (; this.pendingElements.length; ) {
          var t = this.pendingElements.pop()
          if ((t.checkParenting(), t.data.tt))
            for (var e = 0, s = this.elements.length; e < s; ) {
              if (this.elements[e] === t) {
                t.setMatte(this.elements[e - 1].layerId)
                break
              }
              e += 1
            }
        }
      }),
      (R.prototype.renderFrame = function(t) {
        if (this.renderedFrame !== t && !this.destroyed) {
          null === t ? (t = this.renderedFrame) : (this.renderedFrame = t),
            (this.globalData.frameNum = t),
            (this.globalData.frameId += 1),
            (this.globalData.projectInterface.currentFrame = t),
            (this.globalData._mdf = !1)
          var e,
            s = this.layers.length
          for (
            this.completeLayers || this.checkLayers(t), e = s - 1;
            e >= 0;
            e--
          )
            (this.completeLayers || this.elements[e]) &&
              this.elements[e].prepareFrame(t - this.layers[e].st)
          if (this.globalData._mdf)
            for (e = 0; e < s; e += 1)
              (this.completeLayers || this.elements[e]) &&
                this.elements[e].renderFrame()
        }
      }),
      (R.prototype.appendElementInPos = function(t, e) {
        var s = t.getBaseElement()
        if (s) {
          for (var i, a = 0; a < e; )
            this.elements[a] &&
              this.elements[a] !== !0 &&
              this.elements[a].getBaseElement() &&
              (i = this.elements[a].getBaseElement()),
              (a += 1)
          i
            ? this.layerElement.insertBefore(s, i)
            : this.layerElement.appendChild(s)
        }
      }),
      (R.prototype.hide = function() {
        this.layerElement.style.display = 'none'
      }),
      (R.prototype.show = function() {
        this.layerElement.style.display = 'block'
      }),
      (V.prototype.getMaskProperty = function(t) {
        return this.viewData[t].prop
      }),
      (V.prototype.renderFrame = function(t) {
        var e,
          s = this.element.finalTransform.mat,
          i = this.masksProperties.length
        for (e = 0; e < i; e++)
          if (
            ((this.viewData[e].prop._mdf || t) &&
              this.drawPath(
                this.masksProperties[e],
                this.viewData[e].prop.v,
                this.viewData[e]
              ),
            (this.viewData[e].op._mdf || t) &&
              this.viewData[e].elem.setAttribute(
                'fill-opacity',
                this.viewData[e].op.v
              ),
            'n' !== this.masksProperties[e].mode &&
              (this.viewData[e].invRect &&
                (this.element.finalTransform.mProp._mdf || t) &&
                (this.viewData[e].invRect.setAttribute('x', -s.props[12]),
                this.viewData[e].invRect.setAttribute('y', -s.props[13])),
              this.storedData[e].x && (this.storedData[e].x._mdf || t)))
          ) {
            var a = this.storedData[e].expan
            this.storedData[e].x.v < 0
              ? ('erode' !== this.storedData[e].lastOperator &&
                  ((this.storedData[e].lastOperator = 'erode'),
                  this.storedData[e].elem.setAttribute(
                    'filter',
                    'url(' + wt + '#' + this.storedData[e].filterId + ')'
                  )),
                a.setAttribute('radius', -this.storedData[e].x.v))
              : ('dilate' !== this.storedData[e].lastOperator &&
                  ((this.storedData[e].lastOperator = 'dilate'),
                  this.storedData[e].elem.setAttribute('filter', null)),
                this.storedData[e].elem.setAttribute(
                  'stroke-width',
                  2 * this.storedData[e].x.v
                ))
          }
      }),
      (V.prototype.getMaskelement = function() {
        return this.maskElement
      }),
      (V.prototype.createLayerSolidPath = function() {
        var t = 'M0,0 '
        return (
          (t += ' h' + this.globalData.compSize.w),
          (t += ' v' + this.globalData.compSize.h),
          (t += ' h-' + this.globalData.compSize.w),
          (t += ' v-' + this.globalData.compSize.h + ' ')
        )
      }),
      (V.prototype.drawPath = function(t, e, s) {
        var i,
          a,
          r = ' M' + e.v[0][0] + ',' + e.v[0][1]
        for (a = e._length, i = 1; i < a; i += 1)
          r +=
            ' C' +
            e.o[i - 1][0] +
            ',' +
            e.o[i - 1][1] +
            ' ' +
            e.i[i][0] +
            ',' +
            e.i[i][1] +
            ' ' +
            e.v[i][0] +
            ',' +
            e.v[i][1]
        if (
          (e.c &&
            a > 1 &&
            (r +=
              ' C' +
              e.o[i - 1][0] +
              ',' +
              e.o[i - 1][1] +
              ' ' +
              e.i[0][0] +
              ',' +
              e.i[0][1] +
              ' ' +
              e.v[0][0] +
              ',' +
              e.v[0][1]),
          s.lastPath !== r)
        ) {
          var n = ''
          s.elem &&
            (e.c && (n = t.inv ? this.solidPath + r : r),
            s.elem.setAttribute('d', n)),
            (s.lastPath = r)
        }
      }),
      (V.prototype.destroy = function() {
        ;(this.element = null),
          (this.globalData = null),
          (this.maskElement = null),
          (this.data = null),
          (this.masksProperties = null)
      }),
      (N.prototype = {
        initHierarchy: function() {
          ;(this.hierarchy = []), (this._isParent = !1), this.checkParenting()
        },
        setHierarchy: function(t) {
          this.hierarchy = t
        },
        setAsParent: function() {
          this._isParent = !0
        },
        checkParenting: function() {
          void 0 !== this.data.parent &&
            this.comp.buildElementParenting(this, this.data.parent, [])
        },
      }),
      (O.prototype = {
        initFrame: function() {
          ;(this._isFirstFrame = !1),
            (this.dynamicProperties = []),
            (this._mdf = !1)
        },
        prepareProperties: function(t, e) {
          var s,
            i = this.dynamicProperties.length
          for (s = 0; s < i; s += 1)
            (e ||
              (this._isParent &&
                'transform' === this.dynamicProperties[s].propType)) &&
              (this.dynamicProperties[s].getValue(),
              this.dynamicProperties[s]._mdf &&
                ((this.globalData._mdf = !0), (this._mdf = !0)))
        },
        addDynamicProperty: function(t) {
          this.dynamicProperties.indexOf(t) === -1 &&
            this.dynamicProperties.push(t)
        },
      }),
      (B.prototype = {
        initTransform: function() {
          ;(this.finalTransform = {
            mProp: this.data.ks
              ? Zt.getTransformProperty(this, this.data.ks, this)
              : { o: 0 },
            _matMdf: !1,
            _opMdf: !1,
            mat: new Wt(),
          }),
            this.data.ao && (this.finalTransform.mProp.autoOriented = !0),
            11 !== this.data.ty
        },
        renderTransform: function() {
          if (
            ((this.finalTransform._opMdf =
              this.finalTransform.mProp.o._mdf || this._isFirstFrame),
            (this.finalTransform._matMdf =
              this.finalTransform.mProp._mdf || this._isFirstFrame),
            this.hierarchy)
          ) {
            var t,
              e = this.finalTransform.mat,
              s = 0,
              i = this.hierarchy.length
            if (!this.finalTransform._matMdf)
              for (; s < i; ) {
                if (this.hierarchy[s].finalTransform.mProp._mdf) {
                  this.finalTransform._matMdf = !0
                  break
                }
                s += 1
              }
            if (this.finalTransform._matMdf)
              for (
                t = this.finalTransform.mProp.v.props,
                  e.cloneFromProps(t),
                  s = 0;
                s < i;
                s += 1
              )
                (t = this.hierarchy[s].finalTransform.mProp.v.props),
                  e.transform(
                    t[0],
                    t[1],
                    t[2],
                    t[3],
                    t[4],
                    t[5],
                    t[6],
                    t[7],
                    t[8],
                    t[9],
                    t[10],
                    t[11],
                    t[12],
                    t[13],
                    t[14],
                    t[15]
                  )
          }
        },
        globalToLocal: function(t) {
          var e = []
          e.push(this.finalTransform)
          for (var s = !0, i = this.comp; s; )
            i.finalTransform
              ? (i.data.hasMask && e.splice(0, 0, i.finalTransform),
                (i = i.comp))
              : (s = !1)
          var a,
            r,
            n = e.length
          for (a = 0; a < n; a += 1)
            (r = e[a].mat.applyToPointArray(0, 0, 0)),
              (t = [t[0] - r[0], t[1] - r[1], 0])
          return t
        },
        mHelper: new Wt(),
      }),
      (q.prototype = {
        initRenderable: function() {
          ;(this.isInRange = !1),
            (this.hidden = !1),
            (this.isTransparent = !1),
            (this.renderableComponents = [])
        },
        addRenderableComponent: function(t) {
          this.renderableComponents.indexOf(t) === -1 &&
            this.renderableComponents.push(t)
        },
        removeRenderableComponent: function(t) {
          this.renderableComponents.indexOf(t) !== -1 &&
            this.renderableComponents.splice(
              this.renderableComponents.indexOf(t),
              1
            )
        },
        prepareRenderableFrame: function(t) {
          this.checkLayerLimits(t)
        },
        checkTransparency: function() {
          this.finalTransform.mProp.o.v <= 0
            ? !this.isTransparent &&
              this.globalData.renderConfig.hideOnTransparent &&
              ((this.isTransparent = !0), this.hide())
            : this.isTransparent && ((this.isTransparent = !1), this.show())
        },
        checkLayerLimits: function(t) {
          this.data.ip - this.data.st <= t && this.data.op - this.data.st > t
            ? this.isInRange !== !0 &&
              ((this.globalData._mdf = !0),
              (this._mdf = !0),
              (this.isInRange = !0),
              this.show())
            : this.isInRange !== !1 &&
              ((this.globalData._mdf = !0), (this.isInRange = !1), this.hide())
        },
        renderRenderable: function() {
          var t,
            e = this.renderableComponents.length
          for (t = 0; t < e; t += 1)
            this.renderableComponents[t].renderFrame(this._isFirstFrame)
        },
        sourceRectAtTime: function() {
          return { top: 0, left: 0, width: 100, height: 100 }
        },
        getLayerSize: function() {
          return 5 === this.data.ty
            ? { w: this.data.textData.width, h: this.data.textData.height }
            : { w: this.data.width, h: this.data.height }
        },
      }),
      (function() {
        var t = {
          initElement: function(t, e, s) {
            this.initFrame(),
              this.initBaseData(t, e, s),
              this.initTransform(t, e, s),
              this.initHierarchy(),
              this.initRenderable(),
              this.initRendererElement(),
              this.createContainerElements(),
              this.addMasks(),
              this.createContent(),
              this.hide()
          },
          hide: function() {
            if (!this.hidden && (!this.isInRange || this.isTransparent)) {
              var t = this.baseElement || this.layerElement
              ;(t.style.display = 'none'), (this.hidden = !0)
            }
          },
          show: function() {
            if (this.isInRange && !this.isTransparent) {
              if (!this.data.hd) {
                var t = this.baseElement || this.layerElement
                t.style.display = 'block'
              }
              ;(this.hidden = !1), (this._isFirstFrame = !0)
            }
          },
          renderFrame: function() {
            this.data.hd ||
              this.hidden ||
              (this.renderTransform(),
              this.renderRenderable(),
              this.renderElement(),
              this.renderInnerContent(),
              this._isFirstFrame && (this._isFirstFrame = !1))
          },
          renderInnerContent: function() {},
          prepareFrame: function(t) {
            ;(this._mdf = !1),
              this.prepareRenderableFrame(t),
              this.prepareProperties(t, this.isInRange),
              this.checkTransparency()
          },
          destroy: function() {
            ;(this.innerElem = null), this.destroyBaseElement()
          },
        }
        b([q, _(t)], j)
      })(),
      (W.prototype.reset = function() {
        ;(this.d = ''), (this._mdf = !1)
      }),
      (X.prototype.setAsAnimated = function() {
        this._isAnimated = !0
      }),
      b([y], H),
      b([y], J),
      (U.prototype.initGradientData = function(t, e, s) {
        ;(this.o = Ut.getProp(t, e.o, 0, 0.01, this)),
          (this.s = Ut.getProp(t, e.s, 1, null, this)),
          (this.e = Ut.getProp(t, e.e, 1, null, this)),
          (this.h = Ut.getProp(t, e.h || { k: 0 }, 0, 0.01, this)),
          (this.a = Ut.getProp(t, e.a || { k: 0 }, 0, Bt, this)),
          (this.g = new S(t, e.g, this)),
          (this.style = s),
          (this.stops = []),
          this.setGradientData(s.pElem, e),
          this.setGradientOpacity(e, s),
          (this._isAnimated = !!this._isAnimated)
      }),
      (U.prototype.setGradientData = function(t, e) {
        var s = 'gr_' + o(10),
          i = g(1 === e.t ? 'linearGradient' : 'radialGradient')
        i.setAttribute('id', s),
          i.setAttribute('spreadMethod', 'pad'),
          i.setAttribute('gradientUnits', 'userSpaceOnUse')
        var a,
          r,
          n,
          h = []
        for (n = 4 * e.g.p, r = 0; r < n; r += 4)
          (a = g('stop')), i.appendChild(a), h.push(a)
        t.setAttribute('gf' === e.ty ? 'fill' : 'stroke', 'url(#' + s + ')'),
          (this.gf = i),
          (this.cst = h)
      }),
      (U.prototype.setGradientOpacity = function(t, e) {
        if (this.g._hasOpacity && !this.g._collapsable) {
          var s,
            i,
            a,
            r = g('mask'),
            n = g('path')
          r.appendChild(n)
          var h = 'op_' + o(10),
            l = 'mk_' + o(10)
          r.setAttribute('id', l)
          var p = g(1 === t.t ? 'linearGradient' : 'radialGradient')
          p.setAttribute('id', h),
            p.setAttribute('spreadMethod', 'pad'),
            p.setAttribute('gradientUnits', 'userSpaceOnUse'),
            (a = t.g.k.k[0].s ? t.g.k.k[0].s.length : t.g.k.k.length)
          var f = this.stops
          for (i = 4 * t.g.p; i < a; i += 2)
            (s = g('stop')),
              s.setAttribute('stop-color', 'rgb(255,255,255)'),
              p.appendChild(s),
              f.push(s)
          n.setAttribute('gf' === t.ty ? 'fill' : 'stroke', 'url(#' + h + ')'),
            (this.of = p),
            (this.ms = r),
            (this.ost = f),
            (this.maskId = l),
            (e.msElem = n)
        }
      }),
      b([y], U),
      b([U, y], Z)
    var me = (function() {
      function t(t) {
        t.ty
        switch (t.ty) {
          case 'fl':
            return i
          case 'gf':
            return r
          case 'gs':
            return a
          case 'st':
            return n
          case 'sh':
          case 'el':
          case 'rc':
          case 'sr':
            return s
          case 'tr':
            return e
        }
      }
      function e(t, e, s) {
        ;(s || e.transform.op._mdf) &&
          e.transform.container.setAttribute('opacity', e.transform.op.v),
          (s || e.transform.mProps._mdf) &&
            e.transform.container.setAttribute(
              'transform',
              e.transform.mProps.v.to2dCSS()
            )
      }
      function s(t, e, s) {
        var i,
          a,
          r,
          n,
          l,
          p,
          f,
          m,
          d,
          c,
          u,
          g = e.styles.length,
          v = e.lvl
        for (p = 0; p < g; p += 1) {
          if (((n = e.sh._mdf || s), e.styles[p].lvl < v)) {
            for (
              m = o.reset(),
                c = v - e.styles[p].lvl,
                u = e.transformers.length - 1;
              !n && c > 0;

            )
              (n = e.transformers[u].mProps._mdf || n), c--, u--
            if (n)
              for (
                c = v - e.styles[p].lvl, u = e.transformers.length - 1;
                c > 0;

              )
                (d = e.transformers[u].mProps.v.props),
                  m.transform(
                    d[0],
                    d[1],
                    d[2],
                    d[3],
                    d[4],
                    d[5],
                    d[6],
                    d[7],
                    d[8],
                    d[9],
                    d[10],
                    d[11],
                    d[12],
                    d[13],
                    d[14],
                    d[15]
                  ),
                  c--,
                  u--
          } else m = h
          if (((f = e.sh.paths), (a = f._length), n)) {
            for (r = '', i = 0; i < a; i += 1)
              (l = f.shapes[i]),
                l && l._length && (r += $t(l, l._length, l.c, m))
            e.caches[p] = r
          } else r = e.caches[p]
          ;(e.styles[p].d += r), (e.styles[p]._mdf = n || e.styles[p]._mdf)
        }
      }
      function i(t, e, s) {
        var i = e.style
        ;(e.c._mdf || s) &&
          i.pElem.setAttribute(
            'fill',
            'rgb(' +
              Rt(e.c.v[0]) +
              ',' +
              Rt(e.c.v[1]) +
              ',' +
              Rt(e.c.v[2]) +
              ')'
          ),
          (e.o._mdf || s) && i.pElem.setAttribute('fill-opacity', e.o.v)
      }
      function a(t, e, s) {
        r(t, e, s), n(t, e, s)
      }
      function r(t, e, s) {
        var i = e.gf,
          a = e.g._hasOpacity,
          r = e.s.v,
          n = e.e.v
        if (e.o._mdf || s) {
          var h = 'gf' === t.ty ? 'fill-opacity' : 'stroke-opacity'
          e.style.pElem.setAttribute(h, e.o.v)
        }
        if (e.s._mdf || s) {
          var o = 1 === t.t ? 'x1' : 'cx',
            l = 'x1' === o ? 'y1' : 'cy'
          i.setAttribute(o, r[0]),
            i.setAttribute(l, r[1]),
            a &&
              !e.g._collapsable &&
              (e.of.setAttribute(o, r[0]), e.of.setAttribute(l, r[1]))
        }
        var p, f, m, d
        if (e.g._cmdf || s) {
          p = e.cst
          var c = e.g.c
          for (m = p.length, f = 0; f < m; f += 1)
            (d = p[f]),
              d.setAttribute('offset', c[4 * f] + '%'),
              d.setAttribute(
                'stop-color',
                'rgb(' +
                  c[4 * f + 1] +
                  ',' +
                  c[4 * f + 2] +
                  ',' +
                  c[4 * f + 3] +
                  ')'
              )
        }
        if (a && (e.g._omdf || s)) {
          var u = e.g.o
          for (
            p = e.g._collapsable ? e.cst : e.ost, m = p.length, f = 0;
            f < m;
            f += 1
          )
            (d = p[f]),
              e.g._collapsable || d.setAttribute('offset', u[2 * f] + '%'),
              d.setAttribute('stop-opacity', u[2 * f + 1])
        }
        if (1 === t.t)
          (e.e._mdf || s) &&
            (i.setAttribute('x2', n[0]),
            i.setAttribute('y2', n[1]),
            a &&
              !e.g._collapsable &&
              (e.of.setAttribute('x2', n[0]), e.of.setAttribute('y2', n[1])))
        else {
          var g
          if (
            ((e.s._mdf || e.e._mdf || s) &&
              ((g = Math.sqrt(
                Math.pow(r[0] - n[0], 2) + Math.pow(r[1] - n[1], 2)
              )),
              i.setAttribute('r', g),
              a && !e.g._collapsable && e.of.setAttribute('r', g)),
            e.e._mdf || e.h._mdf || e.a._mdf || s)
          ) {
            g ||
              (g = Math.sqrt(
                Math.pow(r[0] - n[0], 2) + Math.pow(r[1] - n[1], 2)
              ))
            var v = Math.atan2(n[1] - r[1], n[0] - r[0]),
              y = e.h.v >= 1 ? 0.99 : e.h.v <= -1 ? -0.99 : e.h.v,
              b = g * y,
              _ = Math.cos(v + e.a.v) * b + r[0],
              k = Math.sin(v + e.a.v) * b + r[1]
            i.setAttribute('fx', _),
              i.setAttribute('fy', k),
              a &&
                !e.g._collapsable &&
                (e.of.setAttribute('fx', _), e.of.setAttribute('fy', k))
          }
        }
      }
      function n(t, e, s) {
        var i = e.style,
          a = e.d
        a &&
          (a._mdf || s) &&
          a.dashStr &&
          (i.pElem.setAttribute('stroke-dasharray', a.dashStr),
          i.pElem.setAttribute('stroke-dashoffset', a.dashoffset[0])),
          e.c &&
            (e.c._mdf || s) &&
            i.pElem.setAttribute(
              'stroke',
              'rgb(' +
                Rt(e.c.v[0]) +
                ',' +
                Rt(e.c.v[1]) +
                ',' +
                Rt(e.c.v[2]) +
                ')'
            ),
          (e.o._mdf || s) && i.pElem.setAttribute('stroke-opacity', e.o.v),
          (e.w._mdf || s) &&
            (i.pElem.setAttribute('stroke-width', e.w.v),
            i.msElem && i.msElem.setAttribute('stroke-width', e.w.v))
      }
      var h = new Wt(),
        o = new Wt(),
        l = { createRenderFunction: t }
      return l
    })()
    ;(Q.prototype = {
      checkMasks: function() {
        if (!this.data.hasMask) return !1
        for (var t = 0, e = this.data.masksProperties.length; t < e; ) {
          if (
            'n' !== this.data.masksProperties[t].mode &&
            this.data.masksProperties[t].cl !== !1
          )
            return !0
          t += 1
        }
        return !1
      },
      initExpressions: function() {
        ;(this.layerInterface = LayerExpressionInterface(this)),
          this.data.hasMask &&
            this.maskManager &&
            this.layerInterface.registerMaskInterface(this.maskManager)
        var t = EffectsExpressionInterface.createEffectsInterface(
          this,
          this.layerInterface
        )
        this.layerInterface.registerEffectsInterface(t),
          0 === this.data.ty || this.data.xt
            ? (this.compInterface = CompExpressionInterface(this))
            : 4 === this.data.ty
            ? ((this.layerInterface.shapeInterface = ShapeExpressionInterface(
                this.shapesData,
                this.itemsData,
                this.layerInterface
              )),
              (this.layerInterface.content = this.layerInterface.shapeInterface))
            : 5 === this.data.ty &&
              ((this.layerInterface.textInterface = TextExpressionInterface(
                this
              )),
              (this.layerInterface.text = this.layerInterface.textInterface))
      },
      blendModeEnums: {
        1: 'multiply',
        2: 'screen',
        3: 'overlay',
        4: 'darken',
        5: 'lighten',
        6: 'color-dodge',
        7: 'color-burn',
        8: 'hard-light',
        9: 'soft-light',
        10: 'difference',
        11: 'exclusion',
        12: 'hue',
        13: 'saturation',
        14: 'color',
        15: 'luminosity',
      },
      getBlendMode: function() {
        return this.blendModeEnums[this.data.bm] || ''
      },
      setBlendMode: function() {
        var t = this.getBlendMode(),
          e = this.baseElement || this.layerElement
        e.style['mix-blend-mode'] = t
      },
      initBaseData: function(t, e, s) {
        ;(this.globalData = e),
          (this.comp = s),
          (this.data = t),
          (this.layerId = 'ly_' + o(10)),
          this.data.sr || (this.data.sr = 1),
          (this.effectsManager = new vt(
            this.data,
            this,
            this.dynamicProperties
          ))
      },
      getType: function() {
        return this.type
      },
    }),
      ($.prototype.prepareFrame = function(t) {
        this.prepareProperties(t, !0)
      }),
      ($.prototype.renderFrame = function() {}),
      ($.prototype.getBaseElement = function() {
        return null
      }),
      ($.prototype.destroy = function() {}),
      ($.prototype.sourceRectAtTime = function() {}),
      ($.prototype.hide = function() {}),
      b([Q, B, N, O], $),
      (tt.prototype = {
        initRendererElement: function() {
          this.layerElement = g('g')
        },
        createContainerElements: function() {
          ;(this.matteElement = g('g')),
            (this.transformedElement = this.layerElement),
            (this.maskedElement = this.layerElement),
            (this._sizeChanged = !1)
          var t,
            e,
            s,
            i = null
          if (this.data.td) {
            if (3 == this.data.td || 1 == this.data.td) {
              var a = g('mask')
              a.setAttribute('id', this.layerId),
                a.setAttribute(
                  'mask-type',
                  3 == this.data.td ? 'luminance' : 'alpha'
                ),
                a.appendChild(this.layerElement),
                (i = a),
                this.globalData.defs.appendChild(a),
                ee.maskType ||
                  1 != this.data.td ||
                  (a.setAttribute('mask-type', 'luminance'),
                  (t = o(10)),
                  (e = se.createFilter(t)),
                  this.globalData.defs.appendChild(e),
                  e.appendChild(se.createAlphaToLuminanceFilter()),
                  (s = g('g')),
                  s.appendChild(this.layerElement),
                  (i = s),
                  a.appendChild(s),
                  s.setAttribute('filter', 'url(' + wt + '#' + t + ')'))
            } else if (2 == this.data.td) {
              var r = g('mask')
              r.setAttribute('id', this.layerId),
                r.setAttribute('mask-type', 'alpha')
              var n = g('g')
              r.appendChild(n), (t = o(10)), (e = se.createFilter(t))
              var h = g('feColorMatrix')
              h.setAttribute('type', 'matrix'),
                h.setAttribute('color-interpolation-filters', 'sRGB'),
                h.setAttribute(
                  'values',
                  '1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 -1 1'
                ),
                e.appendChild(h),
                this.globalData.defs.appendChild(e)
              var l = g('rect')
              l.setAttribute('width', this.comp.data.w),
                l.setAttribute('height', this.comp.data.h),
                l.setAttribute('x', '0'),
                l.setAttribute('y', '0'),
                l.setAttribute('fill', '#ffffff'),
                l.setAttribute('opacity', '0'),
                n.setAttribute('filter', 'url(' + wt + '#' + t + ')'),
                n.appendChild(l),
                n.appendChild(this.layerElement),
                (i = n),
                ee.maskType ||
                  (r.setAttribute('mask-type', 'luminance'),
                  e.appendChild(se.createAlphaToLuminanceFilter()),
                  (s = g('g')),
                  n.appendChild(l),
                  s.appendChild(this.layerElement),
                  (i = s),
                  n.appendChild(s)),
                this.globalData.defs.appendChild(r)
            }
          } else
            this.data.tt
              ? (this.matteElement.appendChild(this.layerElement),
                (i = this.matteElement),
                (this.baseElement = this.matteElement))
              : (this.baseElement = this.layerElement)
          if (
            (this.data.ln && this.layerElement.setAttribute('id', this.data.ln),
            this.data.cl &&
              this.layerElement.setAttribute('class', this.data.cl),
            0 === this.data.ty && !this.data.hd)
          ) {
            var p = g('clipPath'),
              f = g('path')
            f.setAttribute(
              'd',
              'M0,0 L' +
                this.data.w +
                ',0 L' +
                this.data.w +
                ',' +
                this.data.h +
                ' L0,' +
                this.data.h +
                'z'
            )
            var m = 'cp_' + o(8)
            if (
              (p.setAttribute('id', m),
              p.appendChild(f),
              this.globalData.defs.appendChild(p),
              this.checkMasks())
            ) {
              var d = g('g')
              d.setAttribute('clip-path', 'url(' + wt + '#' + m + ')'),
                d.appendChild(this.layerElement),
                (this.transformedElement = d),
                i
                  ? i.appendChild(this.transformedElement)
                  : (this.baseElement = this.transformedElement)
            } else
              this.layerElement.setAttribute(
                'clip-path',
                'url(' + wt + '#' + m + ')'
              )
          }
          0 !== this.data.bm && this.setBlendMode(),
            (this.renderableEffectsManager = new gt(this))
        },
        renderElement: function() {
          this.finalTransform._matMdf &&
            this.transformedElement.setAttribute(
              'transform',
              this.finalTransform.mat.to2dCSS()
            ),
            this.finalTransform._opMdf &&
              this.transformedElement.setAttribute(
                'opacity',
                this.finalTransform.mProp.o.v
              )
        },
        destroyBaseElement: function() {
          ;(this.layerElement = null),
            (this.matteElement = null),
            this.maskManager.destroy()
        },
        getBaseElement: function() {
          return this.data.hd ? null : this.baseElement
        },
        addMasks: function() {
          this.maskManager = new V(this.data, this, this.globalData)
        },
        setMatte: function(t) {
          this.matteElement &&
            this.matteElement.setAttribute('mask', 'url(' + wt + '#' + t + ')')
        },
      }),
      (et.prototype = {
        addShapeToModifiers: function(t) {
          var e,
            s = this.shapeModifiers.length
          for (e = 0; e < s; e += 1) this.shapeModifiers[e].addShape(t)
        },
        isShapeInAnimatedModifiers: function(t) {
          for (var e = 0, s = this.shapeModifiers.length; e < s; )
            if (this.shapeModifiers[e].isAnimatedWithShape(t)) return !0
          return !1
        },
        renderModifiers: function() {
          if (this.shapeModifiers.length) {
            var t,
              e = this.shapes.length
            for (t = 0; t < e; t += 1) this.shapes[t].sh.reset()
            for (e = this.shapeModifiers.length, t = e - 1; t >= 0; t -= 1)
              this.shapeModifiers[t].processShapes(this._isFirstFrame)
          }
        },
        lcEnum: { 1: 'butt', 2: 'round', 3: 'square' },
        ljEnum: { 1: 'miter', 2: 'round', 3: 'butt' },
        searchProcessedElement: function(t) {
          for (var e = this.processedElements, s = 0, i = e.length; s < i; ) {
            if (e[s].elem === t) return e[s].pos
            s += 1
          }
          return 0
        },
        addProcessedElement: function(t, e) {
          for (var s = this.processedElements, i = s.length; i; )
            if (((i -= 1), s[i].elem === t)) return void (s[i].pos = e)
          s.push(new G(t, e))
        },
        prepareFrame: function(t) {
          this.prepareRenderableFrame(t),
            this.prepareProperties(t, this.isInRange)
        },
      }),
      (st.prototype.initElement = function(t, e, s) {
        ;(this.lettersChangedFlag = !0),
          this.initFrame(),
          this.initBaseData(t, e, s),
          (this.textProperty = new L(this, t.t, this.dynamicProperties)),
          (this.textAnimator = new w(t.t, this.renderType, this)),
          this.initTransform(t, e, s),
          this.initHierarchy(),
          this.initRenderable(),
          this.initRendererElement(),
          this.createContainerElements(),
          this.addMasks(),
          this.createContent(),
          this.hide(),
          this.textAnimator.searchProperties(this.dynamicProperties)
      }),
      (st.prototype.prepareFrame = function(t) {
        ;(this._mdf = !1),
          this.prepareRenderableFrame(t),
          this.prepareProperties(t, this.isInRange),
          (this.textProperty._mdf || this.textProperty._isFirstFrame) &&
            (this.buildNewText(),
            (this.textProperty._isFirstFrame = !1),
            (this.textProperty._mdf = !1))
      }),
      (st.prototype.createPathShape = function(t, e) {
        var s,
          i,
          a = e.length,
          r = ''
        for (s = 0; s < a; s += 1)
          (i = e[s].ks.k), (r += $t(i, i.i.length, !0, t))
        return r
      }),
      (st.prototype.updateDocumentData = function(t, e) {
        this.textProperty.updateDocumentData(t, e)
      }),
      (st.prototype.canResizeFont = function(t) {
        this.textProperty.canResizeFont(t)
      }),
      (st.prototype.setMinimumFontSize = function(t) {
        this.textProperty.setMinimumFontSize(t)
      }),
      (st.prototype.applyTextPropertiesToMatrix = function(t, e, s, i, a) {
        switch (
          (t.ps && e.translate(t.ps[0], t.ps[1] + t.ascent, 0),
          e.translate(0, -t.ls, 0),
          t.j)
        ) {
          case 1:
            e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[s]), 0, 0)
            break
          case 2:
            e.translate(
              t.justifyOffset + (t.boxWidth - t.lineWidths[s]) / 2,
              0,
              0
            )
        }
        e.translate(i, a, 0)
      }),
      (st.prototype.buildColor = function(t) {
        return (
          'rgb(' +
          Math.round(255 * t[0]) +
          ',' +
          Math.round(255 * t[1]) +
          ',' +
          Math.round(255 * t[2]) +
          ')'
        )
      }),
      (st.prototype.emptyProp = new I()),
      (st.prototype.destroy = function() {}),
      b([Q, B, N, O, j], it),
      (it.prototype.initElement = function(t, e, s) {
        this.initFrame(),
          this.initBaseData(t, e, s),
          this.initTransform(t, e, s),
          this.initRenderable(),
          this.initHierarchy(),
          this.initRendererElement(),
          this.createContainerElements(),
          this.addMasks(),
          (!this.data.xt && e.progressiveLoad) || this.buildAllItems(),
          this.hide()
      }),
      (it.prototype.prepareFrame = function(t) {
        if (
          ((this._mdf = !1),
          this.prepareRenderableFrame(t),
          this.prepareProperties(t, this.isInRange),
          this.isInRange || this.data.xt)
        ) {
          if (this.tm._placeholder) this.renderedFrame = t / this.data.sr
          else {
            var e = this.tm.v
            e === this.data.op && (e = this.data.op - 1),
              (this.renderedFrame = e)
          }
          var s,
            i = this.elements.length
          for (
            this.completeLayers || this.checkLayers(this.renderedFrame),
              s = i - 1;
            s >= 0;
            s -= 1
          )
            (this.completeLayers || this.elements[s]) &&
              (this.elements[s].prepareFrame(
                this.renderedFrame - this.layers[s].st
              ),
              this.elements[s]._mdf && (this._mdf = !0))
        }
      }),
      (it.prototype.renderInnerContent = function() {
        var t,
          e = this.layers.length
        for (t = 0; t < e; t += 1)
          (this.completeLayers || this.elements[t]) &&
            this.elements[t].renderFrame()
      }),
      (it.prototype.setElements = function(t) {
        this.elements = t
      }),
      (it.prototype.getElements = function() {
        return this.elements
      }),
      (it.prototype.destroyElements = function() {
        var t,
          e = this.layers.length
        for (t = 0; t < e; t += 1)
          this.elements[t] && this.elements[t].destroy()
      }),
      (it.prototype.destroy = function() {
        this.destroyElements(), this.destroyBaseElement()
      }),
      b([Q, B, tt, N, O, j], at),
      (at.prototype.createContent = function() {
        var t = this.globalData.getAssetsPath(this.assetData)
        ;(this.innerElem = g('image')),
          this.innerElem.setAttribute('width', this.assetData.w + 'px'),
          this.innerElem.setAttribute('height', this.assetData.h + 'px'),
          this.innerElem.setAttribute('preserveAspectRatio', 'xMidYMid slice'),
          this.innerElem.setAttributeNS(
            'http://www.w3.org/1999/xlink',
            'href',
            t
          ),
          this.layerElement.appendChild(this.innerElem)
      }),
      b([at], rt),
      (rt.prototype.createContent = function() {
        var t = g('rect')
        t.setAttribute('width', this.data.sw),
          t.setAttribute('height', this.data.sh),
          t.setAttribute('fill', this.data.sc),
          this.layerElement.appendChild(t)
      }),
      b([R, it, tt], nt),
      b([Q, B, tt, N, O, j, st], ht),
      (ht.prototype.createContent = function() {
        this.data.singleShape &&
          !this.globalData.fontManager.chars &&
          (this.textContainer = g('text'))
      }),
      (ht.prototype.buildTextContents = function(t) {
        for (var e = 0, s = t.length, i = [], a = ''; e < s; )
          t[e] === String.fromCharCode(13)
            ? (i.push(a), (a = ''))
            : (a += t[e]),
            (e += 1)
        return i.push(a), i
      }),
      (ht.prototype.buildNewText = function() {
        var t,
          e,
          s = this.textProperty.currentData
        ;(this.renderedLetters = u(s ? s.l.length : 0)),
          s.fc
            ? this.layerElement.setAttribute('fill', this.buildColor(s.fc))
            : this.layerElement.setAttribute('fill', 'rgba(0,0,0,0)'),
          s.sc &&
            (this.layerElement.setAttribute('stroke', this.buildColor(s.sc)),
            this.layerElement.setAttribute('stroke-width', s.sw)),
          this.layerElement.setAttribute('font-size', s.finalSize)
        var i = this.globalData.fontManager.getFontByName(s.f)
        if (i.fClass) this.layerElement.setAttribute('class', i.fClass)
        else {
          this.layerElement.setAttribute('font-family', i.fFamily)
          var a = s.fWeight,
            r = s.fStyle
          this.layerElement.setAttribute('font-style', r),
            this.layerElement.setAttribute('font-weight', a)
        }
        var n = s.l || [],
          h = this.globalData.fontManager.chars
        if ((e = n.length)) {
          var o,
            l,
            p = this.mHelper,
            f = '',
            m = this.data.singleShape,
            d = 0,
            c = 0,
            v = !0,
            y = (s.tr / 1e3) * s.finalSize
          if (!m || h || s.sz) {
            var b,
              _,
              k = this.textSpans.length
            for (t = 0; t < e; t += 1)
              (h && m && 0 !== t) ||
                ((o = k > t ? this.textSpans[t] : g(h ? 'path' : 'text')),
                k <= t &&
                  (o.setAttribute('stroke-linecap', 'butt'),
                  o.setAttribute('stroke-linejoin', 'round'),
                  o.setAttribute('stroke-miterlimit', '4'),
                  (this.textSpans[t] = o),
                  this.layerElement.appendChild(o)),
                (o.style.display = 'inherit')),
                p.reset(),
                p.scale(s.finalSize / 100, s.finalSize / 100),
                m &&
                  (n[t].n &&
                    ((d = -y), (c += s.yOffset), (c += v ? 1 : 0), (v = !1)),
                  this.applyTextPropertiesToMatrix(s, p, n[t].line, d, c),
                  (d += n[t].l || 0),
                  (d += y)),
                h
                  ? ((_ = this.globalData.fontManager.getCharData(
                      s.finalText[t],
                      i.fStyle,
                      this.globalData.fontManager.getFontByName(s.f).fFamily
                    )),
                    (b = (_ && _.data) || {}),
                    (l = b.shapes ? b.shapes[0].it : []),
                    m
                      ? (f += this.createPathShape(p, l))
                      : o.setAttribute('d', this.createPathShape(p, l)))
                  : (m &&
                      o.setAttribute(
                        'transform',
                        'translate(' + p.props[12] + ',' + p.props[13] + ')'
                      ),
                    (o.textContent = n[t].val),
                    o.setAttributeNS(
                      'http://www.w3.org/XML/1998/namespace',
                      'xml:space',
                      'preserve'
                    ))
            m && o.setAttribute('d', f)
          } else {
            var A = this.textContainer,
              M = 'start'
            switch (s.j) {
              case 1:
                M = 'end'
                break
              case 2:
                M = 'middle'
            }
            A.setAttribute('text-anchor', M),
              A.setAttribute('letter-spacing', y)
            var P = this.buildTextContents(s.finalText)
            for (
              e = P.length, c = s.ps ? s.ps[1] + s.ascent : 0, t = 0;
              t < e;
              t += 1
            )
              (o = this.textSpans[t] || g('tspan')),
                (o.textContent = P[t]),
                o.setAttribute('x', 0),
                o.setAttribute('y', c),
                (o.style.display = 'inherit'),
                A.appendChild(o),
                (this.textSpans[t] = o),
                (c += s.finalLineHeight)
            this.layerElement.appendChild(A)
          }
          for (; t < this.textSpans.length; )
            (this.textSpans[t].style.display = 'none'), (t += 1)
          this._sizeChanged = !0
        }
      }),
      (ht.prototype.sourceRectAtTime = function(t) {
        if (
          (this.prepareFrame(this.comp.renderedFrame - this.data.st),
          this.renderInnerContent(),
          this._sizeChanged)
        ) {
          this._sizeChanged = !1
          var e = this.layerElement.getBBox()
          this.bbox = { top: e.y, left: e.x, width: e.width, height: e.height }
        }
        return this.bbox
      }),
      (ht.prototype.renderInnerContent = function() {
        if (
          !this.data.singleShape &&
          (this.textAnimator.getMeasures(
            this.textProperty.currentData,
            this.lettersChangedFlag
          ),
          this.lettersChangedFlag || this.textAnimator.lettersChangedFlag)
        ) {
          this._sizeChanged = !0
          var t,
            e,
            s = this.textAnimator.renderedLetters,
            i = this.textProperty.currentData.l
          e = i.length
          var a, r
          for (t = 0; t < e; t += 1)
            i[t].n ||
              ((a = s[t]),
              (r = this.textSpans[t]),
              a._mdf.m && r.setAttribute('transform', a.m),
              a._mdf.o && r.setAttribute('opacity', a.o),
              a._mdf.sw && r.setAttribute('stroke-width', a.sw),
              a._mdf.sc && r.setAttribute('stroke', a.sc),
              a._mdf.fc && r.setAttribute('fill', a.fc))
        }
      }),
      b([Q, B, tt, et, N, O, j], ot),
      (ot.prototype.initSecondaryElement = function() {}),
      (ot.prototype.identityMatrix = new Wt()),
      (ot.prototype.buildExpressionInterface = function() {}),
      (ot.prototype.createContent = function() {
        this.searchShapes(
          this.shapesData,
          this.itemsData,
          this.prevViewData,
          this.layerElement,
          0,
          [],
          !0
        ),
          this.filterUniqueShapes()
      }),
      (ot.prototype.filterUniqueShapes = function() {
        var t,
          e,
          s,
          i,
          a = this.shapes.length,
          r = this.stylesList.length,
          n = [],
          h = !1
        for (s = 0; s < r; s += 1) {
          for (
            i = this.stylesList[s], h = !1, n.length = 0, t = 0;
            t < a;
            t += 1
          )
            (e = this.shapes[t]),
              e.styles.indexOf(i) !== -1 &&
                (n.push(e), (h = e._isAnimated || h))
          n.length > 1 && h && this.setShapesAsAnimated(n)
        }
      }),
      (ot.prototype.setShapesAsAnimated = function(t) {
        var e,
          s = t.length
        for (e = 0; e < s; e += 1) t[e].setAsAnimated()
      }),
      (ot.prototype.createStyleElement = function(t, e) {
        var s,
          i = new W(t, e),
          a = i.pElem
        if ('st' === t.ty) s = new H(this, t, i)
        else if ('fl' === t.ty) s = new J(this, t, i)
        else if ('gf' === t.ty || 'gs' === t.ty) {
          var r = 'gf' === t.ty ? U : Z
          ;(s = new r(this, t, i)),
            this.globalData.defs.appendChild(s.gf),
            s.maskId &&
              (this.globalData.defs.appendChild(s.ms),
              this.globalData.defs.appendChild(s.of),
              a.setAttribute('mask', 'url(#' + s.maskId + ')'))
        }
        return (
          ('st' !== t.ty && 'gs' !== t.ty) ||
            (a.setAttribute('stroke-linecap', this.lcEnum[t.lc] || 'round'),
            a.setAttribute('stroke-linejoin', this.ljEnum[t.lj] || 'round'),
            a.setAttribute('fill-opacity', '0'),
            1 === t.lj && a.setAttribute('stroke-miterlimit', t.ml)),
          2 === t.r && a.setAttribute('fill-rule', 'evenodd'),
          t.ln && a.setAttribute('id', t.ln),
          t.cl && a.setAttribute('class', t.cl),
          this.stylesList.push(i),
          this.addToAnimatedContents(t, s),
          s
        )
      }),
      (ot.prototype.createGroupElement = function(t) {
        var e = new K()
        return t.ln && e.gr.setAttribute('id', t.ln), e
      }),
      (ot.prototype.createTransformElement = function(t, e) {
        var s = Zt.getTransformProperty(this, t, this),
          i = new Y(s, s.o, e)
        return this.addToAnimatedContents(t, i), i
      }),
      (ot.prototype.createShapeElement = function(t, e, s) {
        var i = 4
        'rc' === t.ty
          ? (i = 5)
          : 'el' === t.ty
          ? (i = 6)
          : 'sr' === t.ty && (i = 7)
        var a = Kt.getShapeProp(this, t, i, this),
          r = new X(e, s, a)
        return (
          this.shapes.push(r),
          this.addShapeToModifiers(r),
          this.addToAnimatedContents(t, r),
          r
        )
      }),
      (ot.prototype.addToAnimatedContents = function(t, e) {
        for (var s = 0, i = this.animatedContents.length; s < i; ) {
          if (this.animatedContents[s].element === e) return
          s += 1
        }
        this.animatedContents.push({
          fn: me.createRenderFunction(t),
          element: e,
          data: t,
        })
      }),
      (ot.prototype.setElementStyles = function(t) {
        var e,
          s = t.styles,
          i = this.stylesList.length
        for (e = 0; e < i; e += 1)
          this.stylesList[e].closed || s.push(this.stylesList[e])
      }),
      (ot.prototype.reloadShapes = function() {
        this._isFirstFrame = !0
        var t,
          e = this.itemsData.length
        for (t = 0; t < e; t += 1) this.prevViewData[t] = this.itemsData[t]
        for (
          this.searchShapes(
            this.shapesData,
            this.itemsData,
            this.prevViewData,
            this.layerElement,
            0,
            [],
            !0
          ),
            this.filterUniqueShapes(),
            e = this.dynamicProperties.length,
            t = 0;
          t < e;
          t += 1
        )
          this.dynamicProperties[t].getValue()
        this.renderModifiers()
      }),
      (ot.prototype.searchShapes = function(t, e, s, i, a, r, n) {
        var h,
          o,
          l,
          p,
          f,
          m,
          d = [].concat(r),
          c = t.length - 1,
          u = [],
          g = []
        for (h = c; h >= 0; h -= 1) {
          if (
            ((m = this.searchProcessedElement(t[h])),
            m ? (e[h] = s[m - 1]) : (t[h]._render = n),
            'fl' == t[h].ty ||
              'st' == t[h].ty ||
              'gf' == t[h].ty ||
              'gs' == t[h].ty)
          )
            m
              ? (e[h].style.closed = !1)
              : (e[h] = this.createStyleElement(t[h], a)),
              t[h]._render && i.appendChild(e[h].style.pElem),
              u.push(e[h].style)
          else if ('gr' == t[h].ty) {
            if (m)
              for (l = e[h].it.length, o = 0; o < l; o += 1)
                e[h].prevViewData[o] = e[h].it[o]
            else e[h] = this.createGroupElement(t[h])
            this.searchShapes(
              t[h].it,
              e[h].it,
              e[h].prevViewData,
              e[h].gr,
              a + 1,
              d,
              n
            ),
              t[h]._render && i.appendChild(e[h].gr)
          } else
            'tr' == t[h].ty
              ? (m || (e[h] = this.createTransformElement(t[h], i)),
                (p = e[h].transform),
                d.push(p))
              : 'sh' == t[h].ty ||
                'rc' == t[h].ty ||
                'el' == t[h].ty ||
                'sr' == t[h].ty
              ? (m || (e[h] = this.createShapeElement(t[h], d, a)),
                this.setElementStyles(e[h]))
              : 'tm' == t[h].ty || 'rd' == t[h].ty || 'ms' == t[h].ty
              ? (m
                  ? ((f = e[h]), (f.closed = !1))
                  : ((f = Qt.getModifier(t[h].ty)),
                    f.init(this, t[h]),
                    (e[h] = f),
                    this.shapeModifiers.push(f)),
                g.push(f))
              : 'rp' == t[h].ty &&
                (m
                  ? ((f = e[h]), (f.closed = !0))
                  : ((f = Qt.getModifier(t[h].ty)),
                    (e[h] = f),
                    f.init(this, t, h, e),
                    this.shapeModifiers.push(f),
                    (n = !1)),
                g.push(f))
          this.addProcessedElement(t[h], h + 1)
        }
        for (c = u.length, h = 0; h < c; h += 1) u[h].closed = !0
        for (c = g.length, h = 0; h < c; h += 1) g[h].closed = !0
      }),
      (ot.prototype.renderInnerContent = function() {
        this.renderModifiers()
        var t,
          e = this.stylesList.length
        for (t = 0; t < e; t += 1) this.stylesList[t].reset()
        for (this.renderShape(), t = 0; t < e; t += 1)
          (this.stylesList[t]._mdf || this._isFirstFrame) &&
            (this.stylesList[t].msElem &&
              (this.stylesList[t].msElem.setAttribute(
                'd',
                this.stylesList[t].d
              ),
              (this.stylesList[t].d = 'M0 0' + this.stylesList[t].d)),
            this.stylesList[t].pElem.setAttribute(
              'd',
              this.stylesList[t].d || 'M0 0'
            ))
      }),
      (ot.prototype.renderShape = function() {
        var t,
          e,
          s = this.animatedContents.length
        for (t = 0; t < s; t += 1)
          (e = this.animatedContents[t]),
            (this._isFirstFrame || e.element._isAnimated) &&
              e.fn(e.data, e.element, this._isFirstFrame)
      }),
      (ot.prototype.destroy = function() {
        this.destroyBaseElement(),
          (this.shapeData = null),
          (this.itemsData = null)
      }),
      (lt.prototype.renderFrame = function(t) {
        if (t || this.filterManager._mdf) {
          var e = this.filterManager.effectElements[0].p.v,
            s = this.filterManager.effectElements[1].p.v,
            i = this.filterManager.effectElements[2].p.v / 100
          this.matrixFilter.setAttribute(
            'values',
            s[0] -
              e[0] +
              ' 0 0 0 ' +
              e[0] +
              ' ' +
              (s[1] - e[1]) +
              ' 0 0 0 ' +
              e[1] +
              ' ' +
              (s[2] - e[2]) +
              ' 0 0 0 ' +
              e[2] +
              ' 0 0 0 ' +
              i +
              ' 0'
          )
        }
      }),
      (pt.prototype.renderFrame = function(t) {
        if (t || this.filterManager._mdf) {
          var e = this.filterManager.effectElements[2].p.v,
            s = this.filterManager.effectElements[6].p.v
          this.matrixFilter.setAttribute(
            'values',
            '0 0 0 0 ' +
              e[0] +
              ' 0 0 0 0 ' +
              e[1] +
              ' 0 0 0 0 ' +
              e[2] +
              ' 0 0 0 ' +
              s +
              ' 0'
          )
        }
      }),
      (ft.prototype.initialize = function() {
        var t,
          e,
          s,
          i,
          a =
            this.elem.layerElement.children || this.elem.layerElement.childNodes
        for (
          1 === this.filterManager.effectElements[1].p.v
            ? ((i = this.elem.maskManager.masksProperties.length), (s = 0))
            : ((s = this.filterManager.effectElements[0].p.v - 1), (i = s + 1)),
            e = g('g'),
            e.setAttribute('fill', 'none'),
            e.setAttribute('stroke-linecap', 'round'),
            e.setAttribute('stroke-dashoffset', 1),
            s;
          s < i;
          s += 1
        )
          (t = g('path')), e.appendChild(t), this.paths.push({ p: t, m: s })
        if (3 === this.filterManager.effectElements[10].p.v) {
          var r = g('mask'),
            n = 'stms_' + o(10)
          r.setAttribute('id', n),
            r.setAttribute('mask-type', 'alpha'),
            r.appendChild(e),
            this.elem.globalData.defs.appendChild(r)
          var h = g('g')
          h.setAttribute('mask', 'url(' + wt + '#' + n + ')'),
            a[0] && h.appendChild(a[0]),
            this.elem.layerElement.appendChild(h),
            (this.masker = r),
            e.setAttribute('stroke', '#fff')
        } else if (
          1 === this.filterManager.effectElements[10].p.v ||
          2 === this.filterManager.effectElements[10].p.v
        ) {
          if (2 === this.filterManager.effectElements[10].p.v)
            for (
              a =
                this.elem.layerElement.children ||
                this.elem.layerElement.childNodes;
              a.length;

            )
              this.elem.layerElement.removeChild(a[0])
          this.elem.layerElement.appendChild(e),
            this.elem.layerElement.removeAttribute('mask'),
            e.setAttribute('stroke', '#fff')
        }
        ;(this.initialized = !0), (this.pathMasker = e)
      }),
      (ft.prototype.renderFrame = function(t) {
        this.initialized || this.initialize()
        var e,
          s,
          i,
          a = this.paths.length
        for (e = 0; e < a; e += 1)
          if (
            this.paths[e].m !== -1 &&
            ((s = this.elem.maskManager.viewData[this.paths[e].m]),
            (i = this.paths[e].p),
            (t || this.filterManager._mdf || s.prop._mdf) &&
              i.setAttribute('d', s.lastPath),
            t ||
              this.filterManager.effectElements[9].p._mdf ||
              this.filterManager.effectElements[4].p._mdf ||
              this.filterManager.effectElements[7].p._mdf ||
              this.filterManager.effectElements[8].p._mdf ||
              s.prop._mdf)
          ) {
            var r
            if (
              0 !== this.filterManager.effectElements[7].p.v ||
              100 !== this.filterManager.effectElements[8].p.v
            ) {
              var n =
                  Math.min(
                    this.filterManager.effectElements[7].p.v,
                    this.filterManager.effectElements[8].p.v
                  ) / 100,
                h =
                  Math.max(
                    this.filterManager.effectElements[7].p.v,
                    this.filterManager.effectElements[8].p.v
                  ) / 100,
                o = i.getTotalLength()
              r = '0 0 0 ' + o * n + ' '
              var l,
                p = o * (h - n),
                f =
                  1 +
                  (2 *
                    this.filterManager.effectElements[4].p.v *
                    this.filterManager.effectElements[9].p.v) /
                    100,
                m = Math.floor(p / f)
              for (l = 0; l < m; l += 1)
                r +=
                  '1 ' +
                  (2 *
                    this.filterManager.effectElements[4].p.v *
                    this.filterManager.effectElements[9].p.v) /
                    100 +
                  ' '
              r += '0 ' + 10 * o + ' 0 0'
            } else
              r =
                '1 ' +
                (2 *
                  this.filterManager.effectElements[4].p.v *
                  this.filterManager.effectElements[9].p.v) /
                  100
            i.setAttribute('stroke-dasharray', r)
          }
        if (
          ((t || this.filterManager.effectElements[4].p._mdf) &&
            this.pathMasker.setAttribute(
              'stroke-width',
              2 * this.filterManager.effectElements[4].p.v
            ),
          (t || this.filterManager.effectElements[6].p._mdf) &&
            this.pathMasker.setAttribute(
              'opacity',
              this.filterManager.effectElements[6].p.v
            ),
          (1 === this.filterManager.effectElements[10].p.v ||
            2 === this.filterManager.effectElements[10].p.v) &&
            (t || this.filterManager.effectElements[3].p._mdf))
        ) {
          var d = this.filterManager.effectElements[3].p.v
          this.pathMasker.setAttribute(
            'stroke',
            'rgb(' +
              Rt(255 * d[0]) +
              ',' +
              Rt(255 * d[1]) +
              ',' +
              Rt(255 * d[2]) +
              ')'
          )
        }
      }),
      (mt.prototype.renderFrame = function(t) {
        if (t || this.filterManager._mdf) {
          var e = this.filterManager.effectElements[0].p.v,
            s = this.filterManager.effectElements[1].p.v,
            i = this.filterManager.effectElements[2].p.v,
            a = i[0] + ' ' + s[0] + ' ' + e[0],
            r = i[1] + ' ' + s[1] + ' ' + e[1],
            n = i[2] + ' ' + s[2] + ' ' + e[2]
          this.feFuncR.setAttribute('tableValues', a),
            this.feFuncG.setAttribute('tableValues', r),
            this.feFuncB.setAttribute('tableValues', n)
        }
      }),
      (dt.prototype.createFeFunc = function(t, e) {
        var s = g(t)
        return s.setAttribute('type', 'table'), e.appendChild(s), s
      }),
      (dt.prototype.getTableValue = function(t, e, s, i, a) {
        for (
          var r,
            n,
            h = 0,
            o = 256,
            l = Math.min(t, e),
            p = Math.max(t, e),
            f = Array.call(null, { length: o }),
            m = 0,
            d = a - i,
            c = e - t;
          h <= 256;

        )
          (r = h / 256),
            (n =
              r <= l
                ? c < 0
                  ? a
                  : i
                : r >= p
                ? c < 0
                  ? i
                  : a
                : i + d * Math.pow((r - t) / c, 1 / s)),
            (f[m++] = n),
            (h += 256 / (o - 1))
        return f.join(' ')
      }),
      (dt.prototype.renderFrame = function(t) {
        if (t || this.filterManager._mdf) {
          var e,
            s = this.filterManager.effectElements
          this.feFuncRComposed &&
            (t ||
              s[3].p._mdf ||
              s[4].p._mdf ||
              s[5].p._mdf ||
              s[6].p._mdf ||
              s[7].p._mdf) &&
            ((e = this.getTableValue(
              s[3].p.v,
              s[4].p.v,
              s[5].p.v,
              s[6].p.v,
              s[7].p.v
            )),
            this.feFuncRComposed.setAttribute('tableValues', e),
            this.feFuncGComposed.setAttribute('tableValues', e),
            this.feFuncBComposed.setAttribute('tableValues', e)),
            this.feFuncR &&
              (t ||
                s[10].p._mdf ||
                s[11].p._mdf ||
                s[12].p._mdf ||
                s[13].p._mdf ||
                s[14].p._mdf) &&
              ((e = this.getTableValue(
                s[10].p.v,
                s[11].p.v,
                s[12].p.v,
                s[13].p.v,
                s[14].p.v
              )),
              this.feFuncR.setAttribute('tableValues', e)),
            this.feFuncG &&
              (t ||
                s[17].p._mdf ||
                s[18].p._mdf ||
                s[19].p._mdf ||
                s[20].p._mdf ||
                s[21].p._mdf) &&
              ((e = this.getTableValue(
                s[17].p.v,
                s[18].p.v,
                s[19].p.v,
                s[20].p.v,
                s[21].p.v
              )),
              this.feFuncG.setAttribute('tableValues', e)),
            this.feFuncB &&
              (t ||
                s[24].p._mdf ||
                s[25].p._mdf ||
                s[26].p._mdf ||
                s[27].p._mdf ||
                s[28].p._mdf) &&
              ((e = this.getTableValue(
                s[24].p.v,
                s[25].p.v,
                s[26].p.v,
                s[27].p.v,
                s[28].p.v
              )),
              this.feFuncB.setAttribute('tableValues', e)),
            this.feFuncA &&
              (t ||
                s[31].p._mdf ||
                s[32].p._mdf ||
                s[33].p._mdf ||
                s[34].p._mdf ||
                s[35].p._mdf) &&
              ((e = this.getTableValue(
                s[31].p.v,
                s[32].p.v,
                s[33].p.v,
                s[34].p.v,
                s[35].p.v
              )),
              this.feFuncA.setAttribute('tableValues', e))
        }
      }),
      (ct.prototype.renderFrame = function(t) {
        if (t || this.filterManager._mdf) {
          if (
            ((t || this.filterManager.effectElements[4].p._mdf) &&
              this.feGaussianBlur.setAttribute(
                'stdDeviation',
                this.filterManager.effectElements[4].p.v / 4
              ),
            t || this.filterManager.effectElements[0].p._mdf)
          ) {
            var e = this.filterManager.effectElements[0].p.v
            this.feFlood.setAttribute(
              'flood-color',
              jt(
                Math.round(255 * e[0]),
                Math.round(255 * e[1]),
                Math.round(255 * e[2])
              )
            )
          }
          if (
            ((t || this.filterManager.effectElements[1].p._mdf) &&
              this.feFlood.setAttribute(
                'flood-opacity',
                this.filterManager.effectElements[1].p.v / 255
              ),
            t ||
              this.filterManager.effectElements[2].p._mdf ||
              this.filterManager.effectElements[3].p._mdf)
          ) {
            var s = this.filterManager.effectElements[3].p.v,
              i = (this.filterManager.effectElements[2].p.v - 90) * Bt,
              a = s * Math.cos(i),
              r = s * Math.sin(i)
            this.feOffset.setAttribute('dx', a),
              this.feOffset.setAttribute('dy', r)
          }
        }
      })
    var de = [],
      ce = 0
    ;(ut.prototype.findSymbol = function(t) {
      for (var e = 0, s = de.length; e < s; ) {
        if (de[e] === t) return de[e]
        e += 1
      }
      return null
    }),
      (ut.prototype.replaceInParent = function(t, e) {
        var s = t.layerElement.parentNode
        if (s) {
          for (
            var i = s.children, a = 0, r = i.length;
            a < r && i[a] !== t.layerElement;

          )
            a += 1
          var n
          a <= r - 2 && (n = i[a + 1])
          var h = g('use')
          h.setAttribute('href', '#' + e),
            n ? s.insertBefore(h, n) : s.appendChild(h)
        }
      }),
      (ut.prototype.setElementAsMask = function(t, e) {
        if (!this.findSymbol(e)) {
          var s = 'matte_' + o(5) + '_' + ce++,
            i = g('mask')
          i.setAttribute('id', e.layerId),
            i.setAttribute('mask-type', 'alpha'),
            de.push(e)
          var a = t.globalData.defs
          a.appendChild(i)
          var r = g('symbol')
          r.setAttribute('id', s),
            this.replaceInParent(e, s),
            r.appendChild(e.layerElement),
            a.appendChild(r)
          var n = g('use')
          n.setAttribute('href', '#' + s),
            i.appendChild(n),
            (e.data.hd = !1),
            e.show()
        }
        t.setMatte(e.layerId)
      }),
      (ut.prototype.initialize = function() {
        for (
          var t = this.filterManager.effectElements[0].p.v,
            e = 0,
            s = this.elem.comp.elements.length;
          e < s;

        )
          this.elem.comp.elements[e].data.ind === t &&
            this.setElementAsMask(this.elem, this.elem.comp.elements[e]),
            (e += 1)
        this.initialized = !0
      }),
      (ut.prototype.renderFrame = function() {
        this.initialized || this.initialize()
      }),
      (gt.prototype.renderFrame = function(t) {
        var e,
          s = this.filters.length
        for (e = 0; e < s; e += 1) this.filters[e].renderFrame(t)
      })
    var ue = (function() {
        function e(t) {
          for (var e = 0, s = t.target; e < x; )
            C[e].animation === s &&
              (C.splice(e, 1), (e -= 1), (x -= 1), s.isPaused || r()),
              (e += 1)
        }
        function s(t, e) {
          if (!t) return null
          for (var s = 0; s < x; ) {
            if (C[s].elem == t && null !== C[s].elem) return C[s].animation
            s += 1
          }
          var i = new ge()
          return n(i, t), i.setData(t, e), i
        }
        function i() {
          var t,
            e = C.length,
            s = []
          for (t = 0; t < e; t += 1) s.push(C[t].animation)
          return s
        }
        function a() {
          ;(E += 1), k()
        }
        function r() {
          E -= 1
        }
        function n(t, s) {
          t.addEventListener('destroy', e),
            t.addEventListener('_active', a),
            t.addEventListener('_idle', r),
            C.push({ elem: s, animation: t }),
            (x += 1)
        }
        function h(t) {
          var e = new ge()
          return n(e, null), e.setParams(t), e
        }
        function o(t, e) {
          var s
          for (s = 0; s < x; s += 1) C[s].animation.setSpeed(t, e)
        }
        function l(t, e) {
          var s
          for (s = 0; s < x; s += 1) C[s].animation.setDirection(t, e)
        }
        function p(t) {
          var e
          for (e = 0; e < x; e += 1) C[e].animation.play(t)
        }
        function f(e) {
          var s,
            i = e - D
          for (s = 0; s < x; s += 1) C[s].animation.advanceTime(i)
          ;(D = e), E && !S ? t.requestAnimationFrame(f) : (F = !0)
        }
        function m(e) {
          ;(D = e), t.requestAnimationFrame(f)
        }
        function d(t) {
          var e
          for (e = 0; e < x; e += 1) C[e].animation.pause(t)
        }
        function c(t, e, s) {
          var i
          for (i = 0; i < x; i += 1) C[i].animation.goToAndStop(t, e, s)
        }
        function u(t) {
          var e
          for (e = 0; e < x; e += 1) C[e].animation.stop(t)
        }
        function g(t) {
          var e
          for (e = 0; e < x; e += 1) C[e].animation.togglePause(t)
        }
        function y(t) {
          var e
          for (e = x - 1; e >= 0; e -= 1) C[e].animation.destroy(t)
        }
        function b(t, e, i) {
          var a,
            r = [].concat(
              [].slice.call(document.getElementsByClassName('lottie')),
              [].slice.call(document.getElementsByClassName('bodymovin'))
            ),
            n = r.length
          for (a = 0; a < n; a += 1)
            i && r[a].setAttribute('data-bm-type', i), s(r[a], t)
          if (e && 0 === n) {
            i || (i = 'svg')
            var h = document.getElementsByTagName('body')[0]
            h.innerHTML = ''
            var o = v('div')
            ;(o.style.width = '100%'),
              (o.style.height = '100%'),
              o.setAttribute('data-bm-type', i),
              h.appendChild(o),
              s(o, t)
          }
        }
        function _() {
          var t
          for (t = 0; t < x; t += 1) C[t].animation.resize()
        }
        function k() {
          !S && E && F && (t.requestAnimationFrame(m), (F = !1))
        }
        function A() {
          S = !0
        }
        function M() {
          ;(S = !1), k()
        }
        var P = {},
          C = [],
          D = 0,
          x = 0,
          E = 0,
          F = !0,
          S = !1
        return (
          (P.registerAnimation = s),
          (P.loadAnimation = h),
          (P.setSpeed = o),
          (P.setDirection = l),
          (P.play = p),
          (P.pause = d),
          (P.stop = u),
          (P.togglePause = g),
          (P.searchAnimations = b),
          (P.resize = _),
          (P.goToAndStop = c),
          (P.destroy = y),
          (P.freeze = A),
          (P.unfreeze = M),
          (P.getRegisteredAnimations = i),
          P
        )
      })(),
      ge = function() {
        ;(this._cbs = []),
          (this.name = ''),
          (this.path = ''),
          (this.isLoaded = !1),
          (this.currentFrame = 0),
          (this.currentRawFrame = 0),
          (this.totalFrames = 0),
          (this.frameRate = 0),
          (this.frameMult = 0),
          (this.playSpeed = 1),
          (this.playDirection = 1),
          (this.pendingElements = 0),
          (this.playCount = 0),
          (this.animationData = {}),
          (this.assets = []),
          (this.isPaused = !0),
          (this.autoplay = !1),
          (this.loop = !0),
          (this.renderer = null),
          (this.animationID = o(10)),
          (this.assetsPath = ''),
          (this.timeCompleted = 0),
          (this.segmentPos = 0),
          (this.subframeEnabled = It),
          (this.segments = []),
          (this._idle = !0),
          (this.projectInterface = e())
      }
    b([c], ge),
      (ge.prototype.setParams = function(t) {
        t.context && (this.context = t.context),
          (t.wrapper || t.container) &&
            (this.wrapper = t.wrapper || t.container)
        var e = t.animType ? t.animType : t.renderer ? t.renderer : 'svg'
        switch (e) {
          case 'canvas':
            this.renderer = new CanvasRenderer(this, t.rendererSettings)
            break
          case 'svg':
            this.renderer = new R(this, t.rendererSettings)
            break
          default:
            this.renderer = new HybridRenderer(this, t.rendererSettings)
        }
        this.renderer.setProjectInterface(this.projectInterface),
          (this.animType = e),
          '' === t.loop ||
            null === t.loop ||
            (t.loop === !1
              ? (this.loop = !1)
              : t.loop === !0
              ? (this.loop = !0)
              : (this.loop = parseInt(t.loop))),
          (this.autoplay = !('autoplay' in t) || t.autoplay),
          (this.name = t.name ? t.name : ''),
          (this.autoloadSegments =
            !t.hasOwnProperty('autoloadSegments') || t.autoloadSegments),
          (this.assetsPath = t.assetsPath),
          t.animationData
            ? this.configAnimation(t.animationData)
            : t.path &&
              ('json' != t.path.substr(-4) &&
                ('/' != t.path.substr(-1, 1) && (t.path += '/'),
                (t.path += 'data.json')),
              t.path.lastIndexOf('\\') != -1
                ? (this.path = t.path.substr(0, t.path.lastIndexOf('\\') + 1))
                : (this.path = t.path.substr(0, t.path.lastIndexOf('/') + 1)),
              (this.fileName = t.path.substr(t.path.lastIndexOf('/') + 1)),
              (this.fileName = this.fileName.substr(
                0,
                this.fileName.lastIndexOf('.json')
              )),
              ie.load(t.path, this.configAnimation.bind(this)))
      }),
      (ge.prototype.setData = function(t, e) {
        var s = {
            wrapper: t,
            animationData: e
              ? 'object' == typeof e
                ? e
                : JSON.parse(e)
              : null,
          },
          i = t.attributes
        ;(s.path = i.getNamedItem('data-animation-path')
          ? i.getNamedItem('data-animation-path').value
          : i.getNamedItem('data-bm-path')
          ? i.getNamedItem('data-bm-path').value
          : i.getNamedItem('bm-path')
          ? i.getNamedItem('bm-path').value
          : ''),
          (s.animType = i.getNamedItem('data-anim-type')
            ? i.getNamedItem('data-anim-type').value
            : i.getNamedItem('data-bm-type')
            ? i.getNamedItem('data-bm-type').value
            : i.getNamedItem('bm-type')
            ? i.getNamedItem('bm-type').value
            : i.getNamedItem('data-bm-renderer')
            ? i.getNamedItem('data-bm-renderer').value
            : i.getNamedItem('bm-renderer')
            ? i.getNamedItem('bm-renderer').value
            : 'canvas')
        var a = i.getNamedItem('data-anim-loop')
          ? i.getNamedItem('data-anim-loop').value
          : i.getNamedItem('data-bm-loop')
          ? i.getNamedItem('data-bm-loop').value
          : i.getNamedItem('bm-loop')
          ? i.getNamedItem('bm-loop').value
          : ''
        '' === a ||
          ('false' === a
            ? (s.loop = !1)
            : 'true' === a
            ? (s.loop = !0)
            : (s.loop = parseInt(a)))
        var r = i.getNamedItem('data-anim-autoplay')
          ? i.getNamedItem('data-anim-autoplay').value
          : i.getNamedItem('data-bm-autoplay')
          ? i.getNamedItem('data-bm-autoplay').value
          : !i.getNamedItem('bm-autoplay') ||
            i.getNamedItem('bm-autoplay').value
        ;(s.autoplay = 'false' !== r),
          (s.name = i.getNamedItem('data-name')
            ? i.getNamedItem('data-name').value
            : i.getNamedItem('data-bm-name')
            ? i.getNamedItem('data-bm-name').value
            : i.getNamedItem('bm-name')
            ? i.getNamedItem('bm-name').value
            : '')
        var n = i.getNamedItem('data-anim-prerender')
          ? i.getNamedItem('data-anim-prerender').value
          : i.getNamedItem('data-bm-prerender')
          ? i.getNamedItem('data-bm-prerender').value
          : i.getNamedItem('bm-prerender')
          ? i.getNamedItem('bm-prerender').value
          : ''
        'false' === n && (s.prerender = !1), this.setParams(s)
      }),
      (ge.prototype.includeLayers = function(t) {
        t.op > this.animationData.op &&
          ((this.animationData.op = t.op),
          (this.totalFrames = Math.floor(t.op - this.animationData.ip)))
        var e,
          s,
          i = this.animationData.layers,
          a = i.length,
          r = t.layers,
          n = r.length
        for (s = 0; s < n; s += 1)
          for (e = 0; e < a; ) {
            if (i[e].id == r[s].id) {
              i[e] = r[s]
              break
            }
            e += 1
          }
        if (
          ((t.chars || t.fonts) &&
            (this.renderer.globalData.fontManager.addChars(t.chars),
            this.renderer.globalData.fontManager.addFonts(
              t.fonts,
              this.renderer.globalData.defs
            )),
          t.assets)
        )
          for (a = t.assets.length, e = 0; e < a; e += 1)
            this.animationData.assets.push(t.assets[e])
        ;(this.animationData.__complete = !1),
          Ht.completeData(
            this.animationData,
            this.renderer.globalData.fontManager
          ),
          this.renderer.includeLayers(t.layers),
          Et && Et.initExpressions(this),
          this.loadNextSegment()
      }),
      (ge.prototype.loadNextSegment = function() {
        var t = this.animationData.segments
        if (!t || 0 === t.length || !this.autoloadSegments)
          return (
            this.trigger('data_ready'),
            void (this.timeCompleted = this.totalFrames)
          )
        var e = t.shift()
        this.timeCompleted = e.time * this.frameRate
        var s = this.path + this.fileName + '_' + this.segmentPos + '.json'
        ;(this.segmentPos += 1), ie.load(s, this.includeLayers.bind(this))
      }),
      (ge.prototype.loadSegments = function() {
        var t = this.animationData.segments
        t || (this.timeCompleted = this.totalFrames), this.loadNextSegment()
      }),
      (ge.prototype.preloadImages = function() {
        ;(this.imagePreloader = new te()),
          this.imagePreloader.setAssetsPath(this.assetsPath),
          this.imagePreloader.setPath(this.path),
          this.imagePreloader.loadAssets(
            this.animationData.assets,
            function(t) {
              t || this.trigger('loaded_images')
            }.bind(this)
          )
      }),
      (ge.prototype.configAnimation = function(t) {
        this.renderer &&
          ((this.animationData = t),
          (this.totalFrames = Math.floor(
            this.animationData.op - this.animationData.ip
          )),
          this.renderer.configAnimation(t),
          t.assets || (t.assets = []),
          this.renderer.searchExtraCompositions(t.assets),
          (this.assets = this.animationData.assets),
          (this.frameRate = this.animationData.fr),
          (this.firstFrame = Math.round(this.animationData.ip)),
          (this.frameMult = this.animationData.fr / 1e3),
          this.trigger('config_ready'),
          this.preloadImages(),
          this.loadSegments(),
          this.updaFrameModifier(),
          this.waitForFontsLoaded())
      }),
      (ge.prototype.completeData = function() {
        Ht.completeData(
          this.animationData,
          this.renderer.globalData.fontManager
        ),
          this.checkLoaded()
      }),
      (ge.prototype.waitForFontsLoaded = function() {
        this.renderer &&
          (this.renderer.globalData.fontManager.loaded
            ? this.completeData()
            : setTimeout(this.waitForFontsLoaded.bind(this), 20))
      }),
      (ge.prototype.addPendingElement = function() {
        this.pendingElements += 1
      }),
      (ge.prototype.elementLoaded = function() {
        ;(this.pendingElements -= 1), this.checkLoaded()
      }),
      (ge.prototype.checkLoaded = function() {
        0 === this.pendingElements &&
          (Et && Et.initExpressions(this),
          this.renderer.initItems(),
          setTimeout(
            function() {
              this.trigger('DOMLoaded')
            }.bind(this),
            0
          ),
          (this.isLoaded = !0),
          this.gotoFrame(),
          this.autoplay && this.play())
      }),
      (ge.prototype.resize = function() {
        this.renderer.updateContainerSize()
      }),
      (ge.prototype.setSubframe = function(t) {
        this.subframeEnabled = !!t
      }),
      (ge.prototype.gotoFrame = function() {
        ;(this.currentFrame = this.subframeEnabled
          ? this.currentRawFrame
          : ~~this.currentRawFrame),
          this.timeCompleted !== this.totalFrames &&
            this.currentFrame > this.timeCompleted &&
            (this.currentFrame = this.timeCompleted),
          this.trigger('enterFrame'),
          this.renderFrame()
      }),
      (ge.prototype.renderFrame = function() {
        this.isLoaded !== !1 &&
          this.renderer.renderFrame(this.currentFrame + this.firstFrame)
      }),
      (ge.prototype.play = function(t) {
        ;(t && this.name != t) ||
          (this.isPaused === !0 &&
            ((this.isPaused = !1),
            this._idle && ((this._idle = !1), this.trigger('_active'))))
      }),
      (ge.prototype.pause = function(t) {
        ;(t && this.name != t) ||
          (this.isPaused === !1 &&
            ((this.isPaused = !0), (this._idle = !0), this.trigger('_idle')))
      }),
      (ge.prototype.togglePause = function(t) {
        ;(t && this.name != t) ||
          (this.isPaused === !0 ? this.play() : this.pause())
      }),
      (ge.prototype.stop = function(t) {
        ;(t && this.name != t) ||
          (this.pause(), (this.playCount = 0), this.setCurrentRawFrameValue(0))
      }),
      (ge.prototype.goToAndStop = function(t, e, s) {
        ;(s && this.name != s) ||
          (e
            ? this.setCurrentRawFrameValue(t)
            : this.setCurrentRawFrameValue(t * this.frameModifier),
          this.pause())
      }),
      (ge.prototype.goToAndPlay = function(t, e, s) {
        this.goToAndStop(t, e, s), this.play()
      }),
      (ge.prototype.advanceTime = function(t) {
        if (this.isPaused !== !0 && this.isLoaded !== !1) {
          var e = this.currentRawFrame + t * this.frameModifier,
            s = !1
          e >= this.totalFrames - 1 && this.frameModifier > 0
            ? this.loop && this.playCount !== this.loop
              ? e >= this.totalFrames
                ? ((this.playCount += 1),
                  this.checkSegments(e % this.totalFrames) ||
                    (this.setCurrentRawFrameValue(e % this.totalFrames),
                    this.trigger('loopComplete')))
                : this.setCurrentRawFrameValue(e)
              : this.checkSegments(e % this.totalFrames) ||
                ((s = !0), (e = this.totalFrames - 1))
            : e < 0
            ? this.checkSegments(e % this.totalFrames) ||
              (!this.loop || (this.playCount-- <= 0 && this.loop !== !0)
                ? ((s = !0), (e = 0))
                : (this.setCurrentRawFrameValue(
                    this.totalFrames + (e % this.totalFrames)
                  ),
                  this.trigger('loopComplete')))
            : this.setCurrentRawFrameValue(e),
            s &&
              (this.setCurrentRawFrameValue(e),
              this.pause(),
              this.trigger('complete'))
        }
      }),
      (ge.prototype.adjustSegment = function(t, e) {
        ;(this.playCount = 0),
          t[1] < t[0]
            ? (this.frameModifier > 0 &&
                (this.playSpeed < 0
                  ? this.setSpeed(-this.playSpeed)
                  : this.setDirection(-1)),
              (this.timeCompleted = this.totalFrames = t[0] - t[1]),
              (this.firstFrame = t[1]),
              this.setCurrentRawFrameValue(this.totalFrames - 0.001 - e))
            : t[1] > t[0] &&
              (this.frameModifier < 0 &&
                (this.playSpeed < 0
                  ? this.setSpeed(-this.playSpeed)
                  : this.setDirection(1)),
              (this.timeCompleted = this.totalFrames = t[1] - t[0]),
              (this.firstFrame = t[0]),
              this.setCurrentRawFrameValue(0.001 + e)),
          this.trigger('segmentStart')
      }),
      (ge.prototype.setSegment = function(t, e) {
        var s = -1
        this.isPaused &&
          (this.currentRawFrame + this.firstFrame < t
            ? (s = t)
            : this.currentRawFrame + this.firstFrame > e && (s = e - t)),
          (this.firstFrame = t),
          (this.timeCompleted = this.totalFrames = e - t),
          s !== -1 && this.goToAndStop(s, !0)
      }),
      (ge.prototype.playSegments = function(t, e) {
        if ('object' == typeof t[0]) {
          var s,
            i = t.length
          for (s = 0; s < i; s += 1) this.segments.push(t[s])
        } else this.segments.push(t)
        e && this.checkSegments(0), this.isPaused && this.play()
      }),
      (ge.prototype.resetSegments = function(t) {
        ;(this.segments.length = 0),
          this.segments.push([this.animationData.ip, this.animationData.op]),
          t && this.checkSegments(0)
      }),
      (ge.prototype.checkSegments = function(t) {
        return (
          !!this.segments.length &&
          (this.adjustSegment(this.segments.shift(), t), !0)
        )
      }),
      (ge.prototype.destroy = function(t) {
        ;(t && this.name != t) ||
          !this.renderer ||
          (this.renderer.destroy(),
          this.trigger('destroy'),
          (this._cbs = null),
          (this.onEnterFrame = this.onLoopComplete = this.onComplete = this.onSegmentStart = this.onDestroy = null),
          (this.renderer = null))
      }),
      (ge.prototype.setCurrentRawFrameValue = function(t) {
        ;(this.currentRawFrame = t), this.gotoFrame()
      }),
      (ge.prototype.setSpeed = function(t) {
        ;(this.playSpeed = t), this.updaFrameModifier()
      }),
      (ge.prototype.setDirection = function(t) {
        ;(this.playDirection = t < 0 ? -1 : 1), this.updaFrameModifier()
      }),
      (ge.prototype.updaFrameModifier = function() {
        this.frameModifier =
          this.frameMult * this.playSpeed * this.playDirection
      }),
      (ge.prototype.getPath = function() {
        return this.path
      }),
      (ge.prototype.getAssetsPath = function(t) {
        var e = ''
        if (t.e) e = t.p
        else if (this.assetsPath) {
          var s = t.p
          s.indexOf('images/') !== -1 && (s = s.split('/')[1]),
            (e = this.assetsPath + s)
        } else (e = this.path), (e += t.u ? t.u : ''), (e += t.p)
        return e
      }),
      (ge.prototype.getAssetData = function(t) {
        for (var e = 0, s = this.assets.length; e < s; ) {
          if (t == this.assets[e].id) return this.assets[e]
          e += 1
        }
      }),
      (ge.prototype.hide = function() {
        this.renderer.hide()
      }),
      (ge.prototype.show = function() {
        this.renderer.show()
      }),
      (ge.prototype.getDuration = function(t) {
        return t ? this.totalFrames : this.totalFrames / this.frameRate
      }),
      (ge.prototype.trigger = function(t) {
        if (this._cbs && this._cbs[t])
          switch (t) {
            case 'enterFrame':
              this.triggerEvent(
                t,
                new i(t, this.currentFrame, this.totalFrames, this.frameMult)
              )
              break
            case 'loopComplete':
              this.triggerEvent(
                t,
                new r(t, this.loop, this.playCount, this.frameMult)
              )
              break
            case 'complete':
              this.triggerEvent(t, new a(t, this.frameMult))
              break
            case 'segmentStart':
              this.triggerEvent(t, new n(t, this.firstFrame, this.totalFrames))
              break
            case 'destroy':
              this.triggerEvent(t, new h(t, this))
              break
            default:
              this.triggerEvent(t)
          }
        'enterFrame' === t &&
          this.onEnterFrame &&
          this.onEnterFrame.call(
            this,
            new i(t, this.currentFrame, this.totalFrames, this.frameMult)
          ),
          'loopComplete' === t &&
            this.onLoopComplete &&
            this.onLoopComplete.call(
              this,
              new r(t, this.loop, this.playCount, this.frameMult)
            ),
          'complete' === t &&
            this.onComplete &&
            this.onComplete.call(this, new a(t, this.frameMult)),
          'segmentStart' === t &&
            this.onSegmentStart &&
            this.onSegmentStart.call(
              this,
              new n(t, this.firstFrame, this.totalFrames)
            ),
          'destroy' === t &&
            this.onDestroy &&
            this.onDestroy.call(this, new h(t, this))
      })
    var ve = {}
    ;(ve.play = ue.play),
      (ve.pause = ue.pause),
      (ve.setLocationHref = yt),
      (ve.togglePause = ue.togglePause),
      (ve.setSpeed = ue.setSpeed),
      (ve.setDirection = ue.setDirection),
      (ve.stop = ue.stop),
      (ve.searchAnimations = bt),
      (ve.registerAnimation = ue.registerAnimation),
      (ve.loadAnimation = kt),
      (ve.setSubframeRendering = _t),
      (ve.resize = ue.resize),
      (ve.goToAndStop = ue.goToAndStop),
      (ve.destroy = ue.destroy),
      (ve.setQuality = At),
      (ve.inBrowser = Mt),
      (ve.installPlugin = Pt),
      (ve.freeze = ue.freeze),
      (ve.unfreeze = ue.unfreeze),
      (ve.getRegisteredAnimations = ue.getRegisteredAnimations),
      (ve.__getFactory = Ct),
      (ve.version = '5.1.16')
    var ye = '__[STANDALONE]__',
      be = '__[ANIMATIONDATA]__',
      _e = ''
    if (ye) {
      var ke = document.getElementsByTagName('script'),
        Ae = ke.length - 1,
        Me = ke[Ae] || { src: '' },
        Pe = Me.src.replace(/^[^\?]+\??/, '')
      _e = xt('renderer')
    }
    var Ce = setInterval(Dt, 100)
    return ve
  })
