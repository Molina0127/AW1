//get all keys
const keys = document.querySelectorAll(".key")

//play notes
function playNote(event){

  let audioKeyCode = getKeyCode(event);  
  
  //console.log(audioKeyCode)
  //typed or pressed key
  
  const key = document.querySelector(`.key[data-key="${audioKeyCode}"]`) 
  
  //if key exists
  const canFoundAnyKey = !key 

  if (canFoundAnyKey) {
    return;
  }

  addPlayingClass(key)
  playAudio(audioKeyCode)  
  
}

function addPlayingClass(key){
  key.classList.add('playing')
}

function getKeyCode(event){
  //key code
  let keyCode;

  const isKeyboard = event.type === "keydown" //true or false
  if(isKeyboard){
     keyCode = event.keyCode
  } else {
     keyCode = event.target.dataset.key
  }

  return keyCode;

}

function playAudio(audioKeyCode) {
  //play audio
  const audio = document.querySelector(`audio[data-key="${audioKeyCode}"]`)
  audio.currenTime = 0;
  audio.play()
}

function removePlayingClass(event) {
  event.target.classList.remove("playing")
}


function registerEvents() {
  //click with mouse
  keys.forEach( function(key) {
  key.addEventListener("click", playNote)
  key.addEventListener("transitionend", removePlayingClass)
})

  

}

window.addEventListener("load", registerEvents)