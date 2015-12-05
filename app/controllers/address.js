var args = arguments[0] || {};
var venue=args.venue|| {};


Alloy.Collections.venues.fetch();
function filterFunction(collection ){
	return collection.where({
			VenueID : venue
		});
}


 
function transform(model) {
	
	var transform = model.toJSON();
	transform.rightButton = Titanium.UI.iPhone.SystemButton.DISCLOSURE;
	transform.title =transform.VenueID;
	
	return transform;
	
}
