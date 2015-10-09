var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

exports.definition = {
    config: {
        columns: {
            id: "INTEGER PRIMARY KEY",
            name: "text",
            venue: "text",
            startTime: "text",
            endTime: "text",
            organizer: "text",
            quota: "text",
            fullDes: "text",
            image: "text",
            shortDes: "text",
            date: "text"
        },
        URL: "http://thirdsail.herokuapp.com/event/json",
        debug: 1,
        adapter: {
            type: "sqlrest",
            collection_name: "webNews",
            idAttribute: "id",
            lastModifiedColumn: "modified"
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {});
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {});
        return Collection;
    }
};

model = Alloy.M("webNews", exports.definition, []);

collection = Alloy.C("webNews", exports.definition, model);

exports.Model = model;

exports.Collection = collection;