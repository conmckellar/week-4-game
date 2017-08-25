	var number = Math.floor((Math.random() * 102) + 19);
	
	var blue = Math.floor((Math.random() * 12) + 1);
	var red = Math.floor((Math.random() * 12) + 1);
	var yellow = Math.floor((Math.random() * 12) + 1);
	var green = Math.floor((Math.random() * 12) + 1);


	var guessTotal = 0;
	var wins = 0;
	var losses = 0;


	$(".numberTarget").html(number);

	$(".bluecrystal").click(function() {
		update(blue);
	});
	$(".redcrystal").click(function() {
		update(red);
	});
	$(".yellowcrystal").click(function() {
		update(yellow);
	});
	$(".greencrystal").click(function() {
		update(green);
	});
	

	function reset() {
		number = Math.floor((Math.random() * 102) + 19);
		$(".numberTarget").html(number);

		blue = Math.floor((Math.random() * 12) + 1);
		red = Math.floor((Math.random() * 12) + 1);
		yellow = Math.floor((Math.random() * 12) + 1);
		green = Math.floor((Math.random() * 12) + 1);

		guessTotal = 0;

		$(".guessdisplay").html(guessTotal);
	};
 
	function update(guess) {
		guessTotal += guess;
		$(".guessdisplay").empty();
		$(".guessdisplay").append(guessTotal);

		if (guessTotal > number) {
			losses++;
			$("#lossesdisplay").html(losses);
			reset();

		} else if (guessTotal == number) {
			wins++;
			$("#winsdisplay").html(wins);
			reset();

		};
	};
