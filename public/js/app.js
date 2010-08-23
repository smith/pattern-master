require.def("app", ["pattern"], function (pattern) {
    // Update search results
    function updateResults(results) {
        console.log("results!");
    }

    // Do a search
    function search(event) {
        var tags = $(this).siblings("input").val().split(" ");
        event.preventDefault();
        pattern.query({ tags: tags }).then(updateResults);

    }

    // Add a pattern pane
    function add(event) {
        event.preventDefault();
        console.log("add!");
    }

    // Install handlers for events
    function run() {
        $("#search form button").live("click", search);
        $("#add").live("click", add);

        $("#tabs").tabs();
        $("button").button();
    }

    return { run: run };
});
