require.def("store/couchdb", ["require", "exports", "module"],
function (require, exports, module) {

var Promise = $.Deferred;

exports.CouchDBStore = function (options) {
    options = options || {};
    console.log(options.database);
    var db = this.database = $.couch.db(options.database);

    return {
        get: function (id) {
            var promise = new Promise();
            db.openDoc(String(id), {
                success: function (data) { promise.resolve(data); }
            });
            return promise;
        },

        put: function (o) {
            var promise = new Promise();
            db.saveDoc(o, {
                success: function (data) {
                    o._id = data.id;
                    o._rev = data.rev;
                    promise.resolve(o);
                }
            });
            return promise;
        },

        "delete": function (doc) {
            var promise = new Promise();
            db.removeDoc(doc, {
                success: function (data) { promise.resolve(data); }
            });
            return promise;
        },

        query: function (q) {
            q = q || [];
            var promise = new Promise();
            if (q.length === 0) {
                db.allDocs({
                    include_docs: true,
                    success: function (data) { promise.resolve(data); }
                });
            } else { // TODO
                promise.resolve({ rows: [] });
            }
            return promise;
        }
    };
};

});
