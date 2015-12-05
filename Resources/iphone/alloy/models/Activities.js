var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

exports.definition = {
    config: {
        columns: {
            id: "INTEGER PRIMARY KEY",
            name: "text",
            venue: "text",
            date: "text",
            organizer: "text",
            quota: "text",
            fullDes: "text",
            image: "text",
            shortDes: "text",
            date: "text"
        },
        URL: "http://localhost:1337/user/showUserActivities",
        debug: 1,
        adapter: {
            type: "sqlrest",
            collection_name: "activities",
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

model = Alloy.M("activities", exports.definition, []);

collection = Alloy.C("activities", exports.definition, model);

exports.Model = model;

exports.Collection = collection;