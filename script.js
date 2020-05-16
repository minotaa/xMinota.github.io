var scrl = "Fun fact about Minota: He's terrible at web design. ";
function scrollTitle() {
	scrl = scrl.substring(1, scrl.length) + scrl.substring(0, 1);
	document.title = scrl;
	setTimeout("scrollTitle()", 300);
}; scrollTitle();

function getRandomRGBValue() {
    return Math.min(Math.floor(Math.random() * 255 + 1), 255);
}

function start() {
    changeThemeColor()
    playAudio()
}

function getRandomColor() {
    var r = getRandomRGBValue(),
        g = getRandomRGBValue(),
        b = getRandomRGBValue();
    return "#" + (((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1));
}

function changeThemeColor() {
    var metaThemeColor = document.querySelector("meta[name=theme-color]");
    metaThemeColor.setAttribute("content", getRandomColor());
    setTimeout(function() {
        changeThemeColor();
    }, 1000);
}

changeThemeColor()

function playAudio() { 
    var x = document.getElementById("audio"); 
  x.play(); 
} 
