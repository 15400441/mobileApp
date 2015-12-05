var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

exports.definition = {
    config: {
        columns: {
            username: "text",
            password: "text"
        },
        URL: "http://localhost:1337/user/getUsername",
        debug: 1,
        adapter: {
            type: "sqlrest",
            collection_name: "user",
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

model = Alloy.M("user", exports.definition, []);

collection = Alloy.C("user", exports.definition, model);

exports.Model = model;

exports.Collection = collection;