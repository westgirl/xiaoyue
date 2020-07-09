$(function(){
	
	var swiper = new Swiper('.des-swiper .swiper-container', {
			direction : 'vertical',
		  slidesPerView: 4,
		  // slidesPerGroup : 4,
		  spaceBetween: 12,
		  // centeredSlides : true,
//          centeredSlidesBounds: true,
		  // centeredSlides : true,
		  // centerInsufficientSlides: true,
		  // loop: true,
		  on:{
			slideChange: function(){
				console.log(this);
				// console.log(this.activeIndex);
			},
			click:function(e){
				console.log(this.clickedIndex);
				$('.swiper-wrapper .swiper-slide').eq(this.clickedIndex).addClass('swiper-slide-active').siblings().removeClass('swiper-slide-active')
				var src = $('.swiper-wrapper .swiper-slide').eq(this.clickedIndex).find('img').attr('src');
				$(".big-img img").attr('src',src)
			 },
			 resize: function(){
				  //窗口变化了
			}
		  }
		});
		$(".des-prev").click(function(){
			var height = 0
			if(swiper.slidesGrid.length % 4){
				height = (swiper.slidesGrid.length % 4)*90
			}else{
				height = (swiper.slidesGrid.length / 4  -1)*360
			}
			swiper.translateTo(height, 200, true, true)
			return
			
			let index = 0;
			if(swiper.activeIndex==0){
				return
			}else{
				index -- 
			}
			console.log(swiper.slidesGrid);
			swiper.translateTo(178, 1000, true, true)
			// swiper.slidePrev()
			// swiper.slideTo(index)
			// mySwiper.slideTo(0, 1000, false)
		})
		$(".des-next").click(function(){
			var height = 0
			if(swiper.slidesGrid.length % 4){
				height = (swiper.slidesGrid.length % 4)*90
			}else{
				height = (swiper.slidesGrid.length / 4  -1)*360
			}
			swiper.translateTo(-height, 200, true, false)
			return
			
			console.log(swiper.slidesGrid.length-1)
			let index = 0;
			console.log(swiper.activeIndex);
			if(swiper.activeIndex == (swiper.slidesGrid.length-1)){
				return
			}else{
				index ++ 
			}
			// swiper.slideTo(index)
			swiper.translateTo(-89, 1000, true, true)
			// swiper.slideNext()
		})
	
	    $(".goods-nav-box").click(function(){
			var index = $(this).index();
			$(this).addClass('active').siblings().removeClass('active');
			$(".goods-content").eq(index).addClass('active').siblings().removeClass('active');
		})
	
})