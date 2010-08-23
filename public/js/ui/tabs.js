require.def("tabs", function () {
    var t; // tab container

    return {
        create: function (selector) {
            t = $(selector);
            t.tabs();
        },

        add: function (selector, title) {
            t.tabs("add", selector, title);
        }
    };
});
