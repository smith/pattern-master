require.def("app", ["model/pattern", "ui/tabs", "ui/form"], function () {
    var pattern = require("model/pattern").Pattern();
        tabs = require("ui/tabs"),
        form = require("ui/form");

    // Update search results
    function updateResults(results) {
        results = results || { rows: [] };
        var div = $("#results"),
            tmpl = $("#search-results-template").html();
        div.html($.mustache(tmpl, results)).show();
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
        pattern.put(o).then(function (p) { console.log(p); });
    }

    // Main setup
    function run() {
        var container = $("#tabs");

        // Event handlers
        $("#search form button").live("click", search);
        $(".pattern form button").live("click", create);

        // Widgets
        tabs.create(container);
        form.create();
        $("button").button();
        $("input[type=date]").datepicker();

        // Reveal container
        container.show();
    }

    return { run: run };
});
