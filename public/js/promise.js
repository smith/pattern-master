// Promise extensions
require.def(["require", "exports", "module", "plugins/deferred"],
            function (require, exports, module) {

var Promise = exports.Promise = $.Deferred;
exports.when = $.when;
exports.defer = function (options) { return new Promise(options); }

});
