	var number = Math.floor((Math.random() * 102) + 19);
	
	var green = Math.floor((Math.random() * 12) + 1);
	var red = Math.floor((Math.random() * 12) + 1);
	var blue = Math.floor((Math.random() * 12) + 1);
	var yellow = Math.floor((Math.random() * 12) + 1);


	var wins = 0;
	var losses = 0;
	var guessTotal = 0;


	$(".numberTarget").html(number);

	$(".greencrystal").click(function() {
		update(green);
	});
	$(".redcrystal").click(function() {
		update(red);
	});
	$(".bluecrystal").click(function() {
		update(blue);
	});
	$(".yellowcrystal").click(function() {
		update(yellow);
	});
	

	function reset() {
		number = Math.floor((Math.random() * 102) + 19);
		$(".numberTarget").html(number);

		green = Math.floor((Math.random() * 12) + 1);
		red = Math.floor((Math.random() * 12) + 1);
		blue = Math.floor((Math.random() * 12) + 1);
		yellow = Math.floor((Math.random() * 12) + 1);

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
