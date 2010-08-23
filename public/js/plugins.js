// Module to load jQuery plugins
require.def("plugins", ["global-es5", "plugins/ui", "plugins/serializeobject"], function () {
    if (typeof JSON === "undefined") { require(["json2"]); }
});
// TODO
// tags, forms, couch, promises, grid, hash, cookie, closable tabs
