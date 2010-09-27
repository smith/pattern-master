require.def("app",
["require", "exports", "module", "model/pattern", "model/tag", "ui/tabs", "ui/form", "ui/search"],
function (require, exports, module) {

var pattern = require("model/pattern").Pattern();
    tag = require("model/tag").Tag();
    tabs = require("ui/tabs"),
    form = require("ui/form"),
    search = require("ui/search").Search({ model: pattern });

// Save new pattern
function create(event) {
    var o = {}, tags;
    event.preventDefault();
    o = $(this).parent("form").formParams();
    tags = o.tags;
    if (typeof tags === "string") { o.tags = tags.trim().split(" "); }
    pattern.put(o).then(function (p) { form.create(p); });
}

// Add a tab and form
function addForm(event) {
    console.log(search)
    var position = $(event.target).parent("li").index(),
        data = search.getRows()[position].doc;
    form.create(data);
}

// Main setup
exports.start = function () {
    var container = $("#tabs");


    // Event handlers
    $(".pattern form button").live("click", create);
    $(container).live("search:result:clicked", addForm);

    // Widgets
    tabs.create(container);
    form.create();
    $("button").button();
    $("input[type=date]").datepicker();

    // Reveal container
    container.show();
};

});
