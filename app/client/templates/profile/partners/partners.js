/*****************************************************************************/
/* Partners: Event Handlers */
/*****************************************************************************/
Template.Partners.events({
});

/*****************************************************************************/
/* Partners: Helpers */
/*****************************************************************************/
Template.Partners.helpers({
	'images': function() {
		var a = []
		var number_of_pictures = 2
		_.times(number_of_pictures, function() { a.push('') })
		return a
	}
});

/*****************************************************************************/
/* Partners: Lifecycle Hooks */
/*****************************************************************************/
Template.Partners.onCreated(function () {
});

Template.Partners.onRendered(function () {
	$('.carousel').slick({
		arrows: true,
		autoplay: true,
		mobileFirst: true
	});
});

Template.Partners.onDestroyed(function () {
});
