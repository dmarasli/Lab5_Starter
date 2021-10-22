// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO

var horn = document.getElementById("horn-select");
console.log(horn);
var audio = document.querySelector('audio');
console.log(audio);

horn.addEventListener('change', function(){
    var img = document.querySelector('img');
    console.log("horn selected!");
    console.log(img);
    console.log(audio);
    let val = document.getElementById("horn-select").value;
    if (val == "car-horn"){
      img.src = "assets/images/car-horn.svg";
      audio.src = "assets/audio/car-horn.mp3";
    }
    else if (val == "air-horn"){
      img.src = "assets/images/air-horn.svg";
      audio.src = "assets/audio/air-horn.mp3";
      }
    else if (val == "party-horn"){
      img.src = "assets/images/party-horn.svg";
      audio.src = "assets/audio/party-horn.mp3";
      }
    else{
      img.src = "assets/images/no-image.png";
    }

  })

    /**
     * At zero volume, the mute icon (level 0) should be displayed
From 1 to < 33 volume the first volume level should be displayed
From 33 to < 67 volume the second volume level should be displayed
From 67 and up the third volume level should be displayed
The correct volume icon should be set
The corresponding volume should be set for the audio element (note: this element’s volume is not out of 100)
     */

  let vol = document.getElementById("volume-controls");

  vol.addEventListener('change', function(){
    console.log("volume changed!");
    let img = document.querySelectorAll('img')[1];
    let num = document.querySelector('input').value;
    
    console.log(audio.volume);
    if(num == 0){
      console.log("volume is 0");
      img.src = "assets/icons/volume-level-0.svg";
      audio.volume = 0.0;
    }
    else if(num > 0 && num < 33){
      console.log("volume is between 0-33");
      img.src = "assets/icons/volume-level-1.svg";
      audio.volume = num / 100;
    }
    else if(num > 32 && num < 67){
      console.log("volume is between 33-67");
      img.src = "assets/icons/volume-level-2.svg";
      audio.volume = num / 100;
    }
    else{
      console.log("volume is higher than 67");
      img.src = "assets/icons/volume-level-3.svg";
      audio.volume = num / 100;
    }  
  })

  
  var audio_play = document.querySelector('button');
  var jsConfetti = new JSConfetti();
  audio_play.addEventListener('click', event => {
    console.log("play clicked!");
    console.log(audio);
    let val = document.getElementById("horn-select").value;
    if (val == "party-horn"){
      jsConfetti.addConfetti({
        confettiRadius:10,
      })
      audio.play();
    }
    else{
      audio.play();
    }
    
});

  




}