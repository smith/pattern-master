require.def("model/pattern", ["require", "exports", "module", "model"],
function (require, exports, module) {

exports.Pattern = function () { return require("model").Model(); };

});
