/*****************************************************************************/
/* AluminumBased: Event Handlers */
/*****************************************************************************/
Template.AluminumBased.events({
});

/*****************************************************************************/
/* AluminumBased: Helpers */
/*****************************************************************************/
Template.AluminumBased.helpers({
});

/*****************************************************************************/
/* AluminumBased: Lifecycle Hooks */
/*****************************************************************************/
Template.AluminumBased.onCreated(function () {
});

Template.AluminumBased.onRendered(function () {
	$('.images-for').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  fade: true,
	  asNavFor: '.images-nav'
	});
	$('.images-nav').slick({
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  asNavFor: '.images-for',
	  dots: true,
	  centerMode: true,
	  focusOnSelect: true
	});
});

Template.AluminumBased.onDestroyed(function () {
});
