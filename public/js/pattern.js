// TODO: promises
var p = { then: function () {} };

require.def("pattern", [], function () {
    return {
        get: function (id) {
            console.log("get " + id);
            return p;
        },

        put: function (o) {
            console.log("put");
            console.log(o);
            return p;
        },

        "delete": function (id) {
            console.log("delete " + id);
            return p;
        },

        query: function (q) {
            console.log("query");
            console.log(q);
            return p;
        }
    };
});
