function defhover(a) {
    $(".type_List a,.type_List2 a,.navigation a,.top_menu a,#nav a").each(function() {
        $(this).addClass($(this).attr("href") == a ? "hover" : "")
    })
}
function IEhtml5() {
    var b, a = IEhtml5.arguments;
    for (b = 0; b < a.length; b++)
        document.createElement(a[b])
}
var topMain, PIN = {};
PIN.LoadScript = function(a, b, c) {
    var e, d = a.toLowerCase().substring(a.lastIndexOf(".") + 1);
    "js" === d ? (e = document.createElement("script"),
    e.type = "text/javascript") : "css" === d && (e = document.createElement("link"),
    e.type = "text/css",
    e.rel = "stylesheet"),
    c && e.setAttribute("charset", c),
    e.readyState ? e.onreadystatechange = function() {
        ("loaded" == e.readyState || "complete" == e.readyState) && (e.onreadystatechange = null,
        b && b(),
        document.getElementsByTagName("head")[0].removeChild(this))
    }
    : e.onload = function() {
        b && b(),
        document.getElementsByTagName("head")[0].removeChild(this)
    }
    ,
    "js" === d ? e.src = a : "css" === d && (e.href = a),
    document.getElementsByTagName("head")[0].appendChild(e)
}
,
PIN.LoadScript("static/js/lib.pincolor.min.js", function() {
    function b() {
        $("#hglbox").find(".astl").each(function() {
            var a = $(this);
            Danimate(a)
        })
    }
    $("img[data-cache=true]").cache_images(function(a) {
        $(a).lazyload({
            placeholder: "Public/images/com/touming.gif",
            effect: "fadeIn"
        })
    }),
    $(".lazyimg img").lazyload({
        placeholder: "Public/images/com/touming.gif",
        effect: "fadeIn"
    }),
    jQuery("a[href='']").attr("target", "_self").attr("href", "javascript:void(0);"),
    jQuery("a[href*=#]").click(function() {
        jQuery.scrollTo(jQuery(this).attr("href"), 1e3)
    }),
    jQuery(".sct").click(function() {
        jQuery.scrollTo(jQuery(this).attr("href"), 1e3)
    }),
    $(".gotop").click(function() {
        $.scrollTo(0, 500)
    }),
    defhover(window.location.href),
    $(".soChange").each(function() {
        var a = $(this)
          , b = a.attr("Ctime") ? a.attr("Ctime") : 3e3
          , c = a.attr("delay") ? a.attr("delay") : 300
          , d = a.attr("type") ? a.attr("type") : "fade"
          , e = a.attr("slideTime") ? a.attr("slideTime") : 600;
        a.find("a.a_bigImg").soChange({
            thumbObj: a.find(".soul li"),
            thumbNowClass: "on",
            botPrev: a.find(".top_pre"),
            botNext: a.find(".top_next"),
            clickFalse: !1,
            thumbOverEvent: !0,
            overStop: !0,
            slideTime: e,
            delayTime: c,
            changeType: d,
            changeTime: b
        })
    }),
    jQuery(".hoverFv img,.hoverFi").hover(function() {
        jQuery(this).animate({
            opacity: .25
        }, "fast")
    }, function() {
        jQuery(this).animate({
            opacity: 1
        }, "fast")
    }),
    $(".hoverFd").hover(function() {
        $(this).stop().animate({
            opacity: .6
        }, 200, function() {
            $(this).animate({
                opacity: 1
            }, 300)
        })
    }),
    jQuery(".Vblock1,.Vblock2").hover(function() {
        jQuery(this).find("h3").stop().animate({
            top: "0px"
        }, 600, "")
    }, function() {
        jQuery(this).find("h3").stop().animate({
            top: "-510px"
        }, 400)
    }),
    $(".Vblock5 .vbox").click(function() {
        var d, e, a = $(this), b = a.attr("data-url"), c = a.attr("data-id");
        return $(".Vblock5").each(function() {
            $(this).find(".video").html("<i id='" + $(this).find(".vbox").attr("data-id") + "'></i>"),
            $(this).find(".vimg").show()
        }),
        a.find(".vimg").hide(),
        b.indexOf(".flv") > -1 ? (d = {
            vcastr_file: b,
            IsAutoPlay: "1"
        },
        e = {
            wmode: "opaque",
            allowscriptaccess: "always",
            allowfullscreen: "true"
        },
        swfobject.embedSWF("Public/images/swf/vcastr22.swf", c, "720", "480", "9.0.0", "expressInstall.swf", d, e)) : (d = {
            dataFile: "",
            showLogo: "false"
        },
        e = {
            wmode: "opaque",
            wmode: "transparent",
            allowscriptaccess: "always",
            allowfullscreen: "true"
        },
        swfobject.embedSWF(b, c, "720", "480", "9.0.0", "expressInstall.swf", d, e)),
        !1
    }),
    $("#newsbody img").imgAutoSize(1160, 8820),
    $("#mr_frUl1 .mr_frUl").jCarouselLite({
        btnNext: "#mr_frUl1 .next",
        btnPrev: "#mr_frUl1 .prev",
        mouseWheel: !0,
        animation: "slow",
        visible: 3,
        auto: 2e3,
        scroll: 1,
        easing: "easeOutBack",
        vertical: !1,
        onMouse: !0,
        speed: 800
    }),
    $("#mr_frUl2 .mr_frUl").jCarouselLite({
        btnNext: "#mr_frUl2 .next",
        btnPrev: "#mr_frUl2 .prev",
        mouseWheel: !0,
        animation: "slow",
        visible: 4,
        auto: 2e3,
        scroll: 2,
        easing: "easeOutBack",
        vertical: !1,
        onMouse: !0,
        speed: 800
    }),
    $("#mr_frUl3 .mr_frUl").jCarouselLite({
        btnNext: "#mr_frUl3 .next",
        btnPrev: "#mr_frUl3 .prev",
        mouseWheel: !0,
        animation: "slow",
        visible: 5,
        auto: 2e3,
        scroll: 5,
        easing: "easeOutBack",
        vertical: !1,
        onMouse: !0,
        speed: 800
    }),
    $("#mr_frUl4 .mr_frUl").jCarouselLite({
        btnNext: "#mr_frUl4 .next",
        btnPrev: "#mr_frUl4 .prev",
        mouseWheel: !0,
        animation: "slow",
        visible: 3,
        auto: 2e3,
        scroll: 1,
        easing: "easeOutBack",
        vertical: !0,
        onMouse: !0,
        speed: 800
    }),
    0 != $("#hglbox").length && $("#hglbox").appear(function() {
        b()
    }, {
        accX: 0,
        accY: 0
    }),
    $("body").live("dragstart", function() {
        return !1
    }),
    document.body.onselectstart = function() {
        return !1
    }
    ,
    document.body.onbeforecopy = function() {
        return !1
    }
}),
IEhtml5("article", "details", "footer", "header", "nav", "summary", "time"),
$("#kcon img").hover(function() {
    $("#kcon img").not($(this)).stop().animate({
        opacity: .3
    }, 300)
}, function() {
    $("#kcon img").not($(this)).stop().animate({
        opacity: 1
    }, 300)
}),
$(".viimg").hover(function() {
    var a = this;
    $(a).find(".xj").animate({
        left: 0,
        top: 0,
        opacity: 1
    }, 300)
}, function() {
    var a = this;
    $(a).find(".xj").stop().animate({
        left: 0,
        top: -353,
        opacity: 0
    }, 300)
}),
$(".ert").hover(function() {
    $(this).stop().animate({
        top: "-6px"
    }, 250)
}, function() {
    $(this).stop().animate({
        top: "0px"
    }, 250)
}),
$(".pai ul li a").hover(function() {
    $(this).stop().animate({
        top: "-10px"
    }, 250)
}, function() {
    $(this).stop().animate({
        top: "0px"
    }, 250)
}),
topMain = $(".top").height(),
$(window).scroll(function() {
    $(window).scrollTop() > topMain ? $(".scorollNav").slideDown(1e3) : $(".scorollNav").slideUp(1e3)
});
