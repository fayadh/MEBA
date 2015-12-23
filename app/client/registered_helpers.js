//tells us what subsection of products or profile we're in.
Template.registerHelper('subsection_name', function() {
	var path = Router.current().location.get().path
	//the split string. The first element is always empty. The second is either products or profile. Then the subsection.
	var split 		= path.split('/')
	var section  	= split[1]
	var subsection 	= split[2]
	//we only care about the subsection
	if(subsection) {
		function toTitleCase(str) {
		    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
		}
		
		//replace the underscores and make title case.
		return toTitleCase(subsection.replace(/_/g, ' '))
	}
})
