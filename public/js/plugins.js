// Module to load jQuery plugins
require.def("plugins",
            ["es5-shim", "plugins/ui", "plugins/formparams", "plugins/couch",
             "plugins/deferred", "plugins/mustache"],
            function () {
    if (typeof JSON === "undefined") { require(["json"]); }
});
// TODO
// tags, forms, grid, hash, cookie, closable tabs
