window.store = "TestStore"; // override local storage store name - for testing

require(['underscore', 'jquery', 'jasmine-html'], function(_, $, jasmine){

    "use strict";

    var jasmineEnv = jasmine.getEnv();
    jasmineEnv.updateInterval = 1000;

    var htmlReporter = new jasmine.HtmlReporter();

    jasmineEnv.addReporter(htmlReporter);

    jasmineEnv.specFilter = function(spec) {
        return htmlReporter.specFilter(spec);
    };

    var specs = [];

    specs.push('spec/models/todo-spec');
    specs.push('spec/views/clearcompleted-spec');
    specs.push('spec/views/countview-spec');
    specs.push('spec/views/footerview-spec');
    specs.push('spec/views/markall-spec');
    specs.push('spec/views/newtask-spec');
    specs.push('spec/views/tasklist-spec');
    specs.push('spec/views/task/taskview-spec');
    specs.push('spec/views/task/viewtaskview-spec');
    specs.push('spec/views/task/edittaskview-spec');

    $(function(){
        require(specs, function(){
            jasmineEnv.execute();
        });
    });

});