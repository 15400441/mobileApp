$.index.open();
Alloy.Collections.webNews.fetch();


// Alloy.Globals.eventTab = $.eventTab;
// Alloy.Globals.mainTab = $.mainTab;
// Alloy.Globals.venueTab = $.venueTab;
// Alloy.Globals.mapTab = $.mapTab;
Alloy.Globals.u = $.u;

Alloy.Globals.tabGroup = $.index;

function tableClick(e) {
	
	
	if ("department" == e.row.from) {
		var eventListController = Alloy.createController('eventList', {
			fid : e.row.fid,
			from : e.row.from,
			dep:e.row.dep
		});
		Alloy.Globals.tabGroup.activeTab.open(eventListController.getView());
	} 

   else if("venue"==e.row.from)
   {
		var eventListController = Alloy.createController('eventList', {
			fid : e.row.fid,
			from : e.row.from
		});
		Alloy.Globals.tabGroup.activeTab.open(eventListController.getView());
	}
};




function addressClick(e){
	if (e.clicksource == 'rightButton') {
		
	
	var eventListController = Alloy.createController('eventList', {
			fid : e.annotation.VenueID,
			from : "venue"
			
		});
		Alloy.Globals.tabGroup.activeTab.open(eventListController.getView());
	}
	
};
//var conn=Alloy.Collections.venues.fetch();
Alloy.Collections.venues.fetch();

var temp = "";
function sortCampus(model) {
	var transform = model.toJSON();

	if (transform.CampusID == temp)
		transform.h = "";
	else
		transform.h = transform.CampusID;
	temp = transform.CampusID;
	return transform;
};



function showDetail(e) {
	
	var eventDetailController = Alloy.createController("eventDetail", {
		name : e.source.name,
		from : "venue",
	});

	Alloy.Globals.tabGroup.activeTab.open(eventDetailController.getView());
};


function mapTransform(model)
{
	var transform = model.toJSON();
	
	transform.title =transform.VenueID;
	transform.rightButton = Titanium.UI.iPhone.SystemButton.DISCLOSURE;
	
	return transform;
};

function login(e)
{
	
	if(Alloy.Globals.u.title=="")
	{
	
var loginController = Alloy.createController('login');
		
    Alloy.Globals.tabGroup.activeTab.open(loginController.getView());
   }
   
   else{
   	var xhr=Ti.Network.createHTTPClient();
		xhr.onload=function(e)
		{
			alert(this.responseText);
			Alloy.Globals.u.title="";
			
			
		};
		
		xhr.open('POST','http://localhost:1337/user/loginOutMobile');
		xhr.send({ 
			
		});
   }
	
}


function showRegistedEvents(e)
{
	
	var registedActivitesController = Alloy.createController('registedActivities');
		
    Alloy.Globals.tabGroup.activeTab.open(registedActivitesController.getView());
}



	


