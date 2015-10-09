function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function __alloyId55(e) {
        if (e && e.fromAdapter) return;
        __alloyId55.opts || {};
        var models = filterFunction(__alloyId54);
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId51 = models[i];
            __alloyId51.__transform = {};
            var __alloyId53 = Ti.UI.createTableViewRow({
                title: "undefined" != typeof __alloyId51.__transform["name"] ? __alloyId51.__transform["name"] : __alloyId51.get("name"),
                name: "undefined" != typeof __alloyId51.__transform["name"] ? __alloyId51.__transform["name"] : __alloyId51.get("name")
            });
            rows.push(__alloyId53);
        }
        $.__views.__alloyId50.setData(rows);
    }
    function filterFunction(collection) {
        if ("department" == from) {
            console.log("dep");
            return collection.where({
                organizer: dep
            });
        }
        if ("venue" == from) {
            console.log("venue");
            return collection.where({
                venue: fid
            });
        }
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
    $.__views.__alloyId50 = Ti.UI.createTableView({
        id: "__alloyId50"
    });
    $.__views.win.add($.__views.__alloyId50);
    var __alloyId54 = Alloy.Collections["webNews"] || webNews;
    __alloyId54.on("fetch destroy change add remove reset", __alloyId55);
    getDetail ? $.addListener($.__views.__alloyId50, "click", getDetail) : __defers["$.__views.__alloyId50!click!getDetail"] = true;
    exports.destroy = function() {
        __alloyId54.off("fetch destroy change add remove reset", __alloyId55);
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
    __defers["$.__views.__alloyId50!click!getDetail"] && $.addListener($.__views.__alloyId50, "click", getDetail);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;