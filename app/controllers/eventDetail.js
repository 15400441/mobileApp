var args = arguments[0] || {};
var eventName = args.name || {};
var from = args.from || {};
var name = args.name || {};
$.w.addEventListener("close", function() {
	$.destroy();
});

Alloy.Collections.webNews.fetch();

function filterByName(collection) {
	//alert(eventName);
	// if("venue"==from)
	// return collection.where({name:eventName});
	// else
	return collection.where({
		name : name
	});
};

function showAddress(e) {

	if ("venue" == from) {
		var addressController = Alloy.createController("address", {
			venue : e.source.venue,
		});

		Alloy.Globals.tabGroup.activeTab.open(addressController.getView());
	} else if ("department" == from) {
		var addressController = Alloy.createController("address", {
			venue : e.source.venue,
		});

		Alloy.Globals.tabGroup.activeTab.open(addressController.getView());
	} else if ("regist" == from) {
		var addressController = Alloy.createController("address", {
			venue : e.source.venue,
		});

		Alloy.Globals.tabGroup.activeTab.open(addressController.getView());
	}

};

function regist(e)
{
	var id=e.source.id;
	var xhr=Ti.Network.createHTTPClient();
		xhr.onload=function(e)
		{
			
			alert(this.responseText);
			
		};
		
		xhr.open('POST','http://localhost:1337/activity/registerOne');
		xhr.send({ 
			'id':id
		});
}

