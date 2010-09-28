// Module to load jQuery plugins
require.def(["require", "es5-shim", "plugins/ui", "plugins/formparams",
             "plugins/couch", "plugins/mustache"],
            function (require) {
    if (typeof JSON === "undefined") { require("json"); }
});
// TODO
// tags, forms, grid, hash, cookie, closable tabs
