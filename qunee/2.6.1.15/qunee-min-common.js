module.exports = function (t, i, e) {
    "use strict";

    function n(t, i, e) {
        if (t.hasChildren()) {
            var r = t._er || t.getChildren();
            if (r) {
                r = r._ig || r;
                for (var s = 0, o = r.length; o > s; s++)
                    if (i.call(e, r[s]) === !1 || n(r[s], i, e) === !1) return !1;
                return !0
            }
        }
    }

    function r(t) {
        if (!t.hasChildren()) return t instanceof Ca ? t : null;
        for (var i, e = t._er._ig, n = e.length - 1; n >= 0;) {
            if (i = e[n], i = r(i)) return i;
            n--
        }
        return null
    }

    function s(t, i, e, n) {
        return n ? o(t, i, e) : a(t, i, e)
    }

    function o(t, i, e) {
        t = t._ig || t;
        for (var n, r = 0, s = t.length; s > r; r++)
            if (n = t[r], n.hasChildren() && !o(n.children, i, e) || i.call(e, n) === !1) return !1;
        return !0
    }

    function a(t, i, e) {
        t = t._ig || t;
        for (var n, r = 0, s = t.length; s > r; r++)
            if (n = t[r], i.call(e, n) === !1 || n.hasChildren() && !a(n.children, i, e)) return !1;
        return !0
    }

    function l(t, i, e, n) {
        return n ? _(t, i, e) : u(t, i, e)
    }

    function _(t, i, e) {
        t = t._ig || t;
        for (var n, r = t.length, s = r - 1; s >= 0; s--)
            if (n = t[s], n.hasChildren() && !_(n.children, i, e) || i.call(e, n) === !1) return !1;
        return !0
    }

    function u(t, i, e) {
        t = t._ig || t;
        for (var n, r = t.length, s = r - 1; s >= 0; s--)
            if (n = t[s], i.call(e, n) === !1 || n.hasChildren() && !u(n.children, i, e)) return !1;
        return !0
    }

    function c(t, i, e) {
        for (var n, r = (t._ig || t).slice(0); r.length;) {
            n = r[0], r = r.splice(1);
            var s = i.call(e, n);
            if (s === !1) return !1;
            if (n.hasChildren()) {
                var o = n.children;
                o = o._ig || o, r = r.concat(o)
            }
        }
        return !0
    }

    function d(t, i, e) {
        for (var n, r = (t._ig || t).slice(0); r.length;) {
            n = r[r.length - 1], r = r.splice(0, r.length - 1);
            var s = i.call(e, n);
            if (s === !1) return !1;
            if (n.hasChildren()) {
                var o = n.children;
                o = o._ig || o, r = r.concat(o)
            }
        }
        return !0
    }

    function f(t, i) {
        function e(t, e) {
            for (var n = t.length, r = e.length, s = n + r, o = new Array(s), h = 0, a = 0, l = 0; s > l;) o[l++] = h === n ? e[a++] : a === r || i(t[h], e[a]) <= 0 ? t[h++] : e[a++];
            return o
        }

        function n(t) {
            var i = t.length,
                r = Math.ceil(i / 2);
            return 1 >= i ? t : e(n(t.slice(0, r)), n(t.slice(r)))
        }
        return n(t)
    }

    function g(t, i, e, n) {
        t instanceof Js && (t = t._ig);
        for (var r = 0, s = (t._ig || t).length; s > r; r++) {
            var o = i.call(e, t[r], r, n);
            if (o === !1) return !1
        }
        return !0
    }

    function v(t, i, e) {
        for (var n = t instanceof Js, r = t._ig || t, s = 0, o = r.length; o > s; s++) {
            var h = r[s];
            i.call(e, h) && (n ? t.remove(h) : t.splice(s, 1), s--, o--)
        }
    }

    function E(t, i, e, n) {
        t instanceof Js && (t = t._ig);
        for (var r = (t._ig || t).length - 1; r >= 0; r--) {
            var s = i.call(e, t[r], r, n);
            if (s === !1) return !1
        }
        return !0
    }

    function p(t) {
        if (t.clone instanceof Function) return t.clone(!0);
        var i, e = [];
        return g(t, function (t) {
            i = t && t.clone instanceof Function ? t.clone() : t, e.push(i)
        }, this), e
    }

    function y(t, i, n) {
        n === e || 0 > n ? t.push(i) : t.splice(n, 0, i)
    }

    function T(t, i) {
        var e = t.indexOf(i);
        return 0 > e || e >= t.length ? !1 : t.splice(e, 1)
    }

    function m(t, i) {
        var e = !1;
        return g(t, function (t) {
            return i == t ? (e = !0, !1) : void 0
        }), e
    }

    function O(t, i) {
        var e = t;
        for (var n in i)
            if (i.__lookupGetter__) {
                var r = i.__lookupGetter__(n),
                    s = i.__lookupSetter__(n);
                r || s ? (r && e.__defineGetter__(n, r), s && e.__defineSetter__(n, s)) : e[n] = i[n]
            } else e[n] = i[n];
        return e
    }

    function A(t, i, e) {
        if (!(t instanceof Function)) throw new Error("subclass must be type of Function");
        var n = null;
        "object" == typeof i && (n = i, i = t, t = function () {
            i.apply(this, arguments)
        });
        var r = t.prototype,
            s = function () {};
        return s.prototype = i.prototype, t.prototype = new s, t.superclass = i.prototype, t.superclass.constructor = i, O(t.prototype, r), n && O(t.prototype, n), e && O(t.prototype, e), t.prototype.class = t, t
    }

    function b(t, i, e) {
        return L(t, i, "constructor", e)
    }

    function L(t, i, e, n) {
        var r = i.superclass;
        if (r) {
            var s = r[e];
            return s ? s.apply(t, n) : void 0
        }
    }

    function S(t, i, e, n) {
        if ("constructor" == e) return I(t, i, n);
        if (i.super_ instanceof Function) {
            var r = i.super_.prototype[e];
            return r instanceof Function ? r.apply(t, n) : void 0
        }
    }

    function I(t, i, e) {
        return i.super_ instanceof Function ? i.super_.apply(t, e) : void 0
    }

    function x(t, i) {
        return t.super_ = i, t.prototype = Object.create(i.prototype, {
            super_: {
                value: i,
                enumerable: !1
            },
            constructor: {
                value: t,
                enumerable: !1
            }
        }), t
    }

    function C(t, i, e) {
        if (!(t instanceof Function) && t instanceof Object) {
            i = t.super;
            var n;
            return t.hasOwnProperty("constructor") ? (n = t.constructor, delete t.constructor) : n = i ? function () {
                i.apply(this, arguments)
            } : function () {}, C(n, i, t)
        }
        if (i && !(i instanceof Function) && i instanceof Object) return C(t, i.super, i);
        if (i && x(t, i), e) {
            var r = t.prototype;
            for (var s in e) r[s] = e[s]
        }
        return t
    }

    function R(t, i, n, r, s) {
        if (r) return void Object.defineProperty(t, i, {
            value: n,
            enumerable: !0
        });
        var o = {
                configurable: !0,
                enumerable: !0
            },
            h = "$" + i;
        n !== e && (t[h] = n), o.get = function () {
            return this[h]
        }, o.set = function (t) {
            var e = this[h];
            if (e == t) return !1;
            var n = new po(this, i, t, e);
            return this.beforeEvent(n) ? (this[h] = t, s && s.call(this, t, e), this.onEvent(n), !0) : !1
        }, Object.defineProperty(t, i, o)
    }

    function D(t, i) {
        for (var e = 0, n = i.length; n > e; e++) {
            var r = i[e];
            R(t, r.name || r, r.defaultValue || r.value, r.readOnly, r.onSetting)
        }
    }

    function P(t, i, e) {
        return i instanceof Object ? t = t.bind(i) : i && !e && (e = parseInt(i)), i && !e && (e = parseInt(i)), e ? setTimeout(t, e) : setTimeout(t)
    }

    function N(i, e) {
        return e && (i = i.bind(e)), t.requestAnimationFrame(i)
    }

    function M(t, i) {
        return t.className = i, t
    }

    function B(t, i) {
        if (!t.hasOwnProperty("classList")) {
            var e = t.getAttribute("class");
            if (!e) return M(t, i);
            for (var n = e.split(" "), r = 0, s = n.length; s > r; r++)
                if (n[r] == i) return;
            return e += " " + i, M(t, e)
        }
        t.classList.add(i)
    }

    function k(t, i) {
        if (!t.hasOwnProperty("classList")) {
            var e = t.getAttribute("class");
            if (!e || !e.indexOf(i)) return;
            for (var n = "", r = e.split(" "), s = 0, o = r.length; o > s; s++) r[s] != i && (n += r[s] + " ");
            return M(t, n)
        }
        t.classList.remove(i)
    }

    function G(t) {
        return !isNaN(t) && t instanceof Number || "number" == typeof t
    }

    function F(t) {
        return t !== e && (t instanceof String || "string" == typeof t)
    }

    function $(t) {
        return t !== e && (t instanceof Boolean || "boolean" == typeof t)
    }

    function z(t) {
        return Array.isArray(t)
    }

    function j(i) {
        i || (i = t.event), i.preventDefault ? i.preventDefault() : i.returnValue = !1
    }

    function Y(i) {
        i || (i = t.event), i.stopPropagation ? i.stopPropagation() : i.cancelBubble || (i.cancelBubble = !0)
    }

    function H(t) {
        j(t), Y(t)
    }

    function U(t) {
        return Math.floor(Math.random() * t)
    }

    function W() {
        return Math.random() >= .5
    }

    function X(t) {
        var i = !0;
        for (var e in t) {
            i = !1;
            break
        }
        return i
    }

    function V(t) {
        if (t && t > 0 && 1 > t) {
            var i = Math.floor(16777215 * Math.random());
            return "rgba(" + (i >> 16 & 255) + "," + (i >> 8 & 255) + "," + (255 & i) + "," + t.toFixed(2) + ")"
        }
        return Z(Math.floor(16777215 * Math.random()))
    }

    function q(t) {
        return t > 0 ? Math.floor(t) : Math.ceil(t)
    }

    function K(t) {
        return t > 0 ? Math.ceil(t) : Math.floor(t)
    }

    function Z(t) {
        return 16777216 > t ? "#" + ("000000" + t.toString(16)).slice(-6) : "rgba(" + (t >> 16 & 255) + "," + (t >> 8 & 255) + "," + (255 & t) + "," + ((t >> 24 & 255) / 255).toFixed(2) + ")"
    }

    function J(t, i, e) {
        "object" != typeof e || e.hasOwnProperty("enumerable") || (e.enumerable = !0), Object.defineProperty(t, i, e)
    }

    function Q(t, i) {
        for (var e in i)
            if ("_" != e[0]) {
                var n = i[e];
                "object" != typeof n || n.hasOwnProperty("enumerable") || (n.enumerable = !0)
            }
        Object.defineProperties(t, i)
    }

    function ti(i, e) {
        e || (e = t);
        for (var n = i.split("."), r = 0, s = n.length; s > r; r++) {
            var o = n[r];
            e = e[o]
        }
        return e
    }

    function ii(t) {
        return t instanceof MouseEvent || t instanceof Object && t.touches !== e
    }

    function ei(i) {
        t.console && console.log(i)
    }

    function ni(i) {
        t.console && console.trace(i)
    }

    function ri(i) {
        t.console && console.error(i)
    }

    function si(t, i, e) {
        var n, r, s;
        0 == t._lg ? (n = -1, s = 0, r = i) : 0 == t._lc ? (n = 0, s = 1, r = e) : (n = -1 / t._lg, r = (t._lg - n) * i + t._le, s = 1);
        var o = new no;
        return o._lg = n, o._le = r, o._lc = s, o._l6 = i, o._la = e, o._ju = Math.atan2(n, s), o._lcos = Math.cos(o._ju), o._sin = Math.sin(o._ju), o
    }

    function oi(t, i, e, n, r) {
        var s, o;
        i > n ? s = -1 : n > i && (s = 1), e > r ? o = -1 : r > e && (o = 1);
        var h, a;
        if (!s) return a = 0 > o ? t.y : t.bottom, {
            x: i,
            y: a
        };
        if (!o) return h = 0 > s ? t.x : t.right, {
            x: h,
            y: e
        };
        var l = (e - r) / (i - n),
            _ = e - l * i,
            u = 0 > s ? i - t.x : i - t.right,
            c = 0 > o ? e - t.y : e - t.bottom;
        return Math.abs(l) >= Math.abs(c / u) ? (a = 0 > o ? t.y : t.bottom, h = (a - _) / l) : (h = 0 > s ? t.x : t.right, a = l * h + _), {
            x: h,
            y: a
        }
    }

    function hi(t, i, e, n, r, s, o, h) {
        return 0 >= o || 0 >= h || 0 >= e || 0 >= n ? !1 : (o += r, h += s, e += t, n += i, (r > o || o > t) && (s > h || h > i) && (t > e || e > r) && (i > n || n > s))
    }

    function ai(t, i, e, n, r, s) {
        return r >= t && t + e >= r && s >= i && i + n >= s
    }

    function li(t, i, e, n, r, s, o, h, a) {
        return a && (t -= a, i -= a, e += a + a, n += a + a), r >= t && s >= i && t + e >= r + o && i + n >= s + h
    }

    function _i(t, i, e, n, r, s, o, h) {
        var a = t;
        a += e;
        var l = i;
        l += n;
        var _ = r;
        _ += o;
        var u = s;
        return u += h, r > t && (t = r), s > i && (i = s), a > _ && (a = _), l > u && (l = u), a -= t, l -= i, 0 > a || 0 > l ? null : new so(t, i, a, l)
    }

    function ui(t) {
        return "x" in t && "y" in t
    }

    function ci(t, i, n) {
        if (F(t) && (t = ho.fromString(t)), !t) return {
            x: 0,
            y: 0
        };
        if (t.x !== e) return {
            x: t.x,
            y: t.y
        };
        var r, s, o = t.horizontalPosition,
            h = t.verticalPosition;
        switch (o) {
            case ao:
                r = 0;
                break;
            case _o:
                r = i;
                break;
            default:
                r = i / 2
        }
        switch (h) {
            case uo:
                s = 0;
                break;
            case fo:
                s = n;
                break;
            default:
                s = n / 2
        }
        return {
            x: r,
            y: s
        }
    }

    function di(t, i, e) {
        t.children.add(i, e), t.onChildAdd(i, e)
    }

    function fi(t, i) {
        t._er && (t._er.remove(i), t.onChildRemove(i))
    }

    function gi(t) {
        return t.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, function (t, i) {
            return i.toUpperCase()
        })
    }

    function vi(t) {
        return t.replace(/[A-Z]/g, function (t) {
            return "-" + t.toLowerCase()
        }).replace(/^ms-/, "-ms-")
    }

    function Ei(t, i) {
        var e = t.style;
        if (!e) return !1;
        var n, r;
        for (n in i) i.hasOwnProperty(n) && (r = No(n)) && (e[r] = i[n]);
        return t
    }

    function pi(t) {
        var i, e, n = "";
        for (i in t) t.hasOwnProperty(i) && (e = No(i)) && (n += vi(e) + ":" + t[i] + ";");
        return n ? n.substring(0, n.length - 1) : n
    }

    function yi(t, i, e) {
        (i = No(i)) && (t.style[i] = e)
    }

    function Ti(t, i) {
        return Do ? (i && !F(i) && (i = pi(i)), Do.insertRule ? void Do.insertRule(t + "{" + i + "}", 0) : void(Do.addRule && Do.addRule(t, i, 0))) : !1
    }

    function mi(i, e) {
        i.touches && (i = i.changedTouches && i.changedTouches.length ? i.changedTouches[0] : i.touches[0]);
        var n = e.getBoundingClientRect(),
            r = i.clientX || 0,
            s = i.clientY || 0;
        return Vs && Ys && (t.pageXOffset && r == i.pageX && (r -= t.pageXOffset), t.pageYOffset && s == i.pageY && (s -= t.pageYOffset)), {
            x: r - n.left,
            y: s - n.top
        }
    }

    function Oi(t, i, e) {
        this._ko = t, this._scope = e, this._handler = i, this._dragPoints = new Ai, this._install()
    }

    function wi(t) {
        return Hs && t.metaKey || !Hs && t.ctrlKey
    }

    function Ai() {
        this.points = []
    }

    function bi(t, i, e, n, r) {
        Si(t, function (n) {
            if (i) {
                var r = n.responseXML;
                if (!r) return void(e || ch)("'" + t + "' XML format error.");
                i(r)
            }
        }, e, n, r)
    }

    function Li(t, i, e, n, r) {
        Si(t, function (n) {
            if (i) {
                var r, s = n.responseText;
                if (!s) return (e || ch)("'" + t + "' JSON format error."), r = new Error("'" + t + "' JSON format error."), i(s, r);
                try {
                    s = JSON.parse(s)
                } catch (o) {
                    (e || ch)(o), r = o
                }
                i(s, r)
            }
        }, e, n, r)
    }

    function Si(t, i, e, n, r) {
        (e === !1 || n === !1) && (r = !1);
        try {
            var s = new XMLHttpRequest,
                o = encodeURI(t);
            if (r !== !1) {
                var h;
                h = o.indexOf("?") > 0 ? "&" : "?", o += h + "__time=" + Date.now()
            }
            s.open("GET", o), s.onreadystatechange = function () {
                return 4 == s.readyState ? s.status && 200 != s.status ? void(e || ch)("'" + t + "' load error") : void(i && i(s)) : void 0
            }, s.send(n)
        } catch (a) {
            (e || ch)("'" + t + "' load error", a)
        }
    }

    function hi(t, i, e, n, r, s, o, h) {
        return 0 >= o || 0 >= h || 0 >= e || 0 >= n ? !1 : (o += r, h += s, e += t, n += i, (r > o || o > t) && (s > h || h > i) && (t > e || e > r) && (i > n || n > s))
    }

    function li(t, i, e, n, r, s, o, h) {
        return r >= t && s >= i && t + e >= r + o && i + n >= s + h
    }

    function Ii(t, i, e) {
        return t instanceof Object && t.x ? Ci(t, i, 0, 0) : xi(t, i, e, 0, 0)
    }

    function xi(t, i, e, n, r) {
        var s = Math.sin(e),
            o = Math.cos(e),
            h = t - n,
            a = i - r;
        return t = h * o - a * s + n, i = h * s + a * o + r, new io(t, i, e)
    }

    function Ci(t, i, e, n) {
        e = e || 0, n = n || 0;
        var r = Math.sin(i),
            s = Math.cos(i),
            o = t.x - e,
            h = t.y - n;
        return t.x = o * s - h * r + e, t.y = o * r + h * s + n, t
    }

    function Ri(t, i, e) {
        return Di(t, i, e, 0, 0)
    }

    function Di(t, i, e, n, r) {
        var s = xi(t.x, t.y, i, n, r),
            o = xi(t.x + t.width, t.y, i, n, r),
            h = xi(t.x + t.width, t.y + t.height, i, n, r),
            a = xi(t.x, t.y + t.height, i, n, r);
        return e ? e.clear() : e = new so, e.addPoint(s), e.addPoint(o), e.addPoint(h), e.addPoint(a), e
    }

    function Pi(t, i) {
        var e = this.ratio || 1;
        this.style.width = t + "px", this.style.height = i + "px", this.width = t * e, this.height = i * e
    }

    function Ni(t) {
        var i = t.webkitBackingStorePixelRatio || t.mozBackingStorePixelRatio || t.msBackingStorePixelRatio || t.oBackingStorePixelRatio || t.backingStorePixelRatio || 1;
        return gh / i
    }

    function Mi(t, e, n) {
        var r = i.createElement("canvas");
        if (r.g = r.getContext("2d"), t !== !0 && !n) return t && e && (r.width = t, r.height = e), r;
        var s = r.g;
        return s.ratio = r.ratio = Ni(s), r.setSize = Pi, s._jw = function () {
            this.canvas.width = this.canvas.width
        }, t && e && r.setSize(t, e), r
    }

    function Bi(t, i) {
        return vh || (vh = Mi()), t && i && (vh.width = t, vh.height = i), vh.g
    }

    function ki(t, i, e) {
        return (e || Zs.FONT_STYLE) + " " + (i || Zs.FONT_SIZE) + "px " + (t || Zs.FONT_FAMILY)
    }

    function Gi(t, i, e, n, r, s, o, h, a, l) {
        if (t.save(), t.translate(e, n), Eh && ph > o) {
            var _ = o / ph;
            t.scale(_, _), o = ph, l = null
        }
        a || (a = Zs.LINE_HEIGHT), o || (o = Zs.FONT_SIZE), a *= o, t.font = l || ki(s, o, h), t.textAlign = r, t.textBaseline = "middle";
        for (var u = a / 2, c = i.split("\n"), d = 0, f = c.length; f > d; d++) {
            var g = c[d];
            t.fillText(g, 0, u), u += a
        }
        t.restore()
    }

    function Fi(t, i, e, n, r, s) {
        if (!t) return {
            width: 0,
            height: 0
        };
        if (i || (i = Zs.FONT_SIZE), Eh && ph > i) {
            var o = i / ph,
                h = Fi(t, ph, e, n, r);
            return h.width *= o, h.height *= o, h
        }
        var a = Bi();
        a.font = s || ki(e, i, n), r || (r = Zs.LINE_HEIGHT);
        for (var l = i * r, _ = 0, u = 0, c = t.split("\n"), d = 0, f = c.length; f > d; d++) {
            var g = c[d];
            _ = Math.max(a.measureText(g).width, _), u += l
        }
        return {
            width: _,
            height: u
        }
    }

    function $i(t, i, e, n, r) {
        var s;
        if (Bs) try {
            s = t.getImageData(i, e, n, r)
        } catch (o) {} else s = t.getImageData(i, e, n, r);
        return s
    }

    function zi(t) {
        return Math.log(t + Math.sqrt(t * t + 1))
    }

    function ji(t, i) {
        i = i || t(1);
        var e = 1 / i,
            n = .5 * e,
            r = Math.min(1, i / 100);
        return function (s) {
            if (0 >= s) return 0;
            if (s >= i) return 1;
            for (var o = s * e, h = 0; h++ < 10;) {
                var a = t(o),
                    l = s - a;
                if (Math.abs(l) <= r) return o;
                o += l * n
            }
            return o
        }
    }

    function Yi(t, i, e) {
        var n = 1 - t,
            r = n * n * i[0] + 2 * n * t * i[2] + t * t * i[4],
            s = n * n * i[1] + 2 * n * t * i[3] + t * t * i[5];
        if (e) {
            var o = (i[0] + i[4] - 2 * i[2]) * t + i[2] - i[0],
                h = (i[1] + i[5] - 2 * i[3]) * t + i[3] - i[1];
            return {
                x: r,
                y: s,
                rotate: Math.atan2(h, o)
            }
        }
        return {
            t: t,
            x: r,
            y: s
        }
    }

    function Hi(t, i, e) {
        var n = t - 2 * i + e;
        return 0 != n ? (t - i) / n : -1
    }

    function Ui(t, i) {
        i.add(t[4], t[5]);
        var e = Hi(t[0], t[2], t[4]);
        if (e > 0 && 1 > e) {
            var n = Yi(e, t);
            i.add(n.x, n.y)
        }
        var r = Hi(t[1], t[3], t[5]);
        if (r > 0 && 1 > r) {
            var n = Yi(r, t);
            i.add(n.x, n.y)
        }
        return i
    }

    function Wi(t, i) {
        return Math.abs(t - i) < 1e-7
    }

    function Xi(t, i) {
        return Wi(t[0], i[0]) && Wi(t[1], i[1])
    }

    function Vi(t) {
        if (Xi([t[0], t[1]], [t[2], t[3]])) {
            var i = t[0],
                e = t[1],
                n = t[4],
                r = t[5],
                s = Math.sqrt(yh(i, e, n, r));
            return function (t) {
                return s * t
            }
        }
        if (Xi([t[0], t[1]], [t[4], t[5]]) || Xi([t[2], t[3]], [t[4], t[5]])) {
            var i = t[0],
                e = t[1],
                n = t[2],
                r = t[3],
                s = Math.sqrt(yh(i, e, n, r));
            return function (t) {
                return s * t
            }
        }
        var o = t[0],
            h = t[2],
            a = t[4],
            l = o - 2 * h + a,
            _ = 2 * h - 2 * o;
        o = t[1], h = t[3], a = t[5];
        var u = o - 2 * h + a,
            c = 2 * h - 2 * o,
            d = 4 * (l * l + u * u),
            f = 4 * (l * _ + u * c),
            g = _ * _ + c * c,
            s = 4 * d * g - f * f,
            v = 1 / s,
            E = .125 * Math.pow(d, -1.5),
            p = 2 * Math.sqrt(d),
            y = (s * zi(f / Math.sqrt(s)) + 2 * Math.sqrt(d) * f * Math.sqrt(g)) * E;
        return function (t) {
            var i = f + 2 * t * d,
                e = i / Math.sqrt(s),
                n = i * i * v;
            return (s * Math.log(e + Math.sqrt(n + 1)) + p * i * Math.sqrt(g + t * f + t * t * d)) * E - y
        }
    }

    function qi(t, i, e) {
        var n = 1 - t,
            r = i[0],
            s = i[2],
            o = i[4],
            h = i[6],
            a = r * n * n * n + 3 * s * t * n * n + 3 * o * t * t * n + h * t * t * t;
        if (e) var l = 3 * t * t * h + (6 * t - 9 * t * t) * o + (9 * t * t - 12 * t + 3) * s + (-3 * t * t + 6 * t - 3) * r;
        r = i[1], s = i[3], o = i[5], h = i[7];
        var _ = r * n * n * n + 3 * s * t * n * n + 3 * o * t * t * n + h * t * t * t;
        if (e) {
            var u = 3 * t * t * h + (6 * t - 9 * t * t) * o + (9 * t * t - 12 * t + 3) * s + (-3 * t * t + 6 * t - 3) * r;
            return {
                x: a,
                y: _,
                rotate: Math.atan2(u, l)
            }
        }
        return {
            x: a,
            y: _
        }
    }

    function Ki(t, i, e, n) {
        var r = -t + 3 * i - 3 * e + n;
        if (0 == r) return [(t - i) / (2 * e - 4 * i + 2 * t)];
        var s = 2 * t - 4 * i + 2 * e,
            o = i - t,
            h = s * s - 4 * r * o;
        return 0 > h ? void 0 : 0 == h ? [-s / (2 * r)] : (h = Math.sqrt(h), [(h - s) / (2 * r), (-h - s) / (2 * r)])
    }

    function Zi(t, i) {
        i.add(t[6], t[7]);
        var e = Ki(t[0], t[2], t[4], t[6]);
        if (e)
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                if (!(0 >= r || r >= 1)) {
                    var s = qi(r, t);
                    i.add(s.x, s.y)
                }
            }
        if (e = Ki(t[1], t[3], t[5], t[7]))
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                if (!(0 >= r || r >= 1)) {
                    var s = qi(r, t);
                    i.add(s.x, s.y)
                }
            }
    }

    function Ji(t) {
        var i = {
                x: t[0],
                y: t[1]
            },
            e = {
                x: t[2],
                y: t[3]
            },
            n = {
                x: t[4],
                y: t[5]
            },
            r = {
                x: t[6],
                y: t[7]
            },
            s = i.x - 0,
            o = i.y - 0,
            h = e.x - 0,
            a = e.y - 0,
            l = n.x - 0,
            _ = n.y - 0,
            u = r.x - 0,
            c = r.y - 0,
            d = 3 * (-s + 3 * h - 3 * l + u),
            f = 6 * (s - 2 * h + l),
            g = 3 * (-s + h),
            v = 3 * (-o + 3 * a - 3 * _ + c),
            E = 6 * (o - 2 * a + _),
            p = 3 * (-o + a),
            y = function (t) {
                var i = d * t * t + f * t + g,
                    e = v * t * t + E * t + p;
                return Math.sqrt(i * i + e * e)
            },
            T = (y(0) + 4 * y(.5) + y(1)) / 6;
        return T
    }

    function Qi(t, i) {
        function e(t, i, e, n) {
            var r = -t + 3 * i - 3 * e + n,
                s = 2 * t - 4 * i + 2 * e,
                o = i - t;
            return function (t) {
                return 3 * (r * t * t + s * t + o)
            }
        }

        function n(t, i) {
            var e = r(t),
                n = s(t);
            return Math.sqrt(e * e + n * n) * i
        }
        var r = e(t[0], t[2], t[4], t[6]),
            s = e(t[1], t[3], t[5], t[7]);
        i = i || 100;
        var o = 1 / i;
        return function (t) {
            if (!t) return 0;
            for (var i, e = 0, r = 0;;) {
                if (i = e + o, i >= t) return r += n(e, i - e);
                r += n(e, o), e = i
            }
        }
    }

    function te(t, i, e) {
        return yh(i, e, t.cx, t.cy) <= t._squareR + Th
    }

    function ie(t, i, e, n) {
        return e = e || ee(t, i), new ne((t.x + i.x) / 2, (t.y + i.y) / 2, e / 2, t, i, null, n)
    }

    function ee(t, i) {
        return eo(t.x, t.y, i.x, i.y)
    }

    function ne(t, i, e, n, r, s, o) {
        this.cx = t, this.cy = i, this.r = e, this._squareR = e * e, this.p1 = n, this.p2 = r, this.p3 = s, this._otherPoint = o
    }

    function re(t, i, e, n) {
        this.cx = t, this.cy = i, this.width = e, this.height = n
    }

    function se(t) {
        var i = t[0],
            e = t[1],
            n = t[2],
            r = ne._lcreateCircle(i, e, n);
        return he(t, i, e, n, r)
    }

    function oe(t, i) {
        i = i || ae(t);
        for (var e, n = i.width / i.height, r = [], s = t.length, o = 0; s > o; o++) e = t[o], r.push({
            x: e.x,
            y: e.y * n
        });
        var h = se(r);
        return h ? new re(h.cx, h.cy / n, 2 * h.r, 2 * h.r / n) : void 0
    }

    function he(t, i, e, n, r) {
        for (var s, o, h = t.length, a = r._squareR, l = 0; h > l; l++)
            if (s = t[l], s != i && s != e && s != n) {
                var _ = yh(r.cx, r.cy, s.x, s.y);
                _ - Th > a && (a = _, o = s)
            }
        if (!o) return r;
        var u, c = ne._lcreateCircle(o, i, e),
            d = ne._lcreateCircle(o, i, n),
            f = ne._lcreateCircle(o, n, e);
        return te(c, n.x, n.y) && (u = c), te(d, e.x, e.y) && (!u || u.r > d.r) && (u = d), te(f, i.x, i.y) && (!u || u.r > f.r) && (u = f), i = u.p1, e = u.p2, n = u.p3 || u._otherPoint, he(t, i, e, n, u)
    }

    function ae(t) {
        for (var i, e = t.length, n = new so, r = 0; e > r; r++) i = t[r], n.add(i.x, i.y);
        return n
    }

    function le(t, i, e, n, r) {
        this._5z && this.validate();
        var s = r ? this.getBounds(r) : this.bounds,
            o = e / s.width,
            h = t - o * s.x,
            a = n / s.height,
            l = i - a * s.y,
            _ = this._ep,
            u = [];
        return g(_, function (t) {
            var i = t.clone(),
                e = i.points;
            if (e && e.length) {
                for (var n = e.length, r = [], s = 0; n > s; s++) {
                    var _ = e[s];
                    s++;
                    var c = e[s];
                    _ = o * _ + h, c = a * c + l, r.push(_), r.push(c)
                }
                i.points = r
            }
            u.push(i)
        }, this), new Zh(u)
    }

    function _e(t, i, e, n, r, s) {
        if (r = r || 0, e = e || 0, !r && !s) return !1;
        if (!n) {
            var o = this.getBounds(r);
            if (!o.intersectsPoint(t, i, e)) return !1
        }
        var h = Math.round(2 * e) || 1,
            a = Bi(h, h),
            l = (a.canvas, -t + e),
            _ = -i + e;
        if (a.setTransform(1, 0, 0, 1, l, _), !a.isPointInStroke) {
            this._k4(a), r && a.stroke(), s && a.fill();
            var u = $i(a, 0, 0, h, h);
            if (!u) return !1;
            u = u.data;
            for (var c = u.length / 4; c > 0;) {
                if (u[4 * c - 1] > Kh) return !0;
                --c
            }
            return !1
        }
        return a.lineWidth = (r || 0) + 2 * e, this._k4(a), r && a.isPointInStroke(e, e) ? !0 : s ? a.isPointInPath(e, e) : !1
    }

    function ue(t, i, e) {
        if (!this._i8) return null;
        var n = this._ep;
        if (n.length < 2) return null;
        e === !1 && (t += this._i8);
        var r = n[0];
        if (0 >= t) return Nr(r.points[0], r.points[1], n[1].points[0], n[1].points[1], t, i);
        if (t >= this._i8) {
            r = n[n.length - 1];
            var s, o, h = r.points,
                a = h.length,
                l = h[a - 2],
                _ = h[a - 1];
            if (a >= 4) s = h[a - 4], o = h[a - 3];
            else {
                r = n[n.length - 2];
                var u = r.lastPoint;
                s = u.x, o = u.y
            }
            return Nr(l, _, l + l - s, _ + _ - o, t - this._i8, i)
        }
        for (var c, d = 0, f = 1, a = n.length; a > f; f++)
            if (c = n[f], c._i8) {
                if (!(d + c._i8 < t)) {
                    var g, u = r.lastPoint;
                    if (c.type == Xh) {
                        var v = c.points;
                        g = ce(t - d, c, u.x, u.y, v[0], v[1], v[2], v[3], c._r)
                    } else {
                        if (!c._lf) return Nr(u.x, u.y, c.points[0], c.points[1], t - d, i);
                        var E = ji(c._lf, c._i8)(t - d),
                            v = c.points;
                        g = c.type == Wh && 6 == v.length ? qi(E, [u.x, u.y].concat(v), !0) : Yi(E, [u.x, u.y].concat(v), !0)
                    }
                    return i && (g.x -= i * Math.sin(g.rotate || 0), g.y += i * Math.cos(g.rotate || 0)), g
                }
                d += c._i8, r = c
            } else r = c
    }

    function ce(t, i, e, n, r, s, o, h) {
        if (t <= i._l1) return Nr(e, n, r, s, t, t);
        if (t >= i._i8) return t -= i._i8, Nr(i._p2x, i._p2y, o, h, t, t);
        if (t -= i._l1, i._o) {
            var a = t / i._r;
            i._CCW && (a = -a);
            var l = xi(i._p1x, i._p1y, a, i._o.x, i._o.y);
            return l.rotate += i._lg1 || 0, l.rotate += Math.PI, l
        }
        return Nr(i._p1x, i._p1y, i._p2x, i._p2y, t, t)
    }

    function si(t, i, e) {
        var n, r, s;
        0 == t._lg ? (n = -1, s = 0, r = i) : 0 == t._lc ? (n = 0, s = 1, r = e) : (n = -1 / t._lg, r = (t._lg - n) * i + t._le, s = 1);
        var o = new no;
        return o._lg = n, o._le = r, o._lc = s, o._l6 = i, o._la = e, o
    }

    function de(t) {
        return t %= 2 * Math.PI, 0 > t && (t += 2 * Math.PI), t
    }

    function fe(t, i, e, n, r, s, o, h) {
        var a = eo(i, e, n, r),
            l = eo(n, r, s, o);
        if (!a || !l) return t._d = 0, t._r = 0, t._l1 = a, t._l2 = l, t._i8 = 0;
        var _ = ve(n, r, i, e),
            u = ve(n, r, s, o);
        t._lg1 = _, t._lg2 = u;
        var c = _ - u;
        c = de(c), c > Math.PI && (c = 2 * Math.PI - c, t._CCW = !0);
        var d = Math.PI - c,
            f = Math.tan(c / 2),
            g = h / f,
            v = Math.min(a, l);
        g > v && (g = v, h = f * g);
        var E, p = n + Math.cos(_) * g,
            y = r + Math.sin(_) * g,
            T = n + Math.cos(u) * g,
            m = r + Math.sin(u) * g,
            O = new no(i, e, n, r),
            w = new no(n, r, s, o),
            A = si(O, p, y),
            b = si(w, T, m),
            L = A._3j(b),
            S = Math.atan2(y - L.y, p - L.x),
            I = Math.atan2(m - L.y, T - L.x);
        E = t._CCW ? I : S;
        for (var x, C = 0; 4 > C;) {
            var R = C * Qs;
            if (de(R - E) <= d) {
                var D, P;
                if (x ? x++ : x = 1, 0 == C ? (D = L.x + h, P = L.y) : 1 == C ? (D = L.x, P = L.y + h) : 2 == C ? (D = L.x - h, P = L.y) : (D = L.x, P = L.y - h), t["$boundaryPoint" + x] = {
                        x: D,
                        y: P
                    }, 2 == x) break
            }
            C++
        }
        return t._p1x = p, t._p1y = y, t._p2x = T, t._p2y = m, t._o = L, t._d = g, t._r = h, t._l1 = a - g, t._l2 = l - g, t._i8 = t._l1 + d * h
    }

    function ge(t, i, e, n, r, s, o) {
        var h = ve(e, n, t, i),
            a = ve(e, n, r, s),
            l = h - a;
        return o ? l : (0 > l && (l = -l), l > Math.PI && (l -= Math.PI), l)
    }

    function ve(t, i, e, n) {
        return Math.atan2(n - i, e - t)
    }

    function Ee(t) {
        var i = Oh.exec(t);
        if (i) return i[1];
        var e = t.lastIndexOf(".");
        return e >= 0 && e < t.length - 1 ? t.substring(e + 1) : void 0
    }

    function pe(t) {
        if (!t) return null;
        if (t instanceof Zh) return xh;
        if (t.draw instanceof Function) return Ih;
        if (F(t)) {
            var i = Ee(t);
            if (i) {
                if (!Bs && wh.test(i)) return Sh;
                if (Ah.test(i)) return Lh
            }
            return bh
        }
    }

    function ye(t, i, e) {
        if (this._k6 = pe(t), !this._k6) throw new Error("the image format is not supported", t);
        this._k7 = t, this._lgu = i, this._8p = e, this.width = i || Zs.IMAGE_WIDTH, this.height = e || Zs.IMAGE_HEIGHT, this._ii = {}
    }

    function Te(t, i, e, n) {
        return i ? (Ph[t] = new ye(i, e, n), t) : void delete Ph[t]
    }

    function me(t) {
        if (t._jl) return t._jl;
        var i = F(t);
        if (!i && !t.name) return t._jl = new ye(t);
        var e = t.name || t;
        return e in Ph ? Ph[e] : Ph[e] = new ye(t)
    }

    function Oe(t) {
        return t in Ph
    }

    function we(t, i, e) {
        e = e || {};
        var n = t.getBounds(e.lineWidth);
        if (!n.width || !n.height) return !1;
        var r = i.getContext("2d"),
            s = i.ratio || 1,
            o = e.scaleMode || "full.uniform",
            h = /full/i.test(o),
            a = /uniform/i.test(o),
            l = 1,
            _ = 1;
        if (h) {
            var u = i.width,
                c = i.height,
                d = e.padding,
                f = 0,
                g = 0;
            if (d) {
                var v, E, p, y;
                G(d) ? v = E = p = y = d : (v = d.top || 0, E = d.bottom || 0, p = d.left || 0, y = d.right || 0), u -= p + y, c -= v + E, f += p, g += v
            }
            l = u / n.width, _ = c / n.height, a && (l > _ ? (f += (u - _ * n.width) / 2, l = _) : _ > l && (g += (c - l * n.height) / 2, _ = l)), (f || g) && r.translate(f, g)
        }
        r.translate(-n.x * l, -n.y * _), t.draw(r, s, e, l, _, !0)
    }

    function Ae(t, i, e) {
        var n = me(t);
        return n ? (n.validate(), (n._k6 == Sh || n._6t()) && n._lgk(function (t) {
            t.source && (this.width = this.width, we(t.source, this, e))
        }, i), void we(n, i, e)) : (dh.error("draw image error - " + t), !1)
    }

    function be(t, i, n, r) {
        var s = t.length;
        if (s && !(0 > s)) {
            r = r || 1;
            for (var o, h, a, l = [], _ = 0; _++ < s;)
                if (o = t.getLocation(_, 0), o && eo(i, n, o.x, o.y) <= r) {
                    h = _, a = o.rotate;
                    break
                }
            if (h !== e) {
                for (var u, c, d = 0, _ = 0, f = t._ep.length; f > _; _++) {
                    if (o = t._ep[_], !u && (d += o._i8 || 0, d > h))
                        if (u = !0, o.type == Hh || o.type == Vh) l.push(new qh(Hh, [i, n]));
                        else {
                            var g = Math.max(10, o._i8 / 6),
                                v = g * Math.sin(a),
                                E = g * Math.cos(a);
                            if (o.type == Wh) {
                                var p = o.points[0],
                                    y = o.points[1];
                                if (c) {
                                    var T = new no(i, n, i + E, n + v),
                                        m = T._3j(new no(c.lastPoint.x, c.lastPoint.y, o.points[0], o.points[1]));
                                    m.x !== e && (p = m.x, y = m.y)
                                }
                                l.push(new qh(Wh, [p, y, i - E, n - v, i, n]))
                            } else l.push(new qh(Uh, [i - E, n - v, i, n]));
                            if (o.points)
                                if (o.type == Wh) {
                                    o.points[0] = i + E, o.points[1] = n + v;
                                    var T = new no(i, n, i + E, n + v),
                                        m = T._3j(new no(o.points[2], o.points[3], o.points[4], o.points[5]));
                                    m.x !== e && (o.points[2] = m.x, o.points[3] = m.y)
                                } else if (o.type == Uh) {
                                o.type = Wh, o.points = [i + E, n + v].concat(o.points);
                                var T = new no(i, n, i + E, n + v),
                                    m = T._3j(new no(o.points[2], o.points[3], o.points[4], o.points[5]));
                                m.x !== e && (o.points[2] = m.x, o.points[3] = m.y)
                            } else o.type == Hh && (o.type = Uh, o.points = [i + E, n + v].concat(o.points), _ == f - 1 && (o.invalidTerminal = !0))
                        }
                    l.push(o), c = o
                }
                return l
            }
        }
    }

    function Le(t) {
        var i = t.width,
            e = t.height,
            n = $i(t.g, 0, 0, i, e);
        return n ? Ie(n.data, i, e) : void 0
    }

    function Se(t, i, e) {
        this._15(t, i, e)
    }

    function Ie(t, i, e) {
        return new Se(t, i, e)
    }

    function xe(t) {
        if ("#" == t[0]) {
            if (t = t.substring(1), 3 == t.length) t = t[0] + t[0] + t[1] + t[1] + t[2] + t[2];
            else if (6 != t.length) return;
            return t = parseInt(t, 16), [t >> 16 & 255, t >> 8 & 255, 255 & t]
        }
        if (/^rgb/i.test(t)) {
            var i = t.indexOf("("),
                e = t.indexOf(")");
            if (0 > i || i > e) return;
            if (t = t.substring(i + 1, e), t = t.split(","), t.length < 3) return;
            var n = parseInt(t[0]),
                r = parseInt(t[1]),
                s = parseInt(t[2]),
                o = 3 == t.length ? 255 : parseInt(t[3]);
            return [n, r, s, o]
        }
        dh.error("color format error, [" + t + "]")
    }

    function Ce(t, i, e) {
        return e || (e = Zs.BLEND_MODE), e == fh.BLEND_MODE_MULTIPLY ? t * i : e == fh.BLEND_MODE_DARKEN ? Math.min(t, i) : e == fh.BLEND_MODE_COLOR_BURN ? 1 - (1 - i) / t : e == fh.BLEND_MODE_LINEAR_BURN ? t + i - 1 : e == fh.BLEND_MODE_LIGHTEN ? Math.max(t, i) : e == fh.BLEND_MODE_SCREEN ? t + i - t * i : i
    }

    function Re(t, i, e) {
        var n = $i(t.g, 0, 0, t.width, t.height);
        if (n) {
            var r = n.data;
            if (e instanceof Function) r = e(t, r, i) || r;
            else {
                var s = i[0] / 255,
                    o = i[1] / 255,
                    h = i[2] / 255;
                if (e == fh.BLEND_MODE_GRAY)
                    for (var a = 0, l = r.length; l > a; a += 4) {
                        var _ = 77 * r[a] + 151 * r[a + 1] + 28 * r[a + 2] >> 8;
                        r[a] = _ * s | 0, r[a + 1] = _ * o | 0, r[a + 2] = _ * h | 0
                    } else
                        for (var a = 0, l = r.length; l > a; a += 4) r[a] = 255 * Ce(s, r[a] / 255, e) | 0, r[a + 1] = 255 * Ce(o, r[a + 1] / 255, e) | 0, r[a + 2] = 255 * Ce(h, r[a + 2] / 255, e) | 0
            }
            var t = Mi(t.width, t.height);
            return t.g.putImageData(n, 0, 0), t
        }
    }

    function De(t, i, e, n) {
        return 1 > e && (e = 1), Pe(t - e, i - e, 2 * e, 2 * e, n)
    }

    function Pe(t, i, e, n, r) {
        e = Math.round(e) || 1, n = Math.round(n) || 1;
        var s = Bi(e, n);
        s.setTransform(1, 0, 0, 1, -t, -i), r.draw(s);
        var o = $i(s, 0, 0, e, n);
        if (!o) return !1;
        o = o.data;
        for (var h = o.length / 4; h-- > 0;)
            if (o[4 * h - 1] > Kh) return !0;
        return !1
    }

    function Ne(t, i, e, n, r, s) {
        t -= r.$x, i -= r.$y;
        var o = r._f3.intersection(t, i, e, n);
        if (!o) return !1;
        t = o.x * s, i = o.y * s, e = o.width * s, n = o.height * s, e = Math.round(e) || 1, n = Math.round(n) || 1;
        var h = Bi(),
            a = h.canvas;
        a.width < e || a.height < n ? (a.width = e, a.height = n) : (h.setTransform(1, 0, 0, 1, 0, 0), h.clearRect(0, 0, e, n)), h.setTransform(1, 0, 0, 1, -t - r.$x * s, -i - r.$y * s), h.scale(s, s), r._ix(h, 1);
        var l = $i(h, 0, 0, e, n);
        if (!l) return !1;
        l = l.data;
        for (var _ = l.length / 4; _-- > 0;)
            if (l[4 * _ - 1] > Kh) return !0;
        return !1
    }

    function Me(t, i, e, n, r, s, o, h, a) {
        if (ai(t, i, e, n, h, a)) return null;
        var l, _, u, c = new qh(Hh, [t + e - r, i]),
            d = new qh(Uh, [t + e, i, t + e, i + s]),
            f = new qh(Hh, [t + e, i + n - s]),
            g = new qh(Uh, [t + e, i + n, t + e - r, i + n]),
            v = new qh(Hh, [t + r, i + n]),
            E = new qh(Uh, [t, i + n, t, i + n - s]),
            p = new qh(Hh, [t, i + s]),
            y = new qh(Uh, [t, i, t + r, i]),
            T = (new qh(Vh), [c, d, f, g, v, E, p, y]),
            m = new so(t + r, i + s, e - r - r, n - s - s);
        t > h ? (l = ao, u = 5) : h > t + e ? (l = _o, u = 1) : (l = lo, u = 0), i > a ? (_ = uo, l == ao && (u = 7)) : a > i + n ? (_ = fo, l == _o ? u = 3 : l == lo && (u = 4)) : (_ = co, l == ao ? u = 6 : l == _o && (u = 2));
        var O = ze(u, t, i, e, n, r, s, o, h, a, m),
            w = O[0],
            A = O[1],
            b = new Zh,
            L = b._ep;
        L.push(new qh(Yh, [w.x, w.y])), L.push(new qh(Hh, [h, a])), L.push(new qh(Hh, [A.x, A.y])), A._kn && (L.push(A._kn), A._knNO++);
        for (var S = A._knNO % 8, I = w._knNO;;)
            if (L.push(T[S]), ++S, S %= 8, S == I) break;
        return w._kn && L.push(w._kn), b.closePath(), b
    }

    function Be(t, i, n, r, s, o, h, a, l, _, u, c, d, f) {
        var g = new no(c, d, n, r),
            v = new no(i[0], i[1], i[4], i[5]),
            E = v._3j(g, u),
            p = E[0],
            y = E[1];
        if (p._rest !== e) {
            p._knNO = (t - 1) % 8, y._knNO = (t + 1) % 8;
            var T = p._rest;
            7 == t ? (p.y = o + _ + Math.min(f.height, T), y.x = s + l + Math.min(f.width, T)) : 5 == t ? (p.x = s + l + Math.min(f.width, T), y.y = o + a - _ - Math.min(f.height, T)) : 3 == t ? (p.y = o + a - _ - Math.min(f.height, T), y.x = s + h - l - Math.min(f.width, T)) : 1 == t && (p.x = s + h - l - Math.min(f.width, T), y.y = o + _ + Math.min(f.height, T))
        } else {
            g._l2(g._l6, g._la, p.x, p.y), p = g._$d(i), g._l2(g._l6, g._la, y.x, y.y), y = g._$d(i);
            var m = je(i, [p, y]),
                O = m[0],
                w = m[2];
            p._knNO = t, y._knNO = t, p._kn = new qh(Uh, O.slice(2)), y._kn = new qh(Uh, w.slice(2))
        }
        return [p, y]
    }

    function ke(t, i, e, n, r, s, o, h, a, l) {
        var _, u;
        if (a - h >= i + s) _ = {
            y: e,
            x: a - h
        }, _._knNO = 0;
        else {
            _ = {
                y: e + o,
                x: Math.max(i, a - h)
            };
            var c = [i, e + o, i, e, i + s, e],
                d = new no(a, l, _.x, _.y);
            if (_ = d._$d(c)) {
                z(_) && (_ = _[0].t > _[1].t ? _[0] : _[1]);
                var f = je(c, [_]);
                f = f[0], f && (_._kn = new qh(Uh, f.slice(2))), _._knNO = 7
            } else _ = {
                y: e,
                x: i + s
            }, _._knNO = 0
        }
        if (i + n - s >= a + h) u = {
            y: e,
            x: a + h
        }, u._knNO = 0;
        else {
            u = {
                y: e + o,
                x: Math.min(i + n, a + h)
            };
            var g = [i + n - s, e, i + n, e, i + n, e + o],
                d = new no(a, l, u.x, u.y);
            if (u = d._$d(g)) {
                z(u) && (u = u[0].t < u[1].t ? u[0] : u[1]);
                var f = je(g, [u]);
                f && f[f.length - 1] && (u._kn = new qh(Uh, f[f.length - 1].slice(2))), u._knNO = 1
            } else u = {
                y: e,
                x: i + n - s
            }, u._knNO = 0
        }
        return [_, u]
    }

    function Ge(t, i, e, n, r, s, o, h, a, l) {
        var _, u;
        if (l - h >= e + o) _ = {
            x: i + n,
            y: l - h
        }, _._knNO = 2;
        else {
            _ = {
                x: i + n - s,
                y: Math.max(e, l - h)
            };
            var c = [i + n - s, e, i + n, e, i + n, e + o],
                d = new no(a, l, _.x, _.y);
            if (_ = d._$d(c)) {
                z(_) && (_ = _[0].t > _[1].t ? _[0] : _[1]);
                var f = je(c, [_]);
                f = f[0], f && (_._kn = new qh(Uh, f.slice(2))), _._knNO = 1
            } else _ = {
                x: i + n,
                y: e + o
            }, _._knNO = 2
        }
        if (e + r - o >= l + h) u = {
            x: i + n,
            y: l + h
        }, u._knNO = 2;
        else {
            u = {
                x: i + n - s,
                y: Math.min(e + r, l + h)
            };
            var g = [i + n, e + r - o, i + n, e + r, i + n - s, e + r],
                d = new no(a, l, u.x, u.y);
            if (u = d._$d(g)) {
                z(u) && (u = u[0].t < u[1].t ? u[0] : u[1]);
                var f = je(g, [u]);
                f[1] && (u._kn = new qh(Uh, f[1].slice(2))), u._knNO = 3
            } else u = {
                x: i + n,
                y: e + r - o
            }, u._knNO = 2
        }
        return [_, u]
    }

    function Fe(t, i, e, n, r, s, o, h, a, l) {
        var _, u;
        if (a - h >= i + s) u = {
            y: e + r,
            x: a - h
        }, u._knNO = 4;
        else {
            u = {
                y: e + r - o,
                x: Math.max(i, a - h)
            };
            var c = [i + s, e + r, i, e + r, i, e + r - o],
                d = new no(a, l, u.x, u.y);
            if (u = d._$d(c)) {
                z(u) && (u = u[0].t < u[1].t ? u[0] : u[1]);
                var f = je(c, [u]);
                f = f[f.length - 1], f && (u._kn = new qh(Uh, f.slice(2))), u._knNO = 5
            } else u = {
                y: e + r,
                x: i + s
            }, u._knNO = 4
        }
        if (i + n - s >= a + h) _ = {
            y: e + r,
            x: a + h
        }, _._knNO = 4;
        else {
            _ = {
                y: e + r - o,
                x: Math.min(i + n, a + h)
            };
            var g = [i + n, e + r - o, i + n, e + r, i + n - s, e + r],
                d = new no(a, l, _.x, _.y);
            if (_ = d._$d(g)) {
                z(_) && (_ = _[0].t > _[1].t ? _[0] : _[1]);
                var f = je(g, [_]);
                f[0] && (_._kn = new qh(Uh, f[0].slice(2))), _._knNO = 3
            } else _ = {
                y: e + r,
                x: i + n - s
            }, _._knNO = 4
        }
        return [_, u]
    }

    function $e(t, i, e, n, r, s, o, h, a, l) {
        var _, u;
        if (l - h >= e + o) u = {
            x: i,
            y: l - h
        }, u._knNO = 6;
        else {
            u = {
                x: i + s,
                y: Math.max(e, l - h)
            };
            var c = [i, e + o, i, e, i + s, e],
                d = new no(a, l, u.x, u.y);
            if (u = d._$d(c)) {
                z(u) && (u = u[0].t < u[1].t ? u[0] : u[1]);
                var f = je(c, [u]);
                f = f[f.length - 1], f && (u._kn = new qh(Uh, f.slice(2)))
            } else u = {
                x: i,
                y: e + o
            };
            u._knNO = 7
        }
        if (e + r - o >= l + h) _ = {
            x: i,
            y: l + h
        }, _._knNO = 6;
        else {
            _ = {
                x: i + s,
                y: Math.min(e + r, l + h)
            };
            var g = [i + s, e + r, i, e + r, i, e + r - o],
                d = new no(a, l, _.x, _.y);
            if (_ = d._$d(g)) {
                z(_) && (_ = _[0].t > _[1].t ? _[0] : _[1]);
                var f = je(g, [_]);
                f[0] && (_._kn = new qh(Uh, f[0].slice(2))), _._knNO = 5
            } else _ = {
                x: i,
                y: e + r - o
            }, _._knNO = 6
        }
        return [_, u]
    }

    function ze(t, i, e, n, r, s, o, h, a, l, _) {
        var u = h / 2;
        switch (s = s || 1e-4, o = o || 1e-4, t) {
            case 7:
                var c = [i, e + o, i, e, i + s, e],
                    d = i + s,
                    f = e + o;
                return Be(t, c, d, f, i, e, n, r, s, o, h, a, l, _);
            case 5:
                return c = [i + s, e + r, i, e + r, i, e + r - o], d = i + s, f = e + r - o, Be(t, c, d, f, i, e, n, r, s, o, h, a, l, _);
            case 3:
                return c = [i + n, e + r - o, i + n, e + r, i + n - s, e + r], d = i + n - s, f = e + r - o, Be(t, c, d, f, i, e, n, r, s, o, h, a, l, _);
            case 1:
                return c = [i + n - s, e, i + n, e, i + n, e + o], d = i + n - s, f = e + o, Be(t, c, d, f, i, e, n, r, s, o, h, a, l, _);
            case 0:
                return ke(t, i, e, n, r, s, o, u, a, l, _);
            case 2:
                return Ge(t, i, e, n, r, s, o, u, a, l, _);
            case 4:
                return Fe(t, i, e, n, r, s, o, u, a, l, _);
            case 6:
                return $e(t, i, e, n, r, s, o, u, a, l, _)
        }
    }

    function je(t, i) {
        for (var n, r, s, o, h, a, l = t[0], _ = t[1], u = t[2], c = t[3], d = t[4], f = t[5], g = [], v = 0; v < i.length; v++) h = i[v], a = h.t, 0 != a && 1 != a ? (n = l + (u - l) * a, r = _ + (c - _) * a, s = u + (d - u) * a, o = c + (f - c) * a, g.push([l, _, n, r, h.x, h.y]), l = h.x, _ = h.y, u = s, c = o) : g.push(null);
        return s !== e && g.push([h.x, h.y, s, o, d, f]), g
    }

    function Ye(t) {
        return this.$layoutByAnchorPoint && this._9y && (t.x -= this._9y.x, t.y -= this._9y.y), this.$rotate && Ci(t, this.$rotate), t.x += this.$offsetX || 0, t.y += this.$offsetY || 0, this.$rotatable && this.$_hostRotate ? Ci(t, this.$_hostRotate) : t
    }

    function He(t) {
        return this.$rotatable && this.$_hostRotate && Ci(t, -this.$_hostRotate), t.x -= this.$offsetX || 0, t.y -= this.$offsetY || 0, this.$rotate && Ci(t, -this.$rotate), this.$layoutByAnchorPoint && this._9y && (t.x += this._9y.x, t.y += this._9y.y), t
    }

    function Ue() {
        var t = this.$invalidateSize;
        this.$invalidateSize && (this.$invalidateSize = !1, this.$invalidateAnchorPoint = !0, this._7d.setByRect(this._ij), this.$padding && this._7d.grow(this.$padding), this.$border && this._7d.grow(this.$border));
        var i = this._$o();
        if (i) var e = this.showPointer && this.$pointerWidth;
        return this.$invalidateAnchorPoint && this.$layoutByAnchorPoint && (this.$invalidateAnchorPoint = !1, e && (t = !0), this._9y = ci(this.$anchorPosition, this._7d.width, this._7d.height), this._9y.x += this._7d.x, this._9y.y += this._7d.y), i ? (t && (this._leackgroundGradientInvalidateFlag = !0, We.call(this, e)), this._leackgroundGradientInvalidateFlag && (this._leackgroundGradientInvalidateFlag = !1, this._leackgroundGradient = this.backgroundGradient && this._kbShape && this._kbShape.bounds ? Nh.prototype.generatorGradient.call(this.backgroundGradient, this._kbShape.bounds) : null), t) : (this.__kuPointer = !1, t)
    }

    function We(t) {
        var i = this._7d.x + this.$border / 2,
            e = this._7d.y + this.$border / 2,
            n = this._7d.width - this.$border,
            r = this._7d.height - this.$border,
            s = 0,
            o = 0;
        if (this.$borderRadius && (G(this.$borderRadius) ? s = o = this.$borderRadius : (s = this.$borderRadius.x || 0, o = this.$borderRadius.y || 0), s = Math.min(s, n / 2), o = Math.min(o, r / 2)), t && (this._pointerX = this._9y.x - this.$offsetX + this.$pointerX, this._pointerY = this._9y.y - this.$offsetY + this.$pointerY, !this._7d.intersectsPoint(this._pointerX, this._pointerY))) {
            var h = new Qh(i, e, n, r, s, o, this.$pointerWidth, this._pointerX, this._pointerY);
            return this._kbShape = h._kn, this._kbShape.bounds.set(i, e, n, r), void(this.__kuPointer = !0)
        }
        this._kbShape && this._kbShape.clear(), this._kbShape = Da.getRect(i, e, n, r, s, o, this._kbShape), this._kbShape.bounds.set(i, e, n, r)
    }

    function Xe(t, i, e, n) {
        return n && (t.width < 0 || t.height < 0) ? (t.x = i, t.y = e, void(t.width = t.height = 0)) : (i < t.x ? (t.width += t.x - i, t.x = i) : i > t.x + t.width && (t.width = i - t.x), void(e < t.y ? (t.height += t.y - e, t.y = e) : e > t.y + t.height && (t.height = e - t.y)))
    }

    function Ve(t, i, n) {
        var r, s = t.position,
            o = t.layoutByPath === e ? this.layoutByPath : t.layoutByPath;
        return this.$data instanceof Zh && o ? (r = mh._le1(s, this.$data, this.lineWidth, i, n), r.x *= this._ia, r.y *= this._ic) : (r = ci(s, this._7d.width, this._7d.height), r.x += this._7d.x, r.y += this._7d.y), Ye.call(this, r)
    }

    function qe(t, i) {
        if (i)
            if (i._7d.isEmpty()) t.$x = i.$x, t.$y = i.$y;
            else {
                var e = Ve.call(i, t);
                t.$x = e.x, t.$y = e.y, t._hostRotate = e.rotate
            }
        else t.$x = 0, t.$y = 0;
        t.$invalidateRotate && ea.call(t)
    }

    function Ke(t) {
        if (t.lineDash === e) {
            var i, n;
            if (t.setLineDash) i = t.getLineDash, n = t.setLineDash;
            else {
                var r;
                if (t.mozDash !== e) r = "mozDash";
                else {
                    if (t.webkitLineDash === e) return !1;
                    r = "webkitLineDash"
                }
                n = function (t) {
                    this[r] = t
                }, i = function () {
                    return this[r]
                }
            }
            J(t, "lineDash", {
                get: function () {
                    return i.call(this)
                },
                set: function (t) {
                    n.call(this, t)
                }
            })
        }
        if (t.lineDashOffset === e) {
            var s;
            if (t.mozDashOffset !== e) s = "mozDashOffset";
            else {
                if (t.webkitLineDashOffset === e) return;
                s = "webkitLineDashOffset"
            }
            J(t, "lineDashOffset", {
                get: function () {
                    return this[s]
                },
                set: function (t) {
                    this[s] = t
                }
            })
        }
    }

    function Ze(t, i, e, n, r) {
        var s, o, h, a, l, _, u, c, d = function (t) {
                return function (i) {
                    t(i)
                }
            },
            f = function () {
                o = null, h = null, a = l, l = null, _ = null
            },
            g = function (t) {
                s = t, u || (u = Mi()), u.width = s.width, u.height = s.height, i.width = s.width, i.height = s.height
            },
            v = function (t) {
                E(), f(), o = t.transparencyGiven ? t.transparencyIndex : null, h = 10 * t.delayTime, l = t.disposalMethod
            },
            E = function () {
                if (_) {
                    var t = _.getImageData(0, 0, s.width, s.height),
                        e = {
                            data: t,
                            _pixels: Ie(t.data, s.width, s.height),
                            delay: h
                        };
                    r.call(i, e)
                }
            },
            p = function (t) {
                _ || (_ = u.getContext("2d"));
                var i = t.lctFlag ? t.lct : s.gct,
                    e = _.getImageData(t.leftPos, t.topPos, t.width, t.height);
                t.pixels.forEach(function (t, n) {
                    o !== t ? (e.data[4 * n + 0] = i[t][0], e.data[4 * n + 1] = i[t][1], e.data[4 * n + 2] = i[t][2], e.data[4 * n + 3] = 255) : (2 === a || 3 === a) && (e.data[4 * n + 3] = 0)
                }), _.putImageData(e, t.leftPos, t.topPos)
            },
            y = function () {},
            T = {
                hdr: d(g),
                gce: d(v),
                com: d(y),
                app: {
                    NETSCAPE: d(y)
                },
                img: d(p, !0),
                eof: function () {
                    E(), e.call(i)
                }
            },
            m = new XMLHttpRequest;
        Bs || m.overrideMimeType("text/plain; charset=x-user-defined"), m.onload = function () {
            c = new ha(m.responseText);
            try {
                la(c, T)
            } catch (t) {
                n.call(i, "parse")
            }
        }, m.onerror = function () {
            n.call(i, "xhr")
        }, m.open("GET", t, !0), m.send()
    }

    function Je(t) {
        var i = Mi(!0);
        return Ke(i.g), i.onselectstart = function () {
            return !1
        }, t.appendChild(i), i.className = ca, i
    }

    function f(t, i) {
        function e(t, e) {
            for (var n = t.length, r = e.length, s = n + r, o = new Array(s), h = 0, a = 0, l = 0; s > l;) o[l++] = h === n ? e[a++] : a === r || i(t[h], e[a]) <= 0 ? t[h++] : e[a++];
            return o
        }

        function n(t) {
            var i = t.length,
                r = Math.ceil(i / 2);
            return 1 >= i ? t : e(n(t.slice(0, r)), n(t.slice(r)))
        }
        return n(t)
    }

    function Qe(t) {
        t.width = t.width
    }

    function tn(t) {
        pa || (pa = "imageSmoothingEnabled" in CanvasRenderingContext2D.prototype ? "imageSmoothingEnabled" : "mozImageSmoothingEnabled" in CanvasRenderingContext2D.prototype ? "mozImageSmoothingEnabled" : "msImageSmoothingEnabled" in CanvasRenderingContext2D.prototype ? "msImageSmoothingEnabled" : "webkitImageSmoothingEnabled" in CanvasRenderingContext2D.prototype ? "webkitImageSmoothingEnabled" : "imageSmoothingEnabled"), t[pa] = !1
    }

    function en(t, i, e, n, r) {
        n = K(i + n) - (i = q(i)), r = K(e + r) - (e = q(e)), t.clearRect(i, e, n, r), t.rect(i, e, n, r)
    }

    function q(t) {
        return Math.floor(t)
    }

    function K(t) {
        return Math.ceil(t)
    }

    function nn(t) {
        var i = [];
        return t.forEach(function (t) {
            i.push(-t)
        }), i
    }

    function rn(t) {
        return t %= Oa, 0 > t && (t += Oa), t
    }

    function sn(t, i, e, n, r, s, o, h) {
        var a = ((t * n - i * e) * (r - o) - (t - e) * (r * h - s * o)) / ((t - e) * (s - h) - (i - n) * (r - o)),
            l = ((t * n - i * e) * (s - h) - (i - n) * (r * h - s * o)) / ((t - e) * (s - h) - (i - n) * (r - o));
        if (isNaN(a) || isNaN(l)) return !1;
        if (t >= e) {
            if (!(a >= e && t >= a)) return !1
        } else if (!(a >= t && e >= a)) return !1;
        if (i >= n) {
            if (!(l >= n && i >= l)) return !1
        } else if (!(l >= i && n >= l)) return !1;
        if (r >= o) {
            if (!(a >= o && r >= a)) return !1
        } else if (!(a >= r && o >= a)) return !1;
        if (s >= h) {
            if (!(l >= h && s >= l)) return !1
        } else if (!(l >= s && h >= l)) return !1;
        return !0
    }

    function on(t, i) {
        for (var e = 0, n = t.length; n > e;) {
            for (var r = t[e], s = t[(e + 1) % n], o = 0; 4 > o;) {
                var h = i[o],
                    a = i[(o + 1) % n];
                if (sn(r[0], r[1], s[0], s[1], h[0], h[1], a[0], a[1])) return !0;
                o++
            }
            e++
        }
        return !1
    }

    function hn(t, i, e, n) {
        return [t * n - i * e, t * e + i * n]
    }

    function an(t) {
        return t.parent ? (t = t.parent, t._d4 ? t._d4 : t instanceof Pa && t._gm === !1 ? t : null) : null
    }

    function ln(t, i, e) {
        if (e = e || i.toAgent, e == t) return !1;
        var n = t.getEdgeBundle(e);
        return n || (n = new ql(t, e), t._linkedNodes[e.id] = n), n._hb(i, t)
    }

    function _n(t, i, e) {
        if (e = e || i.toAgent, e == t) return !1;
        var n = t.getEdgeBundle(e);
        return n ? n._ler(i, t) : void 0
    }

    function un(t, i, n) {
        return n === e && (n = i.toAgent), n != t ? (t._7h || (t._7h = new Js), t._7h.add(i) === !1 ? !1 : void t._8m++) : void 0
    }

    function cn(t, i, e) {
        return t._7h && t._7h.remove(i) !== !1 ? (t._8m--, void _n(t, i, e)) : !1
    }

    function dn(t, i) {
        return i.fromAgent != t ? (t._99 || (t._99 = new Js), t._99.add(i) === !1 ? !1 : void t._9w++) : void 0
    }

    function fn(t, i) {
        return t._99 && t._99.remove(i) !== !1 ? (t._9w--, void _n(i.fromAgent, i, t)) : !1
    }

    function gn(t, i) {
        if (i === e && (i = t instanceof xa), i) {
            if (t.isInvalid()) return null;
            var n = gn(t.from, !1);
            if (t.isLooped()) return n;
            for (var r = gn(t.to, !1); null != n && null != r;) {
                if (n == r) return n;
                if (n.isDescendantOf(r)) return r;
                if (r.isDescendantOf(n)) return n;
                n = gn(n, !1), r = gn(r, !1)
            }
            return null
        }
        for (var s = t.parent; null != s;) {
            if (s._gy()) return s;
            s = s.parent
        }
        return null
    }

    function vn(t, i, e) {
        t._gy() && t.hasChildren() && t.children.forEach(function (t) {
            t instanceof Ca && i.add(t) && vn(t, i, e)
        }, this), t.hasFollowers() && t._dt.forEach(function (t) {
            (null == e || e.accept(t)) && i.add(t) && vn(t, i, e)
        })
    }

    function En(t, i) {
        i.parent ? i.parent.setChildIndex(i, i.parent.childrenCount - 1) : t.roots.setIndex(i, t.roots.length - 1)
    }

    function pn(t, i) {
        i.parent ? i.parent.setChildIndex(i, 0) : t.roots.setIndex(i, 0)
    }

    function yn(t, i) {
        if (i instanceof xa) return void(i.isInvalid() || mn(t, i));
        for (En(t, i); i = i.parent;) En(t, i)
    }

    function Tn(t, i) {
        if (i instanceof xa) return void(i.isInvalid() || On(t, i));
        for (pn(t, i); i = i.parent;) pn(t, i)
    }

    function mn(t, i) {
        var e = i.fromAgent;
        if (i.isLooped()) En(t, e);
        else {
            var n = i.toAgent;
            En(t, e), En(t, n)
        }
    }

    function On(t, i) {
        var e = i.fromAgent;
        if (i.isLooped()) pn(t, e);
        else {
            var n = i.toAgent;
            pn(t, e), pn(t, n)
        }
    }

    function wn(t, i) {
        return t._8m++, t._fp ? (i._ht = t._gw, t._gw._hr = i, void(t._gw = i)) : (t._fp = i, void(t._gw = i))
    }

    function An(t, i) {
        t._8m--, t._gw == i && (t._gw = i._ht), i._ht ? i._ht._hr = i._hr : t._fp = i._hr, i._hr && (i._hr._ht = i._ht), i._ht = null, i._hr = null, _n(t, i, i.$to)
    }

    function bn(t, i) {
        return t._9w++, t._h1 ? (i._j1 = t._id, t._id._j2 = i, void(t._id = i)) : (t._h1 = i, void(t._id = i))
    }

    function Ln(t, i) {
        t._9w--, t._id == i && (t._id = i._j1), i._j1 ? i._j1._j2 = i._j2 : t._h1 = i._j2, i._j2 && (i._j2._j1 = i._j1), i._j1 = null, i._j2 = null
    }

    function Sn(t, i) {
        return i = i || new Js, t.forEachEdge(function (t) {
            i.add({
                id: t.id,
                edge: t,
                fromAgent: t.$from._d4,
                toAgent: t.$to._d4
            })
        }), t.forEachChild(function (t) {
            t instanceof Ca && Sn(t, i)
        }), i
    }

    function In(t, i, e) {
        return Cn(t, i, e) === !1 ? !1 : xn(t, i, e)
    }

    function xn(t, i, e) {
        if (t._fp)
            for (var n = t._fp; n;) {
                if (i.call(e, n) === !1) return !1;
                n = n._hr
            }
    }

    function Cn(t, i, e) {
        if (t._h1)
            for (var n = t._h1; n;) {
                if (i.call(e, n) === !1) return !1;
                n = n._j2
            }
    }

    function Rn(t, i, n, r, s, o, h) {
        return o || h ? (o = o || 0, h = h === e ? o : h || 0, o = Math.min(o, r / 2), h = Math.min(h, s / 2), t.moveTo(i + o, n), t.lineTo(i + r - o, n), t.quadTo(i + r, n, i + r, n + h), t.lineTo(i + r, n + s - h), t.quadTo(i + r, n + s, i + r - o, n + s), t.lineTo(i + o, n + s), t.quadTo(i, n + s, i, n + s - h), t.lineTo(i, n + h), t.quadTo(i, n, i + o, n), t.closePath(), t) : (t.moveTo(i, n), t.lineTo(i + r, n), t.lineTo(i + r, n + s), t.lineTo(i, n + s), t.closePath(), t)
    }

    function Dn(t, i) {
        var e = i.r || 1,
            n = i.cx || 0,
            r = i.cy || 0,
            s = e * Math.tan(Math.PI / 8),
            o = e * Math.sin(Math.PI / 4);
        t.moveTo(n + e, r), t.quadTo(n + e, r + s, n + o, r + o), t.quadTo(n + s, r + e, n, r + e), t.quadTo(n - s, r + e, n - o, r + o), t.quadTo(n - e, r + s, n - e, r), t.quadTo(n - e, r - s, n - o, r - o), t.quadTo(n - s, r - e, n, r - e), t.quadTo(n + s, r - e, n + o, r - o), t.quadTo(n + e, r - s, n + e, r)
    }

    function Pn(t, i, e, n, r) {
        i instanceof re && (n = i.width, r = i.height, e = i.cy - r / 2, i = i.cx - n / 2);
        var s = .5522848,
            o = n / 2 * s,
            h = r / 2 * s,
            a = i + n,
            l = e + r,
            _ = i + n / 2,
            u = e + r / 2;
        return t.moveTo(i, u), t.curveTo(i, u - h, _ - o, e, _, e), t.curveTo(_ + o, e, a, u - h, a, u), t.curveTo(a, u + h, _ + o, l, _, l), t.curveTo(_ - o, l, i, u + h, i, u), t
    }

    function Nn(t, i, e, n, r) {
        var s = 2 * n,
            o = 2 * r,
            h = i + n / 2,
            a = e + r / 2;
        return t.moveTo(h - s / 4, a - o / 12), t.lineTo(i + .306 * n, e + .579 * r), t.lineTo(h - s / 6, a + o / 4), t.lineTo(i + n / 2, e + .733 * r), t.lineTo(h + s / 6, a + o / 4), t.lineTo(i + .693 * n, e + .579 * r), t.lineTo(h + s / 4, a - o / 12), t.lineTo(i + .611 * n, e + .332 * r), t.lineTo(h + 0, a - o / 4), t.lineTo(i + .388 * n, e + .332 * r), t.closePath(), t
    }

    function Mn(t, i, e, n, r) {
        return t.moveTo(i, e), t.lineTo(i + n, e + r / 2), t.lineTo(i, e + r), t.closePath(), t
    }

    function Bn(t, i, e, n, r) {
        return t.moveTo(i, e + r / 2), t.lineTo(i + n / 2, e), t.lineTo(i + n, e + r / 2), t.lineTo(i + n / 2, e + r), t.closePath(), t
    }

    function kn(t, i, e, n, r, s) {
        return t.moveTo(i, e), t.lineTo(i + n, e + r / 2), t.lineTo(i, e + r), s || (t.lineTo(i + .25 * n, e + r / 2), t.closePath()), t
    }

    function Gn(t, i, e, n, r) {
        if (!t || 3 > t) throw new Error("edge number must greater than 2");
        t = 0 | t, n = n || 50, r = r || 0, i = i || 0, e = e || 0;
        for (var s, o, h = 0, a = 2 * Math.PI / t, l = new Zh; t > h;) s = i + n * Math.cos(r), o = e + n * Math.sin(r), h ? l.lineTo(s, o) : l.moveTo(s, o), ++h, r += a;
        return l.closePath(), l
    }

    function Fn() {
        var t = new Zh;
        return t.moveTo(75, 40), t.curveTo(75, 37, 70, 25, 50, 25), t.curveTo(20, 25, 20, 62.5, 20, 62.5), t.curveTo(20, 80, 40, 102, 75, 120), t.curveTo(110, 102, 130, 80, 130, 62.5), t.curveTo(130, 62.5, 130, 25, 100, 25), t.curveTo(85, 25, 75, 37, 75, 40), t
    }

    function $n() {
        var t = new Zh;
        return t.moveTo(20, 0), t.lineTo(80, 0), t.lineTo(100, 100), t.lineTo(0, 100), t.closePath(), t
    }

    function zn() {
        var t = new Zh;
        return t.moveTo(100, 0), t.lineTo(100, 80), t.lineTo(0, 100), t.lineTo(0, 20), t.closePath(), t
    }

    function jn() {
        var t = new Zh;
        return t.moveTo(20, 0), t.lineTo(100, 0), t.lineTo(80, 100), t.lineTo(0, 100), t.closePath(), t
    }

    function Yn() {
        var t = new Zh;
        return t.moveTo(43, 23), t.lineTo(28, 10), t.lineTo(37, 2), t.lineTo(63, 31), t.lineTo(37, 59), t.lineTo(28, 52), t.lineTo(44, 38), t.lineTo(3, 38), t.lineTo(3, 23), t.closePath(), t
    }

    function Hn() {
        var t = new Zh;
        return t.moveTo(1, 8), t.lineTo(7, 2), t.lineTo(32, 26), t.lineTo(7, 50), t.lineTo(1, 44), t.lineTo(18, 26), t.closePath(), t.moveTo(27, 8), t.lineTo(33, 2), t.lineTo(57, 26), t.lineTo(33, 50), t.lineTo(27, 44), t.lineTo(44, 26), t.closePath(), t
    }

    function Un() {
        var t = new Zh;
        return t.moveTo(0, 15), t.lineTo(23, 15), t.lineTo(23, 1), t.lineTo(47, 23), t.lineTo(23, 43), t.lineTo(23, 29), t.lineTo(0, 29), t.closePath(), t
    }

    function Wn() {
        var t = new Zh;
        return t.moveTo(0, 21), t.lineTo(30, 21), t.lineTo(19, 0), t.lineTo(25, 0), t.lineTo(47, 25), t.lineTo(25, 48), t.lineTo(19, 48), t.lineTo(30, 28), t.lineTo(0, 28), t.closePath(), t
    }

    function Xn() {
        var t = new Zh;
        return t.moveTo(0, 0), t.lineTo(34, 24), t.lineTo(0, 48), t.lineTo(14, 24), t.closePath(), t
    }

    function Vn() {
        var t = new Zh;
        return t.moveTo(20, 0), t.lineTo(34, 14), t.lineTo(20, 28), t.lineTo(22, 18), t.lineTo(1, 25), t.lineTo(10, 14), t.lineTo(1, 3), t.lineTo(22, 10), t.closePath(), t
    }

    function qn() {
        var t = new Zh;
        return t.moveTo(4, 18), t.lineTo(45, 18), t.lineTo(37, 4), t.lineTo(83, 25), t.lineTo(37, 46), t.lineTo(45, 32), t.lineTo(4, 32), t.closePath(), t
    }

    function Kn() {
        var t = new Zh;
        return t.moveTo(17, 11), t.lineTo(27, 11), t.lineTo(42, 27), t.lineTo(27, 42), t.lineTo(17, 42), t.lineTo(28, 30), t.lineTo(4, 30), t.lineTo(4, 23), t.lineTo(28, 23), t.closePath(), t
    }

    function Zn() {
        Da.register(fh.SHAPE_CIRCLE, Pn(new Zh, 0, 0, 100, 100)), Da.register(fh.SHAPE_RECT, Rn(new Zh, 0, 0, 100, 100)), Da.register(fh.SHAPE_ROUNDRECT, Rn(new Zh, 0, 0, 100, 100, 20, 20)), Da.register(fh.SHAPE_STAR, Nn(new Zh, 0, 0, 100, 100)), Da.register(fh.SHAPE_TRIANGLE, Mn(new Zh, 0, 0, 100, 100)), Da.register(fh.SHAPE_PENTAGON, Gn(5)), Da.register(fh.SHAPE_HEXAGON, Gn(6)), Da.register(fh.SHAPE_DIAMOND, Bn(new Zh, 0, 0, 100, 100)), Da.register(fh.SHAPE_HEART, Fn()), Da.register(fh.SHAPE_TRAPEZIUM, $n()), Da.register(fh.SHAPE_RHOMBUS, zn()), Da.register(fh.SHAPE_PARALLELOGRAM, jn());
        var t = new Zh;
        t.moveTo(20, 0), t.lineTo(40, 0), t.lineTo(40, 20), t.lineTo(60, 20), t.lineTo(60, 40), t.lineTo(40, 40), t.lineTo(40, 60), t.lineTo(20, 60), t.lineTo(20, 40), t.lineTo(0, 40), t.lineTo(0, 20), t.lineTo(20, 20), t.closePath(), Da.register(fh.SHAPE_CROSS, t), Da.register(fh.SHAPE_ARROW_STANDARD, kn(new Zh, 0, 0, 100, 100)), Da.register(fh.SHAPE_ARROW_1, Yn()), Da.register(fh.SHAPE_ARROW_2, Hn()), Da.register(fh.SHAPE_ARROW_3, Un()), Da.register(fh.SHAPE_ARROW_4, Wn()), Da.register(fh.SHAPE_ARROW_5, Xn()), Da.register(fh.SHAPE_ARROW_6, Vn()), Da.register(fh.SHAPE_ARROW_7, qn()), Da.register(fh.SHAPE_ARROW_8, Kn()), Da.register(fh.SHAPE_ARROW_OPEN, kn(new Zh, 0, 0, 100, 100, !0))
    }

    function Jn() {
        b(this, Jn, arguments), this.busLayout = !0
    }

    function Qn() {
        b(this, Qn), this._$r = new Ao
    }

    function tr() {
        if (this._gm === !0) {
            var t = this._7h,
                i = this._99;
            if (t)
                for (t = t._ig; t.length;) {
                    var e = t[0];
                    cn(this, e, e.toAgent)
                }
            if (i)
                for (i = i._ig; i.length;) {
                    var e = i[0];
                    fn(this, e, e.fromAgent)
                }
            return void this.forEachChild(function (t) {
                t._gy() && tr.call(t)
            })
        }
        var n = Sn(this);
        n.forEach(function (t) {
            t = t.edge;
            var i = t.$from,
                e = t.$to,
                n = i.isDescendantOf(this),
                r = e.isDescendantOf(this);
            n && !r ? (un(this, t), ln(this, t)) : r && !n && (dn(this, t), ln(t.fromAgent, t, this))
        }, this)
    }

    function ir() {
        b(this, ir, arguments), this.$image = null
    }

    function er(t, i, e, n) {
        return t[i] = e, n ? {
            get: function () {
                return this[i]
            },
            set: function (t) {
                if (t !== this[i]) {
                    this[i] = t, !this._lg0, this._1c = !0;
                    for (var e = n.length; --e >= 0;) this[n[e]] = !0
                }
            }
        } : {
            get: function () {
                return this[i]
            },
            set: function (t) {
                t !== this[i] && (this[i] = t)
            }
        }
    }

    function nr(t, i) {
        var e = {},
            n = {};
        for (var r in i) {
            var s = i[r];
            s.validateFlags && s.validateFlags.forEach(function (t, i, e) {
                e[i] = "$invalidate" + t, n[t] = !0
            }), e[r] = er(t, "$" + r, s.value, s.validateFlags)
        }
        for (var o in n) t["$invalidate" + o] = !0;
        Object.defineProperties(t, e)
    }

    function rr(t, i, e, n) {
        if (Array.isArray(i))
            for (var r = i.length; --r >= 0;) rr(t, i[r], e, n);
        else {
            var s = i.target;
            if (s) {
                if (s instanceof Na || (s = t[s]), !s) return
            } else s = t;
            if (n || (n = t.getProperty(i.property, e)), i.bindingProperty && (s[i.bindingProperty] = n), i.callback) {
                var o = i.callback;
                o instanceof Function || (o = t[o]), o instanceof Function && o.call(t, n, s)
            }
        }
    }

    function sr() {
        Ma.forEach(function (t) {
            this[t] = {}
        }, this)
    }

    function or(t, i, e, n) {
        return n == fh.PROPERTY_TYPE_ACCESSOR ? void(t[e] = i) : n == fh.PROPERTY_TYPE_CLIENT ? void t.set(e, i) : n == fh.PROPERTY_TYPE_STYLE ? void t.setStyle(e, i) : !1
    }

    function hr() {
        b(this, hr, arguments)
    }

    function ar() {
        b(this, ar, arguments)
    }

    function lr(t, i, e, n) {
        var r = _r(t, i, e, n),
            s = [];
        if (fr(t)) ur(r, i, e, s, n.getStyle(Ba.EDGE_EXTEND));
        else {
            Ar(t, i, e, s, r, n);
            var o = cr(t, n),
                h = o ? yr(t, r, i, e, n.getStyle(Ba.EDGE_SPLIT_PERCENT)) : n.getStyle(Ba.EDGE_SPLIT_VALUE);
            0 == h && (r = !r)
        }
        return s
    }

    function _r(t, i, e) {
        if (null != t) {
            if (t == fh.EDGE_TYPE_ELBOW_HORIZONTAL || t == fh.EDGE_TYPE_ORTHOGONAL_HORIZONTAL || t == fh.EDGE_TYPE_HORIZONTAL_VERTICAL || t == fh.EDGE_TYPE_EXTEND_LEFT || t == fh.EDGE_TYPE_EXTEND_RIGHT) return !0;
            if (t == fh.EDGE_TYPE_ELBOW_VERTICAL || t == fh.EDGE_TYPE_ORTHOGONAL_VERTICAL || t == fh.EDGE_TYPE_VERTICAL_HORIZONTAL || t == fh.EDGE_TYPE_EXTEND_TOP || t == fh.EDGE_TYPE_EXTEND_BOTTOM) return !1
        }
        var n = Er(i, e),
            r = pr(i, e);
        return n >= r
    }

    function ur(t, i, e, n, r) {
        t ? xr(i, e, n, r) : Cr(i, e, n, r)
    }

    function cr(t, i) {
        return i.getStyle(Ba.EDGE_SPLIT_BY_PERCENT)
    }

    function dr(t) {
        return null != t && (t == fh.EDGE_TYPE_EXTEND_TOP || t == fh.EDGE_TYPE_EXTEND_LEFT || t == fh.EDGE_TYPE_EXTEND_BOTTOM || t == fh.EDGE_TYPE_EXTEND_RIGHT)
    }

    function fr(t) {
        return t && (t == fh.EDGE_TYPE_ELBOW || t == fh.EDGE_TYPE_ELBOW_HORIZONTAL || t == fh.EDGE_TYPE_ELBOW_VERTICAL)
    }

    function gr(t, i, e, n, r) {
        if (t == fh.EDGE_TYPE_HORIZONTAL_VERTICAL || t == fh.EDGE_TYPE_VERTICAL_HORIZONTAL) return new io(n.x + n.width / 2, n.y + n.height / 2);
        var s;
        if (dr(t)) {
            var o = Math.min(e.y, n.y),
                h = Math.min(e.x, n.x),
                a = Math.max(e.bottom, n.bottom),
                l = Math.max(e.right, n.right);
            if (s = r.getStyle(Ba.EDGE_EXTEND), t == fh.EDGE_TYPE_EXTEND_TOP) return new io((h + l) / 2, o - s);
            if (t == fh.EDGE_TYPE_EXTEND_LEFT) return new io(h - s, (o + a) / 2);
            if (t == fh.EDGE_TYPE_EXTEND_BOTTOM) return new io((h + l) / 2, a + s);
            if (t == fh.EDGE_TYPE_EXTEND_RIGHT) return new io(l + s, (o + a) / 2)
        }
        var _ = cr(t, r);
        if (s = _ ? yr(t, i, e, n, r.getStyle(Ba.EDGE_SPLIT_PERCENT)) : r.getStyle(Ba.EDGE_SPLIT_VALUE), s == Number.NEGATIVE_INFINITY || s == Number.POSITIVE_INFINITY) return new io(n.x + n.width / 2, n.y + n.height / 2);
        if (0 == s) return new io(e.x + e.width / 2, e.y + e.height / 2);
        if (i) {
            var u = e.x + e.right < n.x + n.right;
            return new io(Or(u, s, e.x, e.width), e.y + e.height / 2)
        }
        var c = e.y + e.bottom < n.y + n.bottom;
        return new io(e.x + e.width / 2, Or(c, s, e.y, e.height))
    }

    function vr(t, i, e, n) {
        var r = Math.max(i, n) - Math.min(t, e);
        return r - (i - t + n - e)
    }

    function Er(t, i) {
        var e = Math.max(t.x + t.width, i.x + i.width) - Math.min(t.x, i.x);
        return e - t.width - i.width
    }

    function pr(t, i) {
        var e = Math.max(t.y + t.height, i.y + i.height) - Math.min(t.y, i.y);
        return e - t.height - i.height
    }

    function yr(t, i, e, n, r) {
        var s = Tr(r, i, e, n, null);
        return s * r
    }

    function Tr(t, i, e, n) {
        return i ? mr(t, e.x, e.right, n.x, n.right) : mr(t, e.y, e.bottom, n.y, n.bottom)
    }

    function mr(t, i, e, n, r) {
        var s = vr(i, e, n, r),
            o = n + r > i + e;
        if (s > 0) {
            if (1 == t) return s + (r - n) / 2;
            if (t >= 0 && 1 > t) return s;
            if (0 > t) return o ? n - i : e - r
        }
        return Math.abs(o && t > 0 || !o && 0 > t ? e - r : i - n)
    }

    function Or(t, i, e, n) {
        return t == i > 0 ? e + n + Math.abs(i) : e - Math.abs(i)
    }

    function wr(t, i) {
        var e = t.length;
        if (!(3 > e)) {
            var n = i.getStyle(Ba.EDGE_CORNER);
            if (n != fh.EDGE_CORNER_NONE) {
                var r = i.getStyle(Ba.EDGE_CORNER_RADIUS),
                    s = 0,
                    o = 0;
                r && (G(r) ? s = o = r : (s = r.x || 0, o = r.y || 0));
                for (var h, a, l, _, u = t[0], c = t[1], d = null, f = 2; e > f; f++) {
                    var g = t[f],
                        v = c.x - u.x,
                        E = c.y - u.y,
                        p = g.x - c.x,
                        m = g.y - c.y,
                        O = !v || v > -Th && Th > v,
                        w = !E || E > -Th && Th > E,
                        A = !p || p > -Th && Th > p,
                        b = !m || m > -Th && Th > m,
                        L = w;
                    (O && b || w && A) && (L ? (h = Math.min(2 == f ? Math.abs(v) : Math.abs(v) / 2, s), a = Math.min(f == e - 1 ? Math.abs(m) : Math.abs(m) / 2, o), l = new io(c.x - (v > 0 ? h : -h), c.y), _ = new io(c.x, c.y + (m > 0 ? a : -a))) : (h = Math.min(f == e - 1 ? Math.abs(p) : Math.abs(p) / 2, s), a = Math.min(2 == f ? Math.abs(E) : Math.abs(E) / 2, o), l = new io(c.x, c.y - (E > 0 ? a : -a)), _ = new io(c.x + (p > 0 ? h : -h), c.y)), T(t, c), f--, e--, (l.x != u.x || l.y != u.y) && (y(t, l, f), f++, e++), n == fh.EDGE_CORNER_BEVEL ? (y(t, _, f), f++, e++) : n == fh.EDGE_CORNER_ROUND && (y(t, [c, _], f), f++, e++)), u = c, c = g
                }
                null != d && _.x == c.x && _.y == c.y && T(t, c)
            }
        }
    }

    function Ar(t, i, e, n, r, s) {
        var o = s.getStyle(Ba.EDGE_CONTROL_POINT),
            h = null == o;
        if (null != o) {
            var a = (new so).union(i).union(e);
            a.intersects(o) || (r = br(o.x, o.y, a.y, a.x, a.bottom, a.right))
        } else o = gr(t, r, i, e, s);
        r ? Ir(i, e, o, n, h) : Sr(i, e, o, n, h)
    }

    function br(t, i, e, n, r, s) {
        return e > i && e - i > n - t && e - i > t - s || i > r && i - r > n - t && i - r > t - s ? !1 : !0
    }

    function Lr(t, i, e) {
        return i >= t.x && i <= t.right && e >= t.y && e <= t.bottom
    }

    function Sr(t, i, e, n, r) {
        var s = Math.max(t.y, i.y),
            o = Math.min(t.y + t.height, i.y + i.height),
            h = null != e ? e.y : o + (s - o) / 2,
            a = t.x + t.width / 2,
            l = i.x + i.width / 2;
        if (0 == r && null != e && (e.x >= t.x && e.x <= t.x + t.width && (a = e.x), e.x >= i.x && e.x <= i.x + i.width && (l = e.x)), Lr(i, a, h) || Lr(t, a, h) || n.push(new io(a, h)), Lr(i, l, h) || Lr(t, l, h) || n.push(new io(l, h)), 0 == n.length)
            if (null != e) Lr(i, e.x, h) || Lr(t, e.x, h) || n.push(new io(e.x, h));
            else {
                var _ = Math.max(t.x, i.x),
                    u = Math.min(t.x + t.width, i.x + i.width);
                n.push(new io(_ + (u - _) / 2, h))
            }
    }

    function Ir(t, i, e, n, r) {
        var s = Math.max(t.x, i.x),
            o = Math.min(t.x + t.width, i.x + i.width),
            h = null != e ? e.x : o + (s - o) / 2,
            a = t.y + t.height / 2,
            l = i.y + i.height / 2;
        if (0 == r && null != e && (e.y >= t.y && e.y <= t.y + t.height && (a = e.y), e.y >= i.y && e.y <= i.y + i.height && (l = e.y)), Lr(i, h, a) || Lr(t, h, a) || n.push(new io(h, a)), Lr(i, h, l) || Lr(t, h, l) || n.push(new io(h, l)), 0 == n.length)
            if (null != e) Lr(i, h, e.y) || Lr(t, h, e.y) || n.push(new io(h, e.y));
            else {
                var _ = Math.max(t.y, i.y),
                    u = Math.min(t.y + t.height, i.y + i.height);
                n.push(new io(h, _ + (u - _) / 2))
            }
    }

    function xr(t, i, e, n) {
        var r = i.x + i.width < t.x,
            s = t.x + t.width < i.x,
            o = r ? t.x : t.x + t.width,
            h = t.y + t.height / 2,
            a = s ? i.x : i.x + i.width,
            l = i.y + i.height / 2,
            _ = n,
            u = r ? -_ : _,
            c = new io(o + u, h);
        u = s ? -_ : _;
        var d = new io(a + u, l);
        if (r == s) {
            var f = r ? Math.min(o, a) - n : Math.max(o, a) + n;
            e.push(new io(f, h)), e.push(new io(f, l))
        } else if (c.x < d.x == r) {
            var g = h + (l - h) / 2;
            e.push(c), e.push(new io(c.x, g)), e.push(new io(d.x, g)), e.push(d)
        } else e.push(c), e.push(d)
    }

    function Cr(t, i, e, n) {
        var r = i.y + i.height < t.y,
            s = t.y + t.height < i.y,
            o = t.x + t.width / 2,
            h = r ? t.y : t.y + t.height,
            a = i.x + i.width / 2,
            l = s ? i.y : i.y + i.height,
            _ = n,
            u = r ? -_ : _,
            c = new io(o, h + u);
        u = s ? -_ : _;
        var d = new io(a, l + u);
        if (r == s) {
            var f = r ? Math.min(h, l) - n : Math.max(h, l) + n;
            e.push(new io(o, f)), e.push(new io(a, f))
        } else if (c.y < d.y == r) {
            var g = o + (a - o) / 2;
            e.push(c), e.push(new io(g, c.y)), e.push(new io(g, d.y)), e.push(d)
        } else e.push(c), e.push(d)
    }

    function Rr(t) {
        return t == fh.EDGE_TYPE_ORTHOGONAL || t == fh.EDGE_TYPE_ORTHOGONAL_HORIZONTAL || t == fh.EDGE_TYPE_HORIZONTAL_VERTICAL || t == fh.EDGE_TYPE_ORTHOGONAL_VERTICAL || t == fh.EDGE_TYPE_VERTICAL_HORIZONTAL || t == fh.EDGE_TYPE_EXTEND_TOP || t == fh.EDGE_TYPE_EXTEND_LEFT || t == fh.EDGE_TYPE_EXTEND_BOTTOM || t == fh.EDGE_TYPE_EXTEND_RIGHT || t == fh.EDGE_TYPE_ELBOW || t == fh.EDGE_TYPE_ELBOW_HORIZONTAL || t == fh.EDGE_TYPE_ELBOW_VERTICAL
    }

    function Dr(t, i) {
        var e, n;
        i && i.width && i.height ? (e = i.width, n = i.height) : e = n = isNaN(i) ? Zs.ARROW_SIZE : i;
        var r = Da.getShape(t, -e, -n / 2, e, n);
        return r || (r = new Zh, r.moveTo(-e, -n / 2), r.lineTo(0, 0), r.lineTo(-e, n / 2)), r
    }

    function Pr(t, i) {
        var e = Math.sin(i),
            n = Math.cos(i),
            r = t.x,
            s = t.y;
        return t.x = r * n - s * e, t.y = r * e + s * n, t
    }

    function Nr(t, i, e, n, r, s) {
        var o = Math.atan2(n - i, e - t),
            h = new io(r, s);
        return h.rotate = o, Pr(h, o), h.x += t, h.y += i, h
    }

    function Mr(t, i, n, r, s) {
        i = oi(r, i.x, i.y, n.x, n.y), n = oi(s, n.x, n.y, i.x, i.y);
        var o = Math.PI / 2 + Math.atan2(n.y - i.y, n.x - i.x),
            h = t * Math.cos(o),
            a = t * Math.sin(o),
            l = n.x - i.x,
            _ = n.y - i.y,
            u = i.x + .25 * l,
            c = i.y + .25 * _,
            d = i.x + .75 * l,
            f = i.y + .75 * _;
        return [new qh(Wh, [u + h, c + a, d + h, f + a, e, e])]
    }

    function Br(t, i, n) {
        if (y(t, new qh(Yh, [i.x, i.y]), 0), n) {
            if (t.length > 1) {
                var r = t[t.length - 1];
                if (Uh == r.type && (r.invalidTerminal || r.points[2] === e || null === r.points[2])) return r.points[2] = n.x, r.points[3] = n.y, void(r.invalidTerminal = !0);
                if (Wh == r.type && (r.invalidTerminal || r.points[4] === e || null === r.points[4])) return r.points[4] = n.x, r.points[5] = n.y, void(r.invalidTerminal = !0)
            }
            t.push(new qh(Hh, [n.x, n.y]))
        }
    }

    function kr(t, i, e, n, r) {
        var s = n == r,
            o = t.graph.getUI(n),
            h = s ? o : t.graph.getUI(r);
        if (o && h) {
            var a = i.edgeType,
                l = t.getEndPointBounds(o),
                _ = s ? l : t.getEndPointBounds(h),
                u = t.getStyle(Ba.EDGE_FROM_OFFSET),
                c = t.getStyle(Ba.EDGE_TO_OFFSET);
            u && (l.x += u.x || 0, l.y += u.y || 0), c && (_.x += c.x || 0, _.y += c.y || 0);
            var d = i.hasPathSegments();
            if (!s && !a && !d) {
                var f = n.busLayout,
                    g = r.busLayout;
                if (f != g) {
                    var v, E, p, y, T = i.angle;
                    f ? (v = o, E = l, p = h, y = _) : (v = h, E = _, p = o, y = l);
                    var m = Yr(E, v, f, p, y, T);
                    if (m && 2 == m.length) {
                        var O = m[0],
                            w = m[1];
                        return e.moveTo(O.x, O.y), w.x == O.x && w.y == O.y && (w.y += .01), e.lineTo(w.x, w.y), void(e._5z = !0)
                    }
                }
            }
            t._3l(i, e, o, h, a, l, _), (!s || d) && Gr(t, i, e, o, h, a, l, _), e._5z = !0
        }
    }

    function Gr(t, i, n, r, s, o, h, a) {
        var l = h.center,
            _ = a.center,
            u = t.fromAtEdge,
            c = t.toAtEdge;
        if (!u && !c) return void Br(n._ep, l, _);
        var d = n._ep;
        if (d.length) {
            if (u) {
                var f = d[0],
                    g = f.firstPoint;
                Fr(r, h, g, l, e, e)
            }
            if (c) {
                var v, E = d[d.length - 1],
                    p = E.lastPoint,
                    y = E.points.length,
                    T = p.x === e || p.y === e;
                y >= 4 && (T || a.contains(p.x, p.y)) && (T || (_ = p), v = !0, p = {
                    x: E.points[y - 4],
                    y: E.points[y - 3]
                }, a.contains(p.x, p.y) && (_ = p, y >= 6 ? (p = {
                    x: E.points[y - 6],
                    y: E.points[y - 5]
                }, E.points = E.points.slice(0, 4), E.type = Uh) : 1 == d.length ? (p = {
                    x: l.x,
                    y: l.y
                }, E.points = E.points.slice(0, 2), E.type = Hh) : (E = d[d.length - 2], p = E.lastPoint))), Fr(s, a, p, _, e, e), v && (y = E.points.length, E.points[y - 2] = _.x, E.points[y - 1] = _.y, _ = null)
            }
        } else {
            var m = Math.atan2(_.y - l.y, _.x - l.x),
                O = Math.cos(m),
                w = Math.sin(m);
            u && Fr(r, h, _, l, O, w), c && Fr(s, a, l, _, -O, -w)
        }
        Br(n._ep, l, _)
    }

    function Fr(t, i, n, r, s, o) {
        if (s === e) {
            var h = Math.atan2(n.y - r.y, n.x - r.x);
            s = Math.cos(h), o = Math.sin(h)
        }
        for (n = {
                x: n.x,
                y: n.y
            }, i.contains(n.x, n.y) || (n = oi(i, r.x, r.y, n.x, n.y));;) {
            if (!i.contains(n.x, n.y)) return r;
            if (t.hitTest(n.x - s, n.y - o, Zs.LOOKING_EDGE_ENDPOINT_TOLERANCE)) {
                r.x = n.x - s / 2, r.y = n.y - o / 2;
                break
            }
            n.x -= s, n.y -= o
        }
        return r
    }

    function $r(t, i, e, n, r, s, o, h) {
        if (i.hasPathSegments()) return i._9c;
        var a = i.edgeType;
        if (Rr(a)) {
            var l = lr(a, e, n, t, r, s);
            if (!l || !l.length) return null;
            y(l, o, 0), l.push(h), a != fh.EDGE_TYPE_ELBOW && wr(l, t);
            for (var _ = [], u = l.length, c = 1; u - 1 > c; c++) {
                var d = l[c];
                _.push(z(d) ? new qh(Uh, [d[0].x, d[0].y, d[1].x, d[1].y]) : new qh(Hh, [d.x, d.y]))
            }
            return _
        }
        if (i.$bundleEnabled) {
            var f = t._25();
            if (!f) return;
            return Mr(f, o, h, e, n)
        }
    }

    function zr(t, i, e) {
        var n = t.getStyle(Ba.EDGE_LOOPED_EXTAND),
            r = t._25(),
            s = n + .2 * r,
            o = i.x + i.width - s,
            h = i.y,
            a = i.x + i.width,
            l = i.y + s;
        n += r;
        var _ = .707,
            u = -.707,
            c = i.x + i.width,
            d = i.y,
            f = c + _ * n,
            g = d + u * n,
            v = {
                x: o,
                y: h
            },
            E = {
                x: f,
                y: g
            },
            p = {
                x: a,
                y: l
            },
            y = v.x,
            T = E.x,
            m = p.x,
            O = v.y,
            w = E.y,
            A = p.y,
            b = ((A - O) * (w * w - O * O + T * T - y * y) + (w - O) * (O * O - A * A + y * y - m * m)) / (2 * (T - y) * (A - O) - 2 * (m - y) * (w - O)),
            L = ((m - y) * (T * T - y * y + w * w - O * O) + (T - y) * (y * y - m * m + O * O - A * A)) / (2 * (w - O) * (m - y) - 2 * (A - O) * (T - y)),
            s = Math.sqrt((y - b) * (y - b) + (O - L) * (O - L)),
            S = Math.atan2(v.y - L, v.x - b),
            I = Math.atan2(p.y - L, p.x - b),
            x = I - S;
        return 0 > x && (x += 2 * Math.PI), jr(b, L, S, x, s, s, !0, e)
    }

    function jr(t, i, e, n, r, s, o, h) {
        var a, l, _, u, c, d, f, g, v, E, p;
        if (Math.abs(n) > 2 * Math.PI && (n = 2 * Math.PI), c = Math.ceil(Math.abs(n) / (Math.PI / 4)), a = n / c, l = a, _ = e, c > 0) {
            d = t + Math.cos(_) * r, f = i + Math.sin(_) * s, moveTo ? h.moveTo(d, f) : h.lineTo(d, f);
            for (var y = 0; c > y; y++) _ += l, u = _ - l / 2, g = t + Math.cos(_) * r, v = i + Math.sin(_) * s, E = t + Math.cos(u) * (r / Math.cos(l / 2)), p = i + Math.sin(u) * (s / Math.cos(l / 2)), h.quadTo(E, p, g, v)
        }
    }

    function Yr(t, i, n, r, s, o) {
        var h = s.cx,
            a = s.cy,
            l = h < t.x,
            _ = h > t.right,
            u = a < t.y,
            c = a > t.bottom,
            d = t.cx,
            f = t.cy,
            g = l || _,
            v = u || c,
            E = o === e || null === o;
        E && (o = Math.atan2(a - f, h - d), g || v || (o += Math.PI));
        var p = Math.cos(o),
            y = Math.sin(o),
            T = Ur(i, t, {
                x: h,
                y: a
            }, -p, -y);
        T || (o = Math.atan2(a - f, h - d), g || v || (o += Math.PI), p = Math.cos(o), y = Math.sin(o), T = Ur(i, t, {
            x: h,
            y: a
        }, -p, -y) || {
            x: d,
            y: f
        });
        var m = Ur(r, s, {
            x: T.x,
            y: T.y
        }, -T.perX || p, -T.perY || y, !1) || {
            x: h,
            y: a
        };
        return n ? [T, m] : [m, T]
    }

    function Hr(t, i, e, n, r, s) {
        var o = i < t.x,
            h = i > t.right,
            a = e < t.y,
            l = e > t.bottom;
        if (o && n > 0) {
            var _ = t.x - i,
                u = e + _ * r / n;
            if (u >= t.y && u <= t.bottom) return {
                x: t.x,
                y: u,
                perX: n,
                perY: r
            }
        }
        if (h && 0 > n) {
            var _ = t.right - i,
                u = e + _ * r / n;
            if (u >= t.y && u <= t.bottom) return {
                x: t.right,
                y: u,
                perX: n,
                perY: r
            }
        }
        if (a && r > 0) {
            var c = t.y - e,
                d = i + c * n / r;
            if (d >= t.x && d <= t.right) return {
                x: d,
                y: t.y,
                perX: n,
                perY: r
            }
        }
        if (l && 0 > r) {
            var c = t.bottom - e,
                d = i + c * n / r;
            if (d >= t.x && d <= t.right) return {
                x: d,
                y: t.bottom,
                perX: n,
                perY: r
            }
        }
        return s !== !1 ? Hr(t, i, e, -n, -r, !1) : void 0
    }

    function Ur(t, i, e, n, r, s) {
        if (!i.contains(e.x, e.y)) {
            if (e = Hr(i, e.x, e.y, n, r, s), !e) return;
            return Wr(t, i, e, e.perX, e.perY)
        }
        return s === !1 ? Wr(t, i, e, n, r) : Wr(t, i, {
            x: e.x,
            y: e.y,
            perX: n,
            perY: r
        }, n, r) || Wr(t, i, e, -n, -r)
    }

    function Wr(t, i, e, n, r) {
        for (;;) {
            if (!i.contains(e.x, e.y)) return;
            if (t.hitTest(e.x + n, e.y + r)) break;
            e.x += n, e.y += r
        }
        return e
    }

    function Xr(t) {
        return Oe(t) ? t : t.match(/.(gif|jpg|jpeg|png)$/gi) || /^data:image\/(\w+\+?\w+);base64,/i.test(t) ? t : (t = ti(t), t instanceof Object && t.draw ? t : void 0)
    }

    function Vr(t) {
        for (var i = t.parent; i;) {
            if (i.enableSubNetwork) return i;
            i = i.parent
        }
        return null
    }

    function qr() {
        b(this, qr, arguments)
    }

    function Kr(t, e, n, r, s, o, h) {
        var a = i.createElement("div");
        a.className = "Q-Graph-Nav-Button", Ei(a, tl), e && Ei(a, e);
        var l = i.createElement("img");
        return o && (Vs && (l.ontouchstart = o), zo || (l.onclick = o)), l.name = h, l.src = n, Ei(l, il), s && Ei(l, s), r && yi(l, "transform", "rotate(180deg)"), a._img = l, a.appendChild(l), t.appendChild(a), a
    }

    function Zr(t, e) {
        this._navPane = i.createElement("div"), this._navPane.className = "Q-Graph-Nav", Ei(this._navPane, {
            "background-color": "rgba(0, 0, 0, 0)",
            overflow: "hidden",
            "user-select": "none",
            position: "relative"
        }), this._top = Kr(this._navPane, {
            width: "100%"
        }, Zs.NAVIGATION_IMAGE_TOP, !1, null, e, "top"), this._left = Kr(this._navPane, {
            height: "100%"
        }, Zs.NAVIGATION_IMAGE_LEFT, !1, el, e, "left"), this._right = Kr(this._navPane, {
            height: "100%",
            right: "0px"
        }, Zs.NAVIGATION_IMAGE_LEFT, !0, el, e, "right"), this._leottom = Kr(this._navPane, {
            width: "100%",
            bottom: "0px"
        }, Zs.NAVIGATION_IMAGE_TOP, !0, null, e, "bottom"), t.appendChild(this._navPane)
    }

    function Jr(t, i) {
        if (!Zs.NAVIGATION_IMAGE_LEFT) {
            var e = Mi(20, 40),
                n = e.g;
            n.scale(n.ratio, n.ratio), n.moveTo(16, 4), n.lineTo(4, 20), n.lineTo(16, 36), n.lineWidth = 3, n.lineCap = "round", n.lineJoin = "round", n.strokeStyle = "#FFF", n.shadowColor = "#888", n.shadowBlur = 5, n.stroke(), Zs.NAVIGATION_IMAGE_LEFT = e.toDataURL();
            var r = Mi(e.height, e.width, !1);
            r.g.translate(r.width, 0), r.g.rotate(Math.PI / 2), r.g.drawImage(e, 0, 0), Zs.NAVIGATION_IMAGE_TOP = r.toDataURL()
        }
        this._leaseCanvas = t;
        var s = function (i) {
            H(i);
            var e, n, r = i.target,
                s = r.name;
            if ("left" == s) e = 1;
            else if ("right" == s) e = -1;
            else if ("top" == s) n = 1;
            else {
                if ("bottom" != s) return;
                n = -1
            }
            Vs && (r.className = "hover", setTimeout(function () {
                r.className = ""
            }, 100)), H(i), t._jc._9h(e, n)
        };
        Zr.call(this, i, s), this._31(i.clientWidth, i.clientHeight)
    }

    function Qr(t, i) {
        this._leaseCanvas = t, this.init(i, t)
    }

    function ts() {
        b(this, ts, arguments)
    }

    function is(t, i) {
        this._leaseCanvas = t, this._ih = Je(i), this.g = this._ih.g, this._9o = new Js
    }

    function es(t) {
        var i = t.selectionModel,
            e = [];
        return t.graphModel.forEach(function (i) {
            t.isVisible(i) && t.isSelectable(i) && e.push(i)
        }), i.set(e)
    }

    function ns(t, i, e) {
        var n = t.bounds;
        e = e || n, i = i || 1;
        var r = null;
        r && e.width * e.height * i * i > r && (i = Math.sqrt(r / e.width / e.height));
        var s = Mi();
        Ke(s.g), s.width = e.width * i, s.height = e.height * i, t._7p._g7(s.g, i, e);
        var o = null;
        try {
            o = s.toDataURL("image/png")
        } catch (h) {
            dh.error(h)
        }
        return {
            canvas: s,
            data: o,
            width: s.width,
            height: s.height
        }
    }

    function rs(t) {
        this.graph = t, this.topCanvas = t.topCanvas
    }

    function ss(t, i) {
        this.interactions = t, this.defaultCursor = i || "default"
    }

    function os() {
        b(this, os, arguments)
    }

    function hs(t, i) {
        if (!t) return i;
        var n = {};
        for (var r in t) n[r] = t[r];
        for (var r in i) n[r] === e && (n[r] = i[r]);
        return n
    }

    function as() {
        b(this, as, arguments)
    }

    function ls() {
        b(this, ls, arguments)
    }

    function _s() {
        b(this, _s, arguments)
    }

    function us() {
        b(this, us, arguments)
    }

    function cs(i, e, n) {
        i += t.pageXOffset, e += t.pageYOffset;
        var r = n.getBoundingClientRect();
        return {
            x: i + r.left,
            y: e + r.top
        }
    }

    function ds(t, i, e) {
        var n = t.offsetWidth,
            r = t.offsetHeight;
        t.style.left = i - n / 2 + "px", t.style.top = e - r / 2 + "px"
    }

    function fs(t) {
        var e = i.createElement("canvas"),
            n = e.getContext("2d"),
            r = getComputedStyle(t, null),
            s = r.font;
        s || (s = r.fontStyle + " " + r.fontSize + " " + r.fontFamily), n.font = s;
        var o = t.value,
            h = o.split("\n"),
            a = parseInt(r.fontSize),
            l = 0,
            _ = 0;
        return dh.forEach(h, function (t) {
            var i = n.measureText(t).width;
            i > l && (l = i), _ += 1.2 * a
        }), {
            width: l,
            height: _
        }
    }

    function gs(t, e) {
        if ("number" == typeof t.selectionStart && "number" == typeof t.selectionEnd) {
            var n = t.value,
                r = t.selectionStart;
            t.value = n.slice(0, r) + e + n.slice(t.selectionEnd), t.selectionEnd = t.selectionStart = r + e.length
        } else if ("undefined" != typeof i.selection) {
            var s = i.selection.createRange();
            s.text = e, s.collapse(!1), s.select()
        }
    }

    function vs(i) {
        if (Bs) {
            var e = t.scrollX || t.pageXOffset,
                n = t.scrollY || t.pageYOffset;
            return i.select(), void t.scrollTo(e, n)
        }
        i.select()
    }

    function Es() {}

    function ps(t) {
        this.graph = t, this.topCanvas = t.topCanvas, this.handlerSize = Vs ? 8 : 5
    }

    function ys(t) {
        return t.type == Uh || t.type == Wh
    }

    function Ts(t) {
        this.graph = t, this.topCanvas = t.topCanvas, this.handlerSize = Vs ? 8 : 4, this._rotateHandleLength = Vs ? 30 : 20
    }

    function ms(t, i) {
        var e = new so;
        return e.addPoint(Ye.call(t, {
            x: i.x,
            y: i.y
        })), e.addPoint(Ye.call(t, {
            x: i.x + i.width,
            y: i.y
        })), e.addPoint(Ye.call(t, {
            x: i.x + i.width,
            y: i.y + i.height
        })), e.addPoint(Ye.call(t, {
            x: i.x,
            y: i.y + i.height
        })), e
    }

    function Os(t) {
        t %= 2 * Math.PI;
        var i = Math.round(t / sl);
        return 0 == i || 4 == i ? "ew-resize" : 1 == i || 5 == i ? "nwse-resize" : 2 == i || 6 == i ? "ns-resize" : "nesw-resize"
    }

    function ws() {}

    function As(e, n, r) {
        var s = i.documentElement,
            o = new so(t.pageXOffset, t.pageYOffset, s.clientWidth - 2, s.clientHeight - 2),
            h = e.offsetWidth,
            a = e.offsetHeight;
        n + h > o.x + o.width && (n = o.x + o.width - h), r + a > o.y + o.height && (r = o.y + o.height - a), n < o.x && (n = o.x), r < o.y && (r = o.y), e.style.left = n + "px", e.style.top = r + "px"
    }

    function bs(t, i, e, n, r) {
        this.source = t, this.type = "interaction", this.kind = i, this.event = e, this.data = n, this.datas = r
    }

    function Ls(t) {
        this._48 = {}, this._jc = t, this._jc._1e.addListener(this._8f, this), this.currentMode = fh.INTERACTION_MODE_DEFAULT
    }

    function Ss(t) {
        return t >= 100 && 200 > t
    }

    function Is(t) {
        return t == ml || t == xl || t == Il || t == Al || t == Dl || t == Pl
    }

    function xs() {
        var t, i, e = {},
            n = [],
            r = 0,
            s = {},
            o = 0;
        this.graph.forEach(function (h) {
            if (this.isLayoutable(h))
                if (h instanceof Ca) {
                    var a = {
                        node: h,
                        id: h.id,
                        x: h.x,
                        y: h.y
                    };
                    for (this.appendNodeInfo && this.appendNodeInfo(h, a), e[h.id] = a, n.push(a), r++, i = h.parent; i instanceof Pa;) {
                        t || (t = {});
                        var l = t[i.id];
                        l || (l = t[i.id] = {
                            id: i.id,
                            children: []
                        }), l.children.push(a), i = i.parent
                    }
                } else if (h instanceof xa && !h.isLooped() && h.fromAgent && h.toAgent) {
                var a = {
                    edge: h
                };
                s[h.id] = a, o++
            }
        }, this);
        var h = {};
        for (var a in s) {
            var l = s[a],
                _ = l.edge,
                u = _.fromAgent,
                c = _.toAgent,
                d = u.id + "-" + c.id,
                f = c.id + "-" + u.id;
            if (e[u.id] && e[c.id] && !h[d] && !h[f]) {
                var g = e[u.id],
                    v = e[c.id];
                l.from = g, l.to = v, h[d] = l, this.appendEdgeInfo && this.appendEdgeInfo(_, l)
            } else delete s[a], o--
        }
        return {
            groups: t,
            nodesArray: n,
            nodes: e,
            nodeCount: r,
            edges: s,
            edgeCount: o,
            minEnergy: this.minEnergyFunction(r, o)
        }
    }

    function Cs(t) {
        this.graph = t, this.currentMovingNodes = {}
    }

    function Rs() {
        b(this, Rs, arguments)
    }

    function Ds(t, i, e, n, r) {
        n ? t.forEachEdge(function (n) {
            var s = n.otherNode(t);
            s != e && s._marker != r && i(s, t)
        }, this, !0) : t.forEachOutEdge(function (n) {
            var s = n.toAgent;
            s != e && s._marker != r && i(s, t)
        })
    }
    var Ps = 0;
    if (t.navigator) {
        var Ns = navigator.userAgent,
            Ms = /opera/i.test(Ns),
            Bs = !Ms && /msie/i.test(Ns),
            ks = /rv:11.0/i.test(Ns),
            Gs = /MSIE 10./i.test(Ns);
        if (ks && (Bs = !0), /msie\s[6,7,8]/i.test(Ns)) throw new Error("your browser is not supported");
        var Fs = /webkit|khtml/i.test(Ns),
            $s = !Fs && /gecko/i.test(Ns),
            zs = /firefox\//i.test(Ns),
            js = /Chrome\//i.test(Ns),
            Ys = !js && /Safari\//i.test(Ns),
            Hs = /Macintosh;/i.test(Ns),
            Us = /(iPad|iPhone|iPod)/g.test(Ns),
            Ws = /Android/g.test(Ns),
            Xs = /Windows Phone/g.test(Ns),
            Vs = (Us || Ws || Xs) && "ontouchstart" in t,
            qs = Ns.match(/AppleWebKit\/([0-9\.]*)/);
        if (qs && qs.length > 1) var Ks = parseFloat(qs[1]);
        if (Ws) {
            {
                parseFloat(Ns.match(/Android\s([0-9\.]*)/)[1])
            }
            if (Ks && 534.3 >= Ks);
        }
    }
    t.requestAnimationFrame || (t.requestAnimationFrame = t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || t.msRequestAnimationFrame || function (i) {
        return t.setTimeout(function () {
            i()
        }, 1e3 / 60)
    }), t.cancelAnimationFrame || (t.cancelAnimationFrame = t.webkitCancelAnimationFrame || t.mozCancelAnimationFrame || t.oCancelAnimationFrame || t.msCancelAnimationFrame || function (i) {
        return t.clearTimeout(i)
    });
    var Zs = {
        SELECTION_TOLERANCE: Vs ? 5 : 2,
        LABEL_COLOR: "#333"
    };
    Q(Zs, {
        FONT_STYLE: {
            get: function () {
                return this._fontStyle || (this._fontStyle = "normal")
            },
            set: function (t) {
                this._fontStyle != t && (this._fontStyle = t, this._fontChanged = !0)
            }
        },
        FONT_SIZE: {
            get: function () {
                return this._fontSize || (this._fontSize = 12)
            },
            set: function (t) {
                this._fontSize != t && (this._fontSize = t, this._fontChanged = !0)
            }
        },
        FONT_FAMILY: {
            get: function () {
                return this._fontFamily || (this._fontFamily = "Verdana,helvetica,arial,sans-serif")
            },
            set: function (t) {
                this._fontFamily != t && (this._fontFamily = t, this._fontChanged = !0)
            }
        },
        FONT: {
            get: function () {
                return (this._fontChanged || this._fontChanged === e) && (this._fontChanged = !1, this._font = this.FONT_STYLE + " " + this.FONT_SIZE + "px " + this.FONT_FAMILY), this._font
            }
        }
    });
    var Js = function (t) {
        this._ig = [], this._kh = {}, t && this.add(t)
    };
    Js.prototype = {
        _ig: null,
        _kh: null,
        get: function (t) {
            return this.getByIndex(t)
        },
        getById: function (t) {
            return this._kh[t]
        },
        getByIndex: function (t) {
            return this._ig[t]
        },
        forEach: function (t, i, e) {
            return g(this._ig, t, i, e)
        },
        forEachReverse: function (t, i, e) {
            return E(this._ig, t, i, e)
        },
        size: function () {
            return this._ig.length
        },
        contains: function (t) {
            return this.containsById(t.id)
        },
        containsById: function (t) {
            return this._kh.hasOwnProperty(t)
        },
        setIndex: function (t, i) {
            var e = this._ig.indexOf(t);
            if (0 > e) throw new Error("'" + t.id + "' not exist");
            return e == i ? !1 : (this._ig.splice(e, 1), this._ig.splice(i, 0, t), !0)
        },
        setIndexAfter: function (t, i) {
            var e = this._ig.indexOf(t);
            if (0 > e) throw new Error("'" + t.id + "' not exist");
            return e == i ? i : e == i + 1 ? i + 1 : (e > i && (i += 1), this._ig.splice(e, 1), this._ig.splice(i, 0, t), i)
        },
        setIndexBefore: function (t, i) {
            var e = this._ig.indexOf(t);
            if (0 > e) throw new Error("'" + t.id + "' not exist");
            return e == i ? i : e == i - 1 ? i - 1 : (i > e && (i -= 1), this._ig.splice(e, 1), this._ig.splice(i, 0, t), i)
        },
        indexOf: function (t) {
            return this._ig.indexOf(t)
        },
        getIndexById: function (t) {
            var i = this.getById(t);
            return i ? this._ig.indexOf(i) : -1
        },
        add: function (t, i) {
            return z(t) ? this._ek(t, i) : this._jn(t, i)
        },
        addFirst: function (t) {
            return this.add(t, 0)
        },
        _ek: function (t, i) {
            if (0 == t.length) return !1;
            var n = !1,
                r = i >= 0;
            t = t._ig || t;
            for (var s = 0, o = t.length; o > s; s++) {
                var h = t[s];
                null !== h && h !== e && this._jn(h, i, !0) && (n = !0, r && i++)
            }
            return n
        },
        _jn: function (t, i) {
            var n = t.id;
            return n === e || this.containsById(n) ? !1 : (y(this._ig, t, i), this._kh[n] = t, t)
        },
        remove: function (t) {
            return z(t) ? this._9u(t) : t.id ? this._ft(t.id, t) : this.removeById(t)
        },
        _9u: function (t) {
            if (0 == t.length) return !1;
            var i = !1;
            t = t._ig || t;
            for (var n = 0, r = t.length; r > n; n++) {
                var s = t[n];
                if (null !== s && s !== e) {
                    s.id === e && (s = this._kh[s]);
                    var o = s.id;
                    this._ft(o, s, !0) && (i = !0)
                }
            }
            return i
        },
        _ft: function (t, i) {
            return t !== e && this.containsById(t) ? ((null === i || i === e) && (i = this.getById(t)), delete this._kh[t], T(this._ig, i), !0) : !1
        },
        removeById: function (t) {
            var i = this._kh[t];
            return i ? this._ft(t, i) : !1
        },
        set: function (t) {
            if (!t || 0 == t) return void this.clear();
            if (this.isEmpty() || !z(t)) return this.clear(), this.add(t);
            var i = [],
                e = {},
                n = 0;
            if (g(t, function (t) {
                    this._kh[t.id] ? (e[t.id] = t, n++) : i.push(t)
                }, this), n != this.length) {
                var r = [];
                this.forEach(function (t) {
                    e[t.id] || r.push(t)
                }, this), r.length && this._9u(r)
            }
            return i.length && this._ek(i), !0
        },
        clear: function () {
            return this.isEmpty() ? !1 : (this._ig.length = 0, this._kh = {}, !0)
        },
        toDatas: function () {
            return this._ig.slice(0)
        },
        isEmpty: function () {
            return 0 == this._ig.length
        },
        valueOf: function () {
            return this._ig.length
        },
        clone: function (t) {
            var i = new Js;
            return i.add(t ? p(this._ig) : this.toDatas()), i
        }
    }, Q(Js.prototype, {
        datas: {
            get: function () {
                return this._ig
            }
        },
        random: {
            get: function () {
                return this._ig && this._ig.length ? this._ig[U(this._ig.length)] : null
            }
        },
        length: {
            get: function () {
                return this._ig ? this._ig.length : 0
            }
        }
    });
    var Qs = (2 * Math.PI, .5 * Math.PI),
        to = function (t, i) {
            i = i.toUpperCase();
            for (var e = Bs ? t.firstChild : t.firstElementChild; e && (1 != e.nodeType || e.tagName && e.tagName.toUpperCase() != i);) e = Bs ? e.nextSibling : e.nextElementSibling;
            return e && 1 == e.nodeType && e.tagName && e.tagName.toUpperCase() == i ? e : null
        },
        io = function (t, i, e) {
            t instanceof io && (i = t.y, t = t.x, e = t.rotate), this.set(t, i, e)
        },
        eo = function (t, i, e, n) {
            var r = t - e,
                s = i - n;
            return Math.sqrt(r * r + s * s)
        };
    io.prototype = {
        x: 0,
        y: 0,
        rotate: e,
        set: function (t, i, e) {
            this.x = t || 0, this.y = i || 0, this.rotate = e || 0
        },
        negate: function () {
            this.x = -this.x, this.y = -this.y
        },
        offset: function (t, i) {
            this.x += t, this.y += i
        },
        equals: function (t) {
            return this.x == t.x && this.y == t.y
        },
        distanceTo: function (t) {
            return eo(this.x, this.y, t.x, t.y)
        },
        toString: function () {
            return "Point(" + this.x + ", " + this.y + ")"
        },
        clone: function () {
            return new io(this.x, this.y)
        }
    }, Object.defineProperty(io.prototype, "distance", {
        get: function () {
            return Math.sqrt(this.x * this.x + this.y * this.y)
        }
    });
    var no = function (t, i, n, r) {
        t !== e && this._l2(t, i, n, r)
    };
    no.prototype = {
        _l6: null,
        _la: null,
        _l8: null,
        _l7: null,
        _lg: null,
        _le: null,
        _lc: 1,
        _l2: function (t, i, e, n) {
            this._l6 = t, this._la = i, this._l8 = e, this._l7 = n, t == e ? (this._lg = -1, this._lc = 0, this._le = t) : (this._lg = (i - n) / (t - e), this._le = i - this._lg * t, this._lc = 1), this._ju = Math.atan2(this._l7 - this._la, this._l8 - this._l6), this._lcos = Math.cos(this._ju), this._sin = Math.sin(this._ju)
        },
        _leh: function (t) {
            return 0 == this._lc ? Number.NaN : this._lg * t + this._le
        },
        _lc9: function (t) {
            return 0 == this._lg ? Number.NaN : (t - this._le) / this._lg
        },
        _$d: function (t) {
            var i, e, n, r, s, o = t[0],
                h = t[2],
                a = t[4],
                l = t[1],
                _ = t[3],
                u = t[5],
                c = this._lg,
                d = this._le,
                f = this._lc;
            if (0 == f ? (n = Math.sqrt((-c * c * o - c * d) * a + c * c * h * h + 2 * c * d * h - c * d * o), r = -c * h + c * o, s = c * a - 2 * c * h + c * o) : (n = Math.sqrt((-l + c * o + d) * u + _ * _ + (-2 * c * h - 2 * d) * _ + (c * a + d) * l + (-c * c * o - c * d) * a + c * c * h * h + 2 * c * d * h - c * d * o), r = -_ + l + c * h - c * o, s = u - 2 * _ + l - c * a + 2 * c * h - c * o), 0 != s) {
                i = (n + r) / s, e = (-n + r) / s;
                var g, v;
                return i >= 0 && 1 >= i && (g = Yi(i, t)), e >= 0 && 1 >= e && (v = Yi(e, t)), g && v ? [g, v] : g ? g : v ? v : void 0
            }
        },
        _3j: function (t, i, e) {
            if (this._lg == t._lg || 0 == this._lc && 0 == t._lc) return null;
            var n, r;
            if (n = 0 == this._lc ? this._le : 0 == t._lc ? t._le : (t._le - this._le) / (this._lg - t._lg), r = 0 == this._lg ? this._le : 0 == t._lg ? t._le : this._lc ? this._lg * n + this._le : t._lg * n + t._le, !i) return {
                x: n,
                y: r
            };
            var s, o, h;
            if (e) s = -i / 2, o = -s;
            else {
                s = -eo(this._l6, this._la, n, r), o = eo(this._l8, this._l7, n, r);
                var a = -s + o;
                if (a > i) {
                    var l = i / a;
                    s *= l, o *= l
                } else h = (i - a) / 2
            }
            var _ = this._69(n, r, s),
                u = this._69(n, r, o);
            return h && (_._rest = h, u._rest = h), [_, u]
        },
        _69: function (t, i, e) {
            return 0 == this._lc ? {
                x: t,
                y: i + e
            } : {
                x: t + e * this._lcos,
                y: i + e * this._sin
            }
        }
    };
    var ro = function (t, i) {
        this.width = t, this.height = i
    };
    ro.prototype = {
        width: 0,
        height: 0,
        isEmpty: function () {
            return this.width <= 0 || this.height <= 0
        },
        clone: function () {
            return new ro(this.width, this.height)
        },
        toString: function () {
            return "Size(" + this.width + ", " + this.height + ")"
        }
    };
    var so = function (t, i, n, r) {
        t instanceof Object && !G(t) && (i = t.y, n = t.width, r = t.height, t = t.x), n === e && (n = -1), r === e && (r = -1), this.x = t || 0, this.y = i || 0, this.width = n, this.height = r
    };
    so.prototype = {
        x: 0,
        y: 0,
        width: -1,
        height: -1,
        setByRect: function (t) {
            this.x = t.x || 0, this.y = t.y || 0, this.width = t.width || 0, this.height = t.height || 0
        },
        set: function (t, i, e, n) {
            this.x = t || 0, this.y = i || 0, this.width = e || 0, this.height = n || 0
        },
        offset: function (t, i) {
            return this.x += t, this.y += i, this
        },
        contains: function (t, i) {
            if (1 == arguments.length) {
                if ("object" == typeof t && ui(t)) return this.contains(t.x, t.y, t.width, t.height);
                throw {
                    message: "arguments error"
                }
            }
            return 2 == arguments.length ? t >= this.x && t <= this.x + this.width && i >= this.y && i <= this.y + this.height : li(this.x, this.y, this.width, this.height, t, i, w || 0, h || 0)
        },
        intersectsPoint: function (t, i, e) {
            return this.width <= 0 && this.height <= 0 ? !1 : e ? this.intersectsRect(t - e, i - e, 2 * e, 2 * e) : t >= this.x && t <= this.x + this.width && i >= this.y && i <= this.y + this.height
        },
        intersectsRect: function (t, i, e, n) {
            return hi(this.x, this.y, this.width, this.height, t, i, e, n)
        },
        intersects: function (t, i) {
            return G(t.width) ? this.intersectsRect(t.x, t.y, t.width, t.height) : this.intersectsPoint(t, i)
        },
        intersection: function (t, i, e, n) {
            var r = this.x,
                s = this.y,
                o = r;
            o += this.width;
            var h = s;
            h += this.height;
            var a = t;
            a += e;
            var l = i;
            return l += n, t > r && (r = t), i > s && (s = i), o > a && (o = a), h > l && (h = l), o -= r, h -= s, 0 > o || 0 > h ? null : new so(r, s, o, h)
        },
        addPoint: function (t) {
            this.add(t.x, t.y)
        },
        add: function (t, i) {
            if (G(t.width)) return this.addRect(t.x, t.y, t.width, t.height);
            if (G(t.x) && (i = t.y, t = t.x), this.width < 0 || this.height < 0) return this.x = t, this.y = i, void(this.width = this.height = 0);
            var e = this.x,
                n = this.y,
                r = this.width,
                s = this.height;
            r += e, s += n, e > t && (e = t), n > i && (n = i), t > r && (r = t), i > s && (s = i), r -= e, s -= n, r > Number.MAX_VALUE && (r = Number.MAX_VALUE), s > Number.MAX_VALUE && (s = Number.MAX_VALUE), this.set(e, n, r, s)
        },
        addRect: function (t, i, e, n) {
            var r = this.width,
                s = this.height;
            (0 > r || 0 > s) && this.set(t, i, e, n);
            var o = e,
                h = n;
            if (!(0 > o || 0 > h)) {
                var a = this.x,
                    l = this.y;
                r += a, s += l;
                var _ = t,
                    u = i;
                o += _, h += u, a > _ && (a = _), l > u && (l = u), o > r && (r = o), h > s && (s = h), r -= a, s -= l, r > Number.MAX_VALUE && (r = Number.MAX_VALUE), s > Number.MAX_VALUE && (s = Number.MAX_VALUE), this.set(a, l, r, s)
            }
        },
        shrink: function (t, i, e, n) {
            return G(t) ? 1 == arguments.length ? n = i = e = t || 0 : 2 == arguments.length ? (e = t || 0, n = i || 0) : (t = t || 0, i = i || 0, e = e || 0, n = n || 0) : (i = t.left || 0, e = t.bottom || 0, n = t.right || 0, t = t.top || 0), this.x += i, this.y += t, this.width -= i + n, this.height -= t + e, this
        },
        grow: function (t, i, e, n) {
            return G(t) ? 1 == arguments.length ? n = i = e = t || 0 : 2 == arguments.length ? (e = t || 0, n = i || 0) : (t = t || 0, i = i || 0, e = e || 0, n = n || 0) : (i = t.left || 0, e = t.bottom || 0, n = t.right || 0, t = t.top || 0), this.x -= i, this.y -= t, this.width += i + n, this.height += t + e, this
        },
        scale: function (t) {
            return this.x *= t, this.y *= t, this.width *= t, this.height *= t, this
        },
        isEmpty: function () {
            return this.width <= 0 && this.height <= 0
        },
        toString: function () {
            return this.x + " , " + this.y + " , " + this.width + " , " + this.height
        },
        union: function (t) {
            var i = this.width,
                e = this.height;
            if (0 > i || 0 > e) return new so(t.x, t.y, t.width, t.height);
            var n = t.width,
                r = t.height;
            if (0 > n || 0 > r) return new so(this.x, this.y, this.width, this.height);
            var s = this.x,
                o = this.y;
            i += s, e += o;
            var h = t.x,
                a = t.y;
            return n += h, r += a, s > h && (s = h), o > a && (o = a), n > i && (i = n), r > e && (e = r), i -= s, e -= o, i > Number.MAX_VALUE && (i = Number.MAX_VALUE), e > Number.MAX_VALUE && (e = Number.MAX_VALUE), new so(s, o, i, e)
        },
        clear: function () {
            this.set(0, 0, -1, -1)
        },
        equals: function (t) {
            return t && this.x == t.x && this.y == t.y && this.width == t.width && this.height == t.height
        },
        clone: function (t, i) {
            return new so(this.x + (t || 0), this.y + (i || 0), this.width, this.height)
        },
        toArray: function () {
            return [this.x, this.y, this.width, this.height]
        },
        getIntersectionPoint: function (t, i, e, n) {
            return oi(this, t, i, e, n)
        }
    }, A(so, ro), so.equals = function (t, i) {
        return t == i || t && i && t.x == i.x && t.y == i.y && t.width == i.width && t.height == i.height
    }, Q(so.prototype, {
        left: {
            get: function () {
                return this.x
            }
        },
        top: {
            get: function () {
                return this.y
            }
        },
        bottom: {
            get: function () {
                return this.y + this.height
            }
        },
        right: {
            get: function () {
                return this.x + this.width
            }
        },
        cx: {
            get: function () {
                return this.x + this.width / 2
            }
        },
        cy: {
            get: function () {
                return this.y + this.height / 2
            }
        },
        center: {
            get: function () {
                return new io(this.cx, this.cy)
            }
        }
    }), so.intersects = hi, so.intersection = _i, so.intersectsPoint = ai;
    var oo = function (t, i, e, n) {
        1 == arguments.length ? i = e = n = t : 2 == arguments.length && (e = t, n = i), this.set(t, i, e, n)
    };
    oo.prototype = {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        set: function (t, i, e, n) {
            this.top = t || 0, this.left = i || 0, this.bottom = e || 0, this.right = n || 0
        },
        clone: function () {
            return new oo(this.top, this.left, this.bottom, this.right)
        },
        equals: function (t) {
            return t && this.top == t.top && this.bottom == t.bottom && this.left == t.left && this.right == t.right
        }
    };
    var ho = function (t, i) {
        this.horizontalPosition = t, this.verticalPosition = i
    };
    ho.prototype = {
        verticalPosition: !1,
        horizontalPosition: !1,
        toString: function () {
            return (this.horizontalPosition || "") + (this.verticalPosition || "")
        }
    }, J(ho.prototype, "sortName", {
        get: function () {
            return (this.horizontalPosition || "") + (this.verticalPosition || "")
        }
    });
    var ao = "l",
        lo = "c",
        _o = "r",
        uo = "t",
        co = "m",
        fo = "b";
    ho.LEFT_TOP = new ho(ao, uo), ho.LEFT_MIDDLE = new ho(ao, co), ho.LEFT_BOTTOM = new ho(ao, fo), ho.CENTER_TOP = new ho(lo, uo), ho.CENTER_MIDDLE = new ho(lo, co), ho.CENTER_BOTTOM = new ho(lo, fo), ho.RIGHT_TOP = new ho(_o, uo), ho.RIGHT_MIDDLE = new ho(_o, co), ho.RIGHT_BOTTOM = new ho(_o, fo);
    var go = [ho.LEFT_TOP, ho.LEFT_MIDDLE, ho.LEFT_BOTTOM, ho.CENTER_TOP, ho.CENTER_MIDDLE, ho.CENTER_BOTTOM, ho.RIGHT_TOP, ho.RIGHT_MIDDLE, ho.RIGHT_BOTTOM];
    J(ho, "random", {
        get: function () {
            return go[U(go.length)]
        }
    }), ho.fromString = function (t) {
        for (var i in ho) {
            var e = ho[i];
            if (e && "random" != i && e instanceof ho && e.toString() == t) return e
        }
    };
    var vo = function (t, i, e, n, r) {
        this.set(t, i, e, n), this.radius = r
    };
    vo.prototype = {
        radius: 0,
        classify: function (t, i, e, n) {
            return i > t ? 0 : i + n > t ? 1 : e - n > t ? 2 : e > t ? 3 : 4
        },
        intersectsRect: function (t, i, e, n) {
            if (L(this, vo, "intersectsRect", arguments) === !1) return !1;
            var r = this.x,
                s = this.y,
                o = r + this.width,
                h = s + this.height,
                a = 2 * radius,
                l = 2 * radius,
                _ = Math.min(this.width, Math.abs(a)) / 2,
                u = Math.min(this.height, Math.abs(l)) / 2,
                c = this.classify(t, r, o, _),
                d = this.classify(t + e, r, o, _),
                f = this.classify(i, s, h, u),
                g = this.classify(i + n, s, h, u);
            return 2 == c || 2 == d || 2 == f || 2 == g ? !0 : 2 > c && d > 2 || 2 > f && g > 2 ? !0 : (t = 1 == d ? t = t + e - (r + _) : t -= o - _, i = 1 == g ? i = i + n - (s + u) : i -= h - u, t /= _, i /= u, 1 >= t * t + i * i)
        },
        intersectsPoint: function (t, i) {
            if (L(this, vo, "intersectsPoint", arguments) === !1) return !1;
            var e = this.x,
                n = this.y,
                r = e + this.width,
                s = n + this.height;
            if (e > t || n > i || t >= r || i >= s) return !1;
            var o = 2 * radius,
                h = 2 * radius,
                a = Math.min(this.width, Math.abs(o)) / 2,
                l = Math.min(this.height, Math.abs(h)) / 2;
            return t >= (e += a) && t < (e = r - a) ? !0 : i >= (n += l) && i < (n = s - l) ? !0 : (t = (t - e) / a, i = (i - n) / l, 1 >= t * t + i * i)
        },
        clone: function () {
            return new vo(this.x, this.y, this.width, this.height, this.radius)
        }
    }, A(vo, so);
    var Eo = function (t, i, e, n) {
        this.source = t, this.type = i, this.kind = e, this.value = n
    };
    Eo.prototype = {
        source: null,
        type: null,
        kind: null,
        value: null,
        toString: function () {
            return "source: " + this.source + ", type: " + this.type + ", kind: " + this.kind
        }
    };
    var po = function (t, i, e, n, r) {
        this.source = t, this.kind = i, this.oldValue = n, this.value = e, this.propertyType = r
    };
    po.prototype = {
        type: "property.change",
        propertyType: null,
        toString: function () {
            return "source: " + this.source + ", type: " + this.type + ", propertyName: " + this.kind + ", oldValue: " + this.oldValue + ", value: " + this.value
        }
    }, A(po, Eo), J(po.prototype, "propertyName", {
        get: function () {
            return this.kind
        },
        set: function (t) {
            this.kind = t
        }
    });
    var yo = function (t, i, e) {
        this.source = t, this.oldValue = t.parent, this.value = i, this.newIndex = e, this.oldValue && (this.oldIndex = this.oldValue.getChildIndex(t))
    };
    yo.prototype = {
        kind: "parent"
    }, A(yo, po);
    var To = function (t, i) {
        this.source = t, this.value = i
    };
    To.prototype.kind = "child.add", A(To, po);
    var mo = function (t, i) {
        this.source = t, this.value = i
    };
    mo.prototype.kind = "child.remove", A(mo, po);
    var Oo = function (t, i, e, n) {
        this.source = i, this.oldValue = e, this.value = n, this.parent = t, this.child = i, this.oldIndex = e, this.newIndex = n
    };
    Oo.prototype.kind = "child.index", A(Oo, po);
    var wo = function () {};
    wo.prototype = {
        listener: null,
        beforeEvent: function (t) {
            return null != this.listener && this.listener.beforeEvent ? this.listener.beforeEvent(t) : !0
        },
        onEvent: function (t) {
            null != this.listener && this.listener.onEvent && this.listener.onEvent(t)
        }
    };
    var Ao = function () {
            b(this, Ao, arguments), this.events = {}, this.listeners = []
        },
        bo = function (t, i) {
            this.listener = t, this.scope = i, t instanceof Function ? this.onEvent = t : (this.onEvent = t.onEvent, this.beforeEvent = t.beforeEvent), this.equals = function (t) {
                return t && this.listener == t.listener && this.scope == t.scope
            }
        };
    bo.prototype = {
        equals: function (t) {
            return t && this.listener == t.listener && this.scope == t.scope
        },
        destroy: function () {
            delete this.scope, delete this.listener
        }
    }, Ao.prototype = {
        listeners: null,
        _lef: function () {
            return this.listeners && this.listeners.length > 0
        },
        _6g: function (t, i) {
            return t instanceof Ao ? t : new bo(t, i)
        },
        _9k: function (t, i) {
            if (t instanceof Ao) return this.listeners.indexOf(t);
            for (var e = this.listeners, n = 0, r = e.length; r > n; n++) {
                var s = e[n];
                if (s.listener == t && s.scope == i) return n
            }
            return -1
        },
        contains: function (t, i) {
            return this._9k(t, i) >= 0
        },
        addListener: function (t, i) {
            return this.contains(t, i) ? !1 : void this.listeners.push(this._6g(t, i))
        },
        removeListener: function (t, i) {
            var e = this._9k(t, i);
            e >= 0 && this.listeners.splice(e, 1)
        },
        on: function (t, i) {
            this.addListener(t, i)
        },
        un: function (t, i, e) {
            this.removeListener(t, i, e)
        },
        onEvent: function (t) {
            return this.listeners ? void g(this.listeners, function (i) {
                i.onEvent && (i.scope ? i.onEvent.call(i.scope, t) : i.onEvent(t))
            }, this) : !1
        },
        beforeEvent: function (t) {
            return this.listeners ? g(this.listeners, function (i) {
                return i.beforeEvent ? i.scope ? i.beforeEvent.call(i.scope, t) : i.beforeEvent(t) : !0
            }, this) : !0
        },
        _lcu: function (t) {
            return this.beforeEvent(t) === !1 ? !1 : (this.onEvent(t), !0)
        },
        clear: function () {
            this.listeners = []
        },
        destroy: function () {
            this.clear()
        }
    }, A(Ao, wo);
    var Lo = {
            onEvent: function () {},
            beforeEvent: function () {}
        },
        So = function (t, i, e, n, r) {
            this.source = t, this.type = "list", this.kind = i, this.data = e, this.index = n, this.oldIndex = r
        };
    So.prototype = {
        index: -1,
        oldIndex: -1,
        toString: function () {
            return "source: " + this.source + ", type: " + this.type + ", kind: " + this.kind + ", data: " + this.data + ", index: " + this.index + ", oldIndex: " + this.oldIndex
        }
    }, A(So, Eo), So.KIND_ADD = "add", So.KIND_REMOVE = "remove", So.KIND_CLEAR = "clear", So.KIND_INDEX_CHANGE = "index.change";
    var Io = function () {
        this.id = ++Ps, this._lei = {}
    };
    Io.prototype = {
        _lei: null,
        id: null,
        get: function (t) {
            return this._lei[t]
        },
        set: function (t, i) {
            var e = this.get(t);
            if (e === i) return !1;
            var n = new po(this, t, i, e);
            return n.propertyType = fh.PROPERTY_TYPE_CLIENT, this._lga(t, i, n, this._lei)
        },
        _lga: function (t, i, n, r) {
            return this.beforeEvent(n) === !1 ? !1 : (r || (r = this._lei), i === e ? delete r[t] : r[t] = i, this.onEvent(n), !0)
        },
        remove: function (t) {
            this.set(t, null)
        },
        valueOf: function () {
            return this.id
        },
        toString: function () {
            return this.id
        },
        _lcs: function (t, i) {
            if (i === e && (i = -1), this == t || t == this._in) return !1;
            if (t && this == t._in && !t._lcs(null)) return !1;
            var n = new yo(this, t, i);
            if (!this.beforeEvent(n)) return !1;
            var r, s, o = this._in;
            return t && (r = new To(t, this), !t.beforeEvent(r)) ? !1 : null == o || (s = new mo(o, this), o.beforeEvent(s)) ? (this._in = t, null != t && di(t, this, i), null != o && fi(o, this), this.onEvent(n), null != t && t.onEvent(r), null != o && o.onEvent(s), this.onParentChanged(o, t), !0) : !1
        },
        addChild: function (t, i) {
            var e = t._lcs(this, i);
            return e && this.onChildAdd(t, i), e
        },
        removeChild: function (t) {
            if (!this._er || !this._er.contains(t)) return !1;
            var i = t._lcs(null);
            return this.onChildRemove(t), i
        },
        toChildren: function () {
            return this._er ? this._er.toDatas() : null
        },
        clearChildren: function () {
            if (this._er && this._er.length) {
                var t = this.toChildren();
                g(t, function (t) {
                    t._lcs(null)
                }, this), this.onChildrenClear(t)
            }
        },
        forEachChild: function (t, i) {
            return this.hasChildren() ? this._er.forEach(t, i) : !1
        },
        onChildAdd: function () {},
        onChildRemove: function () {},
        onChildrenClear: function () {},
        onParentChanged: function () {},
        getChildIndex: function (t) {
            return this._er && this._er.length ? this._er.indexOf(t) : -1
        },
        setChildIndex: function (t, i) {
            if (!this._er || !this._er.length) return !1;
            var e = this._er.indexOf(t);
            if (0 > e || e == i) return !1;
            var n = new Oo(this, t, e, i);
            return this.beforeEvent(n) === !1 ? !1 : (this._er.remove(t) && this._er.add(t, i), this.onEvent(n), !0)
        },
        hasChildren: function () {
            return this._er && this._er.length > 0
        },
        getChildAt: function (t) {
            return null == this._er ? null : this._er._ig[t]
        },
        isDescendantOf: function (t) {
            if (!t.hasChildren()) return !1;
            for (var i = this.parent; null != i;) {
                if (t == i) return !0;
                i = i.parent
            }
            return !1
        },
        firePropertyChangeEvent: function (t, i, e, n) {
            this.onEvent(new po(this, t, i, e, n))
        }
    }, A(Io, wo), Q(Io.prototype, {
        childrenCount: {
            get: function () {
                return this._er ? this._er.length : 0
            }
        },
        children: {
            get: function () {
                return this._er || (this._er = new Js), this._er
            }
        },
        parent: {
            get: function () {
                return this._in
            },
            set: function (t) {
                this._lcs(t, -1)
            }
        },
        properties: {
            get: function () {
                return this._lei
            },
            set: function (t) {
                this._lei != t && (this._lei = t)
            }
        }
    });
    var xo = function () {
        this._ig = [], this._kh = {}, this._1e = new Ao
    };
    xo.prototype = {
        beforeEvent: function (t) {
            return null != this._1e && this._1e.beforeEvent ? this._1e.beforeEvent(t) : !0
        },
        onEvent: function (t) {
            return this._1e instanceof Function ? void this._1e(t) : void(null != this._1e && this._1e.onEvent && this._1e.onEvent(t))
        },
        _1e: null,
        setIndex: function (t, i) {
            if (!this.contains(t)) throw new Error("'" + t.getId() + "' not exist");
            var e = this.indexOf(t);
            if (e == i) return !1;
            var n = new So(this, So.KIND_INDEX_CHANGE, t, i, e);
            return this.beforeEvent(n) === !1 ? !1 : (this._ig.remove(t) >= 0 && this._ig.add(i, t), this.onEvent(n), !0)
        },
        _ek: function (t, i) {
            if (0 == t.length) return !1;
            var n = !1,
                r = i >= 0,
                s = new So(this, So.KIND_ADD, t, i);
            if (this.beforeEvent(s) === !1) return !1;
            var o = [];
            t = t._ig || t;
            for (var h = 0, a = t.length; a > h; h++) {
                var l = t[h];
                null !== l && l !== e && this._jn(l, i, !0) && (o.push(l), n = !0, r && i++)
            }
            return s.data = o, this.onEvent(s), n
        },
        _jn: function (t, i, e) {
            if (this.accept(t) === !1) return !1;
            if (e) return L(this, xo, "_jn", arguments);
            var n = new So(this, So.KIND_ADD, t, i);
            return this.beforeEvent(n) === !1 ? !1 : L(this, xo, "_jn", arguments) ? (this._jm(t, n), t) : !1
        },
        _jm: function (t, i) {
            this.onEvent(i)
        },
        _9u: function (t) {
            if (0 == t.length) return !1;
            var i = new So(this, So.KIND_REMOVE, t);
            if (this.beforeEvent(i) === !1) return !1;
            var n = [],
                r = !1;
            t = t._ig || t;
            for (var s = 0, o = t.length; o > s; s++) {
                var h = t[s];
                if (null !== h && h !== e) {
                    var a = h.id || h;
                    h.id === e && (h = null), this._ft(a, h, !0) && (n.push(h), r = !0)
                }
            }
            return i.data = n, this.onEvent(i), r
        },
        _ft: function (t, i, e) {
            if (e) return L(this, xo, "_ft", arguments);
            var n = new So(this, So.KIND_REMOVE, i);
            return this.beforeEvent(n) === !1 ? !1 : L(this, xo, "_ft", arguments) ? (this.onEvent(n), !0) : !1
        },
        clear: function () {
            if (this.isEmpty()) return !1;
            var t = new So(this, So.KIND_CLEAR, this.toDatas());
            return this.beforeEvent(t) === !1 ? !1 : L(this, xo, "clear") ? (this.onEvent(t), !0) : !1
        },
        accept: function (t) {
            return this.filter && this.filter(t) === !1 ? !1 : !0
        }
    }, A(xo, Js), J(xo.prototype, "listChangeDispatcher", {
        get: function () {
            return this._1e
        }
    });
    var Co = function () {
        b(this, Co, arguments), this.selectionChangeDispatcher = new Ao, this._selectionModel = new Ro(this), this._selectionModel._1e = this.selectionChangeDispatcher, this.dataChangeDispatcher = new Ao, this.dataChangeDispatcher.addListener({
            beforeEvent: this.beforeDataPropertyChange,
            onEvent: this.onDataPropertyChanged
        }, this), this.parentChangeDispatcher = new Ao, this.childIndexChangeDispatcher = new Ao, this.$roots = new Js;
        var t = this;
        this.$roots.setIndex = function (i, e) {
            if (!t.$roots.contains(i)) throw new Error("'" + i.id + "' not exist");
            var n = t.$roots._ig.indexOf(i);
            if (n == e) return !1;
            t.$roots._ig.splice(n, 1), t.$roots._ig.splice(e, 0, i), t._letIndexFlag = !0;
            var r = new Oo(t, i, n, e);
            return t._1y(r), !0
        }
    };
    Co.prototype = {
        selectionModel: null,
        selectionChangeDispatcher: null,
        dataChangeDispatcher: null,
        parentChangeDispatcher: null,
        roots: null,
        _jm: function (t, i) {
            t.listener = this.dataChangeDispatcher, t.parent || this.$roots.add(t), this.onEvent(i)
        },
        _ft: function (t, i) {
            if (L(this, Co, "_ft", arguments)) {
                if (i instanceof xa) i.disconnect();
                else if (i instanceof Ca) {
                    var e = i.getEdges();
                    this.remove(e)
                }
                var n = i.parent;
                return null == n ? this.$roots.remove(i) : (n.removeChild(i), n.__5z = !0), i.hasChildren() && this.remove(i.toChildren()), i.listener = null, !0
            }
            return !1
        },
        _4m: function (t) {
            var i = t.source;
            this.contains(i) && (null == i.parent ? this.$roots.add(i) : null == t.oldValue && this.$roots.remove(i), this.parentChangeDispatcher.onEvent(t))
        },
        _1y: function (t) {
            this.childIndexChangeDispatcher.onEvent(t)
        },
        beforeDataPropertyChange: function (t) {
            return t instanceof yo ? this.parentChangeDispatcher.beforeEvent(t) : !0
        },
        onDataPropertyChanged: function (t) {
            return t instanceof yo ? (this._letIndexFlag = !0, t.source._letIndexFlag = !0, void this._4m(t)) : void(t instanceof Oo && (this._letIndexFlag = !0, t.source._letIndexFlag = !0, this._1y(t)))
        },
        toRoots: function () {
            return this.$roots.toDatas()
        },
        _g2: function (t) {
            var i, e = t._in;
            i = e ? e._er : this.$roots;
            var n = i.indexOf(t);
            if (0 > n) throw new Error("data '" + t + "' not exist in the box");
            return 0 == n ? e : i.getByIndex(n - 1)
        },
        _g1: function (t) {
            var i, e = t._in;
            i = e ? e._er : this.$roots;
            var n = i.indexOf(t);
            if (0 > n) throw new Error("data '" + t + "' not exist in the box");
            return n == i.length - 1 ? e ? this._g1(e) : null : i.getByIndex(n + 1)
        },
        forEachByDepthFirst: function (t, i, e) {
            return this.$roots.length ? s(this.$roots, t, i, e) : !1
        },
        forEachByDepthFirstReverse: function (t, i, e) {
            return this.$roots.length ? l(this.$roots, t, i, e) : !1
        },
        forEachByBreadthFirst: function (t, i) {
            return this.$roots.length ? c(this.$roots, t, i) : !1
        },
        forEachByBreadthFirstReverse: function (t, i) {
            return this.$roots.length ? d(this.$roots, t, i) : !1
        },
        clear: function () {
            return L(this, Co, "clear") ? (this.$roots.clear(), this.selectionModel.clear(), !0) : !1
        }
    }, A(Co, xo), Q(Co.prototype, {
        selectionModel: {
            get: function () {
                return this._selectionModel
            }
        },
        roots: {
            get: function () {
                return this.$roots
            }
        }
    });
    var Ro = function (t) {
        b(this, Ro), this.box = t, this._leoxChangeListener = {
            onEvent: function (t) {
                So.KIND_REMOVE == t.kind ? null != t.data ? this.remove(t.data) : null != t.datas && this.remove(t.datas) : So.KIND_CLEAR == t.kind && this.clear()
            }
        }, this.box.listChangeDispatcher.addListener(this._leoxChangeListener, this)
    };
    Ro.prototype = {
        box: null,
        isSelected: function (t) {
            return this.containsById(t.id || t)
        },
        select: function (t) {
            return this.add(t)
        },
        unselect: function (t) {
            return this.remove(t)
        },
        reverseSelect: function (t) {
            return this.contains(t) ? this.remove(t) : this.add(t)
        },
        accept: function (t) {
            return this.box.contains(t)
        }
    }, A(Ro, xo);
    var Do = null,
        Po = null,
        No = function () {
            if (!i.createElement) return function (t) {
                return t
            };
            var t = i.createElement("div"),
                n = t.style,
                r = {};
            return function (t) {
                if (r[t]) return r[t];
                var i = gi(t);
                return n[i] !== e || Po && n[i = gi(Po + i)] !== e ? (r[t] = i, i) : t
            }
        }(),
        Mo = {};
    ! function () {
        if (!i.head) return !1;
        for (var n = i.head, r = "Webkit Moz O ms Khtml".split(" "), s = 0; s < r.length; s++)
            if (n.style[r[s] + "Transform"] !== e) {
                Po = "-" + r[s].toLowerCase() + "-";
                break
            }
        var o = i.createElement("style");
        t.createPopup || o.appendChild(i.createTextNode("")), o.type = "text/css", o.id = "qunee-styles", n.appendChild(o), Do = o.sheet;
        var h, a;
        for (var l in Mo) {
            var _ = Mo[l];
            h = l, a = "";
            for (var u in _) a += No(u) + ":" + _[u] + ";\n";
            Ti(h, a)
        }
    }();
    var Bo = function (t, i, e, n, r) {
            if (r) {
                var s = function (t) {
                    s.handle.call(s.scope, t)
                };
                return s.scope = r, s.handle = e, t.addEventListener(i, s, n), s
            }
            return t.addEventListener(i, e, n), e
        },
        ko = function (t, i, e) {
            t.removeEventListener(i, e)
        };
    if (Zs.DOUBLE_CLICK_INTERVAL_TIME = 200, Zs.LONG_PRESS_INTERVAL = 800, Zs.DELAY_CLICK = !0, t.navigator && navigator.userAgent) {
        var Go, Fo = /mobile|tablet|ip(ad|hone|od)|android/i,
            $o = "ontouchstart" in t,
            zo = $o && Fo.test(navigator.userAgent);
        if (zo) Go = "touchstart,touchmove,touchend,touchcancel";
        else {
            var jo = "onmousewheel" in t ? "mousewheel" : "DOMMouseScroll";
            Go = "contextmenu,mousedown,mouseup,click,dblclick,mousemove,keydown,keyup," + jo, $o && (Go += ",touchstart,touchmove,touchend,touchcancel")
        }
        Go = Go.split(/[\s,]+/);
        var Yo = function (i) {
                return t.TouchEvent && i instanceof t.TouchEvent
            },
            Ho = function () {
                return Zs.DOUBLE_CLICK_INTERVAL_TIME
            },
            Uo = function () {
                return Zs.LONG_PRESS_INTERVAL
            },
            j = function (t) {
                t.preventDefault ? t.preventDefault() : t.returnValue = !1
            },
            Y = function (t) {
                t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0
            },
            H = function (t) {
                j(t), Y(t)
            },
            Wo = function (t) {
                return t.defaultPrevented || t.returnValue === !1
            },
            Xo = function (t) {
                Qo._lcurrentItem && Qo._lcurrentItem._onWindowMouseMove(t)
            },
            Vo = function (t) {
                if (Qo._lcurrentItem) {
                    var i = Qo._lcurrentItem;
                    i._onWindowMouseUp(t), qo(null)
                }
            },
            qo = function (t) {
                Qo._lcurrentItem != t && (Qo._lcurrentItem && (Qo._lcurrentItem.__dragging = !1), Qo._lcurrentItem = t)
            },
            Ko = function (i, e) {
                Go.forEach(function (t) {
                    i.addEventListener(t, e, !1)
                }), Vs || Qo._lg0 || (Qo._lg0 = !0, t.addEventListener("mousemove", Xo, !0), t.addEventListener("mouseup", Vo, !0))
            },
            Zo = function (t, i) {
                Go.forEach(function (e) {
                    t.removeEventListener(e, i, !1)
                })
            },
            Jo = function (t) {
                return t.touches ? {
                    timeStamp: t.timeStamp,
                    x: t.cx,
                    y: t.cy
                } : {
                    timeStamp: t.timeStamp,
                    x: t.clientX,
                    y: t.clientY
                }
            };
        Oi.prototype = {
            _install: function () {
                this.__lgction || (this.__lgction = function (t) {
                    this._lgction(t)
                }.bind(this), Ko(this._ko, this.__lgction))
            },
            _uninstall: function () {
                this.__lgction && Zo(this._ko, this.__lgction)
            },
            _lgction: function (t) {
                t = this._toQEvent(t);
                var i = t.type;
                this._handleEvent(t, i) === !1 && this._onEvent(t, "on" + i)
            },
            _lcancelLongPressTimer: function () {
                this.__longPressTimer && (clearTimeout(this.__longPressTimer), this.__longPressTimer = null)
            },
            __joLongPress: function (t) {
                this.__onLongPressFunction || (this.__onLongPressFunction = function () {
                    this._joEvent && (this.__lcancelClick = !0, this._joEvent.button ? this._onEvent(this._joEvent, "onlongpress2") : this._onEvent(this._joEvent, "onlongpress"))
                }.bind(this)), this._lcancelLongPressTimer(), this.__longPressTimer = setTimeout(this.__onLongPressFunction, Uo(t))
            },
            __fixTouchEvent: function (t) {
                for (var i, e, n = 0, r = 0, s = t.touches.length, o = 0; s > o;) {
                    var h = t.touches[o++],
                        a = h.clientX,
                        l = h.clientY;
                    if (2 == o) {
                        var _ = e[0] - a,
                            u = e[1] - l;
                        i = Math.sqrt(_ * _ + u * u)
                    }
                    e = [a, l], n += a, r += l
                }
                t.cx = n / s, t.cy = r / s, t.center = {
                    x: t.cx,
                    y: t.cy,
                    clientX: t.cx,
                    clientY: t.cy
                }, t.distance = i
            },
            __touchCountChange: function (t) {
                this._dragPoints.clear(), this._9f = Jo(t)
            },
            _handleTouchEvent: function (t, i) {
                switch (i) {
                    case "touchstart":
                        Y(t), this.__fixTouchEvent(t), this.__touchCountChange(t);
                        var e = t.touches.length;
                        this._joEvent || (this._joEvent = t, this._onstart(t), this.__lcancelClick = !1, this.__joLongPress(t)), 1 == e && (this.__joMulTouchEvent = null), e >= 2 && !this.__joMulTouchEvent && (this.__joMulTouchEvent = {
                            cx: t.cx,
                            cy: t.cy,
                            distance: t.distance
                        });
                        break;
                    case "touchmove":
                        H(t), this.__fixTouchEvent(t);
                        var e = t.touches.length;
                        if (e >= 2 && this.__joMulTouchEvent) {
                            var n = this.__joMulTouchEvent.distance;
                            t._scale = t.distance / n, t.dScale = this.__joMulTouchEvent.prevScale ? t._scale / this.__joMulTouchEvent.prevScale : t._scale, this.__joMulTouchEvent.prevScale = t._scale, this.__pinching || (this.__pinching = !0, this._onEvent(t, "startpinch"))
                        }
                        this.__dragging || (this.__dragging = !0, this._jodrag(t)), this._ondrag(t), this.__pinching && this._onEvent(t, "onpinch");
                        break;
                    case "touchend":
                        H(t);
                        var e = t.touches.length;
                        e && (this.__fixTouchEvent(t), this.__touchCountChange(t)), 1 >= e && (this.__pinching && (this.__pinching = !1, this._onEvent(t, "endpinch")), this.__joMulTouchEvent = null), 0 == e && (this.__dragging ? (this._enddrag(t), this.__dragging = !1) : t.timeStamp - this._joEvent.timeStamp < .8 * Ho(t) && this.__onclick(this._joEvent), this._onrelease(t));
                        break;
                    case "touchcancel":
                        this.__dragging = !1, this.__pinching = !1, this.__joMulTouchEvent = null
                }
                return !1
            },
            _handleEvent: function (t, i) {
                if (Yo(t)) return this._handleTouchEvent(t, i);
                if ("mousedown" == i) Y(t), qo(this), this._9f = Jo(t), this._joEvent || (this._joEvent = t, this._onstart(t)), this.__lcancelClick = !1, this.__joLongPress(t);
                else if ("mouseup" == i) qo(), this._onrelease(t);
                else if ("click" == i) {
                    if (this.__lcancelClick) return !0;
                    if (this._isDelayClick()) return this.__onclick(t), !0
                } else if ("dblclick" == i) {
                    if (this._isDelayClick()) return !0
                } else {
                    if ("contextmenu" == i) return this._onEvent(t, "oncontextmenu"), this._joEvent && Wo(t) && qo(this), !0;
                    if (i == jo) {
                        var n = t.wheelDelta;
                        if (n !== e ? n /= 120 : n = -t.detail, !n) return;
                        return t.delta = n, this._onEvent(t, "onmousewheel")
                    }
                }
                return !1
            },
            _onEvent: function (t, i) {
                if (this._handler) {
                    var e = this._handler;
                    if (i = i || t.type, e instanceof Function) return e(t, i);
                    if (!(e.accept instanceof Function && e.accept(i, t) === !1)) return e.onevent instanceof Function && e.onevent(i, t, this._scope || this._ko), e[i] instanceof Function ? e[i].call(e, t, this._scope || this._ko) : void 0
                }
            },
            _toQEvent: function (t) {
                return t
            },
            _onWindowMouseUp: function (t) {
                this.__dragging && (H(t), this.__dragging = !1, t = this._toQEvent(t), this._enddrag(t), this._onrelease(t), this._onEvent(t, "onmouseup"))
            },
            _joDragDistance: 4,
            _onWindowMouseMove: function (t) {
                if (this._joEvent) {
                    if (H(t), !this.__dragging) {
                        var i = this._joEvent.screenX - t.screenX,
                            e = this._joEvent.screenY - t.screenY;
                        if (i * i + e * e < this._joDragDistance) return;
                        this.__dragging = !0, this._jodrag(t)
                    }
                    this._ondrag(this._toQEvent(t))
                }
            },
            _isDelayClick: function () {
                return Zs.DELAY_CLICK
            },
            __onclick: function (t) {
                if (!this.__lcancelClick) {
                    var i = Ho(t);
                    this.__lclickTimer ? this.__dblclicked || (clearTimeout(this.__lclickTimer), this.__lclickTimer = null, this._onEvent(t, "ondblclick"), this.__dblclicked = !0) : (this.__dblclicked = !1, this.__lclickTimer = setTimeout(function (t) {
                        this.__lclickTimer = null, this.__dblclicked || this._onEvent(t, "onclick")
                    }.bind(this, t, i), i))
                }
            },
            _onstart: function (t) {
                t.button ? this._onEvent(t, "onstart2") : this._onEvent(t, "onstart")
            },
            _onrelease: function (t) {
                this._joEvent && (this._lcancelLongPressTimer(), t.button ? this._onEvent(t, "onrelease2") : this._onEvent(t, "onrelease"), this._joEvent = null, this._9f = null)
            },
            _lgppendDragInfo: function (t) {
                var i = this._9f;
                this._9f = Jo(t), this._dragPoints.add(i, this._9f, t)
            },
            _jodrag: function () {
                this.__lcancelClick = !0, this._lcancelLongPressTimer(), this._joEvent.button ? this._onEvent(this._joEvent, "startdrag2") : this._onEvent(this._joEvent, "startdrag")
            },
            _ondrag: function (t) {
                this._lgppendDragInfo(t), this._joEvent.button ? this._onEvent(t, "ondrag2") : this._onEvent(t, "ondrag")
            },
            _enddrag: function (t) {
                if (t.timeStamp - this._9f.timeStamp < 100) {
                    var i = this._dragPoints.getCurrentSpeed();
                    i && (t.vx = i.x, t.vy = i.y)
                }
                this._joEvent.button ? this._onEvent(t, "enddrag2") : this._onEvent(t, "enddrag"), this._dragPoints.clear()
            },
            _h8: function () {
                this._jwStatus()
            },
            _jwStatus: function () {
                Qo._lcurrentItem == this && delete Qo._lcurrentItem, this._lcancelLongPressTimer(), delete this._9f, this._joEvent && (delete this._joEvent.getData, delete this._joEvent.getUI, delete this._joEvent)
            }
        };
        var Qo = C(function (t) {
            this._jc = t, Oi.apply(this, [t.canvasPanel, null, t])
        }, {
            "super": Oi,
            _kwData: function (t) {
                return this._jc.getElementByMouseEvent(t)
            },
            _jy: function (t) {
                return this._jc.getUIByMouseEvent(t)
            },
            _toQEvent: function (i) {
                return (i instanceof MouseEvent || t.TouchEvent && i instanceof t.TouchEvent) && (i.getData = this._kwData.bind(this, i), i.getUI = this._jy.bind(this, i)), i
            },
            _onElementRemoved: function (t) {
                this._i5Listeners(function (i) {
                    i.onElementRemoved instanceof Function && i.onElementRemoved(t, this._jc)
                })
            },
            _onElementClear: function () {
                this._i5Listeners(function (t) {
                    t.onClear instanceof Function && t.onClear(this._jc)
                })
            },
            _h8: function (t) {
                this._26s && this._h8Interactions(this._26s, t), this._lcustomInteractionListeners && this._h8Interactions(this._lcustomInteractionListeners, t), this._jwStatus()
            },
            _jc: null,
            _26s: null,
            _lcustomInteractionListeners: null,
            _l2Interaction: function (t) {
                return this._26s == t ? !1 : (this._26s && this._26s.length && this._h8Interactions(this._26s), void(this._26s = t))
            },
            _kyCustomInteractionListener: function (t) {
                this._lcustomInteractionListeners || (this._lcustomInteractionListeners = []), this._lcustomInteractionListeners.push(t)
            },
            _j0CustomInteractionListener: function (t) {
                this._lcustomInteractionListeners && 0 != this._lcustomInteractionListeners.length && T(this._lcustomInteractionListeners, t)
            },
            _onEvent: function (t, i, e) {
                this._jc[i] instanceof Function && this._jc[i].call(this._jc, t, e), this._26s && this.__onEvent(t, i, this._26s, e), this._lcustomInteractionListeners && this.__onEvent(t, i, this._lcustomInteractionListeners, e)
            },
            _i5Listeners: function (t) {
                this._26s && g(this._26s, t, this), this._lcustomInteractionListeners && g(this._lcustomInteractionListeners, t, this)
            },
            __onEvent: function (t, i, e, n) {
                if (!z(e)) return void this.__handleEvent(t, i, e, n);
                for (var r = 0; r < e.length; r++) {
                    var s = e[r];
                    this.__handleEvent(t, i, s, n)
                }
            },
            __handleEvent: function (t, i, e, n) {
                if (!(e.accept instanceof Function && e.accept(i, t, this._jc, n) === !1)) {
                    e.onevent instanceof Function && e.onevent(i, t, this._jc, n);
                    var r = e[i];
                    r instanceof Function && r.call(e, t, this._jc, n)
                }
            },
            _h8Interaction: function (t) {
                t.destroy instanceof Function && t.destroy.call(t, this._jc)
            },
            _h8Interactions: function (t, i) {
                if (!z(t)) return void this._h8Interaction(t, i);
                for (var e = 0; e < t.length; e++) {
                    var n = t[e];
                    n && this._h8Interaction(n, i)
                }
            }
        })
    }
    Ai.prototype = {
        limitCount: 10,
        points: null,
        add: function (t, i, e) {
            0 == this.points.length && (this._joX = t.x, this._joY = t.y);
            var n = i.timeStamp - t.timeStamp || 1;
            e.interval = n;
            var r = i.x - t.x,
                s = i.y - t.y;
            e.dx = r, e.dy = s, e.startX = this._joX, e.startY = this._joY, e.totalDeltaX = i.x - this._joX, e.totalDeltaY = i.y - this._joY, this.points.splice(0, 0, {
                interval: n,
                dx: r,
                dy: s
            }), this.points.length > this.limitCount && this.points.pop()
        },
        getCurrentSpeed: function () {
            if (!this.points.length) return null;
            for (var t = 0, i = 0, e = 0, n = 0, r = this.points.length; r > n; n++) {
                var s = this.points[n],
                    o = s.interval;
                if (o > 150) {
                    t = 0;
                    break
                }
                if (t += o, i += s.dx, e += s.dy, t > 300) break
            }
            return 0 == t || 0 == i && 0 == e ? null : {
                x: i / t,
                y: e / t
            }
        },
        clear: function () {
            this.points = []
        }
    };
    var th, ih, eh, nh;
    Fs ? (th = "-webkit-zoom-in", ih = "-webkit-zoom-out", eh = "-webkit-grab", nh = "-webkit-grabbing") : $s ? (th = "-moz-zoom-in", ih = "-moz-zoom-out", eh = "-moz-grab", nh = "-moz-grabbing") : (th = "crosshair", ih = "crosshair", eh = "default", nh = "move");
    var rh = "url(data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAFVJREFUeNpi/P//PwMlgBGfAYyMIOn/jGQZANIMoskyAKYZGeAyiGgX4PIOSWGAzRBGUmMBw1CqGUBMlA1yA4gxhKhYwBnfpKQDqqREquRGYgBAgAEAD8h/4adTIzwAAAAASUVORK5CYII=) 8 8,crosshair",
        sh = Math.PI,
        oh = Math.pow,
        hh = Math.sin,
        ah = 1.70158,
        lh = {
            swing: function (t) {
                return -Math.cos(t * sh) / 2 + .5
            },
            easeNone: function (t) {
                return t
            },
            easeIn: function (t) {
                return t * t
            },
            easeOut: function (t) {
                return (2 - t) * t
            },
            easeBoth: function (t) {
                return (t *= 2) < 1 ? .5 * t * t : .5 * (1 - --t * (t - 2))
            },
            easeInStrong: function (t) {
                return t * t * t * t
            },
            easeOutStrong: function (t) {
                return 1 - --t * t * t * t
            },
            easeBothStrong: function (t) {
                return (t *= 2) < 1 ? .5 * t * t * t * t : .5 * (2 - (t -= 2) * t * t * t)
            },
            elasticIn: function (t) {
                var i = .3,
                    e = i / 4;
                return 0 === t || 1 === t ? t : -(oh(2, 10 * (t -= 1)) * hh(2 * (t - e) * sh / i))
            },
            elasticOut: function (t) {
                var i = .3,
                    e = i / 4;
                return 0 === t || 1 === t ? t : oh(2, -10 * t) * hh(2 * (t - e) * sh / i) + 1
            },
            elasticBoth: function (t) {
                var i = .45,
                    e = i / 4;
                return 0 === t || 2 === (t *= 2) ? t : 1 > t ? -.5 * oh(2, 10 * (t -= 1)) * hh(2 * (t - e) * sh / i) : oh(2, -10 * (t -= 1)) * hh(2 * (t - e) * sh / i) * .5 + 1
            },
            backIn: function (t) {
                return 1 === t && (t -= .001), t * t * ((ah + 1) * t - ah)
            },
            backOut: function (t) {
                return (t -= 1) * t * ((ah + 1) * t + ah) + 1
            },
            backBoth: function (t) {
                return (t *= 2) < 1 ? .5 * t * t * (((ah *= 1.525) + 1) * t - ah) : .5 * ((t -= 2) * t * (((ah *= 1.525) + 1) * t + ah) + 2)
            },
            bounceIn: function (t) {
                return 1 - lh.bounceOut(1 - t)
            },
            bounceOut: function (t) {
                var i, e = 7.5625;
                return i = 1 / 2.75 > t ? e * t * t : 2 / 2.75 > t ? e * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? e * (t -= 2.25 / 2.75) * t + .9375 : e * (t -= 2.625 / 2.75) * t + .984375
            },
            bounceBoth: function (t) {
                return .5 > t ? .5 * lh.bounceIn(2 * t) : .5 * lh.bounceOut(2 * t - 1) + .5
            }
        },
        _h = function (t) {
            this._iz = t
        };
    _h.prototype = {
        _iz: null,
        _80: function () {
            this._lcallback instanceof Function && (this._lcallback(), this._lcallback = null)
        },
        _jo: function (t) {
            var i = Date.now();
            this._k9(), this._lcallback = t, this._requestID = requestAnimationFrame(function e() {
                var t = Date.now(),
                    n = t - i;
                return !n || this._iz && this._iz(n) !== !1 ? (i = t, void(this._requestID = requestAnimationFrame(e.bind(this)))) : void this._k9()
            }.bind(this))
        },
        _5v: function () {},
        _k9: function () {
            return this._requestID ? (this._5v(), this._80(), t.cancelAnimationFrame(this._requestID), void delete this._requestID) : !1
        },
        _e2: function () {
            return null != this._requestID
        }
    };
    var uh = function (t, i, e, n) {
        this._onStep = t, this._scope = i || this, this._3d = n, e && e > 0 && (this._hf = e)
    };
    uh.prototype = {
        _hf: 1e3,
        _3d: null,
        _e4: 0,
        _k9: function () {
            return this._e4 = 0, this._lex = 0, L(this, uh, "_k9")
        },
        _lex: 0,
        _iz: function (t) {
            if (this._e4 += t, this._e4 >= this._hf) return this._onStep.call(this._scope, 1, (1 - this._lex) * this._hf, t, this._hf), !1;
            var i = this._e4 / this._hf;
            return this._3d && (i = this._3d(i)), this._onStep.call(this._scope, i, (i - this._lex) * this._hf, t, this._hf) === !1 ? !1 : void(this._lex = i)
        }
    }, A(uh, _h);
    var ch = function (t) {
            ri(t)
        },
        dh = {
            version: "0.0",
            extend: A,
            doSuperConstructor: b,
            doSuper: L,
            createFunction: function (t, i) {
                return i.bind(t)
            },
            setClass: M,
            appendClass: B,
            removeClass: k,
            forEach: g,
            forEachReverse: E,
            isNumber: G,
            isString: F,
            isBoolean: $,
            isArray: z,
            eventPreventDefault: j,
            eventStopPropagation: Y,
            stopEvent: H,
            callLater: P,
            nextFrame: N,
            forEachChild: n,
            forEachByDepthFirst: s,
            forEachByDepthFirstReverse: l,
            forEachByBreadthFirst: c,
            randomInt: U,
            randomBool: W,
            randomColor: V,
            addEventListener: Bo,
            getFirstElementChildByTagName: to
        };
    dh.isTouchSupport = Vs, dh.isIOS = Us, dh.intersectsPoint = ai, dh.containsRect = li, dh.Rect = so, dh.Size = ro, dh.Point = io, dh.Insets = oo, dh.Event = Eo, dh.PropertyChangeEvent = po, dh.ListEvent = So, dh.Handler = wo, dh.Dispatcher = Ao, dh.Position = ho, dh.Data = Io, dh.SelectionModel = Ro, dh.DataModel = Co, dh.IListener = Lo, dh.loadURL = Si, dh.loadXML = bi, dh.loadJSON = Li, dh.isMetaKey = wi, dh.calculateDistance = eo, dh.HashList = Js, dh.DragSupport = Oi, dh.alert = function (t) {
        alert(t)
    }, dh.prompt = function (t, i, e, n) {
        var r = prompt(t, i);
        return r != i && e ? e.call(n, r) : r
    }, dh.confirm = function (t, i, e) {
        var n = confirm(t);
        return n && i ? i.call(e) : n
    }, dh.addCSSRule = Ti;
    var fh = {
        IMAGE_ADJUST_FLIP: "flip",
        IMAGE_ADJUST_MIRROR: "mirror",
        SELECTION_TYPE_BORDER_RECT: "border.rect",
        SELECTION_TYPE_BORDER: "border",
        SELECTION_TYPE_SHADOW: "shadow",
        NS_SVG: "http://www.w3.org/2000/svg",
        PROPERTY_TYPE_ACCESSOR: 0,
        PROPERTY_TYPE_STYLE: 1,
        PROPERTY_TYPE_CLIENT: 2,
        EDGE_TYPE_DEFAULT: null,
        EDGE_TYPE_ELBOW: "elbow",
        EDGE_TYPE_ELBOW_HORIZONTAL: "elbow.H",
        EDGE_TYPE_ELBOW_VERTICAL: "elbow.V",
        EDGE_TYPE_ORTHOGONAL: "orthogonal",
        EDGE_TYPE_ORTHOGONAL_HORIZONTAL: "orthogonal.H",
        EDGE_TYPE_ORTHOGONAL_VERTICAL: "orthogonal.V",
        EDGE_TYPE_HORIZONTAL_VERTICAL: "orthogonal.H.V",
        EDGE_TYPE_VERTICAL_HORIZONTAL: "orthogonal.V.H",
        EDGE_TYPE_EXTEND_TOP: "extend.top",
        EDGE_TYPE_EXTEND_LEFT: "extend.left",
        EDGE_TYPE_EXTEND_BOTTOM: "extend.bottom",
        EDGE_TYPE_EXTEND_RIGHT: "extend.right",
        EDGE_TYPE_ZIGZAG: "zigzag",
        EDGE_CORNER_NONE: "none",
        EDGE_CORNER_ROUND: "round",
        EDGE_CORNER_BEVEL: "bevel",
        GROUP_TYPE_RECT: "rect",
        GROUP_TYPE_CIRCLE: "circle",
        GROUP_TYPE_ELLIPSE: "ELLIPSE",
        SHAPE_CIRCLE: "oval",
        SHAPE_RECT: "rect",
        SHAPE_ROUNDRECT: "roundrect",
        SHAPE_STAR: "star",
        SHAPE_TRIANGLE: "triangle",
        SHAPE_HEXAGON: "hexagon",
        SHAPE_PENTAGON: "pentagon",
        SHAPE_TRAPEZIUM: "trapezium",
        SHAPE_RHOMBUS: "rhombus",
        SHAPE_PARALLELOGRAM: "parallelogram",
        SHAPE_HEART: "heart",
        SHAPE_DIAMOND: "diamond",
        SHAPE_CROSS: "cross",
        SHAPE_ARROW_STANDARD: "arrow.standard",
        SHAPE_ARROW_1: "arrow.1",
        SHAPE_ARROW_2: "arrow.2",
        SHAPE_ARROW_3: "arrow.3",
        SHAPE_ARROW_4: "arrow.4",
        SHAPE_ARROW_5: "arrow.5",
        SHAPE_ARROW_6: "arrow.6",
        SHAPE_ARROW_7: "arrow.7",
        SHAPE_ARROW_8: "arrow.8",
        SHAPE_ARROW_OPEN: "arrow.open"
    };
    fh.LINE_CAP_TYPE_BUTT = "butt", fh.LINE_CAP_TYPE_ROUND = "round", fh.LINE_CAP_TYPE_SQUARE = "square", fh.LINE_JOIN_TYPE_BEVEL = "bevel", fh.LINE_JOIN_TYPE_ROUND = "round", fh.LINE_JOIN_TYPE_MITER = "miter", Zs.SELECTION_TYPE = fh.SELECTION_TYPE_SHADOW, Zs.SELECTION_TOLERANCE = zo ? 8 : 3, Zs.SELECTION_BORDER = 2, Zs.SELECTION_SHADOW_BLUR = 7, Zs.SELECTION_COLOR = Z(3422561023), Zs.SELECTION_TYPE = fh.SELECTION_TYPE_SHADOW, Zs.BORDER_RADIUS = 10, Zs.POINTER_WIDTH = 10, Zs.ARROW_SIZE = 10, Zs.IMAGE_MAX_SIZE = 200, Zs.LINE_HEIGHT = 1.2;
    var gh = t.devicePixelRatio || 1;
    1 > gh && (gh = 1);
    var vh;
    dh.createCanvas = Mi;
    var Eh = js && !Vs,
        ph = 9,
        yh = function (t, i, e, n) {
            var r = t - e,
                s = i - n;
            return r * r + s * s
        };
    ne.prototype = {
        equals: function (t) {
            return this.cx == t.cx && this.cy == t.cy && this.r == t.r
        }
    }, ne._lcreateCircle = function (t, i, e) {
        if (!e) return ie(t, i);
        var n = yh(t.x, t.y, i.x, i.y),
            r = yh(t.x, t.y, e.x, e.y),
            s = yh(e.x, e.y, i.x, i.y);
        if (n + Th >= r + s) return ie(t, i, 0, e);
        if (r + Th >= n + s) return ie(t, e, 0, i);
        if (s + Th >= n + r) return ie(i, e, 0, t);
        var o;
        Math.abs(e.y - i.y) < 1e-4 && (o = t, t = i, i = o), o = e.x * (t.y - i.y) + t.x * (i.y - e.y) + i.x * (-t.y + e.y);
        var h = (e.x * e.x * (t.y - i.y) + (t.x * t.x + (t.y - i.y) * (t.y - e.y)) * (i.y - e.y) + i.x * i.x * (-t.y + e.y)) / (2 * o),
            a = (i.y + e.y) / 2 - (e.x - i.x) / (e.y - i.y) * (h - (i.x + e.x) / 2);
        return new ne(h, a, eo(h, a, t.x, t.y), t, i, e)
    };
    var Th = .01,
        mh = {
            _le1: function (t, i, n, r, s) {
                if (F(t) && (t = ho.fromString(t)), !t) return {
                    x: 0,
                    y: 0
                };
                var o = 0,
                    h = 0,
                    a = i._i8;
                if (n = n || 0, t.x === e) {
                    var l = t.horizontalPosition,
                        _ = t.verticalPosition,
                        u = !0;
                    switch (l) {
                        case _o:
                            u = !1;
                            break;
                        case lo:
                            o += a / 2
                    }
                    switch (_) {
                        case uo:
                            h -= n / 2;
                            break;
                        case fo:
                            h += n / 2
                    }
                } else o = t.x, h = t.y, Math.abs(o) > 0 && Math.abs(o) < 1 && (o *= a);
                s && null != r && (h += r.y, o += Math.abs(r.x) < 1 ? r.x * a : r.x);
                var c = ue.call(i, o, h, u);
                return c ? (s || null == r || c.offset(r), c) : {
                    x: 0,
                    y: 0
                }
            },
            _k4: function (t, i) {
                var e = i.type,
                    n = i.points;
                switch (e) {
                    case Xh:
                        t.arcTo(n[0], n[1], n[2], n[3], i._r);
                        break;
                    case Yh:
                        t.moveTo(n[0], n[1]);
                        break;
                    case Hh:
                        t.lineTo(n[0], n[1]);
                        break;
                    case Uh:
                        t.quadraticCurveTo(n[0], n[1], n[2], n[3]);
                        break;
                    case Wh:
                        t.bezierCurveTo(n[0], n[1], n[2], n[3], n[4], n[5]);
                        break;
                    case Vh:
                        t.closePath()
                }
            },
            _55: function (t, i, e, n) {
                var r = i.type;
                if (r != Yh && r != Vh) {
                    var s = e.lastPoint,
                        o = i.points;
                    switch (e.type == Yh && t.add(s.x, s.y), r) {
                        case Xh:
                            fe(i, s.x, s.y, o[0], o[1], o[2], o[3], o[4]), t.add(o[0], o[1]), t.add(i._p1x, i._p1y), t.add(i._p2x, i._p2y), i.$boundaryPoint1 && t.add(i.$boundaryPoint1.x, i.$boundaryPoint1.y), i.$boundaryPoint2 && t.add(i.$boundaryPoint2.x, i.$boundaryPoint2.y);
                            break;
                        case Hh:
                            t.add(o[0], o[1]);
                            break;
                        case Uh:
                            Ui([s.x, s.y].concat(o), t);
                            break;
                        case Wh:
                            Zi([s.x, s.y].concat(o), t);
                            break;
                        case Vh:
                            n && t.add(n.points[0], n.points[1])
                    }
                }
            },
            _57: function (t, i, e) {
                var n = t.type;
                if (n == Yh) return 0;
                var r = i.lastPoint,
                    s = t.points;
                switch (n == Wh && 4 == s.length && (n = Uh), n) {
                    case Hh:
                        return eo(s[0], s[1], r.x, r.y);
                    case Xh:
                        return t._i8;
                    case Uh:
                        var o = Vi([r.x, r.y].concat(s));
                        return t._lf = o, o(1);
                    case Wh:
                        var o = Qi([r.x, r.y].concat(s));
                        return t._lf = o, o(1) || Ji([r.x, r.y].concat(s));
                    case Vh:
                        if (r && e) return t.points = e.points, eo(e.points[0], e.points[1], r.x, r.y)
                }
                return 0
            }
        },
        Oh = /^data:image\/(\w+);base64,/i,
        wh = /^gif/i,
        Ah = /^svg/i,
        bh = 10,
        Lh = 11,
        Sh = 12,
        Ih = 20,
        xh = 30;
    Zs.IMAGE_WIDTH = 50, Zs.IMAGE_HEIGHT = 30, Zs.MAX_CACHE_PIXELS = 1e6;
    var Ch = 1,
        Rh = 2,
        Dh = 3;
    ye.prototype = {
        _il: 0,
        _5z: !0,
        _jl: null,
        _ih: null,
        _k7: null,
        _k6: null,
        _lgu: e,
        _8p: e,
        _6t: function () {
            return this._il == Ch
        },
        getBounds: function (t) {
            return this._k6 == xh ? this._k7.getBounds(t) : (this._5z && this._em(), this)
        },
        validate: function () {
            this._5z && this._em()
        },
        _em: function () {
            if (this._5z = !1, this._k6 == xh) return this._k7.validate(), void this.setByRect(this._k7.bounds);
            if (this._k6 == Ih) return void this._8t();
            if (this._il != Ch) try {
                this._lcz()
            } catch (t) {
                this._il = Dh, dh.error(t)
            }
        },
        _5g: function () {
            this._lcu(), this._dispatcher.clear(), delete this._dispatcher
        },
        _hd: function (t) {
            this._jl && this._jl.parentNode && this._jl.parentNode.removeChild(this._jl), this._il = Dh, dh.error("Image load error - " + this._k7), this._pixels = null, this._ih = null, this._jl = null, t !== !1 && this._5g()
        },
        _lcz: function () {
            var t = this._k7;
            if (this._il = Ch, this._dispatcher = new Ao, this._k6 == Sh) {
                for (var e in ra) this[e] = ra[e];
                return void Ze(this._k7, this, this._lcg, this._hd, this._ei)
            }
            this._jl || (this._jl = i.createElement("img"), Bs && (this._jl.style.visibility = "hidden", i.body.appendChild(this._jl))), this._jl.src = t, this._jl.width && (this.width = this._jl.width, this.height = this._jl.height), this._jl.onload = Bs ? function (t) {
                setTimeout(this._7j.bind(this, t), 100)
            }.bind(this) : this._7j.bind(this), this._jl.onerror = this._hd.bind(this)
        },
        _7j: function () {
            this._il = Rh;
            var t = this._jl.width,
                i = this._jl.height;
            if (this._jl.parentNode && this._jl.parentNode.removeChild(this._jl), !t || !i) return void this._hd();
            this.width = t, this.height = i;
            var e = this._lcx();
            e.width = t, e.height = i, e.g.drawImage(this._jl, 0, 0, t, i), this._pixels = Bs && this._k6 == Lh ? null : Le(e), this._5g()
        },
        _8t: function () {
            var t = this._k7;
            if (!(t.draw instanceof Function)) return void this._hd(!1);
            if (t.cacheable === !1 && t.width && t.height) return this.width = t.width, void(this.height = t.height);
            var i = t.width || Zs.IMAGE_MAX_SIZE,
                e = t.height || Zs.IMAGE_MAX_SIZE,
                n = this._lcx();
            n.width = i, n.height = e;
            var r = n.g;
            t.draw(r);
            var s = $i(r, 0, 0, i, e);
            if (s) {
                var o = Ie(s.data, i, e);
                this.x = o._x, this.y = o._y, this.width = o._width, this.height = o._height, n.width = this.width, n.height = this.height, r.putImageData(s, -this.x, -this.y), this._pixels = o
            }
        },
        _lcx: function () {
            return this._ih || (this._ih = Mi())
        },
        _6o: function (t, i, e, n, r, s) {
            i.save(), i.rect(0, 0, n, r), i.fillStyle = s || "#CCC", i.fill(), i.clip(), i.textAlign = "center", i.textBaseline = "middle", i.fillStyle = "#888";
            var o = 6 * (i.canvas.ratio || 1);
            i.font = "normal " + o + "px Verdana,helvetica,arial,sans-serif", i.strokeStyle = "#FFF", i.lineWidth = 1, i.strokeText(t, n / 2 + .5, r / 2 + .5), i.strokeStyle = "#000", i.strokeText(t, n / 2 - .5, r / 2 - .5), i.fillText(t, n / 2, r / 2), i.restore()
        },
        draw: function (t, i, e, n, r, s) {
            if (this.width && this.height) {
                i = i || 1, n = n || 1, r = r || 1;
                var o = this.width * n,
                    h = this.height * r;
                if (s && e.shadowColor && (t.shadowColor = e.shadowColor, t.shadowBlur = (e.shadowBlur || 0) * i, t.shadowOffsetX = (e.shadowOffsetX || 0) * i, t.shadowOffsetY = (e.shadowOffsetY || 0) * i), this._il == Ch) return this._6o("Loading...", t, i, o, h, e.renderColor);
                if (this._il == Dh) return this._6o("Error...", t, i, o, h, e.renderColor);
                if (this._k6 == xh) return t.scale(n, r), void this._k7.draw(t, i, e);
                var a = this._f0(i, n, r);
                return a ? ((this.x || this.y) && t.translate(this.x * n, this.y * r), t.scale(n / a.scale, r / a.scale), void a._k4(t, e.renderColor, e.renderColorBlendMode)) : void this._i7(t, i, n, r, this.width * n, this.height * r, e)
            }
        },
        _i7: function (t, i, e, n, r, s, o) {
            if (this._k6 == Ih) return 1 != e && 1 != n && t.scale(e, n), void this._k7.draw(t, o);
            if (this._jl) {
                if (!zs) return void t.drawImage(this._jl, 0, 0, r, s);
                var e = i * r / this.width,
                    n = i * s / this.height;
                t.scale(1 / e, 1 / n), t.drawImage(this._jl, 0, 0, r * e, s * n)
            }
        },
        _ii: null,
        _f0: function (t, i, e) {
            if (this._k6 == Ih && this._k7.cacheable === !1) return null;
            if (this._k6 == bh || (t *= Math.max(i, e)) <= 1) return this._defaultCache || (this._defaultCache = this._et(this._ih || this._jl, 1)), this._defaultCache;
            var n = this._ii.maxScale || 0;
            if (t = Math.ceil(t), n >= t) {
                for (var r = t, s = this._ii[r]; !s && ++r <= n;) s = this._ii[r];
                if (s) return s
            }
            t % 2 && t++;
            var o = this.width * t,
                h = this.height * t;
            if (o * h > Zs.MAX_CACHE_PIXELS) return null;
            var a = Mi(o, h);
            return (this.x || this.y) && a.g.translate(-this.x * t, -this.y * t), this._i7(a.g, 1, t, t, o, h), this._et(a, t)
        },
        _et: function (t, i) {
            var e = new Jh(t, i);
            return this._ii[i] = e, this._ii.maxScale = i, e
        },
        hitTest: function (t, i, e) {
            if (this._k6 == xh) return this._k7.hitTest.apply(this._k7, arguments);
            if (!(this._pixels || this._jl && this._jl._pixels)) return !0;
            var n = this._pixels || this._jl._pixels;
            return n._h7(t, i, e)
        },
        _lcu: function () {
            this._dispatcher && this._dispatcher.onEvent(new Eo(this, "image", "load", this._jl))
        },
        _lgk: function (t, i) {
            this._dispatcher && this._dispatcher.addListener(t, i)
        },
        _6e: function (t, i) {
            this._dispatcher && this._dispatcher.removeListener(t, i)
        },
        _lc0: function (t) {
            this._ii = {}, (t || this.width * this.height > 1e5) && (this._jl = null, this._ih = null)
        }
    }, A(ye, so);
    var Ph = {};
    dh.drawImage = Ae, dh.registerImage = Te, dh.hasImage = Oe, dh.getAllImages = function () {
        var t = [];
        for (var i in Ph) t.push(i);
        return t
    };
    var Nh = function (t, i, e, n, r, s) {
        this.type = t, this.colors = i, this.positions = e, this.angle = n || 0, this.tx = r || 0, this.ty = s || 0
    };
    fh.GRADIENT_TYPE_RADIAL = "r", fh.GRADIENT_TYPE_LINEAR = "l", Nh.prototype = {
        type: null,
        colors: null,
        positions: null,
        angle: null,
        tx: 0,
        ty: 0,
        position: ho.CENTER_MIDDLE,
        isEmpty: function () {
            return null == this.colors || 0 == this.colors.length
        },
        _78: function () {
            var t = this.colors.length;
            if (1 == t) return [0];
            for (var i = [], e = 1 / (t - 1), n = 0; t > n; n++) i.push(e * n);
            return this.positions || (this.positions = i), i
        },
        generatorGradient: function (t) {
            if (null == this.colors || 0 == this.colors.length) return null;
            var i, e = Bi();
            if (this.type == fh.GRADIENT_TYPE_LINEAR) {
                var n = this.angle;
                n > Math.PI && (n -= Math.PI);
                var r;
                if (n <= Math.PI / 2) {
                    var s = Math.atan2(t.height, t.width),
                        o = Math.sqrt(t.width * t.width + t.height * t.height),
                        h = s - n;
                    r = Math.cos(h) * o
                } else {
                    var s = Math.atan2(t.width, t.height),
                        o = Math.sqrt(t.width * t.width + t.height * t.height),
                        h = s - (n - Math.PI / 2);
                    r = Math.cos(h) * o
                }
                var a = r / 2,
                    l = a * Math.cos(n),
                    _ = a * Math.sin(n),
                    u = t.x + t.width / 2 - l,
                    c = t.y + t.height / 2 - _,
                    d = t.x + t.width / 2 + l,
                    f = t.y + t.height / 2 + _;
                i = e.createLinearGradient(u, c, d, f)
            } else {
                if (!(this.type = fh.GRADIENT_TYPE_RADIAL)) return null;
                var g = ci(this.position, t.width, t.height);
                g.x += t.x, g.y += t.y, this.tx && (g.x += Math.abs(this.tx) < 1 ? t.width * this.tx : this.tx), this.ty && (g.y += Math.abs(this.ty) < 1 ? t.height * this.ty : this.ty);
                var v = eo(g.x, g.y, t.x, t.y);
                v = Math.max(v, eo(g.x, g.y, t.x, t.y + t.height)), v = Math.max(v, eo(g.x, g.y, t.x + t.width, t.y + t.height)), v = Math.max(v, eo(g.x, g.y, t.x + t.width, t.y)), i = e.createRadialGradient(g.x, g.y, 0, g.x, g.y, v)
            }
            var E = this.colors,
                p = this.positions;
            p && p.length == E.length || (p = this._78());
            for (var y = 0, T = E.length; T > y; y++) i.addColorStop(p[y], E[y]);
            return i
        }
    };
    var Mh = new Nh(fh.GRADIENT_TYPE_LINEAR, [Z(2332033023), Z(1154272460), Z(1154272460), Z(1442840575)], [.1, .3, .7, .9], Math.PI / 2),
        Bh = new Nh(fh.GRADIENT_TYPE_LINEAR, [Z(2332033023), Z(1154272460), Z(1154272460), Z(1442840575)], [.1, .3, .7, .9], 0),
        kh = (new Nh(fh.GRADIENT_TYPE_LINEAR, [Z(1154272460), Z(1442840575)], [.1, .9], 0), new Nh(fh.GRADIENT_TYPE_RADIAL, [Z(2298478591), Z(1156509422), Z(1720223880), Z(1147561574)], [.1, .3, .7, .9], 0, -.3, -.3)),
        Gh = [Z(0), Z(4294901760), Z(4294967040), Z(4278255360), Z(4278250239), Z(4278190992), Z(4294901958), Z(0)],
        Fh = [0, .12, .28, .45, .6, .75, .8, 1],
        $h = new Nh(fh.GRADIENT_TYPE_LINEAR, Gh, Fh),
        zh = new Nh(fh.GRADIENT_TYPE_LINEAR, Gh, Fh, Math.PI / 2),
        jh = new Nh(fh.GRADIENT_TYPE_RADIAL, Gh, Fh);
    Nh.LINEAR_GRADIENT_VERTICAL = Mh, Nh.LINEAR_GRADIENT_HORIZONTAL = Bh, Nh.RADIAL_GRADIENT = kh, Nh.RAINBOW_LINEAR_GRADIENT = $h, Nh.RAINBOW_LINEAR_GRADIENT_VERTICAL = zh, Nh.RAINBOW_RADIAL_GRADIENT = jh;
    var Yh = "m",
        Hh = "l",
        Uh = "q",
        Wh = "c",
        Xh = "a",
        Vh = "z";
    fh.SEGMENT_MOVE_TO = Yh, fh.SEGMENT_LINE_TO = Hh, fh.SEGMENT_QUAD_TO = Uh, fh.SEGMENT_CURVE_TO = Wh, fh.SEGMENT_ARC_TO = Xh, fh.SEGMENT_CLOSE = Vh;
    var qh = function (t, i) {
        this.id = ++Ps, z(t) ? this.points = t : (this.type = t, this.points = i)
    };
    qh.prototype = {
        toJSON: function () {
            var t = {
                type: this.type,
                points: this.points
            };
            return this.invalidTerminal && (t.invalidTerminal = !0), t
        },
        parseJSON: function (t) {
            this.type = t.type, this.points = t.points, this.invalidTerminal = t.invalidTerminal
        },
        points: null,
        type: Hh,
        clone: function () {
            return new qh(this.type, this.points ? p(this.points) : null)
        },
        move: function (t, i) {
            if (this.points)
                for (var e = 0, n = this.points.length; n > e; e++) {
                    var r = this.points[e];
                    dh.isNumber(r) && (this.points[e] += e % 2 == 0 ? t : i)
                }
        }
    }, Q(qh.prototype, {
        lastPoint: {
            get: function () {
                return this.type == Xh ? {
                    x: this._p2x,
                    y: this._p2y
                } : {
                    x: this.points[this.points.length - 2],
                    y: this.points[this.points.length - 1]
                }
            }
        },
        firstPoint: {
            get: function () {
                return {
                    x: this.points[0],
                    y: this.points[1]
                }
            }
        }
    }), dh.PathSegment = qh;
    var Kh = 0,
        Zh = function (t) {
            this.bounds = new so, this._ep = t || []
        };
    Zh.prototype = {
        toJSON: function () {
            var t = [];
            return this._ep.forEach(function (i) {
                t.push(i.toJSON())
            }), t
        },
        parseJSON: function (t) {
            var i = this._ep;
            t.forEach(function (t) {
                i.push(new qh(t.type, t.points))
            })
        },
        clear: function () {
            this._ep.length = 0, this.bounds.clear(), this._i8 = 0, this._5z = !0
        },
        _lcw: !0,
        _5q: function (t, i) {
            this._lcw && 0 === this._ep.length && t != Yh && this._ep.push(new qh(Yh, [0, 0])), this._ep.push(new qh(t, i)), this._5z = !0
        },
        add: function (t, i) {
            y(this._ep, t, i), this._5z = !0
        },
        removePathSegment: function (t) {
            return t >= this._ep.length ? !1 : (this._ep.splice(t, 1), void(this._5z = !0))
        },
        moveTo: function (t, i) {
            this._5q(Yh, [t, i])
        },
        lineTo: function (t, i) {
            this._5q(Hh, [t, i])
        },
        quadTo: function (t, i, e, n) {
            this._5q(Uh, [t, i, e, n])
        },
        curveTo: function (t, i, e, n, r, s) {
            this._5q(Wh, [t, i, e, n, r, s])
        },
        arcTo: function (t, i, e, n, r) {
            this._5q(Xh, [t, i, e, n, r])
        },
        closePath: function () {
            this._5q(Vh)
        },
        _7l: function (t, i, e, n, r) {
            if (n.selectionColor) {
                if (e == fh.SELECTION_TYPE_SHADOW) {
                    if (!n.selectionShadowBlur) return;
                    return t.shadowColor = n.selectionColor, t.shadowBlur = n.selectionShadowBlur * i, t.shadowOffsetX = (n.selectionShadowOffsetX || 0) * i, void(t.shadowOffsetY = (n.selectionShadowOffsetY || 0) * i)
                }
                if (e == fh.SELECTION_TYPE_BORDER) {
                    if (!n.selectionBorder) return;
                    t.strokeStyle = n.selectionColor;
                    var s = r.lineWidth || 0;
                    r.outline && (s += 2 * r.outline), t.lineWidth = n.selectionBorder + s, this._k4(t), t.stroke()
                }
            }
        },
        _5z: !0,
        _ep: null,
        _i8: 0,
        lineCap: "butt",
        lineJoin: "round",
        draw: function (t, i, e, n, r) {
            t.lineCap = e.lineCap || this.lineCap, t.lineJoin = e.lineJoin || this.lineJoin, n && (r || (r = e), this._7l(t, i, r.selectionType, r, e));
            var s = n && r.selectionType == fh.SELECTION_TYPE_SHADOW;
            e.outlineStyle && (this._k4(t), t.lineWidth = e.lineWidth + 2 * (e.outline || 0), t.strokeStyle = e.outlineStyle, t.stroke(), s && (s = !1, t.shadowColor = "rgba(0,0,0,0)")), t.lineWidth = 0, this._k4(t), e.fillColor && (t.fillStyle = e.renderColor || e.fillColor, t.fill()), e.fillGradient && (t.fillStyle = e._fillGradient || e.fillGradient, t.fill()), e.lineWidth && (t.lineWidth = e.lineWidth, e.lineDash && (e.lineFillColor && (t.strokeStyle = e.lineFillColor, t.stroke(), s && (t.shadowColor = "rgba(0,0,0,0)")), t.lineCap = e.lineDashCap || t.lineCap, t.lineJoin = e.lineDashJoin || t.lineJoin, t.lineDash = e.lineDash, t.lineDashOffset = e.lineDashOffset), t.strokeStyle = e.renderColor || e.strokeStyle, t.stroke(), t.lineDash = [])
        },
        _k4: function (t) {
            t.beginPath();
            for (var i, e, n = 0, r = this._ep.length; r > n; n++) i = this._ep[n], mh._k4(t, i, e), e = i
        },
        invalidate: function () {
            this._5z = !0
        },
        validate: function () {
            if (this._5z = !1, this.bounds.clear(), this._i8 = 0, 0 != this._ep.length)
                for (var t, i, e = this._ep, n = 1, r = e[0], s = r, o = e.length; o > n; n++) t = e[n], t.type == Yh ? s = t : (mh._55(this.bounds, t, r, s), i = mh._57(t, r, s), t._i8 = i, this._i8 += i), r = t
        },
        getBounds: function (t, i) {
            if (this._5z && this.validate(), i = i || new so, t) {
                var e = t / 2;
                i.set(this.bounds.x - e, this.bounds.y - e, this.bounds.width + t, this.bounds.height + t)
            } else i.set(this.bounds.x, this.bounds.y, this.bounds.width, this.bounds.height);
            return i
        },
        hitTest: function (t, i, e, n, r, s) {
            return _e.call(this, t, i, e, n, r, s)
        },
        toSegments: function () {
            return [].concat(this._ep)
        },
        generator: function (t, i, e, n, r) {
            return le.call(this, t, i, e, n, r)
        },
        getLocation: function (t, i) {
            return ue.call(this, t, i || 0)
        }
    }, Q(Zh.prototype, {
        segments: {
            get: function () {
                return this._ep
            },
            set: function (t) {
                this.clear(), this._ep = t
            }
        },
        length: {
            get: function () {
                return this._5z && this.validate(), this._i8
            }
        },
        _empty: {
            get: function () {
                return 0 == this._ep.length
            }
        }
    }), Se.prototype = {
        _15: function (t, i) {
            var e, n, r, s, o, h = t.length,
                a = 0,
                l = 0;
            for (o = 0; h > o; o += 4)
                if (t[o + 3] > 0) {
                    e = (o + 4) / i / 4 | 0;
                    break
                }
            for (o = h - 4; o >= 0; o -= 4)
                if (t[o + 3] > 0) {
                    n = (o + 4) / i / 4 | 0;
                    break
                }
            for (a = 0; i > a; a++) {
                for (l = e; n > l; l++)
                    if (t[l * i * 4 + 4 * a + 3] > 0) {
                        r = a;
                        break
                    }
                if (r >= 0) break
            }
            for (a = i - 1; a >= 0; a--) {
                for (l = e; n > l; l++)
                    if (t[l * i * 4 + 4 * a + 3] > 0) {
                        s = a;
                        break
                    }
                if (s >= 0) break
            }
            this._x = r, this._y = e, this._width = s - r + 1, this._height = n - e + 1, this._ij = new so(r, e, this._width, this._height), this._pixelSize = this._width * this._height, this._originalPixelsWidth = i, this._originalPixels = t
        },
        _ea: function (t, i) {
            return this._originalPixels[4 * (t + this._x + (this._y + i) * this._originalPixelsWidth) + 3]
        },
        _h7: function (t, i, e) {
            (!e || 1 >= e) && (e = 1), e = 0 | e, t = Math.round(t - this._x) - e, i = Math.round(i - this._y) - e, e += e;
            for (var n = t, r = i; i + e > r;) {
                for (var n = t; t + e > n;) {
                    if (this._ea(n, r)) return !0;
                    ++n
                }++r
            }
            return !1
        }
    }, fh.BLEND_MODE_DARKEN = "darken", fh.BLEND_MODE_MULTIPLY = "multiply", fh.BLEND_MODE_COLOR_BURN = "color.burn", fh.BLEND_MODE_LINEAR_BURN = "linear.burn", fh.BLEND_MODE_LIGHTEN = "lighten", fh.BLEND_MODE_SCREEN = "screen", fh.BLEND_MODE_GRAY = "gray", Zs.BLEND_MODE = fh.BLEND_MODE_LINEAR_BURN;
    var Jh = function (t, i, e) {
        this._ih = t, this.scale = i || 1, t instanceof Image && (e = !1), this._hp = e
    };
    Jh.prototype = {
        scale: 1,
        _ih: null,
        _ii: null,
        _hp: !0,
        _k4: function (t, i, e) {
            if (i && (i = xe(i)), !i || this._hp === !1) return void t.drawImage(this._ih, 0, 0);
            this._ii || (this._ii = {});
            var n = i + e,
                r = this._ii[n];
            if (r || (r = Re(this._ih, i, e), r || (this._hp = !1), this._ii[n] = r || this._ih), r)
                if (Bs) try {
                    t.drawImage(r, 0, 0)
                } catch (s) {} else t.drawImage(r, 0, 0)
        }
    };
    var Qh = function (t, i, e, n, r, s, o, h, a) {
            this._kn = Me(t, i, e, n, r, s, o, h, a)
        },
        ta = {
            server: {
                draw: function (t) {
                    t.save(), t.translate(0, 0), t.beginPath(), t.moveTo(0, 0), t.lineTo(40, 0), t.lineTo(40, 40), t.lineTo(0, 40), t.closePath(), t.clip(), t.translate(0, 0), t.translate(0, 0), t.scale(1, 1), t.translate(0, 0), t.strokeStyle = "rgba(0,0,0,0)", t.lineCap = "butt", t.lineJoin = "miter", t.miterLimit = 4, t.save(), t.save(), t.restore(), t.save(), t.restore(), t.save(), t.restore(), t.save(), t.restore(), t.save(), t.restore(), t.save(), t.restore(), t.save(), t.restore(), t.save(), t.restore(), t.save(), t.restore(), t.save(), t.restore(), t.save(), t.restore(), t.save(), t.restore(), t.save(), t.restore(), t.restore(), t.save();
                    var i = t.createLinearGradient(6.75, 3.9033, 30.5914, 27.7447);
                    i.addColorStop(.0493, "#1C6B9D"), i.addColorStop(.0689, "#186493"), i.addColorStop(.0939, "#145E8B"), i.addColorStop(.129, "#115B87"), i.addColorStop(.2266, "#115A85"), i.addColorStop(.2556, "#125C89"), i.addColorStop(.2869, "#176291"), i.addColorStop(.3194, "#1D6C9F"), i.addColorStop(.3525, "#2479B0"), i.addColorStop(.3695, "#2881BB"), i.addColorStop(.5025, "#1F6FA2"), i.addColorStop(.9212, "#115A86"), i.addColorStop(1, "#004063"), t.fillStyle = i, t.beginPath(), t.moveTo(25.677, 4.113), t.bezierCurveTo(25.361, 2.4410000000000007, 23.364, 2.7940000000000005, 22.14, 2.7990000000000004), t.bezierCurveTo(19.261, 2.813, 16.381, 2.8260000000000005, 13.502, 2.8400000000000003), t.bezierCurveTo(12.185, 2.846, 10.699000000000002, 2.652, 9.393, 2.8790000000000004), t.bezierCurveTo(9.19, 2.897, 8.977, 2.989, 8.805, 3.094), t.bezierCurveTo(8.084999999999999, 3.5109999999999997, 7.436999999999999, 4.1259999999999994, 6.776, 4.63), t.bezierCurveTo(5.718999999999999, 5.436, 4.641, 6.22, 3.6029999999999998, 7.05), t.bezierCurveTo(4.207, 6.5889999999999995, 21.601999999999997, 36.579, 21.028, 37.307), t.bezierCurveTo(22.019, 36.063, 23.009999999999998, 34.819, 24.000999999999998, 33.575), t.bezierCurveTo(24.587999999999997, 32.84, 25.589999999999996, 31.995000000000005, 25.593999999999998, 30.983000000000004), t.bezierCurveTo(25.595999999999997, 30.489000000000004, 25.598, 29.994000000000003, 25.601, 29.500000000000004), t.bezierCurveTo(25.612, 26.950000000000003, 25.622, 24.400000000000006, 25.633, 21.85), t.bezierCurveTo(25.657, 16.318, 25.680999999999997, 10.786000000000001, 25.704, 5.253), t.bezierCurveTo(25.706, 4.885, 25.749, 4.478, 25.677, 4.113), t.bezierCurveTo(25.67, 4.077, 25.697, 4.217, 25.677, 4.113), t.closePath(), t.fill(), t.stroke(), t.restore(), t.save(), t.save(), t.fillStyle = "#2e8ece", t.beginPath(), t.moveTo(19.763, 6.645), t.bezierCurveTo(20.002000000000002, 6.643999999999999, 20.23, 6.691999999999999, 20.437, 6.778), t.bezierCurveTo(20.644000000000002, 6.864999999999999, 20.830000000000002, 6.991, 20.985, 7.146999999999999), t.bezierCurveTo(21.14, 7.302999999999999, 21.266, 7.488999999999999, 21.352999999999998, 7.696999999999999), t.bezierCurveTo(21.438999999999997, 7.903999999999999, 21.487, 8.133, 21.487, 8.372), t.lineTo(21.398, 36.253), t.bezierCurveTo(21.397, 36.489, 21.349, 36.713, 21.262, 36.917), t.bezierCurveTo(21.174, 37.121, 21.048000000000002, 37.305, 20.893, 37.458), t.bezierCurveTo(20.738, 37.611, 20.553, 37.734, 20.348, 37.818999999999996), t.bezierCurveTo(20.141, 37.903999999999996, 19.916, 37.95099999999999, 19.679, 37.949), t.lineTo(4.675, 37.877), t.bezierCurveTo(4.4399999999999995, 37.876000000000005, 4.216, 37.827000000000005, 4.012, 37.741), t.bezierCurveTo(3.8089999999999997, 37.653999999999996, 3.6249999999999996, 37.528999999999996, 3.4719999999999995, 37.376), t.bezierCurveTo(3.3179999999999996, 37.221, 3.1939999999999995, 37.037, 3.1079999999999997, 36.833999999999996), t.bezierCurveTo(3.022, 36.629999999999995, 2.9739999999999998, 36.406, 2.9739999999999998, 36.172), t.lineTo(2.924, 8.431), t.bezierCurveTo(2.923, 8.192, 2.971, 7.964, 3.057, 7.758), t.bezierCurveTo(3.143, 7.552, 3.267, 7.365, 3.4219999999999997, 7.209), t.bezierCurveTo(3.5769999999999995, 7.052999999999999, 3.76, 6.925, 3.965, 6.837), t.bezierCurveTo(4.17, 6.749, 4.396, 6.701, 4.633, 6.7), t.lineTo(19.763, 6.645), t.closePath(), t.fill(), t.stroke(), t.restore(), t.restore(), t.save(), t.fillStyle = "#efefef", t.beginPath(), t.arc(12.208, 26.543, 2.208, 0, 6.283185307179586, !0), t.closePath(), t.fill(), t.stroke(), t.restore(), t.save(), t.fillStyle = "#2e8ece", t.beginPath(), t.arc(12.208, 26.543, 1.876, 0, 6.283185307179586, !0), t.closePath(), t.fill(), t.stroke(), t.restore(), t.save(), t.fillStyle = "#efefef", t.beginPath(), t.moveTo(19.377, 17.247), t.bezierCurveTo(19.377, 17.724, 18.991999999999997, 18.108999999999998, 18.516, 18.108999999999998), t.lineTo(5.882, 18.108999999999998), t.bezierCurveTo(5.404999999999999, 18.108999999999998, 5.02, 17.723, 5.02, 17.247), t.lineTo(5.02, 11.144), t.bezierCurveTo(5.02, 10.666, 5.406, 10.281, 5.882, 10.281), t.lineTo(18.516, 10.281), t.bezierCurveTo(18.993, 10.281, 19.377, 10.666, 19.377, 11.144), t.lineTo(19.377, 17.247), t.closePath(), t.fill(), t.stroke(), t.restore(), t.save(), t.save(), t.fillStyle = "#2e8ece", t.beginPath(), t.moveTo(18.536, 13.176), t.bezierCurveTo(18.536, 13.518, 18.261000000000003, 13.794, 17.919, 13.794), t.lineTo(6.479, 13.794), t.bezierCurveTo(6.1370000000000005, 13.794, 5.861, 13.518, 5.861, 13.176), t.lineTo(5.861, 11.84), t.bezierCurveTo(5.861, 11.498, 6.137, 11.221, 6.479, 11.221), t.lineTo(17.918, 11.221), t.bezierCurveTo(18.259999999999998, 11.221, 18.535, 11.497, 18.535, 11.84), t.lineTo(18.535, 13.176), t.closePath(), t.fill(), t.stroke(), t.restore(), t.save(), t.fillStyle = "#2e8ece", t.beginPath(), t.moveTo(18.536, 16.551), t.bezierCurveTo(18.536, 16.892999999999997, 18.261000000000003, 17.168999999999997, 17.919, 17.168999999999997), t.lineTo(6.479, 17.168999999999997), t.bezierCurveTo(6.1370000000000005, 17.168999999999997, 5.861, 16.892999999999997, 5.861, 16.551), t.lineTo(5.861, 15.215999999999998), t.bezierCurveTo(5.861, 14.872999999999998, 6.137, 14.596999999999998, 6.479, 14.596999999999998), t.lineTo(17.918, 14.596999999999998), t.bezierCurveTo(18.259999999999998, 14.596999999999998, 18.535, 14.872999999999998, 18.535, 15.215999999999998), t.lineTo(18.535, 16.551), t.closePath(), t.fill(), t.stroke(), t.restore(), t.restore(), t.restore()
                }
            },
            exchanger2: {
                draw: function (t) {
                    t.save(), t.translate(0, 0), t.beginPath(), t.moveTo(0, 0), t.lineTo(40, 0), t.lineTo(40, 40), t.lineTo(0, 40), t.closePath(), t.clip(), t.translate(0, 0), t.translate(0, 0), t.scale(1, 1), t.translate(0, 0), t.strokeStyle = "rgba(0,0,0,0)", t.lineCap = "butt", t.lineJoin = "miter", t.miterLimit = 4, t.save(), t.save(), t.restore(), t.save(), t.restore(), t.save(), t.restore(), t.save(), t.restore(), t.save(), t.restore(), t.save(), t.restore(), t.save(), t.restore(), t.save(), t.restore(), t.save(), t.restore(), t.save(), t.restore(), t.restore(), t.save();
                    var i = t.createLinearGradient(.4102, 24.3613, 39.5898, 24.3613);
                    i.addColorStop(0, "#1C6B9D"), i.addColorStop(.0788, "#115A85"), i.addColorStop(.2046, "#135D89"), i.addColorStop(.3649, "#186494"), i.addColorStop(.5432, "#1F70A4"), i.addColorStop(.6798, "#257AB2"), i.addColorStop(.7462, "#2377AD"), i.addColorStop(.8508, "#1E6DA0"), i.addColorStop(.98, "#125C89"), i.addColorStop(1, "#105984"), t.fillStyle = i, t.beginPath(), t.moveTo(.41, 16.649), t.bezierCurveTo(.633, 19.767, .871, 20.689, 1.094, 23.807000000000002), t.bezierCurveTo(1.29, 26.548000000000002, 3.324, 28.415000000000003, 5.807, 29.711000000000002), t.bezierCurveTo(10.582, 32.202000000000005, 16.477, 32.806000000000004, 21.875999999999998, 32.523), t.bezierCurveTo(26.929, 32.258, 32.806, 31.197000000000003, 36.709999999999994, 27.992000000000004), t.bezierCurveTo(38.30499999999999, 26.728000000000005, 38.83599999999999, 25.103000000000005, 38.998999999999995, 23.161000000000005), t.bezierCurveTo(39.589, 16.135000000000005, 39.589, 16.135000000000005, 39.589, 16.135000000000005), t.bezierCurveTo(39.589, 16.135000000000005, 3.26, 16.647, .41, 16.649), t.closePath(), t.fill(), t.stroke(), t.restore(), t.save(), t.save(), t.fillStyle = "#2e8ece", t.beginPath(), t.moveTo(16.4, 25.185), t.bezierCurveTo(12.807999999999998, 24.924999999999997, 9.139, 24.238, 5.857999999999999, 22.705), t.bezierCurveTo(3.175999999999999, 21.450999999999997, -.32200000000000095, 18.971999999999998, .544999999999999, 15.533999999999999), t.bezierCurveTo(1.3499999999999992, 12.335999999999999, 4.987999999999999, 10.495999999999999, 7.807999999999999, 9.428999999999998), t.bezierCurveTo(11.230999999999998, 8.133999999999999, 14.911999999999999, 7.519999999999999, 18.558, 7.345999999999998), t.bezierCurveTo(22.233, 7.169999999999998, 25.966, 7.437999999999998, 29.548000000000002, 8.300999999999998), t.bezierCurveTo(32.673, 9.052999999999999, 36.192, 10.296, 38.343, 12.814999999999998), t.bezierCurveTo(40.86600000000001, 15.768999999999998, 39.208000000000006, 19.066999999999997, 36.406000000000006, 21.043999999999997), t.bezierCurveTo(33.566, 23.046999999999997, 30.055000000000007, 24.071999999999996, 26.670000000000005, 24.676999999999996), t.bezierCurveTo(23.289, 25.28, 19.824, 25.436, 16.4, 25.185), t.bezierCurveTo(13.529, 24.977, 19.286, 25.396, 16.4, 25.185), t.closePath(), t.fill(), t.stroke(), t.restore(), t.restore(), t.save(), t.save(), t.save(), t.save(), t.save(), t.fillStyle = "#f7f8f8", t.beginPath(), t.moveTo(5.21, 21.754), t.lineTo(8.188, 17.922), t.lineTo(9.53, 18.75), t.lineTo(15.956, 16.004), t.lineTo(18.547, 17.523), t.lineTo(12.074, 20.334), t.lineTo(13.464, 21.204), t.lineTo(5.21, 21.754), t.closePath(), t.fill(), t.stroke(), t.restore(), t.restore(), t.restore(), t.save(), t.save(), t.save(), t.fillStyle = "#f7f8f8", t.beginPath(), t.moveTo(17.88, 14.61), t.lineTo(9.85, 13.522), t.lineTo(11.703, 12.757), t.lineTo(7.436, 10.285), t.lineTo(10.783, 8.942), t.lineTo(15.091, 11.357), t.lineTo(16.88, 10.614), t.lineTo(17.88, 14.61), t.closePath(), t.fill(), t.stroke(), t.restore(), t.restore(), t.save(), t.save(), t.fillStyle = "#f7f8f8", t.beginPath(), t.moveTo(17.88, 14.61), t.lineTo(9.85, 13.522), t.lineTo(11.703, 12.757), t.lineTo(7.436, 10.285), t.lineTo(10.783, 8.942), t.lineTo(15.091, 11.357), t.lineTo(16.88, 10.614), t.lineTo(17.88, 14.61), t.closePath(), t.fill(), t.stroke(), t.restore(), t.restore(), t.restore(), t.save(), t.save(), t.save(), t.fillStyle = "#f7f8f8", t.beginPath(), t.moveTo(23.556, 15.339), t.lineTo(20.93, 13.879), t.lineTo(26.953, 11.304), t.lineTo(25.559, 10.567), t.lineTo(33.251, 9.909), t.lineTo(31.087, 13.467), t.lineTo(29.619, 12.703), t.lineTo(23.556, 15.339), t.closePath(), t.fill(), t.stroke(), t.restore(), t.restore(), t.restore(), t.save(), t.save(), t.save(), t.fillStyle = "#f7f8f8", t.beginPath(), t.moveTo(30.028, 23.383), t.lineTo(24.821, 20.366), t.lineTo(22.915, 21.227), t.lineTo(21.669, 16.762), t.lineTo(30.189, 17.942), t.lineTo(28.33, 18.782), t.lineTo(33.579, 21.725), t.lineTo(30.028, 23.383), t.closePath(), t.fill(), t.stroke(), t.restore(), t.restore(), t.save(), t.save(), t.fillStyle = "#f7f8f8", t.beginPath(), t.moveTo(30.028, 23.383), t.lineTo(24.821, 20.366), t.lineTo(22.915, 21.227), t.lineTo(21.669, 16.762), t.lineTo(30.189, 17.942), t.lineTo(28.33, 18.782), t.lineTo(33.579, 21.725), t.lineTo(30.028, 23.383), t.closePath(), t.fill(), t.stroke(), t.restore(), t.restore(), t.restore(), t.restore(), t.restore(), t.restore()
                }
            },
            exchanger: {
                draw: function (t) {
                    t.save(), t.translate(0, 0), t.beginPath(), t.moveTo(0, 0), t.lineTo(40, 0), t.lineTo(40, 40), t.lineTo(0, 40), t.closePath(), t.clip(), t.translate(0, 0), t.translate(0, 0), t.scale(1, 1), t.translate(0, 0), t.strokeStyle = "rgba(0,0,0,0)", t.lineCap = "butt", t.lineJoin = "miter", t.miterLimit = 4, t.save(), t.save(), t.restore(), t.save(), t.restore(), t.save(), t.restore(), t.save(), t.restore(), t.save(), t.restore(), t.save(), t.restore(), t.save(), t.restore(), t.restore(), t.save();
                    var i = t.createLinearGradient(.2095, 20.7588, 39.4941, 20.7588);
                    i.addColorStop(0, "#6A6969"), i.addColorStop(.0788, "#4F4C4B"), i.addColorStop(.352, "#545252"), i.addColorStop(.6967, "#646262"), i.addColorStop(.8916, "#6F6E6F"), i.addColorStop(.9557, "#4C4948"), i.addColorStop(1, "#494645"), t.fillStyle = i, t.beginPath(), t.moveTo(39.449, 12.417), t.lineTo(39.384, 9.424), t.bezierCurveTo(39.384, 9.424, .7980000000000018, 22.264, .3710000000000022, 23.024), t.bezierCurveTo(-.026999999999997804, 23.733, .4240000000000022, 24.903000000000002, .5190000000000022, 25.647000000000002), t.bezierCurveTo(.7240000000000022, 27.244000000000003, .9240000000000023, 28.841, 1.1350000000000022, 30.437), t.bezierCurveTo(1.3220000000000023, 31.843, 2.7530000000000023, 32.094, 3.9620000000000024, 32.094), t.bezierCurveTo(8.799000000000003, 32.092, 13.636000000000003, 32.091, 18.473000000000003, 32.089), t.bezierCurveTo(23.515, 32.086999999999996, 28.556000000000004, 32.086, 33.598, 32.083999999999996), t.bezierCurveTo(34.859, 32.083999999999996, 36.286, 31.979999999999997, 37.266, 31.081999999999997), t.bezierCurveTo(37.537, 30.820999999999998, 37.655, 30.535999999999998, 37.699999999999996, 30.229999999999997), t.lineTo(37.711, 30.316999999999997), t.lineTo(39.281, 16.498999999999995), t.bezierCurveTo(39.281, 16.498999999999995, 39.467999999999996, 15.126999999999995, 39.489, 14.666999999999994), t.bezierCurveTo(39.515, 14.105, 39.449, 12.417, 39.449, 12.417), t.closePath(), t.fill(), t.stroke(), t.restore(), t.save(), t.save(), t.save(), t.save(), t.restore(), t.save(), t.restore(), t.save(), t.restore(), t.save(), t.restore(), t.save(), t.restore(), t.save(), t.restore(), t.save(), t.restore(), t.save(), t.restore(), t.save(), t.restore(), t.restore(), t.save();
                    var i = t.createLinearGradient(19.8052, 7.7949, 19.8052, 24.7632);
                    i.addColorStop(0, "#7D7D7D"), i.addColorStop(.1455, "#808080"), i.addColorStop(.2975, "#888888"), i.addColorStop(.4527, "#939293"), i.addColorStop(.6099, "#9E9D9D"), i.addColorStop(.7687, "#A7A5A4"), i.addColorStop(.9268, "#A9A6A5"), i.addColorStop(.9754, "#A7A4A3"), i.addColorStop(1, "#FFFFFF"), t.fillStyle = i, t.beginPath(), t.moveTo(33.591, 24.763), t.bezierCurveTo(23.868000000000002, 24.754, 14.145, 24.746000000000002, 4.423000000000002, 24.738000000000003), t.bezierCurveTo(3.140000000000002, 24.737000000000002, -.48799999999999777, 24.838000000000005, .3520000000000021, 22.837000000000003), t.bezierCurveTo(1.292000000000002, 20.594000000000005, 2.2330000000000023, 18.351000000000003, 3.1730000000000023, 16.108000000000004), t.bezierCurveTo(4.113000000000002, 13.865000000000006, 5.054000000000002, 11.623000000000005, 5.994000000000002, 9.380000000000004), t.bezierCurveTo(6.728000000000002, 7.629000000000005, 9.521000000000003, 7.885000000000004, 11.156000000000002, 7.880000000000004), t.bezierCurveTo(16.974000000000004, 7.861000000000004, 22.793000000000003, 7.843000000000004, 28.612000000000002, 7.825000000000005), t.bezierCurveTo(30.976000000000003, 7.818000000000005, 33.341, 7.810000000000005, 35.707, 7.803000000000004), t.bezierCurveTo(36.157000000000004, 7.802000000000004, 36.609, 7.787000000000004, 37.06, 7.804000000000005), t.bezierCurveTo(37.793, 7.833000000000005, 39.389, 7.875000000000004, 39.385000000000005, 9.424000000000005), t.bezierCurveTo(39.38400000000001, 9.647000000000006, 39.31, 10.138000000000005, 39.27700000000001, 10.359000000000005), t.bezierCurveTo(38.81900000000001, 13.361000000000004, 38.452000000000005, 15.764000000000006, 37.99400000000001, 18.766000000000005), t.bezierCurveTo(37.806000000000004, 19.998000000000005, 37.61800000000001, 21.230000000000004, 37.43000000000001, 22.462000000000007), t.bezierCurveTo(37.151, 24.271, 35.264, 24.77, 33.591, 24.763), t.closePath(), t.fill(), t.stroke(), t.restore(), t.restore(), t.restore(), t.save(), t.save(), t.save(), t.fillStyle = "#f7f8f8", t.beginPath(), t.moveTo(10.427, 19.292), t.lineTo(5.735, 16.452), t.lineTo(12.58, 13.8), t.lineTo(12.045, 15.07), t.lineTo(20.482, 15.072), t.lineTo(19.667, 17.887), t.lineTo(11.029, 17.851), t.lineTo(10.427, 19.292), t.closePath(), t.fill(), t.stroke(), t.restore(), t.restore(), t.save(), t.save(), t.fillStyle = "#f7f8f8", t.beginPath(), t.moveTo(13.041, 13.042), t.lineTo(8.641, 10.73), t.lineTo(14.82, 8.474), t.lineTo(14.373, 9.537), t.lineTo(22.102, 9.479), t.lineTo(21.425, 11.816), t.lineTo(13.54, 11.85), t.lineTo(13.041, 13.042), t.closePath(), t.fill(), t.stroke(), t.restore(), t.restore(), t.save(), t.save(), t.fillStyle = "#f7f8f8", t.beginPath(), t.moveTo(29.787, 16.049), t.lineTo(29.979, 14.704), t.lineTo(21.51, 14.706), t.lineTo(22.214, 12.147), t.lineTo(30.486, 12.116), t.lineTo(30.653, 10.926), t.lineTo(36.141, 13.4), t.lineTo(29.787, 16.049), t.closePath(), t.fill(), t.stroke(), t.restore(), t.restore(), t.save(), t.save(), t.fillStyle = "#f7f8f8", t.beginPath(), t.moveTo(28.775, 23.14), t.lineTo(29.011, 21.49), t.lineTo(19.668, 21.405), t.lineTo(20.523, 18.295), t.lineTo(29.613, 18.338), t.lineTo(29.815, 16.898), t.lineTo(35.832, 19.964), t.lineTo(28.775, 23.14), t.closePath(), t.fill(), t.stroke(), t.restore(), t.restore(), t.restore(), t.restore()
                }
            },
            cloud: {
                draw: function (t) {
                    t.save(), t.beginPath(), t.moveTo(0, 0), t.lineTo(90.75, 0), t.lineTo(90.75, 62.125), t.lineTo(0, 62.125), t.closePath(), t.clip(), t.strokeStyle = "rgba(0,0,0,0)", t.lineCap = "butt", t.lineJoin = "miter", t.miterLimit = 4, t.save();
                    var i = t.createLinearGradient(44.0054, 6.4116, 44.0054, 51.3674);
                    i.addColorStop(0, "rgba(159, 160, 160, 0.7)"), i.addColorStop(.9726, "#E9EAEA"), t.fillStyle = i, t.beginPath(), t.moveTo(57.07, 20.354), t.bezierCurveTo(57.037, 20.354, 57.006, 20.358, 56.974000000000004, 20.358), t.bezierCurveTo(54.461000000000006, 14.308, 48.499, 10.049000000000001, 41.538000000000004, 10.049000000000001), t.bezierCurveTo(33.801, 10.049000000000001, 27.309000000000005, 15.316000000000003, 25.408000000000005, 22.456000000000003), t.bezierCurveTo(18.988000000000007, 23.289, 14.025000000000006, 28.765000000000004, 14.025000000000006, 35.413000000000004), t.bezierCurveTo(14.025000000000006, 42.635000000000005, 19.880000000000006, 48.49, 27.102000000000004, 48.49), t.bezierCurveTo(29.321000000000005, 48.49, 31.407000000000004, 47.933, 33.237, 46.961), t.bezierCurveTo(34.980000000000004, 49.327, 37.78, 50.867999999999995, 40.945, 50.867999999999995), t.bezierCurveTo(43.197, 50.867999999999995, 45.261, 50.086, 46.896, 48.785999999999994), t.bezierCurveTo(49.729, 50.78699999999999, 53.244, 51.98799999999999, 57.07, 51.98799999999999), t.bezierCurveTo(66.412, 51.98799999999999, 73.986, 44.90699999999999, 73.986, 36.17099999999999), t.bezierCurveTo(73.986, 27.436, 66.413, 20.354, 57.07, 20.354), t.closePath(), t.fill(), t.stroke(), t.restore(), t.restore()
                }
            },
            node: {
                width: 60,
                height: 100,
                draw: function (t) {
                    t.save(), t.translate(0, 0), t.beginPath(), t.moveTo(0, 0), t.lineTo(40, 0), t.lineTo(40, 40), t.lineTo(0, 40), t.closePath(), t.clip(), t.translate(0, 0), t.translate(0, 0), t.scale(1, 1), t.translate(0, 0), t.strokeStyle = "rgba(0,0,0,0)", t.lineCap = "butt", t.lineJoin = "miter", t.miterLimit = 4, t.save(), t.fillStyle = "#9fa0a0", t.beginPath(), t.moveTo(13.948, 31.075), t.lineTo(25.914, 31.075), t.quadraticCurveTo(25.914, 31.075, 25.914, 31.075), t.lineTo(25.914, 34.862), t.quadraticCurveTo(25.914, 34.862, 25.914, 34.862), t.lineTo(13.948, 34.862), t.quadraticCurveTo(13.948, 34.862, 13.948, 34.862), t.lineTo(13.948, 31.075), t.quadraticCurveTo(13.948, 31.075, 13.948, 31.075), t.closePath(), t.fill(), t.stroke(), t.restore(), t.save(), t.fillStyle = "#c9caca", t.beginPath(), t.moveTo(29.679, 35.972), t.bezierCurveTo(29.679, 36.675000000000004, 29.110999999999997, 37.244, 28.407999999999998, 37.244), t.lineTo(11.456, 37.244), t.bezierCurveTo(10.751999999999999, 37.244, 10.183, 36.675, 10.183, 35.972), t.lineTo(10.183, 36.136), t.bezierCurveTo(10.183, 35.431000000000004, 10.751999999999999, 34.863, 11.456, 34.863), t.lineTo(28.407, 34.863), t.bezierCurveTo(29.11, 34.863, 29.678, 35.431, 29.678, 36.136), t.lineTo(29.678, 35.972), t.closePath(), t.fill(), t.stroke(), t.restore(), t.save(), t.fillStyle = "#c9caca", t.beginPath(), t.moveTo(.196, 29.346), t.bezierCurveTo(.196, 30.301, .9690000000000001, 31.075, 1.925, 31.075), t.lineTo(37.936, 31.075), t.bezierCurveTo(38.891, 31.075, 39.665, 30.301, 39.665, 29.346), t.lineTo(39.665, 27.174), t.lineTo(.196, 27.174), t.lineTo(.196, 29.346), t.closePath(), t.fill(), t.stroke(), t.restore(), t.save(), t.fillStyle = "#3e3a39", t.beginPath(), t.moveTo(37.937, 3.884), t.lineTo(1.926, 3.884), t.bezierCurveTo(.97, 3.884, .19699999999999984, 4.657, .19699999999999984, 5.614), t.lineTo(.19699999999999984, 27.12), t.lineTo(39.666000000000004, 27.12), t.lineTo(39.666000000000004, 5.615), t.bezierCurveTo(39.665, 4.657, 38.892, 3.884, 37.937, 3.884), t.closePath(), t.fill(), t.stroke(), t.restore(), t.save(), t.save(), t.restore(), t.save(), t.restore(), t.restore(), t.save();
                    var i = t.createLinearGradient(6.9609, 2.9341, 32.9008, 28.874);
                    i.addColorStop(0, "#B2CBEA"), i.addColorStop(1, "#2E8ECE"), t.fillStyle = i, t.beginPath(), t.moveTo(35.788, 6.39), t.lineTo(4.074, 6.39), t.bezierCurveTo(3.315, 6.39, 2.702, 7.003, 2.702, 7.763), t.lineTo(2.702, 24.616), t.lineTo(37.159, 24.616), t.lineTo(37.159, 7.763), t.bezierCurveTo(37.159, 7.003, 36.546, 6.39, 35.788, 6.39), t.closePath(), t.fill(), t.stroke(), t.restore(), t.restore()
                }
            },
            group: {
                draw: function (t) {
                    t.save(), t.translate(0, 0), t.beginPath(), t.moveTo(0, 0), t.lineTo(47.75, 0), t.lineTo(47.75, 40), t.lineTo(0, 40), t.closePath(), t.clip(), t.translate(0, 0), t.translate(0, 0), t.scale(1, 1), t.translate(0, 0), t.strokeStyle = "rgba(0,0,0,0)", t.lineCap = "butt", t.lineJoin = "miter", t.miterLimit = 4, t.save(), t.save(), t.fillStyle = "#9fa0a0", t.beginPath(), t.moveTo(10.447, 26.005), t.lineTo(18.847, 26.005), t.quadraticCurveTo(18.847, 26.005, 18.847, 26.005), t.lineTo(18.847, 28.663), t.quadraticCurveTo(18.847, 28.663, 18.847, 28.663), t.lineTo(10.447, 28.663), t.quadraticCurveTo(10.447, 28.663, 10.447, 28.663), t.lineTo(10.447, 26.005), t.quadraticCurveTo(10.447, 26.005, 10.447, 26.005), t.closePath(), t.fill(), t.stroke(), t.restore(), t.save(), t.fillStyle = "#c9caca", t.beginPath(), t.moveTo(21.491, 29.443), t.bezierCurveTo(21.491, 29.935000000000002, 21.094, 30.338, 20.597, 30.338), t.lineTo(8.698, 30.338), t.bezierCurveTo(8.201, 30.338, 7.8020000000000005, 29.936, 7.8020000000000005, 29.443), t.lineTo(7.8020000000000005, 29.557000000000002), t.bezierCurveTo(7.8020000000000005, 29.063000000000002, 8.201, 28.662000000000003, 8.698, 28.662000000000003), t.lineTo(20.597, 28.662000000000003), t.bezierCurveTo(21.093, 28.662000000000003, 21.491, 29.062, 21.491, 29.557000000000002), t.lineTo(21.491, 29.443), t.closePath(), t.fill(), t.stroke(), t.restore(), t.save(), t.fillStyle = "#c9caca", t.beginPath(), t.moveTo(.789, 24.79), t.bezierCurveTo(.789, 25.461, 1.334, 26.005, 2.0060000000000002, 26.005), t.lineTo(27.289, 26.005), t.bezierCurveTo(27.961000000000002, 26.005, 28.504, 25.461, 28.504, 24.79), t.lineTo(28.504, 23.267), t.lineTo(.789, 23.267), t.lineTo(.789, 24.79), t.closePath(), t.fill(), t.stroke(), t.restore(), t.save(), t.fillStyle = "#3e3a39", t.beginPath(), t.moveTo(27.289, 6.912), t.lineTo(2.006, 6.912), t.bezierCurveTo(1.3339999999999996, 6.912, .7889999999999997, 7.455, .7889999999999997, 8.126), t.lineTo(.7889999999999997, 23.227), t.lineTo(28.503999999999998, 23.227), t.lineTo(28.503999999999998, 8.126), t.bezierCurveTo(28.504, 7.455, 27.961, 6.912, 27.289, 6.912), t.closePath(), t.fill(), t.stroke(), t.restore(), t.save(), t.save(), t.restore(), t.save(), t.restore(), t.restore(), t.save();
                    var i = t.createLinearGradient(5.54, 6.2451, 23.7529, 24.458);
                    i.addColorStop(0, "#B2CBEA"), i.addColorStop(1, "#2E8ECE"), t.fillStyle = i, t.beginPath(), t.moveTo(25.78, 8.671), t.lineTo(3.514, 8.671), t.bezierCurveTo(2.9819999999999998, 8.671, 2.549, 9.101999999999999, 2.549, 9.635), t.lineTo(2.549, 21.466), t.lineTo(26.743, 21.466), t.lineTo(26.743, 9.636), t.bezierCurveTo(26.743, 9.102, 26.312, 8.671, 25.78, 8.671), t.closePath(), t.fill(), t.stroke(), t.restore(), t.restore(), t.save(), t.save(), t.fillStyle = "#9fa0a0", t.beginPath(), t.moveTo(27.053, 33.602), t.lineTo(36.22, 33.602), t.quadraticCurveTo(36.22, 33.602, 36.22, 33.602), t.lineTo(36.22, 36.501), t.quadraticCurveTo(36.22, 36.501, 36.22, 36.501), t.lineTo(27.053, 36.501), t.quadraticCurveTo(27.053, 36.501, 27.053, 36.501), t.lineTo(27.053, 33.602), t.quadraticCurveTo(27.053, 33.602, 27.053, 33.602), t.closePath(), t.fill(), t.stroke(), t.restore(), t.save(), t.fillStyle = "#c9caca", t.beginPath(), t.moveTo(39.104, 37.352), t.bezierCurveTo(39.104, 37.891, 38.67, 38.327, 38.13, 38.327), t.lineTo(25.143, 38.327), t.bezierCurveTo(24.602, 38.327, 24.166, 37.891, 24.166, 37.352), t.lineTo(24.166, 37.477999999999994), t.bezierCurveTo(24.166, 36.937, 24.602, 36.501, 25.143, 36.501), t.lineTo(38.131, 36.501), t.bezierCurveTo(38.671, 36.501, 39.105, 36.937, 39.105, 37.477999999999994), t.lineTo(39.105, 37.352), t.closePath(), t.fill(), t.stroke(), t.restore(), t.save(), t.fillStyle = "#c9caca", t.beginPath(), t.moveTo(16.514, 32.275), t.bezierCurveTo(16.514, 33.004999999999995, 17.107, 33.601, 17.839, 33.601), t.lineTo(45.433, 33.601), t.bezierCurveTo(46.166, 33.601, 46.758, 33.005, 46.758, 32.275), t.lineTo(46.758, 30.607999999999997), t.lineTo(16.514, 30.607999999999997), t.lineTo(16.514, 32.275), t.closePath(), t.fill(), t.stroke(), t.restore(), t.save(), t.fillStyle = "#3e3a39", t.beginPath(), t.moveTo(45.433, 12.763), t.lineTo(17.839, 12.763), t.bezierCurveTo(17.107, 12.763, 16.514, 13.356, 16.514, 14.089), t.lineTo(16.514, 30.57), t.lineTo(46.757999999999996, 30.57), t.lineTo(46.757999999999996, 14.088), t.bezierCurveTo(46.758, 13.356, 46.166, 12.763, 45.433, 12.763), t.closePath(), t.fill(), t.stroke(), t.restore(), t.save(), t.save(), t.restore(), t.save(), t.restore(), t.restore(), t.save(), i = t.createLinearGradient(21.6973, 12.0352, 41.5743, 31.9122), i.addColorStop(0, "#B2CBEA"), i.addColorStop(1, "#2E8ECE"), t.fillStyle = i, t.beginPath(), t.moveTo(43.785, 14.683), t.lineTo(19.486, 14.683), t.bezierCurveTo(18.903000000000002, 14.683, 18.433, 15.153, 18.433, 15.735), t.lineTo(18.433, 28.649), t.lineTo(44.837, 28.649), t.lineTo(44.837, 15.734), t.bezierCurveTo(44.838, 15.153, 44.367, 14.683, 43.785, 14.683), t.closePath(), t.fill(), t.stroke(), t.restore(), t.restore(), t.save(), t.globalAlpha = .5, t.beginPath(), t.moveTo(23.709, 36.33), t.lineTo(4.232, 36.33), t.lineTo(4.232, 27.199), t.lineTo(5.304, 27.199), t.lineTo(5.304, 35.259), t.lineTo(23.709, 35.259), t.lineTo(23.709, 36.33), t.closePath(), t.fill(), t.stroke(), t.restore(), t.restore()
                }
            },
            subnetwork: {
                draw: function (t) {
                    t.save(), t.translate(0, 0), t.beginPath(), t.moveTo(0, 0), t.lineTo(60.75, 0), t.lineTo(60.75, 42.125), t.lineTo(0, 42.125), t.closePath(), t.clip(), t.translate(0, .26859504132231393), t.scale(.6694214876033058, .6694214876033058), t.translate(0, 0), t.strokeStyle = "rgba(0,0,0,0)", t.lineCap = "butt", t.lineJoin = "miter", t.miterLimit = 4, t.save(), t.save(), t.restore(), t.save(), t.restore(), t.restore(), t.save();
                    var i = t.createLinearGradient(43.6724, -2.7627, 43.6724, 59.3806);
                    i.addColorStop(0, "rgba(159, 160, 160, 0.7)"), i.addColorStop(.9726, "#E9EAEA"), t.fillStyle = i, t.beginPath(), t.moveTo(61.732, 16.509), t.bezierCurveTo(61.686, 16.509, 61.644, 16.515, 61.599, 16.515), t.bezierCurveTo(58.126, 8.152000000000001, 49.884, 2.2650000000000006, 40.262, 2.2650000000000006), t.bezierCurveTo(29.567, 2.2650000000000006, 20.594, 9.545000000000002, 17.966, 19.415), t.bezierCurveTo(9.09, 20.566, 2.229, 28.136, 2.229, 37.326), t.bezierCurveTo(2.229, 47.309, 10.322, 55.403000000000006, 20.306, 55.403000000000006), t.bezierCurveTo(23.374000000000002, 55.403000000000006, 26.257, 54.633, 28.787, 53.28900000000001), t.bezierCurveTo(31.197, 56.56000000000001, 35.067, 58.69000000000001, 39.442, 58.69000000000001), t.bezierCurveTo(42.555, 58.69000000000001, 45.408, 57.60900000000001, 47.669, 55.81200000000001), t.bezierCurveTo(51.586, 58.57800000000001, 56.443999999999996, 60.238000000000014, 61.732, 60.238000000000014), t.bezierCurveTo(74.64699999999999, 60.238000000000014, 85.116, 50.45000000000002, 85.116, 38.37400000000001), t.bezierCurveTo(85.116, 26.298, 74.646, 16.509, 61.732, 16.509), t.closePath(), t.fill(), t.stroke(), t.restore(), t.save(), t.save(), t.fillStyle = "#9fa0a0", t.beginPath(), t.moveTo(34.966, 44.287), t.lineTo(45.112, 44.287), t.quadraticCurveTo(45.112, 44.287, 45.112, 44.287), t.lineTo(45.112, 47.497), t.quadraticCurveTo(45.112, 47.497, 45.112, 47.497), t.lineTo(34.966, 47.497), t.quadraticCurveTo(34.966, 47.497, 34.966, 47.497), t.lineTo(34.966, 44.287), t.quadraticCurveTo(34.966, 44.287, 34.966, 44.287), t.closePath(), t.fill(), t.stroke(), t.restore(), t.save(), t.fillStyle = "#727171", t.beginPath(), t.moveTo(48.306, 48.439), t.bezierCurveTo(48.306, 49.034, 47.824999999999996, 49.52, 47.226, 49.52), t.lineTo(32.854, 49.52), t.bezierCurveTo(32.253, 49.52, 31.771, 49.034000000000006, 31.771, 48.439), t.lineTo(31.771, 48.578), t.bezierCurveTo(31.771, 47.981, 32.253, 47.497, 32.854, 47.497), t.lineTo(47.226, 47.497), t.bezierCurveTo(47.824999999999996, 47.497, 48.306, 47.98, 48.306, 48.578), t.lineTo(48.306, 48.439), t.closePath(), t.fill(), t.stroke(), t.restore(), t.save(), t.fillStyle = "#b5b5b6", t.beginPath(), t.moveTo(23.302, 42.82), t.bezierCurveTo(23.302, 43.63, 23.96, 44.287, 24.772, 44.287), t.lineTo(55.308, 44.287), t.bezierCurveTo(56.12, 44.287, 56.775, 43.629999999999995, 56.775, 42.82), t.lineTo(56.775, 40.98), t.lineTo(23.302, 40.98), t.lineTo(23.302, 42.82), t.closePath(), t.fill(), t.stroke(), t.restore(), t.save(), t.fillStyle = "#3e3a39", t.beginPath(), t.moveTo(55.307, 21.229), t.lineTo(24.771, 21.229), t.bezierCurveTo(23.959, 21.229, 23.301000000000002, 21.884, 23.301000000000002, 22.695), t.lineTo(23.301000000000002, 40.933), t.lineTo(56.774, 40.933), t.lineTo(56.774, 22.695), t.bezierCurveTo(56.774, 21.884, 56.119, 21.229, 55.307, 21.229), t.closePath(), t.fill(), t.stroke(), t.restore(), t.save(), t.save(), t.restore(), t.save(), t.restore(), t.restore(), t.save(), i = t.createLinearGradient(29.04, 20.4219, 51.0363, 42.4181), i.addColorStop(0, "#B2CBEA"), i.addColorStop(1, "#2E8ECE"), t.fillStyle = i, t.beginPath(), t.moveTo(53.485, 23.353), t.lineTo(26.592, 23.353), t.bezierCurveTo(25.948999999999998, 23.353, 25.427, 23.873, 25.427, 24.517000000000003), t.lineTo(25.427, 38.807), t.lineTo(54.647, 38.807), t.lineTo(54.647, 24.517000000000003), t.bezierCurveTo(54.648, 23.873, 54.127, 23.353, 53.485, 23.353), t.closePath(), t.fill(), t.stroke(), t.restore(), t.restore(), t.restore()
                }
            }
        };
    for (var ia in ta) Te("Q-" + ia, ta[ia]);
    var ea = function () {
            this.$invalidateRotate = !1;
            var t = this._f3;
            t.clear();
            var i = this.$border || 0,
                e = this._7d.x + i / 2,
                n = this._7d.y + i / 2,
                r = this._7d.width - i,
                s = this._7d.height - i,
                o = Ye.call(this, {
                    x: e,
                    y: n
                });
            Xe(t, o.x, o.y, !0), o = Ye.call(this, {
                x: e + r,
                y: n
            }), Xe(t, o.x, o.y), o = Ye.call(this, {
                x: e + r,
                y: n + s
            }), Xe(t, o.x, o.y), o = Ye.call(this, {
                x: e,
                y: n + s
            }), Xe(t, o.x, o.y), this.__kuPointer && (o = Ye.call(this, {
                x: this._pointerX,
                y: this._pointerY
            }), Xe(t, o.x, o.y)), i && t.grow(i / 2)
        },
        na = 20,
        ra = {
            _g5: !1,
            _ik: null,
            _lce: 0,
            _k3: -1,
            _jp: null,
            _ei: function (t) {
                this._ik || (this._ik = [], this._il = Rh), this._ik.push(t), this._e6(), this._jo()
            },
            _jo: function () {
                if (!this._jp) {
                    var t = this;
                    this._jp = setTimeout(function i() {
                        return t._e6() !== !1 ? void(t._jp = setTimeout(i, t._fd())) : void delete t._jp
                    }, this._fd())
                }
            },
            _fd: function () {
                return Math.max(na, this._ik[this._k3].delay)
            },
            _e6: function () {
                return this._f1(this._k3 + 1)
            },
            _f1: function (t) {
                if (this._g5) t %= this._lce;
                else if (t >= this._ik.length) return !1;
                if (this._k3 == t) return !1;
                this._k3 = t;
                var i = this._ik[this._k3],
                    e = i._lcache;
                return e || (i._lcache = e = Mi(this.width, this.height), e.g.putImageData(i.data, 0, 0), e._pixels = i._pixels), this._jl = e, this.$invalidateSize = !0, this._lcu()
            },
            _lcg: function () {
                return this._ik ? (this._g5 = !0, this._lce = this._ik.length, 1 == this._lce ? this._lcu() : void this._jo()) : void this._hd()
            },
            _k9: function () {
                this._jp && (clearTimeout(this._jp), delete this._jp)
            },
            _lcu: function () {
                var t = this._dispatcher.listeners;
                if (!t || !t.length) return !1;
                for (var i = new Eo(this, "image", "load", this._jl), e = 0, n = t.length; n > e; e++) {
                    var r = t[e];
                    r.scope._in && r.scope._in._h8ed ? (t.splice(e, 1), e--, n--) : r.onEvent.call(r.scope, i)
                }
                return t.length > 0
            },
            _lgk: function (t, i) {
                this._dispatcher.addListener(t, i), this._g5 && !this._jp && this._jo()
            },
            _6e: function (t, i) {
                this._dispatcher.removeListener(t, i), this._dispatcher._lef() || this._k9()
            },
            _h8: function () {
                this._k9(), this._dispatcher.clear()
            },
            _f0: function () {
                var t = this._jl._leufferedImage;
                return t || (this._jl._leufferedImage = t = new Jh(this._jl, 1)), t
            }
        },
        sa = function (t) {
            return t.reduce(function (t, i) {
                return 2 * t + i
            }, 0)
        },
        oa = function (t) {
            for (var i = [], e = 7; e >= 0; e--) i.push(!!(t & 1 << e));
            return i
        },
        ha = function (t) {
            this.data = t, this.len = this.data.length, this.pos = 0, this.readByte = function () {
                if (this.pos >= this.data.length) throw new Error("Attempted to read past end of stream.");
                return 255 & t.charCodeAt(this.pos++)
            }, this.readBytes = function (t) {
                for (var i = [], e = 0; t > e; e++) i.push(this.readByte());
                return i
            }, this.read = function (t) {
                for (var i = "", e = 0; t > e; e++) i += String.fromCharCode(this.readByte());
                return i
            }, this.readUnsigned = function () {
                var t = this.readBytes(2);
                return (t[1] << 8) + t[0]
            }
        },
        aa = function (t, i, e) {
            for (var n, r, s = 0, o = function (t) {
                    for (var e = 0, n = 0; t > n; n++) i.charCodeAt(s >> 3) & 1 << (7 & s) && (e |= 1 << n), s++;
                    return e
                }, h = [], a = 1 << t, l = a + 1, _ = t + 1, u = [], c = function () {
                    u = [], _ = t + 1;
                    for (var i = 0; a > i; i++) u[i] = [i];
                    u[a] = [], u[l] = null
                }, d = 0;;) {
                if (r = n, n = o(_), d++ > e) break;
                if (n !== a) {
                    if (n === l) break;
                    if (n < u.length) r !== a && u.push(u[r].concat(u[n][0]));
                    else {
                        if (n !== u.length) throw new Error("Invalid LZW code.");
                        u.push(u[r].concat(u[r][0]))
                    }
                    h.push.apply(h, u[n]), u.length === 1 << _ && 12 > _ && _++
                } else c()
            }
            return h
        },
        la = function (t, i) {
            i || (i = {});
            var e = function (i) {
                    for (var e = [], n = 0; i > n; n++) e.push(t.readBytes(3));
                    return e
                },
                n = function () {
                    var i, e;
                    e = "";
                    do i = t.readByte(), e += t.read(i); while (0 !== i);
                    return e
                },
                r = function () {
                    var n = {};
                    if (n.sig = t.read(3), n.ver = t.read(3), "GIF" !== n.sig) throw new Error("Not a GIF file.");
                    n.width = t.readUnsigned(), n.height = t.readUnsigned();
                    var r = oa(t.readByte());
                    n.gctFlag = r.shift(), n.colorRes = sa(r.splice(0, 3)), n.sorted = r.shift(), n.gctSize = sa(r.splice(0, 3)), n.bgColor = t.readByte(), n.pixelAspectRatio = t.readByte(), n.gctFlag && (n.gct = e(1 << n.gctSize + 1)), i.hdr && i.hdr(n)
                },
                s = function (e) {
                    var r = function (e) {
                            var n = (t.readByte(), oa(t.readByte()));
                            e.reserved = n.splice(0, 3), e.disposalMethod = sa(n.splice(0, 3)), e.userInput = n.shift(), e.transparencyGiven = n.shift(), e.delayTime = t.readUnsigned(), e.transparencyIndex = t.readByte(), e.terminator = t.readByte(), i.gce && i.gce(e)
                        },
                        s = function (t) {
                            t.comment = n(), i.com && i.com(t)
                        },
                        o = function (e) {
                            t.readByte();
                            e.ptHeader = t.readBytes(12), e.ptData = n(), i.pte && i.pte(e)
                        },
                        h = function (e) {
                            {
                                var r = function (e) {
                                        t.readByte();
                                        e.unknown = t.readByte(), e.iterations = t.readUnsigned(), e.terminator = t.readByte(), i.app && i.app.NETSCAPE && i.app.NETSCAPE(e)
                                    },
                                    s = function (t) {
                                        t.appData = n(), i.app && i.app[t.identifier] && i.app[t.identifier](t)
                                    };
                                t.readByte()
                            }
                            switch (e.identifier = t.read(8), e.authCode = t.read(3), e.identifier) {
                                case "NETSCAPE":
                                    r(e);
                                    break;
                                default:
                                    s(e)
                            }
                        },
                        a = function (t) {
                            t.data = n(), i.unknown && i.unknown(t)
                        };
                    switch (e.label = t.readByte(), e.label) {
                        case 249:
                            e.extType = "gce", r(e);
                            break;
                        case 254:
                            e.extType = "com", s(e);
                            break;
                        case 1:
                            e.extType = "pte", o(e);
                            break;
                        case 255:
                            e.extType = "app", h(e);
                            break;
                        default:
                            e.extType = "unknown", a(e)
                    }
                },
                o = function (r) {
                    var s = function (t, i) {
                        for (var e = new Array(t.length), n = t.length / i, r = function (n, r) {
                                var s = t.slice(r * i, (r + 1) * i);
                                e.splice.apply(e, [n * i, i].concat(s))
                            }, s = [0, 4, 2, 1], o = [8, 8, 4, 2], h = 0, a = 0; 4 > a; a++)
                            for (var l = s[a]; n > l; l += o[a]) r(l, h), h++;
                        return e
                    };
                    r.leftPos = t.readUnsigned(), r.topPos = t.readUnsigned(), r.width = t.readUnsigned(), r.height = t.readUnsigned();
                    var o = r.width * r.height,
                        h = oa(t.readByte());
                    r.lctFlag = h.shift(), r.interlaced = h.shift(), r.sorted = h.shift(), r.reserved = h.splice(0, 2), r.lctSize = sa(h.splice(0, 3)), r.lctFlag && (r.lct = e(1 << r.lctSize + 1)), r.lzwMinCodeSize = t.readByte();
                    var a = n();
                    r.pixels = aa(r.lzwMinCodeSize, a, o), r.interlaced && (r.pixels = s(r.pixels, r.width)), i.img && i.img(r)
                },
                h = function () {
                    var e = {};
                    switch (e.sentinel = t.readByte(), String.fromCharCode(e.sentinel)) {
                        case "!":
                            e.type = "ext", s(e);
                            break;
                        case ",":
                            e.type = "img", o(e);
                            break;
                        case ";":
                            e.type = "eof", i.eof && i.eof(e);
                            break;
                        default:
                            throw new Error("Unknown block: 0x" + e.sentinel.toString(16))
                    }
                    "eof" !== e.type && setTimeout(h, 0)
                },
                a = function () {
                    r(), setTimeout(h, 0)
                };
            a()
        },
        _a = "";
    i.addEventListener && i.addEventListener("keydown", function (t) {
        if (t.ctrlKey && t.shiftKey && t.altKey && 73 == t.keyCode) {
            var i = dh.name + "\nVersion - " + dh.version + "\nPublish Date - " + dh.publishDate + "\n" + dh.about + "\n" + dh.copyright + _a;
            dh.alert(i)
        }
    }, !1), _a = "\nLicensed to: " + decodeURIComponent("%E9%95%BF%E9%A3%9E%E5%85%89%E7%BA%A4%E5%85%89%E7%BC%86%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-%E4%BA%91%E7%AE%A1%E5%B9%B3%E5%8F%B0%E4%BA%A7%E5%93%81");
    var ua = {
            position: "absolute",
            userSelect: "none",
            outline: "none",
            transformOrigin: "0 0",
            "-webkit-tap-highlight-color": "rgba(0,0,0,0)"
        },
        ca = "Q-Canvas";
    Ti("." + ca, ua);
    var da = {
            width: "100%",
            height: "100%",
            position: "relative",
            overflow: "hidden",
            textAlign: "left",
            outline: "none",
            tapHighlightColor: "rgba(0,0,0,0)",
            userSelect: "none"
        },
        fa = "Q-CanvasPanel";
    Ti("." + fa, da);
    var ga = "Q-Graph",
        va = {
            overflow: "hidden",
            "text-align": "left",
            "-webkit-tap-highlight-color": "rgba(0,0,0,0)",
            outline: "none"
        };
    Ti("." + ga, va);
    var Ea = C(function (t) {
        this._lg3 = new ya, this._l0 = new Js, this._7s = [], this._lci = [], this._k4ingList = [], this._7w = {}, this.bounds = new so, this._iw = new Aa, this._viewport = new ba, this._iw.listener = function (t) {
            this._6b(t)
        }.bind(this), this._lcl(), this.setParent(t)
    }, {
        _lge: null,
        _ih: null,
        _l0: null,
        _lci: null,
        _iw: null,
        _let: function (t) {
            return t ? (this._5zs || (this._5zs = {}), this._5zs[t] ? !1 : (this._5zs[t] = !0, void this.invalidate())) : this.invalidate()
        },
        _8s: function (t) {
            return this._5zs && this._5zs[t]
        },
        isInvalidate: function () {
            return this._5z
        },
        clear: function () {
            this._l0.clear(), this._lci.length = 0, this._7w = {}, this._lg0 = !1, this.invalidate()
        },
        _6x: function () {
            this._let("size"), this._2f()
        },
        _2f: function () {
            this._let("viewport")
        },
        invalidate: function (t) {
            (t || !this._5z) && (this._5z = !0, this._k9 || (this._ixingID = requestAnimationFrame(this._em.bind(this))))
        },
        _6v: function (t) {
            return this._k9 = t, t ? void(this._ixingID && (cancelAnimationFrame(this._ixingID), this._ixingID = null)) : void(this._5z && this.invalidate(!0))
        },
        _em: function () {
            this._ixingID = null, this._5z = !1;
            var t = this._lg0;
            this._lg0 || (this._lck(), this._lg0 = !0), this._lcj(!t), this._34(), this._ix(), this._20()
        },
        _lcj: function (t) {
            this._lgc = t || this.fullRefresh, (t || this._5zs.size) && this._8l(), (t || this._5zs.matrix) && this._63(), this._lg4(t), this._3x(t), this._5zs = {}
        },
        _34: function () {
            this._lci.length = 0;
            var t = this._viewport;
            if (this._l0.forEach(function (i) {
                    if (i.__h0 !== !1) {
                        var e = this._lg6(i);
                        t.intersects(e.x, e.y, e.width, e.height) && this._lci.push(i)
                    }
                }, this), this._lci = this._hy(this._lci), !this._lgc) {
                var i = this._lg3;
                this._k4ingList.length = 0, i._lg7(this._viewport), i._i0() || this._lci.forEach(function (t) {
                    var e = this._lg6(t);
                    i._eg(e.x, e.y, e.width, e.height) && this._k4ingList.push(t)
                }, this)
            }
        },
        _hy: function (t) {
            return js ? t = f(t, this._8v) : t.sort(this._8v), t
        },
        _8v: function (t, i) {
            return t = t.zIndex || 0, i = i.zIndex || 0, t - i
        },
        _lg6: function (t) {
            return t.boundingBox
        },
        _ix: function () {
            if (this._lgc) return this._dg(), this._6d(!0), void this.render(this._lctx, this._lci);
            this._6d(this._leuffer);
            var t = this._lg3,
                i = this._lctx;
            i.save(), this._leuffer && (tn(i), i.drawImage(this._leuffer.canvas, this._leuffer.x, this._leuffer.y)), t._j4(i, this._dj.bind(this)), this._dg(), this.render(i, this._k4ingList), i.restore()
        },
        _6d: function (t) {
            this._letCanvasSizeFlag ? (this._letCanvasSizeFlag = !1, this._ih.setSize(this._width, this._height)) : t && Qe(this._ih)
        },
        _8l: function () {
            var t = this.width,
                i = this.height;
            return this._width == t && this._height == i ? !1 : (this._width = t, this._height = i, void(this._letCanvasSizeFlag = !0))
        },
        _3x: function (t) {
            if (!t && !this._5zs.viewport) return !1;
            var i = this._iw.reverseTransform([0, 0]),
                e = this.scale,
                n = this._width / e,
                r = this._height / e,
                s = this.rotate,
                o = this._viewport;
            if (o.x == i[0] && o.y == i[1] && o.width == n && o.height == r && o.rotate == s) return !1;
            var h = o.toJSON();
            return this._viewport.set(i[0], i[1], n, r, s, e), this._31(this._viewport, h, t), !0
        },
        _31: function (t, i, e) {
            this._lgc || e || (this._leuffer = this._g0(i, t))
        },
        _6b: function () {
            if (this._lg0) {
                if (this._k9) {
                    var t;
                    this._lcurrentMatrix ? this._lcurrentMatrix.transMatrix = t = ma.mul([], this._iw.m, ma.invert([], this._lcurrentMatrix.m)) : t = this._iw.m, this._4z(t)
                }
                this._let("matrix"), this._2f()
            }
        },
        _4z: function (t) {
            this.__lcssMatrix = t, La.setStyle(this._ih, "transform", t ? "matrix(" + t.join(",") + ")" : "")
        },
        _63: function () {
            var t = this._lcurrentMatrix;
            if (this._lcurrentMatrix = {
                    tx: this._iw.m[4],
                    ty: this._iw.m[5],
                    m: this._iw.m.slice(),
                    scale: this._iw._gn(),
                    rotate: this._iw._dy()
                }, this.__lcssMatrix && this._4z(null), !this._lgc) {
                if (this._2x(this._lcurrentMatrix, t), !t || t.scale != this._lcurrentMatrix.scale) return this._71(this._lcurrentMatrix.scale, t ? t.scale : null), void(this._lgc = !0);
                if (!t || t.rotate != this._lcurrentMatrix.rotate) return this._5i(this._lcurrentMatrix.rotate, t ? t.rotate : null), void(this._lgc = !0);
                var i = t.m[4] - this._lcurrentMatrix.m[4],
                    e = t.m[5] - this._lcurrentMatrix.m[5],
                    n = this.ratio;
                i *= n, e *= n;
                var r = 1e-4;
                (Math.abs(i - Math.round(i)) > r || Math.abs(e - Math.round(e)) > r) && (this._lgc = !0)
            }
        },
        _5x: function () {
            var t = this.bounds,
                i = t.clone();
            t.clear(), this._l0.forEach(function (i) {
                i.__h0 !== !1 && t.add(this._lg6(i))
            }, this), t.equals(i) || this._30(t, i)
        },
        _30: function () {},
        _lg0: !1,
        _lck: function () {},
        _98: function (t) {
            var i = t.ratio;
            t.scale(i, i), t.transform.apply(t, this._iw.m)
        },
        render: function (t, i) {
            i && i.length && (t.save(), this._98(t), i.forEach(function (i) {
                if (t.save(), i.visible !== !1) try {
                    i.render(t)
                } catch (e) {
                    console.error(e)
                }
                t.restore()
            }, this), t.restore())
        },
        setParent: function (t) {
            F(t) && (t = i.getElementById(t)), this._l4 != t && (this._l4 && this._lge && (k(this._l4, ga), this._l4.removeChild(this._lge)), this._l4 = t, this._l4 && (B(this._l4, ga), this._l4.appendChild(this._72()), this._6x()))
        },
        _72: function () {
            return this._lge || this._lcl(), this._lge
        },
        _lcl: function () {
            var t = Mi(!0);
            Ke(t.g), t.className = ca;
            var e = i.createElement("div");
            return e.addEventListener("mousedown", function (t) {
                return i.activeElement == this ? (t.preventDefault && t.preventDefault(), !1) : void 0
            }.bind(e), !1), e.className = fa, e.appendChild(t), e.tabIndex = 0, this._ih = t, this._lge = e, this._lctx = this._ih.getContext("2d"), t
        },
        toLogical: function (t, i) {
            return t instanceof Object && (ii(t) && (t = this._7f(t)), Array.isArray(t) ? (i = t[1] || 0, t = t[0] || 0) : (i = t.y || 0, t = t.x || 0)), this._iw.reverseTransform([t, i])
        },
        toCanvas: function (t, i) {
            return this._iw.transform([t, i])
        },
        _7f: function (t) {
            return mi(t, this._lge)
        },
        _d2: function (t, i, e) {
            if (t.hitTest instanceof Function) return t.hitTest(i, e);
            var n = this._lg6(t);
            return n ? e ? so.intersects(n.x, n.y, n.width, n.height, i[0] - e, i[1] - e, e + e, e + e) : so.intersects(n.x, n.y, n.width, n.height, i[0], i[1]) : t
        },
        hitTest: function (t, i) {
            return this._7x(t, i)
        },
        _7x: function (t, i) {
            i = this._97(i), t = this.toLogical(t);
            for (var e, n = this._lci.length; --n >= 0;)
                if (e = this._lci[n], this._d2(e, t, i)) return e
        },
        _97: function (t) {
            return (t === e || null === t) && (t = Zs.SELECTION_TOLERANCE), t ? t / this.scale : 0
        },
        getUIByMouseEvent: function (t, i) {
            if (t.uiId) return this._l0.getById(t.uiId);
            var e = this._7x(t, i);
            return t.uiId = e ? e.id : -1, e
        },
        _7w: null,
        invalidateUI: function (t) {
            this._7w[t.id] = t, this.invalidate()
        },
        _9b: function (t) {
            t.validate instanceof Function && t.validate(this)
        },
        _lem: function (t, i) {
            t.__ij && this._fx(t.__ij);
            var e = t.__h0;
            if (t.__h0 = this._du(t, i), !t.__h0) return e;
            var n = t.__ij;
            this._9b(t);
            var r = this._lg6(t);
            t.__ij = {
                x: r.x,
                y: r.y,
                width: r.width,
                height: r.height
            };
            var s = t.__h0 !== e || !so.equals(n, r);
            return s && t.__ij && this._fx(t.__ij), s
        },
        _du: function (t) {
            return t.visible !== !1
        },
        _$s: function (t) {
            this._l0.forEach(function (i) {
                this._lem(i, t)
            }, this), this._7w = {}, this._5x()
        },
        _lg4: function (t) {
            var i = this.scale;
            if (t) return this._$s(i);
            var e = this._letBoundsFlag;
            this._letBoundsFlag = !1;
            for (var n in this._7w) {
                var r = this._7w[n];
                e ? this._lem(r, i) : e = this._lem(r, i)
            }
            this._7w = {}, e && this._5x()
        },
        _7s: null,
        _20: function () {
            if (!this._7s.length) return !1;
            var t = this._7s;
            this._7s = [], t.forEach(function (t) {
                try {
                    var i = t.call,
                        e = t.scope,
                        n = t.delay;
                    e instanceof Object ? i = i.bind(e) : e && !n && (n = parseInt(e)), n ? setTimeout(i, n) : i()
                } catch (r) {}
            }, this), this._5z && this._em()
        },
        _df: function (t, i, e) {
            this._7s.push({
                call: t,
                scope: i,
                delay: e
            }), this._5z || this._20()
        },
        _42: function (t, i) {
            for (var e = this._lci, n = 0, r = e.length; r > n; n++)
                if (t.call(i, e[n]) === !1) return !1
        },
        _dd: function (t, i) {
            this._l0.forEach(t, i)
        },
        _$t: function (t, i) {
            for (var e = this._lci, n = e.length - 1; n >= 0; n--)
                if (t.call(i, e[n]) === !1) return !1
        },
        _3z: function (t, i) {
            this._l0.forEachReverse(t, i)
        },
        _3y: function () {
            return this.bounds
        },
        _f7: function (t, i, e) {
            t /= this.scale || 1, this._iu(t, i, e)
        },
        _iu: function (t, i, n) {
            if (this._lg0 && (i === e || null === i)) {
                var r = this.toLogical(this.width / 2, this.height / 2);
                i = r[0] || 0, n = r[1] || 0
            }
            return this._iw.scale(t, [i || 0, n || 0])
        },
        _d0: function (t, i) {
            this._iw.translate([t, i], !0)
        },
        _lgg: function (t, i, e, n) {
            if (e == this.scale && n !== !1) {
                var r = this.ratio;
                r != (0 | r) && (t = Math.round(t * r) / r, i = Math.round(i * r) / r)
            }
            this._iw.translateTo([t, i], e)
        },
        _iv: function (t, i) {
            return this._iu(this._da, t, i)
        },
        _hv: function (t, i) {
            return this._iu(1 / this._da, t, i)
        },
        _1o: function () {
            var t = this._3y();
            if (!t.isEmpty()) {
                var i = this.width / t.width,
                    e = this.height / t.height,
                    n = Math.min(i, e);
                return n = Math.max(this._fo, Math.min(this._fi, n)), {
                    scale: n,
                    cx: t.cx,
                    cy: t.cy
                }
            }
        },
        _da: 1.3,
        _fi: 10,
        _fo: .1,
        _lgc: !1,
        _71: function () {},
        _5i: function () {},
        _2x: function () {},
        _dg: function () {
            this._leuffer = null, this._lg3._jw()
        },
        _dj: function (t) {
            var i = this._iw,
                e = this._ih.ratio,
                n = this.scale,
                r = i._dy();
            if (!r) {
                var s = i.transform([t[0], t[1]]);
                return s[0] *= e, s[1] *= e, e *= n, s[2] = t[2] * e, s[3] = t[3] * e, s
            }
            var o = new so,
                h = i.transform([t[0], t[1]]);
            return o.add(h[0], h[1]), h = i.transform([t[0] + t[2], t[1]]), o.add(h[0], h[1]), h = i.transform([t[0], t[1] + t[3]]), o.add(h[0], h[1]), h = i.transform([t[0] + t[2], t[1] + t[3]]), o.add(h[0], h[1]), [o.x * e, o.y * e, o.width * e, o.height * e]
        },
        _g0: function (t, e) {
            var n = e._33(t.x, t.y, t.width, t.height);
            if (n) {
                var r = this._ih,
                    s = this.scale * this.ratio,
                    o = this._lg3,
                    h = {},
                    a = 1e-6;
                n.x > a && (h.left = e._4g(0, 0, n.x, e.height, s)), e.width - n.right > a && (h.right = e._4g(n.right, 0, e.width - n.right, e.height, s)), n.y > a && (h.top = e._4g(n.x, 0, n.width, n.y, s)), e.height - n.bottom > a && (h.bottom = e._4g(n.x, n.bottom, n.width, e.height - n.bottom, s)), X(h) || o._3u(h);
                var l = e._gx(t.x, t.y),
                    _ = (l[0] - n.x) * s,
                    u = (l[1] - n.y) * s,
                    c = n.width * s,
                    d = n.height * s;
                _ = Math.round(_), u = Math.round(u), c = Math.round(c), d = Math.round(d);
                var f = this._leackCanvas;
                return f || (f = this._leackCanvas = i.createElement("canvas"), f.g = f.getContext("2d")), f.width = c, f.height = d, tn(f.g), f.g.drawImage(r, _, u), _ = l[0] * s - _, u = l[1] * s - u, {
                    x: _,
                    y: u,
                    canvas: f
                }
            }
        },
        _kb: function (t, i, e, n) {
            this._lg3._ky(t, i, e, n)
        },
        _fx: function (t) {
            this._lg3._i2(t)
        }
    });
    Object.defineProperties(Ea.prototype, {
        width: {
            get: function () {
                return this._lge.clientWidth
            }
        },
        height: {
            get: function () {
                return this._lge.clientHeight
            }
        },
        rotate: {
            get: function () {
                return this._iw._dy()
            }
        },
        tx: {
            get: function () {
                return this._iw._7o()[0]
            }
        },
        ty: {
            get: function () {
                return this._iw._7o()[1]
            }
        },
        ratio: {
            get: function () {
                return this._ih ? this._ih.ratio : void 0
            }
        },
        scale: {
            get: function () {
                return this._iw._gn()
            },
            set: function (t) {
                this._f7(t)
            }
        },
        renderScale: {
            get: function () {
                return this.scale * this.ratio
            }
        },
        uis: {
            get: function () {
                return this._l0
            }
        },
        length: {
            get: function () {
                return this._l0.length
            }
        },
        viewportBounds: {
            get: function () {
                return this._viewport.getGlobalBounds()
            }
        }
    });
    var pa, ya = C({
        constructor: function () {
            this._fe = [], this._ij = new so, this._fr = Bs ? 20 : 50
        },
        _fr: 20,
        _fe: null,
        _ke: !1,
        _ij: null,
        _jw: function () {
            this._ke = !1, this._fe.length = 0, this._viewportClips = null, this._ij.clear()
        },
        _i0: function () {
            return 0 == this._fe.length && !this._viewportClips
        },
        _ky: function (t, i, e, n) {
            0 >= e || 0 >= n || this._fe.push([t, i, e, n])
        },
        _i2: function (t) {
            this._ky(t.x, t.y, t.width, t.height)
        },
        _3u: function (t) {
            var i = this._ij;
            for (var e in t) {
                var n = t[e],
                    r = n.getGlobalBounds();
                i.add(r)
            }
            this._viewportClips = t
        },
        _lg7: function (t, i) {
            for (var e = [], n = this._fe, r = 0, s = n.length; s > r; r++) {
                var o = n[r];
                t.intersects(o[0], o[1], o[2], o[3]) && (e.push(o), this._ij.addRect(o[0], o[1], o[2], o[3]))
            }
            this._fe = e, this._ke = i || e.length >= this._fr
        },
        _eg: function (t, i, e, n) {
            if (!this._ij.intersectsRect(t, i, e, n)) return !1;
            if (this._ke) return !0;
            if (this._viewportClips) {
                var r = this._viewportClips;
                for (var s in r)
                    if (r[s].intersects(t, i, e, n)) return !0
            }
            for (var o, h = 0, a = this._fe.length; a > h; h++)
                if (o = this._fe[h], so.intersects(t, i, e, n, o[0], o[1], o[2], o[3])) return !0;
            return !1
        },
        _j4: function (t, i) {
            if (this._i0()) return !1;
            if (t.beginPath(), this._ke) {
                var e = i([this._ij.x, this._ij.y, this._ij.width, this._ij.height]);
                return en(t, e[0], e[1], e[2], e[3]), void t.clip()
            }
            if (this._viewportClips)
                for (var n in this._viewportClips) {
                    var e = this._viewportClips[n].canvasBounds;
                    en(t, e[0], e[1], e[2], e[3])
                }
            for (var r = this._fe, s = 0, o = r.length; o > s; s++) {
                var e = i(r[s]);
                en(t, e[0], e[1], e[2], e[3])
            }
            t.clip()
        }
    });
    ya._toIntRect = function (t, i, e, n) {
        return t instanceof Object && (i = t.y, e = t.width, n = t.height, t = t.x), e = K(t + e) - (t = q(t)), n = K(i + n) - (i = q(i)), [t, i, e, n]
    }, ya._lc7 = q, ya._gs = K, fh.NAVIGATION_BUTTON = "navigation.button", fh.NAVIGATION_SCROLLBAR = "navigation.scrollbar", Zs.NAVIGATION_TYPE = fh.NAVIGATION_SCROLLBAR;
    var Ta = C({
        _ix: function () {
            S(this, Ta, "_ix", arguments), this._topCanvas._ix()
        },
        _8v: function (t, i) {
            return t = t.$data.zIndex || 0, i = i.$data.zIndex || 0, t - i
        },
        "super": Ea,
        constructor: function (t, e) {
            this._jc = t, F(e) && (e = i.getElementById(e)), e && e.tagName || (e = i.createElement("div")), I(this, Ta, [e]), this._topCanvas = new is(this, this._lge), this._gc = [], this._jc._8.addListener(this._1f, this), this._jc._1e.addListener(this._8f, this), this._jc._13.addListener(this._6q, this), this._jc._$h.addListener(this._2i, this), this._jc._$m.addListener(this._3e, this), this._lg1 = {}, this._3k(Zs.NAVIGATION_TYPE, !0)
        },
        _4z: function (t) {
            S(this, Ta, "_4z", arguments), this._topCanvas._4z(t)
        },
        _gk: function (t) {
            return t.id || (t = this._l0.getById(t)), t ? (this._l0.remove(t), t.destroy(), t.__ij && this._fx(t.__ij), void(this._letBoundsFlag = !0)) : !1
        },
        _gf: function () {
            this._l0.forEach(function (t) {
                t.destroy()
            }), this._l0.clear()
        },
        _du: function (t, i) {
            var e = t.data || t;
            return e._$p && (e._$p = !1, e._h0 = this._4n(e, i)), e._h0 !== !1
        },
        _4n: function (t, i) {
            return this._3a(t, i) ? !this._jc._h0Filter || this._jc._h0Filter(t, i) !== !1 : !1
        },
        _9m: function (t) {
            return this._jc._3b == Vr(t)
        },
        _3a: function (t, i) {
            if (t.visible === !1) return !1;
            if (!(t instanceof xa)) return this._jc._3b != Vr(t) ? !1 : !t._d4;
            var e = t.fromAgent,
                n = t.toAgent;
            if (!e || !n) return !1;
            if (e == n && !t.isLooped()) return !1;
            if (t.isBundleEnabled()) {
                var r = t.getEdgeBundle(!0);
                if (r && !r._du(t, i)) return !1
            }
            var s = this._du(e, i),
                o = this._du(n, i);
            return s && o ? !0 : !1
        },
        _lg6: function (t) {
            return t._lg0 ? {
                x: t.$x + t.uiBounds.x,
                y: t.$y + t.uiBounds.y,
                width: t.uiBounds.width,
                height: t.uiBounds.height
            } : void 0
        },
        _2r: function (t) {
            var i = this._jy(t);
            if (i) {
                var e = this._lg6(i);
                if (e) return new so(e)
            }
        },
        _d2: function (t, i, e) {
            return t.hitTest(i[0], i[1], e)
        },
        hitTest: function (t, i) {
            var e = S(this, Ta, "hitTest", arguments);
            if (e) {
                t = this.toLogical(t), i = this._97(i);
                var n = e.hitTest(t[0], t[1], i, !0);
                if (n instanceof Na) return n
            }
            return e
        },
        _35: function (t) {
            return this.getUIByMouseEvent(t)
        },
        _6d: function () {
            S(this, Ta, "_6d", arguments), this._topCanvas._h9(this.width, this.height)
        },
        _k1: 1,
        _lci: null,
        _86: null,
        _87: null,
        _l0: null,
        _l4: null,
        _ih: null,
        _lg3: null,
        _5z: !1,
        _lg0: !1,
        _iw: null,
        _42: function (t, i) {
            for (var e = this._lci, n = 0, r = e.length; r > n; n++)
                if (t.call(i, e[n]) === !1) return !1
        },
        _dd: function (t, i) {
            this._l0.forEach(t, i)
        },
        _$t: function (t, i) {
            for (var e = this._lci, n = e.length - 1; n >= 0; n--)
                if (t.call(i, e[n]) === !1) return !1
        },
        _3z: function (t, i) {
            this._l0.forEachReverse(t, i)
        },
        _31: function (t) {
            S(this, Ta, "_31", arguments), this._viewportChanged = {
                value: t
            }
        },
        _lck: function () {
            this._3x(!0), this._originAdjusted || (this._originAdjusted = !0, this._jc && this._jc.originAtCenter && this._iw.translateTo([this.width / 2, this.height / 2]))
        },
        _em: function () {
            if (!this._h8ed && this._5z) {
                if (this._ixingID = null, this._5z = !1, this._lg0 && this._jc && this._jc._$p && (this._jc._$p = !1, this._jc.forEach(function (t) {
                        t.invalidateVisibility(!0)
                    })), S(this, Ta, "_em", arguments), this._87Changed) {
                    this._6h && this._6h._is();
                    var t = this._87Changed.value,
                        i = this._87Changed.old;
                    this._87Changed = null, this._jc._4e(new po(this._jc, "element.bounds", t, i))
                }
                this._viewportChanged && (this._viewportChanged = !1, this._6h && this._6h._31 && this._6h._31(this._viewport.width * this._viewport.scale, this._viewport.height * this._viewport.scale), this._jc._4e(new po(this._jc, "viewport", this._viewport)))
            }
        },
        _gc: null,
        _lem: function (t) {
            var i = t.$data;
            if (!t._1c && !i._5z && !i._$p) return !1;
            var e = t.$invalidateSize;
            return e = S(this, Ta, "_lem", arguments) || e
        },
        _9b: function (t) {
            var i = t.$data;
            i.__3n && (i.__3n = !1, t._3n()), i.__5z && i._gy() && (t._4y(), i.__5z = !1), (t._1c || i._5z) && (i._5z = !1, t.validate())
        },
        _fy: function (t, i) {
            var e = t.ratio;
            t.scale(e, e), t.transform.apply(t, this._iw.m);
            for (var n = this.renderScale, r = [], s = 0, o = i.length; o > s; s++) {
                var h = i[s];
                h._ix(t, n), h._ie && h._ie.length && r.push(h)
            }
            if (r.length)
                for (s = 0, o = r.length; o > s; s++) r[s]._8j(t, n)
        },
        render: function (t, i) {
            if (i.length) {
                if (t.save(), Bs) try {
                    this._fy(t, i)
                } catch (e) {} else this._fy(t, i);
                t.restore()
            }
        },
        _g7: function (t, i, e) {
            t.save(), t.translate(-e.x * i, -e.y * i), t.scale(i, i);
            var n, r, s = this._l0._ig.slice();
            s = this._hy(s);
            for (var o = [], h = 0, a = s.length; a > h; h++) n = s[h], n.__h0 && (r = this._lg6(n), e.intersectsRect(r.x, r.y, r.width, r.height) && (n._ix(t, i), n._ie && n._ie.length && o.push(n)));
            if (o.length)
                for (h = 0, a = o.length; a > h; h++) o[h]._8j(t, i);
            t.restore()
        },
        _10: function () {},
        _1p: function () {
            for (var t, i, e = this._l0._ig, n = new so, r = e.length - 1; r >= 0; r--) t = e[r], t._h0 && (i = t.uiBounds, n.addRect(t.$x + i.x, t.$y + i.y, i.width, i.height));
            var s = this._87;
            this._87 = n, n.equals(s) || this._10(s, n)
        },
        _5o: function () {
            this._lci.length = 0, this._86 = {}
        },
        _jz: function () {
            this._jw()
        },
        _h8: function () {
            this._jw(), this._h8ed = !0, this._5z = !1, this._topCanvas.clear(), this._7s.length = 0, this._6h && (this._6h._h8(), delete this._6h)
        },
        _jy: function (t) {
            return this._l0.getById(t.id || t)
        },
        _$g: function (t) {
            return this._ej(t)
        },
        _f5: function (t, i) {
            var e = this.toCanvas(t, i);
            return {
                x: e[0],
                y: e[1]
            }
        },
        _ej: function (t, i) {
            var e = this.toLogical(t, i);
            return {
                x: e[0],
                y: e[1]
            }
        },
        _$c: null,
        _3e: function (t) {
            var i = t.source,
                e = t.data;
            if (e)
                if (this._lg0) {
                    var n, r;
                    if (z(e))
                        for (var s = 0, o = e.length; o > s; s++) r = e[s].id, n = this._l0.getById(r), n && (n.selected = i.containsById(r), n.invalidateRender());
                    else {
                        if (r = e.id, n = this._l0.getById(r), !n) return;
                        n.selected = i.containsById(r), n.invalidateRender()
                    }
                    this._let()
                } else {
                    this._$c || (this._$c = {});
                    var n, r;
                    if (z(e))
                        for (var s = 0, o = e.length; o > s; s++) r = e[s].id, this._$c[r] = !0;
                    else r = e.id, this._$c[r] = !0
                }
        },
        _jc: null,
        _lcq: function (t) {
            var i = t.uiClass;
            return i ? new i(t, this._jc) : void 0
        },
        _1f: function (t) {
            if (!this._lg0) return !1;
            var i = t.source,
                e = t.kind;
            "enableSubNetwork" == e && this._jc.invalidateVisibility(), "uiClass" == e ? (this._gk(i.id), this._jm(i)) : "expanded" == e && i._gy() && t.value && this._5n(i);
            var n = this._l0.getById(i.id);
            n && n._lg0 && n.onPropertyChange(t) && this._let()
        },
        _38: function (t) {
            var i = this._jy(t);
            i && (i.invalidateData(), this._let())
        },
        _8f: function (t) {
            if (!this._lg0) return !1;
            switch (t.kind) {
                case So.KIND_ADD:
                    this._jm(t.data);
                    break;
                case So.KIND_REMOVE:
                    this._f8(t.data);
                    break;
                case So.KIND_CLEAR:
                    this._i4(t.data)
            }
        },
        _jw: function () {
            this._lg1 = {}, this._gf(), this.clear()
        },
        _lg1: null,
        _jm: function (t) {
            var i = this._lcq(t);
            i && (this._l0.add(i), this._lg0 && (this._lg1[t.id] = t), this._let())
        },
        _f8: function (t) {
            if (Array.isArray(t)) {
                for (var i, e = [], n = 0, r = t.length; r > n; n++) i = t[n].id, e.push(i), delete this._lg1[i];
                t = e
            } else t = t.id, delete this._lg1[t], t = [t];
            t.forEach(function (t) {
                this._gk(t)
            }, this), this._let()
        },
        _i4: function () {
            this._jw()
        },
        _6q: function (t) {
            return this._lg0 ? void(t.source instanceof Ca && !this._lg1[t.source.id] && (t.oldValue && (this._38(t.oldValue), t.oldValue.__5z = !0), t.value && (this._38(t.value), t.value.__5z = !0), this._5n(t.source))) : !1
        },
        _2i: function (t) {
            return this._lg0 ? void(t.source instanceof Ca && !this._lg1[t.source.id] && this._5n(t.source)) : !1
        },
        _2k: function (t) {
            if (t._edgeBundleInvalidateFlag) {
                var i = t.getEdgeBundle(!0);
                if (!i) return t._edgeBundleInvalidateFlag = !1, void t.validateEdgeBundle();
                i.validate(this._jc), i._lee(function (t) {
                    t.validateEdgeBundle()
                })
            }
        },
        _$s: function (t) {
            var i, e = (this._jc, this._jc.graphModel),
                n = this._l0,
                r = [],
                s = 1;
            if (e.forEachByDepthFirst(function (t) {
                    return t instanceof xa ? (this._2k(t), void r.push(t)) : (i = this._lcq(t), void(i && (n.add(i), t.__k3 = s++)))
                }, this), n.length)
                for (var o = n._ig, s = o.length - 1; s >= 0; s--) i = o[s], this._39(i, i.$data, t);
            for (var h, s = 0, a = r.length; a > s; s++)
                if (h = r[s], i = this._lcq(h)) {
                    this._39(i, h, t), n.add(i);
                    var l = h.fromAgent,
                        _ = h.toAgent,
                        u = l.__k3 || 0;
                    l != _ && (u = Math.max(u, _.__k3 || 0)), h.__k3 = u
                }
            if (r.length && n._ig.sort(function (t, i) {
                    return t.$data.__k3 - i.$data.__k3
                }), this._$c) {
                var c = e.selectionModel;
                for (var d in this._$c)
                    if (c.containsById(d)) {
                        var i = n.getById(d);
                        i && (i.selected = !0)
                    }
                this._$c = null
            }
            this._5x()
        },
        _lg4: function (t, i) {
            if (t) return this._$s();
            var e = this._letBoundsFlag;
            this._letBoundsFlag = !1;
            for (var n in this._lg1) {
                var r = this._lg1[n];
                r instanceof Ca ? this._5n(r) : this._54(r)
            }
            this._lg1 = {};
            for (var s, o, h = this._l0._ig, a = [], l = h.length - 1; l >= 0; l--) s = h[l], o = s.$data, o instanceof xa ? (this._2k(o), a.push(s)) : this._39(s, o, i) && !e && (e = !0);
            if (a.length)
                for (var l = 0, _ = a.length; _ > l; l++) s = a[l], this._39(s, s.$data, i) && !e && (e = !0);
            e && this._5x()
        },
        _39: function (t, i, e) {
            if (i instanceof xa) return i.__3n && (i.__3n = !1, t._3n()), this._lem(t, e);
            if (i.__5z && i._gy() && (t._4y(), i.__5z = !1), this._lem(t, e)) {
                var n = this._3r(i);
                return n && (n.__5z = !0), i.hasEdge() && i.forEachEdge(function (t) {
                    t.__3n = !0
                }, this), !0
            }
        },
        _2t: function (t, i) {
            var e = t.fromAgent,
                n = t.toAgent,
                r = i.getIndexById(e.id);
            if (e == n) return r;
            var s = i.getIndexById(n.id);
            return Math.max(r, s)
        },
        _2v: function (t, i) {
            var e = this.graphModel._gq(t);
            return e ? i.getIndexById(e.id) : 0
        },
        _5n: function (t) {
            var i = this._l0,
                e = i.getById(t.id);
            if (!e) throw new Error("UI '" + t.name + "' not found");
            var r = this._2v(t, i),
                s = [e];
            t.hasChildren() && n(t, function (t) {
                t instanceof Ca && (e = i.getById(t.id), e && s.push(e))
            }, this), this._3v(i, r, s)
        },
        _54: function (t) {
            var i = this._l0.getById(t.id);
            if (i) {
                var e = this._2t(t, this._l0);
                this._l0.setIndexBefore(i, e)
            }
        },
        _3v: function (t, i, e) {
            function n(t) {
                r.add(t)
            }
            var r = new Js;
            if (g(e, function (e) {
                    i = t.setIndexAfter(e, i), e.$data.forEachEdge(n)
                }, this), 0 != r.length) {
                r.forEach(this._54, this)
            }
        },
        _83: function (t) {
            return t.getEdgeBundle(!0)
        },
        _3r: function (t) {
            var i = gn(t);
            return i && i.expanded ? i : null
        },
        _64: null,
        _6h: null,
        _3k: function (t, i) {
            return i || t != this._64 ? (this._64 = t, this._6h && (this._6h._h8(), delete this._6h), t == fh.NAVIGATION_SCROLLBAR ? void(this._6h = new Qr(this, this._lge)) : t == fh.NAVIGATION_BUTTON ? void(this._6h = new Jr(this, this._lge)) : void 0) : !1
        },
        _2x: function (t, i) {
            this._6h && this._6h._is(), this._jc._4e(new po(this._jc, "transform", t, i))
        },
        _71: function (t, i) {
            this._jc._4e(new po(this._jc, "scale", t, i))
        },
        _30: function (t, i) {
            this._87Changed = {
                value: t,
                old: i
            }
        },
        _75: function () {
            this._6x()
        }
    });
    Object.defineProperties(Ta.prototype, {
        _viewportBounds: {
            get: function () {
                return this.viewportBounds
            }
        },
        _scale: {
            get: function () {
                return this.scale
            },
            set: function (t) {
                this._f7(t)
            }
        },
        _tx: {
            get: function () {
                return this.tx
            }
        },
        _ty: {
            get: function () {
                return this.ty
            }
        },
        graphModel: {
            get: function () {
                return this._jc._jcModel
            }
        }
    });
    var ma = {};
    ma.create = function () {
        return [1, 0, 0, 1, 0, 0]
    }, ma.invert = function (t, i) {
        var e = i[0],
            n = i[1],
            r = i[2],
            s = i[3],
            o = i[4],
            h = i[5],
            a = e * s - n * r;
        return a ? (a = 1 / a, t[0] = s * a, t[1] = -n * a, t[2] = -r * a, t[3] = e * a, t[4] = (r * h - s * o) * a, t[5] = (n * o - e * h) * a, t) : null
    }, ma.multiply = function (t, i, e) {
        var n = i[0],
            r = i[1],
            s = i[2],
            o = i[3],
            h = i[4],
            a = i[5],
            l = e[0],
            _ = e[1],
            u = e[2],
            c = e[3],
            d = e[4],
            f = e[5];
        return t[0] = n * l + s * _, t[1] = r * l + o * _, t[2] = n * u + s * c, t[3] = r * u + o * c, t[4] = n * d + s * f + h, t[5] = r * d + o * f + a, t
    }, ma.mul = ma.multiply, ma.rotate = function (t, i, e) {
        var n = i[0],
            r = i[1],
            s = i[2],
            o = i[3],
            h = i[4],
            a = i[5],
            l = Math.sin(e),
            _ = Math.cos(e);
        return t[0] = n * _ + s * l, t[1] = r * _ + o * l, t[2] = n * -l + s * _, t[3] = r * -l + o * _, t[4] = h, t[5] = a, t
    }, ma.scale = function (t, i, e) {
        var n = i[0],
            r = i[1],
            s = i[2],
            o = i[3],
            h = i[4],
            a = i[5],
            l = e[0],
            _ = e[1];
        return t[0] = n * l, t[1] = r * l, t[2] = s * _, t[3] = o * _, t[4] = h, t[5] = a, t
    }, ma.translate = function (t, i, e) {
        var n = i[0],
            r = i[1],
            s = i[2],
            o = i[3],
            h = i[4],
            a = i[5],
            l = e[0],
            _ = e[1];
        return t[0] = n, t[1] = r, t[2] = s, t[3] = o, t[4] = n * l + s * _ + h, t[5] = r * l + o * _ + a, t
    }, ma.transform = function (t, i) {
        var e = i[0],
            n = i[1];
        return [e * t[0] + n * t[2] + t[4], e * t[1] + n * t[3] + t[5]]
    }, ma.reverseTransform = function (t, i) {
        return ma.transform(ma.invert([], t), i)
    };
    var Oa = Math.PI + Math.PI,
        wa = G,
        Aa = C({
            equals: function (t) {
                if (!t || !Array.isArray(t)) return !1;
                for (var i = this.m, e = 0; e < i.length;) {
                    if (i[e] != t[e]) return !1;
                    ++e
                }
                return !0
            },
            constructor: function (t) {
                this.m = t || ma.create(), this.im = []
            },
            listener: null,
            _5z: !0,
            invalidate: function () {
                return this._5z = !0, this._leackM && this.equals(this._leackM) ? !1 : (this.listener && this.listener({
                    target: this,
                    kind: "invalidate"
                }), this._leackM = this.m.slice(), this)
            },
            validate: function () {
                return this._5z = !1, ma.invert(this.im, this.m), this
            },
            translate: function (t, i) {
                return wa(t) && (t = [arguments[0], arguments[1]], i = arguments[2]), i !== !1 ? (this.m[4] += t[0], this.m[5] += t[1], this.invalidate()) : (ma.translate(this.m, this.m, t), this.invalidate())
            },
            translateTo: function (t, i) {
                return wa(t) && (t = [arguments[0], arguments[1]], i = arguments[2]), i && (i /= this._gn(), ma.scale(this.m, this.m, [i, i])), this.m[4] = t[0], this.m[5] = t[1], this.invalidate()
            },
            scale: function (t, i) {
                return "number" == typeof t && (t = [t, t]), i ? (ma.translate(this.m, this.m, i), ma.scale(this.m, this.m, t), ma.translate(this.m, this.m, nn(i))) : ma.scale(this.m, this.m, t), this.invalidate()
            },
            rotate: function (t, i) {
                return i ? (ma.translate(this.m, this.m, i), ma.rotate(this.m, this.m, t), ma.translate(this.m, this.m, nn(i))) : ma.rotate(this.m, this.m, t), this.invalidate()
            },
            transform: function (t) {
                return ma.transform(this.m, t)
            },
            reverseTransform: function (t) {
                return ma.transform(this._4d(), t)
            },
            toString: function () {
                return "matrix(" + this.m.join(",") + ")"
            },
            _4d: function () {
                return this._5z && this.validate(), this.im
            },
            _dw: function () {
                var t = this.m[0],
                    i = this.m[1],
                    e = this.m[2],
                    n = this.m[3];
                return [Math.sqrt(t * t + e * e), Math.sqrt(i * i + n * n)]
            },
            _gn: function () {
                var t = this.m[0],
                    i = this.m[2];
                return Math.sqrt(t * t + i * i)
            },
            _7o: function () {
                return [this.m[4], this.m[5]]
            },
            _lch: function () {
                var t = this.m[0],
                    i = this.m[1],
                    e = this.m[2],
                    n = this.m[3];
                return [rn(Math.atan2(i, n)), rn(Math.atan2(-e, t))]
            },
            _dy: function () {
                return rn(Math.atan2(this.m[1], this.m[3]))
            }
        }),
        ba = C({
            constructor: function () {},
            x: 0,
            y: 0,
            width: 0,
            height: 0,
            rotate: 0,
            set: function (t, i, e, n, r, s) {
                return this.x = t, this.y = i, this.width = e, this.height = n, this.rotate = r, this._lcos = Math.cos(r), this._sin = Math.sin(r), this.scale = s, this._globalBounds = null, this
            },
            _gx: function (t, i) {
                return t -= this.x, i -= this.y, this.rotate ? hn(t, i, this._sin, this._lcos) : [t, i]
            },
            _7n: function (t) {
                var i = new so;
                return i.add(this._gx(t.x, t.y)), i.add(this._gx(t.x + t.width, t.y)), i.add(this._gx(t.x, t.y + t.height)), i.add(this._gx(t.x + t.width, t.y + t.height)), i
            },
            _eq: function (t, i) {
                if (this.rotate) {
                    var e = hn(t, i, Math.sin(-this.rotate), Math.cos(-this.rotate));
                    t = e[0], i = e[1]
                }
                return [this.x + t, this.y + i]
            },
            _5k: function (t, i) {
                var e = this._gx(t, i);
                return t = e[0], i = e[1], t >= 0 && i >= 0 && t <= this.width && i <= this.height
            },
            intersects: function (t, i, e, n) {
                if (!this.rotate) return so.intersects(this.x, this.y, this.width, this.height, t, i, e, n);
                if (!e || !n) return this._5k(t, i);
                var r = this.getGlobalBounds();
                if (!r.intersects(t, i, e, n)) return !1;
                for (var s = r.points, o = 0; o < s.length;) {
                    var h = s[o];
                    if (so.intersectsPoint(t, i, e, n, h[0], h[1])) return !0;
                    o++
                }
                var a = [
                    [t, i],
                    [t + e, i],
                    [t, i + n],
                    [t + e, i + n]
                ];
                for (o = 0; o < a.length;) {
                    var h = a[o];
                    if (this._5k(h[0], h[1])) return !0;
                    o++
                }
                return on(s, a)
            },
            getGlobalBounds: function () {
                return this._globalBounds || (this._globalBounds = this._6y(0, 0, this.width, this.height)), this._globalBounds
            },
            _6y: function (t, i, e, n) {
                if (!this.rotate) return new so(this.x + t, this.y + i, e, n);
                var r = [],
                    s = new so,
                    o = this._eq(t, i);
                return r.push(o), s.add(o[0], o[1]), o = this._eq(t + e, i), r.push(o), s.add(o[0], o[1]), o = this._eq(t, i + n), r.push(o), s.add(o[0], o[1]), o = this._eq(t + e, i + n), r.push(o), s.add(o[0], o[1]), s.points = r, s
            },
            _4g: function (t, i, e, n, r) {
                var s;
                if (this.rotate) {
                    var o = this._eq(t, i);
                    s = (new ba).set(o[0], o[1], e, n, this.rotate, this.scale)
                } else s = (new ba).set(this.x + t, this.y + i, e, n, 0, this.scale);
                return s.canvasBounds = [Math.round(r * t), Math.round(r * i), Math.round(r * e), Math.round(r * n)], s
            },
            _33: function (t, i, e, n) {
                if (!this.rotate) {
                    var r = so.intersection(this.x, this.y, this.width, this.height, t, i, e, n);
                    return r && r.offset(-this.x, -this.y), r
                }
                var s = this._gx(t, i);
                return t = s[0], i = s[1], so.intersection(0, 0, this.width, this.height, s[0], s[1], e, n)
            },
            equals: function (t) {
                return this.x == t.x && this.y == t.y && this.width == t.width && this.height == t.height && this.rotate == t.rotate
            },
            toString: function () {
                return this.x + "," + this.y + "," + this.width + "," + this.height + "," + this.rotate
            },
            toJSON: function () {
                return {
                    x: this.x,
                    y: this.y,
                    width: this.width,
                    height: this.height,
                    rotate: this.rotate,
                    scale: this.scale
                }
            }
        }),
        La = {
            setStyle: yi,
            setStyles: Ei,
            addRule: Ti,
            pre: No
        },
        Sa = function (t, i, e, n) {
            this.source = t, this.kind = i, this.oldValue = n, this.value = e, this.propertyType = fh.PROPERTY_TYPE_STYLE
        };
    A(Sa, po);
    var Ia = function (t) {
        this.id = ++Ps, this._lei = {}, this._io = {}, t && (this.$name = t)
    };
    Ia.prototype = {
        _io: null,
        getStyle: function (t) {
            return this._io[t]
        },
        setStyle: function (t, i) {
            var e = this._io[t];
            return e === i || e && i && e.equals && e.equals(i) ? !1 : this._lga(t, i, new Sa(this, t, i, e), this._io)
        },
        putStyles: function (t, i) {
            for (var e in t) {
                var n = t[e];
                i ? this._io[e] = n : this.setStyle(e, n)
            }
        },
        _$p: !0,
        invalidateVisibility: function (t) {
            this._$p = !0, t || (this instanceof Ca && this.hasEdge() && this.forEachEdge(function (t) {
                t._$p = !0
            }), this._gy() && this.hasChildren() && this.forEachChild(function (t) {
                t.invalidateVisibility()
            }))
        },
        onParentChanged: function () {
            this.invalidateVisibility()
        },
        _gy: function () {
            return !this._3o && this instanceof Pa
        },
        invalidate: function () {
            this.onEvent(new Eo(this, "ui", "invalidate"))
        },
        _lek: null,
        addUI: function (t, i) {
            if (this._lek || (this._lek = new Js), t.id || (t.id = ++Ps), this._lek.containsById(t.id)) return !1;
            var e = {
                id: t.id,
                ui: t,
                bindingProperties: i
            };
            this._lek.add(e);
            var n = new Eo(this, "ui", "add", e);
            return this.onEvent(n)
        },
        removeUI: function (t) {
            if (!this._lek) return !1;
            var i = this._lek.getById(t.id);
            return i ? (this._lek.remove(i), void this.onEvent(new Eo(this, "ui", "remove", i))) : !1
        },
        toString: function () {
            return this.$name || this.id
        },
        type: "Q.Element",
        _3o: !1,
        _h0: !0,
        inGroup: function (t) {
            var i = gn(this);
            return i == t || i && t instanceof Pa && i.isDescendantOf(t)
        }
    }, A(Ia, Io), D(Ia.prototype, ["uiClass", "name", "zIndex", "tooltip"]), Q(Ia.prototype, {
        enableSubNetwork: {
            get: function () {
                return this._3o
            },
            set: function (t) {
                if (this._3o != t) {
                    var i = this._3o;
                    this._3o = t, this instanceof Ca && this._$y(), this.onEvent(new po(this, "enableSubNetwork", t, i))
                }
            }
        },
        bindingUIs: {
            get: function () {
                return this._lek
            }
        },
        styles: {
            get: function () {
                return this._io
            },
            set: function (t) {
                if (this._io != t) {
                    for (var i in this._io) i in t || (t[i] = e);
                    this.putStyles(t), this._io = t
                }
            }
        }
    }), dh.findGroup = gn;
    var xa = function (t, i, e) {
        this.id = ++Ps, this._lei = {}, this._io = {}, e && (this.$name = e), this.$from = t, this.$to = i, this.connect()
    };
    xa.prototype = {
        $uiClass: hr,
        _j1: null,
        _ht: null,
        _j2: null,
        _hr: null,
        _eh: !1,
        type: "Q.Edge",
        otherNode: function (t) {
            return t == this.from ? this.to : t == this.to ? this.from : void 0
        },
        connect: function () {
            if (this._eh) return !1;
            if (!this.$from || !this.$to) return !1;
            if (this._eh = !0, this.$from == this.$to) return void this.$from._h3(this);
            bn(this.$to, this), wn(this.$from, this), ln(this.$from, this, this.$to);
            var t = this.fromAgent,
                i = this.toAgent;
            if (t != i) {
                var e;
                this.$from._d4 && (un(t, this, i), e = !0), this.$to._d4 && (dn(i, this, t), e = !0), e && ln(t, this, i)
            }
        },
        disconnect: function () {
            if (!this._eh) return !1;
            if (this._eh = !1, this.$from == this.$to) return void this.$from._leo(this);
            An(this.$from, this), Ln(this.$to, this), _n(this.$from, this, this.$to);
            var t = this.fromAgent,
                i = this.toAgent;
            if (t != i) {
                var e;
                this.$from._d4 && (cn(t, this, i), e = !0), this.$to._d4 && (fn(i, this, t), e = !0), e && _n(t, this, i)
            }
        },
        isConnected: function () {
            return this._eh
        },
        isInvalid: function () {
            return !this.$from || !this.$to
        },
        isLooped: function () {
            return this.$from == this.$to
        },
        getEdgeBundle: function (t) {
            return t ? this._2d() : this.isLooped() ? this.$from._3p : this.$from.getEdgeBundle(this.$to)
        },
        hasEdgeBundle: function () {
            var t = this.getEdgeBundle(!0);
            return t && t.edges.length > 1
        },
        _2d: function () {
            var t = this.fromAgent,
                i = this.toAgent;
            return t == i ? this.$from._d4 || this.$to._d4 ? null : this.$from._3p : this.fromAgent.getEdgeBundle(this.toAgent)
        },
        _9c: null,
        hasPathSegments: function () {
            return this._9c && !this._9c.isEmpty()
        },
        isBundleEnabled: function () {
            return this.bundleEnabled && !this.hasPathSegments()
        },
        firePathChange: function (t) {
            this.onEvent(new po(this, "path.segment", t))
        },
        addPathSegment: function (t, i, e) {
            var n = new qh(i || Hh, t);
            this._9c || (this._9c = new Js), this._9c.add(n, e), this.firePathChange(n)
        },
        addPathSegement: function () {
            return dh.log('change "edge.addPathSegement(...)" to "edge.addPathSegment(...)"'), this.addPathSegment.apply(this, arguments)
        },
        removePathSegmentByIndex: function (t) {
            if (!this._9c) return !1;
            var i = this._9c.getByIndex(t);
            i && (this._9c.remove(i), this.firePathChange(i))
        },
        removePathSegment: function (t) {
            return this._9c ? (this._9c.remove(t), void this.firePathChange(t)) : !1
        },
        movePathSegment: function (t, i, e) {
            if (!this._9c) return !1;
            if (t = t || 0, i = i || 0, dh.isNumber(e)) {
                var n = this._9c.getByIndex(e);
                return n ? (n.move(t, i), void this.firePathChange()) : !1
            }
            g(function (e) {
                e.move(t, i)
            }), this.firePathChange()
        },
        move: function (t, i) {
            return this._9c ? (this._9c.forEach(function (e) {
                e.move(t, i)
            }, this), void this.firePathChange()) : !1
        },
        validateEdgeBundle: function () {}
    }, A(xa, Ia), Q(xa.prototype, {
        pathSegments: {
            get: function () {
                return this._9c
            },
            set: function (t) {
                dh.isArray(t) && (t = new Js(t)), this._9c = t, this.firePathChange()
            }
        },
        from: {
            get: function () {
                return this.$from
            },
            set: function (t) {
                if (this.$from != t) {
                    var i = new po(this, "from", t, this.$from);
                    this.beforeEvent(i) !== !1 && (this.disconnect(), this.$from = t, this.connect(), this.onEvent(i))
                }
            }
        },
        to: {
            get: function () {
                return this.$to
            },
            set: function (t) {
                if (this.$to != t) {
                    var i = new po(this, "to", t, this.$to);
                    this.beforeEvent(i) !== !1 && (this.disconnect(), this.$to = t, this.connect(), this.onEvent(i))
                }
            }
        },
        fromAgent: {
            get: function () {
                return this.$from ? this.$from._d4 || this.$from : null
            }
        },
        toAgent: {
            get: function () {
                return this.$to ? this.$to._d4 || this.$to : null
            }
        }
    }), D(xa.prototype, ["edgeType", {
        name: "bundleEnabled",
        value: !0
    }, "angle"]);
    var Ca = function (t, i, e) {
        2 == arguments.length && G(t) && (e = i, i = t, t = null), this.id = ++Ps, this._lei = {}, this._io = {}, t && (this.$name = t), this.$image = "Q-node", this.$anchorPosition = ho.CENTER_MIDDLE, this.$location = {
            x: i || 0,
            y: e || 0
        }, this._linkedNodes = {}
    };
    Ca.prototype = {
        $uiClass: ar,
        _d4: null,
        forEachEdge: function (t, i, e) {
            return !e && this._je && this._je.forEach(t, i) === !1 ? !1 : In(this, t, i)
        },
        forEachOutEdge: function (t, i) {
            return xn(this, t, i)
        },
        forEachInEdge: function (t, i) {
            return Cn(this, t, i)
        },
        getEdges: function () {
            var t = [];
            return this.forEachEdge(function (i) {
                t.push(i)
            }), t
        },
        _h1: null,
        _fp: null,
        _id: null,
        _gw: null,
        _9w: 0,
        _8m: 0,
        hasInEdge: function () {
            return null != this._h1
        },
        hasOutEdge: function () {
            return null != this._fp
        },
        hasEdge: function () {
            return null != this._h1 || null != this._fp || this.hasLoops()
        },
        linkedWith: function (t) {
            return t.from == this || t.to == this || t.fromAgent == this || t.toAgent == this
        },
        hasEdgeWith: function (t) {
            var i = this.getEdgeBundle(t);
            return i && i.edges.length > 0
        },
        _je: null,
        _3p: null,
        hasLoops: function () {
            return this._je && this._je.length > 0
        },
        _h3: function (t) {
            return this._je || (this._je = new Js, this._3p = new ql(this, this, this._je)), this._3p._hb(t)
        },
        _leo: function (t) {
            return this._3p ? this._3p._ler(t) : void 0
        },
        getEdgeBundle: function (t) {
            return t == this ? this._3p : this._linkedNodes[t.id] || t._linkedNodes[this.id]
        },
        _66: function () {
            return this._99 && this._99.length
        },
        _52: function () {
            return this._7h && this._7h.length
        },
        _93: function () {
            return this._66() || this._52()
        },
        _7h: null,
        _99: null,
        _len: function () {
            var t = this._d4,
                i = an(this);
            if (t != i) {
                var e = Sn(this);
                this._91(i), e.forEach(function (t) {
                    var i = t.fromAgent,
                        e = t.toAgent,
                        t = t.edge,
                        n = t.$from._d4,
                        r = t.$to._d4;
                    i != e && (i && cn(i, t, e || t.$to), e && fn(e, t, i || t.$from)), n != r && (n && un(n, t, r || t.$to), r && dn(r, t, n || t.$from), ln(n || t.$from, t, r || t.$to))
                }, this)
            }
        },
        onParentChanged: function () {
            dh.doSuper(this, Ca, "onParentChanged", arguments), this._len()
        },
        _79: null,
        _$y: function () {
            var t;
            if (this._3o ? t = null : (t = this._d4, t || this._gm !== !1 || (t = this)), this._79 == t) return !1;
            if (this._79 = t, this._er && this._er._ig.length)
                for (var i, e = this._er._ig, n = 0, r = e.length; r > n; n++) i = e[n], i instanceof Ca && i._91(t)
        },
        setLocation: function (t, i) {
            if (this.$location && this.$location.x == t && this.$location.y == i) return !1;
            var e;
            e = this.$location ? {
                x: this.$location.x,
                y: this.$location.y
            } : this.$location;
            var n = new po(this, "location", e, {
                x: t,
                y: i
            });
            return this.beforeEvent(n) === !1 ? !1 : (this.$location ? (this.$location.x = t, this.$location.y = i) : this.$location = new io(t, i), this.onEvent(n), !0)
        },
        _dt: null,
        addFollower: function (t) {
            return null == t ? !1 : t.host = this
        },
        removeFollower: function (t) {
            return this._dt && this._dt.contains(t) ? t.host = null : !1
        },
        hasFollowers: function () {
            return this._dt && !this._dt.isEmpty()
        },
        toFollowers: function () {
            return this.hasFollowers() ? this._dt.toDatas() : null
        },
        clearFollowers: function () {
            if (this.hasFollowers()) {
                {
                    this.toFollowers()
                }
                g(this.toFollowers(), function (t) {
                    t.host = null
                })
            }
        },
        getFollowerIndex: function (t) {
            return this._dt && this._dt.contains(t) ? this._dt.indexOf(t) : -1
        },
        setFollowerIndex: function (t, i) {
            return this._dt && this._dt.contains(t) ? void this._dt.setIndex(t, i) : -1
        },
        getFollowerCount: function () {
            return this._dt ? this._dt.length : 0
        },
        _90: function () {
            return this._dt ? this._dt : (this._dt = new Js, this._dt)
        },
        isFollow: function (t) {
            if (!t || !this._host) return !1;
            for (var i = this._host; i;) {
                if (i == t) return !0;
                i = i._host
            }
            return !1
        },
        _91: function (t) {
            return t == this._d4 ? !1 : (this._d4 = t, this.invalidateVisibility(), void this._$y())
        },
        type: "Q.Node"
    }, A(Ca, Ia), Q(Ca.prototype, {
        loops: {
            get: function () {
                return this._je
            }
        },
        edgeCount: {
            get: function () {
                return this._9w + this._8m
            }
        },
        agentNode: {
            get: function () {
                return this._d4 || this
            }
        },
        host: {
            set: function (t) {
                if (this == t || t == this._host) return !1;
                var i = new po(this, "host", this._host, t);
                if (!1 === this.beforeEvent(i)) return !1;
                var e = null,
                    n = null,
                    r = this._host;
                if (null != t && (e = new po(t, "follower.add", null, this), !1 === t.beforeEvent(e))) return !1;
                if (null != r && (n = new po(r, "follower.remove", null, this), !1 === r.beforeEvent(n))) return !1;
                if (this._host = t, null != t) {
                    var s = t._90();
                    s.add(this)
                }
                if (null != r) {
                    var s = r._90();
                    s.remove(this)
                }
                return this.onEvent(i), null != t && t.onEvent(e), null != r && r.onEvent(n), !0
            },
            get: function () {
                return this._host
            }
        }
    }), D(Ca.prototype, ["location", "size", "image", "rotate", "anchorPosition"]), Q(Ca.prototype, {
        x: {
            get: function () {
                return this.location.x
            },
            set: function (t) {
                t != this.location.x && (this.location = new io(t, this.location.y))
            }
        },
        y: {
            get: function () {
                return this.location.y
            },
            set: function (t) {
                t != this.location.y && (this.location = new io(this.location.x, t))
            }
        }
    });
    var Ra = function (t, i) {
        t instanceof Zh && (i = t, t = e), b(this, Ra, [t]), this.path = i || new Zh, this.anchorPosition = null, this.uiClass = ts, Zs.SHAPENODE_STYLES || (Zs.SHAPENODE_STYLES = {}, Zs.SHAPENODE_STYLES[Ba.ARROW_TO] = !1), this.putStyles(Zs.SHAPENODE_STYLES)
    };
    Ra.prototype = {
        $uiClass: ts,
        type: "Q.ShapeNode",
        moveTo: function (t, i) {
            this.path.moveTo(t, i), this.firePathChange()
        },
        lineTo: function (t, i) {
            this.path.lineTo(t, i), this.firePathChange()
        },
        quadTo: function (t, i, e, n) {
            this.path.quadTo(t, i, e, n), this.firePathChange()
        },
        curveTo: function (t, i, e, n, r, s) {
            this.path.curveTo(t, i, e, n, r, s), this.firePathChange()
        },
        arcTo: function (t, i, e, n, r) {
            this.path.arcTo(t, i, e, n, r), this.firePathChange()
        },
        closePath: function () {
            this.path.closePath(), this.firePathChange()
        },
        clear: function () {
            this.path.clear(), this.firePathChange()
        },
        removePathSegmentByIndex: function (t) {
            this.path.removePathSegment(t) !== !1 && this.firePathChange()
        },
        firePathChange: function () {
            this.path._5z = !0, this.onEvent(new po(this, "path.segment"))
        },
        addPathSegment: function (t, i, e) {
            this.path.add(new qh(i || Hh, t), e), this.firePathChange()
        }
    }, A(Ra, Ca), Q(Ra.prototype, {
        path: {
            get: function () {
                return this.image
            },
            set: function (t) {
                this.image = t
            }
        },
        pathSegments: {
            get: function () {
                return this.path.segments
            },
            set: function (t) {
                this.path.segments = t || [], this.firePathChange()
            }
        },
        length: {
            get: function () {
                return this.path.length
            }
        }
    }), dh.ShapeNode = Ra;
    var Da = {
        _j5: {},
        register: function (t, i) {
            Da._j5[t] = i
        },
        getShape: function (t, i, n, r, s, o) {
            r === e && (r = i, s = n, i = 0, n = 0), r || (r = 50), s || (s = 50);
            var h = Da._j5[t];
            return h ? h.generator instanceof Function ? h.generator(i, n, r, s, o) : h : void 0
        },
        getRect: function (t, i, e, n, r, s, o) {
            return t instanceof Object && "width" in t && (i = t.y, e = t.width, n = t.height, r = t.rx, s = t.ry, o = t.path, t = t.x), Rn(o || new Zh, t, i, e, n, r, s)
        },
        getAllShapes: function (t, i, e, n, r) {
            var s = {};
            for (var o in Da._j5) {
                var h = Da.getShape(o, t, i, e, n, r);
                h && (s[o] = h)
            }
            return s
        },
        createRegularShape: function (t, i, e, n, r) {
            return Gn(t, i, e, n, r)
        }
    };
    Zn(), Jn.prototype = {
        type: "Q.Bus"
    }, A(Jn, Ra), dh.Bus = Jn, Qn.prototype = {
        _gq: function (t) {
            var i, e = t._in;
            i = e ? e._er : this.$roots;
            var n = i.indexOf(t);
            if (0 > n) throw new Error("data '" + t + "' not exist in the box");
            for (; n >= 0;) {
                if (0 == n) return e instanceof Ca ? e : null;
                n -= 1;
                var s = i.getByIndex(n);
                if (s = r(s)) return s
            }
            return null
        },
        forEachNode: function (t, i) {
            this.forEach(function (e) {
                return e instanceof Ca && t.call(i, e) === !1 ? !1 : void 0
            })
        },
        _3b: null
    }, A(Qn, Co), Q(Qn.prototype, {
        propertyChangeDispatcher: {
            get: function () {
                return this._$r
            }
        },
        currentSubNetwork: {
            get: function () {
                return this._3b
            },
            set: function (t) {
                if (t && !t.enableSubNetwork && (t = null), this._3b != t) {
                    var i = this._3b;
                    this._3b = t, this._$r.onEvent(new po(this, "currentSubNetwork", t, i))
                }
            }
        }
    }), Zs.GROUP_TYPE = fh.GROUP_TYPE_RECT, Zs.GROUP_PADDING = 5, Zs.GROUP_EXPANDED = !0, Zs.GROUP_MIN_SIZE = {
        width: 60,
        height: 60
    };
    var Pa = function (t, i, n) {
        b(this, Pa, arguments), (i === e || n === e) && (this.$location.invalidateFlag = !0), this.$groupType = Zs.GROUP_TYPE, this.$padding = Zs.GROUP_PADDING, this.$image = ta.group, this.$minSize = Zs.GROUP_MIN_SIZE, this.expanded = Zs.GROUP_EXPANDED
    };
    Pa.prototype = {
        type: "Q.Group",
        $uiClass: qr,
        _8w: function () {
            return !this._gm && !this._d4
        },
        forEachOutEdge: function (t, i, e) {
            if (xn(this, t, i) === !1) return !1;
            if (!e && this._8w()) return this._7h ? this._7h.forEach(t, i) : void 0
        },
        forEachInEdge: function (t, i, e) {
            if (Cn(this, t, i) === !1) return !1;
            if (!e && this._8w()) return this._99 ? this._99.forEach(t, i) : void 0
        },
        forEachEdge: function (t, i, e) {
            if (L(this, Pa, "forEachEdge", arguments) === !1) return !1;
            if (!e && !e && this._8w()) return this._99 && this._99.forEach(t, i) === !1 ? !1 : this._7h ? this._7h.forEach(t, i) : void 0
        },
        hasInEdge: function (t) {
            return t ? null != this._h1 : null != this._h1 || this._66()
        },
        hasOutEdge: function (t) {
            return t ? null != this._fp : null != this._fp || this._52()
        },
        hasEdge: function (t) {
            return t ? null != this._h1 || null != this._fp : null != this._h1 || null != this._fp || this._93()
        }
    }, A(Pa, Ca), Q(Pa.prototype, {
        expanded: {
            get: function () {
                return this._gm
            },
            set: function (t) {
                if (this._gm != t) {
                    var i = new po(this, "expanded", t, this._gm);
                    this.beforeEvent(i) !== !1 && (this._gm = t, this._$y(), this.onEvent(i), this._d4 || tr.call(this))
                }
            }
        }
    }), D(Pa.prototype, ["minSize", "groupType", "padding", "groupImage"]), dh.Group = Pa, ir.prototype.type = "Q.Text", A(ir, Ca), dh.Text = ir;
    var Na = function (t) {
        this._ij = new so, this._7d = new so, this._f3 = new so, this.id = ++Ps, t && (this.data = t)
    };
    Na.prototype = {
        invalidate: function () {
            this.invalidateData()
        },
        _1c: !0,
        _ij: null,
        _7d: null,
        _f3: null,
        _lg0: !1,
        _ia: 1,
        _ic: 1,
        _h0: !0,
        _7b: 0,
        _5u: 0,
        _in: null,
        _9y: null,
        borderColor: "#444",
        borderLineDash: null,
        borderLineDashOffset: null,
        syncSelection: !0,
        syncSelectionStyles: !0,
        _16: function () {
            this.$anchorPoint = ci(this.anchorPosition, this._7b, this._5u)
        },
        setMeasuredBounds: function (t, i, e, n) {
            return t instanceof Object && (e = t.x, n = t.y, i = t.height, t = t.width), this._ij.width == t && this._ij.height == i && this._ij.x == e && this._ij.y == n ? !1 : void this._ij.set(e || 0, n || 0, t || 0, i || 0)
        },
        initialize: function () {},
        measure: function () {},
        draw: function () {},
        _7l: function (t, i, e) {
            e.selectionType == fh.SELECTION_TYPE_SHADOW ? (t.shadowColor = e.selectionColor, t.shadowBlur = e.selectionShadowBlur * i, t.shadowOffsetX = (e.selectionShadowOffsetX || 0) * i, t.shadowOffsetY = (e.selectionShadowOffsetY || 0) * i) : this._1t(t, i, e)
        },
        _1t: function (t, i, e) {
            var n = e.selectionBorder || 0;
            e.selectionBackgroundColor && (t.fillStyle = e.selectionBackgroundColor, t.fillRect(this._7d.x - n / 2, this._7d.y - n / 2, this._7d.width + n, this._7d.height + n)), t.strokeStyle = e.selectionColor, t.lineWidth = n, t.strokeRect(this._7d.x - n / 2, this._7d.y - n / 2, this._7d.width + n, this._7d.height + n)
        },
        _ix: function (t, i, e, n) {
            if (!this._h0) return !1;
            if (this.syncSelection || (e = this.selected), (e && !this.syncSelectionStyles || !n) && (n = this), t.save(), 1 != this.$alpha && (t.globalAlpha = this.$alpha), t.translate(this.$x, this.$y), this.$rotatable && this.$_hostRotate && t.rotate(this.$_hostRotate), (this.offsetX || this.offsetY) && t.translate(this.offsetX, this.offsetY), this.$rotate && t.rotate(this.$rotate), this.$layoutByAnchorPoint && this._9y && t.translate(-this._9y.x, -this._9y.y), this.shadowColor && (t.shadowColor = this.shadowColor, t.shadowBlur = this.shadowBlur * i, t.shadowOffsetX = this.shadowOffsetX * i, t.shadowOffsetY = this.shadowOffsetY * i), e && n.selectionType == fh.SELECTION_TYPE_BORDER_RECT && (this._1t(t, i, n), e = !1), this._$o() && this._kbShape && !this._kbShape._empty) {
                this._kbShape.validate();
                var r = {
                    lineWidth: this.$border,
                    strokeStyle: this.borderColor,
                    lineDash: this.borderLineDash,
                    lineDashOffset: this.borderLineDashOffset,
                    fillColor: this.$backgroundColor,
                    fillGradient: this._leackgroundGradient,
                    lineCap: "butt",
                    lineJoin: "round"
                };
                this._kbShape.draw(t, i, r, e, n), e = !1, t.shadowColor = "rgba(0,0,0,0)"
            }
            t.beginPath(), this.draw(t, i, e, n), t.restore()
        },
        invalidateData: function () {
            this.$invalidateData = !0, this.$invalidateSize = !0, this._1c = !0
        },
        invalidateSize: function () {
            this.$invalidateSize = !0, this._1c = !0
        },
        invalidateRender: function () {
            this._1c = !0
        },
        _4n: function () {},
        _$o: function () {
            return this.$backgroundColor || this.$backgroundGradient || this.$border
        },
        _3m: function () {
            return this.$backgroundColor || this.$backgroundGradient
        },
        doValidate: function () {
            return this.$invalidateData && (this.$invalidateData = !1, this.measure() !== !1 && (this.$invalidateSize = !0)), this.$invalidateSize && this.validateSize && this.validateSize(), Ue.call(this) ? (this.$invalidateRotate = !0, this.onBoundsChanged && this.onBoundsChanged(), !0) : this.$invalidateLocation ? (this.$invalidateRotate = !0, this.$invalidateLocation = !1, !0) : void 0
        },
        validate: function () {
            var t = this._h0;
            return this.$invalidateVisibility && (this.$invalidateVisibility = !1, this._h0 = this.$visible, !this._h0 || (this.$data || this.$showEmpty) && this._4n() !== !1 || (this._h0 = !1)), this._h0 ? (this._1c = !1, this._lg0 || (this.initialize(), this._lg0 = !0), this.doValidate()) : t != this._h0
        },
        _gx: function (t, i) {
            return t -= this.$x, i -= this.$y, He.call(this, {
                x: t,
                y: i
            })
        },
        hitTest: function (t, i, e, n) {
            if (t -= this.$x, i -= this.$y, !this._f3.intersectsPoint(t, i, e)) return !1;
            var r = He.call(this, {
                x: t,
                y: i
            });
            return t = r.x, i = r.y, !n && this._$o() && this._kbShape && this._kbShape.hitTest(t, i, e, !1, this.$border, this.$backgroundColor || this.$backgroundGradient) ? !0 : this.doHitTest(t, i, e)
        },
        doHitTest: function (t, i, e) {
            return this._ij.intersectsPoint(t, i, e)
        },
        hitTestByBounds: function (t, i, e, n) {
            var r = this._gx(t, i);
            return !n && this._$o() && this._kbShape && this._kbShape.hitTest(t, i, e, !1, this.$border, this.$backgroundColor || this.$backgroundGradient) ? !0 : this._ij.intersectsPoint(r.x, r.y, e)
        },
        onDataChanged: function () {
            this.$invalidateData = !0, this._1c = !0, this.$invalidateVisibility = !0
        },
        getBounds: function () {
            var t = this._f3.clone();
            return t.offset(this.x, this.y), this.parent && (this.parent.rotate && Ri(t, this.parent.rotate, t), t.offset(this.parent.x || 0, this.parent.y || 0)), t
        },
        destroy: function () {
            this._h8ed = !0
        },
        _d1: !1
    }, Q(Na.prototype, {
        originalBounds: {
            get: function () {
                return this._ij
            }
        },
        data: {
            get: function () {
                return this.$data
            },
            set: function (t) {
                if (this.$data != t) {
                    var i = this.$data;
                    this.$data = t, this.onDataChanged(t, i)
                }
            }
        },
        parent: {
            get: function () {
                return this._in
            }
        },
        showOnTop: {
            get: function () {
                return this._d1
            },
            set: function (t) {
                t != this._d1 && (this._d1 = t, this._1c = !0, this._in && this._in._lg8 && this._in._lg8(this))
            }
        }
    }), nr(Na.prototype, {
        visible: {
            value: !0,
            validateFlags: ["Visibility", "Location"]
        },
        showEmpty: {
            validateFlags: ["Visibility"]
        },
        anchorPosition: {
            value: ho.CENTER_MIDDLE,
            validateFlags: ["AnchorPoint", "Location"]
        },
        position: {
            value: ho.CENTER_MIDDLE,
            validateFlags: ["Location"]
        },
        offsetX: {
            value: 0,
            validateFlags: ["Location"]
        },
        offsetY: {
            value: 0,
            validateFlags: ["Location"]
        },
        layoutByAnchorPoint: {
            value: !0,
            validateFlags: ["Size", "AnchorPoint", "Location"]
        },
        padding: {
            value: 0,
            validateFlags: ["Size"]
        },
        border: {
            value: 0,
            validateFlags: ["Size"]
        },
        borderRadius: {
            value: Zs.BORDER_RADIUS
        },
        showPointer: {
            value: !1,
            validateFlags: ["Size"]
        },
        pointerX: {
            value: 0,
            validateFlags: ["Size"]
        },
        pointerY: {
            value: 0,
            validateFlags: ["Size"]
        },
        pointerWidth: {
            value: Zs.POINTER_WIDTH
        },
        backgroundColor: {
            validateFlags: ["Size"]
        },
        backgroundGradient: {
            validateFlags: ["Size", "BackgroundGradient"]
        },
        selected: {
            value: !1,
            validateFlags: ["Size"]
        },
        selectionBorder: {
            value: Zs.SELECTION_BORDER,
            validateFlags: ["Size"]
        },
        selectionShadowBlur: {
            value: Zs.SELECTION_SHADOW_BLUR,
            validateFlags: ["Size"]
        },
        selectionColor: {
            value: Zs.SELECTION_COLOR,
            validateFlags: ["Size"]
        },
        selectionType: {
            value: Zs.SELECTION_TYPE,
            validateFlags: ["Size"]
        },
        selectionShadowOffsetX: {
            value: 0,
            validateFlags: ["Size"]
        },
        selectionShadowOffsetY: {
            value: 0,
            validateFlags: ["Size"]
        },
        shadowBlur: {
            value: 0,
            validateFlags: ["Size"]
        },
        shadowColor: {
            validateFlags: ["Size"]
        },
        shadowOffsetX: {
            value: 0,
            validateFlags: ["Size"]
        },
        shadowOffsetY: {
            value: 0,
            validateFlags: ["Size"]
        },
        renderColorBlendMode: {},
        renderColor: {},
        x: {
            value: 0,
            validateFlags: ["Location"]
        },
        y: {
            value: 0,
            validateFlags: ["Location"]
        },
        rotatable: {
            value: !0,
            validateFlags: ["Rotate", "Size"]
        },
        rotate: {
            value: 0,
            validateFlags: ["Rotate", "Size"]
        },
        _hostRotate: {
            validateFlags: ["Rotate"]
        },
        lineWidth: {
            value: 0,
            validateFlags: ["Data"]
        },
        alpha: {
            value: 1
        }
    });
    var Ma = [fh.PROPERTY_TYPE_ACCESSOR, fh.PROPERTY_TYPE_STYLE, fh.PROPERTY_TYPE_CLIENT];
    sr.prototype = {
        removeBinding: function (t) {
            for (var i = Ma.length; --i >= 0;) {
                var e = Ma[i],
                    n = this[e];
                for (var r in n) {
                    var s = n[r];
                    Array.isArray(s) ? (v(s, function (i) {
                        return i.target == t
                    }, this), s.length || delete n[r]) : s.target == t && delete n[r]
                }
            }
        },
        _1q: function (t, i, e) {
            if (!e && (e = this[i.propertyType || fh.PROPERTY_TYPE_ACCESSOR], !e)) return !1;
            var n = e[t];
            n ? (Array.isArray(n) || (e[t] = n = [n]), n.push(i)) : e[t] = i
        },
        _2c: function (t, i, e, n, r, s) {
            t = t || fh.PROPERTY_TYPE_ACCESSOR;
            var o = this[t];
            if (!o) return !1;
            var h = {
                property: i,
                propertyType: t,
                bindingProperty: n,
                target: e,
                callback: r,
                invalidateSize: s
            };
            this._1q(i, h, o)
        },
        onBindingPropertyChange: function (t, i, e, n) {
            var r = this[e || fh.PROPERTY_TYPE_ACCESSOR];
            if (!r) return !1;
            var s = r[i];
            return s ? (t._1c = !0, rr(t, s, e, n), !0) : !1
        },
        initBindingProperties: function (t, i) {
            for (var n = Ma.length; --n >= 0;) {
                var r = Ma[n],
                    s = this[r];
                for (var o in s) {
                    var h = s[o];
                    if (h.bindingProperty) {
                        var a = h.target;
                        if (a) {
                            if (!(a instanceof Na || (a = t[a]))) continue
                        } else a = t;
                        var l;
                        l = i === !1 ? t.getProperty(h.property, r) : r == fh.PROPERTY_TYPE_STYLE ? t.graph.getStyle(t.$data, h.property) : t.$data[h.property], l !== e && (a[h.bindingProperty] = l)
                    }
                }
            }
        }
    };
    var Ba = {};
    Ba.SELECTION_COLOR = "selection.color", Ba.SELECTION_BORDER = "selection.border", Ba.SELECTION_SHADOW_BLUR = "selection.shadow.blur", Ba.SELECTION_SHADOW_OFFSET_X = "selection.shadow.offset.x", Ba.SELECTION_SHADOW_OFFSET_Y = "selection.shadow.offset.y", Ba.SELECTION_TYPE = "selection.type", Ba.RENDER_COLOR = "render.color", Ba.RENDER_COLOR_BLEND_MODE = "render.color.blend.mode", Ba.ALPHA = "alpha", Ba.SHADOW_BLUR = "shadow.blur", Ba.SHADOW_COLOR = "shadow.color", Ba.SHADOW_OFFSET_X = "shadow.offset.x", Ba.SHADOW_OFFSET_Y = "shadow.offset.y", Ba.SHAPE_STROKE = "shape.stroke", Ba.SHAPE_STROKE_STYLE = "shape.stroke.style", Ba.SHAPE_LINE_FILL_COLOR = "shape.stroke.fill.color", Ba.SHAPE_LINE_DASH = "shape.line.dash", Ba.SHAPE_LINE_DASH_OFFSET = "shape.line.dash.offset", Ba.SHAPE_FILL_COLOR = "shape.fill.color", Ba.SHAPE_FILL_GRADIENT = "shape.fill.gradient", Ba.SHAPE_OUTLINE = "shape.outline", Ba.SHAPE_OUTLINE_STYLE = "shape.outline.style", Ba.LAYOUT_BY_PATH = "layout.by.path", Ba.BACKGROUND_COLOR = "background.color", Ba.BACKGROUND_GRADIENT = "background.gradient", Ba.BORDER = "border.width", Ba.BORDER_COLOR = "border.color", Ba.BORDER_LINE_DASH = "border.line.dash", Ba.BORDER_LINE_DASH_OFFSET = "border.line.dash.offset", Ba.BORDER_RADIUS = "border.radius", Ba.PADDING = "padding", Ba.LINE_CAP = "line.cap", Ba.LINE_JOIN = "line.join", Ba.LINE_DASH_CAP = "line.dash.cap", Ba.LINE_DASH_JOIN = "line.dash.join", Ba.IMAGE_BACKGROUND_COLOR = "image.background.color", Ba.IMAGE_BACKGROUND_GRADIENT = "image.background.gradient", Ba.IMAGE_BORDER = "image.border.width", Ba.IMAGE_BORDER_STYLE = Ba.IMAGE_BORDER_COLOR = "image.border.style", Ba.IMAGE_BORDER_LINE_DASH = "image.border.line.dash", Ba.IMAGE_BORDER_LINE_DASH_OFFSET = "image.border.line.dash.offset", Ba.IMAGE_RADIUS = Ba.IMAGE_BORDER_RADIUS = "image.radius", Ba.IMAGE_PADDING = "image.padding", Ba.IMAGE_Z_INDEX = "image.z.index", Ba.IMAGE_ADJUST = "image.adjust", Ba.IMAGE_ALPHA = "image.alpha", Ba.LABEL_ROTATE = "label.rotate", Ba.LABEL_POSITION = "label.position", Ba.LABEL_VISIBLE = "label.visible", Ba.LABEL_ANCHOR_POSITION = "label.anchor.position", Ba.LABEL_COLOR = "label.color", Ba.LABEL_FONT_SIZE = "label.font.size", Ba.LABEL_FONT_FAMILY = "label.font.family", Ba.LABEL_FONT_STYLE = "label.font.style", Ba.LABEL_PADDING = "label.padding", Ba.LABEL_POINTER_WIDTH = "label.pointer.width", Ba.LABEL_POINTER = "label.pointer", Ba.LABEL_RADIUS = "label.radius", Ba.LABEL_OFFSET_X = "label.offset.x", Ba.LABEL_OFFSET_Y = "label.offset.y", Ba.LABEL_SIZE = "label.size", Ba.LABEL_ALIGN_POSITION = "label.align.position", Ba.LABEL_BORDER = "label.border", Ba.LABEL_BORDER_STYLE = "label.border.style", Ba.LABEL_BACKGROUND_COLOR = "label.background.color", Ba.LABEL_BACKGROUND_GRADIENT = "label.background.gradient", Ba.LABEL_ROTATABLE = "label.rotatable", Ba.LABEL_SHADOW_BLUR = "label.shadow.blur", Ba.LABEL_SHADOW_COLOR = "label.shadow.color", Ba.LABEL_SHADOW_OFFSET_X = "label.shadow.offset.x", Ba.LABEL_SHADOW_OFFSET_Y = "label.shadow.offset.y", Ba.LABEL_Z_INDEX = "label.z.index", Ba.LABEL_ON_TOP = "label.on.top", Ba.GROUP_BACKGROUND_COLOR = "group.background.color", Ba.GROUP_BACKGROUND_GRADIENT = "group.background.gradient", Ba.GROUP_STROKE = "group.stroke", Ba.GROUP_STROKE_STYLE = "group.stroke.color", Ba.GROUP_STROKE_LINE_DASH = "group.stroke.line.dash", Ba.GROUP_STROKE_LINE_DASH_OFFSET = "group.stroke.line.dash.offset", Ba.EDGE_BUNDLE_LABEL_ROTATE = "edge.bundle.label.rotate", Ba.EDGE_BUNDLE_LABEL_POSITION = "edge.bundle.label.position", Ba.EDGE_BUNDLE_LABEL_ANCHOR_POSITION = "edge.bundle.label.anchor.position", Ba.EDGE_BUNDLE_LABEL_COLOR = "edge.bundle.label.color", Ba.EDGE_BUNDLE_LABEL_FONT_SIZE = "edge.bundle.label.font.size", Ba.EDGE_BUNDLE_LABEL_FONT_FAMILY = "edge.bundle.label.font.family", Ba.EDGE_BUNDLE_LABEL_FONT_STYLE = "edge.bundle.label.font.style", Ba.EDGE_BUNDLE_LABEL_PADDING = "edge.bundle.label.padding", Ba.EDGE_BUNDLE_LABEL_POINTER_WIDTH = "edge.bundle.label.pointer.width", Ba.EDGE_BUNDLE_LABEL_POINTER = "edge.bundle.label.pointer", Ba.EDGE_BUNDLE_LABEL_RADIUS = "edge.bundle.label.radius", Ba.EDGE_BUNDLE_LABEL_OFFSET_X = "edge.bundle.label.offset.x", Ba.EDGE_BUNDLE_LABEL_OFFSET_Y = "edge.bundle.label.offset.y", Ba.EDGE_BUNDLE_LABEL_BORDER = "edge.bundle.label.border", Ba.EDGE_BUNDLE_LABEL_BORDER_STYLE = "edge.bundle.label.border.color", Ba.EDGE_BUNDLE_LABEL_BACKGROUND_COLOR = "edge.bundle.label.background.color", Ba.EDGE_BUNDLE_LABEL_BACKGROUND_GRADIENT = "edge.bundle.label.background.gradient", Ba.EDGE_BUNDLE_LABEL_ROTATABLE = "edge.bundle.label.rotatable", Ba.EDGE_WIDTH = "edge.width", Ba.EDGE_COLOR = "edge.color", Ba.EDGE_OUTLINE = "edge.outline", Ba.EDGE_OUTLINE_STYLE = "edge.outline.style", Ba.EDGE_LINE_DASH = "edge.line.dash", Ba.EDGE_LINE_DASH_OFFSET = "edge.line.dash.offset", Ba.EDGE_FROM_OFFSET = "edge.from.offset", Ba.EDGE_TO_OFFSET = "edge.to.offset", Ba.EDGE_FILL_COLOR = "edge.fill.color", Ba.EDGE_BUNDLE_GAP = "edge.bundle.gap", Ba.EDGE_LOOPED_EXTAND = "edge.looped.extand", Ba.EDGE_EXTEND = "edge.extend", Ba.EDGE_CONTROL_POINT = "edge.control.point", Ba.EDGE_SPLIT_BY_PERCENT = "edge.split.by.percent", Ba.EDGE_SPLIT_PERCENT = "edge.split.percent", Ba.EDGE_SPLIT_VALUE = "edge.split.value", Ba.EDGE_CORNER = "edge.corner", Ba.EDGE_CORNER_RADIUS = "edge.corner.radius", Ba.EDGE_FROM_AT_EDGE = "edge.from.at.edge", Ba.EDGE_TO_AT_EDGE = "edge.to.at.edge", Ba.ARROW_FROM = "arrow.from", Ba.ARROW_FROM_SIZE = "arrow.from.size", Ba.ARROW_FROM_OFFSET = "arrow.from.offset", Ba.ARROW_FROM_STROKE = "arrow.from.stroke", Ba.ARROW_FROM_STROKE_STYLE = "arrow.from.stroke.style", Ba.ARROW_FROM_OUTLINE = "arrow.from.outline", Ba.ARROW_FROM_OUTLINE_STYLE = "arrow.from.outline.style", Ba.ARROW_FROM_LINE_DASH = "arrow.from.line.dash", Ba.ARROW_FROM_LINE_DASH_OFFSET = "arrow.from.line.dash.offset", Ba.ARROW_FROM_FILL_COLOR = "arrow.from.fill.color", Ba.ARROW_FROM_FILL_GRADIENT = "arrow.from.fill.gradient", Ba.ARROW_FROM_LINE_CAP = "arrow.from.line.cap", Ba.ARROW_FROM_LINE_JOIN = "arrow.from.line.join", Ba.ARROW_TO = "arrow.to", Ba.ARROW_TO_SIZE = "arrow.to.size", Ba.ARROW_TO_OFFSET = "arrow.to.offset", Ba.ARROW_TO_STROKE = "arrow.to.stroke", Ba.ARROW_TO_STROKE_STYLE = "arrow.to.stroke.style", Ba.ARROW_TO_OUTLINE = "arrow.to.outline", Ba.ARROW_TO_OUTLINE_STYLE = "arrow.to.outline.style", Ba.ARROW_TO_LINE_DASH = "arrow.to.line.dash", Ba.ARROW_TO_LINE_DASH_OFFSET = "arrow.to.line.dash.offset", Ba.ARROW_TO_FILL_COLOR = "arrow.to.fill.color", Ba.ARROW_TO_FILL_GRADIENT = "arrow.to.fill.gradient", Ba.ARROW_TO_LINE_CAP = "arrow.to.line.cap", Ba.ARROW_TO_LINE_JOIN = "arrow.to.line.join";
    var ka = new sr,
        Ga = fh.PROPERTY_TYPE_ACCESSOR,
        Fa = fh.PROPERTY_TYPE_STYLE,
        $a = !1;
    ka._2c(Fa, Ba.SELECTION_TYPE, null, "selectionType"), ka._2c(Fa, Ba.SELECTION_BORDER, null, "selectionBorder"), ka._2c(Fa, Ba.SELECTION_SHADOW_BLUR, null, "selectionShadowBlur"), ka._2c(Fa, Ba.SELECTION_COLOR, null, "selectionColor"), ka._2c(Fa, Ba.SELECTION_SHADOW_OFFSET_X, null, "selectionShadowOffsetX"), ka._2c(Fa, Ba.SELECTION_SHADOW_OFFSET_Y, null, "selectionShadowOffsetY"), ka._2c(Ga, "name", "label", "data"), ka._2c(Fa, Ba.LABEL_VISIBLE, "label", "visible"), ka._2c(Fa, Ba.LABEL_POSITION, "label", "position"), ka._2c(Fa, Ba.LABEL_ANCHOR_POSITION, "label", "anchorPosition"), ka._2c(Fa, Ba.LABEL_COLOR, "label", "color"), ka._2c(Fa, Ba.LABEL_FONT_SIZE, "label", "fontSize"), ka._2c(Fa, Ba.LABEL_BORDER, "label", "border"), ka._2c(Fa, Ba.LABEL_BORDER_STYLE, "label", "borderColor"), ka._2c(Fa, Ba.LABEL_BACKGROUND_COLOR, "label", "backgroundColor"), ka._2c(Fa, Ba.LABEL_ON_TOP, "label", "showOnTop"), $a || (ka._2c(Fa, Ba.SHADOW_BLUR, null, "shadowBlur"), ka._2c(Fa, Ba.SHADOW_COLOR, null, "shadowColor"), ka._2c(Fa, Ba.SHADOW_OFFSET_X, null, "shadowOffsetX"), ka._2c(Fa, Ba.SHADOW_OFFSET_Y, null, "shadowOffsetY"), ka._2c(Fa, Ba.LABEL_FONT_FAMILY, "label", "fontFamily"), ka._2c(Fa, Ba.LABEL_FONT_STYLE, "label", "fontStyle"), ka._2c(Fa, Ba.LABEL_ALIGN_POSITION, "label", "alignPosition"), ka._2c(Fa, Ba.LABEL_ROTATE, "label", "rotate"), ka._2c(Fa, Ba.LABEL_PADDING, "label", "padding"), ka._2c(Fa, Ba.LABEL_POINTER_WIDTH, "label", "pointerWidth"), ka._2c(Fa, Ba.LABEL_POINTER, "label", "showPointer"), ka._2c(Fa, Ba.LABEL_RADIUS, "label", "borderRadius"), ka._2c(Fa, Ba.LABEL_OFFSET_X, "label", "offsetX"), ka._2c(Fa, Ba.LABEL_OFFSET_Y, "label", "offsetY"), ka._2c(Fa, Ba.LABEL_ROTATABLE, "label", "rotatable"), ka._2c(Fa, Ba.LABEL_BACKGROUND_GRADIENT, "label", "backgroundGradient"), ka._2c(Fa, Ba.LABEL_SIZE, "label", "size"), ka._2c(Fa, Ba.LABEL_SHADOW_BLUR, "label", "shadowBlur"), ka._2c(Fa, Ba.LABEL_SHADOW_COLOR, "label", "shadowColor"), ka._2c(Fa, Ba.LABEL_SHADOW_OFFSET_X, "label", "shadowOffsetX"), ka._2c(Fa, Ba.LABEL_SHADOW_OFFSET_Y, "label", "shadowOffsetY"), ka._2c(Fa, Ba.LABEL_Z_INDEX, "label", "zIndex"), ka._2c(Fa, Ba.RENDER_COLOR, null, "renderColor"), ka._2c(Fa, Ba.RENDER_COLOR_BLEND_MODE, null, "renderColorBlendMode"), ka._2c(Fa, Ba.ALPHA, null, "alpha"));
    var za = new sr;
    za._2c(Ga, "location"), za._2c(Ga, "anchorPosition", null, "_2j"), za._2c(Ga, "rotate", null, "rotate"), $a || (za._2c(Fa, Ba.BACKGROUND_COLOR, null, "backgroundColor"), za._2c(Fa, Ba.BACKGROUND_GRADIENT, null, "backgroundGradient"), za._2c(Fa, Ba.PADDING, null, "padding"), za._2c(Fa, Ba.BORDER, null, "border"), za._2c(Fa, Ba.BORDER_RADIUS, null, "borderRadius"), za._2c(Fa, Ba.BORDER_COLOR, null, "borderColor"), za._2c(Fa, Ba.BORDER_LINE_DASH, null, "borderLineDash"), za._2c(Fa, Ba.BORDER_LINE_DASH_OFFSET, null, "borderLineDashOffset")), za._2c(Ga, "image", "image", "data", "_lcd"), za._2c(Ga, "size", "image", "size"), za._2c(Fa, Ba.SHAPE_STROKE, "image", "lineWidth"), za._2c(Fa, Ba.SHAPE_STROKE_STYLE, "image", "strokeStyle"), za._2c(Fa, Ba.SHAPE_FILL_COLOR, "image", "fillColor"), za._2c(Fa, Ba.LAYOUT_BY_PATH, "image", "layoutByPath"), $a || (za._2c(Fa, Ba.IMAGE_ADJUST, "image", "adjustType"), za._2c(Fa, Ba.SHAPE_OUTLINE, "image", "outline"), za._2c(Fa, Ba.SHAPE_OUTLINE_STYLE, "image", "outlineStyle"), za._2c(Fa, Ba.SHAPE_FILL_GRADIENT, "image", "fillGradient"), za._2c(Fa, Ba.SHAPE_LINE_DASH, "image", "lineDash"), za._2c(Fa, Ba.SHAPE_LINE_DASH_OFFSET, "image", "lineDashOffset"), za._2c(Fa, Ba.LINE_CAP, "image", "lineCap"), za._2c(Fa, Ba.LINE_JOIN, "image", "lineJoin"), za._2c(Fa, Ba.IMAGE_BACKGROUND_COLOR, "image", "backgroundColor"), za._2c(Fa, Ba.IMAGE_BACKGROUND_GRADIENT, "image", "backgroundGradient"), za._2c(Fa, Ba.IMAGE_PADDING, "image", "padding"), za._2c(Fa, Ba.IMAGE_BORDER, "image", "border"), za._2c(Fa, Ba.IMAGE_BORDER_RADIUS, "image", "borderRadius"), za._2c(Fa, Ba.IMAGE_BORDER_COLOR, "image", "borderColor"), za._2c(Fa, Ba.IMAGE_BORDER_LINE_DASH, "image", "borderLineDash"), za._2c(Fa, Ba.IMAGE_BORDER_LINE_DASH_OFFSET, "image", "borderLineDashOffset"), za._2c(Fa, Ba.IMAGE_Z_INDEX, "image", "zIndex"), za._2c(Fa, Ba.IMAGE_ALPHA, "image", "alpha")), za._2c(Ga, "expanded", null, null, "checkBody"), za._2c(Ga, "enableSubNetwork", null, null, "checkBody");
    var ja = new sr;
    ja._2c(Ga, "groupType", null, null, "_4y"), ja._2c(Ga, "groupImage", null, null, "_4y"), ja._2c(Ga, "minSize", null, null, "_4y"), ja._2c(Ga, "padding", null, null, "_4y"), ja._2c(Fa, Ba.GROUP_BACKGROUND_COLOR, "shape", "fillColor"), ja._2c(Fa, Ba.GROUP_BACKGROUND_GRADIENT, "shape", "fillGradient"), ja._2c(Fa, Ba.GROUP_STROKE, "shape", "lineWidth"), ja._2c(Fa, Ba.GROUP_STROKE_STYLE, "shape", "strokeStyle"), ja._2c(Fa, Ba.GROUP_STROKE_LINE_DASH, "shape", "lineDash"), ja._2c(Fa, Ba.GROUP_STROKE_LINE_DASH_OFFSET, "shape", "lineDashOffset");
    var Ya = new sr;
    Ya._2c(Ga, "from", "shape", null, "_3n"), Ya._2c(Ga, "to", "shape", null, "_3n"), Ya._2c(Ga, "edgeType", "shape", null, "_3n"), Ya._2c(Fa, Ba.EDGE_EXTEND, "shape", null, "_3n"), Ya._2c(Fa, Ba.EDGE_WIDTH, "shape", "lineWidth"), Ya._2c(Fa, Ba.EDGE_COLOR, "shape", "strokeStyle"), Ya._2c(Fa, Ba.ARROW_FROM, "shape", "fromArrow"), Ya._2c(Fa, Ba.ARROW_TO, "shape", "toArrow"), $a || (Ya._2c(Fa, Ba.LINE_DASH_CAP, "shape", "lineDashCap"), Ya._2c(Fa, Ba.LINE_DASH_JOIN, "shape", "lineDashJoin"), Ya._2c(Fa, Ba.EDGE_FILL_COLOR, "shape", "lineFillColor"), Ya._2c(Fa, Ba.EDGE_FROM_AT_EDGE, null, "fromAtEdge", "_3n"), Ya._2c(Fa, Ba.EDGE_TO_AT_EDGE, null, "toAtEdge", "_3n"), Ya._2c(Fa, Ba.EDGE_OUTLINE, "shape", "outline"), Ya._2c(Fa, Ba.EDGE_OUTLINE_STYLE, "shape", "outlineStyle"), Ya._2c(Fa, Ba.EDGE_LINE_DASH, "shape", "lineDash"), Ya._2c(Fa, Ba.EDGE_LINE_DASH_OFFSET, "shape", "lineDashOffset"), Ya._2c(Fa, Ba.EDGE_CONTROL_POINT, "shape", null, "_3n"), Ya._2c(Fa, Ba.EDGE_FROM_OFFSET, "shape", null, "_3n"), Ya._2c(Fa, Ba.EDGE_TO_OFFSET, "shape", null, "_3n"), Ya._2c(Fa, Ba.LINE_CAP, "shape", "lineCap"), Ya._2c(Fa, Ba.LINE_JOIN, "shape", "lineJoin"), Ya._2c(Ga, "path.segment", null, null, "_3n", !0), Ya._2c(Ga, "angle", null, null, "_3n", !0), Ya._2c(Fa, Ba.ARROW_FROM_SIZE, "shape", "fromArrowSize"), Ya._2c(Fa, Ba.ARROW_FROM_OFFSET, "shape", "fromArrowOffset"), Ya._2c(Fa, Ba.ARROW_FROM_STROKE, "shape", "fromArrowStroke"), Ya._2c(Fa, Ba.ARROW_FROM_STROKE_STYLE, "shape", "fromArrowStrokeStyle"), Ya._2c(Fa, Ba.ARROW_FROM_OUTLINE, "shape", "fromArrowOutline"), Ya._2c(Fa, Ba.ARROW_FROM_OUTLINE_STYLE, "shape", "fromArrowOutlineStyle"), Ya._2c(Fa, Ba.ARROW_FROM_FILL_COLOR, "shape", "fromArrowFillColor"), Ya._2c(Fa, Ba.ARROW_FROM_FILL_GRADIENT, "shape", "fromArrowFillGradient"), Ya._2c(Fa, Ba.ARROW_FROM_LINE_DASH, "shape", "fromArrowLineDash"), Ya._2c(Fa, Ba.ARROW_FROM_LINE_DASH_OFFSET, "shape", "fromArrowLineDashOffset"), Ya._2c(Fa, Ba.ARROW_FROM_LINE_JOIN, "shape", "fromArrowLineJoin"), Ya._2c(Fa, Ba.ARROW_FROM_LINE_CAP, "shape", "fromArrowLineCap"), Ya._2c(Fa, Ba.ARROW_TO_SIZE, "shape", "toArrowSize"), Ya._2c(Fa, Ba.ARROW_TO_OFFSET, "shape", "toArrowOffset"), Ya._2c(Fa, Ba.ARROW_TO_STROKE, "shape", "toArrowStroke"), Ya._2c(Fa, Ba.ARROW_TO_STROKE_STYLE, "shape", "toArrowStrokeStyle"), Ya._2c(Fa, Ba.ARROW_TO_OUTLINE, "shape", "toArrowOutline"), Ya._2c(Fa, Ba.ARROW_TO_OUTLINE_STYLE, "shape", "toArrowOutlineStyle"), Ya._2c(Fa, Ba.ARROW_TO_FILL_COLOR, "shape", "toArrowFillColor"), Ya._2c(Fa, Ba.ARROW_TO_FILL_GRADIENT, "shape", "toArrowFillGradient"), Ya._2c(Fa, Ba.ARROW_TO_LINE_DASH, "shape", "toArrowLineDash"), Ya._2c(Fa, Ba.ARROW_TO_LINE_DASH_OFFSET, "shape", "toArrowLineDashOffset"), Ya._2c(Fa, Ba.ARROW_TO_LINE_JOIN, "shape", "toArrowLineJoin"), Ya._2c(Fa, Ba.ARROW_TO_LINE_CAP, "shape", "toArrowLineCap"));
    var Ha = new sr;
    Ha._2c(Fa, Ba.EDGE_BUNDLE_LABEL_COLOR, "bundleLabel", "color"), Ha._2c(Fa, Ba.EDGE_BUNDLE_LABEL_POSITION, "bundleLabel", "position"), Ha._2c(Fa, Ba.EDGE_BUNDLE_LABEL_ANCHOR_POSITION, "bundleLabel", "anchorPosition"), Ha._2c(Fa, Ba.EDGE_BUNDLE_LABEL_FONT_SIZE, "bundleLabel", "fontSize"), Ha._2c(Fa, Ba.EDGE_BUNDLE_LABEL_ROTATABLE, "bundleLabel", "rotatable"), $a || (Ha._2c(Fa, Ba.EDGE_BUNDLE_LABEL_ROTATE, "bundleLabel", "rotate"), Ha._2c(Fa, Ba.EDGE_BUNDLE_LABEL_FONT_FAMILY, "bundleLabel", "fontFamily"), Ha._2c(Fa, Ba.EDGE_BUNDLE_LABEL_FONT_STYLE, "bundleLabel", "fontStyle"), Ha._2c(Fa, Ba.EDGE_BUNDLE_LABEL_PADDING, "bundleLabel", "padding"), Ha._2c(Fa, Ba.EDGE_BUNDLE_LABEL_POINTER_WIDTH, "bundleLabel", "pointerWidth"), Ha._2c(Fa, Ba.EDGE_BUNDLE_LABEL_POINTER, "bundleLabel", "showPointer"), Ha._2c(Fa, Ba.EDGE_BUNDLE_LABEL_RADIUS, "bundleLabel", "borderRadius"), Ha._2c(Fa, Ba.EDGE_BUNDLE_LABEL_OFFSET_X, "bundleLabel", "offsetX"), Ha._2c(Fa, Ba.EDGE_BUNDLE_LABEL_OFFSET_Y, "bundleLabel", "offsetY"), Ha._2c(Fa, Ba.EDGE_BUNDLE_LABEL_BORDER, "bundleLabel", "border"), Ha._2c(Fa, Ba.EDGE_BUNDLE_LABEL_BORDER_STYLE, "bundleLabel", "borderColor"), Ha._2c(Fa, Ba.EDGE_BUNDLE_LABEL_BACKGROUND_COLOR, "bundleLabel", "backgroundColor"), Ha._2c(Fa, Ba.EDGE_BUNDLE_LABEL_BACKGROUND_GRADIENT, "bundleLabel", "backgroundGradient"));
    var Ua = new sr;
    Ua._2c(Ga, "location"), Ua._2c(Fa, Ba.BACKGROUND_COLOR, null, "backgroundColor"), Ua._2c(Fa, Ba.BACKGROUND_GRADIENT, null, "backgroundGradient"), Ua._2c(Fa, Ba.PADDING, null, "padding"), Ua._2c(Fa, Ba.BORDER, null, "border"), Ua._2c(Fa, Ba.BORDER_RADIUS, null, "borderRadius"), Ua._2c(Fa, Ba.BORDER_COLOR, null, "borderColor"), Ua._2c(Fa, Ba.BORDER_LINE_DASH, null, "borderLineDash"), Ua._2c(Fa, Ba.BORDER_LINE_DASH_OFFSET, null, "borderLineDashOffset"), Ua._2c(Ga, "rotate", null, "rotate"), Ua._2c(Ga, "path.segment", null, null, "invalidateShape"), Ua._2c(Ga, "path", "image", "data"), Ua._2c(Ga, "size", "image", "size"), Ua._2c(Fa, Ba.SHAPE_STROKE, "image", "lineWidth"), Ua._2c(Fa, Ba.SHAPE_STROKE_STYLE, "image", "strokeStyle"), Ua._2c(Fa, Ba.SHAPE_FILL_COLOR, "image", "fillColor"), Ua._2c(Fa, Ba.SHAPE_FILL_GRADIENT, "image", "fillGradient"), $a || (Ua._2c(Fa, Ba.LINE_DASH_CAP, "image", "lineDashCap"), Ua._2c(Fa, Ba.LINE_DASH_JOIN, "image", "lineDashJoin"), Ua._2c(Fa, Ba.SHAPE_LINE_FILL_COLOR, "image", "lineFillColor"), Ua._2c(Fa, Ba.SHAPE_OUTLINE, "image", "outline"), Ua._2c(Fa, Ba.SHAPE_OUTLINE_STYLE, "image", "outlineStyle"), Ua._2c(Fa, Ba.SHAPE_LINE_DASH, "image", "lineDash"), Ua._2c(Fa, Ba.SHAPE_LINE_DASH_OFFSET, "image", "lineDashOffset"), Ua._2c(Fa, Ba.LINE_CAP, "image", "lineCap"), Ua._2c(Fa, Ba.LINE_JOIN, "image", "lineJoin"), Ua._2c(Fa, Ba.LAYOUT_BY_PATH, "image", "layoutByPath"), Ua._2c(Fa, Ba.IMAGE_BACKGROUND_COLOR, "image", "backgroundColor"), Ua._2c(Fa, Ba.IMAGE_BACKGROUND_GRADIENT, "image", "backgroundGradient"), Ua._2c(Fa, Ba.IMAGE_PADDING, "image", "padding"), Ua._2c(Fa, Ba.IMAGE_BORDER, "image", "border"), Ua._2c(Fa, Ba.IMAGE_BORDER_RADIUS, "image", "borderRadius"), Ua._2c(Fa, Ba.IMAGE_BORDER_COLOR, "image", "borderColor"), Ua._2c(Fa, Ba.IMAGE_BORDER_LINE_DASH, "image", "borderLineDash"), Ua._2c(Fa, Ba.IMAGE_BORDER_LINE_DASH_OFFSET, "image", "borderLineDashOffset"), Ua._2c(Fa, Ba.ARROW_FROM, "image", "fromArrow"), Ua._2c(Fa, Ba.ARROW_FROM_SIZE, "image", "fromArrowSize"), Ua._2c(Fa, Ba.ARROW_FROM_OFFSET, "image", "fromArrowOffset"), Ua._2c(Fa, Ba.ARROW_FROM_STROKE, "image", "fromArrowStroke"), Ua._2c(Fa, Ba.ARROW_FROM_STROKE_STYLE, "image", "fromArrowStrokeStyle"), Ua._2c(Fa, Ba.ARROW_FROM_FILL_COLOR, "image", "fromArrowFillColor"), Ua._2c(Fa, Ba.ARROW_FROM_FILL_GRADIENT, "image", "fromArrowFillGradient"), Ua._2c(Fa, Ba.ARROW_FROM_LINE_DASH, "image", "fromArrowLineDash"), Ua._2c(Fa, Ba.ARROW_FROM_LINE_DASH_OFFSET, "image", "fromArrowLineDashOffset"), Ua._2c(Fa, Ba.ARROW_FROM_LINE_JOIN, "image", "fromArrowLineJoin"), Ua._2c(Fa, Ba.ARROW_FROM_LINE_CAP, "image", "fromArrowLineCap"), Ua._2c(Fa, Ba.ARROW_TO_SIZE, "image", "toArrowSize"), Ua._2c(Fa, Ba.ARROW_TO_OFFSET, "image", "toArrowOffset"), Ua._2c(Fa, Ba.ARROW_TO, "image", "toArrow"), Ua._2c(Fa, Ba.ARROW_TO_STROKE, "image", "toArrowStroke"), Ua._2c(Fa, Ba.ARROW_TO_STROKE_STYLE, "image", "toArrowStrokeStyle"), Ua._2c(Fa, Ba.ARROW_TO_FILL_COLOR, "image", "toArrowFillColor"), Ua._2c(Fa, Ba.ARROW_TO_FILL_GRADIENT, "image", "toArrowFillGradient"), Ua._2c(Fa, Ba.ARROW_TO_LINE_DASH, "image", "toArrowLineDash"), Ua._2c(Fa, Ba.ARROW_TO_LINE_DASH_OFFSET, "image", "toArrowLineDashOffset"), Ua._2c(Fa, Ba.ARROW_TO_LINE_JOIN, "image", "toArrowLineJoin"), Ua._2c(Fa, Ba.ARROW_TO_LINE_CAP, "image", "toArrowLineCap"));
    var Wa = function (t, i) {
            return t = t.zIndex, i = i.zIndex, t == i ? 0 : (t = t || 0, i = i || 0, t > i ? 1 : i > t ? -1 : void 0)
        },
        Xa = function (t, i) {
            this.uiBounds = new so, b(this, Xa, arguments), this.id = this.$data.id, this.graph = i, this._er = [], this._lc8 = new sr
        };
    Xa.prototype = {
        syncSelection: !1,
        graph: null,
        layoutByAnchorPoint: !1,
        _lc8: null,
        _er: null,
        addChild: function (t, i) {
            t._in = this, i !== e ? y(this._er, t, i) : this._er.push(t), t._d1 && this._lg8(t), this.invalidateChildrenIndex(), this.invalidateSize(), this.$invalidateChild = !0
        },
        removeChild: function (t) {
            this._lc8.removeBinding(t), t._in = null, T(this._er, t), this._ie && this._ie.remove(t), this.invalidateSize(), this.$invalidateChild = !0
        },
        getProperty: function (t, i) {
            return i == fh.PROPERTY_TYPE_STYLE ? this.graph.getStyle(this.$data, t) : i == fh.PROPERTY_TYPE_CLIENT ? this.$data.get(t) : this.$data[t]
        },
        getStyle: function (t) {
            return this.graph.getStyle(this.$data, t)
        },
        _$u: function (t, i, e) {
            var n = this._lc8.onBindingPropertyChange(this, t, i, e);
            return ka.onBindingPropertyChange(this, t, i, e) || n
        },
        onPropertyChange: function (t) {
            if ("zIndex" == t.kind) return this.invalidateRender(), !0;
            if ("ui" == t.type) {
                if ("invalidate" == t.kind) return this.invalidate(), !0;
                var i = t.value;
                return i && i.ui ? ("add" == t.kind ? this._8y(i) : "remove" == t.kind && this.removeChild(i.ui), !0) : !1
            }
            return this._$u(t.kind, t.propertyType || Ga, t.value)
        },
        label: null,
        initLabel: function () {
            var t = new qa;
            t.name = "label", this.addChild(t), this.label = t
        },
        initialize: function () {
            this.initLabel(), this.$data._lek && this.$data._lek.forEach(this._8y, this), ka.initBindingProperties(this), this._lc8.initBindingProperties(this, !1)
        },
        addBinding: function (t, i) {
            return i.property ? (i.target = t, void this._lc8._1q(i.property, i)) : !1
        },
        _fm: function (t, i) {
            var e = this.$data;
            if (!e._lek) return !1;
            var n = e._lek.getById(t.id);
            if (!n || !n.bindingProperties) return !1;
            var r = n.bindingProperties;
            if (z(r)) {
                var s = !1;
                return g(r, function (t) {
                    return "data" == t.bindingProperty ? (s = or(e, i, t.property, t.propertyType), !1) : void 0
                }, this), s
            }
            return "data" == r.bindingProperty ? or(e, i, r.property, r.propertyType) : !1
        },
        _8y: function (t) {
            var i = t.ui;
            if (i) {
                var e = t.bindingProperties;
                e && (Array.isArray(e) ? e.forEach(function (t) {
                    this.addBinding(i, t)
                }, this) : this.addBinding(i, e)), this.addChild(i)
            }
        },
        validate: function () {
            return this._lg0 || (this.initialize(), this._lg0 = !0), this.doValidate()
        },
        _$b: !0,
        invalidateChildrenIndex: function () {
            this._$b = !0
        },
        doValidate: function () {
            if (this._1c && (this._1c = !1, this.validateChildren() && (this.measure(), this.$invalidateSize = !0), this._$b && (this._$b = !1, js ? this._er = f(this._er, Wa) : this._er.sort(Wa))), Ue.call(this) && (this.$invalidateRotate = !0), this.$invalidateRotate) {
                ea.call(this), this.uiBounds.setByRect(this._f3);
                var t = this.$selectionBorder || 0,
                    i = Math.max(this.$selectionBorder || 0, this.$shadowOffsetX || 0, this.$selectionShadowOffsetX || 0),
                    e = Math.max(this.$shadowOffsetY || 0, this.$selectionShadowOffsetY || 0),
                    n = Math.max(2 * t, this.$shadowBlur, this.$selectionShadowBlur);
                n += Zs.UI_BOUNDS_GROW || 0;
                var r = n - i,
                    s = n + i,
                    o = n - e,
                    h = n + e;
                return 0 > r && (r = 0), 0 > s && (s = 0), 0 > o && (o = 0), 0 > h && (h = 0), this.uiBounds.grow(o, r, h, s), this.onBoundsChanged && this.onBoundsChanged(), this.$invalidateBounds = !0, !0
            }
        },
        validateChildren: function () {
            var t = this.$invalidateChild;
            this.$invalidateChild = !1;
            var i = this._leody,
                e = this.bodyChanged;
            i && (i.$renderColor = this.$renderColor, i.$renderColorBlendMode = this.$renderColorBlendMode, i.$shadowColor = this.$shadowColor, i.$shadowBlur = this.$shadowBlur, i.$shadowOffsetX = this.$shadowOffsetX, i.$shadowOffsetY = this.$shadowOffsetY), this.bodyChanged = !1, i && i._1c && (e = i.validate() || e, i.$x = 0, i.$y = 0, i.$invalidateRotate && ea.call(i), t = !0);
            for (var n = 0, r = this._er.length; r > n; n++) {
                var s = this._er[n];
                if (s != i) {
                    var o = s._1c && s.validate();
                    (o || e) && s._h0 && qe(s, i, this), !t && o && (t = !0)
                }
            }
            return t
        },
        measure: function () {
            this._ij.clear();
            for (var t, i, e = 0, n = this._er.length; n > e; e++) t = this._er[e], t._h0 && (i = t._f3, i.width <= 0 || i.height <= 0 || this._ij.addRect(t.$x + i.x, t.$y + i.y, i.width, i.height))
        },
        _ie: null,
        _lg8: function (t) {
            if (!this._ie) {
                if (!t.showOnTop) return;
                return this._ie = new Js, this._ie.add(t)
            }
            return t.showOnTop ? this._ie.add(t) : this._ie.remove(t)
        },
        draw: function (t, i, e) {
            for (var n, r = 0, s = this._er.length; s > r; r++) n = this._er[r], n._h0 && !n.showOnTop && n._ix(t, i, e, this)
        },
        _8j: function (t, i) {
            if (!this._h0 || !this._ie || !this._ie.length) return !1;
            t.save(), t.translate(this.$x, this.$y), this.$rotatable && this.$_hostRotate && t.rotate(this.$_hostRotate), (this.offsetX || this.offsetY) && t.translate(this.offsetX, this.offsetY), this.$rotate && t.rotate(this.$rotate), this.$layoutByAnchorPoint && this._9y && t.translate(-this._9y.x, -this._9y.y), this.shadowColor && (t.shadowColor = this.shadowColor, t.shadowBlur = this.shadowBlur * i, t.shadowOffsetX = this.shadowOffsetX * i, t.shadowOffsetY = this.shadowOffsetY * i), t.beginPath();
            for (var e, n = 0, r = this._er.length; r > n; n++) e = this._er[n], e._h0 && e.showOnTop && e._ix(t, i, this.selected, this);
            t.restore()
        },
        doHitTest: function (t, i, e) {
            if (e) {
                if (!this._ij.intersectsRect(t - e, i - e, 2 * e, 2 * e)) return !1
            } else if (!this._ij.intersectsPoint(t, i)) return !1;
            return this.hitTestChildren(t, i, e)
        },
        hitTestChildren: function (t, i, e) {
            for (var n, r = this._er.length - 1; r >= 0; r--)
                if (n = this._er[r], n._h0 && n.hitTest(t, i, e)) return n;
            return !1
        },
        destroy: function () {
            this._h8ed = !0;
            for (var t, i = this._er.length - 1; i >= 0; i--) t = this._er[i], t.destroy()
        }
    }, A(Xa, Na), Q(Xa.prototype, {
        renderColorBlendMode: {
            get: function () {
                return this.$renderColorBlendMode
            },
            set: function (t) {
                this.$renderColorBlendMode = t, this._1c = !0, this.body && (this.body.renderColorBlendMode = this.$renderColorBlendMode)
            }
        },
        renderColor: {
            get: function () {
                return this.$renderColor
            },
            set: function (t) {
                this.$renderColor = t, this._1c = !0, this.body && (this.body.renderColor = this.$renderColor)
            }
        },
        bodyBounds: {
            get: function () {
                if (this.$invalidateBounds) {
                    this.$invalidateBounds = !1;
                    var t, i = this.body;
                    t = i && i._h0 && !this._$o() ? i._f3.clone() : this._f3.clone(), this.rotate && Ri(t, this.rotate, t), t.x += this.$x, t.y += this.$y, this._lez = t
                }
                return this._lez
            }
        },
        bounds: {
            get: function () {
                return new so((this.$x || 0) + this.uiBounds.x, (this.$y || 0) + this.uiBounds.y, this.uiBounds.width, this.uiBounds.height)
            }
        },
        body: {
            get: function () {
                return this._leody
            },
            set: function (t) {
                t && this._leody != t && (this._leody = t, this.bodyChanged = !0, this.invalidateSize())
            }
        }
    }), Zs.UI_BOUNDS_GROW = 1;
    var Va = function () {
        b(this, Va, arguments)
    };
    Va.prototype = {
        strokeStyle: "#000",
        lineWidth: 0,
        fillColor: null,
        fillGradient: null,
        _ia: 1,
        _ic: 1,
        outline: 0,
        onDataChanged: function (t) {
            L(this, Va, "onDataChanged", arguments), this._jl && this._7j && this._jl._6e(this._7j, this), t && this._lcd(t)
        },
        _lcd: function (t) {
            this._jl = me(t), this._jl.validate(), (this._jl._k6 == Sh || this._jl._6t()) && (this._7j || (this._7j = function () {
                this.invalidateData(), this._in && this._in.graph && (this._in.invalidateSize(), this._in.graph.invalidate())
            }), this._jl._lgk(this._7j, this))
        },
        _jl: null,
        initialize: function () {
            this._lcd(this.$data)
        },
        _4n: function () {
            return this._jl && this._jl.draw
        },
        _8l: function (t) {
            if (!t || t.width <= 0 || t.height <= 0 || !this.$size || !(this.size instanceof Object)) return this._ia = 1, void(this._ic = 1);
            var i = this.size.width,
                n = this.size.height;
            if ((i === e || null === i) && (i = -1), (n === e || null === n) && (n = -1), 0 > i && 0 > n) return this._ia = 1, void(this._ic = 1);
            var r, s, o = t.width,
                h = t.height;
            i >= 0 && (r = i / o), n >= 0 && (s = n / h), 0 > i ? r = s : 0 > n && (s = r), this._ia = r, this._ic = s
        },
        validateSize: function () {
            if (this.$invalidateScale) {
                this.$invalidateScale = !1; {
                    var t = this._originalBounds;
                    this._ia, this._ic
                }
                this._8l(t), this.setMeasuredBounds(t.width * this._ia, t.height * this._ic, t.x * this._ia, t.y * this._ic)
            }
        },
        measure: function () {
            var t = this._jl.getBounds(this.lineWidth + this.outline);
            return t ? (this.$invalidateScale = !0, void(this._originalBounds = t.clone())) : void this._ij.set(0, 0, 0, 0)
        },
        onBoundsChanged: function () {
            this.$invalidateFillGradient = !0
        },
        _1h: function () {
            this.$invalidateFillGradient = !1, this._fillGradient = this.fillGradient ? Nh.prototype.generatorGradient.call(this.$fillGradient, this._7d) : null
        },
        _j8: function (t) {
            var i, e;
            if ("flip" == this.$adjustType) i = 1, e = -1;
            else {
                if ("mirror" != this.$adjustType) return;
                i = -1, e = 1
            }
            var n = this._ij.cx,
                r = this._ij.cy;
            t.translate(n, r), t.scale(i, e), t.translate(-n, -r)
        },
        draw: function (t, i, e, n) {
            if (this._ia && this._ic) {
                if (this.$invalidateFillGradient && this._1h(), t.save(), this.$adjustType && this._j8(t), this._jl._k6 == xh) return t.scale(this._ia, this._ic), this._jl._k7.draw(t, i, this, e, n || this), void t.restore();
                e && this._7l(t, i, n), this._jl.draw(t, i, this, this._ia, this._ic), t.restore()
            }
        },
        doHitTest: function (t, i, e) {
            if (this._jl.hitTest) {
                if ("flip" == this.$adjustType) {
                    var n = this._ij.cy;
                    i = 2 * n - i
                } else if ("mirror" == this.$adjustType) {
                    var r = this._ij.cx;
                    t = 2 * r - t
                }
                t /= this._ia, i /= this._ic;
                var s = (this._ia + this._ic) / 2;
                return s > 1 && (e /= s, e = 0 | e), this._jl._k7 instanceof Zh ? this._jl._k7.hitTest(t, i, e, !0, this.$lineWidth, this.$fillColor || this.$fillGradient) : this._jl.hitTest(t, i, e)
            }
            return !0
        },
        $invalidateScale: !0,
        $invalidateFillGradient: !0
    }, A(Va, Na), nr(Va.prototype, {
        adjustType: {},
        fillColor: {},
        size: {
            validateFlags: ["Size", "Scale"]
        },
        fillGradient: {
            validateFlags: ["FillGradient"]
        }
    }), Q(Va.prototype, {
        originalBounds: {
            get: function () {
                return this._originalBounds
            }
        }
    }), Zs.ALIGN_POSITION = ho.CENTER_MIDDLE;
    var qa = function () {
        b(this, qa, arguments), this.color = Zs.LABEL_COLOR
    };
    qa.prototype = {
        color: Zs.LABEL_COLOR,
        showPointer: !0,
        fontSize: null,
        fontFamily: null,
        fontStyle: null,
        _fh: null,
        alignPosition: null,
        measure: function () {
            this.font;
            var t = Fi(this.$data, this.$fontSize, this.$fontFamily, this.$fontStyle, Zs.LINE_HEIGHT, this.$font);
            if (this._fh = t, this.$size) {
                var i = this.$size.width || 0,
                    e = this.$size.height || 0;
                return this.setMeasuredBounds(i > t.width ? i : t.width, e > t.height ? e : t.height)
            }
            return this.setMeasuredBounds(t.width, t.height)
        },
        doHitTest: function (t, i, e) {
            return this.$data ? De(t, i, e, this) : !1
        },
        draw: function (t, i, e, n) {
            e && this._7l(t, i, n);
            this.$fontSize || Zs.FONT_SIZE;
            if (this.$rotatable && this.$_hostRotate) {
                var r = de(this.$_hostRotate);
                r > Qs && 3 * Qs > r && (t.translate(this._ij.width / 2, this._ij.height / 2), t.rotate(Math.PI), t.translate(-this._ij.width / 2, -this._ij.height / 2))
            }
            var s = this.alignPosition || Zs.ALIGN_POSITION,
                o = s.horizontalPosition,
                h = s.verticalPosition,
                a = 0;
            o == lo ? (o = "center", a += this._ij.width / 2) : o == _o ? (o = "right", a += this._ij.width) : o = "left";
            var l = 0;
            h == co ? l = (this._ij.height - this._fh.height) / 2 : h == fo && (l = this._ij.height - this._fh.height), t.fillStyle = this.color, Gi(t, this.$data, a, l, o, this.$fontFamily, this.$fontSize, this.$fontStyle, Zs.LINE_HEIGHT, this.$font)
        },
        _4n: function () {
            return null != this.$data || this.$size
        },
        $invalidateFont: !0
    }, A(qa, Na), nr(qa.prototype, {
        size: {
            validateFlags: ["Data"]
        },
        fontStyle: {
            validateFlags: ["Data", "Font"]
        },
        fontSize: {
            validateFlags: ["Data", "Font"]
        },
        fontFamily: {
            validateFlags: ["Data", "Font"]
        }
    }), Q(qa.prototype, {
        font: {
            get: function () {
                return this.$invalidateFont && (this.$invalidateFont = !1, this.$font = (this.$fontStyle || Zs.FONT_STYLE) + " " + (this.$fontSize || Zs.FONT_SIZE) + "px " + (this.$fontFamily || Zs.FONT_FAMILY)), this.$font
            }
        }
    });
    var Ka = function (t) {
        t = t || new Zh, this.pathBounds = new so, b(this, Ka, [t])
    };
    Ka.prototype = {
        layoutByPath: !0,
        layoutByAnchorPoint: !1,
        measure: function () {
            this.$invalidateFromArrow = !0, this.$invalidateToArrow = !0, this.$data.getBounds(this.$lineWidth + this.$outline, this.pathBounds), this.setMeasuredBounds(this.pathBounds)
        },
        validateSize: function () {
            if (this.$invalidateFromArrow || this.$invalidateToArrow) {
                var t = this.pathBounds.clone();
                if (this.$invalidateFromArrow) {
                    this.$invalidateFromArrow = !1;
                    var i = this.validateFromArrow();
                    i && t.add(i)
                }
                if (this.$invalidateToArrow) {
                    this.$invalidateToArrow = !1;
                    var i = this.validateToArrow();
                    i && t.add(i)
                }
                this.setMeasuredBounds(t)
            }
        },
        validateFromArrow: function () {
            if (!this.$data._i8 || !this.$fromArrow) return void(this.$fromArrowShape = null);
            var t = this.$data,
                i = 0,
                e = 0,
                n = this.$fromArrowOffset;
            n && (isNaN(n) && (n.x || n.y) ? (i += n.x || 0, e += n.y || 0) : i += n || 0, i > 0 && 1 > i && (i *= t._i8)), this.fromArrowLocation = t.getLocation(i, e), this.fromArrowLocation.rotate = Math.PI + this.fromArrowLocation.rotate || 0, this.$fromArrowShape = Dr(this.$fromArrow, this.$fromArrowSize);
            var r = this.$fromArrowShape.getBounds(this.fromArrowStyles.lineWidth + this.fromArrowStyles.outline);
            return this.fromArrowFillGradient instanceof dh.Gradient ? this.fromArrowStyles._fillGradient = Nh.prototype.generatorGradient.call(this.fromArrowFillGradient, r) : this.fromArrowStyles && (this.fromArrowStyles._fillGradient = null), r.offset(this.fromArrowLocation.x, this.fromArrowLocation.y), Di(r, this.fromArrowLocation.rotate, r, this.fromArrowLocation.x, this.fromArrowLocation.y), r
        },
        validateToArrow: function () {
            if (!this.$data._i8 || !this.$toArrow) return void(this.$toArrowShape = null);
            var t = this.$data,
                i = 0,
                e = 0,
                n = this.$toArrowOffset;
            n && (isNaN(n) && (n.x || n.y) ? (i += n.x || 0, e += n.y || 0) : i += n || 0), 0 > i && i > -1 && (i *= t._i8), i += t._i8, this.toArrowLocation = t.getLocation(i, e), this.$toArrowShape = Dr(this.$toArrow, this.$toArrowSize);
            var r = this.$toArrowShape.getBounds(this.toArrowStyles.lineWidth + this.toArrowStyles.outline);
            return this.toArrowFillGradient instanceof dh.Gradient ? this.toArrowStyles._fillGradient = Nh.prototype.generatorGradient.call(this.toArrowFillGradient, r) : this.toArrowStyles && (this.toArrowStyles._fillGradient = null), r.offset(this.toArrowLocation.x, this.toArrowLocation.y), Di(r, this.toArrowLocation.rotate, r, this.toArrowLocation.x, this.toArrowLocation.y), r
        },
        _23: function (t) {
            var i = t ? "from" : "to",
                n = this[i + "ArrowStroke"];
            n === e && (n = this.$lineWidth);
            var r = this[i + "ArrowStrokeStyle"];
            r === e && (r = this.strokeStyle);
            var s = this[i + "ArrowStyles"];
            s || (this[i + "ArrowStyles"] = s = {}), s.lineWidth = n, s.strokeStyle = r, s.lineDash = this[i + "ArrowLineDash"], s.lineDashOffset = this[i + "ArrowLineDashOffset"], s.fillColor = this[i + "ArrowFillColor"], s.fillGradient = this[i + "ArrowFillGradient"], s.lineCap = this[i + "ArrowLineCap"], s.lineJoin = this[i + "ArrowLineJoin"], s.outline = this[i + "ArrowOutline"] || 0, s.outlineStyle = this[i + "ArrowOutlineStyle"]
        },
        doValidate: function () {
            return this.$fromArrow && this._23(!0), this.$toArrow && this._23(!1), L(this, Ka, "doValidate")
        },
        drawArrow: function (t, i, e, n) {
            if (this.$fromArrow && this.$fromArrowShape) {
                t.save();
                var r = this.fromArrowLocation,
                    s = r.x,
                    o = r.y,
                    h = r.rotate;
                t.translate(s, o), h && t.rotate(h), this.$fromArrowShape.draw(t, i, this.fromArrowStyles, e, n), t.restore()
            }
            if (this.$toArrow && this.$toArrowShape) {
                t.save();
                var r = this.toArrowLocation,
                    s = r.x,
                    o = r.y,
                    h = r.rotate;
                t.translate(s, o), h && t.rotate(h), this.$toArrowShape.draw(t, i, this.toArrowStyles, e, n), t.restore()
            }
        },
        outlineStyle: null,
        outline: 0,
        onBoundsChanged: function () {
            this.$invalidateFillGradient = !0
        },
        _1h: function () {
            this.$invalidateFillGradient = !1, this._fillGradient = this.$fillGradient ? Nh.prototype.generatorGradient.call(this.$fillGradient, this._7d) : null
        },
        draw: function (t, i, e, n) {
            this.$invalidateFillGradient && this._1h(), this.$data.draw(t, i, this, e, n), this.drawArrow(t, i, e, n)
        },
        doHitTest: function (t, i, e) {
            if (this.$data.hitTest(t, i, e, !0, this.$lineWidth + this.$outline, this.$fillColor || this.$fillGradient)) return !0;
            if (this.$toArrow && this.$toArrowShape) {
                var n = t - this.toArrowLocation.x,
                    r = i - this.toArrowLocation.y;
                if (this.toArrowLocation.rotate) {
                    var s = Ii(n, r, -this.toArrowLocation.rotate);
                    n = s.x, r = s.y
                }
                var o = this.toArrowStyles.fillColor || this.toArrowStyles.fillGradient;
                if (this.$toArrowShape.hitTest(n, r, e, !0, this.toArrowStyles.lineWidth, o)) return !0
            }
            if (this.$fromArrow && this.$fromArrowShape) {
                var n = t - this.fromArrowLocation.x,
                    r = i - this.fromArrowLocation.y;
                if (this.fromArrowLocation.rotate) {
                    var s = Ii(n, r, -this.fromArrowLocation.rotate);
                    n = s.x, r = s.y
                }
                var o = this.fromArrowStyles.fillColor || this.fromArrowStyles.fillGradient;
                if (this.$fromArrowShape.hitTest(n, r, e, !0, this.fromArrowStyles.lineWidth, o)) return !0
            }
            return !1
        },
        $fromArrowOutline: 0,
        $toArrowOutline: 0,
        $invalidateFillGradient: !0,
        $invalidateFromArrow: !0,
        $invalidateToArrow: !0
    }, A(Ka, Na), nr(Ka.prototype, {
        strokeStyle: {
            validateFlags: ["FromArrow", "ToArrow"]
        },
        fillColor: {},
        fillGradient: {
            validateFlags: ["FillGradient"]
        },
        fromArrowOffset: {
            validateFlags: ["FromArrow", "Size"]
        },
        fromArrowSize: {
            validateFlags: ["FromArrow", "Size"]
        },
        fromArrow: {
            validateFlags: ["FromArrow", "Size"]
        },
        fromArrowOutline: {
            validateFlags: ["FromArrow", "Size"]
        },
        fromArrowStroke: {
            validateFlags: ["FromArrow", "Size"]
        },
        fromArrowStrokeStyle: {
            validateFlags: ["FromArrow"]
        },
        toArrowOffset: {
            validateFlags: ["ToArrow", "Size"]
        },
        toArrowSize: {
            validateFlags: ["ToArrow", "Size"]
        },
        toArrow: {
            validateFlags: ["ToArrow", "Size"]
        },
        toArrowOutline: {
            validateFlags: ["ToArrow", "Size"]
        },
        toArrowStroke: {
            validateFlags: ["ToArrow", "Size"]
        },
        toArrowStrokeStyle: {
            validateFlags: ["ToArrow"]
        },
        outline: {
            value: 0,
            validateFlags: ["Data"]
        }
    }), Q(Ka.prototype, {
        length: {
            get: function () {
                return this.data.length
            }
        }
    }), hr.prototype = {
        shape: null,
        path: null,
        initialize: function () {
            L(this, hr, "initialize"), this.path = new Zh, this.path._lcw = !1, this.shape = new Ka(this.path), this.addChild(this.shape, 0), this._leody = this.shape, Ya.initBindingProperties(this)
        },
        _1k: !0,
        _4s: null,
        _$o: function () {
            return !1
        },
        _3m: function () {
            return !1
        },
        validatePoints: function () {
            this.shape.invalidateData();
            var t = this.$data,
                i = this.path;
            i.clear();
            var e = t.fromAgent,
                n = t.toAgent;
            e && n && kr(this, t, i, e, n)
        },
        getEndPointBounds: function (t) {
            return t.bodyBounds.clone()
        },
        _3l: function (t, i, e, n, r, s, o) {
            return t.hasPathSegments() ? void(i.segments = t.pathSegments.toDatas()) : e == n ? void this.drawLoopedEdge(i, e, r, s) : void this.drawEdge(i, e, n, r, s, o)
        },
        drawLoopedEdge: function (t, i, e, n) {
            zr(this, n, t)
        },
        drawEdge: function (t, i, e, n, r, s) {
            var o = r.center,
                h = s.center;
            if (n == fh.EDGE_TYPE_ZIGZAG) {
                var a = (o.x + h.x) / 2,
                    l = (o.y + h.y) / 2,
                    _ = o.x - h.x,
                    u = o.y - h.y,
                    c = Math.sqrt(_ * _ + u * u),
                    d = Math.atan2(u, _);
                d += Math.PI / 6, c *= .04, c > 30 && (c = 30);
                var f = Math.cos(d) * c,
                    g = Math.sin(d) * c;
                return t.lineTo(a - g, l + f), void t.lineTo(a + g, l - f)
            }
            var v = $r(this, this.data, r, s, i, e, o, h);
            v && (t._ep = v)
        },
        _25: function () {
            if (!this.$data.isBundleEnabled()) return null;
            var t = this.graph._7p._83(this.$data);
            if (!t || !t.canBind(this.graph) || !t._gm) return null;
            var i = t.getYOffset(this);
            return t.isPositiveOrder(this.$data) || (i = -i), i
        },
        checkBundleLabel: function () {
            var t = this.getBundleLabel();
            return t ? (this.bundleLabel || this.createBundleLabel(), this.bundleLabel._h0 = !0, void(this.bundleLabel.data = t)) : void(this.bundleLabel && (this.bundleLabel._h0 = !1, this.bundleLabel.data = null))
        },
        createBundleLabel: function () {
            var t = new qa;
            t.editable = !1, this.bundleLabel = t, this.addChild(this.bundleLabel), Ha.initBindingProperties(this)
        },
        getBundleLabel: function () {
            return this.graph.getBundleLabel(this.data)
        },
        doValidate: function () {
            return this._1k && (this._1k = !1, this.validatePoints()), this.checkBundleLabel(), L(this, hr, "doValidate")
        },
        _3n: function () {
            this._1k = !0, this.invalidateSize()
        },
        _$u: function (t, i, e) {
            var n = this._lc8.onBindingPropertyChange(this, t, i, e);
            return n = ka.onBindingPropertyChange(this, t, i, e) || n, this.bundleLabel && this.bundleLabel.$data && (n = Ha.onBindingPropertyChange(this, t, i, e) || n), Ya.onBindingPropertyChange(this, t, i, e) || n
        }
    }, A(hr, Xa), hr.drawReferenceLine = function (t, i, e, n) {
        if (t.moveTo(i.x, i.y), !n || n == fh.EDGE_TYPE_DEFAULT) return void t.lineTo(e.x, e.y);
        if (n == fh.EDGE_TYPE_VERTICAL_HORIZONTAL) t.lineTo(i.x, e.y);
        else if (n == fh.EDGE_TYPE_HORIZONTAL_VERTICAL) t.lineTo(e.x, i.y);
        else if (0 == n.indexOf(fh.EDGE_TYPE_ORTHOGONAL)) {
            var r;
            r = n == fh.EDGE_TYPE_ORTHOGONAL_HORIZONTAL ? !0 : n == fh.EDGE_TYPE_ORTHOGONAL_VERTICAL ? !1 : Math.abs(i.x - e.x) > Math.abs(i.y - e.y);
            var s = (i.x + e.x) / 2,
                o = (i.y + e.y) / 2;
            r ? (t.lineTo(s, i.y), t.lineTo(s, e.y)) : (t.lineTo(i.x, o), t.lineTo(e.x, o))
        } else if (0 == n.indexOf(fh.EDGE_TYPE_ELBOW)) {
            var r, h = Za[Ba.EDGE_EXTEND] || 0;
            r = n == fh.EDGE_TYPE_ELBOW_HORIZONTAL ? !0 : n == fh.EDGE_TYPE_ELBOW_VERTICAL ? !1 : Math.abs(i.x - e.x) > Math.abs(i.y - e.y), r ? (t.lineTo(i.x + h, i.y), t.lineTo(e.x - h, e.y)) : (t.lineTo(i.x, i.y + h), t.lineTo(e.x, e.y - h))
        } else if (0 == n.indexOf("extend.")) {
            var h = Za[Ba.EDGE_EXTEND] || 0;
            if (n == fh.EDGE_TYPE_EXTEND_TOP) {
                var a = Math.min(i.y, e.y) - h;
                t.lineTo(i.x, a), t.lineTo(e.x, a)
            } else if (n == fh.EDGE_TYPE_EXTEND_BOTTOM) {
                var a = Math.max(i.y, e.y) + h;
                t.lineTo(i.x, a), t.lineTo(e.x, a)
            } else if (n == fh.EDGE_TYPE_EXTEND_LEFT) {
                var l = Math.min(i.x, e.x) - h;
                t.lineTo(l, i.y), t.lineTo(l, e.y)
            } else if (n == fh.EDGE_TYPE_EXTEND_RIGHT) {
                var l = Math.max(i.x, e.x) + h;
                t.lineTo(l, i.y), t.lineTo(l, e.y)
            }
        } else if (n == fh.EDGE_TYPE_ZIGZAG) {
            var s = (i.x + e.x) / 2,
                o = (i.y + e.y) / 2,
                _ = i.x - e.x,
                u = i.y - e.y,
                c = Math.sqrt(_ * _ + u * u),
                d = Math.atan2(u, _);
            d += Math.PI / 6, c *= .04, c > 30 && (c = 30);
            var f = Math.cos(d) * c,
                g = Math.sin(d) * c;
            t.lineTo(s - g, o + f), t.lineTo(s + g, o - f)
        }
        t.lineTo(e.x, e.y)
    }, Q(hr.prototype, {
        length: {
            get: function () {
                return this.path ? this.path.length : 0
            }
        }
    }), hr.prototype.addPoint = function (t, i, e) {
        var n = be(this.path, t, i, e);
        if (n && n.length > 2) {
            var r = this.data,
                s = n[n.length - 1];
            r.pathSegments = s.type == Hh ? n.splice(1, n.length - 2) : n.splice(1, n.length - 1)
        }
    }, ar.prototype = {
        _2j: null,
        image: null,
        initialize: function () {
            L(this, ar, "initialize"), this._lgi(), za.initBindingProperties(this)
        },
        _lcd: function () {
            this.data.image ? this.image && (this.body = this.image) : this.label && (this.body = this.label)
        },
        _lgi: function () {
            this.image = new Va, this.addChild(this.image, 0), this._lcd()
        },
        doValidate: function () {
            this.body && (this instanceof qr && !this.$data.groupImage && this._4x() ? this.body.$layoutByAnchorPoint = !1 : (this.body.$layoutByAnchorPoint = null != this._2j, this.body.anchorPosition = this._2j));
            var t = this.$data.$location,
                i = 0,
                e = 0;
            t && (i = t.x, e = t.y);
            var n = this.$x != i || this.$y != e;
            return n && (this.$invalidateBounds = !0), this.$x = i, this.$y = e, Xa.prototype.doValidate.call(this) || n
        },
        _$u: function (t, i, e) {
            var n = this._lc8.onBindingPropertyChange(this, t, i, e);
            return n = ka.onBindingPropertyChange(this, t, i, e) || n, za.onBindingPropertyChange(this, t, i, e) || n
        }
    }, A(ar, Xa);
    var Za = {};
    Za[Ba.SELECTION_COLOR] = Zs.SELECTION_COLOR, Za[Ba.SELECTION_BORDER] = Zs.SELECTION_BORDER, Za[Ba.SELECTION_SHADOW_BLUR] = Zs.SELECTION_SHADOW_BLUR, Za[Ba.SELECTION_TYPE] = fh.SELECTION_TYPE_SHADOW, Za[Ba.SELECTION_SHADOW_OFFSET_X] = 2, Za[Ba.SELECTION_SHADOW_OFFSET_Y] = 2, Za[Ba.LABEL_COLOR] = Zs.LABEL_COLOR, Za[Ba.LABEL_POSITION] = ho.CENTER_BOTTOM, Za[Ba.LABEL_ANCHOR_POSITION] = ho.CENTER_TOP, Za[Ba.LABEL_PADDING] = new oo(0, 2), Za[Ba.LABEL_POINTER_WIDTH] = 8, Za[Ba.LABEL_RADIUS] = 8, Za[Ba.LABEL_POINTER] = !0, Za[Ba.LABEL_BORDER] = 0, Za[Ba.LABEL_BORDER_STYLE] = "#000", Za[Ba.LABEL_ROTATABLE] = !0, Za[Ba.LABEL_BACKGROUND_COLOR] = null, Za[Ba.LABEL_BACKGROUND_GRADIENT] = null, Za[Ba.EDGE_COLOR] = "#555555", Za[Ba.EDGE_WIDTH] = 1.5, Za[Ba.EDGE_FROM_AT_EDGE] = !0, Za[Ba.EDGE_TO_AT_EDGE] = !0, Za[Ba.GROUP_BACKGROUND_COLOR] = Z(3438210798), Za[Ba.GROUP_STROKE] = 1, Za[Ba.GROUP_STROKE_STYLE] = "#000", Za[Ba.ARROW_TO] = !0, Za[Ba.ARROW_FROM_SIZE] = Zs.ARROW_SIZE, Za[Ba.ARROW_TO_SIZE] = Zs.ARROW_SIZE, Za[Ba.EDGE_LOOPED_EXTAND] = 10, Za[Ba.EDGE_CORNER_RADIUS] = 8, Za[Ba.EDGE_CORNER] = fh.EDGE_CORNER_ROUND, Za[Ba.EDGE_SPLIT_BY_PERCENT] = !0, Za[Ba.EDGE_EXTEND] = 20, Za[Ba.EDGE_SPLIT_PERCENT] = .5, Za[Ba.EDGE_SPLIT_VALUE] = 20, Za[Ba.EDGE_BUNDLE_GAP] = 20, Za[Ba.EDGE_BUNDLE_LABEL_ANCHOR_POSITION] = ho.CENTER_BOTTOM, Za[Ba.EDGE_BUNDLE_LABEL_POSITION] = ho.CENTER_TOP, Za[Ba.EDGE_BUNDLE_LABEL_COLOR] = "#075bc5", Za[Ba.SHAPE_STROKE] = 1, Za[Ba.SHAPE_STROKE_STYLE] = "#2898E0", Za[Ba.RENDER_COLOR_BLEND_MODE] = Zs.BLEND_MODE, Za[Ba.ALPHA] = 1, Zs.LOOKING_EDGE_ENDPOINT_TOLERANCE = 2;
    var Ja = function (i, e) {
        this._$r = new Ao, this._$r.on(function (t) {
            "currentSubNetwork" == t.kind && this.invalidateVisibility()
        }, this), this._1e = new Ao, this._1e.addListener(function (t) {
            !this.currentSubNetwork || t.kind != So.KIND_CLEAR && t.kind != So.KIND_REMOVE || this.graphModel.contains(this.currentSubNetwork) || (this.currentSubNetwork = null)
        }, this), this._8 = new Ao, this._13 = new Ao, this._$h = new Ao, this._$m = new Ao, this.graphModel = e || new Qn, this._7p = new Ta(this, i), this._2w = new Ls(this), this._18 = new Ao, this._onresize = Bo(t, "resize", function () {
            this.updateViewport()
        }, !1, this), this._7p._lge.ondrop = function (t) {
            this.ondrop(t)
        }.bind(this), this._7p._lge.ondragover = function (t) {
            this.ondragover(t)
        }.bind(this)
    };
    Ja.prototype = {
        originAtCenter: !0,
        editable: !1,
        ondragover: function (t) {
            dh.stopEvent(t)
        },
        getDropInfo: function (t, i) {
            var e = null;
            if (i) try {
                e = JSON.parse(i)
            } catch (n) {}
            return e
        },
        ondrop: function (t) {
            var i = t.dataTransfer;
            if (i) {
                var e = i.getData("text"),
                    n = this.getDropInfo(t, e);
                n || (n = {}, n.image = i.getData("image"), n.type = i.getData("type"), n.label = i.getData("label"), n.groupImage = i.getData("groupImage"));
                var r = this.globalToLocal(t);
                if (r = this.toLogical(r.x, r.y), !(this.dropAction instanceof Function && this.dropAction.call(this, t, r, n) === !1) && (n.image || n.label || n.type)) {
                    var s = n.image,
                        o = n.type,
                        h = n.label,
                        a = n.groupImage;
                    dh.stopEvent(t);
                    var l;
                    if (o && "Node" != o ? "Text" == o ? l = this.createText(h, r.x, r.y) : "ShapeNode" == o ? l = this.createShapeNode(h, r.x, r.y) : "Group" == o ? (l = this.createGroup(h, r.x, r.y), a && (a = Xr(a), a && (l.groupImage = a))) : (o = ti(o), o instanceof Function && o.prototype instanceof Ca && (l = new o, l.name = h, l.location = new io(r.x, r.y), this._jcModel.add(l))) : l = this.createNode(h, r.x, r.y), l) {
                        if (s && (s = Xr(s), s && (l.image = s)), t.shiftKey) {
                            var _ = this.getElementByMouseEvent(t);
                            _ && this._lgt(_) && (l.parent = _)
                        }
                        if (n.properties)
                            for (var u in n.properties) l[u] = n.properties[u];
                        if (n.clientProperties)
                            for (var u in n.clientProperties) l.set(u, n.clientProperties[u]);
                        if (n.styles && l.putStyles(n.styles), this.onElementCreated(l, t, n) === !1) return !1;
                        var c = new bs(this, bs.ELEMENT_CREATED, t, l);
                        return this.onInteractionEvent(c), l
                    }
                }
            }
        },
        _lgt: function (t) {
            return t.enableSubNetwork || t instanceof Pa || t.droppable
        },
        enableDoubleClickToOverview: !0,
        _7p: null,
        _$r: null,
        _1e: null,
        _8: null,
        _$m: null,
        _13: null,
        _$h: null,
        _1n: function (t) {
            return this._$r.beforeEvent(t)
        },
        _4e: function (t) {
            this._$r.onEvent(t), "viewport" == t.kind && this.checkLimitedBounds()
        },
        isVisible: function (t) {
            return this._7p._du(t)
        },
        isMovable: function (t) {
            return (t instanceof Ca || t instanceof xa && t.hasPathSegments()) && t.movable !== !1
        },
        isSelectable: function (t) {
            return t.selectable !== !1
        },
        isEditable: function (t) {
            return t.editable !== !1
        },
        isRotatable: function (t) {
            return t.rotatable !== !1
        },
        isResizable: function (t) {
            return t.resizable !== !1
        },
        canLinkFrom: function (t) {
            return t.linkable !== !1 && t.canLinkFrom !== !1
        },
        canLinkTo: function (t) {
            return t.linkable !== !1 && t.canLinkTo !== !1
        },
        isEndPointEditable: function (t) {
            return t.endPointEditable !== !1
        },
        createNode: function (t, i, e) {
            var n = new Ca(t, i, e);
            return this._jcModel.add(n), n
        },
        createText: function (t, i, e) {
            var n = new ir(t, i, e);
            return this._jcModel.add(n), n
        },
        createShapeNode: function (t, i, e, n) {
            G(i) && (n = e, e = i, i = null);
            var r = new Ra(t, i);
            return r.$location = new io(e, n), this._jcModel.add(r), r
        },
        createGroup: function (t, i, e) {
            var n = new Pa(t, i, e);
            return this._jcModel.add(n), n
        },
        createEdge: function (t, i, e) {
            if (t instanceof Ca) {
                var n = e;
                e = i, i = t, t = n
            }
            var r = new xa(i, e);
            return t && (r.$name = t), this._jcModel.add(r), r
        },
        addElement: function (t, i) {
            this._jcModel.add(t), i && t.hasChildren() && t.forEachChild(function (t) {
                this.addElement(t, i)
            }, this)
        },
        removeElement: function (t) {
            this._jcModel.remove(t)
        },
        clear: function () {
            this._jcModel.clear()
        },
        getStyle: function (t, i) {
            var n = t._io[i];
            return n !== e ? n : this.getDefaultStyle(i)
        },
        getDefaultStyle: function (t) {
            if (this._io) {
                var i = this._io[t];
                if (i !== e) return i
            }
            return Za[t]
        },
        _2g: function (t, i) {
            if (!this.limitedBounds || this.limitedBounds.contains(this.viewportBounds)) return i && i(), !1;
            t = this._28(), this.stopAnimation();
            var e, n, r, s = this.viewportBounds,
                o = this.limitedBounds,
                h = s.width / this.limitedBounds.width,
                a = s.height / this.limitedBounds.height;
            if (1 >= h && 1 >= a) return e = o.left > s.left ? o.left : o.right < s.right ? s.left - (s.right - o.right) : s.left, n = o.top > s.top ? o.top : o.bottom < s.bottom ? s.top - (s.bottom - o.bottom) : s.top, void this.translateTo(-e * this.scale, -n * this.scale, this.scale, !1, i);
            var l = h > a;
            r = Math.max(h, a), l ? (e = o.x, n = o.y + (s.top - o.top) * (1 - r) / r, n >= o.y ? n = o.y : n < o.bottom - s.height / r && (n = o.bottom - s.height / r)) : (n = o.y, e = o.x + (s.left - o.left) * (1 - r) / r, e >= o.x ? e = o.x : e < o.right - s.width / r && (e = o.right - s.width / r)), r *= this.scale, e *= r, n *= r, this.translateTo(-e, -n, r, t, i)
        },
        checkLimitedBounds: function (t) {
            return this._lcheckingBounds || !this.limitedBounds || this.limitedBounds.contains(this.viewportBounds) ? !1 : (this._lcheckingBounds = !0, void this.callLater(function () {
                this._2g(t, function () {
                    this._lcheckingBounds = !1
                }.bind(this))
            }, this))
        },
        zoomByMouseEvent: function (t, i, e, n) {
            var r = this.globalToLocal(t);
            return G(i) ? this.zoomAt(Math.pow(this.scaleStep, i), r.x, r.y, e, n) : i ? this.zoomIn(r.x, r.y, e, n) : this.zoomOut(r.x, r.y, e, n)
        },
        resetScale: 1,
        translate: function (t, i, e) {
            return this.translateTo(this.tx + t, this.ty + i, this.scale, e)
        },
        translateTo: function (t, i, e, n, r) {
            if (e && (e = Math.min(this.maxScale, Math.max(this.minScale, e))), n) {
                var s = this._59();
                return void s._jk(t, i, e, n, r)
            }
            var o = this._7p._lgg(t, i, e);
            return r && r(), o
        },
        centerTo: function (t, i, n, r, s) {
            return (!n || 0 >= n) && (n = this.scale), r === e && (r = this._28()), this.translateTo(this.width / 2 - t * n, this.height / 2 - i * n, n, r, s)
        },
        moveToCenter: function (t, i) {
            if (arguments[2] === !1 || !this._7p.isInvalidate()) {
                var e = this.bounds;
                return void this.centerTo(e.cx, e.cy, t, i)
            }
            return this._7p._lg0 || (i = !1), this.callLater(this.moveToCenter.bind(this, t, i, !1))
        },
        zoomToOverview: function (t, i) {
            if (arguments[2] === !1 || !this._7p.isInvalidate()) {
                var e = this._7p._1o();
                return void(e && (i && (e.scale = Math.min(e.scale, i)), this.centerTo(e.cx, e.cy, e.scale, t)))
            }
            return this._7p._lg0 || (t = !1), this.callLater(this.zoomToOverview.bind(this, t, i, !1))
        },
        _28: function () {
            return this._7p._lg0 ? this.zoomAnimation === e || null === this.zoomAnimation ? Zs.ZOOM_ANIMATE : this.zoomAnimation : !1
        },
        zoomAt: function (t, i, n, r, s) {
            r === e && (r = this._28()), i === e && (i = this.width / 2), i = i || 0, n === e && (n = this.height / 2), n = n || 0;
            var o = this.scale;
            return t = Math.min(this.maxScale, Math.max(this.minScale, o * t)), i = t * (this.tx - i) / o + i, n = t * (this.ty - n) / o + n, this.translateTo(i, n, t, r, s)
        },
        zoomOut: function (t, i, e, n) {
            return this.zoomAt(1 / this.scaleStep, t, i, e, n)
        },
        zoomIn: function (t, i, e, n) {
            return this.zoomAt(this.scaleStep, t, i, e, n)
        },
        _59: function () {
            return this._panAnimation || (this._panAnimation = new rl(this)), this._panAnimation
        },
        onAnimationStart: function () {},
        onAnimationEnd: function () {},
        isAnimating: function () {
            return this._panAnimation && this._panAnimation._e2()
        },
        enableInertia: !0,
        _9h: function (t, i) {
            var e = this._59();
            return e._gu(t || 0, i || 0)
        },
        stopAnimation: function () {
            this._panAnimation && this._panAnimation._k9()
        },
        getUI: function (t) {
            return ii(t) ? this._7p._35(t) : this._7p._jy(t)
        },
        getUIByMouseEvent: function (t) {
            return this._7p._35(t)
        },
        hitTest: function (t) {
            return this._7p.hitTest(t)
        },
        globalToLocal: function (t) {
            return this._7p._7f(t)
        },
        toCanvas: function (t, i) {
            return this._7p._f5(t, i)
        },
        toLogical: function (t, i) {
            return ii(t) ? this._7p._$g(t) : this._7p._ej(t, i)
        },
        getElementByMouseEvent: function (t) {
            var i = this._7p._35(t);
            return i ? i.$data : void 0
        },
        getElement: function (t) {
            if (ii(t)) {
                var i = this._7p._35(t);
                return i ? i.$data : null
            }
            return this._jcModel.getById(t)
        },
        invalidate: function () {
            this._7p._let()
        },
        invalidateUI: function (t) {
            t.invalidate(), this.invalidate()
        },
        invalidateElement: function (t) {
            this._7p._38(t)
        },
        getUIBounds: function (t) {
            return this._7p._2r(t)
        },
        forEachVisibleUI: function (t, i) {
            return this._7p._42(t, i)
        },
        forEachReverseVisibleUI: function (t, i) {
            return this._7p._$t(t, i)
        },
        forEachUI: function (t, i) {
            return this._7p._dd(t, i)
        },
        forEachReverseUI: function (t, i) {
            return this._7p._3z(t, i)
        },
        forEach: function (t, i) {
            return this._jcModel.forEach(t, i)
        },
        getElementByName: function (t) {
            var i;
            return this.forEach(function (e) {
                return e.name == t ? (i = e, !1) : void 0
            }), i
        },
        focus: function (i) {
            if (i) {
                var e = t.scrollX || t.pageXOffset,
                    n = t.scrollY || t.pageYOffset;
                return this.canvasPanel.focus(), void t.scrollTo(e, n)
            }
            this.canvasPanel.focus()
        },
        callLater: function (t, i, e) {
            this._7p._df(t, i, e)
        },
        exportImage: function (t, i) {
            return ns(this, t, i)
        },
        setSelection: function (t) {
            return this._jcModel._selectionModel.set(t)
        },
        select: function (t) {
            return this._jcModel._selectionModel.select(t)
        },
        unselect: function (t) {
            return this._jcModel._selectionModel.unselect(t)
        },
        reverseSelect: function (t) {
            return this._jcModel._selectionModel.reverseSelect(t)
        },
        selectAll: function () {
            es(this)
        },
        unSelectAll: function () {
            this.selectionModel.clear()
        },
        unselectAll: function () {
            this.unSelectAll()
        },
        isSelected: function (t) {
            return this._jcModel._selectionModel.contains(t)
        },
        sendToTop: function (t) {
            yn(this._jcModel, t)
        },
        sendToBottom: function (t) {
            Tn(this._jcModel, t)
        },
        moveElements: function (t, i, e) {
            var n = [],
                r = new Js;
            return g(t, function (t) {
                t instanceof Ca ? n.push(t) : t instanceof xa && r.add(t)
            }), this._e7(n, i, e, r)
        },
        _e7: function (t, i, e, n) {
            if (0 == i && 0 == e || 0 == t.length && 0 == n.length) return !1;
            if (0 != t.length) {
                var r = this._41(t);
                n = this._44(r, n), g(r, function (t) {
                    var n = t.$location;
                    n ? t.setLocation(n.x + i, n.y + e) : t.setLocation(i, e)
                })
            }
            return n && n.length && this._e0(n, i, e), !0
        },
        _e0: function (t, i, e) {
            t.forEach(function (t) {
                t.move(i, e)
            })
        },
        _44: function (t, i) {
            return this.graphModel.forEach(function (e) {
                e instanceof xa && this.isMovable(e) && t.contains(e.fromAgent) && t.contains(e.toAgent) && i.add(e)
            }, this), i
        },
        _41: function (t) {
            var i = new Js;
            return g(t, function (t) {
                !this.isMovable(t), i.add(t), vn(t, i, this._movableFilter)
            }, this), i
        },
        reverseExpanded: function (t) {
            if (!t.isBundleEnabled()) return !1;
            var i = t.getEdgeBundle(!0);
            return i ? i.reverseExpanded() !== !1 ? (this.invalidate(), !0) : void 0 : !1
        },
        _2w: null,
        _18: null,
        beforeInteractionEvent: function (t) {
            return this._18.beforeEvent(t)
        },
        onInteractionEvent: function (t) {
            this._18.onEvent(t)
        },
        addCustomInteraction: function (t) {
            this._2w.addCustomInteraction(t)
        },
        removeCustomInteraction: function (t) {
            this._2w.removeCustomInteraction(t)
        },
        enableWheelZoom: !0,
        enableTooltip: !0,
        getTooltip: function (t) {
            return t.tooltip || t.name
        },
        updateViewport: function () {
            this._7p._75()
        },
        destroy: function () {
            this._4e(new po(this, "destroy", !0, this._h8ed)), this._h8ed = !0, ko(t, "resize", this._onresize), this._2w.destroy(), this.graphModel = new Qn;
            var i = this.html;
            this._7p._h8(), i && (i.innerHTML = "")
        },
        onPropertyChange: function (t, i, e) {
            this._$r.addListener(function (n) {
                n.kind == t && i.call(e, n)
            })
        },
        removeSelection: function () {
            var t = this.selectionModel._ig;
            return t && 0 != t.length ? (t = t.slice(), this._jcModel.remove(t), t) : !1
        },
        removeSelectionByInteraction: function (t) {
            var i = this.selectionModel.datas;
            return i && 0 != i.length ? void dh.confirm("Delete Elements - " + i.length, function () {
                var i = this.removeSelection();
                if (i) {
                    var e = new bs(this, bs.ELEMENT_REMOVED, t, i);
                    this.onInteractionEvent(e)
                }
            }, this) : !1
        },
        createShapeByInteraction: function (t, i, e, n) {
            var r = new Zh(i);
            i.length > 2 && r.closePath();
            var s = this.createShapeNode("Shape", r, e, n);
            this.onElementCreated(s, t);
            var o = new bs(this, bs.ELEMENT_CREATED, t, s);
            return this.onInteractionEvent(o), s
        },
        createLineByInteraction: function (t, i, e, n) {
            var r = new Zh(i),
                s = this.createShapeNode("Line", r, e, n);
            s.setStyle(dh.Styles.SHAPE_FILL_COLOR, null), s.setStyle(dh.Styles.SHAPE_FILL_GRADIENT, null), s.setStyle(dh.Styles.LAYOUT_BY_PATH, !0), this.onElementCreated(s, t);
            var o = new bs(this, bs.ELEMENT_CREATED, t, s);
            return this.onInteractionEvent(o), s
        },
        createEdgeByInteraction: function (t, i, e, n) {
            var r = this.createEdge("Edge", t, i);
            if (n) r._9c = n;
            else {
                var s = this.edgeUIClass,
                    o = this.edgeType;
                this.interactionProperties && (s = this.interactionProperties.uiClass || s, o = this.interactionProperties.edgeType || o), s && (r.uiClass = s), o && (r.edgeType = o)
            }
            this.onElementCreated(r, e);
            var h = new bs(this, bs.ELEMENT_CREATED, e, r);
            return this.onInteractionEvent(h), r
        },
        onElementCreated: function (t) {
            !t.parent && this.currentSubNetwork && (t.parent = this.currentSubNetwork)
        },
        allowEmptyLabel: !1,
        startLabelEdit: function (t, i, e, n) {
            var r = this;
            e.startEdit(n.x, n.y, i.data, this.getStyle(t, Ba.LABEL_FONT_SIZE), function (e) {
                return r.onLabelEdit(t, i, e, i.parent)
            })
        },
        onLabelEdit: function (t, i, e, n) {
            if (!e && !this.allowEmptyLabel) return dh.alert("Label Can't Empty"), !1;
            if ("label" == i.name) {
                if (t.name == e) return !1;
                t.name = e
            } else n._fm(i, e) === !1 && (i.data = e, this.invalidateElement(t))
        },
        setInteractionMode: function (t, i) {
            this.interactionMode = t, this.interactionProperties = i
        },
        upSubNetwork: function () {
            return this._3b ? this.currentSubNetwork = Vr(this._3b) : !1
        },
        _$p: !1,
        invalidateVisibility: function () {
            this._$p = !0, this.invalidate()
        },
        getBundleLabel: function (t) {
            var i = t.getEdgeBundle(!0);
            return i && i.agentEdge == t ? "+" + i.bindableEdges.length : null
        },
        zoomAnimation: null,
        pauseRendering: function (t, i) {
            (this.delayedRendering || i) && this._7p._6v(t)
        },
        _4b: e,
        enableRectangleSelectionByRightButton: !0
    }, Q(Ja.prototype, {
        center: {
            get: function () {
                return this.toLogical(this.html.clientWidth / 2, this.html.clientHeight / 2)
            }
        },
        visibleFilter: {
            get: function () {
                return this._h0Filter
            },
            set: function (t) {
                this._h0Filter = t, this.invalidateVisibility()
            }
        },
        topCanvas: {
            get: function () {
                return this._7p._topCanvas
            }
        },
        propertyChangeDispatcher: {
            get: function () {
                return this._$r
            }
        },
        listChangeDispatcher: {
            get: function () {
                return this._1e
            }
        },
        dataPropertyChangeDispatcher: {
            get: function () {
                return this._8
            }
        },
        selectionChangeDispatcher: {
            get: function () {
                return this._$m
            }
        },
        parentChangeDispatcher: {
            get: function () {
                return this._13
            }
        },
        childIndexChangeDispatcher: {
            get: function () {
                return this._$h
            }
        },
        interactionDispatcher: {
            get: function () {
                return this._18
            }
        },
        cursor: {
            set: function (t) {
                this.canvasPanel.style.cursor = t || this._2w.defaultCursor
            },
            get: function () {
                return this.canvasPanel.style.cursor
            }
        },
        interactionMode: {
            get: function () {
                return this._2w._lcurrentMode
            },
            set: function (t) {
                var i = this.interactionMode;
                i != t && (this._2w.currentMode = t, this._4e(new po(this, "interactionMode", t, i)))
            }
        },
        scaleStep: {
            get: function () {
                return this._7p._da
            },
            set: function (t) {
                this._7p._da = t
            }
        },
        maxScale: {
            get: function () {
                return this._7p._fi
            },
            set: function (t) {
                this._7p._fi = t
            }
        },
        minScale: {
            get: function () {
                return this._7p._fo
            },
            set: function (t) {
                this._7p._fo = t
            }
        },
        scale: {
            get: function () {
                return this._7p._scale
            },
            set: function (t) {
                return this._7p._scale = t
            }
        },
        tx: {
            get: function () {
                return this._7p._tx
            }
        },
        ty: {
            get: function () {
                return this._7p._ty
            }
        },
        styles: {
            get: function () {
                return this._io
            },
            set: function (t) {
                this._io = t
            }
        },
        selectionModel: {
            get: function () {
                return this._jcModel._selectionModel
            }
        },
        graphModel: {
            get: function () {
                return this._jcModel
            },
            set: function (t) {
                if (this._jcModel == t) return !1;
                var i = this._jcModel,
                    e = new po(this, "graphModel", i, t);
                return this._1n(e) === !1 ? !1 : (null != i && (i.propertyChangeDispatcher.removeListener(this._$r, this), i.listChangeDispatcher.removeListener(this._1e, this), i.dataChangeDispatcher.removeListener(this._8, this), i.parentChangeDispatcher.removeListener(this._13, this), i.childIndexChangeDispatcher.removeListener(this._$h, this), i.selectionChangeDispatcher.removeListener(this._$m, this)), this._jcModel = t, this._jcModel && (this._jcModel.propertyChangeDispatcher.addListener(this._$r, this), this._jcModel.listChangeDispatcher.addListener(this._1e, this), this._jcModel.dataChangeDispatcher.addListener(this._8, this), this._jcModel.parentChangeDispatcher.addListener(this._13, this), this._jcModel.childIndexChangeDispatcher.addListener(this._$h, this), this._jcModel.selectionChangeDispatcher.addListener(this._$m, this)), this._7p && this._7p._jz(), void this._4e(e))
            }
        },
        count: {
            get: function () {
                return this._jcModel.length
            }
        },
        width: {
            get: function () {
                return this.html.clientWidth
            }
        },
        height: {
            get: function () {
                return this.html.clientHeight
            }
        },
        viewportBounds: {
            get: function () {
                return this._7p._viewportBounds
            }
        },
        bounds: {
            get: function () {
                return this._7p._3y()
            }
        },
        canvasPanel: {
            get: function () {
                return this._7p._lge
            }
        },
        html: {
            get: function () {
                return this._7p._lge.parentNode
            }
        },
        navigationType: {
            get: function () {
                return this._7p._64
            },
            set: function (t) {
                this._7p._3k(t)
            }
        },
        _3b: {
            get: function () {
                return this._jcModel._3b
            }
        },
        currentSubNetwork: {
            get: function () {
                return this._jcModel.currentSubNetwork
            },
            set: function (t) {
                this._jcModel.currentSubNetwork = t
            }
        },
        limitedBounds: {
            get: function () {
                return this._limitedBounds
            },
            set: function (t) {
                return so.equals(t, this._limitedBounds) ? !1 : t ? void(this._limitedBounds = new so(t)) : void(this._limitedBounds = null)
            }
        },
        ratio: {
            get: function () {
                return this._7p.ratio
            }
        },
        delayedRendering: {
            get: function () {
                return this._4b === e ? Zs.DELAYED_RENDERING : this._4b
            },
            set: function (t) {
                t != this.delayedRendering && (this._4b = t, this.pauseRendering(!1, !0))
            }
        },
        fullRefresh: {
            get: function () {
                return this._7p.fullRefresh
            },
            set: function (t) {
                this._7p.fullRefresh = t
            }
        }
    }), Zs.DELAYED_RENDERING = !0, Zs.GROUP_MIN_WIDTH = 60, Zs.GROUP_MIN_HEIGHT = 60, qr.prototype = {
        _lcd: function () {
            return this._4x() ? void 0 : L(this, qr, "_lcd", arguments)
        },
        initialize: function () {
            L(this, qr, "initialize"), this.checkBody()
        },
        _lgr: function () {
            this._kn = new Zh, this.shape = new Va(this._kn), this.shape.layoutByPath = !1, this.addChild(this.shape, 0), this.body = this.shape
        },
        checkBody: function () {
            return this._4x() ? (this._29 = !0, this.shape ? (this.shape.visible = !0, this.body = this.shape) : (this._lgr(), ja.initBindingProperties(this)), void(this.image && (this.image.visible = !1))) : (this.image ? (this.image.visible = !0, this.body = this.image) : this._lgi(), void(this.shape && (this.shape.visible = !1)))
        },
        _4x: function () {
            return this.$data._gy() && this.$data.expanded
        },
        _kn: null,
        _29: !0,
        _4y: function () {
            this._1c = !0, this._29 = !0
        },
        doValidate: function () {
            if (this._29 && this._4x()) {
                if (this._29 = !1, this.shape.invalidateData(), this.$data.groupImage) {
                    this.shape.data = this.$data.groupImage;
                    var t = this._1s();
                    return this.shape.offsetX = t.x + t.width / 2, this.shape.offsetY = t.y + t.height / 2, this.shape.size = {
                        width: t.width,
                        height: t.height
                    }, ar.prototype.doValidate.call(this)
                }
                this.shape.offsetX = 0, this.shape.offsetY = 0;
                var i = this._88(this.$data.groupType);
                this._kn.clear(), i instanceof so ? Rn(this._kn, i.x, i.y, i.width, i.height, i.rx, i.ry) : i instanceof ne ? Dn(this._kn, i) : i instanceof re && Pn(this._kn, i), this._kn._5z = !0, this.shape.invalidateData()
            }
            return ar.prototype.doValidate.call(this)
        },
        _6k: function (t, i, e, n, r) {
            switch ("number" != typeof n && (n = -i / 2), "number" != typeof r && (r = -e / 2), t) {
                case fh.GROUP_TYPE_CIRCLE:
                    var s = Math.max(i, e) / 2;
                    return new ne(n + i / 2, r + e / 2, s);
                case fh.GROUP_TYPE_ELLIPSE:
                    return new re(n + i / 2, r + e / 2, i, e);
                default:
                    return new so(n, r, i, e)
            }
        },
        _1s: function () {
            return this._88(null)
        },
        _88: function (t) {
            var i, n, r = this.data,
                s = r.padding,
                o = r.minSize,
                h = Zs.GROUP_MIN_WIDTH,
                a = Zs.GROUP_MIN_HEIGHT;
            if (o && ("number" == typeof o.width && (h = o.width), "number" == typeof o.height && (a = o.height), i = o.x, n = o.y), !r.hasChildren()) return this._6k(t, h, a, i, n);
            var l, _ = this.$data._er._ig;
            (t == fh.GROUP_TYPE_CIRCLE || t == fh.GROUP_TYPE_ELLIPSE) && (l = []);
            for (var u, c, d, f, g = new so, v = 0, E = _.length; E > v; v++) {
                var p = _[v];
                if (this.graph.isVisible(p)) {
                    var y = this.graph.getUI(p);
                    y && (u = y.$x + y._f3.x, c = y.$y + y._f3.y, d = y._f3.width, f = y._f3.height, g.addRect(u, c, d, f), l && (l.push({
                        x: u,
                        y: c
                    }), l.push({
                        x: u + d,
                        y: c
                    }), l.push({
                        x: u + d,
                        y: c + f
                    }), l.push({
                        x: u,
                        y: c + f
                    })))
                }
            }
            if (g.isEmpty()) return this._6k(t, h, a, i, n);
            var T = this.$data.$location;
            T ? T.invalidateFlag && (T.invalidateFlag = !1, i === e && (T.x = g.cx), n === e && (T.y = g.cy)) : T = this.$data.$location = {
                x: g.cx,
                y: g.cy
            }, s && g.grow(s), "number" == typeof i && i + T.x < g.x && (g.width += g.x - (i + T.x), g.x = i + T.x, l && l.push({
                x: g.x,
                y: g.cy
            })), "number" == typeof n && n + T.y < g.y && (g.height += g.y - (g.y, n + T.y), g.y = n + T.y, l && l.push({
                x: g.cx,
                y: g.y
            }));
            var m, i = T.x,
                n = T.y;
            if (t == fh.GROUP_TYPE_CIRCLE) {
                m = se(l), m.cx -= i, m.cy -= n;
                var O = Math.max(h, a) / 2;
                return m.r < O && (m.cx += O - m.r, m.cy += O - m.r, m.r = O), m
            }
            return t == fh.GROUP_TYPE_ELLIPSE ? (m = oe(l, g), m.cx -= i, m.cy -= n, m.width < h && (m.cx += (h - m.width) / 2, m.width = h), m.height < a && (m.cy += (a - m.height) / 2, m.height = a), m) : (m = g, g.width < h && (g.width = h), g.height < a && (g.height = a), g.offset(-i, -n), m)
        },
        _$u: function (t, i, e) {
            if (!this._4x()) return L(this, qr, "_$u", arguments);
            var n = this._lc8.onBindingPropertyChange(this, t, i, e);
            return n = ka.onBindingPropertyChange(this, t, i, e) || n, n = za.onBindingPropertyChange(this, t, i, e) || n, ja.onBindingPropertyChange(this, t, i, e) || n
        }
    }, A(qr, ar), dh.GroupUI = qr;
    var Qa = {
        draw: function () {}
    };
    Zs.NAVIGATION_IMAGE_LEFT = null, Zs.NAVIGATION_IMAGE_TOP = null;
    var tl = {
            position: "absolute",
            "text-align": "center"
        },
        il = {
            padding: "10px",
            transition: "opacity 0.2s ease-in"
        },
        el = {
            position: "relative",
            display: "block"
        };
    Ti(".Q-Graph-Nav img", "opacity:0.7;vertical-align:middle;"), Ti(".Q-Graph-Nav img:hover,img.hover", "opacity:1;background-color: rgba(0, 0, 0, 0.5)"), Vs || (Ti(".Q-Graph-Nav", "opacity:0;" + No("transition") + ":opacity 3s cubic-bezier(0.8, 0, 0.8, 1)"), Ti(".Q-Graph-Nav:hover", "opacity:1;" + No("transition") + ":opacity 0.3s linear")), Jr.prototype = {
        _lca: function (t, i) {
            return t._h0 == i ? !1 : (t._h0 = i, void(t.style.visibility = i ? "visible" : "hidden"))
        },
        _31: function (t, i) {
            var e = i / 2 - this._left._img.clientHeight / 2 + "px";
            this._left._img.style.top = e, this._right._img.style.top = e, this._navPane.style.width = t + "px", this._navPane.style.height = i + "px"
        },
        _9i: function (t, i, e, n) {
            this._lca(this._top, t), this._lca(this._left, i), this._lca(this._leottom, e), this._lca(this._right, n)
        },
        _h8: function () {
            var t = this._navPane.parentNode;
            t && t.removeChild(this._navPane)
        },
        _is: function () {
            var t = this._leaseCanvas._jc;
            if (t) {
                var i = t.bounds;
                if (i.isEmpty()) return void this._9i(!1, !1, !1, !1);
                var e = t.viewportBounds,
                    n = e.y > i.y + 1,
                    r = e.x > i.x + 1,
                    s = e.bottom < i.bottom - 1,
                    o = e.right < i.right - 1;
                this._9i(n, r, s, o)
            }
        }
    };
    var nl = 10;
    Ti(".Q-Graph-ScrollBar", "margin: 2px; position: absolute;box-sizing: border-box;box-shadow: #FFF 0px 0px 1px; background-color: rgba(120,120,120,0.3);border-radius: 4px;margin: 1px;"), Ti(".Q-Graph-ScrollBar.hover, .Q-Graph-ScrollBar:hover", "background-color: #7E7E7E;" + No("transition") + ": background-color 0.2s linear;"), Ti(".Q-Graph-ScrollBar--V", "width: 8px;right: 0px;"), Ti(".Q-Graph-ScrollBar--H", "height: 8px;bottom: 0px;"), Ti(".Q-Graph-ScrollBar--V.Both", "margin-bottom: 8px;"), Ti(".Q-Graph-ScrollBar--H.Both", "margin-right: 8px;"), Vs || (Ti(".Q-Graph-ScrollPane", "opacity:0;" + No("transition") + ":opacity 3s cubic-bezier(0.8, 0, 0.8, 1);"), Ti(".Q-Graph:hover .Q-Graph-ScrollPane", "opacity:1;" + No("transition") + ":opacity 0.3s linear;")), Qr.prototype = {
        _h8: function () {
            this._verticalDragSupport._h8(), this._horizontalDragSupport._h8(), delete this._verticalDragSupport, delete this._horizontalDragSupport, this._ko.parentNode && this._ko.parentNode.removeChild(this._ko)
        },
        _ko: null,
        _lgy: null,
        _8b: null,
        init: function (t) {
            var e = i.createElement("div");
            e.className = "Q-Graph-ScrollPane", Ei(e, {
                width: "100%",
                height: "100%",
                position: "relative"
            });
            var n = i.createElement("div");
            n.className = "Q-Graph-ScrollBar Q-Graph-ScrollBar--V";
            var r = i.createElement("div");
            r.className = "Q-Graph-ScrollBar Q-Graph-ScrollBar--H", e.appendChild(n), e.appendChild(r), t.appendChild(e), this._ko = e, this._8b = r, this._lgy = n, r.isH = !0;
            var s = this,
                o = {
                    onstart: function (t, i) {
                        i.classList.add("hover")
                    },
                    onrelease: function (t, i) {
                        i.classList.remove("hover")
                    },
                    ondrag: function (t, i) {
                        var e = s._leaseCanvas._jc;
                        if (e) {
                            var n = i.isH,
                                r = n ? t.dx : t.dy;
                            if (r && i.scale) {
                                var o = e.scale / i.scale;
                                n ? e.translate(-o * r, 0) : e.translate(0, -o * r), dh.stopEvent(t)
                            }
                        }
                    },
                    enddrag: function (t, i) {
                        var e = s._leaseCanvas._jc;
                        if (e && e.enableInertia) {
                            var n = i.isH,
                                r = n ? t.vx : t.vy;
                            if (Math.abs(r) > .1) {
                                var o = e.scale / i.scale;
                                r *= o, n ? e._9h(-r, 0) : e._9h(0, -r)
                            }
                        }
                    }
                };
            this._verticalDragSupport = new Oi(n, o), this._horizontalDragSupport = new Oi(r, o)
        },
        _31: function () {
            var t = this._leaseCanvas._jc;
            t && t.callLater(this._is.bind(this))
        },
        _is: function () {
            var t = this._leaseCanvas._jc;
            if (t) {
                var i = t.bounds;
                if (i.isEmpty()) return this._4i(!1), void this._4j(!1);
                var e = t.viewportBounds,
                    n = t.width,
                    r = t.height,
                    s = t.scale,
                    o = 1 / s,
                    h = e.x > i.x + o || e.right < i.right - o,
                    a = e.y > i.y + o || e.bottom < i.bottom - o,
                    l = h && a;
                l ? (B(this._lgy, "Both"), B(this._8b, "Both")) : (k(this._lgy, "Both"), k(this._8b, "Both")), this._4i(h, e, i, l ? n - nl : n), this._4j(a, e, i, l ? r - nl : r)
            }
        },
        _4i: function (t, i, e, n) {
            if (!t) return this._8b.style.display = "none", void(this._8b.scale = 0);
            var r = Math.min(i.x, e.x),
                s = Math.max(i.right, e.right),
                o = s - r,
                h = n / o;
            this._8b.scale = h, this._8b.style.left = parseInt((i.x - r) * h) + "px", this._8b.style.right = parseInt((s - i.right) * h) + "px", this._8b.style.display = ""
        },
        _4j: function (t, i, e, n) {
            if (!t) return this._lgy.style.display = "none", void(this._lgy.scale = 0);
            var r = Math.min(i.y, e.y),
                s = Math.max(i.bottom, e.bottom),
                o = s - r,
                h = n / o;
            this._lgy.scale = h, this._lgy.style.top = parseInt((i.y - r) * h) + "px", this._lgy.style.bottom = parseInt((s - i.bottom) * h) + "px", this._lgy.style.display = ""
        }
    }, ts.prototype = {
        shape: null,
        initialize: function () {
            L(this, ts, "initialize"), this._lgi(), Ua.initBindingProperties(this)
        },
        _lgi: function () {
            this.image = new Ka(this.$data.path), this.addChild(this.image, 0), this.body = this.image
        },
        invalidateShape: function () {
            this.image.invalidateData(), this.invalidateRender()
        },
        _$u: function (t, i, e) {
            var n = this._lc8.onBindingPropertyChange(this, t, i, e);
            return n = ka.onBindingPropertyChange(this, t, i, e) || n, Ua.onBindingPropertyChange(this, t, i, e) || n
        },
        doValidate: function () {
            this.body && (this.image.data = this.data.path, this.body.$layoutByAnchorPoint = null != this._2j, this.body.anchorPosition = this._2j);
            var t = this.$data.$location,
                i = 0,
                e = 0;
            t && (i = t.x, e = t.y);
            var n = this.$x != i || this.$y != e;
            return n && (this.$invalidateBounds = !0), this.$x = i, this.$y = e, Xa.prototype.doValidate.call(this) || n
        }
    }, A(ts, Xa), Q(ts.prototype, {
        path: {
            get: function () {
                return this.data.path
            }
        },
        length: {
            get: function () {
                return this.data.length
            }
        }
    }), ts.prototype.addPoint = function (t, i, e) {
        var n = this._gx(t, i),
            r = this.data,
            s = be(r.path, n.x, n.y, e);
        s && (r.pathSegments = s)
    }, is.prototype = {
        _ku: function () {
            this._ih.style.visibility = "visible"
        },
        _j3: function () {
            this._ih.style.visibility = "hidden"
        },
        clear: function () {
            this._9o.clear(), this._let()
        },
        contains: function (t) {
            return t instanceof Object && t.id && (t = t.id), this._9o.containsById(t)
        },
        _4z: function (t) {
            La.setStyle(this._ih, "transform", t ? "matrix(" + t.join(",") + ")" : "")
        },
        addDrawable: function (t, i) {
            if (i) {
                var e = {
                    id: ++Ps,
                    drawable: t,
                    scope: i
                };
                return this._9o.add(e), e
            }
            return t.id || (t.id = ++Ps), this._9o.add(t), t
        },
        removeDrawable: function (t) {
            return t.id ? void this._9o.remove(t) : this._9o.removeById(t)
        },
        _9o: null,
        invalidate: function () {
            this._let()
        },
        _let: function () {
            this._leaseCanvas._5z || this._ix()
        },
        _h9: function (t, i) {
            this._ih.setSize(t, i)
        },
        _ix: function () {
            var t = this._leaseCanvas._scale,
                i = this.g;
            i._jw(), i.save(), this._leaseCanvas._98(i);
            for (var e = this._9o._ig, n = 0, r = e.length; r > n; n++) i.save(), i.beginPath(), this._ff(i, e[n], t), i.restore();
            i.restore()
        },
        _ff: function (t, i, e) {
            return i instanceof Function ? void i(t, e) : void(i.drawable instanceof Function && i.scope && i.drawable.call(i.scope, t, e))
        }
    }, Zs.ZOOM_ANIMATE = !0;
    var rl = function (t) {
        this._jc = t
    };
    Zs.ANIMATION_MAXTIME = 600, Zs.ANIMATION_TYPE = lh.easeOut, rl.prototype = {
        _jc: null,
        _e1: null,
        _gu: function (t, i, e) {
            this._k9();
            var n = Math.abs(t / 2),
                r = Math.abs(i / 2),
                s = Math.min(Zs.ANIMATION_MAXTIME, .6 * Math.max(n, r) * 1e3);
            if (10 > s) return !1;
            var o = function (t) {
                    return -(2 * Math.pow(t, 1.5) - 3 * t)
                },
                h = t * s / 3,
                a = i * s / 3;
            this._jk(this._jc.tx + h, this._jc.ty + a, 0, {
                duration: s,
                animationType: o
            }, e)
        },
        _77: function (t, i, e, n, r) {
            this._e1 && this._e1._k9(), r && (this.__delayRender = !0, this._jc.pauseRendering(!0)), this._46(), this._e1 = new uh(t, this, i, e), this._e1._5v = this._5v.bind(this), this._e1._jo(n)
        },
        _46: function () {
            this._jc.onAnimationStart()
        },
        _5v: function () {
            this.__delayRender && (this._jc.pauseRendering(!1), delete this.__delayRender), this._jc.onAnimationEnd()
        },
        _e2: function () {
            return this._e1 && this._e1._e2()
        },
        _k9: function () {
            this._e1 && this._e1._k9()
        },
        _he: function (t) {
            var i = this._fromTX + (this._toTX - this._fromTX) * t,
                e = this._fromTY + (this._toTY - this._fromTY) * t,
                n = this._fromScale + (this._toScale - this._fromScale) * t;
            this._jc.translateTo(i, e, n, this.toInt)
        },
        _jk: function (t, i, e, n, r) {
            this._k9();
            var s = this._jc,
                o = s.scale;
            if (0 >= e && (e = o), t != s.tx || i != s.ty || e != o) {
                var h, a, l;
                n instanceof Object && (h = n.duration, a = n.maxTime, l = n.animationType);
                var _ = s.tx,
                    u = s.ty;
                if (!h)
                    if (e != o) {
                        var c = e > o ? e / o : o / e;
                        c = Math.log(c) / Math.log(1.3), h = 60 * c
                    } else {
                        var d = eo(t, i, _, u);
                        h = d / 2
                    }
                a = a || Zs.ANIMATION_MAXTIME, l = l || Zs.ANIMATION_TYPE, h = Math.min(a, h), this._fromTX = _, this._fromTY = u, this._fromScale = o, this._toTX = t, this._toTY = i, this._toScale = e, this._77(this._he, h, l, r, e != o)
            }
        }
    }, Zs.INTERACTION_HANDLER_SIZE_TOUCH = 8, Zs.INTERACTION_HANDLER_SIZE_DESKTOP = 4, Zs.INTERACTION_ROTATE_HANDLER_SIZE_TOUCH = 30, Zs.INTERACTION_ROTATE_HANDLER_SIZE_DESKTOP = 20;
    var sl = Math.PI / 4;
    rs.prototype = {
        onElementRemoved: function (t, i) {
            this.element && (t == this.element || z(t) && m(t, this.element)) && this.destroy(i)
        },
        onClear: function (t) {
            this.element && this.destroy(t)
        },
        destroy: function () {
            delete this.element, this.removeDrawable()
        },
        invalidate: function () {
            this.topCanvas.invalidate()
        },
        removeDrawable: function () {
            this._f2Id && (this.topCanvas.removeDrawable(this._f2Id), delete this._f2Id, this.invalidate())
        },
        addDrawable: function () {
            this._f2Id || (this._f2Id = this.topCanvas.addDrawable(this.doDraw, this).id, this.invalidate())
        },
        doDraw: function () {},
        escapable: !0,
        onkeydown: function (t, i) {
            this.escapable && 27 == t.keyCode && (H(t), this.destroy(i))
        }
    }, dh.DrawableInteraction = rs, ss.prototype = {
        defaultCursor: "default",
        getInteractionInstances: function (t) {
            if (!this.interactions) return null;
            for (var i = [], e = 0, n = this.interactions.length; n > e; e++) {
                var r = this.interactions[e];
                r instanceof Function ? i.push(new r(t)) : r instanceof Object && i.push(r)
            }
            return i
        }
    }, os.prototype = {
        _dp: null,
        _ib: null,
        destroy: function () {
            L(this, os, "destroy", arguments), delete this._ib, delete this._9f, delete this._dp
        },
        doDraw: function (t) {
            var i = this.points;
            i && (i.forEach(function (i) {
                this.drawPoint(t, i)
            }, this), this.isClosePath && t.closePath(), this.styleDraw(t))
        },
        styleDraw: function (t) {
            var i = hs(this.graph.interactionProperties, this.getDefaultDrawStyles(this.graph));
            i.lineWidth && (t.lineWidth = i.lineWidth, i.lineCap && (t.lineCap = i.lineCap), i.lineJoin && (t.lineJoin = i.lineJoin), i.lineDash && (t.lineDash = i.lineDash, t.lineDashOffset = i.lineDashOffset || 0), t.strokeStyle = i.strokeStyle, t.stroke()), i.fillStyle && (t.fillStyle = i.fillStyle, t.fill())
        },
        drawPoint: function (t, i, e) {
            if (e) return void t.moveTo(i.x, i.y);
            if (dh.isArray(i)) {
                var n = i[0],
                    r = i[1];
                t.quadraticCurveTo(n.x, n.y, r.x, r.y)
            } else t.lineTo(i.x, i.y)
        },
        setCurrentPoint: function (t) {
            this.currentPoint = t
        },
        addPoint: function (t) {
            this._ib || (this._ib = [], this.addDrawable()), this._ib.push(t), this.invalidate()
        }
    }, A(os, rs), Q(os.prototype, {
        currentPoint: {
            get: function () {
                return this._9f
            },
            set: function (t) {
                this._9f = t, this.invalidate()
            }
        },
        prevPoint: {
            get: function () {
                return this._ib && this._ib.length ? this._ib[this._ib.length - 1] : null
            }
        },
        points: {
            get: function () {
                return this._9f && this._ib && this._ib.length ? this._ib.concat(this._9f) : void 0
            }
        }
    }), dh.DrawPathInteraction = os, as.prototype = {
        destroy: function () {
            L(this, as, "destroy", arguments), delete this.start, this._jp && (clearTimeout(this._jp), delete this._jp)
        },
        doDraw: function (t, i) {
            return this._ib ? this._ib.length <= 1 ? us.prototype.doDraw.call(this, t, i) : void L(this, as, "doDraw", arguments) : void 0
        },
        ondblclick: function (t, i) {
            this.destroy(i)
        },
        finish: function (t, i, e) {
            var n;
            this._ib && this._ib.length >= 2 && (this._ib.shift(), n = new Js, g(this._ib, function (t) {
                if (dh.isArray(t)) {
                    var i = t[0],
                        e = t[1];
                    n.add(new qh(fh.SEGMENT_QUAD_TO, [i.x, i.y, e.x, e.y]))
                } else n.add(new qh(fh.SEGMENT_LINE_TO, [t.x, t.y]))
            }, this)), i.createEdgeByInteraction(this.start, e, t, n), this.destroy(i)
        },
        _le3: function (t, i) {
            return t instanceof Ca && i.canLinkFrom(t)
        },
        _dr: function (t, i) {
            return t instanceof Ca && i.canLinkTo(t, this.start)
        },
        _8d: function (t, i) {
            var e = i.getUI(t);
            return e && e.bodyBounds ? e.bodyBounds.center : t.location
        },
        onstart: function (t, i) {
            if (this.start) {
                var e = t.getData();
                return this._dr(e, i) ? void this.finish(t, i, e) : void this.addPoint(this.toLogicalPoint(t))
            }
        },
        startdrag: function (t, i) {
            if (!this.start && !t.responded) {
                var e = t.getData();
                e && this._le3(e, i) && (t.responded = !0, this.start = e, this.addPoint(this._8d(e, i)))
            }
        },
        _lc6: function (t) {
            this._jp && (clearTimeout(this._jp), delete this._jp), this._jp = setTimeout(function (t) {
                if (delete this._jp, this.start && this.currentPoint) {
                    var i = t.x - this.currentPoint.x,
                        e = t.y - this.currentPoint.y;
                    Math.sqrt(i * i + e * e) * this.graph.scale <= 2 && this.addPoint(this.currentPoint)
                }
            }.bind(this, this.toLogicalPoint(t)), Zs.LONG_PRESS_INTERVAL)
        },
        ondrag: function (t, i) {
            this.onmousemove(t, i)
        },
        enddrag: function (t, i) {
            if (this.start) {
                var e = t.getData();
                this._dr(e, i) && this.finish(t, i, e)
            }
        },
        onrelease: function (t, i) {
            Yo(t) && this.destroy(i)
        },
        onmousemove: function (t, i) {
            this.start && (this.currentPoint = this.toLogicalPoint(t), Yo(t) && this._lc6(t, i))
        },
        toLogicalPoint: function (t) {
            return this.graph.toLogical(t)
        },
        getDefaultDrawStyles: function () {
            return {
                lineWidth: this.graph.getDefaultStyle(Ba.EDGE_WIDTH),
                strokeStyle: this.graph.getDefaultStyle(Ba.EDGE_COLOR),
                lineDash: this.graph.getDefaultStyle(Ba.EDGE_LINE_DASH),
                lineDashOffset: this.graph.getDefaultStyle(Ba.EDGE_LINE_DASH_OFFSET),
                lineCap: this.graph.getDefaultStyle(Ba.LINE_CAP),
                lineJoin: this.graph.getDefaultStyle(Ba.LINE_JOIN)
            }
        }
    }, A(as, os), dh.CreateEdgeInteraction = as, ls.prototype = {
        getDefaultDrawStyles: function () {
            return {
                lineWidth: this.graph.getDefaultStyle(Ba.SHAPE_STROKE),
                strokeStyle: this.graph.getDefaultStyle(Ba.SHAPE_STROKE_STYLE),
                fillStyle: this.graph.getDefaultStyle(Ba.SHAPE_FILL_COLOR)
            }
        },
        finish: function (t, i) {
            if (this._ib && this._ib.length) {
                var e = this._ib,
                    n = 0,
                    r = 0,
                    s = 0;
                e.forEach(function (t) {
                    return dh.isArray(t) ? void t.forEach(function () {
                        n += t.x, r += t.y, s++
                    }) : (n += t.x, r += t.y, void s++)
                }), n /= s, r /= s;
                var o = [];
                e.forEach(function (t, i) {
                    if (0 == i) return void o.push(new qh(fh.SEGMENT_MOVE_TO, [t.x - n, t.y - r]));
                    if (dh.isArray(t)) {
                        var e = t[0],
                            s = t[1];
                        o.push(new qh(fh.SEGMENT_QUAD_TO, [e.x - n, e.y - r, s.x - n, s.y - r]))
                    } else o.push(new qh(fh.SEGMENT_LINE_TO, [t.x - n, t.y - r]))
                }), this.createElement(t, o, n, r), this.destroy(i)
            }
        },
        startdrag: function (t) {
            t.responded = !0
        },
        createElement: function (t, i, e, n) {
            return this.graph.createShapeByInteraction(t, i, e, n)
        },
        onstart: function (t, i) {
            var e = i.toLogical(t);
            this._dp = e, this.addPoint(e)
        },
        onmousemove: function (t, i) {
            this._dp && (this.currentPoint = i.toLogical(t))
        },
        ondblclick: function (t, i) {
            if (this._dp) {
                if (this._ib.length < 3) return void this.destroy(i);
                delete this._ib[this._ib.length - 1], this.finish(t, i)
            }
        },
        isClosePath: !0
    }, A(ls, os), dh.CreateShapeInteraction = ls, _s.prototype = {
        isClosePath: !1,
        createElement: function (t, i, e, n) {
            return this.graph.createLineByInteraction(t, i, e, n)
        },
        getDefaultDrawStyles: function () {
            return {
                lineWidth: Za[Ba.SHAPE_STROKE],
                strokeStyle: Za[Ba.SHAPE_STROKE_STYLE],
                lineDash: this.graph.getDefaultStyle(Ba.SHAPE_LINE_DASH),
                lineDashOffset: this.graph.getDefaultStyle(Ba.SHAPE_LINE_DASH_OFFSET),
                lineCap: this.graph.getDefaultStyle(Ba.LINE_CAP),
                lineJoin: this.graph.getDefaultStyle(Ba.LINE_JOIN)
            }
        }
    }, A(_s, ls), dh.CreateLineInteraction = _s, us.prototype = {
        destroy: function (t) {
            L(this, us, "destroy", arguments), t.cursor = "", this.start = null
        },
        doDraw: function (t) {
            if (this.start && this.currentPoint) {
                var i, e;
                this.graph.interactionProperties && (i = this.graph.interactionProperties.uiClass, e = this.graph.interactionProperties.edgeType), i = i || this.graph.edgeUIClass || dh.EdgeUI, e = e || this.graph.edgeType;
                var n = i.drawReferenceLine || dh.EdgeUI.drawReferenceLine,
                    r = this.graph.getUI(this.start);
                r && r.bodyBounds && (r = r.bodyBounds.center, n(t, r, this.currentPoint, e), this.styleDraw(t))
            }
        },
        canLinkFrom: function (t, i) {
            return t instanceof Ca && i.canLinkFrom(t)
        },
        canLinkTo: function (t, i) {
            return t instanceof Ca && i.canLinkTo(t, this.start)
        },
        startdrag: function (t, i) {
            var e = t.getData();
            this.canLinkFrom(e, i) && (t.responded = !0, this.start = e, i.cursor = "crosshair", this.addDrawable())
        },
        ondrag: function (t, i) {
            this.start && (dh.stopEvent(t), this.currentPoint = i.toLogical(t), this.invalidate())
        },
        enddrag: function (t, i) {
            if (this.start) {
                this.invalidate();
                var e = t.getData();
                this.canLinkTo(e, i) && i.createEdgeByInteraction(this.start, e, t), this.destroy(i)
            }
        },
        getDefaultDrawStyles: function () {
            return {
                lineWidth: this.graph.getDefaultStyle(Ba.EDGE_WIDTH),
                strokeStyle: this.graph.getDefaultStyle(Ba.EDGE_COLOR),
                lineDash: this.graph.getDefaultStyle(Ba.EDGE_LINE_DASH),
                lineDashOffset: this.graph.getDefaultStyle(Ba.EDGE_LINE_DASH_OFFSET),
                lineCap: this.graph.getDefaultStyle(Ba.LINE_CAP),
                lineJoin: this.graph.getDefaultStyle(Ba.LINE_JOIN)
            }
        }
    }, A(us, os), dh.CreateSimpleEdgeInteraction = us, Zs.LABEL_EDITOR_SUBMIT_WHEN_LOST_FOCUS = !1, Es.prototype = {
        html: null,
        createHTML: function () {
            var t = i.createElement("textarea");
            t.className = "Q-LabelEditor", t.style.position = "absolute", t.style.textAlign = "center", t.style.border = "solid #08E 1px", t.style.padding = "5px", t.style.boxShadow = "0px 0px 10px rgba(40, 85, 184, 0.75)", t.style.display = "none", t.style.overflow = "hidden";
            var e = this;
            return t.oninput = function (t) {
                e.onValueChange(t)
            }, t.onkeydown = function (t) {
                return 27 == t.keyCode ? void e.cancelEdit() : void 0
            }, t.onkeypress = function (i) {
                if (13 == i.keyCode || 10 == i.keyCode) {
                    if (i.preventDefault(), i.altKey || i.ctrlKey || i.shiftKey) return gs(t, "\n"), void e.onValueChange(i);
                    e.stopEdit()
                }
            }, i.body.appendChild(t), t
        },
        setText: function (t, i) {
            this.html.value = t || "", i && (this.html.style.fontSize = i), vs(this.html), this.onSizeChange(this.html)
        },
        onSizeChange: function (t) {
            var i = (t.offsetWidth, t.offsetHeight, fs(t));
            return t.style.width = i.width + 30 + "px", t.style.height = i.height + 10 + "px", i
        },
        onValueChange: function (t) {
            {
                var i = t.target;
                this.onSizeChange(i)
            }
            i.style.left = i.x - i.offsetWidth / 2 + "px"
        },
        onClickOnWindow: function (t) {
            t.target != this.html && (Zs.LABEL_EDITOR_SUBMIT_WHEN_LOST_FOCUS ? this.stopEdit() : this.cancelEdit())
        },
        startEdit: function (i, e, n, r, s) {
            this.html || (this.html = this.createHTML()), this.stopEditWhenClickOnWindow || (this.stopEditWhenClickOnWindow = function (t) {
                this.onClickOnWindow(t)
            }.bind(this)), t.addEventListener("mousedown", this.stopEditWhenClickOnWindow, !0), this.callback = s, this.html.x = i, this.html.y = e, this.html.style.display = "block", ds(this.html, i, e), this.setText(n, r || 10), ds(this.html, i, e)
        },
        isEditing: function () {
            return "none" != this.html.style.display
        },
        cancelEdit: function () {
            this.stopEdit(!0)
        },
        stopEdit: function (i) {
            if (this.isEditing()) {
                t.removeEventListener("mousedown", this.stopEditWhenClickOnWindow);
                var e = this.html.value;
                if (!i && this.callback && this.callback(e) === !1) return !1;
                this.html.style.display = "none", this.html.value = null, this.callback = null
            }
        },
        destroy: function () {
            this.html && i.body.removeChild(this.html)
        }
    }, dh.LabelEditor = Es;
    var ol = function (t) {
        this.graph = t
    };
    ol.prototype = {
        destroy: function (t) {
            t.labelEditor && (t.labelEditor.destroy(), delete t.labelEditor)
        },
        ondblclick: function (t, i) {
            var e = t.getData();
            if (e) {
                if (e.dblclickable !== !1) {
                    if (i.editable && i.isEditable(e)) {
                        var n = i.hitTest(t);
                        if (n instanceof qa && n.editable !== !1) {
                            var r = i.labelEditor;
                            r || (i.labelEditor = r = new Es);
                            var s = n.getBounds();
                            return s = i.toCanvas(s.x + s.width / 2, s.y + s.height / 2), s = cs(s.x, s.y, i.html), void i.startLabelEdit(e, n, r, s)
                        }
                    }
                    var o = e instanceof Pa,
                        h = e instanceof xa && e.hasEdgeBundle();
                    return e._3o && (wi(t) || !o && !h) ? void(i.currentSubNetwork = e) : o ? (e.expanded = !e.expanded, void this.graph.onInteractionEvent(new bs(this.graph, bs.GROUP_EXPANDED, t, e))) : void(h && this.graph.reverseExpanded(e) && this.graph.onInteractionEvent(new bs(this.graph, bs.EDGE_BUNDLE, t, e)))
                }
            } else {
                if (i.currentSubNetwork) return void i.upSubNetwork();
                if (i.enableDoubleClickToOverview) {
                    var a = i.resetScale || 1;
                    Math.abs(i.scale - a) < 1e-4 ? i.zoomToOverview() : i.moveToCenter(a)
                }
            }
        }
    };
    var hl = function (t) {
        this.graph = t
    };
    hl.prototype = {
        onkeydown: function (t, i) {
            if (i.editable) {
                var e = t.keyCode;
                if (8 == e || 46 == e || 127 == e) return i.removeSelectionByInteraction(t), void j(t);
                if (wi(t)) {
                    if (67 == e);
                    else if (86 == e);
                    else if (90 == e);
                    else if (89 != e) return;
                    j(t)
                }
            }
        }
    }, dh.EditInteraction = hl;
    var al = function (t) {
        this.graph = t
    };
    al.prototype = {
        onkeydown: function (i, e) {
            if (i.metaKey && 83 == i.keyCode) {
                var n = e.exportImage(e.scale, e.viewportBounds),
                    r = t.open(),
                    s = r.document;
                s.title = "export image - " + n.width + " x " + n.height;
                var o = s.createElement("img");
                o.src = n.data, s.body.appendChild(o), j(i)
            }
        }
    };
    var ll = function (t) {
        this.graph = t
    };
    ll.prototype = {
        destroy: function () {
            delete this.draggingElements, delete this.currentDraggingElement
        },
        _1v: function (t) {
            var i = new Js;
            return t.selectionModel.forEach(function (e) {
                t.isMovable(e) && t.isVisible(e) && i.add(e)
            }, this), i
        },
        onstart: function (t, i) {
            this.currentDraggingElement && this.destroy(i)
        },
        startdrag: function (t, i) {
            if (!(t.responded || t.touches && 1 != t.touches.length)) {
                var e = t.getData();
                if (!e || !i.isSelected(e) || !i.isMovable(e)) return void this.destroy(i);
                t.responded = !0, this.currentDraggingElement = e, this.draggingElements = this._1v(i);
                var n = new bs(i, bs.ELEMENT_MOVE_START, t, this.currentDraggingElement, this.draggingElements.datas);
                return i.beforeInteractionEvent(n) === !1 ? void this.destroy(i) : void i.onInteractionEvent(n)
            }
        },
        ondrag: function (t, i) {
            if (this.currentDraggingElement) {
                if (t.touches && 1 != t.touches.length) return void this.enddrag(t, i);
                H(t);
                var e = t.dx,
                    n = t.dy,
                    r = i.scale;
                e /= r, n /= r;
                var s = new bs(i, bs.ELEMENT_MOVING, t, this.currentDraggingElement, this.draggingElements.datas);
                i.moveElements(this.draggingElements.datas, e, n), i.onInteractionEvent(s)
            }
        },
        enddrag: function (t, i) {
            if (this.currentDraggingElement) {
                if (this.draggingElements && this.draggingElements.length) {
                    if (t.shiftKey) {
                        var e, n = i.toLogical(t),
                            r = n.x,
                            s = n.y;
                        i.forEachReverseVisibleUI(function (t) {
                            var i = t.data;
                            if (!this.draggingElements.contains(i) && t.uiBounds.intersectsPoint(r - t.x, s - t.y) && t.hitTest(r, s, 1)) {
                                if (i instanceof dh.Edge) {
                                    if (!i.enableSubNetwork) return;
                                    for (var n = this.draggingElements.length; n-- > 0;) {
                                        var o = this.draggingElements.get(n);
                                        if (o instanceof dh.Node && o.linkedWith(i)) return
                                    }
                                    return e = i, !1
                                }
                                return (i.enableSubNetwork || i._gy() && i.expanded) && (e = i), !1
                            }
                        }, this), e && this.draggingElements.forEach(function (t) {
                            for (var i = t.parent; i;) {
                                if (this.draggingElements.contains(i)) return;
                                i = i.parent
                            }
                            t.parent = e
                        }, this)
                    }
                    var o = new bs(i, bs.ELEMENT_MOVE_END, t, this.currentDraggingElement, this.draggingElements.datas);
                    i.onInteractionEvent(o)
                }
                this.destroy(i)
            }
        },
        onpinch: function (t, i) {
            this.currentDraggingElement && this.enddrag(t, i)
        },
        step: 1,
        onkeydown: function (t, i) {
            if (wi(t)) {
                var e, n;
                if (37 == t.keyCode ? e = -1 : 39 == t.keyCode ? e = 1 : 38 == t.keyCode ? n = -1 : 40 == t.keyCode && (n = 1), e || n) {
                    var r = this._1v(i).datas;
                    if (0 != r.length) {
                        j(t), e = e || 0, n = n || 0;
                        var s = this.step / i.scale,
                            o = new bs(i, bs.ELEMENT_MOVE_END, t, null, r);
                        i.moveElements(r, e * s, n * s), i.onInteractionEvent(o)
                    }
                }
            }
        }
    };
    var _l = function (t) {
        this.graph = t
    };
    _l.prototype = {
        onkeydown: function (t, i) {
            wi(t) || (37 == t.keyCode ? (this._5e(i, 1, 0), j(t)) : 39 == t.keyCode ? (this._5e(i, -1, 0), j(t)) : 38 == t.keyCode ? (this._5e(i, 0, 1), j(t)) : 40 == t.keyCode && (this._5e(i, 0, -1), j(t)))
        },
        _5e: function (t, i, e) {
            t._9h(i, e)
        },
        onstart: function (t, i) {
            this._jo && this.destroy(i)
        },
        _jo: !1,
        startdrag: function (t, i) {
            if (!t.responded) {
                t.responded = !0, this._jo = !0, i.cursor = nh;
                var e = new bs(i, bs.PAN_START, t);
                i.onInteractionEvent(e)
            }
        },
        ondrag: function (t, i) {
            this._jo && i.translate(t.dx || 0, t.dy || 0)
        },
        enddrag: function (t, i) {
            if (this._jo) {
                if (i.enableInertia !== !1) {
                    var e = t.vx,
                        n = t.vy;
                    (Math.abs(e) > .1 || Math.abs(n) > .1) && i._9h(e, n)
                }
                this.destroy(i);
                var r = new bs(i, bs.PAN_END, t);
                i.onInteractionEvent(r)
            }
        },
        startpinch: function (t, i) {
            i.pauseRendering(!0)
        },
        onpinch: function (t, i) {
            this._jo = !0;
            var e = t.dScale;
            if (e) {
                var n = i.globalToLocal(t.center);
                i.zoomAt(e, n.x, n.y, !1)
            }
        },
        endpinch: function (t, i) {
            i.pauseRendering(!1)
        },
        destroy: function (t) {
            this._jo = !1, t.cursor = null
        }
    }, ps.prototype = {
        _1f: function (t) {
            this.element && t.source == this.element && this.graph.callLater(function () {
                this._is()
            }, this)
        },
        _4: function () {
            this._k7PropertyChangeListing || (this._k7PropertyChangeListing = !0, this.graph.dataPropertyChangeDispatcher.addListener(this._1f, this))
        },
        _3: function () {
            this._k7PropertyChangeListing = !1, this.graph.dataPropertyChangeDispatcher.removeListener(this._1f, this)
        },
        onElementRemoved: function (t, i) {
            this.element && (t == this.element || Array.isArray(t) && m(t, this.element)) && this.destroy(i)
        },
        onClear: function (t) {
            this.element && this.destroy(t)
        },
        destroy: function () {
            this.graph.cursor = null, this.element && delete this.element._editting, this._mousePressed = !1, delete this.element, delete this._9c, delete this._9f, delete this._lcanEdit, this._61(), this._3()
        },
        _61: function () {
            this.drawLineId && (this.topCanvas.removeDrawable(this.drawLineId), delete this.drawLineId, this.topCanvas.invalidate())
        },
        _le4: function () {
            this.drawLineId && this.topCanvas.contains(this.drawLineId) || (this.drawLineId = this.topCanvas.addDrawable(this.drawLine, this).id, this.topCanvas.invalidate())
        },
        _9c: null,
        _5d: function (t) {
            this._9c = t, this.invalidate()
        },
        isEndPointEditable: function (t, i) {
            return this.graph.isEndPointEditable(t, i)
        },
        drawPoint: function (t, i, e) {
            (!i.isEndPoint || this.isEndPointEditable(this.element, i.isFrom)) && (t.beginPath(), i.isControlPoint ? t.rect(i.x - this.handlerSize / e, i.y - this.handlerSize / e, this.handlerSize / e * 2, this.handlerSize / e * 2) : t.arc(i.x, i.y, this.handlerSize / e, 0, 2 * Math.PI, !1), t.lineWidth = 1 / e, t.lineDash = [], t.strokeStyle = "#888", t.fillStyle = "rgba(255, 255, 0, 0.8)", t.stroke(), t.fill())
        },
        _f2: function (t, i, e, n) {
            n ? t.moveTo(i, e) : t.lineTo(i, e)
        },
        drawLine: function (t, i) {
            if (this._9c && this._9c.length) {
                var e = this._9c;
                t.save();
                var n = this.element instanceof Ra;
                n && (t.translate(this.element.x, this.element.y), this.element.rotate && t.rotate(this.element.rotate));
                var r, s = [];
                t.beginPath();
                var o = e.length;
                e.forEach(function (i, e) {
                    if (i.type != fh.SEGMENT_CLOSE)
                        for (var n = !e || e == o - 1, h = 0, a = i.points; h + 1 < a.length;) {
                            var l = a[h],
                                _ = a[h + 1],
                                u = {
                                    x: l,
                                    y: _,
                                    isControlPoint: this._6r(i, h)
                                };
                            n && (u.isEndPoint = !0, u.isFrom = 0 == e), s.push(u), this._f2(t, u.x, u.y, null == r), r = u, h += 2
                        }
                }, this), t.lineWidth = 1 / i, t.lineDash = [2 / i, 3 / i], t.strokeStyle = "#555", t.stroke(), s.forEach(function (e, n) {
                    this.drawPoint(t, e, i, n)
                }, this), t.restore()
            }
        },
        invalidate: function () {
            this.topCanvas.invalidate()
        },
        _32: function (t) {
            if (this.element != t && (this.element && this.destroy(), t && this.isEditable(t))) {
                var i = this._5b(t, this.graph);
                i && (this.element = t, t._editting = !0, this._lcanEdit = !0, this._5d(i), this._4(), this._le4())
            }
        },
        _is: function () {
            if (this.drawLineId && this.element) {
                var t = this._5b(this.element, this.graph);
                return t ? void this._5d(t) : void this.destroy(this.graph)
            }
        },
        _5b: function (t, i) {
            if (i.isEditable(t)) {
                var e = t.pathSegments || [];
                e instanceof Js && (e = e.toDatas());
                var n = i.getUI(t);
                if (n instanceof dh.EdgeUI) {
                    var r = n.getEndPointBounds(i.getUI(t.fromAgent)),
                        s = n.getEndPointBounds(i.getUI(t.toAgent)),
                        o = r.center,
                        h = s.center,
                        a = n.getStyle(Ba.EDGE_FROM_OFFSET),
                        l = n.getStyle(Ba.EDGE_TO_OFFSET);
                    a && (o.x += a.x || 0, o.y += a.y || 0), l && (h.x += l.x || 0, h.y += l.y || 0), e.splice(0, 0, new dh.PathSegment(fh.SEGMENT_MOVE_TO, [o.x, o.y])), e.push(new dh.PathSegment(fh.SEGMENT_MOVE_TO, [h.x, h.y]))
                }
                return e
            }
        },
        _gx: function (t, i) {
            t -= this.element.x, i -= this.element.y;
            var e = {
                x: t,
                y: i
            };
            return this.element.rotate && Pr(e, -this.element.rotate), e
        },
        onclick: function (t, i) {
            if (i.editable && t.altKey && this.element) {
                var e = this._ez(t, i);
                if (e && e.isControlPoint) return void(e.index >= 0 && this.element.removePathSegmentByIndex(e.index));
                if (this.element == t.getData()) {
                    var n = i.toLogical(t),
                        r = i.getUI(this.element);
                    r.addPoint(n.x, n.y, this.handlerSize || 2)
                }
            }
        },
        isEditable: function (t) {
            return this.graph.isEditable(t) && (t instanceof Ra || t instanceof xa && (!t.isLooped() || t.hasPathSegments()))
        },
        ondblclick: function (t, i) {
            if (!i.editable) return void(this.element && this.destroy(i));
            var e = t.getData();
            return !e || e == this.element || e._editting ? void this.destroy(i) : void this._32(e)
        },
        onstart: function (t, i) {
            if (this._mousePressed = !0, !i.editable) return void(this.element && this.destroy(i));
            if (!t.responded) {
                if (this.element && this._ez(t, i)) return void(t.responded = !0);
                var e = t.getData();
                return e && i.isResizable(e) && e instanceof Ra ? void(this.element && e != this.element && this.destroy()) : void this._32(e)
            }
        },
        onrelease: function () {
            this._mousePressed = !1, this.element && (this._lcanEdit = !0)
        },
        _9f: null,
        _ez: function (t, i) {
            var e = i.toLogical(t);
            this.element instanceof Ra && (e = this._gx(e.x, e.y));
            var n, r = i.scale,
                s = this.handlerSize / r,
                o = this._9c,
                h = o.length,
                a = this.element instanceof dh.Edge;
            return o.forEach(function (t, r) {
                for (var l = 0, _ = t.points; l + 1 < _.length;) {
                    var u = _[l],
                        c = _[l + 1],
                        d = eo(e.x, e.y, u, c);
                    if (s > d) {
                        if (n = {
                                oldPoints: _.slice(0),
                                segment: t,
                                index: r,
                                pointIndex: l
                            }, a && (n.index -= 1), a && !ys(t) && (0 == r || r == o.length - 1)) {
                            n.isEndPoint = !0;
                            var f = 0 == r;
                            n.isFrom = f;
                            var g = f ? dh.Styles.EDGE_FROM_OFFSET : dh.Styles.EDGE_TO_OFFSET,
                                v = i.getStyle(this.element, g) || {};
                            n.oldPoints = [v.x || 0, v.y || 0]
                        }
                        return this._6r(t, l) && (n.isControlPoint = !0, r > 0 && (n.prevSegment = o instanceof Js ? o.getByIndex(r - 1) : o[r - 1]), h > r + 1 && (n.nextSegment = o instanceof Js ? o.getByIndex(r + 1) : o[r + 1], n.nextSegment.points && (n.oldNextPoints = n.nextSegment.points.slice(0)))), !1
                    }
                    l += 2
                }
            }, this), n && n.isEndPoint && !this.isEndPointEditable(this.element, n.isFrom) ? void 0 : n
        },
        _6r: function (t, i) {
            return i == t.points.length - 2
        },
        startdrag: function (t, i) {
            if (this.element && this._lcanEdit && (this._9f = this._ez(t, i), this._9f)) {
                this._61(), t.responded = !0;
                var e = new bs(i, bs.POINT_MOVE_START, t, this.element);
                e.point = this._9f, i.onInteractionEvent(e)
            }
        },
        onkeyup: function (t, i) {
            this._mousePressed && 16 != !t.keyCode && this.element && this._9f && this._9f.delta && this._lc2(this._9f.delta.x, this._9f.delta.y, i, t, !1)
        },
        onkeydown: function (t, i) {
            this._mousePressed && this.element && this._9f && t.shiftKey && this._9f.delta && this._lc2(this._9f.delta.x, this._9f.delta.y, i, t, !0)
        },
        _lc2: function (t, i, e, n, r) {
            var s = this._9f,
                o = this.element,
                h = s.oldPoints,
                a = s.segment;
            if (s.isEndPoint) {
                var l = s.isFrom ? dh.Styles.EDGE_FROM_OFFSET : dh.Styles.EDGE_TO_OFFSET,
                    _ = {
                        x: h[0] + t,
                        y: h[1] + i
                    };
                o.setStyle(l, _);
                var u = new bs(e, bs.POINT_MOVING, n, o);
                return u.point = s, void e.onInteractionEvent(u)
            }
            if (r && s.isControlPoint) {
                var c = {
                        x: h[h.length - 2] + t,
                        y: h[h.length - 1] + i
                    },
                    d = s.prevSegment,
                    f = s.nextSegment,
                    g = 20 / e.scale,
                    v = Number.MAX_VALUE,
                    E = v,
                    p = v,
                    y = v;
                d && (d = d.lastPoint, v = Math.abs(c.x - d.x), p = Math.abs(c.y - d.y)), f && (f = f.lastPoint, E = Math.abs(c.x - f.x), y = Math.abs(c.y - f.y)), g > v && E > v ? t += d.x - c.x : g > E && v > E && (t += f.x - c.x), g > p && y > p ? i += d.y - c.y : g > y && p > y && (i += f.y - c.y)
            }
            if (s.isControlPoint && ys(a)) {
                for (var T = a.points.length - 4; T < a.points.length;) {
                    var m = h[T] + t,
                        O = h[T + 1] + i;
                    a.points[T] = m, a.points[T + 1] = O, T += 2
                }
                if (s.nextSegment && ys(s.nextSegment)) {
                    var w = s.oldNextPoints,
                        m = w[0] + t,
                        O = w[1] + i;
                    s.nextSegment.points[0] = m, s.nextSegment.points[1] = O
                }
            } else {
                var T = s.pointIndex,
                    m = h[T] + t,
                    O = h[T + 1] + i;
                a.points[T] = m, a.points[T + 1] = O
            }
            o.firePathChange();
            var u = new bs(e, bs.POINT_MOVING, n, o);
            u.point = s, e.onInteractionEvent(u)
        },
        ondrag: function (t, i) {
            if (this.element && this._9f) {
                var e = this._9f,
                    n = this.element,
                    r = t.totalDeltaX,
                    s = t.totalDeltaY,
                    o = i.scale;
                if (r /= o, s /= o, n.rotate) {
                    var h = {
                        x: r,
                        y: s
                    };
                    Pr(h, -n.rotate), r = h.x, s = h.y
                }
                e.delta = {
                    x: r,
                    y: s
                }, this._lc2(r, s, i, t, t.shiftKey)
            }
        },
        enddrag: function (t, i) {
            if (this.element && this._9f) {
                this._le4(), this._is();
                var e = new bs(i, bs.POINT_MOVE_END, t, this.element);
                e.point = this._9f, i.onInteractionEvent(e)
            }
        },
        onmousemove: function (t, i) {
            this.element && (i.cursor = t.altKey && (this._ez(t, i) || this.element == t.getData()) ? "crosshair" : null)
        }
    }, Zs.SELECTION_RECTANGLE_STROKE = 1, Zs.SELECTION_RECTANGLE_STROKE_COLOR = Z(3724541951), Zs.SELECTION_RECTANGLE_FILL_COLOR = Z(1430753245), fh.RECTANGLE_SELECTION_MODE_INTERSECT = "intersect", fh.RECTANGLE_SELECTION_MODE_CONTAIN = "contain", Zs.RECTANGLE_SELECTION_MODE = fh.RECTANGLE_SELECTION_MODE_INTERSECT;
    var ul = function (t) {
        this.graph = t, this.topCanvas = t.topCanvas
    };
    ul.prototype = {
        onstart: function (t, i) {
            this._jo && this.destroy(i)
        },
        startdrag: function (t, i) {
            t.responded || (t.responded = !0, this._jo = i.toLogical(t), i.cursor = "crosshair", this._$wId = this.topCanvas.addDrawable(this._$w, this).id)
        },
        ondrag: function (t, i) {
            if (this._jo) {
                H(t), this._end = i.toLogical(t), this.invalidate();
                var e = new bs(i, bs.SELECT_START, t, i.selectionModel);
                i.onInteractionEvent(e)
            }
        },
        enddrag: function (t, i) {
            if (this._jo) {
                this._emTimer && (clearTimeout(this._emTimer), this._emTimer = null), this._em(!0), this.destroy(i);
                var e = new bs(i, bs.SELECT_END, t, i.selectionModel);
                i.onInteractionEvent(e)
            }
        },
        onpinch: function (t, i) {
            this._jo && this.enddrag(t, i)
        },
        _$w: function (t, i) {
            t.strokeStyle = Zs.SELECTION_RECTANGLE_STROKE_COLOR, t.fillStyle = Zs.SELECTION_RECTANGLE_FILL_COLOR, t.lineWidth = Zs.SELECTION_RECTANGLE_STROKE / i;
            var e = this._jo.x,
                n = this._jo.y;
            t.rect(e, n, this._end.x - e, this._end.y - n), t.fill(), t.stroke()
        },
        invalidate: function () {
            return this.invalidateFlag ? void this.topCanvas.invalidate() : (this.invalidateFlag = !0, void(this._emTimer = setTimeout(this._em.bind(this), 100)))
        },
        _em: function (t) {
            if (this.invalidateFlag = !1, this._emTimer = null, !this._jo || Gs && !t) return void this.topCanvas.invalidate();
            var i = Math.min(this._jo.x, this._end.x),
                e = Math.min(this._jo.y, this._end.y),
                n = Math.abs(this._jo.x - this._end.x),
                r = Math.abs(this._jo.y - this._end.y);
            if (!n || !r) return void this.graph.selectionModel.clear();
            var s = [],
                o = this.graph.scale,
                h = this.graph.rectangleSelectionMode;
            if (this.graph.forEachVisibleUI(function (t) {
                    t._h0 && this.graph.isSelectable(t.$data) && this.inRectangle(i, e, n, r, t, o, h) && s.push(t.data)
                }.bind(this)), this.graph.selectionModel.set(s), this.topCanvas.invalidate(), !t) {
                var a = new bs(this.graph, bs.SELECT_BETWEEN, null, this.graph.selectionModel);
                this.graph.onInteractionEvent(a)
            }
        },
        inRectangle: function (t, i, e, n, r, s, o) {
            var h = r.getBounds();
            return li(t, i, e, n, h.x, h.y, h.width, h.height) ? !0 : (o = o || Zs.RECTANGLE_SELECTION_MODE, o == fh.RECTANGLE_SELECTION_MODE_CONTAIN ? !1 : Ne(t, i, e, n, r, s))
        },
        destroy: function (t) {
            this._jo = null, t.cursor = null, this._$wId && (this.topCanvas.removeDrawable(this._$wId), delete this._$wId, this.topCanvas.invalidate())
        }
    };
    var cl = C({
            "super": ul,
            onstart: null,
            startdrag: null,
            ondrag: null,
            enddrag: null,
            accept: function (t, i, e) {
                return e.enableRectangleSelectionByRightButton !== !1
            },
            oncontextmenu: function (t, i) {
                i.popupmenu || H(t)
            },
            onstart2: function () {
                ul.prototype.onstart.apply(this, arguments)
            },
            startdrag2: function (t, i) {
                t.responded || (i.popupmenu && i.popupmenu.hide instanceof Function && i.popupmenu.hide(), ul.prototype.startdrag.apply(this, arguments))
            },
            ondrag2: function () {
                ul.prototype.ondrag.apply(this, arguments)
            },
            enddrag2: function () {
                ul.prototype.enddrag.apply(this, arguments)
            }
        }),
        sl = Math.PI / 4;
    Ts.prototype = {
        _dn: !1,
        _dl: !1,
        _1f: function (t) {
            this.element && t.source == this.element && this.graph.callLater(function () {
                this._9q()
            }, this)
        },
        _4: function () {
            this._k7PropertyChangeListing || (this._k7PropertyChangeListing = !0, this.graph.dataPropertyChangeDispatcher.addListener(this._1f, this))
        },
        _3: function () {
            this._k7PropertyChangeListing = !1, this.graph.dataPropertyChangeDispatcher.removeListener(this._1f, this)
        },
        onElementRemoved: function (t, i) {
            this.element && (t == this.element || Array.isArray(t) && m(t, this.element)) && this.destroy(i)
        },
        onClear: function (t) {
            this.element && this.destroy(t)
        },
        ondblclick: function (t, i) {
            this.element && this.destroy(i)
        },
        destroy: function (t) {
            t.cursor = null, delete this.element, delete this._lez, delete this._leody, delete this._9f, delete this._lcanEdit, delete this._ib, delete this._rotatePoint, delete this._dl, delete this._dn, delete this._insets, this._61(), this._3()
        },
        _61: function () {
            this._f2Id && (this.topCanvas.removeDrawable(this._f2Id), delete this._f2Id, this.topCanvas.invalidate())
        },
        _le4: function () {
            this._f2Id && this.topCanvas.contains(this._f2Id) || (this._f2Id = this.topCanvas.addDrawable(this._f2, this).id, this.topCanvas.invalidate())
        },
        _lez: null,
        _ib: null,
        _8a: function (t) {
            this._lez = t; {
                var i = this._lez.x,
                    e = this._lez.y,
                    n = this._lez.width,
                    r = this._lez.height;
                this.element instanceof Pa && this.element.expanded
            }
            if (this._dl) {
                var s = [];
                s.push({
                    x: i,
                    y: e,
                    p: ho.LEFT_TOP,
                    cursor: "nwse-resize",
                    rotate: 5 * sl
                }), s.push({
                    x: i + n / 2,
                    y: e,
                    p: ho.CENTER_TOP,
                    cursor: "ns-resize",
                    rotate: 6 * sl
                }), s.push({
                    x: i + n,
                    y: e,
                    p: ho.RIGHT_TOP,
                    cursor: "nesw-resize",
                    rotate: 7 * sl
                }), s.push({
                    x: i,
                    y: e + r / 2,
                    p: ho.LEFT_MIDDLE,
                    cursor: "ew-resize",
                    rotate: 4 * sl
                }), s.push({
                    x: i,
                    y: e + r,
                    p: ho.LEFT_BOTTOM,
                    cursor: "nesw-resize",
                    rotate: 3 * sl
                }), s.push({
                    x: i + n,
                    y: e + r / 2,
                    p: ho.RIGHT_MIDDLE,
                    cursor: "ew-resize",
                    rotate: 0
                }), s.push({
                    x: i + n / 2,
                    y: e + r,
                    p: ho.CENTER_BOTTOM,
                    cursor: "ns-resize",
                    rotate: 2 * sl
                }), s.push({
                    x: i + n,
                    y: e + r,
                    p: ho.RIGHT_BOTTOM,
                    cursor: "nwse-resize",
                    rotate: sl
                }), this._ib = s
            }
            this._rotatePoint = this._dn ? {
                x: i + n / 2,
                y: e,
                cursor: rh
            } : null, this._let()
        },
        _dh: function (t, i, e, n) {
            t.beginPath();
            var r = (this.handlerSize - 1) / n;
            t.rect(i - r, e - r, 2 * r, 2 * r), t.lineWidth = 1 / n, t.lineDash = [], t.strokeStyle = "#888", t.fillStyle = "rgba(255, 255, 255, 0.8)", t.stroke(), t.fill()
        },
        _50: function (t, i, e, n, r, s) {
            r = r || this.handlerSize, s = s || "rgba(0, 255, 0, 1)", t.beginPath(), r /= n, t.arc(i, e, r, 0, 2 * Math.PI, !1), t.lineWidth = 1 / n, t.lineDash = [], t.strokeStyle = "#888", t.fillStyle = s, t.stroke(), t.fill()
        },
        _gx: function (t, i) {
            t -= this.element.x, i -= this.element.y;
            var e = {
                x: t,
                y: i
            };
            return this.element.rotate && Pr(e, -this.element.rotate), e
        },
        _f2: function (t, i) {
            if (this._lez) {
                if (t.save(), t.translate(this.element.x, this.element.y), this.element.rotate && t.rotate(this.element.rotate), this._rotatePoint) {
                    this._50(t, 0, 0, i, 3, "#FF0");
                    var e = this._rotatePoint.x,
                        n = this._rotatePoint.y - this._rotateHandleLength / i;
                    t.beginPath(), t.moveTo(e, this._rotatePoint.y), t.lineTo(e, n), t.lineWidth = 1 / i, t.strokeStyle = "#555", t.stroke(), this._50(t, e, n, i)
                }
                if (this._ib) {
                    var r = this._lez.x,
                        s = this._lez.y,
                        o = this._lez.width,
                        h = this._lez.height;
                    t.beginPath(), t.rect(r, s, o, h), t.lineWidth = 1 / i, t.lineDash = [2 / i, 3 / i], t.strokeStyle = "#555", t.stroke(), g(this._ib, function (e) {
                        this._dh(t, e.x, e.y, i)
                    }, this)
                }
                t.restore()
            }
        },
        _let: function () {
            this.topCanvas.invalidate()
        },
        _32: function (t, i, e, n) {
            this.element = t, this._le4(), this._dl = e, this._dn = n, this._9q(), this._4()
        },
        _9q: function () {
            if (this._f2Id && this.element) {
                var t = this.graph.getUI(this.element);
                this._leody = t.body;
                var i = ms(this._leody, this._leody._ij),
                    e = ms(this._leody, this._leody._7d);
                this._insets = new oo(i.y - e.y, i.x - e.x, e.bottom - i.bottom, e.right - i.right), this._8a(e)
            }
        },
        _lea: function (t, i) {
            return i.isResizable(t)
        },
        _lec: function (t, i) {
            return !(t instanceof Pa && t.expanded || !i.isRotatable(t))
        },
        _lev: function (t, i) {
            return t instanceof Ca && i.isEditable(t)
        },
        onstart: function (t, i) {
            if (!i.editable) return void(this.element && this.destroy(i));
            if (!t.responded) {
                var e = i.getUI(t),
                    n = t.getData();
                if (n != this.element) {
                    if (this.element) {
                        if (this._ez(t, i)) return void(t.responded = !0);
                        this.destroy(i)
                    }
                    if (n && !n._editting && this._lev(n, i)) {
                        var r = this._lea(n, i, e),
                            s = this._lec(n, i, e);
                        (r || s) && this._32(n, i, r, s)
                    }
                }
            }
        },
        onrelease: function (t, i) {
            this.element && (this._lcanEdit = !0, this._le4(), i.callLater(function () {
                this._9q()
            }, this))
        },
        _9f: null,
        _ez: function (t, i) {
            var e = i.toLogical(t);
            e = this._gx(e.x, e.y);
            var n = i.scale,
                r = this.handlerSize / n;
            if (this._rotatePoint) {
                var s = this._rotatePoint.x,
                    o = this._rotatePoint.y - this._rotateHandleLength / n;
                if (eo(e.x, e.y, s, o) < r) return this._rotatePoint
            }
            if (this._ib && this._ib.length) {
                var h;
                return g(this._ib, function (t) {
                    return eo(e.x, e.y, t.x, t.y) < r ? (h = t, !1) : void 0
                }, this), h
            }
        },
        onmousemove: function (t, i) {
            if (this.element) {
                var e = this._ez(t, i);
                if (!e) return void(i.cursor = null);
                if (e != this._rotatePoint && this.element.rotate) {
                    var n = e.rotate + this.element.rotate;
                    return void(i.cursor = Os(n))
                }
                i.cursor = e.cursor
            }
        },
        startdrag: function (t, i) {
            if (this.element && (this._61(), this._lcanEdit && (this._9f = this._ez(t, i), this._9f))) {
                if (t.responded = !0, this._9f == this._rotatePoint) return this._9f.start = i.toLogical(t), void(this._9f.rotate = this.element.rotate || 0);
                var e = new bs(i, bs.RESIZE_START, t, this.element);
                e.point = this._9f, i.onInteractionEvent(e)
            }
        },
        _5t: function (t, i, e, n, r, s) {
            var o = this._lez,
                h = o.x,
                a = o.y,
                l = o.width,
                _ = o.height;
            if (s) {
                var u = n != l;
                u ? r = n * _ / l : n = r * l / _
            }
            var c = t.path.segments,
                d = n / l,
                f = r / _,
                g = -h * d + i,
                v = -a * f + e;
            c.forEach(function (t) {
                if (t.type != fh.SEGMENT_CLOSE) {
                    var n = t.points;
                    if (n && n.length)
                        for (var r = 0, s = n.length; s > r; r += 2) {
                            var o = n[r],
                                l = n[r + 1];
                            n[r] = (o - h) * d + i - g, n[r + 1] = (l - a) * f + e - v
                        }
                }
            }), this._lez.set(i - g, e - v, n, r), t.setLocation(t.x + g, t.y + v), t.firePathChange()
        },
        _9t: function (t, i, e, n, r) {
            this._lez.set(i, e, n, r), t.minSize = {
                x: i,
                y: e,
                width: n,
                height: r
            }
        },
        _49: function (t, i, e, n, r) {
            if (this.graph.defaultShiftKey) {
                r = true
            }
            if (this.element instanceof Pa) return this._9t(this.element, t, i, e, n, r);
            if (this.element instanceof Ra) return this._5t(this.element, t, i, e, n, r);
            var s = this._leody instanceof qa;
            if (!s && r) {
                var o = this._lez,
                    h = this._leody.originalBounds,
                    a = e != o.width;
                a ? n = e * h.height / h.width : e = n * h.width / h.height
            }
            var l = this.element.anchorPosition,
                _ = new ro(e - this._insets.left - this._insets.right, n - this._insets.top - this._insets.bottom);
            if (_.width < 1 && (e = this._insets.left + this._insets.right + 1, _.width = 1), _.height < 1 && (n = this._insets.top + this._insets.bottom + 1, _.height = 1), s ? this.element.setStyle(Ba.LABEL_SIZE, _) : this.element.size = _, l) {
                var u = ci(l, e, n),
                    c = u.x + t - (this._leody.offsetX || 0),
                    d = u.y + i - (this._leody.offsetY || 0);
                if (this._lez.set(t - c, i - d, e, n), this.element.rotate) {
                    var u = Pr({
                        x: c,
                        y: d
                    }, this.element.rotate);
                    c = u.x, d = u.y
                }
                this.element.x += c, this.element.y += d
            } else {
                var c = this._lez.x * e / this._lez.width - t,
                    d = this._lez.y * n / this._lez.height - i;
                if (this._lez.set(t + c, i + d, e, n), this.element.rotate) {
                    var u = Pr({
                        x: c,
                        y: d
                    }, this.element.rotate);
                    c = u.x, d = u.y
                }
                this.element.x -= c, this.element.y -= d
            }
        },
        ondrag: function (t, i) {
            if (this.element && this._9f)
                if (this._9f != this._rotatePoint) {
                    var e = t.dx,
                        n = t.dy,
                        r = i.scale;
                    if (e /= r, n /= r, this.element.rotate) {
                        var s = {
                            x: e,
                            y: n
                        };
                        Pr(s, -this.element.rotate), e = s.x, n = s.y
                    }
                    var o = this._9f.p,
                        h = this._lez,
                        a = h.x,
                        l = h.y,
                        _ = h.width,
                        u = h.height;
                    o.horizontalPosition == ao ? e >= _ ? (a += _, _ = e - _ || 1) : (a += e, _ -= e) : o.horizontalPosition == _o && (-e >= _ ? (_ = -e - _ || 1, a -= _) : _ += e), o.verticalPosition == uo ? n >= u ? (l += u, u = n - u || 1) : (l += n, u -= n) : o.verticalPosition == fo && (-n >= u ? (u = -n - u || 1, l -= u) : u += n), this._49(a, l, _, u, t.shiftKey);
                    var c = new bs(i, bs.RESIZING, t, this.element);
                    c.point = this._9f, i.onInteractionEvent(c)
                } else {
                    var s = i.toLogical(t),
                        d = ge(s.x, s.y, this.element.x, this.element.y, this._9f.start.x, this._9f.start.y, !0);
                    d += this._9f.rotate || 0, t.shiftKey && (d = Math.round(d / Math.PI * 4) * Math.PI / 4), this.element.rotate = d % (2 * Math.PI);
                    var c = new bs(i, bs.ROTATING, t, this.element)
                }
        },
        enddrag: function (t, i) {
            if (this.element && this._9f && this._9f != this._rotatePoint) {
                var e = new bs(i, bs.RESIZE_END, t, this.element);
                e.point = this._9f, i.onInteractionEvent(e)
            }
        }
    }, dh.ResizeInteraction = Ts;
    var dl = function (t) {
        this.graph = t
    };
    dl.prototype = {
        onstart2: function (t, i) {
            this.onstart(t, i)
        },
        onstart: function (t, i) {
            if (!t.responded) {
                var e = t.getData();
                if (e && !i.isSelectable(e) && (e = null), e && wi(t)) {
                    i.reverseSelect(e);
                    var n = new bs(i, bs.SELECT, t, i.selectionModel);
                    return void i.onInteractionEvent(n)
                }
                if (!e || !i.selectionModel.isSelected(e)) {
                    e ? (i.setSelection(e), i.sendToTop(e)) : i.setSelection(null);
                    var n = new bs(i, bs.SELECT, t, i.selectionModel);
                    i.onInteractionEvent(n)
                }
            }
        },
        onkeydown: function (t, i) {
            return 27 == t.keyCode ? void i.unSelectAll() : void(wi(t) && 65 == t.keyCode && (i.selectAll(), j(t)))
        }
    }, Zs.TOOLTIP_DURATION = 3e3, Zs.TOOLTIP_DELAY = 1e3, ws.CLASS_NAME = "Q-Tooltip", ws.CURSOR_OFFSET_X = 0, ws.CURSOR_OFFSET_Y = 15, Ti("." + ws.CLASS_NAME, {
        "user-select": "none",
        "background-color": "#FFFFCA",
        overflow: "hidden",
        "box-shadow": "0 5px 10px rgba(136, 136, 136, 0.5)",
        color: "#000",
        "pointer-events": "none",
        border: "1px solid #D9D9D9",
        padding: "2px 4px",
        display: "block",
        position: "absolute"
    }), ws.getInstance = function () {
        var t = ws.instance;
        return t || (t = ws.instance = new ws), t
    }, ws.show = function (t, i, e) {
        ws.getInstance().show(t, i, e)
    }, ws.hide = function () {
        ws.getInstance().hide()
    }, ws.prototype = {
        getTooltipElement: function () {
            var t = this._ko;
            return t || (t = i.createElement("div"), t.className = ws.CLASS_NAME, this._ko = t, i.body.appendChild(t)), t
        },
        update: function (t, i) {
            if (this.isShowing()) {
                var e = "text" == i;
                t && !e && (t = t.replace(/\n/g, "<br>"));
                var n = this.getTooltipElement();
                e ? n.textContent = t || "" : n.innerHTML = t || "", As(n, this._info.x + ws.CURSOR_OFFSET_X, this._info.y + ws.CURSOR_OFFSET_Y)
            }
        },
        setTooltip: function (t, i) {
            if (!t || !t.content) return this._info = null, this._ko && (this._ko.style.display = "none"), void(this._8c = Date.now());
            this._8c = null, this._info = t;
            var e = this.getTooltipElement();
            e.style.display = "", this.update(this._info.content, this._info.type), isNaN(i) && (i = Zs.TOOLTIP_DURATION), i && this.startTimer(this.setTooltip.bind(this, !1), i)
        },
        _8c: null,
        _jp: null,
        stopTimer: function () {
            this._jp && (clearTimeout(this._jp), this._jp = null)
        },
        startTimer: function (t, i) {
            this.stopTimer(), this._jp = setTimeout(function (t) {
                this._jp = null, t()
            }.bind(this, t), i)
        },
        show: function (t, i, e) {
            return this.isShowing() || this._8c && Date.now() - this._8c < 1e3 ? void this.setTooltip(t, e) : (isNaN(i) && (i = Zs.TOOLTIP_DELAY), void(i ? this.startTimer(this.setTooltip.bind(this, t, e), i) : this.setTooltip(t, e)))
        },
        isShowing: function () {
            return this._ko && "none" !== this._ko.style.display
        },
        hide: function () {
            this.stopTimer(), this.isShowing() && this.setTooltip(!1)
        }
    };
    var fl = function (t) {
        this.graph = t
    };
    fl.prototype = {
        onstart: function (t, i) {
            this.destroy(i)
        },
        _hg: null,
        onmousemove: function (t, i) {
            if (i.enableTooltip) {
                var e = t.getData(),
                    n = e ? i.getTooltip(e) : null;
                return n ? void ws.show({
                    target: e,
                    content: n,
                    type: e.tooltipType,
                    x: t.pageX,
                    y: t.pageY
                }, i.tooltipDelay, i.tooltipDuration) : void ws.hide()
            }
        },
        destroy: function () {
            ws.hide()
        }
    };
    var gl = function (t) {
        this.graph = t
    };
    gl.prototype = {
        _em: function () {
            delete this._jp
        },
        destroy: function (t) {
            this._jp && this._em(t)
        },
        onmousewheel: function (t, i) {
            if (i.enableWheelZoom !== !1 && t.delta) {
                var e = t.delta > 0,
                    n = i.scale;
                if (!(e && i.maxScale - n < 1e-4 || !e && n - i.minScale < 1e-4)) {
                    H(t);
                    var r = Math.sqrt(Math.abs(t.delta));
                    e || (r = -r), this._jp && clearTimeout(this._jp), this._jp = setTimeout(this._em.bind(this, i), 100), i.zoomByMouseEvent(t, r)
                }
            }
        }
    };
    var vl = function (t) {
        this.graph = t
    };
    vl.prototype = {
        onclick: function (t, i) {
            i.zoomByMouseEvent(t, !wi(t))
        }
    };
    var El = function (t) {
        this.graph = t
    };
    El.prototype = {
        onclick: function (t, i) {
            i.zoomByMouseEvent(t, wi(t))
        }
    }, A(bs, Eo), bs.ELEMENT_MOVE_START = "element.move.start", bs.ELEMENT_MOVING = "element.moving", bs.ELEMENT_MOVE_END = "element.move.end", bs.ELEMENT_CREATED = "element.created", bs.ELEMENT_REMOVED = "element.removed", bs.POINT_MOVE_START = "point.move.start", bs.POINT_MOVING = "point.moving", bs.POINT_MOVE_END = "point.move.end", bs.RESIZE_START = "resize.start", bs.RESIZING = "resizing", bs.RESIZE_END = "resize.end", bs.ROTATING = "rotating", bs.ROTATE_END = "rotate.end", bs.PAN_START = "pan.start", bs.PAN_END = "pan.end", bs.GROUP_EXPANDED = "group.expanded", bs.EDGE_BUNDLE = "edge.bundle", bs.SELECT = "select", bs.SELECT_START = "select.start", bs.SELECT_BETWEEN = "select.between", bs.SELECT_END = "select.end", bs.LONG_CLICK = "long.click", Ls.prototype = {
        _8f: function (t) {
            if (this._interactionSupport) switch (t.kind) {
                case So.KIND_REMOVE:
                    this._interactionSupport._onElementRemoved(t.data);
                    break;
                case So.KIND_CLEAR:
                    this._interactionSupport._onElementClear(t.data)
            }
        },
        destroy: function () {
            delete this._jc, delete this._48, this._interactionSupport && (this._interactionSupport._h8(), delete this._interactionSupport)
        },
        _jc: null,
        _48: null,
        defaultMode: null,
        _ev: function (t, i, e) {
            this._48[t] = new ss(i, e), t == this.currentMode && this._interactionSupport._l2Interaction(i)
        },
        addCustomInteraction: function (t) {
            this._interactionSupport._kyCustomInteractionListener(t)
        },
        removeCustomInteraction: function (t) {
            this._interactionSupport._j0CustomInteractionListener(t)
        },
        _kw: function (t) {
            var i = this._48[t];
            return i ? i : pl[t]
        }
    }, Q(Ls.prototype, {
        defaultCursor: {
            get: function () {
                return this.currentInteractionMode ? this.currentInteractionMode.defaultCursor : void 0
            }
        },
        currentMode: {
            get: function () {
                return this._lcurrentMode
            },
            set: function (t) {
                if (this._lcurrentMode != t) {
                    {
                        this._lcurrentMode
                    }
                    this._interactionSupport || (this._interactionSupport = new Qo(this._jc)), this._lcurrentMode = t, this.currentInteractionMode = this._kw(this._lcurrentMode), this._jc.cursor = this.defaultCursor, this._interactionSupport._l2Interaction(this.currentInteractionMode ? this.currentInteractionMode.getInteractionInstances(this._jc) : [])
                }
            }
        }
    });
    var pl = {};
    Zs.registerInteractions = function (t, i, e) {
        var n = new ss(i, e);
        pl[t] = n
    }, fh.INTERACTION_MODE_VIEW = "view", fh.INTERACTION_MODE_DEFAULT = "default", fh.INTERACTION_MODE_SELECTION = "selection", fh.INTERACTION_MODE_ZOOMIN = "zoomin", fh.INTERACTION_MODE_ZOOMOUT = "zoomout", fh.INTERACTION_MODE_CREATE_SIMPLE_EDGE = "create.simple.edge", fh.INTERACTION_MODE_CREATE_EDGE = "create.edge", fh.INTERACTION_MODE_CREATE_SHAPE = "create.shape", fh.INTERACTION_MODE_CREATE_LINE = "create.line", Zs.registerInteractions(fh.INTERACTION_MODE_VIEW, [dl, _l, gl, al, ol, fl, cl]), Zs.registerInteractions(fh.INTERACTION_MODE_CREATE_SIMPLE_EDGE, [hl, us, dl, _l, gl, al, fl]), Zs.registerInteractions(fh.INTERACTION_MODE_CREATE_EDGE, [hl, ps, dl, as, _l, gl, al, fl]), Zs.registerInteractions(fh.INTERACTION_MODE_CREATE_SHAPE, [hl, ls, dl, _l, gl, al, fl]), Zs.registerInteractions(fh.INTERACTION_MODE_CREATE_LINE, [_s, dl, _l, gl, al, fl]), Zs.registerInteractions(fh.INTERACTION_MODE_DEFAULT, [hl, Ts, ps, dl, ll, _l, gl, al, ol, fl, cl]), Zs.registerInteractions(fh.INTERACTION_MODE_SELECTION, [hl, Ts, ps, dl, ll, ul, _l, gl, al, ol, fl]), Zs.registerInteractions(fh.INTERACTION_MODE_ZOOMIN, [gl, al, vl], th), Zs.registerInteractions(fh.INTERACTION_MODE_ZOOMOUT, [gl, al, El], ih), dh.PanInteraction = _l, dh.SelectionInteraction = dl, dh.MoveInteraction = ll, dh.WheelZoomInteraction = gl, dh.DoubleClickInteraction = ol, dh.ExportInteraction = al, dh.TooltipInteraction = fl, dh.RectangleSelectionInteraction = ul, dh.RectangleSelectionInteractionByRightButton = cl, dh.PointsInteraction = ps;
    var yl = function (t) {
        this.graph = t
    };
    dh.Layouter = yl, yl.prototype = {
        getNodeBounds: function (t) {
            return this.graph.getUIBounds(t)
        },
        isLayoutable: function (t) {
            return this.graph.isVisible(t) && t.layoutable !== !1
        },
        getLayoutResult: function () {},
        updateLocations: function (t, i, e, n, r) {
            if (i === !0) {
                if (this.animate || (this.animate = new Ql), e && (this.animate.duration = e), n && (this.animate.animationType = n), this.animate.locations = t, r) {
                    var s = r,
                        o = this;
                    r = function () {
                        s.call(o, t)
                    }
                }
                return void this.animate.start(r)
            }
            for (var h in t) {
                var a = t[h],
                    l = a.node;
                l.setLocation(a.x, a.y)
            }
            r && r.call(this, t)
        },
        _eo: function (t) {
            var i, e, n, r = null;
            t && (i = t.byAnimate, r = t.callback, e = t.duration, n = t.animationType);
            var s = this.getLayoutResult(t);
            return s ? (this.updateLocations(s, i, e, n, r), s) : !1
        },
        doLayout: function (t, i) {
            return this.graph && i !== !0 ? void this.graph.callLater(function () {
                this._eo(t)
            }, this) : this._eo(t)
        }
    };
    var Tl = 110,
        ml = 120,
        Ol = 130,
        wl = 210,
        Al = 220,
        bl = 230,
        Ll = 111,
        Sl = 112,
        Il = 121,
        xl = 122,
        Cl = 211,
        Rl = 212,
        Dl = 221,
        Pl = 222;
    fh.DIRECTION_RIGHT = Tl, fh.DIRECTION_LEFT = ml, fh.DIRECTION_CENTER = Ol, fh.DIRECTION_BOTTOM = wl, fh.DIRECTION_TOP = Al, fh.DIRECTION_MIDDLE = bl, fh.DIRECTION_RIGHT_TOP = Ll, fh.DIRECTION_RIGHT_BOTTOM = Sl, fh.DIRECTION_LEFT_TOP = Il, fh.DIRECTION_LEFT_BOTTOM = xl, fh.DIRECTION_BOTTOM_LEFT = Cl, fh.DIRECTION_BOTTOM_RIGHT = Rl, fh.DIRECTION_TOP_LEFT = Dl, fh.DIRECTION_TOP_RIGHT = Pl;
    var Nl = "even",
        Ml = "two.side",
        Bl = "even.h",
        kl = "even.v";
    fh.LAYOUT_TYPE_EVEN = Nl, fh.LAYOUT_TYPE_EVEN_HORIZONTAL = Bl, fh.LAYOUT_TYPE_EVEN_VERTICAL = kl, fh.LAYOUT_TYPE_TWO_SIDE = Ml, dh.isHorizontalDirection = Ss;
    var Gl = function (t) {
        this.graph = t
    };
    Gl.prototype = {
        hGap: 50,
        vGap: 50,
        parentChildrenDirection: wl,
        layoutType: Nl,
        defaultSize: {
            width: 50,
            height: 60
        },
        getNodeSize: function (t) {
            if (this.graph._7p._lg0) {
                var i = this.graph.getUI(t);
                if (i) return i._f3
            }
            return t.image && t.image.bounds ? {
                width: t.image.bounds.width,
                height: t.image.bounds.height
            } : this.defaultSize
        },
        _leu: function (t, i) {
            if (this.isLayoutable(t)) {
                var e, n = this.getNodeSize(t);
                e = n instanceof so ? [-n.x, -n.y] : [n.width / 2, n.height / 2];
                var r = t.id,
                    s = (t.parentChildrenDirection, i ? this._8n[i.id] : this._lgz);
                this._8n[r] = new Fl(this.getHGap(t), this.getVGap(t), this.getLayoutType(t), t.parentChildrenDirection, s, t, n.width, n.height, e)
            }
        },
        getHGap: function (t) {
            return t && G(t.hGap) ? t.hGap : this.hGap
        },
        getVGap: function (t) {
            return t && G(t.vGap) ? t.vGap : this.vGap
        },
        getLayoutType: function (t) {
            return t && t.layoutType ? t.layoutType : this.layoutType
        },
        _8n: null,
        _lgz: null,
        _jw: function () {
            this._8n = null, this._lgz = null
        },
        getLayoutResult: function (t) {
            var i, e, n, r, s = this.graph;
            t instanceof Object && (i = t.x, e = t.y, s = t.root || this.graph, n = t.bounds, r = t.undirected), this._8n = {}, this._lgz = new Fl, this._lgz._l2(this.hGap, this.vGap, this.parentChildrenDirection, this.layoutType);
            var o = {},
                h = e_(s, this._leu, this, !1, r);
            return h && (this._lgz._eo(i || 0, e || 0, o), n && n.set(this._lgz.x, this._lgz.y, this._lgz.width, this._lgz.height)), this._jw(), o
        },
        doLayout: function (t, i) {
            if (G(t)) {
                var e = t,
                    n = 0;
                G(i) && (n = i), t = {
                    x: e,
                    y: n
                }, i = !0
            }
            return L(this, Gl, "doLayout", [t, i])
        }
    }, A(Gl, yl);
    var Fl = function (t, i, e, n, r, s, o, h, a) {
        this._kc = t || 0, this._kd = i || 0, this.layoutType = e, this.parentChildrenDirection = n, this.parentBounds = r, r && r._ge(this), this.node = s, this._de = o, this._lc5 = h, this._lgnchorLocation = a
    };
    Fl.prototype = {
        _l2: function (t, i, e, n) {
            this._kc = t, this._kd = i, this.parentChildrenDirection = e, this.layoutType = n
        },
        _7m: function () {
            this._er = []
        },
        _kc: 0,
        _kd: 0,
        _er: null,
        _de: 0,
        _lc5: 0,
        layoutType: null,
        parentChildrenDirection: null,
        _ge: function (t) {
            this._er || (this._er = []), this._er.push(t)
        },
        _lc3: function (t, i, e, n) {
            var r = new so;
            return e(this._er, function (e) {
                e._3g(t, i), r.add(e), n ? t += e.width + this._kc : i += e.height + this._kd
            }, this), r
        },
        _7r: function (t, i, e, n, r) {
            var s, o = n ? this._kc : this._kd,
                h = n ? this._kd : this._kc,
                a = n ? "width" : "height",
                l = n ? "height" : "width",
                _ = n ? "_de" : "_lc5",
                u = n ? "_lc5" : "_de",
                c = n ? "hostDX" : "hostDY",
                d = n ? "hostDY" : "hostDX",
                f = new so,
                v = 0,
                E = 0,
                p = [],
                y = 0,
                T = 0;
            e(this._er, function (e) {
                var r = T >= E;
                e._inheritedParentChildrenDirection = r ? n ? ml : Al : n ? Tl : wl, e._3g(t, i), r ? (p.push(e), v = Math.max(v, e[a]), E += e[l] + h) : (s || (s = []), s.push(e), y = Math.max(y, e[a]), T += e[l] + h)
            }, this), E -= h, T -= h;
            var m = Math.max(E, T),
                O = o,
                w = 0;
            this.node && (r && (O += this[_] + o, m > this[u] ? this[d] = (m - this[u]) / 2 : w = (this[u] - m) / 2), this[c] = v + O / 2 - this[_] / 2);
            var A = 0,
                b = w;
            return g(p, function (t) {
                n ? t.offset(v - t[a], b) : t.offset(b, v - t[a]), b += h + t[l], f.add(t)
            }, this), s ? (b = w, A = v + O, g(s, function (t) {
                n ? t.offset(A, b) : t.offset(b, A), b += h + t[l], f.add(t)
            }, this), f) : f
        },
        offset: function (t, i) {
            this.x += t, this.y += i, this.nodeX += t, this.nodeY += i, this._6s(t, i)
        },
        _le6: function (t, i) {
            return 2 * this.cx - t - i - t
        },
        _le8: function (t, i) {
            return 2 * this.cy - t - i - t
        },
        _kg: function (t) {
            if (this._er && 0 != this._er.length) {
                if (t) return this.node && (this.nodeX += this._le6(this.nodeX, this._de)), void g(this._er, function (t) {
                    t.offset(this._le6(t.x, t.width), 0)
                }, this);
                this.node && (this.nodeY += this._le8(this.nodeY, this._lc5)), g(this._er, function (t) {
                    t.offset(0, this._le8(t.y, t.height))
                }, this)
            }
        },
        _6s: function (t, i) {
            this._er && g(this._er, function (e) {
                e.offset(t, i)
            }, this)
        },
        _3g: function (t, i) {
            return this.x = t || 0, this.y = i || 0, this._er && 0 != this._er.length ? void this._1i(this.x, this.y, this.layoutType) : void(this.node && (this.width = this._de, this.height = this._lc5, this.nodeX = this.x, this.nodeY = this.y))
        },
        _6j: function (t) {
            if (this.node) {
                var i = this._lgnchorLocation,
                    e = i[0],
                    n = i[1];
                t[this.node.id] = {
                    node: this.node,
                    x: this.nodeX + e,
                    y: this.nodeY + n,
                    left: this.nodeX,
                    top: this.nodeY,
                    width: this._de,
                    height: this._lc5
                }
            }
            this._er && g(this._er, function (i) {
                i._6j(t)
            }, this)
        },
        _eo: function (t, i, e) {
            this._3g(t, i), this._6j(e)
        },
        _1i: function (t, i, n) {
            var r, s = t,
                o = i;
            !this.parentChildrenDirection && this.parentBounds && (this.parentChildrenDirection = this._inheritedParentChildrenDirection || this.parentBounds.parentChildrenDirection);
            var h = this.parentChildrenDirection,
                a = Ss(h);
            if (this.node) {
                r = h == Ol || h == bl;
                var l = Is(h);
                r || (a ? t += this._de + this._kc : i += this._lc5 + this._kd)
            }
            var _, u = this.node && this.node.layoutReverse ? E : g;
            if (n == Ml) _ = this._7r(t, i, u, !a, r);
            else {
                var c;
                c = n == Nl ? !a : n == Bl, _ = this._lc3(t, i, u, c, r)
            }
            var d = 0,
                f = 0;
            if (_ && !_.isEmpty() && (d = _.width, f = _.height, this.add(_)), this.node) {
                if (this.nodeX = s, this.nodeY = o, this.hostDX !== e || this.hostDY !== e) this.nodeX += this.hostDX || 0, this.nodeY += this.hostDY || 0;
                else {
                    var v;
                    v = h == wl || h == Al || h == ml || h == Tl ? 1 : h == Rl || h == Pl || h == xl || h == Sl ? 0 : 2, a ? 1 == v ? this.nodeY += f / 2 - this._lc5 / 2 : 2 == v && (this.nodeY += f - this._lc5) : 1 == v ? this.nodeX += d / 2 - this._de / 2 : 2 == v && (this.nodeX += d - this._de)
                }
                this.addRect(this.nodeX, this.nodeY, this._de, this._lc5), l && this._kg(a)
            }
        },
        node: null,
        uiBounds: null
    }, A(Fl, so), Cs.prototype = {
        layoutDatas: null,
        isMovable: function (t) {
            return !this.currentMovingNodes[t.id]
        },
        _6n: !1,
        _3c: function () {
            this._6n = !0, this.graph._1e.addListener(this._95, this), this.graph._18.addListener(this._26, this)
        },
        _1a: function () {
            this._6n = !1, this.graph._1e.removeListener(this._95, this), this.graph._18.removeListener(this._26, this)
        },
        invalidateFlag: !0,
        invalidateLayoutDatas: function () {
            this.invalidateFlag = !0
        },
        resetLayoutDatas: function () {
            return this.invalidateFlag = !1, this.layoutDatas = xs.call(this)
        },
        _26: function (t) {
            bs.ELEMENT_MOVE_START == t.kind ? (this.currentMovingNodes = {}, t.datas.forEach(function (t) {
                this.currentMovingNodes[t.id] = t
            }, this)) : bs.ELEMENT_MOVE_END == t.kind && (this.currentMovingNodes = {})
        },
        _95: function () {
            this.invalidateLayoutDatas()
        },
        isRunning: function () {
            return this.timer && this.timer._e2()
        },
        getLayoutResult: function () {
            this.stop(), this.resetLayoutDatas();
            for (var t = this.getMaxIterations(this.layoutDatas.nodeCount || 0, this.layoutDatas.edgeCount || 0), i = 0; t > i && this.step(!1) !== !1; i++);
            var e = this.layoutDatas.nodes;
            return this.onstop(), e
        },
        _kr: function () {
            return !1
        },
        step: function (t) {
            if (t === !1) return this._kr(this.timeStep);
            (this.invalidateFlag || !this.layoutDatas) && this.resetLayoutDatas();
            var i = this._kr(t),
                e = this.layoutDatas.nodes;
            for (var n in e) {
                var r = e[n],
                    s = r.node;
                this.isMovable(s) ? s.setLocation(r.x, r.y) : (r.x = s.x, r.y = s.y, r.vx = 0, r.vy = 0)
            }
            return i
        },
        onstop: function () {
            delete this.layoutDatas
        },
        start: function (t) {
            if (this.isRunning()) return !1;
            this._6n || this._3c(), this._izr || (this._izr = function (t) {
                return this.step(t)
            }.bind(this)), this.invalidateLayoutDatas(), this.timer = new _h(this._izr);
            var i = this;
            return this.timer._jo(function () {
                i.onstop(), t && t()
            }), !0
        },
        stop: function () {
            this.timer && (this.timer._k9(), this.onstop())
        },
        getMaxIterations: function (t) {
            return Math.min(1e3, 3 * t + 10)
        },
        minEnergyFunction: function (t, i) {
            return 10 + Math.pow(t + i, 1.4)
        },
        resetGraph: function () {
            this._6n || this._3c(), this.resetLayoutDatas()
        },
        destroy: function () {
            this.stop(), this._1a()
        }
    }, A(Cs, yl);
    var $l = function (t, i, e, n) {
        this.graph = t, G(i) && (this.radius = i), G(e) && (this.gap = e), G(n) && (this.startAngle = n)
    };
    dh.BalloonLayouter = $l;
    var zl = "proportional",
        jl = "regular",
        Yl = "uniform",
        Hl = "variable";
    fh.ANGLE_SPACING_PROPORTIONAL = zl, fh.ANGLE_SPACING_REGULAR = jl, fh.RADIUS_MODE_UNIFORM = Yl, fh.RADIUS_MODE_VARIABLE = Hl, $l.prototype = {
        angleSpacing: zl,
        radiusMode: Hl,
        gap: 4,
        radius: 50,
        startAngle: 0,
        _8n: null,
        _lgz: null,
        _jw: function () {
            this._8n = null, this._lgz = null
        },
        getLayoutResult: function (t) {
            var i, e = 0,
                n = 0,
                r = this.graph;
            t instanceof Object && (e = t.cx || 0, n = t.cy || 0, r = t.root || this.graph, i = t.bounds), this._8n = {}, this._lgz = new Xl(this);
            var s = {},
                o = n_(r, this._leu, this);
            return o && (this._lgz._er && 1 == this._lgz._er.length && (this._lgz = this._lgz._er[0]), this._lgz._d3(!0), this._lgz._5l(e, n, this.startAngle, s, i)), this._jw(), s
        },
        _leu: function (t, i) {
            if (this.isLayoutable(t)) {
                var e = i ? this._8n[i.id] : this._lgz;
                this._8n[t.id] = new Xl(this, t, e)
            }
        },
        defaultSize: 40,
        getRadius: function () {
            return this.radius
        },
        getNodeSize: function (t) {
            if (this.graph._7p._lg0) {
                var i = this.graph.getUI(t);
                if (i) return (i._f3.width + i._f3.height) / 2
            }
            return this.defaultSize
        },
        getGap: function () {
            return this.gap
        },
        _2z: function (t, i, e) {
            return this.getNodeSize(t, i, e) + this.getGap(t, i, e)
        }
    };
    var Ul = function (t) {
            var i, e = this._er.length,
                n = 0,
                r = 0;
            if (g(this._er, function (t) {
                    var e = t._d3();
                    1 > e && (e = 1), r += e, e > n && (n = e, i = t)
                }, this), e > 1) {
                var s = 0,
                    o = {},
                    h = r / e / 3;
                r = 0, g(this._er, function (t) {
                    var i = t._kl;
                    h > i && (i = h), o[t.id] = i, r += i
                }, this);
                var a = Oa / r;
                g(this._er, function (i, e) {
                    var n = o[i.id],
                        r = n * a;
                    0 === e && (s = t ? -r / 2 : -r), i._ju = s + r / 2, i._jv = r, s += r
                }, this)
            }
            return [n, i._jv]
        },
        Wl = function (t) {
            var i = this._82,
                e = 2 * Math.PI / i,
                n = 0,
                r = t ? 0 : i > 1 ? -e / 2 : 0;
            return g(this._er, function (t) {
                t._ju = r % Oa, r += e, t._jv = e;
                var i = t._d3();
                i > n && (n = i)
            }, this), [n, e]
        },
        Xl = function (t, i, e) {
            this.layouter = t, i && (this._km = i, this.id = i.id), e && (e._ge(this), e._kj = !1, this._jt = e._jt + 1)
        },
        Oa = 2 * Math.PI;
    Xl.prototype = {
        _jv: 0,
        _ju: 0,
        _j6: 0,
        _ef: 0,
        _lel: 0,
        _jt: 0,
        _kj: !0,
        _kl: 0,
        _gh: 0,
        _er: null,
        _km: null,
        _ge: function (t) {
            this._er || (this._er = []), this._er.push(t), t.parent = this
        },
        _gj: function (t) {
            if (this._ju = (this._ju + t) % Oa, this._er) {
                var i = this._er.length;
                if (1 == i) return void this._er[0]._gj(this._ju);
                t = this._ju + Math.PI, g(this._er, function (i) {
                    i._gj(t)
                }, this)
            }
        },
        _82: 0,
        _76: function (t) {
            if (this._km && (this._gh = this.layouter._2z(this._km, this._jt, this._kj) / 2), !this._er) return null;
            this._gh;
            return this._82 = this._er.length, this._82 <= 2 || this.layouter.angleSpacing == jl ? Wl.call(this, t) : Ul.call(this, t)
        },
        _d3: function (t) {
            var i = this._76(t);
            if (!i) return this._kl = this._gh;
            var e = i[0],
                n = i[1],
                r = this.layouter.getRadius(this._km, this._jt);
            if (r < this._gh && (r = this._gh), this._ef = r, this._gh + e > r && (r = this._gh + e), e && this._82 > 1 && n < Math.PI) {
                var s = e / Math.sin(n / 2);
                s > r && (r = s)
            }
            return this._j6 = r, this._kl = r + e, this._km && this._er && this.layouter.radiusMode == Hl && g(this._er, function (t) {
                var i = t._kl;
                1 == t._82 && (i /= 2);
                var e = this._gh + i,
                    n = t._jv;
                if (n && n < Math.PI) {
                    var r = Math.sin(n / 2),
                        s = i / r;
                    s > i && (i = s)
                }
                e > i && (i = e), t._lel = i
            }, this), (!this._km || t) && this._gj(0), this._kl
        },
        _5l: function (t, i, e, n, r) {
            if (this._km && (n[this._km.id] = {
                    x: t,
                    y: i,
                    node: this._km
                }, r && r.addRect(t - this._gh / 2, i - this._gh / 2, this._gh, this._gh)), this._er) {
                if (!this._km && 1 == this._er.length) return void this._er[0]._5l(t, i, e, n, r);
                e = e || 0;
                var s = this._j6,
                    o = this._ef;
                g(this._er, function (h) {
                    var a = s;
                    h._lel && (a = Math.max(o, h._lel));
                    var l = h._ju + e,
                        _ = t + a * Math.cos(l),
                        u = i + a * Math.sin(l);
                    h._5l(_, u, e, n, r)
                }, this)
            }
        }
    }, A($l, yl);
    var Vl = function () {
        b(this, Vl, arguments)
    };
    A(Vl, Rs);
    var ql = function (t, i) {
        this.node1 = t, this.node2 = i, t == i ? (this.isLooped = !0, this._jr = t._je) : this._jr = new Js, this._84 = [], this._gm = Zs.EDGE_BUNDLE_EXPANDED
    };
    Zs.EDGE_BUNDLE_EXPANDED = !0, ql.prototype = {
        node1: null,
        node2: null,
        _jr: null,
        _gm: Zs.EDGE_BUNDLE_EXPANDED,
        _84: null,
        _gp: null,
        agentEdge: null,
        _lee: function (t, i, e) {
            this._jr.forEach(function (n) {
                return e && n.$from != e && n.fromAgent != e ? void 0 : t.call(i, n)
            })
        },
        _4r: 0,
        _5j: 0,
        _hb: function (t, i) {
            return this._jr.add(t) === !1 ? !1 : (i == this.node1 ? this._4r++ : this._5j++, this._lg0 ? void this._11(t) : void(this._lg0 = !0))
        },
        _ler: function (t, i) {
            return this._jr.remove(t) === !1 ? !1 : (i == this.node1 ? this._4r-- : this._5j--, this._11(t), void this._jr.forEach(function (t) {
                t._edgeBundleInvalidateFlag = !0, t.__3n = !0
            }, this))
        },
        _11: function (t) {
            this._letBindableFlag = !0, this._5z = !0, t._edgeBundleInvalidateFlag = !0, t.__3n = !0
        },
        _let: function () {
            this._5z || (this._5z = !0, this._jr.forEach(function (t) {
                t._edgeBundleInvalidateFlag = !0
            }))
        },
        isEmpty: function () {
            return this._jr.isEmpty()
        },
        isPositiveOrder: function (t) {
            return this.node1 == t.$from || this.node1 == t.fromAgent
        },
        canBind: function (t) {
            return t && this._5z && this.validate(t), this._jr.length > 1 && this._84.length > 1
        },
        _h5: function (t) {
            return this._84.indexOf(t)
        },
        getYOffset: function (t) {
            return this._gp[t.id]
        },
        _4f: function (t) {
            if (!this.canBind()) return void(this._gp = {});
            var i = {},
                e = this._84.length;
            if (!(2 > e)) {
                var n = 0,
                    r = this._84[0];
                i[r.id] = 0;
                for (var s = 1; e > s; s++) {
                    r = this._84[s];
                    var o = t.getStyle(r, Ba.EDGE_BUNDLE_GAP) || Za[Ba.EDGE_BUNDLE_GAP];
                    n += o, i[r.id] = n
                }
                if (!this.isLooped)
                    for (var h = n / 2, s = 0; e > s; s++) r = this._84[s], i[r.id] -= h;
                this._gp = i
            }
        },
        _lgs: function (t) {
            return this._gm == t ? !1 : (this._gm = t, this._let(), !0)
        },
        reverseExpanded: function () {
            return this._lgs(!this._gm)
        },
        _19: function () {
            this._letBindableFlag = !1, this._84.length = 0;
            var t;
            this._jr.forEach(function (i) {
                if (i.isBundleEnabled()) {
                    if (!this.isPositiveOrder(i)) return t || (t = []), void t.push(i);
                    this._84.push(i)
                }
            }, this), t && (this._84 = t.concat(this._84))
        },
        _du: function (t) {
            return t == this.agentEdge || !this.canBind() || this._gm
        },
        validate: function (t) {
            this._5z = !1, this._jr.forEach(function (t) {
                t._edgeBundleInvalidateFlag = !1
            }), this._letBindableFlag && this._19();
            var i = this._gm,
                e = this.canBind(),
                n = !e || i;
            g(this._84, function (t) {
                t._$p = !0, t._h0InBundle = n, n && (t.__3n = !0)
            }, this), n ? this._9d(null, t) : (this._9d(this._84[0], t), this.agentEdge._h0InBundle = !0, this.agentEdge.__3n = !0), n && this._4f(t)
        },
        _9d: function (t, i) {
            if (t != this.agentEdge) {
                var e = this.agentEdge;
                return this.agentEdge = t, i && i._4e(new po(this, "agentEdge", t, e)), !0
            }
        }
    }, Q(ql.prototype, {
        bindableEdges: {
            get: function () {
                return this._84
            }
        },
        edges: {
            get: function () {
                return this._jr._ig
            }
        },
        length: {
            get: function () {
                return this._jr ? this._jr.length : 1
            }
        },
        expanded: {
            get: function () {
                return this._gm
            },
            set: function (t) {
                return this._gm == t ? !1 : (this._gm = t, void this._let())
            }
        }
    });
    var Kl = function () {
            function t(t, i) {
                this.node = t, this.body = i
            }

            function i() {
                this.stack = [], this.popIdx = 0
            }
            var e = -1e6,
                n = .8;
            i.prototype = {
                isEmpty: function () {
                    return 0 === this.popIdx
                },
                push: function (i, e) {
                    var n = this.stack[this.popIdx];
                    n ? (n.node = i, n.body = e) : this.stack[this.popIdx] = new t(i, e), ++this.popIdx
                },
                pop: function () {
                    return this.popIdx > 0 ? this.stack[--this.popIdx] : void 0
                },
                reset: function () {
                    this.popIdx = 0
                }
            };
            var r = [],
                s = new i,
                o = function () {
                    this.body = null, this.quads = [], this.mass = 0, this.massX = 0, this.massY = 0, this.left = 0, this.top = 0, this.bottom = 0, this.right = 0, this.isInternal = !1
                },
                h = [],
                a = 0,
                l = function () {
                    var t;
                    return h[a] ? (t = h[a], t.quads[0] = null, t.quads[1] = null, t.quads[2] = null, t.quads[3] = null, t.body = null, t.mass = t.massX = t.massY = 0, t.left = t.right = t.top = t.bottom = 0, t.isInternal = !1) : (t = new o, h[a] = t), ++a, t
                },
                _ = l(),
                u = function (t, i) {
                    var e = Math.abs(t.x - i.x),
                        n = Math.abs(t.y - i.y);
                    return 1e-8 > e && 1e-8 > n
                },
                c = function (t) {
                    for (s.reset(), s.push(_, t); !s.isEmpty();) {
                        var i = s.pop(),
                            e = i.node,
                            n = i.body;
                        if (e.isInternal) {
                            var r = n.x,
                                o = n.y;
                            e.mass = e.mass + n.mass, e.massX = e.massX + n.mass * r, e.massY = e.massY + n.mass * o;
                            var h = 0,
                                a = e.left,
                                c = (e.right + a) / 2,
                                d = e.top,
                                f = (e.bottom + d) / 2;
                            if (r > c) {
                                h += 1;
                                var g = a;
                                a = c, c += c - g
                            }
                            if (o > f) {
                                h += 2;
                                var v = d;
                                d = f, f += f - v
                            }
                            var E = e.quads[h];
                            E || (E = l(), E.left = a, E.top = d, E.right = c, E.bottom = f, e.quads[h] = E), s.push(E, n)
                        } else if (e.body) {
                            var p = e.body;
                            if (e.body = null, e.isInternal = !0, u(p, n)) {
                                if (e.right - e.left < 1e-8) return;
                                do {
                                    var y = Math.random(),
                                        T = (e.right - e.left) * y,
                                        m = (e.bottom - e.top) * y;
                                    p.x = e.left + T, p.y = e.top + m
                                } while (u(p, n))
                            }
                            s.push(e, p), s.push(e, n)
                        } else e.body = n
                    }
                },
                d = function (t) {
                    var i, s, o, h, a = r,
                        l = 1,
                        u = 0,
                        c = 1;
                    for (a[0] = _; l;) {
                        var d = a[u],
                            f = d.body;
                        l -= 1, u += 1, f && f !== t ? (s = f.x - t.x, o = f.y - t.y, h = Math.sqrt(s * s + o * o), 0 === h && (s = (Math.random() - .5) / 50, o = (Math.random() - .5) / 50, h = Math.sqrt(s * s + o * o)), i = e * f.mass * t.mass / (h * h), -1e3 > i && (i = -1e3), i /= h, t.fx = t.fx + i * s, t.fy = t.fy + i * o) : (s = d.massX / d.mass - t.x, o = d.massY / d.mass - t.y, h = Math.sqrt(s * s + o * o), 0 === h && (s = (Math.random() - .5) / 50, o = (Math.random() - .5) / 50, h = Math.sqrt(s * s + o * o)), (d.right - d.left) / h < n ? (i = e * d.mass * t.mass / (h * h), -1e3 > i && (i = -1e3), i /= h, t.fx = t.fx + i * s, t.fy = t.fy + i * o) : (d.quads[0] && (a[c] = d.quads[0], l += 1, c += 1), d.quads[1] && (a[c] = d.quads[1], l += 1, c += 1), d.quads[2] && (a[c] = d.quads[2], l += 1, c += 1), d.quads[3] && (a[c] = d.quads[3], l += 1, c += 1)))
                    }
                },
                f = function (t, i) {
                    e = i;
                    var n, r = Number.MAX_VALUE,
                        s = Number.MAX_VALUE,
                        o = Number.MIN_VALUE,
                        h = Number.MIN_VALUE,
                        u = t,
                        d = u.length;
                    for (n = d; n--;) {
                        var f = u[n].x,
                            g = u[n].y;
                        r > f && (r = f), f > o && (o = f), s > g && (s = g), g > h && (h = g)
                    }
                    var v = o - r,
                        E = h - s;
                    for (v > E ? h = s + v : o = r + E, a = 0, _ = l(), _.left = r, _.right = o, _.top = s, _.bottom = h, n = d; n--;) c(u[n], _)
                };
            return {
                init: f,
                update: d
            }
        },
        Zl = function (t) {
            t.fx -= t.x * this.attractive, t.fy -= t.y * this.attractive
        },
        Jl = function (t) {
            if (0 != t.k) {
                var i = this._lep,
                    e = t.from,
                    n = t.to,
                    r = n.x - e.x,
                    s = n.y - e.y,
                    o = r * r + s * s,
                    h = Math.sqrt(o) || .1,
                    a = (h - i) * t.k * this.elastic;
                a /= h;
                var l = a * r,
                    _ = a * s;
                n.fx -= l, n.fy -= _, e.fx += l, e.fy += _
            }
        };
    Rs.prototype = {
        appendNodeInfo: function (t, i) {
            i.mass = t.layoutMass || 1, i.fx = 0, i.fy = 0, i.vx = 0, i.vy = 0
        },
        appendEdgeInfo: function (t, i) {
            i.k = t.layoutElasticity || 1
        },
        setMass: function (t, i) {
            t.layoutMass = i, this.layoutDatas && this.layoutDatas.nodes && (t = this.layoutDatas.nodes[t.id], t && (t.mass = i))
        },
        setElasticity: function (t, i) {
            t.layoutElasticity = i, this.layoutDatas && this.layoutDatas.edges && (t = this.layoutDatas.edges[t.id], t && (t.k = i))
        },
        _lep: 50,
        _hc: .5,
        timeStep: .15,
        repulsion: 50,
        attractive: .1,
        elastic: 3,
        _kt: 1e3,
        _iq: function (t) {
            return this._kt + .3 * (t - this._kt)
        },
        _kr: function (t, i) {
            var e = (Date.now(), this.layoutDatas.nodes);
            for (var n in e) {
                var r = e[n];
                i && (r.x += Math.random() - .5, r.y += Math.random() - .5), Zl.call(this, r)
            }
            var s = this.layoutDatas.groups;
            if (s)
                for (var n in s) {
                    var o = s[n],
                        h = o.children,
                        a = 0,
                        l = 0;
                    h.forEach(function (t) {
                        a += t.x, l += t.y
                    }), a /= h.length, l /= h.length;
                    var _ = 10 * this.attractive;
                    h.forEach(function (t) {
                        t.fx -= (t.x - a) * _, t.fy -= (t.y - l) * _
                    })
                }
            var u = this._nbodyForce;
            u || (u = this._nbodyForce = Kl()), u.init(this.layoutDatas.nodesArray, -this.repulsion * this.repulsion * this.repulsion);
            for (var n in e) u.update(e[n]);
            if (this.elastic) {
                var c = this.layoutDatas.edges;
                for (var n in c) Jl.call(this, c[n])
            }
            return this._kp(t)
        },
        _kp: function (t) {
            var i = this.layoutDatas.minEnergy,
                e = (this.layoutDatas.currentEnergy, this.layoutDatas.nodes),
                t = this.timeStep,
                n = 0,
                r = this._hc;
            for (var s in e) {
                var o = e[s],
                    h = o.fx / o.mass,
                    a = o.fy / o.mass,
                    l = o.vx += h * t,
                    _ = o.vy += a * t;
                o.x += l * t, o.y += _ * t, i > n && (n += 2 * (l * l + _ * _)), o.fx = 0, o.fy = 0, o.vx *= r, o.vy *= r
            }
            return this.layoutDatas.currentEnergy = n, n >= i
        }
    }, A(Rs, Cs), dh.SpringLayouter = Rs;
    var Ql = function (t) {
        this.locations = t
    };
    Ql.prototype = {
        oldLocations: null,
        _ed: null,
        duration: 700,
        animationType: lh.easeOutStrong,
        _74: function (t) {
            if (this._ed = t, this.oldLocations = {}, t)
                for (var i in t) {
                    var e = t[i],
                        n = e.node;
                    this.oldLocations[i] = {
                        x: n.x,
                        y: n.y
                    }
                }
        },
        setLocation: function (t, i, e) {
            t.setLocation(i, e)
        },
        forEach: function (t, i) {
            for (var e in this.locations) {
                var n = this.oldLocations[e],
                    r = this.locations[e];
                t.call(i, n, r)
            }
        },
        _iy: function (t) {
            this.forEach(function (i, e) {
                var n = e.node,
                    r = i.x + (e.x - i.x) * t,
                    s = i.y + (e.y - i.y) * t;
                this.setLocation(n, r, s)
            }, this)
        },
        stop: function () {
            this._lgnimate && this._lgnimate._k9()
        },
        start: function (t) {
            this._lgnimate ? (this._lgnimate._k9(), this._lgnimate._hf = this.duration, this._lgnimate._e1Type = this.animationType, this._lgnimate._onfinish = this._onfinish) : this._lgnimate = new uh(this._iy, this, this.duration, this.animationType), this._lgnimate._jo(t)
        }
    }, Q(Ql.prototype, {
        locations: {
            get: function () {
                return this._ed
            },
            set: function (t) {
                this._ed != t && this._74(t)
            }
        }
    });
    var t_ = function (t) {
            var i, e = new Js;
            return t.forEach(function (t) {
                t instanceof Ca && (t.hasInEdge() ? !i && t.hasOutEdge() && (i = t) : e.add(t))
            }), e.isEmpty() && i && e.add(i), e
        },
        i_ = function (t, i, e, n, r, s) {
            if (i instanceof Io) return t(i, e, n, r, s), i;
            if (i instanceof Ja) {
                var o = new Js;
                i._jcModel.forEach(function (t) {
                    return i.isVisible(t) ? t._gy() && t._gm && t.hasChildren() ? void(t.$location && (t.$location.invalidateFlag = !1)) : void o.add(t) : void 0
                }), i = o
            }
            var i = t_(i, n);
            return g(i, function (i) {
                t(i, e, n, r, s)
            }), i
        },
        e_ = function (t, i, e, n, r) {
            return i_(r_, t, i, e, n, r)
        },
        n_ = function (t, i, e, n, r) {
            return i_(s_, t, i, e, n, r)
        };
    Qn.prototype.forEachByTopoDepthFirstSearch = function (t, i, e, n) {
        e_(this, t, i, e, n)
    }, Qn.prototype.forEachByTopoBreadthFirstSearch = function (t, i, e, n) {
        t instanceof Object && 1 == arguments.length && (i = t.scope), n_(this, t, i, e, n)
    }, dh.forEachByTopoDepthFirstSearch = e_, dh.forEachByTopoBreadthFirstSearch = n_;
    var r_ = function (t, i, e, n, r) {
            function s(t, i, e, n, r, o, h, a) {
                t._marker = o, n || i.call(e, t, a, h), Ds(t, function (a) {
                    s(a, i, e, n, r, o, h + 1, t)
                }, a, r, o, e), n && i.call(e, t, a, h)
            }
            s(t, i, e, n, r, {}, 0)
        },
        s_ = function (t, i, e, n, r) {
            function s(t, i, e, n, r, o, h) {
                var a, l = t.length;
                t.forEach(function (t, s) {
                    var _ = t.v;
                    _._marker = o, n || i.call(e, _, t._from, h, s, l), Ds(_, function (t) {
                        a || (a = []), t._marker = o, a.push({
                            v: t,
                            _from: _
                        })
                    }, _, r, o, e)
                }), a && s(a, i, e, n, r, o, h + 1), n && t.forEach(function (t, n) {
                    i.call(e, t.v, t._from, h, n, l)
                })
            }
            s([{
                v: t
            }], i, e, n, r, {}, 0)
        };
    dh.toColor = Z, dh.log = ei, dh.error = ri, dh.trace = ni, dh.isIE = Bs, dh.isOpera = Ms, dh.isWebkit = Fs, dh.isGecko = $s, dh.isFirefox = zs, dh.isSafari = Ys, dh.isChrome = js, dh.isMac = Hs, dh.DefaultStyles = Za, dh.Defaults = Zs, dh.Styles = Ba, dh.Consts = fh, dh.Graphs = ta, dh.Graph = Ja, dh.BaseUI = Na, dh.ElementUI = Xa, dh.NodeUI = ar, dh.EdgeUI = hr, dh.LabelUI = qa, dh.ImageUI = Va, dh.Shapes = Da, dh.Path = Zh, dh.Gradient = Nh, dh.InteractionEvent = bs, dh.Element = Ia, dh.Node = Ca, dh.Edge = xa, dh.GraphModel = Qn, dh.EdgeBundle = ql, dh.TreeLayouter = Gl, dh.name = "Qunee for HTML5";
    dh.version = "2.6.1.15", dh.about = "Qunee - Diagramming Components for HTML5/Canvas", dh.copyright = "Copyright © 2018 Qunee.com", dh.css = Ei;
    return dh.IDrawable = Qa, ei = function () {}, dh.publishDate = "13/4/2018", dh
}(window, document);