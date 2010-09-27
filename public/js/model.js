require.def("model", ["require", "exports", "module", "store/couchdb"],
function (require, exports, module) {

var store = require("store/couchdb").CouchDBStore({
    database: "pattern-master"
});

exports.Model = function (schema) {
    return $.extend(store, schema || {});
};

});
