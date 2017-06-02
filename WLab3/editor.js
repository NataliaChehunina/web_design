var flagShift = false, flagBold = false, flagItalic = false, flagUnderline = false;
var colorArray = ["#FF0000", "#000000", "#32CD32", "#000080"]; 
var fontArray = ["bold","normal","italic","underline"]; 
var textbox =  document.getElementById("textbox");

function changeFontColor(elem) { 
    // textbox.style.color = colorArray[elem];
    $("form > p > textarea").css({
        'color': colorArray[elem]
    });
	// TextRange.htmlText;
}

function changeShift() {
	flagShift = !flagShift;
	if (flagShift) {
		// textbox.style.textTransform = "uppercase";
        $("form > p > textarea").css({
            'text-transform': 'uppercase'
        });
	}
	else {
		// textbox.style.textTransform = "lowercase";
        $("form > p > textarea").css({
            'text-transform': 'lowercase'
        });
	}
}

function boldFont() {
	flagBold = !flagBold;
	if (flagBold) {
        $("form > p > textarea").css({
            'font-weight': fontArray[0]
        });
		// textbox.style.fontWeight = fontArray[0];
	}
	else {
		// textbox.style.fontWeight = fontArray[1];
        $("form > p > textarea").css({
            'font-weight': fontArray[0]
        });
	}
}

function normalFont() {
	flagBold = false;
	flagItalic = false;
	flagUnderline = false;
	flagShift = false;

	$("form > p > textarea").css({
        'text-decoration': 'none',
        'font-weight': fontArray[1],
        'font-style': fontArray[1],
        'text-transform': 'none'
    });

	// textbox.style.textDecoration="none";
	// textbox.style.fontWeight = fontArray[1];
	// textbox.style.fontStyle = fontArray[1];
	// textbox.style.textTransform = "none";
}

function italicFont() {
	flagItalic = !flagItalic;
	if (flagItalic) {
		// textbox.style.fontStyle = fontArray[2];
        $("form > p > textarea").css({
            'font-style': fontArray[2]
        });
	}
	else {
		// textbox.style.fontStyle = fontArray[1];
        $("form > p > textarea").css({
            'font-style': fontArray[1]
        });
	}
}

function underlineFont() {
	flagUnderline = !flagUnderline;
	if (flagUnderline) {
		// textbox.style.textDecoration = fontArray[3];
        $("form > p > textarea").css({
            'text-decoration': fontArray[3]
        });
	}
	else {
		// textbox.style.textDecoration = "none";
        $("form > p > textarea").css({
            'text-decoration': 'none'
        });
	}
}