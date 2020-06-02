var main = function () {
	"use strict";

	//получаем все курсы
		$.ajax({
                url: "/user/:login/courses",
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

		//получаем информацию о пользователе
			$.ajax({
                url: "/user/"+ location.pathname.split('/')[2] +"/inf",
                type: "GET",
                contentType: "application/json",
                success: function (users) {
                	$.each(users, function (index, user) {
                		var $header = $("<header>").append($("<h2>").text(user.name)).append($("<p>").text(user.balance));

                		$("#intro").append($header);
                	});
                }
            });


			//меню			
			var $menuLink = $("<a>").attr("href", "").text("Главная");
			$menuLink.on("click", function () {
				var login = location.pathname.split('/')[2];
				$.ajax({
			                url: "/user/" + login,
			                type: "GET",
			                contentType: "application/json"
			        }).done(function (response) {
			 			document.location.href = location.origin + "/user/" + login + "/";
			 		}).fail(function (err) {
						console.log("Error...");
				});

				return false;
			});

            $("section ul").append($("<li>").append($("<h3>").append($menuLink)));


            var $menuLink = $("<a>").attr("href", "#").text("Приобретенные курсы");
            $("section ul").append($("<li>").append($("<h3>").append($menuLink)));


            var $menuLink = $("<a>").attr("href", "#").text("Пополнить баланс");
            $menuLink.on("click", function () {
            	var login = location.pathname.split('/')[2];

            	var addBalance = prompt('На сколько вы хотите увеличить свой баланс (0-500): ', "50");
            	if (addBalance > 0 && addBalance < 500) {
            		$.ajax({
 							url: "/user/" + login + "/balance",
 							type: "PUT",
 							data: { "balance": addBalance }
 					}).done(function (response) {
			 						$.ajax({
						                url: "/user/" + login,
						                type: "GET",
						                contentType: "application/json"
							        }).done(function (response) {
							 			document.location.href = location.origin + "/user/" + login + "/";
							 		}).fail(function (err) {
										console.log("Error...");
									});
 					}).fail(function (err) {
						console.log("Error...");
					});
            	}
            	else {
            		alert("Ваше значение не соответствует указанным условиям.");
            	}
				return false;
			});

            $("section ul").append($("<li>").append($("<h3>").append($menuLink)));
		          
};

$(document).ready(function() {
		main();
});

