define([    "jquery",
            "underscore",
            "backbone",
            "models/todo",
            "views/master-view"],
function(   $,
            _,
            Backbone,
            Todo,
            MasterView) {

    "use strict";

    var Router = Backbone.Router.extend({
        initialize: function() {
            console.log("router initialized");

            Backbone.history.start();
        },
        routes: {
            "": "root"
        },
        root: function() {
            var tasks = new Todo.Collection();
            var view = new MasterView({collection: tasks});

            console.log("root route");

            tasks.fetch({
                success: function(tasks){
                    $("#container").html(view.render().el).show();
                },
                error: function(model, error) {
                    // TODO: handle errors nicer
                    alert(error);
                }
            });
        }
    });

    return Router;
});