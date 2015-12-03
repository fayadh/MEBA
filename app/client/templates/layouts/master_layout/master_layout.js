var slideX = function(querySelector, amount) {
	dynamics.animate(document.querySelector(querySelector), {
		translateX: amount
	}, {
		type: dynamics.spring,
		duration: 2000,
		frequency: 1,
		friction: 1000,
		anticipationStrength: 300
	})
} 

Template.MasterLayout.helpers({
	'sideMenuToggle': function() {
		return Session.get('sideMenuToggle')
	}
});

Template.MasterLayout.events({
	'click .navTrig': function() {
		if(Session.get('sideMenuToggle')) {
			Session.set('sideMenuToggle', false)
			$('.master-yield').removeClass('dim');
			$('body').css('overflow', 'auto');
			$('.home a').unbind('click')
			slideX('#MEBALogo', 0)
		} else {
			Session.set('sideMenuToggle', true)
			$('.master-yield').addClass('dim');
			$('body').css('overflow', 'hidden');
			$('.home a').bind('click', function(e){
	    		e.preventDefault();
			})
			slideX('#MEBALogo', -$('#MEBALogo').width() - 50)	
		}
	},
	'click #contact-trigger': function() {
	}
});

Template.MasterLayout.onRendered(function() {
	// $('#contact-modal').modal({ show: false})
	// $('#youtube-modal').modal({ show: false})
})
