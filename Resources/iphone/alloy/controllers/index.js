function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function __alloyId73(e) {
        if (e && e.fromAdapter) return;
        __alloyId73.opts || {};
        var models = __alloyId72.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId63 = models[i];
            __alloyId63.__transform = {};
            var __alloyId65 = Ti.UI.createTableViewRow({
                layout: "vertical"
            });
            rows.push(__alloyId65);
            var __alloyId67 = Ti.UI.createImageView({
                image: "undefined" != typeof __alloyId63.__transform["image"] ? __alloyId63.__transform["image"] : __alloyId63.get("image"),
                top: "20dp"
            });
            __alloyId65.add(__alloyId67);
            var __alloyId69 = Ti.UI.createLabel({
                width: Ti.UI.SIZE,
                height: Ti.UI.SIZE,
                color: "#000",
                font: {
                    fontSize: 20,
                    fontFamily: "Helvetica Neue"
                },
                textAlign: "center",
                text: "undefined" != typeof __alloyId63.__transform["shortDes"] ? __alloyId63.__transform["shortDes"] : __alloyId63.get("shortDes"),
                bottom: "20dp"
            });
            __alloyId65.add(__alloyId69);
            var __alloyId71 = Ti.UI.createButton({
                title: "showDetail",
                name: "undefined" != typeof __alloyId63.__transform["name"] ? __alloyId63.__transform["name"] : __alloyId63.get("name")
            });
            __alloyId65.add(__alloyId71);
            showDetail ? $.addListener(__alloyId71, "click", showDetail) : __defers["__alloyId71!click!showDetail"] = true;
        }
        $.__views.__alloyId62.setData(rows);
    }
    function __alloyId91(e) {
        if (e && e.fromAdapter) return;
        __alloyId91.opts || {};
        var models = __alloyId90.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId85 = models[i];
            __alloyId85.__transform = sortCampus(__alloyId85);
            var __alloyId89 = Ti.UI.createTableViewSection({
                height: "20dp",
                textAlign: "left",
                headerTitle: "undefined" != typeof __alloyId85.__transform["h"] ? __alloyId85.__transform["h"] : __alloyId85.get("h")
            });
            rows.push(__alloyId89);
            var __alloyId88 = Ti.UI.createTableViewRow({
                title: "undefined" != typeof __alloyId85.__transform["VenueName"] ? __alloyId85.__transform["VenueName"] : __alloyId85.get("VenueName"),
                from: "venue",
                fid: "undefined" != typeof __alloyId85.__transform["VenueID"] ? __alloyId85.__transform["VenueID"] : __alloyId85.get("VenueID")
            });
            __alloyId89.add(__alloyId88);
        }
        $.__views.__alloyId84.setData(rows);
    }
    function __alloyId96(e) {
        if (e && e.fromAdapter) return;
        __alloyId96.opts || {};
        var models = __alloyId95.models;
        var len = models.length;
        for (var i = 0; len > i; i++) {
            var __alloyId94 = models[i];
            __alloyId93.push(require("ti.map").createAnnotation(mapTransform(__alloyId94)));
        }
        $.__views.mapView.annotations = __alloyId93;
    }
    function tableClick(e) {
        alert(e.row.from);
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
    function showRegistedEvents() {
        var eventListController = Alloy.createController("eventList", {
            from: "regist",
            eventName: "Singing Contest"
        });
        Alloy.Globals.tabGroup.activeTab.open(eventListController.getView());
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
    var __alloyId60 = [];
    $.__views.__alloyId61 = Ti.UI.createWindow({
        backgroundColor: "#fff",
        title: "HKBU Event",
        id: "__alloyId61"
    });
    $.__views.__alloyId62 = Ti.UI.createTableView({
        id: "__alloyId62"
    });
    $.__views.__alloyId61.add($.__views.__alloyId62);
    var __alloyId72 = Alloy.Collections["webNews"] || webNews;
    __alloyId72.on("fetch destroy change add remove reset", __alloyId73);
    $.__views.mainTab = Ti.UI.createTab({
        window: $.__views.__alloyId61,
        title: "HKBU Event",
        icon: "KS_nav_ui.png",
        id: "mainTab"
    });
    __alloyId60.push($.__views.mainTab);
    $.__views.__alloyId74 = Ti.UI.createWindow({
        backgroundColor: "#fff",
        title: "Departments",
        id: "__alloyId74"
    });
    var __alloyId76 = [];
    $.__views.__alloyId77 = Ti.UI.createTableViewSection({
        height: "20dp",
        textAlign: "left",
        headerTitle: " University Offices",
        id: "__alloyId77"
    });
    __alloyId76.push($.__views.__alloyId77);
    $.__views.__alloyId78 = Ti.UI.createTableViewRow({
        title: "Office of Student Affairs",
        fid: "uwide",
        from: "department",
        id: "__alloyId78"
    });
    $.__views.__alloyId77.add($.__views.__alloyId78);
    $.__views.__alloyId79 = Ti.UI.createTableViewRow({
        title: "Academic Registry",
        fid: "uwide",
        from: "department",
        id: "__alloyId79"
    });
    $.__views.__alloyId77.add($.__views.__alloyId79);
    $.__views.__alloyId80 = Ti.UI.createTableViewSection({
        height: "20dp",
        textAlign: "left",
        headerTitle: " Faculty of Science",
        id: "__alloyId80"
    });
    __alloyId76.push($.__views.__alloyId80);
    $.__views.__alloyId81 = Ti.UI.createTableViewRow({
        title: "computer Science",
        dep: "comp",
        from: "department",
        id: "__alloyId81"
    });
    $.__views.__alloyId80.add($.__views.__alloyId81);
    $.__views.__alloyId82 = Ti.UI.createTableViewRow({
        title: "Maths",
        fid: "sci",
        from: "department",
        id: "__alloyId82"
    });
    $.__views.__alloyId80.add($.__views.__alloyId82);
    $.__views.__alloyId75 = Ti.UI.createTableView({
        data: __alloyId76,
        id: "__alloyId75"
    });
    $.__views.__alloyId74.add($.__views.__alloyId75);
    tableClick ? $.addListener($.__views.__alloyId75, "click", tableClick) : __defers["$.__views.__alloyId75!click!tableClick"] = true;
    $.__views.eventTab = Ti.UI.createTab({
        window: $.__views.__alloyId74,
        title: "Deprtment",
        icon: "KS_nav_views.png",
        id: "eventTab"
    });
    __alloyId60.push($.__views.eventTab);
    $.__views.__alloyId83 = Ti.UI.createWindow({
        backgroundColor: "#fff",
        title: "Venues",
        id: "__alloyId83"
    });
    $.__views.__alloyId84 = Ti.UI.createTableView({
        id: "__alloyId84"
    });
    $.__views.__alloyId83.add($.__views.__alloyId84);
    var __alloyId90 = Alloy.Collections["venues"] || venues;
    __alloyId90.on("fetch destroy change add remove reset", __alloyId91);
    tableClick ? $.addListener($.__views.__alloyId84, "click", tableClick) : __defers["$.__views.__alloyId84!click!tableClick"] = true;
    $.__views.venueTab = Ti.UI.createTab({
        window: $.__views.__alloyId83,
        title: "Venues",
        icon: "KS_nav_views.png",
        id: "venueTab"
    });
    __alloyId60.push($.__views.venueTab);
    $.__views.__alloyId92 = Ti.UI.createWindow({
        backgroundColor: "#fff",
        title: "Map",
        navBarHidden: "true",
        id: "__alloyId92"
    });
    var __alloyId93 = [];
    $.__views.mapView = (require("ti.map").createView || Ti.UI.createView)({
        region: {
            latitude: 22.337827,
            longitude: 114.181962,
            latitudeDelta: .006,
            longitudeDelta: .006
        },
        annotations: __alloyId93,
        id: "mapView",
        userLocation: "true"
    });
    $.__views.__alloyId92.add($.__views.mapView);
    var __alloyId95 = Alloy.Collections["venues"] || venues;
    __alloyId95.on("fetch destroy change add remove reset", __alloyId96);
    addressClick ? $.addListener($.__views.mapView, "click", addressClick) : __defers["$.__views.mapView!click!addressClick"] = true;
    $.__views.mapTab = Ti.UI.createTab({
        window: $.__views.__alloyId92,
        title: "Map",
        icon: "KS_nav_views.png",
        id: "mapTab"
    });
    __alloyId60.push($.__views.mapTab);
    $.__views.__alloyId98 = Ti.UI.createWindow({
        backgroundColor: "#fff",
        title: "Me",
        id: "__alloyId98"
    });
    var __alloyId100 = [];
    $.__views.__alloyId101 = Ti.UI.createTableViewSection({
        height: "20dp",
        textAlign: "left",
        id: "__alloyId101"
    });
    __alloyId100.push($.__views.__alloyId101);
    $.__views.__alloyId102 = Ti.UI.createTableViewRow({
        id: "__alloyId102"
    });
    $.__views.__alloyId101.add($.__views.__alloyId102);
    $.__views.__alloyId103 = Ti.UI.createImageView({
        image: "/head.png",
        top: "20dp",
        id: "__alloyId103"
    });
    $.__views.__alloyId102.add($.__views.__alloyId103);
    $.__views.__alloyId104 = Ti.UI.createTableViewRow({
        title: "User:     Duan Sheng",
        id: "__alloyId104"
    });
    $.__views.__alloyId101.add($.__views.__alloyId104);
    $.__views.__alloyId105 = Ti.UI.createTableViewRow({
        title: "Logoff/login",
        id: "__alloyId105"
    });
    $.__views.__alloyId101.add($.__views.__alloyId105);
    $.__views.__alloyId106 = Ti.UI.createTableViewRow({
        title: "Registered Event",
        id: "__alloyId106"
    });
    $.__views.__alloyId101.add($.__views.__alloyId106);
    showRegistedEvents ? $.addListener($.__views.__alloyId106, "click", showRegistedEvents) : __defers["$.__views.__alloyId106!click!showRegistedEvents"] = true;
    $.__views.__alloyId107 = Ti.UI.createTableViewRow({
        title: "About Us",
        id: "__alloyId107"
    });
    $.__views.__alloyId101.add($.__views.__alloyId107);
    $.__views.__alloyId99 = Ti.UI.createTableView({
        data: __alloyId100,
        id: "__alloyId99"
    });
    $.__views.__alloyId98.add($.__views.__alloyId99);
    $.__views.__alloyId97 = Ti.UI.createTab({
        window: $.__views.__alloyId98,
        title: "Me",
        icon: "KS_nav_views.png",
        id: "__alloyId97"
    });
    __alloyId60.push($.__views.__alloyId97);
    $.__views.index = Ti.UI.createTabGroup({
        tabs: __alloyId60,
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    exports.destroy = function() {
        __alloyId72.off("fetch destroy change add remove reset", __alloyId73);
        __alloyId90.off("fetch destroy change add remove reset", __alloyId91);
        __alloyId95.off("fetch destroy change add remove reset", __alloyId96);
    };
    _.extend($, $.__views);
    $.index.open();
    Alloy.Collections.webNews.fetch();
    Alloy.Globals.tabGroup = $.index;
    Alloy.Collections.venues.fetch();
    var temp = "";
    __defers["__alloyId71!click!showDetail"] && $.addListener(__alloyId71, "click", showDetail);
    __defers["$.__views.__alloyId75!click!tableClick"] && $.addListener($.__views.__alloyId75, "click", tableClick);
    __defers["$.__views.__alloyId84!click!tableClick"] && $.addListener($.__views.__alloyId84, "click", tableClick);
    __defers["$.__views.mapView!click!addressClick"] && $.addListener($.__views.mapView, "click", addressClick);
    __defers["$.__views.__alloyId106!click!showRegistedEvents"] && $.addListener($.__views.__alloyId106, "click", showRegistedEvents);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;