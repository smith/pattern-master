require.def("model/tag", ["require", "exports", "module", "model"],
function (require, exports, module) {

var when = $.when,
    tags = ["one", "two", "three"];

exports.Tag = function () {
    return {
        query: function () {
            var d = new $.Deferred();
            d.resolve(tags);
            return d.promise;
        }
    };
};

});
