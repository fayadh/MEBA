/*****************************************************************************/
/* CentrifugalCasting: Event Handlers */
/*****************************************************************************/
Template.CentrifugalCasting.events({
});

/*****************************************************************************/
/* CentrifugalCasting: Helpers */
/*****************************************************************************/
Template.CentrifugalCasting.helpers({
	'images': function() {
		var a = []
		var number_of_pictures = 2
		_.times(number_of_pictures, function() { a.push('') })
		return a
	}
});

/*****************************************************************************/
/* CentrifugalCasting: Lifecycle Hooks */
/*****************************************************************************/
Template.CentrifugalCasting.onCreated(function () {
});

Template.CentrifugalCasting.onRendered(function () {
	$('.carousel').slick({
		arrows: true,
		autoplay: true,
		mobileFirst: true
	});
});

Template.CentrifugalCasting.onDestroyed(function () {
});
