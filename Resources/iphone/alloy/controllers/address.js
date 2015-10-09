function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function __alloyId5(e) {
        if (e && e.fromAdapter) return;
        __alloyId5.opts || {};
        var models = filterFunction(__alloyId4);
        var len = models.length;
        for (var i = 0; len > i; i++) {
            var __alloyId3 = models[i];
            __alloyId2.push(require("ti.map").createAnnotation(transform(__alloyId3)));
        }
        $.__views.mapView.annotations = __alloyId2;
    }
    function filterFunction(collection) {
        return collection.where({
            VenueID: venue
        });
    }
    function transform(model) {
        var transform = model.toJSON();
        transform.rightButton = Titanium.UI.iPhone.SystemButton.DISCLOSURE;
        transform.title = transform.VenueID;
        return transform;
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "address";
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
    Alloy.Collections.instance("venues");
    $.__views.address = Ti.UI.createWindow({
        title: "Map",
        id: "address"
    });
    $.__views.address && $.addTopLevelView($.__views.address);
    var __alloyId2 = [];
    $.__views.mapView = (require("ti.map").createView || Ti.UI.createView)({
        region: {
            latitude: 22.337827,
            longitude: 114.181962,
            latitudeDelta: .006,
            longitudeDelta: .006
        },
        annotations: __alloyId2,
        id: "mapView",
        userLocation: "true"
    });
    $.__views.address.add($.__views.mapView);
    var __alloyId4 = Alloy.Collections["venues"] || venues;
    __alloyId4.on("fetch destroy change add remove reset", __alloyId5);
    exports.destroy = function() {
        __alloyId4.off("fetch destroy change add remove reset", __alloyId5);
    };
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var venue = args.venue || {};
    Alloy.Collections.venues.fetch();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;