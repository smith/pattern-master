// A templated form
require.def(["require", "exports", "module"], function (require, exports, module) {

    var data = {}, template = $("#pattern-form-template").html(),
        container = $("#tabs"),
        tabs = require("ui/tabs");

    function activate(div) {
        container.tabs("select", $("a[href='" + div + "']").parent("li").index());
    }

    function Form(obj) {
        obj = obj || { _id: "new", "new": true, name: "New Pattern" };
        var div = "#pattern-" + obj._id;
        if (!(this instanceof Form)) { return new Form(obj); }
    }

exports.create = function (obj) {
    obj = obj || { _id: "new", "new": true, name: "New Pattern" };
    var div = "#pattern-" + obj._id;

    // open existing tab if it's there
    if ($(div).length === 0) {
        // convert tags
        if (Array.isArray(obj.tags)) { obj.tags = obj.tags.join(" "); }

        container.append($.mustache(template, obj));

        container.find("button").button();
        container.find("input[type=date]").datepicker();
        tabs.add("#pattern-" + obj._id, obj.name);
    }
    if (obj._id !== "new") { activate(div); }
};

});
