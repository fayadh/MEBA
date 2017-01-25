const dynamics = require('dynamics.js')

/*****************************************************************************/
/* SideMenu: Event Handlers */
/*****************************************************************************/
Template.SideMenu.events({
	'click .navTrig': function() {
		if(Session.get('sideMenuToggle')) {
			var sm = $('.side-menu');
			dynamics.animate(document.querySelector('.side-menu'), {
				translateX: -sm.width() - 50 //added the 50 to clear out the menu
			}, {
				type: dynamics.easeInOut,
				duration: 500,
				friction: 500
			})

			$('body').css('overflow', 'auto');

			//set time out so that the animation can take its course
			Meteor.setTimeout(function() {
				Session.set('sideMenuToggle', false)
				$('.master-yield').removeClass('dim');
				$('.home a').unbind('click')
			}, 500)
		}
	},
	'click #logout': function() {
		Meteor.logout()
		FlowRouter.go('/')
	}
});

/*****************************************************************************/
/* SideMenu: Helpers */
/*****************************************************************************/
Template.SideMenu.helpers({
});

/*****************************************************************************/
/* SideMenu: Lifecycle Hooks */
/*****************************************************************************/
Template.SideMenu.onCreated(function () {
});

Template.SideMenu.onRendered(function () {
	var sm = $('.side-menu');
	//hide it all.
	//the 50px is to clear extra parts that show.
	sm.css({
		'transform': 'translateX(-'+ (sm.width() + 50) + 'px)'
	})

    dynamics.animate(document.querySelector('.side-menu'), {
   		translateX: 0,
   	}, {
   		type: dynamics.spring,
   		duration: 1000,
   		frequency: 1,
   		friction: 1000,
   		anticipationStrength: 300
   	})
	var items = document.getElementsByClassName('navLink')

	for(var i=0; i<items.length; i++) {
		var item = items[i]
		dynamics.css(item, {
			opacity: 0,
			translateX: -300
		})
		dynamics.animate(item, {
			opacity: 1,
			translateX: 0
		}, {
			type: dynamics.spring,
			duration: 1000,
			frequency: 1,
			friction: 1000,
			anticipationStrength: 300,
			delay: 100 + i * 40
		})
	}
});

Template.SideMenu.onDestroyed(function () {
});
