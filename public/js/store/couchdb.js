require.def(["require", "exports", "module", "promise"],
            function (require, exports, module) {

var defer = require("promise").defer;

exports.CouchDBStore = function (options) {
    options = options || {};

    var db = this.database = $.couch.db(options.database);

    return {
        get: function (id) {
            var d = defer();
            db.openDoc(String(id), {
                success: function (data) { d.resolve(data); }
            });
            return d.promise;
        },

        put: function (o) {
            var d = defer();
            db.saveDoc(o, {
                success: function (data) {
                    o._id = data.id;
                    o._rev = data.rev;
                    d.resolve(o);
                }
            });
            return d.promise;
        },

        "delete": function (doc) {
            var d = defer();
            db.removeDoc(doc, {
                success: function (data) { d.resolve(data); }
            });
            return d.promise;
        },

        query: function (q) {
            q = q || [];
            var d = defer();
            if (q.length === 0) {
                db.allDocs({
                    include_docs: true,
                    success: function (data) { d.resolve(data); }
                });
            } else { // TODO
                d.resolve({ rows: [] });
            }
            return d.promise;
        }
    };
};

});
