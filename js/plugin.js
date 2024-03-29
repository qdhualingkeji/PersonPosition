/*
    Jquery Table of content
    -----------------
    01. Menuzord js
    02. Nice select js
    03. Venobox js
    04. Counterup js
    05. Waypoint js
    06. Clamp js
*/

/*
    =======01. menuzor js=======
*/
!(function (e) {
  jQuery.fn.menuzord = function (n) {
    var width = $(window).width();
    var i;
    var yes = false;
    e.extend(
      (i = {
        showSpeed: 300,
        hideSpeed: 300,
        trigger: "hover",
        showDelay: 0,
        hideDelay: 0,
        effect: "fade",
        align: "left",
        responsive: !0,
        animation: "none",
        indentChildren: !0,
        indicatorFirstLevel: "+",
        indicatorSecondLevel: "+",
        scrollable: !0,
        scrollableMaxHeight: 400,
      }),
      n
    );
    var t,
      o = e(this),
      d = e(o).children(".menuzord-menu"),
      a = e(d).find("li"),
      r = 991,
      s = 2e3,
      l = 200;
    function u(n) {
      "fade" == i.effect
        ? e(n)
            .find(".dropdown, .megamenu")
            .stop(!0, !0)
            .delay(i.showDelay)
            .fadeIn(i.showSpeed)
            .addClass(i.animation)
        : e(n)
            .children(".dropdown, .megamenu")
            .stop(!0, !0)
            .delay(i.showDelay)
            .slideDown(i.showSpeed)
            .addClass(i.animation);
    }
    function c(n) {
      "fade" == i.effect
        ? e(n)
            .find(".dropdown, .megamenu")
            .stop(!0, !0)
            .delay(i.hideDelay)
            .fadeOut(i.hideSpeed)
            .removeClass(i.animation)
        : e(n)
            .find(".dropdown, .megamenu")
            .stop(!0, !0)
            .delay(i.hideDelay)
            .slideUp(i.hideSpeed)
            .removeClass(i.animation),
        e(n)
          .find(".dropdown, .megamenu")
          .find(".dropdown, .megamenu")
          .stop(!0, !0)
          .delay(i.hideDelay)
          .fadeOut(i.hideSpeed);
    }
    function h() {
      e(d).find(".dropdown, .megamenu").hide(0),
        navigator.userAgent.match(/Mobi/i) ||
        window.navigator.msMaxTouchPoints > 0 ||
        "click" == i.trigger
          ? (e(
              ".menuzord-menu>ul > li > a, .menuzord-menu>ul>li ul.dropdown li a"
            ).bind("click touchstart", function (n) {
              if (
                (n.stopPropagation(),
                n.preventDefault(),
                e(this)
                  .parent("li")
                  .siblings("li")
                  .find(".dropdown, .megamenu")
                  .stop(!0, !0)
                  .fadeOut(300),
                "none" ==
                  e(this).siblings(".dropdown, .megamenu").css("display"))
              ) {
                return u(e(this).parent("li")), !1;
              }
              c(e(this).parent("li")),
                (window.location.href = e(this).attr("href"));
              if (width > 1000) {
                $(".dropdown").css("display", "block");
              }
            }),
            e(document).bind("click.menu touchstart.menu", function (n) {
              0 == e(n.target).closest(".menuzord").length &&
                e(".menuzord-menu").find(".dropdown, .megamenu").fadeOut(300);
              if (width > 1000) {
                $(".dropdown").css("display", "block");
              }
            }))
          : e(a)
              .bind("mouseenter", function () {
                u(this);
              })
              .bind("mouseleave", function () {
                c(this);
              });
    }
    function f() {
      var n = e(d).children("li").children(".dropdown, .megamenu");
      if (e(window).innerWidth() > r)
        for (var i = e(o).outerWidth(!0), t = 0; t < n.length; t++)
          e(n[t]).parent("li").position().left + e(n[t]).outerWidth() > i
            ? e(n[t]).css("right", 0)
            : ((i == e(n[t]).outerWidth() || i - e(n[t]).outerWidth() < 20) &&
                e(n[t]).css("left", 0),
              e(n[t]).parent("li").position().left + e(n[t]).outerWidth() < i &&
                e(n[t]).css("right", "auto"));
    }
    function m() {
      e(o).find("li, a").unbind(),
        e(document).unbind("click.menu touchstart.menu");
    }
    function p() {
      return (
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth
      );
    }
    function g() {
      (f(),
      p() <= r &&
        s > r &&
        (m(),
        i.responsive
          ? (e(d).hide(0),
            e(t)
              .show(0)
              .click(function () {
                //点击小屏幕菜单时
                "none" == e(d).css("display")
                  ? e(d).slideDown(i.showSpeed)
                  : e(d)
                      .slideUp(i.hideSpeed)
                      .find(".dropdown, .megamenu")
                      .hide(i.hideSpeed);
              }),
            e(d).find(".dropdown, .megamenu").hide(0),
            e(d)
              .find(".indicator")
              .each(function () {
                e(this).parent("a").siblings(".dropdown, .megamenu").length >
                  0 &&
                  e(this).bind("click", function (n) {
                    //点击二级菜单的时候触发
                    if(!yes){
                      e(d).scrollTo({ top: 45, left: 0 }, 600),
                      "A" == e(this).parent().prop("tagName") &&
                        n.preventDefault(),
                      "none" ==
                      e(this)
                        .parent("a")
                        .siblings(".dropdown, .megamenu")
                        .css("display")
                        ?
                        (e(this)
                        .parent("a")
                        .siblings(".dropdown, .megamenu")
                        .delay(i.showDelay)
                        .slideDown(i.showSpeed))
                    : e(this)
                        .parent("a")
                        .siblings(".dropdown, .megamenu")
                        .delay(i.showDelay)
                        .slideDown(i.showSpeed),
                          yes = true
                    }else{
                      
                    e(d).scrollTo({ top: 45, left: 0 }, 600),
                    "A" == e(this).parent().prop("tagName") &&
                      n.preventDefault(),
                    "none" ==
                    e(this)
                      .parent("a")
                      .siblings(".dropdown, .megamenu")
                      .css("display")
                      ? (e(this)
                          .parent("a")
                          .siblings(".dropdown, .megamenu")
                          .delay(i.showDelay)
                          .slideDown(i.showSpeed))
                      : e(this)
                          .parent("a")
                          .siblings(".dropdown, .megamenu")
                          .slideUp(i.hideSpeed)
                    }

                  });
              }))
          : h()),
      p() > r && l <= r && (m(), e(d).show(0), e(t).hide(0), h()),
      (s = p()),
      (l = p()),
      (function () {
        function n(n) {
          var i = e(n).find(".menuzord-tabs-nav > li"),
            t = e(n).find(".menuzord-tabs-content");
          e(i).bind("click touchstart", function (n) {
            n.stopPropagation(),
              n.preventDefault(),
              e(i).removeClass("active"),
              e(this).addClass("active"),
              e(t).hide(0),
              e(t[e(this).index()]).show(0);
          });
        }
        if (e(d).find(".menuzord-tabs").length > 0)
          for (var i = e(d).find(".menuzord-tabs"), t = 0; t < i.length; t++)
            n(i[t]);
      })(),
      /MSIE (\d+\.\d+);/.test(navigator.userAgent) && p() < r) &&
        8 == new Number(RegExp.$1) &&
        (e(t).hide(0), e(d).show(0), m(), h());
    }
    e(d)
      .children("ul")
      .children("li")
      .children("a")
      .each(function () {
        e(this).siblings(".dropdown, .megamenu").length > 0 &&
          e(this).append(
            "<span class='indicator'>" + i.indicatorFirstLevel + "</span>"
          );
      }),
      e(d)
        .find(".dropdown")
        .children("li")
        .children("a")
        .each(function () {
          e(this).siblings(".dropdown").length > 0 &&
            e(this).append(
              "<span class='indicator'>" + i.indicatorSecondLevel + "</span>"
            );
        }),
      "right" == i.align && e(d).addClass("menuzord-right"),
      i.indentChildren && e(d).addClass("menuzord-indented"),
      i.responsive &&
        (e(o)
          .addClass("menuzord-responsive")
          .prepend(
            "<a href='javascript:void(0)' class='showhide'><em></em><em></em><em></em></a>"
          ),
        (t = e(o).children(".showhide"))),
      i.scrollable &&
        i.responsive &&
        e(d)
          .css("max-height", i.scrollableMaxHeight)
          .addClass("scrollable")
          .append("<li class='scrollable-fix'></li>"),
      g(),
      e(window).resize(function () {
        g(), f();
      });
  };
})(jQuery),
  (function (e) {
    "use strict";
    e(["jquery"], function (e) {
      var n = (e.scrollTo = function (n, i, t) {
        return e(window).scrollTo(n, i, t);
      });
      function i(n) {
        return e.isFunction(n) || "object" == typeof n
          ? n
          : { top: n, left: n };
      }
      return (
        (n.defaults = {
          axis: "xy",
          duration: parseFloat(e.fn.jquery) >= 1.3 ? 0 : 1,
          limit: !0,
        }),
        (n.window = function (n) {
          return e(window)._scrollable();
        }),
        (e.fn._scrollable = function () {
          return this.map(function () {
            var n = this;
            if (
              !(
                !n.nodeName ||
                -1 !=
                  e.inArray(n.nodeName.toLowerCase(), [
                    "iframe",
                    "#document",
                    "html",
                    "body",
                  ])
              )
            )
              return n;
            var i = (n.contentWindow || n).document || n.ownerDocument || n;
            return /webkit/i.test(navigator.userAgent) ||
              "BackCompat" == i.compatMode
              ? i.body
              : i.documentElement;
          });
        }),
        (e.fn.scrollTo = function (t, o, d) {
          return (
            "object" == typeof o && ((d = o), (o = 0)),
            "function" == typeof d && (d = { onAfter: d }),
            "max" == t && (t = 9e9),
            (d = e.extend({}, n.defaults, d)),
            (o = o || d.duration),
            (d.queue = d.queue && d.axis.length > 1),
            d.queue && (o /= 2),
            (d.offset = i(d.offset)),
            (d.over = i(d.over)),
            this._scrollable()
              .each(function () {
                if (null != t) {
                  var a,
                    r = this,
                    s = e(r),
                    l = t,
                    u = {},
                    c = s.is("html,body");
                  switch (typeof l) {
                    case "number":
                    case "string":
                      if (/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(l)) {
                        l = i(l);
                        break;
                      }
                      if (!(l = c ? e(l) : e(l, this)).length) return;
                    case "object":
                      (l.is || l.style) && (a = (l = e(l)).offset());
                  }
                  var h =
                    (e.isFunction(d.offset) && d.offset(r, l)) || d.offset;
                  e.each(d.axis.split(""), function (e, i) {
                    var t = "x" == i ? "Left" : "Top",
                      o = t.toLowerCase(),
                      m = "scroll" + t,
                      p = r[m],
                      g = n.max(r, i);
                    if (a)
                      (u[m] = a[o] + (c ? 0 : p - s.offset()[o])),
                        d.margin &&
                          ((u[m] -= parseInt(l.css("margin" + t)) || 0),
                          (u[m] -=
                            parseInt(l.css("border" + t + "Width")) || 0)),
                        (u[m] += h[o] || 0),
                        d.over[o] &&
                          (u[m] +=
                            l["x" == i ? "width" : "height"]() * d.over[o]);
                    else {
                      var w = l[o];
                      u[m] =
                        w.slice && "%" == w.slice(-1)
                          ? (parseFloat(w) / 100) * g
                          : w;
                    }
                    d.limit &&
                      /^\d+$/.test(u[m]) &&
                      (u[m] = u[m] <= 0 ? 0 : Math.min(u[m], g)),
                      !e &&
                        d.queue &&
                        (p != u[m] && f(d.onAfterFirst), delete u[m]);
                  }),
                    f(d.onAfter);
                }
                function f(e) {
                  s.animate(
                    u,
                    o,
                    d.easing,
                    e &&
                      function () {
                        e.call(this, l, d);
                      }
                  );
                }
              })
              .end()
          );
        }),
        (n.max = function (n, i) {
          var t = "x" == i ? "Width" : "Height",
            o = "scroll" + t;
          if (!e(n).is("html,body")) return n[o] - e(n)[t.toLowerCase()]();
          var d = "client" + t,
            a = n.ownerDocument.documentElement,
            r = n.ownerDocument.body;
          return Math.max(a[o], r[o]) - Math.min(a[d], r[d]);
        }),
        n
      );
    });
  })(
    "function" == typeof define && define.amd
      ? define
      : function (e, n) {
          "undefined" != typeof module && module.exports
            ? (module.exports = n(require("jquery")))
            : n(jQuery);
        }
  );
/*----end menuzord js-----*/

/*
============ 02.nice-select.min.js ==========
*/
/*  jQuery Nice Select - v1.0
    https://github.com/hernansartorio/jquery-nice-select
    Made by Hernán Sartorio  */
