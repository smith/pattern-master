require.def("ui/search", ["require", "exports", "module"],
function (require, exports, module) {

var Search = exports.Search = function (options) {
    if (!(this instanceof Search)) { return new Search(options); }

    options = $.extend({
        model: {},
        container: "#search",
        results: "#results",
        template: "#search-results-template"
    }, options || {});

    var results = this.results = {},
        container = options.container;

    var updateResults = this.updateResults = function (newResults) {
        var div = $(options.results),
            tmpl = $(options.template).html();
        results = newResults;
        div.html($.mustache(tmpl, results)).show();
    };

    this.search = function (event) {
        var val = $(this).siblings("input").val().trim(),
            model = options.model,
            tags = [];

        if (val.length > 0) { tags = val.split(" "); }
        event.preventDefault();
        model.query(tags).then(updateResults);
    };

    this.getRows = function () { return results.rows; };

    $(container).find("form button").live("click", this.search);
    $(container + " " + options.results + " a").live("click", function () {
        $(this).trigger("search:result:clicked");
    });
};

});
