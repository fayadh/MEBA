/*****************************************************************************/
/* MachineShop: Event Handlers */
/*****************************************************************************/
Template.MachineShop.events({
});

/*****************************************************************************/
/* MachineShop: Helpers */
/*****************************************************************************/
Template.MachineShop.helpers({
	'images': function() {
		var a = []
		var number_of_pictures = 6
		_.times(number_of_pictures, function() { a.push('') })
		return a
	}
});

/*****************************************************************************/
/* MachineShop: Lifecycle Hooks */
/*****************************************************************************/
Template.MachineShop.onCreated(function () {
});

Template.MachineShop.onRendered(function () {
	$('.carousel').slick({
		arrows: true,
		autoplay: true,
		mobileFirst: true
	});
});

Template.MachineShop.onDestroyed(function () {
});
