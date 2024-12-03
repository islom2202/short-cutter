// data

let data = [
  {
    name: "Салому алейк",
    hotkey: "s",
    messages: ["Салом...", "Хайр"],
  },
  {
    name: "Барнома",
    hotkey: "b",
    messages: ["Барои фаъол намудани барнома...", "Барнома фаъол шуд"],
  }
]


window.onkeydown = (e) => {
  data.forEach(obj => {
    obj.messages.forEach((_, index) => {
      if(e.key === `${obj.hotkey}` && e.key === `${index}`){
        e.preventDefault();
      }
    })
    // if (e.altKey && e.key === `${obj[index]}`) {
    //   e.preventDefault()
    //   copyPaste(`${data[index]}`)
    // }
  })
}

async function copyPaste(text) {
  try {
    await navigator.clipboard.writeText(text)
    let read = await navigator.clipboard.readText()
    let activeElement = document.activeElement;
    activeElement.value = read
  } catch (error) {
    console.error("Error copying")
  }
}
