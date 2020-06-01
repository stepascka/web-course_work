var main = function () {
	"use strict";

		$.ajax({
                url: "/courses",
                type: "GET",
                contentType: "application/json",
                success: function (courses) {
                    $.each(courses, function (index, course) {
                        // добавляем полученные элементы в таблицу

                        var $title = $("<div class=\"title\">")
							.append($("<h3>").append($("<a>").attr("href", "#").text(course.name)));
						$title.append($("<p>").text(course.description));
						
						//var $meta = $("<time class=\"published\" datetime=\"2015-11-01\">").text("01.05.2013");
						//$meta.append($("<span class=\"name\">").text("Михайлов А.И."));

						var $content = $("<article class=\"post\">")
							.append($("<header>").append($title));
						//$content.append($meta);

						$("#main").append($content);
                        
                    });
                }
            });

			
		          
};

$(document).ready(function() {
		main();
});