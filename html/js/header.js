
//pc
 $("header .gnb > li").on( "mouseover", function(){
	
	$(this).siblings().children(".item").css("display","none")
	$(this).children(".item").stop().slideDown(500)
$(".box").addClass("on")
 $(this).children("a").addClass("on");
	
	
});
$("header .gnb > li").on( "mouseleave", function(){
	
	
	$(this).children(".item").stop().slideUp(500)
	$(".box").removeClass("on");

	 $(this).children("a").removeClass("on");
});

/* $("header li a").on( "mouseover", function(){
	 $(this).addClass("on");
	

});
$("header li a").on( "mouseleave", function(){
	$(this).removeClass("on");
	
	
});*/
//mobile

$(".hamburger").click(function(){
	
	$(".page").addClass("open")
	$(".box").addClass("on")

});
$(".close").click(function(){
	
	$(".page").removeClass("open")
	$(".box").removeClass("on");
});
	$(".nav > li").has("ul").children("a").click(function(){
			$(".nav ul").slideUp(500);
			$(this).next().stop().slideToggle(500);
		$(".nav > li > a i").removeClass("on");
		$(this).find("i").toggleClass("on"); 
		

	
			return false
		
		});
