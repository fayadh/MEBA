/*****************************************************************************/
/* MachineShop: Event Handlers */
/*****************************************************************************/
Template.MachineShop.events({
});

/*****************************************************************************/
/* MachineShop: Helpers */
/*****************************************************************************/
Template.MachineShop.helpers({
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
