require.def("main", ["plugins", "app"], function () {
    $(document).ready(require("app").start);
});
