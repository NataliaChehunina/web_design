var colorArray = ["#FF0000", "#000000", "#32CD32", "#000080"]; 
var fontArray = ["bold","normal","italic","underline"]; 
var flagShift = false,flagBold = false,flagItalic = false,flagUnderline = false;
var textbox =  document.getElementById("textbox");

function changeFontColor(elem){
    textbox.style.color=colorArray[elem];
	TextRange.htmlText
}

function changeShift(){
	flagShift = !flagShift;
	if (flagShift == true){textbox.style.textTransform = "uppercase";}
	else{textbox.style.textTransform = "lowercase";}
}

function boldFont(){
	flagBold = !flagBold;
		if (flagBold == true){textbox.style.fontWeight = fontArray[0];}
	else{textbox.style.fontWeight = fontArray[1];}
}

function normalFont()
{
	flagBold = false;
	flagShift = false;
	flagItalic = false;
	flagUnderline = false;
	flagShift = false;
	textbox.style.textDecoration="none";
	textbox.style.fontWeight = fontArray[1];
	textbox.style.fontStyle=fontArray[1];
	textbox.style.textTransform = "none";
}

function italicFont(){
	flagItalic = !flagItalic;
		if (flagItalic == true){textbox.style.fontStyle=fontArray[2];}
	else{textbox.style.fontStyle=fontArray[1];}
}

function underlineFont(){
	flagUnderline = !flagUnderline;
		if (flagUnderline == true){textbox.style.textDecoration=fontArray[3];}
	else{textbox.style.textDecoration="none";}
}