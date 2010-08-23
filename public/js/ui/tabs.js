require.def("ui/tabs", function () {
    var t, // tab container
        addIndex = 0;

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
