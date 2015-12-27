/*****************************************************************************/
/* HeatTreatment: Event Handlers */
/*****************************************************************************/
Template.HeatTreatment.events({
});

/*****************************************************************************/
/* HeatTreatment: Helpers */
/*****************************************************************************/
Template.HeatTreatment.helpers({
	'images': function() {
		var a = []
		var number_of_pictures = 4
		_.times(number_of_pictures, function() { a.push('') })
		return a
	}
});

/*****************************************************************************/
/* HeatTreatment: Lifecycle Hooks */
/*****************************************************************************/
Template.HeatTreatment.onCreated(function () {
});

Template.HeatTreatment.onRendered(function () {
	$('.carousel').slick({
		arrows: true,
		autoplay: true,
		mobileFirst: true
	});
});

Template.HeatTreatment.onDestroyed(function () {
});
