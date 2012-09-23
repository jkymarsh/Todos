define([    "jquery",
            "underscore",
            "backbone",
            "views/clearcompleted",
            "views/count-view"],
function(   $,
            _,
            Backbone,
            ClearCompleted,
            CountView) {

    "use strict";

    var View = Backbone.View.extend({
        tagName: "footer",
        initialize: function() {
            this.children = {
                countView: new CountView({collection: this.collection}),
                clearCompleted: new ClearCompleted({collection: this.collection})
            };

            this.$el.append(this.children.countView.render().el);
            this.$el.append(this.children.clearCompleted.render().el);

            this.collection.on("add remove reset", this.render, this);
        },
        render: function() {
            this.$el.toggle( this.collection.size() > 0 );

            return this;
        }
    });

    return View;
});