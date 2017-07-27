$(function(){

	function e() {
        var e = $(".design-topic .swiper-slide-active").data("index");
        $(".design-topic").find(".design-info").hide(),
        $(".design-topic").find(".design-info").each(function () {
            if ($(this).data("index") == e) return void $(this).show()
        })
    }
	var t = new Swiper(".design-swiper", {
	    slidesPerView: "auto",
	    loop: !0,
	    loopedSlides: 2,
	    simulateTouch: !1,
	    offsetPxBefore: $(window).width() < 1440 ? 156 : 725,
	    onInit: function (t) {
	        t.swipeTo(3)
	        e()
		}
	})  
    $(".design-topic .arrow-left").click(function () {
        t.swipePrev()
        $(".design-swiper").find(".swiper-slide").eq(0).hasClass("swiper-slide-active")
        t.swipePrev()
        e()
    })
    $(".design-topic .arrow-right").click(function () {
        t.swipeNext()
        e()
    })

    fn.Tab($('.J_Type'));
    fn.Tab($('.J_Cate'));
    

    $('.banner').slide({autoPlay:!0})
    $('.indexTeam').slide({titCell:".js-sDot li",autoPage:!1,trigger:"click"})
    
})