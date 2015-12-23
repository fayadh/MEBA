/*****************************************************************************/
/* Alloys: Event Handlers */
/*****************************************************************************/
Template.Alloys.events({
});

/*****************************************************************************/
/* Alloys: Helpers */
/*****************************************************************************/
Template.Alloys.helpers({
});

/*****************************************************************************/
/* Alloys: Lifecycle Hooks */
/*****************************************************************************/
Template.Alloys.onCreated(function () {
});

Template.Alloys.onRendered(function () {
	$('.carousel').slick({
		arrows: true,
		autoplay: true,
		mobileFirst: true
	});
});

Template.Alloys.onDestroyed(function () {
});
