function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function __alloyId44(e) {
        if (e && e.fromAdapter) return;
        __alloyId44.opts || {};
        var models = filterByName(__alloyId43);
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId9 = models[i];
            __alloyId9.__transform = {};
            var __alloyId11 = Ti.UI.createTableViewRow({
                layout: "vertical"
            });
            rows.push(__alloyId11);
            var __alloyId13 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId9.__transform["name"] ? __alloyId9.__transform["name"] : __alloyId9.get("name"),
                bottom: "10dp"
            });
            __alloyId11.add(__alloyId13);
            var __alloyId15 = Ti.UI.createImageView({
                image: "undefined" != typeof __alloyId9.__transform["image"] ? __alloyId9.__transform["image"] : __alloyId9.get("image"),
                top: "20dp"
            });
            __alloyId11.add(__alloyId15);
            var __alloyId17 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId9.__transform["fullDes"] ? __alloyId9.__transform["fullDes"] : __alloyId9.get("fullDes"),
                bottom: "20dp"
            });
            __alloyId11.add(__alloyId17);
            var __alloyId19 = Ti.UI.createTableViewRow({
                bottom: "20dp"
            });
            rows.push(__alloyId19);
            var __alloyId21 = Ti.UI.createLabel({
                text: "organizer:",
                left: "true"
            });
            __alloyId19.add(__alloyId21);
            var __alloyId23 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId9.__transform["organizer"] ? __alloyId9.__transform["organizer"] : __alloyId9.get("organizer"),
                layout: "right"
            });
            __alloyId19.add(__alloyId23);
            var __alloyId25 = Ti.UI.createTableViewRow({
                bottom: "20dp"
            });
            rows.push(__alloyId25);
            var __alloyId27 = Ti.UI.createLabel({
                text: "Date:",
                left: "true"
            });
            __alloyId25.add(__alloyId27);
            var __alloyId29 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId9.__transform["date"] ? __alloyId9.__transform["date"] : __alloyId9.get("date"),
                layout: "right"
            });
            __alloyId25.add(__alloyId29);
            var __alloyId31 = Ti.UI.createTableViewRow({
                bottom: "20dp"
            });
            rows.push(__alloyId31);
            var __alloyId33 = Ti.UI.createLabel({
                text: "time:",
                left: "true"
            });
            __alloyId31.add(__alloyId33);
            var __alloyId35 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId9.__transform["time"] ? __alloyId9.__transform["time"] : __alloyId9.get("time"),
                layout: "right"
            });
            __alloyId31.add(__alloyId35);
            var __alloyId37 = Ti.UI.createTableViewRow({
                bottom: "20dp"
            });
            rows.push(__alloyId37);
            var __alloyId39 = Ti.UI.createButton({
                title: "address",
                venue: "undefined" != typeof __alloyId9.__transform["venue"] ? __alloyId9.__transform["venue"] : __alloyId9.get("venue")
            });
            __alloyId37.add(__alloyId39);
            showAddress ? $.addListener(__alloyId39, "click", showAddress) : __defers["__alloyId39!click!showAddress"] = true;
            var __alloyId41 = Ti.UI.createTableViewRow({
                bottom: "20dp"
            });
            rows.push(__alloyId41);
            var __alloyId42 = Ti.UI.createButton({
                title: "regist"
            });
            __alloyId41.add(__alloyId42);
            regist ? $.addListener(__alloyId42, "click", regist) : __defers["__alloyId42!click!regist"] = true;
        }
        $.__views.__alloyId8.setData(rows);
    }
    function filterByName(collection) {
        return collection.where({
            name: name
        });
    }
    function showAddress(e) {
        if ("venue" == from) {
            var addressController = Alloy.createController("address", {
                venue: e.source.venue
            });
            Alloy.Globals.tabGroup.activeTab.open(addressController.getView());
        } else if ("department" == from) {
            var addressController = Alloy.createController("address", {
                venue: e.source.venue
            });
            Alloy.Globals.tabGroup.activeTab.open(addressController.getView());
        } else if ("regist" == from) {
            var addressController = Alloy.createController("address", {
                venue: e.source.venue
            });
            Alloy.Globals.tabGroup.activeTab.open(addressController.getView());
        }
    }
    function regist(e) {
        var id = e.source.id;
        var xhr = Ti.Network.createHTTPClient();
        xhr.onload = function() {
            alert(this.responseText);
        };
        xhr.open("POST", "http://localhost:1337/activity/registerOne");
        xhr.send({
            id: id
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "eventDetail";
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
    $.__views.w = Ti.UI.createWindow({
        id: "w"
    });
    $.__views.w && $.addTopLevelView($.__views.w);
    $.__views.__alloyId8 = Ti.UI.createTableView({
        id: "__alloyId8"
    });
    $.__views.w.add($.__views.__alloyId8);
    var __alloyId43 = Alloy.Collections["webNews"] || webNews;
    __alloyId43.on("fetch destroy change add remove reset", __alloyId44);
    exports.destroy = function() {
        __alloyId43.off("fetch destroy change add remove reset", __alloyId44);
    };
    _.extend($, $.__views);
    var args = arguments[0] || {};
    args.name || {};
    var from = args.from || {};
    var name = args.name || {};
    $.w.addEventListener("close", function() {
        $.destroy();
    });
    Alloy.Collections.webNews.fetch();
    __defers["__alloyId39!click!showAddress"] && $.addListener(__alloyId39, "click", showAddress);
    __defers["__alloyId42!click!regist"] && $.addListener(__alloyId42, "click", regist);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;