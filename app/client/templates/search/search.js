/*****************************************************************************/
/* Search: Event Handlers */
/*****************************************************************************/
Template.Search.events({
	'keyup #search_user': function() {
		Session.set('user_name', $('#search_user').val() )
	},
	'mouseover .profile_container': function() {
		//replace so we can look up the id's properly
		var uri = this.uri.replace('.','_')
		var target = $('#'+uri)[0]
		dynamics.animate(target, {
		  scale: 1.1,
		}, {
		  type: dynamics.spring
		})
	},
	'mouseout .profile_container': function() {
		//replace so we can look up the id's properly
		var uri = this.uri.replace('.','_')
		var target = $('#'+uri)[0]
		dynamics.animate(target, {
		  scale: 1,
		}, {
		  type: dynamics.spring
		})
	}
});

/*****************************************************************************/
/* Search: Helpers */
/*****************************************************************************/
Template.Search.helpers({
	'users': function() {
		//search through first and last names and return any valid results
		var name = Session.get('user_name')
		//don't be case sensative
		var regex = new RegExp(name, 'i')
		return Meteor.users.find({ 
			$or: [
			{'profile.first_name'	: {$regex: regex}},
			{'profile.last_name'	: {$regex: regex}},
			]
		})
	},
	'dot_to_underscore': function(uri) {
		//changes the dot notation on the uri to underscores to be used with id's. 
		return uri.replace('.','_')
	}
});

/*****************************************************************************/
/* Search: Lifecycle Hooks */
/*****************************************************************************/
Template.Search.onCreated(function () {
});

Template.Search.onRendered(function () {
});

Template.Search.onDestroyed(function () {
});
