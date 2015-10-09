exports.definition = {
	config: {
		columns: {
		    "VenueID": "text",
		    "VenueName": "text",
		    "Latitude": "text",
		    "Longtitude": "text",
		    "CampusID":"text"
		},
          
		adapter: {
			type: "sql",
			collection_name: "venues",
			"db_file" : "/venues.sqlite",
			"idAttribute" : "VenueID"
		}
	},
	extendModel: function(Model) {
		_.extend(Model.prototype, {
			// extended functions and properties go here
		});

		return Model;
	},
	extendCollection: function(Collection) {
		_.extend(Collection.prototype, {
			// extended functions and properties go here

			// For Backbone v1.1.2, uncomment the following to override the
			// fetch method to account for a breaking change in Backbone.
			/*
			fetch: function(options) {
				options = options ? _.clone(options) : {};
				options.reset = true;
				return Backbone.Collection.prototype.fetch.call(this, options);
			}
			*/
			comparator:function(model){
				return model.get("CampusID");
			}
		});

		return  Collection;
	}
};
