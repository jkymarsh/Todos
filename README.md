## Yet Another Todos App

This "Todo" application (originally by [kilon](https://github.com/uzikilon/Todos)) demonstrates a handy combination of Backbone, Require.js, and Jasmine. Everything's structured in a logical manner and rather concise, if I do say so myself.

Some modifications from kilon's original include:

- Restructured directories: `test` is now in the top level of the root directory, the `js` directory has been restructured with a new `app` directory for app-specific scripts, and testing frameworks other than Jasmine have been removed from the project entirely
- Slick Require.js tricks: split the configuration and initialization of the app into two scripts: `config` and `main`. The main project also now includes a `build` script. Some handy `path` configurations have also been added
- HTML5BP added
- Third-party libs updated when necessary

Some things I still have forthcoming as far as updates:

- Add boilerplate Require.js module template for future Backbone components
- Code cleanup, refactoring, and restructuring
- Tweak Require.js build script
- Tweak JSHint config script