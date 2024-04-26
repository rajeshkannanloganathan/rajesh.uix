(function() {
    const e = document.createElement("link").relList;
    if (e && e.supports && e.supports("modulepreload"))
        return;
    for (const r of document.querySelectorAll('link[rel="modulepreload"]'))
        i(r);
    new MutationObserver(r=>{
        for (const n of r)
            if (n.type === "childList")
                for (const o of n.addedNodes)
                    o.tagName === "LINK" && o.rel === "modulepreload" && i(o)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function t(r) {
        const n = {};
        return r.integrity && (n.integrity = r.integrity),
        r.referrerPolicy && (n.referrerPolicy = r.referrerPolicy),
        r.crossOrigin === "use-credentials" ? n.credentials = "include" : r.crossOrigin === "anonymous" ? n.credentials = "omit" : n.credentials = "same-origin",
        n
    }
    function i(r) {
        if (r.ep)
            return;
        r.ep = !0;
        const n = t(r);
        fetch(r.href, n)
    }
}
)();
function li(s) {
    if (s === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return s
}
function Oa(s, e) {
    s.prototype = Object.create(e.prototype),
    s.prototype.constructor = s,
    s.__proto__ = e
}
/*!
 * GSAP 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var Ct = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: {
        lineHeight: ""
    }
}, Cr = {
    duration: .5,
    overwrite: !1,
    delay: 0
}, fo, Ue, _e, It = 1e8, se = 1 / It, Fs = Math.PI * 2, mu = Fs / 4, gu = 0, La = Math.sqrt, _u = Math.cos, vu = Math.sin, ze = function(e) {
    return typeof e == "string"
}, ve = function(e) {
    return typeof e == "function"
}, mi = function(e) {
    return typeof e == "number"
}, po = function(e) {
    return typeof e > "u"
}, ni = function(e) {
    return typeof e == "object"
}, dt = function(e) {
    return e !== !1
}, ho = function() {
    return typeof window < "u"
}, _n = function(e) {
    return ve(e) || ze(e)
}, Ia = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {}
, je = Array.isArray, Ns = /(?:-?\.?\d|\.)+/gi, Da = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, gr = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, ms = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, za = /[+-]=-?[.\d]+/, Ra = /[^,'"\[\]\s]+/gi, yu = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, de, kt, Bs, mo, Pt = {}, Yn = {}, Fa, Na = function(e) {
    return (Yn = rr(e, Pt)) && ht
}, go = function(e, t) {
    return console.warn("Invalid property", e, "set to", t, "Missing plugin? gsap.registerPlugin()")
}, Xn = function(e, t) {
    return !t && console.warn(e)
}, Ba = function(e, t) {
    return e && (Pt[e] = t) && Yn && (Yn[e] = t) || Pt
}, sn = function() {
    return 0
}, wu = {
    suppressEvents: !0,
    isStart: !0,
    kill: !1
}, zn = {
    suppressEvents: !0,
    kill: !1
}, Su = {
    suppressEvents: !0
}, _o = {}, Pi = [], qs = {}, qa, xt = {}, gs = {}, qo = 30, Rn = [], vo = "", yo = function(e) {
    var t = e[0], i, r;
    if (ni(t) || ve(t) || (e = [e]),
    !(i = (t._gsap || {}).harness)) {
        for (r = Rn.length; r-- && !Rn[r].targetTest(t); )
            ;
        i = Rn[r]
    }
    for (r = e.length; r--; )
        e[r] && (e[r]._gsap || (e[r]._gsap = new cl(e[r],i))) || e.splice(r, 1);
    return e
}, Ki = function(e) {
    return e._gsap || yo(Dt(e))[0]._gsap
}, Va = function(e, t, i) {
    return (i = e[t]) && ve(i) ? e[t]() : po(i) && e.getAttribute && e.getAttribute(t) || i
}, ft = function(e, t) {
    return (e = e.split(",")).forEach(t) || e
}, xe = function(e) {
    return Math.round(e * 1e5) / 1e5 || 0
}, $e = function(e) {
    return Math.round(e * 1e7) / 1e7 || 0
}, wr = function(e, t) {
    var i = t.charAt(0)
      , r = parseFloat(t.substr(2));
    return e = parseFloat(e),
    i === "+" ? e + r : i === "-" ? e - r : i === "*" ? e * r : e / r
}, xu = function(e, t) {
    for (var i = t.length, r = 0; e.indexOf(t[r]) < 0 && ++r < i; )
        ;
    return r < i
}, Un = function() {
    var e = Pi.length, t = Pi.slice(0), i, r;
    for (qs = {},
    Pi.length = 0,
    i = 0; i < e; i++)
        r = t[i],
        r && r._lazy && (r.render(r._lazy[0], r._lazy[1], !0)._lazy = 0)
}, $a = function(e, t, i, r) {
    Pi.length && !Ue && Un(),
    e.render(t, i, r || Ue && t < 0 && (e._initted || e._startAt)),
    Pi.length && !Ue && Un()
}, Ga = function(e) {
    var t = parseFloat(e);
    return (t || t === 0) && (e + "").match(Ra).length < 2 ? t : ze(e) ? e.trim() : e
}, Ha = function(e) {
    return e
}, Ft = function(e, t) {
    for (var i in t)
        i in e || (e[i] = t[i]);
    return e
}, Tu = function(e) {
    return function(t, i) {
        for (var r in i)
            r in t || r === "duration" && e || r === "ease" || (t[r] = i[r])
    }
}, rr = function(e, t) {
    for (var i in t)
        e[i] = t[i];
    return e
}, Vo = function s(e, t) {
    for (var i in t)
        i !== "__proto__" && i !== "constructor" && i !== "prototype" && (e[i] = ni(t[i]) ? s(e[i] || (e[i] = {}), t[i]) : t[i]);
    return e
}, jn = function(e, t) {
    var i = {}, r;
    for (r in e)
        r in t || (i[r] = e[r]);
    return i
}, Yr = function(e) {
    var t = e.parent || de
      , i = e.keyframes ? Tu(je(e.keyframes)) : Ft;
    if (dt(e.inherit))
        for (; t; )
            i(e, t.vars.defaults),
            t = t.parent || t._dp;
    return e
}, bu = function(e, t) {
    for (var i = e.length, r = i === t.length; r && i-- && e[i] === t[i]; )
        ;
    return i < 0
}, Wa = function(e, t, i, r, n) {
    i === void 0 && (i = "_first"),
    r === void 0 && (r = "_last");
    var o = e[r], a;
    if (n)
        for (a = t[n]; o && o[n] > a; )
            o = o._prev;
    return o ? (t._next = o._next,
    o._next = t) : (t._next = e[i],
    e[i] = t),
    t._next ? t._next._prev = t : e[r] = t,
    t._prev = o,
    t.parent = t._dp = e,
    t
}, cs = function(e, t, i, r) {
    i === void 0 && (i = "_first"),
    r === void 0 && (r = "_last");
    var n = t._prev
      , o = t._next;
    n ? n._next = o : e[i] === t && (e[i] = o),
    o ? o._prev = n : e[r] === t && (e[r] = n),
    t._next = t._prev = t.parent = null
}, ki = function(e, t) {
    e.parent && (!t || e.parent.autoRemoveChildren) && e.parent.remove && e.parent.remove(e),
    e._act = 0
}, Qi = function(e, t) {
    if (e && (!t || t._end > e._dur || t._start < 0))
        for (var i = e; i; )
            i._dirty = 1,
            i = i.parent;
    return e
}, Eu = function(e) {
    for (var t = e.parent; t && t.parent; )
        t._dirty = 1,
        t.totalDuration(),
        t = t.parent;
    return e
}, Vs = function(e, t, i, r) {
    return e._startAt && (Ue ? e._startAt.revert(zn) : e.vars.immediateRender && !e.vars.autoRevert || e._startAt.render(t, !0, r))
}, Cu = function s(e) {
    return !e || e._ts && s(e.parent)
}, $o = function(e) {
    return e._repeat ? Pr(e._tTime, e = e.duration() + e._rDelay) * e : 0
}, Pr = function(e, t) {
    var i = Math.floor(e /= t);
    return e && i === e ? i - 1 : i
}, Kn = function(e, t) {
    return (e - t._start) * t._ts + (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur)
}, ds = function(e) {
    return e._end = $e(e._start + (e._tDur / Math.abs(e._ts || e._rts || se) || 0))
}, fs = function(e, t) {
    var i = e._dp;
    return i && i.smoothChildTiming && e._ts && (e._start = $e(i._time - (e._ts > 0 ? t / e._ts : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts)),
    ds(e),
    i._dirty || Qi(i, e)),
    e
}, Ya = function(e, t) {
    var i;
    if ((t._time || !t._dur && t._initted || t._start < e._time && (t._dur || !t.add)) && (i = Kn(e.rawTime(), t),
    (!t._dur || hn(0, t.totalDuration(), i) - t._tTime > se) && t.render(i, !0)),
    Qi(e, t)._dp && e._initted && e._time >= e._dur && e._ts) {
        if (e._dur < e.duration())
            for (i = e; i._dp; )
                i.rawTime() >= 0 && i.totalTime(i._tTime),
                i = i._dp;
        e._zTime = -se
    }
}, Jt = function(e, t, i, r) {
    return t.parent && ki(t),
    t._start = $e((mi(i) ? i : i || e !== de ? At(e, i, t) : e._time) + t._delay),
    t._end = $e(t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)),
    Wa(e, t, "_first", "_last", e._sort ? "_start" : 0),
    $s(t) || (e._recent = t),
    r || Ya(e, t),
    e._ts < 0 && fs(e, e._tTime),
    e
}, Xa = function(e, t) {
    return (Pt.ScrollTrigger || go("scrollTrigger", t)) && Pt.ScrollTrigger.create(t, e)
}, Ua = function(e, t, i, r, n) {
    if (So(e, t, n),
    !e._initted)
        return 1;
    if (!i && e._pt && !Ue && (e._dur && e.vars.lazy !== !1 || !e._dur && e.vars.lazy) && qa !== bt.frame)
        return Pi.push(e),
        e._lazy = [n, r],
        1
}, Pu = function s(e) {
    var t = e.parent;
    return t && t._ts && t._initted && !t._lock && (t.rawTime() < 0 || s(t))
}, $s = function(e) {
    var t = e.data;
    return t === "isFromStart" || t === "isStart"
}, Mu = function(e, t, i, r) {
    var n = e.ratio, o = t < 0 || !t && (!e._start && Pu(e) && !(!e._initted && $s(e)) || (e._ts < 0 || e._dp._ts < 0) && !$s(e)) ? 0 : 1, a = e._rDelay, l = 0, u, c, f;
    if (a && e._repeat && (l = hn(0, e._tDur, t),
    c = Pr(l, a),
    e._yoyo && c & 1 && (o = 1 - o),
    c !== Pr(e._tTime, a) && (n = 1 - o,
    e.vars.repeatRefresh && e._initted && e.invalidate())),
    o !== n || Ue || r || e._zTime === se || !t && e._zTime) {
        if (!e._initted && Ua(e, t, r, i, l))
            return;
        for (f = e._zTime,
        e._zTime = t || (i ? se : 0),
        i || (i = t && !f),
        e.ratio = o,
        e._from && (o = 1 - o),
        e._time = 0,
        e._tTime = l,
        u = e._pt; u; )
            u.r(o, u.d),
            u = u._next;
        t < 0 && Vs(e, t, i, !0),
        e._onUpdate && !i && zt(e, "onUpdate"),
        l && e._repeat && !i && e.parent && zt(e, "onRepeat"),
        (t >= e._tDur || t < 0) && e.ratio === o && (o && ki(e, 1),
        !i && !Ue && (zt(e, o ? "onComplete" : "onReverseComplete", !0),
        e._prom && e._prom()))
    } else
        e._zTime || (e._zTime = t)
}, Au = function(e, t, i) {
    var r;
    if (i > t)
        for (r = e._first; r && r._start <= i; ) {
            if (r.data === "isPause" && r._start > t)
                return r;
            r = r._next
        }
    else
        for (r = e._last; r && r._start >= i; ) {
            if (r.data === "isPause" && r._start < t)
                return r;
            r = r._prev
        }
}, Mr = function(e, t, i, r) {
    var n = e._repeat
      , o = $e(t) || 0
      , a = e._tTime / e._tDur;
    return a && !r && (e._time *= o / e._dur),
    e._dur = o,
    e._tDur = n ? n < 0 ? 1e10 : $e(o * (n + 1) + e._rDelay * n) : o,
    a > 0 && !r && fs(e, e._tTime = e._tDur * a),
    e.parent && ds(e),
    i || Qi(e.parent, e),
    e
}, Go = function(e) {
    return e instanceof ct ? Qi(e) : Mr(e, e._dur)
}, ku = {
    _start: 0,
    endTime: sn,
    totalDuration: sn
}, At = function s(e, t, i) {
    var r = e.labels, n = e._recent || ku, o = e.duration() >= It ? n.endTime(!1) : e._dur, a, l, u;
    return ze(t) && (isNaN(t) || t in r) ? (l = t.charAt(0),
    u = t.substr(-1) === "%",
    a = t.indexOf("="),
    l === "<" || l === ">" ? (a >= 0 && (t = t.replace(/=/, "")),
    (l === "<" ? n._start : n.endTime(n._repeat >= 0)) + (parseFloat(t.substr(1)) || 0) * (u ? (a < 0 ? n : i).totalDuration() / 100 : 1)) : a < 0 ? (t in r || (r[t] = o),
    r[t]) : (l = parseFloat(t.charAt(a - 1) + t.substr(a + 1)),
    u && i && (l = l / 100 * (je(i) ? i[0] : i).totalDuration()),
    a > 1 ? s(e, t.substr(0, a - 1), i) + l : o + l)) : t == null ? o : +t
}, Xr = function(e, t, i) {
    var r = mi(t[1]), n = (r ? 2 : 1) + (e < 2 ? 0 : 1), o = t[n], a, l;
    if (r && (o.duration = t[1]),
    o.parent = i,
    e) {
        for (a = o,
        l = i; l && !("immediateRender"in a); )
            a = l.vars.defaults || {},
            l = dt(l.vars.inherit) && l.parent;
        o.immediateRender = dt(a.immediateRender),
        e < 2 ? o.runBackwards = 1 : o.startAt = t[n - 1]
    }
    return new Ce(t[0],o,t[n + 1])
}, Ii = function(e, t) {
    return e || e === 0 ? t(e) : t
}, hn = function(e, t, i) {
    return i < e ? e : i > t ? t : i
}, Xe = function(e, t) {
    return !ze(e) || !(t = yu.exec(e)) ? "" : t[1]
}, Ou = function(e, t, i) {
    return Ii(i, function(r) {
        return hn(e, t, r)
    })
}, Gs = [].slice, ja = function(e, t) {
    return e && ni(e) && "length"in e && (!t && !e.length || e.length - 1 in e && ni(e[0])) && !e.nodeType && e !== kt
}, Lu = function(e, t, i) {
    return i === void 0 && (i = []),
    e.forEach(function(r) {
        var n;
        return ze(r) && !t || ja(r, 1) ? (n = i).push.apply(n, Dt(r)) : i.push(r)
    }) || i
}, Dt = function(e, t, i) {
    return _e && !t && _e.selector ? _e.selector(e) : ze(e) && !i && (Bs || !Ar()) ? Gs.call((t || mo).querySelectorAll(e), 0) : je(e) ? Lu(e, i) : ja(e) ? Gs.call(e, 0) : e ? [e] : []
}, Hs = function(e) {
    return e = Dt(e)[0] || Xn("Invalid scope") || {},
    function(t) {
        var i = e.current || e.nativeElement || e;
        return Dt(t, i.querySelectorAll ? i : i === e ? Xn("Invalid scope") || mo.createElement("div") : e)
    }
}, Ka = function(e) {
    return e.sort(function() {
        return .5 - Math.random()
    })
}, Qa = function(e) {
    if (ve(e))
        return e;
    var t = ni(e) ? e : {
        each: e
    }
      , i = Zi(t.ease)
      , r = t.from || 0
      , n = parseFloat(t.base) || 0
      , o = {}
      , a = r > 0 && r < 1
      , l = isNaN(r) || a
      , u = t.axis
      , c = r
      , f = r;
    return ze(r) ? c = f = {
        center: .5,
        edges: .5,
        end: 1
    }[r] || 0 : !a && l && (c = r[0],
    f = r[1]),
    function(p, d, g) {
        var h = (g || t).length, v = o[h], y, m, _, w, S, b, E, P, C;
        if (!v) {
            if (C = t.grid === "auto" ? 0 : (t.grid || [1, It])[1],
            !C) {
                for (E = -It; E < (E = g[C++].getBoundingClientRect().left) && C < h; )
                    ;
                C--
            }
            for (v = o[h] = [],
            y = l ? Math.min(C, h) * c - .5 : r % C,
            m = C === It ? 0 : l ? h * f / C - .5 : r / C | 0,
            E = 0,
            P = It,
            b = 0; b < h; b++)
                _ = b % C - y,
                w = m - (b / C | 0),
                v[b] = S = u ? Math.abs(u === "y" ? w : _) : La(_ * _ + w * w),
                S > E && (E = S),
                S < P && (P = S);
            r === "random" && Ka(v),
            v.max = E - P,
            v.min = P,
            v.v = h = (parseFloat(t.amount) || parseFloat(t.each) * (C > h ? h - 1 : u ? u === "y" ? h / C : C : Math.max(C, h / C)) || 0) * (r === "edges" ? -1 : 1),
            v.b = h < 0 ? n - h : n,
            v.u = Xe(t.amount || t.each) || 0,
            i = i && h < 0 ? al(i) : i
        }
        return h = (v[p] - v.min) / v.max || 0,
        $e(v.b + (i ? i(h) : h) * v.v) + v.u
    }
}, Ws = function(e) {
    var t = Math.pow(10, ((e + "").split(".")[1] || "").length);
    return function(i) {
        var r = $e(Math.round(parseFloat(i) / e) * e * t);
        return (r - r % 1) / t + (mi(i) ? 0 : Xe(i))
    }
}, Za = function(e, t) {
    var i = je(e), r, n;
    return !i && ni(e) && (r = i = e.radius || It,
    e.values ? (e = Dt(e.values),
    (n = !mi(e[0])) && (r *= r)) : e = Ws(e.increment)),
    Ii(t, i ? ve(e) ? function(o) {
        return n = e(o),
        Math.abs(n - o) <= r ? n : o
    }
    : function(o) {
        for (var a = parseFloat(n ? o.x : o), l = parseFloat(n ? o.y : 0), u = It, c = 0, f = e.length, p, d; f--; )
            n ? (p = e[f].x - a,
            d = e[f].y - l,
            p = p * p + d * d) : p = Math.abs(e[f] - a),
            p < u && (u = p,
            c = f);
        return c = !r || u <= r ? e[c] : o,
        n || c === o || mi(o) ? c : c + Xe(o)
    }
    : Ws(e))
}, Ja = function(e, t, i, r) {
    return Ii(je(e) ? !t : i === !0 ? !!(i = 0) : !r, function() {
        return je(e) ? e[~~(Math.random() * e.length)] : (i = i || 1e-5) && (r = i < 1 ? Math.pow(10, (i + "").length - 2) : 1) && Math.floor(Math.round((e - i / 2 + Math.random() * (t - e + i * .99)) / i) * i * r) / r
    })
}, Iu = function() {
    for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
        t[i] = arguments[i];
    return function(r) {
        return t.reduce(function(n, o) {
            return o(n)
        }, r)
    }
}, Du = function(e, t) {
    return function(i) {
        return e(parseFloat(i)) + (t || Xe(i))
    }
}, zu = function(e, t, i) {
    return tl(e, t, 0, 1, i)
}, el = function(e, t, i) {
    return Ii(i, function(r) {
        return e[~~t(r)]
    })
}, Ru = function s(e, t, i) {
    var r = t - e;
    return je(e) ? el(e, s(0, e.length), t) : Ii(i, function(n) {
        return (r + (n - e) % r) % r + e
    })
}, Fu = function s(e, t, i) {
    var r = t - e
      , n = r * 2;
    return je(e) ? el(e, s(0, e.length - 1), t) : Ii(i, function(o) {
        return o = (n + (o - e) % n) % n || 0,
        e + (o > r ? n - o : o)
    })
}, on = function(e) {
    for (var t = 0, i = "", r, n, o, a; ~(r = e.indexOf("random(", t)); )
        o = e.indexOf(")", r),
        a = e.charAt(r + 7) === "[",
        n = e.substr(r + 7, o - r - 7).match(a ? Ra : Ns),
        i += e.substr(t, r - t) + Ja(a ? n : +n[0], a ? 0 : +n[1], +n[2] || 1e-5),
        t = o + 1;
    return i + e.substr(t, e.length - t)
}, tl = function(e, t, i, r, n) {
    var o = t - e
      , a = r - i;
    return Ii(n, function(l) {
        return i + ((l - e) / o * a || 0)
    })
}, Nu = function s(e, t, i, r) {
    var n = isNaN(e + t) ? 0 : function(d) {
        return (1 - d) * e + d * t
    }
    ;
    if (!n) {
        var o = ze(e), a = {}, l, u, c, f, p;
        if (i === !0 && (r = 1) && (i = null),
        o)
            e = {
                p: e
            },
            t = {
                p: t
            };
        else if (je(e) && !je(t)) {
            for (c = [],
            f = e.length,
            p = f - 2,
            u = 1; u < f; u++)
                c.push(s(e[u - 1], e[u]));
            f--,
            n = function(g) {
                g *= f;
                var h = Math.min(p, ~~g);
                return c[h](g - h)
            }
            ,
            i = t
        } else
            r || (e = rr(je(e) ? [] : {}, e));
        if (!c) {
            for (l in t)
                wo.call(a, e, l, "get", t[l]);
            n = function(g) {
                return bo(g, a) || (o ? e.p : e)
            }
        }
    }
    return Ii(i, n)
}, Ho = function(e, t, i) {
    var r = e.labels, n = It, o, a, l;
    for (o in r)
        a = r[o] - t,
        a < 0 == !!i && a && n > (a = Math.abs(a)) && (l = o,
        n = a);
    return l
}, zt = function(e, t, i) {
    var r = e.vars, n = r[t], o = _e, a = e._ctx, l, u, c;
    if (n)
        return l = r[t + "Params"],
        u = r.callbackScope || e,
        i && Pi.length && Un(),
        a && (_e = a),
        c = l ? n.apply(u, l) : n.call(u),
        _e = o,
        c
}, Vr = function(e) {
    return ki(e),
    e.scrollTrigger && e.scrollTrigger.kill(!!Ue),
    e.progress() < 1 && zt(e, "onInterrupt"),
    e
}, _r, il = [], rl = function(e) {
    if (ho() && e) {
        e = !e.name && e.default || e;
        var t = e.name
          , i = ve(e)
          , r = t && !i && e.init ? function() {
            this._props = []
        }
        : e
          , n = {
            init: sn,
            render: bo,
            add: wo,
            kill: ec,
            modifier: Ju,
            rawVars: 0
        }
          , o = {
            targetTest: 0,
            get: 0,
            getSetter: To,
            aliases: {},
            register: 0
        };
        if (Ar(),
        e !== r) {
            if (xt[t])
                return;
            Ft(r, Ft(jn(e, n), o)),
            rr(r.prototype, rr(n, jn(e, o))),
            xt[r.prop = t] = r,
            e.targetTest && (Rn.push(r),
            _o[t] = 1),
            t = (t === "css" ? "CSS" : t.charAt(0).toUpperCase() + t.substr(1)) + "Plugin"
        }
        Ba(t, r),
        e.register && e.register(ht, r, pt)
    } else
        e && il.push(e)
}, ne = 255, $r = {
    aqua: [0, ne, ne],
    lime: [0, ne, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, ne],
    navy: [0, 0, 128],
    white: [ne, ne, ne],
    olive: [128, 128, 0],
    yellow: [ne, ne, 0],
    orange: [ne, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [ne, 0, 0],
    pink: [ne, 192, 203],
    cyan: [0, ne, ne],
    transparent: [ne, ne, ne, 0]
}, _s = function(e, t, i) {
    return e += e < 0 ? 1 : e > 1 ? -1 : 0,
    (e * 6 < 1 ? t + (i - t) * e * 6 : e < .5 ? i : e * 3 < 2 ? t + (i - t) * (2 / 3 - e) * 6 : t) * ne + .5 | 0
}, nl = function(e, t, i) {
    var r = e ? mi(e) ? [e >> 16, e >> 8 & ne, e & ne] : 0 : $r.black, n, o, a, l, u, c, f, p, d, g;
    if (!r) {
        if (e.substr(-1) === "," && (e = e.substr(0, e.length - 1)),
        $r[e])
            r = $r[e];
        else if (e.charAt(0) === "#") {
            if (e.length < 6 && (n = e.charAt(1),
            o = e.charAt(2),
            a = e.charAt(3),
            e = "#" + n + n + o + o + a + a + (e.length === 5 ? e.charAt(4) + e.charAt(4) : "")),
            e.length === 9)
                return r = parseInt(e.substr(1, 6), 16),
                [r >> 16, r >> 8 & ne, r & ne, parseInt(e.substr(7), 16) / 255];
            e = parseInt(e.substr(1), 16),
            r = [e >> 16, e >> 8 & ne, e & ne]
        } else if (e.substr(0, 3) === "hsl") {
            if (r = g = e.match(Ns),
            !t)
                l = +r[0] % 360 / 360,
                u = +r[1] / 100,
                c = +r[2] / 100,
                o = c <= .5 ? c * (u + 1) : c + u - c * u,
                n = c * 2 - o,
                r.length > 3 && (r[3] *= 1),
                r[0] = _s(l + 1 / 3, n, o),
                r[1] = _s(l, n, o),
                r[2] = _s(l - 1 / 3, n, o);
            else if (~e.indexOf("="))
                return r = e.match(Da),
                i && r.length < 4 && (r[3] = 1),
                r
        } else
            r = e.match(Ns) || $r.transparent;
        r = r.map(Number)
    }
    return t && !g && (n = r[0] / ne,
    o = r[1] / ne,
    a = r[2] / ne,
    f = Math.max(n, o, a),
    p = Math.min(n, o, a),
    c = (f + p) / 2,
    f === p ? l = u = 0 : (d = f - p,
    u = c > .5 ? d / (2 - f - p) : d / (f + p),
    l = f === n ? (o - a) / d + (o < a ? 6 : 0) : f === o ? (a - n) / d + 2 : (n - o) / d + 4,
    l *= 60),
    r[0] = ~~(l + .5),
    r[1] = ~~(u * 100 + .5),
    r[2] = ~~(c * 100 + .5)),
    i && r.length < 4 && (r[3] = 1),
    r
}, sl = function(e) {
    var t = []
      , i = []
      , r = -1;
    return e.split(Mi).forEach(function(n) {
        var o = n.match(gr) || [];
        t.push.apply(t, o),
        i.push(r += o.length + 1)
    }),
    t.c = i,
    t
}, Wo = function(e, t, i) {
    var r = "", n = (e + r).match(Mi), o = t ? "hsla(" : "rgba(", a = 0, l, u, c, f;
    if (!n)
        return e;
    if (n = n.map(function(p) {
        return (p = nl(p, t, 1)) && o + (t ? p[0] + "," + p[1] + "%," + p[2] + "%," + p[3] : p.join(",")) + ")"
    }),
    i && (c = sl(e),
    l = i.c,
    l.join(r) !== c.c.join(r)))
        for (u = e.replace(Mi, "1").split(gr),
        f = u.length - 1; a < f; a++)
            r += u[a] + (~l.indexOf(a) ? n.shift() || o + "0,0,0,0)" : (c.length ? c : n.length ? n : i).shift());
    if (!u)
        for (u = e.split(Mi),
        f = u.length - 1; a < f; a++)
            r += u[a] + n[a];
    return r + u[f]
}, Mi = function() {
    var s = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", e;
    for (e in $r)
        s += "|" + e + "\\b";
    return new RegExp(s + ")","gi")
}(), Bu = /hsl[a]?\(/, ol = function(e) {
    var t = e.join(" "), i;
    if (Mi.lastIndex = 0,
    Mi.test(t))
        return i = Bu.test(t),
        e[1] = Wo(e[1], i),
        e[0] = Wo(e[0], i, sl(e[1])),
        !0
}, an, bt = function() {
    var s = Date.now, e = 500, t = 33, i = s(), r = i, n = 1e3 / 240, o = n, a = [], l, u, c, f, p, d, g = function h(v) {
        var y = s() - r, m = v === !0, _, w, S, b;
        if (y > e && (i += y - t),
        r += y,
        S = r - i,
        _ = S - o,
        (_ > 0 || m) && (b = ++f.frame,
        p = S - f.time * 1e3,
        f.time = S = S / 1e3,
        o += _ + (_ >= n ? 4 : n - _),
        w = 1),
        m || (l = u(h)),
        w)
            for (d = 0; d < a.length; d++)
                a[d](S, p, b, v)
    };
    return f = {
        time: 0,
        frame: 0,
        tick: function() {
            g(!0)
        },
        deltaRatio: function(v) {
            return p / (1e3 / (v || 60))
        },
        wake: function() {
            Fa && (!Bs && ho() && (kt = Bs = window,
            mo = kt.document || {},
            Pt.gsap = ht,
            (kt.gsapVersions || (kt.gsapVersions = [])).push(ht.version),
            Na(Yn || kt.GreenSockGlobals || !kt.gsap && kt || {}),
            c = kt.requestAnimationFrame,
            il.forEach(rl)),
            l && f.sleep(),
            u = c || function(v) {
                return setTimeout(v, o - f.time * 1e3 + 1 | 0)
            }
            ,
            an = 1,
            g(2))
        },
        sleep: function() {
            (c ? kt.cancelAnimationFrame : clearTimeout)(l),
            an = 0,
            u = sn
        },
        lagSmoothing: function(v, y) {
            e = v || 1 / 0,
            t = Math.min(y || 33, e)
        },
        fps: function(v) {
            n = 1e3 / (v || 240),
            o = f.time * 1e3 + n
        },
        add: function(v, y, m) {
            var _ = y ? function(w, S, b, E) {
                v(w, S, b, E),
                f.remove(_)
            }
            : v;
            return f.remove(v),
            a[m ? "unshift" : "push"](_),
            Ar(),
            _
        },
        remove: function(v, y) {
            ~(y = a.indexOf(v)) && a.splice(y, 1) && d >= y && d--
        },
        _listeners: a
    },
    f
}(), Ar = function() {
    return !an && bt.wake()
}, K = {}, qu = /^[\d.\-M][\d.\-,\s]/, Vu = /["']/g, $u = function(e) {
    for (var t = {}, i = e.substr(1, e.length - 3).split(":"), r = i[0], n = 1, o = i.length, a, l, u; n < o; n++)
        l = i[n],
        a = n !== o - 1 ? l.lastIndexOf(",") : l.length,
        u = l.substr(0, a),
        t[r] = isNaN(u) ? u.replace(Vu, "").trim() : +u,
        r = l.substr(a + 1).trim();
    return t
}, Gu = function(e) {
    var t = e.indexOf("(") + 1
      , i = e.indexOf(")")
      , r = e.indexOf("(", t);
    return e.substring(t, ~r && r < i ? e.indexOf(")", i + 1) : i)
}, Hu = function(e) {
    var t = (e + "").split("(")
      , i = K[t[0]];
    return i && t.length > 1 && i.config ? i.config.apply(null, ~e.indexOf("{") ? [$u(t[1])] : Gu(e).split(",").map(Ga)) : K._CE && qu.test(e) ? K._CE("", e) : i
}, al = function(e) {
    return function(t) {
        return 1 - e(1 - t)
    }
}, ll = function s(e, t) {
    for (var i = e._first, r; i; )
        i instanceof ct ? s(i, t) : i.vars.yoyoEase && (!i._yoyo || !i._repeat) && i._yoyo !== t && (i.timeline ? s(i.timeline, t) : (r = i._ease,
        i._ease = i._yEase,
        i._yEase = r,
        i._yoyo = t)),
        i = i._next
}, Zi = function(e, t) {
    return e && (ve(e) ? e : K[e] || Hu(e)) || t
}, ar = function(e, t, i, r) {
    i === void 0 && (i = function(l) {
        return 1 - t(1 - l)
    }
    ),
    r === void 0 && (r = function(l) {
        return l < .5 ? t(l * 2) / 2 : 1 - t((1 - l) * 2) / 2
    }
    );
    var n = {
        easeIn: t,
        easeOut: i,
        easeInOut: r
    }, o;
    return ft(e, function(a) {
        K[a] = Pt[a] = n,
        K[o = a.toLowerCase()] = i;
        for (var l in n)
            K[o + (l === "easeIn" ? ".in" : l === "easeOut" ? ".out" : ".inOut")] = K[a + "." + l] = n[l]
    }),
    n
}, ul = function(e) {
    return function(t) {
        return t < .5 ? (1 - e(1 - t * 2)) / 2 : .5 + e((t - .5) * 2) / 2
    }
}, vs = function s(e, t, i) {
    var r = t >= 1 ? t : 1
      , n = (i || (e ? .3 : .45)) / (t < 1 ? t : 1)
      , o = n / Fs * (Math.asin(1 / r) || 0)
      , a = function(c) {
        return c === 1 ? 1 : r * Math.pow(2, -10 * c) * vu((c - o) * n) + 1
    }
      , l = e === "out" ? a : e === "in" ? function(u) {
        return 1 - a(1 - u)
    }
    : ul(a);
    return n = Fs / n,
    l.config = function(u, c) {
        return s(e, u, c)
    }
    ,
    l
}, ys = function s(e, t) {
    t === void 0 && (t = 1.70158);
    var i = function(o) {
        return o ? --o * o * ((t + 1) * o + t) + 1 : 0
    }
      , r = e === "out" ? i : e === "in" ? function(n) {
        return 1 - i(1 - n)
    }
    : ul(i);
    return r.config = function(n) {
        return s(e, n)
    }
    ,
    r
};
ft("Linear,Quad,Cubic,Quart,Quint,Strong", function(s, e) {
    var t = e < 5 ? e + 1 : e;
    ar(s + ",Power" + (t - 1), e ? function(i) {
        return Math.pow(i, t)
    }
    : function(i) {
        return i
    }
    , function(i) {
        return 1 - Math.pow(1 - i, t)
    }, function(i) {
        return i < .5 ? Math.pow(i * 2, t) / 2 : 1 - Math.pow((1 - i) * 2, t) / 2
    })
});
K.Linear.easeNone = K.none = K.Linear.easeIn;
ar("Elastic", vs("in"), vs("out"), vs());
(function(s, e) {
    var t = 1 / e
      , i = 2 * t
      , r = 2.5 * t
      , n = function(a) {
        return a < t ? s * a * a : a < i ? s * Math.pow(a - 1.5 / e, 2) + .75 : a < r ? s * (a -= 2.25 / e) * a + .9375 : s * Math.pow(a - 2.625 / e, 2) + .984375
    };
    ar("Bounce", function(o) {
        return 1 - n(1 - o)
    }, n)
}
)(7.5625, 2.75);
ar("Expo", function(s) {
    return s ? Math.pow(2, 10 * (s - 1)) : 0
});
ar("Circ", function(s) {
    return -(La(1 - s * s) - 1)
});
ar("Sine", function(s) {
    return s === 1 ? 1 : -_u(s * mu) + 1
});
ar("Back", ys("in"), ys("out"), ys());
K.SteppedEase = K.steps = Pt.SteppedEase = {
    config: function(e, t) {
        e === void 0 && (e = 1);
        var i = 1 / e
          , r = e + (t ? 0 : 1)
          , n = t ? 1 : 0
          , o = 1 - se;
        return function(a) {
            return ((r * hn(0, o, a) | 0) + n) * i
        }
    }
};
Cr.ease = K["quad.out"];
ft("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(s) {
    return vo += s + "," + s + "Params,"
});
var cl = function(e, t) {
    this.id = gu++,
    e._gsap = this,
    this.target = e,
    this.harness = t,
    this.get = t ? t.get : Va,
    this.set = t ? t.getSetter : To
}
  , ln = function() {
    function s(t) {
        this.vars = t,
        this._delay = +t.delay || 0,
        (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0,
        this._yoyo = !!t.yoyo || !!t.yoyoEase),
        this._ts = 1,
        Mr(this, +t.duration, 1, 1),
        this.data = t.data,
        _e && (this._ctx = _e,
        _e.data.push(this)),
        an || bt.wake()
    }
    var e = s.prototype;
    return e.delay = function(i) {
        return i || i === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + i - this._delay),
        this._delay = i,
        this) : this._delay
    }
    ,
    e.duration = function(i) {
        return arguments.length ? this.totalDuration(this._repeat > 0 ? i + (i + this._rDelay) * this._repeat : i) : this.totalDuration() && this._dur
    }
    ,
    e.totalDuration = function(i) {
        return arguments.length ? (this._dirty = 0,
        Mr(this, this._repeat < 0 ? i : (i - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
    }
    ,
    e.totalTime = function(i, r) {
        if (Ar(),
        !arguments.length)
            return this._tTime;
        var n = this._dp;
        if (n && n.smoothChildTiming && this._ts) {
            for (fs(this, i),
            !n._dp || n.parent || Ya(n, this); n && n.parent; )
                n.parent._time !== n._start + (n._ts >= 0 ? n._tTime / n._ts : (n.totalDuration() - n._tTime) / -n._ts) && n.totalTime(n._tTime, !0),
                n = n.parent;
            !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && i < this._tDur || this._ts < 0 && i > 0 || !this._tDur && !i) && Jt(this._dp, this, this._start - this._delay)
        }
        return (this._tTime !== i || !this._dur && !r || this._initted && Math.abs(this._zTime) === se || !i && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = i),
        $a(this, i, r)),
        this
    }
    ,
    e.time = function(i, r) {
        return arguments.length ? this.totalTime(Math.min(this.totalDuration(), i + $o(this)) % (this._dur + this._rDelay) || (i ? this._dur : 0), r) : this._time
    }
    ,
    e.totalProgress = function(i, r) {
        return arguments.length ? this.totalTime(this.totalDuration() * i, r) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio
    }
    ,
    e.progress = function(i, r) {
        return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - i : i) + $o(this), r) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio
    }
    ,
    e.iteration = function(i, r) {
        var n = this.duration() + this._rDelay;
        return arguments.length ? this.totalTime(this._time + (i - 1) * n, r) : this._repeat ? Pr(this._tTime, n) + 1 : 1
    }
    ,
    e.timeScale = function(i) {
        if (!arguments.length)
            return this._rts === -se ? 0 : this._rts;
        if (this._rts === i)
            return this;
        var r = this.parent && this._ts ? Kn(this.parent._time, this) : this._tTime;
        return this._rts = +i || 0,
        this._ts = this._ps || i === -se ? 0 : this._rts,
        this.totalTime(hn(-Math.abs(this._delay), this._tDur, r), !0),
        ds(this),
        Eu(this)
    }
    ,
    e.paused = function(i) {
        return arguments.length ? (this._ps !== i && (this._ps = i,
        i ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()),
        this._ts = this._act = 0) : (Ar(),
        this._ts = this._rts,
        this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== se && (this._tTime -= se)))),
        this) : this._ps
    }
    ,
    e.startTime = function(i) {
        if (arguments.length) {
            this._start = i;
            var r = this.parent || this._dp;
            return r && (r._sort || !this.parent) && Jt(r, this, i - this._delay),
            this
        }
        return this._start
    }
    ,
    e.endTime = function(i) {
        return this._start + (dt(i) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
    }
    ,
    e.rawTime = function(i) {
        var r = this.parent || this._dp;
        return r ? i && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Kn(r.rawTime(i), this) : this._tTime : this._tTime
    }
    ,
    e.revert = function(i) {
        i === void 0 && (i = Su);
        var r = Ue;
        return Ue = i,
        (this._initted || this._startAt) && (this.timeline && this.timeline.revert(i),
        this.totalTime(-.01, i.suppressEvents)),
        this.data !== "nested" && i.kill !== !1 && this.kill(),
        Ue = r,
        this
    }
    ,
    e.globalTime = function(i) {
        for (var r = this, n = arguments.length ? i : r.rawTime(); r; )
            n = r._start + n / (r._ts || 1),
            r = r._dp;
        return !this.parent && this._sat ? this._sat.vars.immediateRender ? -1 / 0 : this._sat.globalTime(i) : n
    }
    ,
    e.repeat = function(i) {
        return arguments.length ? (this._repeat = i === 1 / 0 ? -2 : i,
        Go(this)) : this._repeat === -2 ? 1 / 0 : this._repeat
    }
    ,
    e.repeatDelay = function(i) {
        if (arguments.length) {
            var r = this._time;
            return this._rDelay = i,
            Go(this),
            r ? this.time(r) : this
        }
        return this._rDelay
    }
    ,
    e.yoyo = function(i) {
        return arguments.length ? (this._yoyo = i,
        this) : this._yoyo
    }
    ,
    e.seek = function(i, r) {
        return this.totalTime(At(this, i), dt(r))
    }
    ,
    e.restart = function(i, r) {
        return this.play().totalTime(i ? -this._delay : 0, dt(r))
    }
    ,
    e.play = function(i, r) {
        return i != null && this.seek(i, r),
        this.reversed(!1).paused(!1)
    }
    ,
    e.reverse = function(i, r) {
        return i != null && this.seek(i || this.totalDuration(), r),
        this.reversed(!0).paused(!1)
    }
    ,
    e.pause = function(i, r) {
        return i != null && this.seek(i, r),
        this.paused(!0)
    }
    ,
    e.resume = function() {
        return this.paused(!1)
    }
    ,
    e.reversed = function(i) {
        return arguments.length ? (!!i !== this.reversed() && this.timeScale(-this._rts || (i ? -se : 0)),
        this) : this._rts < 0
    }
    ,
    e.invalidate = function() {
        return this._initted = this._act = 0,
        this._zTime = -se,
        this
    }
    ,
    e.isActive = function() {
        var i = this.parent || this._dp, r = this._start, n;
        return !!(!i || this._ts && this._initted && i.isActive() && (n = i.rawTime(!0)) >= r && n < this.endTime(!0) - se)
    }
    ,
    e.eventCallback = function(i, r, n) {
        var o = this.vars;
        return arguments.length > 1 ? (r ? (o[i] = r,
        n && (o[i + "Params"] = n),
        i === "onUpdate" && (this._onUpdate = r)) : delete o[i],
        this) : o[i]
    }
    ,
    e.then = function(i) {
        var r = this;
        return new Promise(function(n) {
            var o = ve(i) ? i : Ha
              , a = function() {
                var u = r.then;
                r.then = null,
                ve(o) && (o = o(r)) && (o.then || o === r) && (r.then = u),
                n(o),
                r.then = u
            };
            r._initted && r.totalProgress() === 1 && r._ts >= 0 || !r._tTime && r._ts < 0 ? a() : r._prom = a
        }
        )
    }
    ,
    e.kill = function() {
        Vr(this)
    }
    ,
    s
}();
Ft(ln.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: !1,
    parent: null,
    _initted: !1,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -se,
    _prom: 0,
    _ps: !1,
    _rts: 1
});
var ct = function(s) {
    Oa(e, s);
    function e(i, r) {
        var n;
        return i === void 0 && (i = {}),
        n = s.call(this, i) || this,
        n.labels = {},
        n.smoothChildTiming = !!i.smoothChildTiming,
        n.autoRemoveChildren = !!i.autoRemoveChildren,
        n._sort = dt(i.sortChildren),
        de && Jt(i.parent || de, li(n), r),
        i.reversed && n.reverse(),
        i.paused && n.paused(!0),
        i.scrollTrigger && Xa(li(n), i.scrollTrigger),
        n
    }
    var t = e.prototype;
    return t.to = function(r, n, o) {
        return Xr(0, arguments, this),
        this
    }
    ,
    t.from = function(r, n, o) {
        return Xr(1, arguments, this),
        this
    }
    ,
    t.fromTo = function(r, n, o, a) {
        return Xr(2, arguments, this),
        this
    }
    ,
    t.set = function(r, n, o) {
        return n.duration = 0,
        n.parent = this,
        Yr(n).repeatDelay || (n.repeat = 0),
        n.immediateRender = !!n.immediateRender,
        new Ce(r,n,At(this, o),1),
        this
    }
    ,
    t.call = function(r, n, o) {
        return Jt(this, Ce.delayedCall(0, r, n), o)
    }
    ,
    t.staggerTo = function(r, n, o, a, l, u, c) {
        return o.duration = n,
        o.stagger = o.stagger || a,
        o.onComplete = u,
        o.onCompleteParams = c,
        o.parent = this,
        new Ce(r,o,At(this, l)),
        this
    }
    ,
    t.staggerFrom = function(r, n, o, a, l, u, c) {
        return o.runBackwards = 1,
        Yr(o).immediateRender = dt(o.immediateRender),
        this.staggerTo(r, n, o, a, l, u, c)
    }
    ,
    t.staggerFromTo = function(r, n, o, a, l, u, c, f) {
        return a.startAt = o,
        Yr(a).immediateRender = dt(a.immediateRender),
        this.staggerTo(r, n, a, l, u, c, f)
    }
    ,
    t.render = function(r, n, o) {
        var a = this._time, l = this._dirty ? this.totalDuration() : this._tDur, u = this._dur, c = r <= 0 ? 0 : $e(r), f = this._zTime < 0 != r < 0 && (this._initted || !u), p, d, g, h, v, y, m, _, w, S, b, E;
        if (this !== de && c > l && r >= 0 && (c = l),
        c !== this._tTime || o || f) {
            if (a !== this._time && u && (c += this._time - a,
            r += this._time - a),
            p = c,
            w = this._start,
            _ = this._ts,
            y = !_,
            f && (u || (a = this._zTime),
            (r || !n) && (this._zTime = r)),
            this._repeat) {
                if (b = this._yoyo,
                v = u + this._rDelay,
                this._repeat < -1 && r < 0)
                    return this.totalTime(v * 100 + r, n, o);
                if (p = $e(c % v),
                c === l ? (h = this._repeat,
                p = u) : (h = ~~(c / v),
                h && h === c / v && (p = u,
                h--),
                p > u && (p = u)),
                S = Pr(this._tTime, v),
                !a && this._tTime && S !== h && this._tTime - S * v - this._dur <= 0 && (S = h),
                b && h & 1 && (p = u - p,
                E = 1),
                h !== S && !this._lock) {
                    var P = b && S & 1
                      , C = P === (b && h & 1);
                    if (h < S && (P = !P),
                    a = P ? 0 : c % u ? u : c,
                    this._lock = 1,
                    this.render(a || (E ? 0 : $e(h * v)), n, !u)._lock = 0,
                    this._tTime = c,
                    !n && this.parent && zt(this, "onRepeat"),
                    this.vars.repeatRefresh && !E && (this.invalidate()._lock = 1),
                    a && a !== this._time || y !== !this._ts || this.vars.onRepeat && !this.parent && !this._act)
                        return this;
                    if (u = this._dur,
                    l = this._tDur,
                    C && (this._lock = 2,
                    a = P ? u : -1e-4,
                    this.render(a, !0),
                    this.vars.repeatRefresh && !E && this.invalidate()),
                    this._lock = 0,
                    !this._ts && !y)
                        return this;
                    ll(this, E)
                }
            }
            if (this._hasPause && !this._forcing && this._lock < 2 && (m = Au(this, $e(a), $e(p)),
            m && (c -= p - (p = m._start))),
            this._tTime = c,
            this._time = p,
            this._act = !_,
            this._initted || (this._onUpdate = this.vars.onUpdate,
            this._initted = 1,
            this._zTime = r,
            a = 0),
            !a && p && !n && !h && (zt(this, "onStart"),
            this._tTime !== c))
                return this;
            if (p >= a && r >= 0)
                for (d = this._first; d; ) {
                    if (g = d._next,
                    (d._act || p >= d._start) && d._ts && m !== d) {
                        if (d.parent !== this)
                            return this.render(r, n, o);
                        if (d.render(d._ts > 0 ? (p - d._start) * d._ts : (d._dirty ? d.totalDuration() : d._tDur) + (p - d._start) * d._ts, n, o),
                        p !== this._time || !this._ts && !y) {
                            m = 0,
                            g && (c += this._zTime = -se);
                            break
                        }
                    }
                    d = g
                }
            else {
                d = this._last;
                for (var T = r < 0 ? r : p; d; ) {
                    if (g = d._prev,
                    (d._act || T <= d._end) && d._ts && m !== d) {
                        if (d.parent !== this)
                            return this.render(r, n, o);
                        if (d.render(d._ts > 0 ? (T - d._start) * d._ts : (d._dirty ? d.totalDuration() : d._tDur) + (T - d._start) * d._ts, n, o || Ue && (d._initted || d._startAt)),
                        p !== this._time || !this._ts && !y) {
                            m = 0,
                            g && (c += this._zTime = T ? -se : se);
                            break
                        }
                    }
                    d = g
                }
            }
            if (m && !n && (this.pause(),
            m.render(p >= a ? 0 : -se)._zTime = p >= a ? 1 : -1,
            this._ts))
                return this._start = w,
                ds(this),
                this.render(r, n, o);
            this._onUpdate && !n && zt(this, "onUpdate", !0),
            (c === l && this._tTime >= this.totalDuration() || !c && a) && (w === this._start || Math.abs(_) !== Math.abs(this._ts)) && (this._lock || ((r || !u) && (c === l && this._ts > 0 || !c && this._ts < 0) && ki(this, 1),
            !n && !(r < 0 && !a) && (c || a || !l) && (zt(this, c === l && r >= 0 ? "onComplete" : "onReverseComplete", !0),
            this._prom && !(c < l && this.timeScale() > 0) && this._prom())))
        }
        return this
    }
    ,
    t.add = function(r, n) {
        var o = this;
        if (mi(n) || (n = At(this, n, r)),
        !(r instanceof ln)) {
            if (je(r))
                return r.forEach(function(a) {
                    return o.add(a, n)
                }),
                this;
            if (ze(r))
                return this.addLabel(r, n);
            if (ve(r))
                r = Ce.delayedCall(0, r);
            else
                return this
        }
        return this !== r ? Jt(this, r, n) : this
    }
    ,
    t.getChildren = function(r, n, o, a) {
        r === void 0 && (r = !0),
        n === void 0 && (n = !0),
        o === void 0 && (o = !0),
        a === void 0 && (a = -It);
        for (var l = [], u = this._first; u; )
            u._start >= a && (u instanceof Ce ? n && l.push(u) : (o && l.push(u),
            r && l.push.apply(l, u.getChildren(!0, n, o)))),
            u = u._next;
        return l
    }
    ,
    t.getById = function(r) {
        for (var n = this.getChildren(1, 1, 1), o = n.length; o--; )
            if (n[o].vars.id === r)
                return n[o]
    }
    ,
    t.remove = function(r) {
        return ze(r) ? this.removeLabel(r) : ve(r) ? this.killTweensOf(r) : (cs(this, r),
        r === this._recent && (this._recent = this._last),
        Qi(this))
    }
    ,
    t.totalTime = function(r, n) {
        return arguments.length ? (this._forcing = 1,
        !this._dp && this._ts && (this._start = $e(bt.time - (this._ts > 0 ? r / this._ts : (this.totalDuration() - r) / -this._ts))),
        s.prototype.totalTime.call(this, r, n),
        this._forcing = 0,
        this) : this._tTime
    }
    ,
    t.addLabel = function(r, n) {
        return this.labels[r] = At(this, n),
        this
    }
    ,
    t.removeLabel = function(r) {
        return delete this.labels[r],
        this
    }
    ,
    t.addPause = function(r, n, o) {
        var a = Ce.delayedCall(0, n || sn, o);
        return a.data = "isPause",
        this._hasPause = 1,
        Jt(this, a, At(this, r))
    }
    ,
    t.removePause = function(r) {
        var n = this._first;
        for (r = At(this, r); n; )
            n._start === r && n.data === "isPause" && ki(n),
            n = n._next
    }
    ,
    t.killTweensOf = function(r, n, o) {
        for (var a = this.getTweensOf(r, o), l = a.length; l--; )
            Si !== a[l] && a[l].kill(r, n);
        return this
    }
    ,
    t.getTweensOf = function(r, n) {
        for (var o = [], a = Dt(r), l = this._first, u = mi(n), c; l; )
            l instanceof Ce ? xu(l._targets, a) && (u ? (!Si || l._initted && l._ts) && l.globalTime(0) <= n && l.globalTime(l.totalDuration()) > n : !n || l.isActive()) && o.push(l) : (c = l.getTweensOf(a, n)).length && o.push.apply(o, c),
            l = l._next;
        return o
    }
    ,
    t.tweenTo = function(r, n) {
        n = n || {};
        var o = this, a = At(o, r), l = n, u = l.startAt, c = l.onStart, f = l.onStartParams, p = l.immediateRender, d, g = Ce.to(o, Ft({
            ease: n.ease || "none",
            lazy: !1,
            immediateRender: !1,
            time: a,
            overwrite: "auto",
            duration: n.duration || Math.abs((a - (u && "time"in u ? u.time : o._time)) / o.timeScale()) || se,
            onStart: function() {
                if (o.pause(),
                !d) {
                    var v = n.duration || Math.abs((a - (u && "time"in u ? u.time : o._time)) / o.timeScale());
                    g._dur !== v && Mr(g, v, 0, 1).render(g._time, !0, !0),
                    d = 1
                }
                c && c.apply(g, f || [])
            }
        }, n));
        return p ? g.render(0) : g
    }
    ,
    t.tweenFromTo = function(r, n, o) {
        return this.tweenTo(n, Ft({
            startAt: {
                time: At(this, r)
            }
        }, o))
    }
    ,
    t.recent = function() {
        return this._recent
    }
    ,
    t.nextLabel = function(r) {
        return r === void 0 && (r = this._time),
        Ho(this, At(this, r))
    }
    ,
    t.previousLabel = function(r) {
        return r === void 0 && (r = this._time),
        Ho(this, At(this, r), 1)
    }
    ,
    t.currentLabel = function(r) {
        return arguments.length ? this.seek(r, !0) : this.previousLabel(this._time + se)
    }
    ,
    t.shiftChildren = function(r, n, o) {
        o === void 0 && (o = 0);
        for (var a = this._first, l = this.labels, u; a; )
            a._start >= o && (a._start += r,
            a._end += r),
            a = a._next;
        if (n)
            for (u in l)
                l[u] >= o && (l[u] += r);
        return Qi(this)
    }
    ,
    t.invalidate = function(r) {
        var n = this._first;
        for (this._lock = 0; n; )
            n.invalidate(r),
            n = n._next;
        return s.prototype.invalidate.call(this, r)
    }
    ,
    t.clear = function(r) {
        r === void 0 && (r = !0);
        for (var n = this._first, o; n; )
            o = n._next,
            this.remove(n),
            n = o;
        return this._dp && (this._time = this._tTime = this._pTime = 0),
        r && (this.labels = {}),
        Qi(this)
    }
    ,
    t.totalDuration = function(r) {
        var n = 0, o = this, a = o._last, l = It, u, c, f;
        if (arguments.length)
            return o.timeScale((o._repeat < 0 ? o.duration() : o.totalDuration()) / (o.reversed() ? -r : r));
        if (o._dirty) {
            for (f = o.parent; a; )
                u = a._prev,
                a._dirty && a.totalDuration(),
                c = a._start,
                c > l && o._sort && a._ts && !o._lock ? (o._lock = 1,
                Jt(o, a, c - a._delay, 1)._lock = 0) : l = c,
                c < 0 && a._ts && (n -= c,
                (!f && !o._dp || f && f.smoothChildTiming) && (o._start += c / o._ts,
                o._time -= c,
                o._tTime -= c),
                o.shiftChildren(-c, !1, -1 / 0),
                l = 0),
                a._end > n && a._ts && (n = a._end),
                a = u;
            Mr(o, o === de && o._time > n ? o._time : n, 1, 1),
            o._dirty = 0
        }
        return o._tDur
    }
    ,
    e.updateRoot = function(r) {
        if (de._ts && ($a(de, Kn(r, de)),
        qa = bt.frame),
        bt.frame >= qo) {
            qo += Ct.autoSleep || 120;
            var n = de._first;
            if ((!n || !n._ts) && Ct.autoSleep && bt._listeners.length < 2) {
                for (; n && !n._ts; )
                    n = n._next;
                n || bt.sleep()
            }
        }
    }
    ,
    e
}(ln);
Ft(ct.prototype, {
    _lock: 0,
    _hasPause: 0,
    _forcing: 0
});
var Wu = function(e, t, i, r, n, o, a) {
    var l = new pt(this._pt,e,t,0,1,gl,null,n), u = 0, c = 0, f, p, d, g, h, v, y, m;
    for (l.b = i,
    l.e = r,
    i += "",
    r += "",
    (y = ~r.indexOf("random(")) && (r = on(r)),
    o && (m = [i, r],
    o(m, e, t),
    i = m[0],
    r = m[1]),
    p = i.match(ms) || []; f = ms.exec(r); )
        g = f[0],
        h = r.substring(u, f.index),
        d ? d = (d + 1) % 5 : h.substr(-5) === "rgba(" && (d = 1),
        g !== p[c++] && (v = parseFloat(p[c - 1]) || 0,
        l._pt = {
            _next: l._pt,
            p: h || c === 1 ? h : ",",
            s: v,
            c: g.charAt(1) === "=" ? wr(v, g) - v : parseFloat(g) - v,
            m: d && d < 4 ? Math.round : 0
        },
        u = ms.lastIndex);
    return l.c = u < r.length ? r.substring(u, r.length) : "",
    l.fp = a,
    (za.test(r) || y) && (l.e = 0),
    this._pt = l,
    l
}, wo = function(e, t, i, r, n, o, a, l, u, c) {
    ve(r) && (r = r(n || 0, e, o));
    var f = e[t], p = i !== "get" ? i : ve(f) ? u ? e[t.indexOf("set") || !ve(e["get" + t.substr(3)]) ? t : "get" + t.substr(3)](u) : e[t]() : f, d = ve(f) ? u ? Ku : hl : xo, g;
    if (ze(r) && (~r.indexOf("random(") && (r = on(r)),
    r.charAt(1) === "=" && (g = wr(p, r) + (Xe(p) || 0),
    (g || g === 0) && (r = g))),
    !c || p !== r || Ys)
        return !isNaN(p * r) && r !== "" ? (g = new pt(this._pt,e,t,+p || 0,r - (p || 0),typeof f == "boolean" ? Zu : ml,0,d),
        u && (g.fp = u),
        a && g.modifier(a, this, e),
        this._pt = g) : (!f && !(t in e) && go(t, r),
        Wu.call(this, e, t, p, r, d, l || Ct.stringFilter, u))
}, Yu = function(e, t, i, r, n) {
    if (ve(e) && (e = Ur(e, n, t, i, r)),
    !ni(e) || e.style && e.nodeType || je(e) || Ia(e))
        return ze(e) ? Ur(e, n, t, i, r) : e;
    var o = {}, a;
    for (a in e)
        o[a] = Ur(e[a], n, t, i, r);
    return o
}, dl = function(e, t, i, r, n, o) {
    var a, l, u, c;
    if (xt[e] && (a = new xt[e]).init(n, a.rawVars ? t[e] : Yu(t[e], r, n, o, i), i, r, o) !== !1 && (i._pt = l = new pt(i._pt,n,e,0,1,a.render,a,0,a.priority),
    i !== _r))
        for (u = i._ptLookup[i._targets.indexOf(n)],
        c = a._props.length; c--; )
            u[a._props[c]] = l;
    return a
}, Si, Ys, So = function s(e, t, i) {
    var r = e.vars, n = r.ease, o = r.startAt, a = r.immediateRender, l = r.lazy, u = r.onUpdate, c = r.onUpdateParams, f = r.callbackScope, p = r.runBackwards, d = r.yoyoEase, g = r.keyframes, h = r.autoRevert, v = e._dur, y = e._startAt, m = e._targets, _ = e.parent, w = _ && _.data === "nested" ? _.vars.targets : m, S = e._overwrite === "auto" && !fo, b = e.timeline, E, P, C, T, A, k, L, I, D, N, B, z, $;
    if (b && (!g || !n) && (n = "none"),
    e._ease = Zi(n, Cr.ease),
    e._yEase = d ? al(Zi(d === !0 ? n : d, Cr.ease)) : 0,
    d && e._yoyo && !e._repeat && (d = e._yEase,
    e._yEase = e._ease,
    e._ease = d),
    e._from = !b && !!r.runBackwards,
    !b || g && !r.stagger) {
        if (I = m[0] ? Ki(m[0]).harness : 0,
        z = I && r[I.prop],
        E = jn(r, _o),
        y && (y._zTime < 0 && y.progress(1),
        t < 0 && p && a && !h ? y.render(-1, !0) : y.revert(p && v ? zn : wu),
        y._lazy = 0),
        o) {
            if (ki(e._startAt = Ce.set(m, Ft({
                data: "isStart",
                overwrite: !1,
                parent: _,
                immediateRender: !0,
                lazy: !y && dt(l),
                startAt: null,
                delay: 0,
                onUpdate: u,
                onUpdateParams: c,
                callbackScope: f,
                stagger: 0
            }, o))),
            e._startAt._dp = 0,
            e._startAt._sat = e,
            t < 0 && (Ue || !a && !h) && e._startAt.revert(zn),
            a && v && t <= 0 && i <= 0) {
                t && (e._zTime = t);
                return
            }
        } else if (p && v && !y) {
            if (t && (a = !1),
            C = Ft({
                overwrite: !1,
                data: "isFromStart",
                lazy: a && !y && dt(l),
                immediateRender: a,
                stagger: 0,
                parent: _
            }, E),
            z && (C[I.prop] = z),
            ki(e._startAt = Ce.set(m, C)),
            e._startAt._dp = 0,
            e._startAt._sat = e,
            t < 0 && (Ue ? e._startAt.revert(zn) : e._startAt.render(-1, !0)),
            e._zTime = t,
            !a)
                s(e._startAt, se, se);
            else if (!t)
                return
        }
        for (e._pt = e._ptCache = 0,
        l = v && dt(l) || l && !v,
        P = 0; P < m.length; P++) {
            if (A = m[P],
            L = A._gsap || yo(m)[P]._gsap,
            e._ptLookup[P] = N = {},
            qs[L.id] && Pi.length && Un(),
            B = w === m ? P : w.indexOf(A),
            I && (D = new I).init(A, z || E, e, B, w) !== !1 && (e._pt = T = new pt(e._pt,A,D.name,0,1,D.render,D,0,D.priority),
            D._props.forEach(function(x) {
                N[x] = T
            }),
            D.priority && (k = 1)),
            !I || z)
                for (C in E)
                    xt[C] && (D = dl(C, E, e, B, A, w)) ? D.priority && (k = 1) : N[C] = T = wo.call(e, A, C, "get", E[C], B, w, 0, r.stringFilter);
            e._op && e._op[P] && e.kill(A, e._op[P]),
            S && e._pt && (Si = e,
            de.killTweensOf(A, N, e.globalTime(t)),
            $ = !e.parent,
            Si = 0),
            e._pt && l && (qs[L.id] = 1)
        }
        k && _l(e),
        e._onInit && e._onInit(e)
    }
    e._onUpdate = u,
    e._initted = (!e._op || e._pt) && !$,
    g && t <= 0 && b.render(It, !0, !0)
}, Xu = function(e, t, i, r, n, o, a) {
    var l = (e._pt && e._ptCache || (e._ptCache = {}))[t], u, c, f, p;
    if (!l)
        for (l = e._ptCache[t] = [],
        f = e._ptLookup,
        p = e._targets.length; p--; ) {
            if (u = f[p][t],
            u && u.d && u.d._pt)
                for (u = u.d._pt; u && u.p !== t && u.fp !== t; )
                    u = u._next;
            if (!u)
                return Ys = 1,
                e.vars[t] = "+=0",
                So(e, a),
                Ys = 0,
                1;
            l.push(u)
        }
    for (p = l.length; p--; )
        c = l[p],
        u = c._pt || c,
        u.s = (r || r === 0) && !n ? r : u.s + (r || 0) + o * u.c,
        u.c = i - u.s,
        c.e && (c.e = xe(i) + Xe(c.e)),
        c.b && (c.b = u.s + Xe(c.b))
}, Uu = function(e, t) {
    var i = e[0] ? Ki(e[0]).harness : 0, r = i && i.aliases, n, o, a, l;
    if (!r)
        return t;
    n = rr({}, t);
    for (o in r)
        if (o in n)
            for (l = r[o].split(","),
            a = l.length; a--; )
                n[l[a]] = n[o];
    return n
}, ju = function(e, t, i, r) {
    var n = t.ease || r || "power1.inOut", o, a;
    if (je(t))
        a = i[e] || (i[e] = []),
        t.forEach(function(l, u) {
            return a.push({
                t: u / (t.length - 1) * 100,
                v: l,
                e: n
            })
        });
    else
        for (o in t)
            a = i[o] || (i[o] = []),
            o === "ease" || a.push({
                t: parseFloat(e),
                v: t[o],
                e: n
            })
}, Ur = function(e, t, i, r, n) {
    return ve(e) ? e.call(t, i, r, n) : ze(e) && ~e.indexOf("random(") ? on(e) : e
}, fl = vo + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", pl = {};
ft(fl + ",id,stagger,delay,duration,paused,scrollTrigger", function(s) {
    return pl[s] = 1
});
var Ce = function(s) {
    Oa(e, s);
    function e(i, r, n, o) {
        var a;
        typeof r == "number" && (n.duration = r,
        r = n,
        n = null),
        a = s.call(this, o ? r : Yr(r)) || this;
        var l = a.vars, u = l.duration, c = l.delay, f = l.immediateRender, p = l.stagger, d = l.overwrite, g = l.keyframes, h = l.defaults, v = l.scrollTrigger, y = l.yoyoEase, m = r.parent || de, _ = (je(i) || Ia(i) ? mi(i[0]) : "length"in r) ? [i] : Dt(i), w, S, b, E, P, C, T, A;
        if (a._targets = _.length ? yo(_) : Xn("GSAP target " + i + " not found. https://greensock.com", !Ct.nullTargetWarn) || [],
        a._ptLookup = [],
        a._overwrite = d,
        g || p || _n(u) || _n(c)) {
            if (r = a.vars,
            w = a.timeline = new ct({
                data: "nested",
                defaults: h || {},
                targets: m && m.data === "nested" ? m.vars.targets : _
            }),
            w.kill(),
            w.parent = w._dp = li(a),
            w._start = 0,
            p || _n(u) || _n(c)) {
                if (E = _.length,
                T = p && Qa(p),
                ni(p))
                    for (P in p)
                        ~fl.indexOf(P) && (A || (A = {}),
                        A[P] = p[P]);
                for (S = 0; S < E; S++)
                    b = jn(r, pl),
                    b.stagger = 0,
                    y && (b.yoyoEase = y),
                    A && rr(b, A),
                    C = _[S],
                    b.duration = +Ur(u, li(a), S, C, _),
                    b.delay = (+Ur(c, li(a), S, C, _) || 0) - a._delay,
                    !p && E === 1 && b.delay && (a._delay = c = b.delay,
                    a._start += c,
                    b.delay = 0),
                    w.to(C, b, T ? T(S, C, _) : 0),
                    w._ease = K.none;
                w.duration() ? u = c = 0 : a.timeline = 0
            } else if (g) {
                Yr(Ft(w.vars.defaults, {
                    ease: "none"
                })),
                w._ease = Zi(g.ease || r.ease || "none");
                var k = 0, L, I, D;
                if (je(g))
                    g.forEach(function(N) {
                        return w.to(_, N, ">")
                    }),
                    w.duration();
                else {
                    b = {};
                    for (P in g)
                        P === "ease" || P === "easeEach" || ju(P, g[P], b, g.easeEach);
                    for (P in b)
                        for (L = b[P].sort(function(N, B) {
                            return N.t - B.t
                        }),
                        k = 0,
                        S = 0; S < L.length; S++)
                            I = L[S],
                            D = {
                                ease: I.e,
                                duration: (I.t - (S ? L[S - 1].t : 0)) / 100 * u
                            },
                            D[P] = I.v,
                            w.to(_, D, k),
                            k += D.duration;
                    w.duration() < u && w.to({}, {
                        duration: u - w.duration()
                    })
                }
            }
            u || a.duration(u = w.duration())
        } else
            a.timeline = 0;
        return d === !0 && !fo && (Si = li(a),
        de.killTweensOf(_),
        Si = 0),
        Jt(m, li(a), n),
        r.reversed && a.reverse(),
        r.paused && a.paused(!0),
        (f || !u && !g && a._start === $e(m._time) && dt(f) && Cu(li(a)) && m.data !== "nested") && (a._tTime = -se,
        a.render(Math.max(0, -c) || 0)),
        v && Xa(li(a), v),
        a
    }
    var t = e.prototype;
    return t.render = function(r, n, o) {
        var a = this._time, l = this._tDur, u = this._dur, c = r < 0, f = r > l - se && !c ? l : r < se ? 0 : r, p, d, g, h, v, y, m, _, w;
        if (!u)
            Mu(this, r, n, o);
        else if (f !== this._tTime || !r || o || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== c) {
            if (p = f,
            _ = this.timeline,
            this._repeat) {
                if (h = u + this._rDelay,
                this._repeat < -1 && c)
                    return this.totalTime(h * 100 + r, n, o);
                if (p = $e(f % h),
                f === l ? (g = this._repeat,
                p = u) : (g = ~~(f / h),
                g && g === f / h && (p = u,
                g--),
                p > u && (p = u)),
                y = this._yoyo && g & 1,
                y && (w = this._yEase,
                p = u - p),
                v = Pr(this._tTime, h),
                p === a && !o && this._initted)
                    return this._tTime = f,
                    this;
                g !== v && (_ && this._yEase && ll(_, y),
                this.vars.repeatRefresh && !y && !this._lock && (this._lock = o = 1,
                this.render($e(h * g), !0).invalidate()._lock = 0))
            }
            if (!this._initted) {
                if (Ua(this, c ? r : p, o, n, f))
                    return this._tTime = 0,
                    this;
                if (a !== this._time)
                    return this;
                if (u !== this._dur)
                    return this.render(r, n, o)
            }
            if (this._tTime = f,
            this._time = p,
            !this._act && this._ts && (this._act = 1,
            this._lazy = 0),
            this.ratio = m = (w || this._ease)(p / u),
            this._from && (this.ratio = m = 1 - m),
            p && !a && !n && !g && (zt(this, "onStart"),
            this._tTime !== f))
                return this;
            for (d = this._pt; d; )
                d.r(m, d.d),
                d = d._next;
            _ && _.render(r < 0 ? r : !p && y ? -se : _._dur * _._ease(p / this._dur), n, o) || this._startAt && (this._zTime = r),
            this._onUpdate && !n && (c && Vs(this, r, n, o),
            zt(this, "onUpdate")),
            this._repeat && g !== v && this.vars.onRepeat && !n && this.parent && zt(this, "onRepeat"),
            (f === this._tDur || !f) && this._tTime === f && (c && !this._onUpdate && Vs(this, r, !0, !0),
            (r || !u) && (f === this._tDur && this._ts > 0 || !f && this._ts < 0) && ki(this, 1),
            !n && !(c && !a) && (f || a || y) && (zt(this, f === l ? "onComplete" : "onReverseComplete", !0),
            this._prom && !(f < l && this.timeScale() > 0) && this._prom()))
        }
        return this
    }
    ,
    t.targets = function() {
        return this._targets
    }
    ,
    t.invalidate = function(r) {
        return (!r || !this.vars.runBackwards) && (this._startAt = 0),
        this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0,
        this._ptLookup = [],
        this.timeline && this.timeline.invalidate(r),
        s.prototype.invalidate.call(this, r)
    }
    ,
    t.resetTo = function(r, n, o, a) {
        an || bt.wake(),
        this._ts || this.play();
        var l = Math.min(this._dur, (this._dp._time - this._start) * this._ts), u;
        return this._initted || So(this, l),
        u = this._ease(l / this._dur),
        Xu(this, r, n, o, a, u, l) ? this.resetTo(r, n, o, a) : (fs(this, 0),
        this.parent || Wa(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0),
        this.render(0))
    }
    ,
    t.kill = function(r, n) {
        if (n === void 0 && (n = "all"),
        !r && (!n || n === "all"))
            return this._lazy = this._pt = 0,
            this.parent ? Vr(this) : this;
        if (this.timeline) {
            var o = this.timeline.totalDuration();
            return this.timeline.killTweensOf(r, n, Si && Si.vars.overwrite !== !0)._first || Vr(this),
            this.parent && o !== this.timeline.totalDuration() && Mr(this, this._dur * this.timeline._tDur / o, 0, 1),
            this
        }
        var a = this._targets, l = r ? Dt(r) : a, u = this._ptLookup, c = this._pt, f, p, d, g, h, v, y;
        if ((!n || n === "all") && bu(a, l))
            return n === "all" && (this._pt = 0),
            Vr(this);
        for (f = this._op = this._op || [],
        n !== "all" && (ze(n) && (h = {},
        ft(n, function(m) {
            return h[m] = 1
        }),
        n = h),
        n = Uu(a, n)),
        y = a.length; y--; )
            if (~l.indexOf(a[y])) {
                p = u[y],
                n === "all" ? (f[y] = n,
                g = p,
                d = {}) : (d = f[y] = f[y] || {},
                g = n);
                for (h in g)
                    v = p && p[h],
                    v && ((!("kill"in v.d) || v.d.kill(h) === !0) && cs(this, v, "_pt"),
                    delete p[h]),
                    d !== "all" && (d[h] = 1)
            }
        return this._initted && !this._pt && c && Vr(this),
        this
    }
    ,
    e.to = function(r, n) {
        return new e(r,n,arguments[2])
    }
    ,
    e.from = function(r, n) {
        return Xr(1, arguments)
    }
    ,
    e.delayedCall = function(r, n, o, a) {
        return new e(n,0,{
            immediateRender: !1,
            lazy: !1,
            overwrite: !1,
            delay: r,
            onComplete: n,
            onReverseComplete: n,
            onCompleteParams: o,
            onReverseCompleteParams: o,
            callbackScope: a
        })
    }
    ,
    e.fromTo = function(r, n, o) {
        return Xr(2, arguments)
    }
    ,
    e.set = function(r, n) {
        return n.duration = 0,
        n.repeatDelay || (n.repeat = 0),
        new e(r,n)
    }
    ,
    e.killTweensOf = function(r, n, o) {
        return de.killTweensOf(r, n, o)
    }
    ,
    e
}(ln);
Ft(Ce.prototype, {
    _targets: [],
    _lazy: 0,
    _startAt: 0,
    _op: 0,
    _onInit: 0
});
ft("staggerTo,staggerFrom,staggerFromTo", function(s) {
    Ce[s] = function() {
        var e = new ct
          , t = Gs.call(arguments, 0);
        return t.splice(s === "staggerFromTo" ? 5 : 4, 0, 0),
        e[s].apply(e, t)
    }
});
var xo = function(e, t, i) {
    return e[t] = i
}
  , hl = function(e, t, i) {
    return e[t](i)
}
  , Ku = function(e, t, i, r) {
    return e[t](r.fp, i)
}
  , Qu = function(e, t, i) {
    return e.setAttribute(t, i)
}
  , To = function(e, t) {
    return ve(e[t]) ? hl : po(e[t]) && e.setAttribute ? Qu : xo
}
  , ml = function(e, t) {
    return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e6) / 1e6, t)
}
  , Zu = function(e, t) {
    return t.set(t.t, t.p, !!(t.s + t.c * e), t)
}
  , gl = function(e, t) {
    var i = t._pt
      , r = "";
    if (!e && t.b)
        r = t.b;
    else if (e === 1 && t.e)
        r = t.e;
    else {
        for (; i; )
            r = i.p + (i.m ? i.m(i.s + i.c * e) : Math.round((i.s + i.c * e) * 1e4) / 1e4) + r,
            i = i._next;
        r += t.c
    }
    t.set(t.t, t.p, r, t)
}
  , bo = function(e, t) {
    for (var i = t._pt; i; )
        i.r(e, i.d),
        i = i._next
}
  , Ju = function(e, t, i, r) {
    for (var n = this._pt, o; n; )
        o = n._next,
        n.p === r && n.modifier(e, t, i),
        n = o
}
  , ec = function(e) {
    for (var t = this._pt, i, r; t; )
        r = t._next,
        t.p === e && !t.op || t.op === e ? cs(this, t, "_pt") : t.dep || (i = 1),
        t = r;
    return !i
}
  , tc = function(e, t, i, r) {
    r.mSet(e, t, r.m.call(r.tween, i, r.mt), r)
}
  , _l = function(e) {
    for (var t = e._pt, i, r, n, o; t; ) {
        for (i = t._next,
        r = n; r && r.pr > t.pr; )
            r = r._next;
        (t._prev = r ? r._prev : o) ? t._prev._next = t : n = t,
        (t._next = r) ? r._prev = t : o = t,
        t = i
    }
    e._pt = n
}
  , pt = function() {
    function s(t, i, r, n, o, a, l, u, c) {
        this.t = i,
        this.s = n,
        this.c = o,
        this.p = r,
        this.r = a || ml,
        this.d = l || this,
        this.set = u || xo,
        this.pr = c || 0,
        this._next = t,
        t && (t._prev = this)
    }
    var e = s.prototype;
    return e.modifier = function(i, r, n) {
        this.mSet = this.mSet || this.set,
        this.set = tc,
        this.m = i,
        this.mt = n,
        this.tween = r
    }
    ,
    s
}();
ft(vo + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(s) {
    return _o[s] = 1
});
Pt.TweenMax = Pt.TweenLite = Ce;
Pt.TimelineLite = Pt.TimelineMax = ct;
de = new ct({
    sortChildren: !1,
    defaults: Cr,
    autoRemoveChildren: !0,
    id: "root",
    smoothChildTiming: !0
});
Ct.stringFilter = ol;
var Ji = []
  , Fn = {}
  , ic = []
  , Yo = 0
  , rc = 0
  , ws = function(e) {
    return (Fn[e] || ic).map(function(t) {
        return t()
    })
}
  , Xs = function() {
    var e = Date.now()
      , t = [];
    e - Yo > 2 && (ws("matchMediaInit"),
    Ji.forEach(function(i) {
        var r = i.queries, n = i.conditions, o, a, l, u;
        for (a in r)
            o = kt.matchMedia(r[a]).matches,
            o && (l = 1),
            o !== n[a] && (n[a] = o,
            u = 1);
        u && (i.revert(),
        l && t.push(i))
    }),
    ws("matchMediaRevert"),
    t.forEach(function(i) {
        return i.onMatch(i)
    }),
    Yo = e,
    ws("matchMedia"))
}
  , vl = function() {
    function s(t, i) {
        this.selector = i && Hs(i),
        this.data = [],
        this._r = [],
        this.isReverted = !1,
        this.id = rc++,
        t && this.add(t)
    }
    var e = s.prototype;
    return e.add = function(i, r, n) {
        ve(i) && (n = r,
        r = i,
        i = ve);
        var o = this
          , a = function() {
            var u = _e, c = o.selector, f;
            return u && u !== o && u.data.push(o),
            n && (o.selector = Hs(n)),
            _e = o,
            f = r.apply(o, arguments),
            ve(f) && o._r.push(f),
            _e = u,
            o.selector = c,
            o.isReverted = !1,
            f
        };
        return o.last = a,
        i === ve ? a(o) : i ? o[i] = a : a
    }
    ,
    e.ignore = function(i) {
        var r = _e;
        _e = null,
        i(this),
        _e = r
    }
    ,
    e.getTweens = function() {
        var i = [];
        return this.data.forEach(function(r) {
            return r instanceof s ? i.push.apply(i, r.getTweens()) : r instanceof Ce && !(r.parent && r.parent.data === "nested") && i.push(r)
        }),
        i
    }
    ,
    e.clear = function() {
        this._r.length = this.data.length = 0
    }
    ,
    e.kill = function(i, r) {
        var n = this;
        if (i) {
            var o = this.getTweens();
            this.data.forEach(function(l) {
                l.data === "isFlip" && (l.revert(),
                l.getChildren(!0, !0, !1).forEach(function(u) {
                    return o.splice(o.indexOf(u), 1)
                }))
            }),
            o.map(function(l) {
                return {
                    g: l.globalTime(0),
                    t: l
                }
            }).sort(function(l, u) {
                return u.g - l.g || -1 / 0
            }).forEach(function(l) {
                return l.t.revert(i)
            }),
            this.data.forEach(function(l) {
                return !(l instanceof Ce) && l.revert && l.revert(i)
            }),
            this._r.forEach(function(l) {
                return l(i, n)
            }),
            this.isReverted = !0
        } else
            this.data.forEach(function(l) {
                return l.kill && l.kill()
            });
        if (this.clear(),
        r)
            for (var a = Ji.length; a--; )
                Ji[a].id === this.id && Ji.splice(a, 1)
    }
    ,
    e.revert = function(i) {
        this.kill(i || {})
    }
    ,
    s
}()
  , nc = function() {
    function s(t) {
        this.contexts = [],
        this.scope = t
    }
    var e = s.prototype;
    return e.add = function(i, r, n) {
        ni(i) || (i = {
            matches: i
        });
        var o = new vl(0,n || this.scope), a = o.conditions = {}, l, u, c;
        _e && !o.selector && (o.selector = _e.selector),
        this.contexts.push(o),
        r = o.add("onMatch", r),
        o.queries = i;
        for (u in i)
            u === "all" ? c = 1 : (l = kt.matchMedia(i[u]),
            l && (Ji.indexOf(o) < 0 && Ji.push(o),
            (a[u] = l.matches) && (c = 1),
            l.addListener ? l.addListener(Xs) : l.addEventListener("change", Xs)));
        return c && r(o),
        this
    }
    ,
    e.revert = function(i) {
        this.kill(i || {})
    }
    ,
    e.kill = function(i) {
        this.contexts.forEach(function(r) {
            return r.kill(i, !0)
        })
    }
    ,
    s
}()
  , Qn = {
    registerPlugin: function() {
        for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
            t[i] = arguments[i];
        t.forEach(function(r) {
            return rl(r)
        })
    },
    timeline: function(e) {
        return new ct(e)
    },
    getTweensOf: function(e, t) {
        return de.getTweensOf(e, t)
    },
    getProperty: function(e, t, i, r) {
        ze(e) && (e = Dt(e)[0]);
        var n = Ki(e || {}).get
          , o = i ? Ha : Ga;
        return i === "native" && (i = ""),
        e && (t ? o((xt[t] && xt[t].get || n)(e, t, i, r)) : function(a, l, u) {
            return o((xt[a] && xt[a].get || n)(e, a, l, u))
        }
        )
    },
    quickSetter: function(e, t, i) {
        if (e = Dt(e),
        e.length > 1) {
            var r = e.map(function(c) {
                return ht.quickSetter(c, t, i)
            })
              , n = r.length;
            return function(c) {
                for (var f = n; f--; )
                    r[f](c)
            }
        }
        e = e[0] || {};
        var o = xt[t]
          , a = Ki(e)
          , l = a.harness && (a.harness.aliases || {})[t] || t
          , u = o ? function(c) {
            var f = new o;
            _r._pt = 0,
            f.init(e, i ? c + i : c, _r, 0, [e]),
            f.render(1, f),
            _r._pt && bo(1, _r)
        }
        : a.set(e, l);
        return o ? u : function(c) {
            return u(e, l, i ? c + i : c, a, 1)
        }
    },
    quickTo: function(e, t, i) {
        var r, n = ht.to(e, rr((r = {},
        r[t] = "+=0.1",
        r.paused = !0,
        r), i || {})), o = function(l, u, c) {
            return n.resetTo(t, l, u, c)
        };
        return o.tween = n,
        o
    },
    isTweening: function(e) {
        return de.getTweensOf(e, !0).length > 0
    },
    defaults: function(e) {
        return e && e.ease && (e.ease = Zi(e.ease, Cr.ease)),
        Vo(Cr, e || {})
    },
    config: function(e) {
        return Vo(Ct, e || {})
    },
    registerEffect: function(e) {
        var t = e.name
          , i = e.effect
          , r = e.plugins
          , n = e.defaults
          , o = e.extendTimeline;
        (r || "").split(",").forEach(function(a) {
            return a && !xt[a] && !Pt[a] && Xn(t + " effect requires " + a + " plugin.")
        }),
        gs[t] = function(a, l, u) {
            return i(Dt(a), Ft(l || {}, n), u)
        }
        ,
        o && (ct.prototype[t] = function(a, l, u) {
            return this.add(gs[t](a, ni(l) ? l : (u = l) && {}, this), u)
        }
        )
    },
    registerEase: function(e, t) {
        K[e] = Zi(t)
    },
    parseEase: function(e, t) {
        return arguments.length ? Zi(e, t) : K
    },
    getById: function(e) {
        return de.getById(e)
    },
    exportRoot: function(e, t) {
        e === void 0 && (e = {});
        var i = new ct(e), r, n;
        for (i.smoothChildTiming = dt(e.smoothChildTiming),
        de.remove(i),
        i._dp = 0,
        i._time = i._tTime = de._time,
        r = de._first; r; )
            n = r._next,
            (t || !(!r._dur && r instanceof Ce && r.vars.onComplete === r._targets[0])) && Jt(i, r, r._start - r._delay),
            r = n;
        return Jt(de, i, 0),
        i
    },
    context: function(e, t) {
        return e ? new vl(e,t) : _e
    },
    matchMedia: function(e) {
        return new nc(e)
    },
    matchMediaRefresh: function() {
        return Ji.forEach(function(e) {
            var t = e.conditions, i, r;
            for (r in t)
                t[r] && (t[r] = !1,
                i = 1);
            i && e.revert()
        }) || Xs()
    },
    addEventListener: function(e, t) {
        var i = Fn[e] || (Fn[e] = []);
        ~i.indexOf(t) || i.push(t)
    },
    removeEventListener: function(e, t) {
        var i = Fn[e]
          , r = i && i.indexOf(t);
        r >= 0 && i.splice(r, 1)
    },
    utils: {
        wrap: Ru,
        wrapYoyo: Fu,
        distribute: Qa,
        random: Ja,
        snap: Za,
        normalize: zu,
        getUnit: Xe,
        clamp: Ou,
        splitColor: nl,
        toArray: Dt,
        selector: Hs,
        mapRange: tl,
        pipe: Iu,
        unitize: Du,
        interpolate: Nu,
        shuffle: Ka
    },
    install: Na,
    effects: gs,
    ticker: bt,
    updateRoot: ct.updateRoot,
    plugins: xt,
    globalTimeline: de,
    core: {
        PropTween: pt,
        globals: Ba,
        Tween: Ce,
        Timeline: ct,
        Animation: ln,
        getCache: Ki,
        _removeLinkedListItem: cs,
        reverting: function() {
            return Ue
        },
        context: function(e) {
            return e && _e && (_e.data.push(e),
            e._ctx = _e),
            _e
        },
        suppressOverwrites: function(e) {
            return fo = e
        }
    }
};
ft("to,from,fromTo,delayedCall,set,killTweensOf", function(s) {
    return Qn[s] = Ce[s]
});
bt.add(ct.updateRoot);
_r = Qn.to({}, {
    duration: 0
});
var sc = function(e, t) {
    for (var i = e._pt; i && i.p !== t && i.op !== t && i.fp !== t; )
        i = i._next;
    return i
}
  , oc = function(e, t) {
    var i = e._targets, r, n, o;
    for (r in t)
        for (n = i.length; n--; )
            o = e._ptLookup[n][r],
            o && (o = o.d) && (o._pt && (o = sc(o, r)),
            o && o.modifier && o.modifier(t[r], e, i[n], r))
}
  , Ss = function(e, t) {
    return {
        name: e,
        rawVars: 1,
        init: function(r, n, o) {
            o._onInit = function(a) {
                var l, u;
                if (ze(n) && (l = {},
                ft(n, function(c) {
                    return l[c] = 1
                }),
                n = l),
                t) {
                    l = {};
                    for (u in n)
                        l[u] = t(n[u]);
                    n = l
                }
                oc(a, n)
            }
        }
    }
}
  , ht = Qn.registerPlugin({
    name: "attr",
    init: function(e, t, i, r, n) {
        var o, a, l;
        this.tween = i;
        for (o in t)
            l = e.getAttribute(o) || "",
            a = this.add(e, "setAttribute", (l || 0) + "", t[o], r, n, 0, 0, o),
            a.op = o,
            a.b = l,
            this._props.push(o)
    },
    render: function(e, t) {
        for (var i = t._pt; i; )
            Ue ? i.set(i.t, i.p, i.b, i) : i.r(e, i.d),
            i = i._next
    }
}, {
    name: "endArray",
    init: function(e, t) {
        for (var i = t.length; i--; )
            this.add(e, i, e[i] || 0, t[i], 0, 0, 0, 0, 0, 1)
    }
}, Ss("roundProps", Ws), Ss("modifiers"), Ss("snap", Za)) || Qn;
Ce.version = ct.version = ht.version = "3.12.2";
Fa = 1;
ho() && Ar();
var ac = K.Power0;
K.Power1;
var Ae = K.Power2;
K.Power3;
var Xo = K.Power4
  , Eo = K.Linear;
K.Quad;
K.Cubic;
K.Quart;
K.Quint;
K.Strong;
K.Elastic;
K.Back;
K.SteppedEase;
K.Bounce;
K.Sine;
K.Expo;
K.Circ;
/*!
 * CSSPlugin 3.12.2
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var Uo, xi, Sr, Co, Ui, jo, Po, lc = function() {
    return typeof window < "u"
}, gi = {}, Wi = 180 / Math.PI, xr = Math.PI / 180, dr = Math.atan2, Ko = 1e8, Mo = /([A-Z])/g, uc = /(left|right|width|margin|padding|x)/i, cc = /[\s,\(]\S/, ei = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity"
}, Us = function(e, t) {
    return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t)
}, dc = function(e, t) {
    return t.set(t.t, t.p, e === 1 ? t.e : Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t)
}, fc = function(e, t) {
    return t.set(t.t, t.p, e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b, t)
}, pc = function(e, t) {
    var i = t.s + t.c * e;
    t.set(t.t, t.p, ~~(i + (i < 0 ? -.5 : .5)) + t.u, t)
}, yl = function(e, t) {
    return t.set(t.t, t.p, e ? t.e : t.b, t)
}, wl = function(e, t) {
    return t.set(t.t, t.p, e !== 1 ? t.b : t.e, t)
}, hc = function(e, t, i) {
    return e.style[t] = i
}, mc = function(e, t, i) {
    return e.style.setProperty(t, i)
}, gc = function(e, t, i) {
    return e._gsap[t] = i
}, _c = function(e, t, i) {
    return e._gsap.scaleX = e._gsap.scaleY = i
}, vc = function(e, t, i, r, n) {
    var o = e._gsap;
    o.scaleX = o.scaleY = i,
    o.renderTransform(n, o)
}, yc = function(e, t, i, r, n) {
    var o = e._gsap;
    o[t] = i,
    o.renderTransform(n, o)
}, fe = "transform", Yt = fe + "Origin", wc = function s(e, t) {
    var i = this
      , r = this.target
      , n = r.style;
    if (e in gi && n) {
        if (this.tfm = this.tfm || {},
        e !== "transform")
            e = ei[e] || e,
            ~e.indexOf(",") ? e.split(",").forEach(function(o) {
                return i.tfm[o] = ui(r, o)
            }) : this.tfm[e] = r._gsap.x ? r._gsap[e] : ui(r, e);
        else
            return ei.transform.split(",").forEach(function(o) {
                return s.call(i, o, t)
            });
        if (this.props.indexOf(fe) >= 0)
            return;
        r._gsap.svg && (this.svgo = r.getAttribute("data-svg-origin"),
        this.props.push(Yt, t, "")),
        e = fe
    }
    (n || t) && this.props.push(e, t, n[e])
}, Sl = function(e) {
    e.translate && (e.removeProperty("translate"),
    e.removeProperty("scale"),
    e.removeProperty("rotate"))
}, Sc = function() {
    var e = this.props, t = this.target, i = t.style, r = t._gsap, n, o;
    for (n = 0; n < e.length; n += 3)
        e[n + 1] ? t[e[n]] = e[n + 2] : e[n + 2] ? i[e[n]] = e[n + 2] : i.removeProperty(e[n].substr(0, 2) === "--" ? e[n] : e[n].replace(Mo, "-$1").toLowerCase());
    if (this.tfm) {
        for (o in this.tfm)
            r[o] = this.tfm[o];
        r.svg && (r.renderTransform(),
        t.setAttribute("data-svg-origin", this.svgo || "")),
        n = Po(),
        (!n || !n.isStart) && !i[fe] && (Sl(i),
        r.uncache = 1)
    }
}, xl = function(e, t) {
    var i = {
        target: e,
        props: [],
        revert: Sc,
        save: wc
    };
    return e._gsap || ht.core.getCache(e),
    t && t.split(",").forEach(function(r) {
        return i.save(r)
    }),
    i
}, Tl, js = function(e, t) {
    var i = xi.createElementNS ? xi.createElementNS((t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : xi.createElement(e);
    return i.style ? i : xi.createElement(e)
}, ii = function s(e, t, i) {
    var r = getComputedStyle(e);
    return r[t] || r.getPropertyValue(t.replace(Mo, "-$1").toLowerCase()) || r.getPropertyValue(t) || !i && s(e, kr(t) || t, 1) || ""
}, Qo = "O,Moz,ms,Ms,Webkit".split(","), kr = function(e, t, i) {
    var r = t || Ui
      , n = r.style
      , o = 5;
    if (e in n && !i)
        return e;
    for (e = e.charAt(0).toUpperCase() + e.substr(1); o-- && !(Qo[o] + e in n); )
        ;
    return o < 0 ? null : (o === 3 ? "ms" : o >= 0 ? Qo[o] : "") + e
}, Ks = function() {
    lc() && window.document && (Uo = window,
    xi = Uo.document,
    Sr = xi.documentElement,
    Ui = js("div") || {
        style: {}
    },
    js("div"),
    fe = kr(fe),
    Yt = fe + "Origin",
    Ui.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0",
    Tl = !!kr("perspective"),
    Po = ht.core.reverting,
    Co = 1)
}, xs = function s(e) {
    var t = js("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), i = this.parentNode, r = this.nextSibling, n = this.style.cssText, o;
    if (Sr.appendChild(t),
    t.appendChild(this),
    this.style.display = "block",
    e)
        try {
            o = this.getBBox(),
            this._gsapBBox = this.getBBox,
            this.getBBox = s
        } catch {}
    else
        this._gsapBBox && (o = this._gsapBBox());
    return i && (r ? i.insertBefore(this, r) : i.appendChild(this)),
    Sr.removeChild(t),
    this.style.cssText = n,
    o
}, Zo = function(e, t) {
    for (var i = t.length; i--; )
        if (e.hasAttribute(t[i]))
            return e.getAttribute(t[i])
}, bl = function(e) {
    var t;
    try {
        t = e.getBBox()
    } catch {
        t = xs.call(e, !0)
    }
    return t && (t.width || t.height) || e.getBBox === xs || (t = xs.call(e, !0)),
    t && !t.width && !t.x && !t.y ? {
        x: +Zo(e, ["x", "cx", "x1"]) || 0,
        y: +Zo(e, ["y", "cy", "y1"]) || 0,
        width: 0,
        height: 0
    } : t
}, El = function(e) {
    return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && bl(e))
}, un = function(e, t) {
    if (t) {
        var i = e.style;
        t in gi && t !== Yt && (t = fe),
        i.removeProperty ? ((t.substr(0, 2) === "ms" || t.substr(0, 6) === "webkit") && (t = "-" + t),
        i.removeProperty(t.replace(Mo, "-$1").toLowerCase())) : i.removeAttribute(t)
    }
}, Ti = function(e, t, i, r, n, o) {
    var a = new pt(e._pt,t,i,0,1,o ? wl : yl);
    return e._pt = a,
    a.b = r,
    a.e = n,
    e._props.push(i),
    a
}, Jo = {
    deg: 1,
    rad: 1,
    turn: 1
}, xc = {
    grid: 1,
    flex: 1
}, Oi = function s(e, t, i, r) {
    var n = parseFloat(i) || 0, o = (i + "").trim().substr((n + "").length) || "px", a = Ui.style, l = uc.test(t), u = e.tagName.toLowerCase() === "svg", c = (u ? "client" : "offset") + (l ? "Width" : "Height"), f = 100, p = r === "px", d = r === "%", g, h, v, y;
    return r === o || !n || Jo[r] || Jo[o] ? n : (o !== "px" && !p && (n = s(e, t, i, "px")),
    y = e.getCTM && El(e),
    (d || o === "%") && (gi[t] || ~t.indexOf("adius")) ? (g = y ? e.getBBox()[l ? "width" : "height"] : e[c],
    xe(d ? n / g * f : n / 100 * g)) : (a[l ? "width" : "height"] = f + (p ? o : r),
    h = ~t.indexOf("adius") || r === "em" && e.appendChild && !u ? e : e.parentNode,
    y && (h = (e.ownerSVGElement || {}).parentNode),
    (!h || h === xi || !h.appendChild) && (h = xi.body),
    v = h._gsap,
    v && d && v.width && l && v.time === bt.time && !v.uncache ? xe(n / v.width * f) : ((d || o === "%") && !xc[ii(h, "display")] && (a.position = ii(e, "position")),
    h === e && (a.position = "static"),
    h.appendChild(Ui),
    g = Ui[c],
    h.removeChild(Ui),
    a.position = "absolute",
    l && d && (v = Ki(h),
    v.time = bt.time,
    v.width = h[c]),
    xe(p ? g * n / f : g && n ? f / g * n : 0))))
}, ui = function(e, t, i, r) {
    var n;
    return Co || Ks(),
    t in ei && t !== "transform" && (t = ei[t],
    ~t.indexOf(",") && (t = t.split(",")[0])),
    gi[t] && t !== "transform" ? (n = dn(e, r),
    n = t !== "transformOrigin" ? n[t] : n.svg ? n.origin : Jn(ii(e, Yt)) + " " + n.zOrigin + "px") : (n = e.style[t],
    (!n || n === "auto" || r || ~(n + "").indexOf("calc(")) && (n = Zn[t] && Zn[t](e, t, i) || ii(e, t) || Va(e, t) || (t === "opacity" ? 1 : 0))),
    i && !~(n + "").trim().indexOf(" ") ? Oi(e, t, n, i) + i : n
}, Tc = function(e, t, i, r) {
    if (!i || i === "none") {
        var n = kr(t, e, 1)
          , o = n && ii(e, n, 1);
        o && o !== i ? (t = n,
        i = o) : t === "borderColor" && (i = ii(e, "borderTopColor"))
    }
    var a = new pt(this._pt,e.style,t,0,1,gl), l = 0, u = 0, c, f, p, d, g, h, v, y, m, _, w, S;
    if (a.b = i,
    a.e = r,
    i += "",
    r += "",
    r === "auto" && (e.style[t] = r,
    r = ii(e, t) || r,
    e.style[t] = i),
    c = [i, r],
    ol(c),
    i = c[0],
    r = c[1],
    p = i.match(gr) || [],
    S = r.match(gr) || [],
    S.length) {
        for (; f = gr.exec(r); )
            v = f[0],
            m = r.substring(l, f.index),
            g ? g = (g + 1) % 5 : (m.substr(-5) === "rgba(" || m.substr(-5) === "hsla(") && (g = 1),
            v !== (h = p[u++] || "") && (d = parseFloat(h) || 0,
            w = h.substr((d + "").length),
            v.charAt(1) === "=" && (v = wr(d, v) + w),
            y = parseFloat(v),
            _ = v.substr((y + "").length),
            l = gr.lastIndex - _.length,
            _ || (_ = _ || Ct.units[t] || w,
            l === r.length && (r += _,
            a.e += _)),
            w !== _ && (d = Oi(e, t, h, _) || 0),
            a._pt = {
                _next: a._pt,
                p: m || u === 1 ? m : ",",
                s: d,
                c: y - d,
                m: g && g < 4 || t === "zIndex" ? Math.round : 0
            });
        a.c = l < r.length ? r.substring(l, r.length) : ""
    } else
        a.r = t === "display" && r === "none" ? wl : yl;
    return za.test(r) && (a.e = 0),
    this._pt = a,
    a
}, ea = {
    top: "0%",
    bottom: "100%",
    left: "0%",
    right: "100%",
    center: "50%"
}, bc = function(e) {
    var t = e.split(" ")
      , i = t[0]
      , r = t[1] || "50%";
    return (i === "top" || i === "bottom" || r === "left" || r === "right") && (e = i,
    i = r,
    r = e),
    t[0] = ea[i] || i,
    t[1] = ea[r] || r,
    t.join(" ")
}, Ec = function(e, t) {
    if (t.tween && t.tween._time === t.tween._dur) {
        var i = t.t, r = i.style, n = t.u, o = i._gsap, a, l, u;
        if (n === "all" || n === !0)
            r.cssText = "",
            l = 1;
        else
            for (n = n.split(","),
            u = n.length; --u > -1; )
                a = n[u],
                gi[a] && (l = 1,
                a = a === "transformOrigin" ? Yt : fe),
                un(i, a);
        l && (un(i, fe),
        o && (o.svg && i.removeAttribute("transform"),
        dn(i, 1),
        o.uncache = 1,
        Sl(r)))
    }
}, Zn = {
    clearProps: function(e, t, i, r, n) {
        if (n.data !== "isFromStart") {
            var o = e._pt = new pt(e._pt,t,i,0,0,Ec);
            return o.u = r,
            o.pr = -10,
            o.tween = n,
            e._props.push(i),
            1
        }
    }
}, cn = [1, 0, 0, 1, 0, 0], Cl = {}, Pl = function(e) {
    return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e
}, ta = function(e) {
    var t = ii(e, fe);
    return Pl(t) ? cn : t.substr(7).match(Da).map(xe)
}, Ao = function(e, t) {
    var i = e._gsap || Ki(e), r = e.style, n = ta(e), o, a, l, u;
    return i.svg && e.getAttribute("transform") ? (l = e.transform.baseVal.consolidate().matrix,
    n = [l.a, l.b, l.c, l.d, l.e, l.f],
    n.join(",") === "1,0,0,1,0,0" ? cn : n) : (n === cn && !e.offsetParent && e !== Sr && !i.svg && (l = r.display,
    r.display = "block",
    o = e.parentNode,
    (!o || !e.offsetParent) && (u = 1,
    a = e.nextElementSibling,
    Sr.appendChild(e)),
    n = ta(e),
    l ? r.display = l : un(e, "display"),
    u && (a ? o.insertBefore(e, a) : o ? o.appendChild(e) : Sr.removeChild(e))),
    t && n.length > 6 ? [n[0], n[1], n[4], n[5], n[12], n[13]] : n)
}, Qs = function(e, t, i, r, n, o) {
    var a = e._gsap, l = n || Ao(e, !0), u = a.xOrigin || 0, c = a.yOrigin || 0, f = a.xOffset || 0, p = a.yOffset || 0, d = l[0], g = l[1], h = l[2], v = l[3], y = l[4], m = l[5], _ = t.split(" "), w = parseFloat(_[0]) || 0, S = parseFloat(_[1]) || 0, b, E, P, C;
    i ? l !== cn && (E = d * v - g * h) && (P = w * (v / E) + S * (-h / E) + (h * m - v * y) / E,
    C = w * (-g / E) + S * (d / E) - (d * m - g * y) / E,
    w = P,
    S = C) : (b = bl(e),
    w = b.x + (~_[0].indexOf("%") ? w / 100 * b.width : w),
    S = b.y + (~(_[1] || _[0]).indexOf("%") ? S / 100 * b.height : S)),
    r || r !== !1 && a.smooth ? (y = w - u,
    m = S - c,
    a.xOffset = f + (y * d + m * h) - y,
    a.yOffset = p + (y * g + m * v) - m) : a.xOffset = a.yOffset = 0,
    a.xOrigin = w,
    a.yOrigin = S,
    a.smooth = !!r,
    a.origin = t,
    a.originIsAbsolute = !!i,
    e.style[Yt] = "0px 0px",
    o && (Ti(o, a, "xOrigin", u, w),
    Ti(o, a, "yOrigin", c, S),
    Ti(o, a, "xOffset", f, a.xOffset),
    Ti(o, a, "yOffset", p, a.yOffset)),
    e.setAttribute("data-svg-origin", w + " " + S)
}, dn = function(e, t) {
    var i = e._gsap || new cl(e);
    if ("x"in i && !t && !i.uncache)
        return i;
    var r = e.style, n = i.scaleX < 0, o = "px", a = "deg", l = getComputedStyle(e), u = ii(e, Yt) || "0", c, f, p, d, g, h, v, y, m, _, w, S, b, E, P, C, T, A, k, L, I, D, N, B, z, $, x, G, ae, ye, ie, pe;
    return c = f = p = h = v = y = m = _ = w = 0,
    d = g = 1,
    i.svg = !!(e.getCTM && El(e)),
    l.translate && ((l.translate !== "none" || l.scale !== "none" || l.rotate !== "none") && (r[fe] = (l.translate !== "none" ? "translate3d(" + (l.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (l.rotate !== "none" ? "rotate(" + l.rotate + ") " : "") + (l.scale !== "none" ? "scale(" + l.scale.split(" ").join(",") + ") " : "") + (l[fe] !== "none" ? l[fe] : "")),
    r.scale = r.rotate = r.translate = "none"),
    E = Ao(e, i.svg),
    i.svg && (i.uncache ? (z = e.getBBox(),
    u = i.xOrigin - z.x + "px " + (i.yOrigin - z.y) + "px",
    B = "") : B = !t && e.getAttribute("data-svg-origin"),
    Qs(e, B || u, !!B || i.originIsAbsolute, i.smooth !== !1, E)),
    S = i.xOrigin || 0,
    b = i.yOrigin || 0,
    E !== cn && (A = E[0],
    k = E[1],
    L = E[2],
    I = E[3],
    c = D = E[4],
    f = N = E[5],
    E.length === 6 ? (d = Math.sqrt(A * A + k * k),
    g = Math.sqrt(I * I + L * L),
    h = A || k ? dr(k, A) * Wi : 0,
    m = L || I ? dr(L, I) * Wi + h : 0,
    m && (g *= Math.abs(Math.cos(m * xr))),
    i.svg && (c -= S - (S * A + b * L),
    f -= b - (S * k + b * I))) : (pe = E[6],
    ye = E[7],
    x = E[8],
    G = E[9],
    ae = E[10],
    ie = E[11],
    c = E[12],
    f = E[13],
    p = E[14],
    P = dr(pe, ae),
    v = P * Wi,
    P && (C = Math.cos(-P),
    T = Math.sin(-P),
    B = D * C + x * T,
    z = N * C + G * T,
    $ = pe * C + ae * T,
    x = D * -T + x * C,
    G = N * -T + G * C,
    ae = pe * -T + ae * C,
    ie = ye * -T + ie * C,
    D = B,
    N = z,
    pe = $),
    P = dr(-L, ae),
    y = P * Wi,
    P && (C = Math.cos(-P),
    T = Math.sin(-P),
    B = A * C - x * T,
    z = k * C - G * T,
    $ = L * C - ae * T,
    ie = I * T + ie * C,
    A = B,
    k = z,
    L = $),
    P = dr(k, A),
    h = P * Wi,
    P && (C = Math.cos(P),
    T = Math.sin(P),
    B = A * C + k * T,
    z = D * C + N * T,
    k = k * C - A * T,
    N = N * C - D * T,
    A = B,
    D = z),
    v && Math.abs(v) + Math.abs(h) > 359.9 && (v = h = 0,
    y = 180 - y),
    d = xe(Math.sqrt(A * A + k * k + L * L)),
    g = xe(Math.sqrt(N * N + pe * pe)),
    P = dr(D, N),
    m = Math.abs(P) > 2e-4 ? P * Wi : 0,
    w = ie ? 1 / (ie < 0 ? -ie : ie) : 0),
    i.svg && (B = e.getAttribute("transform"),
    i.forceCSS = e.setAttribute("transform", "") || !Pl(ii(e, fe)),
    B && e.setAttribute("transform", B))),
    Math.abs(m) > 90 && Math.abs(m) < 270 && (n ? (d *= -1,
    m += h <= 0 ? 180 : -180,
    h += h <= 0 ? 180 : -180) : (g *= -1,
    m += m <= 0 ? 180 : -180)),
    t = t || i.uncache,
    i.x = c - ((i.xPercent = c && (!t && i.xPercent || (Math.round(e.offsetWidth / 2) === Math.round(-c) ? -50 : 0))) ? e.offsetWidth * i.xPercent / 100 : 0) + o,
    i.y = f - ((i.yPercent = f && (!t && i.yPercent || (Math.round(e.offsetHeight / 2) === Math.round(-f) ? -50 : 0))) ? e.offsetHeight * i.yPercent / 100 : 0) + o,
    i.z = p + o,
    i.scaleX = xe(d),
    i.scaleY = xe(g),
    i.rotation = xe(h) + a,
    i.rotationX = xe(v) + a,
    i.rotationY = xe(y) + a,
    i.skewX = m + a,
    i.skewY = _ + a,
    i.transformPerspective = w + o,
    (i.zOrigin = parseFloat(u.split(" ")[2]) || 0) && (r[Yt] = Jn(u)),
    i.xOffset = i.yOffset = 0,
    i.force3D = Ct.force3D,
    i.renderTransform = i.svg ? Pc : Tl ? Ml : Cc,
    i.uncache = 0,
    i
}, Jn = function(e) {
    return (e = e.split(" "))[0] + " " + e[1]
}, Ts = function(e, t, i) {
    var r = Xe(t);
    return xe(parseFloat(t) + parseFloat(Oi(e, "x", i + "px", r))) + r
}, Cc = function(e, t) {
    t.z = "0px",
    t.rotationY = t.rotationX = "0deg",
    t.force3D = 0,
    Ml(e, t)
}, Gi = "0deg", Rr = "0px", Hi = ") ", Ml = function(e, t) {
    var i = t || this
      , r = i.xPercent
      , n = i.yPercent
      , o = i.x
      , a = i.y
      , l = i.z
      , u = i.rotation
      , c = i.rotationY
      , f = i.rotationX
      , p = i.skewX
      , d = i.skewY
      , g = i.scaleX
      , h = i.scaleY
      , v = i.transformPerspective
      , y = i.force3D
      , m = i.target
      , _ = i.zOrigin
      , w = ""
      , S = y === "auto" && e && e !== 1 || y === !0;
    if (_ && (f !== Gi || c !== Gi)) {
        var b = parseFloat(c) * xr, E = Math.sin(b), P = Math.cos(b), C;
        b = parseFloat(f) * xr,
        C = Math.cos(b),
        o = Ts(m, o, E * C * -_),
        a = Ts(m, a, -Math.sin(b) * -_),
        l = Ts(m, l, P * C * -_ + _)
    }
    v !== Rr && (w += "perspective(" + v + Hi),
    (r || n) && (w += "translate(" + r + "%, " + n + "%) "),
    (S || o !== Rr || a !== Rr || l !== Rr) && (w += l !== Rr || S ? "translate3d(" + o + ", " + a + ", " + l + ") " : "translate(" + o + ", " + a + Hi),
    u !== Gi && (w += "rotate(" + u + Hi),
    c !== Gi && (w += "rotateY(" + c + Hi),
    f !== Gi && (w += "rotateX(" + f + Hi),
    (p !== Gi || d !== Gi) && (w += "skew(" + p + ", " + d + Hi),
    (g !== 1 || h !== 1) && (w += "scale(" + g + ", " + h + Hi),
    m.style[fe] = w || "translate(0, 0)"
}, Pc = function(e, t) {
    var i = t || this, r = i.xPercent, n = i.yPercent, o = i.x, a = i.y, l = i.rotation, u = i.skewX, c = i.skewY, f = i.scaleX, p = i.scaleY, d = i.target, g = i.xOrigin, h = i.yOrigin, v = i.xOffset, y = i.yOffset, m = i.forceCSS, _ = parseFloat(o), w = parseFloat(a), S, b, E, P, C;
    l = parseFloat(l),
    u = parseFloat(u),
    c = parseFloat(c),
    c && (c = parseFloat(c),
    u += c,
    l += c),
    l || u ? (l *= xr,
    u *= xr,
    S = Math.cos(l) * f,
    b = Math.sin(l) * f,
    E = Math.sin(l - u) * -p,
    P = Math.cos(l - u) * p,
    u && (c *= xr,
    C = Math.tan(u - c),
    C = Math.sqrt(1 + C * C),
    E *= C,
    P *= C,
    c && (C = Math.tan(c),
    C = Math.sqrt(1 + C * C),
    S *= C,
    b *= C)),
    S = xe(S),
    b = xe(b),
    E = xe(E),
    P = xe(P)) : (S = f,
    P = p,
    b = E = 0),
    (_ && !~(o + "").indexOf("px") || w && !~(a + "").indexOf("px")) && (_ = Oi(d, "x", o, "px"),
    w = Oi(d, "y", a, "px")),
    (g || h || v || y) && (_ = xe(_ + g - (g * S + h * E) + v),
    w = xe(w + h - (g * b + h * P) + y)),
    (r || n) && (C = d.getBBox(),
    _ = xe(_ + r / 100 * C.width),
    w = xe(w + n / 100 * C.height)),
    C = "matrix(" + S + "," + b + "," + E + "," + P + "," + _ + "," + w + ")",
    d.setAttribute("transform", C),
    m && (d.style[fe] = C)
}, Mc = function(e, t, i, r, n) {
    var o = 360, a = ze(n), l = parseFloat(n) * (a && ~n.indexOf("rad") ? Wi : 1), u = l - r, c = r + u + "deg", f, p;
    return a && (f = n.split("_")[1],
    f === "short" && (u %= o,
    u !== u % (o / 2) && (u += u < 0 ? o : -o)),
    f === "cw" && u < 0 ? u = (u + o * Ko) % o - ~~(u / o) * o : f === "ccw" && u > 0 && (u = (u - o * Ko) % o - ~~(u / o) * o)),
    e._pt = p = new pt(e._pt,t,i,r,u,dc),
    p.e = c,
    p.u = "deg",
    e._props.push(i),
    p
}, ia = function(e, t) {
    for (var i in t)
        e[i] = t[i];
    return e
}, Ac = function(e, t, i) {
    var r = ia({}, i._gsap), n = "perspective,force3D,transformOrigin,svgOrigin", o = i.style, a, l, u, c, f, p, d, g;
    r.svg ? (u = i.getAttribute("transform"),
    i.setAttribute("transform", ""),
    o[fe] = t,
    a = dn(i, 1),
    un(i, fe),
    i.setAttribute("transform", u)) : (u = getComputedStyle(i)[fe],
    o[fe] = t,
    a = dn(i, 1),
    o[fe] = u);
    for (l in gi)
        u = r[l],
        c = a[l],
        u !== c && n.indexOf(l) < 0 && (d = Xe(u),
        g = Xe(c),
        f = d !== g ? Oi(i, l, u, g) : parseFloat(u),
        p = parseFloat(c),
        e._pt = new pt(e._pt,a,l,f,p - f,Us),
        e._pt.u = g || 0,
        e._props.push(l));
    ia(a, r)
};
ft("padding,margin,Width,Radius", function(s, e) {
    var t = "Top"
      , i = "Right"
      , r = "Bottom"
      , n = "Left"
      , o = (e < 3 ? [t, i, r, n] : [t + n, t + i, r + i, r + n]).map(function(a) {
        return e < 2 ? s + a : "border" + a + s
    });
    Zn[e > 1 ? "border" + s : s] = function(a, l, u, c, f) {
        var p, d;
        if (arguments.length < 4)
            return p = o.map(function(g) {
                return ui(a, g, u)
            }),
            d = p.join(" "),
            d.split(p[0]).length === 5 ? p[0] : d;
        p = (c + "").split(" "),
        d = {},
        o.forEach(function(g, h) {
            return d[g] = p[h] = p[h] || p[(h - 1) / 2 | 0]
        }),
        a.init(l, d, f)
    }
});
var Al = {
    name: "css",
    register: Ks,
    targetTest: function(e) {
        return e.style && e.nodeType
    },
    init: function(e, t, i, r, n) {
        var o = this._props, a = e.style, l = i.vars.startAt, u, c, f, p, d, g, h, v, y, m, _, w, S, b, E, P;
        Co || Ks(),
        this.styles = this.styles || xl(e),
        P = this.styles.props,
        this.tween = i;
        for (h in t)
            if (h !== "autoRound" && (c = t[h],
            !(xt[h] && dl(h, t, i, r, e, n)))) {
                if (d = typeof c,
                g = Zn[h],
                d === "function" && (c = c.call(i, r, e, n),
                d = typeof c),
                d === "string" && ~c.indexOf("random(") && (c = on(c)),
                g)
                    g(this, e, h, c, i) && (E = 1);
                else if (h.substr(0, 2) === "--")
                    u = (getComputedStyle(e).getPropertyValue(h) + "").trim(),
                    c += "",
                    Mi.lastIndex = 0,
                    Mi.test(u) || (v = Xe(u),
                    y = Xe(c)),
                    y ? v !== y && (u = Oi(e, h, u, y) + y) : v && (c += v),
                    this.add(a, "setProperty", u, c, r, n, 0, 0, h),
                    o.push(h),
                    P.push(h, 0, a[h]);
                else if (d !== "undefined") {
                    if (l && h in l ? (u = typeof l[h] == "function" ? l[h].call(i, r, e, n) : l[h],
                    ze(u) && ~u.indexOf("random(") && (u = on(u)),
                    Xe(u + "") || (u += Ct.units[h] || Xe(ui(e, h)) || ""),
                    (u + "").charAt(1) === "=" && (u = ui(e, h))) : u = ui(e, h),
                    p = parseFloat(u),
                    m = d === "string" && c.charAt(1) === "=" && c.substr(0, 2),
                    m && (c = c.substr(2)),
                    f = parseFloat(c),
                    h in ei && (h === "autoAlpha" && (p === 1 && ui(e, "visibility") === "hidden" && f && (p = 0),
                    P.push("visibility", 0, a.visibility),
                    Ti(this, a, "visibility", p ? "inherit" : "hidden", f ? "inherit" : "hidden", !f)),
                    h !== "scale" && h !== "transform" && (h = ei[h],
                    ~h.indexOf(",") && (h = h.split(",")[0]))),
                    _ = h in gi,
                    _) {
                        if (this.styles.save(h),
                        w || (S = e._gsap,
                        S.renderTransform && !t.parseTransform || dn(e, t.parseTransform),
                        b = t.smoothOrigin !== !1 && S.smooth,
                        w = this._pt = new pt(this._pt,a,fe,0,1,S.renderTransform,S,0,-1),
                        w.dep = 1),
                        h === "scale")
                            this._pt = new pt(this._pt,S,"scaleY",S.scaleY,(m ? wr(S.scaleY, m + f) : f) - S.scaleY || 0,Us),
                            this._pt.u = 0,
                            o.push("scaleY", h),
                            h += "X";
                        else if (h === "transformOrigin") {
                            P.push(Yt, 0, a[Yt]),
                            c = bc(c),
                            S.svg ? Qs(e, c, 0, b, 0, this) : (y = parseFloat(c.split(" ")[2]) || 0,
                            y !== S.zOrigin && Ti(this, S, "zOrigin", S.zOrigin, y),
                            Ti(this, a, h, Jn(u), Jn(c)));
                            continue
                        } else if (h === "svgOrigin") {
                            Qs(e, c, 1, b, 0, this);
                            continue
                        } else if (h in Cl) {
                            Mc(this, S, h, p, m ? wr(p, m + c) : c);
                            continue
                        } else if (h === "smoothOrigin") {
                            Ti(this, S, "smooth", S.smooth, c);
                            continue
                        } else if (h === "force3D") {
                            S[h] = c;
                            continue
                        } else if (h === "transform") {
                            Ac(this, c, e);
                            continue
                        }
                    } else
                        h in a || (h = kr(h) || h);
                    if (_ || (f || f === 0) && (p || p === 0) && !cc.test(c) && h in a)
                        v = (u + "").substr((p + "").length),
                        f || (f = 0),
                        y = Xe(c) || (h in Ct.units ? Ct.units[h] : v),
                        v !== y && (p = Oi(e, h, u, y)),
                        this._pt = new pt(this._pt,_ ? S : a,h,p,(m ? wr(p, m + f) : f) - p,!_ && (y === "px" || h === "zIndex") && t.autoRound !== !1 ? pc : Us),
                        this._pt.u = y || 0,
                        v !== y && y !== "%" && (this._pt.b = u,
                        this._pt.r = fc);
                    else if (h in a)
                        Tc.call(this, e, h, u, m ? m + c : c);
                    else if (h in e)
                        this.add(e, h, u || e[h], m ? m + c : c, r, n);
                    else if (h !== "parseTransform") {
                        go(h, c);
                        continue
                    }
                    _ || (h in a ? P.push(h, 0, a[h]) : P.push(h, 1, u || e[h])),
                    o.push(h)
                }
            }
        E && _l(this)
    },
    render: function(e, t) {
        if (t.tween._time || !Po())
            for (var i = t._pt; i; )
                i.r(e, i.d),
                i = i._next;
        else
            t.styles.revert()
    },
    get: ui,
    aliases: ei,
    getSetter: function(e, t, i) {
        var r = ei[t];
        return r && r.indexOf(",") < 0 && (t = r),
        t in gi && t !== Yt && (e._gsap.x || ui(e, "x")) ? i && jo === i ? t === "scale" ? _c : gc : (jo = i || {}) && (t === "scale" ? vc : yc) : e.style && !po(e.style[t]) ? hc : ~t.indexOf("-") ? mc : To(e, t)
    },
    core: {
        _removeProperty: un,
        _getMatrix: Ao
    }
};
ht.utils.checkPrefix = kr;
ht.core.getStyleSaver = xl;
(function(s, e, t, i) {
    var r = ft(s + "," + e + "," + t, function(n) {
        gi[n] = 1
    });
    ft(e, function(n) {
        Ct.units[n] = "deg",
        Cl[n] = 1
    }),
    ei[r[13]] = s + "," + e,
    ft(i, function(n) {
        var o = n.split(":");
        ei[o[1]] = r[o[0]]
    })
}
)("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
ft("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(s) {
    Ct.units[s] = "px"
});
ht.registerPlugin(Al);
var O = ht.registerPlugin(Al) || ht;
O.core.Tween;
/*!
 * paths 3.12.2
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var kc = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig
  , Oc = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/ig
  , Lc = Math.PI / 180
  , vn = Math.sin
  , yn = Math.cos
  , jr = Math.abs
  , Fr = Math.sqrt
  , Ic = function(e) {
    return typeof e == "number"
}
  , ra = 1e5
  , yi = function(e) {
    return Math.round(e * ra) / ra || 0
};
function Dc(s, e, t, i, r, n, o) {
    for (var a = s.length, l, u, c, f, p; --a > -1; )
        for (l = s[a],
        u = l.length,
        c = 0; c < u; c += 2)
            f = l[c],
            p = l[c + 1],
            l[c] = f * e + p * i + n,
            l[c + 1] = f * t + p * r + o;
    return s._dirty = 1,
    s
}
function zc(s, e, t, i, r, n, o, a, l) {
    if (!(s === a && e === l)) {
        t = jr(t),
        i = jr(i);
        var u = r % 360 * Lc
          , c = yn(u)
          , f = vn(u)
          , p = Math.PI
          , d = p * 2
          , g = (s - a) / 2
          , h = (e - l) / 2
          , v = c * g + f * h
          , y = -f * g + c * h
          , m = v * v
          , _ = y * y
          , w = m / (t * t) + _ / (i * i);
        w > 1 && (t = Fr(w) * t,
        i = Fr(w) * i);
        var S = t * t
          , b = i * i
          , E = (S * b - S * _ - b * m) / (S * _ + b * m);
        E < 0 && (E = 0);
        var P = (n === o ? -1 : 1) * Fr(E)
          , C = P * (t * y / i)
          , T = P * -(i * v / t)
          , A = (s + a) / 2
          , k = (e + l) / 2
          , L = A + (c * C - f * T)
          , I = k + (f * C + c * T)
          , D = (v - C) / t
          , N = (y - T) / i
          , B = (-v - C) / t
          , z = (-y - T) / i
          , $ = D * D + N * N
          , x = (N < 0 ? -1 : 1) * Math.acos(D / Fr($))
          , G = (D * z - N * B < 0 ? -1 : 1) * Math.acos((D * B + N * z) / Fr($ * (B * B + z * z)));
        isNaN(G) && (G = p),
        !o && G > 0 ? G -= d : o && G < 0 && (G += d),
        x %= d,
        G %= d;
        var ae = Math.ceil(jr(G) / (d / 4)), ye = [], ie = G / ae, pe = 4 / 3 * vn(ie / 2) / (1 + yn(ie / 2)), Re = c * t, he = f * t, Fe = f * -i, Oe = c * i, me;
        for (me = 0; me < ae; me++)
            r = x + me * ie,
            v = yn(r),
            y = vn(r),
            D = yn(r += ie),
            N = vn(r),
            ye.push(v - pe * y, y + pe * v, D + pe * N, N - pe * D, D, N);
        for (me = 0; me < ye.length; me += 2)
            v = ye[me],
            y = ye[me + 1],
            ye[me] = v * Re + y * Fe + L,
            ye[me + 1] = v * he + y * Oe + I;
        return ye[me - 2] = a,
        ye[me - 1] = l,
        ye
    }
}
function Rc(s) {
    var e = (s + "").replace(Oc, function(C) {
        var T = +C;
        return T < 1e-4 && T > -1e-4 ? 0 : T
    }).match(kc) || [], t = [], i = 0, r = 0, n = 2 / 3, o = e.length, a = 0, l = "ERROR: malformed path: " + s, u, c, f, p, d, g, h, v, y, m, _, w, S, b, E, P = function(T, A, k, L) {
        m = (k - T) / 3,
        _ = (L - A) / 3,
        h.push(T + m, A + _, k - m, L - _, k, L)
    };
    if (!s || !isNaN(e[0]) || isNaN(e[1]))
        return console.log(l),
        t;
    for (u = 0; u < o; u++)
        if (S = d,
        isNaN(e[u]) ? (d = e[u].toUpperCase(),
        g = d !== e[u]) : u--,
        f = +e[u + 1],
        p = +e[u + 2],
        g && (f += i,
        p += r),
        u || (v = f,
        y = p),
        d === "M")
            h && (h.length < 8 ? t.length -= 1 : a += h.length),
            i = v = f,
            r = y = p,
            h = [f, p],
            t.push(h),
            u += 2,
            d = "L";
        else if (d === "C")
            h || (h = [0, 0]),
            g || (i = r = 0),
            h.push(f, p, i + e[u + 3] * 1, r + e[u + 4] * 1, i += e[u + 5] * 1, r += e[u + 6] * 1),
            u += 6;
        else if (d === "S")
            m = i,
            _ = r,
            (S === "C" || S === "S") && (m += i - h[h.length - 4],
            _ += r - h[h.length - 3]),
            g || (i = r = 0),
            h.push(m, _, f, p, i += e[u + 3] * 1, r += e[u + 4] * 1),
            u += 4;
        else if (d === "Q")
            m = i + (f - i) * n,
            _ = r + (p - r) * n,
            g || (i = r = 0),
            i += e[u + 3] * 1,
            r += e[u + 4] * 1,
            h.push(m, _, i + (f - i) * n, r + (p - r) * n, i, r),
            u += 4;
        else if (d === "T")
            m = i - h[h.length - 4],
            _ = r - h[h.length - 3],
            h.push(i + m, r + _, f + (i + m * 1.5 - f) * n, p + (r + _ * 1.5 - p) * n, i = f, r = p),
            u += 2;
        else if (d === "H")
            P(i, r, i = f, r),
            u += 1;
        else if (d === "V")
            P(i, r, i, r = f + (g ? r - i : 0)),
            u += 1;
        else if (d === "L" || d === "Z")
            d === "Z" && (f = v,
            p = y,
            h.closed = !0),
            (d === "L" || jr(i - f) > .5 || jr(r - p) > .5) && (P(i, r, f, p),
            d === "L" && (u += 2)),
            i = f,
            r = p;
        else if (d === "A") {
            if (b = e[u + 4],
            E = e[u + 5],
            m = e[u + 6],
            _ = e[u + 7],
            c = 7,
            b.length > 1 && (b.length < 3 ? (_ = m,
            m = E,
            c--) : (_ = E,
            m = b.substr(2),
            c -= 2),
            E = b.charAt(1),
            b = b.charAt(0)),
            w = zc(i, r, +e[u + 1], +e[u + 2], +e[u + 3], +b, +E, (g ? i : 0) + m * 1, (g ? r : 0) + _ * 1),
            u += c,
            w)
                for (c = 0; c < w.length; c++)
                    h.push(w[c]);
            i = h[h.length - 2],
            r = h[h.length - 1]
        } else
            console.log(l);
    return u = h.length,
    u < 6 ? (t.pop(),
    u = 0) : h[0] === h[u - 2] && h[1] === h[u - 1] && (h.closed = !0),
    t.totalPoints = a + u,
    t
}
function Fc(s) {
    Ic(s[0]) && (s = [s]);
    var e = "", t = s.length, i, r, n, o;
    for (r = 0; r < t; r++) {
        for (o = s[r],
        e += "M" + yi(o[0]) + "," + yi(o[1]) + " C",
        i = o.length,
        n = 2; n < i; n++)
            e += yi(o[n++]) + "," + yi(o[n++]) + " " + yi(o[n++]) + "," + yi(o[n++]) + " " + yi(o[n++]) + "," + yi(o[n]) + " ";
        o.closed && (e += "z")
    }
    return e
}
/*!
 * CustomEase 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var ut, kl, Ol = function() {
    return ut || typeof window < "u" && (ut = window.gsap) && ut.registerPlugin && ut
}, na = function() {
    ut = Ol(),
    ut ? (ut.registerEase("_CE", fn.create),
    kl = 1) : console.warn("Please gsap.registerPlugin(CustomEase)")
}, Nc = 1e20, wn = function(e) {
    return ~~(e * 1e3 + (e < 0 ? -.5 : .5)) / 1e3
}, Bc = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi, qc = /[cLlsSaAhHvVtTqQ]/g, Vc = function(e) {
    var t = e.length, i = Nc, r;
    for (r = 1; r < t; r += 6)
        +e[r] < i && (i = +e[r]);
    return i
}, $c = function(e, t, i) {
    !i && i !== 0 && (i = Math.max(+e[e.length - 1], +e[1]));
    var r = +e[0] * -1, n = -i, o = e.length, a = 1 / (+e[o - 2] + r), l = -t || (Math.abs(+e[o - 1] - +e[1]) < .01 * (+e[o - 2] - +e[0]) ? Vc(e) + n : +e[o - 1] + n), u;
    for (l ? l = 1 / l : l = -a,
    u = 0; u < o; u += 2)
        e[u] = (+e[u] + r) * a,
        e[u + 1] = (+e[u + 1] + n) * l
}, Gc = function s(e, t, i, r, n, o, a, l, u, c, f) {
    var p = (e + i) / 2, d = (t + r) / 2, g = (i + n) / 2, h = (r + o) / 2, v = (n + a) / 2, y = (o + l) / 2, m = (p + g) / 2, _ = (d + h) / 2, w = (g + v) / 2, S = (h + y) / 2, b = (m + w) / 2, E = (_ + S) / 2, P = a - e, C = l - t, T = Math.abs((i - a) * C - (r - l) * P), A = Math.abs((n - a) * C - (o - l) * P), k;
    return c || (c = [{
        x: e,
        y: t
    }, {
        x: a,
        y: l
    }],
    f = 1),
    c.splice(f || c.length - 1, 0, {
        x: b,
        y: E
    }),
    (T + A) * (T + A) > u * (P * P + C * C) && (k = c.length,
    s(e, t, p, d, m, _, b, E, u, c, f),
    s(b, E, w, S, v, y, a, l, u, c, f + 1 + (c.length - k))),
    c
}, fn = function() {
    function s(t, i, r) {
        kl || na(),
        this.id = t,
        this.setData(i, r)
    }
    var e = s.prototype;
    return e.setData = function(i, r) {
        r = r || {},
        i = i || "0,0,1,1";
        var n = i.match(Bc), o = 1, a = [], l = [], u = r.precision || 1, c = u <= 1, f, p, d, g, h, v, y, m, _;
        if (this.data = i,
        (qc.test(i) || ~i.indexOf("M") && i.indexOf("C") < 0) && (n = Rc(i)[0]),
        f = n.length,
        f === 4)
            n.unshift(0, 0),
            n.push(1, 1),
            f = 8;
        else if ((f - 2) % 6)
            throw "Invalid CustomEase";
        for ((+n[0] != 0 || +n[f - 2] != 1) && $c(n, r.height, r.originY),
        this.segment = n,
        g = 2; g < f; g += 6)
            p = {
                x: +n[g - 2],
                y: +n[g - 1]
            },
            d = {
                x: +n[g + 4],
                y: +n[g + 5]
            },
            a.push(p, d),
            Gc(p.x, p.y, +n[g], +n[g + 1], +n[g + 2], +n[g + 3], d.x, d.y, 1 / (u * 2e5), a, a.length - 1);
        for (f = a.length,
        g = 0; g < f; g++)
            y = a[g],
            m = a[g - 1] || y,
            (y.x > m.x || m.y !== y.y && m.x === y.x || y === m) && y.x <= 1 ? (m.cx = y.x - m.x,
            m.cy = y.y - m.y,
            m.n = y,
            m.nx = y.x,
            c && g > 1 && Math.abs(m.cy / m.cx - a[g - 2].cy / a[g - 2].cx) > 2 && (c = 0),
            m.cx < o && (m.cx ? o = m.cx : (m.cx = .001,
            g === f - 1 && (m.x -= .001,
            o = Math.min(o, .001),
            c = 0)))) : (a.splice(g--, 1),
            f--);
        if (f = 1 / o + 1 | 0,
        h = 1 / f,
        v = 0,
        y = a[0],
        c) {
            for (g = 0; g < f; g++)
                _ = g * h,
                y.nx < _ && (y = a[++v]),
                p = y.y + (_ - y.x) / y.cx * y.cy,
                l[g] = {
                    x: _,
                    cx: h,
                    y: p,
                    cy: 0,
                    nx: 9
                },
                g && (l[g - 1].cy = p - l[g - 1].y);
            l[f - 1].cy = a[a.length - 1].y - p
        } else {
            for (g = 0; g < f; g++)
                y.nx < g * h && (y = a[++v]),
                l[g] = y;
            v < a.length - 1 && (l[g - 1] = a[a.length - 2])
        }
        return this.ease = function(w) {
            var S = l[w * f | 0] || l[f - 1];
            return S.nx < w && (S = S.n),
            S.y + (w - S.x) / S.cx * S.cy
        }
        ,
        this.ease.custom = this,
        this.id && ut && ut.registerEase(this.id, this.ease),
        this
    }
    ,
    e.getSVGData = function(i) {
        return s.getSVGData(this, i)
    }
    ,
    s.create = function(i, r, n) {
        return new s(i,r,n).ease
    }
    ,
    s.register = function(i) {
        ut = i,
        na()
    }
    ,
    s.get = function(i) {
        return ut.parseEase(i)
    }
    ,
    s.getSVGData = function(i, r) {
        r = r || {};
        var n = r.width || 100, o = r.height || 100, a = r.x || 0, l = (r.y || 0) + o, u = ut.utils.toArray(r.path)[0], c, f, p, d, g, h, v, y, m, _;
        if (r.invert && (o = -o,
        l = 0),
        typeof i == "string" && (i = ut.parseEase(i)),
        i.custom && (i = i.custom),
        i instanceof s)
            c = Fc(Dc([i.segment], n, 0, 0, -o, a, l));
        else {
            for (c = [a, l],
            v = Math.max(5, (r.precision || 1) * 200),
            d = 1 / v,
            v += 2,
            y = 5 / v,
            m = wn(a + d * n),
            _ = wn(l + i(d) * -o),
            f = (_ - l) / (m - a),
            p = 2; p < v; p++)
                g = wn(a + p * d * n),
                h = wn(l + i(p * d) * -o),
                (Math.abs((h - _) / (g - m) - f) > y || p === v - 1) && (c.push(m, _),
                f = (h - _) / (g - m)),
                m = g,
                _ = h;
            c = "M" + c.join(",")
        }
        return u && u.setAttribute("d", c),
        c
    }
    ,
    s
}();
Ol() && ut.registerPlugin(fn);
fn.version = "3.12.2";
function sa(s, e) {
    for (var t = 0; t < e.length; t++) {
        var i = e[t];
        i.enumerable = i.enumerable || !1,
        i.configurable = !0,
        "value"in i && (i.writable = !0),
        Object.defineProperty(s, i.key, i)
    }
}
function Hc(s, e, t) {
    return e && sa(s.prototype, e),
    t && sa(s, t),
    s
}
/*!
 * Observer 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var Ge, Zs, Et, bi, Ei, Tr, Ll, Yi, Kr, Il, di, Ht, Dl, zl = function() {
    return Ge || typeof window < "u" && (Ge = window.gsap) && Ge.registerPlugin && Ge
}, Rl = 1, vr = [], U = [], ri = [], Qr = Date.now, Js = function(e, t) {
    return t
}, Wc = function() {
    var e = Kr.core
      , t = e.bridge || {}
      , i = e._scrollers
      , r = e._proxies;
    i.push.apply(i, U),
    r.push.apply(r, ri),
    U = i,
    ri = r,
    Js = function(o, a) {
        return t[o](a)
    }
}, Ai = function(e, t) {
    return ~ri.indexOf(e) && ri[ri.indexOf(e) + 1][t]
}, Zr = function(e) {
    return !!~Il.indexOf(e)
}, Ze = function(e, t, i, r, n) {
    return e.addEventListener(t, i, {
        passive: !r,
        capture: !!n
    })
}, Qe = function(e, t, i, r) {
    return e.removeEventListener(t, i, !!r)
}, Sn = "scrollLeft", xn = "scrollTop", eo = function() {
    return di && di.isPressed || U.cache++
}, es = function(e, t) {
    var i = function r(n) {
        if (n || n === 0) {
            Rl && (Et.history.scrollRestoration = "manual");
            var o = di && di.isPressed;
            n = r.v = Math.round(n) || (di && di.iOS ? 1 : 0),
            e(n),
            r.cacheID = U.cache,
            o && Js("ss", n)
        } else
            (t || U.cache !== r.cacheID || Js("ref")) && (r.cacheID = U.cache,
            r.v = e());
        return r.v + r.offset
    };
    return i.offset = 0,
    e && i
}, it = {
    s: Sn,
    p: "left",
    p2: "Left",
    os: "right",
    os2: "Right",
    d: "width",
    d2: "Width",
    a: "x",
    sc: es(function(s) {
        return arguments.length ? Et.scrollTo(s, ke.sc()) : Et.pageXOffset || bi[Sn] || Ei[Sn] || Tr[Sn] || 0
    })
}, ke = {
    s: xn,
    p: "top",
    p2: "Top",
    os: "bottom",
    os2: "Bottom",
    d: "height",
    d2: "Height",
    a: "y",
    op: it,
    sc: es(function(s) {
        return arguments.length ? Et.scrollTo(it.sc(), s) : Et.pageYOffset || bi[xn] || Ei[xn] || Tr[xn] || 0
    })
}, at = function(e, t) {
    return (t && t._ctx && t._ctx.selector || Ge.utils.toArray)(e)[0] || (typeof e == "string" && Ge.config().nullTargetWarn !== !1 ? console.warn("Element not found:", e) : null)
}, Li = function(e, t) {
    var i = t.s
      , r = t.sc;
    Zr(e) && (e = bi.scrollingElement || Ei);
    var n = U.indexOf(e)
      , o = r === ke.sc ? 1 : 2;
    !~n && (n = U.push(e) - 1),
    U[n + o] || Ze(e, "scroll", eo);
    var a = U[n + o]
      , l = a || (U[n + o] = es(Ai(e, i), !0) || (Zr(e) ? r : es(function(u) {
        return arguments.length ? e[i] = u : e[i]
    })));
    return l.target = e,
    a || (l.smooth = Ge.getProperty(e, "scrollBehavior") === "smooth"),
    l
}, to = function(e, t, i) {
    var r = e
      , n = e
      , o = Qr()
      , a = o
      , l = t || 50
      , u = Math.max(500, l * 3)
      , c = function(g, h) {
        var v = Qr();
        h || v - o > l ? (n = r,
        r = g,
        a = o,
        o = v) : i ? r += g : r = n + (g - n) / (v - a) * (o - a)
    }
      , f = function() {
        n = r = i ? 0 : r,
        a = o = 0
    }
      , p = function(g) {
        var h = a
          , v = n
          , y = Qr();
        return (g || g === 0) && g !== r && c(g),
        o === a || y - a > u ? 0 : (r + (i ? v : -v)) / ((i ? y : o) - h) * 1e3
    };
    return {
        update: c,
        reset: f,
        getVelocity: p
    }
}, Nr = function(e, t) {
    return t && !e._gsapAllow && e.preventDefault(),
    e.changedTouches ? e.changedTouches[0] : e
}, oa = function(e) {
    var t = Math.max.apply(Math, e)
      , i = Math.min.apply(Math, e);
    return Math.abs(t) >= Math.abs(i) ? t : i
}, Fl = function() {
    Kr = Ge.core.globals().ScrollTrigger,
    Kr && Kr.core && Wc()
}, Nl = function(e) {
    return Ge = e || zl(),
    Ge && typeof document < "u" && document.body && (Et = window,
    bi = document,
    Ei = bi.documentElement,
    Tr = bi.body,
    Il = [Et, bi, Ei, Tr],
    Ge.utils.clamp,
    Dl = Ge.core.context || function() {}
    ,
    Yi = "onpointerenter"in Tr ? "pointer" : "mouse",
    Ll = Pe.isTouch = Et.matchMedia && Et.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart"in Et || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0,
    Ht = Pe.eventTypes = ("ontouchstart"in Ei ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown"in Ei ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","),
    setTimeout(function() {
        return Rl = 0
    }, 500),
    Fl(),
    Zs = 1),
    Zs
};
it.op = ke;
U.cache = 0;
var Pe = function() {
    function s(t) {
        this.init(t)
    }
    var e = s.prototype;
    return e.init = function(i) {
        Zs || Nl(Ge) || console.warn("Please gsap.registerPlugin(Observer)"),
        Kr || Fl();
        var r = i.tolerance
          , n = i.dragMinimum
          , o = i.type
          , a = i.target
          , l = i.lineHeight
          , u = i.debounce
          , c = i.preventDefault
          , f = i.onStop
          , p = i.onStopDelay
          , d = i.ignore
          , g = i.wheelSpeed
          , h = i.event
          , v = i.onDragStart
          , y = i.onDragEnd
          , m = i.onDrag
          , _ = i.onPress
          , w = i.onRelease
          , S = i.onRight
          , b = i.onLeft
          , E = i.onUp
          , P = i.onDown
          , C = i.onChangeX
          , T = i.onChangeY
          , A = i.onChange
          , k = i.onToggleX
          , L = i.onToggleY
          , I = i.onHover
          , D = i.onHoverEnd
          , N = i.onMove
          , B = i.ignoreCheck
          , z = i.isNormalizer
          , $ = i.onGestureStart
          , x = i.onGestureEnd
          , G = i.onWheel
          , ae = i.onEnable
          , ye = i.onDisable
          , ie = i.onClick
          , pe = i.scrollSpeed
          , Re = i.capture
          , he = i.allowClicks
          , Fe = i.lockAxis
          , Oe = i.onLockAxis;
        this.target = a = at(a) || Ei,
        this.vars = i,
        d && (d = Ge.utils.toArray(d)),
        r = r || 1e-9,
        n = n || 0,
        g = g || 1,
        pe = pe || 1,
        o = o || "wheel,touch,pointer",
        u = u !== !1,
        l || (l = parseFloat(Et.getComputedStyle(Tr).lineHeight) || 22);
        var me, nt, Xt, ee, Te, st, mt, M = this, gt = 0, si = 0, Di = Li(a, it), be = Li(a, ke), zi = Di(), Ri = be(), Lr = ~o.indexOf("touch") && !~o.indexOf("pointer") && Ht[0] === "pointerdown", Ne = Zr(a), we = a.ownerDocument || bi, Nt = [0, 0, 0], Bt = [0, 0, 0], Fi = 0, oi = function() {
            return Fi = Qr()
        }, Ut = function(q, te) {
            return (M.event = q) && d && ~d.indexOf(q.target) || te && Lr && q.pointerType !== "touch" || B && B(q, te)
        }, ot = function() {
            M._vx.reset(),
            M._vy.reset(),
            nt.pause(),
            f && f(M)
        }, Ni = function() {
            var q = M.deltaX = oa(Nt)
              , te = M.deltaY = oa(Bt)
              , ge = Math.abs(q) >= r
              , R = Math.abs(te) >= r;
            A && (ge || R) && A(M, q, te, Nt, Bt),
            ge && (S && M.deltaX > 0 && S(M),
            b && M.deltaX < 0 && b(M),
            C && C(M),
            k && M.deltaX < 0 != gt < 0 && k(M),
            gt = M.deltaX,
            Nt[0] = Nt[1] = Nt[2] = 0),
            R && (P && M.deltaY > 0 && P(M),
            E && M.deltaY < 0 && E(M),
            T && T(M),
            L && M.deltaY < 0 != si < 0 && L(M),
            si = M.deltaY,
            Bt[0] = Bt[1] = Bt[2] = 0),
            (ee || Xt) && (N && N(M),
            Xt && (m(M),
            Xt = !1),
            ee = !1),
            st && !(st = !1) && Oe && Oe(M),
            Te && (G(M),
            Te = !1),
            me = 0
        }, lr = function(q, te, ge) {
            Nt[ge] += q,
            Bt[ge] += te,
            M._vx.update(q),
            M._vy.update(te),
            u ? me || (me = requestAnimationFrame(Ni)) : Ni()
        }, ur = function(q, te) {
            Fe && !mt && (M.axis = mt = Math.abs(q) > Math.abs(te) ? "x" : "y",
            st = !0),
            mt !== "y" && (Nt[2] += q,
            M._vx.update(q, !0)),
            mt !== "x" && (Bt[2] += te,
            M._vy.update(te, !0)),
            u ? me || (me = requestAnimationFrame(Ni)) : Ni()
        }, Bi = function(q) {
            if (!Ut(q, 1)) {
                q = Nr(q, c);
                var te = q.clientX
                  , ge = q.clientY
                  , R = te - M.x
                  , Q = ge - M.y
                  , V = M.isDragging;
                M.x = te,
                M.y = ge,
                (V || Math.abs(M.startX - te) >= n || Math.abs(M.startY - ge) >= n) && (m && (Xt = !0),
                V || (M.isDragging = !0),
                ur(R, Q),
                V || v && v(M))
            }
        }, _i = M.onPress = function(H) {
            Ut(H, 1) || H && H.button || (M.axis = mt = null,
            nt.pause(),
            M.isPressed = !0,
            H = Nr(H),
            gt = si = 0,
            M.startX = M.x = H.clientX,
            M.startY = M.y = H.clientY,
            M._vx.reset(),
            M._vy.reset(),
            Ze(z ? a : we, Ht[1], Bi, c, !0),
            M.deltaX = M.deltaY = 0,
            _ && _(M))
        }
        , vi = M.onRelease = function(H) {
            if (!Ut(H, 1)) {
                Qe(z ? a : we, Ht[1], Bi, !0);
                var q = !isNaN(M.y - M.startY)
                  , te = M.isDragging && (Math.abs(M.x - M.startX) > 3 || Math.abs(M.y - M.startY) > 3)
                  , ge = Nr(H);
                !te && q && (M._vx.reset(),
                M._vy.reset(),
                c && he && Ge.delayedCall(.08, function() {
                    if (Qr() - Fi > 300 && !H.defaultPrevented) {
                        if (H.target.click)
                            H.target.click();
                        else if (we.createEvent) {
                            var R = we.createEvent("MouseEvents");
                            R.initMouseEvent("click", !0, !0, Et, 1, ge.screenX, ge.screenY, ge.clientX, ge.clientY, !1, !1, !1, !1, 0, null),
                            H.target.dispatchEvent(R)
                        }
                    }
                })),
                M.isDragging = M.isGesturing = M.isPressed = !1,
                f && !z && nt.restart(!0),
                y && te && y(M),
                w && w(M, te)
            }
        }
        , Z = function(q) {
            return q.touches && q.touches.length > 1 && (M.isGesturing = !0) && $(q, M.isDragging)
        }, qi = function() {
            return (M.isGesturing = !1) || x(M)
        }, qt = function(q) {
            if (!Ut(q)) {
                var te = Di()
                  , ge = be();
                lr((te - zi) * pe, (ge - Ri) * pe, 1),
                zi = te,
                Ri = ge,
                f && nt.restart(!0)
            }
        }, Vt = function(q) {
            if (!Ut(q)) {
                q = Nr(q, c),
                G && (Te = !0);
                var te = (q.deltaMode === 1 ? l : q.deltaMode === 2 ? Et.innerHeight : 1) * g;
                lr(q.deltaX * te, q.deltaY * te, 0),
                f && !z && nt.restart(!0)
            }
        }, $t = function(q) {
            if (!Ut(q)) {
                var te = q.clientX
                  , ge = q.clientY
                  , R = te - M.x
                  , Q = ge - M.y;
                M.x = te,
                M.y = ge,
                ee = !0,
                (R || Q) && ur(R, Q)
            }
        }, Vi = function(q) {
            M.event = q,
            I(M)
        }, cr = function(q) {
            M.event = q,
            D(M)
        }, ai = function(q) {
            return Ut(q) || Nr(q, c) && ie(M)
        };
        nt = M._dc = Ge.delayedCall(p || .25, ot).pause(),
        M.deltaX = M.deltaY = 0,
        M._vx = to(0, 50, !0),
        M._vy = to(0, 50, !0),
        M.scrollX = Di,
        M.scrollY = be,
        M.isDragging = M.isGesturing = M.isPressed = !1,
        Dl(this),
        M.enable = function(H) {
            return M.isEnabled || (Ze(Ne ? we : a, "scroll", eo),
            o.indexOf("scroll") >= 0 && Ze(Ne ? we : a, "scroll", qt, c, Re),
            o.indexOf("wheel") >= 0 && Ze(a, "wheel", Vt, c, Re),
            (o.indexOf("touch") >= 0 && Ll || o.indexOf("pointer") >= 0) && (Ze(a, Ht[0], _i, c, Re),
            Ze(we, Ht[2], vi),
            Ze(we, Ht[3], vi),
            he && Ze(a, "click", oi, !1, !0),
            ie && Ze(a, "click", ai),
            $ && Ze(we, "gesturestart", Z),
            x && Ze(we, "gestureend", qi),
            I && Ze(a, Yi + "enter", Vi),
            D && Ze(a, Yi + "leave", cr),
            N && Ze(a, Yi + "move", $t)),
            M.isEnabled = !0,
            H && H.type && _i(H),
            ae && ae(M)),
            M
        }
        ,
        M.disable = function() {
            M.isEnabled && (vr.filter(function(H) {
                return H !== M && Zr(H.target)
            }).length || Qe(Ne ? we : a, "scroll", eo),
            M.isPressed && (M._vx.reset(),
            M._vy.reset(),
            Qe(z ? a : we, Ht[1], Bi, !0)),
            Qe(Ne ? we : a, "scroll", qt, Re),
            Qe(a, "wheel", Vt, Re),
            Qe(a, Ht[0], _i, Re),
            Qe(we, Ht[2], vi),
            Qe(we, Ht[3], vi),
            Qe(a, "click", oi, !0),
            Qe(a, "click", ai),
            Qe(we, "gesturestart", Z),
            Qe(we, "gestureend", qi),
            Qe(a, Yi + "enter", Vi),
            Qe(a, Yi + "leave", cr),
            Qe(a, Yi + "move", $t),
            M.isEnabled = M.isPressed = M.isDragging = !1,
            ye && ye(M))
        }
        ,
        M.kill = M.revert = function() {
            M.disable();
            var H = vr.indexOf(M);
            H >= 0 && vr.splice(H, 1),
            di === M && (di = 0)
        }
        ,
        vr.push(M),
        z && Zr(a) && (di = M),
        M.enable(h)
    }
    ,
    Hc(s, [{
        key: "velocityX",
        get: function() {
            return this._vx.getVelocity()
        }
    }, {
        key: "velocityY",
        get: function() {
            return this._vy.getVelocity()
        }
    }]),
    s
}();
Pe.version = "3.12.2";
Pe.create = function(s) {
    return new Pe(s)
}
;
Pe.register = Nl;
Pe.getAll = function() {
    return vr.slice()
}
;
Pe.getById = function(s) {
    return vr.filter(function(e) {
        return e.vars.id === s
    })[0]
}
;
zl() && Ge.registerPlugin(Pe);
/*!
 * ScrollTrigger 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var F, hr, j, ce, Wt, oe, Bl, ts, is, yr, Nn, Tn, Ye, ps, io, Je, aa, la, mr, ql, bs, Vl, yt, $l, Gl, Hl, wi, ro, ko, br, Oo, Es, bn = 1, tt = Date.now, Cs = tt(), Rt = 0, Gr = 0, ua = function(e, t, i) {
    var r = St(e) && (e.substr(0, 6) === "clamp(" || e.indexOf("max") > -1);
    return i["_" + t + "Clamp"] = r,
    r ? e.substr(6, e.length - 7) : e
}, ca = function(e, t) {
    return t && (!St(e) || e.substr(0, 6) !== "clamp(") ? "clamp(" + e + ")" : e
}, Yc = function s() {
    return Gr && requestAnimationFrame(s)
}, da = function() {
    return ps = 1
}, fa = function() {
    return ps = 0
}, Zt = function(e) {
    return e
}, Hr = function(e) {
    return Math.round(e * 1e5) / 1e5 || 0
}, Wl = function() {
    return typeof window < "u"
}, Yl = function() {
    return F || Wl() && (F = window.gsap) && F.registerPlugin && F
}, nr = function(e) {
    return !!~Bl.indexOf(e)
}, Xl = function(e) {
    return (e === "Height" ? Oo : j["inner" + e]) || Wt["client" + e] || oe["client" + e]
}, Ul = function(e) {
    return Ai(e, "getBoundingClientRect") || (nr(e) ? function() {
        return Hn.width = j.innerWidth,
        Hn.height = Oo,
        Hn
    }
    : function() {
        return ci(e)
    }
    )
}, Xc = function(e, t, i) {
    var r = i.d
      , n = i.d2
      , o = i.a;
    return (o = Ai(e, "getBoundingClientRect")) ? function() {
        return o()[r]
    }
    : function() {
        return (t ? Xl(n) : e["client" + n]) || 0
    }
}, Uc = function(e, t) {
    return !t || ~ri.indexOf(e) ? Ul(e) : function() {
        return Hn
    }
}, fi = function(e, t) {
    var i = t.s
      , r = t.d2
      , n = t.d
      , o = t.a;
    return Math.max(0, (i = "scroll" + r) && (o = Ai(e, i)) ? o() - Ul(e)()[n] : nr(e) ? (Wt[i] || oe[i]) - Xl(r) : e[i] - e["offset" + r])
}, En = function(e, t) {
    for (var i = 0; i < mr.length; i += 3)
        (!t || ~t.indexOf(mr[i + 1])) && e(mr[i], mr[i + 1], mr[i + 2])
}, St = function(e) {
    return typeof e == "string"
}, rt = function(e) {
    return typeof e == "function"
}, Bn = function(e) {
    return typeof e == "number"
}, Xi = function(e) {
    return typeof e == "object"
}, Br = function(e, t, i) {
    return e && e.progress(t ? 0 : 1) && i && e.pause()
}, Ps = function(e, t) {
    if (e.enabled) {
        var i = t(e);
        i && i.totalTime && (e.callbackAnimation = i)
    }
}, fr = Math.abs, jl = "left", Kl = "top", Lo = "right", Io = "bottom", er = "width", tr = "height", Jr = "Right", en = "Left", tn = "Top", rn = "Bottom", Ee = "padding", Ot = "margin", Or = "Width", Do = "Height", Ve = "px", Lt = function(e) {
    return j.getComputedStyle(e)
}, jc = function(e) {
    var t = Lt(e).position;
    e.style.position = t === "absolute" || t === "fixed" ? t : "relative"
}, pa = function(e, t) {
    for (var i in t)
        i in e || (e[i] = t[i]);
    return e
}, ci = function(e, t) {
    var i = t && Lt(e)[io] !== "matrix(1, 0, 0, 1, 0, 0)" && F.to(e, {
        x: 0,
        y: 0,
        xPercent: 0,
        yPercent: 0,
        rotation: 0,
        rotationX: 0,
        rotationY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0
    }).progress(1)
      , r = e.getBoundingClientRect();
    return i && i.progress(0).kill(),
    r
}, no = function(e, t) {
    var i = t.d2;
    return e["offset" + i] || e["client" + i] || 0
}, Ql = function(e) {
    var t = [], i = e.labels, r = e.duration(), n;
    for (n in i)
        t.push(i[n] / r);
    return t
}, Kc = function(e) {
    return function(t) {
        return F.utils.snap(Ql(e), t)
    }
}, zo = function(e) {
    var t = F.utils.snap(e)
      , i = Array.isArray(e) && e.slice(0).sort(function(r, n) {
        return r - n
    });
    return i ? function(r, n, o) {
        o === void 0 && (o = .001);
        var a;
        if (!n)
            return t(r);
        if (n > 0) {
            for (r -= o,
            a = 0; a < i.length; a++)
                if (i[a] >= r)
                    return i[a];
            return i[a - 1]
        } else
            for (a = i.length,
            r += o; a--; )
                if (i[a] <= r)
                    return i[a];
        return i[0]
    }
    : function(r, n, o) {
        o === void 0 && (o = .001);
        var a = t(r);
        return !n || Math.abs(a - r) < o || a - r < 0 == n < 0 ? a : t(n < 0 ? r - e : r + e)
    }
}, Qc = function(e) {
    return function(t, i) {
        return zo(Ql(e))(t, i.direction)
    }
}, Cn = function(e, t, i, r) {
    return i.split(",").forEach(function(n) {
        return e(t, n, r)
    })
}, De = function(e, t, i, r, n) {
    return e.addEventListener(t, i, {
        passive: !r,
        capture: !!n
    })
}, Ie = function(e, t, i, r) {
    return e.removeEventListener(t, i, !!r)
}, Pn = function(e, t, i) {
    i = i && i.wheelHandler,
    i && (e(t, "wheel", i),
    e(t, "touchmove", i))
}, ha = {
    startColor: "green",
    endColor: "red",
    indent: 0,
    fontSize: "16px",
    fontWeight: "normal"
}, Mn = {
    toggleActions: "play",
    anticipatePin: 0
}, rs = {
    top: 0,
    left: 0,
    center: .5,
    bottom: 1,
    right: 1
}, qn = function(e, t) {
    if (St(e)) {
        var i = e.indexOf("=")
          , r = ~i ? +(e.charAt(i - 1) + 1) * parseFloat(e.substr(i + 1)) : 0;
        ~i && (e.indexOf("%") > i && (r *= t / 100),
        e = e.substr(0, i - 1)),
        e = r + (e in rs ? rs[e] * t : ~e.indexOf("%") ? parseFloat(e) * t / 100 : parseFloat(e) || 0)
    }
    return e
}, An = function(e, t, i, r, n, o, a, l) {
    var u = n.startColor
      , c = n.endColor
      , f = n.fontSize
      , p = n.indent
      , d = n.fontWeight
      , g = ce.createElement("div")
      , h = nr(i) || Ai(i, "pinType") === "fixed"
      , v = e.indexOf("scroller") !== -1
      , y = h ? oe : i
      , m = e.indexOf("start") !== -1
      , _ = m ? u : c
      , w = "border-color:" + _ + ";font-size:" + f + ";color:" + _ + ";font-weight:" + d + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
    return w += "position:" + ((v || l) && h ? "fixed;" : "absolute;"),
    (v || l || !h) && (w += (r === ke ? Lo : Io) + ":" + (o + parseFloat(p)) + "px;"),
    a && (w += "box-sizing:border-box;text-align:left;width:" + a.offsetWidth + "px;"),
    g._isStart = m,
    g.setAttribute("class", "gsap-marker-" + e + (t ? " marker-" + t : "")),
    g.style.cssText = w,
    g.innerText = t || t === 0 ? e + "-" + t : e,
    y.children[0] ? y.insertBefore(g, y.children[0]) : y.appendChild(g),
    g._offset = g["offset" + r.op.d2],
    Vn(g, 0, r, m),
    g
}, Vn = function(e, t, i, r) {
    var n = {
        display: "block"
    }
      , o = i[r ? "os2" : "p2"]
      , a = i[r ? "p2" : "os2"];
    e._isFlipped = r,
    n[i.a + "Percent"] = r ? -100 : 0,
    n[i.a] = r ? "1px" : 0,
    n["border" + o + Or] = 1,
    n["border" + a + Or] = 0,
    n[i.p] = t + "px",
    F.set(e, n)
}, Y = [], so = {}, pn, ma = function() {
    return tt() - Rt > 34 && (pn || (pn = requestAnimationFrame(pi)))
}, pr = function() {
    (!yt || !yt.isPressed || yt.startX > oe.clientWidth) && (U.cache++,
    yt ? pn || (pn = requestAnimationFrame(pi)) : pi(),
    Rt || or("scrollStart"),
    Rt = tt())
}, Ms = function() {
    Hl = j.innerWidth,
    Gl = j.innerHeight
}, Wr = function() {
    U.cache++,
    !Ye && !Vl && !ce.fullscreenElement && !ce.webkitFullscreenElement && (!$l || Hl !== j.innerWidth || Math.abs(j.innerHeight - Gl) > j.innerHeight * .25) && ts.restart(!0)
}, sr = {}, Zc = [], Zl = function s() {
    return Ie(W, "scrollEnd", s) || ji(!0)
}, or = function(e) {
    return sr[e] && sr[e].map(function(t) {
        return t()
    }) || Zc
}, wt = [], Jl = function(e) {
    for (var t = 0; t < wt.length; t += 5)
        (!e || wt[t + 4] && wt[t + 4].query === e) && (wt[t].style.cssText = wt[t + 1],
        wt[t].getBBox && wt[t].setAttribute("transform", wt[t + 2] || ""),
        wt[t + 3].uncache = 1)
}, Ro = function(e, t) {
    var i;
    for (Je = 0; Je < Y.length; Je++)
        i = Y[Je],
        i && (!t || i._ctx === t) && (e ? i.kill(1) : i.revert(!0, !0));
    t && Jl(t),
    t || or("revert")
}, eu = function(e, t) {
    U.cache++,
    (t || !et) && U.forEach(function(i) {
        return rt(i) && i.cacheID++ && (i.rec = 0)
    }),
    St(e) && (j.history.scrollRestoration = ko = e)
}, et, ir = 0, ga, Jc = function() {
    if (ga !== ir) {
        var e = ga = ir;
        requestAnimationFrame(function() {
            return e === ir && ji(!0)
        })
    }
}, tu = function() {
    oe.appendChild(br),
    Oo = br.offsetHeight || j.innerHeight,
    oe.removeChild(br)
}, ji = function(e, t) {
    if (Rt && !e) {
        De(W, "scrollEnd", Zl);
        return
    }
    tu(),
    et = W.isRefreshing = !0,
    U.forEach(function(r) {
        return rt(r) && ++r.cacheID && (r.rec = r())
    });
    var i = or("refreshInit");
    ql && W.sort(),
    t || Ro(),
    U.forEach(function(r) {
        rt(r) && (r.smooth && (r.target.style.scrollBehavior = "auto"),
        r(0))
    }),
    Y.slice(0).forEach(function(r) {
        return r.refresh()
    }),
    Y.forEach(function(r, n) {
        if (r._subPinOffset && r.pin) {
            var o = r.vars.horizontal ? "offsetWidth" : "offsetHeight"
              , a = r.pin[o];
            r.revert(!0, 1),
            r.adjustPinSpacing(r.pin[o] - a),
            r.refresh()
        }
    }),
    Y.forEach(function(r) {
        var n = fi(r.scroller, r._dir);
        (r.vars.end === "max" || r._endClamp && r.end > n) && r.setPositions(r.start, Math.max(r.start + 1, n), !0)
    }),
    i.forEach(function(r) {
        return r && r.render && r.render(-1)
    }),
    U.forEach(function(r) {
        rt(r) && (r.smooth && requestAnimationFrame(function() {
            return r.target.style.scrollBehavior = "smooth"
        }),
        r.rec && r(r.rec))
    }),
    eu(ko, 1),
    ts.pause(),
    ir++,
    et = 2,
    pi(2),
    Y.forEach(function(r) {
        return rt(r.vars.onRefresh) && r.vars.onRefresh(r)
    }),
    et = W.isRefreshing = !1,
    or("refresh")
}, oo = 0, $n = 1, nn, pi = function(e) {
    if (!et || e === 2) {
        W.isUpdating = !0,
        nn && nn.update(0);
        var t = Y.length
          , i = tt()
          , r = i - Cs >= 50
          , n = t && Y[0].scroll();
        if ($n = oo > n ? -1 : 1,
        et || (oo = n),
        r && (Rt && !ps && i - Rt > 200 && (Rt = 0,
        or("scrollEnd")),
        Nn = Cs,
        Cs = i),
        $n < 0) {
            for (Je = t; Je-- > 0; )
                Y[Je] && Y[Je].update(0, r);
            $n = 1
        } else
            for (Je = 0; Je < t; Je++)
                Y[Je] && Y[Je].update(0, r);
        W.isUpdating = !1
    }
    pn = 0
}, ao = [jl, Kl, Io, Lo, Ot + rn, Ot + Jr, Ot + tn, Ot + en, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"], Gn = ao.concat([er, tr, "boxSizing", "max" + Or, "max" + Do, "position", Ot, Ee, Ee + tn, Ee + Jr, Ee + rn, Ee + en]), ed = function(e, t, i) {
    Er(i);
    var r = e._gsap;
    if (r.spacerIsNative)
        Er(r.spacerState);
    else if (e._gsap.swappedIn) {
        var n = t.parentNode;
        n && (n.insertBefore(e, t),
        n.removeChild(t))
    }
    e._gsap.swappedIn = !1
}, As = function(e, t, i, r) {
    if (!e._gsap.swappedIn) {
        for (var n = ao.length, o = t.style, a = e.style, l; n--; )
            l = ao[n],
            o[l] = i[l];
        o.position = i.position === "absolute" ? "absolute" : "relative",
        i.display === "inline" && (o.display = "inline-block"),
        a[Io] = a[Lo] = "auto",
        o.flexBasis = i.flexBasis || "auto",
        o.overflow = "visible",
        o.boxSizing = "border-box",
        o[er] = no(e, it) + Ve,
        o[tr] = no(e, ke) + Ve,
        o[Ee] = a[Ot] = a[Kl] = a[jl] = "0",
        Er(r),
        a[er] = a["max" + Or] = i[er],
        a[tr] = a["max" + Do] = i[tr],
        a[Ee] = i[Ee],
        e.parentNode !== t && (e.parentNode.insertBefore(t, e),
        t.appendChild(e)),
        e._gsap.swappedIn = !0
    }
}, td = /([A-Z])/g, Er = function(e) {
    if (e) {
        var t = e.t.style, i = e.length, r = 0, n, o;
        for ((e.t._gsap || F.core.getCache(e.t)).uncache = 1; r < i; r += 2)
            o = e[r + 1],
            n = e[r],
            o ? t[n] = o : t[n] && t.removeProperty(n.replace(td, "-$1").toLowerCase())
    }
}, kn = function(e) {
    for (var t = Gn.length, i = e.style, r = [], n = 0; n < t; n++)
        r.push(Gn[n], i[Gn[n]]);
    return r.t = e,
    r
}, id = function(e, t, i) {
    for (var r = [], n = e.length, o = i ? 8 : 0, a; o < n; o += 2)
        a = e[o],
        r.push(a, a in t ? t[a] : e[o + 1]);
    return r.t = e.t,
    r
}, Hn = {
    left: 0,
    top: 0
}, _a = function(e, t, i, r, n, o, a, l, u, c, f, p, d, g) {
    rt(e) && (e = e(l)),
    St(e) && e.substr(0, 3) === "max" && (e = p + (e.charAt(4) === "=" ? qn("0" + e.substr(3), i) : 0));
    var h = d ? d.time() : 0, v, y, m;
    if (d && d.seek(0),
    isNaN(e) || (e = +e),
    Bn(e))
        d && (e = F.utils.mapRange(d.scrollTrigger.start, d.scrollTrigger.end, 0, p, e)),
        a && Vn(a, i, r, !0);
    else {
        rt(t) && (t = t(l));
        var _ = (e || "0").split(" "), w, S, b, E;
        m = at(t, l) || oe,
        w = ci(m) || {},
        (!w || !w.left && !w.top) && Lt(m).display === "none" && (E = m.style.display,
        m.style.display = "block",
        w = ci(m),
        E ? m.style.display = E : m.style.removeProperty("display")),
        S = qn(_[0], w[r.d]),
        b = qn(_[1] || "0", i),
        e = w[r.p] - u[r.p] - c + S + n - b,
        a && Vn(a, b, r, i - b < 20 || a._isStart && b > 20),
        i -= i - b
    }
    if (g && (l[g] = e || -.001,
    e < 0 && (e = 0)),
    o) {
        var P = e + i
          , C = o._isStart;
        v = "scroll" + r.d2,
        Vn(o, P, r, C && P > 20 || !C && (f ? Math.max(oe[v], Wt[v]) : o.parentNode[v]) <= P + 1),
        f && (u = ci(a),
        f && (o.style[r.op.p] = u[r.op.p] - r.op.m - o._offset + Ve))
    }
    return d && m && (v = ci(m),
    d.seek(p),
    y = ci(m),
    d._caScrollDist = v[r.p] - y[r.p],
    e = e / d._caScrollDist * p),
    d && d.seek(h),
    d ? e : Math.round(e)
}, rd = /(webkit|moz|length|cssText|inset)/i, va = function(e, t, i, r) {
    if (e.parentNode !== t) {
        var n = e.style, o, a;
        if (t === oe) {
            e._stOrig = n.cssText,
            a = Lt(e);
            for (o in a)
                !+o && !rd.test(o) && a[o] && typeof n[o] == "string" && o !== "0" && (n[o] = a[o]);
            n.top = i,
            n.left = r
        } else
            n.cssText = e._stOrig;
        F.core.getCache(e).uncache = 1,
        t.appendChild(e)
    }
}, iu = function(e, t, i) {
    var r = t
      , n = r;
    return function(o) {
        var a = Math.round(e());
        return a !== r && a !== n && Math.abs(a - r) > 3 && Math.abs(a - n) > 3 && (o = a,
        i && i()),
        n = r,
        r = o,
        o
    }
}, On = function(e, t, i) {
    var r = {};
    r[t.p] = "+=" + i,
    F.set(e, r)
}, ya = function(e, t) {
    var i = Li(e, t)
      , r = "_scroll" + t.p2
      , n = function o(a, l, u, c, f) {
        var p = o.tween
          , d = l.onComplete
          , g = {};
        u = u || i();
        var h = iu(i, u, function() {
            p.kill(),
            o.tween = 0
        });
        return f = c && f || 0,
        c = c || a - u,
        p && p.kill(),
        l[r] = a,
        l.modifiers = g,
        g[r] = function() {
            return h(u + c * p.ratio + f * p.ratio * p.ratio)
        }
        ,
        l.onUpdate = function() {
            U.cache++,
            pi()
        }
        ,
        l.onComplete = function() {
            o.tween = 0,
            d && d.call(p)
        }
        ,
        p = o.tween = F.to(e, l),
        p
    };
    return e[r] = i,
    i.wheelHandler = function() {
        return n.tween && n.tween.kill() && (n.tween = 0)
    }
    ,
    De(e, "wheel", i.wheelHandler),
    W.isTouch && De(e, "touchmove", i.wheelHandler),
    n
}, W = function() {
    function s(t, i) {
        hr || s.register(F) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
        ro(this),
        this.init(t, i)
    }
    var e = s.prototype;
    return e.init = function(i, r) {
        if (this.progress = this.start = 0,
        this.vars && this.kill(!0, !0),
        !Gr) {
            this.update = this.refresh = this.kill = Zt;
            return
        }
        i = pa(St(i) || Bn(i) || i.nodeType ? {
            trigger: i
        } : i, Mn);
        var n = i, o = n.onUpdate, a = n.toggleClass, l = n.id, u = n.onToggle, c = n.onRefresh, f = n.scrub, p = n.trigger, d = n.pin, g = n.pinSpacing, h = n.invalidateOnRefresh, v = n.anticipatePin, y = n.onScrubComplete, m = n.onSnapComplete, _ = n.once, w = n.snap, S = n.pinReparent, b = n.pinSpacer, E = n.containerAnimation, P = n.fastScrollEnd, C = n.preventOverlaps, T = i.horizontal || i.containerAnimation && i.horizontal !== !1 ? it : ke, A = !f && f !== 0, k = at(i.scroller || j), L = F.core.getCache(k), I = nr(k), D = ("pinType"in i ? i.pinType : Ai(k, "pinType") || I && "fixed") === "fixed", N = [i.onEnter, i.onLeave, i.onEnterBack, i.onLeaveBack], B = A && i.toggleActions.split(" "), z = "markers"in i ? i.markers : Mn.markers, $ = I ? 0 : parseFloat(Lt(k)["border" + T.p2 + Or]) || 0, x = this, G = i.onRefreshInit && function() {
            return i.onRefreshInit(x)
        }
        , ae = Xc(k, I, T), ye = Uc(k, I), ie = 0, pe = 0, Re = 0, he = Li(k, T), Fe, Oe, me, nt, Xt, ee, Te, st, mt, M, gt, si, Di, be, zi, Ri, Lr, Ne, we, Nt, Bt, Fi, oi, Ut, ot, Ni, lr, ur, Bi, _i, vi, Z, qi, qt, Vt, $t, Vi, cr, ai;
        if (x._startClamp = x._endClamp = !1,
        x._dir = T,
        v *= 45,
        x.scroller = k,
        x.scroll = E ? E.time.bind(E) : he,
        nt = he(),
        x.vars = i,
        r = r || i.animation,
        "refreshPriority"in i && (ql = 1,
        i.refreshPriority === -9999 && (nn = x)),
        L.tweenScroll = L.tweenScroll || {
            top: ya(k, ke),
            left: ya(k, it)
        },
        x.tweenTo = Fe = L.tweenScroll[T.p],
        x.scrubDuration = function(R) {
            qi = Bn(R) && R,
            qi ? Z ? Z.duration(R) : Z = F.to(r, {
                ease: "expo",
                totalProgress: "+=0",
                duration: qi,
                paused: !0,
                onComplete: function() {
                    return y && y(x)
                }
            }) : (Z && Z.progress(1).kill(),
            Z = 0)
        }
        ,
        r && (r.vars.lazy = !1,
        r._initted && !x.isReverted || r.vars.immediateRender !== !1 && i.immediateRender !== !1 && r.duration() && r.render(0, !0, !0),
        x.animation = r.pause(),
        r.scrollTrigger = x,
        x.scrubDuration(f),
        _i = 0,
        l || (l = r.vars.id)),
        w && ((!Xi(w) || w.push) && (w = {
            snapTo: w
        }),
        "scrollBehavior"in oe.style && F.set(I ? [oe, Wt] : k, {
            scrollBehavior: "auto"
        }),
        U.forEach(function(R) {
            return rt(R) && R.target === (I ? ce.scrollingElement || Wt : k) && (R.smooth = !1)
        }),
        me = rt(w.snapTo) ? w.snapTo : w.snapTo === "labels" ? Kc(r) : w.snapTo === "labelsDirectional" ? Qc(r) : w.directional !== !1 ? function(R, Q) {
            return zo(w.snapTo)(R, tt() - pe < 500 ? 0 : Q.direction)
        }
        : F.utils.snap(w.snapTo),
        qt = w.duration || {
            min: .1,
            max: 2
        },
        qt = Xi(qt) ? yr(qt.min, qt.max) : yr(qt, qt),
        Vt = F.delayedCall(w.delay || qi / 2 || .1, function() {
            var R = he()
              , Q = tt() - pe < 500
              , V = Fe.tween;
            if ((Q || Math.abs(x.getVelocity()) < 10) && !V && !ps && ie !== R) {
                var X = (R - ee) / be
                  , Le = r && !A ? r.totalProgress() : X
                  , J = Q ? 0 : (Le - vi) / (tt() - Nn) * 1e3 || 0
                  , Se = F.utils.clamp(-X, 1 - X, fr(J / 2) * J / .185)
                  , Ke = X + (w.inertia === !1 ? 0 : Se)
                  , Be = yr(0, 1, me(Ke, x))
                  , le = Math.round(ee + Be * be)
                  , re = w
                  , Gt = re.onStart
                  , ue = re.onInterrupt
                  , _t = re.onComplete;
                if (R <= Te && R >= ee && le !== R) {
                    if (V && !V._initted && V.data <= fr(le - R))
                        return;
                    w.inertia === !1 && (Se = Be - X),
                    Fe(le, {
                        duration: qt(fr(Math.max(fr(Ke - Le), fr(Be - Le)) * .185 / J / .05 || 0)),
                        ease: w.ease || "power3",
                        data: fr(le - R),
                        onInterrupt: function() {
                            return Vt.restart(!0) && ue && ue(x)
                        },
                        onComplete: function() {
                            x.update(),
                            ie = he(),
                            _i = vi = r && !A ? r.totalProgress() : x.progress,
                            m && m(x),
                            _t && _t(x)
                        }
                    }, R, Se * be, le - R - Se * be),
                    Gt && Gt(x, Fe.tween)
                }
            } else
                x.isActive && ie !== R && Vt.restart(!0)
        }).pause()),
        l && (so[l] = x),
        p = x.trigger = at(p || d !== !0 && d),
        ai = p && p._gsap && p._gsap.stRevert,
        ai && (ai = ai(x)),
        d = d === !0 ? p : at(d),
        St(a) && (a = {
            targets: p,
            className: a
        }),
        d && (g === !1 || g === Ot || (g = !g && d.parentNode && d.parentNode.style && Lt(d.parentNode).display === "flex" ? !1 : Ee),
        x.pin = d,
        Oe = F.core.getCache(d),
        Oe.spacer ? zi = Oe.pinState : (b && (b = at(b),
        b && !b.nodeType && (b = b.current || b.nativeElement),
        Oe.spacerIsNative = !!b,
        b && (Oe.spacerState = kn(b))),
        Oe.spacer = Ne = b || ce.createElement("div"),
        Ne.classList.add("pin-spacer"),
        l && Ne.classList.add("pin-spacer-" + l),
        Oe.pinState = zi = kn(d)),
        i.force3D !== !1 && F.set(d, {
            force3D: !0
        }),
        x.spacer = Ne = Oe.spacer,
        Bi = Lt(d),
        Ut = Bi[g + T.os2],
        Nt = F.getProperty(d),
        Bt = F.quickSetter(d, T.a, Ve),
        As(d, Ne, Bi),
        Lr = kn(d)),
        z) {
            si = Xi(z) ? pa(z, ha) : ha,
            M = An("scroller-start", l, k, T, si, 0),
            gt = An("scroller-end", l, k, T, si, 0, M),
            we = M["offset" + T.op.d2];
            var H = at(Ai(k, "content") || k);
            st = this.markerStart = An("start", l, H, T, si, we, 0, E),
            mt = this.markerEnd = An("end", l, H, T, si, we, 0, E),
            E && (cr = F.quickSetter([st, mt], T.a, Ve)),
            !D && !(ri.length && Ai(k, "fixedMarkers") === !0) && (jc(I ? oe : k),
            F.set([M, gt], {
                force3D: !0
            }),
            Ni = F.quickSetter(M, T.a, Ve),
            ur = F.quickSetter(gt, T.a, Ve))
        }
        if (E) {
            var q = E.vars.onUpdate
              , te = E.vars.onUpdateParams;
            E.eventCallback("onUpdate", function() {
                x.update(0, 0, 1),
                q && q.apply(E, te || [])
            })
        }
        if (x.previous = function() {
            return Y[Y.indexOf(x) - 1]
        }
        ,
        x.next = function() {
            return Y[Y.indexOf(x) + 1]
        }
        ,
        x.revert = function(R, Q) {
            if (!Q)
                return x.kill(!0);
            var V = R !== !1 || !x.enabled
              , X = Ye;
            V !== x.isReverted && (V && ($t = Math.max(he(), x.scroll.rec || 0),
            Re = x.progress,
            Vi = r && r.progress()),
            st && [st, mt, M, gt].forEach(function(Le) {
                return Le.style.display = V ? "none" : "block"
            }),
            V && (Ye = x,
            x.update(V)),
            d && (!S || !x.isActive) && (V ? ed(d, Ne, zi) : As(d, Ne, Lt(d), ot)),
            V || x.update(V),
            Ye = X,
            x.isReverted = V)
        }
        ,
        x.refresh = function(R, Q, V, X) {
            if (!((Ye || !x.enabled) && !Q)) {
                if (d && R && Rt) {
                    De(s, "scrollEnd", Zl);
                    return
                }
                !et && G && G(x),
                Ye = x,
                Fe.tween && !V && (Fe.tween.kill(),
                Fe.tween = 0),
                Z && Z.pause(),
                h && r && r.revert({
                    kill: !1
                }).invalidate(),
                x.isReverted || x.revert(!0, !0),
                x._subPinOffset = !1;
                var Le = ae(), J = ye(), Se = E ? E.duration() : fi(k, T), Ke = be <= .01, Be = 0, le = X || 0, re = Xi(V) ? V.end : i.end, Gt = i.endTrigger || p, ue = Xi(V) ? V.start : i.start || (i.start === 0 || !p ? 0 : d ? "0 0" : "0 100%"), _t = x.pinnedContainer = i.pinnedContainer && at(i.pinnedContainer, x), jt = p && Math.max(0, Y.indexOf(x)) || 0, vt = jt, qe, He, $i, mn, We, Me, Kt, hs, Bo, Ir, Qt, Dr, gn;
                for (z && Xi(V) && (Dr = F.getProperty(M, T.p),
                gn = F.getProperty(gt, T.p)); vt--; )
                    Me = Y[vt],
                    Me.end || Me.refresh(0, 1) || (Ye = x),
                    Kt = Me.pin,
                    Kt && (Kt === p || Kt === d || Kt === _t) && !Me.isReverted && (Ir || (Ir = []),
                    Ir.unshift(Me),
                    Me.revert(!0, !0)),
                    Me !== Y[vt] && (jt--,
                    vt--);
                for (rt(ue) && (ue = ue(x)),
                ue = ua(ue, "start", x),
                ee = _a(ue, p, Le, T, he(), st, M, x, J, $, D, Se, E, x._startClamp && "_startClamp") || (d ? -.001 : 0),
                rt(re) && (re = re(x)),
                St(re) && !re.indexOf("+=") && (~re.indexOf(" ") ? re = (St(ue) ? ue.split(" ")[0] : "") + re : (Be = qn(re.substr(2), Le),
                re = St(ue) ? ue : (E ? F.utils.mapRange(0, E.duration(), E.scrollTrigger.start, E.scrollTrigger.end, ee) : ee) + Be,
                Gt = p)),
                re = ua(re, "end", x),
                Te = Math.max(ee, _a(re || (Gt ? "100% 0" : Se), Gt, Le, T, he() + Be, mt, gt, x, J, $, D, Se, E, x._endClamp && "_endClamp")) || -.001,
                Be = 0,
                vt = jt; vt--; )
                    Me = Y[vt],
                    Kt = Me.pin,
                    Kt && Me.start - Me._pinPush <= ee && !E && Me.end > 0 && (qe = Me.end - (x._startClamp ? Math.max(0, Me.start) : Me.start),
                    (Kt === p && Me.start - Me._pinPush < ee || Kt === _t) && isNaN(ue) && (Be += qe * (1 - Me.progress)),
                    Kt === d && (le += qe));
                if (ee += Be,
                Te += Be,
                x._startClamp && (x._startClamp += Be),
                x._endClamp && !et && (x._endClamp = Te || -.001,
                Te = Math.min(Te, fi(k, T))),
                be = Te - ee || (ee -= .01) && .001,
                Ke && (Re = F.utils.clamp(0, 1, F.utils.normalize(ee, Te, $t))),
                x._pinPush = le,
                st && Be && (qe = {},
                qe[T.a] = "+=" + Be,
                _t && (qe[T.p] = "-=" + he()),
                F.set([st, mt], qe)),
                d)
                    qe = Lt(d),
                    mn = T === ke,
                    $i = he(),
                    Fi = parseFloat(Nt(T.a)) + le,
                    !Se && Te > 1 && (Qt = (I ? ce.scrollingElement || Wt : k).style,
                    Qt = {
                        style: Qt,
                        value: Qt["overflow" + T.a.toUpperCase()]
                    },
                    I && Lt(oe)["overflow" + T.a.toUpperCase()] !== "scroll" && (Qt.style["overflow" + T.a.toUpperCase()] = "scroll")),
                    As(d, Ne, qe),
                    Lr = kn(d),
                    He = ci(d, !0),
                    hs = D && Li(k, mn ? it : ke)(),
                    g && (ot = [g + T.os2, be + le + Ve],
                    ot.t = Ne,
                    vt = g === Ee ? no(d, T) + be + le : 0,
                    vt && ot.push(T.d, vt + Ve),
                    Er(ot),
                    _t && Y.forEach(function(zr) {
                        zr.pin === _t && zr.vars.pinSpacing !== !1 && (zr._subPinOffset = !0)
                    }),
                    D && he($t)),
                    D && (We = {
                        top: He.top + (mn ? $i - ee : hs) + Ve,
                        left: He.left + (mn ? hs : $i - ee) + Ve,
                        boxSizing: "border-box",
                        position: "fixed"
                    },
                    We[er] = We["max" + Or] = Math.ceil(He.width) + Ve,
                    We[tr] = We["max" + Do] = Math.ceil(He.height) + Ve,
                    We[Ot] = We[Ot + tn] = We[Ot + Jr] = We[Ot + rn] = We[Ot + en] = "0",
                    We[Ee] = qe[Ee],
                    We[Ee + tn] = qe[Ee + tn],
                    We[Ee + Jr] = qe[Ee + Jr],
                    We[Ee + rn] = qe[Ee + rn],
                    We[Ee + en] = qe[Ee + en],
                    Ri = id(zi, We, S),
                    et && he(0)),
                    r ? (Bo = r._initted,
                    bs(1),
                    r.render(r.duration(), !0, !0),
                    oi = Nt(T.a) - Fi + be + le,
                    lr = Math.abs(be - oi) > 1,
                    D && lr && Ri.splice(Ri.length - 2, 2),
                    r.render(0, !0, !0),
                    Bo || r.invalidate(!0),
                    r.parent || r.totalTime(r.totalTime()),
                    bs(0)) : oi = be,
                    Qt && (Qt.value ? Qt.style["overflow" + T.a.toUpperCase()] = Qt.value : Qt.style.removeProperty("overflow-" + T.a));
                else if (p && he() && !E)
                    for (He = p.parentNode; He && He !== oe; )
                        He._pinOffset && (ee -= He._pinOffset,
                        Te -= He._pinOffset),
                        He = He.parentNode;
                Ir && Ir.forEach(function(zr) {
                    return zr.revert(!1, !0)
                }),
                x.start = ee,
                x.end = Te,
                nt = Xt = et ? $t : he(),
                !E && !et && (nt < $t && he($t),
                x.scroll.rec = 0),
                x.revert(!1, !0),
                pe = tt(),
                Vt && (ie = -1,
                Vt.restart(!0)),
                Ye = 0,
                r && A && (r._initted || Vi) && r.progress() !== Vi && r.progress(Vi || 0, !0).render(r.time(), !0, !0),
                (Ke || Re !== x.progress || E) && (r && !A && r.totalProgress(E && ee < -.001 && !Re ? F.utils.normalize(ee, Te, 0) : Re, !0),
                x.progress = Ke || (nt - ee) / be === Re ? 0 : Re),
                d && g && (Ne._pinOffset = Math.round(x.progress * oi)),
                Z && Z.invalidate(),
                isNaN(Dr) || (Dr -= F.getProperty(M, T.p),
                gn -= F.getProperty(gt, T.p),
                On(M, T, Dr),
                On(st, T, Dr - (X || 0)),
                On(gt, T, gn),
                On(mt, T, gn - (X || 0))),
                Ke && !et && x.update(),
                c && !et && !Di && (Di = !0,
                c(x),
                Di = !1)
            }
        }
        ,
        x.getVelocity = function() {
            return (he() - Xt) / (tt() - Nn) * 1e3 || 0
        }
        ,
        x.endAnimation = function() {
            Br(x.callbackAnimation),
            r && (Z ? Z.progress(1) : r.paused() ? A || Br(r, x.direction < 0, 1) : Br(r, r.reversed()))
        }
        ,
        x.labelToScroll = function(R) {
            return r && r.labels && (ee || x.refresh() || ee) + r.labels[R] / r.duration() * be || 0
        }
        ,
        x.getTrailing = function(R) {
            var Q = Y.indexOf(x)
              , V = x.direction > 0 ? Y.slice(0, Q).reverse() : Y.slice(Q + 1);
            return (St(R) ? V.filter(function(X) {
                return X.vars.preventOverlaps === R
            }) : V).filter(function(X) {
                return x.direction > 0 ? X.end <= ee : X.start >= Te
            })
        }
        ,
        x.update = function(R, Q, V) {
            if (!(E && !V && !R)) {
                var X = et === !0 ? $t : x.scroll(), Le = R ? 0 : (X - ee) / be, J = Le < 0 ? 0 : Le > 1 ? 1 : Le || 0, Se = x.progress, Ke, Be, le, re, Gt, ue, _t, jt;
                if (Q && (Xt = nt,
                nt = E ? he() : X,
                w && (vi = _i,
                _i = r && !A ? r.totalProgress() : J)),
                v && !J && d && !Ye && !bn && Rt && ee < X + (X - Xt) / (tt() - Nn) * v && (J = 1e-4),
                J !== Se && x.enabled) {
                    if (Ke = x.isActive = !!J && J < 1,
                    Be = !!Se && Se < 1,
                    ue = Ke !== Be,
                    Gt = ue || !!J != !!Se,
                    x.direction = J > Se ? 1 : -1,
                    x.progress = J,
                    Gt && !Ye && (le = J && !Se ? 0 : J === 1 ? 1 : Se === 1 ? 2 : 3,
                    A && (re = !ue && B[le + 1] !== "none" && B[le + 1] || B[le],
                    jt = r && (re === "complete" || re === "reset" || re in r))),
                    C && (ue || jt) && (jt || f || !r) && (rt(C) ? C(x) : x.getTrailing(C).forEach(function($i) {
                        return $i.endAnimation()
                    })),
                    A || (Z && !Ye && !bn ? (Z._dp._time - Z._start !== Z._time && Z.render(Z._dp._time - Z._start),
                    Z.resetTo ? Z.resetTo("totalProgress", J, r._tTime / r._tDur) : (Z.vars.totalProgress = J,
                    Z.invalidate().restart())) : r && r.totalProgress(J, !!(Ye && (pe || R)))),
                    d) {
                        if (R && g && (Ne.style[g + T.os2] = Ut),
                        !D)
                            Bt(Hr(Fi + oi * J));
                        else if (Gt) {
                            if (_t = !R && J > Se && Te + 1 > X && X + 1 >= fi(k, T),
                            S)
                                if (!R && (Ke || _t)) {
                                    var vt = ci(d, !0)
                                      , qe = X - ee;
                                    va(d, oe, vt.top + (T === ke ? qe : 0) + Ve, vt.left + (T === ke ? 0 : qe) + Ve)
                                } else
                                    va(d, Ne);
                            Er(Ke || _t ? Ri : Lr),
                            lr && J < 1 && Ke || Bt(Fi + (J === 1 && !_t ? oi : 0))
                        }
                    }
                    w && !Fe.tween && !Ye && !bn && Vt.restart(!0),
                    a && (ue || _ && J && (J < 1 || !Es)) && is(a.targets).forEach(function($i) {
                        return $i.classList[Ke || _ ? "add" : "remove"](a.className)
                    }),
                    o && !A && !R && o(x),
                    Gt && !Ye ? (A && (jt && (re === "complete" ? r.pause().totalProgress(1) : re === "reset" ? r.restart(!0).pause() : re === "restart" ? r.restart(!0) : r[re]()),
                    o && o(x)),
                    (ue || !Es) && (u && ue && Ps(x, u),
                    N[le] && Ps(x, N[le]),
                    _ && (J === 1 ? x.kill(!1, 1) : N[le] = 0),
                    ue || (le = J === 1 ? 1 : 3,
                    N[le] && Ps(x, N[le]))),
                    P && !Ke && Math.abs(x.getVelocity()) > (Bn(P) ? P : 2500) && (Br(x.callbackAnimation),
                    Z ? Z.progress(1) : Br(r, re === "reverse" ? 1 : !J, 1))) : A && o && !Ye && o(x)
                }
                if (ur) {
                    var He = E ? X / E.duration() * (E._caScrollDist || 0) : X;
                    Ni(He + (M._isFlipped ? 1 : 0)),
                    ur(He)
                }
                cr && cr(-X / E.duration() * (E._caScrollDist || 0))
            }
        }
        ,
        x.enable = function(R, Q) {
            x.enabled || (x.enabled = !0,
            De(k, "resize", Wr),
            I || De(k, "scroll", pr),
            G && De(s, "refreshInit", G),
            R !== !1 && (x.progress = Re = 0,
            nt = Xt = ie = he()),
            Q !== !1 && x.refresh())
        }
        ,
        x.getTween = function(R) {
            return R && Fe ? Fe.tween : Z
        }
        ,
        x.setPositions = function(R, Q, V, X) {
            if (E) {
                var Le = E.scrollTrigger
                  , J = E.duration()
                  , Se = Le.end - Le.start;
                R = Le.start + Se * R / J,
                Q = Le.start + Se * Q / J
            }
            x.refresh(!1, !1, {
                start: ca(R, V && !!x._startClamp),
                end: ca(Q, V && !!x._endClamp)
            }, X),
            x.update()
        }
        ,
        x.adjustPinSpacing = function(R) {
            if (ot && R) {
                var Q = ot.indexOf(T.d) + 1;
                ot[Q] = parseFloat(ot[Q]) + R + Ve,
                ot[1] = parseFloat(ot[1]) + R + Ve,
                Er(ot)
            }
        }
        ,
        x.disable = function(R, Q) {
            if (x.enabled && (R !== !1 && x.revert(!0, !0),
            x.enabled = x.isActive = !1,
            Q || Z && Z.pause(),
            $t = 0,
            Oe && (Oe.uncache = 1),
            G && Ie(s, "refreshInit", G),
            Vt && (Vt.pause(),
            Fe.tween && Fe.tween.kill() && (Fe.tween = 0)),
            !I)) {
                for (var V = Y.length; V--; )
                    if (Y[V].scroller === k && Y[V] !== x)
                        return;
                Ie(k, "resize", Wr),
                I || Ie(k, "scroll", pr)
            }
        }
        ,
        x.kill = function(R, Q) {
            x.disable(R, Q),
            Z && !Q && Z.kill(),
            l && delete so[l];
            var V = Y.indexOf(x);
            V >= 0 && Y.splice(V, 1),
            V === Je && $n > 0 && Je--,
            V = 0,
            Y.forEach(function(X) {
                return X.scroller === x.scroller && (V = 1)
            }),
            V || et || (x.scroll.rec = 0),
            r && (r.scrollTrigger = null,
            R && r.revert({
                kill: !1
            }),
            Q || r.kill()),
            st && [st, mt, M, gt].forEach(function(X) {
                return X.parentNode && X.parentNode.removeChild(X)
            }),
            nn === x && (nn = 0),
            d && (Oe && (Oe.uncache = 1),
            V = 0,
            Y.forEach(function(X) {
                return X.pin === d && V++
            }),
            V || (Oe.spacer = 0)),
            i.onKill && i.onKill(x)
        }
        ,
        Y.push(x),
        x.enable(!1, !1),
        ai && ai(x),
        r && r.add && !be) {
            var ge = x.update;
            x.update = function() {
                x.update = ge,
                ee || Te || x.refresh()
            }
            ,
            F.delayedCall(.01, x.update),
            be = .01,
            ee = Te = 0
        } else
            x.refresh();
        d && Jc()
    }
    ,
    s.register = function(i) {
        return hr || (F = i || Yl(),
        Wl() && window.document && s.enable(),
        hr = Gr),
        hr
    }
    ,
    s.defaults = function(i) {
        if (i)
            for (var r in i)
                Mn[r] = i[r];
        return Mn
    }
    ,
    s.disable = function(i, r) {
        Gr = 0,
        Y.forEach(function(o) {
            return o[r ? "kill" : "disable"](i)
        }),
        Ie(j, "wheel", pr),
        Ie(ce, "scroll", pr),
        clearInterval(Tn),
        Ie(ce, "touchcancel", Zt),
        Ie(oe, "touchstart", Zt),
        Cn(Ie, ce, "pointerdown,touchstart,mousedown", da),
        Cn(Ie, ce, "pointerup,touchend,mouseup", fa),
        ts.kill(),
        En(Ie);
        for (var n = 0; n < U.length; n += 3)
            Pn(Ie, U[n], U[n + 1]),
            Pn(Ie, U[n], U[n + 2])
    }
    ,
    s.enable = function() {
        if (j = window,
        ce = document,
        Wt = ce.documentElement,
        oe = ce.body,
        F && (is = F.utils.toArray,
        yr = F.utils.clamp,
        ro = F.core.context || Zt,
        bs = F.core.suppressOverwrites || Zt,
        ko = j.history.scrollRestoration || "auto",
        oo = j.pageYOffset,
        F.core.globals("ScrollTrigger", s),
        oe)) {
            Gr = 1,
            br = document.createElement("div"),
            br.style.height = "100vh",
            br.style.position = "absolute",
            tu(),
            Yc(),
            Pe.register(F),
            s.isTouch = Pe.isTouch,
            wi = Pe.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),
            De(j, "wheel", pr),
            Bl = [j, ce, Wt, oe],
            F.matchMedia ? (s.matchMedia = function(l) {
                var u = F.matchMedia(), c;
                for (c in l)
                    u.add(c, l[c]);
                return u
            }
            ,
            F.addEventListener("matchMediaInit", function() {
                return Ro()
            }),
            F.addEventListener("matchMediaRevert", function() {
                return Jl()
            }),
            F.addEventListener("matchMedia", function() {
                ji(0, 1),
                or("matchMedia")
            }),
            F.matchMedia("(orientation: portrait)", function() {
                return Ms(),
                Ms
            })) : console.warn("Requires GSAP 3.11.0 or later"),
            Ms(),
            De(ce, "scroll", pr);
            var i = oe.style, r = i.borderTopStyle, n = F.core.Animation.prototype, o, a;
            for (n.revert || Object.defineProperty(n, "revert", {
                value: function() {
                    return this.time(-.01, !0)
                }
            }),
            i.borderTopStyle = "solid",
            o = ci(oe),
            ke.m = Math.round(o.top + ke.sc()) || 0,
            it.m = Math.round(o.left + it.sc()) || 0,
            r ? i.borderTopStyle = r : i.removeProperty("border-top-style"),
            Tn = setInterval(ma, 250),
            F.delayedCall(.5, function() {
                return bn = 0
            }),
            De(ce, "touchcancel", Zt),
            De(oe, "touchstart", Zt),
            Cn(De, ce, "pointerdown,touchstart,mousedown", da),
            Cn(De, ce, "pointerup,touchend,mouseup", fa),
            io = F.utils.checkPrefix("transform"),
            Gn.push(io),
            hr = tt(),
            ts = F.delayedCall(.2, ji).pause(),
            mr = [ce, "visibilitychange", function() {
                var l = j.innerWidth
                  , u = j.innerHeight;
                ce.hidden ? (aa = l,
                la = u) : (aa !== l || la !== u) && Wr()
            }
            , ce, "DOMContentLoaded", ji, j, "load", ji, j, "resize", Wr],
            En(De),
            Y.forEach(function(l) {
                return l.enable(0, 1)
            }),
            a = 0; a < U.length; a += 3)
                Pn(Ie, U[a], U[a + 1]),
                Pn(Ie, U[a], U[a + 2])
        }
    }
    ,
    s.config = function(i) {
        "limitCallbacks"in i && (Es = !!i.limitCallbacks);
        var r = i.syncInterval;
        r && clearInterval(Tn) || (Tn = r) && setInterval(ma, r),
        "ignoreMobileResize"in i && ($l = s.isTouch === 1 && i.ignoreMobileResize),
        "autoRefreshEvents"in i && (En(Ie) || En(De, i.autoRefreshEvents || "none"),
        Vl = (i.autoRefreshEvents + "").indexOf("resize") === -1)
    }
    ,
    s.scrollerProxy = function(i, r) {
        var n = at(i)
          , o = U.indexOf(n)
          , a = nr(n);
        ~o && U.splice(o, a ? 6 : 2),
        r && (a ? ri.unshift(j, r, oe, r, Wt, r) : ri.unshift(n, r))
    }
    ,
    s.clearMatchMedia = function(i) {
        Y.forEach(function(r) {
            return r._ctx && r._ctx.query === i && r._ctx.kill(!0, !0)
        })
    }
    ,
    s.isInViewport = function(i, r, n) {
        var o = (St(i) ? at(i) : i).getBoundingClientRect()
          , a = o[n ? er : tr] * r || 0;
        return n ? o.right - a > 0 && o.left + a < j.innerWidth : o.bottom - a > 0 && o.top + a < j.innerHeight
    }
    ,
    s.positionInViewport = function(i, r, n) {
        St(i) && (i = at(i));
        var o = i.getBoundingClientRect()
          , a = o[n ? er : tr]
          , l = r == null ? a / 2 : r in rs ? rs[r] * a : ~r.indexOf("%") ? parseFloat(r) * a / 100 : parseFloat(r) || 0;
        return n ? (o.left + l) / j.innerWidth : (o.top + l) / j.innerHeight
    }
    ,
    s.killAll = function(i) {
        if (Y.slice(0).forEach(function(n) {
            return n.vars.id !== "ScrollSmoother" && n.kill()
        }),
        i !== !0) {
            var r = sr.killAll || [];
            sr = {},
            r.forEach(function(n) {
                return n()
            })
        }
    }
    ,
    s
}();
W.version = "3.12.2";
W.saveStyles = function(s) {
    return s ? is(s).forEach(function(e) {
        if (e && e.style) {
            var t = wt.indexOf(e);
            t >= 0 && wt.splice(t, 5),
            wt.push(e, e.style.cssText, e.getBBox && e.getAttribute("transform"), F.core.getCache(e), ro())
        }
    }) : wt
}
;
W.revert = function(s, e) {
    return Ro(!s, e)
}
;
W.create = function(s, e) {
    return new W(s,e)
}
;
W.refresh = function(s) {
    return s ? Wr() : (hr || W.register()) && ji(!0)
}
;
W.update = function(s) {
    return ++U.cache && pi(s === !0 ? 2 : 0)
}
;
W.clearScrollMemory = eu;
W.maxScroll = function(s, e) {
    return fi(s, e ? it : ke)
}
;
W.getScrollFunc = function(s, e) {
    return Li(at(s), e ? it : ke)
}
;
W.getById = function(s) {
    return so[s]
}
;
W.getAll = function() {
    return Y.filter(function(s) {
        return s.vars.id !== "ScrollSmoother"
    })
}
;
W.isScrolling = function() {
    return !!Rt
}
;
W.snapDirectional = zo;
W.addEventListener = function(s, e) {
    var t = sr[s] || (sr[s] = []);
    ~t.indexOf(e) || t.push(e)
}
;
W.removeEventListener = function(s, e) {
    var t = sr[s]
      , i = t && t.indexOf(e);
    i >= 0 && t.splice(i, 1)
}
;
W.batch = function(s, e) {
    var t = [], i = {}, r = e.interval || .016, n = e.batchMax || 1e9, o = function(u, c) {
        var f = []
          , p = []
          , d = F.delayedCall(r, function() {
            c(f, p),
            f = [],
            p = []
        }).pause();
        return function(g) {
            f.length || d.restart(!0),
            f.push(g.trigger),
            p.push(g),
            n <= f.length && d.progress(1)
        }
    }, a;
    for (a in e)
        i[a] = a.substr(0, 2) === "on" && rt(e[a]) && a !== "onRefreshInit" ? o(a, e[a]) : e[a];
    return rt(n) && (n = n(),
    De(W, "refresh", function() {
        return n = e.batchMax()
    })),
    is(s).forEach(function(l) {
        var u = {};
        for (a in i)
            u[a] = i[a];
        u.trigger = l,
        t.push(W.create(u))
    }),
    t
}
;
var wa = function(e, t, i, r) {
    return t > r ? e(r) : t < 0 && e(0),
    i > r ? (r - t) / (i - t) : i < 0 ? t / (t - i) : 1
}, ks = function s(e, t) {
    t === !0 ? e.style.removeProperty("touch-action") : e.style.touchAction = t === !0 ? "auto" : t ? "pan-" + t + (Pe.isTouch ? " pinch-zoom" : "") : "none",
    e === Wt && s(oe, t)
}, Ln = {
    auto: 1,
    scroll: 1
}, nd = function(e) {
    var t = e.event, i = e.target, r = e.axis, n = (t.changedTouches ? t.changedTouches[0] : t).target, o = n._gsap || F.core.getCache(n), a = tt(), l;
    if (!o._isScrollT || a - o._isScrollT > 2e3) {
        for (; n && n !== oe && (n.scrollHeight <= n.clientHeight && n.scrollWidth <= n.clientWidth || !(Ln[(l = Lt(n)).overflowY] || Ln[l.overflowX])); )
            n = n.parentNode;
        o._isScroll = n && n !== i && !nr(n) && (Ln[(l = Lt(n)).overflowY] || Ln[l.overflowX]),
        o._isScrollT = a
    }
    (o._isScroll || r === "x") && (t.stopPropagation(),
    t._gsapAllow = !0)
}, ru = function(e, t, i, r) {
    return Pe.create({
        target: e,
        capture: !0,
        debounce: !1,
        lockAxis: !0,
        type: t,
        onWheel: r = r && nd,
        onPress: r,
        onDrag: r,
        onScroll: r,
        onEnable: function() {
            return i && De(ce, Pe.eventTypes[0], xa, !1, !0)
        },
        onDisable: function() {
            return Ie(ce, Pe.eventTypes[0], xa, !0)
        }
    })
}, sd = /(input|label|select|textarea)/i, Sa, xa = function(e) {
    var t = sd.test(e.target.tagName);
    (t || Sa) && (e._gsapAllow = !0,
    Sa = t)
}, od = function(e) {
    Xi(e) || (e = {}),
    e.preventDefault = e.isNormalizer = e.allowClicks = !0,
    e.type || (e.type = "wheel,touch"),
    e.debounce = !!e.debounce,
    e.id = e.id || "normalizer";
    var t = e, i = t.normalizeScrollX, r = t.momentum, n = t.allowNestedScroll, o = t.onRelease, a, l, u = at(e.target) || Wt, c = F.core.globals().ScrollSmoother, f = c && c.get(), p = wi && (e.content && at(e.content) || f && e.content !== !1 && !f.smooth() && f.content()), d = Li(u, ke), g = Li(u, it), h = 1, v = (Pe.isTouch && j.visualViewport ? j.visualViewport.scale * j.visualViewport.width : j.outerWidth) / j.innerWidth, y = 0, m = rt(r) ? function() {
        return r(a)
    }
    : function() {
        return r || 2.8
    }
    , _, w, S = ru(u, e.type, !0, n), b = function() {
        return w = !1
    }, E = Zt, P = Zt, C = function() {
        l = fi(u, ke),
        P = yr(wi ? 1 : 0, l),
        i && (E = yr(0, fi(u, it))),
        _ = ir
    }, T = function() {
        p._gsap.y = Hr(parseFloat(p._gsap.y) + d.offset) + "px",
        p.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(p._gsap.y) + ", 0, 1)",
        d.offset = d.cacheID = 0
    }, A = function() {
        if (w) {
            requestAnimationFrame(b);
            var z = Hr(a.deltaY / 2)
              , $ = P(d.v - z);
            if (p && $ !== d.v + d.offset) {
                d.offset = $ - d.v;
                var x = Hr((parseFloat(p && p._gsap.y) || 0) - d.offset);
                p.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + x + ", 0, 1)",
                p._gsap.y = x + "px",
                d.cacheID = U.cache,
                pi()
            }
            return !0
        }
        d.offset && T(),
        w = !0
    }, k, L, I, D, N = function() {
        C(),
        k.isActive() && k.vars.scrollY > l && (d() > l ? k.progress(1) && d(l) : k.resetTo("scrollY", l))
    };
    return p && F.set(p, {
        y: "+=0"
    }),
    e.ignoreCheck = function(B) {
        return wi && B.type === "touchmove" && A() || h > 1.05 && B.type !== "touchstart" || a.isGesturing || B.touches && B.touches.length > 1
    }
    ,
    e.onPress = function() {
        w = !1;
        var B = h;
        h = Hr((j.visualViewport && j.visualViewport.scale || 1) / v),
        k.pause(),
        B !== h && ks(u, h > 1.01 ? !0 : i ? !1 : "x"),
        L = g(),
        I = d(),
        C(),
        _ = ir
    }
    ,
    e.onRelease = e.onGestureStart = function(B, z) {
        if (d.offset && T(),
        !z)
            D.restart(!0);
        else {
            U.cache++;
            var $ = m(), x, G;
            i && (x = g(),
            G = x + $ * .05 * -B.velocityX / .227,
            $ *= wa(g, x, G, fi(u, it)),
            k.vars.scrollX = E(G)),
            x = d(),
            G = x + $ * .05 * -B.velocityY / .227,
            $ *= wa(d, x, G, fi(u, ke)),
            k.vars.scrollY = P(G),
            k.invalidate().duration($).play(.01),
            (wi && k.vars.scrollY >= l || x >= l - 1) && F.to({}, {
                onUpdate: N,
                duration: $
            })
        }
        o && o(B)
    }
    ,
    e.onWheel = function() {
        k._ts && k.pause(),
        tt() - y > 1e3 && (_ = 0,
        y = tt())
    }
    ,
    e.onChange = function(B, z, $, x, G) {
        if (ir !== _ && C(),
        z && i && g(E(x[2] === z ? L + (B.startX - B.x) : g() + z - x[1])),
        $) {
            d.offset && T();
            var ae = G[2] === $
              , ye = ae ? I + B.startY - B.y : d() + $ - G[1]
              , ie = P(ye);
            ae && ye !== ie && (I += ie - ye),
            d(ie)
        }
        ($ || z) && pi()
    }
    ,
    e.onEnable = function() {
        ks(u, i ? !1 : "x"),
        W.addEventListener("refresh", N),
        De(j, "resize", N),
        d.smooth && (d.target.style.scrollBehavior = "auto",
        d.smooth = g.smooth = !1),
        S.enable()
    }
    ,
    e.onDisable = function() {
        ks(u, !0),
        Ie(j, "resize", N),
        W.removeEventListener("refresh", N),
        S.kill()
    }
    ,
    e.lockAxis = e.lockAxis !== !1,
    a = new Pe(e),
    a.iOS = wi,
    wi && !d() && d(1),
    wi && F.ticker.add(Zt),
    D = a._dc,
    k = F.to(a, {
        ease: "power4",
        paused: !0,
        scrollX: i ? "+=0.1" : "+=0",
        scrollY: "+=0.1",
        modifiers: {
            scrollY: iu(d, d(), function() {
                return k.pause()
            })
        },
        onUpdate: pi,
        onComplete: D.vars.onComplete
    }),
    a
};
W.sort = function(s) {
    return Y.sort(s || function(e, t) {
        return (e.vars.refreshPriority || 0) * -1e6 + e.start - (t.start + (t.vars.refreshPriority || 0) * -1e6)
    }
    )
}
;
W.observe = function(s) {
    return new Pe(s)
}
;
W.normalizeScroll = function(s) {
    if (typeof s > "u")
        return yt;
    if (s === !0 && yt)
        return yt.enable();
    if (s === !1)
        return yt && yt.kill();
    var e = s instanceof Pe ? s : od(s);
    return yt && yt.target === e.target && yt.kill(),
    nr(e.target) && (yt = e),
    e
}
;
W.core = {
    _getVelocityProp: to,
    _inputObserver: ru,
    _scrollers: U,
    _proxies: ri,
    bridge: {
        ss: function() {
            Rt || or("scrollStart"),
            Rt = tt()
        },
        ref: function() {
            return Ye
        }
    }
};
Yl() && F.registerPlugin(W);
function lo() {
    return lo = Object.assign ? Object.assign.bind() : function(s) {
        for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var i in t)
                Object.prototype.hasOwnProperty.call(t, i) && (s[i] = t[i])
        }
        return s
    }
    ,
    lo.apply(this, arguments)
}
function ns(s, e, t) {
    return Math.max(s, Math.min(e, t))
}
class ad {
    advance(e) {
        var t;
        if (!this.isRunning)
            return;
        let i = !1;
        if (this.lerp)
            this.value = (r = this.value,
            n = this.to,
            (1 - (o = 1 - Math.exp(-60 * this.lerp * e))) * r + o * n),
            Math.round(this.value) === this.to && (this.value = this.to,
            i = !0);
        else {
            this.currentTime += e;
            const a = ns(0, this.currentTime / this.duration, 1);
            i = a >= 1;
            const l = i ? 1 : this.easing(a);
            this.value = this.from + (this.to - this.from) * l
        }
        var r, n, o;
        (t = this.onUpdate) == null || t.call(this, this.value, i),
        i && this.stop()
    }
    stop() {
        this.isRunning = !1
    }
    fromTo(e, t, {lerp: i=.1, duration: r=1, easing: n=l=>l, onStart: o, onUpdate: a}) {
        this.from = this.value = e,
        this.to = t,
        this.lerp = i,
        this.duration = r,
        this.easing = n,
        this.currentTime = 0,
        this.isRunning = !0,
        o == null || o(),
        this.onUpdate = a
    }
}
class ld {
    constructor({wrapper: e, content: t, autoResize: i=!0}={}) {
        if (this.resize = ()=>{
            this.onWrapperResize(),
            this.onContentResize()
        }
        ,
        this.onWrapperResize = ()=>{
            this.wrapper === window ? (this.width = window.innerWidth,
            this.height = window.innerHeight) : (this.width = this.wrapper.clientWidth,
            this.height = this.wrapper.clientHeight)
        }
        ,
        this.onContentResize = ()=>{
            this.scrollHeight = this.content.scrollHeight,
            this.scrollWidth = this.content.scrollWidth
        }
        ,
        this.wrapper = e,
        this.content = t,
        i) {
            const r = function(n, o) {
                let a;
                return function() {
                    let l = arguments
                      , u = this;
                    clearTimeout(a),
                    a = setTimeout(function() {
                        n.apply(u, l)
                    }, 250)
                }
            }(this.resize);
            this.wrapper !== window && (this.wrapperResizeObserver = new ResizeObserver(r),
            this.wrapperResizeObserver.observe(this.wrapper)),
            this.contentResizeObserver = new ResizeObserver(r),
            this.contentResizeObserver.observe(this.content)
        }
        this.resize()
    }
    destroy() {
        var e, t;
        (e = this.wrapperResizeObserver) == null || e.disconnect(),
        (t = this.contentResizeObserver) == null || t.disconnect()
    }
    get limit() {
        return {
            x: this.scrollWidth - this.width,
            y: this.scrollHeight - this.height
        }
    }
}
class nu {
    constructor() {
        this.events = {}
    }
    emit(e, ...t) {
        let i = this.events[e] || [];
        for (let r = 0, n = i.length; r < n; r++)
            i[r](...t)
    }
    on(e, t) {
        var i;
        return (i = this.events[e]) != null && i.push(t) || (this.events[e] = [t]),
        ()=>{
            var r;
            this.events[e] = (r = this.events[e]) == null ? void 0 : r.filter(n=>t !== n)
        }
    }
    off(e, t) {
        var i;
        this.events[e] = (i = this.events[e]) == null ? void 0 : i.filter(r=>t !== r)
    }
    destroy() {
        this.events = {}
    }
}
class ud {
    constructor(e, {wheelMultiplier: t=1, touchMultiplier: i=2, normalizeWheel: r=!1}) {
        this.onTouchStart = n=>{
            const {clientX: o, clientY: a} = n.targetTouches ? n.targetTouches[0] : n;
            this.touchStart.x = o,
            this.touchStart.y = a,
            this.lastDelta = {
                x: 0,
                y: 0
            }
        }
        ,
        this.onTouchMove = n=>{
            const {clientX: o, clientY: a} = n.targetTouches ? n.targetTouches[0] : n
              , l = -(o - this.touchStart.x) * this.touchMultiplier
              , u = -(a - this.touchStart.y) * this.touchMultiplier;
            this.touchStart.x = o,
            this.touchStart.y = a,
            this.lastDelta = {
                x: l,
                y: u
            },
            this.emitter.emit("scroll", {
                deltaX: l,
                deltaY: u,
                event: n
            })
        }
        ,
        this.onTouchEnd = n=>{
            this.emitter.emit("scroll", {
                deltaX: this.lastDelta.x,
                deltaY: this.lastDelta.y,
                event: n
            })
        }
        ,
        this.onWheel = n=>{
            let {deltaX: o, deltaY: a} = n;
            this.normalizeWheel && (o = ns(-100, o, 100),
            a = ns(-100, a, 100)),
            o *= this.wheelMultiplier,
            a *= this.wheelMultiplier,
            this.emitter.emit("scroll", {
                deltaX: o,
                deltaY: a,
                event: n
            })
        }
        ,
        this.element = e,
        this.wheelMultiplier = t,
        this.touchMultiplier = i,
        this.normalizeWheel = r,
        this.touchStart = {
            x: null,
            y: null
        },
        this.emitter = new nu,
        this.element.addEventListener("wheel", this.onWheel, {
            passive: !1
        }),
        this.element.addEventListener("touchstart", this.onTouchStart, {
            passive: !1
        }),
        this.element.addEventListener("touchmove", this.onTouchMove, {
            passive: !1
        }),
        this.element.addEventListener("touchend", this.onTouchEnd, {
            passive: !1
        })
    }
    on(e, t) {
        return this.emitter.on(e, t)
    }
    destroy() {
        this.emitter.destroy(),
        this.element.removeEventListener("wheel", this.onWheel, {
            passive: !1
        }),
        this.element.removeEventListener("touchstart", this.onTouchStart, {
            passive: !1
        }),
        this.element.removeEventListener("touchmove", this.onTouchMove, {
            passive: !1
        }),
        this.element.removeEventListener("touchend", this.onTouchEnd, {
            passive: !1
        })
    }
}
class cd {
    constructor({wrapper: e=window, content: t=document.documentElement, wheelEventsTarget: i=e, eventsTarget: r=i, smoothWheel: n=!0, smoothTouch: o=!1, syncTouch: a=!1, syncTouchLerp: l=.1, __iosNoInertiaSyncTouchLerp: u=.4, touchInertiaMultiplier: c=35, duration: f, easing: p=S=>Math.min(1, 1.001 - Math.pow(2, -10 * S)), lerp: d=!f && .1, infinite: g=!1, orientation: h="vertical", gestureOrientation: v="vertical", touchMultiplier: y=1, wheelMultiplier: m=1, normalizeWheel: _=!1, autoResize: w=!0}={}) {
        this.onVirtualScroll = ({deltaX: S, deltaY: b, event: E})=>{
            if (E.ctrlKey)
                return;
            const P = E.type.includes("touch")
              , C = E.type.includes("wheel");
            if (this.options.gestureOrientation === "both" && S === 0 && b === 0 || this.options.gestureOrientation === "vertical" && b === 0 || this.options.gestureOrientation === "horizontal" && S === 0 || P && this.options.gestureOrientation === "vertical" && this.scroll === 0 && !this.options.infinite && b <= 0)
                return;
            let T = E.composedPath();
            if (T = T.slice(0, T.indexOf(this.rootElement)),
            T.find(I=>{
                var D;
                return (I.hasAttribute == null ? void 0 : I.hasAttribute("data-lenis-prevent")) || P && (I.hasAttribute == null ? void 0 : I.hasAttribute("data-lenis-prevent-touch")) || C && (I.hasAttribute == null ? void 0 : I.hasAttribute("data-lenis-prevent-wheel")) || ((D = I.classList) == null ? void 0 : D.contains("lenis"))
            }
            ))
                return;
            if (this.isStopped || this.isLocked)
                return void E.preventDefault();
            if (this.isSmooth = (this.options.smoothTouch || this.options.syncTouch) && P || this.options.smoothWheel && C,
            !this.isSmooth)
                return this.isScrolling = !1,
                void this.animate.stop();
            E.preventDefault();
            let A = b;
            this.options.gestureOrientation === "both" ? A = Math.abs(b) > Math.abs(S) ? b : S : this.options.gestureOrientation === "horizontal" && (A = S);
            const k = P && this.options.syncTouch
              , L = P && E.type === "touchend" && Math.abs(A) > 1;
            L && (A = this.velocity * this.options.touchInertiaMultiplier),
            this.scrollTo(this.targetScroll + A, lo({
                programmatic: !1
            }, k && {
                lerp: L ? this.syncTouchLerp : this.options.__iosNoInertiaSyncTouchLerp
            }))
        }
        ,
        this.onNativeScroll = ()=>{
            if (!this.__preventNextScrollEvent && !this.isScrolling) {
                const S = this.animatedScroll;
                this.animatedScroll = this.targetScroll = this.actualScroll,
                this.velocity = 0,
                this.direction = Math.sign(this.animatedScroll - S),
                this.emit()
            }
        }
        ,
        window.lenisVersion = "1.0.29",
        e !== document.documentElement && e !== document.body || (e = window),
        this.options = {
            wrapper: e,
            content: t,
            wheelEventsTarget: i,
            eventsTarget: r,
            smoothWheel: n,
            smoothTouch: o,
            syncTouch: a,
            syncTouchLerp: l,
            __iosNoInertiaSyncTouchLerp: u,
            touchInertiaMultiplier: c,
            duration: f,
            easing: p,
            lerp: d,
            infinite: g,
            gestureOrientation: v,
            orientation: h,
            touchMultiplier: y,
            wheelMultiplier: m,
            normalizeWheel: _,
            autoResize: w
        },
        this.animate = new ad,
        this.emitter = new nu,
        this.dimensions = new ld({
            wrapper: e,
            content: t,
            autoResize: w
        }),
        this.toggleClass("lenis", !0),
        this.velocity = 0,
        this.isLocked = !1,
        this.isStopped = !1,
        this.isSmooth = a || n || o,
        this.isScrolling = !1,
        this.targetScroll = this.animatedScroll = this.actualScroll,
        this.options.wrapper.addEventListener("scroll", this.onNativeScroll, {
            passive: !1
        }),
        this.virtualScroll = new ud(r,{
            touchMultiplier: y,
            wheelMultiplier: m,
            normalizeWheel: _
        }),
        this.virtualScroll.on("scroll", this.onVirtualScroll)
    }
    destroy() {
        this.emitter.destroy(),
        this.options.wrapper.removeEventListener("scroll", this.onNativeScroll, {
            passive: !1
        }),
        this.virtualScroll.destroy(),
        this.dimensions.destroy(),
        this.toggleClass("lenis", !1),
        this.toggleClass("lenis-smooth", !1),
        this.toggleClass("lenis-scrolling", !1),
        this.toggleClass("lenis-stopped", !1),
        this.toggleClass("lenis-locked", !1)
    }
    on(e, t) {
        return this.emitter.on(e, t)
    }
    off(e, t) {
        return this.emitter.off(e, t)
    }
    setScroll(e) {
        this.isHorizontal ? this.rootElement.scrollLeft = e : this.rootElement.scrollTop = e
    }
    resize() {
        this.dimensions.resize()
    }
    emit() {
        this.emitter.emit("scroll", this)
    }
    reset() {
        this.isLocked = !1,
        this.isScrolling = !1,
        this.animatedScroll = this.targetScroll = this.actualScroll,
        this.velocity = 0,
        this.animate.stop()
    }
    start() {
        this.isStopped = !1,
        this.reset()
    }
    stop() {
        this.isStopped = !0,
        this.animate.stop(),
        this.reset()
    }
    raf(e) {
        const t = e - (this.time || e);
        this.time = e,
        this.animate.advance(.001 * t)
    }
    scrollTo(e, {offset: t=0, immediate: i=!1, lock: r=!1, duration: n=this.options.duration, easing: o=this.options.easing, lerp: a=!n && this.options.lerp, onComplete: l=null, force: u=!1, programmatic: c=!0}={}) {
        if (!this.isStopped && !this.isLocked || u) {
            if (["top", "left", "start"].includes(e))
                e = 0;
            else if (["bottom", "right", "end"].includes(e))
                e = this.limit;
            else {
                var f;
                let p;
                if (typeof e == "string" ? p = document.querySelector(e) : (f = e) != null && f.nodeType && (p = e),
                p) {
                    if (this.options.wrapper !== window) {
                        const g = this.options.wrapper.getBoundingClientRect();
                        t -= this.isHorizontal ? g.left : g.top
                    }
                    const d = p.getBoundingClientRect();
                    e = (this.isHorizontal ? d.left : d.top) + this.animatedScroll
                }
            }
            if (typeof e == "number") {
                if (e += t,
                e = Math.round(e),
                this.options.infinite ? c && (this.targetScroll = this.animatedScroll = this.scroll) : e = ns(0, e, this.limit),
                i)
                    return this.animatedScroll = this.targetScroll = e,
                    this.setScroll(this.scroll),
                    this.reset(),
                    void (l == null || l(this));
                if (!c) {
                    if (e === this.targetScroll)
                        return;
                    this.targetScroll = e
                }
                this.animate.fromTo(this.animatedScroll, e, {
                    duration: n,
                    easing: o,
                    lerp: a,
                    onStart: ()=>{
                        r && (this.isLocked = !0),
                        this.isScrolling = !0
                    }
                    ,
                    onUpdate: (p,d)=>{
                        this.isScrolling = !0,
                        this.velocity = p - this.animatedScroll,
                        this.direction = Math.sign(this.velocity),
                        this.animatedScroll = p,
                        this.setScroll(this.scroll),
                        c && (this.targetScroll = p),
                        d || this.emit(),
                        d && (this.reset(),
                        this.emit(),
                        l == null || l(this),
                        this.__preventNextScrollEvent = !0,
                        requestAnimationFrame(()=>{
                            delete this.__preventNextScrollEvent
                        }
                        ))
                    }
                })
            }
        }
    }
    get rootElement() {
        return this.options.wrapper === window ? document.documentElement : this.options.wrapper
    }
    get limit() {
        return this.dimensions.limit[this.isHorizontal ? "x" : "y"]
    }
    get isHorizontal() {
        return this.options.orientation === "horizontal"
    }
    get actualScroll() {
        return this.isHorizontal ? this.rootElement.scrollLeft : this.rootElement.scrollTop
    }
    get scroll() {
        return this.options.infinite ? (this.animatedScroll % (e = this.limit) + e) % e : this.animatedScroll;
        var e
    }
    get progress() {
        return this.limit === 0 ? 1 : this.scroll / this.limit
    }
    get isSmooth() {
        return this.__isSmooth
    }
    set isSmooth(e) {
        this.__isSmooth !== e && (this.__isSmooth = e,
        this.toggleClass("lenis-smooth", e))
    }
    get isScrolling() {
        return this.__isScrolling
    }
    set isScrolling(e) {
        this.__isScrolling !== e && (this.__isScrolling = e,
        this.toggleClass("lenis-scrolling", e))
    }
    get isStopped() {
        return this.__isStopped
    }
    set isStopped(e) {
        this.__isStopped !== e && (this.__isStopped = e,
        this.toggleClass("lenis-stopped", e))
    }
    get isLocked() {
        return this.__isLocked
    }
    set isLocked(e) {
        this.__isLocked !== e && (this.__isLocked = e,
        this.toggleClass("lenis-locked", e))
    }
    get className() {
        let e = "lenis";
        return this.isStopped && (e += " lenis-stopped"),
        this.isLocked && (e += " lenis-locked"),
        this.isScrolling && (e += " lenis-scrolling"),
        this.isSmooth && (e += " lenis-smooth"),
        e
    }
    toggleClass(e, t) {
        this.rootElement.classList.toggle(e, t),
        this.emitter.emit("className change", this)
    }
}
function Ta(s) {
    return s !== null && typeof s == "object" && "constructor"in s && s.constructor === Object
}
function Fo(s, e) {
    s === void 0 && (s = {}),
    e === void 0 && (e = {}),
    Object.keys(e).forEach(t=>{
        typeof s[t] > "u" ? s[t] = e[t] : Ta(e[t]) && Ta(s[t]) && Object.keys(e[t]).length > 0 && Fo(s[t], e[t])
    }
    )
}
const su = {
    body: {},
    addEventListener() {},
    removeEventListener() {},
    activeElement: {
        blur() {},
        nodeName: ""
    },
    querySelector() {
        return null
    },
    querySelectorAll() {
        return []
    },
    getElementById() {
        return null
    },
    createEvent() {
        return {
            initEvent() {}
        }
    },
    createElement() {
        return {
            children: [],
            childNodes: [],
            style: {},
            setAttribute() {},
            getElementsByTagName() {
                return []
            }
        }
    },
    createElementNS() {
        return {}
    },
    importNode() {
        return null
    },
    location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: ""
    }
};
function hi() {
    const s = typeof document < "u" ? document : {};
    return Fo(s, su),
    s
}
const dd = {
    document: su,
    navigator: {
        userAgent: ""
    },
    location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: ""
    },
    history: {
        replaceState() {},
        pushState() {},
        go() {},
        back() {}
    },
    CustomEvent: function() {
        return this
    },
    addEventListener() {},
    removeEventListener() {},
    getComputedStyle() {
        return {
            getPropertyValue() {
                return ""
            }
        }
    },
    Image() {},
    Date() {},
    screen: {},
    setTimeout() {},
    clearTimeout() {},
    matchMedia() {
        return {}
    },
    requestAnimationFrame(s) {
        return typeof setTimeout > "u" ? (s(),
        null) : setTimeout(s, 0)
    },
    cancelAnimationFrame(s) {
        typeof setTimeout > "u" || clearTimeout(s)
    }
};
function Mt() {
    const s = typeof window < "u" ? window : {};
    return Fo(s, dd),
    s
}
function fd(s) {
    return s === void 0 && (s = ""),
    s.trim().split(" ").filter(e=>!!e.trim())
}
function pd(s) {
    const e = s;
    Object.keys(e).forEach(t=>{
        try {
            e[t] = null
        } catch {}
        try {
            delete e[t]
        } catch {}
    }
    )
}
function ss(s, e) {
    return e === void 0 && (e = 0),
    setTimeout(s, e)
}
function os() {
    return Date.now()
}
function hd(s) {
    const e = Mt();
    let t;
    return e.getComputedStyle && (t = e.getComputedStyle(s, null)),
    !t && s.currentStyle && (t = s.currentStyle),
    t || (t = s.style),
    t
}
function md(s, e) {
    e === void 0 && (e = "x");
    const t = Mt();
    let i, r, n;
    const o = hd(s);
    return t.WebKitCSSMatrix ? (r = o.transform || o.webkitTransform,
    r.split(",").length > 6 && (r = r.split(", ").map(a=>a.replace(",", ".")).join(", ")),
    n = new t.WebKitCSSMatrix(r === "none" ? "" : r)) : (n = o.MozTransform || o.OTransform || o.MsTransform || o.msTransform || o.transform || o.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"),
    i = n.toString().split(",")),
    e === "x" && (t.WebKitCSSMatrix ? r = n.m41 : i.length === 16 ? r = parseFloat(i[12]) : r = parseFloat(i[4])),
    e === "y" && (t.WebKitCSSMatrix ? r = n.m42 : i.length === 16 ? r = parseFloat(i[13]) : r = parseFloat(i[5])),
    r || 0
}
function In(s) {
    return typeof s == "object" && s !== null && s.constructor && Object.prototype.toString.call(s).slice(8, -1) === "Object"
}
function gd(s) {
    return typeof window < "u" && typeof window.HTMLElement < "u" ? s instanceof HTMLElement : s && (s.nodeType === 1 || s.nodeType === 11)
}
function Tt() {
    const s = Object(arguments.length <= 0 ? void 0 : arguments[0])
      , e = ["__proto__", "constructor", "prototype"];
    for (let t = 1; t < arguments.length; t += 1) {
        const i = t < 0 || arguments.length <= t ? void 0 : arguments[t];
        if (i != null && !gd(i)) {
            const r = Object.keys(Object(i)).filter(n=>e.indexOf(n) < 0);
            for (let n = 0, o = r.length; n < o; n += 1) {
                const a = r[n]
                  , l = Object.getOwnPropertyDescriptor(i, a);
                l !== void 0 && l.enumerable && (In(s[a]) && In(i[a]) ? i[a].__swiper__ ? s[a] = i[a] : Tt(s[a], i[a]) : !In(s[a]) && In(i[a]) ? (s[a] = {},
                i[a].__swiper__ ? s[a] = i[a] : Tt(s[a], i[a])) : s[a] = i[a])
            }
        }
    }
    return s
}
function Dn(s, e, t) {
    s.style.setProperty(e, t)
}
function ou(s) {
    let {swiper: e, targetPosition: t, side: i} = s;
    const r = Mt()
      , n = -e.translate;
    let o = null, a;
    const l = e.params.speed;
    e.wrapperEl.style.scrollSnapType = "none",
    r.cancelAnimationFrame(e.cssModeFrameID);
    const u = t > n ? "next" : "prev"
      , c = (p,d)=>u === "next" && p >= d || u === "prev" && p <= d
      , f = ()=>{
        a = new Date().getTime(),
        o === null && (o = a);
        const p = Math.max(Math.min((a - o) / l, 1), 0)
          , d = .5 - Math.cos(p * Math.PI) / 2;
        let g = n + d * (t - n);
        if (c(g, t) && (g = t),
        e.wrapperEl.scrollTo({
            [i]: g
        }),
        c(g, t)) {
            e.wrapperEl.style.overflow = "hidden",
            e.wrapperEl.style.scrollSnapType = "",
            setTimeout(()=>{
                e.wrapperEl.style.overflow = "",
                e.wrapperEl.scrollTo({
                    [i]: g
                })
            }
            ),
            r.cancelAnimationFrame(e.cssModeFrameID);
            return
        }
        e.cssModeFrameID = r.requestAnimationFrame(f)
    }
    ;
    f()
}
function au(s) {
    return s.querySelector(".swiper-slide-transform") || s.shadowRoot && s.shadowRoot.querySelector(".swiper-slide-transform") || s
}
function ti(s, e) {
    return e === void 0 && (e = ""),
    [...s.children].filter(t=>t.matches(e))
}
function as(s) {
    try {
        console.warn(s);
        return
    } catch {}
}
function ls(s, e) {
    e === void 0 && (e = []);
    const t = document.createElement(s);
    return t.classList.add(...Array.isArray(e) ? e : fd(e)),
    t
}
function _d(s, e) {
    const t = [];
    for (; s.previousElementSibling; ) {
        const i = s.previousElementSibling;
        e ? i.matches(e) && t.push(i) : t.push(i),
        s = i
    }
    return t
}
function vd(s, e) {
    const t = [];
    for (; s.nextElementSibling; ) {
        const i = s.nextElementSibling;
        e ? i.matches(e) && t.push(i) : t.push(i),
        s = i
    }
    return t
}
function Ci(s, e) {
    return Mt().getComputedStyle(s, null).getPropertyValue(e)
}
function us(s) {
    let e = s, t;
    if (e) {
        for (t = 0; (e = e.previousSibling) !== null; )
            e.nodeType === 1 && (t += 1);
        return t
    }
}
function lu(s, e) {
    const t = [];
    let i = s.parentElement;
    for (; i; )
        e ? i.matches(e) && t.push(i) : t.push(i),
        i = i.parentElement;
    return t
}
function uu(s, e) {
    function t(i) {
        i.target === s && (e.call(s, i),
        s.removeEventListener("transitionend", t))
    }
    e && s.addEventListener("transitionend", t)
}
function uo(s, e, t) {
    const i = Mt();
    return t ? s[e === "width" ? "offsetWidth" : "offsetHeight"] + parseFloat(i.getComputedStyle(s, null).getPropertyValue(e === "width" ? "margin-right" : "margin-top")) + parseFloat(i.getComputedStyle(s, null).getPropertyValue(e === "width" ? "margin-left" : "margin-bottom")) : s.offsetWidth
}
let Os;
function yd() {
    const s = Mt()
      , e = hi();
    return {
        smoothScroll: e.documentElement && e.documentElement.style && "scrollBehavior"in e.documentElement.style,
        touch: !!("ontouchstart"in s || s.DocumentTouch && e instanceof s.DocumentTouch)
    }
}
function cu() {
    return Os || (Os = yd()),
    Os
}
let Ls;
function wd(s) {
    let {userAgent: e} = s === void 0 ? {} : s;
    const t = cu()
      , i = Mt()
      , r = i.navigator.platform
      , n = e || i.navigator.userAgent
      , o = {
        ios: !1,
        android: !1
    }
      , a = i.screen.width
      , l = i.screen.height
      , u = n.match(/(Android);?[\s\/]+([\d.]+)?/);
    let c = n.match(/(iPad).*OS\s([\d_]+)/);
    const f = n.match(/(iPod)(.*OS\s([\d_]+))?/)
      , p = !c && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/)
      , d = r === "Win32";
    let g = r === "MacIntel";
    const h = ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"];
    return !c && g && t.touch && h.indexOf(`${a}x${l}`) >= 0 && (c = n.match(/(Version)\/([\d.]+)/),
    c || (c = [0, 1, "13_0_0"]),
    g = !1),
    u && !d && (o.os = "android",
    o.android = !0),
    (c || p || f) && (o.os = "ios",
    o.ios = !0),
    o
}
function Sd(s) {
    return s === void 0 && (s = {}),
    Ls || (Ls = wd(s)),
    Ls
}
let Is;
function xd() {
    const s = Mt();
    let e = !1;
    function t() {
        const i = s.navigator.userAgent.toLowerCase();
        return i.indexOf("safari") >= 0 && i.indexOf("chrome") < 0 && i.indexOf("android") < 0
    }
    if (t()) {
        const i = String(s.navigator.userAgent);
        if (i.includes("Version/")) {
            const [r,n] = i.split("Version/")[1].split(" ")[0].split(".").map(o=>Number(o));
            e = r < 16 || r === 16 && n < 2
        }
    }
    return {
        isSafari: e || t(),
        needPerspectiveFix: e,
        isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(s.navigator.userAgent)
    }
}
function Td() {
    return Is || (Is = xd()),
    Is
}
function bd(s) {
    let {swiper: e, on: t, emit: i} = s;
    const r = Mt();
    let n = null
      , o = null;
    const a = ()=>{
        !e || e.destroyed || !e.initialized || (i("beforeResize"),
        i("resize"))
    }
      , l = ()=>{
        !e || e.destroyed || !e.initialized || (n = new ResizeObserver(f=>{
            o = r.requestAnimationFrame(()=>{
                const {width: p, height: d} = e;
                let g = p
                  , h = d;
                f.forEach(v=>{
                    let {contentBoxSize: y, contentRect: m, target: _} = v;
                    _ && _ !== e.el || (g = m ? m.width : (y[0] || y).inlineSize,
                    h = m ? m.height : (y[0] || y).blockSize)
                }
                ),
                (g !== p || h !== d) && a()
            }
            )
        }
        ),
        n.observe(e.el))
    }
      , u = ()=>{
        o && r.cancelAnimationFrame(o),
        n && n.unobserve && e.el && (n.unobserve(e.el),
        n = null)
    }
      , c = ()=>{
        !e || e.destroyed || !e.initialized || i("orientationchange")
    }
    ;
    t("init", ()=>{
        if (e.params.resizeObserver && typeof r.ResizeObserver < "u") {
            l();
            return
        }
        r.addEventListener("resize", a),
        r.addEventListener("orientationchange", c)
    }
    ),
    t("destroy", ()=>{
        u(),
        r.removeEventListener("resize", a),
        r.removeEventListener("orientationchange", c)
    }
    )
}
function Ed(s) {
    let {swiper: e, extendParams: t, on: i, emit: r} = s;
    const n = []
      , o = Mt()
      , a = function(c, f) {
        f === void 0 && (f = {});
        const p = o.MutationObserver || o.WebkitMutationObserver
          , d = new p(g=>{
            if (e.__preventObserver__)
                return;
            if (g.length === 1) {
                r("observerUpdate", g[0]);
                return
            }
            const h = function() {
                r("observerUpdate", g[0])
            };
            o.requestAnimationFrame ? o.requestAnimationFrame(h) : o.setTimeout(h, 0)
        }
        );
        d.observe(c, {
            attributes: typeof f.attributes > "u" ? !0 : f.attributes,
            childList: typeof f.childList > "u" ? !0 : f.childList,
            characterData: typeof f.characterData > "u" ? !0 : f.characterData
        }),
        n.push(d)
    }
      , l = ()=>{
        if (e.params.observer) {
            if (e.params.observeParents) {
                const c = lu(e.hostEl);
                for (let f = 0; f < c.length; f += 1)
                    a(c[f])
            }
            a(e.hostEl, {
                childList: e.params.observeSlideChildren
            }),
            a(e.wrapperEl, {
                attributes: !1
            })
        }
    }
      , u = ()=>{
        n.forEach(c=>{
            c.disconnect()
        }
        ),
        n.splice(0, n.length)
    }
    ;
    t({
        observer: !1,
        observeParents: !1,
        observeSlideChildren: !1
    }),
    i("init", l),
    i("destroy", u)
}
var Cd = {
    on(s, e, t) {
        const i = this;
        if (!i.eventsListeners || i.destroyed || typeof e != "function")
            return i;
        const r = t ? "unshift" : "push";
        return s.split(" ").forEach(n=>{
            i.eventsListeners[n] || (i.eventsListeners[n] = []),
            i.eventsListeners[n][r](e)
        }
        ),
        i
    },
    once(s, e, t) {
        const i = this;
        if (!i.eventsListeners || i.destroyed || typeof e != "function")
            return i;
        function r() {
            i.off(s, r),
            r.__emitterProxy && delete r.__emitterProxy;
            for (var n = arguments.length, o = new Array(n), a = 0; a < n; a++)
                o[a] = arguments[a];
            e.apply(i, o)
        }
        return r.__emitterProxy = e,
        i.on(s, r, t)
    },
    onAny(s, e) {
        const t = this;
        if (!t.eventsListeners || t.destroyed || typeof s != "function")
            return t;
        const i = e ? "unshift" : "push";
        return t.eventsAnyListeners.indexOf(s) < 0 && t.eventsAnyListeners[i](s),
        t
    },
    offAny(s) {
        const e = this;
        if (!e.eventsListeners || e.destroyed || !e.eventsAnyListeners)
            return e;
        const t = e.eventsAnyListeners.indexOf(s);
        return t >= 0 && e.eventsAnyListeners.splice(t, 1),
        e
    },
    off(s, e) {
        const t = this;
        return !t.eventsListeners || t.destroyed || !t.eventsListeners || s.split(" ").forEach(i=>{
            typeof e > "u" ? t.eventsListeners[i] = [] : t.eventsListeners[i] && t.eventsListeners[i].forEach((r,n)=>{
                (r === e || r.__emitterProxy && r.__emitterProxy === e) && t.eventsListeners[i].splice(n, 1)
            }
            )
        }
        ),
        t
    },
    emit() {
        const s = this;
        if (!s.eventsListeners || s.destroyed || !s.eventsListeners)
            return s;
        let e, t, i;
        for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++)
            n[o] = arguments[o];
        return typeof n[0] == "string" || Array.isArray(n[0]) ? (e = n[0],
        t = n.slice(1, n.length),
        i = s) : (e = n[0].events,
        t = n[0].data,
        i = n[0].context || s),
        t.unshift(i),
        (Array.isArray(e) ? e : e.split(" ")).forEach(l=>{
            s.eventsAnyListeners && s.eventsAnyListeners.length && s.eventsAnyListeners.forEach(u=>{
                u.apply(i, [l, ...t])
            }
            ),
            s.eventsListeners && s.eventsListeners[l] && s.eventsListeners[l].forEach(u=>{
                u.apply(i, t)
            }
            )
        }
        ),
        s
    }
};
function Pd() {
    const s = this;
    let e, t;
    const i = s.el;
    typeof s.params.width < "u" && s.params.width !== null ? e = s.params.width : e = i.clientWidth,
    typeof s.params.height < "u" && s.params.height !== null ? t = s.params.height : t = i.clientHeight,
    !(e === 0 && s.isHorizontal() || t === 0 && s.isVertical()) && (e = e - parseInt(Ci(i, "padding-left") || 0, 10) - parseInt(Ci(i, "padding-right") || 0, 10),
    t = t - parseInt(Ci(i, "padding-top") || 0, 10) - parseInt(Ci(i, "padding-bottom") || 0, 10),
    Number.isNaN(e) && (e = 0),
    Number.isNaN(t) && (t = 0),
    Object.assign(s, {
        width: e,
        height: t,
        size: s.isHorizontal() ? e : t
    }))
}
function Md() {
    const s = this;
    function e(T, A) {
        return parseFloat(T.getPropertyValue(s.getDirectionLabel(A)) || 0)
    }
    const t = s.params
      , {wrapperEl: i, slidesEl: r, size: n, rtlTranslate: o, wrongRTL: a} = s
      , l = s.virtual && t.virtual.enabled
      , u = l ? s.virtual.slides.length : s.slides.length
      , c = ti(r, `.${s.params.slideClass}, swiper-slide`)
      , f = l ? s.virtual.slides.length : c.length;
    let p = [];
    const d = []
      , g = [];
    let h = t.slidesOffsetBefore;
    typeof h == "function" && (h = t.slidesOffsetBefore.call(s));
    let v = t.slidesOffsetAfter;
    typeof v == "function" && (v = t.slidesOffsetAfter.call(s));
    const y = s.snapGrid.length
      , m = s.slidesGrid.length;
    let _ = t.spaceBetween
      , w = -h
      , S = 0
      , b = 0;
    if (typeof n > "u")
        return;
    typeof _ == "string" && _.indexOf("%") >= 0 ? _ = parseFloat(_.replace("%", "")) / 100 * n : typeof _ == "string" && (_ = parseFloat(_)),
    s.virtualSize = -_,
    c.forEach(T=>{
        o ? T.style.marginLeft = "" : T.style.marginRight = "",
        T.style.marginBottom = "",
        T.style.marginTop = ""
    }
    ),
    t.centeredSlides && t.cssMode && (Dn(i, "--swiper-centered-offset-before", ""),
    Dn(i, "--swiper-centered-offset-after", ""));
    const E = t.grid && t.grid.rows > 1 && s.grid;
    E ? s.grid.initSlides(c) : s.grid && s.grid.unsetSlides();
    let P;
    const C = t.slidesPerView === "auto" && t.breakpoints && Object.keys(t.breakpoints).filter(T=>typeof t.breakpoints[T].slidesPerView < "u").length > 0;
    for (let T = 0; T < f; T += 1) {
        P = 0;
        let A;
        if (c[T] && (A = c[T]),
        E && s.grid.updateSlide(T, A, c),
        !(c[T] && Ci(A, "display") === "none")) {
            if (t.slidesPerView === "auto") {
                C && (c[T].style[s.getDirectionLabel("width")] = "");
                const k = getComputedStyle(A)
                  , L = A.style.transform
                  , I = A.style.webkitTransform;
                if (L && (A.style.transform = "none"),
                I && (A.style.webkitTransform = "none"),
                t.roundLengths)
                    P = s.isHorizontal() ? uo(A, "width", !0) : uo(A, "height", !0);
                else {
                    const D = e(k, "width")
                      , N = e(k, "padding-left")
                      , B = e(k, "padding-right")
                      , z = e(k, "margin-left")
                      , $ = e(k, "margin-right")
                      , x = k.getPropertyValue("box-sizing");
                    if (x && x === "border-box")
                        P = D + z + $;
                    else {
                        const {clientWidth: G, offsetWidth: ae} = A;
                        P = D + N + B + z + $ + (ae - G)
                    }
                }
                L && (A.style.transform = L),
                I && (A.style.webkitTransform = I),
                t.roundLengths && (P = Math.floor(P))
            } else
                P = (n - (t.slidesPerView - 1) * _) / t.slidesPerView,
                t.roundLengths && (P = Math.floor(P)),
                c[T] && (c[T].style[s.getDirectionLabel("width")] = `${P}px`);
            c[T] && (c[T].swiperSlideSize = P),
            g.push(P),
            t.centeredSlides ? (w = w + P / 2 + S / 2 + _,
            S === 0 && T !== 0 && (w = w - n / 2 - _),
            T === 0 && (w = w - n / 2 - _),
            Math.abs(w) < 1 / 1e3 && (w = 0),
            t.roundLengths && (w = Math.floor(w)),
            b % t.slidesPerGroup === 0 && p.push(w),
            d.push(w)) : (t.roundLengths && (w = Math.floor(w)),
            (b - Math.min(s.params.slidesPerGroupSkip, b)) % s.params.slidesPerGroup === 0 && p.push(w),
            d.push(w),
            w = w + P + _),
            s.virtualSize += P + _,
            S = P,
            b += 1
        }
    }
    if (s.virtualSize = Math.max(s.virtualSize, n) + v,
    o && a && (t.effect === "slide" || t.effect === "coverflow") && (i.style.width = `${s.virtualSize + _}px`),
    t.setWrapperSize && (i.style[s.getDirectionLabel("width")] = `${s.virtualSize + _}px`),
    E && s.grid.updateWrapperSize(P, p),
    !t.centeredSlides) {
        const T = [];
        for (let A = 0; A < p.length; A += 1) {
            let k = p[A];
            t.roundLengths && (k = Math.floor(k)),
            p[A] <= s.virtualSize - n && T.push(k)
        }
        p = T,
        Math.floor(s.virtualSize - n) - Math.floor(p[p.length - 1]) > 1 && p.push(s.virtualSize - n)
    }
    if (l && t.loop) {
        const T = g[0] + _;
        if (t.slidesPerGroup > 1) {
            const A = Math.ceil((s.virtual.slidesBefore + s.virtual.slidesAfter) / t.slidesPerGroup)
              , k = T * t.slidesPerGroup;
            for (let L = 0; L < A; L += 1)
                p.push(p[p.length - 1] + k)
        }
        for (let A = 0; A < s.virtual.slidesBefore + s.virtual.slidesAfter; A += 1)
            t.slidesPerGroup === 1 && p.push(p[p.length - 1] + T),
            d.push(d[d.length - 1] + T),
            s.virtualSize += T
    }
    if (p.length === 0 && (p = [0]),
    _ !== 0) {
        const T = s.isHorizontal() && o ? "marginLeft" : s.getDirectionLabel("marginRight");
        c.filter((A,k)=>!t.cssMode || t.loop ? !0 : k !== c.length - 1).forEach(A=>{
            A.style[T] = `${_}px`
        }
        )
    }
    if (t.centeredSlides && t.centeredSlidesBounds) {
        let T = 0;
        g.forEach(k=>{
            T += k + (_ || 0)
        }
        ),
        T -= _;
        const A = T - n;
        p = p.map(k=>k <= 0 ? -h : k > A ? A + v : k)
    }
    if (t.centerInsufficientSlides) {
        let T = 0;
        if (g.forEach(A=>{
            T += A + (_ || 0)
        }
        ),
        T -= _,
        T < n) {
            const A = (n - T) / 2;
            p.forEach((k,L)=>{
                p[L] = k - A
            }
            ),
            d.forEach((k,L)=>{
                d[L] = k + A
            }
            )
        }
    }
    if (Object.assign(s, {
        slides: c,
        snapGrid: p,
        slidesGrid: d,
        slidesSizesGrid: g
    }),
    t.centeredSlides && t.cssMode && !t.centeredSlidesBounds) {
        Dn(i, "--swiper-centered-offset-before", `${-p[0]}px`),
        Dn(i, "--swiper-centered-offset-after", `${s.size / 2 - g[g.length - 1] / 2}px`);
        const T = -s.snapGrid[0]
          , A = -s.slidesGrid[0];
        s.snapGrid = s.snapGrid.map(k=>k + T),
        s.slidesGrid = s.slidesGrid.map(k=>k + A)
    }
    if (f !== u && s.emit("slidesLengthChange"),
    p.length !== y && (s.params.watchOverflow && s.checkOverflow(),
    s.emit("snapGridLengthChange")),
    d.length !== m && s.emit("slidesGridLengthChange"),
    t.watchSlidesProgress && s.updateSlidesOffset(),
    s.emit("slidesUpdated"),
    !l && !t.cssMode && (t.effect === "slide" || t.effect === "fade")) {
        const T = `${t.containerModifierClass}backface-hidden`
          , A = s.el.classList.contains(T);
        f <= t.maxBackfaceHiddenSlides ? A || s.el.classList.add(T) : A && s.el.classList.remove(T)
    }
}
function Ad(s) {
    const e = this
      , t = []
      , i = e.virtual && e.params.virtual.enabled;
    let r = 0, n;
    typeof s == "number" ? e.setTransition(s) : s === !0 && e.setTransition(e.params.speed);
    const o = a=>i ? e.slides[e.getSlideIndexByData(a)] : e.slides[a];
    if (e.params.slidesPerView !== "auto" && e.params.slidesPerView > 1)
        if (e.params.centeredSlides)
            (e.visibleSlides || []).forEach(a=>{
                t.push(a)
            }
            );
        else
            for (n = 0; n < Math.ceil(e.params.slidesPerView); n += 1) {
                const a = e.activeIndex + n;
                if (a > e.slides.length && !i)
                    break;
                t.push(o(a))
            }
    else
        t.push(o(e.activeIndex));
    for (n = 0; n < t.length; n += 1)
        if (typeof t[n] < "u") {
            const a = t[n].offsetHeight;
            r = a > r ? a : r
        }
    (r || r === 0) && (e.wrapperEl.style.height = `${r}px`)
}
function kd() {
    const s = this
      , e = s.slides
      , t = s.isElement ? s.isHorizontal() ? s.wrapperEl.offsetLeft : s.wrapperEl.offsetTop : 0;
    for (let i = 0; i < e.length; i += 1)
        e[i].swiperSlideOffset = (s.isHorizontal() ? e[i].offsetLeft : e[i].offsetTop) - t - s.cssOverflowAdjustment()
}
function Od(s) {
    s === void 0 && (s = this && this.translate || 0);
    const e = this
      , t = e.params
      , {slides: i, rtlTranslate: r, snapGrid: n} = e;
    if (i.length === 0)
        return;
    typeof i[0].swiperSlideOffset > "u" && e.updateSlidesOffset();
    let o = -s;
    r && (o = s),
    i.forEach(l=>{
        l.classList.remove(t.slideVisibleClass, t.slideFullyVisibleClass)
    }
    ),
    e.visibleSlidesIndexes = [],
    e.visibleSlides = [];
    let a = t.spaceBetween;
    typeof a == "string" && a.indexOf("%") >= 0 ? a = parseFloat(a.replace("%", "")) / 100 * e.size : typeof a == "string" && (a = parseFloat(a));
    for (let l = 0; l < i.length; l += 1) {
        const u = i[l];
        let c = u.swiperSlideOffset;
        t.cssMode && t.centeredSlides && (c -= i[0].swiperSlideOffset);
        const f = (o + (t.centeredSlides ? e.minTranslate() : 0) - c) / (u.swiperSlideSize + a)
          , p = (o - n[0] + (t.centeredSlides ? e.minTranslate() : 0) - c) / (u.swiperSlideSize + a)
          , d = -(o - c)
          , g = d + e.slidesSizesGrid[l]
          , h = d >= 0 && d <= e.size - e.slidesSizesGrid[l];
        (d >= 0 && d < e.size - 1 || g > 1 && g <= e.size || d <= 0 && g >= e.size) && (e.visibleSlides.push(u),
        e.visibleSlidesIndexes.push(l),
        i[l].classList.add(t.slideVisibleClass)),
        h && i[l].classList.add(t.slideFullyVisibleClass),
        u.progress = r ? -f : f,
        u.originalProgress = r ? -p : p
    }
}
function Ld(s) {
    const e = this;
    if (typeof s > "u") {
        const c = e.rtlTranslate ? -1 : 1;
        s = e && e.translate && e.translate * c || 0
    }
    const t = e.params
      , i = e.maxTranslate() - e.minTranslate();
    let {progress: r, isBeginning: n, isEnd: o, progressLoop: a} = e;
    const l = n
      , u = o;
    if (i === 0)
        r = 0,
        n = !0,
        o = !0;
    else {
        r = (s - e.minTranslate()) / i;
        const c = Math.abs(s - e.minTranslate()) < 1
          , f = Math.abs(s - e.maxTranslate()) < 1;
        n = c || r <= 0,
        o = f || r >= 1,
        c && (r = 0),
        f && (r = 1)
    }
    if (t.loop) {
        const c = e.getSlideIndexByData(0)
          , f = e.getSlideIndexByData(e.slides.length - 1)
          , p = e.slidesGrid[c]
          , d = e.slidesGrid[f]
          , g = e.slidesGrid[e.slidesGrid.length - 1]
          , h = Math.abs(s);
        h >= p ? a = (h - p) / g : a = (h + g - d) / g,
        a > 1 && (a -= 1)
    }
    Object.assign(e, {
        progress: r,
        progressLoop: a,
        isBeginning: n,
        isEnd: o
    }),
    (t.watchSlidesProgress || t.centeredSlides && t.autoHeight) && e.updateSlidesProgress(s),
    n && !l && e.emit("reachBeginning toEdge"),
    o && !u && e.emit("reachEnd toEdge"),
    (l && !n || u && !o) && e.emit("fromEdge"),
    e.emit("progress", r)
}
function Id() {
    const s = this
      , {slides: e, params: t, slidesEl: i, activeIndex: r} = s
      , n = s.virtual && t.virtual.enabled
      , o = s.grid && t.grid && t.grid.rows > 1
      , a = f=>ti(i, `.${t.slideClass}${f}, swiper-slide${f}`)[0];
    e.forEach(f=>{
        f.classList.remove(t.slideActiveClass, t.slideNextClass, t.slidePrevClass)
    }
    );
    let l, u, c;
    if (n)
        if (t.loop) {
            let f = r - s.virtual.slidesBefore;
            f < 0 && (f = s.virtual.slides.length + f),
            f >= s.virtual.slides.length && (f -= s.virtual.slides.length),
            l = a(`[data-swiper-slide-index="${f}"]`)
        } else
            l = a(`[data-swiper-slide-index="${r}"]`);
    else
        o ? (l = e.filter(f=>f.column === r)[0],
        c = e.filter(f=>f.column === r + 1)[0],
        u = e.filter(f=>f.column === r - 1)[0]) : l = e[r];
    l && (l.classList.add(t.slideActiveClass),
    o ? (c && c.classList.add(t.slideNextClass),
    u && u.classList.add(t.slidePrevClass)) : (c = vd(l, `.${t.slideClass}, swiper-slide`)[0],
    t.loop && !c && (c = e[0]),
    c && c.classList.add(t.slideNextClass),
    u = _d(l, `.${t.slideClass}, swiper-slide`)[0],
    t.loop && !u === 0 && (u = e[e.length - 1]),
    u && u.classList.add(t.slidePrevClass))),
    s.emitSlidesClasses()
}
const Wn = (s,e)=>{
    if (!s || s.destroyed || !s.params)
        return;
    const t = ()=>s.isElement ? "swiper-slide" : `.${s.params.slideClass}`
      , i = e.closest(t());
    if (i) {
        let r = i.querySelector(`.${s.params.lazyPreloaderClass}`);
        !r && s.isElement && (i.shadowRoot ? r = i.shadowRoot.querySelector(`.${s.params.lazyPreloaderClass}`) : requestAnimationFrame(()=>{
            i.shadowRoot && (r = i.shadowRoot.querySelector(`.${s.params.lazyPreloaderClass}`),
            r && r.remove())
        }
        )),
        r && r.remove()
    }
}
  , Ds = (s,e)=>{
    if (!s.slides[e])
        return;
    const t = s.slides[e].querySelector('[loading="lazy"]');
    t && t.removeAttribute("loading")
}
  , co = s=>{
    if (!s || s.destroyed || !s.params)
        return;
    let e = s.params.lazyPreloadPrevNext;
    const t = s.slides.length;
    if (!t || !e || e < 0)
        return;
    e = Math.min(e, t);
    const i = s.params.slidesPerView === "auto" ? s.slidesPerViewDynamic() : Math.ceil(s.params.slidesPerView)
      , r = s.activeIndex;
    if (s.params.grid && s.params.grid.rows > 1) {
        const o = r
          , a = [o - e];
        a.push(...Array.from({
            length: e
        }).map((l,u)=>o + i + u)),
        s.slides.forEach((l,u)=>{
            a.includes(l.column) && Ds(s, u)
        }
        );
        return
    }
    const n = r + i - 1;
    if (s.params.rewind || s.params.loop)
        for (let o = r - e; o <= n + e; o += 1) {
            const a = (o % t + t) % t;
            (a < r || a > n) && Ds(s, a)
        }
    else
        for (let o = Math.max(r - e, 0); o <= Math.min(n + e, t - 1); o += 1)
            o !== r && (o > n || o < r) && Ds(s, o)
}
;
function Dd(s) {
    const {slidesGrid: e, params: t} = s
      , i = s.rtlTranslate ? s.translate : -s.translate;
    let r;
    for (let n = 0; n < e.length; n += 1)
        typeof e[n + 1] < "u" ? i >= e[n] && i < e[n + 1] - (e[n + 1] - e[n]) / 2 ? r = n : i >= e[n] && i < e[n + 1] && (r = n + 1) : i >= e[n] && (r = n);
    return t.normalizeSlideIndex && (r < 0 || typeof r > "u") && (r = 0),
    r
}
function zd(s) {
    const e = this
      , t = e.rtlTranslate ? e.translate : -e.translate
      , {snapGrid: i, params: r, activeIndex: n, realIndex: o, snapIndex: a} = e;
    let l = s, u;
    const c = d=>{
        let g = d - e.virtual.slidesBefore;
        return g < 0 && (g = e.virtual.slides.length + g),
        g >= e.virtual.slides.length && (g -= e.virtual.slides.length),
        g
    }
    ;
    if (typeof l > "u" && (l = Dd(e)),
    i.indexOf(t) >= 0)
        u = i.indexOf(t);
    else {
        const d = Math.min(r.slidesPerGroupSkip, l);
        u = d + Math.floor((l - d) / r.slidesPerGroup)
    }
    if (u >= i.length && (u = i.length - 1),
    l === n && !e.params.loop) {
        u !== a && (e.snapIndex = u,
        e.emit("snapIndexChange"));
        return
    }
    if (l === n && e.params.loop && e.virtual && e.params.virtual.enabled) {
        e.realIndex = c(l);
        return
    }
    const f = e.grid && r.grid && r.grid.rows > 1;
    let p;
    if (e.virtual && r.virtual.enabled && r.loop)
        p = c(l);
    else if (f) {
        const d = e.slides.filter(h=>h.column === l)[0];
        let g = parseInt(d.getAttribute("data-swiper-slide-index"), 10);
        Number.isNaN(g) && (g = Math.max(e.slides.indexOf(d), 0)),
        p = Math.floor(g / r.grid.rows)
    } else if (e.slides[l]) {
        const d = e.slides[l].getAttribute("data-swiper-slide-index");
        d ? p = parseInt(d, 10) : p = l
    } else
        p = l;
    Object.assign(e, {
        previousSnapIndex: a,
        snapIndex: u,
        previousRealIndex: o,
        realIndex: p,
        previousIndex: n,
        activeIndex: l
    }),
    e.initialized && co(e),
    e.emit("activeIndexChange"),
    e.emit("snapIndexChange"),
    (e.initialized || e.params.runCallbacksOnInit) && (o !== p && e.emit("realIndexChange"),
    e.emit("slideChange"))
}
function Rd(s, e) {
    const t = this
      , i = t.params;
    let r = s.closest(`.${i.slideClass}, swiper-slide`);
    !r && t.isElement && e && e.length > 1 && e.includes(s) && [...e.slice(e.indexOf(s) + 1, e.length)].forEach(a=>{
        !r && a.matches && a.matches(`.${i.slideClass}, swiper-slide`) && (r = a)
    }
    );
    let n = !1, o;
    if (r) {
        for (let a = 0; a < t.slides.length; a += 1)
            if (t.slides[a] === r) {
                n = !0,
                o = a;
                break
            }
    }
    if (r && n)
        t.clickedSlide = r,
        t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(r.getAttribute("data-swiper-slide-index"), 10) : t.clickedIndex = o;
    else {
        t.clickedSlide = void 0,
        t.clickedIndex = void 0;
        return
    }
    i.slideToClickedSlide && t.clickedIndex !== void 0 && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide()
}
var Fd = {
    updateSize: Pd,
    updateSlides: Md,
    updateAutoHeight: Ad,
    updateSlidesOffset: kd,
    updateSlidesProgress: Od,
    updateProgress: Ld,
    updateSlidesClasses: Id,
    updateActiveIndex: zd,
    updateClickedSlide: Rd
};
function Nd(s) {
    s === void 0 && (s = this.isHorizontal() ? "x" : "y");
    const e = this
      , {params: t, rtlTranslate: i, translate: r, wrapperEl: n} = e;
    if (t.virtualTranslate)
        return i ? -r : r;
    if (t.cssMode)
        return r;
    let o = md(n, s);
    return o += e.cssOverflowAdjustment(),
    i && (o = -o),
    o || 0
}
function Bd(s, e) {
    const t = this
      , {rtlTranslate: i, params: r, wrapperEl: n, progress: o} = t;
    let a = 0
      , l = 0;
    const u = 0;
    t.isHorizontal() ? a = i ? -s : s : l = s,
    r.roundLengths && (a = Math.floor(a),
    l = Math.floor(l)),
    t.previousTranslate = t.translate,
    t.translate = t.isHorizontal() ? a : l,
    r.cssMode ? n[t.isHorizontal() ? "scrollLeft" : "scrollTop"] = t.isHorizontal() ? -a : -l : r.virtualTranslate || (t.isHorizontal() ? a -= t.cssOverflowAdjustment() : l -= t.cssOverflowAdjustment(),
    n.style.transform = `translate3d(${a}px, ${l}px, ${u}px)`);
    let c;
    const f = t.maxTranslate() - t.minTranslate();
    f === 0 ? c = 0 : c = (s - t.minTranslate()) / f,
    c !== o && t.updateProgress(s),
    t.emit("setTranslate", t.translate, e)
}
function qd() {
    return -this.snapGrid[0]
}
function Vd() {
    return -this.snapGrid[this.snapGrid.length - 1]
}
function $d(s, e, t, i, r) {
    s === void 0 && (s = 0),
    e === void 0 && (e = this.params.speed),
    t === void 0 && (t = !0),
    i === void 0 && (i = !0);
    const n = this
      , {params: o, wrapperEl: a} = n;
    if (n.animating && o.preventInteractionOnTransition)
        return !1;
    const l = n.minTranslate()
      , u = n.maxTranslate();
    let c;
    if (i && s > l ? c = l : i && s < u ? c = u : c = s,
    n.updateProgress(c),
    o.cssMode) {
        const f = n.isHorizontal();
        if (e === 0)
            a[f ? "scrollLeft" : "scrollTop"] = -c;
        else {
            if (!n.support.smoothScroll)
                return ou({
                    swiper: n,
                    targetPosition: -c,
                    side: f ? "left" : "top"
                }),
                !0;
            a.scrollTo({
                [f ? "left" : "top"]: -c,
                behavior: "smooth"
            })
        }
        return !0
    }
    return e === 0 ? (n.setTransition(0),
    n.setTranslate(c),
    t && (n.emit("beforeTransitionStart", e, r),
    n.emit("transitionEnd"))) : (n.setTransition(e),
    n.setTranslate(c),
    t && (n.emit("beforeTransitionStart", e, r),
    n.emit("transitionStart")),
    n.animating || (n.animating = !0,
    n.onTranslateToWrapperTransitionEnd || (n.onTranslateToWrapperTransitionEnd = function(p) {
        !n || n.destroyed || p.target === this && (n.wrapperEl.removeEventListener("transitionend", n.onTranslateToWrapperTransitionEnd),
        n.onTranslateToWrapperTransitionEnd = null,
        delete n.onTranslateToWrapperTransitionEnd,
        t && n.emit("transitionEnd"))
    }
    ),
    n.wrapperEl.addEventListener("transitionend", n.onTranslateToWrapperTransitionEnd))),
    !0
}
var Gd = {
    getTranslate: Nd,
    setTranslate: Bd,
    minTranslate: qd,
    maxTranslate: Vd,
    translateTo: $d
};
function Hd(s, e) {
    const t = this;
    t.params.cssMode || (t.wrapperEl.style.transitionDuration = `${s}ms`,
    t.wrapperEl.style.transitionDelay = s === 0 ? "0ms" : ""),
    t.emit("setTransition", s, e)
}
function du(s) {
    let {swiper: e, runCallbacks: t, direction: i, step: r} = s;
    const {activeIndex: n, previousIndex: o} = e;
    let a = i;
    if (a || (n > o ? a = "next" : n < o ? a = "prev" : a = "reset"),
    e.emit(`transition${r}`),
    t && n !== o) {
        if (a === "reset") {
            e.emit(`slideResetTransition${r}`);
            return
        }
        e.emit(`slideChangeTransition${r}`),
        a === "next" ? e.emit(`slideNextTransition${r}`) : e.emit(`slidePrevTransition${r}`)
    }
}
function Wd(s, e) {
    s === void 0 && (s = !0);
    const t = this
      , {params: i} = t;
    i.cssMode || (i.autoHeight && t.updateAutoHeight(),
    du({
        swiper: t,
        runCallbacks: s,
        direction: e,
        step: "Start"
    }))
}
function Yd(s, e) {
    s === void 0 && (s = !0);
    const t = this
      , {params: i} = t;
    t.animating = !1,
    !i.cssMode && (t.setTransition(0),
    du({
        swiper: t,
        runCallbacks: s,
        direction: e,
        step: "End"
    }))
}
var Xd = {
    setTransition: Hd,
    transitionStart: Wd,
    transitionEnd: Yd
};
function Ud(s, e, t, i, r) {
    s === void 0 && (s = 0),
    e === void 0 && (e = this.params.speed),
    t === void 0 && (t = !0),
    typeof s == "string" && (s = parseInt(s, 10));
    const n = this;
    let o = s;
    o < 0 && (o = 0);
    const {params: a, snapGrid: l, slidesGrid: u, previousIndex: c, activeIndex: f, rtlTranslate: p, wrapperEl: d, enabled: g} = n;
    if (n.animating && a.preventInteractionOnTransition || !g && !i && !r)
        return !1;
    const h = Math.min(n.params.slidesPerGroupSkip, o);
    let v = h + Math.floor((o - h) / n.params.slidesPerGroup);
    v >= l.length && (v = l.length - 1);
    const y = -l[v];
    if (a.normalizeSlideIndex)
        for (let _ = 0; _ < u.length; _ += 1) {
            const w = -Math.floor(y * 100)
              , S = Math.floor(u[_] * 100)
              , b = Math.floor(u[_ + 1] * 100);
            typeof u[_ + 1] < "u" ? w >= S && w < b - (b - S) / 2 ? o = _ : w >= S && w < b && (o = _ + 1) : w >= S && (o = _)
        }
    if (n.initialized && o !== f && (!n.allowSlideNext && (p ? y > n.translate && y > n.minTranslate() : y < n.translate && y < n.minTranslate()) || !n.allowSlidePrev && y > n.translate && y > n.maxTranslate() && (f || 0) !== o))
        return !1;
    o !== (c || 0) && t && n.emit("beforeSlideChangeStart"),
    n.updateProgress(y);
    let m;
    if (o > f ? m = "next" : o < f ? m = "prev" : m = "reset",
    p && -y === n.translate || !p && y === n.translate)
        return n.updateActiveIndex(o),
        a.autoHeight && n.updateAutoHeight(),
        n.updateSlidesClasses(),
        a.effect !== "slide" && n.setTranslate(y),
        m !== "reset" && (n.transitionStart(t, m),
        n.transitionEnd(t, m)),
        !1;
    if (a.cssMode) {
        const _ = n.isHorizontal()
          , w = p ? y : -y;
        if (e === 0) {
            const S = n.virtual && n.params.virtual.enabled;
            S && (n.wrapperEl.style.scrollSnapType = "none",
            n._immediateVirtual = !0),
            S && !n._cssModeVirtualInitialSet && n.params.initialSlide > 0 ? (n._cssModeVirtualInitialSet = !0,
            requestAnimationFrame(()=>{
                d[_ ? "scrollLeft" : "scrollTop"] = w
            }
            )) : d[_ ? "scrollLeft" : "scrollTop"] = w,
            S && requestAnimationFrame(()=>{
                n.wrapperEl.style.scrollSnapType = "",
                n._immediateVirtual = !1
            }
            )
        } else {
            if (!n.support.smoothScroll)
                return ou({
                    swiper: n,
                    targetPosition: w,
                    side: _ ? "left" : "top"
                }),
                !0;
            d.scrollTo({
                [_ ? "left" : "top"]: w,
                behavior: "smooth"
            })
        }
        return !0
    }
    return n.setTransition(e),
    n.setTranslate(y),
    n.updateActiveIndex(o),
    n.updateSlidesClasses(),
    n.emit("beforeTransitionStart", e, i),
    n.transitionStart(t, m),
    e === 0 ? n.transitionEnd(t, m) : n.animating || (n.animating = !0,
    n.onSlideToWrapperTransitionEnd || (n.onSlideToWrapperTransitionEnd = function(w) {
        !n || n.destroyed || w.target === this && (n.wrapperEl.removeEventListener("transitionend", n.onSlideToWrapperTransitionEnd),
        n.onSlideToWrapperTransitionEnd = null,
        delete n.onSlideToWrapperTransitionEnd,
        n.transitionEnd(t, m))
    }
    ),
    n.wrapperEl.addEventListener("transitionend", n.onSlideToWrapperTransitionEnd)),
    !0
}
function jd(s, e, t, i) {
    s === void 0 && (s = 0),
    e === void 0 && (e = this.params.speed),
    t === void 0 && (t = !0),
    typeof s == "string" && (s = parseInt(s, 10));
    const r = this
      , n = r.grid && r.params.grid && r.params.grid.rows > 1;
    let o = s;
    if (r.params.loop)
        if (r.virtual && r.params.virtual.enabled)
            o = o + r.virtual.slidesBefore;
        else {
            let a;
            if (n) {
                const p = o * r.params.grid.rows;
                a = r.slides.filter(d=>d.getAttribute("data-swiper-slide-index") * 1 === p)[0].column
            } else
                a = r.getSlideIndexByData(o);
            const l = n ? Math.ceil(r.slides.length / r.params.grid.rows) : r.slides.length
              , {centeredSlides: u} = r.params;
            let c = r.params.slidesPerView;
            c === "auto" ? c = r.slidesPerViewDynamic() : (c = Math.ceil(parseFloat(r.params.slidesPerView, 10)),
            u && c % 2 === 0 && (c = c + 1));
            let f = l - a < c;
            if (u && (f = f || a < Math.ceil(c / 2)),
            f) {
                const p = u ? a < r.activeIndex ? "prev" : "next" : a - r.activeIndex - 1 < r.params.slidesPerView ? "next" : "prev";
                r.loopFix({
                    direction: p,
                    slideTo: !0,
                    activeSlideIndex: p === "next" ? a + 1 : a - l + 1,
                    slideRealIndex: p === "next" ? r.realIndex : void 0
                })
            }
            if (n) {
                const p = o * r.params.grid.rows;
                o = r.slides.filter(d=>d.getAttribute("data-swiper-slide-index") * 1 === p)[0].column
            } else
                o = r.getSlideIndexByData(o)
        }
    return requestAnimationFrame(()=>{
        r.slideTo(o, e, t, i)
    }
    ),
    r
}
function Kd(s, e, t) {
    s === void 0 && (s = this.params.speed),
    e === void 0 && (e = !0);
    const i = this
      , {enabled: r, params: n, animating: o} = i;
    if (!r)
        return i;
    let a = n.slidesPerGroup;
    n.slidesPerView === "auto" && n.slidesPerGroup === 1 && n.slidesPerGroupAuto && (a = Math.max(i.slidesPerViewDynamic("current", !0), 1));
    const l = i.activeIndex < n.slidesPerGroupSkip ? 1 : a
      , u = i.virtual && n.virtual.enabled;
    if (n.loop) {
        if (o && !u && n.loopPreventsSliding)
            return !1;
        if (i.loopFix({
            direction: "next"
        }),
        i._clientLeft = i.wrapperEl.clientLeft,
        i.activeIndex === i.slides.length - 1 && n.cssMode)
            return requestAnimationFrame(()=>{
                i.slideTo(i.activeIndex + l, s, e, t)
            }
            ),
            !0
    }
    return n.rewind && i.isEnd ? i.slideTo(0, s, e, t) : i.slideTo(i.activeIndex + l, s, e, t)
}
function Qd(s, e, t) {
    s === void 0 && (s = this.params.speed),
    e === void 0 && (e = !0);
    const i = this
      , {params: r, snapGrid: n, slidesGrid: o, rtlTranslate: a, enabled: l, animating: u} = i;
    if (!l)
        return i;
    const c = i.virtual && r.virtual.enabled;
    if (r.loop) {
        if (u && !c && r.loopPreventsSliding)
            return !1;
        i.loopFix({
            direction: "prev"
        }),
        i._clientLeft = i.wrapperEl.clientLeft
    }
    const f = a ? i.translate : -i.translate;
    function p(y) {
        return y < 0 ? -Math.floor(Math.abs(y)) : Math.floor(y)
    }
    const d = p(f)
      , g = n.map(y=>p(y));
    let h = n[g.indexOf(d) - 1];
    if (typeof h > "u" && r.cssMode) {
        let y;
        n.forEach((m,_)=>{
            d >= m && (y = _)
        }
        ),
        typeof y < "u" && (h = n[y > 0 ? y - 1 : y])
    }
    let v = 0;
    if (typeof h < "u" && (v = o.indexOf(h),
    v < 0 && (v = i.activeIndex - 1),
    r.slidesPerView === "auto" && r.slidesPerGroup === 1 && r.slidesPerGroupAuto && (v = v - i.slidesPerViewDynamic("previous", !0) + 1,
    v = Math.max(v, 0))),
    r.rewind && i.isBeginning) {
        const y = i.params.virtual && i.params.virtual.enabled && i.virtual ? i.virtual.slides.length - 1 : i.slides.length - 1;
        return i.slideTo(y, s, e, t)
    } else if (r.loop && i.activeIndex === 0 && r.cssMode)
        return requestAnimationFrame(()=>{
            i.slideTo(v, s, e, t)
        }
        ),
        !0;
    return i.slideTo(v, s, e, t)
}
function Zd(s, e, t) {
    s === void 0 && (s = this.params.speed),
    e === void 0 && (e = !0);
    const i = this;
    return i.slideTo(i.activeIndex, s, e, t)
}
function Jd(s, e, t, i) {
    s === void 0 && (s = this.params.speed),
    e === void 0 && (e = !0),
    i === void 0 && (i = .5);
    const r = this;
    let n = r.activeIndex;
    const o = Math.min(r.params.slidesPerGroupSkip, n)
      , a = o + Math.floor((n - o) / r.params.slidesPerGroup)
      , l = r.rtlTranslate ? r.translate : -r.translate;
    if (l >= r.snapGrid[a]) {
        const u = r.snapGrid[a]
          , c = r.snapGrid[a + 1];
        l - u > (c - u) * i && (n += r.params.slidesPerGroup)
    } else {
        const u = r.snapGrid[a - 1]
          , c = r.snapGrid[a];
        l - u <= (c - u) * i && (n -= r.params.slidesPerGroup)
    }
    return n = Math.max(n, 0),
    n = Math.min(n, r.slidesGrid.length - 1),
    r.slideTo(n, s, e, t)
}
function ef() {
    const s = this
      , {params: e, slidesEl: t} = s
      , i = e.slidesPerView === "auto" ? s.slidesPerViewDynamic() : e.slidesPerView;
    let r = s.clickedIndex, n;
    const o = s.isElement ? "swiper-slide" : `.${e.slideClass}`;
    if (e.loop) {
        if (s.animating)
            return;
        n = parseInt(s.clickedSlide.getAttribute("data-swiper-slide-index"), 10),
        e.centeredSlides ? r < s.loopedSlides - i / 2 || r > s.slides.length - s.loopedSlides + i / 2 ? (s.loopFix(),
        r = s.getSlideIndex(ti(t, `${o}[data-swiper-slide-index="${n}"]`)[0]),
        ss(()=>{
            s.slideTo(r)
        }
        )) : s.slideTo(r) : r > s.slides.length - i ? (s.loopFix(),
        r = s.getSlideIndex(ti(t, `${o}[data-swiper-slide-index="${n}"]`)[0]),
        ss(()=>{
            s.slideTo(r)
        }
        )) : s.slideTo(r)
    } else
        s.slideTo(r)
}
var tf = {
    slideTo: Ud,
    slideToLoop: jd,
    slideNext: Kd,
    slidePrev: Qd,
    slideReset: Zd,
    slideToClosest: Jd,
    slideToClickedSlide: ef
};
function rf(s) {
    const e = this
      , {params: t, slidesEl: i} = e;
    if (!t.loop || e.virtual && e.params.virtual.enabled)
        return;
    const r = ()=>{
        ti(i, `.${t.slideClass}, swiper-slide`).forEach((f,p)=>{
            f.setAttribute("data-swiper-slide-index", p)
        }
        )
    }
      , n = e.grid && t.grid && t.grid.rows > 1
      , o = t.slidesPerGroup * (n ? t.grid.rows : 1)
      , a = e.slides.length % o !== 0
      , l = n && e.slides.length % t.grid.rows !== 0
      , u = c=>{
        for (let f = 0; f < c; f += 1) {
            const p = e.isElement ? ls("swiper-slide", [t.slideBlankClass]) : ls("div", [t.slideClass, t.slideBlankClass]);
            e.slidesEl.append(p)
        }
    }
    ;
    if (a) {
        if (t.loopAddBlankSlides) {
            const c = o - e.slides.length % o;
            u(c),
            e.recalcSlides(),
            e.updateSlides()
        } else
            as("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
        r()
    } else if (l) {
        if (t.loopAddBlankSlides) {
            const c = t.grid.rows - e.slides.length % t.grid.rows;
            u(c),
            e.recalcSlides(),
            e.updateSlides()
        } else
            as("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
        r()
    } else
        r();
    e.loopFix({
        slideRealIndex: s,
        direction: t.centeredSlides ? void 0 : "next"
    })
}
function nf(s) {
    let {slideRealIndex: e, slideTo: t=!0, direction: i, setTranslate: r, activeSlideIndex: n, byController: o, byMousewheel: a} = s === void 0 ? {} : s;
    const l = this;
    if (!l.params.loop)
        return;
    l.emit("beforeLoopFix");
    const {slides: u, allowSlidePrev: c, allowSlideNext: f, slidesEl: p, params: d} = l
      , {centeredSlides: g} = d;
    if (l.allowSlidePrev = !0,
    l.allowSlideNext = !0,
    l.virtual && d.virtual.enabled) {
        t && (!d.centeredSlides && l.snapIndex === 0 ? l.slideTo(l.virtual.slides.length, 0, !1, !0) : d.centeredSlides && l.snapIndex < d.slidesPerView ? l.slideTo(l.virtual.slides.length + l.snapIndex, 0, !1, !0) : l.snapIndex === l.snapGrid.length - 1 && l.slideTo(l.virtual.slidesBefore, 0, !1, !0)),
        l.allowSlidePrev = c,
        l.allowSlideNext = f,
        l.emit("loopFix");
        return
    }
    let h = d.slidesPerView;
    h === "auto" ? h = l.slidesPerViewDynamic() : (h = Math.ceil(parseFloat(d.slidesPerView, 10)),
    g && h % 2 === 0 && (h = h + 1));
    const v = d.slidesPerGroupAuto ? h : d.slidesPerGroup;
    let y = v;
    y % v !== 0 && (y += v - y % v),
    y += d.loopAdditionalSlides,
    l.loopedSlides = y;
    const m = l.grid && d.grid && d.grid.rows > 1;
    u.length < h + y ? as("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters") : m && d.grid.fill === "row" && as("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
    const _ = []
      , w = [];
    let S = l.activeIndex;
    typeof n > "u" ? n = l.getSlideIndex(u.filter(L=>L.classList.contains(d.slideActiveClass))[0]) : S = n;
    const b = i === "next" || !i
      , E = i === "prev" || !i;
    let P = 0
      , C = 0;
    const T = m ? Math.ceil(u.length / d.grid.rows) : u.length
      , k = (m ? u[n].column : n) + (g && typeof r > "u" ? -h / 2 + .5 : 0);
    if (k < y) {
        P = Math.max(y - k, v);
        for (let L = 0; L < y - k; L += 1) {
            const I = L - Math.floor(L / T) * T;
            if (m) {
                const D = T - I - 1;
                for (let N = u.length - 1; N >= 0; N -= 1)
                    u[N].column === D && _.push(N)
            } else
                _.push(T - I - 1)
        }
    } else if (k + h > T - y) {
        C = Math.max(k - (T - y * 2), v);
        for (let L = 0; L < C; L += 1) {
            const I = L - Math.floor(L / T) * T;
            m ? u.forEach((D,N)=>{
                D.column === I && w.push(N)
            }
            ) : w.push(I)
        }
    }
    if (l.__preventObserver__ = !0,
    requestAnimationFrame(()=>{
        l.__preventObserver__ = !1
    }
    ),
    E && _.forEach(L=>{
        u[L].swiperLoopMoveDOM = !0,
        p.prepend(u[L]),
        u[L].swiperLoopMoveDOM = !1
    }
    ),
    b && w.forEach(L=>{
        u[L].swiperLoopMoveDOM = !0,
        p.append(u[L]),
        u[L].swiperLoopMoveDOM = !1
    }
    ),
    l.recalcSlides(),
    d.slidesPerView === "auto" ? l.updateSlides() : m && (_.length > 0 && E || w.length > 0 && b) && l.slides.forEach((L,I)=>{
        l.grid.updateSlide(I, L, l.slides)
    }
    ),
    d.watchSlidesProgress && l.updateSlidesOffset(),
    t) {
        if (_.length > 0 && E) {
            if (typeof e > "u") {
                const L = l.slidesGrid[S]
                  , D = l.slidesGrid[S + P] - L;
                a ? l.setTranslate(l.translate - D) : (l.slideTo(S + P, 0, !1, !0),
                r && (l.touchEventsData.startTranslate = l.touchEventsData.startTranslate - D,
                l.touchEventsData.currentTranslate = l.touchEventsData.currentTranslate - D))
            } else if (r) {
                const L = m ? _.length / d.grid.rows : _.length;
                l.slideTo(l.activeIndex + L, 0, !1, !0),
                l.touchEventsData.currentTranslate = l.translate
            }
        } else if (w.length > 0 && b)
            if (typeof e > "u") {
                const L = l.slidesGrid[S]
                  , D = l.slidesGrid[S - C] - L;
                a ? l.setTranslate(l.translate - D) : (l.slideTo(S - C, 0, !1, !0),
                r && (l.touchEventsData.startTranslate = l.touchEventsData.startTranslate - D,
                l.touchEventsData.currentTranslate = l.touchEventsData.currentTranslate - D))
            } else {
                const L = m ? w.length / d.grid.rows : w.length;
                l.slideTo(l.activeIndex - L, 0, !1, !0)
            }
    }
    if (l.allowSlidePrev = c,
    l.allowSlideNext = f,
    l.controller && l.controller.control && !o) {
        const L = {
            slideRealIndex: e,
            direction: i,
            setTranslate: r,
            activeSlideIndex: n,
            byController: !0
        };
        Array.isArray(l.controller.control) ? l.controller.control.forEach(I=>{
            !I.destroyed && I.params.loop && I.loopFix({
                ...L,
                slideTo: I.params.slidesPerView === d.slidesPerView ? t : !1
            })
        }
        ) : l.controller.control instanceof l.constructor && l.controller.control.params.loop && l.controller.control.loopFix({
            ...L,
            slideTo: l.controller.control.params.slidesPerView === d.slidesPerView ? t : !1
        })
    }
    l.emit("loopFix")
}
function sf() {
    const s = this
      , {params: e, slidesEl: t} = s;
    if (!e.loop || s.virtual && s.params.virtual.enabled)
        return;
    s.recalcSlides();
    const i = [];
    s.slides.forEach(r=>{
        const n = typeof r.swiperSlideIndex > "u" ? r.getAttribute("data-swiper-slide-index") * 1 : r.swiperSlideIndex;
        i[n] = r
    }
    ),
    s.slides.forEach(r=>{
        r.removeAttribute("data-swiper-slide-index")
    }
    ),
    i.forEach(r=>{
        t.append(r)
    }
    ),
    s.recalcSlides(),
    s.slideTo(s.realIndex, 0)
}
var of = {
    loopCreate: rf,
    loopFix: nf,
    loopDestroy: sf
};
function af(s) {
    const e = this;
    if (!e.params.simulateTouch || e.params.watchOverflow && e.isLocked || e.params.cssMode)
        return;
    const t = e.params.touchEventsTarget === "container" ? e.el : e.wrapperEl;
    e.isElement && (e.__preventObserver__ = !0),
    t.style.cursor = "move",
    t.style.cursor = s ? "grabbing" : "grab",
    e.isElement && requestAnimationFrame(()=>{
        e.__preventObserver__ = !1
    }
    )
}
function lf() {
    const s = this;
    s.params.watchOverflow && s.isLocked || s.params.cssMode || (s.isElement && (s.__preventObserver__ = !0),
    s[s.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "",
    s.isElement && requestAnimationFrame(()=>{
        s.__preventObserver__ = !1
    }
    ))
}
var uf = {
    setGrabCursor: af,
    unsetGrabCursor: lf
};
function cf(s, e) {
    e === void 0 && (e = this);
    function t(i) {
        if (!i || i === hi() || i === Mt())
            return null;
        i.assignedSlot && (i = i.assignedSlot);
        const r = i.closest(s);
        return !r && !i.getRootNode ? null : r || t(i.getRootNode().host)
    }
    return t(e)
}
function ba(s, e, t) {
    const i = Mt()
      , {params: r} = s
      , n = r.edgeSwipeDetection
      , o = r.edgeSwipeThreshold;
    return n && (t <= o || t >= i.innerWidth - o) ? n === "prevent" ? (e.preventDefault(),
    !0) : !1 : !0
}
function df(s) {
    const e = this
      , t = hi();
    let i = s;
    i.originalEvent && (i = i.originalEvent);
    const r = e.touchEventsData;
    if (i.type === "pointerdown") {
        if (r.pointerId !== null && r.pointerId !== i.pointerId)
            return;
        r.pointerId = i.pointerId
    } else
        i.type === "touchstart" && i.targetTouches.length === 1 && (r.touchId = i.targetTouches[0].identifier);
    if (i.type === "touchstart") {
        ba(e, i, i.targetTouches[0].pageX);
        return
    }
    const {params: n, touches: o, enabled: a} = e;
    if (!a || !n.simulateTouch && i.pointerType === "mouse" || e.animating && n.preventInteractionOnTransition)
        return;
    !e.animating && n.cssMode && n.loop && e.loopFix();
    let l = i.target;
    if (n.touchEventsTarget === "wrapper" && !e.wrapperEl.contains(l) || "which"in i && i.which === 3 || "button"in i && i.button > 0 || r.isTouched && r.isMoved)
        return;
    const u = !!n.noSwipingClass && n.noSwipingClass !== ""
      , c = i.composedPath ? i.composedPath() : i.path;
    u && i.target && i.target.shadowRoot && c && (l = c[0]);
    const f = n.noSwipingSelector ? n.noSwipingSelector : `.${n.noSwipingClass}`
      , p = !!(i.target && i.target.shadowRoot);
    if (n.noSwiping && (p ? cf(f, l) : l.closest(f))) {
        e.allowClick = !0;
        return
    }
    if (n.swipeHandler && !l.closest(n.swipeHandler))
        return;
    o.currentX = i.pageX,
    o.currentY = i.pageY;
    const d = o.currentX
      , g = o.currentY;
    if (!ba(e, i, d))
        return;
    Object.assign(r, {
        isTouched: !0,
        isMoved: !1,
        allowTouchCallbacks: !0,
        isScrolling: void 0,
        startMoving: void 0
    }),
    o.startX = d,
    o.startY = g,
    r.touchStartTime = os(),
    e.allowClick = !0,
    e.updateSize(),
    e.swipeDirection = void 0,
    n.threshold > 0 && (r.allowThresholdMove = !1);
    let h = !0;
    l.matches(r.focusableElements) && (h = !1,
    l.nodeName === "SELECT" && (r.isTouched = !1)),
    t.activeElement && t.activeElement.matches(r.focusableElements) && t.activeElement !== l && t.activeElement.blur();
    const v = h && e.allowTouchMove && n.touchStartPreventDefault;
    (n.touchStartForcePreventDefault || v) && !l.isContentEditable && i.preventDefault(),
    n.freeMode && n.freeMode.enabled && e.freeMode && e.animating && !n.cssMode && e.freeMode.onTouchStart(),
    e.emit("touchStart", i)
}
function ff(s) {
    const e = hi()
      , t = this
      , i = t.touchEventsData
      , {params: r, touches: n, rtlTranslate: o, enabled: a} = t;
    if (!a || !r.simulateTouch && s.pointerType === "mouse")
        return;
    let l = s;
    if (l.originalEvent && (l = l.originalEvent),
    l.type === "pointermove" && (i.touchId !== null || l.pointerId !== i.pointerId))
        return;
    let u;
    if (l.type === "touchmove") {
        if (u = [...l.changedTouches].filter(b=>b.identifier === i.touchId)[0],
        !u || u.identifier !== i.touchId)
            return
    } else
        u = l;
    if (!i.isTouched) {
        i.startMoving && i.isScrolling && t.emit("touchMoveOpposite", l);
        return
    }
    const c = u.pageX
      , f = u.pageY;
    if (l.preventedByNestedSwiper) {
        n.startX = c,
        n.startY = f;
        return
    }
    if (!t.allowTouchMove) {
        l.target.matches(i.focusableElements) || (t.allowClick = !1),
        i.isTouched && (Object.assign(n, {
            startX: c,
            startY: f,
            currentX: c,
            currentY: f
        }),
        i.touchStartTime = os());
        return
    }
    if (r.touchReleaseOnEdges && !r.loop) {
        if (t.isVertical()) {
            if (f < n.startY && t.translate <= t.maxTranslate() || f > n.startY && t.translate >= t.minTranslate()) {
                i.isTouched = !1,
                i.isMoved = !1;
                return
            }
        } else if (c < n.startX && t.translate <= t.maxTranslate() || c > n.startX && t.translate >= t.minTranslate())
            return
    }
    if (e.activeElement && l.target === e.activeElement && l.target.matches(i.focusableElements)) {
        i.isMoved = !0,
        t.allowClick = !1;
        return
    }
    i.allowTouchCallbacks && t.emit("touchMove", l),
    n.previousX = n.currentX,
    n.previousY = n.currentY,
    n.currentX = c,
    n.currentY = f;
    const p = n.currentX - n.startX
      , d = n.currentY - n.startY;
    if (t.params.threshold && Math.sqrt(p ** 2 + d ** 2) < t.params.threshold)
        return;
    if (typeof i.isScrolling > "u") {
        let b;
        t.isHorizontal() && n.currentY === n.startY || t.isVertical() && n.currentX === n.startX ? i.isScrolling = !1 : p * p + d * d >= 25 && (b = Math.atan2(Math.abs(d), Math.abs(p)) * 180 / Math.PI,
        i.isScrolling = t.isHorizontal() ? b > r.touchAngle : 90 - b > r.touchAngle)
    }
    if (i.isScrolling && t.emit("touchMoveOpposite", l),
    typeof i.startMoving > "u" && (n.currentX !== n.startX || n.currentY !== n.startY) && (i.startMoving = !0),
    i.isScrolling) {
        i.isTouched = !1;
        return
    }
    if (!i.startMoving)
        return;
    t.allowClick = !1,
    !r.cssMode && l.cancelable && l.preventDefault(),
    r.touchMoveStopPropagation && !r.nested && l.stopPropagation();
    let g = t.isHorizontal() ? p : d
      , h = t.isHorizontal() ? n.currentX - n.previousX : n.currentY - n.previousY;
    r.oneWayMovement && (g = Math.abs(g) * (o ? 1 : -1),
    h = Math.abs(h) * (o ? 1 : -1)),
    n.diff = g,
    g *= r.touchRatio,
    o && (g = -g,
    h = -h);
    const v = t.touchesDirection;
    t.swipeDirection = g > 0 ? "prev" : "next",
    t.touchesDirection = h > 0 ? "prev" : "next";
    const y = t.params.loop && !r.cssMode
      , m = t.touchesDirection === "next" && t.allowSlideNext || t.touchesDirection === "prev" && t.allowSlidePrev;
    if (!i.isMoved) {
        if (y && m && t.loopFix({
            direction: t.swipeDirection
        }),
        i.startTranslate = t.getTranslate(),
        t.setTransition(0),
        t.animating) {
            const b = new window.CustomEvent("transitionend",{
                bubbles: !0,
                cancelable: !0
            });
            t.wrapperEl.dispatchEvent(b)
        }
        i.allowMomentumBounce = !1,
        r.grabCursor && (t.allowSlideNext === !0 || t.allowSlidePrev === !0) && t.setGrabCursor(!0),
        t.emit("sliderFirstMove", l)
    }
    let _;
    if (new Date().getTime(),
    i.isMoved && i.allowThresholdMove && v !== t.touchesDirection && y && m && Math.abs(g) >= 1) {
        Object.assign(n, {
            startX: c,
            startY: f,
            currentX: c,
            currentY: f,
            startTranslate: i.currentTranslate
        }),
        i.loopSwapReset = !0,
        i.startTranslate = i.currentTranslate;
        return
    }
    t.emit("sliderMove", l),
    i.isMoved = !0,
    i.currentTranslate = g + i.startTranslate;
    let w = !0
      , S = r.resistanceRatio;
    if (r.touchReleaseOnEdges && (S = 0),
    g > 0 ? (y && m && !_ && i.allowThresholdMove && i.currentTranslate > (r.centeredSlides ? t.minTranslate() - t.slidesSizesGrid[t.activeIndex + 1] : t.minTranslate()) && t.loopFix({
        direction: "prev",
        setTranslate: !0,
        activeSlideIndex: 0
    }),
    i.currentTranslate > t.minTranslate() && (w = !1,
    r.resistance && (i.currentTranslate = t.minTranslate() - 1 + (-t.minTranslate() + i.startTranslate + g) ** S))) : g < 0 && (y && m && !_ && i.allowThresholdMove && i.currentTranslate < (r.centeredSlides ? t.maxTranslate() + t.slidesSizesGrid[t.slidesSizesGrid.length - 1] : t.maxTranslate()) && t.loopFix({
        direction: "next",
        setTranslate: !0,
        activeSlideIndex: t.slides.length - (r.slidesPerView === "auto" ? t.slidesPerViewDynamic() : Math.ceil(parseFloat(r.slidesPerView, 10)))
    }),
    i.currentTranslate < t.maxTranslate() && (w = !1,
    r.resistance && (i.currentTranslate = t.maxTranslate() + 1 - (t.maxTranslate() - i.startTranslate - g) ** S))),
    w && (l.preventedByNestedSwiper = !0),
    !t.allowSlideNext && t.swipeDirection === "next" && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate),
    !t.allowSlidePrev && t.swipeDirection === "prev" && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate),
    !t.allowSlidePrev && !t.allowSlideNext && (i.currentTranslate = i.startTranslate),
    r.threshold > 0)
        if (Math.abs(g) > r.threshold || i.allowThresholdMove) {
            if (!i.allowThresholdMove) {
                i.allowThresholdMove = !0,
                n.startX = n.currentX,
                n.startY = n.currentY,
                i.currentTranslate = i.startTranslate,
                n.diff = t.isHorizontal() ? n.currentX - n.startX : n.currentY - n.startY;
                return
            }
        } else {
            i.currentTranslate = i.startTranslate;
            return
        }
    !r.followFinger || r.cssMode || ((r.freeMode && r.freeMode.enabled && t.freeMode || r.watchSlidesProgress) && (t.updateActiveIndex(),
    t.updateSlidesClasses()),
    r.freeMode && r.freeMode.enabled && t.freeMode && t.freeMode.onTouchMove(),
    t.updateProgress(i.currentTranslate),
    t.setTranslate(i.currentTranslate))
}
function pf(s) {
    const e = this
      , t = e.touchEventsData;
    let i = s;
    i.originalEvent && (i = i.originalEvent);
    let r;
    if (i.type === "touchend" || i.type === "touchcancel") {
        if (r = [...i.changedTouches].filter(S=>S.identifier === t.touchId)[0],
        !r || r.identifier !== t.touchId)
            return
    } else {
        if (t.touchId !== null || i.pointerId !== t.pointerId)
            return;
        r = i
    }
    if (["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(i.type) && !(["pointercancel", "contextmenu"].includes(i.type) && (e.browser.isSafari || e.browser.isWebView)))
        return;
    t.pointerId = null,
    t.touchId = null;
    const {params: o, touches: a, rtlTranslate: l, slidesGrid: u, enabled: c} = e;
    if (!c || !o.simulateTouch && i.pointerType === "mouse")
        return;
    if (t.allowTouchCallbacks && e.emit("touchEnd", i),
    t.allowTouchCallbacks = !1,
    !t.isTouched) {
        t.isMoved && o.grabCursor && e.setGrabCursor(!1),
        t.isMoved = !1,
        t.startMoving = !1;
        return
    }
    o.grabCursor && t.isMoved && t.isTouched && (e.allowSlideNext === !0 || e.allowSlidePrev === !0) && e.setGrabCursor(!1);
    const f = os()
      , p = f - t.touchStartTime;
    if (e.allowClick) {
        const S = i.path || i.composedPath && i.composedPath();
        e.updateClickedSlide(S && S[0] || i.target, S),
        e.emit("tap click", i),
        p < 300 && f - t.lastClickTime < 300 && e.emit("doubleTap doubleClick", i)
    }
    if (t.lastClickTime = os(),
    ss(()=>{
        e.destroyed || (e.allowClick = !0)
    }
    ),
    !t.isTouched || !t.isMoved || !e.swipeDirection || a.diff === 0 && !t.loopSwapReset || t.currentTranslate === t.startTranslate && !t.loopSwapReset) {
        t.isTouched = !1,
        t.isMoved = !1,
        t.startMoving = !1;
        return
    }
    t.isTouched = !1,
    t.isMoved = !1,
    t.startMoving = !1;
    let d;
    if (o.followFinger ? d = l ? e.translate : -e.translate : d = -t.currentTranslate,
    o.cssMode)
        return;
    if (o.freeMode && o.freeMode.enabled) {
        e.freeMode.onTouchEnd({
            currentPos: d
        });
        return
    }
    const g = d >= -e.maxTranslate() && !e.params.loop;
    let h = 0
      , v = e.slidesSizesGrid[0];
    for (let S = 0; S < u.length; S += S < o.slidesPerGroupSkip ? 1 : o.slidesPerGroup) {
        const b = S < o.slidesPerGroupSkip - 1 ? 1 : o.slidesPerGroup;
        typeof u[S + b] < "u" ? (g || d >= u[S] && d < u[S + b]) && (h = S,
        v = u[S + b] - u[S]) : (g || d >= u[S]) && (h = S,
        v = u[u.length - 1] - u[u.length - 2])
    }
    let y = null
      , m = null;
    o.rewind && (e.isBeginning ? m = o.virtual && o.virtual.enabled && e.virtual ? e.virtual.slides.length - 1 : e.slides.length - 1 : e.isEnd && (y = 0));
    const _ = (d - u[h]) / v
      , w = h < o.slidesPerGroupSkip - 1 ? 1 : o.slidesPerGroup;
    if (p > o.longSwipesMs) {
        if (!o.longSwipes) {
            e.slideTo(e.activeIndex);
            return
        }
        e.swipeDirection === "next" && (_ >= o.longSwipesRatio ? e.slideTo(o.rewind && e.isEnd ? y : h + w) : e.slideTo(h)),
        e.swipeDirection === "prev" && (_ > 1 - o.longSwipesRatio ? e.slideTo(h + w) : m !== null && _ < 0 && Math.abs(_) > o.longSwipesRatio ? e.slideTo(m) : e.slideTo(h))
    } else {
        if (!o.shortSwipes) {
            e.slideTo(e.activeIndex);
            return
        }
        e.navigation && (i.target === e.navigation.nextEl || i.target === e.navigation.prevEl) ? i.target === e.navigation.nextEl ? e.slideTo(h + w) : e.slideTo(h) : (e.swipeDirection === "next" && e.slideTo(y !== null ? y : h + w),
        e.swipeDirection === "prev" && e.slideTo(m !== null ? m : h))
    }
}
function Ea() {
    const s = this
      , {params: e, el: t} = s;
    if (t && t.offsetWidth === 0)
        return;
    e.breakpoints && s.setBreakpoint();
    const {allowSlideNext: i, allowSlidePrev: r, snapGrid: n} = s
      , o = s.virtual && s.params.virtual.enabled;
    s.allowSlideNext = !0,
    s.allowSlidePrev = !0,
    s.updateSize(),
    s.updateSlides(),
    s.updateSlidesClasses();
    const a = o && e.loop;
    (e.slidesPerView === "auto" || e.slidesPerView > 1) && s.isEnd && !s.isBeginning && !s.params.centeredSlides && !a ? s.slideTo(s.slides.length - 1, 0, !1, !0) : s.params.loop && !o ? s.slideToLoop(s.realIndex, 0, !1, !0) : s.slideTo(s.activeIndex, 0, !1, !0),
    s.autoplay && s.autoplay.running && s.autoplay.paused && (clearTimeout(s.autoplay.resizeTimeout),
    s.autoplay.resizeTimeout = setTimeout(()=>{
        s.autoplay && s.autoplay.running && s.autoplay.paused && s.autoplay.resume()
    }
    , 500)),
    s.allowSlidePrev = r,
    s.allowSlideNext = i,
    s.params.watchOverflow && n !== s.snapGrid && s.checkOverflow()
}
function hf(s) {
    const e = this;
    e.enabled && (e.allowClick || (e.params.preventClicks && s.preventDefault(),
    e.params.preventClicksPropagation && e.animating && (s.stopPropagation(),
    s.stopImmediatePropagation())))
}
function mf() {
    const s = this
      , {wrapperEl: e, rtlTranslate: t, enabled: i} = s;
    if (!i)
        return;
    s.previousTranslate = s.translate,
    s.isHorizontal() ? s.translate = -e.scrollLeft : s.translate = -e.scrollTop,
    s.translate === 0 && (s.translate = 0),
    s.updateActiveIndex(),
    s.updateSlidesClasses();
    let r;
    const n = s.maxTranslate() - s.minTranslate();
    n === 0 ? r = 0 : r = (s.translate - s.minTranslate()) / n,
    r !== s.progress && s.updateProgress(t ? -s.translate : s.translate),
    s.emit("setTranslate", s.translate, !1)
}
function gf(s) {
    const e = this;
    Wn(e, s.target),
    !(e.params.cssMode || e.params.slidesPerView !== "auto" && !e.params.autoHeight) && e.update()
}
function _f() {
    const s = this;
    s.documentTouchHandlerProceeded || (s.documentTouchHandlerProceeded = !0,
    s.params.touchReleaseOnEdges && (s.el.style.touchAction = "auto"))
}
const fu = (s,e)=>{
    const t = hi()
      , {params: i, el: r, wrapperEl: n, device: o} = s
      , a = !!i.nested
      , l = e === "on" ? "addEventListener" : "removeEventListener"
      , u = e;
    t[l]("touchstart", s.onDocumentTouchStart, {
        passive: !1,
        capture: a
    }),
    r[l]("touchstart", s.onTouchStart, {
        passive: !1
    }),
    r[l]("pointerdown", s.onTouchStart, {
        passive: !1
    }),
    t[l]("touchmove", s.onTouchMove, {
        passive: !1,
        capture: a
    }),
    t[l]("pointermove", s.onTouchMove, {
        passive: !1,
        capture: a
    }),
    t[l]("touchend", s.onTouchEnd, {
        passive: !0
    }),
    t[l]("pointerup", s.onTouchEnd, {
        passive: !0
    }),
    t[l]("pointercancel", s.onTouchEnd, {
        passive: !0
    }),
    t[l]("touchcancel", s.onTouchEnd, {
        passive: !0
    }),
    t[l]("pointerout", s.onTouchEnd, {
        passive: !0
    }),
    t[l]("pointerleave", s.onTouchEnd, {
        passive: !0
    }),
    t[l]("contextmenu", s.onTouchEnd, {
        passive: !0
    }),
    (i.preventClicks || i.preventClicksPropagation) && r[l]("click", s.onClick, !0),
    i.cssMode && n[l]("scroll", s.onScroll),
    i.updateOnWindowResize ? s[u](o.ios || o.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", Ea, !0) : s[u]("observerUpdate", Ea, !0),
    r[l]("load", s.onLoad, {
        capture: !0
    })
}
;
function vf() {
    const s = this
      , {params: e} = s;
    s.onTouchStart = df.bind(s),
    s.onTouchMove = ff.bind(s),
    s.onTouchEnd = pf.bind(s),
    s.onDocumentTouchStart = _f.bind(s),
    e.cssMode && (s.onScroll = mf.bind(s)),
    s.onClick = hf.bind(s),
    s.onLoad = gf.bind(s),
    fu(s, "on")
}
function yf() {
    fu(this, "off")
}
var wf = {
    attachEvents: vf,
    detachEvents: yf
};
const Ca = (s,e)=>s.grid && e.grid && e.grid.rows > 1;
function Sf() {
    const s = this
      , {realIndex: e, initialized: t, params: i, el: r} = s
      , n = i.breakpoints;
    if (!n || n && Object.keys(n).length === 0)
        return;
    const o = s.getBreakpoint(n, s.params.breakpointsBase, s.el);
    if (!o || s.currentBreakpoint === o)
        return;
    const l = (o in n ? n[o] : void 0) || s.originalParams
      , u = Ca(s, i)
      , c = Ca(s, l)
      , f = i.enabled;
    u && !c ? (r.classList.remove(`${i.containerModifierClass}grid`, `${i.containerModifierClass}grid-column`),
    s.emitContainerClasses()) : !u && c && (r.classList.add(`${i.containerModifierClass}grid`),
    (l.grid.fill && l.grid.fill === "column" || !l.grid.fill && i.grid.fill === "column") && r.classList.add(`${i.containerModifierClass}grid-column`),
    s.emitContainerClasses()),
    ["navigation", "pagination", "scrollbar"].forEach(y=>{
        if (typeof l[y] > "u")
            return;
        const m = i[y] && i[y].enabled
          , _ = l[y] && l[y].enabled;
        m && !_ && s[y].disable(),
        !m && _ && s[y].enable()
    }
    );
    const p = l.direction && l.direction !== i.direction
      , d = i.loop && (l.slidesPerView !== i.slidesPerView || p)
      , g = i.loop;
    p && t && s.changeDirection(),
    Tt(s.params, l);
    const h = s.params.enabled
      , v = s.params.loop;
    Object.assign(s, {
        allowTouchMove: s.params.allowTouchMove,
        allowSlideNext: s.params.allowSlideNext,
        allowSlidePrev: s.params.allowSlidePrev
    }),
    f && !h ? s.disable() : !f && h && s.enable(),
    s.currentBreakpoint = o,
    s.emit("_beforeBreakpoint", l),
    t && (d ? (s.loopDestroy(),
    s.loopCreate(e),
    s.updateSlides()) : !g && v ? (s.loopCreate(e),
    s.updateSlides()) : g && !v && s.loopDestroy()),
    s.emit("breakpoint", l)
}
function xf(s, e, t) {
    if (e === void 0 && (e = "window"),
    !s || e === "container" && !t)
        return;
    let i = !1;
    const r = Mt()
      , n = e === "window" ? r.innerHeight : t.clientHeight
      , o = Object.keys(s).map(a=>{
        if (typeof a == "string" && a.indexOf("@") === 0) {
            const l = parseFloat(a.substr(1));
            return {
                value: n * l,
                point: a
            }
        }
        return {
            value: a,
            point: a
        }
    }
    );
    o.sort((a,l)=>parseInt(a.value, 10) - parseInt(l.value, 10));
    for (let a = 0; a < o.length; a += 1) {
        const {point: l, value: u} = o[a];
        e === "window" ? r.matchMedia(`(min-width: ${u}px)`).matches && (i = l) : u <= t.clientWidth && (i = l)
    }
    return i || "max"
}
var Tf = {
    setBreakpoint: Sf,
    getBreakpoint: xf
};
function bf(s, e) {
    const t = [];
    return s.forEach(i=>{
        typeof i == "object" ? Object.keys(i).forEach(r=>{
            i[r] && t.push(e + r)
        }
        ) : typeof i == "string" && t.push(e + i)
    }
    ),
    t
}
function Ef() {
    const s = this
      , {classNames: e, params: t, rtl: i, el: r, device: n} = s
      , o = bf(["initialized", t.direction, {
        "free-mode": s.params.freeMode && t.freeMode.enabled
    }, {
        autoheight: t.autoHeight
    }, {
        rtl: i
    }, {
        grid: t.grid && t.grid.rows > 1
    }, {
        "grid-column": t.grid && t.grid.rows > 1 && t.grid.fill === "column"
    }, {
        android: n.android
    }, {
        ios: n.ios
    }, {
        "css-mode": t.cssMode
    }, {
        centered: t.cssMode && t.centeredSlides
    }, {
        "watch-progress": t.watchSlidesProgress
    }], t.containerModifierClass);
    e.push(...o),
    r.classList.add(...e),
    s.emitContainerClasses()
}
function Cf() {
    const s = this
      , {el: e, classNames: t} = s;
    e.classList.remove(...t),
    s.emitContainerClasses()
}
var Pf = {
    addClasses: Ef,
    removeClasses: Cf
};
function Mf() {
    const s = this
      , {isLocked: e, params: t} = s
      , {slidesOffsetBefore: i} = t;
    if (i) {
        const r = s.slides.length - 1
          , n = s.slidesGrid[r] + s.slidesSizesGrid[r] + i * 2;
        s.isLocked = s.size > n
    } else
        s.isLocked = s.snapGrid.length === 1;
    t.allowSlideNext === !0 && (s.allowSlideNext = !s.isLocked),
    t.allowSlidePrev === !0 && (s.allowSlidePrev = !s.isLocked),
    e && e !== s.isLocked && (s.isEnd = !1),
    e !== s.isLocked && s.emit(s.isLocked ? "lock" : "unlock")
}
var Af = {
    checkOverflow: Mf
}
  , Pa = {
    init: !0,
    direction: "horizontal",
    oneWayMovement: !1,
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    eventsPrefix: "swiper",
    enabled: !0,
    focusableElements: "input, select, option, textarea, button, video, label",
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: "slide",
    breakpoints: void 0,
    breakpointsBase: "window",
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !0,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: .5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 5,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: .85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    loop: !1,
    loopAddBlankSlides: !0,
    loopAdditionalSlides: 0,
    loopPreventsSliding: !0,
    rewind: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    passiveListeners: !0,
    maxBackfaceHiddenSlides: 10,
    containerModifierClass: "swiper-",
    slideClass: "swiper-slide",
    slideBlankClass: "swiper-slide-blank",
    slideActiveClass: "swiper-slide-active",
    slideVisibleClass: "swiper-slide-visible",
    slideFullyVisibleClass: "swiper-slide-fully-visible",
    slideNextClass: "swiper-slide-next",
    slidePrevClass: "swiper-slide-prev",
    wrapperClass: "swiper-wrapper",
    lazyPreloaderClass: "swiper-lazy-preloader",
    lazyPreloadPrevNext: 0,
    runCallbacksOnInit: !0,
    _emitClasses: !1
};
function kf(s, e) {
    return function(i) {
        i === void 0 && (i = {});
        const r = Object.keys(i)[0]
          , n = i[r];
        if (typeof n != "object" || n === null) {
            Tt(e, i);
            return
        }
        if (s[r] === !0 && (s[r] = {
            enabled: !0
        }),
        r === "navigation" && s[r] && s[r].enabled && !s[r].prevEl && !s[r].nextEl && (s[r].auto = !0),
        ["pagination", "scrollbar"].indexOf(r) >= 0 && s[r] && s[r].enabled && !s[r].el && (s[r].auto = !0),
        !(r in s && "enabled"in n)) {
            Tt(e, i);
            return
        }
        typeof s[r] == "object" && !("enabled"in s[r]) && (s[r].enabled = !0),
        s[r] || (s[r] = {
            enabled: !1
        }),
        Tt(e, i)
    }
}
const zs = {
    eventsEmitter: Cd,
    update: Fd,
    translate: Gd,
    transition: Xd,
    slide: tf,
    loop: of,
    grabCursor: uf,
    events: wf,
    breakpoints: Tf,
    checkOverflow: Af,
    classes: Pf
}
  , Rs = {};
class lt {
    constructor() {
        let e, t;
        for (var i = arguments.length, r = new Array(i), n = 0; n < i; n++)
            r[n] = arguments[n];
        r.length === 1 && r[0].constructor && Object.prototype.toString.call(r[0]).slice(8, -1) === "Object" ? t = r[0] : [e,t] = r,
        t || (t = {}),
        t = Tt({}, t),
        e && !t.el && (t.el = e);
        const o = hi();
        if (t.el && typeof t.el == "string" && o.querySelectorAll(t.el).length > 1) {
            const c = [];
            return o.querySelectorAll(t.el).forEach(f=>{
                const p = Tt({}, t, {
                    el: f
                });
                c.push(new lt(p))
            }
            ),
            c
        }
        const a = this;
        a.__swiper__ = !0,
        a.support = cu(),
        a.device = Sd({
            userAgent: t.userAgent
        }),
        a.browser = Td(),
        a.eventsListeners = {},
        a.eventsAnyListeners = [],
        a.modules = [...a.__modules__],
        t.modules && Array.isArray(t.modules) && a.modules.push(...t.modules);
        const l = {};
        a.modules.forEach(c=>{
            c({
                params: t,
                swiper: a,
                extendParams: kf(t, l),
                on: a.on.bind(a),
                once: a.once.bind(a),
                off: a.off.bind(a),
                emit: a.emit.bind(a)
            })
        }
        );
        const u = Tt({}, Pa, l);
        return a.params = Tt({}, u, Rs, t),
        a.originalParams = Tt({}, a.params),
        a.passedParams = Tt({}, t),
        a.params && a.params.on && Object.keys(a.params.on).forEach(c=>{
            a.on(c, a.params.on[c])
        }
        ),
        a.params && a.params.onAny && a.onAny(a.params.onAny),
        Object.assign(a, {
            enabled: a.params.enabled,
            el: e,
            classNames: [],
            slides: [],
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal() {
                return a.params.direction === "horizontal"
            },
            isVertical() {
                return a.params.direction === "vertical"
            },
            activeIndex: 0,
            realIndex: 0,
            isBeginning: !0,
            isEnd: !1,
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: !1,
            cssOverflowAdjustment() {
                return Math.trunc(this.translate / 2 ** 23) * 2 ** 23
            },
            allowSlideNext: a.params.allowSlideNext,
            allowSlidePrev: a.params.allowSlidePrev,
            touchEventsData: {
                isTouched: void 0,
                isMoved: void 0,
                allowTouchCallbacks: void 0,
                touchStartTime: void 0,
                isScrolling: void 0,
                currentTranslate: void 0,
                startTranslate: void 0,
                allowThresholdMove: void 0,
                focusableElements: a.params.focusableElements,
                lastClickTime: 0,
                clickTimeout: void 0,
                velocities: [],
                allowMomentumBounce: void 0,
                startMoving: void 0,
                pointerId: null,
                touchId: null
            },
            allowClick: !0,
            allowTouchMove: a.params.allowTouchMove,
            touches: {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0
            },
            imagesToLoad: [],
            imagesLoaded: 0
        }),
        a.emit("_swiper"),
        a.params.init && a.init(),
        a
    }
    getDirectionLabel(e) {
        return this.isHorizontal() ? e : {
            width: "height",
            "margin-top": "margin-left",
            "margin-bottom ": "margin-right",
            "margin-left": "margin-top",
            "margin-right": "margin-bottom",
            "padding-left": "padding-top",
            "padding-right": "padding-bottom",
            marginRight: "marginBottom"
        }[e]
    }
    getSlideIndex(e) {
        const {slidesEl: t, params: i} = this
          , r = ti(t, `.${i.slideClass}, swiper-slide`)
          , n = us(r[0]);
        return us(e) - n
    }
    getSlideIndexByData(e) {
        return this.getSlideIndex(this.slides.filter(t=>t.getAttribute("data-swiper-slide-index") * 1 === e)[0])
    }
    recalcSlides() {
        const e = this
          , {slidesEl: t, params: i} = e;
        e.slides = ti(t, `.${i.slideClass}, swiper-slide`)
    }
    enable() {
        const e = this;
        e.enabled || (e.enabled = !0,
        e.params.grabCursor && e.setGrabCursor(),
        e.emit("enable"))
    }
    disable() {
        const e = this;
        e.enabled && (e.enabled = !1,
        e.params.grabCursor && e.unsetGrabCursor(),
        e.emit("disable"))
    }
    setProgress(e, t) {
        const i = this;
        e = Math.min(Math.max(e, 0), 1);
        const r = i.minTranslate()
          , o = (i.maxTranslate() - r) * e + r;
        i.translateTo(o, typeof t > "u" ? 0 : t),
        i.updateActiveIndex(),
        i.updateSlidesClasses()
    }
    emitContainerClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el)
            return;
        const t = e.el.className.split(" ").filter(i=>i.indexOf("swiper") === 0 || i.indexOf(e.params.containerModifierClass) === 0);
        e.emit("_containerClasses", t.join(" "))
    }
    getSlideClasses(e) {
        const t = this;
        return t.destroyed ? "" : e.className.split(" ").filter(i=>i.indexOf("swiper-slide") === 0 || i.indexOf(t.params.slideClass) === 0).join(" ")
    }
    emitSlidesClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el)
            return;
        const t = [];
        e.slides.forEach(i=>{
            const r = e.getSlideClasses(i);
            t.push({
                slideEl: i,
                classNames: r
            }),
            e.emit("_slideClass", i, r)
        }
        ),
        e.emit("_slideClasses", t)
    }
    slidesPerViewDynamic(e, t) {
        e === void 0 && (e = "current"),
        t === void 0 && (t = !1);
        const i = this
          , {params: r, slides: n, slidesGrid: o, slidesSizesGrid: a, size: l, activeIndex: u} = i;
        let c = 1;
        if (typeof r.slidesPerView == "number")
            return r.slidesPerView;
        if (r.centeredSlides) {
            let f = n[u] ? n[u].swiperSlideSize : 0, p;
            for (let d = u + 1; d < n.length; d += 1)
                n[d] && !p && (f += n[d].swiperSlideSize,
                c += 1,
                f > l && (p = !0));
            for (let d = u - 1; d >= 0; d -= 1)
                n[d] && !p && (f += n[d].swiperSlideSize,
                c += 1,
                f > l && (p = !0))
        } else if (e === "current")
            for (let f = u + 1; f < n.length; f += 1)
                (t ? o[f] + a[f] - o[u] < l : o[f] - o[u] < l) && (c += 1);
        else
            for (let f = u - 1; f >= 0; f -= 1)
                o[u] - o[f] < l && (c += 1);
        return c
    }
    update() {
        const e = this;
        if (!e || e.destroyed)
            return;
        const {snapGrid: t, params: i} = e;
        i.breakpoints && e.setBreakpoint(),
        [...e.el.querySelectorAll('[loading="lazy"]')].forEach(o=>{
            o.complete && Wn(e, o)
        }
        ),
        e.updateSize(),
        e.updateSlides(),
        e.updateProgress(),
        e.updateSlidesClasses();
        function r() {
            const o = e.rtlTranslate ? e.translate * -1 : e.translate
              , a = Math.min(Math.max(o, e.maxTranslate()), e.minTranslate());
            e.setTranslate(a),
            e.updateActiveIndex(),
            e.updateSlidesClasses()
        }
        let n;
        if (i.freeMode && i.freeMode.enabled && !i.cssMode)
            r(),
            i.autoHeight && e.updateAutoHeight();
        else {
            if ((i.slidesPerView === "auto" || i.slidesPerView > 1) && e.isEnd && !i.centeredSlides) {
                const o = e.virtual && i.virtual.enabled ? e.virtual.slides : e.slides;
                n = e.slideTo(o.length - 1, 0, !1, !0)
            } else
                n = e.slideTo(e.activeIndex, 0, !1, !0);
            n || r()
        }
        i.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
        e.emit("update")
    }
    changeDirection(e, t) {
        t === void 0 && (t = !0);
        const i = this
          , r = i.params.direction;
        return e || (e = r === "horizontal" ? "vertical" : "horizontal"),
        e === r || e !== "horizontal" && e !== "vertical" || (i.el.classList.remove(`${i.params.containerModifierClass}${r}`),
        i.el.classList.add(`${i.params.containerModifierClass}${e}`),
        i.emitContainerClasses(),
        i.params.direction = e,
        i.slides.forEach(n=>{
            e === "vertical" ? n.style.width = "" : n.style.height = ""
        }
        ),
        i.emit("changeDirection"),
        t && i.update()),
        i
    }
    changeLanguageDirection(e) {
        const t = this;
        t.rtl && e === "rtl" || !t.rtl && e === "ltr" || (t.rtl = e === "rtl",
        t.rtlTranslate = t.params.direction === "horizontal" && t.rtl,
        t.rtl ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`),
        t.el.dir = "rtl") : (t.el.classList.remove(`${t.params.containerModifierClass}rtl`),
        t.el.dir = "ltr"),
        t.update())
    }
    mount(e) {
        const t = this;
        if (t.mounted)
            return !0;
        let i = e || t.params.el;
        if (typeof i == "string" && (i = document.querySelector(i)),
        !i)
            return !1;
        i.swiper = t,
        i.parentNode && i.parentNode.host && i.parentNode.host.nodeName === "SWIPER-CONTAINER" && (t.isElement = !0);
        const r = ()=>`.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
        let o = i && i.shadowRoot && i.shadowRoot.querySelector ? i.shadowRoot.querySelector(r()) : ti(i, r())[0];
        return !o && t.params.createElements && (o = ls("div", t.params.wrapperClass),
        i.append(o),
        ti(i, `.${t.params.slideClass}`).forEach(a=>{
            o.append(a)
        }
        )),
        Object.assign(t, {
            el: i,
            wrapperEl: o,
            slidesEl: t.isElement && !i.parentNode.host.slideSlots ? i.parentNode.host : o,
            hostEl: t.isElement ? i.parentNode.host : i,
            mounted: !0,
            rtl: i.dir.toLowerCase() === "rtl" || Ci(i, "direction") === "rtl",
            rtlTranslate: t.params.direction === "horizontal" && (i.dir.toLowerCase() === "rtl" || Ci(i, "direction") === "rtl"),
            wrongRTL: Ci(o, "display") === "-webkit-box"
        }),
        !0
    }
    init(e) {
        const t = this;
        if (t.initialized || t.mount(e) === !1)
            return t;
        t.emit("beforeInit"),
        t.params.breakpoints && t.setBreakpoint(),
        t.addClasses(),
        t.updateSize(),
        t.updateSlides(),
        t.params.watchOverflow && t.checkOverflow(),
        t.params.grabCursor && t.enabled && t.setGrabCursor(),
        t.params.loop && t.virtual && t.params.virtual.enabled ? t.slideTo(t.params.initialSlide + t.virtual.slidesBefore, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0),
        t.params.loop && t.loopCreate(),
        t.attachEvents();
        const r = [...t.el.querySelectorAll('[loading="lazy"]')];
        return t.isElement && r.push(...t.hostEl.querySelectorAll('[loading="lazy"]')),
        r.forEach(n=>{
            n.complete ? Wn(t, n) : n.addEventListener("load", o=>{
                Wn(t, o.target)
            }
            )
        }
        ),
        co(t),
        t.initialized = !0,
        co(t),
        t.emit("init"),
        t.emit("afterInit"),
        t
    }
    destroy(e, t) {
        e === void 0 && (e = !0),
        t === void 0 && (t = !0);
        const i = this
          , {params: r, el: n, wrapperEl: o, slides: a} = i;
        return typeof i.params > "u" || i.destroyed || (i.emit("beforeDestroy"),
        i.initialized = !1,
        i.detachEvents(),
        r.loop && i.loopDestroy(),
        t && (i.removeClasses(),
        n.removeAttribute("style"),
        o.removeAttribute("style"),
        a && a.length && a.forEach(l=>{
            l.classList.remove(r.slideVisibleClass, r.slideFullyVisibleClass, r.slideActiveClass, r.slideNextClass, r.slidePrevClass),
            l.removeAttribute("style"),
            l.removeAttribute("data-swiper-slide-index")
        }
        )),
        i.emit("destroy"),
        Object.keys(i.eventsListeners).forEach(l=>{
            i.off(l)
        }
        ),
        e !== !1 && (i.el.swiper = null,
        pd(i)),
        i.destroyed = !0),
        null
    }
    static extendDefaults(e) {
        Tt(Rs, e)
    }
    static get extendedDefaults() {
        return Rs
    }
    static get defaults() {
        return Pa
    }
    static installModule(e) {
        lt.prototype.__modules__ || (lt.prototype.__modules__ = []);
        const t = lt.prototype.__modules__;
        typeof e == "function" && t.indexOf(e) < 0 && t.push(e)
    }
    static use(e) {
        return Array.isArray(e) ? (e.forEach(t=>lt.installModule(t)),
        lt) : (lt.installModule(e),
        lt)
    }
}
Object.keys(zs).forEach(s=>{
    Object.keys(zs[s]).forEach(e=>{
        lt.prototype[e] = zs[s][e]
    }
    )
}
);
lt.use([bd, Ed]);
function pu(s, e, t, i) {
    return s.params.createElements && Object.keys(i).forEach(r=>{
        if (!t[r] && t.auto === !0) {
            let n = ti(s.el, `.${i[r]}`)[0];
            n || (n = ls("div", i[r]),
            n.className = i[r],
            s.el.append(n)),
            t[r] = n,
            e[r] = n
        }
    }
    ),
    t
}
function Ma(s) {
    let {swiper: e, extendParams: t, on: i, emit: r} = s;
    t({
        navigation: {
            nextEl: null,
            prevEl: null,
            hideOnClick: !1,
            disabledClass: "swiper-button-disabled",
            hiddenClass: "swiper-button-hidden",
            lockClass: "swiper-button-lock",
            navigationDisabledClass: "swiper-navigation-disabled"
        }
    }),
    e.navigation = {
        nextEl: null,
        prevEl: null
    };
    const n = h=>(Array.isArray(h) ? h : [h]).filter(v=>!!v);
    function o(h) {
        let v;
        return h && typeof h == "string" && e.isElement && (v = e.el.querySelector(h),
        v) ? v : (h && (typeof h == "string" && (v = [...document.querySelectorAll(h)]),
        e.params.uniqueNavElements && typeof h == "string" && v.length > 1 && e.el.querySelectorAll(h).length === 1 && (v = e.el.querySelector(h))),
        h && !v ? h : v)
    }
    function a(h, v) {
        const y = e.params.navigation;
        h = n(h),
        h.forEach(m=>{
            m && (m.classList[v ? "add" : "remove"](...y.disabledClass.split(" ")),
            m.tagName === "BUTTON" && (m.disabled = v),
            e.params.watchOverflow && e.enabled && m.classList[e.isLocked ? "add" : "remove"](y.lockClass))
        }
        )
    }
    function l() {
        const {nextEl: h, prevEl: v} = e.navigation;
        if (e.params.loop) {
            a(v, !1),
            a(h, !1);
            return
        }
        a(v, e.isBeginning && !e.params.rewind),
        a(h, e.isEnd && !e.params.rewind)
    }
    function u(h) {
        h.preventDefault(),
        !(e.isBeginning && !e.params.loop && !e.params.rewind) && (e.slidePrev(),
        r("navigationPrev"))
    }
    function c(h) {
        h.preventDefault(),
        !(e.isEnd && !e.params.loop && !e.params.rewind) && (e.slideNext(),
        r("navigationNext"))
    }
    function f() {
        const h = e.params.navigation;
        if (e.params.navigation = pu(e, e.originalParams.navigation, e.params.navigation, {
            nextEl: "swiper-button-next",
            prevEl: "swiper-button-prev"
        }),
        !(h.nextEl || h.prevEl))
            return;
        let v = o(h.nextEl)
          , y = o(h.prevEl);
        Object.assign(e.navigation, {
            nextEl: v,
            prevEl: y
        }),
        v = n(v),
        y = n(y);
        const m = (_,w)=>{
            _ && _.addEventListener("click", w === "next" ? c : u),
            !e.enabled && _ && _.classList.add(...h.lockClass.split(" "))
        }
        ;
        v.forEach(_=>m(_, "next")),
        y.forEach(_=>m(_, "prev"))
    }
    function p() {
        let {nextEl: h, prevEl: v} = e.navigation;
        h = n(h),
        v = n(v);
        const y = (m,_)=>{
            m.removeEventListener("click", _ === "next" ? c : u),
            m.classList.remove(...e.params.navigation.disabledClass.split(" "))
        }
        ;
        h.forEach(m=>y(m, "next")),
        v.forEach(m=>y(m, "prev"))
    }
    i("init", ()=>{
        e.params.navigation.enabled === !1 ? g() : (f(),
        l())
    }
    ),
    i("toEdge fromEdge lock unlock", ()=>{
        l()
    }
    ),
    i("destroy", ()=>{
        p()
    }
    ),
    i("enable disable", ()=>{
        let {nextEl: h, prevEl: v} = e.navigation;
        if (h = n(h),
        v = n(v),
        e.enabled) {
            l();
            return
        }
        [...h, ...v].filter(y=>!!y).forEach(y=>y.classList.add(e.params.navigation.lockClass))
    }
    ),
    i("click", (h,v)=>{
        let {nextEl: y, prevEl: m} = e.navigation;
        y = n(y),
        m = n(m);
        const _ = v.target;
        if (e.params.navigation.hideOnClick && !m.includes(_) && !y.includes(_)) {
            if (e.pagination && e.params.pagination && e.params.pagination.clickable && (e.pagination.el === _ || e.pagination.el.contains(_)))
                return;
            let w;
            y.length ? w = y[0].classList.contains(e.params.navigation.hiddenClass) : m.length && (w = m[0].classList.contains(e.params.navigation.hiddenClass)),
            r(w === !0 ? "navigationShow" : "navigationHide"),
            [...y, ...m].filter(S=>!!S).forEach(S=>S.classList.toggle(e.params.navigation.hiddenClass))
        }
    }
    );
    const d = ()=>{
        e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")),
        f(),
        l()
    }
      , g = ()=>{
        e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")),
        p()
    }
    ;
    Object.assign(e.navigation, {
        enable: d,
        disable: g,
        update: l,
        init: f,
        destroy: p
    })
}
function qr(s) {
    return s === void 0 && (s = ""),
    `.${s.trim().replace(/([\.:!+\/])/g, "\\$1").replace(/ /g, ".")}`
}
function Of(s) {
    let {swiper: e, extendParams: t, on: i, emit: r} = s;
    const n = "swiper-pagination";
    t({
        pagination: {
            el: null,
            bulletElement: "span",
            clickable: !1,
            hideOnClick: !1,
            renderBullet: null,
            renderProgressbar: null,
            renderFraction: null,
            renderCustom: null,
            progressbarOpposite: !1,
            type: "bullets",
            dynamicBullets: !1,
            dynamicMainBullets: 1,
            formatFractionCurrent: m=>m,
            formatFractionTotal: m=>m,
            bulletClass: `${n}-bullet`,
            bulletActiveClass: `${n}-bullet-active`,
            modifierClass: `${n}-`,
            currentClass: `${n}-current`,
            totalClass: `${n}-total`,
            hiddenClass: `${n}-hidden`,
            progressbarFillClass: `${n}-progressbar-fill`,
            progressbarOppositeClass: `${n}-progressbar-opposite`,
            clickableClass: `${n}-clickable`,
            lockClass: `${n}-lock`,
            horizontalClass: `${n}-horizontal`,
            verticalClass: `${n}-vertical`,
            paginationDisabledClass: `${n}-disabled`
        }
    }),
    e.pagination = {
        el: null,
        bullets: []
    };
    let o, a = 0;
    const l = m=>(Array.isArray(m) ? m : [m]).filter(_=>!!_);
    function u() {
        return !e.params.pagination.el || !e.pagination.el || Array.isArray(e.pagination.el) && e.pagination.el.length === 0
    }
    function c(m, _) {
        const {bulletActiveClass: w} = e.params.pagination;
        m && (m = m[`${_ === "prev" ? "previous" : "next"}ElementSibling`],
        m && (m.classList.add(`${w}-${_}`),
        m = m[`${_ === "prev" ? "previous" : "next"}ElementSibling`],
        m && m.classList.add(`${w}-${_}-${_}`)))
    }
    function f(m) {
        const _ = m.target.closest(qr(e.params.pagination.bulletClass));
        if (!_)
            return;
        m.preventDefault();
        const w = us(_) * e.params.slidesPerGroup;
        if (e.params.loop) {
            if (e.realIndex === w)
                return;
            e.slideToLoop(w)
        } else
            e.slideTo(w)
    }
    function p() {
        const m = e.rtl
          , _ = e.params.pagination;
        if (u())
            return;
        let w = e.pagination.el;
        w = l(w);
        let S, b;
        const E = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length
          , P = e.params.loop ? Math.ceil(E / e.params.slidesPerGroup) : e.snapGrid.length;
        if (e.params.loop ? (b = e.previousRealIndex || 0,
        S = e.params.slidesPerGroup > 1 ? Math.floor(e.realIndex / e.params.slidesPerGroup) : e.realIndex) : typeof e.snapIndex < "u" ? (S = e.snapIndex,
        b = e.previousSnapIndex) : (b = e.previousIndex || 0,
        S = e.activeIndex || 0),
        _.type === "bullets" && e.pagination.bullets && e.pagination.bullets.length > 0) {
            const C = e.pagination.bullets;
            let T, A, k;
            if (_.dynamicBullets && (o = uo(C[0], e.isHorizontal() ? "width" : "height", !0),
            w.forEach(L=>{
                L.style[e.isHorizontal() ? "width" : "height"] = `${o * (_.dynamicMainBullets + 4)}px`
            }
            ),
            _.dynamicMainBullets > 1 && b !== void 0 && (a += S - (b || 0),
            a > _.dynamicMainBullets - 1 ? a = _.dynamicMainBullets - 1 : a < 0 && (a = 0)),
            T = Math.max(S - a, 0),
            A = T + (Math.min(C.length, _.dynamicMainBullets) - 1),
            k = (A + T) / 2),
            C.forEach(L=>{
                const I = [...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map(D=>`${_.bulletActiveClass}${D}`)].map(D=>typeof D == "string" && D.includes(" ") ? D.split(" ") : D).flat();
                L.classList.remove(...I)
            }
            ),
            w.length > 1)
                C.forEach(L=>{
                    const I = us(L);
                    I === S ? L.classList.add(..._.bulletActiveClass.split(" ")) : e.isElement && L.setAttribute("part", "bullet"),
                    _.dynamicBullets && (I >= T && I <= A && L.classList.add(...`${_.bulletActiveClass}-main`.split(" ")),
                    I === T && c(L, "prev"),
                    I === A && c(L, "next"))
                }
                );
            else {
                const L = C[S];
                if (L && L.classList.add(..._.bulletActiveClass.split(" ")),
                e.isElement && C.forEach((I,D)=>{
                    I.setAttribute("part", D === S ? "bullet-active" : "bullet")
                }
                ),
                _.dynamicBullets) {
                    const I = C[T]
                      , D = C[A];
                    for (let N = T; N <= A; N += 1)
                        C[N] && C[N].classList.add(...`${_.bulletActiveClass}-main`.split(" "));
                    c(I, "prev"),
                    c(D, "next")
                }
            }
            if (_.dynamicBullets) {
                const L = Math.min(C.length, _.dynamicMainBullets + 4)
                  , I = (o * L - o) / 2 - k * o
                  , D = m ? "right" : "left";
                C.forEach(N=>{
                    N.style[e.isHorizontal() ? D : "top"] = `${I}px`
                }
                )
            }
        }
        w.forEach((C,T)=>{
            if (_.type === "fraction" && (C.querySelectorAll(qr(_.currentClass)).forEach(A=>{
                A.textContent = _.formatFractionCurrent(S + 1)
            }
            ),
            C.querySelectorAll(qr(_.totalClass)).forEach(A=>{
                A.textContent = _.formatFractionTotal(P)
            }
            )),
            _.type === "progressbar") {
                let A;
                _.progressbarOpposite ? A = e.isHorizontal() ? "vertical" : "horizontal" : A = e.isHorizontal() ? "horizontal" : "vertical";
                const k = (S + 1) / P;
                let L = 1
                  , I = 1;
                A === "horizontal" ? L = k : I = k,
                C.querySelectorAll(qr(_.progressbarFillClass)).forEach(D=>{
                    D.style.transform = `translate3d(0,0,0) scaleX(${L}) scaleY(${I})`,
                    D.style.transitionDuration = `${e.params.speed}ms`
                }
                )
            }
            _.type === "custom" && _.renderCustom ? (C.innerHTML = _.renderCustom(e, S + 1, P),
            T === 0 && r("paginationRender", C)) : (T === 0 && r("paginationRender", C),
            r("paginationUpdate", C)),
            e.params.watchOverflow && e.enabled && C.classList[e.isLocked ? "add" : "remove"](_.lockClass)
        }
        )
    }
    function d() {
        const m = e.params.pagination;
        if (u())
            return;
        const _ = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.grid && e.params.grid.rows > 1 ? e.slides.length / Math.ceil(e.params.grid.rows) : e.slides.length;
        let w = e.pagination.el;
        w = l(w);
        let S = "";
        if (m.type === "bullets") {
            let b = e.params.loop ? Math.ceil(_ / e.params.slidesPerGroup) : e.snapGrid.length;
            e.params.freeMode && e.params.freeMode.enabled && b > _ && (b = _);
            for (let E = 0; E < b; E += 1)
                m.renderBullet ? S += m.renderBullet.call(e, E, m.bulletClass) : S += `<${m.bulletElement} ${e.isElement ? 'part="bullet"' : ""} class="${m.bulletClass}"></${m.bulletElement}>`
        }
        m.type === "fraction" && (m.renderFraction ? S = m.renderFraction.call(e, m.currentClass, m.totalClass) : S = `<span class="${m.currentClass}"></span> / <span class="${m.totalClass}"></span>`),
        m.type === "progressbar" && (m.renderProgressbar ? S = m.renderProgressbar.call(e, m.progressbarFillClass) : S = `<span class="${m.progressbarFillClass}"></span>`),
        e.pagination.bullets = [],
        w.forEach(b=>{
            m.type !== "custom" && (b.innerHTML = S || ""),
            m.type === "bullets" && e.pagination.bullets.push(...b.querySelectorAll(qr(m.bulletClass)))
        }
        ),
        m.type !== "custom" && r("paginationRender", w[0])
    }
    function g() {
        e.params.pagination = pu(e, e.originalParams.pagination, e.params.pagination, {
            el: "swiper-pagination"
        });
        const m = e.params.pagination;
        if (!m.el)
            return;
        let _;
        typeof m.el == "string" && e.isElement && (_ = e.el.querySelector(m.el)),
        !_ && typeof m.el == "string" && (_ = [...document.querySelectorAll(m.el)]),
        _ || (_ = m.el),
        !(!_ || _.length === 0) && (e.params.uniqueNavElements && typeof m.el == "string" && Array.isArray(_) && _.length > 1 && (_ = [...e.el.querySelectorAll(m.el)],
        _.length > 1 && (_ = _.filter(w=>lu(w, ".swiper")[0] === e.el)[0])),
        Array.isArray(_) && _.length === 1 && (_ = _[0]),
        Object.assign(e.pagination, {
            el: _
        }),
        _ = l(_),
        _.forEach(w=>{
            m.type === "bullets" && m.clickable && w.classList.add(...(m.clickableClass || "").split(" ")),
            w.classList.add(m.modifierClass + m.type),
            w.classList.add(e.isHorizontal() ? m.horizontalClass : m.verticalClass),
            m.type === "bullets" && m.dynamicBullets && (w.classList.add(`${m.modifierClass}${m.type}-dynamic`),
            a = 0,
            m.dynamicMainBullets < 1 && (m.dynamicMainBullets = 1)),
            m.type === "progressbar" && m.progressbarOpposite && w.classList.add(m.progressbarOppositeClass),
            m.clickable && w.addEventListener("click", f),
            e.enabled || w.classList.add(m.lockClass)
        }
        ))
    }
    function h() {
        const m = e.params.pagination;
        if (u())
            return;
        let _ = e.pagination.el;
        _ && (_ = l(_),
        _.forEach(w=>{
            w.classList.remove(m.hiddenClass),
            w.classList.remove(m.modifierClass + m.type),
            w.classList.remove(e.isHorizontal() ? m.horizontalClass : m.verticalClass),
            m.clickable && (w.classList.remove(...(m.clickableClass || "").split(" ")),
            w.removeEventListener("click", f))
        }
        )),
        e.pagination.bullets && e.pagination.bullets.forEach(w=>w.classList.remove(...m.bulletActiveClass.split(" ")))
    }
    i("changeDirection", ()=>{
        if (!e.pagination || !e.pagination.el)
            return;
        const m = e.params.pagination;
        let {el: _} = e.pagination;
        _ = l(_),
        _.forEach(w=>{
            w.classList.remove(m.horizontalClass, m.verticalClass),
            w.classList.add(e.isHorizontal() ? m.horizontalClass : m.verticalClass)
        }
        )
    }
    ),
    i("init", ()=>{
        e.params.pagination.enabled === !1 ? y() : (g(),
        d(),
        p())
    }
    ),
    i("activeIndexChange", ()=>{
        typeof e.snapIndex > "u" && p()
    }
    ),
    i("snapIndexChange", ()=>{
        p()
    }
    ),
    i("snapGridLengthChange", ()=>{
        d(),
        p()
    }
    ),
    i("destroy", ()=>{
        h()
    }
    ),
    i("enable disable", ()=>{
        let {el: m} = e.pagination;
        m && (m = l(m),
        m.forEach(_=>_.classList[e.enabled ? "remove" : "add"](e.params.pagination.lockClass)))
    }
    ),
    i("lock unlock", ()=>{
        p()
    }
    ),
    i("click", (m,_)=>{
        const w = _.target
          , S = l(e.pagination.el);
        if (e.params.pagination.el && e.params.pagination.hideOnClick && S && S.length > 0 && !w.classList.contains(e.params.pagination.bulletClass)) {
            if (e.navigation && (e.navigation.nextEl && w === e.navigation.nextEl || e.navigation.prevEl && w === e.navigation.prevEl))
                return;
            const b = S[0].classList.contains(e.params.pagination.hiddenClass);
            r(b === !0 ? "paginationShow" : "paginationHide"),
            S.forEach(E=>E.classList.toggle(e.params.pagination.hiddenClass))
        }
    }
    );
    const v = ()=>{
        e.el.classList.remove(e.params.pagination.paginationDisabledClass);
        let {el: m} = e.pagination;
        m && (m = l(m),
        m.forEach(_=>_.classList.remove(e.params.pagination.paginationDisabledClass))),
        g(),
        d(),
        p()
    }
      , y = ()=>{
        e.el.classList.add(e.params.pagination.paginationDisabledClass);
        let {el: m} = e.pagination;
        m && (m = l(m),
        m.forEach(_=>_.classList.add(e.params.pagination.paginationDisabledClass))),
        h()
    }
    ;
    Object.assign(e.pagination, {
        enable: v,
        disable: y,
        render: d,
        update: p,
        init: g,
        destroy: h
    })
}
function Aa(s) {
    let {swiper: e, extendParams: t, on: i} = s;
    t({
        controller: {
            control: void 0,
            inverse: !1,
            by: "slide"
        }
    }),
    e.controller = {
        control: void 0
    };
    function r(u, c) {
        const f = function() {
            let h, v, y;
            return (m,_)=>{
                for (v = -1,
                h = m.length; h - v > 1; )
                    y = h + v >> 1,
                    m[y] <= _ ? v = y : h = y;
                return h
            }
        }();
        this.x = u,
        this.y = c,
        this.lastIndex = u.length - 1;
        let p, d;
        return this.interpolate = function(h) {
            return h ? (d = f(this.x, h),
            p = d - 1,
            (h - this.x[p]) * (this.y[d] - this.y[p]) / (this.x[d] - this.x[p]) + this.y[p]) : 0
        }
        ,
        this
    }
    function n(u) {
        e.controller.spline = e.params.loop ? new r(e.slidesGrid,u.slidesGrid) : new r(e.snapGrid,u.snapGrid)
    }
    function o(u, c) {
        const f = e.controller.control;
        let p, d;
        const g = e.constructor;
        function h(v) {
            if (v.destroyed)
                return;
            const y = e.rtlTranslate ? -e.translate : e.translate;
            e.params.controller.by === "slide" && (n(v),
            d = -e.controller.spline.interpolate(-y)),
            (!d || e.params.controller.by === "container") && (p = (v.maxTranslate() - v.minTranslate()) / (e.maxTranslate() - e.minTranslate()),
            (Number.isNaN(p) || !Number.isFinite(p)) && (p = 1),
            d = (y - e.minTranslate()) * p + v.minTranslate()),
            e.params.controller.inverse && (d = v.maxTranslate() - d),
            v.updateProgress(d),
            v.setTranslate(d, e),
            v.updateActiveIndex(),
            v.updateSlidesClasses()
        }
        if (Array.isArray(f))
            for (let v = 0; v < f.length; v += 1)
                f[v] !== c && f[v]instanceof g && h(f[v]);
        else
            f instanceof g && c !== f && h(f)
    }
    function a(u, c) {
        const f = e.constructor
          , p = e.controller.control;
        let d;
        function g(h) {
            h.destroyed || (h.setTransition(u, e),
            u !== 0 && (h.transitionStart(),
            h.params.autoHeight && ss(()=>{
                h.updateAutoHeight()
            }
            ),
            uu(h.wrapperEl, ()=>{
                p && h.transitionEnd()
            }
            )))
        }
        if (Array.isArray(p))
            for (d = 0; d < p.length; d += 1)
                p[d] !== c && p[d]instanceof f && g(p[d]);
        else
            p instanceof f && c !== p && g(p)
    }
    function l() {
        e.controller.control && e.controller.spline && (e.controller.spline = void 0,
        delete e.controller.spline)
    }
    i("beforeInit", ()=>{
        if (typeof window < "u" && (typeof e.params.controller.control == "string" || e.params.controller.control instanceof HTMLElement)) {
            const u = document.querySelector(e.params.controller.control);
            if (u && u.swiper)
                e.controller.control = u.swiper;
            else if (u) {
                const c = f=>{
                    e.controller.control = f.detail[0],
                    e.update(),
                    u.removeEventListener("init", c)
                }
                ;
                u.addEventListener("init", c)
            }
            return
        }
        e.controller.control = e.params.controller.control
    }
    ),
    i("update", ()=>{
        l()
    }
    ),
    i("resize", ()=>{
        l()
    }
    ),
    i("observerUpdate", ()=>{
        l()
    }
    ),
    i("setTranslate", (u,c,f)=>{
        !e.controller.control || e.controller.control.destroyed || e.controller.setTranslate(c, f)
    }
    ),
    i("setTransition", (u,c,f)=>{
        !e.controller.control || e.controller.control.destroyed || e.controller.setTransition(c, f)
    }
    ),
    Object.assign(e.controller, {
        setTranslate: o,
        setTransition: a
    })
}
function Lf(s) {
    let {swiper: e, extendParams: t, on: i, emit: r, params: n} = s;
    e.autoplay = {
        running: !1,
        paused: !1,
        timeLeft: 0
    },
    t({
        autoplay: {
            enabled: !1,
            delay: 3e3,
            waitForTransition: !0,
            disableOnInteraction: !1,
            stopOnLastSlide: !1,
            reverseDirection: !1,
            pauseOnMouseEnter: !1
        }
    });
    let o, a, l = n && n.autoplay ? n.autoplay.delay : 3e3, u = n && n.autoplay ? n.autoplay.delay : 3e3, c, f = new Date().getTime(), p, d, g, h, v, y, m;
    function _(z) {
        !e || e.destroyed || !e.wrapperEl || z.target === e.wrapperEl && (e.wrapperEl.removeEventListener("transitionend", _),
        !m && T())
    }
    const w = ()=>{
        if (e.destroyed || !e.autoplay.running)
            return;
        e.autoplay.paused ? p = !0 : p && (u = c,
        p = !1);
        const z = e.autoplay.paused ? c : f + u - new Date().getTime();
        e.autoplay.timeLeft = z,
        r("autoplayTimeLeft", z, z / l),
        a = requestAnimationFrame(()=>{
            w()
        }
        )
    }
      , S = ()=>{
        let z;
        return e.virtual && e.params.virtual.enabled ? z = e.slides.filter(x=>x.classList.contains("swiper-slide-active"))[0] : z = e.slides[e.activeIndex],
        z ? parseInt(z.getAttribute("data-swiper-autoplay"), 10) : void 0
    }
      , b = z=>{
        if (e.destroyed || !e.autoplay.running)
            return;
        cancelAnimationFrame(a),
        w();
        let $ = typeof z > "u" ? e.params.autoplay.delay : z;
        l = e.params.autoplay.delay,
        u = e.params.autoplay.delay;
        const x = S();
        !Number.isNaN(x) && x > 0 && typeof z > "u" && ($ = x,
        l = x,
        u = x),
        c = $;
        const G = e.params.speed
          , ae = ()=>{
            !e || e.destroyed || (e.params.autoplay.reverseDirection ? !e.isBeginning || e.params.loop || e.params.rewind ? (e.slidePrev(G, !0, !0),
            r("autoplay")) : e.params.autoplay.stopOnLastSlide || (e.slideTo(e.slides.length - 1, G, !0, !0),
            r("autoplay")) : !e.isEnd || e.params.loop || e.params.rewind ? (e.slideNext(G, !0, !0),
            r("autoplay")) : e.params.autoplay.stopOnLastSlide || (e.slideTo(0, G, !0, !0),
            r("autoplay")),
            e.params.cssMode && (f = new Date().getTime(),
            requestAnimationFrame(()=>{
                b()
            }
            )))
        }
        ;
        return $ > 0 ? (clearTimeout(o),
        o = setTimeout(()=>{
            ae()
        }
        , $)) : requestAnimationFrame(()=>{
            ae()
        }
        ),
        $
    }
      , E = ()=>{
        f = new Date().getTime(),
        e.autoplay.running = !0,
        b(),
        r("autoplayStart")
    }
      , P = ()=>{
        e.autoplay.running = !1,
        clearTimeout(o),
        cancelAnimationFrame(a),
        r("autoplayStop")
    }
      , C = (z,$)=>{
        if (e.destroyed || !e.autoplay.running)
            return;
        clearTimeout(o),
        z || (y = !0);
        const x = ()=>{
            r("autoplayPause"),
            e.params.autoplay.waitForTransition ? e.wrapperEl.addEventListener("transitionend", _) : T()
        }
        ;
        if (e.autoplay.paused = !0,
        $) {
            v && (c = e.params.autoplay.delay),
            v = !1,
            x();
            return
        }
        c = (c || e.params.autoplay.delay) - (new Date().getTime() - f),
        !(e.isEnd && c < 0 && !e.params.loop) && (c < 0 && (c = 0),
        x())
    }
      , T = ()=>{
        e.isEnd && c < 0 && !e.params.loop || e.destroyed || !e.autoplay.running || (f = new Date().getTime(),
        y ? (y = !1,
        b(c)) : b(),
        e.autoplay.paused = !1,
        r("autoplayResume"))
    }
      , A = ()=>{
        if (e.destroyed || !e.autoplay.running)
            return;
        const z = hi();
        z.visibilityState === "hidden" && (y = !0,
        C(!0)),
        z.visibilityState === "visible" && T()
    }
      , k = z=>{
        z.pointerType === "mouse" && (y = !0,
        m = !0,
        !(e.animating || e.autoplay.paused) && C(!0))
    }
      , L = z=>{
        z.pointerType === "mouse" && (m = !1,
        e.autoplay.paused && T())
    }
      , I = ()=>{
        e.params.autoplay.pauseOnMouseEnter && (e.el.addEventListener("pointerenter", k),
        e.el.addEventListener("pointerleave", L))
    }
      , D = ()=>{
        e.el.removeEventListener("pointerenter", k),
        e.el.removeEventListener("pointerleave", L)
    }
      , N = ()=>{
        hi().addEventListener("visibilitychange", A)
    }
      , B = ()=>{
        hi().removeEventListener("visibilitychange", A)
    }
    ;
    i("init", ()=>{
        e.params.autoplay.enabled && (I(),
        N(),
        E())
    }
    ),
    i("destroy", ()=>{
        D(),
        B(),
        e.autoplay.running && P()
    }
    ),
    i("_freeModeStaticRelease", ()=>{
        (g || y) && T()
    }
    ),
    i("_freeModeNoMomentumRelease", ()=>{
        e.params.autoplay.disableOnInteraction ? P() : C(!0, !0)
    }
    ),
    i("beforeTransitionStart", (z,$,x)=>{
        e.destroyed || !e.autoplay.running || (x || !e.params.autoplay.disableOnInteraction ? C(!0, !0) : P())
    }
    ),
    i("sliderFirstMove", ()=>{
        if (!(e.destroyed || !e.autoplay.running)) {
            if (e.params.autoplay.disableOnInteraction) {
                P();
                return
            }
            d = !0,
            g = !1,
            y = !1,
            h = setTimeout(()=>{
                y = !0,
                g = !0,
                C(!0)
            }
            , 200)
        }
    }
    ),
    i("touchEnd", ()=>{
        if (!(e.destroyed || !e.autoplay.running || !d)) {
            if (clearTimeout(h),
            clearTimeout(o),
            e.params.autoplay.disableOnInteraction) {
                g = !1,
                d = !1;
                return
            }
            g && e.params.cssMode && T(),
            g = !1,
            d = !1
        }
    }
    ),
    i("slideChange", ()=>{
        e.destroyed || !e.autoplay.running || (v = !0)
    }
    ),
    Object.assign(e.autoplay, {
        start: E,
        stop: P,
        pause: C,
        resume: T
    })
}
function If(s) {
    const {effect: e, swiper: t, on: i, setTranslate: r, setTransition: n, overwriteParams: o, perspective: a, recreateShadows: l, getEffectParams: u} = s;
    i("beforeInit", ()=>{
        if (t.params.effect !== e)
            return;
        t.classNames.push(`${t.params.containerModifierClass}${e}`),
        a && a() && t.classNames.push(`${t.params.containerModifierClass}3d`);
        const f = o ? o() : {};
        Object.assign(t.params, f),
        Object.assign(t.originalParams, f)
    }
    ),
    i("setTranslate", ()=>{
        t.params.effect === e && r()
    }
    ),
    i("setTransition", (f,p)=>{
        t.params.effect === e && n(p)
    }
    ),
    i("transitionEnd", ()=>{
        if (t.params.effect === e && l) {
            if (!u || !u().slideShadows)
                return;
            t.slides.forEach(f=>{
                f.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(p=>p.remove())
            }
            ),
            l()
        }
    }
    );
    let c;
    i("virtualUpdate", ()=>{
        t.params.effect === e && (t.slides.length || (c = !0),
        requestAnimationFrame(()=>{
            c && t.slides && t.slides.length && (r(),
            c = !1)
        }
        ))
    }
    )
}
function Df(s, e) {
    const t = au(e);
    return t !== e && (t.style.backfaceVisibility = "hidden",
    t.style["-webkit-backface-visibility"] = "hidden"),
    t
}
function zf(s) {
    let {swiper: e, duration: t, transformElements: i, allSlides: r} = s;
    const {activeIndex: n} = e
      , o = a=>a.parentElement ? a.parentElement : e.slides.filter(u=>u.shadowRoot && u.shadowRoot === a.parentNode)[0];
    if (e.params.virtualTranslate && t !== 0) {
        let a = !1, l;
        r ? l = i : l = i.filter(u=>{
            const c = u.classList.contains("swiper-slide-transform") ? o(u) : u;
            return e.getSlideIndex(c) === n
        }
        ),
        l.forEach(u=>{
            uu(u, ()=>{
                if (a || !e || e.destroyed)
                    return;
                a = !0,
                e.animating = !1;
                const c = new window.CustomEvent("transitionend",{
                    bubbles: !0,
                    cancelable: !0
                });
                e.wrapperEl.dispatchEvent(c)
            }
            )
        }
        )
    }
}
function Rf(s) {
    let {swiper: e, extendParams: t, on: i} = s;
    t({
        fadeEffect: {
            crossFade: !1
        }
    }),
    If({
        effect: "fade",
        swiper: e,
        on: i,
        setTranslate: ()=>{
            const {slides: o} = e
              , a = e.params.fadeEffect;
            for (let l = 0; l < o.length; l += 1) {
                const u = e.slides[l];
                let f = -u.swiperSlideOffset;
                e.params.virtualTranslate || (f -= e.translate);
                let p = 0;
                e.isHorizontal() || (p = f,
                f = 0);
                const d = e.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(u.progress), 0) : 1 + Math.min(Math.max(u.progress, -1), 0)
                  , g = Df(a, u);
                g.style.opacity = d,
                g.style.transform = `translate3d(${f}px, ${p}px, 0px)`
            }
        }
        ,
        setTransition: o=>{
            const a = e.slides.map(l=>au(l));
            a.forEach(l=>{
                l.style.transitionDuration = `${o}ms`
            }
            ),
            zf({
                swiper: e,
                duration: o,
                transformElements: a,
                allSlides: !0
            })
        }
        ,
        overwriteParams: ()=>({
            slidesPerView: 1,
            slidesPerGroup: 1,
            watchSlidesProgress: !0,
            spaceBetween: 0,
            virtualTranslate: !e.params.cssMode
        })
    })
}
O.registerPlugin(W);
const hu = s=>{
    var e = s.innerText
      , t = e.split(" ")
      , i = t.map(function(r) {
        return '<span class="inline-flex"><span class="inline-flex will-change-transform">' + r + "</span></span>"
    }).join(" ");
    s.innerHTML = i
}
  , Ff = ()=>{
    const s = document.querySelectorAll(".items-anim-work")
      , e = document.querySelectorAll(".image-scale-animation img");
    let t = 0
      , i = 2;
    O.to(e, {
        scale: 1.4,
        autoAlpha: 0,
        willChange: "transform"
    }),
    s.forEach((r,n)=>{
        const o = r.querySelectorAll(".heading-item")
          , a = o[0].innerText.split("");
        o[0].innerHTML = "<span></span><span></span>";
        const l = o[0].querySelectorAll("span");
        a.forEach(u=>{
            l[0].innerHTML += `<span>${u}</span>`,
            l[1].innerHTML += `<span>${u}</span>`
        }
        ),
        s.forEach(u=>{
            var p;
            const c = (p = u.querySelectorAll(".heading-item > span")[0]) == null ? void 0 : p.querySelectorAll("span")
              , f = u.querySelectorAll(".line-separator");
            O.set(c, {
                yPercent: 92
            }),
            O.set(c, {
                yPercent: 92
            }),
            O.set(f, {
                autoAlpha: .1
            })
        }
        ),
        r.addEventListener("mouseenter", ()=>{
            const u = s[n].querySelectorAll(".heading-item > span")
              , c = s[n].querySelectorAll(".line-separator")
              , f = s[n].querySelectorAll(".text-anim")
              , p = s[n].querySelectorAll(".arrow-anim")
              , d = s[n].querySelectorAll(".context-anim");
            u && (O.to(u[0].querySelectorAll("span"), {
                yPercent: 0,
                stagger: .025,
                ease: Ae.easeInOut,
                duration: .4,
                willChange: "transform"
            }),
            O.to(u[1].querySelectorAll("span"), {
                yPercent: -92,
                stagger: .025,
                ease: Ae.easeInOut,
                duration: .4,
                willChange: "transform"
            }),
            O.to(c, {
                autoAlpha: 1
            }),
            O.to(p, {
                scale: 1,
                duration: .6,
                ease: Ae.easeInOut
            }),
            O.to(f, {
                autoAlpha: 1,
                x: -50,
                duration: .6,
                ease: Ae.easeInOut
            }),
            O.to(d, {
                autoAlpha: 1,
                duration: .6,
                ease: Ae.easeInOut
            }));
            const g = O.timeline();
            g.to(e, {
                autoAlpha: 0,
                scale: 1.21,
                duration: 0,
                zIndex: 0,
                filter: "blur(4px)"
            }),
            g.to(e[t], {
                scale: 1.02,
                autoAlpha: 1,
                duration: 0
            }, "<"),
            g.to(e[t], {
                zIndex: i - 1,
                duration: 0
            }, "<"),
            g.to(e[n], {
                scale: 1.02,
                autoAlpha: 1,
                duration: .3
            }),
            g.to(e[n], {
                zIndex: i,
                duration: 0
            }, "<"),
            g.to(e[n], {
                filter: "blur(0px)"
            }, "<"),
            t = n,
            i++
        }
        ),
        r.addEventListener("mouseleave", ()=>{
            const u = s[n].querySelectorAll(".heading-item > span")
              , c = s[n].querySelectorAll(".line-separator")
              , f = s[n].querySelectorAll(".text-anim")
              , p = s[n].querySelectorAll(".arrow-anim")
              , d = s[n].querySelectorAll(".context-anim");
            u && (O.to(u[0].querySelectorAll("span"), {
                yPercent: 92,
                stagger: .025,
                ease: Ae.easeInOut,
                duration: .4,
                willChange: "transform"
            }),
            O.to(u[1].querySelectorAll("span"), {
                yPercent: 0,
                stagger: .025,
                ease: Ae.easeInOut,
                duration: .4,
                willChange: "transform"
            }),
            O.to(c, {
                autoAlpha: .1
            }),
            O.to(p, {
                scale: 0,
                duration: .6,
                ease: Ae.easeInOut
            }),
            O.to(f, {
                autoAlpha: .4,
                x: 0,
                duration: .6,
                ease: Ae.easeInOut
            }),
            O.to(d, {
                autoAlpha: .4,
                duration: .6,
                ease: Ae.easeInOut
            }))
        }
        )
    }
    )
}
  , Nf = ()=>{
    const s = document.querySelectorAll(".rotate-anim");
    O.timeline({
        repeat: -1
    }).to(s, {
        rotate: 360,
        duration: 10,
        ease: Eo.easeNone
    })
}
  , Bf = ()=>{
    const s = new cd({
        duration: 1.6,
        easing: t=>Math.min(1, 1.00001 - Math.pow(3, -10 * t)),
        direction: "vertical",
        gestureDirection: "vertical",
        smooth: !0,
        mouseMultiplier: 1,
        smoothTouch: !1,
        touchMultiplier: 2,
        infinite: !1
    });
    window.lenis = s;
    function e(t) {
        s.raf(t),
        requestAnimationFrame(e)
    }
    requestAnimationFrame(e)
}
  , qf = ()=>{
    let s = 1;
    const e = 34
      , t = document.querySelectorAll(".marquee")
      , i = O.timeline({
        paused: !0,
        repeat: -1,
        yoyo: !1,
        onReverseComplete() {
            this.totalTime(this.rawTime() + this.duration())
        },
        scrollTrigger: {
            trigger: t[0],
            onEnter: ()=>{
                i.play()
            }
            ,
            onLeave: ()=>{
                i.pause()
            }
            ,
            onLeaveBack: ()=>{
                i.pause()
            }
            ,
            onEnterBack: ()=>{
                i.resume()
            }
        }
    });
    t.forEach(r=>{
        i.to(r.querySelectorAll("li"), {
            duration: e,
            xPercent: r.dataset.reversed === "true" ? 100 : -100,
            repeat: 0,
            ease: "linear"
        }, "<")
    }
    ),
    W.create({
        onUpdate(r) {
            r.direction !== s && (s *= -1),
            i.timeScale(e * r.getVelocity() / 2600),
            O.to(i, {
                timeScale: s
            })
        }
    })
}
  , Vf = ()=>{
    const s = document.querySelector(".hover-anim-outer")
      , e = document.querySelector(".anim-img");
    O.set(e, {
        autoAlpha: 0,
        scale: .9,
        willChange: "transform"
    }),
    s.addEventListener("mouseenter", t=>{
        setTimeout(()=>{
            O.to(e, {
                autoAlpha: 1,
                scale: 1
            })
        }
        , 100)
    }
    ),
    s.addEventListener("mouseleave", t=>{
        O.to(e, {
            autoAlpha: 0,
            scale: .9
        })
    }
    ),
    s.addEventListener("mousemove", t=>{
        const i = s.getBoundingClientRect().x
          , r = s.getBoundingClientRect().y;
        O.to(e, {
            duration: .7,
            x: t.clientX - i - e.clientWidth / 2,
            y: t.clientY - r - e.clientHeight / 2
        })
    }
    )
}
  , No = ()=>{
    const s = document.querySelector(".menu-click")
      , e = document.querySelector(".menu-overlay")
      , t = document.querySelector(".menu-offset")
      , i = document.querySelector(".menu-close")
      , r = document.querySelector(".menu-icon")
      , n = document.querySelector(".menu-close-icon")
      , o = document.querySelectorAll(".menu-links-wrapper li")
      , a = document.querySelectorAll(".menu-links-wrapper-social li");
    O.set(o, {
        autoAlpha: 0,
        x: 90,
        willChange: "transform"
    }),
    O.set(a, {
        autoAlpha: 0,
        x: 90,
        willChange: "transform"
    });
    const l = ()=>{
        O.to(t, {
            x: 0,
            autoAlpha: 1,
            pointerEvents: "all"
        }),
        O.to(e, {
            autoAlpha: .4,
            pointerEvents: "all"
        }),
        O.to(i, {
            duration: 0,
            pointerEvents: "all",
            autoAlpha: 1
        }),
        O.to(r, {
            autoAlpha: 0
        }),
        O.to(n, {
            autoAlpha: 1,
            delay: .2
        }),
        O.to(o, {
            duration: .8,
            autoAlpha: 1,
            x: 0,
            stagger: .08,
            delay: .015,
            ease: fn.create("custom", "M0,0 C0.307,0.552 0.492,1 1,1 ")
        }),
        O.to(a, {
            duration: .8,
            autoAlpha: 1,
            x: 0,
            stagger: .03,
            delay: .1,
            ease: fn.create("custom", "M0,0 C0.307,0.552 0.492,1 1,1 ")
        })
    }
      , u = ()=>{
        O.to(t, {
            x: "20%",
            autoAlpha: 0,
            pointerEvents: "none"
        }),
        O.to(e, {
            autoAlpha: 0,
            pointerEvents: "none"
        }),
        O.to(i, {
            duration: 0,
            pointerEvents: "none",
            autoAlpha: 0,
            delay: .3
        }),
        O.to(r, {
            autoAlpha: 1
        }),
        O.to(n, {
            autoAlpha: 0
        }),
        O.to(o, {
            autoAlpha: 0,
            x: 90
        }),
        O.to(a, {
            autoAlpha: 0,
            x: 90
        })
    }
    ;
    return s.addEventListener("click", l),
    e.addEventListener("click", u),
    i.addEventListener("click", u),
    {
        handleMenuClose: u
    }
}
  , $f = ()=>{
    const s = document.querySelector(".anim-pin2")
      , e = document.querySelector(".anim-pin3")
      , t = document.querySelector(".scroll-pin-init");
    document.querySelector(".pin-wrapper"),
    document.querySelector(".anim-pin2 > div");
    const i = document.querySelectorAll(".anim-move")
      , r = document.querySelectorAll(".anim-move-next")
      , n = document.querySelector(".scroll-pin-init-wrap");
    O.timeline({
        scrollTrigger: {
            trigger: t,
            pin: t,
            end: "230%",
            scrub: !0
        }
    }),
    O.timeline({
        scrollTrigger: {
            trigger: s,
            pin: s,
            end: "90%",
            pinSpacing: !0,
            scrub: !0,
            onLeave: ()=>{
                Hf(),
                W.refresh()
            }
        }
    }),
    O.timeline({
        scrollTrigger: {
            trigger: s,
            pin: e,
            end: "165%",
            pinSpacing: !0
        }
    });
    let o = O.timeline({
        scrollTrigger: {
            trigger: n,
            start: "10% 10%",
            end: "240%",
            pinSpacing: !0,
            scrub: .8
        }
    });
    o.to(i, {
        duration: .5,
        clipPath: "circle(145vw at 50% 50vh)",
        stagger: {
            each: .05
        },
        ease: Ae.easeIn
    }),
    o.to(r, {
        duration: .5,
        clipPath: "circle(145vw at 50% 50vh)",
        ease: Ae.easeIn
    }, "-=.42")
}
  , Gf = ()=>{
    const s = new lt(".slider-one",{
        modules: [Aa, Ma]
    })
      , e = new lt(".slider-two",{
        modules: [Aa, Ma, Rf],
        navigation: {
            nextEl: ".next-swipe",
            prevEl: ".prev-swipe"
        },
        effect: "fade"
    });
    s.controller.control = e,
    e.controller.control = s
}
  , Hf = ()=>{
    const s = document.querySelectorAll(".anim-parallax")
      , e = document.querySelectorAll(".anim-parallax-wrap");
    s.forEach(t=>{
        const i = t.querySelector("img");
        O.timeline({
            scrollTrigger: {
                trigger: e,
                start: "top+=100% bottom",
                end: "bottom+=150% top",
                scrub: !0
            }
        }).to(i, {
            yPercent: 18,
            ease: Eo.easeNone
        })
    }
    )
}
  , Wf = ()=>{
    const s = document.querySelector(".form-wrapper")
      , e = document.querySelector(".form-wrapper input")
      , t = document.querySelectorAll(".video-items video")
      , i = document.querySelector(".case-study")
      , r = document.querySelector(".error-message")
      , n = document.querySelector(".case-study-trigger")
      , o = document.querySelector(".model-close")
      , a = document.querySelector(".case-overlay")
      , l = No();
    t.forEach(f=>{
        f.volume = .8
    }
    ),
    n.addEventListener("click", f=>{
        var p;
        f.preventDefault(),
        O.to(i, {
            autoAlpha: 1,
            scale: 1,
            pointerEvents: "all",
            duration: .3
        }),
        O.to(a, {
            autoAlpha: .3,
            pointerEvents: "all",
            duration: .3
        }),
        t[0].play(),
        l.handleMenuClose(),
        (p = window == null ? void 0 : window.lenis) == null || p.stop()
    }
    ),
    o.addEventListener("click", f=>{
        var p;
        f.preventDefault(),
        O.to(i, {
            autoAlpha: 0,
            scale: .9,
            pointerEvents: "none",
            duration: .3
        }),
        O.to(a, {
            autoAlpha: 0,
            pointerEvents: "none",
            duration: .3
        }),
        (p = window == null ? void 0 : window.lenis) == null || p.start(),
        t.forEach(d=>{
            d.pause()
        }
        ),
        e.value = "",
        O.to(t, {
            autoAlpha: 0
        }),
        O.to(t[0], {
            autoAlpha: 1
        }),
        O.to(i, {
            backgroundColor: "#CCEF92"
        }),
        r.innerHTML = ""
    }
    ),
    a.addEventListener("click", f=>{
        var p;
        f.preventDefault(),
        O.to(i, {
            autoAlpha: 0,
            scale: .9,
            pointerEvents: "none",
            duration: .3
        }),
        O.to(a, {
            autoAlpha: 0,
            pointerEvents: "none",
            duration: .3
        }),
        (p = window == null ? void 0 : window.lenis) == null || p.start(),
        t.forEach(d=>{
            d.pause()
        }
        ),
        e.value = "",
        O.to(t, {
            autoAlpha: 0
        }),
        O.to(t[0], {
            autoAlpha: 1
        }),
        O.to(i, {
            backgroundColor: "#CCEF92"
        }),
        r.innerHTML = ""
    }
    );
    let u = 0;
    const c = f=>{
        t.forEach(p=>{
            p.pause()
        }
        ),
        t[f].play()
    }
    ;
    e.addEventListener("input", f=>{
        f.target.value.length > 0 ? (O.to(i, {
            backgroundColor: "#BCFFEF"
        }),
        O.to(t, {
            autoAlpha: 0
        }),
        O.to(t[1], {
            autoAlpha: 1
        }),
        c(1),
        r.innerHTML = "") : u !== 1 && (O.to(i, {
            backgroundColor: "#CCEF92"
        }),
        O.to(t, {
            autoAlpha: 0
        }),
        O.to(t[0], {
            autoAlpha: 1
        }),
        c(0))
    }
    ),
    s.addEventListener("submit", f=>{
        f.preventDefault(),
        e.value.length < 4 ? (u = 1,
        r.innerHTML = "Minimum 4 words required",
        O.to(t, {
            autoAlpha: 0
        }),
        O.to(t[2], {
            autoAlpha: 1
        }),
        c(2)) : e.value !== "heheheheisit?" ? (u = 1,
        r.innerHTML = "Password is wrong",
        O.to(t, {
            autoAlpha: 0
        }),
        O.to(t[2], {
            autoAlpha: 1
        }),
        c(2)) : (u = 0,
        r.innerHTML = ""),
        u === 1 && O.to(i, {
            backgroundColor: "#FFCACA"
        })
    }
    )
}
  , Yf = ()=>{
    const s = document.querySelector(".video-pin")
      , e = document.querySelector(".pin-outer")
      , t = document.querySelector(".video-end")
      , i = document.querySelector(".video-end video");
    i.pause();
    const r = document.querySelector(".pinVideo");
    window.innerWidth > 767 ? (O.timeline({
        scrollTrigger: {
            trigger: s,
            pin: !0,
            start: "center center",
            end: "100%"
        }
    }),
    O.timeline({
        scrollTrigger: {
            trigger: e,
            endTrigger: t,
            start: "top-=30% center",
            end: "center center",
            scrub: .4
        }
    }).to(i, {
        scale: 1
    }),
    O.timeline({
        scrollTrigger: {
            trigger: e,
            start: `100%-=${i.clientHeight / 2} center`,
            end: "130%  bottom",
            scrub: .4,
            onEnterBack: ()=>{
                W.refresh()
            }
        }
    }).to(i, {
        scale: .5
    }),
    O.timeline({
        scrollTrigger: {
            trigger: r,
            onEnter: ()=>{
                i.play(),
                i.currentTime = 0
            }
            ,
            onLeave: ()=>{
                i.pause()
            }
            ,
            onEnterBack: ()=>{
                i.play(),
                i.currentTime = 0
            }
            ,
            onLeaveBack: ()=>{
                i.pause()
            }
        }
    })) : (O.timeline({
        scrollTrigger: {
            trigger: t,
            endTrigger: t,
            start: "top bottom",
            end: "bottom bottom",
            scrub: .4,
            onEnter: ()=>{
                i.play(),
                i.currentTime = 0
            }
        }
    }).to(i, {
        scale: 1
    }),
    O.timeline({
        scrollTrigger: {
            trigger: t,
            endTrigger: t,
            start: "top bottom",
            end: "bottom top",
            scrub: .4,
            onEnterBack: ()=>{
                i.play(),
                i.currentTime = 0
            }
            ,
            onLeave: ()=>{
                i.pause(),
                i.currentTime = 0
            }
            ,
            onLeaveBack: ()=>{
                i.pause(),
                i.currentTime = 0
            }
        }
    }))
}
  , Xf = ()=>{
    const s = document.querySelector(".pulse-anim");
    O.to(s, {
        scale: 1.12,
        repeat: -1,
        yoyo: !0,
        ease: ac.easeNone
    })
}
  , Uf = ()=>{
    window.lenis.stop();
    const s = document.querySelector("main")
      , e = document.querySelector(".rotate-anim-1")
      , t = document.querySelector(".mask-img-wrap")
      , i = document.querySelector(".mask-svg")
      , r = document.querySelector(".mask-svg img")
      , n = O.timeline({})
      , o = document.querySelectorAll(".loading-letter")
      , a = document.querySelectorAll(".loading-letter > span")
      , l = document.querySelectorAll(".loading-letter > span > span")
      , u = document.querySelector(".brak-text-into-multi-span");
    hu(u);
    const c = document.querySelectorAll(".brak-text-into-multi-span > span")
      , f = document.querySelectorAll(".brak-text-into-multi-span > span > span")
      , p = document.querySelector(".line-anim-fade")
      , d = document.querySelector(".image-fade");
    o.forEach((g,h)=>{
        g.querySelector,
        o[h].style.height = `${l[1].clientHeight}px`
    }
    ),
    O.set(a[1], {
        y: -a[1].clientHeight + l[1].clientHeight
    }),
    O.to(a, {
        autoAlpha: 1
    }),
    O.to(t, {
        autoAlpha: 1
    }),
    O.set(s, {
        y: 400
    }),
    O.set(f, {
        yPercent: 100
    }),
    O.set(c, {
        overflow: "hidden"
    }),
    O.set(d, {
        y: 40,
        autoAlpha: 0
    }),
    O.set(p, {
        y: 30,
        autoAlpha: 0
    }),
    setTimeout(()=>{
        n.to(e, {
            rotate: 360,
            duration: 3
        }),
        O.to(a[0], {
            duration: 3,
            y: -a[1].clientHeight + l[1].clientHeight,
            ease: Ae.easeOut
        }),
        O.to(a[1], {
            duration: 3,
            y: 0,
            ease: Ae.easeOut
        }),
        O.to(a[2], {
            duration: 3,
            y: -a[1].clientHeight + l[1].clientHeight,
            ease: Ae.easeOut,
            onComplete: ()=>{
                O.to(t, {
                    autoAlpha: 0
                }),
                setTimeout(()=>{
                    O.to(i, {
                        yPercent: -100,
                        transformOrigin: "top",
                        ease: Xo.easeOut,
                        duration: 1.1
                    }),
                    O.to(r, {
                        scaleY: 0,
                        transformOrigin: "top",
                        ease: Xo.easeOut,
                        duration: 1.1,
                        onComplete: ()=>{
                            window.lenis.start()
                        }
                    }),
                    O.to(s, {
                        duration: .6,
                        y: 0,
                        onComplete: ()=>{
                            O.set(s, {
                                clearProps: "all"
                            }),
                            W.refresh()
                        }
                    }),
                    O.to(f, {
                        duration: 1.1,
                        autoAlpha: 1,
                        yPercent: -2,
                        display: "inline-block",
                        stagger: .03,
                        ease: Ae.easeOut
                    }),
                    O.to(p, {
                        duration: .6,
                        y: 0,
                        autoAlpha: 1,
                        delay: .5
                    }),
                    O.to(d, {
                        duration: .6,
                        y: 0,
                        autoAlpha: 1,
                        delay: .65
                    })
                }
                , 200)
            }
        })
    }
    , 200)
}
  , jf = ()=>{
    const s = document.querySelector(".parallax-profile img");
    O.set(s, {
        scale: 1.1,
        yPercent: -10
    }),
    O.timeline({
        scrollTrigger: {
            trigger: s,
            start: "top bottom",
            end: "bottom top",
            scrub: .2
        }
    }).to(s, {
        scale: 1.1,
        yPercent: 10,
        ease: Eo.easeNone
    })
}
  , Kf = ()=>{
    const s = document.querySelector(".wave-wrap")
      , e = document.querySelector(".wave-anim")
      , t = document.querySelector(".wave-dribble")
      , i = document.querySelector(".wave-rounded")
      , r = document.querySelector(".wave-rotate")
      , n = document.querySelectorAll(".wave-text span")
      , o = document.querySelectorAll(".wave-rotate-wrap")
      , a = document.querySelectorAll(".wave-line")
      , l = document.querySelectorAll(".pulse-anim-wrap");
    O.set(t, {
        autoAlpha: 0,
        scale: .5
    }),
    O.set(o, {
        autoAlpha: 0,
        scale: .5
    }),
    O.set(l, {
        autoAlpha: 0,
        scale: .5
    }),
    O.set(a, {
        autoAlpha: 0,
        scaleX: .2,
        display: "inline-block"
    }),
    O.set(n, {
        autoAlpha: 1,
        yPercent: 100,
        display: "inline-block"
    });
    const u = O.timeline({
        scrollTrigger: {
            trigger: s,
            start: "top 80%",
            end: "bottom top"
        }
    });
    u.to(n, {
        duration: .6,
        autoAlpha: 1,
        yPercent: 0,
        display: "inline-block",
        stagger: .03,
        ease: Ae.easeOut
    }),
    u.to(e, {
        strokeDashoffset: 0,
        duration: 1.5
    }, "<"),
    u.to(i, {
        strokeDashoffset: 0,
        duration: 1.5
    }, "<"),
    u.to(t, {
        autoAlpha: 1,
        scale: 1,
        duration: 1.5
    }, "<"),
    u.to(o, {
        autoAlpha: 1,
        scale: 1,
        duration: 1.5
    }, "<"),
    u.to(l, {
        autoAlpha: 1,
        scale: 1,
        duration: 1.5
    }, "<"),
    u.to(a, {
        autoAlpha: 1,
        scaleX: 1,
        duration: 1.5
    }, "<"),
    O.timeline({
        scrollTrigger: {
            trigger: s,
            start: "top 80%",
            end: "bottom top",
            scrub: !0
        }
    }).to(r, {
        rotate: 360
    })
}
  , Qf = ()=>{
    const s = document.querySelectorAll(".text-landing-anim");
    s.forEach(e=>{
        hu(e)
    }
    ),
    s.forEach(e=>{
        const t = e.querySelectorAll("span")
          , i = e.querySelectorAll("span span");
        O.set(t, {
            overflow: "hidden"
        }),
        O.set(i, {
            yPercent: 100
        }),
        O.timeline({
            scrollTrigger: {
                trigger: e,
                start: "top 80%",
                end: "bottom top"
            }
        }).to(i, {
            duration: .89,
            autoAlpha: 1,
            yPercent: 0,
            display: "inline-block",
            stagger: .03,
            ease: Ae.easeOut
        })
    }
    )
}
  , Zf = ()=>{
    document.querySelectorAll(".fade-anim-mob").forEach(e=>{
        O.set(e, {
            autoAlpha: 0,
            y: 30
        }),
        O.timeline({
            scrollTrigger: {
                trigger: e,
                start: "top 90%"
            }
        }).to(e, {
            autoAlpha: 1,
            y: 0,
            ease: Ae.easeOut
        })
    }
    )
}
  , ka = ()=>{
    new lt(".slider-mentors",{
        pagination: {
            el: ".swiper-pagination"
        },
        slidesPerView: 1.4,
        spaceBetween: 16,
        autoplay: {
            delay: 2500,
            disableOnInteraction: !1
        },
        modules: [Of, Lf]
    })
}
  , Jf = ()=>{
    const s = document.querySelector(".follow-animation-mouse")
      , e = document.querySelector(".follow-animation-mouse button > span");
    if (window.innerWidth > 767) {
        O.set(s, {
            xPercent: -50,
            yPercent: -50,
            opacity: 0
        });
        const t = {
            x: window.innerWidth,
            y: window.innerHeight
        }
          , i = {
            x: t.x,
            y: t.y
        }
          , r = .35
          , n = O.quickSetter(s, "x", "px")
          , o = O.quickSetter(s, "y", "px");
        window.addEventListener("mousemove", u=>{
            i.x = u.x,
            i.y = u.y
        }
        ),
        O.ticker.add(()=>{
            const u = .8 - Math.pow(1 - r, O.ticker.deltaRatio());
            t.x += (i.x - t.x) * u,
            t.y += (i.y - t.y) * u,
            n(t.x),
            o(t.y)
        }
        );
        let a = !0;
        O.set(e, {
            yPercent: -50
        });
        const l = document.querySelector(".video-end video");
        l.addEventListener("click", ()=>{
            a = !a,
            l.muted = a,
            O.to(e, {
                yPercent: a ? -50 : 0
            })
        }
        ),
        l.addEventListener("mouseenter", ()=>{
            O.to(s, {
                opacity: 1
            })
        }
        ),
        l.addEventListener("mouseleave", ()=>{
            O.to(s, {
                opacity: 0
            })
        }
        )
    } else {
        let t = !0;
        O.set(e, {
            yPercent: -50
        });
        const i = document.querySelector(".video-end video");
        i.addEventListener("click", ()=>{
            t = !t,
            i.muted = t,
            O.to(e, {
                yPercent: t ? -50 : 0
            })
        }
        ),
        s.parentNode.classList.add("relative"),
        s.classList.add("mob")
    }
}
  , ep = ()=>{
    const s = No();
    document.querySelectorAll(".menu-nav-link").forEach(t=>{
        const r = t.getAttribute("href").replace("#", "");
        console.log(r),
        t.addEventListener("click", n=>{
            n.preventDefault(),
            s.handleMenuClose(),
            window.lenis.scrollTo(`.${r}`)
        }
        )
    }
    )
}
  , tp = ()=>{
    const s = document.querySelector(".final-svg-line")
      , e = document.querySelector(".final-svg-line-2")
      , t = document.querySelector("footer");
    O.timeline({
        scrollTrigger: {
            trigger: t
        }
    }).fromTo(s, {
        "--line-anim": "746px"
    }, {
        "--line-anim": `${746 * 2}px`
    }).fromTo(e, {
        "--line-anim": "40px"
    }, {
        "--line-anim": `${40 * 2}px`
    })
}
  , ip = ()=>{
    var s = [].slice.call(document.querySelectorAll("video.lazy"));
    if ("IntersectionObserver"in window) {
        var e = new IntersectionObserver(function(t, i) {
            t.forEach(function(r) {
                if (r.isIntersecting) {
                    for (var n in r.target.children) {
                        var o = r.target.children[n];
                        typeof o.tagName == "string" && o.tagName === "SOURCE" && (o.src = o.dataset.src)
                    }
                    r.target.load(),
                    r.target.classList.remove("lazy"),
                    e.unobserve(r.target)
                }
            })
        }
        );
        s.forEach(function(t) {
            e.observe(t)
        })
    }
}
;
window.addEventListener("load", ()=>{
    Bf(),
    jf(),
    Uf(),
    Yf(),
    Kf(),
    qf(),
    window.innerWidth > 1023 && Ff(),
    Nf(),
    Vf(),
    No(),
    $f(),
    Gf(),
    Wf(),
    Xf(),
    Qf(),
    window.innerWidth < 767 && Zf(),
    window.innerWidth < 1024 && ka(),
    window.addEventListener("resize", ()=>window.innerWidth < 1024 && ka()),
    Jf(),
    ep(),
    tp(),
    ip()
}
);
