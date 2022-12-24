// set the date we are counting down to
let countDownDate = new Date("Dec 23, 2023 05:07:00").getTime();

// update the count every 1 second
let x = setInterval(function() {

	// get todays date and time
	let now = new Date().getTime();

	// find the difference between now and the countDownDate
	let difference = countDownDate - now;

	// Time calculations for days, hours, minutes and seconds
    let days = Math.floor(difference / (1000 * 60 * 60 * 24));
    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);

	// Ouput the result in the container class matching each id
	document.querySelector('#days').innerHTML = days;
	document.querySelector('#hours').innerHTML = hours;
	document.querySelector('#minutes').innerHTML = minutes;
	document.querySelector('#seconds').innerHTML = seconds

	// If the seconds are less than or equal to 5, hide the days, hours, and minutes elements and make the seconds element bigger
	if (days == 0 && hours == 0 && minutes == 0 && seconds <= 10) {
		document.querySelector("#days-element").style.display = "none";
		document.querySelector("#hours-element").style.display = "none";
		document.querySelector("#minutes-element").style.display = "none";
		document.querySelector("#seconds-element").style.fontSize = "48px";
	  }
	

	// If the countdown is over, write some text
	if (difference < 0){
		clearInterval(x);
		document.querySelector('.container').innerHTML = 'Time has ended'
	}
}, 1000);