/*****************************************************************************/
/* Home: Event Handlers */
/*****************************************************************************/
Template.Home.events({
});

/*****************************************************************************/
/* Home: Helpers */
/*****************************************************************************/
Template.Home.helpers({
});

/*****************************************************************************/
/* Home: Lifecycle Hooks */
/*****************************************************************************/
Template.Home.onCreated(function () {
});

Template.Home.onRendered(function () {
	//set the nav link color to white.
	$('.nav-link').css('color', 'white')
	$('.nav-link').mouseenter(function() { $(this).css('color', 'silver') })
	$('.nav-link').mouseout(function() { $(this).css('color', 'white') })
	
	$(document).ready(function(){
		var backgroundImages=["background_0.png","background_1.png","background_2.png","background_3.png", "background_4.png"];

		var i = Math.floor(Math.random() * backgroundImages.length);
		var backgroundImage = backgroundImages[i];

		$('.master-yield').css("background-image","url(/background/"+backgroundImage+")");
		
		// //Set height for MEBA introductory message.
// 		var required_height = $(window).height() - $('nav').height() //in px.
// 		$('.inner-cont').css('height', required_height+'px')
	});
});

Template.Home.onDestroyed(function () {
	$('.nav-link').css('color', 'black')
	$('.nav-link').mouseenter(function() { $(this).css('color', 'silver') })
	$('.nav-link').mouseout(function() { $(this).css('color', 'black') })
});
