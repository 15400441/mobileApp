function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function __alloyId52(e) {
        if (e && e.fromAdapter) return;
        __alloyId52.opts || {};
        var models = filterFunction(__alloyId51);
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId48 = models[i];
            __alloyId48.__transform = {};
            var __alloyId50 = Ti.UI.createTableViewRow({
                title: "undefined" != typeof __alloyId48.__transform["name"] ? __alloyId48.__transform["name"] : __alloyId48.get("name"),
                name: "undefined" != typeof __alloyId48.__transform["name"] ? __alloyId48.__transform["name"] : __alloyId48.get("name")
            });
            rows.push(__alloyId50);
        }
        $.__views.__alloyId47.setData(rows);
    }
    function filterFunction(collection) {
        if ("department" == from) {
            console.log("dep");
            return collection.where({
                organizer: dep
            });
        }
        if ("venue" == from) return collection.where({
            venue: fid
        });
        if ("regist" == from) {
            console.log("regist");
            return collection.where({
                name: eventName
            });
        }
    }
    function getDetail(e) {
        var name = e.source.name;
        if ("venue" == from) {
            var eventDetailController = Alloy.createController("eventDetail", {
                from: "venue",
                name: name
            });
            Alloy.Globals.tabGroup.activeTab.open(eventDetailController.getView());
        }
        if ("department" == from) {
            var eventDetailController = Alloy.createController("eventDetail", {
                from: "department",
                name: name
            });
            Alloy.Globals.tabGroup.activeTab.open(eventDetailController.getView());
        }
        if ("regist" == from) {
            var eventDetailController = Alloy.createController("eventDetail", {
                from: "regist",
                name: name
            });
            Alloy.Globals.tabGroup.activeTab.open(eventDetailController.getView());
        }
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "eventList";
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
    $.__views.win = Ti.UI.createWindow({
        id: "win"
    });
    $.__views.win && $.addTopLevelView($.__views.win);
    $.__views.__alloyId47 = Ti.UI.createTableView({
        id: "__alloyId47"
    });
    $.__views.win.add($.__views.__alloyId47);
    var __alloyId51 = Alloy.Collections["webNews"] || webNews;
    __alloyId51.on("fetch destroy change add remove reset", __alloyId52);
    getDetail ? $.addListener($.__views.__alloyId47, "click", getDetail) : __defers["$.__views.__alloyId47!click!getDetail"] = true;
    exports.destroy = function() {
        __alloyId51.off("fetch destroy change add remove reset", __alloyId52);
    };
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var fid = args.fid || {};
    var from = args.from || {};
    var dep = args.dep || {};
    var eventName = args.eventName || {};
    $.win.title = args.fid || args.dep || args.from || {};
    Alloy.Collections.webNews.fetch();
    $.win.addEventListener("close", function() {
        $.destroy();
    });
    __defers["$.__views.__alloyId47!click!getDetail"] && $.addListener($.__views.__alloyId47, "click", getDetail);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;