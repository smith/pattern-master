require.def("model/tag", [], function () {
    var when = $.when,
        tags = ["one", "two", "three"];

    function Tag() {
        if (!(this instanceof Tag)) { return new Tag(); }
        this.query = function () {
            var d = new $.Deferred();
            d.resolve(tags);
            return d.promise;
        };
    }

    return { Tag: Tag };
});
