/*导航信息加载*/
function fun_initnav() {
    $.post("AsyncDoAllMySelf.html",
         {
             "sys_act": "gettabchilnav"
         },
         function (vJson) {
             if (vJson.result.success) {
                 var vItemHtml = new StringBuilder();
                 var curclass = "";
                 $(vJson.data).each(function (index, domEle) {
                     if (domEle.tabinfo["nidstr"] == $("#oneid").val() && $("#oneid").val() != "") {
                         curclass = "cur";
                     } else {
                         curclass = "";
                     }
                     if (domEle.tabinfo["nidstr"] == "066ee30e-d2db-42e7-a316-4020e5f3d53c") {//首页
                         vItemHtml.append("<li class=\"" + curclass + "\"><a href=\"" + domEle.tabinfo["CategoryUrl1"] + "\">" + domEle.tabinfo["name"] + "</a><span>+</span></li>");
                     }
                     else if (domEle.tabinfo["nidstr"] == "93950385-6c8f-4b57-b5fd-51184d225ca4") {//产品中心 
                         vItemHtml.append("<li class=\"" + curclass + "\"><a href=\"" + domEle.tabinfo["CategoryUrl1"] + "\">" + domEle.tabinfo["name"] + "</a>");
                         vItemHtml.append("<div class=\"childrenNav w600\">");
                         $(domEle.children).each(function (j, two) {//二级栏目信息
                             vItemHtml.append("<dl class=\"\">");
                             vItemHtml.append("<dt><a href=\"" + two.tabinfo["CategoryUrl1"] + "\"><em>" + two.tabinfo["name"] + "</em><i>+</i></a></dt>");
                             $(two.childrentopnews).each(function (m, info) {//前N条数据
                                 if (m < 5) {
                                     vItemHtml.append("<dd><a href=\"" + info["infourl"] + "\">" + info["InfoTitle"] + "</a></dd>");
                                 }
                             });
                             vItemHtml.append("</dl>");
                         });
                         vItemHtml.append("</div>");
                         vItemHtml.append("</li>");
                     }
                     else if (domEle.tabinfo["nidstr"] == "e6ba2588-379a-4f73-9613-65ac949901e1") {//解决方案
                         vItemHtml.append("<li class=\"" + curclass + "\"><a href=\"" + domEle.tabinfo["CategoryUrl1"] + "\">" + domEle.tabinfo["name"] + "</a>");
                         vItemHtml.append("<div class=\"childrenNav w600\">");
                         $(domEle.children).each(function (j, two) {//二级栏目信息
                             if (j == 0) {
                                 vItemHtml.append("<div class=\"hotMenu\">");
                                 vItemHtml.append("<div class=\"hotMenuTitle\">");
                                 vItemHtml.append("<a href=\"" + two.tabinfo["CategoryUrl1"] + "\"><i class=\"hd-icon hd-icon-fire\"></i><i class=\"ml10\">" + two.tabinfo["name"] + "</i></a>");
                                 vItemHtml.append("</div>");
                                 vItemHtml.append("<div class=\"hotMenuList\">");
                                 $(two.childrentopnews).each(function (m, info) {//前N条数据
                                     if (m < 5) {
                                         vItemHtml.append("<a href=\"" + info["infourl"] + "\">" + info["InfoTitle"] + "</a>");
                                     }
                                 });
                                 vItemHtml.append("</div>");
                                 vItemHtml.append("</div>");
                             } else {
                                 vItemHtml.append("<dl class=\"\">");
                                 vItemHtml.append("<dt><a href=\"" + two.tabinfo["CategoryUrl1"] + "\"><em>" + two.tabinfo["name"] + "</em><i>+</i></a></dt>");
                                 $(two.childrentopnews).each(function (m, info) {//前N条数据
                                     if (m < 5) {
                                         vItemHtml.append("<dd><a href=\"" + info["infourl"] + "\">" + info["InfoTitle"] + "</a></dd>");
                                     }
                                 });
                                 vItemHtml.append("</dl>");
                             }
                         });
                         vItemHtml.append("</div>");
                         vItemHtml.append("</li>");
                     }
                     else if (domEle.tabinfo["nidstr"] == "a1f4fc8b-be1e-4166-8d16-72155b01ed23") {//典型案例
                         vItemHtml.append("<li class=\"" + curclass + "\"><a href=\"" + domEle.tabinfo["CategoryUrl1"] + "\">" + domEle.tabinfo["name"] + "</a>");
                         vItemHtml.append("<div class=\"childrenNav w400\">");
                         $(domEle.children).each(function (j, two) {//二级栏目信息
                             vItemHtml.append("<dl class=\"\">");
                             vItemHtml.append("<dt><a href=\"" + two.tabinfo["CategoryUrl1"] + "\"><em>" + two.tabinfo["name"] + "</em><i>+</i></a></dt>");
                             $(two.childrentopnews).each(function (m, info) {//前N条数据
                                 if (m < 5) {
                                     vItemHtml.append("<dd><a href=\"" + info["infourl"] + "\">" + info["InfoTitle"] + "</a></dd>");
                                 }
                             });
                             vItemHtml.append("</dl>");
                         });
                         vItemHtml.append("</div>");
                         vItemHtml.append("</li>");
                     }
                     else if (domEle.tabinfo["nidstr"] == "fc08e049-04c1-459b-a607-f2d1c2e65bfb") {//新闻动态
                         vItemHtml.append("<li class=\"" + curclass + "\"><a href=\"" + domEle.tabinfo["CategoryUrl1"] + "\">" + domEle.tabinfo["name"] + "</a>");
                         vItemHtml.append("<div class=\"childrenNav w400a\">");
                         vItemHtml.append("<div class=\"aboutImg\">");
                         vItemHtml.append("<a href=\"" + domEle.tabinfo["CategoryUrl1"] + "\"><span class=\"limitText\">" + domEle.tabinfo["Remark"] + "</span><img src=\"" + domEle.tabinfo["imgurl"] + "\"  onerror='this.src = \"resource/images/skins/newsImg.jpg\"' /></a>");
                         vItemHtml.append("</div>");
                         vItemHtml.append("<dl class=\"\">");
                         $(domEle.children).each(function (j, two) {//二级栏目信息    
                             if (j == 0) {
                                 vItemHtml.append("<dt></dt>");
                             }
                             vItemHtml.append("<dd><a href=\"" + two.tabinfo["CategoryUrl1"] + "\">" + two.tabinfo["name"] + "</a></dd>");
                         });
                         vItemHtml.append("</dl>");
                         vItemHtml.append("</div>");
                         vItemHtml.append("</li>");
                     }
                     else if (domEle.tabinfo["nidstr"] == "9b250c0d-88f4-440b-8867-bcead228b78b") {//关于我们
                         vItemHtml.append("<li class=\"" + curclass + "\"><a href=\"" + domEle.tabinfo["CategoryUrl1"] + "\">" + domEle.tabinfo["name"] + "</a>");
                         vItemHtml.append("<div class=\"childrenNav w400a\">");
                         vItemHtml.append("<div class=\"aboutImg\">");
                         vItemHtml.append("<a href=\"" + domEle.tabinfo["CategoryUrl1"] + "\"><span class=\"limitText\">" + domEle.tabinfo["Remark"] + "</span><img src=\"" + domEle.tabinfo["imgurl"] + "\"  onerror='this.src = \"resource/images/skins/aboutImg.jpg\"' /></a>");
                         vItemHtml.append("</div>");
                         vItemHtml.append("<dl class=\"\">");
                         $(domEle.children).each(function (j, two) {//二级栏目信息    
                             if (j==0) {
                                 vItemHtml.append("<dt></dt>");
                             }
                             vItemHtml.append("<dd><a href=\"" + two.tabinfo["CategoryUrl1"] + "\">" + two.tabinfo["name"] + "</a></dd>");
                         });
                         vItemHtml.append("</dl>");
                         vItemHtml.append("</div>");
                         vItemHtml.append("</li>");
                     }
                 });
                 $("#ul_pcnav_items").html(vItemHtml.toString());
                 //二级菜单
                 $(".pcNav > ul > li > a").mouseover(function () {
                     $(".childrenNav").css("display", "none");
                     $(this).next("div").stop().fadeIn(300);
                     $(this).next("ul").stop().fadeIn(300);
                 });
             }
         }
         , 'json');
}
/*加载推荐信息*/
function fun_Elite() {
    $.post("AsyncDoAllMySelf.html",
         {
             "sys_act": "view",
             "sys_dataflag": "21650017",
             "sys_configkey": "web_tb_Info_zwq"
         },
         function (vJson) {
             if (vJson.result.success) {
                 var vItemHtml = new StringBuilder();
                 $(vJson.data).each(function (index, domEle) {
                     if (index < 3) {
                         vItemHtml.append("<li><a href=\"" + domEle["infourl"] + "\" class=\"\"><span class=\"limitText\">" + domEle["InfoTitle"] + "</span><i>" + domEle["Hits"] + "</i><i class=\"hd-icon hd-icon-fire\"></i></a></li>");
                     } else {
                         vItemHtml.append("<li><a href=\"" + domEle["infourl"] + "\"><span class=\"limitText\">" + domEle["InfoTitle"] + "</span></i></a></li>");
                     }
                 });
                 $("#ul_item_elite").html(vItemHtml.toString());
                 var searchRecomendList = $(".searchRecomendList > ul > li");
                 for (i = 0; i < 3; i++) {
                     switch (i) {
                         case 0:
                             searchRecomendList.eq(i).find("a").addClass("firstCount");
                             break;
                         case 1:
                             searchRecomendList.eq(i).find("a").addClass("secondCount");
                             break;
                         case 2:
                             searchRecomendList.eq(i).find("a").addClass("thirdCount");
                             break;
                     };
                 };
             }
         }
         , 'json');
}



