require.def("app", ["model/pattern", "model/tag", "ui/tabs", "ui/form"], function () {
    var pattern = require("model/pattern").Pattern();
        tag = require("model/tag").Tag();
        tabs = require("ui/tabs"),
        form = require("ui/form"),
        searchResults = {};
console.log(tag.query());
    // Update search results
    function updateResults(results) {
        searchResults = results || { rows: [] };

        var div = $("#results"),
            tmpl = $("#search-results-template").html();
        div.html($.mustache(tmpl, searchResults)).show();
    }

    // Do a search
    function search(event) {
        var val = $(this).siblings("input").val().trim(), tags = [];
        if (val.length > 0) { tags = val.split(" "); }
        event.preventDefault();
        pattern.query(tags).then(updateResults);
    }

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
        var position = $(event.target).parent("li").index(),
            data = searchResults.rows[position].doc;

        form.create(data);
    }

    // Main setup
    function start() {
        var container = $("#tabs");

        // Event handlers
        $("#search form button").live("click", search);
        $(".pattern form button").live("click", create);
        $("#search #results a").live("click", addForm);

        // Widgets
        tabs.create(container);
        form.create();
        $("button").button();
        $("input[type=date]").datepicker();

        // Reveal container
        container.show();
    }

    return { start: start };
});
