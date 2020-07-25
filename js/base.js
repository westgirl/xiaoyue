$(function(){
	//导航
	$(".nav-item").click(function(){
		$(this).addClass('active').siblings().removeClass('active');
	})
	// 索引
	$(".sort-item-text").click(function(){
		$(this).addClass('active').siblings().removeClass('active');
		$(this).parent().siblings().children().removeClass('active');
	})
	
	
})