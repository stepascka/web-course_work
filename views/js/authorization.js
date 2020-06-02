$('.message a').click(function(){
   $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
});

$(".form .register-form button").click(function(){
	//alert(location.origin);
   document.location.href = location.origin;
});

$(".form .login-form button").click(function(){
   document.location.href = location.origin;
});