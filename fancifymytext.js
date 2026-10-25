// Fancify my Text

// "Bigger!" button: set the text area's font size to 24pt.
// (Started as alert("Hello, world!") to test the onclick handler.)
function makeBigger() {
	document.getElementById("userText").style.fontSize = "24pt";
}

// Radio buttons: FancyShmancy = bold, blue, underlined.
// BoringBetty = back to normal.
function changeStyle() {
	var text = document.getElementById("userText");

	if (document.getElementById("fancy").checked) {
		text.style.fontWeight = "bold";
		text.style.color = "blue";
		text.style.textDecoration = "underline";
	} else {
		text.style.fontWeight = "normal";
		text.style.color = "black";
		text.style.textDecoration = "none";
	}
}

// "Moo" button: uppercase the text and add "-Moo" to the
// last word of each sentence (a sentence ends with ".").
function moo() {
	var text = document.getElementById("userText");
	var str = text.value.toUpperCase();

	// "HI THERE. HOW ARE YOU." -> ["HI THERE", " HOW ARE YOU", ""]
	var parts = str.split(".");

	// Skip the last piece: it comes after the final period,
	// so it isn't a finished sentence.
	for (var i = 0; i < parts.length - 1; i++) {
		if (parts[i].trim() != "") {
			parts[i] = parts[i] + "-Moo";
		}
	}

	// Put the periods back.
	text.value = parts.join(".");
}