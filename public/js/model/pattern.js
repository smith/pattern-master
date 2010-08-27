require.def("model/pattern", [], function () {
    var db = $.couch.db("pattern-master"),
        Promise = $.Deferred;

    function Pattern() {
        this.get = function (id) {
            var promise = new Promise();
            db.openDoc(String(id), {
                success: function (data) { promise.resolve(data); }
            });
            return promise;
        };

        this.put = function (o) {
            var promise = new Promise();
            db.saveDoc(o, {
                success: function (data) {
                    o._id = data.id;
                    o._rev = data.rev;
                    promise.resolve(o);
                }
            });
            return promise;
        };

        this["delete"] =  function (doc) {
            var promise = new Promise();
            db.removeDoc(doc, {
                success: function (data) { promise.resolve(data); }
            });
            return promise;
        };

        this.query = function (q) {
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
        };

        if (!(this instanceof Pattern)) { return new Pattern(); }
    }

    return { Pattern: Pattern };
});
