$(document).ready(function(){
	$('#slider-full').slick({
		autoplay: false,
		arrows:true,
		dots:true,
        pauseOnDotsHover:true,
		slidesToShow:1,
		speed:350,
		responsive:[
			{
				breakpoint: 769,
				settings: {
					arrows: false,
				}
			},
			{
				breakpoint: 640,
				settings: {
                    arrows:false,
				}
			}
		]
	});
});

