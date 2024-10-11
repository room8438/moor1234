$(".fl > li").on("mouseover focusin", function(){
	
	$(this).siblings().children(".subul").removeClass("on")
	$(this).children(".subul").stop().slideDown(400)

})


$(".fl > li").on("mouseleave", function(){
	
	
	$(this).children(".subul").stop().slideUp(400)
})

    $( document ).ready( function() {
$( window ).scroll( function() {

	
	if ( $( document ).scrollTop() > 200 ) {
		
		$("#inb" ).addClass( 'jbFixed' ); }else {
  $( "#inb" ).removeClass( 'jbFixed' );
}
	
})
	})