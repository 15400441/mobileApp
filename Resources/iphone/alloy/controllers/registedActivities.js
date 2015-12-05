function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function __alloyId116(e) {
        if (e && e.fromAdapter) return;
        __alloyId116.opts || {};
        var models = __alloyId115.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId112 = models[i];
            __alloyId112.__transform = {};
            var __alloyId114 = Ti.UI.createTableViewRow({
                title: "undefined" != typeof __alloyId112.__transform["name"] ? __alloyId112.__transform["name"] : __alloyId112.get("name"),
                name: "undefined" != typeof __alloyId112.__transform["name"] ? __alloyId112.__transform["name"] : __alloyId112.get("name")
            });
            rows.push(__alloyId114);
        }
        $.__views.__alloyId111.setData(rows);
    }
    function getDetail(e) {
        var name = e.source.name;
        var eventDetailController = Alloy.createController("eventDetail", {
            from: "regist",
            name: name
        });
        Alloy.Globals.tabGroup.activeTab.open(eventDetailController.getView());
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "registedActivities";
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
    Alloy.Collections.instance("activities");
    $.__views.win = Ti.UI.createWindow({
        id: "win"
    });
    $.__views.win && $.addTopLevelView($.__views.win);
    $.__views.__alloyId111 = Ti.UI.createTableView({
        id: "__alloyId111"
    });
    $.__views.win.add($.__views.__alloyId111);
    var __alloyId115 = Alloy.Collections["activities"] || activities;
    __alloyId115.on("fetch destroy change add remove reset", __alloyId116);
    getDetail ? $.addListener($.__views.__alloyId111, "click", getDetail) : __defers["$.__views.__alloyId111!click!getDetail"] = true;
    exports.destroy = function() {
        __alloyId115.off("fetch destroy change add remove reset", __alloyId116);
    };
    _.extend($, $.__views);
    arguments[0] || {};
    $.win.title = "Registed Events";
    Alloy.Collections.activities.fetch();
    $.win.addEventListener("close", function() {
        $.destroy();
    });
    __defers["$.__views.__alloyId111!click!getDetail"] && $.addListener($.__views.__alloyId111, "click", getDetail);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;