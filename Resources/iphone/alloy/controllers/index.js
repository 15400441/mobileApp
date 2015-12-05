function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function __alloyId70(e) {
        if (e && e.fromAdapter) return;
        __alloyId70.opts || {};
        var models = __alloyId69.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId60 = models[i];
            __alloyId60.__transform = {};
            var __alloyId62 = Ti.UI.createTableViewRow({
                layout: "vertical"
            });
            rows.push(__alloyId62);
            var __alloyId64 = Ti.UI.createImageView({
                image: "undefined" != typeof __alloyId60.__transform["image"] ? __alloyId60.__transform["image"] : __alloyId60.get("image"),
                top: "20dp"
            });
            __alloyId62.add(__alloyId64);
            var __alloyId66 = Ti.UI.createLabel({
                width: Ti.UI.SIZE,
                height: Ti.UI.SIZE,
                color: "#000",
                font: {
                    fontSize: 20,
                    fontFamily: "Helvetica Neue"
                },
                textAlign: "center",
                text: "undefined" != typeof __alloyId60.__transform["shortDes"] ? __alloyId60.__transform["shortDes"] : __alloyId60.get("shortDes"),
                bottom: "20dp"
            });
            __alloyId62.add(__alloyId66);
            var __alloyId68 = Ti.UI.createButton({
                title: "showDetail",
                name: "undefined" != typeof __alloyId60.__transform["name"] ? __alloyId60.__transform["name"] : __alloyId60.get("name")
            });
            __alloyId62.add(__alloyId68);
            showDetail ? $.addListener(__alloyId68, "click", showDetail) : __defers["__alloyId68!click!showDetail"] = true;
        }
        $.__views.__alloyId59.setData(rows);
    }
    function __alloyId88(e) {
        if (e && e.fromAdapter) return;
        __alloyId88.opts || {};
        var models = __alloyId87.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId82 = models[i];
            __alloyId82.__transform = sortCampus(__alloyId82);
            var __alloyId86 = Ti.UI.createTableViewSection({
                height: "20dp",
                textAlign: "left",
                headerTitle: "undefined" != typeof __alloyId82.__transform["h"] ? __alloyId82.__transform["h"] : __alloyId82.get("h")
            });
            rows.push(__alloyId86);
            var __alloyId85 = Ti.UI.createTableViewRow({
                title: "undefined" != typeof __alloyId82.__transform["VenueName"] ? __alloyId82.__transform["VenueName"] : __alloyId82.get("VenueName"),
                from: "venue",
                fid: "undefined" != typeof __alloyId82.__transform["VenueID"] ? __alloyId82.__transform["VenueID"] : __alloyId82.get("VenueID")
            });
            __alloyId86.add(__alloyId85);
        }
        $.__views.__alloyId81.setData(rows);
    }
    function __alloyId93(e) {
        if (e && e.fromAdapter) return;
        __alloyId93.opts || {};
        var models = __alloyId92.models;
        var len = models.length;
        for (var i = 0; len > i; i++) {
            var __alloyId91 = models[i];
            __alloyId90.push(require("ti.map").createAnnotation(mapTransform(__alloyId91)));
        }
        $.__views.mapView.annotations = __alloyId90;
    }
    function tableClick(e) {
        if ("department" == e.row.from) {
            var eventListController = Alloy.createController("eventList", {
                fid: e.row.fid,
                from: e.row.from,
                dep: e.row.dep
            });
            Alloy.Globals.tabGroup.activeTab.open(eventListController.getView());
        } else if ("venue" == e.row.from) {
            var eventListController = Alloy.createController("eventList", {
                fid: e.row.fid,
                from: e.row.from
            });
            Alloy.Globals.tabGroup.activeTab.open(eventListController.getView());
        }
    }
    function addressClick(e) {
        if ("rightButton" == e.clicksource) {
            var eventListController = Alloy.createController("eventList", {
                fid: e.annotation.VenueID,
                from: "venue"
            });
            Alloy.Globals.tabGroup.activeTab.open(eventListController.getView());
        }
    }
    function sortCampus(model) {
        var transform = model.toJSON();
        transform.h = transform.CampusID == temp ? "" : transform.CampusID;
        temp = transform.CampusID;
        return transform;
    }
    function showDetail(e) {
        var eventDetailController = Alloy.createController("eventDetail", {
            name: e.source.name,
            from: "venue"
        });
        Alloy.Globals.tabGroup.activeTab.open(eventDetailController.getView());
    }
    function mapTransform(model) {
        var transform = model.toJSON();
        transform.title = transform.VenueID;
        transform.rightButton = Titanium.UI.iPhone.SystemButton.DISCLOSURE;
        return transform;
    }
    function login() {
        if ("" == Alloy.Globals.u.title) {
            var loginController = Alloy.createController("login");
            Alloy.Globals.tabGroup.activeTab.open(loginController.getView());
        } else {
            var xhr = Ti.Network.createHTTPClient();
            xhr.onload = function() {
                alert(this.responseText);
                Alloy.Globals.u.title = "";
            };
            xhr.open("POST", "http://localhost:1337/user/loginOutMobile");
            xhr.send({});
        }
    }
    function showRegistedEvents() {
        var registedActivitesController = Alloy.createController("registedActivities");
        Alloy.Globals.tabGroup.activeTab.open(registedActivitesController.getView());
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    this.args = arguments[0] || {};
    if (arguments[0]) {
        {
            __processArg(arguments[0], "__parentSymbol");
        }
        {
            __processArg(arguments[0], "$model");
        }
        {
            __processArg(arguments[0], "__itemTemplate");
        }
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    Alloy.Collections.instance("webNews");
    Alloy.Collections.instance("venues");
    var __alloyId57 = [];
    $.__views.__alloyId58 = Ti.UI.createWindow({
        backgroundColor: "#fff",
        title: "HKBU Event",
        id: "__alloyId58"
    });
    $.__views.__alloyId59 = Ti.UI.createTableView({
        id: "__alloyId59"
    });
    $.__views.__alloyId58.add($.__views.__alloyId59);
    var __alloyId69 = Alloy.Collections["webNews"] || webNews;
    __alloyId69.on("fetch destroy change add remove reset", __alloyId70);
    $.__views.mainTab = Ti.UI.createTab({
        window: $.__views.__alloyId58,
        title: "HKBU Event",
        icon: "KS_nav_ui.png",
        id: "mainTab"
    });
    __alloyId57.push($.__views.mainTab);
    $.__views.__alloyId71 = Ti.UI.createWindow({
        backgroundColor: "#fff",
        title: "Departments",
        id: "__alloyId71"
    });
    var __alloyId73 = [];
    $.__views.__alloyId74 = Ti.UI.createTableViewSection({
        height: "20dp",
        textAlign: "left",
        headerTitle: " University Offices",
        id: "__alloyId74"
    });
    __alloyId73.push($.__views.__alloyId74);
    $.__views.__alloyId75 = Ti.UI.createTableViewRow({
        title: "Office of Student Affairs",
        fid: "uwide",
        from: "department",
        id: "__alloyId75"
    });
    $.__views.__alloyId74.add($.__views.__alloyId75);
    $.__views.__alloyId76 = Ti.UI.createTableViewRow({
        title: "Academic Registry",
        fid: "uwide",
        from: "department",
        id: "__alloyId76"
    });
    $.__views.__alloyId74.add($.__views.__alloyId76);
    $.__views.__alloyId77 = Ti.UI.createTableViewSection({
        height: "20dp",
        textAlign: "left",
        headerTitle: " Faculty of Science",
        id: "__alloyId77"
    });
    __alloyId73.push($.__views.__alloyId77);
    $.__views.__alloyId78 = Ti.UI.createTableViewRow({
        title: "computer Science",
        dep: "comp",
        from: "department",
        id: "__alloyId78"
    });
    $.__views.__alloyId77.add($.__views.__alloyId78);
    $.__views.__alloyId79 = Ti.UI.createTableViewRow({
        title: "Maths",
        fid: "sci",
        from: "department",
        id: "__alloyId79"
    });
    $.__views.__alloyId77.add($.__views.__alloyId79);
    $.__views.__alloyId72 = Ti.UI.createTableView({
        data: __alloyId73,
        id: "__alloyId72"
    });
    $.__views.__alloyId71.add($.__views.__alloyId72);
    tableClick ? $.addListener($.__views.__alloyId72, "click", tableClick) : __defers["$.__views.__alloyId72!click!tableClick"] = true;
    $.__views.eventTab = Ti.UI.createTab({
        window: $.__views.__alloyId71,
        title: "Deprtment",
        icon: "KS_nav_views.png",
        id: "eventTab"
    });
    __alloyId57.push($.__views.eventTab);
    $.__views.__alloyId80 = Ti.UI.createWindow({
        backgroundColor: "#fff",
        title: "Venues",
        id: "__alloyId80"
    });
    $.__views.__alloyId81 = Ti.UI.createTableView({
        id: "__alloyId81"
    });
    $.__views.__alloyId80.add($.__views.__alloyId81);
    var __alloyId87 = Alloy.Collections["venues"] || venues;
    __alloyId87.on("fetch destroy change add remove reset", __alloyId88);
    tableClick ? $.addListener($.__views.__alloyId81, "click", tableClick) : __defers["$.__views.__alloyId81!click!tableClick"] = true;
    $.__views.venueTab = Ti.UI.createTab({
        window: $.__views.__alloyId80,
        title: "Venues",
        icon: "KS_nav_views.png",
        id: "venueTab"
    });
    __alloyId57.push($.__views.venueTab);
    $.__views.__alloyId89 = Ti.UI.createWindow({
        backgroundColor: "#fff",
        title: "Map",
        navBarHidden: "true",
        id: "__alloyId89"
    });
    var __alloyId90 = [];
    $.__views.mapView = (require("ti.map").createView || Ti.UI.createView)({
        region: {
            latitude: 22.337827,
            longitude: 114.181962,
            latitudeDelta: .006,
            longitudeDelta: .006
        },
        annotations: __alloyId90,
        id: "mapView",
        userLocation: "true"
    });
    $.__views.__alloyId89.add($.__views.mapView);
    var __alloyId92 = Alloy.Collections["venues"] || venues;
    __alloyId92.on("fetch destroy change add remove reset", __alloyId93);
    addressClick ? $.addListener($.__views.mapView, "click", addressClick) : __defers["$.__views.mapView!click!addressClick"] = true;
    $.__views.mapTab = Ti.UI.createTab({
        window: $.__views.__alloyId89,
        title: "Map",
        icon: "KS_nav_views.png",
        id: "mapTab"
    });
    __alloyId57.push($.__views.mapTab);
    $.__views.__alloyId95 = Ti.UI.createWindow({
        backgroundColor: "#fff",
        title: "Me",
        id: "__alloyId95"
    });
    var __alloyId97 = [];
    $.__views.__alloyId98 = Ti.UI.createTableViewSection({
        height: "20dp",
        textAlign: "left",
        id: "__alloyId98"
    });
    __alloyId97.push($.__views.__alloyId98);
    $.__views.__alloyId99 = Ti.UI.createTableViewRow({
        id: "__alloyId99"
    });
    $.__views.__alloyId98.add($.__views.__alloyId99);
    $.__views.__alloyId100 = Ti.UI.createImageView({
        image: "/head.png",
        top: "20dp",
        id: "__alloyId100"
    });
    $.__views.__alloyId99.add($.__views.__alloyId100);
    $.__views.u = Ti.UI.createTableViewRow({
        title: "",
        id: "u"
    });
    $.__views.__alloyId98.add($.__views.u);
    $.__views.__alloyId101 = Ti.UI.createTableViewRow({
        title: "Logoff/login",
        id: "__alloyId101"
    });
    $.__views.__alloyId98.add($.__views.__alloyId101);
    login ? $.addListener($.__views.__alloyId101, "click", login) : __defers["$.__views.__alloyId101!click!login"] = true;
    $.__views.__alloyId102 = Ti.UI.createTableViewRow({
        title: "Registered Event",
        id: "__alloyId102"
    });
    $.__views.__alloyId98.add($.__views.__alloyId102);
    showRegistedEvents ? $.addListener($.__views.__alloyId102, "click", showRegistedEvents) : __defers["$.__views.__alloyId102!click!showRegistedEvents "] = true;
    $.__views.__alloyId103 = Ti.UI.createTableViewRow({
        title: "About Us",
        id: "__alloyId103"
    });
    $.__views.__alloyId98.add($.__views.__alloyId103);
    $.__views.__alloyId96 = Ti.UI.createTableView({
        data: __alloyId97,
        id: "__alloyId96"
    });
    $.__views.__alloyId95.add($.__views.__alloyId96);
    $.__views.__alloyId94 = Ti.UI.createTab({
        window: $.__views.__alloyId95,
        title: "Me",
        icon: "KS_nav_views.png",
        id: "__alloyId94"
    });
    __alloyId57.push($.__views.__alloyId94);
    $.__views.index = Ti.UI.createTabGroup({
        tabs: __alloyId57,
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    exports.destroy = function() {
        __alloyId69.off("fetch destroy change add remove reset", __alloyId70);
        __alloyId87.off("fetch destroy change add remove reset", __alloyId88);
        __alloyId92.off("fetch destroy change add remove reset", __alloyId93);
    };
    _.extend($, $.__views);
    $.index.open();
    Alloy.Collections.webNews.fetch();
    Alloy.Globals.u = $.u;
    Alloy.Globals.tabGroup = $.index;
    Alloy.Collections.venues.fetch();
    var temp = "";
    __defers["__alloyId68!click!showDetail"] && $.addListener(__alloyId68, "click", showDetail);
    __defers["$.__views.__alloyId72!click!tableClick"] && $.addListener($.__views.__alloyId72, "click", tableClick);
    __defers["$.__views.__alloyId81!click!tableClick"] && $.addListener($.__views.__alloyId81, "click", tableClick);
    __defers["$.__views.mapView!click!addressClick"] && $.addListener($.__views.mapView, "click", addressClick);
    __defers["$.__views.__alloyId101!click!login"] && $.addListener($.__views.__alloyId101, "click", login);
    __defers["$.__views.__alloyId102!click!showRegistedEvents "] && $.addListener($.__views.__alloyId102, "click", showRegistedEvents);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;