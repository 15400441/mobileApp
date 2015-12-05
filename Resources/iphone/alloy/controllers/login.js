function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function login() {
        var username = $.u.getValue();
        var password = $.p.getValue();
        var xhr = Ti.Network.createHTTPClient();
        xhr.onload = function() {
            alert(this.responseText);
            var xhr = Ti.Network.createHTTPClient();
            xhr.onload = function() {
                Alloy.Globals.u.title = "User:    " + this.responseText;
            };
            xhr.open("POST", "http://localhost:1337/user/getUsername");
            xhr.send({});
        };
        xhr.open("POST", "http://localhost:1337/user/loginMobile");
        xhr.send({
            username: username,
            password: password
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "login";
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
    $.__views.win = Ti.UI.createWindow({
        id: "win",
        backgroundColor: "white"
    });
    $.__views.win && $.addTopLevelView($.__views.win);
    var __alloyId105 = [];
    $.__views.__alloyId106 = Ti.UI.createTableViewRow({
        title: "username",
        top: "20dp",
        id: "__alloyId106"
    });
    __alloyId105.push($.__views.__alloyId106);
    $.__views.u = Ti.UI.createTextField({
        id: "u",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        name: "username",
        color: "#336699",
        top: "10",
        left: "100",
        width: "200",
        height: "40"
    });
    $.__views.__alloyId106.add($.__views.u);
    $.__views.__alloyId107 = Ti.UI.createTableViewRow({
        title: "password",
        top: "20dp",
        id: "__alloyId107"
    });
    __alloyId105.push($.__views.__alloyId107);
    $.__views.p = Ti.UI.createTextField({
        id: "p",
        passwordMask: "true",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        name: "password",
        color: "#336699",
        top: "10",
        left: "100",
        width: "200",
        height: "40"
    });
    $.__views.__alloyId107.add($.__views.p);
    $.__views.__alloyId108 = Ti.UI.createTableViewRow({
        top: "20dp",
        id: "__alloyId108"
    });
    __alloyId105.push($.__views.__alloyId108);
    $.__views.button = Ti.UI.createButton({
        id: "button",
        title: "login",
        top: "10",
        width: "100",
        height: "40"
    });
    $.__views.__alloyId108.add($.__views.button);
    login ? $.addListener($.__views.button, "click", login) : __defers["$.__views.button!click!login"] = true;
    $.__views.__alloyId104 = Ti.UI.createTableView({
        data: __alloyId105,
        id: "__alloyId104"
    });
    $.__views.win.add($.__views.__alloyId104);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    __defers["$.__views.button!click!login"] && $.addListener($.__views.button, "click", login);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;