require.def("main", ["plugins", "app"], function (plugins, app) {
    $(document).ready(app.run);
});
