/*****************************************************************************/
/* ToolRoomAndPatternShop: Event Handlers */
/*****************************************************************************/
Template.ToolRoomAndPatternShop.events({
});

/*****************************************************************************/
/* ToolRoomAndPatternShop: Helpers */
/*****************************************************************************/
Template.ToolRoomAndPatternShop.helpers({
	'images': function() {
		var a = []
		var number_of_pictures = 5
		_.times(number_of_pictures, function() { a.push('') })
		return a
	}
});

/*****************************************************************************/
/* ToolRoomAndPatternShop: Lifecycle Hooks */
/*****************************************************************************/
Template.ToolRoomAndPatternShop.onCreated(function () {
});

Template.ToolRoomAndPatternShop.onRendered(function () {
	$('.carousel').slick({
		arrows: true,
		autoplay: true,
		mobileFirst: true
	});
});

Template.ToolRoomAndPatternShop.onDestroyed(function () {
});
