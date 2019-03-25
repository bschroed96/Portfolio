(document).ready(function() {

	

	$(".box1").mouseenter(function(){
		$("p").addClass("textopacity"); /*adds animation class*/
	});
	$(".box1").mouseleave(function(){
		$("p").removeClass("textopacity"); /*adds animation class*/
	});

	$(".box2").mouseenter(function(){
		$("p").addClass("textopacity"); /*adds animation class*/
	});
	$(".box2").mouseleave(function(){
		$("p").removeClass("textopacity"); /*adds animation class*/
	});
	
});