$(document).ready(function(){

	$(".close").bind('click',function(){
		$(".modal").slideUp(200);
		$(".layer").fadeOut(300);
	});

	$(".st-box .event").bind('click',function(event){
		var index = $(".st-box .event" ).index( this );				//div clicked child
		
		var play=$(".st-box .event .edesc").eq(index).html();
		$(".layer").fadeIn(100);

		$(".modal .m_con").empty();
		$('.modal .m_con').append(play);
		$(".modal").slideDown(200);

	});

	$(".enter").bind('click',function(e){
		$(".home_page").hide("slide",{direction: 'up'},400);
	});
});