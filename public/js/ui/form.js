// A templated form
require.def("ui/form", ["ui/tabs"], function (tabs) {
    var data = {}, template = $("#pattern-form-template").html(),
        container = $("#tabs");

    return {
        create: function (obj) {
            obj = obj || { id: "new", "new": true, name: "New Pattern" };
            container.append($.mustache(template, obj));
            tabs.add("#pattern-" + obj.id, obj.name);
        }
    };
});
