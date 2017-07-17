$(document).ready(function() {

	var targetNumber = random;
	var random = Math.floor(Math.random() * 120) + 19;
	$("#number-to-guess").html(random);

});


var targetNumber = $('#number-to-guess').text();
 
$("#number-to-guess").text(targetNumber);

var counter = 0;

var bulletOptions = [10,5,3,7];

for (var i = 0; i < bulletOptions.length; i++) {
	var imageBullet = $("<img>");
	imageBullet.addClass("bullet-image");
	imageBullet.attr("src", "https://thumbs.dreamstime.com/t/bullet-icon-cartoon-style-isolated-vector-illustration-88211476.jpg");
	imageBullet.attr("data-bulletvalue", bulletOptions[i]);
	$("#bullets").append(imageBullet);
}

$(".bullet-image").on("click", function() {
	var bulletValue = ($(this).attr("data-bulletvalue"));
	bulletValue = parseInt(bulletValue);

	counter += bulletValue;

	$("#loadout").html(counter);

	

	if (counter==targetNumber) {
		alert("You win!");
	}
		
}); 