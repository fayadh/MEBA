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
	$('.nav-link').css('color', 'silver')
	$('.nav-link').hover(function() { $(this).css('color', 'white') })
});

Template.Home.onDestroyed(function () {
	$('.nav-link').css('color', 'silver')
	$('.nav-link').hover(function() { $(this).css('color', 'black') })
});
