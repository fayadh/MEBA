/*****************************************************************************/
/* ImageContainer: Event Handlers */
/*****************************************************************************/
Template.ImageContainer.events({
});

/*****************************************************************************/
/* ImageContainer: Helpers */
/*****************************************************************************/
Template.ImageContainer.helpers({
	'add_': function(string) {
		return string.replace(/ /g, "_").toLowerCase()
	}
});

/*****************************************************************************/
/* ImageContainer: Lifecycle Hooks */
/*****************************************************************************/
Template.ImageContainer.onCreated(function () {
});

Template.ImageContainer.onRendered(function () {
});

Template.ImageContainer.onDestroyed(function () {
});
