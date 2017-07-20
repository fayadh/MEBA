/*****************************************************************************/
/* OilAndGas: Event Handlers */
/*****************************************************************************/
Template.OilAndGas.events({
});

/*****************************************************************************/
/* OilAndGas: Helpers */
/*****************************************************************************/
Template.OilAndGas.helpers({
	'images': function() {
		var a = []
		var number_of_pictures = 2
		_.times(number_of_pictures, function() { a.push('') })
		return a
	}
});

/*****************************************************************************/
/* OilAndGas: Lifecycle Hooks */
/*****************************************************************************/
Template.OilAndGas.onCreated(function () {
});

Template.OilAndGas.onRendered(function () {
	$('.carousel').slick({
		arrows: true,
		autoplay: true,
		mobileFirst: true
	});
});

Template.OilAndGas.onDestroyed(function () {
});
