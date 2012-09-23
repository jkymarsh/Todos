require.config({
    // initialize the application by requiring the main.js file as a dependency
    deps: ["main"],

    // paths are shortcuts to make require and define calls shorter
    paths: {
        // app folders
        libs:        "libs",
        collections: "app/collections",
        models:      "app/models",
        routers:     "app/routers",
        templates:   "app/templates",
        views:       "app/views",
        helpers:     "app/helpers",

        // third-party libraries
        jquery:     "libs/jquery-1.8.1.min",
        backbone:   "libs/backbone-0.9.2.min",
        underscore: "libs/underscore-1.3.3.min",
        "backbone.localStorage": "libs/backbone.localStorage",
        text:       "libs/text-2.0.3"
    },

    // cache-busting for development environment
    urlArgs: "bust=" +  (new Date()).getTime(),

    // legacy libraries that depend upon a particular loading order
    shim: {
        jquery: {
            deps: ["require"],
            exports: "$"
        },
        underscore: {
            deps: ["jquery"],
            exports: "_"
        },
        backbone: {
            deps: ["underscore", "jquery"],
            exports: "Backbone"
        },
        "backbone.localStorage": {
            deps: ["backbone"],
            exports: "Backbone"
        }
    }
});