var args = arguments[0] || {};
var fid = args.fid || {};
var from = args.from || {};
var dep = args.dep || {};
var eventName = args.eventName || {};
$.win.title = args.fid || args.dep ||args.from|| {};

Alloy.Collections.webNews.fetch();

$.win.addEventListener("close", function() {
	$.destroy();
});

function filterFunction(collection) {
	if (from == "department") {
		console.log("dep");
		return collection.where({
			organizer : dep
		});
	}

	else if (from == "venue") {
		
		return collection.where({
			venue : fid
		});
	}
	
    else if(from=="regist"){
    	console.log("regist");
		return collection.where({
			name : eventName
		});
    }
};

function getDetail(e) {
	var name = e.source.name;
	
	if ("venue" == from) {
		var eventDetailController = Alloy.createController("eventDetail", {
			from : "venue",
			name : name
		});
		Alloy.Globals.tabGroup.activeTab.open(eventDetailController.getView());
	}
	if ("department" == from) {
		var eventDetailController = Alloy.createController("eventDetail",  {
			from : "department",
			name : name
		});
		Alloy.Globals.tabGroup.activeTab.open(eventDetailController.getView());
	}
	if ("regist" == from) {
		var eventDetailController = Alloy.createController("eventDetail", {
			from : "regist",
			name : name
		});
		Alloy.Globals.tabGroup.activeTab.open(eventDetailController.getView());
	}
}
