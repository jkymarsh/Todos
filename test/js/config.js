require.config({
    // set the base url in order to properly locate scripts found in main project
    baseUrl: "../js",

    // initialize the application by requiring the main.js file as a dependency
    deps: ["../test/js/main"],

    paths: {
        // app folders
        libs:        "libs",
        collections: "app/collections",
        models:      "app/models",
        routers:     "app/routers",
        templates:   "app/templates",
        views:       "app/views",
        helpers:     "app/helpers",
        spec:        "../test/js/spec",

        // third-party libraries
        jquery: "libs/jquery-1.8.1.min",
        underscore: "libs/underscore-1.3.3.min",
        backbone: "libs/backbone-0.9.2.min",
        "backbone.localStorage": "libs/backbone.localStorage",
        jasmine: "../test/js/libs/jasmine",
        "jasmine-html": "../test/js/libs/jasmine-html"
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
        },
        jasmine: {
            exports: "jasmine"
        },
        "jasmine-html": {
            deps: ["jasmine"],
            exports: "jasmine"
        }
    }
});