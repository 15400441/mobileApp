var args = arguments[0] || {};

$.win.title = 'Registed Events';

Alloy.Collections.activities.fetch();

$.win.addEventListener("close", function() {
	$.destroy();
});



function getDetail(e) {
	var name = e.source.name;
	
	
		var eventDetailController = Alloy.createController("eventDetail", {
			from : "regist",
			name : name
		});
		Alloy.Globals.tabGroup.activeTab.open(eventDetailController.getView());
	
}
