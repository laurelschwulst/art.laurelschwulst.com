$(document).ready(function(){

	// cover clicking

	$('.image img').click(function(){
		
		if($(this).hasClass('cover-corner')){
			$(this).removeClass('cover-corner');
			$('audio.sound').trigger('pause');
		}

		else {
			$(this).addClass('cover-corner');
			$('audio.sound').trigger('play');
		}

	});


	// 404 color page

	var colors = [
	    "#999A9E",
	    "#60534D",
	    "#41A36A",
	    "#EF5A42",
	    "#FFDC88",
	    "#3A4C8E",
	    "#A6D3CC",
	    "#006835",
	    "#E8020F",
	    "#F7DCA5",
	    "#FFFCFC",
	    "#0B0708",
	    "#BBBBBB",
	    "#FDDB00",
	    "#00A0EA",
	    "#69BD6F",
	    "#EB7A68",
	    "#5ADD33",
	    "#0368B5",
	    "#9E5728",
	    "#E40010",
	    "#FFE401",
	    "#FFFFFF",
	    "#E5E5E7",
	    "#EA5504",
	    "#F29103",
	    "#211612",
	    "#FF6C03",
	    "#FEFC41",
	    "#2F3545",
	    "#FEBEFB",
	    "#FB2B79",
	    "#02B262",
	    "#042E94",
	    "#E9B60A",
	    "#000000",
	    "#048B36",
	    "#D00F66",
	    "#1D2381",
	    "#DD0915",
	    "#EFE8E0",
	    "#E3E4DE",
	    "#91D3E3",
	    "#BC972A",
	    "#FA362D",
	    "#A8D292",
	    "#E53B2A",
	    "#BEC3C7",
	    "#EE82B6",
	    "#C2BD97"
	    ];
	    
	function generateGroundSky(){
	    var randomNumberOne = Math.floor(Math.random()*colors.length);
	    var randomNumberTwo = Math.floor(Math.random()*colors.length);
	    
	    while (randomNumberOne == randomNumberTwo) {
	       randomNumberTwo=Math.floor(Math.random()*colors.length);
	    }
	    
	    var skyColor = colors[randomNumberOne];
	    $('#sky').css("background", skyColor);
	    var groundColor = colors[randomNumberTwo];
	    $('#ground').css("background", groundColor);
	}
	    
	$('#sky, #ground').click(function(){
	    generateGroundSky();
	});


});