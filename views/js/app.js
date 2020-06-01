var main = function () {
	"use strict";

		$.ajax({
                url: "/courses",
                type: "GET",
                contentType: "application/json",
                success: function (courses) {
                    $.each(courses, function (index, course) {
                        // добавляем полученные элементы в html

                        var $title = $("<div class=\"title\">")
							.append($("<h3>").text(course.name));
						$title.append($("<p>").text(course.description));
						
						var $meta = $("<div class=\"meta\">").append($("<h2>").text(course.date));
						$meta.append($("<span class=\"name\">").text(course.author));

						var $header = $("<header>").append($title);
						$header.append($meta);

						var $price = $("<li>");
						if(course.price == null)
							$price.text("Бесплатно");
						else 
							$price.text(course.price);

						var $toGet = $("<li>").append($("<a>").attr("href", "#").text("Приобрести"));
						$toGet.on("click", function () {
							var agreement = confirm("Вы действительно хотите приобрести данный курс?");
							if (agreement == true) {
								alert("Курс добавлен в вкладки 'Приобретенные курсы'.");
							}
							else {
								//
							}
						});	

						var $footer = $("<footer>").append($("<ul class=\"stats\">").append($price).append($toGet));

						var $post = $("<article class=\"post\">")
							.append($header);
						$post.append($footer);

						$("#main").append($post);
                        
                    });
                }
            });

			
		          
};

$(document).ready(function() {
		main();
});