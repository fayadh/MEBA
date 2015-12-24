/*****************************************************************************/
/* Home: Event Handlers */
/*****************************************************************************/
Template.Home.events({
	'click #trigger-youtube': function() {
		Blaze.render(Template.YoutubeModal, document.getElementsByClassName('master-yield')[0])
		Meteor.setTimeout(function() {
			$('video')[0].pause()
		}, 1500)
	}
});

/*****************************************************************************/
/* Home: Helpers */
/*****************************************************************************/
Template.Home.helpers({
});

/*****************************************************************************/
/* Home: Lifecycle Hooks */
/*****************************************************************************/
Template.Home.onCreated(function () {
});

Template.Home.onRendered(function () {
});

Template.Home.onDestroyed(function () {
});
