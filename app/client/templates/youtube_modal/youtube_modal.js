/*****************************************************************************/
/* YoutubeModal: Event Handlers */
/*****************************************************************************/
Template.YoutubeModal.events({
	'click #close-youtube-modal': function() {
		
	}
});

/*****************************************************************************/
/* YoutubeModal: Helpers */
/*****************************************************************************/
Template.YoutubeModal.helpers({
});

/*****************************************************************************/
/* YoutubeModal: Lifecycle Hooks */
/*****************************************************************************/
Template.YoutubeModal.onCreated(function () {
});

Template.YoutubeModal.onRendered(function () {
	//start the transition.
	Meteor.setTimeout(function() {
		$('.youtube-modal').css('top', '0%')
	}, 500)
});

Template.YoutubeModal.onDestroyed(function () {
});
