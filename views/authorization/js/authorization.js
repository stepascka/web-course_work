$('.message a').click(function(){
   $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
});

$(".form .register-form button").click(function(){

	alert(document.getElementById("reg-login").value);
	alert(document.getElementById("reg-user").value);
   	document.location.href = location.origin + "./main";
});

$(".form .login-form button").click(function(){
	var login = document.getElementById("log-login").value;
	var userIsFound = false;
	
	$.ajax({
            url: "/users",
            type: "GET",
            contentType: "application/json",
            success: function (users) {
                $.each(users, function (index, user) {                	
                   	if (user.login == login) {                   		
                    	userIsFound = true;                    	
                    }
                });

                if (userIsFound) {
                	$.ajax({
			                url: "/user/" + login,
			                type: "GET",
			                contentType: "application/json"
			        }).done(function (response) {
			        	alert(location.origin + "/user/" + login + "/");
			 			document.location.href = location.origin + "/user/" + login + "/";
			 		}).fail(function (err) {
						console.log("Error...");
					});
				}
				else {
					alert("Данного пользователя не существует.");
				}	
            }
    });
});