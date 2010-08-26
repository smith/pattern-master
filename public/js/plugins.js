// Module to load jQuery plugins
require.def("plugins",
            ["global-es5", "plugins/ui", "plugins/formparams", "plugins/couch",
             "plugins/deferred", "plugins/mustache"],
            function () {
    if (typeof JSON === "undefined") { require(["json2"]); }
});
// TODO
// tags, forms, grid, hash, cookie, closable tabs
