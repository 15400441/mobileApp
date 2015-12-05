exports.definition = {
	config : {
		"columns" : {
			"id" : "INTEGER PRIMARY KEY",
			"name" : "text",
			"venue" : "text",
			"date":"text",			
			"organizer":"text",
			"quota":"text",
			"fullDes" : "text",
			"image" : "text",
			"shortDes":"text",
			"date":"text"
			
		},
		"URL" : "http://localhost:1337/user/showUserActivities",
		"debug" : 1, //debug mode enabled
		"adapter" : {
			"type" : "sqlrest",
			"collection_name" : "activities",
			"idAttribute" : "id",
			"lastModifiedColumn" : "modified"
		},
		//"parentNode" : "posts"
	},
	extendModel : function(Model) {
		_.extend(Model.prototype, {
			// extended functions and properties go here
		});

		return Model;
	},
	extendCollection : function(Collection) {
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
			
			
		});

		return Collection;
	}
};
