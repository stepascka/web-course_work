var main = function () {
	"use strict";

	//получаем все курсы
		$.ajax({
                url: "/user/"+ location.pathname.split('/')[2] +"/messages",
                type: "GET",
                contentType: "application/json",
                success: function (messages) {
                    $.each(messages, function (index, message) {
                        // добавляем полученные элементы в html

                        var $title = $("<div class=\"title\">")
							.append($("<h3>").append($("<a>").attr("href", "#").text(message.name)));
						$title.append($("<p>").text(message.type));
						$title.append($("<p>").text(message.destination));
						$title.append($("<p>").text(message.number));
						
						var $meta = $("<div class=\"meta\">").append($("<h2>").text(message.date));
						$meta.append($("<span class=\"name\">").text("Мусин Ринатик"));

						var $header = $("<header>").append($title);
						$header.append($meta);

						var $delMessage = $("<li>").append($("<a>").attr("href", "#").text("Удалить"));

						var $changeMessage = $("<li>").append($("<a>").attr("href", "#").text("Изменить"));
						$changeMessage.on("click", function () {
							var agreement = confirm("Вы действительно хотите изменить данное письмо?");
							if (agreement == true) {
								alert(".");
							}
							else {
								//
							}
						});	

						var $footer = $("<footer>").append($("<ul class=\"stats\">").append($delMessage).append($changeMessage));

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
                		var $header = $("<header>").append($("<h2>").text(user.name)).append($("<p>").text("100"));

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


            var $menuLink = $("<a>").attr("href", "#").text("Добавить письмо");
            $("section ul").append($("<li>").append($("<h3>").append($menuLink)));

/*
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
		          */
};

$(document).ready(function() {
		main();
});

