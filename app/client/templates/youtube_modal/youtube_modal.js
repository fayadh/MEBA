/*****************************************************************************/
/* YoutubeModal: Event Handlers */
/*****************************************************************************/
Template.YoutubeModal.events({
	'click #close-youtube-modal': function() {
		//Send down.
		$('.youtube-modal').css('top', '100%')
		
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
	//start the transition.
	Meteor.setTimeout(function() {
		$('.youtube-modal').css('top', '0%')
	}, 500)
	
	// 3. This function creates an <iframe> (and YouTube player)
     //    after the API code downloads.
     var player;
     function onYouTubeIframeAPIReady() {
       player = new YT.Player('player', {
         height: '390',
         width: '640',
         videoId: 'Cm25_zNVj30',
         events: {
           'onReady': onPlayerReady,
           'onStateChange': onPlayerStateChange
         }
       });
     }

     // 4. The API will call this function when the video player is ready.
     function onPlayerReady(event) {
       event.target.playVideo();
     }

     // 5. The API calls this function when the player's state changes.
     //    The function indicates that when playing a video (state=1),
     //    the player should play for six seconds and then stop.
     var done = false;
     function onPlayerStateChange(event) {
       if (event.data == YT.PlayerState.PLAYING && !done) {
         setTimeout(stopVideo, 6000);
         done = true;
       }
     }
     function stopVideo() {
       player.stopVideo();
     }
	 
	 onYouTubeIframeAPIReady()
});

Template.YoutubeModal.onDestroyed(function () {
});
