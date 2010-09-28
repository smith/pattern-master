require.def(["require", "exports", "module"], function (require, exports, module) {

var t, // tab container
    addIndex = 0;

exports.create = function (selector) {
    t = $(selector);
    t.tabs();
};

exports.add = function (selector, title) {
    t.tabs("add", selector, title);
};

});
