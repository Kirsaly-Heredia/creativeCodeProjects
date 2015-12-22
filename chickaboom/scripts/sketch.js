var voice = new p5.speech();

function keyPressed() {
	voice.setVoice("Google US English");
	var text = selectAll('p', [index.html]);
	if (keyCode === 'ENTER') {
    for (var i = 0; i < text.length; i++) {
    voice.speak(text[1]);
  	}
  }
}
