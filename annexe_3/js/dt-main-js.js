function Layzr(t) {
    (this._lastScroll = 0),
        (this._ticking = !1),
        (t = t || {}),
        (this._optionsContainer = document.querySelector(t.container) || window),
        (this._optionsSelector = t.selector || "[data-layzr]"),
        (this._optionsAttr = t.attr || "data-layzr"),
        (this._optionsAttrSrcSet = t.attrSrcSet || "data-layzr-srcset"),
        (this._optionsAttrRetina = t.retinaAttr || "data-layzr-retina"),
        (this._optionsAttrBg = t.bgAttr || "data-layzr-bg"),
        (this._optionsAttrHidden = t.hiddenAttr || "data-layzr-hidden"),
        (this._optionsThreshold = t.threshold || 0),
        (this._optionsBefore = t.before || null),
        (this._optionsAfter = t.after || null),
        (this._optionsCallback = t.callback || null),
        (this._optionsIsloadedClass = t.isloadedClass || "is-loaded"),
        (this._optionsIsloadingClass = t.isloadingClass || "is-loading"),
        (this._retina = window.devicePixelRatio > 1),
        (this._srcAttr = this._retina
            ? this._optionsAttrRetina
            : this._optionsAttr),
        this.updateSelector(),
        (this._handlerBind = this._requestScroll.bind(this)),
        this._create();
}
function simple_tooltip(t, e) {
    jQuery(t).each(function (t) {
        jQuery("body").append(
            "<div class='" +
            e +
            "' id='" +
            e +
            t +
            "'>" +
            jQuery(this).find("span.tooltip-c").html() +
            "</div>"
        );
        var i = jQuery("#" + e + t);
        jQuery(this)
            .removeAttr("title")
            .mouseover(function () {
                i.css({ opacity: 1, display: "none" }).fadeIn(400);
            })
            .mousemove(function (t) {
                var e,
                    n,
                    s = jQuery(window).scrollTop(),
                    o = jQuery(window).width(),
                    a = 15;
                (e = o - 30 >= i.width() + t.pageX ? t.pageX + a : o - i.width() - a),
                    (n =
                        s + 30 >= t.pageY - i.height() ? s + a : t.pageY - i.height() - 33),
                    i.css({ left: e, top: n });
            })
            .mouseout(function () {
                i.css({ left: "-9999px" });
            });
    });
}
/*!
 * jquery.customSelect() - v0.4.1
 * http://adam.co/lab/jquery/customselect/
 * 2013-05-13
 *
 * Copyright 2013 Adam Coulombe
 * @license http://www.opensource.org/licenses/mit-license.html MIT License
 * @license http://www.gnu.org/licenses/gpl.html GPL2 License
 */ !(function (t) {
    "function" == typeof define && define.amd
        ? define(["jquery"], function (e) {
            return t(e);
        })
        : "object" == typeof module && "object" == typeof module.exports
            ? (exports = t(require("jquery")))
            : t(jQuery);
})(function (t) {
    t.easing.jswing = t.easing.swing;
    var e = Math.pow,
        i = Math.sqrt,
        n = Math.sin,
        s = Math.cos,
        o = Math.PI,
        a = 1.70158,
        r = 1.525 * a,
        l = a + 1,
        d = (2 * o) / 3,
        c = (2 * o) / 4.5;
    function h(t) {
        var e = 7.5625,
            i = 2.75;
        return t < 1 / i
            ? e * t * t
            : t < 2 / i
                ? e * (t -= 1.5 / i) * t + 0.75
                : t < 2.5 / i
                    ? e * (t -= 2.25 / i) * t + 0.9375
                    : e * (t -= 2.625 / i) * t + 0.984375;
    }
    t.extend(t.easing, {
        def: "easeOutQuad",
        swing: function (e) {
            return t.easing[t.easing.def](e);
        },
        easeInQuad: function (t) {
            return t * t;
        },
        easeOutQuad: function (t) {
            return 1 - (1 - t) * (1 - t);
        },
        easeInOutQuad: function (t) {
            return t < 0.5 ? 2 * t * t : 1 - e(-2 * t + 2, 2) / 2;
        },
        easeInCubic: function (t) {
            return t * t * t;
        },
        easeOutCubic: function (t) {
            return 1 - e(1 - t, 3);
        },
        easeInOutCubic: function (t) {
            return t < 0.5 ? 4 * t * t * t : 1 - e(-2 * t + 2, 3) / 2;
        },
        easeInQuart: function (t) {
            return t * t * t * t;
        },
        easeOutQuart: function (t) {
            return 1 - e(1 - t, 4);
        },
        easeInOutQuart: function (t) {
            return t < 0.5 ? 8 * t * t * t * t : 1 - e(-2 * t + 2, 4) / 2;
        },
        easeInQuint: function (t) {
            return t * t * t * t * t;
        },
        easeOutQuint: function (t) {
            return 1 - e(1 - t, 5);
        },
        easeInOutQuint: function (t) {
            return t < 0.5 ? 16 * t * t * t * t * t : 1 - e(-2 * t + 2, 5) / 2;
        },
        easeInSine: function (t) {
            return 1 - s((t * o) / 2);
        },
        easeOutSine: function (t) {
            return n((t * o) / 2);
        },
        easeInOutSine: function (t) {
            return -(s(o * t) - 1) / 2;
        },
        easeInExpo: function (t) {
            return 0 === t ? 0 : e(2, 10 * t - 10);
        },
        easeOutExpo: function (t) {
            return 1 === t ? 1 : 1 - e(2, -10 * t);
        },
        easeInOutExpo: function (t) {
            return 0 === t
                ? 0
                : 1 === t
                    ? 1
                    : t < 0.5
                        ? e(2, 20 * t - 10) / 2
                        : (2 - e(2, -20 * t + 10)) / 2;
        },
        easeInCirc: function (t) {
            return 1 - i(1 - e(t, 2));
        },
        easeOutCirc: function (t) {
            return i(1 - e(t - 1, 2));
        },
        easeInOutCirc: function (t) {
            return t < 0.5
                ? (1 - i(1 - e(2 * t, 2))) / 2
                : (i(1 - e(-2 * t + 2, 2)) + 1) / 2;
        },
        easeInElastic: function (t) {
            return 0 === t
                ? 0
                : 1 === t
                    ? 1
                    : -e(2, 10 * t - 10) * n((10 * t - 10.75) * d);
        },
        easeOutElastic: function (t) {
            return 0 === t
                ? 0
                : 1 === t
                    ? 1
                    : e(2, -10 * t) * n((10 * t - 0.75) * d) + 1;
        },
        easeInOutElastic: function (t) {
            return 0 === t
                ? 0
                : 1 === t
                    ? 1
                    : t < 0.5
                        ? (-e(2, 20 * t - 10) * n((20 * t - 11.125) * c)) / 2
                        : (e(2, -20 * t + 10) * n((20 * t - 11.125) * c)) / 2 + 1;
        },
        easeInBack: function (t) {
            return l * t * t * t - a * t * t;
        },
        easeOutBack: function (t) {
            return 1 + l * e(t - 1, 3) + a * e(t - 1, 2);
        },
        easeInOutBack: function (t) {
            return t < 0.5
                ? (e(2 * t, 2) * (7.189819 * t - r)) / 2
                : (e(2 * t - 2, 2) * ((r + 1) * (2 * t - 2) + r) + 2) / 2;
        },
        easeInBounce: function (t) {
            return 1 - h(1 - t);
        },
        easeOutBounce: h,
        easeInOutBounce: function (t) {
            return t < 0.5 ? (1 - h(1 - 2 * t)) / 2 : (1 + h(2 * t - 1)) / 2;
        },
    });
}),
    (The7Scroll = (function () {
        var t, e, i;
        function n(n) {
            i = 0;
            const a = {
                root: (e = n).root || null,
                rootMargin: e.offset || "0px",
                threshold: o(e.sensitivity),
            };
            t = new IntersectionObserver(s, a);
        }
        function s(t) {
            const n = t[0].boundingClientRect.y,
                s = t[0].isIntersecting,
                o = n < i ? "down" : "up",
                a = Math.abs(parseFloat((100 * t[0].intersectionRatio).toFixed(2)));
            e.callback({
                sensitivity: e.sensitivity,
                isInViewport: s,
                scrollPercentage: a,
                intersectionScrollDirection: o,
            }),
                (i = n);
        }
        function o(t = 0) {
            const e = [];
            if (t > 0 && t <= 100) {
                const i = 100 / t;
                for (let t = 0; t <= 100; t += i) e.push(t / 100);
            } else e.push(0);
            return e;
        }
        return (
            (n.prototype.getScrollObserver = function () {
                return t;
            }),
            n
        );
    })()),
    (function () {
        for (
            var t = 0, e = ["ms", "moz", "webkit", "o"], i = 0;
            i < e.length && !window.requestAnimationFrame;
            ++i
        )
            (window.requestAnimationFrame = window[e[i] + "RequestAnimationFrame"]),
                (window.cancelAnimationFrame =
                    window[e[i] + "CancelAnimationFrame"] ||
                    window[e[i] + "CancelRequestAnimationFrame"]);
        window.requestAnimationFrame ||
            (window.requestAnimationFrame = function (e, i) {
                var n = new Date().getTime(),
                    s = Math.max(0, 16 - (n - t)),
                    o = window.setTimeout(function () {
                        e(n + s);
                    }, s);
                return (t = n + s), o;
            }),
            window.cancelAnimationFrame ||
            (window.cancelAnimationFrame = function (t) {
                clearTimeout(t);
            });
    })(),
    (Layzr.prototype._requestScroll = function () {
        this._optionsContainer === window
            ? (this._lastScroll = window.pageYOffset)
            : (this._lastScroll =
                this._optionsContainer.scrollTop +
                this._getOffset(this._optionsContainer)),
            this._requestTick();
    }),
    (Layzr.prototype._requestTick = function () {
        this._ticking ||
            (requestAnimationFrame(this.update.bind(this)), (this._ticking = !0));
    }),
    (Layzr.prototype._getOffset = function (t) {
        return t.getBoundingClientRect().top + window.pageYOffset;
    }),
    (Layzr.prototype._getContainerHeight = function () {
        return (
            this._optionsContainer.innerHeight || this._optionsContainer.offsetHeight
        );
    }),
    (Layzr.prototype._create = function () {
        this._handlerBind(),
            this._optionsContainer.addEventListener("scroll", this._handlerBind, !1),
            this._optionsContainer.addEventListener("resize", this._handlerBind, !1);
    }),
    (Layzr.prototype._destroy = function () {
        this._optionsContainer.removeEventListener("scroll", this._handlerBind, !1),
            this._optionsContainer.removeEventListener(
                "resize",
                this._handlerBind,
                !1
            );
    }),
    (Layzr.prototype._inViewport = function (t) {
        if (null == t.offsetParent) return !1;
        var e = this._lastScroll,
            i = e + this._getContainerHeight(),
            n = this._getOffset(t),
            s = n + this._getContainerHeight(),
            o = (this._optionsThreshold / 100) * window.innerHeight;
        return s >= e - o && n <= i + o && !t.hasAttribute(this._optionsAttrHidden);
    }),
    (Layzr.prototype._reveal = function (t) {
        var e = t.getAttribute(this._srcAttr) || t.getAttribute(this._optionsAttr),
            i = this,
            n = this._optionsIsloadedClass,
            s = this._optionsIsloadingClass;
        "function" == typeof this._optionsCallback &&
            (t.addEventListener
                ? t.addEventListener("load", function () {
                    i._optionsCallback.call(t),
                        (i._nodes = i._nodes.filter((e) => e !== t)),
                        t.classList.add(n),
                        t.classList.remove(s);
                })
                : t.attachEvent("onload", function () {
                    i._optionsCallback.call(t),
                        (i._nodes = i._nodes.filter((e) => e !== t)),
                        t.classList.add(n),
                        t.classList.remove(s);
                }));
        "function" == typeof this._optionsBefore && this._optionsBefore.call(t);
        var o = !1;
        t.hasAttribute(this._optionsAttrBg)
            ? ((t.style.backgroundImage = "url(" + e + ")"), (o = !0))
            : (e && (t.removeAttribute("src"), t.setAttribute("src", e), (o = !0)),
                t.hasAttribute(this._optionsAttrSrcSet) &&
                (t.setAttribute("srcset", t.getAttribute(this._optionsAttrSrcSet)),
                    (o = !0))),
            o && t.classList.add(s),
            "function" == typeof this._optionsAfter && this._optionsAfter.call(t),
            t.removeAttribute(this._optionsAttr),
            t.removeAttribute(this._optionsAttrSrcSet),
            t.removeAttribute(this._optionsAttrRetina),
            t.removeAttribute(this._optionsAttrBg),
            t.removeAttribute(this._optionsAttrHidden);
    }),
    (Layzr.prototype.updateSelector = function () {
        (this._nodes = Array.from(
            document.querySelectorAll(this._optionsSelector)
        )),
            (this._nodes = this._prepareItems(this._nodes));
    }),
    (Layzr.prototype.addItems = function (t) {
        var e = Array.from(t.querySelectorAll(this._optionsSelector));
        (e = this._prepareItems(e)),
            (this._nodes = this._nodes.concat(e)),
            this.removeDuplicates();
    }),
    (Layzr.prototype.removeDuplicates = function () {
        var t = Array.from(new Set(this._nodes));
        t.length !== this._nodes.length && (this._nodes = t);
    }),
    (Layzr.prototype._prepareItems = function (t) {
        var e = this._optionsSelector.replace(/\./g, ""),
            i = this._optionsIsloadedClass,
            n = this._optionsIsloadingClass;
        return t.filter(function (t) {
            if (t.hasAttribute("data-src")) {
                var s = t.getAttribute("data-src"),
                    o = s.substring(s.lastIndexOf(".") + 1);
                ("png" !== o && "svg" !== o) ||
                    t.parentNode.classList.add("layzr-bg-transparent");
            } else if (!t.classList.contains(i) && !t.classList.contains(n)) return t.classList.remove(e), !1;
            return !0;
        });
    }),
    (Layzr.prototype.update = function () {
        for (var t = this._nodes.length, e = [], i = 0; i < t; i++) {
            var n = this._nodes[i];
            (n.hasAttribute(this._optionsAttr) ||
                n.hasAttribute(this._optionsAttrSrcSet) ||
                n.hasAttribute(this._optionsAttrRetina)) &&
                this._inViewport(n) &&
                e.push(n);
        }
        var s = this;
        e.forEach(function (t) {
            s._reveal(t);
        }),
            (this._ticking = !1);
    }),
    (function (t, e) {
        "function" == typeof define && define.amd
            ? define(e)
            : "object" == typeof exports
                ? (module.exports = e())
                : (t.PhotoSwipe = e());
    })(this, function () {
        "use strict";
        return function (t, e, i, n) {
            var s = {
                features: null,
                bind: function (t, e, i, n) {
                    var s = (n ? "remove" : "add") + "EventListener";
                    e = e.split(" ");
                    for (var o = 0; o < e.length; o++) e[o] && t[s](e[o], i, !1);
                },
                isArray: function (t) {
                    return t instanceof Array;
                },
                createEl: function (t, e) {
                    var i = document.createElement(e || "div");
                    return t && (i.className = t), i;
                },
                getScrollY: function () {
                    var t = window.pageYOffset;
                    return void 0 !== t ? t : document.documentElement.scrollTop;
                },
                unbind: function (t, e, i) {
                    s.bind(t, e, i, !0);
                },
                removeClass: function (t, e) {
                    var i = new RegExp("(\\s|^)" + e + "(\\s|$)");
                    t.className = t.className
                        .replace(i, " ")
                        .replace(/^\s\s*/, "")
                        .replace(/\s\s*$/, "");
                },
                addClass: function (t, e) {
                    s.hasClass(t, e) || (t.className += (t.className ? " " : "") + e);
                },
                hasClass: function (t, e) {
                    return (
                        t.className &&
                        new RegExp("(^|\\s)" + e + "(\\s|$)").test(t.className)
                    );
                },
                getChildByClass: function (t, e) {
                    for (var i = t.firstChild; i;) {
                        if (s.hasClass(i, e)) return i;
                        i = i.nextSibling;
                    }
                },
                arraySearch: function (t, e, i) {
                    for (var n = t.length; n--;) if (t[n][i] === e) return n;
                    return -1;
                },
                extend: function (t, e, i) {
                    for (var n in e)
                        if (e.hasOwnProperty(n)) {
                            if (i && t.hasOwnProperty(n)) continue;
                            t[n] = e[n];
                        }
                },
                easing: {
                    sine: {
                        out: function (t) {
                            return Math.sin(t * (Math.PI / 2));
                        },
                        inOut: function (t) {
                            return -(Math.cos(Math.PI * t) - 1) / 2;
                        },
                    },
                    cubic: {
                        out: function (t) {
                            return --t * t * t + 1;
                        },
                    },
                },
                detectFeatures: function () {
                    if (s.features) return s.features;
                    var t = s.createEl().style,
                        e = "",
                        i = {};
                    if (
                        ((i.oldIE = document.all && !document.addEventListener),
                            (i.touch =
                                "ontouchstart" in document.documentElement ||
                                navigator.maxTouchPoints > 0),
                            window.requestAnimationFrame &&
                            ((i.raf = window.requestAnimationFrame),
                                (i.caf = window.cancelAnimationFrame)),
                            (i.pointerEvent =
                                navigator.pointerEnabled || navigator.msPointerEnabled),
                            !i.pointerEvent)
                    ) {
                        var n = navigator.userAgent;
                        if (/iP(hone|od)/.test(navigator.platform)) {
                            var o = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
                            o &&
                                o.length > 0 &&
                                (o = parseInt(o[1], 10)) >= 1 &&
                                o < 8 &&
                                (i.isOldIOSPhone = !0);
                        }
                        var a = n.match(/Android\s([0-9\.]*)/),
                            r = a ? a[1] : 0;
                        (r = parseFloat(r)) >= 1 &&
                            (r < 4.4 && (i.isOldAndroid = !0), (i.androidVersion = r)),
                            (i.isMobileOpera = /opera mini|opera mobi/i.test(n));
                    }
                    for (
                        var l,
                        d,
                        c = ["transform", "perspective", "animationName"],
                        h = ["", "webkit", "Moz", "ms", "O"],
                        u = 0;
                        u < 4;
                        u++
                    ) {
                        e = h[u];
                        for (var p = 0; p < 3; p++)
                            (l = c[p]),
                                (d = e + (e ? l.charAt(0).toUpperCase() + l.slice(1) : l)),
                                !i[l] && d in t && (i[l] = d);
                        e &&
                            !i.raf &&
                            ((e = e.toLowerCase()),
                                (i.raf = window[e + "RequestAnimationFrame"]),
                                i.raf &&
                                (i.caf =
                                    window[e + "CancelAnimationFrame"] ||
                                    window[e + "CancelRequestAnimationFrame"]));
                    }
                    if (!i.raf) {
                        var f = 0;
                        (i.raf = function (t) {
                            var e = new Date().getTime(),
                                i = Math.max(0, 16 - (e - f)),
                                n = window.setTimeout(function () {
                                    t(e + i);
                                }, i);
                            return (f = e + i), n;
                        }),
                            (i.caf = function (t) {
                                clearTimeout(t);
                            });
                    }
                    return (
                        (i.svg =
                            !!document.createElementNS &&
                            !!document.createElementNS("http://www.w3.org/2000/svg", "svg")
                                .createSVGRect),
                        (s.features = i),
                        i
                    );
                },
            };
            s.detectFeatures(),
                s.features.oldIE &&
                (s.bind = function (t, e, i, n) {
                    e = e.split(" ");
                    for (
                        var s,
                        o = (n ? "detach" : "attach") + "Event",
                        a = function () {
                            i.handleEvent.call(i);
                        },
                        r = 0;
                        r < e.length;
                        r++
                    )
                        if ((s = e[r]))
                            if ("object" == typeof i && i.handleEvent) {
                                if (n) {
                                    if (!i["oldIE" + s]) return !1;
                                } else i["oldIE" + s] = a;
                                t[o]("on" + s, i["oldIE" + s]);
                            } else t[o]("on" + s, i);
                });
            var o = this,
                a = {
                    allowPanToNext: !0,
                    spacing: 0.12,
                    bgOpacity: 1,
                    mouseUsed: !1,
                    loop: !0,
                    pinchToClose: !0,
                    closeOnScroll: !0,
                    closeOnVerticalDrag: !0,
                    verticalDragRange: 0.75,
                    hideAnimationDuration: 333,
                    showAnimationDuration: 333,
                    showHideOpacity: !1,
                    focus: !0,
                    escKey: !0,
                    arrowKeys: !0,
                    mainScrollEndFriction: 0.35,
                    panEndFriction: 0.35,
                    isClickableElement: function (t) {
                        return "A" === t.tagName;
                    },
                    getDoubleTapZoom: function (t, e) {
                        return t || e.initialZoomLevel < 0.7 ? 1 : 1.33;
                    },
                    maxSpreadZoom: 1.33,
                    modal: !0,
                    scaleMode: "fit",
                };
            s.extend(a, n);
            var r,
                l,
                d,
                c,
                h,
                u,
                p,
                f,
                m,
                g,
                v,
                y,
                w,
                b,
                C,
                _,
                x,
                S,
                I,
                k,
                T,
                z,
                L,
                E,
                P,
                O,
                A,
                M,
                D,
                H,
                F,
                B,
                W,
                R,
                $,
                j,
                G,
                Y,
                N,
                q,
                U,
                V,
                X,
                Z,
                Q,
                K,
                J,
                tt,
                et,
                it,
                nt,
                st,
                ot,
                at,
                rt,
                lt,
                dt = { x: 0, y: 0 },
                ct = { x: 0, y: 0 },
                ht = { x: 0, y: 0 },
                ut = {},
                pt = 0,
                ft = {},
                mt = { x: 0, y: 0 },
                gt = 0,
                vt = !0,
                yt = [],
                wt = {},
                bt = !1,
                Ct = function (t, e) {
                    s.extend(o, e.publicMethods), yt.push(t);
                },
                _t = function (t) {
                    var e = $e();
                    return t > e - 1 ? t - e : t < 0 ? e + t : t;
                },
                xt = {},
                St = function (t, e) {
                    return xt[t] || (xt[t] = []), xt[t].push(e);
                },
                It = function (t) {
                    var e = xt[t];
                    if (e) {
                        var i = Array.prototype.slice.call(arguments);
                        i.shift();
                        for (var n = 0; n < e.length; n++) e[n].apply(o, i);
                    }
                },
                kt = function () {
                    return new Date().getTime();
                },
                Tt = function (t) {
                    (at = t), (o.bg.style.opacity = t * a.bgOpacity);
                },
                zt = function (t, e, i, n, s) {
                    (!bt || (s && s !== o.currItem)) &&
                        (n /= s ? s.fitRatio : o.currItem.fitRatio),
                        (t[z] = y + e + "px, " + i + "px" + w + " scale(" + n + ")");
                },
                Lt = function (t) {
                    et &&
                        (t &&
                            (g > o.currItem.fitRatio
                                ? bt || (Ze(o.currItem, !1, !0), (bt = !0))
                                : bt && (Ze(o.currItem), (bt = !1))),
                            zt(et, ht.x, ht.y, g));
                },
                Et = function (t) {
                    t.container &&
                        zt(
                            t.container.style,
                            t.initialPosition.x,
                            t.initialPosition.y,
                            t.initialZoomLevel,
                            t
                        );
                },
                Pt = function (t, e) {
                    e[z] = y + t + "px, 0px" + w;
                },
                Ot = function (t, e) {
                    if (!a.loop && e) {
                        var i = c + (mt.x * pt - t) / mt.x,
                            n = Math.round(t - ce.x);
                        ((i < 0 && n > 0) || (i >= $e() - 1 && n < 0)) &&
                            (t = ce.x + n * a.mainScrollEndFriction);
                    }
                    (ce.x = t), Pt(t, h);
                },
                At = function (t, e) {
                    var i = he[t] - ft[t];
                    return ct[t] + dt[t] + i - i * (e / v);
                },
                Mt = function (t, e) {
                    (t.x = e.x), (t.y = e.y), e.id && (t.id = e.id);
                },
                Dt = function (t) {
                    (t.x = Math.round(t.x)), (t.y = Math.round(t.y));
                },
                Ht = null,
                Ft = function () {
                    Ht &&
                        (s.unbind(document, "mousemove", Ft),
                            s.addClass(t, "pswp--has_mouse"),
                            (a.mouseUsed = !0),
                            It("mouseUsed")),
                        (Ht = setTimeout(function () {
                            Ht = null;
                        }, 100));
                },
                Bt = function (t, e) {
                    var i = qe(o.currItem, ut, t);
                    return e && (tt = i), i;
                },
                Wt = function (t) {
                    return t || (t = o.currItem), t.initialZoomLevel;
                },
                Rt = function (t) {
                    return t || (t = o.currItem), t.w > 0 ? a.maxSpreadZoom : 1;
                },
                $t = function (t, e, i, n) {
                    return n === o.currItem.initialZoomLevel
                        ? ((i[t] = o.currItem.initialPosition[t]), !0)
                        : ((i[t] = At(t, n)),
                            i[t] > e.min[t]
                                ? ((i[t] = e.min[t]), !0)
                                : i[t] < e.max[t] && ((i[t] = e.max[t]), !0));
                },
                jt = function (t) {
                    var e = "";
                    a.escKey && 27 === t.keyCode
                        ? (e = "close")
                        : a.arrowKeys &&
                        (37 === t.keyCode
                            ? (e = "prev")
                            : 39 === t.keyCode && (e = "next")),
                        e &&
                        (t.ctrlKey ||
                            t.altKey ||
                            t.shiftKey ||
                            t.metaKey ||
                            (t.preventDefault ? t.preventDefault() : (t.returnValue = !1),
                                o[e]()));
                },
                Gt = function (t) {
                    t && (V || U || it || G) && (t.preventDefault(), t.stopPropagation());
                },
                Yt = function () {
                    o.setScrollOffset(0, s.getScrollY());
                },
                Nt = {},
                qt = 0,
                Ut = function (t) {
                    Nt[t] && (Nt[t].raf && O(Nt[t].raf), qt--, delete Nt[t]);
                },
                Vt = function (t) {
                    Nt[t] && Ut(t), Nt[t] || (qt++, (Nt[t] = {}));
                },
                Xt = function () {
                    for (var t in Nt) Nt.hasOwnProperty(t) && Ut(t);
                },
                Zt = function (t, e, i, n, s, o, a) {
                    var r,
                        l = kt();
                    Vt(t);
                    var d = function () {
                        if (Nt[t]) {
                            if ((r = kt() - l) >= n) return Ut(t), o(i), void (a && a());
                            o((i - e) * s(r / n) + e), (Nt[t].raf = P(d));
                        }
                    };
                    d();
                },
                Qt = {
                    shout: It,
                    listen: St,
                    viewportSize: ut,
                    options: a,
                    isMainScrollAnimating: function () {
                        return it;
                    },
                    getZoomLevel: function () {
                        return g;
                    },
                    getCurrentIndex: function () {
                        return c;
                    },
                    isDragging: function () {
                        return N;
                    },
                    isZooming: function () {
                        return K;
                    },
                    setScrollOffset: function (t, e) {
                        (ft.x = t), (H = ft.y = e), It("updateScrollOffset", ft);
                    },
                    applyZoomPan: function (t, e, i, n) {
                        (ht.x = e), (ht.y = i), (g = t), Lt(n);
                    },
                    init: function () {
                        if (!r && !l) {
                            var i;
                            (o.framework = s),
                                (o.template = t),
                                (o.bg = s.getChildByClass(t, "pswp__bg")),
                                (A = t.className),
                                (r = !0),
                                (F = s.detectFeatures()),
                                (P = F.raf),
                                (O = F.caf),
                                (z = F.transform),
                                (D = F.oldIE),
                                (o.scrollWrap = s.getChildByClass(t, "pswp__scroll-wrap")),
                                (o.container = s.getChildByClass(
                                    o.scrollWrap,
                                    "pswp__container"
                                )),
                                (h = o.container.style),
                                (o.itemHolders = _ =
                                    [
                                        { el: o.container.children[0], wrap: 0, index: -1 },
                                        { el: o.container.children[1], wrap: 0, index: -1 },
                                        { el: o.container.children[2], wrap: 0, index: -1 },
                                    ]),
                                (_[0].el.style.display = _[2].el.style.display = "none"),
                                (function () {
                                    if (z) {
                                        var e = F.perspective && !E;
                                        return (
                                            (y = "translate" + (e ? "3d(" : "(")),
                                            void (w = F.perspective ? ", 0px)" : ")")
                                        );
                                    }
                                    (z = "left"),
                                        s.addClass(t, "pswp--ie"),
                                        (Pt = function (t, e) {
                                            e.left = t + "px";
                                        }),
                                        (Et = function (t) {
                                            var e = t.fitRatio > 1 ? 1 : t.fitRatio,
                                                i = t.container.style,
                                                n = e * t.w,
                                                s = e * t.h;
                                            (i.width = n + "px"),
                                                (i.height = s + "px"),
                                                (i.left = t.initialPosition.x + "px"),
                                                (i.top = t.initialPosition.y + "px");
                                        }),
                                        (Lt = function () {
                                            if (et) {
                                                var t = et,
                                                    e = o.currItem,
                                                    i = e.fitRatio > 1 ? 1 : e.fitRatio,
                                                    n = i * e.w,
                                                    s = i * e.h;
                                                (t.width = n + "px"),
                                                    (t.height = s + "px"),
                                                    (t.left = ht.x + "px"),
                                                    (t.top = ht.y + "px");
                                            }
                                        });
                                })(),
                                (m = {
                                    resize: o.updateSize,
                                    orientationchange: function () {
                                        clearTimeout(B),
                                            (B = setTimeout(function () {
                                                ut.x !== o.scrollWrap.clientWidth && o.updateSize();
                                            }, 500));
                                    },
                                    scroll: Yt,
                                    keydown: jt,
                                    click: Gt,
                                });
                            var n = F.isOldIOSPhone || F.isOldAndroid || F.isMobileOpera;
                            for (
                                (F.animationName && F.transform && !n) ||
                                (a.showAnimationDuration = a.hideAnimationDuration = 0),
                                i = 0;
                                i < yt.length;
                                i++
                            )
                                o["init" + yt[i]]();
                            if (e) (o.ui = new e(o, s)).init();
                            It("firstUpdate"),
                                (c = c || a.index || 0),
                                (isNaN(c) || c < 0 || c >= $e()) && (c = 0),
                                (o.currItem = Re(c)),
                                (F.isOldIOSPhone || F.isOldAndroid) && (vt = !1),
                                t.setAttribute("aria-hidden", "false"),
                                a.modal &&
                                (vt
                                    ? (t.style.position = "fixed")
                                    : ((t.style.position = "absolute"),
                                        (t.style.top = s.getScrollY() + "px"))),
                                void 0 === H && (It("initialLayout"), (H = M = s.getScrollY()));
                            var d = "pswp--open ";
                            for (
                                a.mainClass && (d += a.mainClass + " "),
                                a.showHideOpacity && (d += "pswp--animate_opacity "),
                                d += E ? "pswp--touch" : "pswp--notouch",
                                d += F.animationName ? " pswp--css_animation" : "",
                                d += F.svg ? " pswp--svg" : "",
                                s.addClass(t, d),
                                o.updateSize(),
                                u = -1,
                                gt = null,
                                i = 0;
                                i < 3;
                                i++
                            )
                                Pt((i + u) * mt.x, _[i].el.style);
                            D || s.bind(o.scrollWrap, f, o),
                                St("initialZoomInEnd", function () {
                                    o.setContent(_[0], c - 1),
                                        o.setContent(_[2], c + 1),
                                        (_[0].el.style.display = _[2].el.style.display = "block"),
                                        a.focus && t.focus(),
                                        s.bind(document, "keydown", o),
                                        F.transform && s.bind(o.scrollWrap, "click", o),
                                        a.mouseUsed || s.bind(document, "mousemove", Ft),
                                        s.bind(window, "resize scroll orientationchange", o),
                                        It("bindEvents");
                                }),
                                o.setContent(_[1], c),
                                o.updateCurrItem(),
                                It("afterInit"),
                                vt ||
                                (b = setInterval(function () {
                                    qt ||
                                        N ||
                                        K ||
                                        g !== o.currItem.initialZoomLevel ||
                                        o.updateSize();
                                }, 1e3)),
                                s.addClass(t, "pswp--visible");
                        }
                    },
                    close: function () {
                        r &&
                            ((r = !1),
                                (l = !0),
                                It("close"),
                                s.unbind(window, "resize scroll orientationchange", o),
                                s.unbind(window, "scroll", m.scroll),
                                s.unbind(document, "keydown", o),
                                s.unbind(document, "mousemove", Ft),
                                F.transform && s.unbind(o.scrollWrap, "click", o),
                                N && s.unbind(window, p, o),
                                clearTimeout(B),
                                It("unbindEvents"),
                                je(o.currItem, null, !0, o.destroy));
                    },
                    destroy: function () {
                        It("destroy"),
                            He && clearTimeout(He),
                            t.setAttribute("aria-hidden", "true"),
                            (t.className = A),
                            b && clearInterval(b),
                            s.unbind(o.scrollWrap, f, o),
                            s.unbind(window, "scroll", o),
                            fe(),
                            Xt(),
                            (xt = null);
                    },
                    panTo: function (t, e, i) {
                        i ||
                            (t > tt.min.x ? (t = tt.min.x) : t < tt.max.x && (t = tt.max.x),
                                e > tt.min.y ? (e = tt.min.y) : e < tt.max.y && (e = tt.max.y)),
                            (ht.x = t),
                            (ht.y = e),
                            Lt();
                    },
                    handleEvent: function (t) {
                        (t = t || window.event), m[t.type] && m[t.type](t);
                    },
                    goTo: function (t) {
                        var e = (t = _t(t)) - c;
                        (gt = e),
                            (c = t),
                            (o.currItem = Re(c)),
                            (pt -= e),
                            Ot(mt.x * pt),
                            Xt(),
                            (it = !1),
                            o.updateCurrItem();
                    },
                    next: function () {
                        o.goTo(c + 1);
                    },
                    prev: function () {
                        o.goTo(c - 1);
                    },
                    updateCurrZoomItem: function (t) {
                        if ((t && It("beforeChange", 0), _[1].el.children.length)) {
                            var e = _[1].el.children[0];
                            et = s.hasClass(e, "pswp__zoom-wrap") ? e.style : null;
                        } else et = null;
                        (tt = o.currItem.bounds),
                            (v = g = o.currItem.initialZoomLevel),
                            (ht.x = tt.center.x),
                            (ht.y = tt.center.y),
                            t && It("afterChange");
                    },
                    invalidateCurrItems: function () {
                        C = !0;
                        for (var t = 0; t < 3; t++)
                            _[t].item && (_[t].item.needsUpdate = !0);
                    },
                    updateCurrItem: function (t) {
                        if (0 !== gt) {
                            var e,
                                i = Math.abs(gt);
                            if (!(t && i < 2)) {
                                (o.currItem = Re(c)),
                                    (bt = !1),
                                    It("beforeChange", gt),
                                    i >= 3 && ((u += gt + (gt > 0 ? -3 : 3)), (i = 3));
                                for (var n = 0; n < i; n++)
                                    gt > 0
                                        ? ((e = _.shift()),
                                            (_[2] = e),
                                            u++,
                                            Pt((u + 2) * mt.x, e.el.style),
                                            o.setContent(e, c - i + n + 1 + 1))
                                        : ((e = _.pop()),
                                            _.unshift(e),
                                            u--,
                                            Pt(u * mt.x, e.el.style),
                                            o.setContent(e, c + i - n - 1 - 1));
                                if (et && 1 === Math.abs(gt)) {
                                    var s = Re(x);
                                    s.initialZoomLevel !== g && (qe(s, ut), Ze(s), Et(s));
                                }
                                (gt = 0), o.updateCurrZoomItem(), (x = c), It("afterChange");
                            }
                        }
                    },
                    updateSize: function (e) {
                        if (!vt && a.modal) {
                            var i = s.getScrollY();
                            if (
                                (H !== i && ((t.style.top = i + "px"), (H = i)),
                                    !e && wt.x === window.innerWidth && wt.y === window.innerHeight)
                            )
                                return;
                            (wt.x = window.innerWidth),
                                (wt.y = window.innerHeight),
                                (t.style.height = wt.y + "px");
                        }
                        if (
                            ((ut.x = o.scrollWrap.clientWidth),
                                (ut.y = o.scrollWrap.clientHeight),
                                Yt(),
                                (mt.x = ut.x + Math.round(ut.x * a.spacing)),
                                (mt.y = ut.y),
                                Ot(mt.x * pt),
                                It("beforeResize"),
                                void 0 !== u)
                        ) {
                            for (var n, r, l, d = 0; d < 3; d++)
                                (n = _[d]),
                                    Pt((d + u) * mt.x, n.el.style),
                                    (l = c + d - 1),
                                    a.loop && $e() > 2 && (l = _t(l)),
                                    (r = Re(l)) && (C || r.needsUpdate || !r.bounds)
                                        ? (o.cleanSlide(r),
                                            o.setContent(n, l),
                                            1 === d && ((o.currItem = r), o.updateCurrZoomItem(!0)),
                                            (r.needsUpdate = !1))
                                        : -1 === n.index && l >= 0 && o.setContent(n, l),
                                    r && r.container && (qe(r, ut), Ze(r), Et(r));
                            C = !1;
                        }
                        (v = g = o.currItem.initialZoomLevel),
                            (tt = o.currItem.bounds) &&
                            ((ht.x = tt.center.x), (ht.y = tt.center.y), Lt(!0)),
                            It("resize");
                    },
                    zoomTo: function (t, e, i, n, o) {
                        e &&
                            ((v = g),
                                (he.x = Math.abs(e.x) - ht.x),
                                (he.y = Math.abs(e.y) - ht.y),
                                Mt(ct, ht));
                        var a = Bt(t, !1),
                            r = {};
                        $t("x", a, r, t), $t("y", a, r, t);
                        var l = g,
                            d = ht.x,
                            c = ht.y;
                        Dt(r);
                        var h = function (e) {
                            1 === e
                                ? ((g = t), (ht.x = r.x), (ht.y = r.y))
                                : ((g = (t - l) * e + l),
                                    (ht.x = (r.x - d) * e + d),
                                    (ht.y = (r.y - c) * e + c)),
                                o && o(e),
                                Lt(1 === e);
                        };
                        i ? Zt("customZoomTo", 0, 1, i, n || s.easing.sine.inOut, h) : h(1);
                    },
                },
                Kt = {},
                Jt = {},
                te = {},
                ee = {},
                ie = {},
                ne = [],
                se = {},
                oe = [],
                ae = {},
                re = 0,
                le = { x: 0, y: 0 },
                de = 0,
                ce = { x: 0, y: 0 },
                he = { x: 0, y: 0 },
                ue = { x: 0, y: 0 },
                pe = function (t, e) {
                    return (
                        (ae.x = Math.abs(t.x - e.x)),
                        (ae.y = Math.abs(t.y - e.y)),
                        Math.sqrt(ae.x * ae.x + ae.y * ae.y)
                    );
                },
                fe = function () {
                    X && (O(X), (X = null));
                },
                me = function () {
                    N && ((X = P(me)), Le());
                },
                ge = function (t, e) {
                    return (
                        !(!t || t === document) &&
                        !(
                            t.getAttribute("class") &&
                            t.getAttribute("class").indexOf("pswp__scroll-wrap") > -1
                        ) &&
                        (e(t) ? t : ge(t.parentNode, e))
                    );
                },
                ve = {},
                ye = function (t, e) {
                    return (
                        (ve.prevent = !ge(t.target, a.isClickableElement)),
                        It("preventDragEvent", t, e, ve),
                        ve.prevent
                    );
                },
                we = function (t, e) {
                    return (e.x = t.pageX), (e.y = t.pageY), (e.id = t.identifier), e;
                },
                be = function (t, e, i) {
                    (i.x = 0.5 * (t.x + e.x)), (i.y = 0.5 * (t.y + e.y));
                },
                Ce = function () {
                    var t = ht.y - o.currItem.initialPosition.y;
                    return 1 - Math.abs(t / (ut.y / 2));
                },
                _e = {},
                xe = {},
                Se = [],
                Ie = function (t) {
                    for (; Se.length > 0;) Se.pop();
                    return (
                        L
                            ? ((lt = 0),
                                ne.forEach(function (t) {
                                    0 === lt ? (Se[0] = t) : 1 === lt && (Se[1] = t), lt++;
                                }))
                            : t.type.indexOf("touch") > -1
                                ? t.touches &&
                                t.touches.length > 0 &&
                                ((Se[0] = we(t.touches[0], _e)),
                                    t.touches.length > 1 && (Se[1] = we(t.touches[1], xe)))
                                : ((_e.x = t.pageX),
                                    (_e.y = t.pageY),
                                    (_e.id = ""),
                                    (Se[0] = _e)),
                        Se
                    );
                },
                ke = function (t, e) {
                    var i,
                        n,
                        s,
                        r,
                        l = ht[t] + e[t],
                        d = e[t] > 0,
                        c = ce.x + e.x,
                        h = ce.x - se.x;
                    return (
                        (i = l > tt.min[t] || l < tt.max[t] ? a.panEndFriction : 1),
                        (l = ht[t] + e[t] * i),
                        (!a.allowPanToNext && g !== o.currItem.initialZoomLevel) ||
                            (et
                                ? "h" !== nt ||
                                "x" !== t ||
                                U ||
                                (d
                                    ? (l > tt.min[t] &&
                                        ((i = a.panEndFriction),
                                            tt.min[t] - l,
                                            (n = tt.min[t] - ct[t])),
                                        (n <= 0 || h < 0) && $e() > 1
                                            ? ((r = c), h < 0 && c > se.x && (r = se.x))
                                            : tt.min.x !== tt.max.x && (s = l))
                                    : (l < tt.max[t] &&
                                        ((i = a.panEndFriction),
                                            l - tt.max[t],
                                            (n = ct[t] - tt.max[t])),
                                        (n <= 0 || h > 0) && $e() > 1
                                            ? ((r = c), h > 0 && c < se.x && (r = se.x))
                                            : tt.min.x !== tt.max.x && (s = l)))
                                : (r = c),
                                "x" !== t)
                            ? void (
                                it ||
                                Z ||
                                (g > o.currItem.fitRatio && (ht[t] += e[t] * i))
                            )
                            : (void 0 !== r && (Ot(r, !0), (Z = r !== se.x)),
                                tt.min.x !== tt.max.x &&
                                (void 0 !== s ? (ht.x = s) : Z || (ht.x += e.x * i)),
                                void 0 !== r)
                    );
                },
                Te = function (t) {
                    if (!("mousedown" === t.type && t.button > 0)) {
                        if (We) return void t.preventDefault();
                        if (!Y || "mousedown" !== t.type) {
                            if ((ye(t, !0) && t.preventDefault(), It("pointerDown"), L)) {
                                var e = s.arraySearch(ne, t.pointerId, "id");
                                e < 0 && (e = ne.length),
                                    (ne[e] = { x: t.pageX, y: t.pageY, id: t.pointerId });
                            }
                            var i = Ie(t),
                                n = i.length;
                            (Q = null),
                                Xt(),
                                (N && 1 !== n) ||
                                ((N = st = !0),
                                    s.bind(window, p, o),
                                    (j = rt = ot = G = Z = V = q = U = !1),
                                    (nt = null),
                                    It("firstTouchStart", i),
                                    Mt(ct, ht),
                                    (dt.x = dt.y = 0),
                                    Mt(ee, i[0]),
                                    Mt(ie, ee),
                                    (se.x = mt.x * pt),
                                    (oe = [{ x: ee.x, y: ee.y }]),
                                    (R = W = kt()),
                                    Bt(g, !0),
                                    fe(),
                                    me()),
                                !K &&
                                n > 1 &&
                                !it &&
                                !Z &&
                                ((v = g),
                                    (U = !1),
                                    (K = q = !0),
                                    (dt.y = dt.x = 0),
                                    Mt(ct, ht),
                                    Mt(Kt, i[0]),
                                    Mt(Jt, i[1]),
                                    be(Kt, Jt, ue),
                                    (he.x = Math.abs(ue.x) - ht.x),
                                    (he.y = Math.abs(ue.y) - ht.y),
                                    (J = pe(Kt, Jt)));
                        }
                    }
                },
                ze = function (t) {
                    if ((t.preventDefault(), L)) {
                        var e = s.arraySearch(ne, t.pointerId, "id");
                        if (e > -1) {
                            var i = ne[e];
                            (i.x = t.pageX), (i.y = t.pageY);
                        }
                    }
                    if (N) {
                        var n = Ie(t);
                        if (nt || V || K) Q = n;
                        else if (ce.x !== mt.x * pt) nt = "h";
                        else {
                            var o = Math.abs(n[0].x - ee.x) - Math.abs(n[0].y - ee.y);
                            Math.abs(o) >= 10 && ((nt = o > 0 ? "h" : "v"), (Q = n));
                        }
                    }
                },
                Le = function () {
                    if (Q) {
                        var t = Q.length;
                        if (0 !== t)
                            if (
                                (Mt(Kt, Q[0]),
                                    (te.x = Kt.x - ee.x),
                                    (te.y = Kt.y - ee.y),
                                    K && t > 1)
                            ) {
                                if (
                                    ((ee.x = Kt.x),
                                        (ee.y = Kt.y),
                                        !te.x &&
                                        !te.y &&
                                        (function (t, e) {
                                            return t.x === e.x && t.y === e.y;
                                        })(Q[1], Jt))
                                )
                                    return;
                                Mt(Jt, Q[1]), U || ((U = !0), It("zoomGestureStarted"));
                                var e = pe(Kt, Jt),
                                    i = Me(e);
                                i >
                                    o.currItem.initialZoomLevel +
                                    o.currItem.initialZoomLevel / 15 && (rt = !0);
                                var n = 1,
                                    s = Wt(),
                                    r = Rt();
                                if (i < s)
                                    if (
                                        a.pinchToClose &&
                                        !rt &&
                                        v <= o.currItem.initialZoomLevel
                                    ) {
                                        var l = 1 - (s - i) / (s / 1.2);
                                        Tt(l), It("onPinchClose", l), (ot = !0);
                                    } else
                                        (n = (s - i) / s) > 1 && (n = 1), (i = s - n * (s / 3));
                                else
                                    i > r &&
                                        ((n = (i - r) / (6 * s)) > 1 && (n = 1), (i = r + n * s));
                                n < 0 && (n = 0),
                                    e,
                                    be(Kt, Jt, le),
                                    (dt.x += le.x - ue.x),
                                    (dt.y += le.y - ue.y),
                                    Mt(ue, le),
                                    (ht.x = At("x", i)),
                                    (ht.y = At("y", i)),
                                    (j = i > g),
                                    (g = i),
                                    Lt();
                            } else {
                                if (!nt) return;
                                if (
                                    (st &&
                                        ((st = !1),
                                            Math.abs(te.x) >= 10 && (te.x -= Q[0].x - ie.x),
                                            Math.abs(te.y) >= 10 && (te.y -= Q[0].y - ie.y)),
                                        (ee.x = Kt.x),
                                        (ee.y = Kt.y),
                                        0 === te.x && 0 === te.y)
                                )
                                    return;
                                if (
                                    "v" === nt &&
                                    a.closeOnVerticalDrag &&
                                    "fit" === a.scaleMode &&
                                    g === o.currItem.initialZoomLevel
                                ) {
                                    (dt.y += te.y), (ht.y += te.y);
                                    var d = Ce();
                                    return (G = !0), It("onVerticalDrag", d), Tt(d), void Lt();
                                }
                                (function (t, e, i) {
                                    if (t - R > 50) {
                                        var n = oe.length > 2 ? oe.shift() : {};
                                        (n.x = e), (n.y = i), oe.push(n), (R = t);
                                    }
                                })(kt(), Kt.x, Kt.y),
                                    (V = !0),
                                    (tt = o.currItem.bounds),
                                    ke("x", te) || (ke("y", te), Dt(ht), Lt());
                            }
                    }
                },
                Ee = function (t) {
                    if (F.isOldAndroid) {
                        if (Y && "mouseup" === t.type) return;
                        t.type.indexOf("touch") > -1 &&
                            (clearTimeout(Y),
                                (Y = setTimeout(function () {
                                    Y = 0;
                                }, 600)));
                    }
                    var e;
                    if ((It("pointerUp"), ye(t, !1) && t.preventDefault(), L)) {
                        var i = s.arraySearch(ne, t.pointerId, "id");
                        if (i > -1)
                            if (((e = ne.splice(i, 1)[0]), navigator.pointerEnabled))
                                e.type = t.pointerType || "mouse";
                            else {
                                (e.type = { 4: "mouse", 2: "touch", 3: "pen" }[t.pointerType]),
                                    e.type || (e.type = t.pointerType || "mouse");
                            }
                    }
                    var n,
                        r = Ie(t),
                        l = r.length;
                    if (("mouseup" === t.type && (l = 0), 2 === l)) return (Q = null), !0;
                    1 === l && Mt(ie, r[0]),
                        0 !== l ||
                        nt ||
                        it ||
                        (e ||
                            ("mouseup" === t.type
                                ? (e = { x: t.pageX, y: t.pageY, type: "mouse" })
                                : t.changedTouches &&
                                t.changedTouches[0] &&
                                (e = {
                                    x: t.changedTouches[0].pageX,
                                    y: t.changedTouches[0].pageY,
                                    type: "touch",
                                })),
                            It("touchRelease", t, e));
                    var d = -1;
                    if (
                        (0 === l &&
                            ((N = !1),
                                s.unbind(window, p, o),
                                fe(),
                                K ? (d = 0) : -1 !== de && (d = kt() - de)),
                            (de = 1 === l ? kt() : -1),
                            (n = -1 !== d && d < 150 ? "zoom" : "swipe"),
                            K &&
                            l < 2 &&
                            ((K = !1),
                                1 === l && (n = "zoomPointerUp"),
                                It("zoomGestureEnded")),
                            (Q = null),
                            V || U || it || G)
                    )
                        if ((Xt(), $ || ($ = Pe()), $.calculateSwipeSpeed("x"), G)) {
                            if (Ce() < a.verticalDragRange) o.close();
                            else {
                                var c = ht.y,
                                    h = at;
                                Zt("verticalDrag", 0, 1, 300, s.easing.cubic.out, function (t) {
                                    (ht.y = (o.currItem.initialPosition.y - c) * t + c),
                                        Tt((1 - h) * t + h),
                                        Lt();
                                }),
                                    It("onVerticalDrag", 1);
                            }
                        } else {
                            if ((Z || it) && 0 === l) {
                                if (Ae(n, $)) return;
                                n = "zoomPointerUp";
                            }
                            if (!it)
                                return "swipe" !== n
                                    ? void De()
                                    : void (!Z && g > o.currItem.fitRatio && Oe($));
                        }
                },
                Pe = function () {
                    var t,
                        e,
                        i = {
                            lastFlickOffset: {},
                            lastFlickDist: {},
                            lastFlickSpeed: {},
                            slowDownRatio: {},
                            slowDownRatioReverse: {},
                            speedDecelerationRatio: {},
                            speedDecelerationRatioAbs: {},
                            distanceOffset: {},
                            backAnimDestination: {},
                            backAnimStarted: {},
                            calculateSwipeSpeed: function (n) {
                                oe.length > 1
                                    ? ((t = kt() - R + 50), (e = oe[oe.length - 2][n]))
                                    : ((t = kt() - W), (e = ie[n])),
                                    (i.lastFlickOffset[n] = ee[n] - e),
                                    (i.lastFlickDist[n] = Math.abs(i.lastFlickOffset[n])),
                                    i.lastFlickDist[n] > 20
                                        ? (i.lastFlickSpeed[n] = i.lastFlickOffset[n] / t)
                                        : (i.lastFlickSpeed[n] = 0),
                                    Math.abs(i.lastFlickSpeed[n]) < 0.1 &&
                                    (i.lastFlickSpeed[n] = 0),
                                    (i.slowDownRatio[n] = 0.95),
                                    (i.slowDownRatioReverse[n] = 1 - i.slowDownRatio[n]),
                                    (i.speedDecelerationRatio[n] = 1);
                            },
                            calculateOverBoundsAnimOffset: function (t, e) {
                                i.backAnimStarted[t] ||
                                    (ht[t] > tt.min[t]
                                        ? (i.backAnimDestination[t] = tt.min[t])
                                        : ht[t] < tt.max[t] &&
                                        (i.backAnimDestination[t] = tt.max[t]),
                                        void 0 !== i.backAnimDestination[t] &&
                                        ((i.slowDownRatio[t] = 0.7),
                                            (i.slowDownRatioReverse[t] = 1 - i.slowDownRatio[t]),
                                            i.speedDecelerationRatioAbs[t] < 0.05 &&
                                            ((i.lastFlickSpeed[t] = 0),
                                                (i.backAnimStarted[t] = !0),
                                                Zt(
                                                    "bounceZoomPan" + t,
                                                    ht[t],
                                                    i.backAnimDestination[t],
                                                    e || 300,
                                                    s.easing.sine.out,
                                                    function (e) {
                                                        (ht[t] = e), Lt();
                                                    }
                                                ))));
                            },
                            calculateAnimOffset: function (t) {
                                i.backAnimStarted[t] ||
                                    ((i.speedDecelerationRatio[t] =
                                        i.speedDecelerationRatio[t] *
                                        (i.slowDownRatio[t] +
                                            i.slowDownRatioReverse[t] -
                                            (i.slowDownRatioReverse[t] * i.timeDiff) / 10)),
                                        (i.speedDecelerationRatioAbs[t] = Math.abs(
                                            i.lastFlickSpeed[t] * i.speedDecelerationRatio[t]
                                        )),
                                        (i.distanceOffset[t] =
                                            i.lastFlickSpeed[t] *
                                            i.speedDecelerationRatio[t] *
                                            i.timeDiff),
                                        (ht[t] += i.distanceOffset[t]));
                            },
                            panAnimLoop: function () {
                                if (
                                    Nt.zoomPan &&
                                    ((Nt.zoomPan.raf = P(i.panAnimLoop)),
                                        (i.now = kt()),
                                        (i.timeDiff = i.now - i.lastNow),
                                        (i.lastNow = i.now),
                                        i.calculateAnimOffset("x"),
                                        i.calculateAnimOffset("y"),
                                        Lt(),
                                        i.calculateOverBoundsAnimOffset("x"),
                                        i.calculateOverBoundsAnimOffset("y"),
                                        i.speedDecelerationRatioAbs.x < 0.05 &&
                                        i.speedDecelerationRatioAbs.y < 0.05)
                                )
                                    return (
                                        (ht.x = Math.round(ht.x)),
                                        (ht.y = Math.round(ht.y)),
                                        Lt(),
                                        void Ut("zoomPan")
                                    );
                            },
                        };
                    return i;
                },
                Oe = function (t) {
                    return (
                        t.calculateSwipeSpeed("y"),
                        (tt = o.currItem.bounds),
                        (t.backAnimDestination = {}),
                        (t.backAnimStarted = {}),
                        Math.abs(t.lastFlickSpeed.x) <= 0.05 &&
                            Math.abs(t.lastFlickSpeed.y) <= 0.05
                            ? ((t.speedDecelerationRatioAbs.x =
                                t.speedDecelerationRatioAbs.y =
                                0),
                                t.calculateOverBoundsAnimOffset("x"),
                                t.calculateOverBoundsAnimOffset("y"),
                                !0)
                            : (Vt("zoomPan"), (t.lastNow = kt()), void t.panAnimLoop())
                    );
                },
                Ae = function (t, e) {
                    var i, n, r;
                    if ((it || (re = c), "swipe" === t)) {
                        var l = ee.x - ie.x,
                            d = e.lastFlickDist.x < 10;
                        l > 30 && (d || e.lastFlickOffset.x > 20)
                            ? (n = -1)
                            : l < -30 && (d || e.lastFlickOffset.x < -20) && (n = 1);
                    }
                    n &&
                        ((c += n) < 0
                            ? ((c = a.loop ? $e() - 1 : 0), (r = !0))
                            : c >= $e() && ((c = a.loop ? 0 : $e() - 1), (r = !0)),
                            (r && !a.loop) || ((gt += n), (pt -= n), (i = !0)));
                    var h,
                        u = mt.x * pt,
                        p = Math.abs(u - ce.x);
                    return (
                        i || u > ce.x == e.lastFlickSpeed.x > 0
                            ? ((h =
                                Math.abs(e.lastFlickSpeed.x) > 0
                                    ? p / Math.abs(e.lastFlickSpeed.x)
                                    : 333),
                                (h = Math.min(h, 400)),
                                (h = Math.max(h, 250)))
                            : (h = 333),
                        re === c && (i = !1),
                        (it = !0),
                        It("mainScrollAnimStart"),
                        Zt("mainScroll", ce.x, u, h, s.easing.cubic.out, Ot, function () {
                            Xt(),
                                (it = !1),
                                (re = -1),
                                (i || re !== c) && o.updateCurrItem(),
                                It("mainScrollAnimComplete");
                        }),
                        i && o.updateCurrItem(!0),
                        i
                    );
                },
                Me = function (t) {
                    return (1 / J) * t * v;
                },
                De = function () {
                    var t = g,
                        e = Wt(),
                        i = Rt();
                    g < e ? (t = e) : g > i && (t = i);
                    var n,
                        a = at;
                    return ot && !j && !rt && g < e
                        ? (o.close(), !0)
                        : (ot &&
                            (n = function (t) {
                                Tt((1 - a) * t + a);
                            }),
                            o.zoomTo(t, 0, 200, s.easing.cubic.out, n),
                            !0);
                };
            Ct("Gestures", {
                publicMethods: {
                    initGestures: function () {
                        var t = function (t, e, i, n, s) {
                            (S = t + e), (I = t + i), (k = t + n), (T = s ? t + s : "");
                        };
                        (L = F.pointerEvent) && F.touch && (F.touch = !1),
                            L
                                ? navigator.pointerEnabled
                                    ? t("pointer", "down", "move", "up", "cancel")
                                    : t("MSPointer", "Down", "Move", "Up", "Cancel")
                                : F.touch
                                    ? (t("touch", "start", "move", "end", "cancel"), (E = !0))
                                    : t("mouse", "down", "move", "up"),
                            (p = I + " " + k + " " + T),
                            (f = S),
                            L &&
                            !E &&
                            (E =
                                navigator.maxTouchPoints > 1 ||
                                navigator.msMaxTouchPoints > 1),
                            (o.likelyTouchDevice = E),
                            (m[S] = Te),
                            (m[I] = ze),
                            (m[k] = Ee),
                            T && (m[T] = m[k]),
                            F.touch &&
                            ((f += " mousedown"),
                                (p += " mousemove mouseup"),
                                (m.mousedown = m[S]),
                                (m.mousemove = m[I]),
                                (m.mouseup = m[k])),
                            E || (a.allowPanToNext = !1);
                    },
                },
            });
            var He,
                Fe,
                Be,
                We,
                Re,
                $e,
                je = function (e, i, n, r) {
                    var l;
                    He && clearTimeout(He),
                        (We = !0),
                        (Be = !0),
                        e.initialLayout
                            ? ((l = e.initialLayout), (e.initialLayout = null))
                            : (l = a.getThumbBoundsFn && a.getThumbBoundsFn(c));
                    var h = n ? a.hideAnimationDuration : a.showAnimationDuration,
                        u = function () {
                            Ut("initialZoom"),
                                n
                                    ? (o.template.removeAttribute("style"),
                                        o.bg.removeAttribute("style"))
                                    : (Tt(1),
                                        i && (i.style.display = "block"),
                                        s.addClass(t, "pswp--animated-in"),
                                        It("initialZoom" + (n ? "OutEnd" : "InEnd"))),
                                r && r(),
                                (We = !1);
                        };
                    if (!h || !l || void 0 === l.x)
                        return (
                            It("initialZoom" + (n ? "Out" : "In")),
                            (g = e.initialZoomLevel),
                            Mt(ht, e.initialPosition),
                            Lt(),
                            (t.style.opacity = n ? 0 : 1),
                            Tt(1),
                            void (h
                                ? setTimeout(function () {
                                    u();
                                }, h)
                                : u())
                        );
                    !(function () {
                        var i = d,
                            r = !o.currItem.src || o.currItem.loadError || a.showHideOpacity;
                        e.miniImg && (e.miniImg.style.webkitBackfaceVisibility = "hidden"),
                            n ||
                            ((g = l.w / e.w),
                                (ht.x = l.x),
                                (ht.y = l.y - M),
                                (o[r ? "template" : "bg"].style.opacity = 0.001),
                                Lt()),
                            Vt("initialZoom"),
                            n && !i && s.removeClass(t, "pswp--animated-in"),
                            r &&
                            (n
                                ? s[(i ? "remove" : "add") + "Class"](
                                    t,
                                    "pswp--animate_opacity"
                                )
                                : setTimeout(function () {
                                    s.addClass(t, "pswp--animate_opacity");
                                }, 30)),
                            (He = setTimeout(
                                function () {
                                    if ((It("initialZoom" + (n ? "Out" : "In")), n)) {
                                        var o = l.w / e.w,
                                            a = { x: ht.x, y: ht.y },
                                            d = g,
                                            c = at,
                                            p = function (e) {
                                                1 === e
                                                    ? ((g = o), (ht.x = l.x), (ht.y = l.y - H))
                                                    : ((g = (o - d) * e + d),
                                                        (ht.x = (l.x - a.x) * e + a.x),
                                                        (ht.y = (l.y - H - a.y) * e + a.y)),
                                                    Lt(),
                                                    r ? (t.style.opacity = 1 - e) : Tt(c - e * c);
                                            };
                                        i
                                            ? Zt("initialZoom", 0, 1, h, s.easing.cubic.out, p, u)
                                            : (p(1), (He = setTimeout(u, h + 20)));
                                    } else
                                        (g = e.initialZoomLevel),
                                            Mt(ht, e.initialPosition),
                                            Lt(),
                                            Tt(1),
                                            r ? (t.style.opacity = 1) : Tt(1),
                                            (He = setTimeout(u, h + 20));
                                },
                                n ? 25 : 90
                            ));
                    })();
                },
                Ge = {},
                Ye = [],
                Ne = {
                    index: 0,
                    errorMsg:
                        '<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',
                    forceProgressiveLoading: !1,
                    preload: [1, 1],
                    getNumItemsFn: function () {
                        return Fe.length;
                    },
                },
                qe = function (t, e, i) {
                    if (t.src && !t.loadError) {
                        var n = !i;
                        if (
                            (n &&
                                (t.vGap || (t.vGap = { top: 0, bottom: 0 }),
                                    It("parseVerticalMargin", t)),
                                (Ge.x = e.x),
                                (Ge.y = e.y - t.vGap.top - t.vGap.bottom),
                                n)
                        ) {
                            var s = Ge.x / t.w,
                                o = Ge.y / t.h;
                            t.fitRatio = s < o ? s : o;
                            var r = a.scaleMode;
                            "orig" === r ? (i = 1) : "fit" === r && (i = t.fitRatio),
                                i > 1 && (i = 1),
                                (t.initialZoomLevel = i),
                                t.bounds ||
                                (t.bounds = {
                                    center: { x: 0, y: 0 },
                                    max: { x: 0, y: 0 },
                                    min: { x: 0, y: 0 },
                                });
                        }
                        if (!i) return;
                        return (
                            (function (t, e, i) {
                                var n = t.bounds;
                                (n.center.x = Math.round((Ge.x - e) / 2)),
                                    (n.center.y = Math.round((Ge.y - i) / 2) + t.vGap.top),
                                    (n.max.x = e > Ge.x ? Math.round(Ge.x - e) : n.center.x),
                                    (n.max.y =
                                        i > Ge.y ? Math.round(Ge.y - i) + t.vGap.top : n.center.y),
                                    (n.min.x = e > Ge.x ? 0 : n.center.x),
                                    (n.min.y = i > Ge.y ? t.vGap.top : n.center.y);
                            })(t, t.w * i, t.h * i),
                            n &&
                            i === t.initialZoomLevel &&
                            (t.initialPosition = t.bounds.center),
                            t.bounds
                        );
                    }
                    return (
                        (t.w = t.h = 0),
                        (t.initialZoomLevel = t.fitRatio = 1),
                        (t.bounds = {
                            center: { x: 0, y: 0 },
                            max: { x: 0, y: 0 },
                            min: { x: 0, y: 0 },
                        }),
                        (t.initialPosition = t.bounds.center),
                        t.bounds
                    );
                },
                Ue = function (t, e, i, n, s, a) {
                    e.loadError ||
                        (n &&
                            ((e.imageAppended = !0),
                                Ze(e, n, e === o.currItem && bt),
                                i.appendChild(n),
                                a &&
                                setTimeout(function () {
                                    e &&
                                        e.loaded &&
                                        e.placeholder &&
                                        ((e.placeholder.style.display = "none"),
                                            (e.placeholder = null));
                                }, 500)));
                },
                Ve = function (t) {
                    (t.loading = !0), (t.loaded = !1);
                    var e = (t.img = s.createEl("pswp__img", "img")),
                        i = function () {
                            (t.loading = !1),
                                (t.loaded = !0),
                                t.loadComplete ? t.loadComplete(t) : (t.img = null),
                                (e.onload = e.onerror = null),
                                (e = null);
                        };
                    return (
                        (e.onload = i),
                        (e.onerror = function () {
                            (t.loadError = !0), i();
                        }),
                        (e.src = t.src),
                        e
                    );
                },
                Xe = function (t, e) {
                    if (t.src && t.loadError && t.container)
                        return (
                            e && (t.container.innerHTML = ""),
                            (t.container.innerHTML = a.errorMsg.replace("%url%", t.src)),
                            !0
                        );
                },
                Ze = function (t, e, i) {
                    if (t.src) {
                        e || (e = t.container.lastChild);
                        var n = i ? t.w : Math.round(t.w * t.fitRatio),
                            s = i ? t.h : Math.round(t.h * t.fitRatio);
                        t.placeholder &&
                            !t.loaded &&
                            ((t.placeholder.style.width = n + "px"),
                                (t.placeholder.style.height = s + "px")),
                            (e.style.width = n + "px"),
                            (e.style.height = s + "px");
                    }
                },
                Qe = function () {
                    if (Ye.length) {
                        for (var t, e = 0; e < Ye.length; e++)
                            (t = Ye[e]).holder.index === t.index &&
                                Ue(t.index, t.item, t.baseDiv, t.img, 0, t.clearPlaceholder);
                        Ye = [];
                    }
                };
            Ct("Controller", {
                publicMethods: {
                    lazyLoadItem: function (t) {
                        t = _t(t);
                        var e = Re(t);
                        e &&
                            ((!e.loaded && !e.loading) || C) &&
                            (It("gettingData", t, e), e.src && Ve(e));
                    },
                    initController: function () {
                        s.extend(a, Ne, !0),
                            (o.items = Fe = i),
                            (Re = o.getItemAt),
                            ($e = a.getNumItemsFn),
                            a.loop,
                            $e() < 3 && (a.loop = !1),
                            St("beforeChange", function (t) {
                                var e,
                                    i = a.preload,
                                    n = null === t || t >= 0,
                                    s = Math.min(i[0], $e()),
                                    r = Math.min(i[1], $e());
                                for (e = 1; e <= (n ? r : s); e++) o.lazyLoadItem(c + e);
                                for (e = 1; e <= (n ? s : r); e++) o.lazyLoadItem(c - e);
                            }),
                            St("initialLayout", function () {
                                o.currItem.initialLayout =
                                    a.getThumbBoundsFn && a.getThumbBoundsFn(c);
                            }),
                            St("mainScrollAnimComplete", Qe),
                            St("initialZoomInEnd", Qe),
                            St("destroy", function () {
                                for (var t, e = 0; e < Fe.length; e++)
                                    (t = Fe[e]).container && (t.container = null),
                                        t.placeholder && (t.placeholder = null),
                                        t.img && (t.img = null),
                                        t.preloader && (t.preloader = null),
                                        t.loadError && (t.loaded = t.loadError = !1);
                                Ye = null;
                            });
                    },
                    getItemAt: function (t) {
                        return t >= 0 && void 0 !== Fe[t] && Fe[t];
                    },
                    allowProgressiveImg: function () {
                        return (
                            a.forceProgressiveLoading ||
                            !E ||
                            a.mouseUsed ||
                            screen.width > 1200
                        );
                    },
                    setContent: function (t, e) {
                        a.loop && (e = _t(e));
                        var i = o.getItemAt(t.index);
                        i && (i.container = null);
                        var n,
                            l = o.getItemAt(e);
                        if (l) {
                            It("gettingData", e, l), (t.index = e), (t.item = l);
                            var d = (l.container = s.createEl("pswp__zoom-wrap"));
                            if (
                                (!l.src &&
                                    l.html &&
                                    (l.html.tagName
                                        ? d.appendChild(l.html)
                                        : (d.innerHTML = l.html)),
                                    Xe(l),
                                    qe(l, ut),
                                    !l.src || l.loadError || l.loaded)
                            )
                                l.src &&
                                    !l.loadError &&
                                    (((n = s.createEl("pswp__img", "img")).style.opacity = 1),
                                        (n.src = l.src),
                                        Ze(l, n),
                                        Ue(0, l, d, n));
                            else {
                                if (
                                    ((l.loadComplete = function (i) {
                                        if (r) {
                                            if (t && t.index === e) {
                                                if (Xe(i, !0))
                                                    return (
                                                        (i.loadComplete = i.img = null),
                                                        qe(i, ut),
                                                        Et(i),
                                                        void (t.index === c && o.updateCurrZoomItem())
                                                    );
                                                i.imageAppended
                                                    ? !We &&
                                                    i.placeholder &&
                                                    ((i.placeholder.style.display = "none"),
                                                        (i.placeholder = null))
                                                    : F.transform && (it || We)
                                                        ? Ye.push({
                                                            item: i,
                                                            baseDiv: d,
                                                            img: i.img,
                                                            index: e,
                                                            holder: t,
                                                            clearPlaceholder: !0,
                                                        })
                                                        : Ue(0, i, d, i.img, 0, !0);
                                            }
                                            (i.loadComplete = null),
                                                (i.img = null),
                                                It("imageLoadComplete", e, i);
                                        }
                                    }),
                                        s.features.transform)
                                ) {
                                    var h = "pswp__img pswp__img--placeholder";
                                    h += l.msrc ? "" : " pswp__img--placeholder--blank";
                                    var u = s.createEl(h, l.msrc ? "img" : "");
                                    l.msrc && (u.src = l.msrc),
                                        Ze(l, u),
                                        d.appendChild(u),
                                        (l.placeholder = u);
                                }
                                l.loading || Ve(l),
                                    o.allowProgressiveImg() &&
                                    (!Be && F.transform
                                        ? Ye.push({
                                            item: l,
                                            baseDiv: d,
                                            img: l.img,
                                            index: e,
                                            holder: t,
                                        })
                                        : Ue(0, l, d, l.img, 0, !0));
                            }
                            Be || e !== c ? Et(l) : ((et = d.style), je(l, n || l.img)),
                                (t.el.innerHTML = ""),
                                t.el.appendChild(d);
                        } else t.el.innerHTML = "";
                    },
                    cleanSlide: function (t) {
                        t.img && (t.img.onload = t.img.onerror = null),
                            (t.loaded = t.loading = t.img = t.imageAppended = !1);
                    },
                },
            });
            var Ke,
                Je,
                ti = {},
                ei = function (t, e, i) {
                    var n = document.createEvent("CustomEvent"),
                        s = {
                            origEvent: t,
                            target: t.target,
                            releasePoint: e,
                            pointerType: i || "touch",
                        };
                    n.initCustomEvent("pswpTap", !0, !0, s), t.target.dispatchEvent(n);
                };
            Ct("Tap", {
                publicMethods: {
                    initTap: function () {
                        St("firstTouchStart", o.onTapStart),
                            St("touchRelease", o.onTapRelease),
                            St("destroy", function () {
                                (ti = {}), (Ke = null);
                            });
                    },
                    onTapStart: function (t) {
                        t.length > 1 && (clearTimeout(Ke), (Ke = null));
                    },
                    onTapRelease: function (t, e) {
                        if (e && !V && !q && !qt) {
                            var i = e;
                            if (
                                Ke &&
                                (clearTimeout(Ke),
                                    (Ke = null),
                                    (function (t, e) {
                                        return Math.abs(t.x - e.x) < 25 && Math.abs(t.y - e.y) < 25;
                                    })(i, ti))
                            )
                                return void It("doubleTap", i);
                            if ("mouse" === e.type) return void ei(t, e, "mouse");
                            if (
                                "BUTTON" === t.target.tagName.toUpperCase() ||
                                s.hasClass(t.target, "pswp__single-tap")
                            )
                                return void ei(t, e);
                            Mt(ti, i),
                                (Ke = setTimeout(function () {
                                    ei(t, e), (Ke = null);
                                }, 300));
                        }
                    },
                },
            }),
                Ct("DesktopZoom", {
                    publicMethods: {
                        initDesktopZoom: function () {
                            D ||
                                (E
                                    ? St("mouseUsed", function () {
                                        o.setupDesktopZoom();
                                    })
                                    : o.setupDesktopZoom(!0));
                        },
                        setupDesktopZoom: function (e) {
                            Je = {};
                            var i = "wheel mousewheel DOMMouseScroll";
                            St("bindEvents", function () {
                                s.bind(t, i, o.handleMouseWheel);
                            }),
                                St("unbindEvents", function () {
                                    Je && s.unbind(t, i, o.handleMouseWheel);
                                }),
                                (o.mouseZoomedIn = !1);
                            var n,
                                a = function () {
                                    o.mouseZoomedIn &&
                                        (s.removeClass(t, "pswp--zoomed-in"),
                                            (o.mouseZoomedIn = !1)),
                                        g < 1
                                            ? s.addClass(t, "pswp--zoom-allowed")
                                            : s.removeClass(t, "pswp--zoom-allowed"),
                                        r();
                                },
                                r = function () {
                                    n && (s.removeClass(t, "pswp--dragging"), (n = !1));
                                };
                            St("resize", a),
                                St("afterChange", a),
                                St("pointerDown", function () {
                                    o.mouseZoomedIn &&
                                        ((n = !0), s.addClass(t, "pswp--dragging"));
                                }),
                                St("pointerUp", r),
                                e || a();
                        },
                        handleMouseWheel: function (t) {
                            if (g <= o.currItem.fitRatio)
                                return (
                                    a.modal &&
                                    (!a.closeOnScroll || qt || N
                                        ? t.preventDefault()
                                        : z && Math.abs(t.deltaY) > 2 && ((d = !0), o.close())),
                                    !0
                                );
                            if ((t.stopPropagation(), (Je.x = 0), "deltaX" in t))
                                1 === t.deltaMode
                                    ? ((Je.x = 18 * t.deltaX), (Je.y = 18 * t.deltaY))
                                    : ((Je.x = t.deltaX), (Je.y = t.deltaY));
                            else if ("wheelDelta" in t)
                                t.wheelDeltaX && (Je.x = -0.16 * t.wheelDeltaX),
                                    t.wheelDeltaY
                                        ? (Je.y = -0.16 * t.wheelDeltaY)
                                        : (Je.y = -0.16 * t.wheelDelta);
                            else {
                                if (!("detail" in t)) return;
                                Je.y = t.detail;
                            }
                            Bt(g, !0);
                            var e = ht.x - Je.x,
                                i = ht.y - Je.y;
                            (a.modal ||
                                (e <= tt.min.x &&
                                    e >= tt.max.x &&
                                    i <= tt.min.y &&
                                    i >= tt.max.y)) &&
                                t.preventDefault(),
                                o.panTo(e, i);
                        },
                        toggleDesktopZoom: function (e) {
                            e = e || { x: ut.x / 2 + ft.x, y: ut.y / 2 + ft.y };
                            var i = a.getDoubleTapZoom(!0, o.currItem),
                                n = g === i;
                            (o.mouseZoomedIn = !n),
                                o.zoomTo(n ? o.currItem.initialZoomLevel : i, e, 333),
                                s[(n ? "remove" : "add") + "Class"](t, "pswp--zoomed-in");
                        },
                    },
                });
            var ii,
                ni,
                si,
                oi,
                ai,
                ri,
                li,
                di,
                ci,
                hi,
                ui,
                pi,
                fi = { history: !0, galleryUID: 1 },
                mi = function () {
                    return ui.hash.substring(1);
                },
                gi = function () {
                    ii && clearTimeout(ii), si && clearTimeout(si);
                },
                vi = function () {
                    var t = mi(),
                        e = {};
                    if (t.length < 5) return e;
                    var i,
                        n = t.split("&");
                    for (i = 0; i < n.length; i++)
                        if (n[i]) {
                            var s = n[i].split("=");
                            s.length < 2 || (e[s[0]] = s[1]);
                        }
                    if (a.galleryPIDs) {
                        var o = e.pid;
                        for (e.pid = 0, i = 0; i < Fe.length; i++)
                            if (Fe[i].pid === o) {
                                e.pid = i;
                                break;
                            }
                    } else e.pid = parseInt(e.pid, 10) - 1;
                    return e.pid < 0 && (e.pid = 0), e;
                },
                yi = function () {
                    if ((si && clearTimeout(si), qt || N)) si = setTimeout(yi, 500);
                    else {
                        oi ? clearTimeout(ni) : (oi = !0);
                        var t = c + 1,
                            e = Re(c);
                        e.hasOwnProperty("pid") && (t = e.pid);
                        var i = li + "&gid=" + a.galleryUID + "&pid=" + t;
                        di || (-1 === ui.hash.indexOf(i) && (hi = !0));
                        var n = ui.href.split("#")[0] + "#" + i;
                        pi
                            ? "#" + i !== window.location.hash &&
                            history[di ? "replaceState" : "pushState"](
                                "",
                                document.title,
                                n
                            )
                            : di
                                ? ui.replace(n)
                                : (ui.hash = i),
                            (di = !0),
                            (ni = setTimeout(function () {
                                oi = !1;
                            }, 60));
                    }
                };
            Ct("History", {
                publicMethods: {
                    initHistory: function () {
                        if ((s.extend(a, fi, !0), a.history)) {
                            (ui = window.location),
                                (hi = !1),
                                (ci = !1),
                                (di = !1),
                                (li = mi()),
                                (pi = "pushState" in history),
                                li.indexOf("gid=") > -1 &&
                                (li = (li = li.split("&gid=")[0]).split("?gid=")[0]),
                                St("afterChange", o.updateURL),
                                St("unbindEvents", function () {
                                    s.unbind(window, "hashchange", o.onHashChange);
                                });
                            var t = function () {
                                (ri = !0),
                                    ci ||
                                    (hi
                                        ? history.back()
                                        : li
                                            ? (ui.hash = li)
                                            : pi
                                                ? history.pushState(
                                                    "",
                                                    document.title,
                                                    ui.pathname + ui.search
                                                )
                                                : (ui.hash = "")),
                                    gi();
                            };
                            St("unbindEvents", function () {
                                d && t();
                            }),
                                St("destroy", function () {
                                    ri || t();
                                }),
                                St("firstUpdate", function () {
                                    c = vi().pid;
                                });
                            var e = li.indexOf("pid=");
                            e > -1 &&
                                "&" === (li = li.substring(0, e)).slice(-1) &&
                                (li = li.slice(0, -1)),
                                setTimeout(function () {
                                    r && s.bind(window, "hashchange", o.onHashChange);
                                }, 40);
                        }
                    },
                    onHashChange: function () {
                        return mi() === li
                            ? ((ci = !0), void o.close())
                            : void (oi || ((ai = !0), o.goTo(vi().pid), (ai = !1)));
                    },
                    updateURL: function () {
                        gi(), ai || (di ? (ii = setTimeout(yi, 800)) : yi());
                    },
                },
            }),
                s.extend(o, Qt);
        };
    }),
    (function (t, e) {
        "function" == typeof define && define.amd
            ? define(e)
            : "object" == typeof exports
                ? (module.exports = e())
                : (t.PhotoSwipeUI_Default = e());
    })(this, function () {
        "use strict";
        return function (t, e) {
            var i,
                n,
                s,
                o,
                a,
                r,
                l,
                d,
                c,
                h,
                u,
                p,
                f,
                m,
                g,
                v,
                y,
                w,
                b = this,
                C = !1,
                _ = !0,
                x = !0,
                S = {
                    barsSize: { top: 44, bottom: "auto" },
                    closeElClasses: ["item", "caption", "zoom-wrap", "ui", "top-bar"],
                    timeToIdle: 4e3,
                    timeToIdleOutside: 1e3,
                    loadingIndicatorDelay: 1e3,
                    addCaptionHTMLFn: function (t, e) {
                        return t.title
                            ? ((e.children[0].innerHTML = t.title), !0)
                            : ((e.children[0].innerHTML = ""), !1);
                    },
                    closeEl: !0,
                    captionEl: !0,
                    fullscreenEl: !0,
                    zoomEl: !0,
                    shareEl: !0,
                    counterEl: !0,
                    arrowEl: !0,
                    preloaderEl: !0,
                    tapToClose: !1,
                    tapToToggleControls: !0,
                    clickToCloseNonZoomable: !0,
                    shareButtons: [
                        {
                            id: "facebook",
                            label: "Share on Facebook",
                            url: "https://www.facebook.com/sharer/sharer.php?u={{url}}",
                        },
                        {
                            id: "twitter",
                            label: "Tweet",
                            url: "https://twitter.com/intent/tweet?text={{text}}&url={{url}}",
                        },
                        {
                            id: "pinterest",
                            label: "Pin it",
                            url: "http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}",
                        },
                        {
                            id: "download",
                            label: "Download image",
                            url: "{{raw_image_url}}",
                            download: !0,
                        },
                    ],
                    getImageURLForShare: function () {
                        return t.currItem.src || "";
                    },
                    getPageURLForShare: function () {
                        return window.location.href;
                    },
                    getTextForShare: function () {
                        return t.currItem.title || "";
                    },
                    indexIndicatorSep: " / ",
                    fitControlsWidth: 1200,
                },
                I = function (t) {
                    if (v) return !0;
                    (t = t || window.event), g.timeToIdle && g.mouseUsed && !c && D();
                    for (
                        var i,
                        n,
                        s = (t.target || t.srcElement).getAttribute("class") || "",
                        o = 0;
                        o < W.length;
                        o++
                    )
                        (i = W[o]).onTap &&
                            s.indexOf("pswp__" + i.name) > -1 &&
                            (i.onTap(), (n = !0));
                    if (n) {
                        t.stopPropagation && t.stopPropagation(), (v = !0);
                        var a = e.features.isOldAndroid ? 600 : 30;
                        setTimeout(function () {
                            v = !1;
                        }, a);
                    }
                },
                k = function () {
                    return (
                        !t.likelyTouchDevice ||
                        g.mouseUsed ||
                        screen.width > g.fitControlsWidth
                    );
                },
                T = function (t, i, n) {
                    e[(n ? "add" : "remove") + "Class"](t, "pswp__" + i);
                },
                z = function () {
                    var t = 1 === g.getNumItemsFn();
                    t !== m && (T(n, "ui--one-slide", t), (m = t));
                },
                L = function () {
                    T(l, "share-modal--hidden", x);
                },
                E = function () {
                    return (
                        (x = !x)
                            ? (e.removeClass(l, "pswp__share-modal--fade-in"),
                                setTimeout(function () {
                                    x && L();
                                }, 300))
                            : (L(),
                                setTimeout(function () {
                                    x || e.addClass(l, "pswp__share-modal--fade-in");
                                }, 30)),
                        x || O(),
                        !1
                    );
                },
                P = function (e) {
                    var i = (e = e || window.event).target || e.srcElement;
                    return (
                        t.shout("shareLinkClick", e, i),
                        !(
                            !i.href ||
                            (!i.hasAttribute("download") &&
                                (window.open(
                                    i.href,
                                    "pswp_share",
                                    "scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,top=100,left=" +
                                    (window.screen ? Math.round(screen.width / 2 - 275) : 100)
                                ),
                                    x || E(),
                                    1))
                        )
                    );
                },
                O = function () {
                    for (var t, e, i, n, s = "", o = 0; o < g.shareButtons.length; o++)
                        (t = g.shareButtons[o]),
                            (e = g.getImageURLForShare(t)),
                            (i = g.getPageURLForShare(t)),
                            (n = g.getTextForShare(t)),
                            (s +=
                                '<a href="' +
                                t.url
                                    .replace("{{url}}", encodeURIComponent(i))
                                    .replace("{{image_url}}", encodeURIComponent(e))
                                    .replace("{{raw_image_url}}", e)
                                    .replace("{{text}}", encodeURIComponent(n)) +
                                '" target="_blank" class="pswp__share--' +
                                t.id +
                                '"' +
                                (t.download ? "download" : "") +
                                ">" +
                                t.label +
                                "</a>"),
                            g.parseShareButtonOut && (s = g.parseShareButtonOut(t, s));
                    (l.children[0].innerHTML = s), (l.children[0].onclick = P);
                },
                A = function (t) {
                    for (var i = 0; i < g.closeElClasses.length; i++)
                        if (e.hasClass(t, "pswp__" + g.closeElClasses[i])) return !0;
                },
                M = 0,
                D = function () {
                    clearTimeout(w), (M = 0), c && b.setIdle(!1);
                },
                H = function (t) {
                    var e = (t = t || window.event).relatedTarget || t.toElement;
                    (e && "HTML" !== e.nodeName) ||
                        (clearTimeout(w),
                            (w = setTimeout(function () {
                                b.setIdle(!0);
                            }, g.timeToIdleOutside)));
                },
                F = function (t) {
                    p !== t && (T(u, "preloader--active", !t), (p = t));
                },
                B = function (t) {
                    var i = t.vGap;
                    if (k()) {
                        var a = g.barsSize;
                        if (g.captionEl && "auto" === a.bottom)
                            if (
                                (o ||
                                    ((o = e.createEl(
                                        "pswp__caption pswp__caption--fake"
                                    )).appendChild(e.createEl("pswp__caption__center")),
                                        n.insertBefore(o, s),
                                        e.addClass(n, "pswp__ui--fit")),
                                    g.addCaptionHTMLFn(t, o, !0))
                            ) {
                                var r = o.clientHeight;
                                i.bottom = parseInt(r, 10) || 44;
                            } else i.bottom = a.top;
                        else i.bottom = "auto" === a.bottom ? 0 : a.bottom;
                        i.top = a.top;
                    } else i.top = i.bottom = 0;
                },
                W = [
                    {
                        name: "caption",
                        option: "captionEl",
                        onInit: function (t) {
                            s = t;
                        },
                    },
                    {
                        name: "share-modal",
                        option: "shareEl",
                        onInit: function (t) {
                            l = t;
                        },
                        onTap: function () {
                            E();
                        },
                    },
                    {
                        name: "button--share",
                        option: "shareEl",
                        onInit: function (t) {
                            r = t;
                        },
                        onTap: function () {
                            E();
                        },
                    },
                    {
                        name: "button--zoom",
                        option: "zoomEl",
                        onTap: t.toggleDesktopZoom,
                    },
                    {
                        name: "counter",
                        option: "counterEl",
                        onInit: function (t) {
                            a = t;
                        },
                    },
                    { name: "button--close", option: "closeEl", onTap: t.close },
                    { name: "button--arrow--left", option: "arrowEl", onTap: t.prev },
                    { name: "button--arrow--right", option: "arrowEl", onTap: t.next },
                    {
                        name: "button--fs",
                        option: "fullscreenEl",
                        onTap: function () {
                            i.isFullscreen() ? i.exit() : i.enter();
                        },
                    },
                    {
                        name: "preloader",
                        option: "preloaderEl",
                        onInit: function (t) {
                            u = t;
                        },
                    },
                ];
            (b.init = function () {
                e.extend(t.options, S, !0),
                    (g = t.options),
                    (n = e.getChildByClass(t.scrollWrap, "pswp__ui")),
                    (h = t.listen),
                    (function () {
                        var t;
                        h("onVerticalDrag", function (t) {
                            _ && t < 0.95
                                ? b.hideControls()
                                : !_ && t >= 0.95 && b.showControls();
                        }),
                            h("onPinchClose", function (e) {
                                _ && e < 0.9
                                    ? (b.hideControls(), (t = !0))
                                    : t && !_ && e > 0.9 && b.showControls();
                            }),
                            h("zoomGestureEnded", function () {
                                (t = !1) && !_ && b.showControls();
                            });
                    })(),
                    h("beforeChange", b.update),
                    h("doubleTap", function (e) {
                        var i = t.currItem.initialZoomLevel;
                        t.getZoomLevel() !== i
                            ? t.zoomTo(i, e, 333)
                            : t.zoomTo(g.getDoubleTapZoom(!1, t.currItem), e, 333);
                    }),
                    h("preventDragEvent", function (t, e, i) {
                        var n = t.target || t.srcElement;
                        n &&
                            n.getAttribute("class") &&
                            t.type.indexOf("mouse") > -1 &&
                            (n.getAttribute("class").indexOf("__caption") > 0 ||
                                /(SMALL|STRONG|EM)/i.test(n.tagName)) &&
                            (i.prevent = !1);
                    }),
                    h("bindEvents", function () {
                        e.bind(n, "pswpTap click", I),
                            e.bind(t.scrollWrap, "pswpTap", b.onGlobalTap),
                            t.likelyTouchDevice ||
                            e.bind(t.scrollWrap, "mouseover", b.onMouseOver);
                    }),
                    h("unbindEvents", function () {
                        x || E(),
                            y && clearInterval(y),
                            e.unbind(document, "mouseout", H),
                            e.unbind(document, "mousemove", D),
                            e.unbind(n, "pswpTap click", I),
                            e.unbind(t.scrollWrap, "pswpTap", b.onGlobalTap),
                            e.unbind(t.scrollWrap, "mouseover", b.onMouseOver),
                            i &&
                            (e.unbind(document, i.eventK, b.updateFullscreen),
                                i.isFullscreen() && ((g.hideAnimationDuration = 0), i.exit()),
                                (i = null));
                    }),
                    h("destroy", function () {
                        g.captionEl &&
                            (o && n.removeChild(o), e.removeClass(s, "pswp__caption--empty")),
                            l && (l.children[0].onclick = null),
                            e.removeClass(n, "pswp__ui--over-close"),
                            e.addClass(n, "pswp__ui--hidden"),
                            b.setIdle(!1);
                    }),
                    g.showAnimationDuration || e.removeClass(n, "pswp__ui--hidden"),
                    h("initialZoomIn", function () {
                        g.showAnimationDuration && e.removeClass(n, "pswp__ui--hidden");
                    }),
                    h("initialZoomOut", function () {
                        e.addClass(n, "pswp__ui--hidden");
                    }),
                    h("parseVerticalMargin", B),
                    (function () {
                        var t,
                            i,
                            s,
                            o = function (n) {
                                if (n)
                                    for (var o = n.length, a = 0; a < o; a++) {
                                        (t = n[a]), (i = t.className);
                                        for (var r = 0; r < W.length; r++)
                                            (s = W[r]),
                                                i.indexOf("pswp__" + s.name) > -1 &&
                                                (g[s.option]
                                                    ? (e.removeClass(t, "pswp__element--disabled"),
                                                        s.onInit && s.onInit(t))
                                                    : e.addClass(t, "pswp__element--disabled"));
                                    }
                            };
                        o(n.children);
                        var a = e.getChildByClass(n, "pswp__top-bar");
                        a && o(a.children);
                    })(),
                    g.shareEl && r && l && (x = !0),
                    z(),
                    g.timeToIdle &&
                    h("mouseUsed", function () {
                        e.bind(document, "mousemove", D),
                            e.bind(document, "mouseout", H),
                            (y = setInterval(function () {
                                2 == ++M && b.setIdle(!0);
                            }, g.timeToIdle / 2));
                    }),
                    g.fullscreenEl &&
                    !e.features.isOldAndroid &&
                    (i || (i = b.getFullscreenAPI()),
                        i
                            ? (e.bind(document, i.eventK, b.updateFullscreen),
                                b.updateFullscreen(),
                                e.addClass(t.template, "pswp--supports-fs"))
                            : e.removeClass(t.template, "pswp--supports-fs")),
                    g.preloaderEl &&
                    (F(!0),
                        h("beforeChange", function () {
                            clearTimeout(f),
                                (f = setTimeout(function () {
                                    t.currItem && t.currItem.loading
                                        ? (!t.allowProgressiveImg() ||
                                            (t.currItem.img && !t.currItem.img.naturalWidth)) &&
                                        F(!1)
                                        : F(!0);
                                }, g.loadingIndicatorDelay));
                        }),
                        h("imageLoadComplete", function (e, i) {
                            t.currItem === i && F(!0);
                        }));
            }),
                (b.setIdle = function (t) {
                    (c = t), T(n, "ui--idle", t);
                }),
                (b.update = function () {
                    _ && t.currItem
                        ? (b.updateIndexIndicator(),
                            g.captionEl &&
                            (g.addCaptionHTMLFn(t.currItem, s),
                                T(s, "caption--empty", !t.currItem.title)),
                            (C = !0))
                        : (C = !1),
                        x || E(),
                        z();
                }),
                (b.updateFullscreen = function (n) {
                    n &&
                        setTimeout(function () {
                            t.setScrollOffset(0, e.getScrollY());
                        }, 50),
                        e[(i.isFullscreen() ? "add" : "remove") + "Class"](
                            t.template,
                            "pswp--fs"
                        );
                }),
                (b.updateIndexIndicator = function () {
                    g.counterEl &&
                        (a.innerHTML =
                            t.getCurrentIndex() +
                            1 +
                            g.indexIndicatorSep +
                            g.getNumItemsFn());
                }),
                (b.onGlobalTap = function (i) {
                    var n = (i = i || window.event).target || i.srcElement;
                    if (!v)
                        if (i.detail && "mouse" === i.detail.pointerType) {
                            if (A(n)) return void t.close();
                            e.hasClass(n, "pswp__img") &&
                                (1 === t.getZoomLevel() &&
                                    t.getZoomLevel() <= t.currItem.fitRatio
                                    ? g.clickToCloseNonZoomable && t.close()
                                    : t.toggleDesktopZoom(i.detail.releasePoint));
                        } else if (
                            (g.tapToToggleControls &&
                                (_ ? b.hideControls() : b.showControls()),
                                g.tapToClose && (e.hasClass(n, "pswp__img") || A(n)))
                        )
                            return void t.close();
                }),
                (b.onMouseOver = function (t) {
                    var e = (t = t || window.event).target || t.srcElement;
                    T(n, "ui--over-close", A(e));
                }),
                (b.hideControls = function () {
                    e.addClass(n, "pswp__ui--hidden"), (_ = !1);
                }),
                (b.showControls = function () {
                    (_ = !0), C || b.update(), e.removeClass(n, "pswp__ui--hidden");
                }),
                (b.supportsFullscreen = function () {
                    var t = document;
                    return !!(
                        t.exitFullscreen ||
                        t.mozCancelFullScreen ||
                        t.webkitExitFullscreen ||
                        t.msExitFullscreen
                    );
                }),
                (b.getFullscreenAPI = function () {
                    var e,
                        i = document.documentElement,
                        n = "fullscreenchange";
                    return (
                        i.requestFullscreen
                            ? (e = {
                                enterK: "requestFullscreen",
                                exitK: "exitFullscreen",
                                elementK: "fullscreenElement",
                                eventK: n,
                            })
                            : i.mozRequestFullScreen
                                ? (e = {
                                    enterK: "mozRequestFullScreen",
                                    exitK: "mozCancelFullScreen",
                                    elementK: "mozFullScreenElement",
                                    eventK: "moz" + n,
                                })
                                : i.webkitRequestFullscreen
                                    ? (e = {
                                        enterK: "webkitRequestFullscreen",
                                        exitK: "webkitExitFullscreen",
                                        elementK: "webkitFullscreenElement",
                                        eventK: "webkit" + n,
                                    })
                                    : i.msRequestFullscreen &&
                                    (e = {
                                        enterK: "msRequestFullscreen",
                                        exitK: "msExitFullscreen",
                                        elementK: "msFullscreenElement",
                                        eventK: "MSFullscreenChange",
                                    }),
                        e &&
                        ((e.enter = function () {
                            return (
                                (d = g.closeOnScroll),
                                (g.closeOnScroll = !1),
                                "webkitRequestFullscreen" !== this.enterK
                                    ? t.template[this.enterK]()
                                    : void t.template[this.enterK](Element.ALLOW_KEYBOARD_INPUT)
                            );
                        }),
                            (e.exit = function () {
                                return (g.closeOnScroll = d), document[this.exitK]();
                            }),
                            (e.isFullscreen = function () {
                                return document[this.elementK];
                            })),
                        e
                    );
                });
        };
    }),
    /*!-Before After*/
    jQuery(document).ready(function (t) {
        t(".twentytwenty-container").length > 0 &&
            (t.fn.twentytwenty = function (e) {
                e = t.extend(
                    {
                        default_offset_pct: 0.5,
                        orientation: "horizontal",
                        navigation_follow: !1,
                    },
                    e
                );
                return this.each(function () {
                    var i = e.default_offset_pct,
                        n = t(this),
                        s = e.orientation,
                        o = "vertical" === s ? "down" : "left",
                        a = "vertical" === s ? "up" : "right",
                        r = e.navigation_follow;
                    n.wrap(
                        "<div class='twentytwenty-wrapper twentytwenty-" + s + "'></div>"
                    );
                    var l = n.find("img:first"),
                        d = n.find("img:last"),
                        c = l.attr("title"),
                        h = d.attr("title");
                    n.append("<div class='twentytwenty-handle'></div>");
                    var u = n.find(".twentytwenty-handle");
                    u.append("<span class='twentytwenty-" + o + "-arrow'></span>"),
                        u.append("<span class='twentytwenty-" + a + "-arrow'></span>"),
                        n.addClass("twentytwenty-container"),
                        l.addClass("twentytwenty-before"),
                        d.addClass("twentytwenty-after"),
                        void 0 !== c &&
                        c &&
                        c.length > 0 &&
                        n.append(
                            "<div class='twentytwenty-before-label'>" + c + "</div>"
                        ),
                        void 0 !== h &&
                        h &&
                        h.length > 0 &&
                        n.append("<div class='twentytwenty-after-label'>" + h + "</div>");
                    var p = function (t) {
                        var e,
                            i,
                            o,
                            a =
                                ((e = t),
                                    (i = l.width()),
                                    (o = l.height()),
                                {
                                    w: i + "px",
                                    h: o + "px",
                                    cw: e * i + "px",
                                    ch: e * o + "px",
                                });
                        u.css(
                            "vertical" === s ? "top" : "left",
                            "vertical" === s ? a.ch : a.cw
                        ),
                            (function (t) {
                                "vertical" === s
                                    ? l.css("clip", "rect(0," + t.w + "," + t.ch + ",0)")
                                    : l.css("clip", "rect(0," + t.cw + "," + t.h + ",0)"),
                                    n.css("height", t.h);
                            })(a);
                    };
                    t(window).on("resize.twentytwenty", function (t) {
                        p(i);
                    });
                    var f = 0,
                        m = 0;
                    u.on("movestart", function (t) {
                        ((((t.distX > t.distY && t.distX < -t.distY) ||
                            (t.distX < t.distY && t.distX > -t.distY)) &&
                            "vertical" !== s) ||
                            (((t.distX < t.distY && t.distX < -t.distY) ||
                                (t.distX > t.distY && t.distX > -t.distY)) &&
                                "vertical" === s)) &&
                            t.preventDefault(),
                            n.addClass("active"),
                            n.removeClass("active-click"),
                            (f = n.offset().left),
                            (offsetY = n.offset().top),
                            (m = l.width()),
                            (imgHeight = l.height());
                    }),
                        u.on("moveend", function (t) {
                            n.removeClass("active");
                        }),
                        u.on("move", function (t) {
                            n.hasClass("active") &&
                                ((i =
                                    "vertical" === s
                                        ? (t.pageY - offsetY) / imgHeight
                                        : (t.pageX - f) / m) < 0 && (i = 0),
                                    i > 1 && (i = 1),
                                    p(i));
                        }),
                        r ||
                        n.hasClass("active") ||
                        (n.on("mouseup", function (t) {
                            n.removeClass("active-click");
                        }),
                            n.on("mousedown", function (t) {
                                n.addClass("active-click"),
                                    (f = n.offset().left),
                                    (offsetY = n.offset().top),
                                    (m = l.width()),
                                    (imgHeight = l.height()),
                                    (i =
                                        "vertical" === s
                                            ? (t.pageY - offsetY) / imgHeight
                                            : (t.pageX - f) / m) < 0 && (i = 0),
                                    i > 1 && (i = 1),
                                    p(i);
                            })),
                        n.find("img").on("mousedown", function (t) {
                            t.preventDefault();
                        }),
                        r &&
                        (n.on("mouseenter", function (t) {
                            n.addClass("active"),
                                (f = n.offset().left),
                                (offsetY = n.offset().top),
                                (m = l.width()),
                                (imgHeight = l.height());
                        }),
                            n.on("mouseleave", function (t) {
                                n.removeClass("active");
                            }),
                            n.on("mousemove", function (t) {
                                n.hasClass("active") &&
                                    ((i =
                                        "vertical" === s
                                            ? (t.pageY - offsetY) / imgHeight
                                            : (t.pageX - f) / m) < 0 && (i = 0),
                                        i > 1 && (i = 1),
                                        p(i));
                            })),
                        t(window).trigger("resize.twentytwenty");
                });
            });
    }),
    jQuery(document).ready(function (t) {
        !("ontouchstart" in window) &&
            ("on" == dtLocal.themeSettings.smoothScroll ||
                ("on_parallax" == dtLocal.themeSettings.smoothScroll &&
                    t(".stripe-parallax-bg").length > 0)) &&
            t("body").css({ "scroll-behavior": "smooth" });
    }),
    jQuery(document).ready(function (t) {
        var e = t(window),
            i = e.height();
        e.on("the7-resize-height", function () {
            i = e.height();
        }),
            (t.fn.parallax = function (n, s, o) {
                var a,
                    r,
                    l = t(this);
                function d() {
                    var e = dtGlobals.winScrollTop;
                    l.each(function () {
                        var o = t(this),
                            r = o.offset().top;
                        r + a(o) < e ||
                            r > e + i ||
                            l.css(
                                "backgroundPosition",
                                n + " " + Math.round((r - e) * s) + "px"
                            );
                    });
                }
                l.each(function () {
                    l.offset().top;
                }),
                    (a = o
                        ? function (t) {
                            return t.outerHeight(!0);
                        }
                        : function (t) {
                            return t.height();
                        }),
                    (arguments.length < 1 || null === n) && (n = "50%"),
                    (arguments.length < 2 || null === s) && (s = 0.1),
                    (arguments.length < 3 || null === o) && (o = !0),
                    e
                        .bind("scroll", d)
                        .on("resize", function () {
                            d();
                        })
                        .bind("debouncedresize", function () {
                            clearTimeout(r),
                                (r = setTimeout(function () {
                                    d();
                                }, 20));
                        }),
                    d();
            });
    }),
    jQuery(document).ready(function (t) {
        t.fn.extend({
            customSelect: function (e) {
                if (void 0 === document.body.style.maxHeight) return this;
                var i = (e = t.extend(
                    { customClass: "customSelect", mapClass: !0, mapStyle: !0 },
                    e
                )).customClass,
                    n = function (e, i) {
                        var n = e.find(":selected"),
                            o = i.children(":first"),
                            a = n.html() || "&nbsp;";
                        o.html(a),
                            n.attr("disabled")
                                ? i.addClass(s("DisabledOption"))
                                : i.removeClass(s("DisabledOption")),
                            setTimeout(function () {
                                i.removeClass(s("Open")),
                                    t(document).off("mouseup." + s("Open"));
                            }, 60);
                    },
                    s = function (t) {
                        return i + t;
                    };
                return this.each(function () {
                    var o = t(this),
                        a = t("<span />").addClass(s("Inner")),
                        r = t("<span />");
                    o.after(r.append(a)),
                        r.addClass(i),
                        e.mapClass && r.addClass(o.attr("class")),
                        e.mapStyle && r.attr("style", o.attr("style")),
                        o
                            .addClass("hasCustomSelect")
                            .on("update", function () {
                                n(o, r);
                                var t =
                                    parseInt(o.outerWidth(), 10) -
                                    (parseInt(r.outerWidth(), 10) - parseInt(r.width(), 10));
                                r.css({ display: "inline-block" });
                                var e = r.outerHeight();
                                o.attr("disabled")
                                    ? r.addClass(s("Disabled"))
                                    : r.removeClass(s("Disabled")),
                                    a.css({ width: t, display: "inline-block" }),
                                    o.css({
                                        "-webkit-appearance": "menulist-button",
                                        width: r.outerWidth(),
                                        position: "absolute",
                                        opacity: 0,
                                        height: e,
                                        fontSize: r.css("font-size"),
                                    });
                            })
                            .on("change", function () {
                                r.addClass(s("Changed")), n(o, r);
                            })
                            .on("keyup", function (t) {
                                r.hasClass(s("Open"))
                                    ? (13 != t.which && 27 != t.which) || n(o, r)
                                    : (o.blur(), o.focus());
                            })
                            .on("mousedown", function (t) {
                                r.removeClass(s("Changed"));
                            })
                            .on("mouseup", function (e) {
                                r.hasClass(s("Open")) ||
                                    (t("." + s("Open")).not(r).length > 0 &&
                                        "undefined" != typeof InstallTrigger
                                        ? o.focus()
                                        : (r.addClass(s("Open")),
                                            e.stopPropagation(),
                                            t(document).one("mouseup." + s("Open"), function (e) {
                                                e.target != o.get(0) &&
                                                    t.inArray(e.target, o.find("*").get()) < 0
                                                    ? o.blur()
                                                    : n(o, r);
                                            })));
                            })
                            .focus(function () {
                                r.removeClass(s("Changed")).addClass(s("Focus"));
                            })
                            .blur(function () {
                                r.removeClass(s("Focus") + " " + s("Open"));
                            })
                            .hover(
                                function () {
                                    r.addClass(s("Hover"));
                                },
                                function () {
                                    r.removeClass(s("Hover"));
                                }
                            )
                            .trigger("update");
                });
            },
        });
    }),
    /*!
     * Isotope PACKAGED v3.0.0
     *
     * Licensed GPLv3 for open source use
     * or Isotope Commercial License for commercial use
     *
     * http://isotope.metafizzy.co
     * Copyright 2016 Metafizzy
     */
    (function (t, e) {
        "use strict";
        "function" == typeof define && define.amd
            ? define("jquery-bridget/jquery-bridget", ["jquery"], function (i) {
                e(t, i);
            })
            : "object" == typeof module && module.exports
                ? (module.exports = e(t, require("jquery")))
                : (t.jQueryBridget = e(t, t.jQuery));
    })(window, function (t, e) {
        "use strict";
        var i = Array.prototype.slice,
            n = t.console,
            s =
                void 0 === n
                    ? function () { }
                    : function (t) {
                        n.error(t);
                    };
        function o(n, o, r) {
            (r = r || e || t.jQuery) &&
                (o.prototype.option ||
                    (o.prototype.option = function (t) {
                        r.isPlainObject(t) &&
                            (this.options = r.extend(!0, this.options, t));
                    }),
                    (r.fn[n] = function (t) {
                        var e;
                        return "string" == typeof t
                            ? (function (t, e, i) {
                                var o,
                                    a = "$()." + n + '("' + e + '")';
                                return (
                                    t.each(function (t, l) {
                                        var d = r.data(l, n);
                                        if (d) {
                                            var c = d[e];
                                            if (c && "_" != e.charAt(0)) {
                                                var h = c.apply(d, i);
                                                o = void 0 === o ? h : o;
                                            } else s(a + " is not a valid method");
                                        } else s(n + " not initialized. Cannot call methods, i.e. " + a);
                                    }),
                                    void 0 !== o ? o : t
                                );
                            })(this, t, i.call(arguments, 1))
                            : ((e = t),
                                this.each(function (t, i) {
                                    var s = r.data(i, n);
                                    s
                                        ? (s.option(e), s._init())
                                        : ((s = new o(i, e)), r.data(i, n, s));
                                }),
                                this);
                    }),
                    a(r));
        }
        function a(t) {
            !t || (t && t.bridget) || (t.bridget = o);
        }
        return a(e || t.jQuery), o;
    }),
    (function (t, e) {
        "function" == typeof define && define.amd
            ? define("ev-emitter/ev-emitter", e)
            : "object" == typeof module && module.exports
                ? (module.exports = e())
                : (t.EvEmitter = e());
    })(this, function () {
        function t() { }
        var e = t.prototype;
        return (
            (e.on = function (t, e) {
                if (t && e) {
                    var i = (this._events = this._events || {}),
                        n = (i[t] = i[t] || []);
                    return -1 == n.indexOf(e) && n.push(e), this;
                }
            }),
            (e.once = function (t, e) {
                if (t && e) {
                    this.on(t, e);
                    var i = (this._onceEvents = this._onceEvents || {});
                    return ((i[t] = i[t] || {})[e] = !0), this;
                }
            }),
            (e.off = function (t, e) {
                var i = this._events && this._events[t];
                if (i && i.length) {
                    var n = i.indexOf(e);
                    return -1 != n && i.splice(n, 1), this;
                }
            }),
            (e.emitEvent = function (t, e) {
                var i = this._events && this._events[t];
                if (i && i.length) {
                    var n = 0,
                        s = i[n];
                    e = e || [];
                    for (var o = this._onceEvents && this._onceEvents[t]; s;) {
                        var a = o && o[s];
                        a && (this.off(t, s), delete o[s]),
                            s.apply(this, e),
                            (s = i[(n += a ? 0 : 1)]);
                    }
                    return this;
                }
            }),
            t
        );
    }),
    /*!
     * getSize v2.0.2
     * measure size of elements
     * MIT license
     */
    (function (t, e) {
        "use strict";
        "function" == typeof define && define.amd
            ? define("get-size/get-size", [], function () {
                return e();
            })
            : "object" == typeof module && module.exports
                ? (module.exports = e())
                : (t.getSize = e());
    })(window, function () {
        "use strict";
        function t(t) {
            var e = parseFloat(t);
            return -1 == t.indexOf("%") && !isNaN(e) && e;
        }
        var e =
            "undefined" == typeof console
                ? function () { }
                : function (t) {
                    console.error(t);
                },
            i = [
                "paddingLeft",
                "paddingRight",
                "paddingTop",
                "paddingBottom",
                "marginLeft",
                "marginRight",
                "marginTop",
                "marginBottom",
                "borderLeftWidth",
                "borderRightWidth",
                "borderTopWidth",
                "borderBottomWidth",
            ],
            n = i.length;
        function s(t) {
            var i = getComputedStyle(t);
            return (
                i ||
                e(
                    "Style returned " +
                    i +
                    ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"
                ),
                i
            );
        }
        var o,
            a = !1;
        function r(e) {
            if (
                ((function () {
                    if (!a) {
                        a = !0;
                        var e = document.createElement("div");
                        (e.style.width = "200px"),
                            (e.style.padding = "1px 2px 3px 4px"),
                            (e.style.borderStyle = "solid"),
                            (e.style.borderWidth = "1px 2px 3px 4px"),
                            (e.style.boxSizing = "border-box");
                        var i = document.body || document.documentElement;
                        i.appendChild(e);
                        var n = s(e);
                        (r.isBoxSizeOuter = o = 200 == t(n.width)), i.removeChild(e);
                    }
                })(),
                    "string" == typeof e && (e = document.querySelector(e)),
                    e && "object" == typeof e && e.nodeType)
            ) {
                var l = s(e);
                if ("none" == l.display)
                    return (function () {
                        for (
                            var t = {
                                width: 0,
                                height: 0,
                                innerWidth: 0,
                                innerHeight: 0,
                                outerWidth: 0,
                                outerHeight: 0,
                            },
                            e = 0;
                            e < n;
                            e++
                        )
                            t[i[e]] = 0;
                        return t;
                    })();
                var d = {};
                (d.width = e.offsetWidth), (d.height = e.offsetHeight);
                for (
                    var c = (d.isBorderBox = "border-box" == l.boxSizing), h = 0;
                    h < n;
                    h++
                ) {
                    var u = i[h],
                        p = l[u],
                        f = parseFloat(p);
                    d[u] = isNaN(f) ? 0 : f;
                }
                var m = d.paddingLeft + d.paddingRight,
                    g = d.paddingTop + d.paddingBottom,
                    v = d.marginLeft + d.marginRight,
                    y = d.marginTop + d.marginBottom,
                    w = d.borderLeftWidth + d.borderRightWidth,
                    b = d.borderTopWidth + d.borderBottomWidth,
                    C = c && o,
                    _ = t(l.width);
                !1 !== _ && (d.width = _ + (C ? 0 : m + w));
                var x = t(l.height);
                return (
                    !1 !== x && (d.height = x + (C ? 0 : g + b)),
                    (d.innerWidth = d.width - (m + w)),
                    (d.innerHeight = d.height - (g + b)),
                    (d.outerWidth = d.width + v),
                    (d.outerHeight = d.height + y),
                    d
                );
            }
        }
        return r;
    }),
    (function (t, e) {
        "use strict";
        "function" == typeof define && define.amd
            ? define("desandro-matches-selector/matches-selector", e)
            : "object" == typeof module && module.exports
                ? (module.exports = e())
                : (t.matchesSelector = e());
    })(window, function () {
        "use strict";
        var t = (function () {
            var t = Element.prototype;
            if (t.matches) return "matches";
            if (t.matchesSelector) return "matchesSelector";
            for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
                var n = e[i] + "MatchesSelector";
                if (t[n]) return n;
            }
        })();
        return function (e, i) {
            return e[t](i);
        };
    }),
    (function (t, e) {
        "function" == typeof define && define.amd
            ? define(
                "fizzy-ui-utils/utils",
                ["desandro-matches-selector/matches-selector"],
                function (i) {
                    return e(t, i);
                }
            )
            : "object" == typeof module && module.exports
                ? (module.exports = e(t, require("desandro-matches-selector")))
                : (t.fizzyUIUtils = e(t, t.matchesSelector));
    })(window, function (t, e) {
        var i = {
            extend: function (t, e) {
                for (var i in e) t[i] = e[i];
                return t;
            },
            modulo: function (t, e) {
                return ((t % e) + e) % e;
            },
            makeArray: function (t) {
                var e = [];
                if (Array.isArray(t)) e = t;
                else if (t && "number" == typeof t.length)
                    for (var i = 0; i < t.length; i++) e.push(t[i]);
                else e.push(t);
                return e;
            },
            removeFrom: function (t, e) {
                var i = t.indexOf(e);
                -1 != i && t.splice(i, 1);
            },
            getParent: function (t, i) {
                for (; t != document.body;)
                    if (((t = t.parentNode), e(t, i))) return t;
            },
            getQueryElement: function (t) {
                return "string" == typeof t ? document.querySelector(t) : t;
            },
            handleEvent: function (t) {
                var e = "on" + t.type;
                this[e] && this[e](t);
            },
        };
        (i.filterFindElements = function (t, n) {
            t = i.makeArray(t);
            var s = [];
            return (
                t.forEach(function (t) {
                    if (
                        (function (t) {
                            return "object" == typeof HTMLElement
                                ? t instanceof HTMLElement
                                : t &&
                                "object" == typeof t &&
                                null !== t &&
                                1 === t.nodeType &&
                                "string" == typeof t.nodeName;
                        })(t)
                    )
                        if (n) {
                            e(t, n) && s.push(t);
                            for (var i = t.querySelectorAll(n), o = 0; o < i.length; o++)
                                s.push(i[o]);
                        } else s.push(t);
                }),
                s
            );
        }),
            (i.debounceMethod = function (t, e, i) {
                var n = t.prototype[e],
                    s = e + "Timeout";
                t.prototype[e] = function () {
                    var t = this[s];
                    t && clearTimeout(t);
                    var e = arguments,
                        o = this;
                    this[s] = setTimeout(function () {
                        n.apply(o, e), delete o[s];
                    }, i || 100);
                };
            }),
            (i.docReady = function (t) {
                "complete" == document.readyState
                    ? t()
                    : document.addEventListener("DOMContentLoaded", t);
            }),
            (i.toDashed = function (t) {
                return t
                    .replace(/(.)([A-Z])/g, function (t, e, i) {
                        return e + "-" + i;
                    })
                    .toLowerCase();
            });
        var n = t.console;
        return (
            (i.htmlInit = function (e, s) {
                i.docReady(function () {
                    var o = i.toDashed(s),
                        a = "data-" + o,
                        r = document.querySelectorAll("[" + a + "]"),
                        l = document.querySelectorAll(".js-" + o),
                        d = i.makeArray(r).concat(i.makeArray(l)),
                        c = a + "-options",
                        h = t.jQuery;
                    d.forEach(function (t) {
                        var i,
                            o = t.getAttribute(a) || t.getAttribute(c);
                        try {
                            i = o && JSON.parse(o);
                        } catch (e) {
                            return void (
                                n &&
                                n.error("Error parsing " + a + " on " + t.className + ": " + e)
                            );
                        }
                        var r = new e(t, i);
                        h && h.data(t, s, r);
                    });
                });
            }),
            i
        );
    }),
    (function (t, e) {
        "function" == typeof define && define.amd
            ? define(
                "outlayer/item",
                ["ev-emitter/ev-emitter", "get-size/get-size"],
                e
            )
            : "object" == typeof module && module.exports
                ? (module.exports = e(require("ev-emitter"), require("get-size")))
                : ((t.Outlayer = {}), (t.Outlayer.Item = e(t.EvEmitter, t.getSize)));
    })(window, function (t, e) {
        "use strict";
        var i = document.documentElement.style,
            n = "string" == typeof i.transition ? "transition" : "WebkitTransition",
            s = "string" == typeof i.transform ? "transform" : "WebkitTransform",
            o = {
                WebkitTransition: "webkitTransitionEnd",
                transition: "transitionend",
            }[n],
            a = {
                transform: s,
                transition: n,
                transitionDuration: n + "Duration",
                transitionProperty: n + "Property",
                transitionDelay: n + "Delay",
            };
        function r(t, e) {
            t &&
                ((this.element = t),
                    (this.layout = e),
                    (this.position = { x: 0, y: 0 }),
                    this._create());
        }
        var l = (r.prototype = Object.create(t.prototype));
        (l.constructor = r),
            (l._create = function () {
                (this._transn = { ingProperties: {}, clean: {}, onEnd: {} }),
                    this.css({ position: "absolute" });
            }),
            (l.handleEvent = function (t) {
                var e = "on" + t.type;
                this[e] && this[e](t);
            }),
            (l.getSize = function () {
                this.size = e(this.element);
            }),
            (l.css = function (t) {
                var e = this.element.style;
                for (var i in t) {
                    e[a[i] || i] = t[i];
                }
            }),
            (l.getPosition = function () {
                var t = getComputedStyle(this.element),
                    e = this.layout._getOption("originLeft"),
                    i = this.layout._getOption("originTop"),
                    n = t[e ? "left" : "right"],
                    s = t[i ? "top" : "bottom"],
                    o = this.layout.size,
                    a =
                        -1 != n.indexOf("%")
                            ? (parseFloat(n) / 100) * o.width
                            : parseInt(n, 10),
                    r =
                        -1 != s.indexOf("%")
                            ? (parseFloat(s) / 100) * o.height
                            : parseInt(s, 10);
                (a = isNaN(a) ? 0 : a),
                    (r = isNaN(r) ? 0 : r),
                    (a -= e ? o.paddingLeft : o.paddingRight),
                    (r -= i ? o.paddingTop : o.paddingBottom),
                    (this.position.x = a),
                    (this.position.y = r);
            }),
            (l.layoutPosition = function () {
                var t = this.layout.size,
                    e = {},
                    i = this.layout._getOption("originLeft"),
                    n = this.layout._getOption("originTop"),
                    s = i ? "paddingLeft" : "paddingRight",
                    o = i ? "left" : "right",
                    a = i ? "right" : "left",
                    r = this.position.x + t[s];
                (e[o] = this.getXValue(r)), (e[a] = "");
                var l = n ? "paddingTop" : "paddingBottom",
                    d = n ? "top" : "bottom",
                    c = n ? "bottom" : "top",
                    h = this.position.y + t[l];
                (e[d] = this.getYValue(h)),
                    (e[c] = ""),
                    this.css(e),
                    this.emitEvent("layout", [this]);
            }),
            (l.getXValue = function (t) {
                var e = this.layout._getOption("horizontal");
                return this.layout.options.percentPosition && !e
                    ? (t / this.layout.size.width) * 100 + "%"
                    : t + "px";
            }),
            (l.getYValue = function (t) {
                var e = this.layout._getOption("horizontal");
                return this.layout.options.percentPosition && e
                    ? (t / this.layout.size.height) * 100 + "%"
                    : t + "px";
            }),
            (l._transitionTo = function (t, e) {
                this.getPosition();
                var i = this.position.x,
                    n = this.position.y,
                    s = parseInt(t, 10),
                    o = parseInt(e, 10),
                    a = s === this.position.x && o === this.position.y;
                if ((this.setPosition(t, e), !a || this.isTransitioning)) {
                    var r = t - i,
                        l = e - n,
                        d = {};
                    (d.transform = this.getTranslate(r, l)),
                        this.transition({
                            to: d,
                            onTransitionEnd: { transform: this.layoutPosition },
                            isCleaning: !0,
                        });
                } else this.layoutPosition();
            }),
            (l.getTranslate = function (t, e) {
                return (
                    "translate3d(" +
                    (t = this.layout._getOption("originLeft") ? t : -t) +
                    "px, " +
                    (e = this.layout._getOption("originTop") ? e : -e) +
                    "px, 0)"
                );
            }),
            (l.goTo = function (t, e) {
                this.setPosition(t, e), this.layoutPosition();
            }),
            (l.moveTo = l._transitionTo),
            (l.setPosition = function (t, e) {
                (this.position.x = parseInt(t, 10)),
                    (this.position.y = parseInt(e, 10));
            }),
            (l._nonTransition = function (t) {
                for (var e in (this.css(t.to),
                    t.isCleaning && this._removeStyles(t.to),
                    t.onTransitionEnd))
                    t.onTransitionEnd[e].call(this);
            }),
            (l.transition = function (t) {
                if (parseFloat(this.layout.options.transitionDuration)) {
                    var e = this._transn;
                    for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
                    for (i in t.to)
                        (e.ingProperties[i] = !0), t.isCleaning && (e.clean[i] = !0);
                    if (t.from) {
                        this.css(t.from);
                        this.element.offsetHeight;
                        null;
                    }
                    this.enableTransition(t.to),
                        this.css(t.to),
                        (this.isTransitioning = !0);
                } else this._nonTransition(t);
            });
        var d =
            "opacity," +
            s.replace(/([A-Z])/g, function (t) {
                return "-" + t.toLowerCase();
            });
        (l.enableTransition = function () {
            if (!this.isTransitioning) {
                var t = this.layout.options.transitionDuration;
                (t = "number" == typeof t ? t + "ms" : t),
                    this.css({
                        transitionProperty: d,
                        transitionDuration: t,
                        transitionDelay: this.staggerDelay || 0,
                    }),
                    this.element.addEventListener(o, this, !1);
            }
        }),
            (l.onwebkitTransitionEnd = function (t) {
                this.ontransitionend(t);
            }),
            (l.onotransitionend = function (t) {
                this.ontransitionend(t);
            });
        var c = { "-webkit-transform": "transform" };
        (l.ontransitionend = function (t) {
            if (t.target === this.element) {
                var e = this._transn,
                    i = c[t.propertyName] || t.propertyName;
                if (
                    (delete e.ingProperties[i],
                        (function (t) {
                            for (var e in t) return !1;
                            return !0;
                        })(e.ingProperties) && this.disableTransition(),
                        i in e.clean &&
                        ((this.element.style[t.propertyName] = ""), delete e.clean[i]),
                        i in e.onEnd)
                )
                    e.onEnd[i].call(this), delete e.onEnd[i];
                this.emitEvent("transitionEnd", [this]);
            }
        }),
            (l.disableTransition = function () {
                this.removeTransitionStyles(),
                    this.element.removeEventListener(o, this, !1),
                    (this.isTransitioning = !1);
            }),
            (l._removeStyles = function (t) {
                var e = {};
                for (var i in t) e[i] = "";
                this.css(e);
            });
        var h = {
            transitionProperty: "",
            transitionDuration: "",
            transitionDelay: "",
        };
        return (
            (l.removeTransitionStyles = function () {
                this.css(h);
            }),
            (l.stagger = function (t) {
                (t = isNaN(t) ? 0 : t), (this.staggerDelay = t + "ms");
            }),
            (l.removeElem = function () {
                this.element.parentNode.removeChild(this.element),
                    this.css({ display: "" }),
                    this.emitEvent("remove", [this]);
            }),
            (l.remove = function () {
                n && parseFloat(this.layout.options.transitionDuration)
                    ? (this.once("transitionEnd", function () {
                        this.removeElem();
                    }),
                        this.hide())
                    : this.removeElem();
            }),
            (l.reveal = function () {
                delete this.isHidden, this.css({ display: "" });
                var t = this.layout.options,
                    e = {};
                (e[this.getHideRevealTransitionEndProperty("visibleStyle")] =
                    this.onRevealTransitionEnd),
                    this.transition({
                        from: t.hiddenStyle,
                        to: t.visibleStyle,
                        isCleaning: !0,
                        onTransitionEnd: e,
                    });
            }),
            (l.onRevealTransitionEnd = function () {
                this.isHidden || this.emitEvent("reveal");
            }),
            (l.getHideRevealTransitionEndProperty = function (t) {
                var e = this.layout.options[t];
                if (e.opacity) return "opacity";
                for (var i in e) return i;
            }),
            (l.hide = function () {
                (this.isHidden = !0), this.css({ display: "" });
                var t = this.layout.options,
                    e = {};
                (e[this.getHideRevealTransitionEndProperty("hiddenStyle")] =
                    this.onHideTransitionEnd),
                    this.transition({
                        from: t.visibleStyle,
                        to: t.hiddenStyle,
                        isCleaning: !0,
                        onTransitionEnd: e,
                    });
            }),
            (l.onHideTransitionEnd = function () {
                this.isHidden &&
                    (this.css({ display: "none" }), this.emitEvent("hide"));
            }),
            (l.destroy = function () {
                this.css({
                    position: "",
                    left: "",
                    right: "",
                    top: "",
                    bottom: "",
                    transition: "",
                    transform: "",
                });
            }),
            r
        );
    }),
    /*!
     * Outlayer v2.1.0
     * the brains and guts of a layout library
     * MIT license
     */
    (function (t, e) {
        "use strict";
        "function" == typeof define && define.amd
            ? define(
                "outlayer/outlayer",
                [
                    "ev-emitter/ev-emitter",
                    "get-size/get-size",
                    "fizzy-ui-utils/utils",
                    "./item",
                ],
                function (i, n, s, o) {
                    return e(t, i, n, s, o);
                }
            )
            : "object" == typeof module && module.exports
                ? (module.exports = e(
                    t,
                    require("ev-emitter"),
                    require("get-size"),
                    require("fizzy-ui-utils"),
                    require("./item")
                ))
                : (t.Outlayer = e(
                    t,
                    t.EvEmitter,
                    t.getSize,
                    t.fizzyUIUtils,
                    t.Outlayer.Item
                ));
    })(window, function (t, e, i, n, s) {
        "use strict";
        var o = t.console,
            a = t.jQuery,
            r = function () { },
            l = 0,
            d = {};
        function c(t, e) {
            var i = n.getQueryElement(t);
            if (i) {
                (this.element = i),
                    a && (this.$element = a(this.element)),
                    (this.options = n.extend({}, this.constructor.defaults)),
                    this.option(e);
                var s = ++l;
                (this.element.outlayerGUID = s),
                    (d[s] = this),
                    this._create(),
                    this._getOption("initLayout") && this.layout();
            } else o && o.error("Bad element for " + this.constructor.namespace + ": " + (i || t));
        }
        (c.namespace = "outlayer"),
            (c.Item = s),
            (c.defaults = {
                customSorters: {},
                containerStyle: { position: "relative" },
                initLayout: !0,
                originLeft: !0,
                originTop: !0,
                resize: !0,
                resizeContainer: !0,
                equalheight: !1,
                transitionDuration: "0.4s",
                hiddenStyle: { opacity: 0, transform: "scale(0.001)" },
                visibleStyle: { opacity: 1, transform: "scale(1)" },
            });
        var h = c.prototype;
        function u(t) {
            function e() {
                t.apply(this, arguments);
            }
            return (
                (e.prototype = Object.create(t.prototype)),
                (e.prototype.constructor = e),
                e
            );
        }
        n.extend(h, e.prototype),
            (h.option = function (t) {
                n.extend(this.options, t);
            }),
            (h._getOption = function (t) {
                var e = this.constructor.compatOptions[t];
                return e && void 0 !== this.options[e]
                    ? this.options[e]
                    : this.options[t];
            }),
            (c.compatOptions = {
                initLayout: "isInitLayout",
                horizontal: "isHorizontal",
                layoutInstant: "isLayoutInstant",
                originLeft: "isOriginLeft",
                originTop: "isOriginTop",
                resize: "isResizeBound",
                resizeContainer: "isResizingContainer",
            }),
            (h._create = function () {
                this.reloadItems(),
                    (this.stamps = []),
                    this.stamp(this.options.stamp),
                    n.extend(this.element.style, this.options.containerStyle),
                    this._getOption("resize") && this.bindResize();
            }),
            (h.reloadItems = function () {
                this.items = this._itemize(this.element.children);
            }),
            (h._itemize = function (t) {
                for (
                    var e = this._filterFindItemElements(t),
                    i = this.constructor.Item,
                    n = [],
                    s = 0;
                    s < e.length;
                    s++
                ) {
                    var o = new i(e[s], this);
                    n.push(o);
                }
                return n;
            }),
            (h._filterFindItemElements = function (t) {
                return n.filterFindElements(t, this.options.itemSelector);
            }),
            (h.getItemElements = function () {
                return this.items.map(function (t) {
                    return t.element;
                });
            }),
            (h.layout = function () {
                this._resetLayout(), this._manageStamps();
                var t = this._getOption("layoutInstant"),
                    e = void 0 !== t ? t : !this._isLayoutInited;
                this.layoutItems(this.items, e), (this._isLayoutInited = !0);
            }),
            (h._init = h.layout),
            (h._resetLayout = function () {
                this.getSize();
            }),
            (h.getSize = function () {
                this.size = i(this.element);
            }),
            (h._getMeasurement = function (t, e) {
                var n,
                    s = this.options[t];
                s
                    ? ("string" == typeof s
                        ? (n = this.element.querySelector(s))
                        : s instanceof HTMLElement && (n = s),
                        (this[t] = n ? i(n)[e] : s))
                    : (this[t] = 0);
            }),
            (h.layoutItems = function (t, e) {
                (t = this._getItemsForLayout(t)),
                    this._layoutItems(t, e),
                    this._postLayout();
            }),
            (h._getItemsForLayout = function (t) {
                return t.filter(function (t) {
                    return !t.isIgnored;
                });
            }),
            (h._layoutItems = function (t, e) {
                if ((this._emitCompleteOnItems("layout", t), t && t.length)) {
                    var i = [];
                    t.forEach(function (t) {
                        var n = this._getItemLayoutPosition(t);
                        (n.item = t), (n.isInstant = e || t.isLayoutInstant), i.push(n);
                    }, this),
                        this._processLayoutQueue(i);
                }
            }),
            (h._getItemLayoutPosition = function () {
                return { x: 0, y: 0 };
            }),
            (h._processLayoutQueue = function (t) {
                this.updateStagger(),
                    t.forEach(function (t, e) {
                        this._positionItem(t.item, t.x, t.y, t.isInstant, e);
                    }, this);
            }),
            (h.updateStagger = function () {
                var t = this.options.stagger;
                if (null != t)
                    return (
                        (this.stagger = (function (t) {
                            if ("number" == typeof t) return t;
                            var e = t.match(/(^\d*\.?\d*)(\w*)/),
                                i = e && e[1],
                                n = e && e[2];
                            if (!i.length) return 0;
                            i = parseFloat(i);
                            var s = p[n] || 1;
                            return i * s;
                        })(t)),
                        this.stagger
                    );
                this.stagger = 0;
            }),
            (h._positionItem = function (t, e, i, n, s) {
                n ? t.goTo(e, i) : (t.stagger(s * this.stagger), t.moveTo(e, i));
            }),
            (h._postLayout = function () {
                this.resizeContainer();
            }),
            (h.resizeContainer = function () {
                if (this._getOption("resizeContainer")) {
                    var t = this._getContainerSize();
                    t &&
                        (this._setContainerMeasure(t.width, !0),
                            this._setContainerMeasure(t.height, !1));
                }
            }),
            (h._getContainerSize = r),
            (h._setContainerMeasure = function (t, e) {
                if (void 0 !== t) {
                    var i = this.size;
                    i.isBorderBox &&
                        (t += e
                            ? i.paddingLeft +
                            i.paddingRight +
                            i.borderLeftWidth +
                            i.borderRightWidth
                            : i.paddingBottom +
                            i.paddingTop +
                            i.borderTopWidth +
                            i.borderBottomWidth),
                        (t = Math.max(t, 0)),
                        (this.element.style[e ? "width" : "height"] = t + "px");
                }
            }),
            (h._emitCompleteOnItems = function (t, e) {
                var i = this;
                function n() {
                    i.dispatchEvent(t + "Complete", null, [e]);
                }
                var s = e.length;
                if (e && s) {
                    var o = 0;
                    e.forEach(function (e) {
                        e.once(t, a);
                    });
                } else n();
                function a() {
                    ++o == s && n();
                }
            }),
            (h.dispatchEvent = function (t, e, i) {
                var n = e ? [e].concat(i) : i;
                if ((this.emitEvent(t, n), a))
                    if (((this.$element = this.$element || a(this.element)), e)) {
                        var s = a.Event(e);
                        (s.type = t), this.$element.trigger(s, i);
                    } else this.$element.trigger(t, i);
            }),
            (h.ignore = function (t) {
                var e = this.getItem(t);
                e && (e.isIgnored = !0);
            }),
            (h.unignore = function (t) {
                var e = this.getItem(t);
                e && delete e.isIgnored;
            }),
            (h.stamp = function (t) {
                (t = this._find(t)) &&
                    ((this.stamps = this.stamps.concat(t)), t.forEach(this.ignore, this));
            }),
            (h.unstamp = function (t) {
                (t = this._find(t)) &&
                    t.forEach(function (t) {
                        n.removeFrom(this.stamps, t), this.unignore(t);
                    }, this);
            }),
            (h._find = function (t) {
                if (t)
                    return (
                        "string" == typeof t && (t = this.element.querySelectorAll(t)),
                        (t = n.makeArray(t))
                    );
            }),
            (h._manageStamps = function () {
                this.stamps &&
                    this.stamps.length &&
                    (this._getBoundingRect(),
                        this.stamps.forEach(this._manageStamp, this));
            }),
            (h._getBoundingRect = function () {
                var t = this.element.getBoundingClientRect(),
                    e = this.size;
                this._boundingRect = {
                    left: t.left + e.paddingLeft + e.borderLeftWidth,
                    top: t.top + e.paddingTop + e.borderTopWidth,
                    right: t.right - (e.paddingRight + e.borderRightWidth),
                    bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth),
                };
            }),
            (h._manageStamp = r),
            (h._getElementOffset = function (t) {
                var e = t.getBoundingClientRect(),
                    n = this._boundingRect,
                    s = i(t);
                return {
                    left: e.left - n.left - s.marginLeft,
                    top: e.top - n.top - s.marginTop,
                    right: n.right - e.right - s.marginRight,
                    bottom: n.bottom - e.bottom - s.marginBottom,
                };
            }),
            (h.handleEvent = n.handleEvent),
            (h.bindResize = function () {
                t.addEventListener("resize", this), (this.isResizeBound = !0);
            }),
            (h.unbindResize = function () {
                t.removeEventListener("resize", this), (this.isResizeBound = !1);
            }),
            (h.onresize = function () {
                this.resize();
            }),
            n.debounceMethod(c, "onresize", 100),
            (h.resize = function () {
                this.isResizeBound && this.needsResizeLayout() && this.layout();
            }),
            (h.needsResizeLayout = function () {
                var t = i(this.element);
                return this.size && t && t.innerWidth !== this.size.innerWidth;
            }),
            (h.addItems = function (t) {
                var e = this._itemize(t);
                return e.length && (this.items = this.items.concat(e)), e;
            }),
            (h.appended = function (t) {
                var e = this.addItems(t);
                e.length && (this.layoutItems(e, !0), this.reveal(e));
            }),
            (h.prepended = function (t) {
                var e = this._itemize(t);
                if (e.length) {
                    var i = this.items.slice(0);
                    (this.items = e.concat(i)),
                        this._resetLayout(),
                        this._manageStamps(),
                        this.layoutItems(e, !0),
                        this.reveal(e),
                        this.layoutItems(i);
                }
            }),
            (h.reveal = function (t) {
                if ((this._emitCompleteOnItems("reveal", t), t && t.length)) {
                    var e = this.updateStagger();
                    t.forEach(function (t, i) {
                        t.stagger(i * e), t.reveal();
                    });
                }
            }),
            (h.hide = function (t) {
                if ((this._emitCompleteOnItems("hide", t), t && t.length)) {
                    var e = this.updateStagger();
                    t.forEach(function (t, i) {
                        t.stagger(i * e), t.hide();
                    });
                }
            }),
            (h.revealItemElements = function (t) {
                var e = this.getItems(t);
                this.reveal(e);
            }),
            (h.hideItemElements = function (t) {
                var e = this.getItems(t);
                this.hide(e);
            }),
            (h.getItem = function (t) {
                for (var e = 0; e < this.items.length; e++) {
                    var i = this.items[e];
                    if (i.element == t) return i;
                }
            }),
            (h.getItems = function (t) {
                t = n.makeArray(t);
                var e = [];
                return (
                    t.forEach(function (t) {
                        var i = this.getItem(t);
                        i && e.push(i);
                    }, this),
                    e
                );
            }),
            (h.remove = function (t) {
                var e = this.getItems(t);
                this._emitCompleteOnItems("remove", e),
                    e &&
                    e.length &&
                    e.forEach(function (t) {
                        t.remove(), n.removeFrom(this.items, t);
                    }, this);
            }),
            (h.destroy = function () {
                var t = this.element.style;
                (t.height = ""),
                    (t.position = ""),
                    (t.width = ""),
                    this.items.forEach(function (t) {
                        t.destroy();
                    }),
                    this.unbindResize();
                var e = this.element.outlayerGUID;
                delete d[e],
                    delete this.element.outlayerGUID,
                    a && a.removeData(this.element, this.constructor.namespace);
            }),
            (c.data = function (t) {
                var e = (t = n.getQueryElement(t)) && t.outlayerGUID;
                return e && d[e];
            }),
            (c.create = function (t, e) {
                var i = u(c);
                return (
                    (i.defaults = n.extend({}, c.defaults)),
                    n.extend(i.defaults, e),
                    (i.compatOptions = n.extend({}, c.compatOptions)),
                    (i.namespace = t),
                    (i.data = c.data),
                    (i.Item = u(s)),
                    n.htmlInit(i, t),
                    a && a.bridget && a.bridget(t, i),
                    i
                );
            });
        var p = { ms: 1, s: 1e3 };
        return (c.Item = s), c;
    }),
    (function (t, e) {
        "function" == typeof define && define.amd
            ? define("isotope/item", ["outlayer/outlayer"], e)
            : "object" == typeof module && module.exports
                ? (module.exports = e(require("outlayer")))
                : ((t.Isotope = t.Isotope || {}), (t.Isotope.Item = e(t.Outlayer)));
    })(window, function (t) {
        "use strict";
        function e() {
            t.Item.apply(this, arguments);
        }
        var i = (e.prototype = Object.create(t.Item.prototype)),
            n = i._create;
        (i._create = function () {
            (this.id = this.layout.itemGUID++), n.call(this), (this.sortData = {});
        }),
            (i.updateSortData = function () {
                if (!this.isIgnored) {
                    (this.sortData.id = this.id),
                        (this.sortData["original-order"] = this.id),
                        (this.sortData.random = Math.random());
                    var t = this.layout.options.getSortData,
                        e = this.layout._sorters;
                    for (var i in t) {
                        var n = e[i];
                        this.sortData[i] = n(this.element, this);
                    }
                }
            });
        var s = i.destroy;
        return (
            (i.destroy = function () {
                s.apply(this, arguments), this.css({ display: "" });
            }),
            e
        );
    }),
    (function (t, e) {
        "function" == typeof define && define.amd
            ? define(
                "isotope/layout-mode",
                ["get-size/get-size", "outlayer/outlayer"],
                e
            )
            : "object" == typeof module && module.exports
                ? (module.exports = e(require("get-size"), require("outlayer")))
                : ((t.Isotope = t.Isotope || {}),
                    (t.Isotope.LayoutMode = e(t.getSize, t.Outlayer)));
    })(window, function (t, e) {
        "use strict";
        function i(t) {
            (this.isotope = t),
                t &&
                ((this.options = t.options[this.namespace]),
                    (this.element = t.element),
                    (this.items = t.filteredItems),
                    (this.size = t.size));
        }
        var n = i.prototype;
        return (
            [
                "_resetLayout",
                "_getItemLayoutPosition",
                "_manageStamp",
                "_getContainerSize",
                "_getElementOffset",
                "needsResizeLayout",
                "_getOption",
            ].forEach(function (t) {
                n[t] = function () {
                    return e.prototype[t].apply(this.isotope, arguments);
                };
            }),
            (n.needsVerticalResizeLayout = function () {
                var e = t(this.isotope.element);
                return (
                    this.isotope.size &&
                    e &&
                    e.innerHeight != this.isotope.size.innerHeight
                );
            }),
            (n._getMeasurement = function () {
                this.isotope._getMeasurement.apply(this, arguments);
            }),
            (n.getColumnWidth = function () {
                this.getSegmentSize("column", "Width");
            }),
            (n.getRowHeight = function () {
                this.getSegmentSize("row", "Height");
            }),
            (n.getSegmentSize = function (t, e) {
                var i = t + e,
                    n = "outer" + e;
                if ((this._getMeasurement(i, n), !this[i])) {
                    var s = this.getFirstItemSize();
                    this[i] = (s && s[n]) || this.isotope.size["inner" + e];
                }
            }),
            (n.getFirstItemSize = function () {
                var e = this.isotope.filteredItems[0];
                return e && e.element && t(e.element);
            }),
            (n.layout = function () {
                this.isotope.layout.apply(this.isotope, arguments);
            }),
            (n.getSize = function () {
                this.isotope.getSize(), (this.size = this.isotope.size);
            }),
            (i.modes = {}),
            (i.create = function (t, e) {
                function s() {
                    i.apply(this, arguments);
                }
                return (
                    (s.prototype = Object.create(n)),
                    (s.prototype.constructor = s),
                    e && (s.options = e),
                    (s.prototype.namespace = t),
                    (i.modes[t] = s),
                    s
                );
            }),
            i
        );
    }),
    /*!
     * Masonry v4.1.0
     * Cascading grid layout library
     * http://masonry.desandro.com
     * MIT License
     * by David DeSandro
     */
    (function (t, e) {
        "function" == typeof define && define.amd
            ? define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size"], e)
            : "object" == typeof module && module.exports
                ? (module.exports = e(require("outlayer"), require("get-size")))
                : (t.Masonry = e(t.Outlayer, t.getSize));
    })(window, function (t, e) {
        var i = t.create("masonry");
        return (
            (i.compatOptions.fitWidth = "isFitWidth"),
            (i.prototype._resetLayout = function () {
                this.getSize(),
                    this._getMeasurement("columnWidth", "outerWidth"),
                    this._getMeasurement("gutter", "outerWidth"),
                    this.measureColumns(),
                    (this.colYs = []);
                for (var t = 0; t < this.cols; t++) this.colYs.push(0);
                this.maxY = 0;
            }),
            (i.prototype.measureColumns = function () {
                if ((this.getContainerWidth(), !this.columnWidth)) {
                    var t = this.items[0],
                        i = t && t.element;
                    this.columnWidth = (i && e(i).outerWidth) || this.containerWidth;
                }
                var n = (this.columnWidth += this.gutter),
                    s = this.containerWidth + this.gutter,
                    o = s / n,
                    a = n - (s % n);
                (o = Math[a && a < 1 ? "round" : "floor"](o)),
                    (this.cols = Math.max(o, 1));
            }),
            (i.prototype.getContainerWidth = function () {
                var t = this._getOption("fitWidth")
                    ? this.element.parentNode
                    : this.element,
                    i = e(t);
                this.containerWidth = i && i.innerWidth;
            }),
            (i.prototype._getItemLayoutPosition = function (t) {
                t.getSize();
                var e = t.size.outerWidth % this.columnWidth,
                    i = Math[e && e < 1 ? "round" : "ceil"](
                        t.size.outerWidth / this.columnWidth
                    );
                i = Math.min(i, this.cols);
                for (
                    var n = this._getColGroup(i),
                    s = Math.min.apply(Math, n),
                    o = n.indexOf(s),
                    a = { x: this.columnWidth * o, y: s },
                    r = s + t.size.outerHeight,
                    l = this.cols + 1 - n.length,
                    d = 0;
                    d < l;
                    d++
                )
                    this.colYs[o + d] = r;
                return a;
            }),
            (i.prototype._getColGroup = function (t) {
                if (t < 2) return this.colYs;
                for (var e = [], i = this.cols + 1 - t, n = 0; n < i; n++) {
                    var s = this.colYs.slice(n, n + t);
                    e[n] = Math.max.apply(Math, s);
                }
                return e;
            }),
            (i.prototype._manageStamp = function (t) {
                var i = e(t),
                    n = this._getElementOffset(t),
                    s = this._getOption("originLeft") ? n.left : n.right,
                    o = s + i.outerWidth,
                    a = Math.floor(s / this.columnWidth);
                a = Math.max(0, a);
                var r = Math.floor(o / this.columnWidth);
                (r -= o % this.columnWidth ? 0 : 1), (r = Math.min(this.cols - 1, r));
                for (
                    var l =
                        (this._getOption("originTop") ? n.top : n.bottom) + i.outerHeight,
                    d = a;
                    d <= r;
                    d++
                )
                    this.colYs[d] = Math.max(l, this.colYs[d]);
            }),
            (i.prototype._getContainerSize = function () {
                this.maxY = Math.max.apply(Math, this.colYs);
                var t = { height: this.maxY };
                return (
                    this._getOption("fitWidth") &&
                    (t.width = this._getContainerFitWidth()),
                    t
                );
            }),
            (i.prototype._getContainerFitWidth = function () {
                for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) t++;
                return (this.cols - t) * this.columnWidth - this.gutter;
            }),
            (i.prototype.needsResizeLayout = function () {
                var t = this.containerWidth;
                return this.getContainerWidth(), t != this.containerWidth;
            }),
            i
        );
    }),
    /*!
     * Masonry layout mode
     * sub-classes Masonry
     * http://masonry.desandro.com
     */
    (function (t, e) {
        "function" == typeof define && define.amd
            ? define(
                "isotope/layout-modes/masonry",
                ["../layout-mode", "masonry/masonry"],
                e
            )
            : "object" == typeof module && module.exports
                ? (module.exports = e(
                    require("../layout-mode"),
                    require("masonry-layout")
                ))
                : e(t.Isotope.LayoutMode, t.Masonry);
    })(window, function (t, e) {
        "use strict";
        var i = t.create("masonry"),
            n = i.prototype,
            s = { _getElementOffset: !0, layout: !0, _getMeasurement: !0 };
        for (var o in e.prototype) s[o] || (n[o] = e.prototype[o]);
        var a = n.measureColumns;
        n.measureColumns = function () {
            (this.items = this.isotope.filteredItems), a.call(this);
        };
        var r = n._getOption;
        return (
            (n._getOption = function (t) {
                return "fitWidth" == t
                    ? void 0 !== this.options.isFitWidth
                        ? this.options.isFitWidth
                        : this.options.fitWidth
                    : r.apply(this.isotope, arguments);
            }),
            i
        );
    }),
    (function (t, e) {
        "function" == typeof define && define.amd
            ? define("isotope/layout-modes/fit-rows", ["../layout-mode"], e)
            : "object" == typeof exports
                ? (module.exports = e(require("../layout-mode")))
                : e(t.Isotope.LayoutMode);
    })(window, function (t) {
        "use strict";
        var e = t.create("fitRows"),
            i = e.prototype;
        return (
            (i._resetLayout = function () {
                (this.x = 0),
                    (this.y = 0),
                    (this.maxY = 0),
                    this._getMeasurement("gutter", "outerWidth");
            }),
            (i._getItemLayoutPosition = function (t) {
                t.getSize();
                var e = t.size.outerWidth + this.gutter,
                    i = this.isotope.size.innerWidth + this.gutter;
                0 !== this.x && e + this.x > i && ((this.x = 0), (this.y = this.maxY));
                var n = { x: this.x, y: this.y };
                return (
                    (this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight)),
                    (this.x += e),
                    n
                );
            }),
            (i._getContainerSize = function () {
                return { height: this.maxY };
            }),
            e
        );
    }),
    (function (t, e) {
        "function" == typeof define && define.amd
            ? define("isotope/layout-modes/vertical", ["../layout-mode"], e)
            : "object" == typeof module && module.exports
                ? (module.exports = e(require("../layout-mode")))
                : e(t.Isotope.LayoutMode);
    })(window, function (t) {
        "use strict";
        var e = t.create("vertical", { horizontalAlignment: 0 }),
            i = e.prototype;
        return (
            (i._resetLayout = function () {
                this.y = 0;
            }),
            (i._getItemLayoutPosition = function (t) {
                t.getSize();
                var e =
                    (this.isotope.size.innerWidth - t.size.outerWidth) *
                    this.options.horizontalAlignment,
                    i = this.y;
                return (this.y += t.size.outerHeight), { x: e, y: i };
            }),
            (i._getContainerSize = function () {
                return { height: this.y };
            }),
            e
        );
    }),
    /*!
     * Isotope v3.0.0
     *
     * Licensed GPLv3 for open source use
     * or Isotope Commercial License for commercial use
     *
     * http://isotope.metafizzy.co
     * Copyright 2016 Metafizzy
     */
    (function (t, e) {
        "function" == typeof define && define.amd
            ? define(
                [
                    "outlayer/outlayer",
                    "get-size/get-size",
                    "desandro-matches-selector/matches-selector",
                    "fizzy-ui-utils/utils",
                    "./item",
                    "./layout-mode",
                    "./layout-modes/masonry",
                    "./layout-modes/fit-rows",
                    "./layout-modes/vertical",
                ],
                function (i, n, s, o, a, r) {
                    return e(t, i, n, s, o, a, r);
                }
            )
            : "object" == typeof module && module.exports
                ? (module.exports = e(
                    t,
                    require("outlayer"),
                    require("get-size"),
                    require("desandro-matches-selector"),
                    require("fizzy-ui-utils"),
                    require("./item"),
                    require("./layout-mode"),
                    require("./layout-modes/masonry"),
                    require("./layout-modes/fit-rows"),
                    require("./layout-modes/vertical")
                ))
                : (t.Isotope = e(
                    t,
                    t.Outlayer,
                    t.getSize,
                    t.matchesSelector,
                    t.fizzyUIUtils,
                    t.Isotope.Item,
                    t.Isotope.LayoutMode
                ));
    })(window, function (t, e, i, n, s, o, a) {
        var r = t.jQuery,
            l = String.prototype.trim
                ? function (t) {
                    return t.trim();
                }
                : function (t) {
                    return t.replace(/^\s+|\s+$/g, "");
                },
            d = e.create("isotope", {
                layoutMode: "masonry",
                isJQueryFiltering: !0,
                sortAscending: !0,
            });
        (d.Item = o), (d.LayoutMode = a);
        var c = d.prototype;
        (c._create = function () {
            for (var t in ((this.itemGUID = 0),
                (this._sorters = {}),
                this._getSorters(),
                e.prototype._create.call(this),
                (this.modes = {}),
                (this.filteredItems = this.items),
                (this.sortHistory = ["original-order"]),
                a.modes))
                this._initLayoutMode(t);
        }),
            (c.reloadItems = function () {
                (this.itemGUID = 0), e.prototype.reloadItems.call(this);
            }),
            (c._itemize = function () {
                for (
                    var t = e.prototype._itemize.apply(this, arguments), i = 0;
                    i < t.length;
                    i++
                ) {
                    t[i].id = this.itemGUID++;
                }
                return this._updateItemsSortData(t), t;
            }),
            (c._initLayoutMode = function (t) {
                var e = a.modes[t],
                    i = this.options[t] || {};
                (this.options[t] = e.options ? s.extend(e.options, i) : i),
                    (this.modes[t] = new e(this));
            }),
            (c.layout = function () {
                this._isLayoutInited || !this._getOption("initLayout")
                    ? this._layout()
                    : this.arrange();
            }),
            (c._layout = function () {
                var t = this._getIsInstant();
                this._resetLayout(),
                    this._manageStamps(),
                    this.layoutItems(this.filteredItems, t),
                    (this._isLayoutInited = !0);
            }),
            (c.arrange = function (t) {
                this.option(t), this._getIsInstant();
                var e = this._filter(this.items);
                (this.filteredItems = e.matches),
                    this._bindArrangeComplete(),
                    this._isInstant
                        ? this._noTransition(this._hideReveal, [e])
                        : this._hideReveal(e),
                    this._sort(),
                    this._layout();
            }),
            (c._init = c.arrange),
            (c._hideReveal = function (t) {
                this.reveal(t.needReveal), this.hide(t.needHide);
            }),
            (c._getIsInstant = function () {
                var t = this._getOption("layoutInstant"),
                    e = void 0 !== t ? t : !this._isLayoutInited;
                return (this._isInstant = e), e;
            }),
            (c._bindArrangeComplete = function () {
                var t,
                    e,
                    i,
                    n = this;
                function s() {
                    t &&
                        e &&
                        i &&
                        n.dispatchEvent("arrangeComplete", null, [n.filteredItems]);
                }
                this.once("layoutComplete", function () {
                    (t = !0), s();
                }),
                    this.once("hideComplete", function () {
                        (e = !0), s();
                    }),
                    this.once("revealComplete", function () {
                        (i = !0), s();
                    });
            }),
            (c._filter = function (t) {
                var e = this.options.filter;
                e = e || "*";
                for (
                    var i = [], n = [], s = [], o = this._getFilterTest(e), a = 0;
                    a < t.length;
                    a++
                ) {
                    var r = t[a];
                    if (!r.isIgnored) {
                        var l = o(r);
                        l && i.push(r),
                            l && r.isHidden ? n.push(r) : l || r.isHidden || s.push(r);
                    }
                }
                return { matches: i, needReveal: n, needHide: s };
            }),
            (c._getFilterTest = function (t) {
                return r && this.options.isJQueryFiltering
                    ? function (e) {
                        return r(e.element).is(t);
                    }
                    : "function" == typeof t
                        ? function (e) {
                            return t(e.element);
                        }
                        : function (e) {
                            return n(e.element, t);
                        };
            }),
            (c.updateSortData = function (t) {
                var e;
                t ? ((t = s.makeArray(t)), (e = this.getItems(t))) : (e = this.items),
                    this._getSorters(),
                    this._updateItemsSortData(e);
            }),
            (c._getSorters = function () {
                var t = this.options.getSortData;
                for (var e in t) {
                    var i = t[e];
                    this._sorters[e] = h(i);
                }
            }),
            (c._updateItemsSortData = function (t) {
                for (var e = t && t.length, i = 0; e && i < e; i++) {
                    t[i].updateSortData();
                }
            });
        var h = function (t) {
            if ("string" != typeof t) return t;
            var e = l(t).split(" "),
                i = e[0],
                n = i.match(/^\[(.+)\]$/),
                s = (function (t, e) {
                    return t
                        ? function (e) {
                            return e.getAttribute(t);
                        }
                        : function (t) {
                            var i = t.querySelector(e);
                            return i && i.textContent;
                        };
                })(n && n[1], i),
                o = d.sortDataParsers[e[1]];
            return (t = o
                ? function (t) {
                    return t && o(s(t));
                }
                : function (t) {
                    return t && s(t);
                });
        };
        (d.sortDataParsers = {
            parseInt: function (t) {
                return parseInt(t, 10);
            },
            parseFloat: function (t) {
                return parseFloat(t);
            },
        }),
            (c._sort = function () {
                var t = this.options.sortBy;
                if (t) {
                    var e = (function (t, e) {
                        return function (i, n) {
                            for (var s = 0; s < t.length; s++) {
                                var o = t[s],
                                    a = i.sortData[o],
                                    r = n.sortData[o],
                                    l = 0;
                                if (
                                    (i.layout.options.customSorters[o] instanceof Function
                                        ? (l = i.layout.options.customSorters[o].call(this, a, r))
                                        : a !== r && (l = a > r ? 1 : -1),
                                        0 !== l)
                                )
                                    return l * ((void 0 !== e[o] ? e[o] : e) ? 1 : -1);
                            }
                            return 0;
                        };
                    })([].concat.apply(t, this.sortHistory), this.options.sortAscending);
                    this.filteredItems.sort(e),
                        t != this.sortHistory[0] && this.sortHistory.unshift(t);
                }
            }),
            (c._mode = function () {
                var t = this.options.layoutMode,
                    e = this.modes[t];
                if (!e) throw new Error("No layout mode: " + t);
                return (e.options = this.options[t]), e;
            }),
            (c._resetLayout = function () {
                e.prototype._resetLayout.call(this), this._mode()._resetLayout();
            }),
            (c._getItemLayoutPosition = function (t) {
                return this._mode()._getItemLayoutPosition(t);
            }),
            (c._manageStamp = function (t) {
                this._mode()._manageStamp(t);
            }),
            (c._getContainerSize = function () {
                return this._mode()._getContainerSize();
            }),
            (c.needsResizeLayout = function () {
                return this._mode().needsResizeLayout();
            }),
            (c.appended = function (t) {
                var e = this.addItems(t);
                if (e.length) {
                    var i = this._filterRevealAdded(e);
                    this.filteredItems = this.filteredItems.concat(i);
                }
            }),
            (c.prepended = function (t) {
                var e = this._itemize(t);
                if (e.length) {
                    this._resetLayout(), this._manageStamps();
                    var i = this._filterRevealAdded(e);
                    this.layoutItems(this.filteredItems),
                        (this.filteredItems = i.concat(this.filteredItems)),
                        (this.items = e.concat(this.items));
                }
            }),
            (c._filterRevealAdded = function (t) {
                var e = this._filter(t);
                return (
                    this.hide(e.needHide),
                    this.reveal(e.matches),
                    this.layoutItems(e.matches, !0),
                    e.matches
                );
            }),
            (c.insert = function (t) {
                var e = this.addItems(t);
                if (e.length) {
                    var i,
                        n,
                        s = e.length;
                    for (i = 0; i < s; i++)
                        (n = e[i]), this.element.appendChild(n.element);
                    var o = this._filter(e).matches;
                    for (i = 0; i < s; i++) e[i].isLayoutInstant = !0;
                    for (this.arrange(), i = 0; i < s; i++) delete e[i].isLayoutInstant;
                    this.reveal(o);
                }
            });
        var u = c.remove;
        function p(t) {
            var e = t.create("fitRows");
            return (
                (e.prototype._resetLayout = function () {
                    if (
                        ((this.x = 0),
                            (this.y = 0),
                            (this.maxY = 0),
                            (this.row = 0),
                            (this.rows = []),
                            this._getMeasurement("gutter", "outerWidth"),
                            this.isotope.options.equalheight)
                    )
                        for (var t = 0; t < this.isotope.items.length; t++)
                            this.isotope.items[t].css({ height: "auto" });
                }),
                (e.prototype._getItemLayoutPosition = function (t) {
                    t.getSize();
                    var e = t.size.outerWidth,
                        i = Math.ceil(this.isotope.size.innerWidth + 1);
                    0 !== this.x &&
                        e + this.x > i &&
                        ((this.x = 0), (this.y = this.maxY)),
                        0 == this.x && 0 != this.y && this.row++;
                    var n = { x: this.x, y: this.y };
                    return (
                        (this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight)),
                        (this.x += e),
                        void 0 === this.rows[this.row]
                            ? ((this.rows[this.row] = []),
                                (this.rows[this.row].start = this.y),
                                (this.rows[this.row].end = this.maxY))
                            : (this.rows[this.row].end = Math.max(
                                this.rows[this.row].end,
                                this.maxY
                            )),
                        (t.row = this.row),
                        n
                    );
                }),
                (e.prototype._equalHeight = function () {
                    for (var t = 0; t < this.isotope.items.length; t++) {
                        var e = this.isotope.items[t].row,
                            i = this.rows[e];
                        if (i) {
                            var n = i.end - i.start;
                            (n -=
                                this.isotope.items[t].size.borderTopWidth +
                                this.isotope.items[t].size.borderBottomWidth),
                                (n -=
                                    this.isotope.items[t].size.marginTop +
                                    this.isotope.items[t].size.marginBottom),
                                (n -= this.gutter.height || 0),
                                0 == this.isotope.items[t].size.isBorderBox &&
                                (n -=
                                    this.isotope.items[t].size.paddingTop +
                                    this.isotope.items[t].size.paddingBottom),
                                (this.isotope.items[t].size.height = n),
                                this.isotope.items[t].css({ height: n.toString() + "px" });
                        }
                    }
                }),
                (e.prototype._getContainerSize = function () {
                    return (
                        this.isotope.options.equalheight && this._equalHeight(),
                        { height: this.maxY }
                    );
                }),
                e
            );
        }
        return (
            (c.remove = function (t) {
                t = s.makeArray(t);
                var e = this.getItems(t);
                u.call(this, t);
                for (var i = e && e.length, n = 0; i && n < i; n++) {
                    var o = e[n];
                    s.removeFrom(this.filteredItems, o);
                }
            }),
            (c.shuffle = function () {
                for (var t = 0; t < this.items.length; t++) {
                    this.items[t].sortData.random = Math.random();
                }
                (this.options.sortBy = "random"), this._sort(), this._layout();
            }),
            (c._noTransition = function (t, e) {
                var i = this.options.transitionDuration;
                this.options.transitionDuration = 0;
                var n = t.apply(this, e);
                return (this.options.transitionDuration = i), n;
            }),
            (c.getFilteredItemElements = function () {
                return this.filteredItems.map(function (t) {
                    return t.element;
                });
            }),
            "function" == typeof define && define.amd
                ? define(["../layout-mode"], p)
                : "object" == typeof exports
                    ? (module.exports = p(require("../layout-mode")))
                    : p(t.Isotope.LayoutMode),
            d
        );
    }),
    (function (t, e, i, n) {
        t(i);
        var s = t(e);
        t.fn.Filterade = function (e) {
            var i,
                n,
                o,
                a,
                r,
                l,
                d,
                c,
                h,
                u,
                p,
                f,
                m,
                g,
                v,
                y,
                w,
                b,
                C,
                _,
                x,
                S,
                I,
                k,
                T = !1;
            (l = {
                useFilters: !1,
                useSorting: !1,
                filterControls: ".filter-controls",
                sortControls: ".sort-controls",
                orderControls: ".order-controls",
                controlsSelecter: "input",
                controlsSelecterChecked: 'input[checked="checked"]',
                defaultFilter: "all",
                defaultSort: "date",
                defaultOrder: "desc",
                selectAll: "all",
                paginationMode: "pages",
                pageLimit: 15,
                pageControls: ".page-controls",
                previousButtonClass: "nav-prev",
                previousButtonLabel: "â†",
                nextButtonClass: "nav-next",
                nextButtonLabel: "â†’",
                loadMoreButtonClass: "button-load-more",
                loadMoreButtonLabel: "Load more",
                pagerClass: "page",
                activeClass: "act",
                log: !1,
            }),
                (r = t(this)),
                (I = e.customSorters || {}),
                (y = e.paginationMode || l.paginationMode),
                (w = t(e.pageControls || l.pageControls)),
                (d = t(e.filterControls || l.filterControls)),
                (c = t(e.sortControls || l.sortControls)),
                (h = t(e.orderControls || l.orderControls)),
                (u = e.controlsSelecter || l.controlsSelecter),
                (p = e.controlsSelecterChecked || l.controlsSelecterChecked),
                (n = 1),
                (S = r.parent().hasClass("show-all-pages") ? 999 : 5);
            var z = t(".phantom-sticky").exists(),
                L = t(".sticky-top-line").exists(),
                E = t(".phantom-fade").exists(),
                P = t(".phantom-slide").exists(),
                O = (t(".split-header").exists(), 0);
            return (
                z || L
                    ? (O = t(".masthead").height())
                    : (E || P) && (O = t("#phantom").height()),
                ((v = t([])).$nodesCache = t([])),
                r.find("> article, .wf-cell").each(function () {
                    var e = t(this);
                    v.push({
                        node: this,
                        $node: e,
                        name: e.attr("data-name"),
                        date: new Date(e.attr("data-date")),
                    }),
                        v.$nodesCache.push(this);
                }),
                (b = Math.ceil(v.length / e.pageLimit)),
                (g = function () {
                    var t;
                    ("pages" !== y && "load-more" !== y) ||
                        ((t = 0),
                            v.each(function () {
                                if (this.$node.hasClass("visible")) return t++;
                            }),
                            (b = Math.ceil(t / (e.pageLimit || l.pageLimit))));
                }),
                (C = function () {
                    var i, s;
                    if ("pages" === y) {
                        if ((w.empty(), w.addClass("hidden"), b > 1)) {
                            w.removeClass("hidden"),
                                1 !== n &&
                                w.prepend(
                                    '<a href="#" class="filter-item ' +
                                    (e.previousButtonClass || l.previousButtonClass) +
                                    '">' +
                                    (e.previousButtonLabel || l.previousButtonLabel) +
                                    "</a>"
                                );
                            var o = S - 1,
                                a = Math.floor(o / 2),
                                r = Math.ceil(o / 2),
                                d = Math.max(n - a, 1),
                                c = n + r;
                            d <= a && (c = d + o),
                                c > b && ((d = Math.max(b - o, 1)), (c = b));
                            var h = '<a href="javascript:void(0);" class="dots">â€¦</a>',
                                u = t('<div style="display: none;"></div>'),
                                p = t('<div style="display: none;"></div>');
                            for (
                                i = s = 1;
                                1 <= b ? s <= b : s >= b;
                                i = 1 <= b ? ++s : --s
                            ) {
                                var m =
                                    '<a href="#" class="' +
                                    (e.pagerClass || l.pagerClass) +
                                    '" data-page="' +
                                    +i +
                                    '">' +
                                    i +
                                    "</a>";
                                i < d && 1 != i
                                    ? u.append(m)
                                    : (i == d && u.children().length && w.append(u).append(t(h)),
                                        i > c && i != b
                                            ? p.append(m)
                                            : (i == b &&
                                                p.children().length &&
                                                w.append(p).append(t(h)),
                                                w.append(m)));
                            }
                            n < b &&
                                w.append(
                                    '<a href="#" class="filter-item ' +
                                    (e.nextButtonClass || l.nextButtonClass) +
                                    '">' +
                                    (e.nextButtonLabel || l.nextButtonLabel) +
                                    "</a>"
                                ),
                                w
                                    .find('a[data-page="' + n + '"]')
                                    .addClass(e.activeClass || l.activeClass);
                            var g = e.pagerClass || l.pagerClass;
                            (g = g.trim().replace(" ", ".")),
                                w.find("a.dots").click(function (e) {
                                    w.find("div:hidden a").unwrap(), t(this).remove();
                                }),
                                w.find("a." + g).click(function (i) {
                                    i.preventDefault(),
                                        (n = parseInt(t(this).attr("data-page"))),
                                        w
                                            .find("a." + (e.activeClass || l.activeClass))
                                            .removeClass(e.activeClass || l.activeClass),
                                        w
                                            .find('a[data-page="' + n + '"]')
                                            .addClass(e.activeClass || l.activeClass),
                                        f();
                                }),
                                w
                                    .find("a." + (e.previousButtonClass || l.previousButtonClass))
                                    .click(function (t) {
                                        t.preventDefault(), n--, f();
                                    }),
                                w
                                    .find("a." + (e.nextButtonClass || l.nextButtonClass))
                                    .click(function (t) {
                                        t.preventDefault(), n++, f();
                                    });
                        }
                    } else if ("load-more" === y && (w.addClass("hidden"), b > 1)) {
                        n < b && w.removeClass("hidden");
                        var v = e.loadMoreButtonClass || l.loadMoreButtonClass;
                        return (
                            (v = v.trim().replace(" ", ".")),
                            w.find("a:not(.filtrade-ready)." + v).click(function (e) {
                                return (
                                    e.preventDefault(),
                                    t(this).addClass("filtrade-ready"),
                                    !(n >= b) && (n++, x())
                                );
                            })
                        );
                    }
                }),
                (f = function () {
                    var e = r.parent().attr("data-scroll-offset")
                        ? parseInt(r.parent().attr("data-scroll-offset"))
                        : 0,
                        i = r;
                    r.hasClass("dt-css-grid") && (i = r.parent());
                    var n = i.offset().top - 40;
                    (!r.parent().hasClass("enable-pagination-scroll") &&
                        r.parent().hasClass("the7-elementor-widget")) ||
                        t("html, body").animate({ scrollTop: n - O + e }, 400),
                        x();
                }),
                (_ = function () {
                    const i = r.attr("data-columns")
                        ? JSON.parse(r.attr("data-columns"))
                        : {};
                    if ("pages" === y || "load-more" === y) {
                        var s = 0,
                            o = t([]),
                            a = t([]);
                        v.each(function (t) {
                            this.$node.hasClass("visible") &&
                                (s++,
                                    ("pages" === y &&
                                        s >
                                        n * (e.pageLimit || l.pageLimit) -
                                        (e.pageLimit || l.pageLimit) &&
                                        s <= (e.pageLimit || l.pageLimit) * n) ||
                                        ("load-more" === y && s <= (e.pageLimit || l.pageLimit) * n)
                                        ? a.push(this.node)
                                        : o.push(this.node));
                        }),
                            o.removeClass("visible").addClass("hidden"),
                            a.removeClass("hidden").addClass("visible"),
                            a.removeClass("first"),
                            a.first().addClass("first"),
                            i.d && a.slice(0, i.d).addClass("d-hide-divider"),
                            i.t && a.slice(0, i.t).addClass("t-hide-divider"),
                            i.p && a.slice(0, i.p).addClass("m-hide-divider"),
                            i.wd && a.slice(0, i.wd).addClass("wd-hide-divider"),
                            (T || ("pages" === y && "function" == typeof r.resetEffects)) &&
                            r.resetEffects();
                    }
                }),
                (m = function () {
                    var n = t([]),
                        s = t([]);
                    e.useFilters || l.useFilters
                        ? i === (e.selectAll || l.selectAll)
                            ? (s = v.$nodesCache)
                            : v.each(function (t) {
                                this.$node.hasClass(i.replace(/^\./, ""))
                                    ? s.push(this.node)
                                    : n.push(this.node);
                            })
                        : (s = v.$nodesCache),
                        n.removeClass("visible").addClass("hidden"),
                        s.removeClass("hidden").addClass("visible");
                }),
                (k = function () {
                    var e = "asc" === a ? 1 : -1;
                    I[o] instanceof Function
                        ? v.sort(function (t, i) {
                            return e * I[o].call(this, t, i);
                        })
                        : "date" === o
                            ? v.sort(function (t, i) {
                                return e * (t.date - i.date);
                            })
                            : "name" === o &&
                            v.sort(function (t, i) {
                                var n = t.name.toLowerCase(),
                                    s = i.name.toLowerCase(),
                                    o = 0;
                                return n !== s && (o = n > s ? 1 : -1), e * o;
                            }),
                        (v.$nodesCache = t([])),
                        v.each(function () {
                            v.$nodesCache.push(this.node);
                        }),
                        r.find(".paginator").length > 0
                            ? v.$nodesCache.detach().insertBefore(r.find(".paginator"))
                            : v.$nodesCache.detach().appendTo(r);
                }),
                (x = function () {
                    if ((m(), g(), _(), C(), r.hasClass("lazy-loading-mode"))) {
                        var e = r.find(".button-load-more").offset();
                        e &&
                            dtGlobals.winScrollTop > (e.top - s.height()) / 2 &&
                            r.find(".button-load-more").trigger("click");
                    }
                    t(
                        ".layzr-loading-on .blog-shortcode.jquery-filter.mode-list .visible:not(.shown)"
                    ).layzrBlogInitialisation(),
                        t(
                            ".layzr-loading-on .jquery-filter.dt-css-grid-wrap .wf-cell.visible"
                        ).layzrBlogInitialisation(),
                        r.trigger("updateReady");
                }),
                (function () {
                    return (
                        (e.useFilters || l.useFilters) &&
                        ((i =
                            d.find(p).attr("data-filter") ||
                            e.defaultFilter ||
                            l.defaultFilter),
                            d.find(u).click(function (e) {
                                (i = t(this).attr("data-filter")),
                                    (n = 1),
                                    (T = !0),
                                    x(),
                                    (T = !1);
                            })),
                        (e.useSorting || l.useSorting) &&
                        ((o =
                            c.find(p).attr("data-by") || e.defaultSort || l.defaultSort),
                            (a =
                                h.find(p).attr("data-sort") ||
                                e.defaultOrder ||
                                l.defaultOrder),
                            c.find(u).click(function (t) {
                                (o = "date" === this.getAttribute("data-by") ? "date" : "name"),
                                    k(),
                                    (n = 1),
                                    x();
                            }),
                            h.find(u).click(function (t) {
                                (a =
                                    "desc" === this.getAttribute("data-sort") ? "desc" : "asc"),
                                    k(),
                                    (n = 1),
                                    x();
                            })),
                        x()
                    );
                })()
            );
        };
    })(jQuery, window, document),
    (function (t) {
        var e = function (e, i) {
            var n,
                s,
                o,
                a,
                r,
                l,
                d,
                c,
                h,
                u,
                p,
                f,
                m = !1,
                g = null,
                v = {},
                y = {},
                w = { isUpdating: !1 },
                b = {
                    useFilters: !1,
                    useSorting: !1,
                    nodesSelector: "> article, .wf-cell",
                    filterControls: ".filter-controls",
                    sortControls: ".sort-controls",
                    orderControls: ".order-controls",
                    controlsSelecter: "input",
                    controlsSelecterChecked: 'input[checked="checked"]',
                    defaultFilter: "all",
                    defaultSort: "date",
                    defaultOrder: "desc",
                    selectAll: "all",
                    paginationMode: "pages",
                    pageLimit: 15,
                    pageControls: ".page-controls",
                    previousButtonClass: "nav-prev",
                    previousButtonLabel: "â†",
                    nextButtonClass: "nav-next",
                    nextButtonLabel: "â†’",
                    loadMoreButtonClass: "button-load-more",
                    loadMoreButtonLabel: "Load more",
                    pagerClass: "page",
                    activeClass: "act",
                    pagesToShow: 5,
                    usePaginationScroll: !1,
                    scrollPagesOffset: 0,
                    infinityScroll: !1,
                    classes: { visible: "visible", hidden: "hidden", first: "first" },
                },
                C = function () {
                    return !(s >= p) && (s++, I(), !0);
                },
                _ = function (t) {
                    r.trigger("beforeSwitchPage"),
                        x(t),
                        I(),
                        r.trigger("afterSwitchPage", [s]);
                },
                x = function (t) {
                    y.usePaginationScroll &&
                        void 0 !== window.the7ScrollToTargetEl &&
                        window.the7ScrollToTargetEl(r, "", t, !1, y.scrollPagesOffset);
                },
                S = function () {
                    var e = "asc" === a ? 1 : -1;
                    y.customSorters[o] instanceof Function
                        ? h.sort(function (t, i) {
                            return e * y.customSorters[o].call(this, t, i);
                        })
                        : "date" === o
                            ? h.sort(function (t, i) {
                                return e * (t.date - i.date);
                            })
                            : "name" === o &&
                            h.sort(function (t, i) {
                                var n = t.name.toLowerCase(),
                                    s = i.name.toLowerCase(),
                                    o = 0;
                                return n !== s && (o = n > s ? 1 : -1), e * o;
                            }),
                        (h.$nodesCache = t([])),
                        h.each(function () {
                            h.$nodesCache.push(this.node);
                        }),
                        r.find(".paginator").length > 0
                            ? h.$nodesCache.detach().insertBefore(r.find(".paginator"))
                            : h.$nodesCache.detach().appendTo(r);
                },
                I = function () {
                    var e, i;
                    (e = t([])),
                        (i = t([])),
                        y.useFilters
                            ? n === y.selectAll
                                ? (i = h.$nodesCache)
                                : h.each(function (t) {
                                    this.$node.hasClass(n.replace(/^\./, ""))
                                        ? i.push(this.node)
                                        : e.push(this.node);
                                })
                            : (i = h.$nodesCache),
                        e.removeClass(y.classes.visible).addClass(y.classes.hidden),
                        i.removeClass(y.classes.hidden).addClass(y.classes.visible),
                        (function () {
                            if (
                                ((p = Math.ceil(h.length / y.pageLimit)),
                                    "pages" === y.paginationMode ||
                                    "load-more" === y.paginationMode)
                            ) {
                                var t = 0;
                                h.each(function () {
                                    if (this.$node.hasClass(y.classes.visible)) return t++;
                                }),
                                    (p = Math.ceil(t / y.pageLimit));
                            }
                        })(),
                        (function () {
                            if (
                                "pages" === y.paginationMode ||
                                "load-more" === y.paginationMode
                            ) {
                                var e = 0,
                                    i = t([]),
                                    n = t([]);
                                h.each(function (t) {
                                    this.$node.hasClass(y.classes.visible) &&
                                        (e++,
                                            ("pages" === y.paginationMode &&
                                                e > s * y.pageLimit - y.pageLimit &&
                                                e <= y.pageLimit * s) ||
                                                ("load-more" === y.paginationMode && e <= y.pageLimit * s)
                                                ? n.push(this.node)
                                                : i.push(this.node));
                                }),
                                    i.removeClass(y.classes.visible).addClass(y.classes.hidden),
                                    n.removeClass(y.classes.hidden).addClass(y.classes.visible),
                                    n.removeClass(y.classes.first),
                                    n.first().addClass(y.classes.first),
                                    w.isUpdating ||
                                    ((m ||
                                        ("pages" === y.paginationMode &&
                                            "function" == typeof r.resetEffects)) &&
                                        r.resetEffects()),
                                    r.trigger("paginateResults", [n]);
                            }
                        })(),
                        (function () {
                            var e, i;
                            if ("pages" === y.paginationMode) {
                                if ((u.empty(), u.addClass(y.classes.hidden), p > 1)) {
                                    u.removeClass(y.classes.hidden),
                                        1 !== s &&
                                        u.prepend(
                                            '<a href="#" class="filter-item ' +
                                            y.previousButtonClass +
                                            '">' +
                                            y.previousButtonLabel +
                                            "</a>"
                                        );
                                    var n = y.pagesToShow - 1,
                                        o = Math.floor(n / 2),
                                        a = Math.ceil(n / 2),
                                        r = Math.max(s - o, 1),
                                        l = s + a;
                                    r <= o && (l = r + n),
                                        l > p && ((r = Math.max(p - n, 1)), (l = p));
                                    var d = '<a href="javascript:void(0);" class="dots">â€¦</a>',
                                        c = t('<div style="display: none;"></div>'),
                                        h = t('<div style="display: none;"></div>');
                                    for (
                                        e = i = 1;
                                        1 <= p ? i <= p : i >= p;
                                        e = 1 <= p ? ++i : --i
                                    ) {
                                        var m =
                                            '<a href="#" class="' +
                                            y.pagerClass +
                                            '" data-page="' +
                                            +e +
                                            '">' +
                                            e +
                                            "</a>";
                                        e < r && 1 !== e
                                            ? c.append(m)
                                            : (e === r &&
                                                c.children().length &&
                                                u.append(c).append(t(d)),
                                                e > l && e !== p
                                                    ? h.append(m)
                                                    : (e === p &&
                                                        h.children().length &&
                                                        u.append(h).append(t(d)),
                                                        u.append(m)));
                                    }
                                    s < p &&
                                        u.append(
                                            '<a href="#" class="filter-item ' +
                                            y.nextButtonClass +
                                            '">' +
                                            y.nextButtonLabel +
                                            "</a>"
                                        ),
                                        u.find('a[data-page="' + s + '"]').addClass(y.activeClass);
                                    var g = y.pagerClass;
                                    (g = g.trim().replace(" ", ".")),
                                        T("pagesDots", u.find("a.dots"), "click", function (e) {
                                            u.find("div:hidden a").unwrap(), t(this).remove();
                                        }),
                                        T(
                                            "pagesPagerClass",
                                            u.find("a." + g),
                                            "click",
                                            function (e) {
                                                e.preventDefault(),
                                                    (s = parseInt(t(this).attr("data-page"))),
                                                    u
                                                        .find("a." + y.activeClass)
                                                        .removeClass(y.activeClass),
                                                    u
                                                        .find('a[data-page="' + s + '"]')
                                                        .addClass(y.activeClass),
                                                    _(t(this));
                                            }
                                        ),
                                        T(
                                            "pagesPrev",
                                            u.find("a." + y.previousButtonClass),
                                            "click",
                                            function (e) {
                                                e.preventDefault(), s--, _(t(this));
                                            }
                                        ),
                                        T(
                                            "pagesNext",
                                            u.find("a." + y.nextButtonClass),
                                            "click",
                                            function (e) {
                                                e.preventDefault(), s++, _(t(this));
                                            }
                                        );
                                }
                            } else
                                "load-more" === y.paginationMode &&
                                    (u.addClass(y.classes.hidden),
                                        p > 1 &&
                                        (s < p && u.removeClass(y.classes.hidden),
                                            T("paginateLoadMore", f, "click", function (t) {
                                                t.preventDefault(), C();
                                            })));
                        })(),
                        r.trigger("updateReady");
                },
                k = function (i) {
                    (r = t(e)),
                        (function (e) {
                            (y = t.extend(!0, b, e)),
                                (u = t(y.pageControls)),
                                (l = t(y.filterControls)),
                                (d = t(y.sortControls)),
                                (c = t(y.orderControls)),
                                (f = u.find("." + y.loadMoreButtonClass));
                        })(i),
                        (s = 1),
                        ((h = t([])).$nodesCache = t([])),
                        r.find(y.nodesSelector).each(function () {
                            var e = t(this);
                            h.push({
                                node: this,
                                $node: e,
                                name: e.attr("data-name"),
                                date: new Date(e.attr("data-date")),
                            }),
                                h.$nodesCache.push(this);
                        }),
                        y.useFilters &&
                        ((n =
                            l.find(y.controlsSelecterChecked).attr("data-filter") ||
                            y.defaultFilter),
                            T(
                                "filtersFilterControl",
                                l.find(y.controlsSelecter),
                                "click",
                                function (e) {
                                    (n = t(this).attr("data-filter")),
                                        (s = 1),
                                        (m = !0),
                                        I(),
                                        (m = !1);
                                }
                            )),
                        y.useSorting &&
                        ((o =
                            d.find(y.controlsSelecterChecked).attr("data-by") ||
                            y.defaultSort),
                            (a =
                                c.find(y.controlsSelecterChecked).attr("data-sort") ||
                                y.defaultOrder),
                            T(
                                "sortSortControls",
                                d.find(y.controlsSelecter),
                                "click",
                                function (t) {
                                    (o =
                                        "date" === this.getAttribute("data-by") ? "date" : "name"),
                                        S(),
                                        (s = 1),
                                        I();
                                }
                            ),
                            T(
                                "sortOrderControls",
                                c.find(y.controlsSelecter),
                                "click",
                                function (t) {
                                    (a =
                                        "desc" === this.getAttribute("data-sort") ? "desc" : "asc"),
                                        S(),
                                        (s = 1),
                                        I();
                                }
                            )),
                        y.infinityScroll &&
                        (g = new The7Scroll({
                            offset: "0% 0% 25%",
                            callback: (t) => {
                                t.isInViewport && (g.unobserve(f[0]), C() && g.observe(f[0]));
                            },
                        }).getScrollObserver()).observe(f[0]),
                        I();
                },
                T = function (t, e, i, n) {
                    e.length &&
                        (z(t),
                            e.on(i, n),
                            (v[t] = { element: e, eventName: i, callback: n }));
                },
                z = function (t) {
                    if (t in v) {
                        var e = v[t];
                        e.element.off(e.eventName, e.callback), delete v[t];
                    }
                };
            (this.update = function (t) {
                this.destroy(), (w.isUpdating = !0), k(t), (w.isUpdating = !1);
            }),
                (this.destroy = function () {
                    Object.values(v).forEach((t) => {
                        t.element.off(t.eventName, t.callback);
                    }),
                        (v = {}),
                        null != g && (g.unobserve(f[0]), (g = null));
                }),
                k(i);
        };
        t.fn.The7SimpleFilterade = function (i) {
            var n = "string" == typeof i,
                s = Array.prototype.slice.call(arguments, 1);
            return (
                this.each(function () {
                    var o = t(this);
                    if (n) {
                        var a = o.data("the7-simple-filterade");
                        if (!a)
                            throw Error(
                                "Trying to perform the `" +
                                i +
                                "` method prior to initialization"
                            );
                        if (!a[i])
                            throw ReferenceError("Method `" + i + "` not found in instance");
                        a[i].apply(a, s),
                            "destroy" === i && o.removeData("the7-simple-filterade");
                    } else o.data("the7-simple-filterade", new e(this, i));
                }),
                this
            );
        };
    })(jQuery),
    (function (t, e) {
        "function" == typeof define && define.amd
            ? define(e)
            : "object" == typeof exports
                ? (module.exports = e())
                : (t.ResizeSensor = e());
    })("undefined" != typeof window ? window : this, function () {
        if ("undefined" == typeof window) return null;
        var t =
            window.requestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            function (t) {
                return window.setTimeout(t, 20);
            };
        function e(t, e) {
            var i = Object.prototype.toString.call(t),
                n =
                    "[object Array]" === i ||
                    "[object NodeList]" === i ||
                    "[object HTMLCollection]" === i ||
                    "[object Object]" === i ||
                    ("undefined" != typeof jQuery && t instanceof jQuery) ||
                    ("undefined" != typeof Elements && t instanceof Elements),
                s = 0,
                o = t.length;
            if (n) for (; s < o; s++) e(t[s]);
            else e(t);
        }
        function i(t) {
            if (!t.getBoundingClientRect)
                return { width: t.offsetWidth, height: t.offsetHeight };
            var e = t.getBoundingClientRect();
            return { width: Math.round(e.width), height: Math.round(e.height) };
        }
        var n = function (s, o) {
            function a() {
                var t,
                    e,
                    i = [];
                (this.add = function (t) {
                    i.push(t);
                }),
                    (this.call = function (n) {
                        for (t = 0, e = i.length; t < e; t++) i[t].call(this, n);
                    }),
                    (this.remove = function (n) {
                        var s = [];
                        for (t = 0, e = i.length; t < e; t++) i[t] !== n && s.push(i[t]);
                        i = s;
                    }),
                    (this.length = function () {
                        return i.length;
                    });
            }
            function r(e, n) {
                if (e)
                    if (e.resizedAttached) e.resizedAttached.add(n);
                    else {
                        (e.resizedAttached = new a()),
                            e.resizedAttached.add(n),
                            (e.resizeSensor = document.createElement("div")),
                            (e.resizeSensor.dir = "ltr"),
                            (e.resizeSensor.className = "resize-sensor");
                        var s =
                            "pointer-events: none; position: absolute; left: 0px; top: 0px; right: 0; bottom: 0; overflow: hidden; z-index: -1; visibility: hidden; max-width: 100%;",
                            o = "position: absolute; left: 0; top: 0; transition: 0s;";
                        (e.resizeSensor.style.cssText = s),
                            (e.resizeSensor.innerHTML =
                                '<div class="resize-sensor-expand" style="' +
                                s +
                                '"><div style="' +
                                o +
                                '"></div></div><div class="resize-sensor-shrink" style="' +
                                s +
                                '"><div style="' +
                                o +
                                ' width: 200%; height: 200%"></div></div>'),
                            e.appendChild(e.resizeSensor);
                        var r = window.getComputedStyle(e),
                            l = r ? r.getPropertyValue("position") : null;
                        "absolute" !== l &&
                            "relative" !== l &&
                            "fixed" !== l &&
                            (e.style.position = "relative");
                        var d,
                            c,
                            h = e.resizeSensor.childNodes[0],
                            u = h.childNodes[0],
                            p = e.resizeSensor.childNodes[1],
                            f = i(e),
                            m = f.width,
                            g = f.height,
                            v = !0,
                            y = 0,
                            w = function () {
                                if (v) {
                                    if (0 === e.offsetWidth && 0 === e.offsetHeight)
                                        return void (
                                            y ||
                                            (y = t(function () {
                                                (y = 0), w();
                                            }))
                                        );
                                    v = !1;
                                }
                                var i, n;
                                (i = e.offsetWidth),
                                    (n = e.offsetHeight),
                                    (u.style.width = i + 10 + "px"),
                                    (u.style.height = n + 10 + "px"),
                                    (h.scrollLeft = i + 10),
                                    (h.scrollTop = n + 10),
                                    (p.scrollLeft = i + 10),
                                    (p.scrollTop = n + 10);
                            };
                        e.resizeSensor.resetSensor = w;
                        var b = function () {
                            (c = 0),
                                d &&
                                ((m = f.width),
                                    (g = f.height),
                                    e.resizedAttached && e.resizedAttached.call(f));
                        },
                            C = function () {
                                (f = i(e)),
                                    (d = f.width !== m || f.height !== g) && !c && (c = t(b)),
                                    w();
                            },
                            _ = function (t, e, i) {
                                t.attachEvent
                                    ? t.attachEvent("on" + e, i)
                                    : t.addEventListener(e, i);
                            };
                        _(h, "scroll", C), _(p, "scroll", C), t(w);
                    }
            }
            e(s, function (t) {
                r(t, o);
            }),
                (this.detach = function (t) {
                    n.detach(s, t);
                }),
                (this.reset = function () {
                    s.resizeSensor.resetSensor();
                });
        };
        if (
            ((n.reset = function (t) {
                e(t, function (t) {
                    t.resizeSensor.resetSensor();
                });
            }),
                (n.detach = function (t, i) {
                    e(t, function (t) {
                        t &&
                            ((t.resizedAttached &&
                                "function" == typeof i &&
                                (t.resizedAttached.remove(i), t.resizedAttached.length())) ||
                                (t.resizeSensor &&
                                    (t.contains(t.resizeSensor) && t.removeChild(t.resizeSensor),
                                        delete t.resizeSensor,
                                        delete t.resizedAttached)));
                    });
                }),
                "undefined" != typeof MutationObserver)
        ) {
            var s = new MutationObserver(function (t) {
                for (var e in t)
                    if (t.hasOwnProperty(e))
                        for (var i = t[e].addedNodes, s = 0; s < i.length; s++)
                            i[s].resizeSensor && n.reset(i[s]);
            });
            document.addEventListener("DOMContentLoaded", function (t) {
                s.observe(document.body, { childList: !0, subtree: !0 });
            });
        }
        return n;
    }),
    (function (t, e) {
        "object" == typeof exports && "undefined" != typeof module
            ? e(exports)
            : "function" == typeof define && define.amd
                ? define(["exports"], e)
                : e((t.StickySidebar = {}));
    })(this, function (t) {
        "use strict";
        "undefined" != typeof window
            ? window
            : "undefined" != typeof global
                ? global
                : "undefined" != typeof self && self;
        var e,
            i,
            n =
                ((function (t, e) {
                    !(function (t) {
                        Object.defineProperty(t, "__esModule", { value: !0 });
                        var e,
                            i,
                            n = (function () {
                                function t(t, e) {
                                    for (var i = 0; i < e.length; i++) {
                                        var n = e[i];
                                        (n.enumerable = n.enumerable || !1),
                                            (n.configurable = !0),
                                            "value" in n && (n.writable = !0),
                                            Object.defineProperty(t, n.key, n);
                                    }
                                }
                                return function (e, i, n) {
                                    return i && t(e.prototype, i), n && t(e, n), e;
                                };
                            })(),
                            s =
                                ((e = ".stickySidebar"),
                                    (i = {
                                        topSpacing: 0,
                                        bottomSpacing: 0,
                                        containerSelector: !1,
                                        innerWrapperSelector: ".inner-wrapper-sticky",
                                        stickyClass: "is-affixed",
                                        resizeSensor: !0,
                                        minWidth: !1,
                                    }),
                                    (function () {
                                        function t(e) {
                                            var n = this,
                                                s =
                                                    1 < arguments.length && void 0 !== arguments[1]
                                                        ? arguments[1]
                                                        : {};
                                            if (
                                                ((function (t, e) {
                                                    if (!(t instanceof e))
                                                        throw new TypeError(
                                                            "Cannot call a class as a function"
                                                        );
                                                })(this, t),
                                                    (this.options = t.extend(i, s)),
                                                    (this.sidebar =
                                                        "string" == typeof e ? document.querySelector(e) : e),
                                                    void 0 === this.sidebar)
                                            )
                                                throw new Error("There is no specific sidebar element.");
                                            (this.sidebarInner = !1),
                                                (this.container = this.sidebar.parentElement),
                                                (this.affixedType = "STATIC"),
                                                (this.direction = "down"),
                                                (this.support = { transform: !1, transform3d: !1 }),
                                                (this._initialized = !1),
                                                (this._reStyle = !1),
                                                (this._breakpoint = !1),
                                                (this.dimensions = {
                                                    translateY: 0,
                                                    maxTranslateY: 0,
                                                    topSpacing: 0,
                                                    lastTopSpacing: 0,
                                                    bottomSpacing: 0,
                                                    lastBottomSpacing: 0,
                                                    sidebarHeight: 0,
                                                    sidebarWidth: 0,
                                                    containerTop: 0,
                                                    containerHeight: 0,
                                                    viewportHeight: 0,
                                                    viewportTop: 0,
                                                    lastViewportTop: 0,
                                                }),
                                                ["handleEvent"].forEach(function (t) {
                                                    n[t] = n[t].bind(n);
                                                }),
                                                this.initialize();
                                        }
                                        return (
                                            n(
                                                t,
                                                [
                                                    {
                                                        key: "initialize",
                                                        value: function () {
                                                            var t = this;
                                                            if (
                                                                (this._setSupportFeatures(),
                                                                    this.options.innerWrapperSelector &&
                                                                    ((this.sidebarInner =
                                                                        this.sidebar.querySelector(
                                                                            this.options.innerWrapperSelector
                                                                        )),
                                                                        null === this.sidebarInner &&
                                                                        (this.sidebarInner = !1)),
                                                                    !this.sidebarInner)
                                                            ) {
                                                                var e = document.createElement("div");
                                                                for (
                                                                    e.setAttribute("class", "inner-wrapper-sticky"),
                                                                    this.sidebar.appendChild(e);
                                                                    this.sidebar.firstChild != e;

                                                                )
                                                                    e.appendChild(this.sidebar.firstChild);
                                                                this.sidebarInner = this.sidebar.querySelector(
                                                                    ".inner-wrapper-sticky"
                                                                );
                                                            }
                                                            if (this.options.containerSelector) {
                                                                var i = document.querySelectorAll(
                                                                    this.options.containerSelector
                                                                );
                                                                if (
                                                                    ((i = Array.prototype.slice.call(i)).forEach(
                                                                        function (e, i) {
                                                                            e.contains(t.sidebar) && (t.container = e);
                                                                        }
                                                                    ),
                                                                        !i.length)
                                                                )
                                                                    throw new Error(
                                                                        "The container does not contains on the sidebar."
                                                                    );
                                                            }
                                                            "function" != typeof this.options.topSpacing &&
                                                                (this.options.topSpacing =
                                                                    parseInt(this.options.topSpacing) || 0),
                                                                "function" != typeof this.options.bottomSpacing &&
                                                                (this.options.bottomSpacing =
                                                                    parseInt(this.options.bottomSpacing) || 0),
                                                                this._widthBreakpoint(),
                                                                this.calcDimensions(),
                                                                this.stickyPosition(),
                                                                this.bindEvents(),
                                                                (this._initialized = !0);
                                                        },
                                                    },
                                                    {
                                                        key: "bindEvents",
                                                        value: function () {
                                                            window.addEventListener("resize", this, {
                                                                passive: !0,
                                                                capture: !1,
                                                            }),
                                                                window.addEventListener("scroll", this, {
                                                                    passive: !0,
                                                                    capture: !1,
                                                                }),
                                                                this.sidebar.addEventListener("update" + e, this),
                                                                this.options.resizeSensor &&
                                                                "undefined" != typeof ResizeSensor &&
                                                                (new ResizeSensor(
                                                                    this.sidebarInner,
                                                                    this.handleEvent
                                                                ),
                                                                    new ResizeSensor(
                                                                        this.container,
                                                                        this.handleEvent
                                                                    ));
                                                        },
                                                    },
                                                    {
                                                        key: "handleEvent",
                                                        value: function (t) {
                                                            this.updateSticky(t);
                                                        },
                                                    },
                                                    {
                                                        key: "calcDimensions",
                                                        value: function () {
                                                            if (!this._breakpoint) {
                                                                var e = this.dimensions;
                                                                (e.containerTop = t.offsetRelative(
                                                                    this.container
                                                                ).top),
                                                                    (e.containerHeight =
                                                                        this.container.clientHeight),
                                                                    (e.containerBottom =
                                                                        e.containerTop + e.containerHeight),
                                                                    (e.sidebarHeight =
                                                                        this.sidebarInner.offsetHeight),
                                                                    (e.sidebarWidth =
                                                                        this.sidebarInner.offsetWidth),
                                                                    (e.viewportHeight = window.innerHeight),
                                                                    (e.maxTranslateY =
                                                                        e.containerHeight - e.sidebarHeight),
                                                                    this._calcDimensionsWithScroll();
                                                            }
                                                        },
                                                    },
                                                    {
                                                        key: "_calcDimensionsWithScroll",
                                                        value: function () {
                                                            var e = this.dimensions;
                                                            (e.sidebarLeft = t.offsetRelative(
                                                                this.sidebar
                                                            ).left),
                                                                (e.viewportTop =
                                                                    document.documentElement.scrollTop ||
                                                                    document.body.scrollTop),
                                                                (e.viewportBottom =
                                                                    e.viewportTop + e.viewportHeight),
                                                                (e.viewportLeft =
                                                                    document.documentElement.scrollLeft ||
                                                                    document.body.scrollLeft),
                                                                (e.topSpacing = this.options.topSpacing),
                                                                (e.bottomSpacing = this.options.bottomSpacing),
                                                                "function" == typeof e.topSpacing &&
                                                                (e.topSpacing =
                                                                    parseInt(e.topSpacing(this.sidebar)) || 0),
                                                                "function" == typeof e.bottomSpacing &&
                                                                (e.bottomSpacing =
                                                                    parseInt(e.bottomSpacing(this.sidebar)) || 0),
                                                                "VIEWPORT-TOP" === this.affixedType
                                                                    ? e.topSpacing < e.lastTopSpacing &&
                                                                    ((e.translateY +=
                                                                        e.lastTopSpacing - e.topSpacing),
                                                                        (this._reStyle = !0))
                                                                    : "VIEWPORT-BOTTOM" === this.affixedType &&
                                                                    e.bottomSpacing < e.lastBottomSpacing &&
                                                                    ((e.translateY +=
                                                                        e.lastBottomSpacing - e.bottomSpacing),
                                                                        (this._reStyle = !0)),
                                                                (e.lastTopSpacing = e.topSpacing),
                                                                (e.lastBottomSpacing = e.bottomSpacing);
                                                        },
                                                    },
                                                    {
                                                        key: "isSidebarFitsViewport",
                                                        value: function () {
                                                            var t = this.dimensions,
                                                                e =
                                                                    "down" === this.scrollDirection
                                                                        ? t.lastBottomSpacing
                                                                        : t.lastTopSpacing;
                                                            return (
                                                                this.dimensions.sidebarHeight + e <
                                                                this.dimensions.viewportHeight
                                                            );
                                                        },
                                                    },
                                                    {
                                                        key: "observeScrollDir",
                                                        value: function () {
                                                            var t = this.dimensions;
                                                            if (t.lastViewportTop !== t.viewportTop) {
                                                                var e =
                                                                    "down" === this.direction ? Math.min : Math.max;
                                                                t.viewportTop ===
                                                                    e(t.viewportTop, t.lastViewportTop) &&
                                                                    (this.direction =
                                                                        "down" === this.direction ? "up" : "down");
                                                            }
                                                        },
                                                    },
                                                    {
                                                        key: "getAffixType",
                                                        value: function () {
                                                            this._calcDimensionsWithScroll();
                                                            var t = this.dimensions,
                                                                e = t.viewportTop + t.topSpacing,
                                                                i = this.affixedType;
                                                            return (
                                                                e <= t.containerTop ||
                                                                    t.containerHeight <= t.sidebarHeight
                                                                    ? ((t.translateY = 0), (i = "STATIC"))
                                                                    : (i =
                                                                        "up" === this.direction
                                                                            ? this._getAffixTypeScrollingUp()
                                                                            : this._getAffixTypeScrollingDown()),
                                                                (t.translateY = Math.max(0, t.translateY)),
                                                                (t.translateY = Math.min(
                                                                    t.containerHeight,
                                                                    t.translateY
                                                                )),
                                                                (t.translateY = Math.round(t.translateY)),
                                                                (t.lastViewportTop = t.viewportTop),
                                                                i
                                                            );
                                                        },
                                                    },
                                                    {
                                                        key: "_getAffixTypeScrollingDown",
                                                        value: function () {
                                                            var t = this.dimensions,
                                                                e = t.sidebarHeight + t.containerTop,
                                                                i = t.viewportTop + t.topSpacing,
                                                                n = t.viewportBottom - t.bottomSpacing,
                                                                s = this.affixedType;
                                                            return (
                                                                this.isSidebarFitsViewport()
                                                                    ? t.sidebarHeight + i >= t.containerBottom
                                                                        ? ((t.translateY = t.containerBottom - e),
                                                                            (s = "CONTAINER-BOTTOM"))
                                                                        : i >= t.containerTop &&
                                                                        ((t.translateY = i - t.containerTop),
                                                                            (s = "VIEWPORT-TOP"))
                                                                    : t.containerBottom <= n
                                                                        ? ((t.translateY = t.containerBottom - e),
                                                                            (s = "CONTAINER-BOTTOM"))
                                                                        : e + t.translateY <= n
                                                                            ? ((t.translateY = n - e),
                                                                                (s = "VIEWPORT-BOTTOM"))
                                                                            : t.containerTop + t.translateY <= i &&
                                                                            0 !== t.translateY &&
                                                                            t.maxTranslateY !== t.translateY &&
                                                                            (s = "VIEWPORT-UNBOTTOM"),
                                                                s
                                                            );
                                                        },
                                                    },
                                                    {
                                                        key: "_getAffixTypeScrollingUp",
                                                        value: function () {
                                                            var t = this.dimensions,
                                                                e = t.sidebarHeight + t.containerTop,
                                                                i = t.viewportTop + t.topSpacing,
                                                                n = t.viewportBottom - t.bottomSpacing,
                                                                s = this.affixedType;
                                                            return (
                                                                i <= t.translateY + t.containerTop
                                                                    ? ((t.translateY = i - t.containerTop),
                                                                        (s = "VIEWPORT-TOP"))
                                                                    : t.containerBottom <= n
                                                                        ? ((t.translateY = t.containerBottom - e),
                                                                            (s = "CONTAINER-BOTTOM"))
                                                                        : this.isSidebarFitsViewport() ||
                                                                        (t.containerTop <= i &&
                                                                            0 !== t.translateY &&
                                                                            t.maxTranslateY !== t.translateY &&
                                                                            (s = "VIEWPORT-UNBOTTOM")),
                                                                s
                                                            );
                                                        },
                                                    },
                                                    {
                                                        key: "_getStyle",
                                                        value: function (e) {
                                                            if (void 0 !== e) {
                                                                var i = { inner: {}, outer: {} },
                                                                    n = this.dimensions;
                                                                switch (e) {
                                                                    case "VIEWPORT-TOP":
                                                                        i.inner = {
                                                                            position: "fixed",
                                                                            top: n.topSpacing,
                                                                            left: n.sidebarLeft - n.viewportLeft,
                                                                            width: n.sidebarWidth,
                                                                        };
                                                                        break;
                                                                    case "VIEWPORT-BOTTOM":
                                                                        i.inner = {
                                                                            position: "fixed",
                                                                            top: "auto",
                                                                            left: n.sidebarLeft,
                                                                            bottom: n.bottomSpacing,
                                                                            width: n.sidebarWidth,
                                                                        };
                                                                        break;
                                                                    case "CONTAINER-BOTTOM":
                                                                    case "VIEWPORT-UNBOTTOM":
                                                                        var s = this._getTranslate(
                                                                            0,
                                                                            n.translateY + "px"
                                                                        );
                                                                        i.inner = s
                                                                            ? { transform: s }
                                                                            : {
                                                                                position: "absolute",
                                                                                top: n.translateY,
                                                                                width: n.sidebarWidth,
                                                                            };
                                                                }
                                                                switch (e) {
                                                                    case "VIEWPORT-TOP":
                                                                    case "VIEWPORT-BOTTOM":
                                                                    case "VIEWPORT-UNBOTTOM":
                                                                    case "CONTAINER-BOTTOM":
                                                                        i.outer = {
                                                                            height: n.sidebarHeight,
                                                                            position: "relative",
                                                                        };
                                                                }
                                                                return (
                                                                    (i.outer = t.extend(
                                                                        { height: "", position: "" },
                                                                        i.outer
                                                                    )),
                                                                    (i.inner = t.extend(
                                                                        {
                                                                            position: "relative",
                                                                            top: "",
                                                                            left: "",
                                                                            bottom: "",
                                                                            width: "",
                                                                            transform: "",
                                                                        },
                                                                        i.inner
                                                                    )),
                                                                    i
                                                                );
                                                            }
                                                        },
                                                    },
                                                    {
                                                        key: "stickyPosition",
                                                        value: function (i) {
                                                            if (!this._breakpoint) {
                                                                (i = this._reStyle || i || !1),
                                                                    this.options.topSpacing,
                                                                    this.options.bottomSpacing;
                                                                var n = this.getAffixType(),
                                                                    s = this._getStyle(n);
                                                                if ((this.affixedType != n || i) && n) {
                                                                    var o =
                                                                        "affix." +
                                                                        n.toLowerCase().replace("viewport-", "") +
                                                                        e;
                                                                    for (var a in (t.eventTrigger(this.sidebar, o),
                                                                        "STATIC" === n
                                                                            ? t.removeClass(
                                                                                this.sidebar,
                                                                                this.options.stickyClass
                                                                            )
                                                                            : t.addClass(
                                                                                this.sidebar,
                                                                                this.options.stickyClass
                                                                            ),
                                                                        s.outer)) {
                                                                        var r =
                                                                            "number" == typeof s.outer[a] ? "px" : "";
                                                                        this.sidebar.style[a] = s.outer[a] + r;
                                                                    }
                                                                    for (var l in s.inner) {
                                                                        var d =
                                                                            "number" == typeof s.inner[l] ? "px" : "";
                                                                        this.sidebarInner.style[l] = s.inner[l] + d;
                                                                    }
                                                                    var c =
                                                                        "affixed." +
                                                                        n.toLowerCase().replace("viewport-", "") +
                                                                        e;
                                                                    t.eventTrigger(this.sidebar, c);
                                                                } else
                                                                    this._initialized &&
                                                                        (this.sidebarInner.style.left = s.inner.left);
                                                                this.affixedType = n;
                                                            }
                                                        },
                                                    },
                                                    {
                                                        key: "_widthBreakpoint",
                                                        value: function () {
                                                            window.innerWidth <= this.options.minWidth
                                                                ? ((this._breakpoint = !0),
                                                                    (this.affixedType = "STATIC"),
                                                                    this.sidebar.removeAttribute("style"),
                                                                    t.removeClass(
                                                                        this.sidebar,
                                                                        this.options.stickyClass
                                                                    ),
                                                                    this.sidebarInner.removeAttribute("style"))
                                                                : (this._breakpoint = !1);
                                                        },
                                                    },
                                                    {
                                                        key: "updateSticky",
                                                        value: function () {
                                                            var t,
                                                                e = this,
                                                                i =
                                                                    0 < arguments.length && void 0 !== arguments[0]
                                                                        ? arguments[0]
                                                                        : {};
                                                            this._running ||
                                                                ((this._running = !0),
                                                                    (t = i.type),
                                                                    requestAnimationFrame(function () {
                                                                        if ("scroll" === t)
                                                                            e._calcDimensionsWithScroll(),
                                                                                e.observeScrollDir(),
                                                                                e.stickyPosition();
                                                                        else
                                                                            e._widthBreakpoint(),
                                                                                e.calcDimensions(),
                                                                                e.stickyPosition(!0);
                                                                        e._running = !1;
                                                                    }));
                                                        },
                                                    },
                                                    {
                                                        key: "_setSupportFeatures",
                                                        value: function () {
                                                            var e = this.support;
                                                            (e.transform = t.supportTransform()),
                                                                (e.transform3d = t.supportTransform(!0));
                                                        },
                                                    },
                                                    {
                                                        key: "_getTranslate",
                                                        value: function () {
                                                            var t =
                                                                0 < arguments.length && void 0 !== arguments[0]
                                                                    ? arguments[0]
                                                                    : 0,
                                                                e =
                                                                    1 < arguments.length && void 0 !== arguments[1]
                                                                        ? arguments[1]
                                                                        : 0,
                                                                i =
                                                                    2 < arguments.length && void 0 !== arguments[2]
                                                                        ? arguments[2]
                                                                        : 0;
                                                            return this.support.transform3d
                                                                ? "translate3d(" + t + ", " + e + ", " + i + ")"
                                                                : !!this.support.translate &&
                                                                "translate(" + t + ", " + e + ")";
                                                        },
                                                    },
                                                    {
                                                        key: "destroy",
                                                        value: function () {
                                                            window.removeEventListener("resize", this, {
                                                                capture: !1,
                                                            }),
                                                                window.removeEventListener("scroll", this, {
                                                                    capture: !1,
                                                                }),
                                                                this.sidebar.classList.remove(
                                                                    this.options.stickyClass
                                                                ),
                                                                (this.sidebar.style.minHeight = ""),
                                                                this.sidebar.removeEventListener(
                                                                    "update" + e,
                                                                    this
                                                                );
                                                            var t = { inner: {}, outer: {} };
                                                            for (var i in ((t.inner = {
                                                                position: "",
                                                                top: "",
                                                                left: "",
                                                                bottom: "",
                                                                width: "",
                                                                transform: "",
                                                            }),
                                                                (t.outer = { height: "", position: "" }),
                                                                t.outer))
                                                                this.sidebar.style[i] = t.outer[i];
                                                            for (var n in t.inner)
                                                                this.sidebarInner.style[n] = t.inner[n];
                                                            this.options.resizeSensor &&
                                                                "undefined" != typeof ResizeSensor &&
                                                                (ResizeSensor.detach(
                                                                    this.sidebarInner,
                                                                    this.handleEvent
                                                                ),
                                                                    ResizeSensor.detach(
                                                                        this.container,
                                                                        this.handleEvent
                                                                    ));
                                                        },
                                                    },
                                                ],
                                                [
                                                    {
                                                        key: "supportTransform",
                                                        value: function (t) {
                                                            var e = !1,
                                                                i = t ? "perspective" : "transform",
                                                                n = i.charAt(0).toUpperCase() + i.slice(1),
                                                                s = document.createElement("support").style;
                                                            return (
                                                                (
                                                                    i +
                                                                    " " +
                                                                    ["Webkit", "Moz", "O", "ms"].join(n + " ") +
                                                                    n
                                                                )
                                                                    .split(" ")
                                                                    .forEach(function (t, i) {
                                                                        if (void 0 !== s[t]) return (e = t), !1;
                                                                    }),
                                                                e
                                                            );
                                                        },
                                                    },
                                                    {
                                                        key: "eventTrigger",
                                                        value: function (t, e, i) {
                                                            try {
                                                                var n = new CustomEvent(e, { detail: i });
                                                            } catch (t) {
                                                                (n =
                                                                    document.createEvent(
                                                                        "CustomEvent"
                                                                    )).initCustomEvent(e, !0, !0, i);
                                                            }
                                                            t.dispatchEvent(n);
                                                        },
                                                    },
                                                    {
                                                        key: "extend",
                                                        value: function (t, e) {
                                                            var i = {};
                                                            for (var n in t)
                                                                void 0 !== e[n] ? (i[n] = e[n]) : (i[n] = t[n]);
                                                            return i;
                                                        },
                                                    },
                                                    {
                                                        key: "offsetRelative",
                                                        value: function (t) {
                                                            var e = { left: 0, top: 0 };
                                                            do {
                                                                var i = t.offsetTop,
                                                                    n = t.offsetLeft;
                                                                isNaN(i) || (e.top += i),
                                                                    isNaN(n) || (e.left += n),
                                                                    (t =
                                                                        "BODY" === t.tagName
                                                                            ? t.parentElement
                                                                            : t.offsetParent);
                                                            } while (t);
                                                            return e;
                                                        },
                                                    },
                                                    {
                                                        key: "addClass",
                                                        value: function (e, i) {
                                                            t.hasClass(e, i) ||
                                                                (e.classList
                                                                    ? e.classList.add(i)
                                                                    : (e.className += " " + i));
                                                        },
                                                    },
                                                    {
                                                        key: "removeClass",
                                                        value: function (e, i) {
                                                            t.hasClass(e, i) &&
                                                                (e.classList
                                                                    ? e.classList.remove(i)
                                                                    : (e.className = e.className.replace(
                                                                        new RegExp(
                                                                            "(^|\\b)" +
                                                                            i.split(" ").join("|") +
                                                                            "(\\b|$)",
                                                                            "gi"
                                                                        ),
                                                                        " "
                                                                    )));
                                                        },
                                                    },
                                                    {
                                                        key: "hasClass",
                                                        value: function (t, e) {
                                                            return t.classList
                                                                ? t.classList.contains(e)
                                                                : new RegExp("(^| )" + e + "( |$)", "gi").test(
                                                                    t.className
                                                                );
                                                        },
                                                    },
                                                    {
                                                        key: "defaults",
                                                        get: function () {
                                                            return i;
                                                        },
                                                    },
                                                ]
                                            ),
                                            t
                                        );
                                    })());
                        (t.default = s), (window.StickySidebar = s);
                    })(e);
                })((e = { exports: {} }), e.exports),
                    e.exports),
            s =
                (i = n) &&
                    i.__esModule &&
                    Object.prototype.hasOwnProperty.call(i, "default")
                    ? i.default
                    : i;
        (t.default = s),
            (t.__moduleExports = n),
            Object.defineProperty(t, "__esModule", { value: !0 });
    });
var the7Utils = {};
function showLazyImg(t) {
    t.hasClass("is-loaded") ||
        setTimeout(function () {
            t.parent().removeClass("layzr-bg");
        }, 350);
}
(the7Utils.parseIntParam = function (t, e) {
    return (e = void 0 !== e ? e : 0), t ? parseInt(t) : e;
}),
    (the7Utils.parseFloatParam = function (t, e) {
        return (e = void 0 !== e ? e : 0), t ? parseFloat(t) : e;
    }),
    (the7Utils.parseParam = function (t, e) {
        return (e = void 0 !== e ? e : ""), void 0 !== t ? t : e;
    }),
    (the7Utils.isFunction = function (t) {
        return "function" == typeof t;
    }),
    (function (t, e, i, n) {
        "use strict";
        var s = "rcrumbs",
            o = {
                version: "1.1.0",
                callback: {
                    preCrumbsListDisplay: t.noop,
                    preCrumbDisplay: t.noop,
                    postCrumbsListDisplay: t.noop,
                    postCrumbDisplay: t.noop,
                },
                ellipsis: !0,
                windowResize: !0,
                nbUncollapsableCrumbs: 2,
                nbFixedCrumbs: 0,
                animation: { activated: !0, speed: 400 },
            };
        function a(e, i) {
            (this.element = e),
                (this.$element = t(e)),
                (this.options = t.extend(!0, {}, o, i)),
                (this._defaults = o),
                (this._name = s),
                (a.prototype.plugin = this),
                this._init();
        }
        (a.prototype = {
            version: function () {
                return this.options.version;
            },
            _init: function () {
                if (
                    (this.$element.hasClass("rcrumbs") ||
                        this.$element.addClass("rcrumbs"),
                        (this.nbCrumbDisplayed = 0),
                        (this.$crumbsList = t(this.element)),
                        (this.$crumbs = t("li", this.$crumbsList)),
                        (this.$lastCrumb = this.$crumbs.last()),
                        (this.reversedCrumbs = t("li", this.$crumbsList).get().reverse()),
                        (this.lastNbCrumbDisplayed = 0),
                        (this.totalCrumbsWidth = 0),
                        (this.fixedCrumbsWidth = 0),
                        this._initCrumbs(),
                        this.options.nbFixedCrumbs > 0)
                ) {
                    var e = this.$crumbs.length;
                    (this.$crumbs = t("li", this.$crumbsList).slice(
                        this.options.nbFixedCrumbs,
                        e
                    )),
                        (this.reversedCrumbs = t("li", this.$crumbsList)
                            .slice(this.options.nbFixedCrumbs, e)
                            .get()
                            .reverse());
                    var i = this;
                    t("li", this.$crumbsList)
                        .slice(0, this.options.nbFixedCrumbs)
                        .each(function (e, n) {
                            (i.totalCrumbsWidth += t(n).data("width")), t(n).addClass("show");
                        });
                }
                this._showOrHideCrumbsList(!0),
                    this.options.windowResize &&
                    this._showOrHideCrumbsListOnWindowResize();
            },
            _getHiddenElWidth: function (e) {
                var i,
                    n = t(e).clone(!1);
                return (
                    n.css({ visibility: "hidden", position: "absolute" }),
                    n.appendTo(this.$crumbsList),
                    (i = n.width()),
                    n.remove(),
                    i
                );
            },
            _initCrumbs: function () {
                var e = this;
                t(this.$crumbsList)
                    .contents()
                    .filter(function () {
                        return 3 === this.nodeType;
                    })
                    .remove(),
                    t.each(this.$crumbs, function (i, n) {
                        var s = t(this);
                        e._storeCrumbWidth(s);
                    }),
                    this.options.nbFixedCrumbs > 0 &&
                    t(this.$crumbs)
                        .slice(0, this.options.nbFixedCrumbs)
                        .each(function (i, n) {
                            e.fixedCrumbsWidth += t(n).data("width");
                        });
            },
            _storeCrumbWidth: function (t) {
                var e = this._getHiddenElWidth(t);
                return t.data("width", e), e;
            },
            _showOrHideCrumbsList: function (e) {
                var i = this;
                (this.remainingSpaceToDisplayCrumbs = this.$element.width()),
                    (this.nbCrumbDisplayed = 0),
                    (this.totalCrumbsWidth = 0),
                    this.options.nbFixedCrumbs > 0 &&
                    ((this.remainingSpaceToDisplayCrumbs -= this.fixedCrumbsWidth),
                        t("li", this.$crumbsList)
                            .slice(0, this.options.nbFixedCrumbs)
                            .each(function (e, n) {
                                i.totalCrumbsWidth += t(n).data("width");
                            })),
                    (this.nextCrumbToShowWidth = undefined),
                    this.options.callback.preCrumbsListDisplay(this),
                    t.each(this.reversedCrumbs, function (n, s) {
                        var o = t(this),
                            a = t(i.reversedCrumbs[n + 1]);
                        i._showOrHideCrumb(o, a, n, e);
                    }),
                    (this.lastNbCrumbDisplayed = this.nbCrumbDisplayed),
                    this.options.callback.postCrumbsListDisplay(this);
            },
            _showOrHideCrumb: function (t, e, i, n) {
                this.options.callback.preCrumbDisplay(t);
                var s = this;
                function o() {
                    t.addClass("show"),
                        s.lastNbCrumbDisplayed < s.nbCrumbDisplayed + 1 &&
                            s.options.animation.activated &&
                            !n
                            ? (t.width(0),
                                t.animate(
                                    { width: t.data("width") },
                                    s.options.animation.speed,
                                    function () {
                                        s.options.callback.postCrumbDisplay(t);
                                    }
                                ))
                            : s.options.callback.postCrumbDisplay(t),
                        (s.nbCrumbDisplayed += 1);
                }
                (this.remainingSpaceToDisplayCrumbs -= t.data("width")),
                    i < this.options.nbUncollapsableCrumbs
                        ? (o(),
                            this.remainingSpaceToDisplayCrumbs < 0 &&
                            (function (t) {
                                t.css({
                                    width:
                                        s.remainingSpaceToDisplayCrumbs + t.data("width") + "px",
                                }),
                                    t.addClass("ellipsis");
                            })(this.$lastCrumb),
                            (this.totalCrumbsWidth += t.data("width")))
                        : this.remainingSpaceToDisplayCrumbs >= 0
                            ? (o(), (this.totalCrumbsWidth += t.data("width")))
                            : (this.lastNbCrumbDisplayed > this.nbCrumbDisplayed - 1 &&
                                this.options.animation.activated
                                ? t.animate(
                                    { width: 0 },
                                    s.options.animation.speed,
                                    function () {
                                        t.removeClass("show");
                                    }
                                )
                                : t.removeClass("show"),
                                this.nextCrumbToShowWidth ||
                                (this.nextCrumbToShowWidth = t.data("width")));
            },
            _showOrHideCrumbsListOnWindowResize: function () {
                var i = this;
                t(e).resize(function () {
                    var e = i.$element.width();
                    (e < i.totalCrumbsWidth ||
                        i.totalCrumbsWidth + i.nextCrumbToShowWidth < e) &&
                        (t.each(i.reversedCrumbs, function (e, i) {
                            t(this).stop(!0, !0);
                        }),
                            i._showOrHideCrumbsList()),
                        e >= i.totalCrumbsWidth &&
                        i.$lastCrumb.hasClass("ellipsis") &&
                        i._disableEllipsis(i.$lastCrumb);
                });
            },
            _disableEllipsis: function (t) {
                t.css({ width: "auto" }), t.removeClass("ellipsis");
            },
        }),
            (t.fn[s] = function (e) {
                if (a.prototype[e] && -1 === e.indexOf("_")) {
                    var i = t.data(this[0], "plugin_" + s);
                    if (i)
                        return a.prototype[e].apply(
                            i,
                            Array.prototype.slice.call(arguments, 1)
                        );
                    t.error(
                        "jquery." + s + " plugin must be initialized first on the element"
                    );
                } else {
                    if ("object" == typeof e || !e)
                        return this.each(function () {
                            t.data(this, "plugin_" + s)
                                ? t.error(
                                    "jquery." +
                                    s +
                                    " plugin cannot be instantiated multiple times on same element"
                                )
                                : t.data(this, "plugin_" + s, new a(this, e));
                        });
                    t.error("Method " + e + " does not exist on jquery." + s);
                }
            });
    })(jQuery, window, document),
    (function (t) {
        var e;
        function i(e, i, n) {
            e.addClass("animation-triggered"),
                setTimeout(function () {
                    e.hasClass("animation-triggered") &&
                        (e.removeClass("animation-triggered").addClass("shown"),
                            t().layzrInitialisation(),
                            "function" == typeof n && n.call(e));
                }, i);
        }
        (t.fn.exists = function () {
            return t(this).length > 0;
        }),
            (t.fn.loaded = function (e, i, n) {
                var s = this.length;
                return s > 0
                    ? this.each(function () {
                        var n = this,
                            o = t(n);
                        o.on("load.dt", function (n) {
                            t(this).off("load.dt"),
                                "function" == typeof e && e.call(this),
                                --s <= 0 && "function" == typeof i && i.call(this);
                        }),
                            n.complete && void 0 !== n.complete && o.trigger("load.dt");
                    })
                    : n
                        ? ("function" == typeof i && i.call(this), this)
                        : void 0;
            }),
            (dtGlobals.isInViewport = function (e) {
                var i = t(window),
                    n = e,
                    s = i.scrollTop(),
                    o = i.scrollTop() + i.height(),
                    a = n.offset().top + 20;
                return o >= a && s <= a;
            }),
            (t.fn.layzrInitialisation = function () {
                void 0 !== e
                    ? (this.each(function () {
                        var i = t(this);
                        e.addItems(i[0]);
                    }),
                        e.update())
                    : (e = new Layzr({
                        selector: ".lazy-load",
                        attr: "data-src",
                        attrSrcSet: "data-srcset",
                        retinaAttr: "data-src-retina",
                        hiddenAttr: "data-src-hidden",
                        threshold: 0,
                        callback: function () {
                            var e = t(this);
                            showLazyImg(e),
                                e
                                    .parents(".fancy-media-wrap.photoswipe-wrapper")
                                    .initPhotoswipe();
                        },
                        after: function () {
                            var e = t(this);
                            this.complete && showLazyImg(e);
                        },
                    }));
            }),
            (dtGlobals.addOnloadEvent = function (e) {
                if (
                    ("object" == typeof t.ready || "function" == typeof t.ready) &&
                    "function" == typeof t.ready.then
                )
                    t.ready.then(function () {
                        e();
                    });
                else if (void 0 !== window.addEventListener)
                    window.addEventListener("load", e, !1);
                else if (void 0 !== window.attachEvent) window.attachEvent("onload", e);
                else if (null != window.onload) {
                    var i = window.onload;
                    window.onload = function (t) {
                        i(t), window[e]();
                    };
                } else window.onload = e;
            }),
            (t.fn.the7ImageRatio = function (e) {
                var i = function () {
                    return !(
                        (void 0 !== Modernizr.objectfit && Modernizr.objectfit) ||
                        void 0 === Modernizr.objectfit
                    );
                },
                    n = {
                        init: function () {
                            return i()
                                ? this.each(function () {
                                    var e = t(this),
                                        i = e.parent(),
                                        n = e.prop("src");
                                    n &&
                                        !e.hasClass("compat-object-fit") &&
                                        i
                                            .css("backgroundImage", "url(" + n + ")")
                                            .addClass("compat-object-fit");
                                })
                                : this;
                        },
                        update: function (e) {
                            var n = i();
                            return this.each(function () {
                                var i = t(this),
                                    s = i.find("img").first();
                                if (!n) {
                                    var o = { width: "", height: "" };
                                    if (e) {
                                        var a = i.width(),
                                            r = i.height(),
                                            l = s.width() / s.height(),
                                            d = a / r;
                                        (o = { width: "auto", height: "auto" }),
                                            l < d ? (o.height = "100%") : l > d && (o.width = "100%");
                                    }
                                    s.css(o);
                                }
                            });
                        },
                    };
                return n[e]
                    ? n[e].apply(this, Array.prototype.slice.call(arguments, 1))
                    : "object" != typeof e && e
                        ? void 0
                        : n.init.apply(this, arguments);
            }),
            (t.fn.the7WidgetImageRatio = function (e) {
                var i = t(this),
                    n = i.find(".img-ratio-wrapper"),
                    s = {
                        init: function () {
                            n.find("img").the7ImageRatio(),
                                s.refresh(),
                                t(window).on("debouncedresize", function () {
                                    s.refresh();
                                });
                        },
                        refresh: function () {
                            var t = i.hasClass("preserve-img-ratio-y");
                            n.the7ImageRatio("update", t);
                        },
                    };
                return (
                    s[e]
                        ? s[e].apply(this, Array.prototype.slice.call(arguments, 1))
                        : ("object" != typeof e && e) || s.init.apply(this, arguments),
                    i
                );
            }),
            (window.the7ApplyWidgetImageRatio = function (t) {
                t.the7WidgetImageRatio();
            }),
            (window.the7GetHiddenHeight = function (t, e) {
                if (!t.length) return 0;
                var i = t.attr("style");
                t.css({ visibility: "hidden", display: "block" });
                var n = t;
                "" !== e && (n = t.find(e));
                var s = n.height();
                return t.attr("style", i || ""), s;
            }),
            (window.the7LocaleSensitiveStringsCompare = function (t, e) {
                return new Intl.Collator(document.documentElement.lang, {
                    sensitivity: "base",
                }).compare(t, e);
            }),
            (window.the7ProcessEffects = function (e, n) {
                var s = 0;
                0 !== e.length
                    ? e.each(function () {
                        var e = t(this);
                        t(".mobile-true").length > 0 ||
                            e.parents(".loading-effect-none").length > 0
                            ? e.hasClass("shown") ||
                            e.hasClass("animation-triggered") ||
                            i(e, 200, n)
                            : e.hasClass("shown") ||
                            e.hasClass("animation-triggered") ||
                            !dtGlobals.isInViewport(e) ||
                            e.hasClass("hidden") ||
                            i(e, 100 * ++s, n);
                    })
                    : t().layzrInitialisation();
            });
    })(jQuery),
    jQuery(function (t) {
        var e = t(document),
            i = t(window),
            n = t("html"),
            s = t("body"),
            o = t("#page"),
            a = function (t, e, i = !1) {
                let n;
                return function () {
                    const s = this,
                        o = arguments;
                    clearTimeout(n),
                        (n = setTimeout(() => {
                            (n = null), t.apply(s, o);
                        }, e)),
                        i && t.apply(s, o);
                };
            };
        /*!- Custom resize function*/
        !dtGlobals.isMobile || dtGlobals.isWindowsPhone || dtGlobals.isAndroid
            ? i.on("resize", function () {
                r();
            })
            : i.bind("orientationchange", function () {
                r();
            });
        var r = a(function () {
            t(window).trigger("debouncedresize"),
                t(window).trigger("the7_widget_resize");
        }, 200);
        i.trigger("debouncedresize");
        var l,
            d,
            c = 0,
            h = 0;
        function u() {
            if (dtGlobals.isMobile)
                t(".skills").length > 0 &&
                    "undefined" != typeof animateSkills &&
                    the7Utils.isFunction(animateSkills) &&
                    t(".skills").animateSkills();
            else if (
                t(".animation-at-the-same-time").length > 0 ||
                t(".animate-element").length > 0
            ) {
                var e = -1;
                t(".animation-at-the-same-time:in-viewport").each(function () {
                    var e = t(this);
                    e.find(".animate-element").addClass("animation-triggered"),
                        e
                            .find(".animate-element:not(.start-animation)")
                            .addClass("start-animation");
                }),
                    t(".animate-element:not(.start-animation):in-viewport").each(
                        function () {
                            var i = t(this);
                            !i.parents(".animation-at-the-same-time").length > 0 &&
                                (i.hasClass("start-animation") ||
                                    i.hasClass("animation-triggered") ||
                                    (i.addClass("animation-triggered"),
                                        e++,
                                        setTimeout(function () {
                                            i.addClass("start-animation"),
                                                i.hasClass("skills") && i.animateSkills();
                                        }, 200 * e)));
                        }
                    );
            }
        }
        (onWindowWidthResizeDebounced = a(function () {
            i.trigger("the7-resize-width-debounce");
        }, 250)),
            (onWindowHeightResizeDebounced = a(function () {
                i.trigger("the7-resize-height-debounce");
            }, 250)),
            i.on("resize", function () {
                var t = window.innerWidth,
                    e = window.innerHeight;
                c !== t &&
                    ((c = t),
                        i.trigger("the7-resize-width"),
                        onWindowWidthResizeDebounced()),
                    h !== e &&
                    ((h = e),
                        i.trigger("the7-resize-height"),
                        onWindowHeightResizeDebounced());
            }),
            (t.fn.layzrCarouselUpdate = function () {
                var e = t(this),
                    i = e.find(".dt-owl-item.active"),
                    n = ".owl-thumb-lazy-load-show",
                    s = !1,
                    o = i.last().next().find("img").not(n);
                (o = (o = (o = o.add(i.first().prev().find("img").not(n))).add(
                    i.find("img").not(n)
                )).filter(":not(.is-loaded)")).each(function () {
                    var i = t(this).attr("data-src");
                    if (void 0 !== i) {
                        s = !0;
                        var o = e.find('.dt-owl-item img[data-src="' + i + '"]').not(n);
                        o.addClass("owl-thumb-lazy-load-show"), o.attr("loading", "eager");
                    }
                }),
                    s && (l.updateSelector(), l.update());
            }),
            t(
                ".elementor-owl-carousel-call img.lazy, .elementor-owl-carousel-call img.lazy-load"
            )
                .removeClass("lazy-load")
                .addClass("lazy-scroll"),
            t(".layzr-loading-on, .vc_single_image-img").layzrInitialisation(),
            (window.vc_rowBehaviour = function () {
                function t() {
                    a('[data-vc-full-width="true"]').each(function () {
                        var t,
                            e,
                            n = a(this),
                            o = n.next(".vc_row-full-width"),
                            r = n.parent(),
                            l = parseInt(n.css("margin-left"), 10),
                            d = parseInt(n.css("margin-right"), 10),
                            c = window.innerWidth,
                            h = i.width(),
                            u = a("#content").width(),
                            p = c > dtLocal.themeSettings.mobileHeader.firstSwitchPoint,
                            f = Math.max(u, h),
                            m = a("#main > .wf-wrap"),
                            g = parseInt(m.css("width")),
                            v = parseInt(m.css("padding-left")),
                            y = s.hasClass("responsive-off"),
                            w = s.hasClass("sticky-header"),
                            b = s.hasClass("header-side-left"),
                            C = s.hasClass("header-side-right"),
                            _ = "rtl" === jQuery(document).attr("dir") ? "right" : "left";
                        if (
                            (n.addClass("vc_hidden"),
                                o.length ||
                                (o = n
                                    .closest(".vc_ie-flexbox-fixer")
                                    .next(".vc_row-full-width")),
                                o.length)
                        ) {
                            r.hasClass("vc_section") &&
                                ((l = parseInt(r.css("margin-left"), 10)),
                                    (d = parseInt(r.css("margin-right"), 10))),
                                a(".boxed").length > 0
                                    ? (f = a("#main").width())
                                    : y ||
                                        (p &&
                                            a(".side-header-v-stroke").length &&
                                            "none" !== a(".side-header-v-stroke").css("display"))
                                        ? (f = c <= u ? u : h - a(".side-header-v-stroke").width())
                                        : !w &&
                                        (b || C) &&
                                        p &&
                                        a(".side-header").length &&
                                        "none" !== a(".side-header").css("display") &&
                                        (f = c <= u ? u : h - a(".side-header").width()),
                                (t = Math.ceil((f - g + 2 * v) / 2)),
                                a(".sidebar-left").length > 0 || a(".sidebar-right").length > 0
                                    ? ((e = a("#content").width()), (t = 0))
                                    : (e = a("#main").innerWidth());
                            var x = 0 - t - l;
                            if (
                                (n.css(_, x),
                                    n.css({
                                        position: "relative",
                                        "box-sizing": "border-box",
                                        width: e,
                                    }),
                                    !n.data("vcStretchContent"))
                            ) {
                                var S = -1 * x;
                                0 > S && (S = 0);
                                var I = e - S - o.width() + l + d;
                                0 > I && (I = 0),
                                    n.css({
                                        "padding-left": S + "px",
                                        "padding-right": I + "px",
                                    });
                            }
                            n.data("vcStretchContent") &&
                                n.find(".upb_row_bg").length > 0 &&
                                n.find(".upb_row_bg").each(function () {
                                    var t = a(this);
                                    "full" === t.data("bg-override") &&
                                        (t.css({ "min-width": e + "px" }), t.css(_, 0));
                                }),
                                n.attr("data-vc-full-width-init", "true"),
                                n.removeClass("vc_hidden"),
                                n.find(".ts-wrap").each(function () {
                                    var t = a(this).data("thePhotoSlider");
                                    void 0 !== t && t.update();
                                });
                        }
                    });
                }
                function e() {
                    a(".vc_row-o-full-height:first").each(function () {
                        var t, e, i;
                        (t = a(window).height()) > (e = a(this).offset().top) &&
                            ((i = 100 - e / (t / 100)), a(this).css("min-height", i + "vh"));
                    });
                }
                var n,
                    o,
                    a = window.jQuery;
                a(window)
                    .off("resize.vcRowBehaviour")
                    .on("resize.vcRowBehaviour", t)
                    .on("resize.vcRowBehaviour", e),
                    t(),
                    e(),
                    (window.navigator.userAgent.indexOf("MSIE ") > 0 ||
                        navigator.userAgent.match(/Trident.*rv\:11\./)) &&
                    a(".vc_row-o-full-height").each(function () {
                        var t = a(this);
                        t.data("the7VCRowFixedInIE") ||
                            "flex" !== t.css("display") ||
                            (t.wrap('<div class="vc_ie-flexbox-fixer"></div>'),
                                t.data("the7VCRowFixedInIE", !0));
                    }),
                    vc_initVideoBackgrounds(),
                    (o = !1),
                    window.vcParallaxSkroll && window.vcParallaxSkroll.destroy(),
                    a(".vc_parallax-inner").remove(),
                    a("[data-5p-top-bottom]").removeAttr(
                        "data-5p-top-bottom data-30p-top-bottom"
                    ),
                    a("[data-vc-parallax]").each(function () {
                        var t, e, i, n, s;
                        (o = !0),
                            "on" === a(this).data("vcParallaxOFade") &&
                            a(this)
                                .children()
                                .attr("data-5p-top-bottom", "opacity:0;")
                                .attr("data-30p-top-bottom", "opacity:1;"),
                            (t = 100 * a(this).data("vcParallax")),
                            (i = a("<div />")
                                .addClass("vc_parallax-inner")
                                .appendTo(a(this))).height(t + "%"),
                            (n = a(this).data("vcParallaxImage")),
                            (s = vcExtractYoutubeId(n))
                                ? insertYoutubeVideoAsBackground(i, s)
                                : void 0 !== n && i.css("background-image", "url(" + n + ")"),
                            (e = -(t - 100)),
                            i
                                .attr("data-bottom-top", "top: " + e + "%;")
                                .attr("data-top-bottom", "top: 0%;");
                    }),
                    o &&
                    window.skrollr &&
                    ((n = {
                        forceHeight: !1,
                        smoothScrolling: !1,
                        mobileCheck: function () {
                            return !1;
                        },
                    }),
                        (window.vcParallaxSkroll = skrollr.init(n)),
                        window.vcParallaxSkroll);
            }),
            t('div[data-vc-full-width="true"][data-vc-full-width-init="false"]')
                .length > 0 && vc_rowBehaviour(),
            (t.fn.clickOverlayGradient = function () {
                return this.each(function () {
                    var e = t(this),
                        i = 0,
                        n = e.find(".entry-excerpt"),
                        s = e.find(".post-details, .box-button");
                    n.exists() && (i += n.height()),
                        s.exists() && (i += s.innerHeight()),
                        e.data("the7OverlayLayoutContentOffset", i),
                        e.css({ transform: "translateY(" + i + "px)" }),
                        e.data("overlayLayoutEventsWasAdded") ||
                        dtGlobals.isMobile ||
                        (e.data("overlayLayoutEventsWasAdded", !0),
                            e
                                .parents(".post")
                                .first()
                                .on("mouseenter tap", function () {
                                    e.css("transform", "translateY(0px)");
                                })
                                .on("mouseleave tap", function () {
                                    e.css(
                                        "transform",
                                        "translateY(" +
                                        e.data("the7OverlayLayoutContentOffset") +
                                        "px)"
                                    );
                                }));
                });
            }),
            dtGlobals.addOnloadEvent(function () {
                t(
                    ".content-rollover-layout-list:not(.disable-layout-hover) .dt-css-grid .post-entry-wrapper"
                ).clickOverlayGradient();
            }),
            (dtGlobals.touches = {}),
            (dtGlobals.touches.touching = !1),
            (dtGlobals.touches.touch = !1),
            (dtGlobals.touches.currX = 0),
            (dtGlobals.touches.currY = 0),
            (dtGlobals.touches.cachedX = 0),
            (dtGlobals.touches.cachedY = 0),
            (dtGlobals.touches.count = 0),
            (dtGlobals.resizeCounter = 0),
            e.on("touchstart", function (e) {
                1 == e.originalEvent.touches.length &&
                    ((dtGlobals.touches.touch = e.originalEvent.touches[0]),
                        (dtGlobals.touches.cachedX = dtGlobals.touches.touch.pageX),
                        (dtGlobals.touches.cachedY = dtGlobals.touches.touch.pageY),
                        (dtGlobals.touches.touching = !0),
                        setTimeout(function () {
                            (dtGlobals.touches.currX = dtGlobals.touches.touch.pageX),
                                (dtGlobals.touches.currY = dtGlobals.touches.touch.pageY),
                                dtGlobals.touches.cachedX !== dtGlobals.touches.currX ||
                                dtGlobals.touches.touching ||
                                dtGlobals.touches.cachedY !== dtGlobals.touches.currY ||
                                (dtGlobals.touches.count++, t(e.target).trigger("tap"));
                        }, 200));
            }),
            e.on("touchend touchcancel", function (t) {
                dtGlobals.touches.touching = !1;
            }),
            e.on("touchmove", function (t) {
                (dtGlobals.touches.touch = t.originalEvent.touches[0]),
                    dtGlobals.touches.touching;
            }),
            e.on("tap", function (e) {
                t(".dt-hovered").trigger("mouseout");
            }),
            (function (t) {
                "function" == typeof define && define.amd
                    ? define(["jquery"], t)
                    : t(jQuery);
            })(function (t, e) {
                var i = 6,
                    n = t.event.add,
                    s = t.event.remove,
                    o = function (e, i, n) {
                        t.event.trigger(i, n, e);
                    },
                    a =
                        window.requestAnimationFrame ||
                        window.webkitRequestAnimationFrame ||
                        window.mozRequestAnimationFrame ||
                        window.oRequestAnimationFrame ||
                        window.msRequestAnimationFrame ||
                        function (t, e) {
                            return window.setTimeout(function () {
                                t();
                            }, 25);
                        },
                    r = { textarea: !0, input: !0, select: !0, button: !0 },
                    l = {
                        move: "mousemove",
                        cancel: "mouseup dragstart",
                        end: "mouseup",
                    },
                    d = "touchmove",
                    c = "touchend",
                    h = "touchend";
                function u(t) {
                    var e = t,
                        i = !1,
                        n = !1;
                    function s(t) {
                        i ? (e(), a(s), (n = !0), (i = !1)) : (n = !1);
                    }
                    (this.kick = function (t) {
                        (i = !0), n || s();
                    }),
                        (this.end = function (t) {
                            var s = e;
                            t &&
                                (n
                                    ? ((e = i
                                        ? function () {
                                            s(), t();
                                        }
                                        : t),
                                        (i = !0))
                                    : t());
                        });
                }
                function p() {
                    return !0;
                }
                function f() {
                    return !1;
                }
                function m(t) {
                    t.preventDefault();
                }
                function g(t) {
                    r[t.target.tagName.toLowerCase()] || t.preventDefault();
                }
                function v(t, e) {
                    var i, n;
                    if (t.identifiedTouch) return t.identifiedTouch(e);
                    for (i = -1, n = t.length; ++i < n;)
                        if (t[i].identifier === e) return t[i];
                }
                function y(t, e) {
                    var i = v(t.changedTouches, e.identifier);
                    if (i && (i.pageX !== e.pageX || i.pageY !== e.pageY)) return i;
                }
                function w(t) {
                    I(t, t.data, t, C);
                }
                function b(t) {
                    C();
                }
                function C() {
                    s(document, l.move, w), s(document, l.cancel, b);
                }
                function _(t) {
                    var e = t.data,
                        i = y(t, e);
                    i && I(t, e, i, S);
                }
                function x(t) {
                    var e = t.data;
                    v(t.changedTouches, e.identifier) && S(e.identifier);
                }
                function S(t) {
                    s(document, "." + t, _), s(document, "." + t, x);
                }
                function I(t, e, n, s) {
                    var a = n.pageX - e.startX,
                        r = n.pageY - e.startY;
                    a * a + r * r < i * i ||
                        (function (t, e, i, n, s, a) {
                            var r, l;
                            e.target;
                            (r = t.targetTouches),
                                (l = t.timeStamp - e.timeStamp),
                                (e.type = "movestart"),
                                (e.distX = n),
                                (e.distY = s),
                                (e.deltaX = n),
                                (e.deltaY = s),
                                (e.pageX = i.pageX),
                                (e.pageY = i.pageY),
                                (e.velocityX = n / l),
                                (e.velocityY = s / l),
                                (e.targetTouches = r),
                                (e.finger = r ? r.length : 1),
                                (e._handled = k),
                                (e._preventTouchmoveDefault = function () {
                                    t.preventDefault();
                                }),
                                o(e.target, e),
                                a(e.identifier);
                        })(t, e, n, a, r, s);
                }
                function k() {
                    return (this._handled = p), !1;
                }
                function T(t) {
                    t._handled();
                }
                function z(t) {
                    var e = t.data.timer;
                    (t.data.touch = t), (t.data.timeStamp = t.timeStamp), e.kick();
                }
                function L(t) {
                    var e = t.data.event,
                        i = t.data.timer;
                    s(document, l.move, z),
                        s(document, l.end, L),
                        O(e, i, function () {
                            setTimeout(function () {
                                s(e.target, "click", f);
                            }, 0);
                        });
                }
                function E(t) {
                    var e = t.data.event,
                        i = t.data.timer,
                        n = y(t, e);
                    n &&
                        (t.preventDefault(),
                            (e.targetTouches = t.targetTouches),
                            (t.data.touch = n),
                            (t.data.timeStamp = t.timeStamp),
                            i.kick());
                }
                function P(t) {
                    var e = t.data.event,
                        i = t.data.timer;
                    v(t.changedTouches, e.identifier) &&
                        (!(function (t) {
                            s(document, "." + t.identifier, E),
                                s(document, "." + t.identifier, P);
                        })(e),
                            O(e, i));
                }
                function O(t, e, i) {
                    e.end(function () {
                        return (t.type = "moveend"), o(t.target, t), i && i();
                    });
                }
                (t.event.special.movestart = {
                    setup: function (t, e, i) {
                        return n(this, "movestart.move", T), !0;
                    },
                    teardown: function (t) {
                        return (
                            s(this, "dragstart drag", m),
                            s(this, "mousedown touchstart", g),
                            s(this, "movestart", T),
                            !0
                        );
                    },
                    add: function (t) {
                        "move" !== t.namespace &&
                            "moveend" !== t.namespace &&
                            (n(
                                this,
                                "dragstart." + t.guid + " drag." + t.guid,
                                m,
                                e,
                                t.selector
                            ),
                                n(this, "mousedown." + t.guid, g, e, t.selector));
                    },
                    remove: function (t) {
                        "move" !== t.namespace &&
                            "moveend" !== t.namespace &&
                            (s(this, "dragstart." + t.guid + " drag." + t.guid),
                                s(this, "mousedown." + t.guid));
                    },
                    _default: function (t) {
                        var i, s;
                        t._handled() &&
                            ((i = {
                                target: t.target,
                                startX: t.startX,
                                startY: t.startY,
                                pageX: t.pageX,
                                pageY: t.pageY,
                                distX: t.distX,
                                distY: t.distY,
                                deltaX: t.deltaX,
                                deltaY: t.deltaY,
                                velocityX: t.velocityX,
                                velocityY: t.velocityY,
                                timeStamp: t.timeStamp,
                                identifier: t.identifier,
                                targetTouches: t.targetTouches,
                                finger: t.finger,
                            }),
                                (s = {
                                    event: i,
                                    timer: new u(function (e) {
                                        !(function (t, e, i, n) {
                                            var s = i - t.timeStamp;
                                            (t.type = "move"),
                                                (t.distX = e.pageX - t.startX),
                                                (t.distY = e.pageY - t.startY),
                                                (t.deltaX = e.pageX - t.pageX),
                                                (t.deltaY = e.pageY - t.pageY),
                                                (t.velocityX = 0.3 * t.velocityX + (0.7 * t.deltaX) / s),
                                                (t.velocityY = 0.3 * t.velocityY + (0.7 * t.deltaY) / s),
                                                (t.pageX = e.pageX),
                                                (t.pageY = e.pageY);
                                        })(i, s.touch, s.timeStamp),
                                            o(t.target, i);
                                    }),
                                    touch: e,
                                    timeStamp: e,
                                }),
                                t.identifier === e
                                    ? (n(t.target, "click", f),
                                        n(document, l.move, z, s),
                                        n(document, l.end, L, s))
                                    : (t._preventTouchmoveDefault(),
                                        n(document, d + "." + t.identifier, E, s),
                                        n(document, h + "." + t.identifier, P, s)));
                    },
                }),
                    (t.event.special.move = {
                        setup: function () {
                            n(this, "movestart.move", t.noop);
                        },
                        teardown: function () {
                            s(this, "movestart.move", t.noop);
                        },
                    }),
                    (t.event.special.moveend = {
                        setup: function () {
                            n(this, "movestart.moveend", t.noop);
                        },
                        teardown: function () {
                            s(this, "movestart.moveend", t.noop);
                        },
                    }),
                    n(document, "mousedown.move", function (t) {
                        var e;
                        (function (t) {
                            return 1 === t.which && !t.ctrlKey && !t.altKey;
                        })(t) &&
                            ((e = {
                                target: t.target,
                                startX: t.pageX,
                                startY: t.pageY,
                                timeStamp: t.timeStamp,
                            }),
                                n(document, l.move, w, e),
                                n(document, l.cancel, b, e));
                    }),
                    n(document, "touchstart.move", function (t) {
                        var e, i;
                        r[t.target.tagName.toLowerCase()] ||
                            ((i = {
                                target: (e = t.changedTouches[0]).target,
                                startX: e.pageX,
                                startY: e.pageY,
                                timeStamp: t.timeStamp,
                                identifier: e.identifier,
                            }),
                                n(document, d + "." + e.identifier, _, i),
                                n(document, c + "." + e.identifier, x, i));
                    }),
                    "function" == typeof Array.prototype.indexOf &&
                    (function (t, e) {
                        for (
                            var i = ["changedTouches", "targetTouches"], n = i.length;
                            n--;

                        )
                            -1 === t.event.props.indexOf(i[n]) && t.event.props.push(i[n]);
                    })(t);
            }),
            (t.belowthefold = function (e, n) {
                return i.height() + i.scrollTop() <= t(e).offset().top - n.threshold;
            }),
            (t.abovethetop = function (e, n) {
                return i.scrollTop() >= t(e).offset().top + t(e).height() - n.threshold;
            }),
            (t.rightofscreen = function (e, n) {
                return i.width() + i.scrollLeft() <= t(e).offset().left - n.threshold;
            }),
            (t.leftofscreen = function (e, n) {
                return (
                    i.scrollLeft() >= t(e).offset().left + t(e).width() - n.threshold
                );
            }),
            (t.inviewport = function (e, i) {
                return !(
                    t.rightofscreen(e, i) ||
                    t.leftofscreen(e, i) ||
                    t.belowthefold(e, i) ||
                    t.abovethetop(e, i)
                );
            }),
            t.extend(t.expr.pseudos, {
                "below-the-fold": function (e, i, n) {
                    return t.belowthefold(e, { threshold: 0 });
                },
                "above-the-top": function (e, i, n) {
                    return t.abovethetop(e, { threshold: 0 });
                },
                "left-of-screen": function (e, i, n) {
                    return t.leftofscreen(e, { threshold: 0 });
                },
                "right-of-screen": function (e, i, n) {
                    return t.rightofscreen(e, { threshold: 0 });
                },
                "in-viewport": function (e, i, n) {
                    return t.inviewport(e, { threshold: -30 });
                },
            }),
            (t.fn.checkInViewport = function () {
                if (!dtGlobals.isMobile) {
                    var e = -1;
                    return this.each(function () {
                        var i = t(this);
                        i.hasClass("animation-ready") ||
                            (i.parents(".animation-at-the-same-time").length > 0
                                ? (($thisElem = i.find(".animate-element")),
                                    $thisElem.addClass("animation-triggered"),
                                    i
                                        .find(".animate-element:not(.start-animation)")
                                        .addClass("start-animation"))
                                : i.hasClass("start-animation") ||
                                i.hasClass("animation-triggered") ||
                                (i.addClass("animation-triggered"),
                                    e++,
                                    setTimeout(function () {
                                        i.addClass("start-animation"),
                                            i.hasClass("skills") && i.animateSkills();
                                    }, 200 * e)),
                                i.addClass("animation-ready"));
                    });
                }
                "undefined" != typeof animateSkills &&
                    the7Utils.isFunction(animateSkills) &&
                    t(".skills").animateSkills();
            }),
            clearTimeout(d),
            (d = setTimeout(function () {
                u();
            }, 50)),
            dtGlobals.isMobile ||
            i.on("scroll", function () {
                u();
            });
        var p = t(
            ".dt-owl-carousel-call, .related-projects, .elementor-owl-carousel-call"
        );
        i.on("scroll", function () {
            p.each(function () {
                var e = t(this);
                if ("true" === e.attr("data-autoplay"))
                    if (dtGlobals.isInViewport(e)) {
                        var i = e.attr("data-autoplay_speed")
                            ? parseInt(e.attr("data-autoplay_speed"))
                            : 6e3;
                        e.trigger("play.owl.autoplay", [i]);
                    } else e.trigger("stop.owl.autoplay");
            });
        }),
            (t.fn.addPhotoswipeWrap = function () {
                return this.each(function (e, i) {
                    var n = t(this);
                    n.on("click", function (t) {
                        t.preventDefault();
                    }),
                        n.parents("figure").first().addClass("photoswipe-item"),
                        n.hasClass("pspw-wrap-ready") ||
                        (n.parents().hasClass("dt-gallery-container") ||
                            n.parent().addClass("photoswipe-wrapper"),
                            n.addClass("pspw-wrap-ready"));
                });
            }),
            t(".dt-pswp-item, figure .dt-gallery-container a").addPhotoswipeWrap();
        var f = [
            {
                id: "facebook",
                label:
                    '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16"><path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/></svg> ' +
                    dtShare.shareButtonText.facebook,
                url: "https://www.facebook.com/sharer/sharer.php?u={{url}}&picture={{raw_image_url}}&description={{text}}",
            },
            {
                id: "twitter",
                label:
                    '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16"><path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/></svg>' +
                    dtShare.shareButtonText.twitter,
                url: "https://twitter.com/intent/tweet?text={{text}}&url={{url}}",
            },
            {
                id: "pinterest",
                label:
                    '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pinterest" viewBox="0 0 16 16"><path d="M8 0a8 8 0 0 0-2.915 15.452c-.07-.633-.134-1.606.027-2.297.146-.625.938-3.977.938-3.977s-.239-.479-.239-1.187c0-1.113.645-1.943 1.448-1.943.682 0 1.012.512 1.012 1.127 0 .686-.437 1.712-.663 2.663-.188.796.4 1.446 1.185 1.446 1.422 0 2.515-1.5 2.515-3.664 0-1.915-1.377-3.254-3.342-3.254-2.276 0-3.612 1.707-3.612 3.471 0 .688.265 1.425.595 1.826a.24.24 0 0 1 .056.23c-.061.252-.196.796-.222.907-.035.146-.116.177-.268.107-1-.465-1.624-1.926-1.624-3.1 0-2.523 1.834-4.84 5.286-4.84 2.775 0 4.932 1.977 4.932 4.62 0 2.757-1.739 4.976-4.151 4.976-.811 0-1.573-.421-1.834-.919l-.498 1.902c-.181.695-.669 1.566-.995 2.097A8 8 0 1 0 8 0z"/></svg> ' +
                    dtShare.shareButtonText.pinterest,
                url: "http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}",
            },
            {
                id: "linkedin",
                label:
                    '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16"><path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/></svg> ' +
                    dtShare.shareButtonText.linkedin,
                url: "http://www.linkedin.com/shareArticle?mini=true&url={{url}}&title={{text}}",
            },
            {
                id: "whatsapp",
                label:
                    '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16"><path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/></svg>' +
                    dtShare.shareButtonText.whatsapp,
                url: "whatsapp://send?text={{url}}",
            },
        ];
        dtShare.shareButtonText.download &&
            f.push({
                id: "download",
                label:
                    '<i class="dt-icon-the7-misc-006-244" aria-hidden="true"></i> ' +
                    dtShare.shareButtonText.download,
                url: "{{raw_image_url}}",
                download: !0,
            });
        var m = {
            youtube: {
                index: "youtube.com",
                id: "v=",
                src: "//www.youtube.com/embed/%id%",
                type: "youtube",
            },
            vimeo: {
                index: "vimeo.com/",
                id: "/",
                src: "//player.vimeo.com/video/%id%",
                type: "vimeo",
            },
            gmaps: { index: "//maps.google.", src: "%id%&output=embed" },
        };
        function g(e) {
            for (var i in e) {
                var n = e[i],
                    s = t(".pswp__share-tooltip");
                switch (n) {
                    case "facebook":
                        s.addClass("show-share-fb");
                        break;
                    case "twitter":
                        s.addClass("show-share-tw");
                        break;
                    case "pinterest":
                        s.addClass("show-share-pin");
                        break;
                    case "linkedin":
                        s.addClass("show-share-in");
                        break;
                    case "whatsapp":
                        s.addClass("show-share-wp");
                        break;
                    case "download":
                        s.addClass("show-share-d");
                        break;
                    default:
                        s.removeClass(
                            "show-share-in show-share-pin show-share-tw show-share-fb show-share-g show-share-wp"
                        );
                }
            }
        }
        function v(e, i) {
            var n = [],
                s = e;
            s = t.extend({ target: ".dt-pswp-item", embedType: "" }, s);
            var o = function (e, i, o) {
                var a = document.querySelectorAll(".pswp")[0],
                    r = n[e - 1].items,
                    l = {
                        index: i,
                        galleryUID: e,
                        shareEl: !0,
                        closeOnScroll: !1,
                        history: !1,
                        shareButtons: f,
                        getImageURLForShare: function (t) {
                            return c.currItem.src || "";
                        },
                        getPageURLForShare: function (t) {
                            return c.currItem.shareLink || window.location.href;
                        },
                        getTextForShare: function (t) {
                            var e = c.currItem.title;
                            return (void 0 !== e ? e.replace(/<[^>]+>/g, "") : "") || "";
                        },
                        parseShareButtonOut: function (t, e) {
                            return e;
                        },
                    },
                    d = "";
                void 0 !==
                    t(o).next(".dt-gallery-container").attr("data-pretty-share") &&
                    (d = t(o)
                        .next(".dt-gallery-container")
                        .attr("data-pretty-share")
                        .split(",")),
                    void 0 !==
                        t(o).parents(".dt-gallery-container").attr("data-pretty-share")
                        ? (d = t(o)
                            .parents(".dt-gallery-container")
                            .attr("data-pretty-share")
                            .split(","))
                        : void 0 !==
                            t(o)
                                .parents(".shortcode-single-image-wrap")
                                .attr("data-pretty-share")
                            ? (d = t(o)
                                .parents(".shortcode-single-image-wrap")
                                .attr("data-pretty-share")
                                .split(","))
                            : void 0 !== t(o).attr("data-pretty-share") &&
                            (d = t(o).attr("data-pretty-share").split(",")),
                    d.length <= 0 || void 0 === d
                        ? t(".pswp__scroll-wrap").addClass("hide-pspw-share")
                        : d.push("download"),
                    g(d),
                    t.extend(l, s);
                var c = new PhotoSwipe(a, PhotoSwipeUI_Default, r, l);
                c.init(), t(".pswp__video").removeClass("active");
                var h = t(c.currItem.container);
                h.find(".pswp__video").length > 0 &&
                    h.parents(".pswp").addClass("video-active"),
                    t(".pswp__zoom-wrap").removeClass("active-item"),
                    h.addClass("active-item");
                var u,
                    p,
                    m = h.find(".pswp__video");
                if (m.length > 0)
                    if (
                        (m.addClass("active"),
                            h.parents(".pswp").addClass("video-active"),
                            "hosted" == m.parents(".pswp-video-wrap ").attr("data-type"))
                    )
                        m.get(0).play();
                    else {
                        var v = m.prop("src");
                        (v += "?autoplay=1"), m.prop("src", v);
                    }
                c.listen("beforeChange", function () {
                    var e = t(c.currItem.container);
                    t(".pswp__zoom-wrap").removeClass("active-item"),
                        e.addClass("active-item"),
                        t(".pswp__video").removeClass("active"),
                        t(".pswp").removeClass("video-active");
                    e.find(".pswp__video").addClass("active");
                    e.find(".pswp__video").length > 0 &&
                        e.parents(".pswp").addClass("video-active"),
                        t(".pswp__video").each(function () {
                            var e = t(this);
                            if (e.hasClass("active"))
                                "hosted" == e.parents(".pswp-video-wrap ").attr("data-type") &&
                                    e.get(0).play();
                            else if (
                                "hosted" == e.parents(".pswp-video-wrap ").attr("data-type")
                            )
                                e.get(0).pause();
                            else {
                                var i = e.prop("src");
                                (i = i.replace("?autoplay=1", "?enablejsapi=1")),
                                    e.prop("src", ""),
                                    e.prop("src", i),
                                    t(".pswp__video").removeClass("active");
                                var n = t(this)[0].contentWindow;
                                e.hasClass("active")
                                    ? (func = "playVideo")
                                    : (func = "pauseVideo"),
                                    n.postMessage(
                                        '{"event":"command","func":"' + func + '","args":""}',
                                        "*"
                                    );
                            }
                        });
                }),
                    c.listen("close", function () {
                        t(".pswp__video").each(function () {
                            var e = t(this);
                            if ("hosted" == e.parents(".pswp-video-wrap ").attr("data-type"))
                                e.get(0).pause();
                            else {
                                e.attr("src", e.attr("src"));
                                var i = e.prop("src");
                                (i = i.replace("?autoplay=1", "?enablejsapi=1")),
                                    e.prop("src", ""),
                                    e.prop("src", i),
                                    t(".pswp__video").removeClass("active");
                                var n = t(this)[0].contentWindow;
                                e.hasClass("active")
                                    ? (func = "playVideo")
                                    : (func = "stopVideo"),
                                    n.postMessage(
                                        '{"event":"command","func":"' + func + '","args":""}',
                                        "*"
                                    );
                            }
                            clearTimeout(u),
                                (u = setTimeout(function () {
                                    t(".pswp-video-wrap").remove();
                                }, 200));
                        });
                    }),
                    c.listen("destroy", function () {
                        clearTimeout(p),
                            (p = setTimeout(function () {
                                t(".pswp").removeClass().addClass("pswp");
                            }, 100));
                    });
            };
            !(function (e, i) {
                (n = []),
                    e.each(function (e, i) {
                        n.push({ id: e, items: [] }),
                            t(i)
                                .find(s.target)
                                .each(function (i, o) {
                                    var a = t(o),
                                        r = a.attr("data-large_image_width"),
                                        l =
                                            void 0 !== r && r.length > 0 && "" != r && 0 != r
                                                ? r
                                                : a.find("img").attr("width"),
                                        d = a.attr("data-large_image_height"),
                                        c =
                                            void 0 !== d && d.length > 0 && "" != d && 0 != d
                                                ? d
                                                : a.find("img").attr("height"),
                                        h =
                                            (void 0 !== a.attr("title") && a.attr("title").length > 0
                                                ? "<h5>" + a.attr("title") + "</h5>"
                                                : "") +
                                            (void 0 !== a.attr("data-dt-img-description")
                                                ? a.attr("data-dt-img-description")
                                                : "") || "";
                                    if (
                                        (a.data("gallery-id", e + 1),
                                            a.data("photo-id", i),
                                            void 0 === l && (l = a.find("img").width()),
                                            void 0 === c && (c = a.find("img").height()),
                                            t(o).hasClass("pswp-video"))
                                    ) {
                                        var u = o.href,
                                            p = s.embedType;
                                        t.each(m, function () {
                                            if (u.indexOf(this.index) > -1)
                                                return (
                                                    this.id &&
                                                    ((u =
                                                        "string" == typeof this.id
                                                            ? u.substr(
                                                                u.lastIndexOf(this.id) + this.id.length,
                                                                u.length
                                                            )
                                                            : this.id.call(this, u)),
                                                        (p = this.type)),
                                                    (u = this.src.replace("%id%", u)),
                                                    !1
                                                );
                                        });
                                        var f = {
                                            html:
                                                '<div class="pswp-video-wrap " data-type="' +
                                                p +
                                                '"><div class="video-wrapper"><iframe allow="autoplay; fullscreen" class="pswp__video"src="' +
                                                u +
                                                ' " frameborder="0" allowfullscreen></iframe></div></div>',
                                            title: h,
                                            shareLink:
                                                a.attr("data-dt-location") ||
                                                a
                                                    .parents(".fancy-media-wrap")
                                                    .find("img")
                                                    .attr("data-dt-location") ||
                                                "",
                                        };
                                        "hosted" == p &&
                                            (f.html =
                                                '<div class="pswp-video-wrap " data-type="' +
                                                p +
                                                '"><div class="video-wrapper"><video controls class="pswp__video" src="' +
                                                u +
                                                '" type="video/mp4"</video ></div></div>');
                                    } else f = { src: o.href, w: l, h: c, title: h, shareLink: a.attr("data-dt-location") || a.find("img").attr("data-dt-location") || "" };
                                    n[e].items.push(f);
                                }),
                            t(i).prev().hasClass("dt-gallery-pswp")
                                ? t(i)
                                    .prev(".dt-gallery-pswp")
                                    .on("click", function (e) {
                                        e.preventDefault();
                                        var n = t(this),
                                            a = t(this).next(t(i)).find(s.target),
                                            r = a.data("gallery-id"),
                                            l = a.data("photo-id");
                                        n.parents(".ts-wrap").hasClass("ts-interceptClicks") ||
                                            o(r, l, n);
                                    })
                                : t(i).on("click", s.target, function (e) {
                                    var i = t(this);
                                    e.preventDefault();
                                    var n = t(this).data("gallery-id"),
                                        s = t(this).data("photo-id");
                                    i.parents(".ts-wrap").hasClass("ts-interceptClicks") ||
                                        o(n, s, i);
                                });
                    });
            })(i);
            var a = (function () {
                var t = window.location.hash.substring(1),
                    e = {};
                if (t.length < 5) return e;
                for (var i = t.split("&"), n = 0; n < i.length; n++)
                    if (i[n]) {
                        var s = i[n].split("=");
                        s.length < 2 || (e[s[0]] = s[1]);
                    }
                return (
                    e.gid && (e.gid = parseInt(e.gid, 10)),
                    e.hasOwnProperty("pid") ? ((e.pid = parseInt(e.pid, 10)), e) : e
                );
            })();
            return a.pid > 0 && a.gid > 0 && o(a.gid, a.pid), this;
        }
        function y(e, i) {
            if (void 0 !== t.fn[i])
                return e.each(function () {
                    t(this)[i]({
                        bgOpacity: dtShare.overlayOpacity / 100,
                        loop: !0,
                        showHideOpacity: !0,
                    });
                });
        }
        /**
         * Owl carousel
         * @version 2.3.4
         * @author Bartosz Wojciechowski
         * @author David Deutsch
         * @license The MIT License (MIT)
         * @todo Lazy Load Icon
         * @todo prevent animationend bubling
         * @todo itemsScaleUp
         * @todo Test Zepto
         * @todo stagePadding calculate wrong active classes
         */
        if (
            ((t.fn.photoswipeGallery = function (e) {
                var i = function t(e, i) {
                    return e && (i(e) ? e : t(e.parentNode, i));
                };
                for (
                    var n = function (e) {
                        var n = e.target || e.srcElement,
                            o = i(n, function (t) {
                                return (
                                    (e = "photoswipe-item"),
                                    (" " + t.className + " ").indexOf(" " + e + " ") > -1
                                );
                                var e;
                            });
                        if (o) {
                            for (
                                var a,
                                r = t(o).closest(".dt-gallery-container")[0],
                                l = t(t(o).closest(".dt-gallery-container")[0])
                                    .find(".photoswipe-item")
                                    .get(),
                                d = l.length,
                                c = 0,
                                h = 0;
                                h < d;
                                h++
                            )
                                if (1 === l[h].nodeType) {
                                    if (l[h] === o) {
                                        a = c;
                                        break;
                                    }
                                    c++;
                                }
                            return a >= 0 && s(a, r), !1;
                        }
                    },
                    s = function (e, i, n, s) {
                        var o,
                            a,
                            r,
                            l = document.querySelectorAll(".pswp")[0];
                        r = (function (e) {
                            for (
                                var i,
                                n,
                                s = t(e).find(".photoswipe-item").get(),
                                o = s.length,
                                a = [],
                                r = 0;
                                r < o;
                                r++
                            )
                                if (1 === (i = s[r]).nodeType) {
                                    n = i.children[0];
                                    var l =
                                        void 0 !== t(n).attr("data-large_image_width") &&
                                            t(n).attr("data-large_image_width").length > 0 &&
                                            "" != t(n).attr("data-large_image_width")
                                            ? t(n).attr("data-large_image_width")
                                            : t(n).find("img").attr("width"),
                                        d =
                                            void 0 !== t(n).attr("data-large_image_height") &&
                                                t(n).attr("data-large_image_height").length > 0 &&
                                                "" != t(n).attr("data-large_image_height")
                                                ? t(n).attr("data-large_image_height")
                                                : t(n).find("img").attr("height"),
                                        c =
                                            (void 0 !== t(n).attr("title") &&
                                                t(n).attr("title").length > 0
                                                ? "<h5>" + t(n).attr("title") + "</h5>\n"
                                                : "") +
                                            (void 0 !== t(n).attr("data-dt-img-description")
                                                ? t(n).attr("data-dt-img-description")
                                                : "") || "";
                                    if (t(n).hasClass("pswp-video")) {
                                        var h,
                                            u = n.href;
                                        t.each(m, function () {
                                            if (u.indexOf(this.index) > -1)
                                                return (
                                                    this.id &&
                                                    ((u =
                                                        "string" == typeof this.id
                                                            ? u.substr(
                                                                u.lastIndexOf(this.id) + this.id.length,
                                                                u.length
                                                            )
                                                            : this.id.call(this, u)),
                                                        (h = this.type)),
                                                    (u = this.src.replace("%id%", u)),
                                                    !1
                                                );
                                        });
                                        var p = {
                                            html:
                                                '<div class="pswp-video-wrap " data-type="' +
                                                h +
                                                '"><div class="video-wrapper"><iframe allow="autoplay; fullscreen" class="pswp__video"src=" ' +
                                                u +
                                                ' " frameborder="0" allowfullscreen></iframe></div></div>',
                                            title: c,
                                        };
                                    } else
                                        p = { src: n.getAttribute("href"), w: l, h: d, title: c };
                                    n.children.length > 0 &&
                                        (p.msrc = n.children[0].getAttribute("src")),
                                        (p.el = i),
                                        a.push(p);
                                }
                            return a;
                        })(i);
                        var d = t(i).attr("data-pretty-share")
                            ? t(i).attr("data-pretty-share").split(",")
                            : new Array();
                        if (
                            (d.length <= 0 || void 0 === d
                                ? t(".pswp__scroll-wrap").addClass("hide-pspw-share")
                                : d.push("download"),
                                g(d),
                                (a = {
                                    closeOnScroll: !1,
                                    galleryUID: i.getAttribute("data-pswp-uid"),
                                    bgOpacity: dtShare.overlayOpacity / 100,
                                    loop: !0,
                                    history: !1,
                                    showHideOpacity: !0,
                                    showAnimationDuration: 0,
                                    shareButtons: f,
                                    getImageURLForShare: function (e) {
                                        return (
                                            o.currItem.src ||
                                            t(o.currItem.el).find("a").attr("data-dt-location") ||
                                            ""
                                        );
                                    },
                                    getPageURLForShare: function (e) {
                                        return (
                                            t(o.currItem.el).find("a").attr("data-dt-location") ||
                                            window.location.href
                                        );
                                    },
                                    getTextForShare: function (t) {
                                        var e = o.currItem.title;
                                        return (
                                            (void 0 !== e ? e.replace(/<[^>]+>/g, "") : "") || ""
                                        );
                                    },
                                    parseShareButtonOut: function (t, e) {
                                        return e;
                                    },
                                }),
                                s)
                        )
                            if (a.galleryPIDs) {
                                for (var c = 0; c < r.length; c++)
                                    if (r[c].pid == e) {
                                        a.index = c;
                                        break;
                                    }
                            } else a.index = parseInt(e, 10) - 1;
                        else a.index = parseInt(e, 10);
                        if (!isNaN(a.index)) {
                            n && (a.showAnimationDuration = 0),
                                (o = new PhotoSwipe(l, PhotoSwipeUI_Default, r, a)).init(),
                                t(".pswp__zoom-wrap").removeClass("active-item"),
                                t(".pswp__video").removeClass("active");
                            var h,
                                u,
                                p = t(o.currItem.container);
                            if (
                                (p.addClass("active-item"), p.find(".pswp__video").length > 0)
                            ) {
                                p.find(".pswp__video").addClass("active"),
                                    p.parents(".pswp").addClass("video-active");
                                var v = p.find(".pswp__video").prop("src");
                                (v += "?autoplay=1"), p.find(".pswp__video").prop("src", v);
                            }
                            o.listen("beforeChange", function () {
                                var e = t(o.currItem.container);
                                t(".pswp__zoom-wrap").removeClass("active-item"),
                                    e.addClass("active-item"),
                                    t(".pswp__video").removeClass("active"),
                                    t(".pswp").removeClass("video-active"),
                                    e.find(".pswp__video").addClass("active");
                                e.find(".pswp__video");
                                e.find(".pswp__video").length > 0 &&
                                    (e.parents(".pswp").addClass("video-active"),
                                        ($runVideo = 0)),
                                    t(".pswp__video").each(function () {
                                        var e = t(this);
                                        if (!e.hasClass("active")) {
                                            var i = e.prop("src");
                                            (i =
                                                "youtube" ==
                                                    e.parents(".pswp-video-wrap ").attr("data-type") ||
                                                    "vimeo" ==
                                                    e.parents(".pswp-video-wrap ").attr("data-type")
                                                    ? i.replace("?autoplay=1", "?enablejsapi=1")
                                                    : i.replace("?autoplay=1", "")),
                                                e.prop("src", ""),
                                                e.prop("src", i);
                                            var n = e[0].contentWindow;
                                            e.hasClass("active")
                                                ? (func = "playVideo")
                                                : (func = "pauseVideo"),
                                                n.postMessage(
                                                    '{"event":"command","func":"' +
                                                    func +
                                                    '","args":""}',
                                                    "*"
                                                );
                                        }
                                    });
                            }),
                                o.listen("close", function () {
                                    t(".pswp__video").each(function () {
                                        var e = t(this);
                                        e.attr("src", t(this).attr("src"));
                                        var i = e.prop("src");
                                        (i =
                                            "youtube" ==
                                                e.parents(".pswp-video-wrap ").attr("data-type") ||
                                                "vimeo" ==
                                                e.parents(".pswp-video-wrap ").attr("data-type")
                                                ? i.replace("?autoplay=1", "?enablejsapi=1")
                                                : i.replace("?autoplay=1", "")),
                                            e.prop("src", ""),
                                            e.prop("src", i),
                                            t(".pswp__video").removeClass("active");
                                        var n = e[0].contentWindow;
                                        t(this).hasClass("active")
                                            ? (func = "playVideo")
                                            : (func = "pauseVideo"),
                                            n.postMessage(
                                                '{"event":"command","func":"' + func + '","args":""}',
                                                "*"
                                            ),
                                            clearTimeout(h),
                                            (h = setTimeout(function () {
                                                t(".pswp-video-wrap").remove();
                                            }, 200));
                                    });
                                }),
                                o.listen("destroy", function () {
                                    clearTimeout(u),
                                        (u = setTimeout(function () {
                                            t(".pswp").removeClass().addClass("pswp");
                                        }, 100));
                                });
                        }
                    },
                    o = document.querySelectorAll(e),
                    a = 0,
                    r = o.length;
                    a < r;
                    a++
                )
                    o[a].setAttribute("data-pswp-uid", a + 1), (o[a].onclick = n);
                var l = (function () {
                    var t = window.location.hash.substring(1),
                        e = {};
                    if (t.length < 5) return e;
                    for (var i = t.split("&"), n = 0; n < i.length; n++)
                        if (i[n]) {
                            var s = i[n].split("=");
                            s.length < 2 || (e[s[0]] = s[1]);
                        }
                    return e.gid && (e.gid = parseInt(e.gid, 10)), e;
                })();
                l.pid && l.gid && s(l.pid, o[l.gid - 1], !0, !0);
            }),
                t(".dt-gallery-container.wf-container").photoswipeGallery(
                    ".dt-gallery-container.wf-container"
                ),
                (t.fn.photoswipe = function (t) {
                    return (t.embedType = "hosted"), v(t, this);
                }),
                dtGlobals.addOnloadEvent(function () {
                    t(
                        ".photoswipe-wrapper, .photoswipe-item .dt-gallery-container, .shortcode-gallery.dt-gallery-container:not(.owl-carousel), .dt-gallery-container.gallery, .instagram-photos.dt-gallery-container, .images-container .dt-gallery-container, .shortcode-instagram.dt-gallery-container, .gallery-shortcode:not(.owl-carousel)"
                    ).initPhotoswipe();
                }),
                (t.fn.photoswipeCarousel = function (t) {
                    return (t.target = ".dt-owl-item.cloned .dt-pswp-item"), v(t, this);
                }),
                (t.fn.initCarouselClonedPhotoswipe = function () {
                    return y(this, "photoswipeCarousel");
                }),
                (t.fn.initPhotoswipe = function () {
                    return y(this, "photoswipe");
                }),
                t(
                    ".shortcode-gallery.dt-gallery-container:not(.owl-loaded), .gallery-shortcode:not(.owl-loaded)"
                ).initPhotoswipe(),
                t(".dt-trigger-first-pswp")
                    .addClass("pspw-ready")
                    .on("click", function (e) {
                        var i = t(this),
                            n = i.parents("article.post").first();
                        if (!i.parents(".ts-wrap").hasClass("ts-interceptClicks")) {
                            if (n.length > 0)
                                (n.find(".dt-gallery-container").length > 0
                                    ? n.find(".dt-gallery-container a.dt-pswp-item")
                                    : n.find("a.dt-pswp-item")
                                ).length > 0 && n.find(".rollover-click-target").trigger("click");
                            return !1;
                        }
                    }),
                t(".dt-owl-carousel-call").length > 0 ||
                t(".slider-content").length > 0 ||
                t(".dt-owl-carousel-init").length > 0 ||
                t("body").is('[class*="elementor-page"]'))
        ) {
            var w = t.fn.owlCarousel;
            !(function (t, e, i, n) {
                function s(e, i) {
                    (this.settings = null),
                        (this.options = t.extend({}, s.Defaults, i)),
                        (this.$element = t(e)),
                        (this._handlers = {}),
                        (this._plugins = {}),
                        (this._supress = {}),
                        (this._current = null),
                        (this._speed = null),
                        (this._coordinates = []),
                        (this._breakpoint = null),
                        (this._width = null),
                        (this._items = []),
                        (this._clones = []),
                        (this._mergers = []),
                        (this._widths = []),
                        (this._invalidated = {}),
                        (this._pipe = []),
                        (this._drag = {
                            time: null,
                            target: null,
                            pointer: null,
                            stage: { start: null, current: null },
                            direction: null,
                        }),
                        (this._states = {
                            current: {},
                            tags: {
                                initializing: ["busy"],
                                animating: ["busy"],
                                dragging: ["interacting"],
                            },
                        }),
                        t.each(
                            ["onResize", "onThrottledResize"],
                            t.proxy(function (e, i) {
                                this._handlers[i] = t.proxy(this[i], this);
                            }, this)
                        ),
                        t.each(
                            s.Plugins,
                            t.proxy(function (t, e) {
                                this._plugins[t.charAt(0).toLowerCase() + t.slice(1)] = new e(
                                    this
                                );
                            }, this)
                        ),
                        t.each(
                            s.Workers,
                            t.proxy(function (e, i) {
                                this._pipe.push({
                                    filter: i.filter,
                                    run: t.proxy(i.run, this),
                                });
                            }, this)
                        ),
                        this.setup(),
                        this.initialize();
                }
                (s.Defaults = {
                    items: 3,
                    loop: !1,
                    center: !1,
                    rewind: !1,
                    checkVisibility: !0,
                    mouseDrag: !0,
                    touchDrag: !0,
                    pullDrag: !0,
                    freeDrag: !1,
                    margin: 0,
                    stagePadding: 0,
                    merge: !1,
                    mergeFit: !0,
                    autoWidth: !1,
                    startPosition: 0,
                    rtl: !1,
                    smartSpeed: 250,
                    fluidSpeed: !1,
                    dragEndSpeed: !1,
                    responsive: {},
                    responsiveRefreshRate: 200,
                    responsiveBaseElement: e,
                    fallbackEasing: "swing",
                    slideTransition: "",
                    info: !1,
                    nestedItemSelector: !1,
                    itemElement: "div",
                    stageElement: "div",
                    refreshClass: "owl-refresh",
                    loadedClass: "owl-loaded",
                    loadingClass: "owl-loading",
                    rtlClass: "owl-rtl",
                    responsiveClass: "owl-responsive",
                    dragClass: "owl-drag",
                    itemClass: "dt-owl-item",
                    stageClass: "owl-stage",
                    stageOuterClass: "owl-stage-outer",
                    grabClass: "owl-grab",
                }),
                    (s.Width = { Default: "default", Inner: "inner", Outer: "outer" }),
                    (s.Type = { Event: "event", State: "state" }),
                    (s.Plugins = {}),
                    (s.Workers = [
                        {
                            filter: ["width", "settings"],
                            run: function () {
                                this._width = this.$element.width();
                            },
                        },
                        {
                            filter: ["width", "items", "settings"],
                            run: function (t) {
                                t.current =
                                    this._items && this._items[this.relative(this._current)];
                            },
                        },
                        {
                            filter: ["items", "settings"],
                            run: function () {
                                this.$stage.children(".cloned").remove();
                            },
                        },
                        {
                            filter: ["width", "items", "settings"],
                            run: function (t) {
                                var e = this.settings.margin || "",
                                    i = !this.settings.autoWidth,
                                    n = this.settings.rtl,
                                    s = {
                                        width: "auto",
                                        "margin-left": n ? e : "",
                                        "margin-right": n ? "" : e,
                                    };
                                !i && this.$stage.children().css(s), (t.css = s);
                            },
                        },
                        {
                            filter: ["width", "items", "settings"],
                            run: function (t) {
                                var e = parseInt(
                                    getComputedStyle(this.$stage.get(0)).getPropertyValue(
                                        "--stage-left-gap"
                                    )
                                ),
                                    i = parseInt(
                                        getComputedStyle(this.$stage.get(0)).getPropertyValue(
                                            "--stage-right-gap"
                                        )
                                    ),
                                    n =
                                        ((this.width() - e - i) / this.settings.items).toFixed(3) -
                                        this.settings.margin,
                                    s = null,
                                    o = this._items.length,
                                    a = !this.settings.autoWidth,
                                    r = [];
                                for (t.items = { merge: !1, width: n }; o--;)
                                    (s = this._mergers[o]),
                                        (s =
                                            (this.settings.mergeFit &&
                                                Math.min(s, this.settings.items)) ||
                                            s),
                                        (t.items.merge = s > 1 || t.items.merge),
                                        (r[o] = a ? n * s : this._items[o].width());
                                this._widths = r;
                            },
                        },
                        {
                            filter: ["items", "settings"],
                            run: function () {
                                var e = [],
                                    i = this._items,
                                    n = this.settings,
                                    s = Math.max(2 * n.items, 4),
                                    o = 2 * Math.ceil(i.length / 2),
                                    a = n.loop && i.length ? (n.rewind ? s : Math.max(s, o)) : 0,
                                    r = "",
                                    l = "";
                                for (a /= 2; a > 0;)
                                    e.push(this.normalize(e.length / 2, !0)),
                                        (r += i[e[e.length - 1]][0].outerHTML),
                                        e.push(
                                            this.normalize(i.length - 1 - (e.length - 1) / 2, !0)
                                        ),
                                        (l = i[e[e.length - 1]][0].outerHTML + l),
                                        (a -= 1);
                                (this._clones = e),
                                    t(r).addClass("cloned").appendTo(this.$stage),
                                    t(l).addClass("cloned").prependTo(this.$stage);
                            },
                        },
                        {
                            filter: ["width", "items", "settings"],
                            run: function () {
                                for (
                                    var t = this.settings.rtl ? 1 : -1,
                                    e = this._clones.length + this._items.length,
                                    i = -1,
                                    n = 0,
                                    s = 0,
                                    o = [];
                                    ++i < e;

                                )
                                    (n = o[i - 1] || 0),
                                        (s = this._widths[this.relative(i)] + this.settings.margin),
                                        o.push(n + s * t);
                                this._coordinates = o;
                            },
                        },
                        {
                            filter: ["width", "items", "settings"],
                            run: function () {
                                var t = this.settings.stagePadding,
                                    e = this._coordinates,
                                    i = {
                                        width: Math.ceil(Math.abs(e[e.length - 1])) + 2 * t,
                                        "padding-left": t || "",
                                        "padding-right": t || "",
                                    };
                                this.$stage.css(i);
                            },
                        },
                        {
                            filter: ["width", "items", "settings"],
                            run: function (t) {
                                var e = this._coordinates.length,
                                    i = !this.settings.autoWidth,
                                    n = this.$stage.children();
                                if (i && t.items.merge)
                                    for (; e--;)
                                        (t.css.width = this._widths[this.relative(e)]),
                                            n.eq(e).css(t.css);
                                else i && ((t.css.width = t.items.width), n.css(t.css));
                            },
                        },
                        {
                            filter: ["items"],
                            run: function () {
                                this._coordinates.length < 1 && this.$stage.removeAttr("style");
                            },
                        },
                        {
                            filter: ["width", "items", "settings"],
                            run: function (t) {
                                (t.current = t.current
                                    ? this.$stage.children().index(t.current)
                                    : 0),
                                    (t.current = Math.max(
                                        this.minimum(),
                                        Math.min(this.maximum(), t.current)
                                    )),
                                    this.reset(t.current);
                            },
                        },
                        {
                            filter: ["position"],
                            run: function () {
                                this.animate(this.coordinates(this._current));
                            },
                        },
                        {
                            filter: ["width", "position", "items", "settings"],
                            run: function () {
                                var t,
                                    e,
                                    i,
                                    n,
                                    s = this.settings.rtl ? 1 : -1,
                                    o = 2 * this.settings.stagePadding,
                                    a = this.coordinates(this.current()) + o,
                                    r = a + this.width() * s,
                                    l = [];
                                for (i = 0, n = this._coordinates.length; i < n; i++)
                                    (t = this._coordinates[i - 1] || 0),
                                        (e = Math.abs(this._coordinates[i]) + o * s),
                                        ((this.op(t, "<=", a) && this.op(t, ">", r)) ||
                                            (this.op(e, "<", a) && this.op(e, ">", r))) &&
                                        l.push(i);
                                this.$stage.children(".active").removeClass("active"),
                                    this.$stage
                                        .children(":eq(" + l.join("), :eq(") + ")")
                                        .addClass("active"),
                                    this.$stage.children(".center").removeClass("center"),
                                    this.settings.center &&
                                    this.$stage
                                        .children()
                                        .eq(this.current())
                                        .addClass("center");
                            },
                        },
                    ]),
                    (s.prototype.initializeStage = function () {
                        (this.$stage = this.$element.find("." + this.settings.stageClass)),
                            this.$stage.length ||
                            (this.$element.addClass(this.options.loadingClass),
                                (this.$stage = t("<" + this.settings.stageElement + ">", {
                                    class: this.settings.stageClass,
                                }).wrap(t("<div/>", { class: this.settings.stageOuterClass }))),
                                this.$element.append(this.$stage.parent()));
                    }),
                    (s.prototype.initializeItems = function () {
                        var e = this.$element.find(".dt-owl-item");
                        if (e.length)
                            return (
                                (this._items = e.get().map(function (e) {
                                    return t(e);
                                })),
                                (this._mergers = this._items.map(function () {
                                    return 1;
                                })),
                                void this.refresh()
                            );
                        this.replace(this.$element.children().not(this.$stage.parent())),
                            this.isVisible() ? this.refresh() : this.invalidate("width"),
                            this.$element
                                .removeClass(this.options.loadingClass)
                                .addClass(this.options.loadedClass);
                    }),
                    (s.prototype.initialize = function () {
                        var t, e, i;
                        (this.enter("initializing"),
                            this.trigger("initialize"),
                            this.$element.toggleClass(
                                this.settings.rtlClass,
                                this.settings.rtl
                            ),
                            this.settings.autoWidth && !this.is("pre-loading")) &&
                            ((t = this.$element.find("img")),
                                (e = this.settings.nestedItemSelector
                                    ? "." + this.settings.nestedItemSelector
                                    : n),
                                (i = this.$element.children(e).width()),
                                t.length && i <= 0 && this.preloadAutoWidthImages(t));
                        this.initializeStage(),
                            this.initializeItems(),
                            this.registerEventHandlers(),
                            this.leave("initializing"),
                            this.trigger("initialized");
                    }),
                    (s.prototype.isVisible = function () {
                        return (
                            !this.settings.checkVisibility || this.$element.is(":visible")
                        );
                    }),
                    (s.prototype.setup = function () {
                        var e = this.viewport(),
                            i = this.options.responsive,
                            n = -1,
                            s = null;
                        i
                            ? (t.each(i, function (t) {
                                t <= e && t > n && (n = Number(t));
                            }),
                                "function" ==
                                typeof (s = t.extend({}, this.options, i[n])).stagePadding &&
                                (s.stagePadding = s.stagePadding()),
                                delete s.responsive,
                                s.responsiveClass &&
                                this.$element.attr(
                                    "class",
                                    this.$element
                                        .attr("class")
                                        .replace(
                                            new RegExp(
                                                "(" + this.options.responsiveClass + "-)\\S+\\s",
                                                "g"
                                            ),
                                            "$1" + n
                                        )
                                ))
                            : (s = t.extend({}, this.options)),
                            this.trigger("change", {
                                property: { name: "settings", value: s },
                            }),
                            (this._breakpoint = n),
                            (this.settings = s),
                            this.invalidate("settings"),
                            this.trigger("changed", {
                                property: { name: "settings", value: this.settings },
                            });
                    }),
                    (s.prototype.optionsLogic = function () {
                        this.settings.autoWidth &&
                            ((this.settings.stagePadding = !1), (this.settings.merge = !1));
                    }),
                    (s.prototype.prepare = function (e) {
                        var i = this.trigger("prepare", { content: e });
                        return (
                            i.data ||
                            (i.data = t("<" + this.settings.itemElement + "/>")
                                .addClass(this.options.itemClass)
                                .append(e)),
                            this.trigger("prepared", { content: i.data }),
                            i.data
                        );
                    }),
                    (s.prototype.update = function () {
                        for (
                            var e = 0,
                            i = this._pipe.length,
                            n = t.proxy(function (t) {
                                return this[t];
                            }, this._invalidated),
                            s = {};
                            e < i;

                        )
                            (this._invalidated.all ||
                                t.grep(this._pipe[e].filter, n).length > 0) &&
                                this._pipe[e].run(s),
                                e++;
                        (this._invalidated = {}), !this.is("valid") && this.enter("valid");
                    }),
                    (s.prototype.width = function (t) {
                        switch ((t = t || s.Width.Default)) {
                            case s.Width.Inner:
                            case s.Width.Outer:
                                return this._width;
                            default:
                                return (
                                    this._width -
                                    2 * this.settings.stagePadding +
                                    this.settings.margin
                                );
                        }
                    }),
                    (s.prototype.refresh = function () {
                        this.enter("refreshing"),
                            this.trigger("refresh"),
                            this.setup(),
                            this.optionsLogic(),
                            this.$element.addClass(this.options.refreshClass),
                            this.update(),
                            this.$element.removeClass(this.options.refreshClass),
                            this.leave("refreshing"),
                            this.trigger("refreshed");
                    }),
                    (s.prototype.onThrottledResize = function () {
                        e.clearTimeout(this.resizeTimer),
                            (this.resizeTimer = e.setTimeout(
                                this._handlers.onResize,
                                this.settings.responsiveRefreshRate
                            ));
                    }),
                    (s.prototype.onResize = function () {
                        return (
                            !!this._items.length &&
                            this._width !== this.$element.width() &&
                            !!this.isVisible() &&
                            (this.enter("resizing"),
                                this.trigger("resize").isDefaultPrevented()
                                    ? (this.leave("resizing"), !1)
                                    : (this.invalidate("width"),
                                        this.refresh(),
                                        this.leave("resizing"),
                                        void this.trigger("resized")))
                        );
                    }),
                    (s.prototype.registerEventHandlers = function () {
                        t.support.transition &&
                            this.$stage.on(
                                t.support.transition.end + ".owl.core",
                                t.proxy(this.onTransitionEnd, this)
                            ),
                            !1 !== this.settings.responsive &&
                            this.on(e, "resize", this._handlers.onThrottledResize),
                            this.settings.mouseDrag &&
                            (this.$element.addClass(this.options.dragClass),
                                this.$stage.on(
                                    "mousedown.owl.core",
                                    t.proxy(this.onDragStart, this)
                                ),
                                this.$stage.on(
                                    "dragstart.owl.core selectstart.owl.core",
                                    function () {
                                        return !1;
                                    }
                                )),
                            this.settings.touchDrag &&
                            (this.$stage.on(
                                "touchstart.owl.core",
                                t.proxy(this.onDragStart, this)
                            ),
                                this.$stage.on(
                                    "touchcancel.owl.core",
                                    t.proxy(this.onDragEnd, this)
                                ));
                    }),
                    (s.prototype.onDragStart = function (e) {
                        var n = null;
                        3 !== e.which &&
                            (t.support.transform
                                ? (n = {
                                    x: (n = this.$stage
                                        .css("transform")
                                        .replace(/.*\(|\)| /g, "")
                                        .split(","))[16 === n.length ? 12 : 4],
                                    y: n[16 === n.length ? 13 : 5],
                                })
                                : ((n = this.$stage.position()),
                                    (n = {
                                        x: this.settings.rtl
                                            ? n.left +
                                            this.$stage.width() -
                                            this.width() +
                                            this.settings.margin
                                            : n.left,
                                        y: n.top,
                                    })),
                                this.is("animating") &&
                                (t.support.transform ? this.animate(n.x) : this.$stage.stop(),
                                    this.invalidate("position")),
                                this.$element.toggleClass(
                                    this.options.grabClass,
                                    "mousedown" === e.type
                                ),
                                this.speed(0),
                                (this._drag.time = new Date().getTime()),
                                (this._drag.target = t(e.target)),
                                (this._drag.stage.start = n),
                                (this._drag.stage.current = n),
                                (this._drag.pointer = this.pointer(e)),
                                t(i).on(
                                    "mouseup.owl.core touchend.owl.core",
                                    t.proxy(this.onDragEnd, this)
                                ),
                                t(i).one(
                                    "mousemove.owl.core touchmove.owl.core",
                                    t.proxy(function (e) {
                                        var n = this.difference(this._drag.pointer, this.pointer(e));
                                        t(i).on(
                                            "mousemove.owl.core touchmove.owl.core",
                                            t.proxy(this.onDragMove, this)
                                        ),
                                            (Math.abs(n.x) < Math.abs(n.y) && this.is("valid")) ||
                                            (e.preventDefault(),
                                                this.enter("dragging"),
                                                this.trigger("drag"));
                                    }, this)
                                ));
                    }),
                    (s.prototype.onDragMove = function (t) {
                        var e = null,
                            i = null,
                            n = null,
                            s = this.difference(this._drag.pointer, this.pointer(t)),
                            o = this.difference(this._drag.stage.start, s);
                        this.is("dragging") &&
                            (t.preventDefault(),
                                this.settings.loop
                                    ? ((e = this.coordinates(this.minimum())),
                                        (i = this.coordinates(this.maximum() + 1) - e),
                                        (o.x = ((((o.x - e) % i) + i) % i) + e))
                                    : ((e = this.settings.rtl
                                        ? this.coordinates(this.maximum())
                                        : this.coordinates(this.minimum())),
                                        (i = this.settings.rtl
                                            ? this.coordinates(this.minimum())
                                            : this.coordinates(this.maximum())),
                                        (n = this.settings.pullDrag ? (-1 * s.x) / 5 : 0),
                                        (o.x = Math.max(Math.min(o.x, e + n), i + n))),
                                (this._drag.stage.current = o),
                                this.animate(o.x));
                    }),
                    (s.prototype.onDragEnd = function (e) {
                        var n = this.difference(this._drag.pointer, this.pointer(e)),
                            s = this._drag.stage.current,
                            o = (n.x > 0) ^ this.settings.rtl ? "left" : "right";
                        t(i).off(".owl.core"),
                            this.$element.removeClass(this.options.grabClass),
                            ((0 !== n.x && this.is("dragging")) || !this.is("valid")) &&
                            (this.speed(
                                this.settings.dragEndSpeed || this.settings.smartSpeed
                            ),
                                this.current(
                                    this.closest(s.x, 0 !== n.x ? o : this._drag.direction)
                                ),
                                this.invalidate("position"),
                                this.update(),
                                (this._drag.direction = o),
                                (Math.abs(n.x) > 3 ||
                                    new Date().getTime() - this._drag.time > 300) &&
                                this._drag.target.one("click.owl.core", function () {
                                    return !1;
                                })),
                            this.is("dragging") &&
                            (this.leave("dragging"), this.trigger("dragged"));
                    }),
                    (s.prototype.closest = function (e, i) {
                        var s = -1,
                            o = this.width(),
                            a = this.coordinates();
                        return (
                            this.settings.freeDrag ||
                            t.each(
                                a,
                                t.proxy(function (t, r) {
                                    return (
                                        "left" === i && e > r - 30 && e < r + 30
                                            ? (s = t)
                                            : "right" === i && e > r - o - 30 && e < r - o + 30
                                                ? (s = t + 1)
                                                : this.op(e, "<", r) &&
                                                this.op(e, ">", a[t + 1] !== n ? a[t + 1] : r - o) &&
                                                (s = "left" === i ? t + 1 : t),
                                        -1 === s
                                    );
                                }, this)
                            ),
                            this.settings.loop ||
                            (this.op(e, ">", a[this.minimum()])
                                ? (s = e = this.minimum())
                                : this.op(e, "<", a[this.maximum()]) &&
                                (s = e = this.maximum())),
                            s
                        );
                    }),
                    (s.prototype.animate = function (e) {
                        var i = this.speed() > 0;
                        this.is("animating") && this.onTransitionEnd(),
                            i && (this.enter("animating"), this.trigger("translate")),
                            t.support.transform3d && t.support.transition
                                ? this.$stage.css({
                                    transform: "translate3d(" + e + "px,0px,0px)",
                                    transition:
                                        this.speed() / 1e3 +
                                        "s" +
                                        (this.settings.slideTransition
                                            ? " " + this.settings.slideTransition
                                            : ""),
                                })
                                : i
                                    ? this.$stage.animate(
                                        { left: e + "px" },
                                        this.speed(),
                                        this.settings.fallbackEasing,
                                        t.proxy(this.onTransitionEnd, this)
                                    )
                                    : this.$stage.css({ left: e + "px" });
                    }),
                    (s.prototype.is = function (t) {
                        return this._states.current[t] && this._states.current[t] > 0;
                    }),
                    (s.prototype.current = function (t) {
                        if (t === n) return this._current;
                        if (0 === this._items.length) return n;
                        if (((t = this.normalize(t)), this._current !== t)) {
                            var e = this.trigger("change", {
                                property: { name: "position", value: t },
                            });
                            e.data !== n && (t = this.normalize(e.data)),
                                (this._current = t),
                                this.invalidate("position"),
                                this.trigger("changed", {
                                    property: { name: "position", value: this._current },
                                });
                        }
                        return this._current;
                    }),
                    (s.prototype.invalidate = function (e) {
                        return (
                            "string" === t.type(e) &&
                            ((this._invalidated[e] = !0),
                                this.is("valid") && this.leave("valid")),
                            t.map(this._invalidated, function (t, e) {
                                return e;
                            })
                        );
                    }),
                    (s.prototype.reset = function (t) {
                        (t = this.normalize(t)) !== n &&
                            ((this._speed = 0),
                                (this._current = t),
                                this.suppress(["translate", "translated"]),
                                this.animate(this.coordinates(t)),
                                this.release(["translate", "translated"]));
                    }),
                    (s.prototype.normalize = function (t, e) {
                        var i = this._items.length,
                            s = e ? 0 : this._clones.length;
                        return (
                            !this.isNumeric(t) || i < 1
                                ? (t = n)
                                : (t < 0 || t >= i + s) &&
                                (t = ((((t - s / 2) % i) + i) % i) + s / 2),
                            t
                        );
                    }),
                    (s.prototype.relative = function (t) {
                        return (t -= this._clones.length / 2), this.normalize(t, !0);
                    }),
                    (s.prototype.maximum = function (t) {
                        var e,
                            i,
                            n,
                            s = this.settings,
                            o = this._coordinates.length;
                        if (s.loop) o = this._clones.length / 2 + this._items.length - 1;
                        else if (s.autoWidth || s.merge) {
                            if ((e = this._items.length))
                                for (
                                    i = this._items[--e].width(), n = this.$element.width();
                                    e-- &&
                                    !((i += this._items[e].width() + this.settings.margin) > n);

                                );
                            o = e + 1;
                        } else
                            o = s.center
                                ? this._items.length - 1
                                : this._items.length - s.items;
                        return t && (o -= this._clones.length / 2), Math.max(o, 0);
                    }),
                    (s.prototype.minimum = function (t) {
                        return t ? 0 : this._clones.length / 2;
                    }),
                    (s.prototype.items = function (t) {
                        return t === n
                            ? this._items.slice()
                            : ((t = this.normalize(t, !0)), this._items[t]);
                    }),
                    (s.prototype.mergers = function (t) {
                        return t === n
                            ? this._mergers.slice()
                            : ((t = this.normalize(t, !0)), this._mergers[t]);
                    }),
                    (s.prototype.clones = function (e) {
                        var i = this._clones.length / 2,
                            s = i + this._items.length,
                            o = function (t) {
                                return t % 2 == 0 ? s + t / 2 : i - (t + 1) / 2;
                            };
                        return e === n
                            ? t.map(this._clones, function (t, e) {
                                return o(e);
                            })
                            : t.map(this._clones, function (t, i) {
                                return t === e ? o(i) : null;
                            });
                    }),
                    (s.prototype.speed = function (t) {
                        return t !== n && (this._speed = t), this._speed;
                    }),
                    (s.prototype.coordinates = function (e) {
                        var i,
                            s = 1,
                            o = e - 1;
                        return e === n
                            ? t.map(
                                this._coordinates,
                                t.proxy(function (t, e) {
                                    return this.coordinates(e);
                                }, this)
                            )
                            : (this.settings.center
                                ? (this.settings.rtl && ((s = -1), (o = e + 1)),
                                    (i = this._coordinates[e]),
                                    (i +=
                                        ((this.width() - i + (this._coordinates[o] || 0)) / 2) *
                                        s))
                                : (i = this._coordinates[o] || 0),
                                (i = Math.ceil(i)));
                    }),
                    (s.prototype.duration = function (t, e, i) {
                        return 0 === i
                            ? 0
                            : Math.min(Math.max(Math.abs(e - t), 1), 6) *
                            Math.abs(i || this.settings.smartSpeed);
                    }),
                    (s.prototype.to = function (t, e) {
                        var i = this.current(),
                            n = null,
                            s = t - this.relative(i),
                            o = (s > 0) - (s < 0),
                            a = this._items.length,
                            r = this.minimum(),
                            l = this.maximum();
                        this.settings.loop
                            ? (!this.settings.rewind &&
                                Math.abs(s) > a / 2 &&
                                (s += -1 * o * a),
                                (n = (((((t = i + s) - r) % a) + a) % a) + r) !== t &&
                                n - s <= l &&
                                n - s > 0 &&
                                ((i = n - s), (t = n), this.reset(i)))
                            : (t = this.settings.rewind
                                ? ((t % (l += 1)) + l) % l
                                : Math.max(r, Math.min(l, t))),
                            this.speed(this.duration(i, t, e)),
                            this.current(t),
                            this.isVisible() && this.update();
                    }),
                    (s.prototype.next = function (t) {
                        (t = t || !1), this.to(this.relative(this.current()) + 1, t);
                    }),
                    (s.prototype.prev = function (t) {
                        (t = t || !1), this.to(this.relative(this.current()) - 1, t);
                    }),
                    (s.prototype.onTransitionEnd = function (t) {
                        if (
                            t !== n &&
                            (t.stopPropagation(),
                                (t.target || t.srcElement || t.originalTarget) !==
                                this.$stage.get(0))
                        )
                            return !1;
                        this.leave("animating"), this.trigger("translated");
                    }),
                    (s.prototype.viewport = function () {
                        var n;
                        return (
                            this.options.responsiveBaseElement !== e
                                ? (n = t(this.options.responsiveBaseElement).width())
                                : e.innerWidth
                                    ? (n = e.innerWidth)
                                    : i.documentElement && i.documentElement.clientWidth
                                        ? (n = i.documentElement.clientWidth)
                                        : console.warn("Can not detect viewport width."),
                            n
                        );
                    }),
                    (s.prototype.replace = function (e) {
                        this.$stage.empty(),
                            (this._items = []),
                            e && (e = e instanceof jQuery ? e : t(e)),
                            this.settings.nestedItemSelector &&
                            (e = e.find("." + this.settings.nestedItemSelector)),
                            e
                                .filter(function () {
                                    return 1 === this.nodeType;
                                })
                                .each(
                                    t.proxy(function (t, e) {
                                        (e = this.prepare(e)),
                                            this.$stage.append(e),
                                            this._items.push(e),
                                            this._mergers.push(
                                                1 *
                                                e
                                                    .find("[data-merge]")
                                                    .addBack("[data-merge]")
                                                    .attr("data-merge") || 1
                                            );
                                    }, this)
                                ),
                            this.reset(
                                this.isNumeric(this.settings.startPosition)
                                    ? this.settings.startPosition
                                    : 0
                            ),
                            this.invalidate("items");
                    }),
                    (s.prototype.add = function (e, i) {
                        var s = this.relative(this._current);
                        (i = i === n ? this._items.length : this.normalize(i, !0)),
                            (e = e instanceof jQuery ? e : t(e)),
                            this.trigger("add", { content: e, position: i }),
                            (e = this.prepare(e)),
                            0 === this._items.length || i === this._items.length
                                ? (0 === this._items.length && this.$stage.append(e),
                                    0 !== this._items.length && this._items[i - 1].after(e),
                                    this._items.push(e),
                                    this._mergers.push(
                                        1 *
                                        e
                                            .find("[data-merge]")
                                            .addBack("[data-merge]")
                                            .attr("data-merge") || 1
                                    ))
                                : (this._items[i].before(e),
                                    this._items.splice(i, 0, e),
                                    this._mergers.splice(
                                        i,
                                        0,
                                        1 *
                                        e
                                            .find("[data-merge]")
                                            .addBack("[data-merge]")
                                            .attr("data-merge") || 1
                                    )),
                            this._items[s] && this.reset(this._items[s].index()),
                            this.invalidate("items"),
                            this.trigger("added", { content: e, position: i });
                    }),
                    (s.prototype.remove = function (t) {
                        (t = this.normalize(t, !0)) !== n &&
                            (this.trigger("remove", { content: this._items[t], position: t }),
                                this._items[t].remove(),
                                this._items.splice(t, 1),
                                this._mergers.splice(t, 1),
                                this.invalidate("items"),
                                this.trigger("removed", { content: null, position: t }));
                    }),
                    (s.prototype.preloadAutoWidthImages = function (e) {
                        e.each(
                            t.proxy(function (e, i) {
                                this.enter("pre-loading"),
                                    (i = t(i)),
                                    t(new Image())
                                        .one(
                                            "load",
                                            t.proxy(function (t) {
                                                i.attr("src", t.target.src),
                                                    i.css("opacity", 1),
                                                    this.leave("pre-loading"),
                                                    !this.is("pre-loading") &&
                                                    !this.is("initializing") &&
                                                    this.refresh();
                                            }, this)
                                        )
                                        .attr(
                                            "src",
                                            i.attr("src") ||
                                            i.attr("data-src") ||
                                            i.attr("data-src-retina")
                                        );
                            }, this)
                        );
                    }),
                    (s.prototype.destroy = function () {
                        for (var n in (this.$element.off(".owl.core"),
                            this.$stage.off(".owl.core"),
                            t(i).off(".owl.core"),
                            !1 !== this.settings.responsive &&
                            (e.clearTimeout(this.resizeTimer),
                                this.off(e, "resize", this._handlers.onThrottledResize)),
                            this._plugins))
                            this._plugins[n].destroy();
                        this.$stage.children(".cloned").remove(),
                            this.$stage.unwrap(),
                            this.$stage.children().contents().unwrap(),
                            this.$stage.children().unwrap(),
                            this.$stage.remove(),
                            this.$element
                                .removeClass(this.options.refreshClass)
                                .removeClass(this.options.loadingClass)
                                .removeClass(this.options.loadedClass)
                                .removeClass(this.options.rtlClass)
                                .removeClass(this.options.dragClass)
                                .removeClass(this.options.grabClass)
                                .attr(
                                    "class",
                                    this.$element
                                        .attr("class")
                                        .replace(
                                            new RegExp(
                                                this.options.responsiveClass + "-\\S+\\s",
                                                "g"
                                            ),
                                            ""
                                        )
                                )
                                .removeData("owl.carousel");
                    }),
                    (s.prototype.op = function (t, e, i) {
                        var n = this.settings.rtl;
                        switch (e) {
                            case "<":
                                return n ? t > i : t < i;
                            case ">":
                                return n ? t < i : t > i;
                            case ">=":
                                return n ? t <= i : t >= i;
                            case "<=":
                                return n ? t >= i : t <= i;
                        }
                    }),
                    (s.prototype.on = function (t, e, i, n) {
                        t.addEventListener
                            ? t.addEventListener(e, i, n)
                            : t.attachEvent && t.attachEvent("on" + e, i);
                    }),
                    (s.prototype.off = function (t, e, i, n) {
                        t.removeEventListener
                            ? t.removeEventListener(e, i, n)
                            : t.detachEvent && t.detachEvent("on" + e, i);
                    }),
                    (s.prototype.trigger = function (e, i, n, o, a) {
                        var r = {
                            item: { count: this._items.length, index: this.current() },
                        },
                            l = t.camelCase(
                                t
                                    .grep(["on", e, n], function (t) {
                                        return t;
                                    })
                                    .join("-")
                                    .toLowerCase()
                            ),
                            d = t.Event(
                                [e, "owl", n || "carousel"].join(".").toLowerCase(),
                                t.extend({ relatedTarget: this }, r, i)
                            );
                        return (
                            this._supress[e] ||
                            (t.each(this._plugins, function (t, e) {
                                e.onTrigger && e.onTrigger(d);
                            }),
                                this.register({ type: s.Type.Event, name: e }),
                                this.$element.trigger(d),
                                this.settings &&
                                "function" == typeof this.settings[l] &&
                                this.settings[l].call(this, d)),
                            d
                        );
                    }),
                    (s.prototype.enter = function (e) {
                        t.each(
                            [e].concat(this._states.tags[e] || []),
                            t.proxy(function (t, e) {
                                this._states.current[e] === n && (this._states.current[e] = 0),
                                    this._states.current[e]++;
                            }, this)
                        );
                    }),
                    (s.prototype.leave = function (e) {
                        t.each(
                            [e].concat(this._states.tags[e] || []),
                            t.proxy(function (t, e) {
                                this._states.current[e]--;
                            }, this)
                        );
                    }),
                    (s.prototype.register = function (e) {
                        if (e.type === s.Type.Event) {
                            if (
                                (t.event.special[e.name] || (t.event.special[e.name] = {}),
                                    !t.event.special[e.name].owl)
                            ) {
                                var i = t.event.special[e.name]._default;
                                (t.event.special[e.name]._default = function (t) {
                                    return !i ||
                                        !i.apply ||
                                        (t.namespace && -1 !== t.namespace.indexOf("owl"))
                                        ? t.namespace && t.namespace.indexOf("owl") > -1
                                        : i.apply(this, arguments);
                                }),
                                    (t.event.special[e.name].owl = !0);
                            }
                        } else
                            e.type === s.Type.State &&
                                (this._states.tags[e.name]
                                    ? (this._states.tags[e.name] = this._states.tags[
                                        e.name
                                    ].concat(e.tags))
                                    : (this._states.tags[e.name] = e.tags),
                                    (this._states.tags[e.name] = t.grep(
                                        this._states.tags[e.name],
                                        t.proxy(function (i, n) {
                                            return t.inArray(i, this._states.tags[e.name]) === n;
                                        }, this)
                                    )));
                    }),
                    (s.prototype.suppress = function (e) {
                        t.each(
                            e,
                            t.proxy(function (t, e) {
                                this._supress[e] = !0;
                            }, this)
                        );
                    }),
                    (s.prototype.release = function (e) {
                        t.each(
                            e,
                            t.proxy(function (t, e) {
                                delete this._supress[e];
                            }, this)
                        );
                    }),
                    (s.prototype.pointer = function (t) {
                        var i = { x: null, y: null };
                        return (
                            (t =
                                (t = t.originalEvent || t || e.event).touches &&
                                    t.touches.length
                                    ? t.touches[0]
                                    : t.changedTouches && t.changedTouches.length
                                        ? t.changedTouches[0]
                                        : t).pageX
                                ? ((i.x = t.pageX), (i.y = t.pageY))
                                : ((i.x = t.clientX), (i.y = t.clientY)),
                            i
                        );
                    }),
                    (s.prototype.isNumeric = function (t) {
                        return !isNaN(parseFloat(t));
                    }),
                    (s.prototype.difference = function (t, e) {
                        return { x: t.x - e.x, y: t.y - e.y };
                    }),
                    (t.fn.owlCarousel = function (e) {
                        var i = Array.prototype.slice.call(arguments, 1);
                        return this.each(function () {
                            var n = t(this),
                                o = n.data("owl.carousel");
                            o ||
                                ((o = new s(this, "object" == typeof e && e)),
                                    n.data("owl.carousel", o),
                                    t.each(
                                        [
                                            "next",
                                            "prev",
                                            "to",
                                            "destroy",
                                            "refresh",
                                            "replace",
                                            "add",
                                            "remove",
                                        ],
                                        function (e, i) {
                                            o.register({ type: s.Type.Event, name: i }),
                                                o.$element.on(
                                                    i + ".owl.carousel.core",
                                                    t.proxy(function (t) {
                                                        t.namespace &&
                                                            t.relatedTarget !== this &&
                                                            (this.suppress([i]),
                                                                o[i].apply(this, [].slice.call(arguments, 1)),
                                                                this.release([i]));
                                                    }, o)
                                                );
                                        }
                                    )),
                                "string" == typeof e && "_" !== e.charAt(0) && o[e].apply(o, i);
                        });
                    }),
                    (t.fn.owlCarousel.Constructor = s);
            })(window.Zepto || window.jQuery, window, document),
                (function (t, e, i, n) {
                    var s = function (e) {
                        (this._core = e),
                            (this._interval = null),
                            (this._visible = null),
                            (this._handlers = {
                                "initialized.owl.carousel": t.proxy(function (t) {
                                    t.namespace &&
                                        this._core.settings.autoRefresh &&
                                        this.watch();
                                }, this),
                            }),
                            (this._core.options = t.extend(
                                {},
                                s.Defaults,
                                this._core.options
                            )),
                            this._core.$element.on(this._handlers);
                    };
                    (s.Defaults = { autoRefresh: !0, autoRefreshInterval: 500 }),
                        (s.prototype.watch = function () {
                            this._interval ||
                                ((this._visible = this._core.isVisible()),
                                    (this._interval = e.setInterval(
                                        t.proxy(this.refresh, this),
                                        this._core.settings.autoRefreshInterval
                                    )));
                        }),
                        (s.prototype.refresh = function () {
                            this._core.isVisible() !== this._visible &&
                                ((this._visible = !this._visible),
                                    this._core.$element.toggleClass("owl-hidden", !this._visible),
                                    this._visible &&
                                    this._core.invalidate("width") &&
                                    this._core.refresh());
                        }),
                        (s.prototype.destroy = function () {
                            var t, i;
                            for (t in (e.clearInterval(this._interval), this._handlers))
                                this._core.$element.off(t, this._handlers[t]);
                            for (i in Object.getOwnPropertyNames(this))
                                "function" != typeof this[i] && (this[i] = null);
                        }),
                        (t.fn.owlCarousel.Constructor.Plugins.AutoRefresh = s);
                })(window.Zepto || window.jQuery, window, document),
                (function (t, e, i, n) {
                    var s = function (e) {
                        (this._core = e),
                            (this._loaded = []),
                            (this._handlers = {
                                "initialized.owl.carousel change.owl.carousel resized.owl.carousel":
                                    t.proxy(function (e) {
                                        if (
                                            e.namespace &&
                                            this._core.settings &&
                                            this._core.settings.lazyLoad &&
                                            ((e.property && "position" == e.property.name) ||
                                                "initialized" == e.type)
                                        ) {
                                            var i = this._core.settings,
                                                n = (i.center && Math.ceil(i.items / 2)) || i.items,
                                                s = (i.center && -1 * n) || 0,
                                                o =
                                                    (e.property && undefined !== e.property.value
                                                        ? e.property.value
                                                        : this._core.current()) + s,
                                                a = this._core.clones().length,
                                                r = t.proxy(function (t, e) {
                                                    this.load(e);
                                                }, this);
                                            for (
                                                i.lazyLoadEager > 0 &&
                                                ((n += i.lazyLoadEager),
                                                    i.loop && ((o -= i.lazyLoadEager), n++));
                                                s++ < n;

                                            )
                                                this.load(a / 2 + this._core.relative(o)),
                                                    a &&
                                                    t.each(
                                                        this._core.clones(this._core.relative(o)),
                                                        r
                                                    ),
                                                    o++;
                                        }
                                    }, this),
                            }),
                            (this._core.options = t.extend(
                                {},
                                s.Defaults,
                                this._core.options
                            )),
                            this._core.$element.on(this._handlers);
                    };
                    (s.Defaults = { lazyLoad: !1, lazyLoadEager: 0 }),
                        (s.prototype.load = function (i) {
                            var n = this._core.$stage.children().eq(i),
                                s = n && n.find(".owl-lazy");
                            !s ||
                                t.inArray(n.get(0), this._loaded) > -1 ||
                                (s.each(
                                    t.proxy(function (i, n) {
                                        var s,
                                            o = t(n),
                                            a =
                                                (e.devicePixelRatio > 1 && o.attr("data-src-retina")) ||
                                                o.attr("data-src") ||
                                                o.attr("data-srcset");
                                        this._core.trigger("load", { element: o, url: a }, "lazy"),
                                            o.is("img")
                                                ? o
                                                    .one(
                                                        "load.owl.lazy",
                                                        t.proxy(function () {
                                                            o.css("opacity", 1),
                                                                this._core.trigger(
                                                                    "loaded",
                                                                    { element: o, url: a },
                                                                    "lazy"
                                                                );
                                                        }, this)
                                                    )
                                                    .attr("src", a)
                                                : o.is("source")
                                                    ? o
                                                        .one(
                                                            "load.owl.lazy",
                                                            t.proxy(function () {
                                                                this._core.trigger(
                                                                    "loaded",
                                                                    { element: o, url: a },
                                                                    "lazy"
                                                                );
                                                            }, this)
                                                        )
                                                        .attr("srcset", a)
                                                    : (((s = new Image()).onload = t.proxy(function () {
                                                        o.css({
                                                            "background-image": 'url("' + a + '")',
                                                            opacity: "1",
                                                        }),
                                                            this._core.trigger(
                                                                "loaded",
                                                                { element: o, url: a },
                                                                "lazy"
                                                            );
                                                    }, this)),
                                                        (s.src = a));
                                    }, this)
                                ),
                                    this._loaded.push(n.get(0)));
                        }),
                        (s.prototype.destroy = function () {
                            var t, e;
                            for (t in this.handlers)
                                this._core.$element.off(t, this.handlers[t]);
                            for (e in Object.getOwnPropertyNames(this))
                                "function" != typeof this[e] && (this[e] = null);
                        }),
                        (t.fn.owlCarousel.Constructor.Plugins.Lazy = s);
                })(window.Zepto || window.jQuery, window, document),
                (function (t, e, i, n) {
                    var s = function (i) {
                        (this._core = i),
                            (this._previousHeight = null),
                            (this._handlers = {
                                "initialized.owl.carousel refreshed.owl.carousel": t.proxy(
                                    function (t) {
                                        t.namespace &&
                                            this._core.settings.autoHeight &&
                                            this.update();
                                    },
                                    this
                                ),
                                "changed.owl.carousel": t.proxy(function (t) {
                                    t.namespace &&
                                        this._core.settings.autoHeight &&
                                        "position" === t.property.name &&
                                        this.update();
                                }, this),
                                "loaded.owl.lazy": t.proxy(function (t) {
                                    t.namespace &&
                                        this._core.settings.autoHeight &&
                                        t.element
                                            .closest("." + this._core.settings.itemClass)
                                            .index() === this._core.current() &&
                                        this.update();
                                }, this),
                            }),
                            (this._core.options = t.extend(
                                {},
                                s.Defaults,
                                this._core.options
                            )),
                            this._core.$element.on(this._handlers),
                            (this._intervalId = null);
                        var n = this;
                        t(e).on("load", function () {
                            n._core.settings.autoHeight && n.update();
                        }),
                            t(e).on("resize", function () {
                                n._core.settings.autoHeight &&
                                    (null != n._intervalId && clearTimeout(n._intervalId),
                                        (n._intervalId = setTimeout(function () {
                                            n.update();
                                        }, 250)));
                            });
                    };
                    (s.Defaults = { autoHeight: !1, autoHeightClass: "owl-height" }),
                        (s.prototype.update = function () {
                            var e = this._core._current,
                                i = e + this._core.settings.items,
                                n = this._core.settings.lazyLoad,
                                s = this._core.$stage.children().toArray().slice(e, i),
                                o = [],
                                a = 0;
                            t.each(s, function (e, i) {
                                o.push(t(i).height());
                            }),
                                (a = Math.max.apply(null, o)) <= 1 &&
                                n &&
                                this._previousHeight &&
                                (a = this._previousHeight),
                                (this._previousHeight = a),
                                this._core.$stage
                                    .parent()
                                    .height(a)
                                    .addClass(this._core.settings.autoHeightClass);
                        }),
                        (s.prototype.destroy = function () {
                            var t, e;
                            for (t in this._handlers)
                                this._core.$element.off(t, this._handlers[t]);
                            for (e in Object.getOwnPropertyNames(this))
                                "function" != typeof this[e] && (this[e] = null);
                        }),
                        (t.fn.owlCarousel.Constructor.Plugins.AutoHeight = s);
                })(window.Zepto || window.jQuery, window, document),
                (function (t, e, i, n) {
                    var s = function (e) {
                        (this._core = e),
                            (this._videos = {}),
                            (this._playing = null),
                            (this._handlers = {
                                "initialized.owl.carousel": t.proxy(function (t) {
                                    t.namespace &&
                                        this._core.register({
                                            type: "state",
                                            name: "playing",
                                            tags: ["interacting"],
                                        });
                                }, this),
                                "resize.owl.carousel": t.proxy(function (t) {
                                    t.namespace &&
                                        this._core.settings.video &&
                                        this.isInFullScreen() &&
                                        t.preventDefault();
                                }, this),
                                "refreshed.owl.carousel": t.proxy(function (t) {
                                    t.namespace &&
                                        this._core.is("resizing") &&
                                        this._core.$stage.find(".cloned .owl-video-frame").remove();
                                }, this),
                                "changed.owl.carousel": t.proxy(function (t) {
                                    t.namespace &&
                                        "position" === t.property.name &&
                                        this._playing &&
                                        this.stop();
                                }, this),
                                "prepared.owl.carousel": t.proxy(function (e) {
                                    if (e.namespace) {
                                        var i = t(e.content).find(".owl-video");
                                        i.length &&
                                            (i.css("display", "none"), this.fetch(i, t(e.content)));
                                    }
                                }, this),
                            }),
                            (this._core.options = t.extend(
                                {},
                                s.Defaults,
                                this._core.options
                            )),
                            this._core.$element.on(this._handlers),
                            this._core.$element.on(
                                "click.owl.video",
                                ".owl-video-play-icon",
                                t.proxy(function (t) {
                                    this.play(t);
                                }, this)
                            );
                    };
                    (s.Defaults = { video: !1, videoHeight: !1, videoWidth: !1 }),
                        (s.prototype.fetch = function (t, e) {
                            var i = t.attr("data-vimeo-id")
                                ? "vimeo"
                                : t.attr("data-vzaar-id")
                                    ? "vzaar"
                                    : "youtube",
                                n =
                                    t.attr("data-vimeo-id") ||
                                    t.attr("data-youtube-id") ||
                                    t.attr("data-vzaar-id"),
                                s = t.attr("data-width") || this._core.settings.videoWidth,
                                o = t.attr("data-height") || this._core.settings.videoHeight,
                                a = t.attr("href");
                            if (!a) throw new Error("Missing video URL.");
                            if (
                                (n = a.match(
                                    /(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/
                                ))[3].indexOf("youtu") > -1
                            )
                                i = "youtube";
                            else if (n[3].indexOf("vimeo") > -1) i = "vimeo";
                            else {
                                if (!(n[3].indexOf("vzaar") > -1))
                                    throw new Error("Video URL not supported.");
                                i = "vzaar";
                            }
                            (n = n[6]),
                                (this._videos[a] = { type: i, id: n, width: s, height: o }),
                                e.attr("data-video", a),
                                this.thumbnail(t, this._videos[a]);
                        }),
                        (s.prototype.thumbnail = function (e, i) {
                            var n,
                                s,
                                o =
                                    i.width && i.height
                                        ? "width:" + i.width + "px;height:" + i.height + "px;"
                                        : "",
                                a = e.find("img"),
                                r = "src",
                                l = "",
                                d = this._core.settings,
                                c = function (i) {
                                    '<div class="owl-video-play-icon"></div>',
                                        (n = d.lazyLoad
                                            ? t("<div/>", { class: "owl-video-tn " + l, srcType: i })
                                            : t("<div/>", {
                                                class: "owl-video-tn",
                                                style: "opacity:1;background-image:url(" + i + ")",
                                            })),
                                        e.after(n),
                                        e.after('<div class="owl-video-play-icon"></div>');
                                };
                            if (
                                (e.wrap(t("<div/>", { class: "owl-video-wrapper", style: o })),
                                    this._core.settings.lazyLoad &&
                                    ((r = "data-src"), (l = "owl-lazy")),
                                    a.length)
                            )
                                return c(a.attr(r)), a.remove(), !1;
                            "youtube" === i.type
                                ? ((s = "//img.youtube.com/vi/" + i.id + "/hqdefault.jpg"),
                                    c(s))
                                : "vimeo" === i.type
                                    ? t.ajax({
                                        type: "GET",
                                        url: "//vimeo.com/api/v2/video/" + i.id + ".json",
                                        jsonp: "callback",
                                        dataType: "jsonp",
                                        success: function (t) {
                                            (s = t[0].thumbnail_large), c(s);
                                        },
                                    })
                                    : "vzaar" === i.type &&
                                    t.ajax({
                                        type: "GET",
                                        url: "//vzaar.com/api/videos/" + i.id + ".json",
                                        jsonp: "callback",
                                        dataType: "jsonp",
                                        success: function (t) {
                                            (s = t.framegrab_url), c(s);
                                        },
                                    });
                        }),
                        (s.prototype.stop = function () {
                            this._core.trigger("stop", null, "video"),
                                this._playing.find(".owl-video-frame").remove(),
                                this._playing.removeClass("owl-video-playing"),
                                (this._playing = null),
                                this._core.leave("playing"),
                                this._core.trigger("stopped", null, "video");
                        }),
                        (s.prototype.play = function (e) {
                            var i,
                                n = t(e.target).closest("." + this._core.settings.itemClass),
                                s = this._videos[n.attr("data-video")],
                                o = s.width || "100%",
                                a = s.height || this._core.$stage.height();
                            this._playing ||
                                (this._core.enter("playing"),
                                    this._core.trigger("play", null, "video"),
                                    (n = this._core.items(this._core.relative(n.index()))),
                                    this._core.reset(n.index()),
                                    (i = t(
                                        '<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>'
                                    )).attr("height", a),
                                    i.attr("width", o),
                                    "youtube" === s.type
                                        ? i.attr(
                                            "src",
                                            "//www.youtube.com/embed/" +
                                            s.id +
                                            "?autoplay=1&rel=0&v=" +
                                            s.id
                                        )
                                        : "vimeo" === s.type
                                            ? i.attr(
                                                "src",
                                                "//player.vimeo.com/video/" + s.id + "?autoplay=1"
                                            )
                                            : "vzaar" === s.type &&
                                            i.attr(
                                                "src",
                                                "//view.vzaar.com/" + s.id + "/player?autoplay=true"
                                            ),
                                    t(i)
                                        .wrap('<div class="owl-video-frame" />')
                                        .insertAfter(n.find(".owl-video")),
                                    (this._playing = n.addClass("owl-video-playing")));
                        }),
                        (s.prototype.isInFullScreen = function () {
                            var e =
                                i.fullscreenElement ||
                                i.mozFullScreenElement ||
                                i.webkitFullscreenElement;
                            return e && t(e).parent().hasClass("owl-video-frame");
                        }),
                        (s.prototype.destroy = function () {
                            var t, e;
                            for (t in (this._core.$element.off("click.owl.video"),
                                this._handlers))
                                this._core.$element.off(t, this._handlers[t]);
                            for (e in Object.getOwnPropertyNames(this))
                                "function" != typeof this[e] && (this[e] = null);
                        }),
                        (t.fn.owlCarousel.Constructor.Plugins.Video = s);
                })(window.Zepto || window.jQuery, window, document),
                (function (t, e, i, n) {
                    var s = function (e) {
                        (this.core = e),
                            (this.core.options = t.extend({}, s.Defaults, this.core.options)),
                            (this.swapping = !0),
                            (this.previous = n),
                            (this.next = n),
                            (this.handlers = {
                                "change.owl.carousel": t.proxy(function (t) {
                                    t.namespace &&
                                        "position" == t.property.name &&
                                        ((this.previous = this.core.current()),
                                            (this.next = t.property.value));
                                }, this),
                                "drag.owl.carousel dragged.owl.carousel translated.owl.carousel":
                                    t.proxy(function (t) {
                                        t.namespace && (this.swapping = "translated" == t.type);
                                    }, this),
                                "translate.owl.carousel": t.proxy(function (t) {
                                    t.namespace &&
                                        this.swapping &&
                                        (this.core.options.animateOut ||
                                            this.core.options.animateIn) &&
                                        this.swap();
                                }, this),
                            }),
                            this.core.$element.on(this.handlers);
                    };
                    (s.Defaults = { animateOut: !1, animateIn: !1 }),
                        (s.prototype.swap = function () {
                            if (
                                1 === this.core.settings.items &&
                                t.support.animation &&
                                t.support.transition
                            ) {
                                this.core.speed(0);
                                var e,
                                    i = t.proxy(this.clear, this),
                                    n = this.core.$stage.children().eq(this.previous),
                                    s = this.core.$stage.children().eq(this.next),
                                    o = this.core.settings.animateIn,
                                    a = this.core.settings.animateOut;
                                this.core.current() !== this.previous &&
                                    (a &&
                                        ((e =
                                            this.core.coordinates(this.previous) -
                                            this.core.coordinates(this.next)),
                                            n
                                                .one(t.support.animation.end, i)
                                                .css({ left: e + "px" })
                                                .addClass("animated owl-animated-out")
                                                .addClass(a)),
                                        o &&
                                        s
                                            .one(t.support.animation.end, i)
                                            .addClass("animated owl-animated-in")
                                            .addClass(o));
                            }
                        }),
                        (s.prototype.clear = function (e) {
                            t(e.target)
                                .css({ left: "" })
                                .removeClass("animated owl-animated-out owl-animated-in")
                                .removeClass(this.core.settings.animateIn)
                                .removeClass(this.core.settings.animateOut),
                                this.core.onTransitionEnd();
                        }),
                        (s.prototype.destroy = function () {
                            var t, e;
                            for (t in this.handlers)
                                this.core.$element.off(t, this.handlers[t]);
                            for (e in Object.getOwnPropertyNames(this))
                                "function" != typeof this[e] && (this[e] = null);
                        }),
                        (t.fn.owlCarousel.Constructor.Plugins.Animate = s);
                })(window.Zepto || window.jQuery, window, document),
                (function (t, e, i, n) {
                    var s = function (e) {
                        (this._core = e),
                            (this._call = null),
                            (this._time = 0),
                            (this._timeout = 0),
                            (this._paused = !0),
                            (this._handlers = {
                                "changed.owl.carousel": t.proxy(function (t) {
                                    t.namespace && "settings" === t.property.name
                                        ? this._core.settings.autoplay
                                            ? this.play()
                                            : this.stop()
                                        : t.namespace &&
                                        "position" === t.property.name &&
                                        this._paused &&
                                        (this._time = 0);
                                }, this),
                                "initialized.owl.carousel": t.proxy(function (t) {
                                    t.namespace && this._core.settings.autoplay && this.play();
                                }, this),
                                "play.owl.autoplay": t.proxy(function (t, e, i) {
                                    t.namespace && this.play(e, i);
                                }, this),
                                "stop.owl.autoplay": t.proxy(function (t) {
                                    t.namespace && this.stop();
                                }, this),
                                "mouseover.owl.autoplay": t.proxy(function () {
                                    this._core.settings.autoplayHoverPause &&
                                        this._core.is("rotating") &&
                                        this.pause();
                                }, this),
                                "mouseleave.owl.autoplay": t.proxy(function () {
                                    this._core.settings.autoplayHoverPause &&
                                        this._core.is("rotating") &&
                                        this.play();
                                }, this),
                                "touchstart.owl.core": t.proxy(function () {
                                    this._core.settings.autoplayHoverPause &&
                                        this._core.is("rotating") &&
                                        this.pause();
                                }, this),
                                "touchend.owl.core": t.proxy(function () {
                                    this._core.settings.autoplayHoverPause && this.play();
                                }, this),
                            }),
                            this._core.$element.on(this._handlers),
                            (this._core.options = t.extend(
                                {},
                                s.Defaults,
                                this._core.options
                            ));
                    };
                    (s.Defaults = {
                        autoplay: !1,
                        autoplayTimeout: 5e3,
                        autoplayHoverPause: !1,
                        autoplaySpeed: !1,
                    }),
                        (s.prototype._next = function (n) {
                            (this._call = e.setTimeout(
                                t.proxy(this._next, this, n),
                                this._timeout * (Math.round(this.read() / this._timeout) + 1) -
                                this.read()
                            )),
                                this._core.is("interacting") ||
                                i.hidden ||
                                this._core.next(n || this._core.settings.autoplaySpeed);
                        }),
                        (s.prototype.read = function () {
                            return new Date().getTime() - this._time;
                        }),
                        (s.prototype.play = function (i, n) {
                            var s;
                            this._core.is("rotating") || this._core.enter("rotating"),
                                (i = i || this._core.settings.autoplayTimeout),
                                (s = Math.min(this._time % (this._timeout || i), i)),
                                this._paused
                                    ? ((this._time = this.read()), (this._paused = !1))
                                    : e.clearTimeout(this._call),
                                (this._time += (this.read() % i) - s),
                                (this._timeout = i),
                                (this._call = e.setTimeout(
                                    t.proxy(this._next, this, n),
                                    i - s
                                ));
                        }),
                        (s.prototype.stop = function () {
                            this._core.is("rotating") &&
                                ((this._time = 0),
                                    (this._paused = !0),
                                    e.clearTimeout(this._call),
                                    this._core.leave("rotating"));
                        }),
                        (s.prototype.pause = function () {
                            this._core.is("rotating") &&
                                !this._paused &&
                                ((this._time = this.read()),
                                    (this._paused = !0),
                                    e.clearTimeout(this._call));
                        }),
                        (s.prototype.destroy = function () {
                            var t, e;
                            for (t in (this.stop(), this._handlers))
                                this._core.$element.off(t, this._handlers[t]);
                            for (e in Object.getOwnPropertyNames(this))
                                "function" != typeof this[e] && (this[e] = null);
                        }),
                        (t.fn.owlCarousel.Constructor.Plugins.autoplay = s);
                })(window.Zepto || window.jQuery, window, document),
                (function (t, e, i, n) {
                    "use strict";
                    var s = function (e) {
                        (this._core = e),
                            (this._initialized = !1),
                            (this._pages = []),
                            (this._controls = {}),
                            (this._templates = []),
                            (this.$element = this._core.$element),
                            (this._overrides = {
                                next: this._core.next,
                                prev: this._core.prev,
                                to: this._core.to,
                            }),
                            (this._handlers = {
                                "prepared.owl.carousel": t.proxy(function (e) {
                                    e.namespace &&
                                        this._core.settings.dotsData &&
                                        this._templates.push(
                                            '<div class="' +
                                            this._core.settings.dotClass +
                                            '">' +
                                            t(e.content)
                                                .find("[data-dot]")
                                                .addBack("[data-dot]")
                                                .attr("data-dot") +
                                            "</div>"
                                        );
                                }, this),
                                "added.owl.carousel": t.proxy(function (t) {
                                    t.namespace &&
                                        this._core.settings.dotsData &&
                                        this._templates.splice(
                                            t.position,
                                            0,
                                            this._templates.pop()
                                        );
                                }, this),
                                "remove.owl.carousel": t.proxy(function (t) {
                                    t.namespace &&
                                        this._core.settings.dotsData &&
                                        this._templates.splice(t.position, 1);
                                }, this),
                                "changed.owl.carousel": t.proxy(function (t) {
                                    t.namespace && "position" == t.property.name && this.draw();
                                }, this),
                                "initialized.owl.carousel": t.proxy(function (t) {
                                    t.namespace &&
                                        !this._initialized &&
                                        (this._core.trigger("initialize", null, "navigation"),
                                            this.initialize(),
                                            this.update(),
                                            this.draw(),
                                            (this._initialized = !0),
                                            this._core.trigger("initialized", null, "navigation"));
                                }, this),
                                "refreshed.owl.carousel": t.proxy(function (t) {
                                    t.namespace &&
                                        this._initialized &&
                                        (this._core.trigger("refresh", null, "navigation"),
                                            this.update(),
                                            this.draw(),
                                            this._core.trigger("refreshed", null, "navigation"));
                                }, this),
                            }),
                            (this._core.options = t.extend(
                                {},
                                s.Defaults,
                                this._core.options
                            )),
                            this.$element.on(this._handlers);
                    };
                    (s.Defaults = {
                        nav: !1,
                        navText: [
                            '<span aria-label="Previous">&#x2039;</span>',
                            '<span aria-label="Next">&#x203a;</span>',
                        ],
                        navSpeed: !1,
                        navElement: 'button type="button" role="presentation"',
                        navContainer: !1,
                        navContainerClass: "owl-nav",
                        navClass: ["owl-prev", "owl-next"],
                        slideBy: 1,
                        dotClass: "owl-dot",
                        dotsClass: "owl-dots",
                        dots: !0,
                        dotsEach: !1,
                        dotsData: !1,
                        dotsSpeed: !1,
                        dotsContainer: !1,
                    }),
                        (s.prototype.initialize = function () {
                            var e,
                                i = this._core.settings;
                            for (e in ((this._controls.$relative = (
                                i.navContainer
                                    ? t(i.navContainer)
                                    : t("<div>")
                                        .addClass(i.navContainerClass)
                                        .appendTo(this.$element)
                            ).addClass("disabled")),
                                (this._controls.$previous = t("<" + i.navElement + ">")
                                    .addClass(i.navClass[0])
                                    .html(i.navText[0])
                                    .prependTo(this._controls.$relative)
                                    .on(
                                        "click",
                                        t.proxy(function (t) {
                                            this.prev(i.navSpeed);
                                        }, this)
                                    )),
                                (this._controls.$next = t("<" + i.navElement + ">")
                                    .addClass(i.navClass[1])
                                    .html(i.navText[1])
                                    .appendTo(this._controls.$relative)
                                    .on(
                                        "click",
                                        t.proxy(function (t) {
                                            this.next(i.navSpeed);
                                        }, this)
                                    )),
                                i.dotsData ||
                                (this._templates = [
                                    t('<button role="button">')
                                        .addClass(i.dotClass)
                                        .append(t("<span>"))
                                        .prop("outerHTML"),
                                ]),
                                (this._controls.$absolute = (
                                    i.dotsContainer
                                        ? t(i.dotsContainer)
                                        : t("<div>").addClass(i.dotsClass).appendTo(this.$element)
                                ).addClass("disabled")),
                                this._controls.$absolute.on(
                                    "click",
                                    "button",
                                    t.proxy(function (e) {
                                        var n = t(e.target).parent().is(this._controls.$absolute)
                                            ? t(e.target).index()
                                            : t(e.target).parent().index();
                                        e.preventDefault(), this.to(n, i.dotsSpeed);
                                    }, this)
                                ),
                                this._overrides))
                                this._core[e] = t.proxy(this[e], this);
                        }),
                        (s.prototype.destroy = function () {
                            var t, e, i, n, s;
                            for (t in ((s = this._core.settings), this._handlers))
                                this.$element.off(t, this._handlers[t]);
                            for (e in this._controls)
                                "$relative" === e && s.navContainer
                                    ? this._controls[e].html("")
                                    : this._controls[e].remove();
                            for (n in this.overides) this._core[n] = this._overrides[n];
                            for (i in Object.getOwnPropertyNames(this))
                                "function" != typeof this[i] && (this[i] = null);
                        }),
                        (s.prototype.update = function () {
                            var t,
                                e,
                                i = this._core.clones().length / 2,
                                n = i + this._core.items().length,
                                s = this._core.maximum(!0),
                                o = this._core.settings,
                                a =
                                    o.center || o.autoWidth || o.dotsData
                                        ? 1
                                        : o.dotsEach || o.items;
                            if (
                                ("page" !== o.slideBy &&
                                    (o.slideBy = Math.min(o.slideBy, o.items)),
                                    o.dots || "page" == o.slideBy)
                            )
                                for (this._pages = [], t = i, e = 0, 0; t < n; t++) {
                                    if (e >= a || 0 === e) {
                                        if (
                                            (this._pages.push({
                                                start: Math.min(s, t - i),
                                                end: t - i + a - 1,
                                            }),
                                                Math.min(s, t - i) === s)
                                        )
                                            break;
                                        e = 0;
                                    }
                                    e += this._core.mergers(this._core.relative(t));
                                }
                        }),
                        (s.prototype.draw = function () {
                            var e,
                                i = this._core.settings,
                                n = this._core.items().length <= i.items,
                                s = this._core.relative(this._core.current()),
                                o = i.loop || i.rewind;
                            this._controls.$relative.toggleClass("disabled", !i.nav || n),
                                i.nav &&
                                (this._controls.$previous.toggleClass(
                                    "disabled",
                                    !o && s <= this._core.minimum(!0)
                                ),
                                    this._controls.$next.toggleClass(
                                        "disabled",
                                        !o && s >= this._core.maximum(!0)
                                    )),
                                this._controls.$absolute.toggleClass("disabled", !i.dots || n),
                                i.dots &&
                                ((e =
                                    this._pages.length -
                                    this._controls.$absolute.children().length),
                                    i.dotsData && 0 !== e
                                        ? this._controls.$absolute.html(this._templates.join(""))
                                        : e > 0
                                            ? this._controls.$absolute.append(
                                                new Array(e + 1).join(this._templates[0])
                                            )
                                            : e < 0 &&
                                            this._controls.$absolute.children().slice(e).remove(),
                                    this._controls.$absolute
                                        .find(".active")
                                        .removeClass("active"),
                                    this._controls.$absolute
                                        .children()
                                        .eq(t.inArray(this.current(), this._pages))
                                        .addClass("active"));
                        }),
                        (s.prototype.onTrigger = function (e) {
                            var i = this._core.settings;
                            e.page = {
                                index: t.inArray(this.current(), this._pages),
                                count: this._pages.length,
                                size:
                                    i &&
                                    (i.center || i.autoWidth || i.dotsData
                                        ? 1
                                        : i.dotsEach || i.items),
                            };
                        }),
                        (s.prototype.current = function () {
                            var e = this._core.relative(this._core.current());
                            return t
                                .grep(
                                    this._pages,
                                    t.proxy(function (t, i) {
                                        return t.start <= e && t.end >= e;
                                    }, this)
                                )
                                .pop();
                        }),
                        (s.prototype.getPosition = function (e) {
                            var i,
                                n,
                                s = this._core.settings;
                            return (
                                "page" == s.slideBy
                                    ? ((i = t.inArray(this.current(), this._pages)),
                                        (n = this._pages.length),
                                        e ? ++i : --i,
                                        (i = this._pages[((i % n) + n) % n].start))
                                    : ((i = this._core.relative(this._core.current())),
                                        (n = this._core.items().length),
                                        e ? (i += s.slideBy) : (i -= s.slideBy)),
                                i
                            );
                        }),
                        (s.prototype.next = function (e) {
                            t.proxy(this._overrides.to, this._core)(this.getPosition(!0), e);
                        }),
                        (s.prototype.prev = function (e) {
                            t.proxy(this._overrides.to, this._core)(this.getPosition(!1), e);
                        }),
                        (s.prototype.to = function (e, i, n) {
                            var s;
                            !n && this._pages.length
                                ? ((s = this._pages.length),
                                    t.proxy(this._overrides.to, this._core)(
                                        this._pages[((e % s) + s) % s].start,
                                        i
                                    ))
                                : t.proxy(this._overrides.to, this._core)(e, i);
                        }),
                        (t.fn.owlCarousel.Constructor.Plugins.Navigation = s);
                })(window.Zepto || window.jQuery, window, document),
                (function (t, e, i, n) {
                    "use strict";
                    var s = function (i) {
                        (this._core = i),
                            (this._hashes = {}),
                            (this.$element = this._core.$element),
                            (this._handlers = {
                                "initialized.owl.carousel": t.proxy(function (i) {
                                    i.namespace &&
                                        "URLHash" === this._core.settings.startPosition &&
                                        t(e).trigger("hashchange.owl.navigation");
                                }, this),
                                "prepared.owl.carousel": t.proxy(function (e) {
                                    if (e.namespace) {
                                        var i = t(e.content)
                                            .find("[data-hash]")
                                            .addBack("[data-hash]")
                                            .attr("data-hash");
                                        if (!i) return;
                                        this._hashes[i] = e.content;
                                    }
                                }, this),
                                "changed.owl.carousel": t.proxy(function (i) {
                                    if (i.namespace && "position" === i.property.name) {
                                        var n = this._core.items(
                                            this._core.relative(this._core.current())
                                        ),
                                            s = t
                                                .map(this._hashes, function (t, e) {
                                                    return t === n ? e : null;
                                                })
                                                .join();
                                        if (!s || e.location.hash.slice(1) === s) return;
                                        e.location.hash = s;
                                    }
                                }, this),
                            }),
                            (this._core.options = t.extend(
                                {},
                                s.Defaults,
                                this._core.options
                            )),
                            this.$element.on(this._handlers),
                            t(e).on(
                                "hashchange.owl.navigation",
                                t.proxy(function (t) {
                                    var i = e.location.hash.substring(1),
                                        n = this._core.$stage.children(),
                                        s = this._hashes[i] && n.index(this._hashes[i]);
                                    undefined !== s &&
                                        s !== this._core.current() &&
                                        this._core.to(this._core.relative(s), !1, !0);
                                }, this)
                            );
                    };
                    (s.Defaults = { URLhashListener: !1 }),
                        (s.prototype.destroy = function () {
                            var i, n;
                            for (i in (t(e).off("hashchange.owl.navigation"), this._handlers))
                                this._core.$element.off(i, this._handlers[i]);
                            for (n in Object.getOwnPropertyNames(this))
                                "function" != typeof this[n] && (this[n] = null);
                        }),
                        (t.fn.owlCarousel.Constructor.Plugins.Hash = s);
                })(window.Zepto || window.jQuery, window, document),
                (function (t, e, i, n) {
                    var s = t("<support>").get(0).style,
                        o = "Webkit Moz O ms".split(" "),
                        a = {
                            transition: {
                                end: {
                                    WebkitTransition: "webkitTransitionEnd",
                                    MozTransition: "transitionend",
                                    OTransition: "oTransitionEnd",
                                    transition: "transitionend",
                                },
                            },
                            animation: {
                                end: {
                                    WebkitAnimation: "webkitAnimationEnd",
                                    MozAnimation: "animationend",
                                    OAnimation: "oAnimationEnd",
                                    animation: "animationend",
                                },
                            },
                        },
                        r = function () {
                            return !!c("transform");
                        },
                        l = function () {
                            return !!c("perspective");
                        },
                        d = function () {
                            return !!c("animation");
                        };
                    function c(e, i) {
                        var a = !1,
                            r = e.charAt(0).toUpperCase() + e.slice(1);
                        return (
                            t.each(
                                (e + " " + o.join(r + " ") + r).split(" "),
                                function (t, e) {
                                    if (s[e] !== n) return (a = !i || e), !1;
                                }
                            ),
                            a
                        );
                    }
                    function h(t) {
                        return c(t, !0);
                    }
                    (function () {
                        return !!c("transition");
                    })() &&
                        ((t.support.transition = new String(h("transition"))),
                            (t.support.transition.end =
                                a.transition.end[t.support.transition])),
                        d() &&
                        ((t.support.animation = new String(h("animation"))),
                            (t.support.animation.end = a.animation.end[t.support.animation])),
                        r() &&
                        ((t.support.transform = new String(h("transform"))),
                            (t.support.transform3d = l()));
                })(window.Zepto || window.jQuery, window, document);
        }
        (t.fn.scrollerSlideSize = function () {
            return this.each(function () {
                var e = t(this),
                    i = e.find("img").eq(0),
                    n = parseInt(i.attr("width")),
                    s = e.parents(".slider-wrapper"),
                    o = s.width(),
                    a = s.attr("data-max-width"),
                    r = parseInt(s.attr("data-padding-side")),
                    l = parseInt(i.parents(".wf-td").eq(0).css("paddingLeft")),
                    d = parseInt(i.parents(".wf-td").eq(0).css("paddingRight")),
                    c = 0;
                if ((l > 0 && d > 0 && (c = l + d), void 0 !== a))
                    var h = (o * parseFloat(a)) / 100 - c - r;
                if (n > h) var u = h;
                else {
                    u = parseInt(i.attr("width"));
                    i.exists() || (u = 280);
                }
                e.parents(".slider-wrapper").attr("data-width", u + c),
                    e.css({ width: u + c });
            });
        }),
            t(
                ".slider-wrapper.description-under-image:not(.related-projects) article"
            ).scrollerSlideSize();
        var b = t(".slider-wrapper.owl-carousel:not(.related-projects)");
        b.each(function () {
            var e,
                i = t(this),
                n = i.attr("data-padding-side")
                    ? parseInt(i.attr("data-padding-side"))
                    : 0,
                s = "true" === i.attr("data-autoslide"),
                o = i.attr("data-delay") ? parseInt(i.attr("data-delay")) : 6e3,
                a = "true" === i.attr("data-arrows"),
                r = i.attr("data-width")
                    ? b.width() / parseInt(i.attr("data-width"))
                    : b.width() / b.find("article img").attr("width"),
                l = "rtl" == jQuery(document).attr("dir"),
                d = i.attr("data-next-icon")
                    ? i.attr("data-next-icon")
                    : "icon-ar-018-r",
                c = i.attr("data-prev-icon")
                    ? i.attr("data-prev-icon")
                    : "icon-ar-018-l";
            function h(t) {
                var e,
                    n = i.find(".owl-stage"),
                    s = n.width(),
                    o = i.find(".dt-owl-item");
                (e = (o.width() + parseInt(o.css("margin-right"))) * t.item.count) >
                    s && n.width(e);
            }
            (r = i.attr("data-width")
                ? b.width() / parseInt(i.attr("data-width"))
                : i.attr("data-max-width")
                    ? b.width() / parseInt(i.attr("data-max-width"))
                    : b.width() / b.find("article img").attr("width")),
                i
                    .owlCarousel({
                        rtl: l,
                        items: r,
                        autoHeight: !1,
                        margin: n,
                        loadedClass: "owl-loaded",
                        slideBy: "page",
                        loop: !1,
                        smartSpeed: 600,
                        merge: !0,
                        autoWidth: !0,
                        responsive: { 678: { mergeFit: !0 }, 1e3: { mergeFit: !1 } },
                        autoplay: s,
                        autoplayTimeout: o,
                        nav: a,
                        navElement: "a",
                        navText: ['<i class="' + c + '"></i>', '<i class="' + d + '"></i>'],
                        dots: !1,
                        onInitialize: function (t) {
                            var e = parseInt(i.attr("data-max-width")),
                                s = (b.width() * parseFloat(e)) / 100 - n,
                                o = parseInt(i.find("img").attr("width")),
                                a = parseInt(i.find("img").attr("height"));
                            e &&
                                s < o &&
                                (i.find("article").css({ "max-width": s + "px" }),
                                    i
                                        .find("img")
                                        .css({ "max-width": s + "px", height: (s * a) / o }));
                        },
                        onInitialized: h,
                        onRefreshed: h,
                    })
                    .trigger("refresh.owl.carousel"),
                i.on("drag.owl.carousel translate.owl.carousel", function (t) {
                    i.addClass("ts-interceptClicks");
                }),
                i.on("dragged.owl.carousel translated.owl.carousel", function (t) {
                    clearTimeout(e),
                        (e = setTimeout(function () {
                            i.removeClass("ts-interceptClicks");
                        }, 400));
                }),
                i.on("changed.owl.carousel", function (e) {
                    t(".dt-owl-item.cloned .is-loaded", i)
                        .parents()
                        .hasClass("layzr-bg") &&
                        t(".dt-owl-item.cloned .is-loaded", i)
                            .parents()
                            .removeClass("layzr-bg"),
                        t(
                            ".dt-owl-item.cloned .photoswipe-wrapper, .dt-owl-item.cloned .photoswipe-item .dt-gallery-container",
                            i
                        ).initPhotoswipe(),
                        t(
                            ".animate-element:not(.start-animation):in-viewport",
                            i
                        ).checkInViewport();
                }),
                i.find(".dt-owl-item").on("mouseenter", function (t) {
                    s && i.trigger("stop.owl.autoplay");
                }),
                i.find(".dt-owl-item").on("mouseleave", function (t) {
                    s && i.trigger("play.owl.autoplay", [o]);
                }),
                i.find(".owl-nav a").on("mouseenter", function (t) {
                    s && i.trigger("stop.owl.autoplay");
                }),
                i.find(".owl-nav a").on("mouseleave", function (t) {
                    s && i.trigger("play.owl.autoplay", [o]);
                }),
                i.on("mouseenter", function (t) {
                    i.addClass("show-arrows");
                }),
                i.on("mouseleave", function (t) {
                    i.removeClass("show-arrows");
                });
        }),
            (t.fn.postTypeScroller = function () {
                var e = t(this),
                    n = "rtl" == jQuery(document).attr("dir"),
                    s = e.attr("data-next-icon")
                        ? e.attr("data-next-icon")
                        : "icon-ar-018-r",
                    o = e.attr("data-prev-icon")
                        ? e.attr("data-prev-icon")
                        : "icon-ar-018-l",
                    a =
                        (e.attr("data-padding-side") &&
                            parseInt(e.attr("data-padding-side")),
                            "true" != e.attr("data-paused") &&
                            void 0 !== e.attr("data-autoslide")),
                    r =
                        (e.attr("data-paused"),
                            e.attr("data-autoslide") && parseInt(e.attr("data-autoslide")) > 999
                                ? parseInt(e.attr("data-autoslide"))
                                : 5e3),
                    l =
                        (e.attr("data-autoslide"),
                            e.attr("data-width") ? parseInt(e.attr("data-width")) : 800),
                    d = e.attr("data-height") ? parseInt(e.attr("data-height")) : 400,
                    c = e.attr("data-img-mode") ? e.attr("data-img-mode") : "fill";
                e.owlCarousel({
                    rtl: n,
                    items: 1,
                    autoHeight: !1,
                    center: !1,
                    margin: 0,
                    loadedClass: "owl-loaded",
                    slideBy: 1,
                    loop: !0,
                    smartSpeed: 600,
                    autoplay: a,
                    autoplayTimeout: r,
                    nav: !0,
                    navElement: "a",
                    navText: ['<i class="' + o + '"></i>', '<i class="' + s + '"></i>'],
                    dots: !1,
                }),
                    i.on("debouncedresize", function () {
                        e.find(".dt-owl-item").each(function (i) {
                            var n = t(this),
                                s = n.find("img");
                            if ((s.css({ opacity: 0 }), !s)) return !1;
                            var o;
                            (o = d / l),
                                "fit" == c
                                    ? n.css({ height: o * n.width() })
                                    : n.css({ height: o * e.width() });
                            var a,
                                r,
                                h,
                                u,
                                p,
                                f = parseInt(s.attr("width")),
                                m = parseInt(s.attr("height")),
                                g = {};
                            (a = n.width() / f),
                                (r = (o * n.width()) / m),
                                (h =
                                    "fill" == e.attr("data-img-mode")
                                        ? a > r
                                            ? a
                                            : r
                                        : "fit" == e.attr("data-img-mode")
                                            ? a < r
                                                ? a
                                                : r
                                            : a > r
                                                ? a
                                                : r),
                                (u = Math.ceil(f * h, 10)),
                                (p = Math.ceil(m * h, 10)),
                                (g.width = u),
                                (g.height = p),
                                (g.opacity = 1),
                                s.css(g);
                        });
                    }),
                    void 0 !== e.attr("data-autoslide") &&
                    t('<div class="psPlay"></div>').appendTo(e),
                    "true" === e.attr("data-paused") &&
                    (t(".psPlay", e).addClass("paused"),
                        e.trigger("stop.owl.autoplay")),
                    t(".psPlay", e).on("click", function (e) {
                        e.preventDefault();
                        var i = t(this);
                        i.hasClass("paused")
                            ? (i.removeClass("paused"),
                                (a = !0),
                                i.trigger("play.owl.autoplay", [r, 600]))
                            : (i.addClass("paused"), i.trigger("stop.owl.autoplay"));
                    });
            }),
            t(".slider-simple:not(.slider-masonry)").each(function () {
                t(this).postTypeScroller();
            });
        var C,
            _ = t(
                "#main .slider-content, #footer .slider-content, .side-header:not(.sub-downwards) .mega-full-width > .dt-mega-menu-wrap  .slider-content, .side-header:not(.sub-downwards) .mega-auto-width > .dt-mega-menu-wrap  .slider-content"
            );
        (t.fn.widgetScroller = function () {
            return this.each(function () {
                var e = t(this),
                    i = void 0 !== e.attr("data-autoslide"),
                    n = e.attr("data-autoslide")
                        ? parseInt(e.attr("data-autoslide"))
                        : 6e3,
                    s = "rtl" == jQuery(document).attr("dir");
                e.owlCarousel({
                    rtl: s,
                    items: 1,
                    autoHeight: !0,
                    margin: 0,
                    loadedClass: "owl-loaded",
                    slideBy: "page",
                    loop: e.children().length > 1,
                    smartSpeed: 600,
                    autoplay: i,
                    autoplayTimeout: n,
                    autoplayHoverPause: !1,
                    nav: !1,
                    dots: !0,
                    dotsEach: !0,
                });
            });
        }),
            _.widgetScroller().css("visibility", "visible");
        var x;
        function S() {
            clearTimeout(x),
                (x = setTimeout(function () {
                    t(
                        ".dt-owl-carousel-call, .elementor-owl-carousel-call, .related-projects, .slider-simple:not(.slider-masonry)"
                    ).trigger("refresh.owl.carousel");
                }, 200));
        }
        (t.fn.the7OwlCarousel = function () {
            var e = t(this);
            if (e.length) {
                var i,
                    n = e.attr("data-col-gap") ? parseInt(e.attr("data-col-gap")) : 0,
                    s = "true" === e.attr("data-auto-height"),
                    o = e.attr("data-speed") ? parseInt(e.attr("data-speed")) : 600,
                    a = "true" === e.attr("data-autoplay"),
                    r = e.attr("data-autoplay_speed")
                        ? parseInt(e.attr("data-autoplay_speed"))
                        : 6e3,
                    l = "true" === e.attr("data-arrows"),
                    d = "true" === e.attr("data-bullet"),
                    c = e.attr("data-wide-col-num")
                        ? parseInt(e.attr("data-wide-col-num"))
                        : 3,
                    h = e.attr("data-col-num") ? parseInt(e.attr("data-col-num")) : 3,
                    u = e.attr("data-laptop-col")
                        ? parseInt(e.attr("data-laptop-col"))
                        : 3,
                    p = e.attr("data-h-tablet-columns-num")
                        ? parseInt(e.attr("data-h-tablet-columns-num"))
                        : 3,
                    f = e.attr("data-v-tablet-columns-num")
                        ? parseInt(e.attr("data-v-tablet-columns-num"))
                        : 2,
                    m = e.attr("data-phone-columns-num")
                        ? parseInt(e.attr("data-phone-columns-num"))
                        : 1,
                    g = "rtl" == jQuery(document).attr("dir"),
                    v =
                        "1" == e.attr("data-scroll-mode")
                            ? parseInt(e.attr("data-scroll-mode"))
                            : "page",
                    y = e.attr("data-next-icon")
                        ? e.attr("data-next-icon")
                        : "icon-ar-002-r",
                    w = e.attr("data-prev-icon")
                        ? e.attr("data-prev-icon")
                        : "icon-ar-001-l",
                    b = !("1" != e.attr("data-scroll-mode") || !d);
                if (void 0 !== e.attr("data-stage-padding"))
                    var _ = e.hasClass("enable-img-shadow")
                        ? parseInt(e.attr("data-stage-padding")) +
                        parseInt(e.attr("data-col-gap")) / 2
                        : parseInt(e.attr("data-stage-padding"));
                else _ = 0;
                (n = e.attr("data-col-gap")
                    ? parseInt(e.attr("data-col-gap"))
                    : e.attr("data-padding-side")
                        ? parseInt(e.attr("data-padding-side"))
                        : 0),
                    e.on("initialize.owl.carousel", function (i) {
                        t(e[0])
                            .find("script, style")
                            .each(function () {
                                var e = t(this);
                                e.siblings().first();
                                t(e).prev().length > 0
                                    ? t(e)
                                        .prev()
                                        .addBack()
                                        .wrapAll("<div class='carousel-item-wrap' />")
                                    : t(e).next().length > 0 &&
                                    t(e)
                                        .next()
                                        .addBack()
                                        .wrapAll("<div class='carousel-item-wrap' />");
                            });
                    });
                var x = {};
                t(this).hasClass("products-carousel-shortcode") &&
                    e.parent(".elementor-widget-container").length &&
                    elementorFrontendConfig
                    ? ((x[0] = {
                        items: m,
                        loop: e.children().length > m,
                        stagePadding: 0,
                    }),
                        (x[elementorFrontendConfig.breakpoints.md] = {
                            loop: e.children().length > p,
                            items: p,
                            stagePadding: 0,
                        }),
                        (x[elementorFrontendConfig.breakpoints.lg] = {
                            loop: e.children().length > h,
                            items: h,
                        }))
                    : (x = {
                        0: { items: m, loop: e.children().length > m, stagePadding: 0 },
                        481: { loop: e.children().length > f, items: f, stagePadding: 0 },
                        769: { loop: e.children().length > p, items: p, stagePadding: 0 },
                        992: { loop: e.children().length > u, items: u },
                        1199: { loop: e.children().length > h, items: h },
                        1450: { loop: e.children().length > c, items: c },
                    }),
                    e.owlCarousel({
                        rtl: g,
                        items: c,
                        autoHeight: s,
                        margin: n,
                        stagePadding: _,
                        loadedClass: "owl-loaded",
                        slideBy: v,
                        loop: !0,
                        smartSpeed: o,
                        responsive: x,
                        autoplay: a,
                        autoplayTimeout: r,
                        nav: l,
                        navElement: "a",
                        navText: [
                            '<i class="' + w + '" ></i>',
                            '<i class="' + y + '"></i>',
                        ],
                        dots: d,
                        dotsEach: b,
                    }),
                    e.hasClass("content-rollover-layout-list") &&
                    !e.hasClass("disable-layout-hover") &&
                    e.find(".post-entry-wrapper").clickOverlayGradient(),
                    dtGlobals.addOnloadEvent(function () {
                        !(function (e) {
                            if (
                                (e.hasClass("refreshed") ||
                                    (e.addClass("refreshed"), e.trigger("refresh.owl.carousel")),
                                    e.hasClass("content-rollover-layout-list") &&
                                    !e.hasClass("disable-layout-hover") &&
                                    e.find(".post-entry-wrapper").clickOverlayGradient(),
                                    clearTimeout(C),
                                    (C = setTimeout(function () {
                                        t(
                                            ".dt-owl-item.cloned .animate-element.animation-triggered:not(.start-animation)"
                                        ).addClass("start-animation");
                                    }, 50)),
                                    "true" === e.attr("data-autoplay"))
                            )
                                if (dtGlobals.isInViewport(e)) {
                                    const t = e.attr("data-autoplay_speed")
                                        ? parseInt(e.attr("data-autoplay_speed"))
                                        : 6e3;
                                    e.trigger("play.owl.autoplay", [t]);
                                } else e.trigger("stop.owl.autoplay");
                        })(e);
                    }),
                    e.on("changed.owl.carousel", function (i) {
                        t(
                            ".dt-owl-item.cloned .photoswipe-wrapper, .dt-owl-item.cloned .photoswipe-item .dt-gallery-container",
                            e
                        ).initPhotoswipe(),
                            the7Utils.isFunction(t.fn.triggerClonedHoverClick) &&
                            t(
                                " .dt-owl-item.cloned .buttons-on-img:not(.rollover-active) .rollover-content",
                                e
                            ).triggerClonedHoverClick();
                        var n = t(" .dt-owl-item.cloned .post-thumbnail-wrap", e);
                        e.hasClass("albums-shortcode") &&
                            (e.hasClass("gradient-overlay-layout-list") ||
                                e.hasClass("content-rollover-layout-list")
                                ? the7Utils.isFunction(t.fn.triggerClonedOverlayAlbumsClick) &&
                                t(
                                    " .dt-owl-item.cloned .post-entry-content",
                                    e
                                ).triggerClonedOverlayAlbumsClick()
                                : the7Utils.isFunction(t.fn.triggerClonedAlbumsClick) &&
                                n.triggerClonedAlbumsClick()),
                            e.hasClass("gallery-shortcode") &&
                            t(e).initCarouselClonedPhotoswipe();
                    }),
                    e.on("change.owl.carousel", function (n) {
                        clearTimeout(i),
                            (i = setTimeout(function () {
                                e.layzrCarouselUpdate(),
                                    t(".dt-owl-item.cloned .lazy-load", e)
                                        .parent()
                                        .removeClass("layzr-bg");
                            }, 20));
                    }),
                    e.on("resized.owl.carousel", function (t) {
                        e.hasClass("content-rollover-layout-list") &&
                            !e.hasClass("disable-layout-hover") &&
                            e.find(".post-entry-wrapper").clickOverlayGradient();
                    }),
                    e.find(".dt-owl-item").on("mouseenter", function (t) {
                        a && e.trigger("stop.owl.autoplay");
                    }),
                    e.find(".dt-owl-item").on("mouseleave", function (t) {
                        a && e.trigger("play.owl.autoplay", [r]);
                    }),
                    e.find(".owl-nav a").on("mouseenter", function (t) {
                        a && e.trigger("stop.owl.autoplay");
                    }),
                    e.find(".owl-nav a").on("mouseleave", function (t) {
                        a && e.trigger("play.owl.autoplay", [r]);
                    });
            }
        }),
            t(".dt-owl-carousel-call, .related-projects").each(function () {
                t(this).the7OwlCarousel();
            }),
            (t.fn.the7ElementorOwlCarousel = function () {
                var e = t(this);
                if (e.length && !e.hasClass("owl-loaded")) {
                    var i,
                        n = e.attr("data-col-gap") ? parseInt(e.attr("data-col-gap")) : 0,
                        s = e.attr("data-col-gap-tablet")
                            ? parseInt(e.attr("data-col-gap-tablet"))
                            : n,
                        o = e.attr("data-col-gap-mobile")
                            ? parseInt(e.attr("data-col-gap-mobile"))
                            : s,
                        a = "true" === e.attr("data-auto-height"),
                        r = e.attr("data-speed") ? parseInt(e.attr("data-speed")) : 600,
                        l = "true" === e.attr("data-autoplay"),
                        d = e.attr("data-autoplay_speed")
                            ? parseInt(e.attr("data-autoplay_speed"))
                            : 6e3,
                        c =
                            void 0 !== elementorFrontendConfig.breakpoints.md
                                ? elementorFrontendConfig.breakpoints.md
                                : 481,
                        h =
                            void 0 !== elementorFrontendConfig.breakpoints.lg
                                ? elementorFrontendConfig.breakpoints.lg
                                : 769,
                        u =
                            void 0 !== dtLocal.elementor.settings.container_width
                                ? dtLocal.elementor.settings.container_width + 1
                                : 1450,
                        p = e.attr("data-col-num") ? parseInt(e.attr("data-col-num")) : 3,
                        f = e.attr("data-wide-col-num")
                            ? parseInt(e.attr("data-wide-col-num"))
                            : p,
                        m =
                            (e.attr("data-laptop-col") && parseInt(e.attr("data-laptop-col")),
                                e.attr("data-h-tablet-columns-num")
                                    ? parseInt(e.attr("data-h-tablet-columns-num"))
                                    : 3),
                        g =
                            (e.attr("data-v-tablet-columns-num") &&
                                parseInt(e.attr("data-v-tablet-columns-num")),
                                e.attr("data-phone-columns-num")
                                    ? parseInt(e.attr("data-phone-columns-num"))
                                    : 1),
                        v = "rtl" == jQuery(document).attr("dir"),
                        y =
                            "1" == e.attr("data-scroll-mode")
                                ? parseInt(e.attr("data-scroll-mode"))
                                : "page",
                        w =
                            (e.attr("data-next-icon") && e.attr("data-next-icon"),
                                e.attr("data-prev-icon") && e.attr("data-prev-icon"),
                                "1" == e.attr("data-scroll-mode")),
                        b = function () {
                            var t = e.find(".dt-owl-item img");
                            t.length > 0 && e.css("--dynamic-img-height", t.height() + "px");
                        },
                        C = function (t) {
                            l &&
                                (t
                                    ? e.trigger("play.owl.autoplay", [d])
                                    : e.trigger("stop.owl.autoplay"));
                        },
                        _ = function () {
                            clearTimeout(i),
                                (i = setTimeout(function () {
                                    e.layzrCarouselUpdate();
                                }, 20));
                        };
                    if ("function" == typeof The7ElementorSettings) {
                        const t = e.closest(".elementor-widget");
                        if (t.length) {
                            const e = new The7ElementorSettings(t).getSettings(
                                "widget_columns_wide_desktop_breakpoint"
                            );
                            e && (u = e + 1);
                        }
                    }
                    var x = e.next(".owl-nav").find(".owl-prev").html(),
                        S = e.next(".owl-nav").find(".owl-next").html(),
                        I = function () {
                            _(),
                                b(),
                                e.hasClass("content-rollover-layout-list") &&
                                !e.hasClass("disable-layout-hover") &&
                                e.find(".post-entry-wrapper").clickOverlayGradient(),
                                t(
                                    ".dt-owl-item.cloned .photoswipe-wrapper, .dt-owl-item.cloned .photoswipe-item .dt-gallery-container",
                                    e
                                ).initPhotoswipe();
                            var i = t(" .dt-owl-item.cloned .post-thumbnail-wrap", e);
                            e.hasClass("albums-shortcode") &&
                                (e.hasClass("gradient-overlay-layout-list") ||
                                    e.hasClass("content-rollover-layout-list")
                                    ? the7Utils.isFunction(
                                        t.fn.triggerClonedOverlayAlbumsClick
                                    ) &&
                                    t(
                                        " .dt-owl-item.cloned .post-entry-content",
                                        e
                                    ).triggerClonedOverlayAlbumsClick()
                                    : the7Utils.isFunction(t.fn.triggerClonedAlbumsClick) &&
                                    i.triggerClonedAlbumsClick()),
                                e.hasClass("gallery-shortcode") &&
                                t(e).initCarouselClonedPhotoswipe();
                        };
                    e.on("initialized.owl.carousel", function (t) {
                        I();
                    });
                    var k = {};
                    (k[0] = { items: g, loop: e.children().length > g, margin: o }),
                        (k[c] = { loop: e.children().length > m, items: m, margin: s }),
                        (k[h] = { loop: e.children().length > p, items: p, margin: n }),
                        (k[u] = { loop: e.children().length > f, items: f, margin: n }),
                        e.owlCarousel({
                            rtl: v,
                            items: f,
                            autoHeight: a,
                            margin: n,
                            loadedClass: "owl-loaded",
                            slideBy: y,
                            loop: !0,
                            smartSpeed: r,
                            autoplay: l,
                            autoplayTimeout: d,
                            nav: !0,
                            responsive: k,
                            navElement: "a",
                            navText: [x, S],
                            dots: !0,
                            dotsEach: w,
                            autoRefreshInterval: 180,
                        }),
                        dtGlobals.addOnloadEvent(function () {
                            C(dtGlobals.isInViewport(e));
                        }),
                        e.on("refreshed.owl.carousel", function (t) {
                            I();
                        }),
                        e.on("change.owl.carousel", function (i) {
                            "position" === i.property.name &&
                                (_(),
                                    t(
                                        ".animate-element:not(.start-animation):in-viewport",
                                        e
                                    ).checkInViewport());
                        }),
                        e.on("resized.owl.carousel", function (t) {
                            b();
                        });
                    var T = e.find(".dt-owl-item");
                    T.on("mouseenter", function (t) {
                        C(!1);
                    }),
                        T.on("mouseleave", function (t) {
                            C(!0);
                        });
                    var z = e.find(".owl-nav a");
                    z.on("mouseenter", function (t) {
                        C(!1);
                    }),
                        z.on("mouseleave", function (t) {
                            C(!0);
                        });
                }
            }),
            i.on("elementor/frontend/init", function () {
                var n = 1e3,
                    s = n;
                t(
                    ".elementor-owl-carousel-call:not(.the7-woocommerce-loop-product-image)"
                ).each(function () {
                    var e = this,
                        o = t(this),
                        a = o.closest(".elementor-widget-container");
                    if (a.length) {
                        var r = i.height();
                        if (i.scrollTop() + r + r > a.offset().top)
                            o.the7ElementorOwlCarousel();
                        else {
                            var l = elementorModules.utils.Scroll.scrollObserver({
                                offset: "0% 0% 100%",
                                callback: (t) => {
                                    t.isInViewport &&
                                        (l.unobserve(e), o.the7ElementorOwlCarousel());
                                },
                            });
                            o.addClass("owl-loading"),
                                setTimeout(function () {
                                    l.unobserve(e), o.the7ElementorOwlCarousel(), (s += 500);
                                }, n),
                                (n += 500),
                                l.observe(e);
                        }
                    } else o.the7ElementorOwlCarousel();
                });
                e.one("click", 'a[href^="#"]', function (e) {
                    if (n !== s) {
                        e.preventDefault(),
                            e.stopImmediatePropagation(),
                            t(
                                ".elementor-owl-carousel-call:not(.the7-woocommerce-loop-product-image)"
                            ).each(function () {
                                t(this).the7ElementorOwlCarousel();
                            });
                        var i = t(this);
                        return (
                            setTimeout(function () {
                                i.click();
                            }, 100),
                            !1
                        );
                    }
                });
            }),
            dtGlobals.isMobile && !dtGlobals.isWindowsPhone
                ? i.bind("orientationchange", function (t) {
                    S();
                })
                : dtGlobals.isAndroid &&
                i.bind("debouncedresize", function (t) {
                    S();
                }),
            void 0 === l &&
            (l = new Layzr({
                selector: ".owl-thumb-lazy-load-show",
                attr: "data-src",
                attrSrcSet: "data-srcset",
                retinaAttr: "data-src-retina",
                hiddenAttr: "data-src-hidden",
                threshold: 30,
                callback: function () {
                    showLazyImg(t(this));
                },
            }));
        var I = t(".top-bar"),
            k = t(".masthead"),
            T = t(".overlay-navigation"),
            z = t(".sticky-header"),
            L = t(".sticky-top-line"),
            E = t("#main-slideshow, .photo-scroller"),
            P =
                (t(".header-side-left").length,
                    t(".header-side-right").length,
                    t(
                        "#main, #main-slideshow, .photo-scroller, .page-title, .fancy-header, .footer"
                    ),
                    t(
                        ".floating-logo.side-header-menu-icon .branding, .side-header-h-stroke, #phantom"
                    ),
                    t(".side-header")),
            O =
                (t(".page-template-template-microsite").length,
                    s.hasClass("transparent")),
            A = t(".floating-navigation-below-slider").exists();
        if (t(".side-header-v-stroke").length > 0)
            P.width(), t(".side-header-v-stroke").width();
        else P.width();
        /*!-Show Hide side header*/
        if (
            ((t.closeSideHeader = function () {
                o.removeClass("show-header"),
                    o.addClass("closed-header"),
                    t(".sticky-header-overlay").removeClass("active");
            }),
                (t.closeMobileHeader = function () {
                    o.removeClass("show-mobile-header"),
                        o.addClass("closed-mobile-header"),
                        s
                            .removeClass("show-sticky-mobile-header show-overlay-mobile-header")
                            .addClass("closed-overlay-mobile-header"),
                        t(
                            ".mobile-sticky-header-overlay, .dt-mobile-menu-icon, .menu-toggle, .menu-close-toggle"
                        ).removeClass("active");
                }),
                z.length > 0 || T.length > 0)
        ) {
            t(
                '<div class="lines-button x"><span class="menu-line"></span><span class="menu-line"></span><span class="menu-line"></span></div>'
            ).appendTo(".menu-toggle");
            var M = dtLocal.themeSettings.ToggleCaptionEnabled;
            (ToggleCaption =
                "disabled" != M
                    ? "<span class='menu-toggle-caption'>" +
                    dtLocal.themeSettings.ToggleCaption +
                    "</span>"
                    : ""),
                z.length > 0 && s.append('<div class="sticky-header-overlay"></div>');
            var D = t(".menu-toggle"),
                H = t(".menu-close-toggle"),
                F = t(".menu-toggle:not(.active), .menu-close-toggle:not(.active)"),
                B = t(".sticky-header-overlay");
            D.on("click", function () {
                if (!t(".header-under-side-line").length > 0)
                    var e = t(".side-header .menu-toggle");
                else e = t(".menu-toggle");
                e.hasClass("active")
                    ? (e.removeClass("active"),
                        o.removeClass("show-header").addClass("closed-header"),
                        B.removeClass("active"),
                        t(".hide-overlay").removeClass("active"))
                    : (F.removeClass("active"),
                        e.addClass("active").css({ left: "", right: "" }),
                        o.addClass("show-header").removeClass("closed-header"),
                        H.addClass("active"),
                        B.addClass("active"),
                        t(".hide-overlay").addClass("active"));
            }),
                H.on("click", function () {
                    var e = t(this);
                    e.hasClass("active")
                        ? (e.removeClass("active"),
                            o.removeClass("show-header").addClass("closed-header"),
                            B.removeClass("active"),
                            t(".hide-overlay").removeClass("active"))
                        : (F.removeClass("active"),
                            e.addClass("active").css({ left: "", right: "" }),
                            o.addClass("show-header").removeClass("closed-header"),
                            B.addClass("active"),
                            t(".hide-overlay").addClass("active"));
                }),
                B.on("click", function () {
                    t(this).hasClass("active") &&
                        (F.removeClass("active"),
                            o.removeClass("show-header").addClass("closed-header"),
                            B.removeClass("active"));
                }),
                t(".hide-overlay").on("click", function () {
                    t(this).hasClass("active") &&
                        (F.removeClass("active"),
                            o.removeClass("show-header"),
                            o.addClass("closed-header"),
                            B.removeClass("active"));
                });
        }
        function W() {
            var e = i.width(),
                n = "",
                a = t(".side-header-menu-icon").length > 0;
            if (
                ((e - o.innerWidth()) / 2 > 0 && (n = (e - o.innerWidth()) / 2),
                    s.hasClass("header-side-right") &&
                    o.hasClass("boxed") &&
                    !z.length > 0 &&
                    P.css({ right: n }),
                    navigator.userAgent.match(/Trident.*rv\:11\./) && A && O)
            ) {
                k.insertAfter(E);
                var r = k.attr("style");
                k.not(".sticky-on").attr(
                    "style",
                    r + "; top:" + E.height() + "px !important;"
                );
            }
            var l = t(".floating-menu-icon-right");
            l.length > 0 &&
                o.hasClass("boxed") &&
                (F.css({ right: n }), t(".branding").css({ left: n })),
                o.hasClass("boxed") &&
                a &&
                !l.length > 0 &&
                (t(".floating-logo .branding").css({ right: n }), F.css({ left: n })),
                T.length > 0 &&
                a &&
                o.hasClass("boxed") &&
                (F.css({ right: n }), t(".floating-logo .branding").css({ left: n }));
        }
        if (
            (W(),
                i.on("the7-resize-width-debounce", function () {
                    W();
                }),
                A && s.hasClass("footer-overlap") && k.insertAfter(E),
                navigator.userAgent.match(/Trident.*rv\:11\./) && A && O)
        ) {
            k.insertAfter(E);
            var R = k.attr("style");
            k.attr("style", R + "; top:" + E.height() + "px !important;");
        }
        var $ = k;
        if (
            (t(".mixed-header").length > 0 && ($ = t(".mixed-header")),
                t(".side-header .header-bar").wrap(
                    "<div class='header-scrollbar-wrap'></div>"
                ),
                P.length > 0 &&
                "function" == typeof t.fn.mCustomScrollbar &&
                !dtGlobals.isMobile &&
                (t(".header-scrollbar-wrap").mCustomScrollbar({
                    scrollInertia: 150,
                    callbacks: {
                        whileScrolling: function () {
                            t(".header-scrollbar-wrap").layzrInitialisation();
                        },
                    },
                }),
                    t(".sub-downwards .main-nav")
                        .find(".slider-content")
                        .widgetScroller()
                        .css("visibility", "visible")),
                P.length > 0 &&
                !t(".mCSB_container").length > 0 &&
                t(".side-header .header-scrollbar-wrap .header-bar").wrap(
                    "<div class='mCSB_container'></div>"
                ),
                !s.hasClass("responsive-off"))
        ) {
            var j = t(".mixed-header"),
                G = t(".masthead .near-logo-first-switch")
                    .clone(!0)
                    .addClass("show-on-first-switch"),
                Y = t(".masthead .near-logo-second-switch")
                    .clone(!0)
                    .addClass("show-on-second-switch"),
                N = k
                    .find(".in-menu-first-switch")
                    .clone(!0)
                    .addClass(
                        "hide-on-desktop hide-on-second-switch show-on-first-switch"
                    ),
                q = k
                    .find(".in-menu-second-switch")
                    .clone(!0)
                    .addClass(
                        "hide-on-desktop hide-on-first-switch show-on-second-switch"
                    ),
                U = k
                    .find(".in-top-bar")
                    .clone(!0)
                    .addClass(
                        "hide-on-desktop hide-on-first-switch show-on-second-switch"
                    ),
                V = k
                    .find(".in-top-bar-left")
                    .clone(!0)
                    .addClass("hide-on-desktop show-on-first-switch"),
                X = k
                    .find(".in-top-bar-right")
                    .clone(!0)
                    .addClass("hide-on-desktop  show-on-first-switch");
            if (j.length > 0) {
                var Z = j.find(".branding > a, .branding > img").clone(!0);
                $ = j;
            } else
                (Z = t(".masthead:not(.mixed-header)")
                    .find(".branding > a, .branding > img")
                    .clone(!0)),
                    ($ = k);
            if (I.length > 0 && "none" != I.css("display")) var Q = I.innerHeight();
            else Q = 0;
            var K = dtLocal.themeSettings.mobileHeader.mobileToggleCaptionEnabled;
            (mobileToggleCaption =
                "disabled" != K
                    ? "<span class='menu-toggle-caption'>" +
                    dtLocal.themeSettings.mobileHeader.mobileToggleCaption +
                    "</span>"
                    : ""),
                t(
                    "<div class='mobile-header-bar'><div class='mobile-navigation'></div><div class='mobile-mini-widgets'></div><div class='mobile-branding'></div></div>"
                ).appendTo(".masthead"),
                t(".mobile-header-bar .mobile-navigation").append(
                    "<a href='#' class='dt-mobile-menu-icon' aria-label='Mobile menu icon'>" +
                    mobileToggleCaption +
                    "<div class='lines-button '><span class='menu-line'></span><span class='menu-line'></span><span class='menu-line'></span></div></a>"
                ),
                t(G).appendTo(".mobile-header-bar .mobile-mini-widgets"),
                t(Y).appendTo(".mobile-header-bar .mobile-mini-widgets"),
                t(".left-widgets", I).append(U),
                t(".left-widgets", I).append(V),
                t(".right-widgets", I)
                    .append(X)
                    .removeClass(
                        "select-type-menu list-type-menu select-type-menu-second-switch list-type-menu-second-switch"
                    ),
                t(".right-widgets", I)
                    .append(X)
                    .removeClass(
                        "select-type-menu list-type-menu select-type-menu-second-switch list-type-menu-second-switch"
                    ),
                t(N).appendTo(".mobile-mini-widgets-in-menu"),
                t(q).appendTo(".mobile-mini-widgets-in-menu"),
                N.removeClass(
                    "select-type-menu list-type-menu select-type-menu-second-switch list-type-menu-second-switch"
                ),
                q.removeClass(
                    "select-type-menu list-type-menu select-type-menu-first-switch list-type-menu-first-switch"
                ),
                t(".mobile-header-bar .mobile-branding").append(Z);
            var J = t(".dt-mobile-header");
            /*!-Show Hide mobile header*/
            if (
                (J.siblings().hasClass("dt-parent-menu-clickable") &&
                    J.addClass("dt-parent-menu-clickable"),
                    !t(".mobile-mini-widgets-in-menu").find(".in-menu-first-switch ")
                        .length > 0 &&
                    t(".mobile-mini-widgets-in-menu").addClass("first-switch-no-widgets"),
                    !t(".mobile-mini-widgets-in-menu").find(".in-menu-second-switch ")
                        .length > 0 &&
                    t(".mobile-mini-widgets-in-menu").addClass(
                        "second-switch-no-widgets"
                    ),
                    G.removeClass(
                        "select-type-menu list-type-menu select-type-menu-second-switch list-type-menu-second-switch"
                    ),
                    Y.removeClass(
                        "select-type-menu list-type-menu select-type-menu-first-switch list-type-menu-first-switch"
                    ),
                    U.removeClass(
                        "show-on-desktop select-type-menu list-type-menu select-type-menu-first-switch list-type-menu-first-switch in-top-bar-left"
                    ).addClass("hide-on-desktop hide-on-first-switch"),
                    V.removeClass(
                        "show-on-desktop select-type-menu list-type-menu select-type-menu-second-switch list-type-menu-second-switch in-top-bar"
                    ).addClass("hide-on-desktop hide-on-second-switch"),
                    X.removeClass(
                        "show-on-desktop select-type-menu list-type-menu  select-type-menu-second-switch list-type-menu-second-switch"
                    ).addClass("hide-on-desktop"),
                    t(".header-bar .mini-widgets > .mini-nav ").removeClass(
                        "select-type-menu-second-switch list-type-menu-second-switch select-type-menu-first-switch list-type-menu-first-switch"
                    ),
                    t(
                        ".mini-nav.show-on-desktop:not(.show-on-first-switch):not(.show-on-second-switch)",
                        I
                    ).removeClass(
                        "select-type-menu-second-switch list-type-menu-second-switch select-type-menu-first-switch list-type-menu-first-switch"
                    ),
                    t(".masthead .hide-on-desktop").addClass("display-none"),
                    t(".mobile-main-nav ")
                        .find("li")
                        .each(function () {
                            var e = t(this),
                                i = e.find(" > .dt-mega-menu-wrap > .sub-nav");
                            if (e.hasClass("new-column")) {
                                var n = e.prev().find(" > .sub-nav");
                                t(" > .sub-nav > *", e).appendTo(n);
                            }
                            i.unwrap();
                        })
                        .removeClass("dt-mega-menu dt-mega-parent hide-mega-title")
                        .find(" > .sub-nav")
                        .removeClass(" hover-style-bg"),
                    J.length > 0)
            ) {
                dtGlobals.mobileMenuPoint = 50;
                var tt = t(".dt-mobile-menu-icon"),
                    et = !1,
                    it = $.offset().top;
                if (
                    !t(".floating-btn").length > 0 &&
                    t(".floating-mobile-menu-icon").length > 0
                )
                    tt.first().clone(!0).insertBefore(tt).addClass("floating-btn");
                var nt = t(".floating-btn");
                i.scroll(function () {
                    (dtGlobals.mobileMenuPoint = it + $.height() + 50),
                        dtGlobals.winScrollTop > dtGlobals.mobileMenuPoint && !1 === et
                            ? (nt.parents(".masthead").addClass("show-floating-icon"),
                                (et = !0))
                            : dtGlobals.winScrollTop <= dtGlobals.mobileMenuPoint &&
                            !0 === et &&
                            (nt.parents(".masthead").removeClass("show-floating-icon"),
                                (et = !1));
                });
                tt = t(".dt-mobile-menu-icon");
                !t(".mobile-sticky-header-overlay").length > 0 &&
                    s.append('<div class="mobile-sticky-header-overlay"></div>');
                var st = t(".mobile-sticky-header-overlay");
                tt.on("click", function (e) {
                    e.preventDefault();
                    var i = t(this);
                    i.hasClass("active")
                        ? (i.removeClass("active"),
                            o
                                .removeClass("show-mobile-header")
                                .addClass("closed-mobile-header"),
                            s
                                .removeClass("show-mobile-overlay-header")
                                .addClass("closed-overlay-mobile-header"),
                            i.parents("body").removeClass("show-sticky-mobile-header"),
                            st.removeClass("active"))
                        : (tt.removeClass("active"),
                            i.addClass("active"),
                            o
                                .addClass("show-mobile-header")
                                .removeClass("closed-mobile-header"),
                            s
                                .removeClass("closed-overlay-mobile-header")
                                .addClass("show-overlay-mobile-header"),
                            st.removeClass("active"),
                            i.parents("body").addClass("show-sticky-mobile-header"),
                            st.addClass("active"));
                }),
                    st.on("click", function () {
                        t(this).hasClass("active") &&
                            (tt.removeClass("active"),
                                o
                                    .removeClass("show-mobile-header")
                                    .addClass("closed-mobile-header"),
                                s
                                    .removeClass("show-sticky-mobile-header")
                                    .addClass("closed-overlay-mobile-header")
                                    .addClass("closed-overlay-mobile-header"),
                                st.removeClass("active"),
                                o.removeClass("show-mobile-sidebar"));
                    }),
                    t(".dt-close-mobile-menu-icon").on("click", function () {
                        o.removeClass("show-mobile-header"),
                            o.addClass("closed-mobile-header"),
                            s.removeClass("show-sticky-mobile-header"),
                            s
                                .removeClass("show-overlay-mobile-header")
                                .addClass("closed-overlay-mobile-header"),
                            st.removeClass("active"),
                            tt.removeClass("active");
                    }),
                    t(".dt-mobile-header").wrapInner(
                        "<div class='mobile-header-scrollbar-wrap'></div>"
                    ),
                    t(".mobile-header-scrollbar-wrap").layzrInitialisation(),
                    J.find(".slider-content")
                        .widgetScroller()
                        .css("visibility", "visible"),
                    !t(".touchevents").length > 0 &&
                    (J.on("mouseenter", function (t) {
                        J.css("overflow-y", "auto");
                    }),
                        J.on("mouseleave", function (t) {
                            J.css("overflow-y", "hidden");
                        }));
            }
        }
        t(".l-to-r-line > li:not(.menu-item-language) > a > span:last-child")
            .not(".l-to-r-line > li > a > span.mega-icon")
            .append("<i class='underline'></i>"),
            t(".not-clickable-item").on("click", function (t) {
                t.preventDefault(), t.stopPropagation();
            }),
            (t(".active-line-decoration").length > 0 ||
                t(".hover-line-decoration").length > 0) &&
            t(".main-nav > .menu-item > a").append(
                "<span class='decoration-line'></span>"
            );
        var ot = t(
            ".main-nav, .mini-nav, .mini-wpml .wpml-ls-item-legacy-dropdown"
        ),
            at = t(
                ".masthead:not(.sub-downwards) .main-nav, .mini-nav, .mini-wpml .wpml-ls-item-legacy-dropdown"
            ),
            rt = t(".main-nav");
        P = t(".side-header");
        t(".menu-item-language").each(function () {
            var e = t(this);
            e.children(".submenu-languages").length > 0 && e.addClass("has-children");
        });
        rt.clone(), t(".mini-nav").clone();
        t(".mini-nav select").change(function () {
            window.location.href = t(this).val();
        }),
            (dtGlobals.isHovering = !1),
            t(".main-nav li", P).each(function () {
                var e = t(this);
                if (e.hasClass("new-column")) {
                    var i = e.prev().find(" > .sub-nav");
                    t(" > .sub-nav > *", e).appendTo(i);
                }
            }),
            t(".sub-downwards .main-nav > li").each(function () {
                t(this).find(" > .dt-mega-menu-wrap > .sub-nav").unwrap();
            });
        var lt,
            dt,
            ct = t(
                ".select-type-menu, .select-type-menu-first-switch, .select-type-menu-second-switch, .mini-wpml .wpml-ls-item-legacy-dropdown"
            ),
            ht = "mini-sub-nav";
        ct.find("> ul").addClass(ht),
            t(".mini-wpml .wpml-ls-item-legacy-dropdown").find("> ul").addClass(ht),
            at.each(function () {
                var e = t(this);
                t(".act", e).parents("li").addClass("act"),
                    t(" li.has-children ", e).each(function () {
                        var e,
                            n,
                            a = t(this),
                            r = a.find("> a");
                        if (
                            a.parent().hasClass("main-nav") &&
                            !a.parents().hasClass("side-header") &&
                            t(".masthead").hasClass("show-sub-menu-on-hover")
                        )
                            r = a.find("> a");
                        else if (
                            a.parent().hasClass("main-nav") &&
                            a.parents().hasClass("side-header") &&
                            t(".masthead").hasClass("show-sub-menu-on-hover")
                        )
                            r = a;
                        else if (
                            (a.parent().hasClass("sub-nav") ||
                                a.parents().hasClass("mini-nav")) &&
                            t(".masthead").hasClass("show-sub-menu-on-hover")
                        )
                            r = a;
                        if (
                            ((dtGlobals.isMobile || dtGlobals.isWindowsPhone) &&
                                a.find("> a").on("click", function (e) {
                                    t(this).hasClass("dt-clicked")
                                        ? e.stopPropagation()
                                        : (e.preventDefault(),
                                            ot.find(".dt-clicked").removeClass("dt-clicked"),
                                            t(this).addClass("dt-clicked"));
                                }),
                                ot.parents().hasClass("full-width") &&
                                a.hasClass("mega-full-width"))
                        ) {
                            if (ot.parents(".header-bar").length > 0)
                                var l = ot.parents(".header-bar").innerWidth();
                            else l = ot.parents(".ph-wrap").innerWidth();
                            !P.length > 0 && a.find(".sub-nav-widgets").css({ width: l });
                        }
                        function d(s) {
                            if (s.parent("li").length > 0)
                                var a = s.parent(),
                                    r = s.siblings("div.dt-mega-menu-wrap, ul");
                            else
                                (a = s),
                                    (r = (d = s.find("> a")).siblings(
                                        "div.dt-mega-menu-wrap, ul"
                                    ));
                            var l = s.offset().left,
                                d = s.offset().left,
                                c = s.parents(".masthead");
                            if (
                                (a.addClass("dt-hovered"),
                                    a.hasClass("dt-mega-menu") && a.addClass("show-mega-menu"),
                                    (dtGlobals.isHovering = !0),
                                    r.length > 0 &&
                                    (o.width() - (r.offset().left - o.offset().left) - r.width() <
                                        0 && r.addClass("right-overflow"),
                                        i.height() -
                                        (r.offset().top - dtGlobals.winScrollTop) -
                                        r.innerHeight() <
                                        0 &&
                                        !r.parents().hasClass("sub-sideways") &&
                                        r.addClass("bottom-overflow"),
                                        i.height() -
                                        (r.offset().top - dtGlobals.winScrollTop) -
                                        r.innerHeight() <
                                        0 &&
                                        !a.hasClass("dt-mega-menu") &&
                                        r.addClass("bottom-overflow")),
                                    (a.find(".dt-mega-menu-wrap").length > 0 &&
                                        a.find(".dt-mega-menu-wrap").offset().top +
                                        a.find(".dt-mega-menu-wrap").innerHeight()) > i.height() &&
                                    r.parents().hasClass("sub-sideways") &&
                                    a.hasClass("dt-mega-menu") &&
                                    (s.find(".dt-mega-menu-wrap").height() <= i.height()
                                        ? a
                                            .find(".dt-mega-menu-wrap")
                                            .css({
                                                top: -(
                                                    a.position().top +
                                                    a.height() +
                                                    s.find(".dt-mega-menu-wrap").height() -
                                                    i.height()
                                                ),
                                            })
                                        : a
                                            .find(".dt-mega-menu-wrap")
                                            .css({ top: -(s.position().top - 5) })),
                                    !P.length > 0 && r.not(".right-overflow").css({ left: d - l }),
                                    s.parents(".dt-mobile-header").length > 0 &&
                                    r.css({ top: s.position().top - 13 - r.height() }),
                                    a.hasClass("mega-auto-width"))
                            ) {
                                a.width();
                                var h = c.offset().left,
                                    u = a.offset().left;
                                if ((($_this_parents_ofs = a.offset().left - h), !P.length)) {
                                    var p = o.width();
                                    if (t(".boxed").length > 0) {
                                        u = a.position().left;
                                        r.innerWidth() > p - a.position().left &&
                                            r.css({ left: -(r.innerWidth() - (p - u) + 20) });
                                    } else {
                                        u = a.offset().left;
                                        r.innerWidth() > p - a.offset().left &&
                                            r.css({ left: -(r.innerWidth() - (p - u) + 20) });
                                    }
                                    r.innerWidth() > p &&
                                        (t(".boxed").length > 0
                                            ? r.css({
                                                width: c.width() - 40,
                                                left: -(a.position().left + 20),
                                            })
                                            : r.css({ width: c.width() - 40, left: -(u - h + 20) }));
                                }
                                null != typeof r.find(".slider-content") &&
                                    r
                                        .find(".slider-content")
                                        .widgetScroller()
                                        .css("visibility", "visible"),
                                    r.layzrInitialisation();
                            }
                            if (a.hasClass("mega-full-width")) {
                                u = a.offset().left;
                                if (s.parents(".header-bar").length > 0)
                                    if (s.parents(".masthead").hasClass("full-width")) {
                                        var f = s.parents(".header-bar").innerWidth() - 40;
                                        h = s.parents(".header-bar").offset().left + 20;
                                    } else
                                        (f = s.parents(".header-bar").innerWidth()),
                                            (h = s.parents(".header-bar").offset().left);
                                else if (s.parents(".masthead").hasClass("full-width"))
                                    (f = s.parents(".ph-wrap").innerWidth() - 40),
                                        (h = s.parents(".ph-wrap").offset().left + 20);
                                else
                                    (f = s.parents(".ph-wrap").innerWidth()),
                                        (h = s.parents(".ph-wrap").offset().left);
                                !P.length > 0 && r.css({ width: f, left: -(u - h) }),
                                    null != typeof r.find(".slider-content") &&
                                    r
                                        .find(".slider-content")
                                        .widgetScroller()
                                        .css("visibility", "visible"),
                                    r.layzrInitialisation();
                            }
                            clearTimeout(e),
                                clearTimeout(n),
                                (e = setTimeout(function () {
                                    a.hasClass("dt-hovered") &&
                                        (r
                                            .stop()
                                            .css("visibility", "visible")
                                            .animate({ opacity: 1 }, 150, function () {
                                                a.addClass("show-mega-menu-content");
                                            }),
                                            t(".searchform .submit", re).removeClass("act"),
                                            t(".mini-search").removeClass("act"),
                                            t(".mini-search.popup-search .popup-search-wrap", re)
                                                .stop()
                                                .animate({ opacity: 0 }, 150, function () {
                                                    t(this).css("visibility", "hidden");
                                                }));
                                }, 100));
                        }
                        function c(i) {
                            var s = i.find("> a").siblings("div.dt-mega-menu-wrap, ul");
                            i.removeClass("dt-hovered"),
                                (dtGlobals.isHovering = !1),
                                clearTimeout(e),
                                clearTimeout(n),
                                (n = setTimeout(function () {
                                    i.hasClass("dt-hovered") ||
                                        (s.stop().animate({ opacity: 0 }, 150, function () {
                                            t(this).css("visibility", "hidden");
                                        }),
                                            i.removeClass("show-mega-menu"),
                                            i.removeClass("show-mega-menu-content"),
                                            setTimeout(function () {
                                                i.hasClass("dt-hovered") ||
                                                    (s.removeClass("right-overflow"),
                                                        s.removeClass("bottom-overflow"),
                                                        i.find(".dt-mega-menu-wrap").css({ top: "" }),
                                                        i.hasClass("mega-auto-width") &&
                                                        s.css({ width: "", left: "" }));
                                            }, 400));
                                }, 150)),
                                i.find("> a").removeClass("dt-clicked");
                        }
                        a.find("> a").on("focus", function (e) {
                            "tap" == e.type && e.stopPropagation();
                            var i = t(this);
                            d(i),
                                t(" li.has-children").removeClass("parent-clicked"),
                                i.parent().addClass("parent-clicked"),
                                t(e.target).parents().hasClass("sub-nav") ||
                                (t(" li.has-children").removeClass("dt-hovered"),
                                    i.parent().addClass("dt-hovered")),
                                t(
                                    ".main-nav > li:not(.dt-hovered) > .sub-nav, .main-nav >  li:not(.dt-hovered) > .dt-mega-menu-wrap"
                                )
                                    .stop()
                                    .animate({ opacity: 0 }, 150, function () {
                                        t(this).css("visibility", "hidden");
                                    }),
                                t(" .main-nav .sub-nav li:not(.parent-clicked) .sub-nav")
                                    .stop()
                                    .animate({ opacity: 0 }, 150, function () {
                                        t(this).css("visibility", "hidden");
                                    });
                        }),
                            a.find("> a").on("focusout", function (i) {
                                var s = t(this),
                                    o = t("this").siblings("div.dt-mega-menu-wrap, ul");
                                (dtGlobals.isHovering = !1),
                                    clearTimeout(e),
                                    clearTimeout(n),
                                    (n = setTimeout(function () {
                                        s.parent().hasClass("dt-hovered") ||
                                            (o.stop().animate({ opacity: 0 }, 150, function () {
                                                t(this).css("visibility", "hidden");
                                            }),
                                                s.parent().removeClass("show-mega-menu"),
                                                s.parent().removeClass("show-mega-menu-content"),
                                                setTimeout(function () {
                                                    s.parent().hasClass("dt-hovered") ||
                                                        (o.removeClass("right-overflow"),
                                                            o.removeClass("bottom-overflow"),
                                                            s
                                                                .parent()
                                                                .find(".dt-mega-menu-wrap")
                                                                .css({ top: "" }),
                                                            s.parent().hasClass("mega-auto-width") &&
                                                            o.css({ width: "", left: "" }));
                                                }, 400));
                                    }, 150)),
                                    s.parent().removeClass("parent-clicked");
                            }),
                            t(".masthead").hasClass("show-sub-menu-on-hover")
                                ? (r.on("mouseenter tap", function (e) {
                                    "tap" == e.type && e.stopPropagation(), d(t(this));
                                }),
                                    a.on("mouseleave", function (e) {
                                        c(t(this));
                                    }))
                                : (s.on("click", function (e) {
                                    (t(e.target).hasClass("sub-nav") &&
                                        t(e.target).hasClass("dt-mega-menu-wrap")) ||
                                        (t(
                                            " #primary-menu li.dt-hovered:not(.dt-mega-menu) > .sub-nav"
                                        ).animate({ opacity: 0 }, 100, function () {
                                            t(this).css("visibility", "hidden");
                                        }),
                                            t(" #primary-menu li.dt-mega-menu > .is-clicked")
                                                .siblings(" .dt-mega-menu-wrap")
                                                .animate({ opacity: 0 }, 100, function () {
                                                    t(this).css("visibility", "hidden");
                                                }),
                                            t("#primary-menu  li.has-children").removeClass(
                                                "dt-hovered"
                                            ),
                                            t("#primary-menu  li.has-children > a").removeClass(
                                                "is-clicked"
                                            ));
                                }),
                                    r.on("click", function (e) {
                                        if (!t(this).parents().hasClass("mobile-main-nav")) {
                                            "tap" == e.type && e.stopPropagation();
                                            var i = t(this),
                                                n = i.parent("li");
                                            if (!i.hasClass("is-clicked"))
                                                return (
                                                    d(i),
                                                    t(" li.has-children > a").removeClass("is-clicked"),
                                                    t(" li.has-children").removeClass("parent-clicked"),
                                                    i.parent().addClass("parent-clicked"),
                                                    t(e.target).parents().hasClass("sub-nav") ||
                                                    (t(" li.has-children").removeClass("dt-hovered"),
                                                        i.parent().addClass("dt-hovered")),
                                                    t(
                                                        ".main-nav > li:not(.dt-hovered) > .sub-nav, .main-nav >  li:not(.dt-hovered) > .dt-mega-menu-wrap"
                                                    )
                                                        .stop()
                                                        .animate({ opacity: 0 }, 150, function () {
                                                            t(this).css("visibility", "hidden");
                                                        }),
                                                    t(
                                                        ".main-nav .sub-nav li:not(.parent-clicked) .sub-nav"
                                                    )
                                                        .stop()
                                                        .animate({ opacity: 0 }, 150, function () {
                                                            t(this).css("visibility", "hidden");
                                                        }),
                                                    i.addClass("is-clicked"),
                                                    !1
                                                );
                                            c(n),
                                                i.removeClass("is-clicked"),
                                                i.parent().removeClass("parent-clicked");
                                        }
                                    }));
                    });
            }),
            (t.fn.touchMenuItem = function () {
                return this.each(function () {
                    var e = t(this);
                    if (!e.hasClass("item-ready")) {
                        s.on("touchend", function (e) {
                            t(".mobile-true .has-children > a").removeClass("is-clicked");
                        });
                        var i = t(this),
                            n = i.attr("target") ? i.attr("target") : "_self";
                        i.on("touchstart", function (t) {
                            (origY = t.originalEvent.touches[0].pageY),
                                (origX = t.originalEvent.touches[0].pageX);
                        }),
                            i.on("touchend", function (e) {
                                var s = e.originalEvent.changedTouches[0].pageX,
                                    o = e.originalEvent.changedTouches[0].pageY;
                                if (origY == o || origX == s)
                                    if (i.hasClass("is-clicked"));
                                    else if (i.parent().hasClass("dt-hovered"))
                                        return (
                                            e.preventDefault(),
                                            t(".mobile-true .has-children > a").removeClass(
                                                "is-clicked"
                                            ),
                                            i.addClass("is-clicked"),
                                            window.open(i.attr("href"), n),
                                            !1
                                        );
                            }),
                            e.addClass("item-ready");
                    }
                });
            }),
            t(".mobile-true .main-nav .has-children > a").touchMenuItem(),
            ct.on("mouseenter tap", function (e) {
                "tap" == e.type && e.stopPropagation();
                var n = t(this);
                n.addClass("dt-hovered"),
                    o.width() -
                    (n.children(".mini-sub-nav").offset().left - o.offset().left) -
                    n.find(" > .mini-sub-nav").width() <
                    0 && n.children(".mini-sub-nav").addClass("right-overflow"),
                    i.height() -
                    (n.children(".mini-sub-nav").offset().top -
                        dtGlobals.winScrollTop) -
                    n.children(".mini-sub-nav").height() <
                    0 &&
                    !n.parents(".dt-mobile-header").length > 0 &&
                    n.children(".mini-sub-nav").addClass("bottom-overflow"),
                    n.parents(".dt-mobile-header").length > 0 &&
                    n
                        .children(".mini-sub-nav")
                        .css({
                            top:
                                n.position().top - 13 - n.children(".mini-sub-nav").height(),
                        }),
                    (dtGlobals.isHovering = !0),
                    clearTimeout(lt),
                    clearTimeout(dt),
                    (lt = setTimeout(function () {
                        n.hasClass("dt-hovered") &&
                            (t(".mini-sub-nav")
                                .stop()
                                .animate({ opacity: 0 }, 50, function () {
                                    t(this).css("visibility", "hidden");
                                }),
                                n
                                    .children(".mini-sub-nav")
                                    .stop()
                                    .css("visibility", "visible")
                                    .animate({ opacity: 1 }, 150));
                    }, 100));
            }),
            ct.on("mouseleave", function (e) {
                var i = t(this);
                i.removeClass("dt-hovered"),
                    (dtGlobals.isHovering = !1),
                    clearTimeout(lt),
                    clearTimeout(dt),
                    (dt = setTimeout(function () {
                        i.hasClass("dt-hovered") ||
                            (i.parents().hasClass("dt-mega-menu") ||
                                i
                                    .children(".mini-sub-nav")
                                    .stop()
                                    .animate({ opacity: 0 }, 150, function () {
                                        t(this).css("visibility", "hidden");
                                    }),
                                setTimeout(function () {
                                    i.hasClass("dt-hovered") ||
                                        (i.children(".mini-sub-nav").removeClass("right-overflow"),
                                            i.children(".mini-sub-nav").removeClass("bottom-overflow"));
                                }, 400));
                    }, 150));
            }),
            (dtGlobals.desktopProcessed = !1),
            (dtGlobals.mobileProcessed = !1);
        var ut = t(".sticky-mobile-header").exists();
        window.innerWidth <= dtLocal.themeSettings.mobileHeader.firstSwitchPoint &&
            !s.hasClass("responsive-off") &&
            (t(".masthead:not(.side-header):not(#phantom)").addClass(
                "masthead-mobile-header"
            ),
                t(
                    "body:not(.overlay-navigation):not(.sticky-header) .side-header:not(#phantom)"
                )
                    .addClass("masthead-mobile-header")
                    .addClass("desktop-side-header")),
            window.innerWidth <=
                dtLocal.themeSettings.mobileHeader.firstSwitchPoint &&
                window.innerWidth >
                dtLocal.themeSettings.mobileHeader.secondSwitchPoint &&
                !s.hasClass("responsive-off")
                ? t(".left-widgets", I).find(".in-top-bar-left").length > 0 ||
                    t(".right-widgets", I).find(".in-top-bar-right").length > 0
                    ? I.removeClass("top-bar-empty")
                    : I.addClass("top-bar-empty")
                : window.innerWidth <=
                    dtLocal.themeSettings.mobileHeader.secondSwitchPoint &&
                    !s.hasClass("responsive-off")
                    ? t(".left-widgets", I).find(".in-top-bar").length > 0
                        ? I.removeClass("top-bar-empty")
                        : I.addClass("top-bar-empty")
                    : !t(".mini-widgets", I).find(".show-on-desktop").length > 0
                        ? I.addClass("top-bar-empty")
                        : I.removeClass("top-bar-empty");
        var pt = t(".floating-navigation-below-slider").exists();
        if (t(".sticky-mobile-header").exists() && !s.hasClass("responsive-off")) {
            var ft = t(
                ".masthead:not(.side-header):not(#phantom), body:not(.overlay-navigation):not(.sticky-header) .side-header:not(#phantom)"
            ),
                mt = ft.find(".mobile-header-bar");
            ($stickyMobileLogo = ft.find(".mobile-branding")),
                (mobileLogoURL = t(".mobile-branding a").attr("href")),
                t(".sticky-mobile-logo-first-switch").exists() ||
                (dtLocal.themeSettings.stickyMobileHeaderFirstSwitch.logo.html &&
                    (null == mobileLogoURL
                        ? t(dtLocal.themeSettings.stickyMobileHeaderFirstSwitch.logo.html)
                            .addClass("sticky-mobile-logo-first-switch")
                            .prependTo($stickyMobileLogo)
                        : t(
                            '<a class="sticky-mobile-logo-first-switch" href="' +
                            mobileLogoURL +
                            '">' +
                            dtLocal.themeSettings.stickyMobileHeaderFirstSwitch.logo
                                .html +
                            " </a>"
                        ).prependTo($stickyMobileLogo))),
                t(".sticky-mobile-logo-second-switch").exists() ||
                (dtLocal.themeSettings.stickyMobileHeaderSecondSwitch.logo.html &&
                    (null == mobileLogoURL
                        ? t(
                            dtLocal.themeSettings.stickyMobileHeaderSecondSwitch.logo.html
                        )
                            .addClass("sticky-mobile-logo-second-switch")
                            .prependTo($stickyMobileLogo)
                        : t(
                            '<a class="sticky-mobile-logo-second-switch" href="' +
                            mobileLogoURL +
                            '">' +
                            dtLocal.themeSettings.stickyMobileHeaderSecondSwitch.logo
                                .html +
                            " </a>"
                        ).prependTo($stickyMobileLogo)));
            var gt = 0,
                vt = 0,
                yt = E.height(),
                wt = 0,
                bt = 0,
                Ct = !1;
            if (!O) {
                t("<div class='mobile-header-space'></div>").insertBefore(ft);
                var _t = t(".mobile-header-space");
            }
            t(".no-cssgridlegacy.no-cssgrid").length > 0 &&
                pt &&
                (O
                    ? (ft.css({ top: yt }), _t.css({ top: yt }))
                    : (_t.insertAfter(E), ft.insertAfter(E))),
                (dtGlobals.resetMobileSizes = function (e) {
                    if (
                        window.innerWidth >
                        dtLocal.themeSettings.mobileHeader.firstSwitchPoint
                    )
                        return (
                            t(".is-safari").length > 0 &&
                            ft.css({ width: "", "max-width": "" }),
                            ft.removeClass("sticky-mobile-off sticky-mobile-on"),
                            (Ct = !1),
                            !1
                        );
                    (vt =
                        t("#wpadminbar").exists() &&
                            !Modernizr.mq("only screen and (max-width:600px)")
                            ? t("#wpadminbar").height()
                            : 0),
                        window.innerWidth <=
                            dtLocal.themeSettings.mobileHeader.firstSwitchPoint &&
                            window.innerWidth >
                            dtLocal.themeSettings.mobileHeader.secondSwitchPoint &&
                            !s.hasClass("responsive-off")
                            ? t(".left-widgets", I).find(".in-top-bar-left").length > 0 ||
                                t(".top-bar .right-widgets").find(".in-top-bar-right").length >
                                0
                                ? I.removeClass("top-bar-empty")
                                : I.addClass("top-bar-empty")
                            : t(".left-widgets", I).find(".in-top-bar").length > 0
                                ? I.removeClass("top-bar-empty")
                                : I.addClass("top-bar-empty"),
                        (gt =
                            !I.exists() ||
                                I.is(":hidden") ||
                                I.hasClass("top-bar-empty") ||
                                I.hasClass("hide-top-bar")
                                ? 0
                                : I.innerHeight()),
                        window.innerWidth <
                            dtLocal.themeSettings.mobileHeader.firstSwitchPoint &&
                            window.innerWidth >
                            dtLocal.themeSettings.mobileHeader.secondSwitchPoint
                            ? ((wt =
                                dtLocal.themeSettings.mobileHeader.firstSwitchPointHeight +
                                gt),
                                dtLocal.themeSettings.mobileHeader.firstSwitchPointHeight)
                            : ((wt =
                                dtLocal.themeSettings.mobileHeader.secondSwitchPointHeight +
                                gt),
                                dtLocal.themeSettings.mobileHeader.secondSwitchPointHeight),
                        pt
                            ? pt && !O
                                ? (bt = e)
                                : pt && O
                                    ? (bt = e - wt + gt)
                                    : mt.offset().top
                            : (bt = gt),
                        ft.hasClass("sticky-mobile-on") && ft.css({ top: vt - gt }),
                        O || (_t.css({ height: wt }), _t.css({ top: e })),
                        t(".is-safari").length > 0 &&
                        ft.css({
                            width: document.documentElement.clientWidth,
                            "max-width": document.documentElement.clientWidth,
                        });
                }),
                dtGlobals.resetMobileSizes(E.height()),
                i.on("resize debouncedresize", function () {
                    dtGlobals.resetMobileSizes(E.height());
                }),
                i.on("scroll", function () {
                    if (
                        window.innerWidth >
                        dtLocal.themeSettings.mobileHeader.firstSwitchPoint
                    )
                        return !1;
                    var e = dtGlobals.winScrollTop;
                    e > bt && !Ct && t(document).height() > t(window).height()
                        ? (ft.removeClass("sticky-mobile-off").addClass("sticky-mobile-on"),
                            A && ut && ft.addClass("fixed-mobile-header"),
                            ft.css({ top: vt - gt }),
                            (Ct = !0))
                        : e <= bt &&
                        Ct &&
                        (ft.removeClass("sticky-mobile-on").addClass("sticky-mobile-off"),
                            A && ut && ft.removeClass("fixed-mobile-header"),
                            ft.css({ top: 0 }),
                            t(".no-cssgridlegacy.no-cssgrid").length > 0 &&
                            pt &&
                            ft.css({ top: yt }),
                            (Ct = !1));
                });
        }
        dtGlobals.isMobile &&
            window.innerWidth <=
            dtLocal.themeSettings.mobileHeader.firstSwitchPoint &&
            !dtGlobals.isiPad &&
            !s.hasClass("responsive-off") &&
            (dtLocal.themeSettings.floatingHeader.showMenu &&
                t(".phantom-sticky").exists() &&
                O &&
                k.addClass("fixed-masthead"),
                (dtLocal.themeSettings.floatingHeader.showMenu = !1));
        O = s.hasClass("transparent");
        var xt = t(".phantom-sticky").exists();
        t(".side-header").exists();
        if (dtLocal.themeSettings.floatingHeader.showMenu && xt) {
            var St = t(".branding a", k).attr("href"),
                It = (z = k).find(".header-bar");
            (Ft = z.find(".branding")).find("img");
            Ft.find("a.same-logo").length > 0 ||
                t(".sticky-logo").exists() ||
                (dtLocal.themeSettings.floatingHeader.logo.html &&
                    dtLocal.themeSettings.floatingHeader.logo.showLogo &&
                    (null == St
                        ? t(dtLocal.themeSettings.floatingHeader.logo.html)
                            .addClass("sticky-logo")
                            .prependTo(Ft)
                        : t(
                            '<a class="sticky-logo" href="' +
                            St +
                            '">' +
                            dtLocal.themeSettings.floatingHeader.logo.html +
                            " </a>"
                        ).prependTo(Ft)));
            Q = 0;
            var kt = 0,
                Tt = 0,
                zt = 0,
                Lt = 0,
                Et = !1,
                Pt = "";
            if (!O) {
                t("<div class='header-space'></div>").insertAfter(z);
                var Ot = t(".header-space");
            }
            z.addClass("sticky-off fixed-masthead");
            var At = !1;
            function Mt() {
                if (
                    window.innerWidth <=
                    dtLocal.themeSettings.mobileHeader.firstSwitchPoint &&
                    !s.hasClass("responsive-off")
                )
                    return !1;
                var t = dtGlobals.winScrollTop;
                if (t > Lt + 1 && !Et && !dtGlobals.isHovering) {
                    if (
                        (z.removeClass("sticky-off").addClass("sticky-on"),
                            O || Ot.removeClass("sticky-space-off").addClass("sticky-space-on"),
                            s.hasClass("floating-top-bar")
                                ? z.css({ top: kt })
                                : z.css({ top: kt - Q }),
                            (Et = !0),
                            pt &&
                            O &&
                            (z.css({ transform: "translateY(0)" }),
                                navigator.userAgent.match(/Trident.*rv\:11\./)))
                    ) {
                        var e = z.attr("style");
                        z.attr("style", e + "; top:" + Q + "px !important;");
                    }
                } else if (
                    t <= Lt + 1 &&
                    Et &&
                    (z.removeClass("sticky-on").addClass("sticky-off"),
                        O || Ot.removeClass("sticky-space-on").addClass("sticky-space-off"),
                        z.css({ top: 0 }),
                        (Et = !1),
                        pt &&
                        O &&
                        (z.css({ transform: "translateY(-100%)" }),
                            navigator.userAgent.match(/Trident.*rv\:11\./)))
                ) {
                    e = z.attr("style");
                    z.not(".sticky-on").attr(
                        "style",
                        e + "; top:" + E.height() + "px !important;"
                    );
                }
                t > Lt + 1 &&
                    t <= Lt + 1 + zt - dtLocal.themeSettings.floatingHeader.height
                    ? ((Pt = "changing"),
                        It.css({ transition: "none", height: Lt + zt - t }))
                    : t > Lt + 1 + dtLocal.themeSettings.floatingHeader.height &&
                        "end" !== Pt
                        ? ((Pt = "end"),
                            It.css({
                                height: dtLocal.themeSettings.floatingHeader.height,
                                transition: "all 0.3s ease",
                            }))
                        : t <= Lt + 1 &&
                        "start" !== Pt &&
                        ((Pt = "start"),
                            It.css({ height: zt, transition: "all 0.1s ease" }));
            }
            (dtGlobals.resetSizes = function (e) {
                if (
                    window.innerWidth <=
                    dtLocal.themeSettings.mobileHeader.firstSwitchPoint &&
                    !s.hasClass("responsive-off")
                )
                    return (
                        At ||
                        ((At = !0),
                            z.removeClass("sticky-off sticky-on"),
                            O || Ot.removeClass("sticky-space-off sticky-space-on"),
                            z.css({ top: "", transform: "" }),
                            (Et = !1),
                            (Pt = ""),
                            t(".is-safari").length > 0 &&
                            z.css({ width: "", "max-width": "" })),
                        !1
                    );
                At && (At = !1),
                    Et ||
                    "" !== Pt ||
                    (z.addClass("sticky-off"), O || Ot.addClass("sticky-space-off")),
                    (kt = t("#wpadminbar").exists() ? t("#wpadminbar").height() : 0),
                    (Q =
                        !I.exists() ||
                            I.is(":hidden") ||
                            I.hasClass("top-bar-empty") ||
                            I.hasClass("hide-top-bar")
                            ? 0
                            : I.innerHeight()),
                    (Tt = dtLocal.themeSettings.desktopHeader.height + Q),
                    (zt = dtLocal.themeSettings.desktopHeader.height),
                    pt
                        ? pt && !O
                            ? (Lt = s.hasClass("floating-top-bar") ? e - Q : e)
                            : pt && O
                                ? (Lt = s.hasClass("floating-top-bar") ? e - zt - Q : e - zt)
                                : It.offset().top
                        : (Lt = s.hasClass("floating-top-bar") ? 0 : Q),
                    O || Ot.css({ height: Tt }),
                    t(".is-safari").length > 0 &&
                    (o.hasClass("boxed")
                        ? z.css({ width: o.width(), "max-width": o.width() })
                        : z.css({
                            width: document.documentElement.clientWidth,
                            "max-width": document.documentElement.clientWidth,
                        }));
            }),
                dtGlobals.resetSizes(E.height()),
                i.on(" debouncedresize", function () {
                    dtGlobals.resetSizes(E.height());
                }),
                Mt(),
                i.on("scroll", function () {
                    Mt();
                });
        }
        if (L.exists()) {
            var Dt = 0,
                Ht = ((kt = 0), (Q = 0), !1);
            L.addClass("sticky-top-line-off"),
                t(".top-line-space").exists() ||
                O ||
                t("<div class='top-line-space'></div>").insertBefore(L);
            var Ft;
            (St = t(".branding a", L).attr("href")),
                (Ft = L.find(".branding")).find("img");
            Ft.find("a.same-logo").length > 0 ||
                t(".sticky-logo").exists() ||
                (dtLocal.themeSettings.topLine.floatingTopLine.logo.html &&
                    dtLocal.themeSettings.topLine.floatingTopLine.logo.showLogo &&
                    (null == St
                        ? t(dtLocal.themeSettings.topLine.floatingTopLine.logo.html)
                            .addClass("sticky-logo")
                            .prependTo(Ft)
                        : t(
                            '<a class="sticky-logo" href="' +
                            St +
                            '">' +
                            dtLocal.themeSettings.topLine.floatingTopLine.logo.html +
                            " </a>"
                        ).prependTo(Ft)));
            At = !1;
            (dtGlobals.resetTopLineSizes = function (e) {
                if (
                    window.innerWidth <=
                    dtLocal.themeSettings.mobileHeader.firstSwitchPoint &&
                    !s.hasClass("responsive-off")
                )
                    return (
                        At ||
                        ((At = !0),
                            L.removeClass("sticky-top-line-on"),
                            L.css({ top: "" }),
                            (Ht = !1)),
                        !1
                    );
                At && (At = !1),
                    (kt = t("#wpadminbar").exists() ? t("#wpadminbar").height() : 0),
                    (Q =
                        !I.exists() ||
                            I.is(":hidden") ||
                            I.hasClass("top-bar-empty") ||
                            I.hasClass("hide-top-bar")
                            ? 0
                            : I.innerHeight()),
                    (Dt = L.find(".header-bar").height() + Q),
                    t(".top-line-space").css({ height: Dt }),
                    t(".is-safari").length > 0 &&
                    (o.hasClass("boxed")
                        ? L.css({ width: o.width(), "max-width": o.width() })
                        : L.css({
                            width: document.documentElement.clientWidth,
                            "max-width": document.documentElement.clientWidth,
                        }));
            }),
                dtGlobals.resetTopLineSizes(E.height()),
                i.on("resize debouncedresize", function () {
                    dtGlobals.resetTopLineSizes(E.height());
                }),
                i.on("scroll", function () {
                    if (
                        window.innerWidth <=
                        dtLocal.themeSettings.mobileHeader.firstSwitchPoint &&
                        !s.hasClass("responsive-off")
                    )
                        return !1;
                    var t = dtGlobals.winScrollTop > L.height();
                    t && !Ht
                        ? (L.removeClass("sticky-top-line-off").addClass(
                            "sticky-top-line-on"
                        ),
                            L.hasClass("mixed-floating-top-bar")
                                ? L.css({ top: kt })
                                : L.css({ top: kt - Q }),
                            (Ht = !0))
                        : !t &&
                        Ht &&
                        (L.removeClass("sticky-top-line-on").addClass(
                            "sticky-top-line-off"
                        ),
                            L.css({ top: kt }),
                            (Ht = !1));
                });
        }
        if (
            dtLocal.themeSettings.floatingHeader.showMenu &&
            dtLocal.themeSettings.floatingHeader.showMenu &&
            !xt
        ) {
            var Bt = t(".phantom-fade").exists(),
                Wt = t(".phantom-slide").exists(),
                Rt = t(".split-header").exists();
            if (Bt || Wt) {
                var $t = t(".masthead:not(#phantom) .main-nav")
                    .clone(!0)
                    .removeAttr("id"),
                    jt =
                        ((St = t(".branding a", k).attr("href")),
                            s.hasClass("floating-top-bar")
                                ? t(".masthead:not(#phantom) .top-bar").clone(!0)
                                : ""),
                    Gt = !1;
                if (Rt) {
                    var Yt = k.attr("class"),
                        Nt = t(".side-header-h-stroke, .split-header"),
                        qt = (De = t(
                            '<div id="phantom" class="' +
                            Yt +
                            '"><div class="ph-wrap"></div></div>'
                        ).appendTo("body")).find(".ph-wrap"),
                        Ut = De.find(".widget-box"),
                        Vt = $t.find(".mini-widgets"),
                        Xt = Nt.find(".branding");
                    t(".phantom-custom-logo-on").length > 0 &&
                        dtLocal.themeSettings.floatingHeader.logo.html &&
                        dtLocal.themeSettings.floatingHeader.logo.showLogo &&
                        (null == St
                            ? t(dtLocal.themeSettings.floatingHeader.logo.html).prependTo(Xt)
                            : t(
                                '<a class="phantom-top-line-logo" href="' +
                                St +
                                '">' +
                                dtLocal.themeSettings.floatingHeader.logo.html +
                                " </a>"
                            ).prependTo(Xt)),
                        ($t = t(".split-header .header-bar").clone(!0))
                            .appendTo(qt)
                            .find(".main-nav")
                            .removeAttr("id"),
                        s.hasClass("floating-top-bar") && jt.insertBefore(qt);
                } else {
                    (Yt = k.attr("class")),
                        (qt = (De = t(
                            '<div id="phantom" class="' +
                            Yt +
                            '"><div class="ph-wrap"><div class="logo-box"></div><div class="menu-box"></div><div class="widget-box"></div></div></div>'
                        ).appendTo("body")).find(".menu-box")),
                        (Ut = De.find(".widget-box"));
                    if (t(".classic-header").length > 0)
                        Vt = t(".header-bar .navigation .mini-widgets").clone(!0);
                    else if (Rt);
                    else Vt = t(".header-bar .mini-widgets").clone(!0);
                    $t.appendTo(qt),
                        Vt.appendTo(Ut),
                        s.hasClass("floating-top-bar") && jt.prependTo(De),
                        dtLocal.themeSettings.floatingHeader.logo.html &&
                        dtLocal.themeSettings.floatingHeader.logo.showLogo &&
                        (De.find(".ph-wrap").addClass("with-logo"),
                            null == St
                                ? De.find(".logo-box").html(
                                    '<a href="' +
                                    dtLocal.themeSettings.floatingHeader.logo.url +
                                    '">' +
                                    dtLocal.themeSettings.floatingHeader.logo.html +
                                    " </a>"
                                )
                                : De.find(".logo-box").html(
                                    '<a href="' +
                                    St +
                                    '">' +
                                    dtLocal.themeSettings.floatingHeader.logo.html +
                                    " </a>"
                                ));
                }
                var Zt,
                    Qt = t("#phantom");
                o.hasClass("boxed") &&
                    De.addClass("boxed").find(".ph-wrap").addClass("boxed"),
                    Qt.removeClass("show-phantom")
                        .addClass("hide-phantom")
                        .css("visibility", "hidden"),
                    dtGlobals.addOnloadEvent(function () {
                        clearTimeout(Zt),
                            (Zt = setTimeout(function () {
                                Qt.css("visibility", "");
                            }, 150));
                    }),
                    qt.find(".is-loading").removeClass("is-loading"),
                    qt.layzrInitialisation();
                var Kt = !1,
                    Jt = dtGlobals.winScrollTop;
                (yt = E.height()), k.height();
                if (pt && O);
                else if (pt);
                else dtLocal.themeSettings.floatingHeader.showAfter;
                i.on("scroll", function () {
                    if (
                        window.innerWidth <=
                        dtLocal.themeSettings.mobileHeader.firstSwitchPoint &&
                        !s.hasClass("responsive-off")
                    )
                        return !1;
                    var t = dtGlobals.winScrollTop,
                        e = E.height(),
                        i = k.height();
                    if (pt && O)
                        var o = t > e && !1 === Gt,
                            a = t <= e && !0 === Gt;
                    else if (pt)
                        (o = t > e + i && !1 === Gt), (a = t <= e + i && !0 === Gt);
                    else
                        (o =
                            t > dtLocal.themeSettings.floatingHeader.showAfter && !1 === Gt),
                            (a =
                                t <= dtLocal.themeSettings.floatingHeader.showAfter &&
                                !0 === Gt);
                    o
                        ? n.hasClass("menu-open") ||
                        dtGlobals.isHovering ||
                        Kt ||
                        ((Kt = !0),
                            Qt.removeClass("hide-phantom").addClass("show-phantom"),
                            (Gt = !0))
                        : a &&
                        Kt &&
                        (n.hasClass("menu-open") ||
                            ((Kt = !1),
                                Qt.removeClass("show-phantom").addClass("hide-phantom"),
                                (Gt = !1)));
                });
            }
        }
        var te = t(
            ".side-header:not(.sub-sideways ) .main-nav li.has-children > a:not(.not-clickable-item), .side-header:not(.sub-sideways ) .level-arrows-on > li.has-children > a, .mobile-main-nav li.has-children > a"
        );
        t(
            '<i class="next-level-button"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 16 16" style="enable-background:new 0 0 16 16;" xml:space="preserve"><path d="M13.5,7H9V2.5c0-0.6-0.4-1-1-1s-1,0.4-1,1V7H2.5c-0.6,0-1,0.4-1,1s0.4,1,1,1H7v4.5c0,0.6,0.4,1,1,1s1-0.4,1-1V9h4.5c0.6,0,1-0.4,1-1S14.1,7,13.5,7z"/></svg></i>'
        ).insertAfter(te),
            t(
                ".sub-downwards .main-nav li.has-children, .mobile-main-nav li.has-children"
            ).each(function () {
                var e = t(this),
                    i = e.find(" > .sub-nav, .sub-menu");
                e.find(".sub-nav li, .sub-menu li").hasClass("act") &&
                    e.addClass("active"),
                    e.find(".sub-nav li.act, .sub-menu li.act").hasClass("act") &&
                    (e.addClass("open-sub"),
                        i.stop(!0, !0).slideDown(100),
                        i.layzrInitialisation()),
                    e.find(" > .next-level-button").on("click", function (e) {
                        var n = t(this).parent();
                        n.hasClass("active")
                            ? (i.stop(!0, !0).slideUp(500, function () {
                                t(" .main-nav").layzrInitialisation();
                            }),
                                n.removeClass("active"),
                                n.removeClass("open-sub"),
                                n.find("a").removeClass("act"))
                            : (n
                                .siblings()
                                .find(" .sub-nav, .dt-mega-menu-wrap, .sub-menu")
                                .stop(!0, !0)
                                .slideUp(400),
                                i.stop(!0, !0).slideDown(500),
                                n.siblings().removeClass("active"),
                                n.addClass("active"),
                                n.siblings().removeClass("open-sub"),
                                n.addClass("open-sub"),
                                n.siblings().find("> a").removeClass("act"),
                                n.find("a").addClass("act"),
                                t(" .main-nav").layzrInitialisation());
                    });
            }),
            !t(".dt-parent-menu-clickable").length > 0 &&
            t(
                ".sub-downwards .main-nav li > a, .mobile-main-nav li.has-children > a"
            ).each(function () {
                var e = t(this);
                e.parent("li").find(".sub-nav li, .sub-menu li").hasClass("act") &&
                    e.addClass("act"),
                    e
                        .parent("li")
                        .find(".sub-nav li.act, .sub-menu li.act")
                        .hasClass("act") &&
                    (e.parent("li").addClass("open-sub"),
                        e
                            .siblings(".sub-nav, .sub-menu")
                            .stop(!0, !0)
                            .slideDown(100, function () {
                                e.siblings(".sub-nav, .sub-menu").layzrInitialisation();
                            })),
                    e.on("click", function (i) {
                        ($menuItem = e.parent()),
                            $menuItem.hasClass("has-children menu-item-language") &&
                            i.preventDefault(),
                            e.hasClass("act")
                                ? (e
                                    .siblings(".sub-nav, .sub-menu")
                                    .stop(!0, !0)
                                    .slideUp(500),
                                    e.removeClass("act"),
                                    e.parent("li").removeClass("open-sub"))
                                : (e
                                    .parent()
                                    .siblings()
                                    .find(".sub-nav, .dt-mega-menu-wrap, .sub-menu")
                                    .stop(!0, !0)
                                    .slideUp(400),
                                    e
                                        .siblings(".sub-nav, .sub-menu")
                                        .stop(!0, !0)
                                        .slideDown(500),
                                    e.parent().siblings().find("> a").removeClass("act"),
                                    e.addClass("act"),
                                    e.parent("li").siblings().removeClass("open-sub active"),
                                    e.parent("li").addClass("open-sub active")),
                            "function" == typeof t.fn.mCustomScrollbar &&
                            t(".header-bar").mCustomScrollbar("update");
                    });
            }),
            t(".custom-nav > li > a").click(function (e) {
                var i = t(this).parent(),
                    n = t(this);
                i.hasClass("has-children") && e.preventDefault(),
                    n.hasClass("active")
                        ? (n.next().stop(!0).slideUp(500), n.removeClass("active"))
                        : (t(".custom-nav > li > ul").stop(!0).slideUp(400),
                            n.next().stop(!0).slideDown(500),
                            t(".custom-nav > li > a").removeClass("active"),
                            n.addClass("active")),
                    i.siblings().removeClass("act"),
                    i.addClass("act");
            }),
            t(".custom-nav > li > ul").each(function () {
                clearTimeout(undefined),
                    ($this = t(this)),
                    ($thisChildren = $this.find("li")),
                    $thisChildren.hasClass("act") &&
                    ($this.prev().addClass("active"),
                        $this.parent().siblings().removeClass("act"),
                        $this.parent().addClass("act"),
                        $this.slideDown(500));
            }),
            (t.HoverDir = function (e, i) {
                (this.$el = t(i)), this._init(e);
            }),
            (t.HoverDir.defaults = {
                speed: 300,
                easing: "ease",
                hoverDelay: 0,
                inverse: !1,
            }),
            (t.HoverDir.prototype = {
                _init: function (e) {
                    (this.options = t.extend(!0, {}, t.HoverDir.defaults, e)),
                        (this.transitionProp =
                            "all " + this.options.speed + "ms " + this.options.easing),
                        (this.support = Modernizr.csstransitions),
                        this._loadEvents();
                },
                _loadEvents: function () {
                    var e = this;
                    this.$el.on("mouseenter.hoverdir, mouseleave.hoverdir", function (i) {
                        var n = t(this),
                            s = n.find(
                                ".rollover-content, .gallery-rollover, .post-entry-content"
                            ),
                            o = e._getDir(n, { x: i.pageX, y: i.pageY }),
                            a = e._getStyle(o);
                        "mouseenter" === i.type
                            ? (s.hide().css(a.from),
                                clearTimeout(e.tmhover),
                                (e.tmhover = setTimeout(function () {
                                    s.show(0, function () {
                                        var i = t(this);
                                        e.support && i.css("transition", e.transitionProp),
                                            e._applyAnimation(i, a.to, e.options.speed);
                                    });
                                }, e.options.hoverDelay)))
                            : (e.support && s.css("transition", e.transitionProp),
                                clearTimeout(e.tmhover),
                                e._applyAnimation(s, a.from, e.options.speed));
                    });
                },
                _getDir: function (t, e) {
                    var i = t.width(),
                        n = t.height(),
                        s = (e.x - t.offset().left - i / 2) * (i > n ? n / i : 1),
                        o = (e.y - t.offset().top - n / 2) * (n > i ? i / n : 1);
                    return (
                        Math.round((Math.atan2(o, s) * (180 / Math.PI) + 180) / 90 + 3) % 4
                    );
                },
                _getStyle: function (t) {
                    var e,
                        i,
                        n = { left: "0px", top: "-100%" },
                        s = { left: "0px", top: "100%" },
                        o = { left: "-100%", top: "0px" },
                        a = { left: "100%", top: "0px" },
                        r = { top: "0px" },
                        l = { left: "0px" };
                    switch (t) {
                        case 0:
                            (e = this.options.inverse ? s : n), (i = r);
                            break;
                        case 1:
                            (e = this.options.inverse ? o : a), (i = l);
                            break;
                        case 2:
                            (e = this.options.inverse ? n : s), (i = r);
                            break;
                        case 3:
                            (e = this.options.inverse ? a : o), (i = l);
                    }
                    return { from: e, to: i };
                },
                _applyAnimation: function (e, i, n) {
                    (t.fn.applyStyle = this.support ? t.fn.css : t.fn.animate),
                        e.stop().applyStyle(i, t.extend(!0, [], { duration: n + "ms" }));
                },
            });
        var ee = function (t) {
            window.console && window.console.error(t);
        };
        (t.fn.hoverdir = function (e) {
            var i = t.data(this, "hoverdir");
            if ("string" == typeof e) {
                var n = Array.prototype.slice.call(arguments, 1);
                this.each(function () {
                    i
                        ? the7Utils.isFunction(i[e]) && "_" !== e.charAt(0)
                            ? i[e].apply(i, n)
                            : ee("no such method '" + e + "' for hoverdir instance")
                        : ee(
                            "cannot call methods on hoverdir prior to initialization; attempted to call method '" +
                            e +
                            "'"
                        );
                });
            } else
                this.each(function () {
                    i
                        ? i._init()
                        : (i = t.data(this, "hoverdir", new t.HoverDir(e, this)));
                });
            return i;
        }),
            (t.fn.addRollover = function () {
                return this.each(function () {
                    var e = t(this);
                    e.hasClass("this-ready") ||
                        (e.append("<i></i>"),
                            e.find(".rollover-thumbnails").length &&
                            e.addClass("rollover-thumbnails-on"),
                            e.parent().find(".links-container").length &&
                            e.addClass("rollover-buttons-on"),
                            e.addClass("this-ready"));
                });
            }),
            /*!-Scale in hover*/
            (t.fn.scaleInHover = function () {
                return this.each(function () {
                    var e = t(this);
                    if (!e.hasClass("scale-ready")) {
                        var i = e.find("img.preload-me"),
                            n = parseInt(i.attr("width")) / parseInt(i.attr("height"));
                        n < 2 && n >= 1.5
                            ? e.addClass("ratio_3-2")
                            : n < 1.5 && n >= 1
                                ? e.addClass("ratio_4-3")
                                : n < 1 && n >= 0.75
                                    ? e.addClass("ratio_3-4")
                                    : n < 0.75 && n >= 0.6
                                        ? e.addClass("ratio_2-3")
                                        : e
                                            .removeClass("ratio_2-3")
                                            .removeClass("ratio_3-2")
                                            .removeClass("ratio-2")
                                            .removeClass("ratio_4-3")
                                            .removeClass("ratio_3-4"),
                            n >= 2 && e.addClass("ratio-2"),
                            0.5 == n && e.addClass("ratio_0-5"),
                            1 == n &&
                            e
                                .removeClass("ratio_2-3")
                                .removeClass("ratio-2")
                                .removeClass("ratio_3-2")
                                .removeClass("ratio_4-3")
                                .removeClass("ratio_3-4"),
                            e.addClass("scale-ready");
                    }
                });
            }),
            (t.fn.touchNewHover = function () {
                return this.each(function () {
                    var e = t(this);
                    e.hasClass("this-ready") ||
                        (t(".rollover-content", this).length > 0 &&
                            (s.on("touchend", function (e) {
                                t(
                                    ".mobile-true .rollover-content, .mobile-true .rollover-project, .mobile-true .woocom-project"
                                ).removeClass("is-clicked");
                            }),
                                e.on("touchstart", function (t) {
                                    (origY = t.originalEvent.touches[0].pageY),
                                        (origX = t.originalEvent.touches[0].pageX);
                                }),
                                e.on("touchend", function (i) {
                                    var n = i.originalEvent.changedTouches[0].pageX,
                                        s = i.originalEvent.changedTouches[0].pageY;
                                    if (origY == s || origX == n) {
                                        if (!e.hasClass("is-clicked"))
                                            return (
                                                t(".links-container > a", e).on("touchend", function (t) {
                                                    t.stopPropagation(), e.addClass("is-clicked");
                                                }),
                                                i.preventDefault(),
                                                t(
                                                    ".mobile-true .rollover-content, .mobile-true .rollover-project,.mobile-true .woocom-project"
                                                ).removeClass("is-clicked"),
                                                e.addClass("is-clicked"),
                                                e.find(".rollover-content").addClass("is-clicked"),
                                                !1
                                            );
                                        if (
                                            (e.find(".dt-gallery-container").length > 0 &&
                                                e
                                                    .find(".rollover-content")
                                                    .on("click.dtAlbums", function (i) {
                                                        e.find(".rollover-content").off("click.dtAlbums"),
                                                            t(this)
                                                                .find(
                                                                    "a.dt-gallery-pspw, .dt-trigger-first-pspw, .dt-pswp-item"
                                                                )
                                                                .first()
                                                                .trigger("click");
                                                    }),
                                                t(this).find(".rollover-click-target.go-to").length > 0)
                                        )
                                            window.location.href = t(this)
                                                .find(".rollover-click-target.go-to")
                                                .attr("href");
                                        else if (t(this).hasClass("woocom-project")) {
                                            if (t(i.target).is(".add_to_cart_button")) return !0;
                                            window.location.href = t(this).find(" > a").attr("href");
                                        }
                                    }
                                })),
                            e.addClass("this-ready"));
                });
            }),
            /*!Trigger post click for blog Overlay (background)/Overlay (gradient) layouts */
            (t.fn.triggerPostClick = function () {
                return this.each(function () {
                    var e = t(this);
                    if (!e.hasClass("blog-post-ready")) {
                        var i = e.siblings().find(".post-thumbnail-rollover").first(),
                            n = e.find(".entry-meta a, .fancy-date a, .fancy-categories a");
                        if (i.length > 0) {
                            i.on("click", function (t) {
                                t.preventDefault(),
                                    t.stopPropagation(),
                                    i.parents(".ts-wrap").hasClass("ts-interceptClicks");
                            });
                            var s = !1;
                            e.on("click", function (t) {
                                if (!e.parents(".ts-wrap").hasClass("ts-interceptClicks"))
                                    return (
                                        s ||
                                        ((s = !0),
                                            (window.location.href = i.attr("href")),
                                            (s = !1)),
                                        !1
                                    );
                            }),
                                e.find(n).click(function (t) {
                                    t.stopPropagation(), (window.location.href = n.attr("href"));
                                });
                        }
                        e.addClass("blog-post-ready");
                    }
                });
            }),
            (t.fn.touchTriggerPostClick = function () {
                return this.each(function () {
                    var e = t(this);
                    if (!e.hasClass("touch-post-ready")) {
                        var i = e.find(".post-thumbnail-rollover").first();
                        e.find(".entry-meta a, .fancy-date a, .fancy-categories a"),
                            e.find(".entry-excerpt").height(),
                            e.find(".post-details").height();
                        s.on("touchend", function (e) {
                            t(".mobile-true .post").removeClass("is-clicked");
                        }),
                            e.on("touchstart", function (t) {
                                (origY = t.originalEvent.touches[0].pageY),
                                    (origX = t.originalEvent.touches[0].pageX);
                            }),
                            e.on("touchend", function (n) {
                                var s = n.originalEvent.changedTouches[0].pageX,
                                    o = n.originalEvent.changedTouches[0].pageY;
                                if (origY == o || origX == s)
                                    if (e.parents().hasClass("disable-layout-hover"))
                                        "a" === n.target.tagName.toLowerCase()
                                            ? t(n.target).trigger("click")
                                            : (window.location.href = i.attr("href"));
                                    else {
                                        if (!e.hasClass("is-clicked"))
                                            return (
                                                n.preventDefault(),
                                                "a" === n.target.tagName.toLowerCase() &&
                                                t(n.target).trigger("click"),
                                                t(".mobile-ture .post").removeClass("is-clicked"),
                                                e.addClass("is-clicked"),
                                                e
                                                    .parent()
                                                    .siblings()
                                                    .find(".post")
                                                    .removeClass("is-clicked"),
                                                !1
                                            );
                                        window.location.href = i.attr("href");
                                    }
                            }),
                            e.addClass("touch-post-ready");
                    }
                });
            }),
            (t.fn.triggerPostClickOnBefore = function () {
                return this.each(function () {
                    var e = t(this),
                        i = e.parents(".post");
                    if (!e.hasClass("post-before-ready")) {
                        var n = i.find(".post-thumbnail-rollover").first(),
                            s = i.find(".entry-meta a, .fancy-date a, .fancy-categories a");
                        if (n.length > 0) {
                            n.on("click", function (t) {
                                n.parents(".ts-wrap").hasClass("ts-interceptClicks");
                            });
                            var o = !1;
                            e.on("mouseenter mousemove", function (t) {
                                var n = e.offset().top,
                                    s = t.pageY;
                                n - 10 <= s && n + 125 >= s
                                    ? i.hasClass("on-hover") || i.addClass("on-hover")
                                    : i.removeClass("on-hover");
                            }),
                                e.on("mouseleave", function (t) {
                                    e.offset().top, t.pageY;
                                    i.removeClass("on-hover");
                                }),
                                e.on("click", function () {
                                    if (i.hasClass("on-hover"))
                                        return (
                                            o ||
                                            ((o = !0),
                                                (window.location.href = n.attr("href")),
                                                (o = !1)),
                                            !1
                                        );
                                }),
                                e.find(s).click(function (t) {
                                    i.hasClass("on-hover") &&
                                        (t.stopPropagation(),
                                            (window.location.href = s.attr("href")));
                                });
                        }
                        e.addClass("post-before-ready");
                    }
                });
            }),
            /*!Trigger click (direct to post) */
            (t.fn.forwardToPost = function () {
                return this.each(function () {
                    var e = t(this);
                    e.hasClass("this-ready") ||
                        (e.on("click tap", function () {
                            var e = t(this),
                                i = e.find("a").first(),
                                n = i.attr("href");
                            if (!e.parents(".ts-wrap").hasClass("ts-interceptClicks"))
                                return "_blank" === i.attr("target")
                                    ? (window.open(n, "_blank"), !1)
                                    : ((window.location.href = n), !1);
                        }),
                            e.addClass("this-ready"));
                });
            }),
            (window.the7AddHovers = function (e) {
                t(
                    ".rollover, .rollover-video, .post-rollover, .rollover-project .show-content, .vc-item .vc-inner > a",
                    e
                ).addRollover(),
                    t(".filter-grayscale .slider-masonry", e).on(
                        "mouseenter tap",
                        function (e) {
                            "tap" == e.type && e.stopPropagation(),
                                t(this).addClass("dt-hovered");
                        }
                    ),
                    t(".filter-grayscale .slider-masonry", e).on(
                        "mouseleave",
                        function (e) {
                            t(this).removeClass("dt-hovered");
                        }
                    ),
                    t(
                        ".hover-scale .rollover-project, .hover-scale .post",
                        e
                    ).scaleInHover();
            }),
            (window.the7AddMobileHovers = function (e) {
                /*!Description on hover show content on click(albums projects touch device)*/
                t(".rollover-project, .woocom-project", e).touchNewHover(),
                    t(
                        ".content-rollover-layout-list:not(.portfolio-shortcode):not(.albums-shortcode) .post, .gradient-overlay-layout-list:not(.portfolio-shortcode):not(.albums-shortcode)  .post",
                        e
                    ).touchTriggerPostClick();
            }),
            (window.the7AddDesktopHovers = function (e) {
                /*!-Hover Direction aware init*/
                t(
                    ".hover-grid.gallery-shortcode figure, .hover-grid .rollover-project, .hover-grid.portfolio-shortcode .post",
                    e
                ).each(function () {
                    t(this).hoverdir();
                }),
                    t(
                        ".hover-grid-reverse.gallery-shortcode figure, .hover-grid-reverse .rollover-project, .hover-grid-reverse.portfolio-shortcode .post",
                        e
                    ).each(function () {
                        t(this).hoverdir({ inverse: !0 });
                    }),
                    t(
                        ".albums .rollover-content a:not(.portfolio-categories a), .media .rollover-content, .dt-gallery-container .rollover-content",
                        e
                    ).on("click", function (e) {
                        if (t(e.target).is("a")) return !0;
                        t(this).siblings("a.dt-pswp-item").first().click();
                    }),
                    t(
                        ".content-rollover-layout-list:not(.portfolio-shortcode):not(.albums-shortcode) .post,  .gradient-overlay-layout-list:not(.portfolio-shortcode):not(.albums-shortcode) .post",
                        e
                    ).triggerPostClick(),
                    t(
                        ".gradient-overlap-layout-list:not(.portfolio-shortcode):not(.albums-shortcode)  .post-entry-content",
                        e
                    ).triggerPostClickOnBefore(),
                    t(".the7-elementor-widget .forward-post", e).forwardToPost();
            }),
            the7AddMobileHovers(t("html.mobile-true")),
            the7AddDesktopHovers(t("html.mobile-false")),
            the7AddHovers(document);
        var ie = t("#commentform");
        function ne() {
            t(".full-width-wrap").length > 0 &&
                t(".full-width-wrap").each(function () {
                    var e,
                        n,
                        o = t(this),
                        a = window.innerWidth,
                        r = i.width(),
                        l = t(".content").width();
                    if (t(".boxed").length > 0)
                        e = (parseInt(t("#main").width()) - parseInt(l)) / 2;
                    else if (
                        (t(".side-header-v-stroke").length &&
                            a > dtLocal.themeSettings.mobileHeader.firstSwitchPoint &&
                            !s.hasClass("responsive-off")) ||
                        (t(".side-header-v-stroke").length && s.hasClass("responsive-off"))
                    ) {
                        var d =
                            a <= parseInt(l)
                                ? parseInt(l)
                                : r - t(".side-header-v-stroke").width();
                        e = Math.ceil((d - parseInt(l)) / 2);
                    } else if (
                        (t(".sticky-header .side-header").length &&
                            a > dtLocal.themeSettings.mobileHeader.firstSwitchPoint &&
                            !s.hasClass("responsive-off")) ||
                        (t(".sticky-header .side-header").length &&
                            s.hasClass("responsive-off"))
                    ) {
                        d = r <= parseInt(l) ? parseInt(l) : r;
                        e = Math.ceil((r - parseInt(l)) / 2);
                    } else if (
                        ((t(".header-side-left").length && a) ||
                            (t(".header-side-right").length && a)) >
                        dtLocal.themeSettings.mobileHeader.firstSwitchPoint
                    ) {
                        d = a <= parseInt(l) ? parseInt(l) : r - t(".side-header").width();
                        e = Math.ceil((d - parseInt(l)) / 2);
                    } else {
                        d = r <= parseInt(l) ? parseInt(l) : r;
                        e = Math.ceil((r - parseInt(l)) / 2);
                    }
                    t(".sidebar-left").length > 0 || t(".sidebar-right").length > 0
                        ? ((n = t(".content").width()), (e = 0))
                        : (n = t("#main").innerWidth());
                    var c = s.hasClass("rtl") ? "margin-right" : "margin-left";
                    o.css({ width: n, opacity: 1 }),
                        o.css(c, -e),
                        o
                            .find(".full-width-wrap")
                            .css({ width: "", opacity: 1, "padding-left": e }),
                        o.find(".full-width-wrap").css(c, ""),
                        o.find(".ts-wrap").each(function () {
                            var e = t(this).data("thePhotoSlider");
                            void 0 !== e && e.update();
                        });
                });
        }
        ie.on("click", "a.clear-form", function (t) {
            return (
                t.preventDefault(), ie.find('input[type="text"], textarea').val(""), !1
            );
        }),
            ie.on("click", " a.dt-btn.dt-btn-m", function (t) {
                return t.preventDefault(), ie.find("#submit").trigger("click"), !1;
            }),
            t(".full-width-wrap").length > 0 &&
            (dtGlobals.isiOS
                ? i
                    .bind("orientationchange", function () {
                        ne();
                    })
                    .trigger("orientationchange")
                : (i.on("resize", function () {
                    ne();
                }),
                    ne())),
            i.trigger("dt.removeLoading");
        var se = t("#main-slideshow");
        !se.find("> div").length > 0 && se.addClass("empty-slider"),
            /*!-Revolution slider*/
            se.is(":parent") || se.siblings(".masthead").addClass("no-slider"),
            t(".rev_slider_wrapper").length > 0 &&
            (se.find("> .rev_slider_wrapper") && se.addClass("fix rv-slider"),
                (t(".rev_slider_wrapper").hasClass("fullscreen-container") ||
                    t(".rev_slider_wrapper").hasClass("fullwidthbanner-container")) &&
                se.removeClass("fix"));
        /*!-Search*/
        var oe,
            ae,
            re = t(".masthead, .dt-mobile-header"),
            le = t(".popup-search", re);
        if (
            (le.length > 0 &&
                (s.on("click", function (e) {
                    t(e.target).is(".field", le) ||
                        (t(".searchform .submit", re).removeClass("act"),
                            le.removeClass("act"),
                            t(".popup-search-wrap", le)
                                .stop()
                                .animate({ opacity: 0 }, 150, function () {
                                    t(this).css("visibility", "hidden");
                                }),
                            setTimeout(function () {
                                t(".popup-search-wrap", le)
                                    .removeClass("right-overflow bottom-overflow left-overflow")
                                    .css({ right: "", left: "", "max-width": "" });
                            }, 400));
                }),
                    t(".searchform .submit", re).on("click", function (e) {
                        e.preventDefault(), e.stopPropagation();
                        var n = t(this);
                        n.hasClass("act")
                            ? (n.removeClass("act"),
                                n.parents(".mini-search").removeClass("act"),
                                n
                                    .siblings(".popup-search-wrap")
                                    .stop()
                                    .animate({ opacity: 0 }, 150, function () {
                                        t(this).css("visibility", "hidden");
                                    }),
                                setTimeout(function () {
                                    n.siblings(".popup-search-wrap")
                                        .removeClass("right-overflow bottom-overflow left-overflow")
                                        .css({ right: "", left: "", "max-width": "" });
                                }, 400))
                            : (n.addClass("act"),
                                n.parents(".mini-search").addClass("act"),
                                n.parents(".dt-mobile-header").length > 0 &&
                                n
                                    .siblings(".popup-search-wrap")
                                    .css({
                                        top:
                                            n.parents(".mini-search").position().top -
                                            n.siblings(".popup-search-wrap").innerHeight(),
                                    }),
                                n.parents(".searchform").offset().left -
                                n.siblings(".popup-search-wrap").innerWidth() <
                                0 && n.siblings(".popup-search-wrap").addClass("left-overflow"),
                                o.width() -
                                (n.parents(".searchform").offset().left - o.offset().left) -
                                n.siblings(".popup-search-wrap").innerWidth() <
                                0 &&
                                (n.siblings(".popup-search-wrap").addClass("right-overflow"),
                                    n.siblings(".popup-search-wrap").removeClass("left-overflow")),
                                o.width() -
                                (n.parents(".searchform").offset().left - o.offset().left) -
                                n.siblings(".popup-search-wrap").innerWidth() <
                                0 &&
                                n.parents(".searchform").offset().left -
                                n.siblings(".popup-search-wrap").innerWidth() <
                                0 &&
                                n
                                    .siblings(".popup-search-wrap")
                                    .css({ "max-width": n.parents(".searchform").offset().left }),
                                i.height() -
                                (n.siblings(".popup-search-wrap").offset().top -
                                    dtGlobals.winScrollTop) -
                                n.siblings(".popup-search-wrap").innerHeight() <
                                0 &&
                                n.siblings(".popup-search-wrap").addClass("bottom-overflow"),
                                n
                                    .siblings(".popup-search-wrap")
                                    .stop()
                                    .css("visibility", "visible")
                                    .animate({ opacity: 1 }, 150),
                                n
                                    .siblings(".popup-search-wrap")
                                    .find("input.searchform-s")
                                    .focus());
                    })),
                t(".overlay-search").length > 0)
        ) {
            var de = t(".overlay-search .searchform").first().clone();
            t("body").append(
                "<div class='overlay-search-microwidget'><i class='overlay-close icomoon-the7-font-the7-cross-01'></i></div>"
            );
            var ce = t(".overlay-search-microwidget");
            ce.append(de),
                t(".overlay-search").hasClass("default-icon") &&
                ce.addClass("default-icon"),
                t(".mini-search .submit").on("click", function (e) {
                    e.preventDefault(),
                        ce.addClass("open"),
                        t("#page").addClass("overlay-open"),
                        ce.find("input.searchform-s").focus();
                }),
                t(".overlay-close", ce).on("click", function () {
                    t("#page").removeClass("overlay-open"),
                        t(this).parent(ce).removeClass("open");
                });
        }
        /*!-Before After*/
        /*!-Isotope fix for tabs*/
        (t(".twentytwenty-container .preload-me").loaded(
            null,
            function () {
                t(".twentytwenty-container").each(function () {
                    var e = t(this),
                        i =
                            e.attr("data-orientation").length > 0
                                ? e.attr("data-orientation")
                                : "horizontal",
                        n =
                            void 0 !== e.attr("data-offset") &&
                                e.attr("data-offset").length > 0
                                ? e.attr("data-offset")
                                : 0.5,
                        s = !!e.attr("data-navigation");
                    e.twentytwenty({
                        default_offset_pct: n,
                        orientation: i,
                        navigation_follow: s,
                    });
                });
            },
            !0
        ),
            t(".wpb_tabs .iso-container").length > 0) &&
            t(".wpb_tour_tabs_wrapper").each(function () {
                var e = t(this),
                    n = e.parents(".wpb_tabs").find(".iso-container");
                e.tabs({
                    activate: function (t, e) {
                        n.isotope("layout");
                    },
                }),
                    e.find("li").each(function () {
                        t(this).on("click", function () {
                            clearTimeout(undefined),
                                i.trigger("debouncedresize"),
                                t(this)
                                    .parents(".wpb_tabs")
                                    .find(".iso-container")
                                    .isotope("layout");
                        });
                    });
            });
        (t.fn.calcPics = function () {
            return (
                !(t(".instagram-photos").length < 1) &&
                this.each(function () {
                    var e = e || parseInt(t(this).attr("data-image-max-width"));
                    parseInt(t(this).find("> a").css("margin-left"));
                    t(this).find(" > a").css({ "max-width": e, opacity: 1 });
                    var i = t(this),
                        n = i.width(),
                        s = 100 / Math.ceil(n / e);
                    i.find("a").css({ width: s + "%" });
                })
            );
        }),
            t(".instagram-photos").calcPics(),
            t(".st-accordion").each(function () {
                var e = t(this);
                e.find("ul > li > a").on("click", function (i) {
                    i.preventDefault();
                    var n = t(this).next();
                    t(".st-content", e).not(n).slideUp("fast"), n.slideToggle("fast");
                });
            }),
            simple_tooltip(".shortcode-tooltip", "shortcode-tooltip-content"),
            /*!-search widget*/
            t(
                ".widget .searchform .submit, .search-icon, form.searchform:not(.mini-widget-searchform) .submit"
            ).on("click", function (e) {
                return (
                    e.preventDefault(),
                    t(this).closest("form").find("input.searchsubmit").click(),
                    !1
                );
            }),
            (t.fn.animateSkills = function () {
                t(".skill-value", this).each(function () {
                    var e = t(this),
                        i = e.data("width");
                    e.css({ width: i + "%" });
                });
            }),
            dtGlobals.isMobile && t(".skills").animateSkills(),
            /*!-Show share buttons*/
            t(".project-share-overlay.allways-visible-icons .share-button").on(
                "click",
                function (t) {
                    t.preventDefault();
                }
            ),
            dtGlobals.addOnloadEvent(function () {
                t(
                    ".album-share-overlay, .project-share-overlay:not(.allways-visible-icons)"
                ).each(function () {
                    var e = t(this);
                    e.find(".share-button").on("click", function (t) {
                        t.preventDefault();
                    }),
                        e.on("mouseover tap", function (e) {
                            "tap" == e.type && e.stopPropagation();
                            var i = t(this);
                            i.addClass("dt-hovered"),
                                clearTimeout(oe),
                                clearTimeout(ae),
                                (oe = setTimeout(function () {
                                    i.hasClass("dt-hovered") &&
                                        (i.find(".soc-ico a").css("display", "inline-flex"),
                                            i
                                                .find(".soc-ico")
                                                .stop()
                                                .css("visibility", "visible")
                                                .animate({ opacity: 1 }, 200));
                                }, 100));
                        }),
                        e.on("mouseleave ", function (e) {
                            var i = t(this);
                            i.removeClass("dt-hovered"),
                                clearTimeout(oe),
                                clearTimeout(ae),
                                (ae = setTimeout(function () {
                                    i.hasClass("dt-hovered") ||
                                        i
                                            .find(".soc-ico")
                                            .stop()
                                            .animate({ opacity: 0 }, 150, function () {
                                                i.find(".soc-ico a").css("display", "none"),
                                                    t(this).css("visibility", "hidden");
                                            });
                                }, 50));
                        });
                });
            });
        var he = t(".transparent #fancy-header").exists(),
            ue = t(".transparent .page-title").exists();
        t(".transparent .checkout-page-title").exists();
        t.fancyFeaderCalc = function () {
            t(".branding .preload-me").loaded(
                null,
                function () {
                    he &&
                        t(".transparent #fancy-header").css({
                            "padding-top": t(".masthead:not(.side-header)").height(),
                        }),
                        ue &&
                        (t(".transparent .page-title").css({
                            "padding-top": t(".masthead:not(.side-header)").height(),
                        }),
                            t(".transparent .page-title").css("visibility", "visible"));
                },
                !0
            );
        };
        /*!-Paginator*/
        var pe = t('.paginator[role="navigation"]'),
            fe = pe.find("a.dots");
        fe.on("click", function () {
            pe.find("div:hidden").show().find("a").unwrap(), fe.remove();
        }),
            t(".share-buttons a.pinit-marklet").click(function (e) {
                e.preventDefault(), t("#pinmarklet").remove();
                var i = document.createElement("script");
                i.setAttribute("type", "text/javascript"),
                    i.setAttribute("charset", "UTF-8"),
                    i.setAttribute("id", "pinmarklet"),
                    i.setAttribute("async", "async"),
                    i.setAttribute("defer", "defer"),
                    i.setAttribute(
                        "src",
                        "//assets.pinterest.com/js/pinmarklet.js?r=" +
                        99999999 * Math.random()
                    ),
                    document.body.appendChild(i);
            }),
            /*!-Scroll to Top*/
            i.on("debouncedresize", function () {
                (window.innerWidth >
                    dtLocal.themeSettings.mobileHeader.firstSwitchPoint &&
                    !s.hasClass("responsive-off")) ||
                    s.hasClass("responsive-off")
                    ? t(".masthead:not(.side-header):not(.mixed-header)").length > 0
                        ? (dtGlobals.showTopBtn =
                            t(".masthead:not(.side-header):not(.mixed-header)").height() +
                            150)
                        : t(".masthead.side-header-h-stroke").length > 0
                            ? (dtGlobals.showTopBtn = t(".side-header-h-stroke").height() + 150)
                            : (dtGlobals.showTopBtn = 500)
                    : (dtGlobals.showTopBtn = 500);
            }),
            i.scroll(function () {
                dtGlobals.winScrollTop > dtGlobals.showTopBtn
                    ? t(".scroll-top").removeClass("off").addClass("on")
                    : t(".scroll-top").removeClass("on").addClass("off");
            }),
            t(".scroll-top").click(function (t) {
                return t.preventDefault(), $e("up"), !1;
            });
        var me = t(
            ".woocommerce-NoticeGroup-updateOrderReview, .woocommerce-NoticeGroup-checkout"
        );
        !me.length &&
            t("form.checkout").exists() &&
            (me = t("form.checkout").parents(".content").offset().top),
            t(document.body).on("checkout_error", function () {
                t("html, body").animate({ scrollTop: me - De.height() }, "slow");
            }),
            /*!-Custom select*/
            t(
                '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 16 16" style="enable-background:new 0 0 16 16;" xml:space="preserve"><path class="st0" d="M2.5,12c0-0.3,0.2-0.5,0.5-0.5h10c0.3,0,0.5,0.2,0.5,0.5s-0.2,0.5-0.5,0.5H3C2.7,12.5,2.5,12.3,2.5,12z M2.5,8c0-0.3,0.2-0.5,0.5-0.5h10c0.3,0,0.5,0.2,0.5,0.5c0,0.3-0.2,0.5-0.5,0.5H3C2.7,8.5,2.5,8.3,2.5,8z M2.5,4c0-0.3,0.2-0.5,0.5-0.5h10c0.3,0,0.5,0.2,0.5,0.5S13.3,4.5,13,4.5H3C2.7,4.5,2.5,4.3,2.5,4z"/></svg><select aria-label="Dropdown menu"/>'
            ).prependTo("#bottom-bar .mini-nav .menu-select"),
            t("<option />", {
                selected: "selected",
                value: "",
                text: "â€”â€”â€”",
            }).appendTo(".mini-nav .menu-select select"),
            t("#bottom-bar .mini-nav").each(function () {
                var e = t(this),
                    i = e.find("select");
                t("a", e).each(function () {
                    var e = t(this);
                    t("<option />", {
                        value: e.attr("href"),
                        text: e.text(),
                        "data-level": e.attr("data-level"),
                    }).appendTo(i);
                });
            }),
            t(".mini-nav select").change(function () {
                window.location = t(this).find("option:selected").val();
            }),
            t(".mini-nav select option").each(function () {
                var e = t(this),
                    i = window.location.href;
                e.attr("value") == i && e.attr("selected", "selected");
            }),
      /*!-Appearance for custom select*/ t(
                " #bottom-bar .mini-nav select"
            ).each(function () {
                t(this).customSelect();
            }),
            t(
                ".menu-select select, .mini-nav .customSelect1, .vc_pie_chart .vc_pie_wrapper"
            ).css("visibility", "visible"),
            t(".mini-nav option").each(function () {
                var e = t(this),
                    i = e.text(),
                    n = "";
                switch (parseInt(e.attr("data-level"))) {
                    case 1:
                        n = "";
                        break;
                    case 2:
                        n = "â€” ";
                        break;
                    case 3:
                        n = "â€”â€” ";
                        break;
                    case 4:
                        n = "â€”â€”â€” ";
                        break;
                    case 5:
                        n = "â€”â€”â€”â€” ";
                }
                e.text(n + i);
            });
        /*!-Material click for menu and buttons*/
        var ge = navigator.userAgent.match(/iPhone/i) ? "touchstart" : "click";
        if (
            (t(".project-navigation a, .mobile-sticky-header-overlay").bind(
                ge,
                function (t) { }
            ),
                t(function () {
                    (t.fn.clickMaterialEffect = function () {
                        return this.each(function () {
                            var e,
                                i,
                                n,
                                s,
                                o = t(this);
                            0 === o.find(".ink").length &&
                                o.prepend("<span class='ink'></span>"),
                                o.addClass("ripplelink"),
                                (e = o.find(".ink")).removeClass("animate"),
                                e.height() ||
                                e.width() ||
                                ((i = Math.max(t(this).outerWidth(), o.outerHeight())),
                                    e.css({ height: i, width: i })),
                                o.bind("mousedown", function (t) {
                                    clearTimeout(null),
                                        (n = t.pageX - o.offset().left - e.width() / 2),
                                        (s = t.pageY - o.offset().top - e.height() / 2),
                                        e.css({ top: s + "px", left: n + "px" }).addClass("animate");
                                }),
                                o.bind("mouseup mouseleave", function (t) {
                                    clearTimeout(null),
                                        clearTimeout(null),
                                        (o._timer = setTimeout(function () {
                                            e.removeClass("animate");
                                        }, 400));
                                });
                        });
                    }),
                        t(
                            ".rollover.material-click-effect, .post-rollover.material-click-effect, .rollover-video.material-click-effect"
                        ).clickMaterialEffect();
                }),
                !dtGlobals.isMobile)
        ) {
            /*!-parallax initialisation*/
            t(
                ".stripe-parallax-bg, .fancy-parallax-bg, .page-title-parallax-bg"
            ).each(function () {
                var e = t(this),
                    i = e.data("prlx-speed");
                e.parallax("50%", i),
                    e.addClass("parallax-bg-done"),
                    e.css("opacity", "1");
            });
            /*!-Animate fancy header elements*/
            var ve = -1;
            t(
                "#fancy-header .fancy-title:not(.start-animation), #fancy-header .fancy-subtitle:not(.start-animation), #fancy-header .breadcrumbs:not(.start-animation)"
            ).each(function () {
                var e = t(this);
                e.hasClass("start-animation") ||
                    e.hasClass("start-animation-done") ||
                    (e.addClass("start-animation-done"),
                        ve++,
                        setTimeout(function () {
                            e.addClass("start-animation");
                        }, 300 * ve));
            });
        }
        if (
            (jQuery(".wpcf7").each(function () {
                var e = t(this);
                e.on("wpcf7submit", function (t) {
                    e
                        .find(".wpcf7-response-output")
                        .wrapInner("<div class='wpcf7-not-valid-tip-text'></div>")
                        .addClass("run-animation"),
                        setTimeout(function () {
                            e.find(".wpcf7-response-output").removeClass("run-animation");
                        }, 12e3);
                }),
                    e.on("wpcf7invalid", function (t) {
                        setTimeout(function () {
                            e.find(".wpcf7-response-output").wrapInner(
                                "<div class='wpcf7-not-valid-tip-text'></div>"
                            );
                        }, 100);
                    }),
                    e.on("wpcf7mailsent", function (t) {
                        setTimeout(function () {
                            e.find(".wpcf7-response-output")
                                .wrapInner("<div class='wpcf7-valid-tip-text'></div>")
                                .addClass("wpcf7-mail-sent-ok");
                        }, 100),
                            setTimeout(function () {
                                e.find(".wpcf7-response-output").removeClass(
                                    "wpcf7-mail-sent-ok"
                                );
                            }, 12e3);
                    }),
                    e.on("invalid.wpcf7", function (t) {
                        setTimeout(function () {
                            e.find(".wpcf7-validation-errors").wrapInner(
                                "<div class='wpcf7-not-valid-tip-text'></div>"
                            );
                        }, 100);
                    }),
                    e.on("mailsent.wpcf7", function (t) {
                        setTimeout(function () {
                            e.find(".wpcf7-mail-sent-ok").wrapInner(
                                "<div class='wpcf7-valid-tip-text'></div>"
                            );
                        }, 100);
                    });
            }),
                t(".dt-sticky-sidebar").length > 0)
        ) {
            if (Et) var ye = t(".sticky-on");
            else
                ye = t(
                    ".masthead:not(.side-header):not(.side-header-v-stroke) .header-bar"
                );
            if (
                ((Q =
                    !I.exists() ||
                        I.is(":hidden") ||
                        I.hasClass("top-bar-empty") ||
                        I.hasClass("hide-top-bar")
                        ? 0
                        : I.innerHeight()),
                    Bt || Wt)
            )
                var we = t(De).height() + 20;
            else if (dtLocal.themeSettings.floatingHeader.showMenu && xt)
                if (s.hasClass("floating-top-bar"))
                    we = dtLocal.themeSettings.floatingHeader.height + Q + 20;
                else we = dtLocal.themeSettings.floatingHeader.height + 20;
            else if (L.exists()) we = L.find(".header-bar").height() + Q + 20;
            else we = 0;
            new StickySidebar("#sidebar", {
                topSpacing: we,
                bottomSpacing: 20,
                viewportTop: 0,
                containerSelector: ".wf-container-main",
                innerWrapperSelector: ".sidebar-content",
                minWidth: dtLocal.themeSettings.sidebar.switchPoint,
            });
        }
        t("#mphb-booking-details")
            .find(
                ".mphb-booking-details-title, .mphb-check-in-date, .mphb-check-out-date"
            )
            .wrapAll('<div class="mphb-details-sidebar"></div>'),
            t("#mphb-price-details").appendTo(".mphb-details-sidebar"),
            !t(".footer .widget").length > 0 && t(".footer").addClass("empty-footer"),
            dtGlobals.addOnloadEvent(function () {
                t(".the7-elementor-widget:not(.the7-elementor-product-comments)").each(
                    function () {
                        var e = t(this),
                            i = e.find(".stars a");
                        i.length
                            ? (i.length > 5 &&
                                (i.slice(5, i.length).remove(), (i = e.find(".stars a"))),
                                e.find(".stars span").append(i.get().reverse()))
                            : e
                                .find("#rating")
                                .hide()
                                .before(
                                    '<p class="stars">                            <span>                                <a class="star-5" href="#">5</a>                                <a class="star-4" href="#">4</a>                                <a class="star-3" href="#">3</a>                                <a class="star-2" href="#">2</a>                                <a class="star-1" href="#">1</a>                            </span>                        </p>'
                                ),
                            i.on("click", function () {
                                var e = t(this),
                                    i = t(this).closest("#respond").find("#rating"),
                                    n = t(this).closest(".stars");
                                return (
                                    i.val(e.text()),
                                    e.siblings("a").removeClass("active"),
                                    e.addClass("active"),
                                    n.addClass("selected"),
                                    !1
                                );
                            });
                    }
                ),
                    t(".dt-tab-accordion-title").each(function () {
                        var e = t(this);
                        e.parents().hasClass("hide-tab-description") &&
                            !e.parents().hasClass("hide-tab-additional")
                            ? t(
                                "#tab-title-additional_information.dt-tab-accordion-title"
                            ).addClass("first")
                            : (e.parents().hasClass("hide-tab-additional") &&
                                !e.parents().hasClass("hide-tab-description")) ||
                                (e.parents().hasClass("hide-tab-additional") &&
                                    e.parents().hasClass("hide-tab-description"))
                                ? t("#tab-title-reviews.dt-tab-accordion-title").addClass("first")
                                : t("#tab-title-description.dt-tab-accordion-title").addClass(
                                    "first"
                                ),
                            t(".dt-tab-accordion-title.first").next().css("display", "block"),
                            e.on("click", function (e) {
                                var i = t(this),
                                    n = i.next();
                                t(".dt-tab-accordion-title").removeClass("active"),
                                    i.hasClass("active")
                                        ? t(".woocommerce-Tabs-panel").slideUp("fast")
                                        : (i.addClass("active"),
                                            t(".woocommerce-Tabs-panel").not(n).hide(),
                                            Re(i.parent()),
                                            n.slideDown("fast"));
                            });
                    }),
                    t(".the7-elementor-widget.elementor-widget-tabs").each(function () {
                        var e = t(this),
                            i = e.find(".wc-tabs li:visible").first().attr("aria-controls");
                        e.find(".wc-tabs li").removeClass("active"),
                            e.find(".wc-tabs li:visible").first().addClass("active"),
                            "none" !== e.find(".wc-tabs").css("display") &&
                            (e.find(".panel").css("display", "none"),
                                e.find("#" + i).css("display", "block")),
                            window.location.hash &&
                            !t(".hide-tab-eviews").length > 0 &&
                            (e.find(".wc-tabs li").removeClass("active"),
                                e.find(".wc-tabs li.reviews_tab").addClass("active"),
                                e.find(".panel").css("display", "none"),
                                e
                                    .find(".woocommerce-Tabs-panel--reviews")
                                    .css("display", "block")),
                            e.find(".comment-form-rating .stars").length > 1 &&
                            e.find(".comment-respond .stars").not(":first").remove(),
                            e.find(".wc-tabs li").on("click", function () {
                                var i = t(this).attr("aria-controls");
                                t(this).siblings().removeClass("active"),
                                    t(this).addClass("active"),
                                    e.find("> .woocommerce-tabs > .panel").css("display", "none"),
                                    e.find("#" + i).css("display", "block");
                            });
                    });
            });
        var be = t(".elementor-popup-modal .dialog-message");
        e.on("elementor/popup/show", be, function (e, i, n) {
            "undefined" === elementorFrontend ||
                elementorFrontend.isEditMode() ||
                ("yes" == n.getDocumentSettings("the7_scrollbar") &&
                    n.$element.closest(".dialog-message").addClass("the7-custom-scroll")),
                t(document.body).trigger("init_price_filter"),
                n.$element
                    .find(
                        " .dt-sub-menu-display-on_click li.has-children, .dt-sub-menu-display-on_item_click li.has-children"
                    )
                    .each(function () {
                        "undefined" != typeof the7ElementorMenu &&
                            the7Utils.isFunction(the7ElementorMenu) &&
                            t(this).the7ElementorMenu();
                    }),
                n.$element
                    .find(".dt-css-grid .wf-cell img, .menu-item img, .lazy-load")
                    .each(function () {
                        var e = t(this);
                        e.attr("data-src") && e.prop("src", e.attr("data-src")),
                            e.attr("data-srcset") && e.prop("srcset", e.attr("data-srcset")),
                            e.removeAttr("data-src"),
                            e.removeAttr("data-srcset"),
                            e.removeClass("lazy-load"),
                            setTimeout(function () {
                                e.parent().removeClass("layzr-bg");
                            }, 200);
                    });
        }),
            (window.the7GetMasonryColumnsConfig = function (t) {
                var e = t.parent().hasClass("mode-masonry") ? t.parent() : t,
                    i = t.width() - 1,
                    n = {
                        mobile: parseInt(e.attr("data-phone-columns-num")),
                        desktop: parseInt(e.attr("data-desktop-columns-num")),
                        tabletV: parseInt(e.attr("data-v-tablet-columns-num")),
                        tabletH: parseInt(e.attr("data-h-tablet-columns-num")),
                    };
                return (
                    Modernizr.mq("only screen and (max-width:767px)")
                        ? ((singleWidth = Math.floor(i / n.mobile) + "px"),
                            (doubleWidth = 2 * Math.floor(i / n.mobile) + "px"),
                            (columnsNum = n.mobile))
                        : Modernizr.mq("(min-width:768px) and (max-width:991px)")
                            ? ((singleWidth = Math.floor(i / n.tabletV) + "px"),
                                (doubleWidth = 2 * Math.floor(i / n.tabletV) + "px"),
                                (columnsNum = n.tabletV))
                            : Modernizr.mq("(min-width:992px) and (max-width:1199px)")
                                ? ((singleWidth = Math.floor(i / n.tabletH) + "px"),
                                    (doubleWidth = 2 * Math.floor(i / n.tabletH) + "px"),
                                    (columnsNum = n.tabletH))
                                : ((singleWidth = Math.floor(i / n.desktop) + "px"),
                                    (doubleWidth = 2 * Math.floor(i / n.desktop) + "px"),
                                    (columnsNum = n.desktop)),
                    {
                        singleWidth: singleWidth,
                        doubleWidth: doubleWidth,
                        columnsNum: columnsNum,
                    }
                );
            }),
            (t.fn.simpleCalculateColumns = function (t, e, i) {
                var n = parseInt(t.attr("data-width")),
                    s = parseInt(t.attr("data-columns")),
                    o = parseInt(t.attr("data-padding"));
                void 0 === i && (i = "px"),
                    this.calculateColumns(n, s, o, null, null, null, null, i, e);
            }),
            (t.fn.calculateColumns = function (e, i, n, s, o, a, r, l, d) {
                return this.each(function () {
                    var s,
                        o,
                        a,
                        r,
                        c,
                        h = "",
                        u = t(this),
                        p = u,
                        f = u.attr("data-cont-id"),
                        m = t(".cont-id-" + f),
                        g = !1 !== n ? n : 20,
                        v = -g,
                        y = g - 10,
                        w = g - 5;
                    g < 10 && ((y = 0), (w = 0)),
                        0 === g && (v = 0),
                        u.parent().hasClass("products-shortcode") && (y = g),
                        u.parent().hasClass("mode-masonry") &&
                        ((p = p.parent()), (m = m.parent()));
                    var b = m
                        .not(".bg-under-post, .content-bg-on")
                        .hasClass("description-under-image");
                    if (t("#col-style-id-" + f).exists())
                        var C = document.getElementById("col-style-id-" + f);
                    else
                        ((C = document.createElement("style")).id = "col-style-id-" + f),
                            C.appendChild(document.createTextNode("")),
                            document.head.appendChild(C);
                    var _ = t("#col-style-id-" + f);
                    if (
                        ((h = b
                            ? " \t\t\t\t\t\t\t.cont-id-" +
                            f +
                            " { margin: -" +
                            w +
                            "px  -" +
                            g +
                            "px -" +
                            y +
                            "px ; } \t\t\t\t\t\t\t.full-width-wrap .cont-id-" +
                            f +
                            " { margin: " +
                            -w +
                            "px " +
                            g +
                            "px " +
                            -y +
                            "px ; }"
                            : " \t\t\t\t\t\t\t.cont-id-" +
                            f +
                            " { margin: -" +
                            g +
                            "px; } \t\t\t\t\t\t\t.full-width-wrap .cont-id-" +
                            f +
                            " { margin: " +
                            v +
                            "px  " +
                            g +
                            "px; } \t\t\t\t\t\t"),
                            _.html(h),
                            p.hasClass("resize-by-browser-width"))
                    )
                        void 0 === d && (d = the7GetMasonryColumnsConfig),
                            (a = (s = d.call(this, u)).singleWidth),
                            (r = s.doubleWidth),
                            (c = s.columnsNum);
                    else {
                        for (
                            o = u.width() - 1, e = e || 200, i = i || 6;
                            Math.floor(o / i) < e && !(--i <= 1);

                        );
                        "px" === l
                            ? ((a = Math.floor(o / i) + "px"),
                                (r = 2 * Math.floor(o / i) + "px"),
                                (c = i))
                            : ((a = Math.floor(1e5 / i) / 1e3 + "%"),
                                (r = (2 * Math.floor(1e5 / i)) / 1e3 + "%"));
                    }
                    (h += b
                        ? c > 1
                            ? " \t\t\t\t\t\t\t.cont-id-" +
                            f +
                            "  .wf-cell { width: " +
                            a +
                            "; padding: " +
                            w +
                            "px " +
                            g +
                            "px " +
                            y +
                            "px; } \t\t\t\t\t\t\t.cont-id-" +
                            f +
                            "  .wf-cell.double-width { width: " +
                            r +
                            "; } \t\t\t\t\t\t"
                            : " \t\t\t\t\t\t\t.cont-id-" +
                            f +
                            "  .wf-cell { width: " +
                            a +
                            "; padding: " +
                            w +
                            "px " +
                            y +
                            "px " +
                            g +
                            "px; } \t\t\t\t\t\t"
                        : c > 1
                            ? " \t\t\t\t\t\t\t.cont-id-" +
                            f +
                            " .wf-cell { width: " +
                            a +
                            ";  padding: " +
                            g +
                            "px; } \t\t\t\t\t\t\t.cont-id-" +
                            f +
                            " .wf-cell.double-width { width: " +
                            r +
                            "; } \t\t\t\t\t\t"
                            : " \t\t\t\t\t\t\t.cont-id-" +
                            f +
                            " .wf-cell { width: " +
                            a +
                            "; padding: " +
                            g +
                            "px; } \t\t\t\t\t\t"),
                        _.html(h);
                    var x = C.sheet.cssRules.length;
                    C.sheet.insertRule(".webkit-hack { }", x),
                        C.sheet.deleteRule(x),
                        u.trigger("columnsReady");
                });
            }),
            (t.fn.initSlider = function () {
                return this.each(function () {
                    var e = t(this);
                    e.data("width"), e.data("height");
                    e.hasClass("royalReady") ||
                        (e.postTypeScroller(), e.addClass("royalReady"));
                });
            });
        var Ce = Isotope.prototype._positionItem;
        function _e(t, e, i, n) {
            t.find(i).addClass("lazy-load").addClass(n), t.layzrInitialisation();
        }
        (Isotope.prototype._positionItem = function (t, e, i, n) {
            Ce(t, e, i, !0);
        }),
            (t.fn.IsoLayzrInitialisation = function (t) {
                return _e(this, t, "img[class*=iso-]", "iso-item-lazy-load");
            }),
            (t.fn.IsoLayzrJqInitialisation = function (t) {
                return _e(this, t, "img", "thumb-lazy-load-show");
            }),
            (t.fn.layzrBlogInitialisation = function (t) {
                return _e(this, t, "img", "blog-thumb-lazy-load-show");
            }),
            t(
                ".layzr-loading-on .blog-shortcode.jquery-filter.mode-list .visible"
            ).layzrBlogInitialisation();
        var xe = t(".iso-container"),
            Se = t(
                ".iso-grid:not(.jg-container, .iso-container), .blog.layout-grid .wf-container.description-under-image:not(.jg-container, .iso-container), .grid-masonry:not(.iso-container), .shortcode-blog-posts.iso-grid"
            ),
            Ie = xe.add(Se),
            ke = (dtGlobals.isoPreloader = t(
                '<div class=""><div class="dt-posts-preload-activity"></div></div>'
            )
                .appendTo("body")
                .hide());
        Ie.not(".blog-grid-shortcode").addClass("dt-isotope"),
            (window.the7ApplyColumns = function (t, e, n) {
                var s, o;
                e &&
                    e.length &&
                    ((t = t || 0),
                        (s = e.parent().hasClass("mode-masonry") ? e.parent() : e),
                        (o = parseInt(s.attr("data-padding"))),
                        e.addClass("cont-id-" + t).attr("data-cont-id", t),
                        e.simpleCalculateColumns(s, n),
                        o > 10 && e.addClass("mobile-paddings"),
                        i.on("debouncedresize", function () {
                            e.simpleCalculateColumns(s, n),
                                o > 10 && e.addClass("mobile-paddings");
                        }));
            }),
            Ie.exists() &&
            Ie.not(".custom-iso-columns").each(function (e) {
                the7ApplyColumns(e, t(this), the7GetMasonryColumnsConfig);
            }),
            (t.fn.heightHack = function () {
                return this.each(function () {
                    var e,
                        i = t(this).not(".back-image");
                    i.exists() &&
                        (i.hasClass("height-ready") ||
                            i.parents(".testimonial-thumb").exists() ||
                            i.parents(".post-rollover").exists() ||
                            i.parents(".slider-masonry").exists() ||
                            i.parents(".rollover-thumbnails").exists() ||
                            ((e = parseInt(i.attr("width")) / parseInt(i.attr("height"))),
                                i
                                    .parents(
                                        ".testimonial-vcard, .dt-format-gallery, .shortcode-blog-posts.iso-grid "
                                    )
                                    .exists() && i.wrap("<div />"),
                                isNaN(e) && i[0] && (e = i[0].naturalWidth / i[0].naturalHeight),
                                i
                                    .parent()
                                    .not(".img-ratio-wrapper")
                                    .css({
                                        "padding-bottom": 100 / e + "%",
                                        height: 0,
                                        display: "block",
                                    }),
                                i.parents(".dt-team-masonry-shortcode").exists() &&
                                "none" !== i.parent().css("max-width") &&
                                i.parents(".team-media").addClass("apply-max-width"),
                                i.attr("data-ratio", e).addClass("height-ready")));
                });
            }),
            (t.fn.IsoInitialisation = function (e, i, n, s) {
                return this.each(function () {
                    var n = t(this);
                    n.hasClass("iso-item-ready") ||
                        (n.isotope({
                            itemSelector: e,
                            layoutMode: i,
                            stagger: 30,
                            resize: !1,
                            transitionDuration: 0,
                            equalheight: s,
                            hiddenStyle: { opacity: 0 },
                            visibleStyle: { opacity: 1 },
                            masonry: { columnWidth: 1 },
                            getSortData: {
                                date: function (e) {
                                    return t(e).attr("data-date");
                                },
                                name: function (e) {
                                    return t(e).attr("data-name");
                                },
                            },
                            customSorters: { name: window.the7LocaleSensitiveStringsCompare },
                        }),
                            n.addClass("iso-item-ready"));
                });
            }),
            t(".iso-container, .portfolio-grid").each(function () {
                if (t(this).parent().hasClass("mode-masonry")) var e = null;
                else e = t(this);
                t(
                    ".filter:not(.iso-filter):not(.without-isotope):not(.with-ajax) .filter-categories a"
                ).on("click.presscorFilterCategories", function (i) {
                    var n = t(this).attr("data-filter");
                    return null != e && e.isotope({ filter: n }), !1;
                }),
                    t(
                        ".filter:not(.iso-filter):not(.without-isotope):not(.with-ajax) .filter-extras .filter-by a"
                    ).on("click", function (i) {
                        var n = t(this).attr("data-by"),
                            s = t(this)
                                .parents(".filter-extras")
                                .find(".filter-sorting > a.act")
                                .first()
                                .attr("data-sort");
                        return (
                            null != e && e.isotope({ sortBy: n, sortAscending: "asc" == s }),
                            !1
                        );
                    }),
                    t(
                        ".filter:not(.iso-filter):not(.without-isotope):not(.with-ajax) .filter-extras .filter-sorting a"
                    ).on("click", function (i) {
                        var n = t(this).attr("data-sort"),
                            s = t(this)
                                .parents(".filter-extras")
                                .find(".filter-by > a.act")
                                .first()
                                .attr("data-by");
                        return (
                            null != e && e.isotope({ sortBy: s, sortAscending: "asc" == n }),
                            !1
                        );
                    });
            }),
            t(".dt-css-grid .wf-cell.visible").IsoLayzrJqInitialisation(),
            (xe.exists() || Se.exists()) &&
            (ke.fadeIn(50),
                Ie.not(".blog-grid-shortcode").each(function () {
                    var e = t(this),
                        i = e;
                    e.hasClass("mode-masonry") && (i = e.find(".dt-isotope")),
                        i.parent().hasClass("the7-elementor-widget") ||
                        t(".preload-me", i).heightHack(),
                        t(".slider-masonry", i).initSlider(),
                        i.one("columnsReady", function () {
                            if (i.hasClass("iso-container"))
                                i.IsoInitialisation(".iso-item", "masonry", 400);
                            else {
                                var e = !0;
                                (i.parent().hasClass("gradient-overlay-layout-list") ||
                                    i.parent().hasClass("content-rollover-layout-list")) &&
                                    (e = !1),
                                    i.IsoInitialisation(".wf-cell", "fitRows", 400, e);
                            }
                            i.isotope("on", "layoutComplete", function (e) {
                                for (var n = 0; n < e.length; n++) {
                                    e[n], t(this);
                                    i.trigger("IsoReady");
                                }
                            }),
                                i
                                    .parent(
                                        ".content-rollover-layout-list:not(.disable-layout-hover)"
                                    )
                                    .find(".post-entry-wrapper")
                                    .clickOverlayGradient(),
                                i.one("IsoReady", function () {
                                    var t = i;
                                    i.parent().hasClass("jquery-filter") &&
                                        "none" != i.parent().attr("data-pagination-mode") &&
                                        (t = i.find(".wf-cell.visible")),
                                        t.IsoLayzrJqInitialisation(),
                                        setTimeout(function () {
                                            i.isotope("layout");
                                        }, 350);
                                });
                        }),
                        i.on("columnsReady", function () {
                            t(".slider-masonry", i).hasClass("royalReady") &&
                                t(".slider-masonry", i).each(function () {
                                    var e = t(this).parents(".ts-wrap").data("thePhotoSlider");
                                    void 0 !== e && e.update();
                                }),
                                i
                                    .parent(
                                        ".content-rollover-layout-list:not(.disable-layout-hover)"
                                    )
                                    .find(".post-entry-wrapper")
                                    .clickOverlayGradient(),
                                i.isotope("layout");
                        });
                }),
                ke.stop().fadeOut(300)),
      /*!-categories filter*/ (window.the7ApplyGeneralFilterHandlers =
                function (e) {
                    e.exists() &&
                        e.find("> a").on("click", function (e) {
                            var i = t(this);
                            if (void 0 === arguments.callee.dtPreventD) {
                                var n = i.parents(".filter").first();
                                (arguments.callee.dtPreventD = !0),
                                    n.hasClass("without-isotope") &&
                                    (arguments.callee.dtPreventD = n.hasClass("with-ajax"));
                            }
                            e.preventDefault(),
                                i.trigger("mouseleave"),
                                i.hasClass("act") && !i.hasClass("show-all")
                                    ? (e.stopImmediatePropagation(),
                                        i.removeClass("act"),
                                        i.siblings("a.show-all").trigger("click"))
                                    : (i.siblings().removeClass("act"),
                                        i.addClass("act"),
                                        arguments.callee.dtPreventD ||
                                        (window.location.href = i.attr("href")));
                        });
                }),
            (window.the7ApplyGeneralOrderingSwitchHandlers = function (t) {
                if (t.exists()) {
                    t.prev(".act").length > 0
                        ? t.addClass("left-act")
                        : t.next(".act").length > 0
                            ? t.addClass("right-act")
                            : (t.removeClass("right-act"), t.removeClass("left-act"));
                    var e = t.parents(".filter").first();
                    t.on("click", function () {
                        e.hasClass("without-isotope")
                            ? t.hasClass("right-act")
                                ? t.prev("a")[0].click()
                                : t.hasClass("left-act") && t.next("a")[0].click()
                            : t.hasClass("right-act")
                                ? t.prev("a").trigger("click")
                                : t.hasClass("left-act") && t.next("a").trigger("click");
                    });
                }
            }),
            (window.the7ApplyGeneralOrderingSwitchEffects = function (e) {
                if (e.exists()) {
                    var i = t(".filter-switch", e);
                    i.append("<span class='filter-switch-toggle'></span>"),
                        i.each(function () {
                            the7ApplyGeneralOrderingSwitchHandlers(t(this));
                        }),
                        t(".filter-switch .filter-switch-toggle", e).on(
                            "animationend webkitAnimationEnd oanimationend MSAnimationEnd",
                            function (e) {
                                t(this).parent().removeClass("pressed");
                            }
                        ),
                        t(".filter-extras a", e).on(
                            "animationend webkitAnimationEnd oanimationend MSAnimationEnd",
                            function (e) {
                                t(this).removeClass("pressed");
                            }
                        ),
                        Modernizr.touch
                            ? (i.on("touchstart", function (e) {
                                t(".filter-switch").removeClass("pressed"),
                                    t(this).addClass("pressed");
                            }),
                                t(".filter-extras a", e).on("touchstart", function (e) {
                                    t(".filter-extras").removeClass("pressed"),
                                        t(this).parent(".filter-extras").addClass("pressed");
                                }))
                            : (i.on("mousedown", function (e) {
                                t(".filter-switch").removeClass("pressed"),
                                    t(this).addClass("pressed"),
                                    setTimeout(function () {
                                        t(this).removeClass("pressed");
                                    }, 600);
                            }),
                                t(".filter-extras a", e).each(function () {
                                    t(this).on("mousedown", function (e) {
                                        t(".filter-extras").removeClass("pressed"),
                                            t(this).addClass("pressed"),
                                            setTimeout(function () {
                                                t(this).removeClass("pressed");
                                            }, 600);
                                    });
                                })),
                        t(".filter-extras a", e).on("click", function (e) {
                            var n = t(this);
                            if (void 0 === arguments.callee.dtPreventD) {
                                var s = n.parents(".filter").first();
                                (arguments.callee.dtPreventD = !0),
                                    s.hasClass("without-isotope") &&
                                    (arguments.callee.dtPreventD = s.hasClass("with-ajax"));
                            }
                            arguments.callee.dtPreventD && e.preventDefault(),
                                n.siblings().removeClass("act"),
                                n.addClass("act"),
                                i.each(function () {
                                    var e = t(this);
                                    e.prev(n).hasClass("act")
                                        ? (e.addClass("left-act"), e.removeClass("right-act"))
                                        : e.next(n).hasClass("act")
                                            ? (e.addClass("right-act"), e.removeClass("left-act"))
                                            : (e.removeClass("right-act"), e.removeClass("left-act"));
                                });
                        });
                }
            }),
            t(".filter-categories").each(function () {
                the7ApplyGeneralFilterHandlers(t(this));
            }),
            t(".filter").each(function () {
                the7ApplyGeneralOrderingSwitchEffects(t(this));
            }),
            t(
                ".mode-list .filter-categories > a:not(.show-all), .dt-css-grid-wrap .filter-categories > a:not(.show-all)"
            ).each(function () {
                ($this = t(this)),
                    ($dataFiltr = $this.attr("data-filter")),
                    ($newDataFilter = $dataFiltr.substring(1, $dataFiltr.length)),
                    $this.attr("data-filter", $newDataFilter),
                    $this.parents().removeClass("iso-filter");
            }),
            (window.the7ShortcodesFilterConfig = function (t) {
                var e = {},
                    i = t;
                return (
                    t.hasClass("dt-css-grid") && (i = t.parent()),
                    (e.filterControls = i.find(".filter-categories")),
                    (e.pageControls = i.find(".paginator")),
                    (e.sortControls = i.find(".filter-by")),
                    (e.orderControls = i.find(".filter-sorting")),
                    (e.defaultSort = i.find(".filter-by .act").attr("data-by")),
                    (e.defaultOrder = i.find(".filter-sorting .act").attr("data-sort")),
                    (e.paginationMode = i.attr("data-pagination-mode")),
                    (e.pageLimit = i.attr("data-post-limit")),
                    (e.useFilters = !0),
                    (e.useSorting = !0),
                    (e.controlsSelecter = "a"),
                    (e.controlsSelecterChecked = "a.act"),
                    (e.defaultFilter = "*"),
                    (e.selectAll = "*"),
                    (e.loadMoreButtonLabel = dtLocal.moreButtonText.loadMore),
                    (e.customSorters = {
                        name: function (t, e) {
                            return window.the7LocaleSensitiveStringsCompare(
                                t.name.toLowerCase(),
                                e.name.toLowerCase()
                            );
                        },
                    }),
                    e
                );
            }),
            (t.fn.shortcodesFilter = function (e) {
                var n = t(this);
                function s() {
                    if (
                        (n.hasClass("dt-css-grid")
                            ? ($element = n.parent())
                            : ($element = n),
                            $element.length && $element.hasClass("lazy-loading-mode"))
                    ) {
                        var t = $element.find(".button-load-more");
                        if (!t.parent().hasClass("hidden")) {
                            var e = t.offset();
                            e &&
                                i.scrollTop() + i.height() > e.top - 2 * i.height() &&
                                t.trigger("click");
                        }
                    }
                }
                n.Filterade(e),
                    n.on("updateReady", function () {
                        Je(),
                            n
                                .parent(
                                    ".content-rollover-layout-list:not(.disable-layout-hover)"
                                )
                                .find(".post-entry-wrapper")
                                .clickOverlayGradient();
                    }),
                    i.on("scroll", function () {
                        s();
                    }),
                    s();
            }),
            t(
                ".blog-shortcode.mode-list.jquery-filter, .jquery-filter .dt-css-grid:not(.custom-pagination-handler)"
            ).each(function () {
                var e = t(this);
                e.shortcodesFilter(the7ShortcodesFilterConfig(e));
            }),
            (window.the7ApplyMasonryWidgetCSSGridFiltering = function (t) {
                var e;
                t &&
                    t.length &&
                    (((e = the7ShortcodesFilterConfig(t)).pagerClass =
                        "page-numbers filter-item"),
                        (e.previousButtonLabel = "â†"),
                        (e.nextButtonLabel = "â†’"),
                        t.shortcodesFilter(e));
            });
        var Te = t(
            ".content-rollover-layout-list:not(.disable-layout-hover) .dt-css-grid .post-entry-wrapper"
        );
        function ze() {
            var t = 0.01 * window.innerHeight;
            document.documentElement.style.setProperty("--the7-vh", t + "px");
        }
        i
            .on("debouncedresize", function (e) {
                if (
                    (dtGlobals.resizeCounter++,
                        the7Utils.isFunction(t.fn.calcPics) &&
                        t(".instagram-photos").calcPics(),
                        o.hasClass("boxed"))
                ) {
                    var a = o.css("maxWidth"),
                        r = a.indexOf("px") >= 0,
                        l = a.indexOf("%") >= 0;
                    r &&
                        (k.addClass("width-in-pixel"),
                            void 0 !== De && De.addClass("width-in-pixel")),
                        l &&
                        (t(".masthead.full-width:not(.side-header)").css({
                            width: o.width(),
                        }),
                            void 0 !== De &&
                            De.find(".top-bar-bg").length > 0 &&
                            De.find(".top-bar-bg").css({ width: o.width() }),
                            s.hasClass("phantom-sticky") &&
                            t(".top-bar-bg").length > 0 &&
                            t(".top-bar-bg").css({ width: o.width() }));
                }
                var d;
                Te.clickOverlayGradient(),
                    window.innerWidth >=
                    dtLocal.themeSettings.mobileHeader.firstSwitchPoint &&
                    (o.removeClass("show-mobile-header"),
                        o.addClass("closed-mobile-header"),
                        s.removeClass("show-sticky-mobile-header"),
                        s
                            .removeClass("show-overlay-mobile-header")
                            .addClass("closed-overlay-mobile-header"),
                        t(".mobile-sticky-header-overlay").removeClass("active"),
                        t(".dt-mobile-menu-icon").removeClass("active"),
                        n.removeClass("menu-open")),
                    window.innerWidth <=
                        dtLocal.themeSettings.mobileHeader.firstSwitchPoint &&
                        !s.hasClass("responsive-off")
                        ? (t(".masthead").hasClass("masthead-mobile") ||
                            t(".masthead:not(.mixed-header):not(#phantom)").addClass(
                                "masthead-mobile"
                            ),
                            t(".masthead").hasClass("masthead-mobile-header") ||
                            (t(".masthead:not(.side-header):not(#phantom)").addClass(
                                "masthead-mobile-header"
                            ),
                                t(
                                    "body:not(.overlay-navigation):not(.sticky-header) .side-header:not(#phantom)"
                                ).addClass("masthead-mobile-header")),
                            L.exists() &&
                            (L.removeClass("sticky-top-line-on sticky-top-line-on"),
                                (Ht = !1)),
                            t(".mobile-header-scrollbar-wrap").css({
                                "max-width": t(".dt-mobile-header ").width() - 13,
                            }))
                        : (t(".masthead:not(.mixed-header):not(#phantom)").removeClass(
                            "masthead-mobile"
                        ),
                            t(".masthead:not(.side-header):not(#phantom)").removeClass(
                                "masthead-mobile-header"
                            ),
                            t(
                                "body:not(.overlay-navigation):not(.sticky-header) .side-header:not(#phantom)"
                            ).removeClass("masthead-mobile-header"),
                            t(".masthead").hasClass("desktop-side-header") ||
                            t(
                                "body:not(.overlay-navigation):not(.sticky-header) .side-header:not(#phantom)"
                            ).addClass("desktop-side-header")),
                    window.innerWidth <=
                        dtLocal.themeSettings.mobileHeader.firstSwitchPoint &&
                        window.innerWidth >
                        dtLocal.themeSettings.mobileHeader.secondSwitchPoint &&
                        !s.hasClass("responsive-off")
                        ? t(".left-widgets", I).find(".in-top-bar-left").length > 0 ||
                            t(".top-bar .right-widgets").find(".in-top-bar-right").length > 0
                            ? I.removeClass("top-bar-empty")
                            : I.addClass("top-bar-empty")
                        : window.innerWidth <=
                            dtLocal.themeSettings.mobileHeader.secondSwitchPoint &&
                            !s.hasClass("responsive-off")
                            ? t(".left-widgets", I).find(".in-top-bar").length > 0
                                ? I.removeClass("top-bar-empty")
                                : I.addClass("top-bar-empty")
                            : !t(".mini-widgets", I).find(".show-on-desktop").length > 0
                                ? I.addClass("top-bar-empty")
                                : I.removeClass("top-bar-empty"),
                    t(".mini-nav select").trigger("render"),
                    t.fancyFeaderCalc(),
                    t(".dt-default").each(function () {
                        var e = t(this),
                            n = e.attr("data-min-height");
                        t.isNumeric(n)
                            ? e.css({ minHeight: n + "px" })
                            : n
                                ? n.search("%") > 0
                                    ? e.css({ minHeight: i.height() * (parseInt(n) / 100) + "px" })
                                    : e.css({ minHeight: n })
                                : e.css({ minHeight: 0 });
                    }),
                    (d = t(".floating-content")).exists() &&
                    t(".preload-me").loaded(
                        null,
                        function () {
                            var e = d.siblings(".project-wide-col").height(),
                                n = d.height(),
                                s = d.offset(),
                                o = 0;
                            I.length > 0 &&
                                t(".phantom-sticky").length > 0 &&
                                (o = I.height());
                            var a = t(".project-post").offset();
                            i.on("scroll", function () {
                                var t = "0";
                                window.innerWidth > 1050 &&
                                    dtGlobals.winScrollTop + De.height() > s.top &&
                                    (t =
                                        dtGlobals.winScrollTop + De.height() + n + 40 < a.top + e
                                            ? dtGlobals.winScrollTop -
                                            s.top +
                                            De.height() +
                                            5 -
                                            o +
                                            "px)"
                                            : e - n - 40 - o + "px)"),
                                    d.css({ transform: "translateY(" + t + ")" });
                            });
                        },
                        !0
                    );
                var c = t(".boxed");
                c.length > 0 &&
                    t(
                        ".header-side-left.footer-overlap:not(.sticky-header) .boxed .footer, .left-side-line.footer-overlap .boxed .footer"
                    ).css({ right: i.width() - (c.offset().left + c.outerWidth()) }),
                    t(".footer-overlap .footer").css({ opacity: 1 }),
                    t(".mobile-false .footer-overlap .page-inner").css({
                        "min-height": window.innerHeight - t(".footer").innerHeight(),
                        "margin-bottom": t(".footer").innerHeight(),
                    }),
                    t(".mobile-false .footer-overlap .footer").css({
                        bottom:
                            parseInt(s.css("padding-bottom")) +
                            parseInt(s.css("margin-bottom")),
                    });
            })
            .trigger("debouncedresize"),
            t(window).trigger("the7_widget_resize"),
            ze(),
            i.on("the7-resize-height-debounce", ze),
            window.addEventListener("orientationchange", ze);
        var Le = t("html, body"),
            Ee = t(".phantom-sticky"),
            Pe = t(".sticky-top-line"),
            Oe = ((xt = Ee.exists()), Pe.exists()),
            Ae = t(".sticky-mobile-header").exists(),
            Me = xt || Oe,
            De = null;
        ye = null;
        function He() {
            window.innerWidth < dtLocal.themeSettings.mobileHeader.firstSwitchPoint &&
                !s.hasClass("responsive-off")
                ? Ae && (De = t(".masthead-mobile-header"))
                : (De = Me
                    ? t(".masthead")
                    : Ae && !t(".mobile-false").length > 0
                        ? t(".masthead-mobile-header")
                        : t("#phantom"));
            var e = t(".mobile-header-bar");
            e.length > 0 && "none" !== e.css("display")
                ? ((ye = e),
                    Oe &&
                    (ye = t(
                        ".sticky-top-line.masthead-mobile-header .mobile-header-bar"
                    )),
                    (xt || Oe) &&
                    (De =
                        t(".sticky-header .masthead.side-header").length > 0 ||
                            t(".overlay-navigation .masthead.side-header").length > 0
                            ? e.parent(".masthead:not(.side-header)")
                            : e.parent()))
                : ((ye = t(".masthead:not(.side-header):not(.side-header-v-stroke)")),
                    s.hasClass("floating-top-bar") || (ye = ye.find(".header-bar")));
        }
        He();
        var Fe = function (t, e, i, n) {
            void 0 === n && (n = "easeInOutQuad"),
                Le.stop().animate(
                    { scrollTop: t },
                    { duration: e, easing: n, complete: i }
                );
        },
            Be = function () {
                var e = (function () {
                    var t = NaN;
                    try {
                        t = parseInt(s.css("--the7-anchor-scroll-offset"));
                    } catch (t) { }
                    return t;
                })();
                if (!isNaN(e)) return e;
                var i = null,
                    n = 0,
                    o = s.hasClass("overlay-navigation");
                window.innerWidth <
                    dtLocal.themeSettings.mobileHeader.firstSwitchPoint &&
                    !s.hasClass("responsive-off") &&
                    Ae &&
                    (Ct
                        ? (i = t(".masthead-mobile-header .mobile-header-bar"))
                        : Ht
                            ? (i = Pe)
                            : ((i = t(ye, De)),
                                Me &&
                                "solid" === De.css("border-bottom-style") &&
                                (n = parseInt(De.css("border-bottom-width"))))),
                    o
                        ? null == i && Oe && (i = Pe)
                        : null == i &&
                        (i =
                            xt && Et
                                ? s.hasClass("floating-top-bar")
                                    ? t(".masthead")
                                    : t(".header-bar")
                                : Oe
                                    ? t(".masthead").hasClass("mixed-floating-top-bar")
                                        ? Pe
                                        : Pe.find(".header-bar")
                                    : De);
                var a = 0;
                return i && i.length && (a = i.height()), a + n;
            },
            We = function (t, e = 0) {
                return t.offset().top + 1 + e - Be();
            },
            Re = function (e, n, o, a = !1, r = 0) {
                void 0 !== n && "" !== n && (location.hash = n),
                    He(),
                    t(".elementor-owl-carousel-call").each(function () {
                        t(this).the7ElementorOwlCarousel();
                    });
                var l,
                    d = 0,
                    c = s.hasClass("overlay-navigation"),
                    h = "easeInOutQuad";
                a || (d = We(e, r)),
                    (l = void 0 === o ? i.scrollTop() : o.offset().top);
                var u,
                    p = d - l;
                Math.abs(p) > window.innerHeight &&
                    ((u = p > 0 ? d - window.innerHeight : d + window.innerHeight),
                        i.scrollTop(u),
                        (h = "easeOutQuart"));
                t.closeMobileHeader(),
                    c && t.closeSideHeader(),
                    Fe(
                        d,
                        600,
                        function () {
                            if (
                                (c ||
                                    setTimeout(function () {
                                        t.closeSideHeader();
                                    }, 50),
                                    !a)
                            ) {
                                var i = We(e, r);
                                d.toFixed() !== i.toFixed() &&
                                    (!(function (t, e, i, n) {
                                        t.one("animationend", function () {
                                            var s = i(t, n);
                                            s !== e && Fe(s);
                                        });
                                    })(e, i, We, r),
                                        Fe(i));
                            }
                        },
                        h
                    );
            };
        window.the7ScrollToTargetEl = Re;
        var $e = function (e, i, n) {
            if (!e) return !1;
            var s = t("#" + e),
                o = !1;
            if (!s.length) {
                if ("up" !== e) return !1;
                o = !0;
            }
            return Re(s, i, n, o), !0;
        },
            je = function (t) {
                return t.match("^#!")
                    ? t.substring(3)
                    : t.match("^#")
                        ? t.substring(1)
                        : t.substring(t.indexOf("#")).substring(3);
            };
        function Ge(e) {
            e.on("click", function (e) {
                if (
                    !t(e.target).parent().hasClass("next-level-button") &&
                    clickAnchorLink(t(this))
                )
                    return e.preventDefault(), !1;
            });
        }
        dtGlobals.addOnloadEvent(function () {
            var e = window.location.hash,
                i = je(e);
            setTimeout(function () {
                if (i) {
                    t(".menu-item a").parent("li").removeClass("act"),
                        t(".dt-nav-menu a").removeClass("active-item");
                    var n = t(".menu-item a[href='" + e + "']"),
                        s = t(".dt-nav-menu a[href='" + e + "']");
                    n.parent("li").addClass("act"),
                        s.addClass("active-item"),
                        t(".menu-item a[href*='" + e + "']")
                            .parent("li")
                            .addClass("act"),
                        t(".dt-nav-menu a[href*='" + e + "']").addClass("active-item");
                    var o = n.parents("li");
                    if (
                        o.find(
                            ".sub-nav li.act, .sub-menu li.act, .vertical-sub-nav li.act"
                        ).length
                    ) {
                        var a = o.find(" > .sub-nav, .sub-menu, .vertical-sub-nav");
                        o.addClass("open-sub"), a.stop(!0, !0).slideDown(100);
                    }
                    setTimeout(function () {
                        $e(i);
                    }, 300);
                } else {
                    var r = t(".menu-item > a[href='#!/up']");
                    r.length > 0 && r.parent("li").addClass("act");
                }
            }, 300);
        }),
            i.on("the7-resize-width", function () {
                He();
            }),
            /*!-scroll to anchor*/
            (window.clickAnchorLink = function (e) {
                const i = e.attr("href"),
                    n = je(i),
                    s = $e(n, i, e);
                if (
                    (s && t(window).trigger("the7.anchorScrolling", [n, i, e]),
                        e.parents().hasClass("elementor-popup-modal"))
                ) {
                    const t = e
                        .parents(".elementor-location-popup")
                        .attr("data-elementor-id");
                    elementorFrontend.documentsManager.documents[t].getModal().hide();
                }
                return (
                    t(".menu-item a").parent("li").removeClass("act"),
                    t(".dt-nav-menu a").removeClass("active-item"),
                    e.parents("li.menu-item ").addClass("act"),
                    e.parents().hasClass("dt-nav-menu") && e.addClass("active-item"),
                    s
                );
            }),
            s.on(
                "click",
                '.anchor-link[href^="#!"], .anchor-link a[href^="#!"], .logo-box a[href^="#!"], .branding a[href^="#!"], #branding-bottom a[href^="#!"], .mobile-branding a[href^="#!"],  .woocommerce-product-rating a.woocommerce-review-link[href^="#"]',
                function (e) {
                    if (clickAnchorLink(t(this))) return e.preventDefault(), !1;
                }
            ),
            Ge(t('.menu-item > a[href*="#!"]')),
            e.on(
                "elementor/popup/show",
                t(".elementor-popup-modal .dialog-message"),
                function (t, e, i) {
                    Ge(i.$element.find('.menu-item > a[href*="#!"]'));
                }
            );
        be = t(".elementor-popup-modal .dialog-message");
        e.on("elementor/popup/show", be, function (e, i, n) {
            t("#elementor-popup-modal-" + i + " .elementor-location-popup");
            n.$element.find('.menu-item > a[href*="#!"]').on("click", function (e) {
                if (
                    !t(e.target).parent().hasClass("next-level-button") &&
                    clickAnchorLink(t(this))
                )
                    return e.preventDefault(), !1;
            });
        }),
            e.on("elementor/popup/show", function (e, i, n) {
                var s = window.location.hash;
                if (je(s)) {
                    t(".menu-item a").parent("li").removeClass("act"),
                        t(".dt-nav-menu a").removeClass("active-item");
                    var o = t(".menu-item a[href='" + s + "']"),
                        a = t(".dt-nav-menu a[href='" + s + "']");
                    o.parent("li").addClass("act"),
                        a.addClass("active-item"),
                        t(".menu-item a[href*='" + s + "']")
                            .parent("li")
                            .addClass("act"),
                        t(".dt-nav-menu a[href*='" + s + "']").addClass("active-item");
                    var r = o.parents("li");
                    if (
                        r.find(
                            ".sub-nav li.act, .sub-menu li.act, .vertical-sub-nav li.act"
                        ).length
                    ) {
                        var l = r.find(" > .sub-nav, .sub-menu, .vertical-sub-nav");
                        r.addClass("open-sub"), l.stop(!0, !0).slideDown(100);
                    }
                    elementorFrontend.elements.$window.one(
                        "the7.anchorScrolling.elementorPopup",
                        function () {
                            n.getModal() && n.getModal().hide();
                        }
                    );
                } else {
                    var d = t(".menu-item > a[href='#!/up']");
                    d.length > 0 && d.parent("li").addClass("act");
                }
            }),
            e.on("elementor/popup/hide", function () {
                elementorFrontend.elements.$window.off(
                    "the7.anchorScrolling.elementorPopup"
                );
            });
        var Ye = t(".one-page-row div[data-anchor^='#']"),
            Ne = t(
                ".one-page-row .vc_row[id], .one-page-row .vc_section[id], .elementor-element[id], .elementor-menu-anchor[id]"
            ),
            qe = t.merge(Ye, Ne),
            Ue = null;
        function Ve(e) {
            if (
                (t('.menu-item a[href^="#!"]').parents("li").removeClass("act"),
                    t('.dt-nav-menu a[href^="#!"]').removeClass("active-item"),
                    e)
            ) {
                var i = t('.menu-item a[href="' + e + '"]'),
                    n = t('.dt-nav-menu a[href="' + e + '"]');
                i.parents("li").addClass("act"), n.addClass("active-item");
            }
        }
        Ye.length > 0 ? (Ue = Ye.first()) : Ne.length > 0 && (Ue = Ne.first()),
            (Ye = null),
            (Ne = null);
        var Xe = t('.menu-item > a[href="#!/up"]'),
            Ze = s.hasClass("is-scroll"),
            Qe = null;
        function Ke(t, e) {
            var i;
            return (
                t.is(":visible") &&
                dtGlobals.winScrollTop >= Math.floor(t.offset().top - e) &&
                (i = "#!/" + t.attr("id")),
                i
            );
        }
    /*!-set active menu item on scroll*/ function Je() {
            var e = t(".dt-isotope"),
                i = t(
                    ".iso-grid .wf-cell:not(.shown), .dt-css-grid .wf-cell:not(.shown)"
                );
            if ((i.exists() && window.the7ProcessEffects(i), e.exists())) {
                e.each(function () {
                    0;
                    var e = t(this).find(".wf-cell");
                    e.exists() && window.the7ProcessEffects(e);
                });
            } else {
                var n = t(".iso-item:not(.shown)");
                if (!n.exists()) return;
                window.the7ProcessEffects(n);
            }
        }
        i.scroll(function (e) {
            if (!Ze) {
                var i,
                    n = Be();
                qe.each(function () {
                    var e = t(this);
                    e.hasClass("wpb_animate_when_almost_visible") &&
                        e.one(
                            "webkitAnimationEnd oanimationend msAnimationEnd animationend",
                            function (t) {
                                Ve(Ke(e, n));
                            }
                        );
                    var s = Ke(e, n);
                    s && (i = s);
                }),
                    Xe.length > 0 &&
                    null !== Ue &&
                    dtGlobals.winScrollTop < Ue.offset().top - n &&
                    (i = "#!/up"),
                    i !== Qe && ((Qe = i), Ve(i));
            }
        }),
            (t.fn.resetEffects = function (e) {
                return this.each(function () {
                    t(this)
                        .find(".iso-item.shown, .wf-cell.shown")
                        .removeClass("start-animation")
                        .removeClass("animation-triggered")
                        .removeClass("shown");
                });
            });
        var ti = {
            xhr: !1,
            settings: !1,
            launch: function (e) {
                var n = this;
                e && (this.settings = e), this.xhr && this.xhr.abort();
                this.xhr = t.post(
                    e.ajaxurl,
                    {
                        action: "presscore_template_ajax",
                        postID: e.postID,
                        paged: e.paged,
                        targetPage: e.targetPage,
                        term: e.term,
                        orderby: e.orderBy,
                        order: e.order,
                        nonce: e.nonce,
                        visibleItems: e.visibleItems,
                        contentType: e.contentType,
                        pageData: e.pageData,
                        sender: e.sender,
                    },
                    function (s) {
                        if (s.success) {
                            var o = jQuery(s.html),
                                a = e.targetContainer;
                            parseInt(a.attr("data-width")),
                                parseInt(a.attr("data-max-width")),
                                parseInt(a.attr("data-padding"));
                            if (
                                ((isIsotope = "grid" == e.layout || "masonry" == e.layout),
                                    (itemsToDeleteLength = 0),
                                    (trashItems = new Array()),
                                    (sortBy = s.orderby.replace("title", "name")),
                                    (sortAscending = "asc" == s.order.toString()),
                                    s.newNonce && (dtLocal.ajaxNonce = s.newNonce),
                                    void 0 !== s.itemsToDelete &&
                                    (itemsToDeleteLength = s.itemsToDelete.length),
                                    isIsotope && itemsToDeleteLength > 0)
                            ) {
                                for (var r = 0; r < s.itemsToDelete.length; r++)
                                    trashItems.push(
                                        '.wf-cell[data-post-id="' + s.itemsToDelete[r] + '"]'
                                    );
                                a.isotope("remove", a.find(trashItems.join(",")));
                            } else
                                isIsotope ||
                                    ("filter" != e.sender && "paginator" != e.sender) ||
                                    a.find(".wf-cell, article").remove();
                            o.length > 0
                                ? (a.append(o),
                                    (dtGlobals.ajaxContainerItems = a
                                        .find("div.wf-cell, .project-even, .project-odd")
                                        .not(".animation-triggered")),
                                    isIsotope
                                        ? (t(".preload-me", a).heightHack(),
                                            t(".slider-masonry", a).initSlider(),
                                            t(".slider-masonry", a).css("visibility", "visible"),
                                            a.isotope("addItems", o),
                                            "media" != e.contentType
                                                ? a.isotope({
                                                    sortBy: sortBy,
                                                    sortAscending: sortAscending,
                                                })
                                                : a.isotope({ sortBy: "original-order" }),
                                            a.isotope("layout"),
                                            n.init(),
                                            a.IsoLayzrInitialisation(),
                                            a.layzrInitialisation())
                                        : (t(".slider-masonry", a).initSlider(),
                                            t("ul.photoSlider:not(.slider-masonry)").each(
                                                function () {
                                                    t(this).postTypeScroller();
                                                }
                                            ),
                                            t("ul.photoSlider").css("visibility", "visible"),
                                            "jgrid" == e.layout && a.collagePlus(dtGlobals.jGrid),
                                            n.init(),
                                            a.IsoLayzrInitialisation(".mobile-true"),
                                            a.layzrInitialisation()),
                                    void 0 !== e.afterSuccessInit && e.afterSuccessInit(s),
                                    i.trigger("dt.ajax.content.appended"))
                                : isIsotope &&
                                a.isotope({ sortBy: sortBy, sortAscending: sortAscending });
                        }
                        void 0 !== e.afterResponce && e.afterResponce(s), Je();
                    }
                );
            },
            init: function () {
                switch (this.settings.contentType) {
                    case "portfolio":
                        this.initPortfolio();
                        break;
                    case "albums":
                        this.initAlbums();
                        break;
                    case "media":
                        this.initMedia();
                        break;
                    case "blog":
                    case "testimonials":
                        this.basicInit();
                }
            },
            initPortfolio: function () {
                this.basicInit();
            },
            initAlbums: function () {
                this.basicInit();
            },
            initMedia: function () {
                this.basicInit();
            },
            basicInit: function () {
                var e = this.settings.targetContainer;
                t(".dt-pswp-item, .dt-gallery-container a", e).addPhotoswipeWrap(),
                    t(".dt-gallery-container", e).initPhotoswipe(),
                    t(".photoswipe-wrapper", e).initPhotoswipe(),
                    e.photoswipeGallery(".dt-gallery-container.wf-container"),
                    t(
                        ".rollover, .rollover-video, .post-rollover, .rollover-project .show-content",
                        e
                    ).addRollover(),
                    the7Utils.isFunction(t.fn.hoverdir) &&
                    (t(".mobile-false .hover-grid .rollover-project").each(function () {
                        t(this).hoverdir();
                    }),
                        t(".mobile-false .hover-grid-reverse .rollover-project ").each(
                            function () {
                                t(this).hoverdir({ inverse: !0 });
                            }
                        )),
                    t(
                        ".mobile-true .rollover-project a.link.show-content, .hover-style-one article:not(.description-off) .rollover-project > a, .hover-style-two article:not(.description-off) .rollover-project > a, .hover-style-three article:not(.description-off) .rollover-project > a"
                    ).on("click", function (t) {
                        t.preventDefault();
                    }),
                    t(".dt-trigger-first-pswp", e)
                        .not(".pspw-ready")
                        .on("click", function () {
                            var e = t(this).parents("article.post");
                            if (e.length > 0) {
                                var i = e.find("a.dt-pswp-item");
                                i.length > 0 && i.first().trigger("click");
                            }
                            return !1;
                        })
                        .addClass("mfp-ready"),
                    t(".mobile-true .rollover-project").touchNewHover(),
                    the7Utils.isFunction(t.fn.triggerHoverClick) &&
                    t(
                        ".mobile-false .rollover-project:not(.rollover-active) .rollover-content, .buttons-on-img:not(.rollover-active) .rollover-content"
                    ).triggerHoverClick(),
                    the7Utils.isFunction(t.fn.triggerHoverClick) &&
                    t(
                        ".mobile-false .rollover-project.forward-post"
                    ).triggerHoverClick(),
                    the7Utils.isFunction(t.fn.triggerHoverClick) &&
                    t(
                        ".mobile-false .rollover-project.rollover-active, .mobile-false .buttons-on-img.rollover-active"
                    ).followCurentLink(),
                    the7Utils.isFunction(t.fn.triggerAlbumsClick) &&
                    t(
                        ".mobile-false .albums .rollover-project, .mobile-false .albums .buttons-on-img, .mobile-false .archive .type-dt_gallery .buttons-on-img"
                    ).triggerAlbumsClick(),
                    the7Utils.isFunction(t.fn.triggerAlbumsTouch) &&
                    t(
                        ".mobile-true .albums .rollover-project, .mobile-true .albums .buttons-on-img, .mobile-true .archive .type-dt_gallery .buttons-on-img"
                    ).triggerAlbumsTouch(),
                    the7Utils.isFunction(t.fn.triggerPostClick) &&
                    t(
                        ".mobile-false .content-rollover-layout-list:not(.portfolio-shortcode):not(.albums-shortcode) .post, .mobile-false .gradient-overlay-layout-list:not(.portfolio-shortcode):not(.albums-shortcode) .post"
                    ).triggerPostClick(),
                    the7Utils.isFunction(t.fn.touchforwardToPost) &&
                    t(
                        ".mobile-true .rollover-project.forward-post"
                    ).touchforwardToPost(),
                    the7Utils.isFunction(t.fn.touchHoverImage) &&
                    t(".mobile-true .buttons-on-img").touchHoverImage(),
                    t(".hover-scale .rollover-project").scaleInHover(),
                    the7Utils.isFunction(t.fn.addIconToLinks) &&
                    t(".links-container a").addIconToLinks();
            },
        };
        function ei(e) {
            var i = e.find(".filter.with-ajax").first(),
                n = e.find(".wf-container.with-ajax, .articles-list.with-ajax").first(),
                s = i.find(".filter-categories a.act"),
                o = i.find(".filter-by a.act"),
                a = i.find(".filter-sorting a.act"),
                r = parseInt(n.attr("data-cur-page")),
                l = new Array(),
                d =
                    s.length > 0
                        ? s.attr("data-filter").replace(".category-", "").replace("*", "")
                        : "";
            return (
                "0" == d && (d = "none"),
                n.hasClass("dt-isotope") &&
                t(".wf-cell", n).each(function () {
                    l.push(t(this).attr("data-post-id"));
                }),
                {
                    visibleItems: l,
                    postID: dtLocal.postID,
                    paged: r,
                    term: d,
                    orderBy: o.length > 0 ? o.attr("data-by") : "",
                    order: a.length > 0 ? a.attr("data-sort") : "",
                    ajaxurl: dtLocal.ajaxurl,
                    nonce: dtLocal.ajaxNonce,
                    pageData: dtLocal.pageData,
                    layout: dtLocal.pageData.layout,
                    targetContainer: n,
                    isPhone: dtGlobals.isPhone,
                }
            );
        }
        function ii() {
            if (dtGlobals.loadMoreButton && dtGlobals.loadMoreButton.exists()) {
                var t = dtGlobals.loadMoreButton.offset();
                t &&
                    i.scrollTop() > (t.top - i.height()) / 2 &&
                    !dtGlobals.loadMoreButton.hasClass("animate-load") &&
                    dtGlobals.loadMoreButton.trigger("click");
            }
        }
        t("#content").on("click", ".paginator.with-ajax a", function (e) {
            if (
                (e.preventDefault(),
                    !t(e.target).hasClass("dots") && !t(e.target).hasClass("disabled"))
            ) {
                var n = t(this),
                    s = n.closest(".paginator"),
                    o = s.parent(),
                    a = o
                        .find(".wf-container.with-ajax, .articles-list.with-ajax")
                        .first(),
                    r = t(".button-load-more"),
                    l = r.find(".button-caption").text(),
                    d = s.hasClass("paginator-more-button") ? "more" : "paginator",
                    c = "more" == d,
                    h = ei(o),
                    u = c ? h.paged + 1 : n.attr("data-page-num"),
                    p = dtGlobals.isoPreloader;
                if (
                    (r
                        .addClass("animate-load")
                        .find(".button-caption")
                        .text(dtLocal.moreButtonText.loading),
                        p &&
                        !t(".paginator-more-button").length &&
                        dtGlobals.isoPreloader.fadeIn(50),
                        c)
                )
                    t("html, body").scrollTop(i.scrollTop() + 1);
                else {
                    var f = o.find(".filter.with-ajax").first(),
                        m = 44;
                    f.exists() || ((f = a), (m = 50)),
                        t("html, body").animate(
                            { scrollTop: f.offset().top - t("#phantom").height() - m },
                            400
                        );
                }
                ti.launch(
                    t.extend({}, h, {
                        contentType: h.pageData.template,
                        targetPage: u,
                        sender: d,
                        visibleItems: c ? new Array() : h.visibleItems,
                        afterResponce: function (e) {
                            s.length > 0
                                ? (e.paginationHtml
                                    ? s.html(t(e.paginationHtml).html()).show()
                                    : s.html("").hide(),
                                    setTimeout(function () {
                                        t(".button-load-more")
                                            .removeClass("animate-load")
                                            .find(".button-caption")
                                            .text(l);
                                    }, 200))
                                : e.paginationHtml && a.parent().append(t(e.paginationHtml)),
                                s.find(".dots").on("click", function () {
                                    s.find("div:hidden").show().find("a").unwrap(),
                                        t(this).remove();
                                }),
                                a.attr("data-cur-page", e.currentPage),
                                dtGlobals.isoPreloader.stop().fadeOut(300),
                                (dtGlobals.loadMoreButton = t(".button-load-more"));
                        },
                    })
                );
            }
        }),
            t(
                ".filter.with-ajax .filter-categories a, .filter.with-ajax .filter-extras a"
            ).on("click", function (e) {
                e.preventDefault();
                var i = t(this).closest(".filter").parent(),
                    n = i.find(".wf-container.with-ajax").first(),
                    s = i.find(".paginator").first(),
                    o = ei(i),
                    a = dtGlobals.isoPreloader;
                n.resetEffects(),
                    a && dtGlobals.isoPreloader.fadeIn(50),
                    ti.launch(
                        t.extend({}, o, {
                            contentType: o.pageData.template,
                            targetPage: 1,
                            paged: 1,
                            sender: "filter",
                            afterResponce: function (e) {
                                s.length > 0
                                    ? e.paginationHtml
                                        ? s.html(t(e.paginationHtml).html()).show()
                                        : s.html("").hide()
                                    : e.paginationHtml && n.parent().append(t(e.paginationHtml)),
                                    s.find(".dots").on("click", function () {
                                        s.find("div:hidden").show().find("a").unwrap(),
                                            t(this).remove();
                                    }),
                                    n.attr("data-cur-page", e.currentPage),
                                    dtGlobals.isoPreloader.stop().fadeOut(300),
                                    (dtGlobals.loadMoreButton = t(".button-load-more"));
                            },
                        })
                    );
            }),
            void 0 !== dtLocal.themeSettings.lazyLoading &&
            dtLocal.themeSettings.lazyLoading &&
            ((dtGlobals.loadMoreButton = t(".button-load-more")),
                i.on("scroll", function () {
                    ii();
                }),
                ii());
        var ni,
            si =
                ((ni = {}),
                    function (t, e, i) {
                        i || (i = "Don't call this twice without a uniqueId"),
                            ni[i] && clearTimeout(ni[i]),
                            (ni[i] = setTimeout(t, e));
                    });
        i.on("the7-resize-width", function () {
            var e = t(".iso-item, .iso-grid .wf-cell");
            e.addClass("animate-position"),
                si(
                    function () {
                        e.removeClass("animate-position");
                    },
                    2500,
                    ""
                );
        });
        var oi = t(".dt-isotope"),
            ai = t(".iso-item:not(.shown):not(.is-visible)"),
            ri = t(
                ".iso-grid .wf-cell:not(.shown):not(.is-visible), .dt-css-grid .wf-cell:not(.shown):not(.is-visible)"
            );
        (oi.exists() || ai.exists() || ri.exists()) &&
            (setTimeout(function () {
                Je();
            }, 100),
                i.on("scroll", function () {
                    Je();
                }));
        var li = (function () {
            function e(e) {
                this.config = t.extend(
                    {
                        paginatorContainer: null,
                        postLimit: 1,
                        curPage: 1,
                        items: [],
                        filter: null,
                        onPaginate: function () { },
                    },
                    e
                );
            }
            return (
                (e.prototype.setCurPage = function (t) {
                    this.config.curPage = parseInt(t);
                }),
                (e.prototype.getCurPage = function () {
                    return this.config.curPage;
                }),
                (e.prototype.reset = function (t) {
                    (this.config.items = t),
                        this.setCurPage(1),
                        this.appendControls(),
                        this._filterByCurPage();
                }),
                (e.prototype.appendControls = function () { }),
                (e.prototype._filterByCurPage = function () {
                    this.showItem(this.config.items);
                }),
                (e.prototype.hideItem = function (t) {
                    t.removeClass("visible").addClass("hidden").hide();
                }),
                (e.prototype.showItem = function (t) {
                    t.addClass("visible").removeClass("hidden").show();
                }),
                (e.prototype.applyLoadingEffects = function () {
                    this.lazyLoadImages(), Je();
                }),
                (e.prototype.lazyLoadImages = function () {
                    this.config.items &&
                        this.config.items.filter(".visible").IsoLayzrJqInitialisation();
                }),
                (e.prototype.layoutItems = function () {
                    this._filterByCurPage(),
                        this.config.filter &&
                        "function" == typeof this.config.filter.layoutItems &&
                        this.config.filter.layoutItems();
                }),
                e
            );
        })(),
            di = (function () {
                function e(e) {
                    li.call(this, e);
                    (this.config = t.extend(
                        {
                            previousButtonClass: "",
                            previousButtonLabel: "",
                            pagerClass: "",
                            nextButtonClass: "",
                            nextButtonLabel: "",
                            activeClass: "act",
                            pagesToShow: 5,
                        },
                        this.config
                    )),
                        this.appendControls(),
                        t("a.act", this.config.paginatorContainer).trigger(
                            "click.dtPostsPaginationFilter",
                            { onSetup: !0 }
                        );
                }
                return (
                    (e.prototype = new li()),
                    (e.prototype.addEvents = function () {
                        var e = this;
                        t("a", this.config.paginatorContainer)
                            .not(".dots")
                            .on(
                                "click.dtPostsPaginationFilter",
                                { self: this },
                                function (t, i) {
                                    e.config.onPaginate.call(this, t, i);
                                }
                            ),
                            t("a.dots", this.config.paginatorContainer).on(
                                "click.dtPostsPaginationDots",
                                { self: this },
                                function (t) {
                                    t.preventDefault(),
                                        t.data.self.config.paginatorContainer
                                            .find("div:hidden a")
                                            .unwrap(),
                                        t.data.self.config.paginatorContainer
                                            .find("a.dots")
                                            .remove();
                                }
                            );
                    }),
                    (e.prototype.appendControls = function () {
                        var e = this.config.paginatorContainer,
                            i = Math.ceil(this.config.items.length / this.config.postLimit),
                            n = this.config.curPage;
                        if ((e.empty(), i <= 1)) e.addClass("hidden");
                        else {
                            var s, o;
                            e.removeClass("hidden"),
                                1 !== n &&
                                e.prepend(
                                    '<a href="#" class="' +
                                    this.config.previousButtonClass +
                                    '" data-page-num="' +
                                    (n - 1) +
                                    '">' +
                                    this.config.previousButtonLabel +
                                    "</a>"
                                );
                            var a = (5 | this.config.pagesToShow) - 1,
                                r = Math.floor(a / 2),
                                l = Math.ceil(a / 2),
                                d = Math.max(n - r, 1),
                                c = n + l;
                            d <= r && (c = d + a),
                                c > i && ((d = Math.max(i - a, 1)), (c = i));
                            var h = '<a href="javascript:void(0);" class="dots">â€¦</a>',
                                u = t('<div style="display: none;"></div>'),
                                p = t('<div style="display: none;"></div>');
                            for (s = o = 1; 1 <= i ? o <= i : o >= i; s = 1 <= i ? ++o : --o)
                                s < d && 1 != s
                                    ? u.append(
                                        '<a href="#" class="' +
                                        this.config.pagerClass +
                                        '" data-page-num="' +
                                        +s +
                                        '">' +
                                        s +
                                        "</a>"
                                    )
                                    : (s == d && u.children().length && e.append(u).append(t(h)),
                                        s > c && s != i
                                            ? p.append(
                                                '<a href="#" class="' +
                                                this.config.pagerClass +
                                                '" data-page-num="' +
                                                +s +
                                                '">' +
                                                s +
                                                "</a>"
                                            )
                                            : (s == i &&
                                                p.children().length &&
                                                e.append(p).append(t(h)),
                                                e.append(
                                                    '<a href="#" class="' +
                                                    this.config.pagerClass +
                                                    '" data-page-num="' +
                                                    +s +
                                                    '">' +
                                                    s +
                                                    "</a>"
                                                )));
                            n < i &&
                                e.append(
                                    '<a href="#" class="' +
                                    this.config.nextButtonClass +
                                    '" data-page-num="' +
                                    (n + 1) +
                                    '">' +
                                    this.config.nextButtonLabel +
                                    "</a>"
                                ),
                                e
                                    .find('a[data-page-num="' + n + '"]')
                                    .addClass(this.config.activeClass),
                                this.addEvents();
                        }
                    }),
                    (e.prototype._filterByCurPage = function () {
                        var e = this;
                        this.config.items.get().map(function (i, n) {
                            e._showOnCurPage(n + 1) ? e.showItem(t(i)) : e.hideItem(t(i));
                        });
                    }),
                    (e.prototype._showOnCurPage = function (t) {
                        return (
                            this.config.postLimit <= 0 ||
                            (this.config.postLimit * (this.getCurPage() - 1) < t &&
                                t <= this.config.postLimit * this.getCurPage())
                        );
                    }),
                    (e.prototype._setAsActive = function (t) {
                        t.addClass("act").siblings().removeClass("act");
                    }),
                    e
                );
            })(),
            ci = (function () {
                function e(t) {
                    li.call(this, t),
                        this.appendControls(),
                        this.addEvents(),
                        this.layoutItems(),
                        this.applyLoadingEffects();
                }
                return (
                    (e.prototype = new li()),
                    (e.prototype.addEvents = function () {
                        t("a", this.config.paginatorContainer).on(
                            "click.dtPostsPaginationFilter",
                            { self: this },
                            this.config.onPaginate
                        );
                    }),
                    (e.prototype.appendControls = function () {
                        var t = this.config.paginatorContainer,
                            e = Math.ceil(this.config.items.length / this.config.postLimit);
                        this.config.curPage < e
                            ? t.removeClass("hidden")
                            : t.addClass("hidden");
                    }),
                    (e.prototype._filterByCurPage = function () {
                        var e = this,
                            i = e.getCurPage() * e.config.postLimit;
                        this.config.items.get().map(function (n, s) {
                            s < i ? e.showItem(t(n)) : e.hideItem(t(n));
                        });
                    }),
                    e
                );
            })(),
            hi = (function () {
                function e(e) {
                    (this.config = t.extend(
                        {
                            onCategoryFilter: function () { },
                            onOrderFilter: function () { },
                            onOrderByFilter: function () { },
                            categoryContainer: null,
                            orderContainer: null,
                            orderByContainer: null,
                            postsContainer: null,
                            order: "desc",
                            orderBy: "date",
                            curCategory: "*",
                        },
                        e
                    )),
                        this.addEvents(),
                        "*" !== this.config.curCategory && this._filterPosts();
                }
                return (
                    (e.prototype.addEvents = function () {
                        var e = this;
                        this.config.categoryContainer &&
                            t("a", this.config.categoryContainer).on(
                                "click.dtPostsCategoryFilter",
                                { self: this },
                                function (t) {
                                    e.config.onCategoryFilter.call(this, t);
                                }
                            ),
                            this.config.orderContainer &&
                            t("a", this.config.orderContainer).on(
                                "click.dtPostsOrderFilter",
                                { self: this },
                                function (t) {
                                    e.config.onOrderFilter.call(this, t);
                                }
                            ),
                            this.config.orderByContainer &&
                            t("a", this.config.orderByContainer).on(
                                "click.dtPostsOrderByFilter",
                                { self: this },
                                function (t) {
                                    e.config.onOrderByFilter.call(this, t);
                                }
                            );
                    }),
                    (e.prototype.setOrder = function (t) {
                        this.config.order = t;
                    }),
                    (e.prototype.setOrderBy = function (t) {
                        this.config.orderBy = t;
                    }),
                    (e.prototype.setCurCategory = function (t) {
                        this.config.curCategory = t;
                    }),
                    (e.prototype.getFilteredItems = function () {
                        return t(
                            this.config.postsContainer.isotope("getFilteredItemElements")
                        );
                    }),
                    (e.prototype.getItems = function () {
                        return t(this.config.postsContainer.isotope("getItemElements"));
                    }),
                    (e.prototype.layoutItems = function () {
                        this.layout(), this.config.postsContainer.trigger("updateReady");
                    }),
                    (e.prototype.layout = function () {
                        this.config.postsContainer.isotope("layout");
                    }),
                    (e.prototype.scrollToTopOfContainer = function (e, i) {
                        var n = this.config.postsContainer.parent(),
                            s = t(".phantom-sticky").exists(),
                            o = t(".sticky-top-line").exists(),
                            a = n.attr("data-scroll-offset")
                                ? parseInt(n.attr("data-scroll-offset"))
                                : 0;
                        if (s || o) var r = t(".masthead:not(.side-header)").height();
                        else if (
                            t(".phantom-fade").exists() ||
                            t(".phantom-slide").exists()
                        )
                            r = t("#phantom").height();
                        else r = 0;
                        (!n.hasClass("enable-pagination-scroll") &&
                            n.hasClass("the7-elementor-widget")) ||
                            t("html, body").animate(
                                { scrollTop: n.offset().top - r - 50 + a },
                                400,
                                e ? e.bind(i | this) : void 0
                            );
                    }),
                    (e.prototype._filterPosts = function () {
                        this.config.postsContainer &&
                            this.config.postsContainer.isotope({
                                filter: this.config.curCategory,
                                sortAscending: "asc" == this.config.order,
                                sortBy: this.config.orderBy,
                            });
                    }),
                    (e.prototype._setAsActive = function (t) {
                        t.addClass("act").siblings().removeClass("act");
                    }),
                    e
                );
            })(),
            ui = (function () {
                function e(e) {
                    hi.call(this, e);
                    (this.config = t.extend(
                        { showOnCurPage: function () { } },
                        this.config
                    )),
                        (this.items = this.config.postsContainer.find(".wf-cell")),
                        (this.filteredItems = this.items);
                }
                return (
                    (e.prototype = new hi()),
                    (e.prototype.getFilteredItems = function () {
                        return this.filteredItems;
                    }),
                    (e.prototype.getItems = function () {
                        return this.items;
                    }),
                    (e.prototype.layout = function () {
                        var e = this;
                        e.items.css("display", "none");
                        var i = 0,
                            n = [];
                        e.filteredItems.each(function () {
                            e.config.showOnCurPage(++i) &&
                                (t(this).css("display", "block"), n.push(this));
                        }),
                            (n = t(n)),
                            e.config.postsContainer.data("visibleItems", n),
                            e.config.postsContainer.collage({ images: n });
                    }),
                    (e.prototype._filterPosts = function () {
                        var t = this;
                        t.filteredItems = t.items.filter(t.config.curCategory);
                    }),
                    e
                );
            })();
        !(function () {
            function e(t) {
                hi.call(this, t),
                    (this.items = this.config.postsContainer.find(".wf-cell")),
                    (this.filteredItems = this.items);
            }
            (e.prototype = new hi()),
                (e.prototype.getFilteredItems = function () {
                    return this.filteredItems;
                }),
                (e.prototype.getItems = function () {
                    return this.items;
                }),
                (e.prototype.layout = function () { }),
                (e.prototype._filterPosts = function () {
                    this.items.hide(),
                        (this.filteredItems = this._sortItems(
                            this.items.filter(this.config.curCategory)
                        )),
                        this.filteredItems.detach().prependTo(this.config.postsContainer),
                        this.filteredItems.show();
                }),
                (e.prototype._sortItems = function (e) {
                    var i = this.config.orderBy,
                        n = this.config.order,
                        s = t([]);
                    return (
                        (s.$nodesCache = t([])),
                        e.each(function () {
                            var e = t(this);
                            s.push({
                                node: this,
                                $node: e,
                                name: e.attr("data-name"),
                                date: new Date(e.attr("data-date")),
                            });
                        }),
                        "date" === i && "desc" === n
                            ? s.sort(function (t, e) {
                                return e.date - t.date;
                            })
                            : "date" === i && "asc" === n
                                ? s.sort(function (t, e) {
                                    return t.date - e.date;
                                })
                                : "name" === i && "desc" === n
                                    ? s.sort(function (t, e) {
                                        var i = t.name.toLowerCase(),
                                            n = e.name.toLowerCase();
                                        return i > n ? -1 : i < n ? 1 : 0;
                                    })
                                    : "name" === i &&
                                    "asc" === n &&
                                    s.sort(function (t, e) {
                                        var i = t.name.toLowerCase(),
                                            n = e.name.toLowerCase();
                                        return i < n ? -1 : i > n ? 1 : 0;
                                    }),
                        s.each(function () {
                            s.$nodesCache.push(this.node);
                        }),
                        s.$nodesCache
                    );
                });
        })();
        t(".dt-shortcode.with-isotope").each(function () {
            var e = t(this),
                i = e.find(".iso-grid, .iso-container"),
                n = i.hasClass("dt-isotope"),
                s = {
                    postsContainer: i,
                    categoryContainer: e.find(".filter-categories"),
                    curCategory: e.find(".filter-categories a.act").attr("data-filter"),
                };
            if (n) {
                var o = e
                    .find(".filter-extras .filter-sorting a.act")
                    .attr("data-sort");
                o || (o = e.find(".filter-categories").attr("data-default-order"));
                var a = e.find(".filter-extras .filter-by a.act").attr("data-by");
                a || (a = e.find(".filter-categories").attr("data-default-orderby")),
                    t.extend(s, {
                        order: o,
                        orderBy: a,
                        orderByContainer: e.find(".filter-extras .filter-by"),
                        orderContainer: e.find(".filter-extras .filter-sorting"),
                        onCategoryFilter: function (e) {
                            e.preventDefault();
                            var i = t(this),
                                n = e.data.self;
                            n.config.postsContainer.resetEffects(),
                                n._setAsActive(i),
                                n.setCurCategory(i.attr("data-filter")),
                                n._filterPosts(),
                                l.hideItem(n.getItems()),
                                l.reset(n.getFilteredItems()),
                                n.layout(),
                                n.config.postsContainer.IsoLayzrInitialisation(),
                                ii(),
                                Je();
                        },
                        onOrderFilter: function (e) {
                            e.preventDefault();
                            var i = t(this),
                                n = e.data.self;
                            n.config.postsContainer.resetEffects(),
                                n._setAsActive(i),
                                n.setOrder(i.attr("data-sort")),
                                n._filterPosts(),
                                l.hideItem(n.getItems()),
                                l.reset(n.getFilteredItems()),
                                n.layout(),
                                n.config.postsContainer.IsoLayzrInitialisation(),
                                ii(),
                                Je();
                        },
                        onOrderByFilter: function (e) {
                            e.preventDefault();
                            var i = t(this),
                                n = e.data.self;
                            n.config.postsContainer.resetEffects(),
                                n._setAsActive(i),
                                n.setOrderBy(i.attr("data-by")),
                                n._filterPosts(),
                                l.hideItem(n.getItems()),
                                l.reset(n.getFilteredItems()),
                                n.layout(),
                                n.config.postsContainer.IsoLayzrInitialisation(),
                                ii(),
                                Je();
                        },
                    });
                var r = new hi(s),
                    l = new di({
                        previousButtonClass: "nav-prev filter-item",
                        previousButtonLabel: "â†",
                        nextButtonClass: "nav-next filter-item",
                        nextButtonLabel: "â†’",
                        postLimit: i.attr("data-posts-per-page"),
                        curPage: 1,
                        pagesToShow: i.hasClass("show-all-pages") ? 999 : 5,
                        items: r.getFilteredItems(),
                        paginatorContainer: e.find(".paginator"),
                        onPaginate: function (e, i) {
                            e.preventDefault();
                            var n = t(this),
                                s = e.data.self;
                            s._setAsActive(n),
                                s.setCurPage(n.attr("data-page-num")),
                                s._filterByCurPage(),
                                r.layout(),
                                i || (s.appendControls(), r.scrollToTopOfContainer());
                        },
                    });
            } else {
                (r = new ui(s)),
                    (l = new di({
                        previousButtonClass: "nav-prev filter-item",
                        previousButtonLabel: "â†",
                        nextButtonClass: "nav-next filter-item",
                        nextButtonLabel: "â†’",
                        postLimit: i.attr("data-posts-per-page"),
                        curPage: 1,
                        pagesToShow: i.hasClass("show-all-pages") ? 999 : 5,
                        items: r.getFilteredItems(),
                        paginatorContainer: e.find(".paginator"),
                    }));
                (r.config.onCategoryFilter = function (e) {
                    e.preventDefault();
                    var i = t(this),
                        n = e.data.self;
                    n.config.postsContainer.resetEffects(),
                        n._setAsActive(i),
                        n.setCurCategory(i.attr("data-filter")),
                        n._filterPosts(),
                        l.hideItem(n.getItems()),
                        l.reset(n.getFilteredItems()),
                        n.layout(),
                        ii(),
                        Je();
                }),
                    (r.config.showOnCurPage = function (t) {
                        return l._showOnCurPage(t);
                    }),
                    (l.config.onPaginate = function (e, i) {
                        e.preventDefault();
                        var n = t(this),
                            s = e.data.self;
                        s._setAsActive(n),
                            s.setCurPage(n.attr("data-page-num")),
                            s._filterByCurPage(),
                            r.layout(),
                            i || (s.appendControls(), r.scrollToTopOfContainer());
                    }),
                    t("a.act", l.config.paginatorContainer).trigger(
                        "click.dtPostsPaginationFilter",
                        { onSetup: !0 }
                    );
            }
        }),
            (window.the7ApplyMasonryJsFiltering = function (e) {
                var n = e.find(".iso-grid, .iso-container"),
                    s = e.find(".paginator"),
                    o = e.hasClass("lazy-loading-mode"),
                    a = e.find(".filter-extras .filter-sorting a.act").attr("data-sort");
                a || (a = e.find(".filter-categories").attr("data-default-order"));
                var r = e.find(".filter-extras .filter-by a.act").attr("data-by");
                r || (r = e.find(".filter-categories").attr("data-default-orderby")),
                    e.is(".content-rollover-layout-list:not(.disable-layout-hover)") &&
                    n.on("updateReady", function () {
                        t(this)
                            .find(".wf-cell.visible .post-entry-wrapper")
                            .clickOverlayGradient();
                    });
                var l = {
                    order: a,
                    orderBy: r,
                    curCategory: e.find(".filter-categories a.act").attr("data-filter"),
                    postsContainer: n,
                    categoryContainer: e.find(".filter-categories"),
                    orderByContainer: e.find(".filter-extras .filter-by"),
                    orderContainer: e.find(".filter-extras .filter-sorting"),
                    onCategoryFilter: function (e) {
                        e.preventDefault();
                        var i = t(this),
                            n = e.data.self;
                        n.config.postsContainer.resetEffects(),
                            n._setAsActive(i),
                            n.setCurCategory(i.attr("data-filter")),
                            n._filterPosts(),
                            c.hideItem(n.getItems()),
                            c.reset(n.getFilteredItems()),
                            n.layoutItems(),
                            n.config.postsContainer.IsoLayzrInitialisation(),
                            g(),
                            Je();
                    },
                    onOrderFilter: function (e) {
                        e.preventDefault();
                        var i = t(this),
                            n = e.data.self;
                        n.config.postsContainer.resetEffects(),
                            n._setAsActive(i),
                            n.setOrder(i.attr("data-sort")),
                            n._filterPosts(),
                            c.hideItem(n.getItems()),
                            c.reset(n.getFilteredItems()),
                            n.layoutItems(),
                            n.config.postsContainer.IsoLayzrInitialisation(),
                            g(),
                            Je();
                    },
                    onOrderByFilter: function (e) {
                        e.preventDefault();
                        var i = t(this),
                            n = e.data.self;
                        n.config.postsContainer.resetEffects(),
                            n._setAsActive(i),
                            n.setOrderBy(i.attr("data-by")),
                            n._filterPosts(),
                            c.hideItem(n.getItems()),
                            c.reset(n.getFilteredItems()),
                            n.layoutItems(),
                            n.config.postsContainer.IsoLayzrInitialisation(),
                            g(),
                            Je();
                    },
                },
                    d = new hi(l);
                switch (e.attr("data-pagination-mode")) {
                    case "load-more":
                        var c = new ci({
                            postLimit: e.attr("data-post-limit"),
                            curPage: 1,
                            items: d.getFilteredItems(),
                            filter: d,
                            paginatorContainer: s,
                            onPaginate: function (t) {
                                var e = t.data.self;
                                t.preventDefault(),
                                    e.setCurPage(e.getCurPage() + 1),
                                    e.layoutItems(),
                                    e.applyLoadingEffects(),
                                    e.appendControls();
                            },
                        });
                        break;
                    case "pages":
                        var h = "â†",
                            u = "â†’",
                            p = "page";
                        e.is("[class*='the7_elements-']") &&
                            ((h = "â†"), (u = "â†’"), (p = "page-numbers filter-item"));
                        c = new di({
                            previousButtonClass: "nav-prev filter-item",
                            previousButtonLabel: h,
                            nextButtonClass: "nav-next filter-item",
                            nextButtonLabel: u,
                            pagerClass: p,
                            postLimit: e.attr("data-post-limit"),
                            curPage: 1,
                            pagesToShow: e.hasClass("show-all-pages") ? 999 : 5,
                            items: d.getFilteredItems(),
                            filter: d,
                            paginatorContainer: s,
                            onPaginate: function (e, i) {
                                var n = t(this),
                                    s = e.data.self;
                                e.preventDefault(),
                                    s._setAsActive(n),
                                    s.setCurPage(n.attr("data-page-num")),
                                    s.layoutItems(),
                                    i || (s.appendControls(), d.scrollToTopOfContainer()),
                                    s.applyLoadingEffects();
                            },
                        });
                        break;
                    default:
                        c = new li();
                }
                function f() {
                    var t = s.find(".button-load-more"),
                        e = t.offset();
                    s.hasClass("hidden") && m(),
                        e && i.scrollTop() > (e.top - i.height()) / 2 && t.trigger("click");
                }
                function m() {
                    i.off("scroll", f);
                }
                function g() {
                    o && (m(), i.on("scroll", f), f());
                }
                g();
            }),
            t(
                ".mode-masonry.jquery-filter, .mode-grid.jquery-filter:not(.dt-css-grid-wrap)"
            ).one("IsoReady", function () {
                the7ApplyMasonryJsFiltering(t(this));
            }),
            void 0 !== w && (t.fn.owlCarousel = w);
    });
