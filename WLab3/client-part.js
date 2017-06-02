$(document).ready(function () {

	$("#savebutton").click(save);
    loadAll();
    $("#saved_files").on("click", "p > span.delete", function () {
        remove($(this).attr("id"));
        $(this).parent().parent().remove();
    });
    $("#saved_files").on("click", "p > span.title", function () {
        $("form > p > #textbox")[0].replaceWith($.parseHTML($(this).next().html())[0]);
    });
});

function save (e) {
	e.preventDefault();

	var textarea = $.parseHTML(textbox.outerHTML)[0];
	textarea.innerText = $("textarea").val();

	$.ajax({
		url: "/texts",
		data: {
            data: textarea.outerHTML
		},
		type: "post",
		success: function (response) {
			console.log(response);
		}
	});
}

function remove(id) {
    $.ajax({
        url: "/texts/" + id,
        type: "delete",
        success: function (response) {
            console.log(response);
        }
    });
}

function loadAll() {
    $.ajax({
        url: "/texts",
        type: "get",
        success: function (response) {
            for (var i = 0; i < response["data"].length; i++) {
                var id = response["data"][i]["id"],
                    title = "Text " + id,
                    text = response["data"][i]["value"],
                    res = "<p class=" + id + ">" +
                                "<span style='cursor: pointer;' class='title'>" + title + "</span>" +
                                "<span style='display: none' class='text'>" + text + "</span>" +
                                "<span style='cursor: pointer;' class='delete' id=" + id + ">X</span>" +
                            "</p>";
                $("#saved_files").append("<li>" + res + "</li>");
            }
        }
    });
}