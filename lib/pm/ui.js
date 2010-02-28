// UI library for pattern master

// Plugin to convert a set of elements to a JSON object to submit
jQuery.fn.toJSON = function () {
    var o = {};
    $.each($(this).serializeArray(), function (index, i) {
        if (typeof i === "object" && "name" in i && "value" in i &&
            typeof i.value === "string" && i.value.length > 0) {
            o[i.name] = i.value;
        }
    });
    return JSON.stringify(o);
};

// Set Ajax defaults
jQuery.ajaxOptions({
    contentType: "application/json",
    dataType: "json",
});

jQuery("document").ready(function ($) {
    $("form").live("submit", function (event) {
        var form = $(this),
            method = form.attr("method"),
            data = method === "get" ? form.serialize() : form.toJSON();

        event.preventDefault();
        $.ajax({
            complete: function (xhr, status) {
                if (method == "get") {
                    var r = eval(xhr.responseText);
                    $("#results ul").html(JSON.stringify(r));
                } else {
                    form.prepend("created!");
                }
            },
            data: data,
            type: method,
            url: form.attr("action")
        });
    });
});