function fun_search_clike() {
    $("#a_search").attr("href", "search.html?skey=" + $("#searchkey").val());
}
fun_Elite();

$(document).ready(function () {
    var bannerTitle = $(".bannerTitle"), smallImg = $(".smallImg"), normalImg = $(".normalImg"),
        bigImg = $(".bigImg"), pcNav = $(".pcNav"), mobileNav = $(".mobileNav"), tel = $(".tel"),
        mobileNavBtn = $(".mobileNavBtn"), pcSearchBtn = $(".pcSearchBtn"), pcSearchPanel = $(".pcSearchPanel"),
        pcSearchClose = $(".pcSearchClose");
    var bigSize = 1440, normalSize = 1000, smallPlusSize = 800, smallSize = 550, spacing = 30;


    //响应方法引用声明开始
    var pcMenu = function () {
        pcNav.removeClass("hidden");
        mobileNav.addClass("hidden");
    };
    var mobileMenu = function () {
        pcNav.addClass("hidden");
        mobileNav.removeClass("hidden");
    };

    // pageWidth > bigSize 
    function maxType() {
        $(".banner01").removeClass("smallTextLocation01 normalTextLocation01").addClass("bigTextLocation01");
        $(".banner02").removeClass("smallTextLocation02 normalTextLocation02").addClass("bigTextLocation02");
        $(".banner03").removeClass("smallTextLocation03 normalTextLocation03").addClass("bigTextLocation03");
        $(".banner04").removeClass("smallTextLocation04 normalTextLocation04").addClass("bigTextLocation04");
        $(".banner05").removeClass("smallTextLocation05 normalTextLocation05").addClass("bigTextLocation05");
        bannerTitle.removeClass("fontNormal fontSmall").addClass("fontBig");
        smallImg.addClass("hidden");
        normalImg.addClass("hidden");
        bigImg.removeClass("hidden");
        $(".pageTtitle").removeClass("smallTitle01 normalTitle01").addClass("bigTitle01");
        $(".dataShow").removeClass("dataShowmobile normalTitle01 smallTitle01 dataShowPad").addClass("dataShowPc bigTitle01");
        $(".bottom").removeClass("bottomMobile bottomPad").addClass("bottomPc");
        $(".case").removeClass("caseMobile casePad").addClass("casePc");
        $(".footer").removeClass("footerMobile footerPad").addClass("footerPc");
        $(".pageBannerTitle").removeClass("normalTitle02 smallTitle02").addClass("bigTitle02");
        //$(".pageNews").removeClass("twoList oneList").addClass("threeList");
        $(".productPage").removeClass("twoList oneList").addClass("threeList");
        $(".honorPage").removeClass("threeList twoList oneList").addClass("fourList");

    };
    //normalSize < pageWidth <= bigSize
    function bigType() {
        $(".banner01").removeClass("smallTextLocation01 normalTextLocation01").addClass("bigTextLocation01");
        $(".banner02").removeClass("smallTextLocation02 normalTextLocation02").addClass("bigTextLocation02");
        $(".banner03").removeClass("smallTextLocation03 normalTextLocation03").addClass("bigTextLocation03");
        $(".banner04").removeClass("smallTextLocation04 normalTextLocation04").addClass("bigTextLocation04");
        $(".banner05").removeClass("smallTextLocation05 normalTextLocation05").addClass("bigTextLocation05");
        bannerTitle.removeClass("fontBig fontSmall").addClass("fontNormal");
        smallImg.addClass("hidden");
        normalImg.addClass("hidden");
        bigImg.removeClass("hidden");
        $(".pageTtitle").removeClass("smallTitle01 normalTitle01").addClass("bigTitle01");
        $(".dataShow").removeClass("dataShowmobile normalTitle01 smallTitle01 dataShowPad").addClass("dataShowPc bigTitle01");
        $(".bottom").removeClass("bottomMobile bottomPad").addClass("bottomPc");
        $(".case").removeClass("caseMobile casePad").addClass("casePc");
        $(".footer").removeClass("footerMobile footerPad").addClass("footerPc");
        $(".pageBannerTitle").removeClass("normalTitle02 smallTitle02").addClass("bigTitle02");
        //$(".pageNews").removeClass("twoList oneList").addClass("threeList");
        $(".productPage").removeClass("twoList oneList").addClass("threeList");
        $(".honorPage").removeClass("threeList twoList oneList").addClass("fourList");

    };
    //smallSize < pageWidth <= normalSize
    function normalType() {
        $(".banner01").removeClass("bigTextLocation01 smallTextLocation01").addClass("normalTextLocation01");
        $(".banner02").removeClass("bigTextLocation02 smallTextLocation02").addClass("normalTextLocation02");
        $(".banner03").removeClass("bigTextLocation03 smallTextLocation03").addClass("normalTextLocation03");
        $(".banner04").removeClass("bigTextLocation04 smallTextLocation04").addClass("normalTextLocation04");
        $(".banner05").removeClass("bigTextLocation05 smallTextLocation05").addClass("normalTextLocation05");
        bannerTitle.removeClass("fontBig fontSmall").addClass("fontNormal");
        smallImg.addClass("hidden");
        normalImg.removeClass("hidden");
        bigImg.addClass("hidden");
        $(".pageTtitle").removeClass("smallTitle01 bigTitle01").addClass("normalTitle01");
        $(".dataShow").removeClass("dataShowmobile bigTitle01 smallTitle01").addClass("dataShowPc normalTitle01 dataShowPad");
        $(".bottom").removeClass("bottomPc ").addClass("bottomPad bottomMobile");
        $(".case").removeClass("casePc").addClass("caseMobile casePad");
        $(".footer").removeClass("footerMobile").addClass("footerPc footerPad");
        $(".pageBannerTitle").removeClass("bigTitle02 smallTitle02").addClass("normalTitle02");
        //$(".pageNews").removeClass("threeList oneList").addClass("twoList");
        $(".productPage").removeClass("threeList oneList").addClass("twoList");
        $(".honorPage").removeClass("fourList twoList oneList").addClass("threeList");

    };
    //pageWidth <= smallSize
    function smallType() {
        $(".banner01").removeClass("bigTextLocation01 normalTextLocation01").addClass("smallTextLocation01");
        $(".banner02").removeClass("bigTextLocation02 normalTextLocation02s").addClass("smallTextLocation02");
        $(".banner03").removeClass("bigTextLocation03 normalTextLocation03").addClass("smallTextLocation03");
        $(".banner04").removeClass("bigTextLocation04 normalTextLocation04").addClass("smallTextLocation04");
        $(".banner05").removeClass("bigTextLocation05 normalTextLocation05").addClass("smallTextLocation05");
        bannerTitle.removeClass("fontBig fontNormal").addClass("fontSmall");
        smallImg.removeClass("hidden");
        normalImg.addClass("hidden");
        bigImg.addClass("hidden");
        $(".pageTtitle").removeClass("bigTitle01 normalTitle01").addClass("smallTitle01");
        $(".dataShow").removeClass("dataShowPc bigTitle01 normalTitle01 dataShowPad").addClass("dataShowmobile smallTitle01");
        $(".bottom").removeClass("bottomPc bottomPad").addClass("bottomMobile");
        $(".case").removeClass("casePc casePad").addClass("caseMobile");
        $(".footer").removeClass("footerPc footerPad").addClass("footerMobile");
        $(".pageBannerTitle").removeClass("bigTitle02 normalTitle02").addClass("smallTitle02");
        //$(".pageNews").removeClass("threeList twoList").addClass("oneList");
        $(".productPage").removeClass("threeList twoList").addClass("oneList");
        $(".honorPage").removeClass("fourList threeList oneList").addClass("twoList");
        
    };

    //normalSize
    function thanNormalSize() {
        $(".head").removeClass("h50").addClass("h70");
        pcMenu();
        tel.show();
        mobileNavBtn.hide();
        pcSearchBtn.removeClass("hidden");
        $(".autoHeight").removeClass("h50").addClass("h70");
        $(".autoFont").removeClass("autoFontSmall").addClass("autoFontBig");//2019.2.26

    };
    function lessNormalSize() {
        $(".head").removeClass("h70").addClass("h50");
        mobileMenu();
        tel.hide();
        mobileNavBtn.show();
        pcSearchBtn.addClass("hidden");
        pcSearchPanel.hide();
        $(".searchRecomend").hide();
        $(".autoHeight").removeClass("h70").addClass("h50");
        $(".autoFont").removeClass("autoFontBig").addClass("autoFontSmall");//2019.2.26

    };
    //smallSize
    function thanSmallSize() {
        $(".productMenu").removeClass("productMenuMobile").addClass("productMenuPc");
        $(".porductRecomend").removeClass("mobilePorductRecomend").addClass("pcPorductRecomend");
        $(".programList").removeClass("programListMobile").addClass("programListPc");//2019.2.26
        $(".imgNewsListHome").removeClass("imgNewsListMobile").addClass("imgNewsListPc");
        $(".newsList").removeClass("newsListMobile").addClass("newsListPc");
        $(".productInfoTitle").removeClass("mobileTitle");
        $(".product04Page").removeClass(" twoList").addClass("fourList");
        $(".functionPart").removeClass(" fontSmall").addClass("fontBig");//2019.2.26

    };
    function lessSmallSize() {
        $(".productMenu").removeClass("productMenuPc").addClass("productMenuMobile");
        $(".porductRecomend").removeClass("pcPorductRecomend").addClass("mobilePorductRecomend");
        $(".programList").removeClass("programListPc").addClass("programListMobile");//2019.2.26
        $(".imgNewsListHome").removeClass("imgNewsListPc").addClass("imgNewsListMobile");
        $(".newsList").removeClass("newsListPc").addClass("newsListMobile");
        $(".productInfoTitle").addClass("mobileTitle");
        $(".product04Page").removeClass(" fourList").addClass("twoList");
        $(".functionPart").removeClass("fontBig").addClass("fontSmall");//2019.2.26

    };
    //响应方法引用声明结束

    //响应函数开始
    var autoFrame = function () {
        var pageWidth = window.innerWidth, pageHeight = window.innerHeight;
        if (typeof pageWidth != "number") {
            if (document.compatMode == "CSS1Compat") {
                pageWidth = document.documentElement.clientWidth;
                pageHeight = document.documentElement.clientHeight;
            }
            else {
                pageWidth = document.body.clientWidth;
                pageHeight = document.body.clientHeight;
            };
        };

        //内页左侧导航响应
        var pageBody = $(".pageBody"), pageBodyWidth = pageBody.width();
        function pageRightWidthAuto() {
            var pageRightWidth = parseInt(pageBody.width() - $(".pageLeft").width() - spacing);
            $(".pageRight").css("width", pageRightWidth);
        };


        // bigSize normalSize smallSize 四级响应
        switch (true) {
            case pageWidth > bigSize:
                maxType();
                break;
            case normalSize < pageWidth && pageWidth <= bigSize:
                bigType();
                break;
            case smallSize < pageWidth && pageWidth <= normalSize:
                normalType();
                break;
            case pageWidth <= smallSize:
                smallType();
                
                break;
        };
        //normalSize 二级响应
        switch (true) {
            case pageWidth > normalSize:
                thanNormalSize();
                break;
            case pageWidth <= normalSize:
                lessNormalSize();
                break;
        };
        //内页响应
        switch (true) {
            case pageWidth > smallPlusSize:
                //pageBody.removeClass("pageBodyMobile").addClass("pageBodyPc");
                pageBody.removeClass("pageBodyPc").addClass("pageBodyMobile");
                pageRightWidthAuto();
                break;
            case pageWidth <= smallPlusSize:
                //pageBody.removeClass("pageBodyPc").addClass("pageBodyMobile");
                pageBody.removeClass("pageBodyMobile").addClass("pageBodyPc");
                break;
        };
        //smallSize 二级响应
        switch (true) {
            case pageWidth > smallSize:
                thanSmallSize();
                $(".programPage").removeClass("oneList").addClass("twoList");
                $(".casePage").removeClass("oneList").addClass("threeList");
                break;
            case pageWidth <= smallSize:
                lessSmallSize();
                $(".programPage").removeClass("twoList").addClass("oneList");
                $(".casePage").removeClass("threeList").addClass("oneList");
                break;
        };
        //响应结束


    };
    autoFrame();//初始化
    window.onresize = autoFrame;//窗口尺寸变化调用
    window.reload = autoFrame;//页面刷新调用
    setTimeout(function () {
        autoFrame();
    }, 100)
    //响应函数结束

    //搜索推荐面板开始
    pcSearchBtn.click(function () {
        pcSearchPanel.stop().slideDown(200);
    });
    pcSearchClose.click(function () {
        pcSearchPanel.stop().slideUp(200);
        $(".searchRecomend").stop().slideUp();
    });
    $(".inputPc").click(function () {
        $(".searchRecomend").slideDown();
    });
    $(".searchRecomendClose").click(function () {
        $(".searchRecomend").slideUp();
    });
    //为置顶三项添加标记
    var searchRecomendList = $(".searchRecomendList > ul > li");
    for (i = 0; i < 3; i++) {
        switch (i) {
            case 0:
                searchRecomendList.eq(i).find("a").addClass("firstCount");
                break;
            case 1:
                searchRecomendList.eq(i).find("a").addClass("secondCount");
                break;
            case 2:
                searchRecomendList.eq(i).find("a").addClass("thirdCount");
                break;
        };
    };

    //首页解决方案交替样式 2019.2.26
    var programList = $(".programList > ul > li"), listCount = programList.length;
    for (i = 0; i < listCount; i++) {
        programList.eq(i).addClass("changeBgPc");
        i++;
    };
    for (i = 0; i < listCount; i++) {
        programList.eq(i).addClass("changeBgMobile");
        programList.eq(i + 3).addClass("changeBgMobile");
        i += 3;
    };

    //搜索推荐面板结束
    //桌面导航
    (function ($) {
        $.fn.movebg = function (options) {
            var defaults = {
                width: 130,/*移动块的大小*/
                extra: 50,/*反弹的距离*/
                speed: 300,/*块移动的速度*/
                rebound_speed: 300/*块反弹的速度*/
            };
            var defaultser = $.extend(defaults, options);
            return this.each(function () {
                var _this = $(this);
                var _item = _this.children("ul").children("li").children("a");/*找到触发滑块滑动的元素	*/
                var origin = _this.children("ul").children("li.cur").index();/*获得当前导航的索引*/
                var _mover = _this.find(".move-bg");/*找到滑块*/
                var hidden;/*设置一个变量当html中没有规定cur时在鼠标移出导航后消失*/
                if (origin == -1) { origin = 0; hidden = "1" } else { _mover.show() };/*如果没有定义cur,则默认从第一个滑动出来*/
                var cur = prev = origin;/*初始化当前的索引值等于上一个及初始值;*/
                var extra = defaultser.extra;/*声明一个变量表示额外滑动的距离*/
                _mover.css({ left: "" + (defaultser.width+50) * origin + "px" });/*设置滑块当前显示的位置*/
                //设置鼠标经过事件
                _item.each(function (index, it) {
                    $(it).mouseover(function () {
                        cur = index;/*对当前滑块值进行赋值*/
                        move();
                        prev = cur;/*滑动完成对上个滑块值进行赋值*/
                    });
                });
                _this.mouseleave(function () {
                    cur = origin;/*鼠标离开导航时当前滑动值等于最初滑块值*/
                    move();
                    if (hidden == 1) { _mover.stop().fadeOut(); }/*当html中没有规定cur时在鼠标移出导航后消失*/
                });

                //滑动方法
                function move() {
                    _mover.clearQueue();
                    if (cur < prev) { extra = -Math.abs(defaultser.extra); } /*当当前值小于上个滑块值时，额外滑动值为负数*/
                    else { extra = Math.abs(defaultser.extra) };/*当当前值大于上个滑块值时，滑动值为正数*/
                    _mover.queue(
                        function () {
                            $(this).show().stop(true, true).animate({ left: "" + Number(cur * (defaultser.width+50) + extra) + "" }, defaultser.speed),
                            function () { $(this).dequeue() }
                        }
                    );
                    _mover.queue(
                        function () {
                            $(this).stop(true, true).animate({ left: "" + cur * (defaultser.width+50) + "" }, defaultser.rebound_speed),
                            function () { $(this).dequeue() }
                        }
                    );
                };
            })
        }
    })(jQuery);
    $(function () {
        $(".pcNav").movebg({
            width: 84/*滑块的大小*/
            , extra: 20/*额外反弹的距离*/
            , speed: 320/*滑块移动的速度*/
            , rebound_speed: 120/*滑块反弹的速度*/
        });
    });
    //二级菜单
    $(".pcNav > ul > li > a").mouseover(function () {
        $(".childrenNav").css("display", "none");
        $(this).next("div").stop().fadeIn(300);
        $(this).next("ul").stop().fadeIn(300);
    });

    $(".childrenNav").mouseover(function () {
        $(this).stop().fadeIn(0);
        $(this).css("display", "block");
    });
    $(".childrenNav").mouseout(function () {
        $(this).css("display", "none");
    });
    $(".pcNav > ul > li > a").mouseout(function () {
        $(this).next("div").stop().fadeOut(300);
    });
    //桌面菜单推荐产品
    $(".topProduct > a").mouseover(function () {
        $(this).children("p").stop().animate({ height: '40px' }, 100);
    });
    $(".topProduct > a").mouseout(function () {
        $(this).children("p").stop().animate({ height: '0px' }, 100);
    });
    //桌面导航结束

    //移动菜单开始
    mobileNavBtn.click(function () {
        $(this).children("a").toggleClass("hd-icon-app");
        $(this).children("a").toggleClass("hd-icon-close");
        mobileNav.stop().slideToggle();
        return false;
    });
    $(".mobileNav > ul > li > h1").click(function () {
        $(this).next("ul").stop().slideToggle();
        $(this).toggleClass("mobileActive");
        //$(this).find("i").toggleClass("hd-icon-down");
        //$(this).find("i").toggleClass("hd-icon-up");
        $(this).parent("li").find("span").find("span").addClass("secondIndent");
        $(this).parent("li").find("span").find("span").find("span").removeClass("secondIndent")
    });
    $(".mobileNav > ul > li > ul >li >h1 ").click(function () {
        $(this).next("ul").stop().slideToggle();
        $(this).toggleClass("mobileActive");
        //$(this).find("i").toggleClass("hd-icon-down");
        //$(this).find("i").toggleClass("hd-icon-up");
    });
    $(".mobileNav > ul > li > ul > li > ul > li >h1 ").click(function () {
        $(this).next("ul").stop().slideToggle();
        $(this).toggleClass("mobileActive");
        //$(this).find("i").toggleClass("hd-icon-down");
        //$(this).find("i").toggleClass("hd-icon-up");
    });
    $(".fontLimit").each(function () {
        var maxwidth = 12;
        if ($(this).text().length > maxwidth) {
            $(this).text($(this).text().substring(0, maxwidth));
            $(this).html($(this).html() + "…");
        }
    });
    $(".porductRecomend").find("p").each(function () {
        var maxwidth = 120;
        if ($(this).text().length > maxwidth) {
            $(this).text($(this).text().substring(0, maxwidth));
            $(this).html($(this).html() + "…");
        }
    });
    //移动菜单结束
    //产品切换标签
    $(".productMenu > ul > li").find("div.mobileProductItem").click(function () {
        var currentSlide = $('.regular').slick('slickCurrentSlide');
        alert(currentSlide);
    });
    function tabs(tabTit, on, tabCon) {
        $(tabTit).find("li").click(function () {
            $(this).addClass(on).siblings().removeClass(on);
            var index = $(tabTit).find("li").index(this);
            $(tabCon).children("div").eq(index).fadeIn().siblings().hide();
        });
    };
    tabs(".productMenu", "productCurrent", ".porductRecomend");



});