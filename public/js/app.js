require.def("app", ["pattern", "ui/tabs"], function (pattern, tabs) {
    // Update search results
    function updateResults(results) {
        console.log("results!");
    }

    // Do a search
    function search(event) {
        var tags = $(this).siblings("input").val().split(" ");
        event.preventDefault();
        // TODO: put this in updateResults (as a promise fulfilled)
        $("#results").show();
        pattern.query({ tags: tags }).then(updateResults);

    }

    // Add a pattern pane
    function add(event) {
        event.preventDefault();
        tabs.add("#pattern", "New Pattern");
        console.log("add!");
    }

    // Save new pattern
    function create(event) {
        event.preventDefault();
        pattern.put($(this).parent("form").serializeObject());
    }

    // Install handlers for events
    function run() {
        $("#search form button").live("click", search);
        $("#add").live("click", add);
        $("#add").live("click", add);
        $(".pattern form button").live("click", create);

        tabs.create("#tabs");
        $("button").button();
    }

    return { run: run };
});
