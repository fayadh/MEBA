/*****************************************************************************/
/* QualityControl: Event Handlers */
/*****************************************************************************/
Template.QualityControl.events({
});

/*****************************************************************************/
/* QualityControl: Helpers */
/*****************************************************************************/
Template.QualityControl.helpers({
	'images': function() {
		var a = []
		var number_of_pictures = 6
		_.times(number_of_pictures, function() { a.push('') })
		return a
	}
});

/*****************************************************************************/
/* QualityControl: Lifecycle Hooks */
/*****************************************************************************/
Template.QualityControl.onCreated(function () {
});

Template.QualityControl.onRendered(function () {
	$('.carousel').slick({
		arrows: true,
		autoplay: true,
		mobileFirst: true
	});
});

Template.QualityControl.onDestroyed(function () {
});
