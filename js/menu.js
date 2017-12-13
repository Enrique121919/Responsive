$(document).ready(main);

function main(){
	var estado = true;
$('.menu').click(function(){
		//$('nav').toggle();
		//$('nav').toggle("slow", function(){
		//});
		//$('nav').animate({
			//height:'toggle'
		//});

		if (estado == true) {
			$('nav').fadeIn("slow",function(){});
			estado = false;
		}else{
			$('nav').fadeOut("slow",function(){});
			estado = true;
		}

	});

};