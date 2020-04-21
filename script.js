var scrl = "Fun fact about Minota: He's terrible at web design. ";
function scrollTitle() {
	scrl = scrl.substring(1, scrl.length) + scrl.substring(0, 1);
	document.title = scrl;
	setTimeout("scrollTitle()", 300);
}; scrollTitle();

function playAudio() { 
    var x = document.getElementById("audio"); 
  x.play(); 
} 