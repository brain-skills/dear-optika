/*! Skrollex */ ! function a(b, c, d) {
    function e(g, h) { if (!c[g]) { if (!b[g]) { var i = "function" == typeof require && require; if (!h && i) return i(g, !0); if (f) return f(g, !0); throw new Error("Cannot find module '" + g + "'") } var j = c[g] = { exports: {} };
            b[g][0].call(j.exports, function(a) { var c = b[g][1][a]; return e(c ? c : a) }, j, j.exports, a, b, c, d) } return c[g].exports } for (var f = "function" == typeof require && require, g = 0; g < d.length; g++) e(d[g]); return e }({
    1: [function(a, b, c) { "use strict"; var d = jQuery;
        b.exports = function(a, b) { var c = d("html").hasClass("poor-browser"),
                e = d("html").hasClass("no-animations"); return !Modernizr.cssanimations || c || e ? (d(".scroll-in-animation").removeClass("scroll-in-animation"), void d(".scroll-animation").removeClass("scroll-animation")) : (d(".safari i.scroll-in-animation").removeClass("scroll-in-animation"), d(".safari i.scroll-animation").removeClass("scroll-animation"), void a.find(".scroll-in-animation, .scroll-animation").each(function() { var a = d(this),
                    c = a.data("delay"),
                    e = a.data("animation") + " css-animation-show";
                a.removeClass(e); var f = function() { c ? setTimeout(function() { a.removeClass(e) }, c) : a.removeClass(e) },
                    g = function() { c ? setTimeout(function() { a.addClass(e) }, c) : a.addClass(e) },
                    h = g;
                b.players.addPlayer(a, h, f, g) })) } }, {}],
    2: [function(a, b, c) { "use strict"; var d = (jQuery, []);
        d.addPlayer = function(a, b, c, e) { d.push(new function() { var f = !1,
                    g = !1;
                this.$view = a, a.addClass("player").data("player-ind", d.length), this.play = function() { f || (f = !0, g ? e() : (g = !0, b())) }, this.pause = function() { f && (f = !1, c()) } }) }, b.exports = d }, {}],
    3: [function(a, b, c) { "use strict"; var d = jQuery;
        b.exports = function(b) { var c = this,
                e = (a("../tools/tools.js"), a("../app/scroll-animation.js")),
                f = d(window),
                g = (d("html").hasClass("poor-browser"), new e(c, b));
            this.windowTopPos = void 0, this.windowBottomPos = void 0, this.windowH = void 0, this.scroll = function(a) { c.windowH = f.height(), c.windowBottomPos = a + c.windowH, a < b.topNav.state1Top() ? void 0 === c.windowTopPos ? setTimeout(function() { b.topNav.state1() }) : b.topNav.state1() : void 0 === c.windowTopPos ? setTimeout(function() { b.topNav.state2() }) : b.topNav.state2(), c.windowTopPos = a, g.scroll(); for (var d = 0; d < b.players.length; d++) { var e = c.calcPosition(b.players[d].$view);
                    e.visible ? b.players[d].play() : b.players[d].pause() } }, this.calcPosition = function(a) { var b = a.height(),
                    d = a.data("position"),
                    e = d + b; return { top: d, bottom: e, height: b, visible: d < c.windowBottomPos && e > c.windowTopPos } } } }, { "../app/scroll-animation.js": 7, "../tools/tools.js": 12 }],
    4: [function(a, b, c) { "use strict"; var d = jQuery;
        b.exports = function() { var b = (a("../app/app-share.js"), d("html").hasClass("poor-browser")),
                c = d("html").hasClass("no-animations"),
                e = 4e3,
                f = 12e3,
                g = { scale: 1 },
                h = { scale: 1.1 },
                i = [
                    [g, h],
                    [h, g]
                ],
                j = [{ or: "left top", xr: 0, yr: 0 }, { or: "left center", xr: 0, yr: 1 }, { or: "right top", xr: 2, yr: 0 }, { or: "right center", xr: 2, yr: 1 }],
                k = i.length - 1,
                l = j.length - 1,
                m = TWEEN.Easing.Quartic.InOut,
                n = TWEEN.Easing.Linear.None;
            this.run = function(a) {
                function g(b, c) { var o = a.get(b),
                        p = d(o),
                        q = p.data(),
                        r = Math.round(Math.random() * k),
                        s = Math.round(Math.random() * l),
                        t = i[r];
                    q.ssScale = t[0].scale, q.ssOrig = j[s], q.ssOpacity = b !== h || c ? 1 : 0, b !== h || c || new TWEEN.Tween(q).to({ ssOpacity: 1 }, e).easing(m).onComplete(function() { a.each(function() { d(this).data().ssOpacity = 1 }) }).start(), new TWEEN.Tween(q).to({ ssScale: t[1].scale }, f).easing(n).start(), b > 0 ? new TWEEN.Tween({ ssOpacity: 1 }).to({ ssOpacity: 0 }, e).onUpdate(function() { q.ssOpacity = this.ssOpacity }).easing(m).delay(f - e).onStart(function() { g(b - 1) }).start() : new TWEEN.Tween(q).to({}, 0).easing(m).delay(f - e).onStart(function() { g(h) }).start() } if (!(b || window.skrollexConfig.screenshotMode || c)) { var h = a.length - 1;
                    g(h, !0) } } } }, { "../app/app-share.js": 5 }],
    5: [function(a, b, c) { "use strict"; var d = jQuery;
        b.exports = new function() { var a = -1 != navigator.appVersion.indexOf("Windows NT 6.1") || -1 != navigator.appVersion.indexOf("Windows NT 6.0") || -1 != navigator.appVersion.indexOf("Windows NT 5.1") || -1 != navigator.appVersion.indexOf("Windows NT 5.0"),
                b = d("html").hasClass("ie9"),
                c = d("html").hasClass("ie10"),
                e = d("html").hasClass("ie11"),
                f = d("html").hasClass("edge"),
                g = d("html").hasClass("poor-browser"),
                h = d("html").hasClass("mobile"),
                i = function() { return b || c || e && a ? 0 : e ? -.15 : f ? -.15 : g ? 0 : -.25 }();
            this.force3D = h ? !1 : !0, this.parallaxMargin = function(a, b, c) { var d = c - (0 === b ? 0 : a.topNav.state2H); return Math.round(i * d) } } }, {}],
    6: [function(a, b, c) { "use strict"; var d = jQuery;
        b.exports = new function() {
            function b(a) { var b, c, d = a.get(0); if ("img" === d.tagName.toLowerCase()) b = d.width, c = d.height;
                else if (d.naturalWidth) b = d.naturalWidth, c = d.naturalHeight;
                else { var e = a.width();
                    a.css({ width: "", height: "" }), b = a.width(), c = a.height(), a.css({ width: e }) } return { w: b, h: c } } var c, e = a("./app-share.js"),
                f = a("./themes.js"),
                g = a("../animation/slide-show.js"),
                h = new g,
                i = d("html").hasClass("poor-browser"),
                j = d("html").hasClass("no-animations"),
                k = d("html").hasClass("mobile"),
                l = d("html").hasClass("site-decoration-b"),
                m = 60,
                n = d("#top-nav, .page-border, #dot-scroll"),
                o = d("#top-nav"),
                p = o.data("state1-colors"),
                q = o.data("state2-colors"),
                r = d("body"),
                s = d(".view");
            this.prepare = function(a) { if ("file:" !== window.location.protocol || d("body").hasClass("example-page") || d('<div class="file-protocol-alert alert colors-d background-80 heading fade in">	<button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button> Upload files to web server and open template from web server. If template is opened from local file system, some links, functions and examples may work incorrectly.</div>').appendTo("body"), e.force3D === !0 && d("html").addClass("force3d"), d(".wrapper-content, .view").each(function() { var a = d(this),
                            b = i ? a.children(".bg-holder:last") : a.children(".bg-holder");
                        b.each(function() { var a = d(this);
                            a.after('<img alt="' + a.data("alt") + '" class="bg" src="' + a.data("src") + '" />') }) }), d(".bg-holder").remove(), i || j) { var b = d(".wrapper-content>.bg");
                    b.each(function(a) { a === b.length - 1 ? d(this).css("display", "block") : d(this).remove() }), d(".view").each(function() { var a = d(this).children(".bg");
                        a.each(function(a) { 0 === a ? d(this).css("display", "block") : d(this).remove() }) }) } if (k) { var f = d(".wrapper-content>img.bg"),
                        g = f.length > 0 ? f : d(".view>img.bg"); if (g.length > 0) { var h = d(g[0]);
                        d(".view").each(function() { var a = d(this),
                                b = a.children("img.bg");
                            b.length < 1 && h.clone().prependTo(a) }) } d(".wrapper-content>img.bg").remove() } c = d(".bg"), a() }, this.setup = function(a) {
                function b(a) { for (var b = 0; b < f.colors; b++) { var c = "colors-" + String.fromCharCode(65 + b).toLowerCase(); if (a.hasClass(c)) return c } } var c = function(a) { var b = a.css("background-color"); return b.match(/#/i) || b.match(/rgb\(/i) || b.match(/rgba.*,0\)/i) };
                d(".view.section-header").each(function() { var a = d(this),
                        b = a.nextAll(".view").first().children(".fg");
                    b.length > 0 && c(b) && a.children(".fg").addClass("skew-bottom-right") }), d(".view.section-footer").each(function() { var a = d(this),
                        b = a.prevAll(".view").first().children(".fg");
                    b.length > 0 && c(b) && a.children(".fg").addClass("skew-top-right") }), s.find(".fg").filter(".skew-top-right, .skew-top-left, .skew-bottom-left, .skew-bottom-right").each(function() { var a = d(this),
                        e = a.parent(); if (a.hasClass("skew-top-right") || a.hasClass("skew-top-left")) { var f = e.prevAll(".view").first().children(".fg"); if (f.length > 0 && c(f)) { var g = a.hasClass("skew-top-right") ? 1 : 2;
                            d('<div class="skew skew-top-' + (1 === g ? "right" : "left") + '"></div>').appendTo(a).css({ position: "absolute", top: "0px", width: "0px", height: "0px", "border-top-width": 2 === g ? m + "px" : "0px", "border-right-width": "2880px", "border-bottom-width": 1 === g ? m + "px" : "0px", "border-left-width": "0px", "border-style": "solid solid solid dashed", "border-bottom-color": "transparent", "border-left-color": "transparent" }).addClass(b(f)) } } if (a.hasClass("skew-bottom-left") || a.hasClass("skew-bottom-right")) { var h = e.nextAll(".view").first().children(".fg"); if (h.length > 0 && c(h)) { var g = a.hasClass("skew-bottom-left") ? 1 : 2;
                            d('<div class="skew skew-bottom-' + (1 === g ? "left" : "right") + '"></div>').appendTo(a).css({ position: "absolute", bottom: "0px", width: "0px", height: "0px", "border-top-width": 1 === g ? m + "px" : "0px", "border-right-width": "0px", "border-bottom-width": 2 === g ? m + "px" : "0px", "border-left-width": "2880px", "border-style": "solid dashed solid solid", "border-top-color": "transparent", "border-right-color": "transparent" }).addClass(b(h)) } } }), a() }, this.ungated = function() { d(".wrapper-content, .view").each(function() { var a = d(this).children(".bg");
                    a.length > 1 && h.run(a) }) }, this.tick = function() { c.each(function() { var a, b, c, f, g = d(this),
                        h = g.data();
                    void 0 !== h.ssOpacity ? (a = h.ssOpacity, b = h.ssOrig.xr, c = h.ssOrig.yr, f = h.ssOrig.or) : (a = 1, b = 1, c = 1, f = "center center"); var i = h.normalX + h.zoomXDelta * b,
                        j = h.normalY + h.zoomYDelta * c + (void 0 !== h.parallaxY ? h.parallaxY : 0),
                        k = h.normalScale * (void 0 !== h.ssScale ? h.ssScale : 1);
                    Modernizr.csstransforms3d && e.force3D ? g.css({ transform: "translate3d(" + i + "px, " + j + "px, 0px) scale(" + k + ", " + k + ")", opacity: a, "transform-origin": f + " 0px" }) : g.css({ transform: "translate(" + i + "px, " + j + "px) scale(" + k + ", " + k + ")", opacity: a, "transform-origin": f }) }) }, this.buildSizes = function(a) {
                function c(a, c, d, e) { var f = b(a),
                        g = d / c > f.w / f.h ? d / f.w : c / f.h,
                        h = f.w * g,
                        i = f.h * g,
                        j = (h - f.w) / 2,
                        k = (i - f.h) / 2,
                        l = Math.round((d - h) / 2),
                        m = Math.round((e - i) / 2),
                        n = a.data();
                    n.normalScale = g, n.normalX = l, n.normalY = m, n.zoomXDelta = j, n.zoomYDelta = k } var f = d(window),
                    g = f.height(),
                    h = f.width(),
                    i = d("#top-nav:visible"),
                    j = l ? g : g - (i.length > 0 ? a.topNav.state2H : 0),
                    k = d(".page-border.bottom:visible"),
                    m = k.length > 0 ? k.height() : 0;
                d(".full-size, .half-size, .one-third-size").each(function() { var a = d(this),
                        b = parseInt(a.css({ "padding-top": "" }).css("padding-top").replace("px", "")),
                        c = parseInt(a.css({ "padding-bottom": "" }).css("padding-bottom").replace("px", "")),
                        e = l ? j : j - (k.length > 0 ? m : 0),
                        f = Math.ceil(e / 2),
                        g = Math.ceil(e / 3),
                        h = a.hasClass("full-size") ? e : a.hasClass("half-size") ? f : g;
                    a.css({ "padding-top": b + "px", "padding-bottom": c + "px" }), (a.hasClass("stretch-height") || a.hasClass("stretch-full-height")) && a.css({ height: "" }); var i = a.height(); if (h > i) { var n = h - i - b - c;
                        0 > n && (n = 0); var o = Math.round(n / 2),
                            p = n - o,
                            q = b + o,
                            r = c + p;
                        a.css({ "padding-top": q + "px", "padding-bottom": r + "px" }) } }), d(".stretch-height").each(function() { var a = d(this),
                        b = a.parent(),
                        c = b.find(".stretch-height");
                    c.css("height", ""), a.outerWidth() < b.innerWidth() && c.css("height", b.innerHeight() + "px") }), d(".stretch-full-height").each(function() { var a = d(this),
                        b = a.parent(),
                        c = b.find(".stretch-full-height"); if (c.css("height", ""), a.outerWidth() < b.innerWidth()) { var e = b.innerHeight(),
                            f = e > g ? e : g;
                        c.css("height", f + "px") } }), s.each(function(b) { var f = d(this),
                        h = f.find(".fg"),
                        i = h.find(".skew.skew-top-right, .skew.skew-top-left"),
                        j = h.find(".skew.skew-bottom-left, .skew.skew-bottom-right"),
                        k = h.width() + "px";
                    j.css({ "border-left-width": k }), i.css({ "border-right-width": k }); var l = f.height(),
                        m = f.width(),
                        n = function() { var c, d = -1 * l,
                                f = 0,
                                h = g - l,
                                i = g,
                                j = e.parallaxMargin(a, b, d),
                                k = e.parallaxMargin(a, b, f),
                                m = e.parallaxMargin(a, b, h),
                                n = e.parallaxMargin(a, b, i),
                                o = function(a, b) { return b + (a > 0 ? 0 : a) },
                                p = function(a, b) { var c = a + l; return -b - (g > c ? 0 : c - g) },
                                q = 0; return c = o(d, j), c > q && (q = c), c = o(f, k), c > q && (q = c), c = o(h, m), c > q && (q = c), c = o(i, n), c > q && (q = c), c = p(d, j), c > q && (q = c), c = p(f, k), c > q && (q = c), c = p(h, m), c > q && (q = c), c = p(i, n), c > q && (q = c), l + 2 * q }();
                    f.children("img.bg").each(function() { c(d(this), n, m, l) }), f.data("position", f.offset().top) }), d(".view").each(function() { var a = d(this);
                    a.data("position", a.offset().top) }), d(".view>.fg").each(function() { var a = d(this);
                    a.data("position", a.offset().top) }), d(".wrapper-content").children("img.bg").each(function() { c(d(this), g, h, g) }); var n = d(".x40-widget, .footer-bottom").last(); if (n.length > 0) { n.css("padding-bottom", ""); var o = parseFloat(window.getComputedStyle(d(".wrapper-site")[0], null).getPropertyValue("height").replace("px", "")); if (!isNaN(o)) { var p = o - Math.floor(o); if (p > 0) { var q = parseFloat(window.getComputedStyle(n[0], null).getPropertyValue("padding-bottom").replace("px", "")); if (!isNaN(q)) { var r = q + (1 - p);
                                n.css("padding-bottom", r + "px") } } } } }, this.changeSection = function(a, b) { var c = d(b),
                    e = c.data("border-colors");
                e ? (n.removeClass(f.colorClasses), n.addClass(e)) : r.hasClass("state2") && q ? (n.removeClass(f.colorClasses), n.addClass(q)) : p && (n.removeClass(f.colorClasses), n.addClass(p)) } } }, { "../animation/slide-show.js": 4, "./app-share.js": 5, "./themes.js": 8 }],
    7: [function(a, b, c) { "use strict"; var d = jQuery;
        b.exports = function(b, c) { var e = d(".view"),
                f = a("./app-share.js"),
                g = d("html").hasClass("poor-browser");
            this.scroll = function() { g || e.each(function(a) { var e = d(this),
                        g = b.calcPosition(e); if (g.visible) { var h = g.top - b.windowTopPos;
                        e.children(".bg:not(.static)").each(function() { var b = d(this).data();
                            b.parallaxY = f.parallaxMargin(c, a, h) }) } }) } } }, { "./app-share.js": 5 }],
    8: [function(a, b, c) { "use strict";
        b.exports = new function() { var a = this;
            this.colors = 26, this.colorClasses = function() { for (var b = "", c = 0; c < a.colors; c++) { var d = 0 === c ? "" : " ";
                    b += d + "colors-" + String.fromCharCode(65 + c).toLowerCase() } return b }() } }, {}],
    9: [function(a, b, c) {
        ! function() {
            "use strict";

            function a(a) { a.fn.swiper = function(b) { var d; return a(this).each(function() { var a = new c(this, b);
                        d || (d = a) }), d } }
            var b, c = function(a, d) {
                function e(a) { return Math.floor(a) }

                function f() { t.autoplayTimeoutId = setTimeout(function() { t.params.loop ? (t.fixLoop(), t._slideNext(), t.emit("onAutoplay", t)) : t.isEnd ? d.autoplayStopOnLast ? t.stopAutoplay() : (t._slideTo(0), t.emit("onAutoplay", t)) : (t._slideNext(), t.emit("onAutoplay", t)) }, t.params.autoplay) }

                function g(a, c) { var d = b(a.target); if (!d.is(c))
                        if ("string" == typeof c) d = d.parents(c);
                        else if (c.nodeType) { var e; return d.parents().each(function(a, b) { b === c && (e = c) }), e ? c : void 0 } return 0 === d.length ? void 0 : d[0] }

                function h(a, b) { b = b || {}; var c = window.MutationObserver || window.WebkitMutationObserver,
                        d = new c(function(a) { a.forEach(function(a) { t.onResize(!0), t.emit("onObserverUpdate", t, a) }) });
                    d.observe(a, { attributes: "undefined" == typeof b.attributes ? !0 : b.attributes, childList: "undefined" == typeof b.childList ? !0 : b.childList, characterData: "undefined" == typeof b.characterData ? !0 : b.characterData }), t.observers.push(d) }

                function i(a) { a.originalEvent && (a = a.originalEvent); var b = a.keyCode || a.charCode; if (!t.params.allowSwipeToNext && (t.isHorizontal() && 39 === b || !t.isHorizontal() && 40 === b)) return !1; if (!t.params.allowSwipeToPrev && (t.isHorizontal() && 37 === b || !t.isHorizontal() && 38 === b)) return !1; if (!(a.shiftKey || a.altKey || a.ctrlKey || a.metaKey || document.activeElement && document.activeElement.nodeName && ("input" === document.activeElement.nodeName.toLowerCase() || "textarea" === document.activeElement.nodeName.toLowerCase()))) { if (37 === b || 39 === b || 38 === b || 40 === b) { var c = !1; if (t.container.parents(".swiper-slide").length > 0 && 0 === t.container.parents(".swiper-slide-active").length) return; var d = { left: window.pageXOffset, top: window.pageYOffset },
                                e = window.innerWidth,
                                f = window.innerHeight,
                                g = t.container.offset();
                            t.rtl && (g.left = g.left - t.container[0].scrollLeft); for (var h = [
                                    [g.left, g.top],
                                    [g.left + t.width, g.top],
                                    [g.left, g.top + t.height],
                                    [g.left + t.width, g.top + t.height]
                                ], i = 0; i < h.length; i++) { var j = h[i];
                                j[0] >= d.left && j[0] <= d.left + e && j[1] >= d.top && j[1] <= d.top + f && (c = !0) } if (!c) return } t.isHorizontal() ? ((37 === b || 39 === b) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1), (39 === b && !t.rtl || 37 === b && t.rtl) && t.slideNext(), (37 === b && !t.rtl || 39 === b && t.rtl) && t.slidePrev()) : ((38 === b || 40 === b) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1), 40 === b && t.slideNext(), 38 === b && t.slidePrev()) } }

                function j(a) { a.originalEvent && (a = a.originalEvent); var b = t.mousewheel.event,
                        c = 0,
                        d = t.rtl ? -1 : 1; if (a.detail) c = -a.detail;
                    else if ("mousewheel" === b)
                        if (t.params.mousewheelForceToAxis)
                            if (t.isHorizontal()) { if (!(Math.abs(a.wheelDeltaX) > Math.abs(a.wheelDeltaY))) return;
                                c = a.wheelDeltaX * d } else { if (!(Math.abs(a.wheelDeltaY) > Math.abs(a.wheelDeltaX))) return;
                                c = a.wheelDeltaY } else c = Math.abs(a.wheelDeltaX) > Math.abs(a.wheelDeltaY) ? -a.wheelDeltaX * d : -a.wheelDeltaY;
                    else if ("DOMMouseScroll" === b) c = -a.detail;
                    else if ("wheel" === b)
                        if (t.params.mousewheelForceToAxis)
                            if (t.isHorizontal()) { if (!(Math.abs(a.deltaX) > Math.abs(a.deltaY))) return;
                                c = -a.deltaX * d } else { if (!(Math.abs(a.deltaY) > Math.abs(a.deltaX))) return;
                                c = -a.deltaY } else c = Math.abs(a.deltaX) > Math.abs(a.deltaY) ? -a.deltaX * d : -a.deltaY; if (0 !== c) { if (t.params.mousewheelInvert && (c = -c), t.params.freeMode) { var e = t.getWrapperTranslate() + c * t.params.mousewheelSensitivity,
                                f = t.isBeginning,
                                g = t.isEnd; if (e >= t.minTranslate() && (e = t.minTranslate()), e <= t.maxTranslate() && (e = t.maxTranslate()), t.setWrapperTransition(0), t.setWrapperTranslate(e), t.updateProgress(), t.updateActiveIndex(), (!f && t.isBeginning || !g && t.isEnd) && t.updateClasses(), t.params.freeModeSticky ? (clearTimeout(t.mousewheel.timeout), t.mousewheel.timeout = setTimeout(function() { t.slideReset() }, 300)) : t.params.lazyLoading && t.lazy && t.lazy.load(), 0 === e || e === t.maxTranslate()) return } else { if ((new window.Date).getTime() - t.mousewheel.lastScrollTime > 60)
                                if (0 > c)
                                    if (t.isEnd && !t.params.loop || t.animating) { if (t.params.mousewheelReleaseOnEdges) return !0 } else t.slideNext();
                            else if (t.isBeginning && !t.params.loop || t.animating) { if (t.params.mousewheelReleaseOnEdges) return !0 } else t.slidePrev();
                            t.mousewheel.lastScrollTime = (new window.Date).getTime() } return t.params.autoplay && t.stopAutoplay(), a.preventDefault ? a.preventDefault() : a.returnValue = !1, !1 } }

                function k(a, c) { a = b(a); var d, e, f, g = t.rtl ? -1 : 1;
                    d = a.attr("data-swiper-parallax") || "0", e = a.attr("data-swiper-parallax-x"), f = a.attr("data-swiper-parallax-y"), e || f ? (e = e || "0", f = f || "0") : t.isHorizontal() ? (e = d, f = "0") : (f = d, e = "0"), e = e.indexOf("%") >= 0 ? parseInt(e, 10) * c * g + "%" : e * c * g + "px", f = f.indexOf("%") >= 0 ? parseInt(f, 10) * c + "%" : f * c + "px", a.transform("translate3d(" + e + ", " + f + ",0px)") }

                function l(a) { return 0 !== a.indexOf("on") && (a = a[0] !== a[0].toUpperCase() ? "on" + a[0].toUpperCase() + a.substring(1) : "on" + a), a }
                if (!(this instanceof c)) return new c(a, d);
                var m = { direction: "horizontal", touchEventsTarget: "container", initialSlide: 0, speed: 300, autoplay: !1, autoplayDisableOnInteraction: !0, autoplayStopOnLast: !1, iOSEdgeSwipeDetection: !1, iOSEdgeSwipeThreshold: 20, freeMode: !1, freeModeMomentum: !0, freeModeMomentumRatio: 1, freeModeMomentumBounce: !0, freeModeMomentumBounceRatio: 1, freeModeSticky: !1, freeModeMinimumVelocity: .02, autoHeight: !1, setWrapperSize: !1, virtualTranslate: !1, effect: "slide", coverflow: { rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: !0 }, flip: { slideShadows: !0, limitRotation: !0 }, cube: { slideShadows: !0, shadow: !0, shadowOffset: 20, shadowScale: .94 }, fade: { crossFade: !1 }, parallax: !1, scrollbar: null, scrollbarHide: !0, scrollbarDraggable: !1, scrollbarSnapOnRelease: !1, keyboardControl: !1, mousewheelControl: !1, mousewheelReleaseOnEdges: !1, mousewheelInvert: !1, mousewheelForceToAxis: !1, mousewheelSensitivity: 1, hashnav: !1, breakpoints: void 0, spaceBetween: 0, slidesPerView: 1, slidesPerColumn: 1, slidesPerColumnFill: "column", slidesPerGroup: 1, centeredSlides: !1, slidesOffsetBefore: 0, slidesOffsetAfter: 0, roundLengths: !1, touchRatio: 1, touchAngle: 45, simulateTouch: !0, shortSwipes: !0, longSwipes: !0, longSwipesRatio: .5, longSwipesMs: 300, followFinger: !0, onlyExternal: !1, threshold: 0, touchMoveStopPropagation: !0, pagination: null, paginationElement: "span", paginationClickable: !1, paginationHide: !1, paginationBulletRender: null, paginationProgressRender: null, paginationFractionRender: null, paginationCustomRender: null, paginationType: "bullets", resistance: !0, resistanceRatio: .85, nextButton: null, prevButton: null, watchSlidesProgress: !1, watchSlidesVisibility: !1, grabCursor: !1, preventClicks: !0, preventClicksPropagation: !0, slideToClickedSlide: !1, lazyLoading: !1, lazyLoadingInPrevNext: !1, lazyLoadingInPrevNextAmount: 1, lazyLoadingOnTransitionStart: !1, preloadImages: !0, updateOnImagesReady: !0, loop: !1, loopAdditionalSlides: 0, loopedSlides: null, control: void 0, controlInverse: !1, controlBy: "slide", allowSwipeToPrev: !0, allowSwipeToNext: !0, swipeHandler: null, noSwiping: !0, noSwipingClass: "swiper-no-swiping", slideClass: "swiper-slide", slideActiveClass: "swiper-slide-active", slideVisibleClass: "swiper-slide-visible", slideDuplicateClass: "swiper-slide-duplicate", slideNextClass: "swiper-slide-next", slidePrevClass: "swiper-slide-prev", wrapperClass: "swiper-wrapper", bulletClass: "swiper-pagination-bullet", bulletActiveClass: "swiper-pagination-bullet-active", buttonDisabledClass: "swiper-button-disabled", paginationCurrentClass: "swiper-pagination-current", paginationTotalClass: "swiper-pagination-total", paginationHiddenClass: "swiper-pagination-hidden", paginationProgressbarClass: "swiper-pagination-progressbar", observer: !1, observeParents: !1, a11y: !1, prevSlideMessage: "Previous slide", nextSlideMessage: "Next slide", firstSlideMessage: "This is the first slide", lastSlideMessage: "This is the last slide", paginationBulletMessage: "Go to slide {{index}}", runCallbacksOnInit: !0 },
                    n = d && d.virtualTranslate;
                d = d || {};
                var o = {};
                for (var p in d)
                    if ("object" != typeof d[p] || null === d[p] || (d[p].nodeType || d[p] === window || d[p] === document || "undefined" != typeof Dom7 && d[p] instanceof Dom7 || "undefined" != typeof jQuery && d[p] instanceof jQuery)) o[p] = d[p];
                    else { o[p] = {}; for (var q in d[p]) o[p][q] = d[p][q] } for (var r in m)
                    if ("undefined" == typeof d[r]) d[r] = m[r];
                    else if ("object" == typeof d[r])
                    for (var s in m[r]) "undefined" == typeof d[r][s] && (d[r][s] = m[r][s]);
                var t = this;
                if (t.params = d, t.originalParams = o, t.classNames = [], "undefined" != typeof b && "undefined" != typeof Dom7 && (b = Dom7), ("undefined" != typeof b || (b = "undefined" == typeof Dom7 ? window.Dom7 || window.Zepto || window.jQuery : Dom7)) && (t.$ = b, t.currentBreakpoint = void 0, t.getActiveBreakpoint = function() { if (!t.params.breakpoints) return !1; var a, b = !1,
                            c = []; for (a in t.params.breakpoints) t.params.breakpoints.hasOwnProperty(a) && c.push(a);
                        c.sort(function(a, b) { return parseInt(a, 10) > parseInt(b, 10) }); for (var d = 0; d < c.length; d++) a = c[d], a >= window.innerWidth && !b && (b = a); return b || "max" }, t.setBreakpoint = function() { var a = t.getActiveBreakpoint(); if (a && t.currentBreakpoint !== a) { var b = a in t.params.breakpoints ? t.params.breakpoints[a] : t.originalParams; for (var c in b) t.params[c] = b[c];
                            t.currentBreakpoint = a } }, t.params.breakpoints && t.setBreakpoint(), t.container = b(a), 0 !== t.container.length)) {
                    if (t.container.length > 1) return void t.container.each(function() { new c(this, d) });
                    t.container[0].swiper = t, t.container.data("swiper", t), t.classNames.push("swiper-container-" + t.params.direction), t.params.freeMode && t.classNames.push("swiper-container-free-mode"), t.support.flexbox || (t.classNames.push("swiper-container-no-flexbox"), t.params.slidesPerColumn = 1), t.params.autoHeight && t.classNames.push("swiper-container-autoheight"), (t.params.parallax || t.params.watchSlidesVisibility) && (t.params.watchSlidesProgress = !0), ["cube", "coverflow", "flip"].indexOf(t.params.effect) >= 0 && (t.support.transforms3d ? (t.params.watchSlidesProgress = !0, t.classNames.push("swiper-container-3d")) : t.params.effect = "slide"), "slide" !== t.params.effect && t.classNames.push("swiper-container-" + t.params.effect), "cube" === t.params.effect && (t.params.resistanceRatio = 0, t.params.slidesPerView = 1, t.params.slidesPerColumn = 1, t.params.slidesPerGroup = 1, t.params.centeredSlides = !1, t.params.spaceBetween = 0, t.params.virtualTranslate = !0, t.params.setWrapperSize = !1), ("fade" === t.params.effect || "flip" === t.params.effect) && (t.params.slidesPerView = 1, t.params.slidesPerColumn = 1, t.params.slidesPerGroup = 1, t.params.watchSlidesProgress = !0, t.params.spaceBetween = 0, t.params.setWrapperSize = !1, "undefined" == typeof n && (t.params.virtualTranslate = !0)), t.params.grabCursor && t.support.touch && (t.params.grabCursor = !1), t.wrapper = t.container.children("." + t.params.wrapperClass), t.params.pagination && (t.paginationContainer = b(t.params.pagination), "bullets" === t.params.paginationType && t.params.paginationClickable ? t.paginationContainer.addClass("swiper-pagination-clickable") : t.params.paginationClickable = !1, t.paginationContainer.addClass("swiper-pagination-" + t.params.paginationType)), t.isHorizontal = function() { return "horizontal" === t.params.direction }, t.rtl = t.isHorizontal() && ("rtl" === t.container[0].dir.toLowerCase() || "rtl" === t.container.css("direction")), t.rtl && t.classNames.push("swiper-container-rtl"), t.rtl && (t.wrongRTL = "-webkit-box" === t.wrapper.css("display")), t.params.slidesPerColumn > 1 && t.classNames.push("swiper-container-multirow"), t.device.android && t.classNames.push("swiper-container-android"), t.container.addClass(t.classNames.join(" ")), t.translate = 0, t.progress = 0, t.velocity = 0, t.lockSwipeToNext = function() { t.params.allowSwipeToNext = !1 }, t.lockSwipeToPrev = function() { t.params.allowSwipeToPrev = !1 }, t.lockSwipes = function() { t.params.allowSwipeToNext = t.params.allowSwipeToPrev = !1 }, t.unlockSwipeToNext = function() { t.params.allowSwipeToNext = !0 }, t.unlockSwipeToPrev = function() { t.params.allowSwipeToPrev = !0 }, t.unlockSwipes = function() { t.params.allowSwipeToNext = t.params.allowSwipeToPrev = !0 }, t.params.grabCursor && (t.container[0].style.cursor = "move", t.container[0].style.cursor = "-webkit-grab", t.container[0].style.cursor = "-moz-grab", t.container[0].style.cursor = "grab"), t.imagesToLoad = [], t.imagesLoaded = 0, t.loadImage = function(a, b, c, d, e) {
                        function f() { e && e() } var g;
                        a.complete && d ? f() : b ? (g = new window.Image, g.onload = f, g.onerror = f, c && (g.srcset = c), b && (g.src = b)) : f() }, t.preloadImages = function() {
                        function a() { "undefined" != typeof t && null !== t && (void 0 !== t.imagesLoaded && t.imagesLoaded++, t.imagesLoaded === t.imagesToLoad.length && (t.params.updateOnImagesReady && t.update(), t.emit("onImagesReady", t))) } t.imagesToLoad = t.container.find("img"); for (var b = 0; b < t.imagesToLoad.length; b++) t.loadImage(t.imagesToLoad[b], t.imagesToLoad[b].currentSrc || t.imagesToLoad[b].getAttribute("src"), t.imagesToLoad[b].srcset || t.imagesToLoad[b].getAttribute("srcset"), !0, a) }, t.autoplayTimeoutId = void 0, t.autoplaying = !1, t.autoplayPaused = !1, t.startAutoplay = function() { return "undefined" != typeof t.autoplayTimeoutId ? !1 : t.params.autoplay ? t.autoplaying ? !1 : (t.autoplaying = !0, t.emit("onAutoplayStart", t), void f()) : !1 }, t.stopAutoplay = function(a) { t.autoplayTimeoutId && (t.autoplayTimeoutId && clearTimeout(t.autoplayTimeoutId), t.autoplaying = !1, t.autoplayTimeoutId = void 0, t.emit("onAutoplayStop", t)) }, t.pauseAutoplay = function(a) { t.autoplayPaused || (t.autoplayTimeoutId && clearTimeout(t.autoplayTimeoutId), t.autoplayPaused = !0, 0 === a ? (t.autoplayPaused = !1, f()) : t.wrapper.transitionEnd(function() { t && (t.autoplayPaused = !1, t.autoplaying ? f() : t.stopAutoplay()) })) }, t.minTranslate = function() { return -t.snapGrid[0] }, t.maxTranslate = function() { return -t.snapGrid[t.snapGrid.length - 1] }, t.updateAutoHeight = function() { var a = t.slides.eq(t.activeIndex)[0]; if ("undefined" != typeof a) { var b = a.offsetHeight;
                            b && t.wrapper.css("height", b + "px") } }, t.updateContainerSize = function() { var a, b;
                        a = "undefined" != typeof t.params.width ? t.params.width : t.container[0].clientWidth, b = "undefined" != typeof t.params.height ? t.params.height : t.container[0].clientHeight, 0 === a && t.isHorizontal() || 0 === b && !t.isHorizontal() || (a = a - parseInt(t.container.css("padding-left"), 10) - parseInt(t.container.css("padding-right"), 10), b = b - parseInt(t.container.css("padding-top"), 10) - parseInt(t.container.css("padding-bottom"), 10), t.width = a, t.height = b, t.size = t.isHorizontal() ? t.width : t.height) }, t.updateSlidesSize = function() { t.slides = t.wrapper.children("." + t.params.slideClass), t.snapGrid = [], t.slidesGrid = [], t.slidesSizesGrid = []; var a, b = t.params.spaceBetween,
                            c = -t.params.slidesOffsetBefore,
                            d = 0,
                            f = 0; "string" == typeof b && b.indexOf("%") >= 0 && (b = parseFloat(b.replace("%", "")) / 100 * t.size), t.virtualSize = -b, t.rtl ? t.slides.css({ marginLeft: "", marginTop: "" }) : t.slides.css({ marginRight: "", marginBottom: "" }); var g;
                        t.params.slidesPerColumn > 1 && (g = Math.floor(t.slides.length / t.params.slidesPerColumn) === t.slides.length / t.params.slidesPerColumn ? t.slides.length : Math.ceil(t.slides.length / t.params.slidesPerColumn) * t.params.slidesPerColumn, "auto" !== t.params.slidesPerView && "row" === t.params.slidesPerColumnFill && (g = Math.max(g, t.params.slidesPerView * t.params.slidesPerColumn))); var h, i = t.params.slidesPerColumn,
                            j = g / i,
                            k = j - (t.params.slidesPerColumn * j - t.slides.length); for (a = 0; a < t.slides.length; a++) { h = 0; var l = t.slides.eq(a); if (t.params.slidesPerColumn > 1) { var m, n, o; "column" === t.params.slidesPerColumnFill ? (n = Math.floor(a / i), o = a - n * i, (n > k || n === k && o === i - 1) && ++o >= i && (o = 0, n++), m = n + o * g / i, l.css({ "-webkit-box-ordinal-group": m, "-moz-box-ordinal-group": m, "-ms-flex-order": m, "-webkit-order": m, order: m })) : (o = Math.floor(a / j), n = a - o * j), l.css({ "margin-top": 0 !== o && t.params.spaceBetween && t.params.spaceBetween + "px" }).attr("data-swiper-column", n).attr("data-swiper-row", o) } "none" !== l.css("display") && ("auto" === t.params.slidesPerView ? (h = t.isHorizontal() ? l.outerWidth(!0) : l.outerHeight(!0), t.params.roundLengths && (h = e(h))) : (h = (t.size - (t.params.slidesPerView - 1) * b) / t.params.slidesPerView, t.params.roundLengths && (h = e(h)), t.isHorizontal() ? t.slides[a].style.width = h + "px" : t.slides[a].style.height = h + "px"), t.slides[a].swiperSlideSize = h, t.slidesSizesGrid.push(h), t.params.centeredSlides ? (c = c + h / 2 + d / 2 + b, 0 === a && (c = c - t.size / 2 - b), Math.abs(c) < .001 && (c = 0), f % t.params.slidesPerGroup === 0 && t.snapGrid.push(c), t.slidesGrid.push(c)) : (f % t.params.slidesPerGroup === 0 && t.snapGrid.push(c), t.slidesGrid.push(c), c = c + h + b), t.virtualSize += h + b, d = h, f++) } t.virtualSize = Math.max(t.virtualSize, t.size) + t.params.slidesOffsetAfter; var p; if (t.rtl && t.wrongRTL && ("slide" === t.params.effect || "coverflow" === t.params.effect) && t.wrapper.css({ width: t.virtualSize + t.params.spaceBetween + "px" }), (!t.support.flexbox || t.params.setWrapperSize) && (t.isHorizontal() ? t.wrapper.css({ width: t.virtualSize + t.params.spaceBetween + "px" }) : t.wrapper.css({ height: t.virtualSize + t.params.spaceBetween + "px" })), t.params.slidesPerColumn > 1 && (t.virtualSize = (h + t.params.spaceBetween) * g, t.virtualSize = Math.ceil(t.virtualSize / t.params.slidesPerColumn) - t.params.spaceBetween, t.wrapper.css({ width: t.virtualSize + t.params.spaceBetween + "px" }), t.params.centeredSlides)) { for (p = [], a = 0; a < t.snapGrid.length; a++) t.snapGrid[a] < t.virtualSize + t.snapGrid[0] && p.push(t.snapGrid[a]);
                            t.snapGrid = p } if (!t.params.centeredSlides) { for (p = [], a = 0; a < t.snapGrid.length; a++) t.snapGrid[a] <= t.virtualSize - t.size && p.push(t.snapGrid[a]);
                            t.snapGrid = p, Math.floor(t.virtualSize - t.size) > Math.floor(t.snapGrid[t.snapGrid.length - 1]) && t.snapGrid.push(t.virtualSize - t.size) } 0 === t.snapGrid.length && (t.snapGrid = [0]), 0 !== t.params.spaceBetween && (t.isHorizontal() ? t.rtl ? t.slides.css({ marginLeft: b + "px" }) : t.slides.css({ marginRight: b + "px" }) : t.slides.css({ marginBottom: b + "px" })), t.params.watchSlidesProgress && t.updateSlidesOffset() }, t.updateSlidesOffset = function() { for (var a = 0; a < t.slides.length; a++) t.slides[a].swiperSlideOffset = t.isHorizontal() ? t.slides[a].offsetLeft : t.slides[a].offsetTop }, t.updateSlidesProgress = function(a) { if ("undefined" == typeof a && (a = t.translate || 0), 0 !== t.slides.length) { "undefined" == typeof t.slides[0].swiperSlideOffset && t.updateSlidesOffset(); var b = -a;
                            t.rtl && (b = a), t.slides.removeClass(t.params.slideVisibleClass); for (var c = 0; c < t.slides.length; c++) { var d = t.slides[c],
                                    e = (b - d.swiperSlideOffset) / (d.swiperSlideSize + t.params.spaceBetween); if (t.params.watchSlidesVisibility) { var f = -(b - d.swiperSlideOffset),
                                        g = f + t.slidesSizesGrid[c],
                                        h = f >= 0 && f < t.size || g > 0 && g <= t.size || 0 >= f && g >= t.size;
                                    h && t.slides.eq(c).addClass(t.params.slideVisibleClass) } d.progress = t.rtl ? -e : e } } }, t.updateProgress = function(a) { "undefined" == typeof a && (a = t.translate || 0); var b = t.maxTranslate() - t.minTranslate(),
                            c = t.isBeginning,
                            d = t.isEnd;
                        0 === b ? (t.progress = 0, t.isBeginning = t.isEnd = !0) : (t.progress = (a - t.minTranslate()) / b, t.isBeginning = t.progress <= 0, t.isEnd = t.progress >= 1), t.isBeginning && !c && t.emit("onReachBeginning", t), t.isEnd && !d && t.emit("onReachEnd", t), t.params.watchSlidesProgress && t.updateSlidesProgress(a), t.emit("onProgress", t, t.progress) }, t.updateActiveIndex = function() { var a, b, c, d = t.rtl ? t.translate : -t.translate; for (b = 0; b < t.slidesGrid.length; b++) "undefined" != typeof t.slidesGrid[b + 1] ? d >= t.slidesGrid[b] && d < t.slidesGrid[b + 1] - (t.slidesGrid[b + 1] - t.slidesGrid[b]) / 2 ? a = b : d >= t.slidesGrid[b] && d < t.slidesGrid[b + 1] && (a = b + 1) : d >= t.slidesGrid[b] && (a = b);
                        (0 > a || "undefined" == typeof a) && (a = 0), c = Math.floor(a / t.params.slidesPerGroup), c >= t.snapGrid.length && (c = t.snapGrid.length - 1), a !== t.activeIndex && (t.snapIndex = c, t.previousIndex = t.activeIndex, t.activeIndex = a, t.updateClasses()) }, t.updateClasses = function() {
                        t.slides.removeClass(t.params.slideActiveClass + " " + t.params.slideNextClass + " " + t.params.slidePrevClass);
                        var a = t.slides.eq(t.activeIndex);
                        if (a.addClass(t.params.slideActiveClass), a.next("." + t.params.slideClass).addClass(t.params.slideNextClass), a.prev("." + t.params.slideClass).addClass(t.params.slidePrevClass), t.paginationContainer && t.paginationContainer.length > 0) {
                            var c, d = t.params.loop ? Math.ceil((t.slides.length - 2 * t.loopedSlides) / t.params.slidesPerGroup) : t.snapGrid.length;
                            if (t.params.loop ? (c = Math.ceil(t.activeIndex - t.loopedSlides) / t.params.slidesPerGroup, c > t.slides.length - 1 - 2 * t.loopedSlides && (c -= t.slides.length - 2 * t.loopedSlides),
                                    c > d - 1 && (c -= d), 0 > c && "bullets" !== t.params.paginationType && (c = d + c)) : c = "undefined" != typeof t.snapIndex ? t.snapIndex : t.activeIndex || 0, "bullets" === t.params.paginationType && t.bullets && t.bullets.length > 0 && (t.bullets.removeClass(t.params.bulletActiveClass), t.paginationContainer.length > 1 ? t.bullets.each(function() { b(this).index() === c && b(this).addClass(t.params.bulletActiveClass) }) : t.bullets.eq(c).addClass(t.params.bulletActiveClass)), "fraction" === t.params.paginationType && (t.paginationContainer.find("." + t.params.paginationCurrentClass).text(c + 1), t.paginationContainer.find("." + t.params.paginationTotalClass).text(d)), "progress" === t.params.paginationType) { var e = (c + 1) / d,
                                    f = e,
                                    g = 1;
                                t.isHorizontal() || (g = e, f = 1), t.paginationContainer.find("." + t.params.paginationProgressbarClass).transform("translate3d(0,0,0) scaleX(" + f + ") scaleY(" + g + ")").transition(t.params.speed) }
                            "custom" === t.params.paginationType && t.params.paginationCustomRender && t.paginationContainer.html(t.params.paginationCustomRender(t, c + 1, d))
                        }
                        t.params.loop || (t.params.prevButton && (t.isBeginning ? (b(t.params.prevButton).addClass(t.params.buttonDisabledClass), t.params.a11y && t.a11y && t.a11y.disable(b(t.params.prevButton))) : (b(t.params.prevButton).removeClass(t.params.buttonDisabledClass), t.params.a11y && t.a11y && t.a11y.enable(b(t.params.prevButton)))), t.params.nextButton && (t.isEnd ? (b(t.params.nextButton).addClass(t.params.buttonDisabledClass), t.params.a11y && t.a11y && t.a11y.disable(b(t.params.nextButton))) : (b(t.params.nextButton).removeClass(t.params.buttonDisabledClass), t.params.a11y && t.a11y && t.a11y.enable(b(t.params.nextButton)))))
                    }, t.updatePagination = function() { if (t.params.pagination && t.paginationContainer && t.paginationContainer.length > 0) { var a = ""; if ("bullets" === t.params.paginationType) { for (var b = t.params.loop ? Math.ceil((t.slides.length - 2 * t.loopedSlides) / t.params.slidesPerGroup) : t.snapGrid.length, c = 0; b > c; c++) a += t.params.paginationBulletRender ? t.params.paginationBulletRender(c, t.params.bulletClass) : "<" + t.params.paginationElement + ' class="' + t.params.bulletClass + '"></' + t.params.paginationElement + ">";
                                t.paginationContainer.html(a), t.bullets = t.paginationContainer.find("." + t.params.bulletClass), t.params.paginationClickable && t.params.a11y && t.a11y && t.a11y.initPagination() } "fraction" === t.params.paginationType && (a = t.params.paginationFractionRender ? t.params.paginationFractionRender(t, t.params.paginationCurrentClass, t.params.paginationTotalClass) : '<span class="' + t.params.paginationCurrentClass + '"></span> / <span class="' + t.params.paginationTotalClass + '"></span>', t.paginationContainer.html(a)), "progress" === t.params.paginationType && (a = t.params.paginationProgressRender ? t.params.paginationProgressRender(t, t.params.paginationProgressbarClass) : '<span class="' + t.params.paginationProgressbarClass + '"></span>', t.paginationContainer.html(a)) } }, t.update = function(a) {
                        function b() { d = Math.min(Math.max(t.translate, t.maxTranslate()), t.minTranslate()), t.setWrapperTranslate(d), t.updateActiveIndex(), t.updateClasses() } if (t.updateContainerSize(), t.updateSlidesSize(), t.updateProgress(), t.updatePagination(), t.updateClasses(), t.params.scrollbar && t.scrollbar && t.scrollbar.set(), a) { var c, d;
                            t.controller && t.controller.spline && (t.controller.spline = void 0), t.params.freeMode ? (b(), t.params.autoHeight && t.updateAutoHeight()) : (c = ("auto" === t.params.slidesPerView || t.params.slidesPerView > 1) && t.isEnd && !t.params.centeredSlides ? t.slideTo(t.slides.length - 1, 0, !1, !0) : t.slideTo(t.activeIndex, 0, !1, !0), c || b()) } else t.params.autoHeight && t.updateAutoHeight() }, t.onResize = function(a) { t.params.breakpoints && t.setBreakpoint(); var b = t.params.allowSwipeToPrev,
                            c = t.params.allowSwipeToNext; if (t.params.allowSwipeToPrev = t.params.allowSwipeToNext = !0, t.updateContainerSize(), t.updateSlidesSize(), ("auto" === t.params.slidesPerView || t.params.freeMode || a) && t.updatePagination(), t.params.scrollbar && t.scrollbar && t.scrollbar.set(), t.controller && t.controller.spline && (t.controller.spline = void 0), t.params.freeMode) { var d = Math.min(Math.max(t.translate, t.maxTranslate()), t.minTranslate());
                            t.setWrapperTranslate(d), t.updateActiveIndex(), t.updateClasses(), t.params.autoHeight && t.updateAutoHeight() } else t.updateClasses(), ("auto" === t.params.slidesPerView || t.params.slidesPerView > 1) && t.isEnd && !t.params.centeredSlides ? t.slideTo(t.slides.length - 1, 0, !1, !0) : t.slideTo(t.activeIndex, 0, !1, !0);
                        t.params.allowSwipeToPrev = b, t.params.allowSwipeToNext = c };
                    var u = ["mousedown", "mousemove", "mouseup"];
                    window.navigator.pointerEnabled ? u = ["pointerdown", "pointermove", "pointerup"] : window.navigator.msPointerEnabled && (u = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]), t.touchEvents = { start: t.support.touch || !t.params.simulateTouch ? "touchstart" : u[0], move: t.support.touch || !t.params.simulateTouch ? "touchmove" : u[1], end: t.support.touch || !t.params.simulateTouch ? "touchend" : u[2] }, (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && ("container" === t.params.touchEventsTarget ? t.container : t.wrapper).addClass("swiper-wp8-" + t.params.direction), t.initEvents = function(a) { var c = a ? "off" : "on",
                            e = a ? "removeEventListener" : "addEventListener",
                            f = "container" === t.params.touchEventsTarget ? t.container[0] : t.wrapper[0],
                            g = t.support.touch ? f : document,
                            h = t.params.nested ? !0 : !1;
                        t.browser.ie ? (f[e](t.touchEvents.start, t.onTouchStart, !1), g[e](t.touchEvents.move, t.onTouchMove, h), g[e](t.touchEvents.end, t.onTouchEnd, !1)) : (t.support.touch && (f[e](t.touchEvents.start, t.onTouchStart, !1), f[e](t.touchEvents.move, t.onTouchMove, h), f[e](t.touchEvents.end, t.onTouchEnd, !1)), !d.simulateTouch || t.device.ios || t.device.android || (f[e]("mousedown", t.onTouchStart, !1), document[e]("mousemove", t.onTouchMove, h), document[e]("mouseup", t.onTouchEnd, !1))), window[e]("resize", t.onResize), t.params.nextButton && (b(t.params.nextButton)[c]("click", t.onClickNext), t.params.a11y && t.a11y && b(t.params.nextButton)[c]("keydown", t.a11y.onEnterKey)), t.params.prevButton && (b(t.params.prevButton)[c]("click", t.onClickPrev), t.params.a11y && t.a11y && b(t.params.prevButton)[c]("keydown", t.a11y.onEnterKey)), t.params.pagination && t.params.paginationClickable && (b(t.paginationContainer)[c]("click", "." + t.params.bulletClass, t.onClickIndex), t.params.a11y && t.a11y && b(t.paginationContainer)[c]("keydown", "." + t.params.bulletClass, t.a11y.onEnterKey)), (t.params.preventClicks || t.params.preventClicksPropagation) && f[e]("click", t.preventClicks, !0) }, t.attachEvents = function(a) { t.initEvents() }, t.detachEvents = function() { t.initEvents(!0) }, t.allowClick = !0, t.preventClicks = function(a) { t.allowClick || (t.params.preventClicks && a.preventDefault(), t.params.preventClicksPropagation && t.animating && (a.stopPropagation(), a.stopImmediatePropagation())) }, t.onClickNext = function(a) { a.preventDefault(), (!t.isEnd || t.params.loop) && t.slideNext() }, t.onClickPrev = function(a) { a.preventDefault(), (!t.isBeginning || t.params.loop) && t.slidePrev() }, t.onClickIndex = function(a) { a.preventDefault(); var c = b(this).index() * t.params.slidesPerGroup;
                        t.params.loop && (c += t.loopedSlides), t.slideTo(c) }, t.updateClickedSlide = function(a) { var c = g(a, "." + t.params.slideClass),
                            d = !1; if (c)
                            for (var e = 0; e < t.slides.length; e++) t.slides[e] === c && (d = !0); if (!c || !d) return t.clickedSlide = void 0, void(t.clickedIndex = void 0); if (t.clickedSlide = c, t.clickedIndex = b(c).index(), t.params.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex) { var f, h = t.clickedIndex; if (t.params.loop) { if (t.animating) return;
                                f = b(t.clickedSlide).attr("data-swiper-slide-index"), t.params.centeredSlides ? h < t.loopedSlides - t.params.slidesPerView / 2 || h > t.slides.length - t.loopedSlides + t.params.slidesPerView / 2 ? (t.fixLoop(), h = t.wrapper.children("." + t.params.slideClass + '[data-swiper-slide-index="' + f + '"]:not(.swiper-slide-duplicate)').eq(0).index(), setTimeout(function() { t.slideTo(h) }, 0)) : t.slideTo(h) : h > t.slides.length - t.params.slidesPerView ? (t.fixLoop(), h = t.wrapper.children("." + t.params.slideClass + '[data-swiper-slide-index="' + f + '"]:not(.swiper-slide-duplicate)').eq(0).index(), setTimeout(function() { t.slideTo(h) }, 0)) : t.slideTo(h) } else t.slideTo(h) } };
                    var v, w, x, y, z, A, B, C, D, E, F = "input, select, textarea, button",
                        G = Date.now(),
                        H = [];
                    t.animating = !1, t.touches = { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 };
                    var I, J;
                    if (t.onTouchStart = function(a) { if (a.originalEvent && (a = a.originalEvent), I = "touchstart" === a.type, I || !("which" in a) || 3 !== a.which) { if (t.params.noSwiping && g(a, "." + t.params.noSwipingClass)) return void(t.allowClick = !0); if (!t.params.swipeHandler || g(a, t.params.swipeHandler)) { var c = t.touches.currentX = "touchstart" === a.type ? a.targetTouches[0].pageX : a.pageX,
                                        d = t.touches.currentY = "touchstart" === a.type ? a.targetTouches[0].pageY : a.pageY; if (!(t.device.ios && t.params.iOSEdgeSwipeDetection && c <= t.params.iOSEdgeSwipeThreshold)) { if (v = !0, w = !1, x = !0, z = void 0, J = void 0, t.touches.startX = c, t.touches.startY = d, y = Date.now(), t.allowClick = !0, t.updateContainerSize(), t.swipeDirection = void 0, t.params.threshold > 0 && (C = !1), "touchstart" !== a.type) { var e = !0;
                                            b(a.target).is(F) && (e = !1), document.activeElement && b(document.activeElement).is(F) && document.activeElement.blur(), e && a.preventDefault() } t.emit("onTouchStart", t, a) } } } }, t.onTouchMove = function(a) { if (a.originalEvent && (a = a.originalEvent), !(I && "mousemove" === a.type || a.preventedByNestedSwiper)) { if (t.params.onlyExternal) return t.allowClick = !1, void(v && (t.touches.startX = t.touches.currentX = "touchmove" === a.type ? a.targetTouches[0].pageX : a.pageX, t.touches.startY = t.touches.currentY = "touchmove" === a.type ? a.targetTouches[0].pageY : a.pageY, y = Date.now())); if (I && document.activeElement && a.target === document.activeElement && b(a.target).is(F)) return w = !0, void(t.allowClick = !1); if (x && t.emit("onTouchMove", t, a), !(a.targetTouches && a.targetTouches.length > 1)) { if (t.touches.currentX = "touchmove" === a.type ? a.targetTouches[0].pageX : a.pageX, t.touches.currentY = "touchmove" === a.type ? a.targetTouches[0].pageY : a.pageY, "undefined" == typeof z) { var c = 180 * Math.atan2(Math.abs(t.touches.currentY - t.touches.startY), Math.abs(t.touches.currentX - t.touches.startX)) / Math.PI;
                                        z = t.isHorizontal() ? c > t.params.touchAngle : 90 - c > t.params.touchAngle } if (z && t.emit("onTouchMoveOpposite", t, a), "undefined" == typeof J && t.browser.ieTouch && (t.touches.currentX !== t.touches.startX || t.touches.currentY !== t.touches.startY) && (J = !0), v) { if (z) return void(v = !1); if (J || !t.browser.ieTouch) { t.allowClick = !1, t.emit("onSliderMove", t, a), a.preventDefault(), t.params.touchMoveStopPropagation && !t.params.nested && a.stopPropagation(), w || (d.loop && t.fixLoop(), B = t.getWrapperTranslate(), t.setWrapperTransition(0), t.animating && t.wrapper.trigger("webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"), t.params.autoplay && t.autoplaying && (t.params.autoplayDisableOnInteraction ? t.stopAutoplay() : t.pauseAutoplay()), E = !1, t.params.grabCursor && (t.container[0].style.cursor = "move", t.container[0].style.cursor = "-webkit-grabbing", t.container[0].style.cursor = "-moz-grabbin", t.container[0].style.cursor = "grabbing")), w = !0; var e = t.touches.diff = t.isHorizontal() ? t.touches.currentX - t.touches.startX : t.touches.currentY - t.touches.startY;
                                            e *= t.params.touchRatio, t.rtl && (e = -e), t.swipeDirection = e > 0 ? "prev" : "next", A = e + B; var f = !0; if (e > 0 && A > t.minTranslate() ? (f = !1, t.params.resistance && (A = t.minTranslate() - 1 + Math.pow(-t.minTranslate() + B + e, t.params.resistanceRatio))) : 0 > e && A < t.maxTranslate() && (f = !1, t.params.resistance && (A = t.maxTranslate() + 1 - Math.pow(t.maxTranslate() - B - e, t.params.resistanceRatio))), f && (a.preventedByNestedSwiper = !0), !t.params.allowSwipeToNext && "next" === t.swipeDirection && B > A && (A = B), !t.params.allowSwipeToPrev && "prev" === t.swipeDirection && A > B && (A = B), t.params.followFinger) { if (t.params.threshold > 0) { if (!(Math.abs(e) > t.params.threshold || C)) return void(A = B); if (!C) return C = !0, t.touches.startX = t.touches.currentX, t.touches.startY = t.touches.currentY, A = B, void(t.touches.diff = t.isHorizontal() ? t.touches.currentX - t.touches.startX : t.touches.currentY - t.touches.startY) }(t.params.freeMode || t.params.watchSlidesProgress) && t.updateActiveIndex(), t.params.freeMode && (0 === H.length && H.push({ position: t.touches[t.isHorizontal() ? "startX" : "startY"], time: y }), H.push({ position: t.touches[t.isHorizontal() ? "currentX" : "currentY"], time: (new window.Date).getTime() })), t.updateProgress(A), t.setWrapperTranslate(A) } } } } } }, t.onTouchEnd = function(a) { if (a.originalEvent && (a = a.originalEvent), x && t.emit("onTouchEnd", t, a), x = !1, v) { t.params.grabCursor && w && v && (t.container[0].style.cursor = "move", t.container[0].style.cursor = "-webkit-grab", t.container[0].style.cursor = "-moz-grab", t.container[0].style.cursor = "grab"); var c = Date.now(),
                                    d = c - y; if (t.allowClick && (t.updateClickedSlide(a), t.emit("onTap", t, a), 300 > d && c - G > 300 && (D && clearTimeout(D), D = setTimeout(function() { t && (t.params.paginationHide && t.paginationContainer.length > 0 && !b(a.target).hasClass(t.params.bulletClass) && t.paginationContainer.toggleClass(t.params.paginationHiddenClass), t.emit("onClick", t, a)) }, 300)), 300 > d && 300 > c - G && (D && clearTimeout(D), t.emit("onDoubleTap", t, a))), G = Date.now(), setTimeout(function() { t && (t.allowClick = !0) }, 0), !v || !w || !t.swipeDirection || 0 === t.touches.diff || A === B) return void(v = w = !1);
                                v = w = !1; var e; if (e = t.params.followFinger ? t.rtl ? t.translate : -t.translate : -A, t.params.freeMode) { if (e < -t.minTranslate()) return void t.slideTo(t.activeIndex); if (e > -t.maxTranslate()) return void(t.slides.length < t.snapGrid.length ? t.slideTo(t.snapGrid.length - 1) : t.slideTo(t.slides.length - 1)); if (t.params.freeModeMomentum) { if (H.length > 1) { var f = H.pop(),
                                                g = H.pop(),
                                                h = f.position - g.position,
                                                i = f.time - g.time;
                                            t.velocity = h / i, t.velocity = t.velocity / 2, Math.abs(t.velocity) < t.params.freeModeMinimumVelocity && (t.velocity = 0), (i > 150 || (new window.Date).getTime() - f.time > 300) && (t.velocity = 0) } else t.velocity = 0;
                                        H.length = 0; var j = 1e3 * t.params.freeModeMomentumRatio,
                                            k = t.velocity * j,
                                            l = t.translate + k;
                                        t.rtl && (l = -l); var m, n = !1,
                                            o = 20 * Math.abs(t.velocity) * t.params.freeModeMomentumBounceRatio; if (l < t.maxTranslate()) t.params.freeModeMomentumBounce ? (l + t.maxTranslate() < -o && (l = t.maxTranslate() - o), m = t.maxTranslate(), n = !0, E = !0) : l = t.maxTranslate();
                                        else if (l > t.minTranslate()) t.params.freeModeMomentumBounce ? (l - t.minTranslate() > o && (l = t.minTranslate() + o), m = t.minTranslate(), n = !0, E = !0) : l = t.minTranslate();
                                        else if (t.params.freeModeSticky) { var p, q = 0; for (q = 0; q < t.snapGrid.length; q += 1)
                                                if (t.snapGrid[q] > -l) { p = q; break } l = Math.abs(t.snapGrid[p] - l) < Math.abs(t.snapGrid[p - 1] - l) || "next" === t.swipeDirection ? t.snapGrid[p] : t.snapGrid[p - 1], t.rtl || (l = -l) } if (0 !== t.velocity) j = t.rtl ? Math.abs((-l - t.translate) / t.velocity) : Math.abs((l - t.translate) / t.velocity);
                                        else if (t.params.freeModeSticky) return void t.slideReset();
                                        t.params.freeModeMomentumBounce && n ? (t.updateProgress(m), t.setWrapperTransition(j), t.setWrapperTranslate(l), t.onTransitionStart(), t.animating = !0, t.wrapper.transitionEnd(function() { t && E && (t.emit("onMomentumBounce", t), t.setWrapperTransition(t.params.speed), t.setWrapperTranslate(m), t.wrapper.transitionEnd(function() { t && t.onTransitionEnd() })) })) : t.velocity ? (t.updateProgress(l), t.setWrapperTransition(j), t.setWrapperTranslate(l), t.onTransitionStart(), t.animating || (t.animating = !0, t.wrapper.transitionEnd(function() { t && t.onTransitionEnd() }))) : t.updateProgress(l), t.updateActiveIndex() } return void((!t.params.freeModeMomentum || d >= t.params.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex())) } var r, s = 0,
                                    u = t.slidesSizesGrid[0]; for (r = 0; r < t.slidesGrid.length; r += t.params.slidesPerGroup) "undefined" != typeof t.slidesGrid[r + t.params.slidesPerGroup] ? e >= t.slidesGrid[r] && e < t.slidesGrid[r + t.params.slidesPerGroup] && (s = r, u = t.slidesGrid[r + t.params.slidesPerGroup] - t.slidesGrid[r]) : e >= t.slidesGrid[r] && (s = r, u = t.slidesGrid[t.slidesGrid.length - 1] - t.slidesGrid[t.slidesGrid.length - 2]); var z = (e - t.slidesGrid[s]) / u; if (d > t.params.longSwipesMs) { if (!t.params.longSwipes) return void t.slideTo(t.activeIndex); "next" === t.swipeDirection && (z >= t.params.longSwipesRatio ? t.slideTo(s + t.params.slidesPerGroup) : t.slideTo(s)), "prev" === t.swipeDirection && (z > 1 - t.params.longSwipesRatio ? t.slideTo(s + t.params.slidesPerGroup) : t.slideTo(s)) } else { if (!t.params.shortSwipes) return void t.slideTo(t.activeIndex); "next" === t.swipeDirection && t.slideTo(s + t.params.slidesPerGroup), "prev" === t.swipeDirection && t.slideTo(s) } } }, t._slideTo = function(a, b) { return t.slideTo(a, b, !0, !0) }, t.slideTo = function(a, b, c, d) { "undefined" == typeof c && (c = !0), "undefined" == typeof a && (a = 0), 0 > a && (a = 0), t.snapIndex = Math.floor(a / t.params.slidesPerGroup), t.snapIndex >= t.snapGrid.length && (t.snapIndex = t.snapGrid.length - 1); var e = -t.snapGrid[t.snapIndex];
                            t.params.autoplay && t.autoplaying && (d || !t.params.autoplayDisableOnInteraction ? t.pauseAutoplay(b) : t.stopAutoplay()), t.updateProgress(e); for (var f = 0; f < t.slidesGrid.length; f++) - Math.floor(100 * e) >= Math.floor(100 * t.slidesGrid[f]) && (a = f); return !t.params.allowSwipeToNext && e < t.translate && e < t.minTranslate() ? !1 : !t.params.allowSwipeToPrev && e > t.translate && e > t.maxTranslate() && (t.activeIndex || 0) !== a ? !1 : ("undefined" == typeof b && (b = t.params.speed), t.previousIndex = t.activeIndex || 0, t.activeIndex = a, t.rtl && -e === t.translate || !t.rtl && e === t.translate ? (t.params.autoHeight && t.updateAutoHeight(), t.updateClasses(), "slide" !== t.params.effect && t.setWrapperTranslate(e), !1) : (t.updateClasses(), t.onTransitionStart(c), 0 === b ? (t.setWrapperTranslate(e), t.setWrapperTransition(0), t.onTransitionEnd(c)) : (t.setWrapperTranslate(e), t.setWrapperTransition(b), t.animating || (t.animating = !0, t.wrapper.transitionEnd(function() { t && t.onTransitionEnd(c) }))), !0)) }, t.onTransitionStart = function(a) { "undefined" == typeof a && (a = !0), t.params.autoHeight && t.updateAutoHeight(), t.lazy && t.lazy.onTransitionStart(), a && (t.emit("onTransitionStart", t), t.activeIndex !== t.previousIndex && (t.emit("onSlideChangeStart", t), t.activeIndex > t.previousIndex ? t.emit("onSlideNextStart", t) : t.emit("onSlidePrevStart", t))) }, t.onTransitionEnd = function(a) { t.animating = !1, t.setWrapperTransition(0), "undefined" == typeof a && (a = !0), t.lazy && t.lazy.onTransitionEnd(), a && (t.emit("onTransitionEnd", t), t.activeIndex !== t.previousIndex && (t.emit("onSlideChangeEnd", t), t.activeIndex > t.previousIndex ? t.emit("onSlideNextEnd", t) : t.emit("onSlidePrevEnd", t))), t.params.hashnav && t.hashnav && t.hashnav.setHash() }, t.slideNext = function(a, b, c) { if (t.params.loop) { if (t.animating) return !1;
                                t.fixLoop();
                                t.container[0].clientLeft; return t.slideTo(t.activeIndex + t.params.slidesPerGroup, b, a, c) } return t.slideTo(t.activeIndex + t.params.slidesPerGroup, b, a, c) }, t._slideNext = function(a) { return t.slideNext(!0, a, !0) }, t.slidePrev = function(a, b, c) { if (t.params.loop) { if (t.animating) return !1;
                                t.fixLoop();
                                t.container[0].clientLeft; return t.slideTo(t.activeIndex - 1, b, a, c) } return t.slideTo(t.activeIndex - 1, b, a, c) }, t._slidePrev = function(a) { return t.slidePrev(!0, a, !0) }, t.slideReset = function(a, b, c) { return t.slideTo(t.activeIndex, b, a) }, t.setWrapperTransition = function(a, b) { t.wrapper.transition(a), "slide" !== t.params.effect && t.effects[t.params.effect] && t.effects[t.params.effect].setTransition(a), t.params.parallax && t.parallax && t.parallax.setTransition(a), t.params.scrollbar && t.scrollbar && t.scrollbar.setTransition(a), t.params.control && t.controller && t.controller.setTransition(a, b), t.emit("onSetTransition", t, a) }, t.setWrapperTranslate = function(a, b, c) { var d = 0,
                                f = 0,
                                g = 0;
                            t.isHorizontal() ? d = t.rtl ? -a : a : f = a, t.params.roundLengths && (d = e(d), f = e(f)), t.params.virtualTranslate || (t.support.transforms3d ? t.wrapper.transform("translate3d(" + d + "px, " + f + "px, " + g + "px)") : t.wrapper.transform("translate(" + d + "px, " + f + "px)")), t.translate = t.isHorizontal() ? d : f; var h, i = t.maxTranslate() - t.minTranslate();
                            h = 0 === i ? 0 : (a - t.minTranslate()) / i, h !== t.progress && t.updateProgress(a), b && t.updateActiveIndex(), "slide" !== t.params.effect && t.effects[t.params.effect] && t.effects[t.params.effect].setTranslate(t.translate), t.params.parallax && t.parallax && t.parallax.setTranslate(t.translate), t.params.scrollbar && t.scrollbar && t.scrollbar.setTranslate(t.translate), t.params.control && t.controller && t.controller.setTranslate(t.translate, c), t.emit("onSetTranslate", t, t.translate) }, t.getTranslate = function(a, b) { var c, d, e, f; return "undefined" == typeof b && (b = "x"), t.params.virtualTranslate ? t.rtl ? -t.translate : t.translate : (e = window.getComputedStyle(a, null), window.WebKitCSSMatrix ? (d = e.transform || e.webkitTransform, d.split(",").length > 6 && (d = d.split(", ").map(function(a) { return a.replace(",", ".") }).join(", ")), f = new window.WebKitCSSMatrix("none" === d ? "" : d)) : (f = e.MozTransform || e.OTransform || e.MsTransform || e.msTransform || e.transform || e.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), c = f.toString().split(",")), "x" === b && (d = window.WebKitCSSMatrix ? f.m41 : 16 === c.length ? parseFloat(c[12]) : parseFloat(c[4])), "y" === b && (d = window.WebKitCSSMatrix ? f.m42 : 16 === c.length ? parseFloat(c[13]) : parseFloat(c[5])), t.rtl && d && (d = -d), d || 0) }, t.getWrapperTranslate = function(a) { return "undefined" == typeof a && (a = t.isHorizontal() ? "x" : "y"), t.getTranslate(t.wrapper[0], a) }, t.observers = [], t.initObservers = function() { if (t.params.observeParents)
                                for (var a = t.container.parents(), b = 0; b < a.length; b++) h(a[b]);
                            h(t.container[0], { childList: !1 }), h(t.wrapper[0], { attributes: !1 }) }, t.disconnectObservers = function() { for (var a = 0; a < t.observers.length; a++) t.observers[a].disconnect();
                            t.observers = [] }, t.createLoop = function() { t.wrapper.children("." + t.params.slideClass + "." + t.params.slideDuplicateClass).remove(); var a = t.wrapper.children("." + t.params.slideClass); "auto" !== t.params.slidesPerView || t.params.loopedSlides || (t.params.loopedSlides = a.length), t.loopedSlides = parseInt(t.params.loopedSlides || t.params.slidesPerView, 10), t.loopedSlides = t.loopedSlides + t.params.loopAdditionalSlides, t.loopedSlides > a.length && (t.loopedSlides = a.length); var c, d = [],
                                e = []; for (a.each(function(c, f) { var g = b(this);
                                    c < t.loopedSlides && e.push(f), c < a.length && c >= a.length - t.loopedSlides && d.push(f), g.attr("data-swiper-slide-index", c) }), c = 0; c < e.length; c++) t.wrapper.append(b(e[c].cloneNode(!0)).addClass(t.params.slideDuplicateClass)); for (c = d.length - 1; c >= 0; c--) t.wrapper.prepend(b(d[c].cloneNode(!0)).addClass(t.params.slideDuplicateClass)) }, t.destroyLoop = function() { t.wrapper.children("." + t.params.slideClass + "." + t.params.slideDuplicateClass).remove(), t.slides.removeAttr("data-swiper-slide-index") }, t.fixLoop = function() { var a;
                            t.activeIndex < t.loopedSlides ? (a = t.slides.length - 3 * t.loopedSlides + t.activeIndex, a += t.loopedSlides, t.slideTo(a, 0, !1, !0)) : ("auto" === t.params.slidesPerView && t.activeIndex >= 2 * t.loopedSlides || t.activeIndex > t.slides.length - 2 * t.params.slidesPerView) && (a = -t.slides.length + t.activeIndex + t.loopedSlides, a += t.loopedSlides, t.slideTo(a, 0, !1, !0)) }, t.appendSlide = function(a) { if (t.params.loop && t.destroyLoop(), "object" == typeof a && a.length)
                                for (var b = 0; b < a.length; b++) a[b] && t.wrapper.append(a[b]);
                            else t.wrapper.append(a);
                            t.params.loop && t.createLoop(), t.params.observer && t.support.observer || t.update(!0) }, t.prependSlide = function(a) { t.params.loop && t.destroyLoop(); var b = t.activeIndex + 1; if ("object" == typeof a && a.length) { for (var c = 0; c < a.length; c++) a[c] && t.wrapper.prepend(a[c]);
                                b = t.activeIndex + a.length } else t.wrapper.prepend(a);
                            t.params.loop && t.createLoop(), t.params.observer && t.support.observer || t.update(!0), t.slideTo(b, 0, !1) }, t.removeSlide = function(a) { t.params.loop && (t.destroyLoop(), t.slides = t.wrapper.children("." + t.params.slideClass)); var b, c = t.activeIndex; if ("object" == typeof a && a.length) { for (var d = 0; d < a.length; d++) b = a[d], t.slides[b] && t.slides.eq(b).remove(), c > b && c--;
                                c = Math.max(c, 0) } else b = a, t.slides[b] && t.slides.eq(b).remove(), c > b && c--, c = Math.max(c, 0);
                            t.params.loop && t.createLoop(), t.params.observer && t.support.observer || t.update(!0), t.params.loop ? t.slideTo(c + t.loopedSlides, 0, !1) : t.slideTo(c, 0, !1) }, t.removeAllSlides = function() { for (var a = [], b = 0; b < t.slides.length; b++) a.push(b);
                            t.removeSlide(a) }, t.effects = { fade: { setTranslate: function() { for (var a = 0; a < t.slides.length; a++) { var b = t.slides.eq(a),
                                            c = b[0].swiperSlideOffset,
                                            d = -c;
                                        t.params.virtualTranslate || (d -= t.translate); var e = 0;
                                        t.isHorizontal() || (e = d, d = 0); var f = t.params.fade.crossFade ? Math.max(1 - Math.abs(b[0].progress), 0) : 1 + Math.min(Math.max(b[0].progress, -1), 0);
                                        b.css({ opacity: f }).transform("translate3d(" + d + "px, " + e + "px, 0px)") } }, setTransition: function(a) { if (t.slides.transition(a), t.params.virtualTranslate && 0 !== a) { var b = !1;
                                        t.slides.transitionEnd(function() { if (!b && t) { b = !0, t.animating = !1; for (var a = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], c = 0; c < a.length; c++) t.wrapper.trigger(a[c]) } }) } } }, flip: { setTranslate: function() { for (var a = 0; a < t.slides.length; a++) { var c = t.slides.eq(a),
                                            d = c[0].progress;
                                        t.params.flip.limitRotation && (d = Math.max(Math.min(c[0].progress, 1), -1)); var e = c[0].swiperSlideOffset,
                                            f = -180 * d,
                                            g = f,
                                            h = 0,
                                            i = -e,
                                            j = 0; if (t.isHorizontal() ? t.rtl && (g = -g) : (j = i, i = 0, h = -g, g = 0), c[0].style.zIndex = -Math.abs(Math.round(d)) + t.slides.length, t.params.flip.slideShadows) { var k = t.isHorizontal() ? c.find(".swiper-slide-shadow-left") : c.find(".swiper-slide-shadow-top"),
                                                l = t.isHorizontal() ? c.find(".swiper-slide-shadow-right") : c.find(".swiper-slide-shadow-bottom");
                                            0 === k.length && (k = b('<div class="swiper-slide-shadow-' + (t.isHorizontal() ? "left" : "top") + '"></div>'), c.append(k)), 0 === l.length && (l = b('<div class="swiper-slide-shadow-' + (t.isHorizontal() ? "right" : "bottom") + '"></div>'), c.append(l)), k.length && (k[0].style.opacity = Math.max(-d, 0)), l.length && (l[0].style.opacity = Math.max(d, 0)) } c.transform("translate3d(" + i + "px, " + j + "px, 0px) rotateX(" + h + "deg) rotateY(" + g + "deg)") } }, setTransition: function(a) { if (t.slides.transition(a).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(a), t.params.virtualTranslate && 0 !== a) { var c = !1;
                                        t.slides.eq(t.activeIndex).transitionEnd(function() { if (!c && t && b(this).hasClass(t.params.slideActiveClass)) { c = !0, t.animating = !1; for (var a = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], d = 0; d < a.length; d++) t.wrapper.trigger(a[d]) } }) } } }, cube: { setTranslate: function() { var a, c = 0;
                                    t.params.cube.shadow && (t.isHorizontal() ? (a = t.wrapper.find(".swiper-cube-shadow"), 0 === a.length && (a = b('<div class="swiper-cube-shadow"></div>'), t.wrapper.append(a)), a.css({ height: t.width + "px" })) : (a = t.container.find(".swiper-cube-shadow"), 0 === a.length && (a = b('<div class="swiper-cube-shadow"></div>'), t.container.append(a)))); for (var d = 0; d < t.slides.length; d++) { var e = t.slides.eq(d),
                                            f = 90 * d,
                                            g = Math.floor(f / 360);
                                        t.rtl && (f = -f, g = Math.floor(-f / 360)); var h = Math.max(Math.min(e[0].progress, 1), -1),
                                            i = 0,
                                            j = 0,
                                            k = 0;
                                        d % 4 === 0 ? (i = 4 * -g * t.size, k = 0) : (d - 1) % 4 === 0 ? (i = 0, k = 4 * -g * t.size) : (d - 2) % 4 === 0 ? (i = t.size + 4 * g * t.size, k = t.size) : (d - 3) % 4 === 0 && (i = -t.size, k = 3 * t.size + 4 * t.size * g), t.rtl && (i = -i), t.isHorizontal() || (j = i, i = 0); var l = "rotateX(" + (t.isHorizontal() ? 0 : -f) + "deg) rotateY(" + (t.isHorizontal() ? f : 0) + "deg) translate3d(" + i + "px, " + j + "px, " + k + "px)"; if (1 >= h && h > -1 && (c = 90 * d + 90 * h, t.rtl && (c = 90 * -d - 90 * h)), e.transform(l), t.params.cube.slideShadows) { var m = t.isHorizontal() ? e.find(".swiper-slide-shadow-left") : e.find(".swiper-slide-shadow-top"),
                                                n = t.isHorizontal() ? e.find(".swiper-slide-shadow-right") : e.find(".swiper-slide-shadow-bottom");
                                            0 === m.length && (m = b('<div class="swiper-slide-shadow-' + (t.isHorizontal() ? "left" : "top") + '"></div>'), e.append(m)), 0 === n.length && (n = b('<div class="swiper-slide-shadow-' + (t.isHorizontal() ? "right" : "bottom") + '"></div>'), e.append(n)), m.length && (m[0].style.opacity = Math.max(-h, 0)), n.length && (n[0].style.opacity = Math.max(h, 0)) } } if (t.wrapper.css({ "-webkit-transform-origin": "50% 50% -" + t.size / 2 + "px", "-moz-transform-origin": "50% 50% -" + t.size / 2 + "px", "-ms-transform-origin": "50% 50% -" + t.size / 2 + "px", "transform-origin": "50% 50% -" + t.size / 2 + "px" }), t.params.cube.shadow)
                                        if (t.isHorizontal()) a.transform("translate3d(0px, " + (t.width / 2 + t.params.cube.shadowOffset) + "px, " + -t.width / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + t.params.cube.shadowScale + ")");
                                        else { var o = Math.abs(c) - 90 * Math.floor(Math.abs(c) / 90),
                                                p = 1.5 - (Math.sin(2 * o * Math.PI / 360) / 2 + Math.cos(2 * o * Math.PI / 360) / 2),
                                                q = t.params.cube.shadowScale,
                                                r = t.params.cube.shadowScale / p,
                                                s = t.params.cube.shadowOffset;
                                            a.transform("scale3d(" + q + ", 1, " + r + ") translate3d(0px, " + (t.height / 2 + s) + "px, " + -t.height / 2 / r + "px) rotateX(-90deg)") } var u = t.isSafari || t.isUiWebView ? -t.size / 2 : 0;
                                    t.wrapper.transform("translate3d(0px,0," + u + "px) rotateX(" + (t.isHorizontal() ? 0 : c) + "deg) rotateY(" + (t.isHorizontal() ? -c : 0) + "deg)") }, setTransition: function(a) { t.slides.transition(a).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(a), t.params.cube.shadow && !t.isHorizontal() && t.container.find(".swiper-cube-shadow").transition(a) } }, coverflow: { setTranslate: function() { for (var a = t.translate, c = t.isHorizontal() ? -a + t.width / 2 : -a + t.height / 2, d = t.isHorizontal() ? t.params.coverflow.rotate : -t.params.coverflow.rotate, e = t.params.coverflow.depth, f = 0, g = t.slides.length; g > f; f++) { var h = t.slides.eq(f),
                                            i = t.slidesSizesGrid[f],
                                            j = h[0].swiperSlideOffset,
                                            k = (c - j - i / 2) / i * t.params.coverflow.modifier,
                                            l = t.isHorizontal() ? d * k : 0,
                                            m = t.isHorizontal() ? 0 : d * k,
                                            n = -e * Math.abs(k),
                                            o = t.isHorizontal() ? 0 : t.params.coverflow.stretch * k,
                                            p = t.isHorizontal() ? t.params.coverflow.stretch * k : 0;
                                        Math.abs(p) < .001 && (p = 0), Math.abs(o) < .001 && (o = 0), Math.abs(n) < .001 && (n = 0), Math.abs(l) < .001 && (l = 0), Math.abs(m) < .001 && (m = 0); var q = "translate3d(" + p + "px," + o + "px," + n + "px)  rotateX(" + m + "deg) rotateY(" + l + "deg)"; if (h.transform(q), h[0].style.zIndex = -Math.abs(Math.round(k)) + 1, t.params.coverflow.slideShadows) { var r = t.isHorizontal() ? h.find(".swiper-slide-shadow-left") : h.find(".swiper-slide-shadow-top"),
                                                s = t.isHorizontal() ? h.find(".swiper-slide-shadow-right") : h.find(".swiper-slide-shadow-bottom");
                                            0 === r.length && (r = b('<div class="swiper-slide-shadow-' + (t.isHorizontal() ? "left" : "top") + '"></div>'), h.append(r)), 0 === s.length && (s = b('<div class="swiper-slide-shadow-' + (t.isHorizontal() ? "right" : "bottom") + '"></div>'), h.append(s)), r.length && (r[0].style.opacity = k > 0 ? k : 0), s.length && (s[0].style.opacity = -k > 0 ? -k : 0) } } if (t.browser.ie) { var u = t.wrapper[0].style;
                                        u.perspectiveOrigin = c + "px 50%" } }, setTransition: function(a) { t.slides.transition(a).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(a) } } }, t.lazy = {
                            initialImageLoaded: !1,
                            loadImageInSlide: function(a, c) { if ("undefined" != typeof a && ("undefined" == typeof c && (c = !0), 0 !== t.slides.length)) { var d = t.slides.eq(a),
                                        e = d.find(".swiper-lazy:not(.swiper-lazy-loaded):not(.swiper-lazy-loading)");!d.hasClass("swiper-lazy") || d.hasClass("swiper-lazy-loaded") || d.hasClass("swiper-lazy-loading") || (e = e.add(d[0])), 0 !== e.length && e.each(function() { var a = b(this);
                                        a.addClass("swiper-lazy-loading"); var e = a.attr("data-background"),
                                            f = a.attr("data-src"),
                                            g = a.attr("data-srcset");
                                        t.loadImage(a[0], f || e, g, !1, function() { if (e ? (a.css("background-image", "url(" + e + ")"), a.removeAttr("data-background")) : (g && (a.attr("srcset", g), a.removeAttr("data-srcset")), f && (a.attr("src", f), a.removeAttr("data-src"))), a.addClass("swiper-lazy-loaded").removeClass("swiper-lazy-loading"), d.find(".swiper-lazy-preloader, .preloader").remove(), t.params.loop && c) { var b = d.attr("data-swiper-slide-index"); if (d.hasClass(t.params.slideDuplicateClass)) { var h = t.wrapper.children('[data-swiper-slide-index="' + b + '"]:not(.' + t.params.slideDuplicateClass + ")");
                                                    t.lazy.loadImageInSlide(h.index(), !1) } else { var i = t.wrapper.children("." + t.params.slideDuplicateClass + '[data-swiper-slide-index="' + b + '"]');
                                                    t.lazy.loadImageInSlide(i.index(), !1) } } t.emit("onLazyImageReady", t, d[0], a[0]) }), t.emit("onLazyImageLoad", t, d[0], a[0]) }) } },
                            load: function() { var a; if (t.params.watchSlidesVisibility) t.wrapper.children("." + t.params.slideVisibleClass).each(function() { t.lazy.loadImageInSlide(b(this).index()) });
                                else if (t.params.slidesPerView > 1)
                                    for (a = t.activeIndex; a < t.activeIndex + t.params.slidesPerView; a++) t.slides[a] && t.lazy.loadImageInSlide(a);
                                else t.lazy.loadImageInSlide(t.activeIndex); if (t.params.lazyLoadingInPrevNext)
                                    if (t.params.slidesPerView > 1 || t.params.lazyLoadingInPrevNextAmount && t.params.lazyLoadingInPrevNextAmount > 1) { var c = t.params.lazyLoadingInPrevNextAmount,
                                            d = t.params.slidesPerView,
                                            e = Math.min(t.activeIndex + d + Math.max(c, d), t.slides.length),
                                            f = Math.max(t.activeIndex - Math.max(d, c), 0); for (a = t.activeIndex + t.params.slidesPerView; e > a; a++) t.slides[a] && t.lazy.loadImageInSlide(a); for (a = f; a < t.activeIndex; a++) t.slides[a] && t.lazy.loadImageInSlide(a) } else { var g = t.wrapper.children("." + t.params.slideNextClass);
                                        g.length > 0 && t.lazy.loadImageInSlide(g.index()); var h = t.wrapper.children("." + t.params.slidePrevClass);
                                        h.length > 0 && t.lazy.loadImageInSlide(h.index()) } },
                            onTransitionStart: function() {
                                t.params.lazyLoading && (t.params.lazyLoadingOnTransitionStart || !t.params.lazyLoadingOnTransitionStart && !t.lazy.initialImageLoaded) && t.lazy.load();
                            },
                            onTransitionEnd: function() { t.params.lazyLoading && !t.params.lazyLoadingOnTransitionStart && t.lazy.load() }
                        }, t.scrollbar = { isTouched: !1, setDragPosition: function(a) { var b = t.scrollbar,
                                    c = t.isHorizontal() ? "touchstart" === a.type || "touchmove" === a.type ? a.targetTouches[0].pageX : a.pageX || a.clientX : "touchstart" === a.type || "touchmove" === a.type ? a.targetTouches[0].pageY : a.pageY || a.clientY,
                                    d = c - b.track.offset()[t.isHorizontal() ? "left" : "top"] - b.dragSize / 2,
                                    e = -t.minTranslate() * b.moveDivider,
                                    f = -t.maxTranslate() * b.moveDivider;
                                e > d ? d = e : d > f && (d = f), d = -d / b.moveDivider, t.updateProgress(d), t.setWrapperTranslate(d, !0) }, dragStart: function(a) { var b = t.scrollbar;
                                b.isTouched = !0, a.preventDefault(), a.stopPropagation(), b.setDragPosition(a), clearTimeout(b.dragTimeout), b.track.transition(0), t.params.scrollbarHide && b.track.css("opacity", 1), t.wrapper.transition(100), b.drag.transition(100), t.emit("onScrollbarDragStart", t) }, dragMove: function(a) { var b = t.scrollbar;
                                b.isTouched && (a.preventDefault ? a.preventDefault() : a.returnValue = !1, b.setDragPosition(a), t.wrapper.transition(0), b.track.transition(0), b.drag.transition(0), t.emit("onScrollbarDragMove", t)) }, dragEnd: function(a) { var b = t.scrollbar;
                                b.isTouched && (b.isTouched = !1, t.params.scrollbarHide && (clearTimeout(b.dragTimeout), b.dragTimeout = setTimeout(function() { b.track.css("opacity", 0), b.track.transition(400) }, 1e3)), t.emit("onScrollbarDragEnd", t), t.params.scrollbarSnapOnRelease && t.slideReset()) }, enableDraggable: function() { var a = t.scrollbar,
                                    c = t.support.touch ? a.track : document;
                                b(a.track).on(t.touchEvents.start, a.dragStart), b(c).on(t.touchEvents.move, a.dragMove), b(c).on(t.touchEvents.end, a.dragEnd) }, disableDraggable: function() { var a = t.scrollbar,
                                    c = t.support.touch ? a.track : document;
                                b(a.track).off(t.touchEvents.start, a.dragStart), b(c).off(t.touchEvents.move, a.dragMove), b(c).off(t.touchEvents.end, a.dragEnd) }, set: function() { if (t.params.scrollbar) { var a = t.scrollbar;
                                    a.track = b(t.params.scrollbar), a.drag = a.track.find(".swiper-scrollbar-drag"), 0 === a.drag.length && (a.drag = b('<div class="swiper-scrollbar-drag"></div>'), a.track.append(a.drag)), a.drag[0].style.width = "", a.drag[0].style.height = "", a.trackSize = t.isHorizontal() ? a.track[0].offsetWidth : a.track[0].offsetHeight, a.divider = t.size / t.virtualSize, a.moveDivider = a.divider * (a.trackSize / t.size), a.dragSize = a.trackSize * a.divider, t.isHorizontal() ? a.drag[0].style.width = a.dragSize + "px" : a.drag[0].style.height = a.dragSize + "px", a.divider >= 1 ? a.track[0].style.display = "none" : a.track[0].style.display = "", t.params.scrollbarHide && (a.track[0].style.opacity = 0) } }, setTranslate: function() { if (t.params.scrollbar) { var a, b = t.scrollbar,
                                        c = (t.translate || 0, b.dragSize);
                                    a = (b.trackSize - b.dragSize) * t.progress, t.rtl && t.isHorizontal() ? (a = -a, a > 0 ? (c = b.dragSize - a, a = 0) : -a + b.dragSize > b.trackSize && (c = b.trackSize + a)) : 0 > a ? (c = b.dragSize + a, a = 0) : a + b.dragSize > b.trackSize && (c = b.trackSize - a), t.isHorizontal() ? (t.support.transforms3d ? b.drag.transform("translate3d(" + a + "px, 0, 0)") : b.drag.transform("translateX(" + a + "px)"), b.drag[0].style.width = c + "px") : (t.support.transforms3d ? b.drag.transform("translate3d(0px, " + a + "px, 0)") : b.drag.transform("translateY(" + a + "px)"), b.drag[0].style.height = c + "px"), t.params.scrollbarHide && (clearTimeout(b.timeout), b.track[0].style.opacity = 1, b.timeout = setTimeout(function() { b.track[0].style.opacity = 0, b.track.transition(400) }, 1e3)) } }, setTransition: function(a) { t.params.scrollbar && t.scrollbar.drag.transition(a) } }, t.controller = { LinearSpline: function(a, b) { this.x = a, this.y = b, this.lastIndex = a.length - 1; var c, d;
                                this.x.length;
                                this.interpolate = function(a) { return a ? (d = e(this.x, a), c = d - 1, (a - this.x[c]) * (this.y[d] - this.y[c]) / (this.x[d] - this.x[c]) + this.y[c]) : 0 }; var e = function() { var a, b, c; return function(d, e) { for (b = -1, a = d.length; a - b > 1;) d[c = a + b >> 1] <= e ? b = c : a = c; return a } }() }, getInterpolateFunction: function(a) { t.controller.spline || (t.controller.spline = t.params.loop ? new t.controller.LinearSpline(t.slidesGrid, a.slidesGrid) : new t.controller.LinearSpline(t.snapGrid, a.snapGrid)) }, setTranslate: function(a, b) {
                                function d(b) { a = b.rtl && "horizontal" === b.params.direction ? -t.translate : t.translate, "slide" === t.params.controlBy && (t.controller.getInterpolateFunction(b), f = -t.controller.spline.interpolate(-a)), f && "container" !== t.params.controlBy || (e = (b.maxTranslate() - b.minTranslate()) / (t.maxTranslate() - t.minTranslate()), f = (a - t.minTranslate()) * e + b.minTranslate()), t.params.controlInverse && (f = b.maxTranslate() - f), b.updateProgress(f), b.setWrapperTranslate(f, !1, t), b.updateActiveIndex() } var e, f, g = t.params.control; if (t.isArray(g))
                                    for (var h = 0; h < g.length; h++) g[h] !== b && g[h] instanceof c && d(g[h]);
                                else g instanceof c && b !== g && d(g) }, setTransition: function(a, b) {
                                function d(b) { b.setWrapperTransition(a, t), 0 !== a && (b.onTransitionStart(), b.wrapper.transitionEnd(function() { f && (b.params.loop && "slide" === t.params.controlBy && b.fixLoop(), b.onTransitionEnd()) })) } var e, f = t.params.control; if (t.isArray(f))
                                    for (e = 0; e < f.length; e++) f[e] !== b && f[e] instanceof c && d(f[e]);
                                else f instanceof c && b !== f && d(f) } }, t.hashnav = { init: function() { if (t.params.hashnav) { t.hashnav.initialized = !0; var a = document.location.hash.replace("#", ""); if (a)
                                        for (var b = 0, c = 0, d = t.slides.length; d > c; c++) { var e = t.slides.eq(c),
                                                f = e.attr("data-hash"); if (f === a && !e.hasClass(t.params.slideDuplicateClass)) { var g = e.index();
                                                t.slideTo(g, b, t.params.runCallbacksOnInit, !0) } } } }, setHash: function() { t.hashnav.initialized && t.params.hashnav && (document.location.hash = t.slides.eq(t.activeIndex).attr("data-hash") || "") } }, t.disableKeyboardControl = function() { t.params.keyboardControl = !1, b(document).off("keydown", i) }, t.enableKeyboardControl = function() { t.params.keyboardControl = !0, b(document).on("keydown", i) }, t.mousewheel = { event: !1, lastScrollTime: (new window.Date).getTime() }, t.params.mousewheelControl) { try { new window.WheelEvent("wheel"), t.mousewheel.event = "wheel" } catch (K) {} t.mousewheel.event || void 0 === document.onmousewheel || (t.mousewheel.event = "mousewheel"), t.mousewheel.event || (t.mousewheel.event = "DOMMouseScroll") } t.disableMousewheelControl = function() { return t.mousewheel.event ? (t.container.off(t.mousewheel.event, j), !0) : !1 }, t.enableMousewheelControl = function() { return t.mousewheel.event ? (t.container.on(t.mousewheel.event, j), !0) : !1 }, t.parallax = { setTranslate: function() { t.container.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() { k(this, t.progress) }), t.slides.each(function() { var a = b(this);
                                a.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() { var b = Math.min(Math.max(a[0].progress, -1), 1);
                                    k(this, b) }) }) }, setTransition: function(a) { "undefined" == typeof a && (a = t.params.speed), t.container.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() { var c = b(this),
                                    d = parseInt(c.attr("data-swiper-parallax-duration"), 10) || a;
                                0 === a && (d = 0), c.transition(d) }) } }, t._plugins = [];
                    for (var L in t.plugins) { var M = t.plugins[L](t, t.params[L]);
                        M && t._plugins.push(M) }
                    return t.callPlugins = function(a) { for (var b = 0; b < t._plugins.length; b++) a in t._plugins[b] && t._plugins[b][a](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]) }, t.emitterEventListeners = {}, t.emit = function(a) { t.params[a] && t.params[a](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]); var b; if (t.emitterEventListeners[a])
                            for (b = 0; b < t.emitterEventListeners[a].length; b++) t.emitterEventListeners[a][b](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                        t.callPlugins && t.callPlugins(a, arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]) }, t.on = function(a, b) { return a = l(a), t.emitterEventListeners[a] || (t.emitterEventListeners[a] = []), t.emitterEventListeners[a].push(b), t }, t.off = function(a, b) { var c; if (a = l(a), "undefined" == typeof b) return t.emitterEventListeners[a] = [], t; if (t.emitterEventListeners[a] && 0 !== t.emitterEventListeners[a].length) { for (c = 0; c < t.emitterEventListeners[a].length; c++) t.emitterEventListeners[a][c] === b && t.emitterEventListeners[a].splice(c, 1); return t } }, t.once = function(a, b) { a = l(a); var c = function() { b(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]), t.off(a, c) }; return t.on(a, c), t }, t.a11y = { makeFocusable: function(a) { return a.attr("tabIndex", "0"), a }, addRole: function(a, b) { return a.attr("role", b), a }, addLabel: function(a, b) { return a.attr("aria-label", b), a }, disable: function(a) { return a.attr("aria-disabled", !0), a }, enable: function(a) { return a.attr("aria-disabled", !1), a }, onEnterKey: function(a) { 13 === a.keyCode && (b(a.target).is(t.params.nextButton) ? (t.onClickNext(a), t.isEnd ? t.a11y.notify(t.params.lastSlideMessage) : t.a11y.notify(t.params.nextSlideMessage)) : b(a.target).is(t.params.prevButton) && (t.onClickPrev(a), t.isBeginning ? t.a11y.notify(t.params.firstSlideMessage) : t.a11y.notify(t.params.prevSlideMessage)), b(a.target).is("." + t.params.bulletClass) && b(a.target)[0].click()) }, liveRegion: b('<span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>'), notify: function(a) { var b = t.a11y.liveRegion;
                            0 !== b.length && (b.html(""), b.html(a)) }, init: function() { if (t.params.nextButton) { var a = b(t.params.nextButton);
                                t.a11y.makeFocusable(a), t.a11y.addRole(a, "button"), t.a11y.addLabel(a, t.params.nextSlideMessage) } if (t.params.prevButton) { var c = b(t.params.prevButton);
                                t.a11y.makeFocusable(c), t.a11y.addRole(c, "button"), t.a11y.addLabel(c, t.params.prevSlideMessage) } b(t.container).append(t.a11y.liveRegion) }, initPagination: function() { t.params.pagination && t.params.paginationClickable && t.bullets && t.bullets.length && t.bullets.each(function() { var a = b(this);
                                t.a11y.makeFocusable(a), t.a11y.addRole(a, "button"), t.a11y.addLabel(a, t.params.paginationBulletMessage.replace(/{{index}}/, a.index() + 1)) }) }, destroy: function() { t.a11y.liveRegion && t.a11y.liveRegion.length > 0 && t.a11y.liveRegion.remove() } }, t.init = function() { t.params.loop && t.createLoop(), t.updateContainerSize(), t.updateSlidesSize(), t.updatePagination(), t.params.scrollbar && t.scrollbar && (t.scrollbar.set(), t.params.scrollbarDraggable && t.scrollbar.enableDraggable()), "slide" !== t.params.effect && t.effects[t.params.effect] && (t.params.loop || t.updateProgress(), t.effects[t.params.effect].setTranslate()), t.params.loop ? t.slideTo(t.params.initialSlide + t.loopedSlides, 0, t.params.runCallbacksOnInit) : (t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit), 0 === t.params.initialSlide && (t.parallax && t.params.parallax && t.parallax.setTranslate(), t.lazy && t.params.lazyLoading && (t.lazy.load(), t.lazy.initialImageLoaded = !0))), t.attachEvents(), t.params.observer && t.support.observer && t.initObservers(), t.params.preloadImages && !t.params.lazyLoading && t.preloadImages(), t.params.autoplay && t.startAutoplay(), t.params.keyboardControl && t.enableKeyboardControl && t.enableKeyboardControl(), t.params.mousewheelControl && t.enableMousewheelControl && t.enableMousewheelControl(), t.params.hashnav && t.hashnav && t.hashnav.init(), t.params.a11y && t.a11y && t.a11y.init(), t.emit("onInit", t) }, t.cleanupStyles = function() { t.container.removeClass(t.classNames.join(" ")).removeAttr("style"), t.wrapper.removeAttr("style"), t.slides && t.slides.length && t.slides.removeClass([t.params.slideVisibleClass, t.params.slideActiveClass, t.params.slideNextClass, t.params.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-column").removeAttr("data-swiper-row"), t.paginationContainer && t.paginationContainer.length && t.paginationContainer.removeClass(t.params.paginationHiddenClass), t.bullets && t.bullets.length && t.bullets.removeClass(t.params.bulletActiveClass), t.params.prevButton && b(t.params.prevButton).removeClass(t.params.buttonDisabledClass), t.params.nextButton && b(t.params.nextButton).removeClass(t.params.buttonDisabledClass), t.params.scrollbar && t.scrollbar && (t.scrollbar.track && t.scrollbar.track.length && t.scrollbar.track.removeAttr("style"), t.scrollbar.drag && t.scrollbar.drag.length && t.scrollbar.drag.removeAttr("style")) }, t.destroy = function(a, b) { t.detachEvents(), t.stopAutoplay(), t.params.scrollbar && t.scrollbar && t.params.scrollbarDraggable && t.scrollbar.disableDraggable(), t.params.loop && t.destroyLoop(), b && t.cleanupStyles(), t.disconnectObservers(), t.params.keyboardControl && t.disableKeyboardControl && t.disableKeyboardControl(), t.params.mousewheelControl && t.disableMousewheelControl && t.disableMousewheelControl(), t.params.a11y && t.a11y && t.a11y.destroy(), t.emit("onDestroy"), a !== !1 && (t = null) }, t.init(), t
                }
            };
            c.prototype = { isSafari: function() { var a = navigator.userAgent.toLowerCase(); return a.indexOf("safari") >= 0 && a.indexOf("chrome") < 0 && a.indexOf("android") < 0 }(), isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent), isArray: function(a) { return "[object Array]" === Object.prototype.toString.apply(a) }, browser: { ie: window.navigator.pointerEnabled || window.navigator.msPointerEnabled, ieTouch: window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints > 1 || window.navigator.pointerEnabled && window.navigator.maxTouchPoints > 1 }, device: function() { var a = navigator.userAgent,
                        b = a.match(/(Android);?[\s\/]+([\d.]+)?/),
                        c = a.match(/(iPad).*OS\s([\d_]+)/),
                        d = a.match(/(iPod)(.*OS\s([\d_]+))?/),
                        e = !c && a.match(/(iPhone\sOS)\s([\d_]+)/); return { ios: c || e || d, android: b } }(), support: { touch: window.Modernizr && Modernizr.touch === !0 || function() { return !!("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch) }(), transforms3d: window.Modernizr && Modernizr.csstransforms3d === !0 || function() { var a = document.createElement("div").style; return "webkitPerspective" in a || "MozPerspective" in a || "OPerspective" in a || "MsPerspective" in a || "perspective" in a }(), flexbox: function() { for (var a = document.createElement("div").style, b = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), c = 0; c < b.length; c++)
                            if (b[c] in a) return !0 }(), observer: function() { return "MutationObserver" in window || "WebkitMutationObserver" in window }() }, plugins: {} };
            for (var d = ["jQuery", "Zepto", "Dom7"], e = 0; e < d.length; e++) window[d[e]] && a(window[d[e]]);
            var f;
            f = "undefined" == typeof Dom7 ? window.Dom7 || window.Zepto || window.jQuery : Dom7, f && ("transitionEnd" in f.fn || (f.fn.transitionEnd = function(a) {
                function b(f) { if (f.target === this)
                        for (a.call(this, f), c = 0; c < d.length; c++) e.off(d[c], b) } var c, d = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"],
                    e = this; if (a)
                    for (c = 0; c < d.length; c++) e.on(d[c], b); return this }), "transform" in f.fn || (f.fn.transform = function(a) { for (var b = 0; b < this.length; b++) { var c = this[b].style;
                    c.webkitTransform = c.MsTransform = c.msTransform = c.MozTransform = c.OTransform = c.transform = a } return this }), "transition" in f.fn || (f.fn.transition = function(a) { "string" != typeof a && (a += "ms"); for (var b = 0; b < this.length; b++) { var c = this[b].style;
                    c.webkitTransitionDuration = c.MsTransitionDuration = c.msTransitionDuration = c.MozTransitionDuration = c.OTransitionDuration = c.transitionDuration = a } return this })), window.Swiper = c
        }(), "undefined" != typeof b ? b.exports = window.Swiper : "function" == typeof define && define.amd && define([], function() { "use strict"; return window.Swiper })
    }, {}],
    10: [function(a, b, c) { "use strict"; var d = jQuery;
        b.exports = function(b) {
            function c() { s.css({ height: C.height() - parseInt(r.css("top").replace("px", "")) - 75 + "px" }) }

            function e() { F("skrollexThemeCustomized", "yes") }

            function f() { F("skrollexThemeCustomized", "") }

            function g() { var a = G("skrollexThemeCustomized"); return "yes" === a }

            function h() { for (var a = 0; A > a; a++) i(String.fromCharCode(65 + a).toLowerCase());
                l('<span><span class="primary-color"></span></span>', ".primary-color", "color", "input.primary-bg", "primary-bg", p), l('<span><span class="out-primary"></span></span>', ".out-primary", "opacity", "input.primary-out", "primary-out", j, k), l('<span><span class="success-color"></span></span>', ".success-color", "color", "input.success-bg", "success-bg", p), l('<span><span class="out-success"></span></span>', ".out-success", "opacity", "input.success-out", "success-out", j, k), l('<span><span class="info-color"></span></span>', ".info-color", "color", "input.info-bg", "info-bg", p), l('<span><span class="out-info"></span></span>', ".out-info", "opacity", "input.info-out", "info-out", j, k), l('<span><span class="warning-color"></span></span>', ".warning-color", "color", "input.warning-bg", "warning-bg", p), l('<span><span class="out-warning"></span></span>', ".out-warning", "opacity", "input.warning-out", "warning-out", j, k), l('<span><span class="danger-color"></span></span>', ".danger-color", "color", "input.danger-bg", "danger-bg", p), l('<span><span class="out-danger"></span></span>', ".out-danger", "opacity", "input.danger-out", "danger-out", j, k) }

            function i(a) { l('<span class="colors-' + a + '"><span class="bg-color"></span></span>', ".bg-color", "color", "input." + a + "-bg", a + "-bg", p), l('<span class="colors-' + a + '"><span class="text"></span></span>', ".text", "color", "input." + a + "-text", a + "-text", p), l('<span class="colors-' + a + '"><span class="highlight"></span></span>', ".highlight", "color", "input." + a + "-highlight", a + "-highlight", p), l('<span class="colors-' + a + '"><span class="link"></span></span>', ".link", "color", "input." + a + "-link", a + "-link", p), l('<span class="colors-' + a + '"><span class="heading"></span></span>', ".heading", "color", "input." + a + "-heading", a + "-heading", p), l('<span class="colors-' + a + '"><span class="out"></span></span>', ".out", "opacity", "input." + a + "-out", a + "-out", j, k) }

            function j(a) { return Math.round(100 * (1 - a)) }

            function k(a) { return Math.round(a) }

            function l(a, b, c, f, g, h, i) { var j = 300,
                    k = d('<span class="getter"></span>').appendTo("body");
                d(a).appendTo(k); var l = k.find(b).css(c);
                k.remove(), l && h && (l = h(l)), B.lessVars[g] = l; var m = s.find(f); if (m.val(l), "color" === c) m.data("getted", l), m.data("color-pane") ? m.minicolors("value", l) : (m.data("color-pane", !0), m.minicolors({ control: d(this).attr("data-control") || "hue", defaultValue: d(this).attr("data-defaultValue") || "", inline: "true" === d(this).attr("data-inline"), letterCase: d(this).attr("data-letterCase") || "lowercase", opacity: !1, position: d(this).attr("data-position") || "top left", changeDelay: j, change: function(a, b) { a != m.data("getted") && (m.data("getted", a), e(), B.lessVars[g] = a, n()) }, show: function() { var a = m.parent(),
                            b = a.children(".minicolors-panel"),
                            c = b.outerHeight(!0),
                            e = b.outerWidth(!0),
                            f = d(window),
                            g = f.width(),
                            h = f.height(),
                            i = b.offset(),
                            j = i.left - d(document).scrollLeft(),
                            k = i.top - d(document).scrollTop();
                        j + e > g && (j = g - e - 5), k + c > h && (k = h - c - 2), 0 > k && (k = 2), b.css({ position: "fixed", left: j + "px", top: k + "px" }) }, hide: function() { m.parent().children(".minicolors-panel").css({ position: "", left: "", top: "" }) }, theme: "bootstrap" }));
                else { var o;
                    m.change(function() { var a = d(this),
                            b = a.val();
                        o && clearTimeout(o), e(), B.lessVars[g] = b, n() }) } }

            function m() { return B.isShowPanel ? (d(".top-pane .reset").click(function(a) { a.preventDefault(), f(), B.hide(), d("#" + E).remove(), D = !1; var b = s.find(".options-gate"); return b.css({ visibility: "visible" }), b.css({ opacity: 1 }), sessionStorage.setItem("lessVars", JSON.stringify({})), B.lessVars = {}, !1 }), r.css({ left: -1 * u + "px" }), t.click(function(a) { return a.preventDefault(), skrollexConfig.isCustomizer ? (F("skrollexShowColorPanel", "yes"), window.parent.location = skrollexConfig.permalink) : r.hasClass("on") ? B.hide() : B.show(), !1 }), s.find(".save-custom-css").click(function(a) { a.preventDefault();
                    v.find(".css-content"); if (a.shiftKey) { var b = '@import "theme.less";\r\n\r\n'; for (var c in B.lessVars) b = b + "@" + c + ": " + B.lessVars[c] + ";\r\n";
                        v.find(".css-content").text(b), new TWEEN.Tween({ autoAlpha: 0, x: -450 }).to({ autoAlpha: 1, x: 0 }, 400).onUpdate(function() { v.css({ opacity: this.autoAlpha, visibility: this.autoAlpha > 0 ? "visible" : "hidden" }), Modernizr.csstransforms3d && z.force3D ? v.css({ transform: "translate3d(" + this.x + "px, 0px, 0px)" }) : v.css({ transform: "translate(" + this.x + "px, 0px)" }) }).easing(TWEEN.Easing.Quadratic.Out).start() } else if (d("body").hasClass("admin-bar")) { q || n(); var b = q.replace(/(\r\n|\r|\n)/g, "\r\n"),
                            e = d("#save-custom-css"),
                            f = d('<input type="hidden" id="content" name="content">').val(b).appendTo(e);
                        e.submit(), f.remove() } else alert("Saving is not allowed in demo mode."); return !1 }), v.find(".close-panel").click(function(a) { return a.preventDefault(), new TWEEN.Tween({ autoAlpha: 1, x: 0 }).to({ autoAlpha: 0, x: -450 }, 400).onUpdate(function() { v.css({ opacity: this.autoAlpha, visibility: this.autoAlpha > 0 ? "visible" : "hidden" }), Modernizr.csstransforms3d && z.force3D ? v.css({ transform: "translate3d(" + this.x + "px, 0px, 0px)" }) : v.css({ transform: "translate(" + this.x + "px, 0px)" }) }).easing(TWEEN.Easing.Linear.None).start(), !1 }), y.selectTextarea(v.find("textarea")), void 0) : void r.hide() }

            function n(a) { var b = atob(customLess);
                sessionStorage.setItem("lessVars", JSON.stringify(B.lessVars)), o(b, function(b) { if (!a) { q = b; var c = d("#" + E);
                        c.length < 1 ? d('<style type="text/css" id="' + E + '">\n' + b + "</style>").appendTo("head") : c[0].innerHTML ? c[0].innerHTML = q : c[0].styleSheet.cssText = q } }) }

            function o(a, b) { less.render(a, { currentDirectory: "assets/css/src/schemes/", filename: skrollexConfig.themeUri + "assets/css/src/schemes/colors-custom.less", entryPath: "assets/css/src/schemes/", rootpath: "assets/css/src/schemes/", rootFilename: "assets/css/src/schemes/colors-custom.less", relativeUrls: !1, useFileCache: !1, compress: !1, modifyVars: B.lessVars, globalVars: less.globalVars }, function(a, c) { b(c.css) }) }

            function p(a) {
                function b(a) { if (isNaN(a)) return "00"; var b = parseInt(a).toString(16); return 1 == b.length ? "0" + b : b } if (-1 === a.indexOf("rgb")) return a; var c = a.match(/[^0-9]*([0-9]*)[^0-9]*([0-9]*)[^0-9]*([0-9]*)[^0-9]*/i); return "#" + b(c[1]) + b(c[2]) + b(c[3]) } var q, r, s, t, u, v, w, x = a("../app/themes.js"),
                y = a("../tools/tools.js"),
                z = (a("../widgets/loading.js"), a("../app/app-share.js")),
                x = a("../app/themes.js"),
                A = x.colors,
                B = this,
                C = d(window),
                D = !1,
                E = "edit-mode-styles",
                F = (d(".gate .loader"), d("html").hasClass("mobile"), function(a, b) { sessionStorage.setItem(a, b) }),
                G = function(a) { return sessionStorage.getItem(a) };
            this.lessVars = {}, this.isShowPanel = function() { return skrollexConfig.isInitColorPanel ? (F("skrollexCustomize", "yes"), !0) : d("html").hasClass("select-theme") ? (F("skrollexCustomize", "yes"), !1) : G("skrollexCustomize") ? !0 : !1 }(), this.show = function() { r.css({ left: "0px" }), r.addClass("on"), r.transitionEnd(function() { for (var a = 0; a < x.colors; a++) { var b = String.fromCharCode(65 + a),
                            c = b.toLowerCase();
                        d(".colors-" + c + ", .background-" + c + ", .background-lite-" + c + ", .background-hard-" + c).not(".no-colors-label").each(function() { var a = d(this),
                                c = d('<span class="colors-label">Colors ' + b + "</span>"),
                                e = a.offset(),
                                f = a.height(),
                                g = a.width();
                            e.left + g > 200 ? c.css("right", "10%") : c.css("left", "10%"), 30 > f && (e.top > 10 ? c.css("top", "-6px") : c.css("top", "0px")), 400 > f ? c.css("top", "25%") : c.css("top", "100px"), c.hover(function() { a.addClass("light-colors-block") }, function() { a.removeClass("light-colors-block") }).appendTo(a) }) } if (!D) { D = !0, n(!0), h(); var e = s.find(".options-gate");
                        e.css({ opacity: 0, visibility: "hidden" }) } d(".colors-label").addClass("show") }, 500) }, this.hide = function() { r.css({ left: -1 * u + "px" }), r.removeClass("on"), d(".colors-label").off("hover").removeClass("show"), setTimeout(function() { d(".colors-label").remove() }, 1e3) }, B.isShowPanel ? d('<div id="customize-panel"></div>').appendTo("body").load(skrollexConfig.themeUri + "includes/generated/colors/color-panel.php #customize-panel>*", function(a, e, i) { "success" !== e && "notmodified" !== e ? (d("#customize-panel").remove(), b.afterConfigure()) : d.getScript(skrollexConfig.themeUri + "assets/js/custom-less.js?" + (new Date).getTime(), function(a, e, i) { if ("success" !== e && "notmodified" !== e) d("#customize-panel").remove(), b.afterConfigure();
                    else { r = d("#customize-panel"), s = r.find(".options"), t = r.find(".toggle-button"), u = s.outerWidth(), v = r.find(".custom-css"), w = s.find(".colors"), m(); var j = G("skrollexLastColors");
                        j && j !== skrollexConfig.colors && f(), g() && (D = !0, B.lessVars = JSON.parse(sessionStorage.getItem("lessVars")), n(), h(), s.find(".options-gate").css({ visibility: "hidden" })), C.resize(c), c(), ("yes" === G("skrollexShowColorPanel") && !skrollexConfig.isCustomizer || "yes" === y.getUrlParameter("show-color-panel")) && (F("skrollexShowColorPanel", "no"), B.show()), F("skrollexLastColors", skrollexConfig.colors), b.afterConfigure() } }) }) : b.afterConfigure() } }, { "../app/app-share.js": 5, "../app/themes.js": 8, "../tools/tools.js": 12, "../widgets/loading.js": 19 }],
    11: [function(require, module, exports) {
        "use strict";
        var $ = jQuery;
        $(function() {
            !new function() {
                function onBodyHeightResize() { buildSizes(), scrolling.scroll(tools.windowYOffset()), calcNavigationLinkTriggers() }

                function widgets($context) { new Sliders($context), isMobile || $context.find(".hover-dir").each(function() { $(this).hoverdir({ speed: 300 }) }), $context.find("a").click(function(a) { var b = $(this); if (!b.data("toggle") && !b.hasClass("menu-toggle")) { var c = customizerUrl(document.location.href); return !skrollexConfig.isCustomizer || !b.attr("href") || c !== this.href && c + "/" !== this.href && c !== this.href + "/" || getHash(this.href) ? navigate(this.href, this.hash, a, b) : (tools.scrollTo(0), a.preventDefault(), !1) } }), fluid.setup($context), new Map($context), new Counter($context, me), new ChangeColors($context), new Skillbar($context, me), new TextBg($context, me), new TextMask($context), new TextFit($context), new TextFullscreen($context), new AjaxForm($context), new CssAnimation($context, me), $(".widget-tabs a").click(function(a) { return a.preventDefault(), $(this).tab("show"), !1 }), $context.find("video").each(function() { void 0 !== $(this).attr("muted") && (this.muted = !0) }), $context.find(".open-overlay-window").each(function() { var a = $(this),
                            b = $(a.data("overlay-window")),
                            c = new OverlayWindow(b);
                        a.click(function(a) { return a.preventDefault(), c.show(), !1 }) }); var $fbox = $context.find(".fancybox"); if ("function" == typeof $fbox.fancybox) { var opts = { overlayShow: !0, hideOnOverlayClick: !0, overlayOpacity: .93, overlayColor: "#000004", showCloseButton: !0, padding: 0, centerOnScroll: !0, enableEscapeButton: !0, autoScale: !0 };
                        jQuery(".youtube-popup").addClass("nofancybox").fancybox(jQuery.extend({}, opts, { type: "iframe", width: 1280, height: 720, padding: 0, titleShow: !1, titlePosition: "float", titleFromAlt: !0, onStart: function(a, b, c) { c.href = a[b].href.replace(new RegExp("youtu.be", "i"), "www.youtube.com/embed").replace(new RegExp("watch\\?(.*)v=([a-z0-9_-]+)(&amp;|&|\\?)?(.*)", "i"), "embed/$2?$1$4"); var d = c.href.indexOf("?"),
                                    e = d > -1 ? c.href.substring(d) : "";
                                c.allowfullscreen = e.indexOf("fs=0") > -1 ? !1 : !0 } })) } if (isMobile) $context.find(".textillate").children(".texts").css({ display: "inline" }).children(":not(span:first-of-type)").css({ display: "none" });
                    else { var $tlt = $context.find(".textillate");
                        $tlt.textillate(eval("(" + $tlt.data("textillate-options") + ")")) } var columnH = function() { $context.find(".col-height").each(function() { var a = $(this);
                            a.width() === a.parent().width() ? (a.css({ "min-height": "0" }), a.children(".position-middle-center").removeClass("position-middle-center").addClass("position-middle-center-mark").css({ padding: "20px" })) : (a.css({ "min-height": "" }), a.children(".position-middle-center-mark").removeClass("position-middle-center-mark").addClass("position-middle-center").css({ padding: "" })) }) };
                    $(window).resize(columnH), columnH(); var svgOverlays = function() { $context.find("svg.fg-overlay").each(function() { var a = $(this),
                                b = a.parent().width(),
                                c = a.parent().height(),
                                d = b > c ? b : c;
                            a.attr("width", d).attr("height", d) }) }; if ($(window).resize(svgOverlays), svgOverlays(), skrollexConfig.isCustomizer) { var svgUrlFix = function() { $context.find("svg").each(function() { var a = Snap($(this)[0]),
                                    b = function(a, b) { var c = window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search + "#";
                                        a.node.setAttribute(b, a.node.getAttribute(b).replace("url('#", "url('" + c).replace('url("#', 'url("' + c).replace("url(#", "url(" + c)) };
                                a.selectAll("[mask]").forEach(function(a) { b(a, "mask") }), a.selectAll("[fill]").forEach(function(a) { b(a, "fill") }), a.selectAll("[filter]").forEach(function(a) { b(a, "filter") }) }) };
                        $(window).resize(svgUrlFix), svgUrlFix() } $context.find(".masonry-grd").each(function() { $(this).masonry({ itemSelector: ".masonry-item:not(.hidden-item)", layoutMode: "masonry", gutter: 0, percentPosition: !0, isFitWidth: !1 }) }) }

                function unwidgets(a) { new Sliders(a, !0), a.find(".player").each(function() { var a = $(this).data("player-ind");
                        me.players[a].pause(), me.players.splice(a, 1) }), a.find(".overlay-content, .loaded-content").empty() }

                function navigate(a, b, c, d) { var e = deleteHash(a); if (b && (location === e || location + "/" === e || location === e + "/") && -1 === b.indexOf("!")) { var f = function() { if ("#scroll-down" === b && c) { var a = !1,
                                    d = $(c.target),
                                    e = d.offset().top; return $(".wrapper-content .view").each(function() { var b = $(this); return b.offset().top + 100 > e ? (a = b, !1) : void 0 }), a && a.length > 0 ? a : (a = $(".wrapper-content .view"), a.length > 1 ? $(a.get(1)) : 1 === a.length && a.offset().top > 300 ? a : null) } return $(b) }(); if (c && c.preventDefault(), null !== f && f.length > 0) { var g = f.offset().top - me.topNav.state2H,
                                h = f.get(0).tagName.toLowerCase();
                            ("h1" === h || "h2" === h || "h3" === h || "h4" === h || "h5" === h || "h6" === h) && (g -= 20), 0 > g && (g = 0), tools.scrollTo(g) } else "#scroll-down" === b ? tools.scrollTo(Math.round($(window).height() / 2)) : tools.scrollTo(0); return skrollexConfig.isCustomizer && sessionStorage.setItem("navigate", ""), !1 } if (c && a !== location + "#") { if (!d.attr("target")) { var i = function() { c.preventDefault(); var b = me.topNav.isState1;
                                me.topNav.state2(), loading.gate(function() { window.location = a }), $(window).one("pageshow popstate", function(a) { loading.ungate(), b && me.topNav.state1() }) };
                            skrollexConfig.isCustomizer ? 0 === a.indexOf(skrollexConfig.homeUri) && sessionStorage.setItem("navigate", a) : d.hasClass("page-transition") ? i() : $pageTransition.each(function() { var a = $(this).get(0);
                                $.contains(a, d[0]) && i() }) } } else skrollexConfig.isCustomizer && sessionStorage.setItem("navigate", "") }

                function calcNavigationLinkTriggers() { var a = $window.height(),
                        b = a / 3;
                    sectionTriggers = [], $sections.each(function(a) { var c = $(this),
                            d = c.attr("id"); if (d) { var e = c.data("position");
                            sectionTriggers.push({ hash: "#" + d, triggerOffset: e - b, position: e }) } }), trigNavigationLinks(tools.windowYOffset()) }

                function trigNavigationLinks(a) { for (var b, c = 0; c < sectionTriggers.length; c++) sectionTriggers[c].triggerOffset < a && (0 === c || sectionTriggers[c - 1].position < a) && (b = sectionTriggers[c].hash); if (b != lastActiveSectionHash) { var d = location + b;
                        lastActiveSectionHash = b; var e = []; for ($navLinks.each(function() { var a = $(this);
                                this.href === d && (a.addClass("active"), a.removeClass("target"), e.push(a.data("navigation-group"))) }), c = 0; c < e.length; c++) $navLinks.each(function() { var a = $(this);
                            this.href !== d && e[c] === a.data("navigation-group") && a.removeClass("active") });
                        app.changeSection(me, b) } }

                function buildSizes() { app.buildSizes(me), maxScrollPosition = $("body").height() - $window.height(); for (var a = 0; a < me.players.length; a++) { var b = me.players[a].$view;
                        b.data("position", b.offset().top) } }! function() { window.skrollexConfig = eval("(" + $("html").data("skrollex-config") + ")"), window.skrollexConfig.screenshotMode = !1, window.skrollexConfig.animations = !1, window.skrollexConfig.animations && $("html").addClass("no-animations"), $("html").addClass("dom-ready"); var disableMobileAnimations = !0,
                        isWin = -1 !== navigator.appVersion.indexOf("Win");
                    isWin && $("html").addClass("win"); var ua = navigator.userAgent.toLowerCase(),
                        isEdge = ua.indexOf("edge") > -1;
                    isEdge && $("html").addClass("edge"); var isChrome = !isEdge && ua.indexOf("chrome") > -1;
                    isChrome && $("html").addClass("chrome"); var isAndroidBrowser4_3minus = ua.indexOf("mozilla/5.0") > -1 && ua.indexOf("android ") > -1 && ua.indexOf("applewebkit") > -1 && !(ua.indexOf("chrome") > -1);
                    isAndroidBrowser4_3minus && $("html").addClass("android-browser-4_3minus"); var nua = navigator.userAgent,
                        isAndroidBrowser = nua.indexOf("Mozilla/5.0") > -1 && nua.indexOf("Android ") > -1 && nua.indexOf("AppleWebKit") > -1 && !(nua.indexOf("Chrome") > -1);
                    isAndroidBrowser && $("html").addClass("android-browser"); var isSafari = !isChrome && -1 !== ua.indexOf("safari") && ua.indexOf("windows") < 0;
                    isSafari && $("html").addClass("safari"); var isMobile = Modernizr.touch;
                    isMobile ? ($("html").addClass("mobile"), disableMobileAnimations && $("html").addClass("poor-browser")) : $("html").addClass("non-mobile"), isWin && isSafari && $("html").addClass("flat-animation"), navigator.userAgent.indexOf("MSIE 9.") > -1 ? $("html").addClass("ie9") : navigator.userAgent.indexOf("MSIE 10.") > -1 ? $("html").addClass("ie10") : navigator.userAgent.match(/Trident.*rv\:11\./) && $("html").addClass("ie11"), window.skrollexConfig.screenshotMode && $("html").addClass("hide-skroll-bar"), window.console ? window.console.log || (window.console.log = function() {}) : window.console = { log: function() {} }, "undefined" == typeof window.atob && (window.atob = function(a) { return base64.decode(a) }) }();
                var Customize = require("./customize/customize.js"),
                    TopNav = require("./widgets/top-nav.js"),
                    MenuToggle = require("./widgets/menu-toggle.js"),
                    Players = require("./animation/players.js"),
                    Scrolling = require("./animation/scrolling.js"),
                    tools = require("./tools/tools.js"),
                    Gallery = require("./widgets/gallery.js"),
                    fluid = require("./widgets/fluid.js"),
                    Counter = require("./widgets/counter.js"),
                    ChangeColors = require("./widgets/change-colors.js"),
                    Sliders = require("./widgets/sliders.js"),
                    loading = require("./widgets/loading.js"),
                    CssAnimation = require("./animation/css-animation.js"),
                    dotScroll = require("./widgets/dot-scroll.js"),
                    Map = require("./widgets/map.js"),
                    Skillbar = require("./widgets/skillbar.js"),
                    TextBg = require("./widgets/text-bg.js"),
                    TextMask = require("./widgets/text-mask.js"),
                    TextFit = require("./widgets/text-fit.js"),
                    TextFullscreen = require("./widgets/text-fullscreen.js"),
                    AjaxForm = require("./widgets/ajax-form.js"),
                    YoutubeBG = require("./widgets/youtube-bg.js"),
                    VimeoBG = require("./widgets/vimeo-bg.js"),
                    VideoBG = require("./widgets/video-bg.js"),
                    app = require("./app/app.js"),
                    OverlayWindow = require("./widgets/overlay-window.js"),
                    isPoorBrowser = $("html").hasClass("poor-browser"),
                    isAndroid43minus = $("html").hasClass("android-browser-4_3minus"),
                    $pageTransition = $(".page-transition, .nav-links, .sidebar, .post-meta, .post-title, .post-image"),
                    me = this,
                    $window = $(window),
                    sectionQ = ".view>.fg",
                    $sections = $(sectionQ),
                    sectionTriggers = [],
                    lastActiveSectionHash, customizerUrl = function(a) {
                        var b = a;
                        if (skrollexConfig.isCustomizer) { var c = "wp-admin/customize.php?url=",
                                d = b.indexOf(c); if (d >= 0) b = decodeURIComponent(b.substring(d + c.length));
                            else { var e = "wp-admin/customize.php",
                                    f = b.indexOf(e);
                                f >= 0 && (b = b.substring(0, f)) } }
                        return b
                    },
                    deleteHash = function(a) { var b = a.indexOf("#"); return b >= 0 ? a.substr(0, b) : a },
                    getHash = function(a) { var b = a.indexOf("#"); return b >= 0 ? a.substr(b) : null },
                    location = deleteHash(customizerUrl(document.location.href)),
                    $navLinks = function() { var a = jQuery(); return $("#top-nav nav a").each(function() { var b = $(this);
                            (!this.hash || this.href === location + this.hash && $(sectionQ + this.hash).length > 0) && (b.data("navigation-group", "top-nav"), a = a.add(b)) }), a }(),
                    isMobile = $("html").hasClass("mobile"),
                    scrolling, maxScrollPosition, ticker = new function() { var a = this;
                        window.requestAnimFrame = function() { return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(a, b) { window.setTimeout(a, 1e3 / 60) } }(); var b = -1;
                        this.pageIsReady = !1,
                            function c(d) { if (a.pageIsReady) { var e = tools.windowYOffset();
                                    b !== e && (scrolling.scroll(e), trigNavigationLinks(e)), b = e, TWEEN.update(), app.tick() } loading.queue.length > 0 && loading.queue.pop()(), requestAnimFrame(c) }() };
                this.topNav = void 0, this.players = Players, this.afterConfigure = function() { var a = getHash(customizerUrl(window.location.href));
                    new YoutubeBG, new VimeoBG, new VideoBG, $("iframe[src*='youtube']:not(#ytpl-frame), iframe[src*='vimeo'], iframe[data-hold-src*='youtube']:not(#ytpl-frame), iframe[data-hold-src*='vimeo']").each(function() { var a = $(this);
                        a.parent().parent().data("oembed-url") || a.removeAttr("height").removeAttr("width").wrap("<div class='x40-embed-container'></div>") }), app.prepare(function() { loading.load(function() { $navLinks = $navLinks.add(dotScroll.links()).click(function() { $navLinks.removeClass("target"), $(this).addClass("target") }), me.topNav = new TopNav, new MenuToggle(me), scrolling = new Scrolling(me), $("#footer.animated .section-cols").addClass("scroll-in-animation").attr("data-animation", "fadeInDown"), widgets($("body")), new Gallery(onBodyHeightResize, widgets, unwidgets); var b = $window.width(),
                                c = $window.height();
                            $window.resize(function() { var a = $window.width(),
                                    d = $window.height();
                                (a !== b || d !== c) && (b = a, c = d, fluid.setup($("body")), onBodyHeightResize()) }), $(".masonry-grd").each(function() { $(this).masonry("on", "layoutComplete", function() { onBodyHeightResize() }) }), app.setup(function() { var b = function() { buildSizes(), calcNavigationLinkTriggers(), ticker.pageIsReady = !0, $navLinks.each(function() { this.href == location && $(this).addClass("active") }), $(".bigtext").each(function() { $(this).bigtext() }), app.ungated(), setTimeout(function() { loading.ungate(); var b = sessionStorage.getItem("navigate");
                                            skrollexConfig.isCustomizer && b ? navigate(b, getHash(b)) : skrollexConfig.isCustomizer || navigate(customizerUrl(window.location.href), a) }) },
                                    c = function() { for (var a = $(".non-preloading, .non-preloading img"), d = $("img").not(a), e = 0; e < d.length; e++)
                                            if ($(d[e]).attr("src") && (!d[e].width || !d[e].height) && (!d[e].naturalWidth || !d[e].naturalHeight)) return void setTimeout(c, 100);
                                        b() };
                                c() }) }) }) };
                var animEnd = function(a, b, c, d, e) { var f = 100,
                        g = 1e3; return a.each(function() { var a = this; if (c && !isAndroid43minus) { var h = !1; if ($(a).bind(b, function() { return h = !0, $(a).unbind(b), d.call(a) }), e >= 0 || void 0 === e) { var i = void 0 === e ? 1e3 : g + f;
                                setTimeout(function() { h || ($(a).unbind(b), d.call(a)) }, i) } } else d.call(a) }) };
                $.fn.animationEnd = function(a, b) { return animEnd(this, tools.animationEnd, Modernizr.cssanimations, a, b) }, $.fn.transitionEnd = function(a, b) { return animEnd(this, tools.transitionEnd, Modernizr.csstransitions, a, b) }, $.fn.stopTransition = function() { return this.css({ "-webkit-transition": "none", "-moz-transition": "none", "-ms-transition": "none", "-o-transition": "none", transition: "none" }) }, $.fn.cleanTransition = function() { return this.css({ "-webkit-transition": "", "-moz-transition": "", "-ms-transition": "", "-o-transition": "", transition: "" }) }, $.fn.nonTransition = function(a) { return this.stopTransition().css(a).cleanTransition() }, $.fn.transform = function(a, b) { return this.css(tools.transformCss(a, b)) }, $("video").each(function() { void 0 !== $(this).attr("muted") && (this.muted = !0) }), new Customize(me), isMobile || isPoorBrowser || $(document).bind("mousewheel DOMMouseScroll", function(a) { return 1 == a.ctrlKey ? (a.preventDefault(), !0) : void 0 })
            }
        })
    }, { "./animation/css-animation.js": 1, "./animation/players.js": 2, "./animation/scrolling.js": 3, "./app/app.js": 6, "./customize/customize.js": 10, "./tools/tools.js": 12, "./widgets/ajax-form.js": 13, "./widgets/change-colors.js": 14, "./widgets/counter.js": 15, "./widgets/dot-scroll.js": 16, "./widgets/fluid.js": 17, "./widgets/gallery.js": 18, "./widgets/loading.js": 19, "./widgets/map.js": 20, "./widgets/menu-toggle.js": 21, "./widgets/overlay-window.js": 22, "./widgets/skillbar.js": 23, "./widgets/sliders.js": 24, "./widgets/text-bg.js": 25, "./widgets/text-fit.js": 26, "./widgets/text-fullscreen.js": 27, "./widgets/text-mask.js": 28, "./widgets/top-nav.js": 29, "./widgets/video-bg.js": 30, "./widgets/vimeo-bg.js": 31, "./widgets/youtube-bg.js": 32 }],
    12: [function(a, b, c) { "use strict"; var d = jQuery;
        b.exports = new function() { var b = this,
                c = (a("../script.js"), d("html").hasClass("android-browser-4_3minus"));
            this.animationEnd = "animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", this.transitionEnd = "transitionend webkitTransitionEnd oTransitionEnd otransitionend", this.transition = ["-webkit-transition", "-moz-transition", "-ms-transition", "-o-transition", "transition"], this.transform = ["-webkit-transform", "-moz-transform", "-ms-transform", "-o-transform", "transform"], this.property = function(a, b, c) { for (var d = c ? c : {}, e = 0; e < a.length; e++) d[a[e]] = b; return d }, this.windowYOffset = void 0 !== window.pageYOffset ? function() { return window.pageYOffset } : "CSS1Compat" === document.compatMode ? function() { return document.documentElement.scrollTop } : function() { return document.body.scrollTop }, this.getUrlParameter = function(a) { for (var b = window.location.search.substring(1), c = b.split("&"), d = 0; d < c.length; d++) { var e = c[d].split("="); if (e[0] == a) return decodeURI(e[1]) } }, this.selectTextarea = function(a) { a.focus(function() { var a = d(this);
                    a.select(), a.mouseup(function() { return a.unbind("mouseup"), !1 }) }) }; var e;
            this.time = function(a) { if (e) { var b = Date.now();
                    console.log("==== " + (b - e) + " ms" + (a ? " | " + a : "")), e = b } else e = Date.now(), console.log("==== Timer started" + (a ? " | " + a : "")) }, this.scrollTo = function(a, c, d) { void 0 === d && (d = 1200), new TWEEN.Tween({ y: b.windowYOffset() }).to({ y: Math.round(a) }, d).onUpdate(function() { window.scrollTo(0, this.y) }).easing(TWEEN.Easing.Quadratic.InOut).onComplete(function() { c && c() }).start() }, this.androidStylesFix = function(a) { c && (a.hide(), a.get(0).offsetHeight, a.show()) }, this.transformCss = function(a, b) { var c = { "-webkit-transform": a, "-moz-transform": a, "-ms-transform": a, "-o-transform": a, transform: a }; return b && (c["-webkit-transform-origin"] = b, c["-moz-transform-origin"] = b, c["-ms-transform-origin"] = b, c["-o-transform-origin"] = b, c["transform-origin"] = b), c }, this.snapUrl = function(a) { if (skrollexConfig.isCustomizer) { var b = window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search + "#" + a.attr("id"); return "url('" + b + "')" } return a }, this.isMobile = navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i) } }, { "../script.js": 11 }],
    13: [function(a, b, c) { "use strict"; var d = jQuery;
        b.exports = function(b) { var c = a("./loading.js"),
                e = d(".gate .loader");
            b.find(".ajax-form").each(function() { var a = d(this);
                a.submit(function(b) { a.find(".help-block ul").length < 1 && (e.addClass("show"), c.gate(function() { var b = function(b) { d('<div class="ajax-form-alert alert heading fade in text-center">	<button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button> ' + b + "</div>").addClass(a.data("message-class")).appendTo("body"), c.ungate(), e.removeClass("show") };
                        d.ajax({ type: a.attr("method"), url: a.attr("action"), data: a.serialize(), success: function(c) { a[0].reset(), b(c) }, error: function(a, c) { b("Error: " + a.responseCode) } }) }), b.preventDefault()) }) }) } }, { "./loading.js": 19 }],
    14: [function(a, b, c) { "use strict"; var d = jQuery;
        b.exports = function(b) { var c = a("../app/themes.js");
            b.find(".change-colors").each(function() { for (var a, b = d(this), e = d(b.data("target")), f = b.find("a"), g = 0; g < c.colors; g++) { var h = "colors-" + String.fromCharCode(65 + g).toLowerCase();
                    e.hasClass(h) && (a = h, f.each(function() { var b = d(this);
                        b.data("colors") === a && b.addClass("active") })) } f.click(function(b) { b.preventDefault(); var c = d(this); return e.removeClass(a), a = c.data("colors"), e.addClass(a), f.removeClass("active"), c.addClass("active"), !1 }) }) } }, { "../app/themes.js": 8 }],
    15: [function(a, b, c) { "use strict"; var d = jQuery;
        b.exports = function(a, b) { var c = d("html").hasClass("poor-browser"),
                e = d("html").hasClass("no-animations");
            c || e || a.find(".counter .count").each(function() { var a = d(this),
                    c = parseInt(a.text()),
                    e = { n: 0 },
                    f = new TWEEN.Tween(e).to({ n: c }, 1e3).onUpdate(function() { a.text(Math.round(this.n)) }).easing(TWEEN.Easing.Quartic.InOut),
                    g = function() { f.stop() },
                    h = function() { e.n = 0, f.start() },
                    i = h;
                b.players.addPlayer(a, i, g, h) }) } }, {}],
    16: [function(a, b, c) { "use strict"; var d = jQuery;
        b.exports = new function() { var a, b = d("html").hasClass("mobile"),
                c = d(".wrapper-content>.view>.fg[id]"); if (!b && c.length > 1) { var e = d("#dot-scroll");
                c.each(function() { e.append('<li><a href="#' + d(this).attr("id") + '"><span></span></a></li>') }), a = e.find("a").data("navigation-group", "dot-scroll") } else a = jQuery();
            this.links = function() { return a } } }, {}],
    17: [function(a, b, c) { "use strict"; var d = jQuery;
        b.exports = new function() { this.setup = function(a) { a.find(".fluid *").each(function() { var a = d(this),
                        b = a.parent(".fluid"),
                        c = b.width(),
                        e = a.attr("data-aspect-ratio");
                    e || (e = this.height / this.width, a.attr("data-aspect-ratio", e).removeAttr("height").removeAttr("width")); var f = Math.round(c * e);
                    a.width(Math.round(c)).height(f), b.height(f) }) } } }, {}],
    18: [function(a, b, c) { "use strict"; var d = jQuery;
        b.exports = function(b, c, e) { var f, g, h, i = (a("../tools/tools.js"), a("./overlay-window.js")),
                j = (d("#top-nav"), d(".gallery-overlay")),
                k = j.find(".loader"),
                l = j.find(".overlay-content"),
                m = new i(j, c, e),
                n = j.find(".next"),
                o = j.find(".previos");
            n.click(function(a) { a.preventDefault(); var b = f.nextAll(".gallery-item:not(.hidden-item)").first(); return b.length < 1 && (b = g.filter(".gallery-item:not(.hidden-item)").first()), h(b), !1 }), o.click(function(a) { a.preventDefault(); var b = f.prevAll(".gallery-item:not(.hidden-item)").first(); return b.length < 1 && (b = g.filter(".gallery-item:not(.hidden-item)").last()), h(b), !1 }), d(".fg").each(function(a) {
                function b(a) { f = a, g = j, h = b, m.show(null, function() { k.removeClass("show"), l.addClass("show") }, function(b) { k.addClass("show"); var c = a.find(".gallery-item-content");
                        l.removeClass("show"), l.html(c.html()); var e = l.find(".default-slider");
                        e.removeClass("hold"); var f = e.find(".swiper-slide");
                        f.each(function(a) { var b = d(this); "yes" === b.data("as-bg") ? b.css({ "background-image": "url(" + b.data("hold-img") + ")" }) : b.after('<div class="swiper-slide"><img alt="' + b.data("alt") + '" src="' + b.data("hold-img") + '" /></div>').remove() }); var g = l.find("img"),
                            h = g.length;
                        h > 0 ? g.load(function() { h--, 0 === h && b() }) : b() }) } var c = d(this),
                    e = c.find(".gallery-grd"),
                    i = e.find(".item"),
                    j = c.find(".gallery-item"); if (!(i.length < 1 && j.length < 1)) { var n = c.find(".masonry-grd"),
                        o = !1,
                        p = c.data("default-group") ? c.data("default-group") : "all",
                        q = c.find(".filter a"),
                        r = c.find(".filter a[data-group=all]"),
                        s = p;
                    c.find(".filter a[data-group=" + p + "]").addClass("active"), q.click(function(a) { if (a.preventDefault(), o) return !1; var b = d(this),
                            c = b.hasClass("active"),
                            e = c ? "all" : b.data("group"); return s !== e && (s = e, q.removeClass("active"), c ? r.addClass("active") : b.addClass("active"), i.each(function() { var a = d(this),
                                b = a.data("groups"),
                                c = b ? b.split(/\s+/) : []; "all" == e || -1 != d.inArray(e, c) ? a.removeClass("hidden-item") : a.addClass("hidden-item") }), n.masonry("reloadItems"), n.masonry("layout")), !1 }), j.click(function(a) { return a.preventDefault(), b(d(this)), !1 }) } }) } }, { "../tools/tools.js": 12, "./overlay-window.js": 22 }],
    19: [function(a, b, c) { "use strict"; var d = jQuery;
        b.exports = new function() { var b = a("../tools/tools.js"),
                c = d(".gate"),
                e = c.find(".gate-bar"),
                f = d("html").hasClass("android-browser-4_3minus"),
                g = this;
            this.queue = [], this.load = function(a) { var b = [],
                    f = !1,
                    h = d(".non-preloading, .non-preloading img");
                skrollexConfig.isCustomizer || (d("img:visible").not(h).each(function() { var a = d(this),
                        c = a.attr("src");
                    c && -1 === d.inArray(c, b) && b.push(c) }), d("div.bg:visible").not(h).each(function() { var a = d(this),
                        c = a.css("background-image"); if ("none" != c) { var e = c.match(/url\(['"]?([^'")]*)/i);
                        e && e.length > 1 && !e[1].match(/data:/i) && -1 === d.inArray(e[1], b) && b.push(e[1]) } })), d(".loading-func:visible").not(h).each(function() { var a = d(this),
                        c = a.data("loading");
                    c && b.push(c) }); var i = 0; if (0 === b.length) f = !0, a();
                else { var j = setTimeout(function() { f || (f = !0, a()) }, 2e4);
                    skrollexConfig.isCustomizer || c.addClass("load-animation"), d("html").addClass("page-loading"); for (var k = 0, l = function() { i++, k = i / b.length * 100, e.css({ width: k + "%" }), i !== b.length || f || (clearTimeout(j), f = !0, a()) }, m = 0; m < b.length; m++)
                        if ("function" == typeof b[m]) b[m](l);
                        else { var n = new Image;
                            d(n).one("load error", function() { g.queue.push(l) }), n.src = b[m] } } }, this.gate = function(a) { d("html").addClass("page-is-gated"), e.css({ width: "0%" }), c.transitionEnd(function() { a && a() }).css({ opacity: 1, visibility: "visible" }) }, this.ungate = function(a) { d("html").removeClass("page-is-gated page-loading").addClass("page-is-loaded"), c.transitionEnd(function() { f && b.androidStylesFix(d("body")), a && a(), c.removeClass("load-animation") }).css({ opacity: 0, visibility: "hidden" }) } } }, { "../tools/tools.js": 12 }],
    20: [function(a, b, c) { "use strict"; var d = jQuery;
        b.exports = function(b) { var c = a("./overlay-window.js"); "undefined" != typeof google && b.find(".map-open").each(function() { var a = d(this),
                    b = d(a.data("map-overlay")).clone().appendTo("body");
                b.find(".overlay-view").append(a.parent().find(".map-canvas").clone()); var e = b.find(".map-canvas"),
                    f = { center: new google.maps.LatLng(e.data("latitude"), e.data("longitude")), zoom: e.data("zoom"), mapTypeId: google.maps.MapTypeId.ROADMAP },
                    g = [];
                e.find(".map-marker").each(function() { var a = d(this);
                    g.push({ latitude: a.data("latitude"), longitude: a.data("longitude"), text: a.data("text") }) }), e.addClass("close-map").wrap('<div class="map-view"></div>'); var h = e.parent(),
                    i = new c(b, !1, !1, function() { new TWEEN.Tween({ autoAlpha: 1 }).to({ autoAlpha: 0 }, 500).onUpdate(function() { h.css({ opacity: this.autoAlpha, visibility: this.autoAlpha > 0 ? "visible" : "hidden" }) }).easing(TWEEN.Easing.Linear.None).start() }),
                    j = !1;
                a.click(function(a) { return a.preventDefault(), i.show(!1, function() { var a = b.find(".overlay-control"),
                            c = b.find(".overlay-view"); if (h.css({ height: d(window).height() - a.height() - parseInt(c.css("bottom").replace("px", "")) + "px" }), h.css({ opacity: 1, visibility: "visible" }), !j) { j = !0; for (var i = new google.maps.Map(e[0], f), k = function(a, b) { var c = new google.maps.InfoWindow({ content: b });
                                    google.maps.event.addListener(a, "click", function() { c.open(i, a) }) }, l = 0; l < g.length; l++) { var m = new google.maps.Marker({ map: i, position: new google.maps.LatLng(g[l].latitude, g[l].longitude) }),
                                    n = g[l].text;
                                n && k(m, n) } } }), !1 }) }) } }, { "./overlay-window.js": 22 }],
    21: [function(a, b, c) { "use strict"; var d = jQuery;
        b.exports = function(a) { var b = ".ext-nav-toggle, .responsive-nav",
                c = d(b),
                e = d("html").hasClass("mobile"),
                f = function() { d(".responsive-nav").removeClass("show"), d("body").removeClass("responsive-nav-show"), e || (d(".textillate").children("span:nth-of-type(1)").css({ display: "" }), d(".textillate").children("span:nth-of-type(2)").css({ display: "none" }), d(".textillate").children("span:nth-of-type(2)").children().css({ display: "" })) };
            d(window).resize(function() { d("div[class*='off-canvas']").removeClass("open"), f() }), c.click(function(c) { c.preventDefault(); var g = d(this); if (g.hasClass("ext-nav-toggle")) { var h = g.data("target"),
                        i = d(h),
                        j = d(h + " a,#top-nav a:not(" + b + "),.page-border a, #dot-scroll a"),
                        k = function() { i.removeClass("show"), g.removeClass("show"), d("body").removeClass("ext-nav-show"), a.topNav.unforceState("ext-nav"), d("html, body").css({ overflow: "", position: "" }), j.unbind("click", k) };
                    g.hasClass("show") ? (i.removeClass("show"), g.removeClass("show"), d("body").removeClass("ext-nav-show"), j.unbind("click", k), a.topNav.unforceState("ext-nav")) : (i.addClass("show"), g.addClass("show"), d("body").addClass("ext-nav-show"), j.bind("click", k), a.topNav.forceState("ext-nav")) } else g.hasClass("show") ? f() : (e || (d(".textillate").children("span:nth-of-type(1)").css({ display: "none" }), d(".textillate").children("span:nth-of-type(2)").css({ display: "inline" }), d(".textillate").children("span:nth-of-type(2)").children(":not(.current)").css({ display: "none" })), g.addClass("show"), d("body").addClass("responsive-nav-show")) }) } }, {}],
    22: [function(a, b, c) { "use strict"; var d = jQuery;
        b.exports = function(a, b, c, e) {
            function f(a, b) { var c = d("html").hasClass("ie9") || d("html").hasClass("ie10");
                c ? (a.find("iframe").attr("src", ""), setTimeout(function() { b() }, 300)) : b() } var g = a.find(".cross"),
                h = d(a.data("overlay-zoom")),
                i = a.find(".overlay-view"),
                j = this;
            this.$overlay = a, this.show = function(c, e, f) { var g = function(j) { return f && !j ? void f(function() { g(!0) }) : (h.addClass("overlay-zoom"), void a.transitionEnd(function() { var f = function() { i.find("iframe").each(function() { var a = d(this),
                                    b = a.data("hold-src");
                                b && !a.attr("src") && (a[0].src = b), a.addClass("show") }) }; if (c) { var g = a.find(".loader"),
                                h = d('<div class="loaded-content"></div>');
                            g.addClass("show"), h.addClass("content-container").appendTo(i), h.load(c, function(c, d, i) {
                                function j() { f(), b && b(h), h.addClass("show"), g.removeClass("show"), e && e() } if ("success" !== d && "notmodified" !== d) return void h.text(d);
                                a.find("iframe").addClass("show"); var k = h.find("img"),
                                    l = k.length;
                                l > 0 ? k.load(function() { l--, 0 === l && j() }) : j() }) } else f(), b && b(i), e && e() }).addClass("show")) };
                a.hasClass("show") ? j.hide(g) : g() }, this.hide = function(b) { h.removeClass("overlay-zoom"), a.removeClass("show"), setTimeout(function() { var d = a.find(".loaded-content");
                    d.length > 0 ? (c && (a.find("iframe").removeClass("show"), c(a)), f(d, function() { d.remove(), e && e(), b && b() })) : (c && (a.find("iframe").removeClass("show"), c(a)), e && e(), b && b()) }, 500) }, g.click(function(a) { return a.preventDefault(), j.hide(), !1 }) } }, {}],
    23: [function(a, b, c) { "use strict"; var d = jQuery;
        b.exports = function(a, b) { var c = d("html").hasClass("poor-browser"),
                e = d("html").hasClass("no-animations");
            a.find(".skillbar").each(function() { var a = d(this),
                    f = a.find(".skillbar-bar"),
                    g = parseInt(a.attr("data-percent").replace("%", "")); if (c || e) f.css({ width: g + "%" });
                else { var h = { width: 0 },
                        i = new TWEEN.Tween(h).to({ width: g }, 1e3).onUpdate(function() { f.css({ width: this.width + "%" }) }).easing(TWEEN.Easing.Quartic.Out),
                        j = function() { i.stop() },
                        k = function() { h.width = 0, i.start() },
                        l = k;
                    b.players.addPlayer(a, l, j, k) } }) } }, {}],
    24: [function(require, module, exports) { "use strict"; var $ = jQuery;
        module.exports = function($context, isRemoved) { var Swiper = require("../bower_components/swiper/dist/js/swiper.jquery.js"); return isRemoved ? void $context.find(".swiper-container.default-slider").each(function() { var a = $(this)[0].swiper;
                a.destroy(!0, !0) }) : void $context.find(".default-slider:not(.hold)").each(function() { var $this = $(this).addClass("swiper-container"),
                    el = $this[0],
                    $el = $(el),
                    sopt = $el.data("swiper-options"),
                    opt = sopt ? eval("(" + sopt + ")") : {},
                    swiper = new Swiper(el, $.extend({ pagination: $el.find(".swiper-pagination")[0], paginationClickable: $el.find(".swiper-pagination")[0], nextButton: $el.find(".swiper-button-next")[0], prevButton: $el.find(".swiper-button-prev")[0] }, opt)) }) } }, { "../bower_components/swiper/dist/js/swiper.jquery.js": 9 }],
    25: [function(a, b, c) { "use strict"; var d = jQuery;
        b.exports = function(b, c) { var e = a("../tools/tools.js"),
                f = d("html").hasClass("android-browser"),
                g = d("html").hasClass("no-animations"),
                h = d("html").hasClass("poor-browser"),
                i = d("html").hasClass("safari");
            f || g || h || b.find(".text-bg").each(function(a) { var b = d(this);
                b.find(b.data("text-effect-selector")).each(function(a) { var f = d(this).addClass("text-bg-svg svg-effect"),
                        g = [];
                    f.contents().filter(function() { return !!d.trim(this.innerHTML || this.data) }).each(function(a) { var b = d(this);
                        g.push(b.text()) }); var h = function() { var a, h, j = function(b, c, d) { c.attr({ width: "100%", height: "100%" }); var i = c.text(0, 0, g).attr({ fill: e.snapUrl(b) });
                                f.empty().append(d), a = f.width(); var j = parseFloat(f.css("line-height").replace("px", "")),
                                    k = f.css("text-align");
                                i.selectAll("tspan").forEach(function(b, c) { b.attr({ dy: j }), "right" === k ? b.attr({ x: a, "text-anchor": "end" }) : "center" === k ? b.attr({ x: Math.round(a / 2), "text-anchor": "middle" }) : b.attr({ x: 0, "text-anchor": "start" }) }), h = Math.round(g.length * j + j / 5), f.height(h), c.attr({ viewBox: "0 0 " + a + " " + h }) },
                            k = document.createElementNS("http://www.w3.org/2000/svg", "svg"),
                            l = Snap(k),
                            m = function(a, e, f, g, h) { var j = function() { this.animate(e, g, h, k) },
                                    k = function() { this.animate(f, g, h, j) }; if (-1 !== b.data("text-effect").indexOf("animated")) { var l = !1,
                                        m = !1; if (a.animate(f, g, h, j), "custom-animated" === b.data("text-effect") || i) { var n = null;
                                        d(window).scroll(function(b) { clearTimeout(n), m || (m = !0, l || a.inAnim()[0].mina.pause()), n = setTimeout(function() { m = !1, l || (a.animate({ dummy: 0 }, 1), a.inAnim()[0].mina.resume()) }, 100) }) } var o = function() { l = !0, m || a.inAnim()[0].mina.pause() },
                                        p = function() { l = !1, m || (a.animate({ dummy: 0 }, 1), a.inAnim()[0].mina.resume()) },
                                        q = p;
                                    c.players.addPlayer(b, q, o, p) } }; if (-1 !== b.data("text-effect").indexOf("custom")) { var n = b.data("text-bg"); if (n) { var o = new Image;
                                o.onload = function() { var b = this.width,
                                        c = this.height,
                                        d = 3e4,
                                        e = mina.easeinout,
                                        f = l.image(n, 0, 0, b, c).toPattern(0, 0, b, c).attr({ patternUnits: "userSpaceOnUse" });
                                    j(f, l, k); var g = { x: a - b, y: h - c },
                                        i = { x: 0, y: 0 };
                                    m(f, i, g, d, e) }, o.src = n } } else if ("no" !== b.data("text-effect")) { var p = 300,
                                q = 3e4,
                                r = mina.easeinout,
                                s = f.height(),
                                t = l.rect().attr({ width: "100%", height: s }).addClass("fill-highlight"),
                                u = l.rect().attr({ width: "90%", height: s }).addClass("fill-heading"),
                                v = l.rect().attr({ width: "50%", height: s }).addClass("fill-highlight"),
                                w = l.rect().attr({ width: "20%", height: s }).addClass("fill-heading"),
                                x = l.g(t, u, v, w).toPattern(0, 0, p, s).attr({ patternUnits: "userSpaceOnUse", preserveAspectRatio: "none" }); - 1 !== b.data("text-effect").indexOf("effect-b-") && x.attr({ transform: "rotate(-45deg)" }), j(x, l, k); var y = { width: 50 },
                                z = { width: p };
                            m(x, z, y, q, r) } };
                    d(window).resize(h), h() }) }) } }, { "../tools/tools.js": 12 }],
    26: [function(a, b, c) { "use strict"; var d = jQuery;
        b.exports = function(a) { var b = d("html").hasClass("android-browser");
            b || a.find(".text-fit").each(function() { var a = d(this);
                a.find(a.data("text-effect-selector")).each(function(a) {}) }) } }, {}],
    27: [function(a, b, c) { "use strict"; var d = jQuery;
        b.exports = function(b) { var c = (a("../tools/tools.js"), d("html").hasClass("android-browser"));
            c || b.find(".text-fullscreen").each(function() { var a = d(this);
                a.find(".fg").addClass("background-transparent"), a.find(a.data("text-effect-selector")).each(function(b) { var c = d(this).addClass("text-fullscreen-svg svg-effect"),
                        e = c.find("a"),
                        f = e.length > 0 ? d(e[0]) : c,
                        g = [];
                    f.contents().filter(function() { return !!d.trim(this.innerHTML || this.data) }).each(function(a) { var b = d(this);
                        g.push(b.text()) }), f.addClass("normal-letter-spacing"); var h = function() { var b = document.createElementNS("http://www.w3.org/2000/svg", "svg"),
                            c = Snap(b);
                        c.attr({ width: "100%", height: "100%" }), f.empty().append(b); var e = c.mask().attr({ x: 0, y: 0, width: "100%", height: "100%" });
                        e.toDefs(); var h = Math.round(.7 * d(window).width());
                        h > 391 ? h = 391 : 200 > h && (h = 200); for (var i = parseFloat(f.css("font-size").replace("px", "")), j = parseFloat(f.css("line-height").replace("px", "")), k = j / i, l = 0, m = e.g(), n = 0; n < g.length; n++) { var o = c.text(0, 0, g[n]),
                                p = o.getBBox().width,
                                q = i * h / p,
                                r = k * q;
                            l += n > 0 ? r : .85 * q, o.attr({ x: 0, y: l, "font-size": q + "px" }), m.add(o) } var s = a.data("text-bg"),
                            t = c.g(s ? c.image(s, 0, 0, "100%", "100%").attr({ preserveAspectRatio: "xMidYMid slice" }) : c.rect({ x: 0, y: 0, width: "100%", height: "100%", fill: "#ffffff" })).toPattern(0, 0, d(window).width(), d(window).height());
                        c.rect({ x: 0, y: 0, width: "100%", height: "100%", fill: t, stroke: "none" }).prependTo(e), c.rect({ x: 0, y: 0, width: "100%", height: "100%", mask: e, stroke: "none" }).addClass("fill-bg"); var u = Math.round((d(window).width() - h) / 2),
                            v = Math.round((d(window).height() - l) / 2);
                        m.attr({ transform: "translate(" + u + ", " + v + ")" }) };
                    d(window).resize(h), h() }) }) } }, { "../tools/tools.js": 12 }],
    28: [function(a, b, c) { "use strict"; var d = jQuery;
        b.exports = function(b) { var c = (a("../tools/tools.js"), d("html").hasClass("android-browser"));
            c || b.find(".text-mask").each(function() { var a = d(this);
                a.find(a.data("text-effect-selector")).each(function(b) { var c = d(this).addClass("text-mask-svg svg-effect"),
                        e = c.find("a"),
                        f = e.length > 0 ? d(e[0]) : c,
                        g = [];
                    f.contents().filter(function() { return !!d.trim(this.innerHTML || this.data) }).each(function(a) { var b = d(this);
                        g.push(b.text()) }), f.addClass("normal-letter-spacing"); var h = function() { var b = document.createElementNS("http://www.w3.org/2000/svg", "svg"),
                            c = Snap(b);
                        c.attr({ width: "100%", height: "100%" }), f.empty().append(b); var d = c.mask().attr({ x: 0, y: 0, width: "100%", height: "100%" });
                        d.toDefs(); var e = Math.round(.7 * f.innerWidth());
                        e > 391 && (e = 391); for (var h = parseFloat(f.css("font-size").replace("px", "")), i = 10, j = Math.round(.15 * e), k = 0, l = d.g(), m = 0; m < g.length; m++) { var n = c.text(0, 0, g[m]),
                                o = n.getBBox().width,
                                p = h * (e - j - j) / o,
                                q = i + p;
                            k += m > 0 ? q : .85 * p, n.attr({ x: j, y: k, "font-size": p + "px" }), l.add(n) } var r = k + 2 * j,
                            s = Math.floor(r > e ? r / 2 : e / 2),
                            t = 2 * s,
                            u = t,
                            v = t,
                            w = a.data("text-bg"),
                            x = c.g(w ? c.image(w, 0, 0, u, v).attr({ preserveAspectRatio: "xMidYMid slice" }) : c.rect(0, 0, u, v).attr({ fill: "#ffffff" })).toPattern(0, 0, u, v);
                        c.rect({ x: 0, y: 0, width: "100%", height: "100%", fill: x, stroke: "none" }).prependTo(d), c.circle(s, s, s).attr({ mask: d, stroke: "none" }).addClass("fill-heading text-box"), l.attr({ transform: "translate(0, " + Math.round((t - k) / 2) + ")" }), c.attr({ viewBox: "0 0 " + t + " " + t, width: t, height: t }), f.height(t) };
                    d(window).resize(h), h() }) }) } }, { "../tools/tools.js": 12 }],
    29: [function(a, b, c) { "use strict"; var d = jQuery;
        b.exports = function() { var b = a("../tools/tools.js"),
                c = d("#top-nav:visible"),
                e = d("#top-nav, .page-border"),
                f = d("html"),
                g = d("html").hasClass("site-decoration-b"),
                h = (d("body").hasClass("admin-bar"), d("body").hasClass("page-template-builder")),
                i = c.length > 0,
                j = function() { return i ? 20 : 0 }(),
                k = !1,
                l = !1,
                m = !1,
                n = [],
                o = this,
                p = c.data("colors-2"),
                q = c.data("colors-1"),
                r = d(window);
            this.isState1 = !1, this.isState2 = !1; var s = g ? 40 : 48,
                t = 767;
            d(".page-border.left, .page-border.right");
            this.isMode2 = null, this.state2H = i ? s : 0, this.state1Top = function() { return j }, this.state1 = function() { f.addClass("on-top"), h ? !i || o.isState1 && !m || (k || (f.removeClass("state2").addClass("state1"), c.removeClass(q).addClass(p), b.androidStylesFix(e)), l || (o.isState1 = !0, o.isState2 = !1)) : o.state2(!0) }, this.state2 = function(a) { a || f.removeClass("on-top"), !i || o.isState2 && !m || (k || (f.removeClass("state1").addClass("state2"), c.removeClass(p).addClass(q), b.androidStylesFix(e)), l || (o.isState1 = !1, o.isState2 = !0)) }, this.forceState = function(a) { n.indexOf(a) < 0 && (n.push(a), l = !0, o.state2(), l = !1, k = !0) }, this.unforceState = function(a) { var b = n.indexOf(a);
                b >= 0 && (n.splice(b, 1), 0 === n.length && (k = !1, m = !0, o.isState1 ? o.state1() : o.state2(), m = !1)) }; var u = function() { o.isMode2 = d(window).width() <= t, o.isMode2 ? o.forceState("size") : o.unforceState("size") };
            r.resize(u), u() } }, { "../tools/tools.js": 12 }],
    30: [function(a, b, c) { "use strict"; var d = jQuery;
        b.exports = function() { var b = a("../tools/tools.js"),
                c = d(".video-bg"); if (!(c.length < 1)) { var e = function() { var a = b.isMobile,
                        c = document.createElement("video"),
                        d = c.canPlayType ? c.canPlayType("video/mp4") : !1; return d && !a }(); return e ? void c.each(function() { var a = d(this);
                    a.addClass("loading-func").data("loading", function(b) { var c = d('<video class="video-bg"></video>'); "yes" === a.data("mute") && (c[0].muted = !0); var e = a.data("volume");
                        void 0 !== e && (c[0].volume = e / 100); var f = function() { var a = c.width(),
                                e = c.height(),
                                f = a / e,
                                g = d(window),
                                h = function() { var a, b, d = g.width(),
                                        e = g.height(),
                                        h = d / e;
                                    f > h ? (b = Math.ceil(e), a = Math.ceil(b * f)) : (a = Math.ceil(d), b = Math.ceil(a / f)), c.css({ width: a + "px", height: b + "px", top: Math.round((e - b) / 2) + "px", left: Math.round((d - a) / 2) + "px" }) };
                            g.resize(h), h(), c[0].play(), b() };
                        c.on("ended", function() { this.currentTime = 0, this.play(), this.ended && this.load() }); var g = !0;
                        c.on("canplaythrough", function() { g ? (g = !1, f()) : this.play() }), c.on("error", function() { g && (g = !1, f()) }), c[0].src = a.data("video"), c[0].preload = "auto", a.after(c), a.remove() }) }) : void c.each(function() { var a = d(this),
                        b = a.data("alternative"); if (b) { var c = d('<img alt class="bg" src="' + b + '"/>');
                        a.after(c).remove() } }) } } }, { "../tools/tools.js": 12 }],
    31: [function(a, b, c) { "use strict"; var d = jQuery;
        b.exports = function() { var b = a("../tools/tools.js"),
                c = d(".vimeo-bg"); if (!(c.length < 1)) { if (b.isMobile) return void c.each(function() { var a = d(this),
                        b = a.data("alternative"); if (b) { var c = d('<img alt class="bg" src="' + b + '"/>');
                        a.after(c).remove() } }); var e = [];
                c.each(function(a) { var b = d(this),
                        c = b.attr("id");
                    c || (c = "vimeo-bg-" + a, b.attr("id", c)), b.addClass("loading-func").data("loading", function(a) { e[c] = a }) }), d.getScript("https://f.vimeocdn.com/js/froogaloop2.min.js").done(function(a, b) { c.each(function() { var a = d(this),
                            b = a.attr("id"),
                            c = function() { var b = a.data("volume"); return void 0 === b ? 0 : b }(),
                            f = a.data("video"),
                            g = d('<iframe class="vimeo-bg" src="https://player.vimeo.com/video/' + f + "?api=1&badge=0&byline=0&portrait=0&title=0&autopause=0&player_id=" + b + '&loop=1" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');
                        a.after(g), a.remove(), g.attr("id", b); var h = $f(g[0]);
                        h.addEvent("ready", function() { var a = function(a) { var b = d(window).width(),
                                    c = d(window).height(),
                                    e = g.width(),
                                    f = g.height(),
                                    h = e / f,
                                    i = b / c,
                                    j = function(d, e) { var f, i;
                                        h > a ? (i = Math.ceil(e), f = Math.ceil(i * h)) : (f = Math.ceil(d), i = Math.ceil(f / h)), g.css({ width: f + "px", height: i + "px", top: Math.round((c - i) / 2) + "px", left: Math.round((b - f) / 2) + "px" }) }; if (i > a) { var k = b,
                                        l = k / a;
                                    j(k, l) } else { var l = c,
                                        k = l * a;
                                    j(k, l) } };
                            h.addEvent("finish", function() { h.api("play") }); var f = !0;
                            h.addEvent("play", function() { f && (f = !1, e[b]()) }), h.api("setVolume", c), h.api("getVideoWidth", function(b, c) { var e = b;
                                h.api("getVideoHeight", function(b, c) { var f = b,
                                        g = e / f;
                                    d(window).resize(function() { a(g) }), a(g), h.api("play") }) }) }) }) }).fail(function(a, b, c) { console.log("Triggered ajaxError handler.") }) } } }, { "../tools/tools.js": 12 }],
    32: [function(require, module, exports) {
        "use strict";
        var $ = jQuery;
        module.exports = function() {
            var tools = require("../tools/tools.js"),
                $youtubeBgs = $(".youtube-bg");
            if (!($youtubeBgs.length < 1)) {
                if (tools.isMobile) return void $youtubeBgs.each(function() { var a = $(this),
                        b = a.data("alternative"); if (b) { var c = $('<img alt class="bg" src="' + b + '"/>');
                        a.after(c).remove() } });
                var dones = [];
                $youtubeBgs.each(function(a) { var b = $(this),
                        c = b.attr("id");
                    c || (c = "youtube-bg-" + a, b.attr("id", c)), b.addClass("loading-func").data("loading", function(a) { dones[c] = a }) });
                var tag = document.createElement("script");
                tag.src = "https://www.youtube.com/iframe_api";
                var firstScriptTag = document.getElementsByTagName("script")[0];
                firstScriptTag.parentNode.insertBefore(tag, firstScriptTag), window.onYouTubeIframeAPIReady = function() {
                    $youtubeBgs.each(function() {
                        var $youtubeBg = $(this),
                            videoId = $youtubeBg.data("video"),
                            vol = $youtubeBg.data("volume"),
                            mute = $youtubeBg.data("mute"),
                            elId = $youtubeBg.attr("id"),
                            isNotDone = !0,
                            player = new YT.Player(elId, {
                                videoId: videoId,
                                playerVars: { html5: 1, controls: 0, showinfo: 0, modestbranding: 1, rel: 0, allowfullscreen: !0, iv_load_policy: 3, wmode: "transparent" },
                                events: {
                                    onReady: function(event) {
                                        var resize = function() {
                                            var $iFrame = $(event.target.getIframe()),
                                                windowW = $(window).width(),
                                                windowH = $(window).height(),
                                                iFrameW = $iFrame.width(),
                                                iFrameH = $iFrame.height(),
                                                ifRatio = iFrameW / iFrameH,
                                                wRatio = windowW / windowH,
                                                vRatio = function() {
                                                    var r = $youtubeBg.data("ratio");
                                                    return void 0 === r ? ifRatio : eval(r)
                                                }(),
                                                setSize = function(a, b) { var c, d;
                                                    ifRatio > vRatio ? (d = Math.ceil(b), c = Math.ceil(d * ifRatio)) : (c = Math.ceil(a), d = Math.ceil(c / ifRatio)), $iFrame.css({ width: c + "px", height: d + "px", top: Math.round((windowH - d) / 2) + "px", left: Math.round((windowW - c) / 2) + "px" }) };
                                            if (wRatio > vRatio) { var vw = windowW,
                                                    vh = vw / vRatio;
                                                setSize(vw, vh) } else { var vh = windowH,
                                                    vw = vh * vRatio;
                                                setSize(vw, vh) }
                                        };
                                        $(window).resize(resize), resize(), event.target.setPlaybackQuality("highres"), void 0 !== vol && event.target.setVolume(vol), ("yes" === mute || void 0 === mute) && event.target.mute(), event.target.playVideo()
                                    },
                                    onStateChange: function(a) { isNotDone && a.data === YT.PlayerState.PLAYING ? (isNotDone = !1, dones[elId]()) : a.data === YT.PlayerState.ENDED && a.target.playVideo() },
                                    onError: function(a) { isNotDone && (isNotDone = !1, dones[elId](), console.log("YouTube Error: " + a.data + ", video ID: " + videoId)) }
                                }
                            })
                    })
                }
            }
        }
    }, { "../tools/tools.js": 12 }]
}, {}, [11]);