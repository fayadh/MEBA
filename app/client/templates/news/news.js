/*****************************************************************************/
/* News: Event Handlers */
/*****************************************************************************/
Template.News.events({
	'submit #add-news': function(e) {
		e.preventDefault()
		let t = e.target
		
		function replaceURLWithHTMLLinks(text) {
		    var exp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/i;
		    return text.replace(exp,"<a href='$1'>$1</a>"); 
		}
		
		const headline = t.headline.value
		const content = replaceURLWithHTMLLinks(t.content.value)
		console.log('headline: ', headline, 'content: ', content)
		
		let options = { headline, content }
		Meteor.call('add_new_article', options)
	},
	'click .remove-article': function(e) {
		Meteor.call('remove_article', {_id: this._id})
	}
});

/*****************************************************************************/
/* News: Helpers */
/*****************************************************************************/
Template.News.helpers({
	'news': function() {
		return News.find({}, {sort: {createdAt: -1}})
	}
});

/*****************************************************************************/
/* News: Lifecycle Hooks */
/*****************************************************************************/
Template.News.onCreated(function () {
	let instance = this
	instance.subscribe('news')
});

Template.News.onRendered(function () {
});

Template.News.onDestroyed(function () {
});
