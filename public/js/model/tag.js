require.def(["require", "exports", "module", "model", "promise"],
            function (require, exports, module) {

var when = require("promise").when,
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
