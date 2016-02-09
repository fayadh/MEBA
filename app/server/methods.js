/*****************************************************************************/
/*  Server Methods */
/*****************************************************************************/

const add_new_article = new ValidatedMethod({
	name: 'add_new_article',
	validate: new SimpleSchema({
		headline: { type: String },
		content: { type: String }
	}).validator(),
	run({ ...args }) {
		if(Meteor.userId()) {
			args.createdAt = new Date()
			News.insert(args)
		} else {
			throw new Meteor.Error('Not-Authorized', 'You are not authorized to add news articles.')
		}	
	}
})

const remove_article = new ValidatedMethod({
	name: 'remove_article',
	validate: new SimpleSchema({
		_id: { type: String, regEx: SimpleSchema.RegEx.Id },
	}).validator(),
	run({ ...args }) {
		if(Meteor.userId()) {
			News.remove({ _id: args._id })
		} else {
			throw new Meteor.Error('Not-Authorized', 'You are not authorized to remove news articles.')
		}	
	}
})