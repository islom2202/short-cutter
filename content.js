// alert('Hello world!');

// chrome.runtime.sendMessage({greeting: "Hello"}, (response) =>{
//   console.log(response.farewell);
// })



// let data = [
//   "Салом! Ба шумо чӣ кумак расонем?",
//   "Барои фаъол намудани барнома...",
//   "Барномаатон фаъол шуд",
//   "Маълумотномаи музди меҳнат пешниҳод карда метавонед?",
//   "Метавонем Скоринг пешниҳод намоем...",
//   "Метавонем Истеъмолӣ Пешниҳод намоем...",
//   "Саломат бошед"
// ]

let data = [
  "Hello! How can we assist you?",
  "To activate the application...",
  "Your application has been activated",
  "Can you provide a salary certificate?",
  "We can offer scoring...",
  "We can offer consumer (loans)...",
  "Stay healthy",
]
document.onkeydown = (e) => {
  data.forEach((val, i) => {
    if(e.altKey && e.key === `${i}`){
      e.preventDefault();
      copyPaste(val)
    }
  })
}

async function copyPaste(text) {
  try {
    await navigator.clipboard.writeText(text)
    let read = await navigator.clipboard.readText()
    let activeElement = document.activeElement;
    let editableTags = ["INPUT", "TEXTAREA"]
    if (editableTags.includes(activeElement.tagName)) {
      activeElement.value = read
    }else if(activeElement.tagName === "P" || activeElement.isContentEditable){
      activeElement.innerText = read
    }
  } catch (error) {
    console.error("Error copying")
  }
}
