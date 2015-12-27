/*****************************************************************************/
/* Foundry: Event Handlers */
/*****************************************************************************/
Template.Foundry.events({
});

/*****************************************************************************/
/* Foundry: Helpers */
/*****************************************************************************/
Template.Foundry.helpers({
	'images': function() {
		var a = []
		var number_of_pictures = 4
		_.times(number_of_pictures, function() { a.push('') })
		return a
	}
});

/*****************************************************************************/
/* Foundry: Lifecycle Hooks */
/*****************************************************************************/
Template.Foundry.onCreated(function () {
});

Template.Foundry.onRendered(function () {
	$('.carousel').slick({
		arrows: true,
		autoplay: true,
		mobileFirst: true
	});
});

Template.Foundry.onDestroyed(function () {
});
