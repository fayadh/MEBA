/*****************************************************************************/
/* YoutubeModal: Event Handlers */
/*****************************************************************************/
Template.YoutubeModal.events({
	'click #close-youtube-modal': function() {
		//Send down.
		$('.youtube-modal').css('top', '100%')
		var current_route = Router.current().location.get().href
		
		//Re-play only on home.
		if(current_route === '/') {
			$('video')[0].play()
		}
		
		Meteor.setTimeout(function() {
			// remove
			var view = Blaze.getView($('.youtube-modal')[0])
			Blaze.remove(view)
			
		}, 1500)
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
	//Start the transition.
	Meteor.setTimeout(function() {
		$('.youtube-modal').css('top', '0%')
	}, 500)
	
	//This function creates an <iframe> (and YouTube player)
     var player;
     function onYouTubeIframeAPIReady() {
       player = new YT.Player('player', {
         height: '390',
         width: '640',
         videoId: 'Cm25_zNVj30',
         events: {
           'onReady': onPlayerReady
         }
       });
     }

     function onPlayerReady(event) {
       event.target.playVideo();
     }

     function stopVideo() {
       player.stopVideo();
     }
	 
	 onYouTubeIframeAPIReady()
});

Template.YoutubeModal.onDestroyed(function () {
});
