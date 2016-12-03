function handleInstructionsModal() {
	// when users click on the element with
	// `.js-what` class, we'll fade in
	// the instructions modal
	$('.js-what').click(function() {
		$('.overlay').fadeIn(1000);
	});

	// when users click on the element with the
	// `.js-close` class, we'll fade out
	// the instructions modal
	$('.js-close').click(function(){
  		$(".overlay").fadeOut(1000);
  	});
}
var secret = Math.floor(1+(Math.random())*100)

function guess(guess){
	message=""
	if(guess==secret){
		message="You Won"
		document.alert("You Won");
		}
	else if(Math.abs(guess-secret)>30)
			message="Too cold"
	else if(Math.abs(guess-secret)>20)
			message="cold"
	else if(Math.abs(guess-secret)>10)
			message="Hot"
	else if(Math.abs(guess-secret)>5)
			message="Too cold"

$('#guessList').html("<li>"+guess+"</li>");
$('.js-feedback').html("<h3>"+message+"</h3>")

}



// `$(document).ready` lets you specify a
// function that should execute when all the
// resources required by your web page have loaded.
// This code says, when the document is ready, run the
// `handleInstructionsModal` function.

$(document).ready(function(){
	handleInstructionsModal();
	

	$("#js-guess-submit").click(function(){
	var userguess = $('input:text[name=user-guess]').val();
	guess(userguess);
    });

});	



