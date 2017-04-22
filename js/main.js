// 导航栏事件 

$(function() {
	$(".header-menubtn").click(function() {
		$("nav").css("display", "block" == $("nav").css("display") ? "none" : "block")
	});
	$(window).resize(function() {
		767 > $(window).width() ? $("nav").css("display", "none") : $("nav").css("display", "inline-block")
	});
	$(window).on("scroll", function(a) {
		"inline-block" == $("nav").css("display") && "block" == $(".header-menubtn").css("display") && $("nav").css("display", "none")
	})
});

// 天气事件
function getWeather(){
	$.post("https://api.isecret.vip",null,function(e){
		$(".weather-t1").text(e.t1);
		$(".weather-t2").text(e.t2);
		$(".weather-city").text(e.city);;
	},'JSON');
}


// 一言事件
function getHitokoto(){
	$.post("https://sslapi.hitokoto.cn",null,function(e){
		$(".header-siteinfo").html(e.hitokoto+" —— <strong>"+e.from+"</strong>");
	},'JSON');
}

getWeather();
getHitokoto();