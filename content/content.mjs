// import utils
import copyPaste from "./utils/copypaste";

// fetch data from local storage (background.js)
let dataTj;
let dataRu;
chrome.storage.local.get(['dataTj'], (result) => {
  dataTj = JSON.parse(result.dataTj)
})
chrome.storage.local.get(["dataRu"], (result) => {
  dataRu = JSON.parse(result.dataRu)
})

// paste desired premade text
document.addEventListener("keydown", e => {
  dataTj.forEach((val, i) => {
    if (e.altKey && e.key === `${i}`) {
      e.preventDefault()
      copyPaste(val)
    }
  })
  dataRu.forEach((val, i) => {
    if (e.ctrlKey && e.altKey && e.key === `${i}`) {
      e.preventDefault()
      copyPaste(val)
    }
  })
})

// async function copyPaste(text) {
//   try {
//     await navigator.clipboard.writeText(text)
//     let read = await navigator.clipboard.readText()
//     let activeElement = document.activeElement;
//     let editableTags = ["INPUT", "TEXTAREA"]
//     if (editableTags.includes(activeElement.tagName)) {
//       activeElement.value = read;
//     }else if(activeElement.tagName === "P" || activeElement.isContentEditable){
//       activeElement.innerText = read;
//     }
//   } catch (error) {
//     console.error("Error copying")
//   }
// }

document.onkeydown = async (e) => {
  try {
    if (e.altKey && e.key === "s") {
      // initialize function
      async function performAction(element, action) {
        element.click()
        if (action === "fill") {
          element.value = descriptionText
        }
      }
      // Select Akram
      const authors = document.querySelector(
        '[data-qa-id="select-agent-selected-name"]'
      )
      await performAction(authors, "click")
      const akram = document.querySelector('[data-qa-id="select-agent-item-2"]')
      await performAction(akram, "click")
      // Choose a tag
      const tags = document.querySelector('[data-qa-id="tags-control-input"]')
      await performAction(tags, "click")
      const spitamenpayTag = document.querySelector('[title="SpitamenPay"]')
      await performAction(spitamenpayTag, "click")
      // Fill the field with description
      const descriptionField = document.querySelector(
        '[data-qa-id="ipanel-description-textarea"]'
      )
      const descriptionText = "Разблокировка приложения"
      await performAction(descriptionField, "fill")
      // Fill topic
      const topicContainer = document.querySelector(
        '[data-qa-id="topic-control-container"]'
      )
      await performAction(topicContainer, "click")
      const topic = document.querySelector(
        '[data-qa-id="topic-control-dropdown-item-3"]'
      )
      await performAction(topic, "click")
      const subtopic = document.querySelector(
        '[title="Приложение не работает"]'
      )
      await performAction(subtopic, "click")
    }
  } catch (error) {
    console.error('Something went wrong');
  }
}
    