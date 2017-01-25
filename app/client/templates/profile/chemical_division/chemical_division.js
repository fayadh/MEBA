/*****************************************************************************/
/* ChemicalDivision: Event Handlers */
/*****************************************************************************/
Template.ChemicalDivision.events({
});

/*****************************************************************************/
/* ChemicalDivision: Helpers */
/*****************************************************************************/
Template.ChemicalDivision.helpers({
	'images': function() {
		var a = []
		var number_of_pictures = 2
		_.times(number_of_pictures, function() { a.push('') })
		return a
	}
});

/*****************************************************************************/
/* ChemicalDivision: Lifecycle Hooks */
/*****************************************************************************/
Template.ChemicalDivision.onCreated(function () {
});

Template.ChemicalDivision.onRendered(function () {
	$('.carousel').slick({
		arrows: true,
		autoplay: true,
		mobileFirst: true
	});
});

Template.ChemicalDivision.onDestroyed(function () {
});
