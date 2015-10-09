var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

exports.definition = {
    config: {
        columns: {
            VenueID: "text",
            VenueName: "text",
            Latitude: "text",
            Longtitude: "text",
            CampusID: "text"
        },
        adapter: {
            type: "sql",
            collection_name: "venues",
            db_file: "/venues.sqlite",
            idAttribute: "VenueID"
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {});
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {
            comparator: function(model) {
                return model.get("CampusID");
            }
        });
        return Collection;
    }
};

model = Alloy.M("venues", exports.definition, []);

collection = Alloy.C("venues", exports.definition, model);

exports.Model = model;

exports.Collection = collection;