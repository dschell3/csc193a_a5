// Fancify my Text

// "Bigger!" button: set the text area's font size to 24pt.
// (Started as alert("Hello, world!") to test the onclick handler.)
function makeBigger() {
	document.getElementById("userText").style.fontSize = "24pt";
}

// Radio buttons: FancyShmancy = bold. BoringBetty = back to normal.
function changeStyle() {
	var text = document.getElementById("userText");

	if (document.getElementById("fancy").checked) {
		text.style.fontWeight = "bold";
	} else {
		text.style.fontWeight = "normal";
	}
}