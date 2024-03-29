! function(e, n, t) {
    function r(e, n) {
        return typeof e === n
    }

    function o() {
        var e, n, t, o, s, i, a;
        for (var l in w)
            if (w.hasOwnProperty(l)) {
                if (e = [], n = w[l], n.name && (e.push(n.name.toLowerCase()), n.options && n.options.aliases && n.options.aliases.length))
                    for (t = 0; t < n.options.aliases.length; t++) e.push(n.options.aliases[t].toLowerCase());
                for (o = r(n.fn, "function") ? n.fn() : n.fn, s = 0; s < e.length; s++) i = e[s], a = i.split("."), 1 === a.length ? Modernizr[a[0]] = o : (!Modernizr[a[0]] || Modernizr[a[0]] instanceof Boolean || (Modernizr[a[0]] = new Boolean(Modernizr[a[0]])), Modernizr[a[0]][a[1]] = o), C.push((o ? "" : "no-") + a.join("-"))
            }
    }

    function s(e) {
        var n = S.className,
            t = Modernizr._config.classPrefix || "";
        if (_ && (n = n.baseVal), Modernizr._config.enableJSClass) {
            var r = new RegExp("(^|\\s)" + t + "no-js(\\s|$)");
            n = n.replace(r, "$1" + t + "js$2")
        }
        Modernizr._config.enableClasses && (n += " " + t + e.join(" " + t), _ ? S.className.baseVal = n : S.className = n)
    }

    function i() {
        return "function" != typeof n.createElement ? n.createElement(arguments[0]) : _ ? n.createElementNS.call(n, "http://www.w3.org/2000/svg", arguments[0]) : n.createElement.apply(n, arguments)
    }

    function a(n, t, r) {
        var o;
        if ("getComputedStyle" in e) {
            o = getComputedStyle.call(e, n, t);
            var s = e.console;
            if (null !== o) r && (o = o.getPropertyValue(r));
            else if (s) {
                var i = s.error ? "error" : "log";
                s[i].call(s, "getComputedStyle returning null, its possible modernizr test results are inaccurate")
            }
        } else o = !t && n.currentStyle && n.currentStyle[r];
        return o
    }

    function l() {
        var e = n.body;
        return e || (e = i(_ ? "svg" : "body"), e.fake = !0), e
    }

    function u(e, t, r, o) {
        var s, a, u, f, c = "modernizr",
            d = i("div"),
            p = l();
        if (parseInt(r, 10))
            for (; r--;) u = i("div"), u.id = o ? o[r] : c + (r + 1), d.appendChild(u);
        return s = i("style"), s.type = "text/css", s.id = "s" + c, (p.fake ? p : d).appendChild(s), p.appendChild(d), s.styleSheet ? s.styleSheet.cssText = e : s.appendChild(n.createTextNode(e)), d.id = c, p.fake && (p.style.background = "", p.style.overflow = "hidden", f = S.style.overflow, S.style.overflow = "hidden", S.appendChild(p)), a = t(d, e), p.fake ? (p.parentNode.removeChild(p), S.style.overflow = f, S.offsetHeight) : d.parentNode.removeChild(d), !!a
    }

    function f(e, n) {
        return !!~("" + e).indexOf(n)
    }

    function c(e) {
        return e.replace(/([a-z])-([a-z])/g, function(e, n, t) {
            return n + t.toUpperCase()
        }).replace(/^-/, "")
    }

    function d(e, n) {
        return function() {
            return e.apply(n, arguments)
        }
    }

    function p(e, n, t) {
        var o;
        for (var s in e)
            if (e[s] in n) return t === !1 ? e[s] : (o = n[e[s]], r(o, "function") ? d(o, t || n) : o);
        return !1
    }

    function m(e) {
        return e.replace(/([A-Z])/g, function(e, n) {
            return "-" + n.toLowerCase()
        }).replace(/^ms-/, "-ms-")
    }

    function h(n, r) {
        var o = n.length;
        if ("CSS" in e && "supports" in e.CSS) {
            for (; o--;)
                if (e.CSS.supports(m(n[o]), r)) return !0;
            return !1
        }
        if ("CSSSupportsRule" in e) {
            for (var s = []; o--;) s.push("(" + m(n[o]) + ":" + r + ")");
            return s = s.join(" or "), u("@supports (" + s + ") { #modernizr { position: absolute; } }", function(e) {
                return "absolute" == a(e, null, "position")
            })
        }
        return t
    }

    function v(e, n, o, s) {
        function a() {
            u && (delete k.style, delete k.modElem)
        }
        if (s = r(s, "undefined") ? !1 : s, !r(o, "undefined")) {
            var l = h(e, o);
            if (!r(l, "undefined")) return l
        }
        for (var u, d, p, m, v, g = ["modernizr", "tspan", "samp"]; !k.style && g.length;) u = !0, k.modElem = i(g.shift()), k.style = k.modElem.style;
        for (p = e.length, d = 0; p > d; d++)
            if (m = e[d], v = k.style[m], f(m, "-") && (m = c(m)), k.style[m] !== t) {
                if (s || r(o, "undefined")) return a(), "pfx" == n ? m : !0;
                try {
                    k.style[m] = o
                } catch (y) {}
                if (k.style[m] != v) return a(), "pfx" == n ? m : !0
            }
        return a(), !1
    }

    function g(e, n, t, o, s) {
        var i = e.charAt(0).toUpperCase() + e.slice(1),
            a = (e + " " + P.join(i + " ") + i).split(" ");
        return r(n, "string") || r(n, "undefined") ? v(a, n, o, s) : (a = (e + " " + j.join(i + " ") + i).split(" "), p(a, n, t))
    }

    function y(e, n, r) {
        return g(e, t, t, n, r)
    }
    var C = [],
        w = [],
        x = {
            _version: "3.5.0",
            _config: {
                classPrefix: "",
                enableClasses: !0,
                enableJSClass: !0,
                usePrefixes: !0
            },
            _q: [],
            on: function(e, n) {
                var t = this;
                setTimeout(function() {
                    n(t[e])
                }, 0)
            },
            addTest: function(e, n, t) {
                w.push({
                    name: e,
                    fn: n,
                    options: t
                })
            },
            addAsyncTest: function(e) {
                w.push({
                    name: null,
                    fn: e
                })
            }
        },
        Modernizr = function() {};
    Modernizr.prototype = x, Modernizr = new Modernizr;
    var S = n.documentElement,
        _ = "svg" === S.nodeName.toLowerCase(),
        b = x._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
    x._prefixes = b, Modernizr.addTest("csscalc", function() {
        var e = "width:",
            n = "calc(10px);",
            t = i("a");
        return t.style.cssText = e + b.join(n + e), !!t.style.length
    });
    var T = x.testStyles = u;
    Modernizr.addTest("touchevents", function() {
        var t;
        if ("ontouchstart" in e || e.DocumentTouch && n instanceof DocumentTouch) t = !0;
        else {
            var r = ["@media (", b.join("touch-enabled),("), "heartz", ")", "{#modernizr{top:9px;position:absolute}}"].join("");
            T(r, function(e) {
                t = 9 === e.offsetTop
            })
        }
        return t
    }), T("#modernizr { height: 50vh; }", function(n) {
        var t = parseInt(e.innerHeight / 2, 10),
            r = parseInt(a(n, null, "height"), 10);
        Modernizr.addTest("cssvhunit", r == t)
    }), T("#modernizr { width: 50vw; }", function(n) {
        var t = parseInt(e.innerWidth / 2, 10),
            r = parseInt(a(n, null, "width"), 10);
        Modernizr.addTest("cssvwunit", r == t)
    });
    var z = "Moz O ms Webkit",
        P = x._config.usePrefixes ? z.split(" ") : [];
    x._cssomPrefixes = P;
    var j = x._config.usePrefixes ? z.toLowerCase().split(" ") : [];
    x._domPrefixes = j;
    var E = {
        elem: i("modernizr")
    };
    Modernizr._q.push(function() {
        delete E.elem
    });
    var k = {
        style: E.elem.style
    };
    Modernizr._q.unshift(function() {
        delete k.style
    }), x.testAllProps = g, x.testAllProps = y, Modernizr.addTest("backgroundcliptext", function() {
        return y("backgroundClip", "text")
    }), Modernizr.addTest("flexbox", y("flexBasis", "1px", !0)), o(), s(C), delete x.addTest, delete x.addAsyncTest;
    for (var N = 0; N < Modernizr._q.length; N++) Modernizr._q[N]();
    e.Modernizr = Modernizr
}(window, document);