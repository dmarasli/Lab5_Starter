// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  // Get the 'speak' button
var button = document.querySelector('button');

// Get the text input element.
var speechMsgInput = document.getElementById('text-to-speak');

// Get the voice select element.
var voiceSelect = document.getElementById('voice-select');

//Get the face img
var img = document.querySelector('img');


// Fetch the list of voices and populate the voice options.
function loadVoices() {
  // Fetch the available voices.
	var voices = speechSynthesis.getVoices();
  
  // Loop through each of the voices.
	voices.forEach(function(voice, i) {

    // Create a new option element.
		var option = document.createElement('option');
    
    // Set the options value and text.
		option.value = voice.name;
		option.innerHTML = voice.name;
		  
    // Add the option to the voice selector.
		voiceSelect.appendChild(option);
	});
}

// Execute loadVoices.
loadVoices();

// Chrome loads voices asynchronously.
window.speechSynthesis.onvoiceschanged = function(e) {
  loadVoices();
};

var msg = new SpeechSynthesisUtterance();
/// Create a new utterance for the specified text and add it to
// the queue.
function speak(text) {
  // Create a new instance of SpeechSynthesisUtterance.
	
  img.src = 'assets/images/smiling-open.png';
  
  
  // Set the text.
	msg.text = text;
  

  
  // If a voice has been selected, find the voice and set the
  // utterance instance's voice attribute.
	if (voiceSelect.value) {
		msg.voice = speechSynthesis.getVoices().filter(function(voice) { return voice.name == voiceSelect.value; })[0];
	}
  
  // Queue this utterance.
	window.speechSynthesis.speak(msg);

}

// Set up an event listener for when the 'speak' button is clicked.
button.addEventListener('click', function(e) {
	if (speechMsgInput.value.length > 0) {
		speak(speechMsgInput.value);
    msg.addEventListener('end', () => {
      img.src = 'assets/images/smiling.png';
    });
  }
});

}
