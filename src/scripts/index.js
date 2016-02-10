//PAGINA 1
var onSubmitFunc = function() {


	$('#complete').append("<p>" + "Your message has been posted. Go to View to see all messages." + "</p>")

}


$('form').submit(onSubmitFunc)


//PAGINA 2 JQUERY/AJAX ETC

// $('#messages h4').mouseenter(function(){

// 	$('#messages p').fadeIn("fast");

// });

// $('#messages h4').mouseleave(function(){

// 	$('#messages p').fadeOut("fast");

// });