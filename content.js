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

async function copyPaste(text) {
  try {
    await navigator.clipboard.writeText(text)
    let read = await navigator.clipboard.readText()
    let activeElement = document.activeElement;
    let editableTags = ["INPUT", "TEXTAREA"]
    if (editableTags.includes(activeElement.tagName)) {
      activeElement.value = read;
    }else if(activeElement.tagName === "P" || activeElement.isContentEditable){
      activeElement.innerText = read;
    }
  } catch (error) {
    console.error("Error copying")
  }
}












// document.onkeydown = async (e) => {
//   if(e.altKey && e.key === 's'){
//     // select akram
// const authors = document.querySelector('[data-qa-id="select-agent-selected-name"]');
// const akram = document.querySelector('[data-qa-id="select-agent-item-2"]')
// // choose a tag
// const tags = document.querySelector('[data-qa-id="tags-control-input"]');
// const spitamenpayTag = document.querySelector('[data-qa-id="tag-1"]');
// // fill the field with description
// const descriptionField = document.querySelector('[data-qa-id="ipanel-description-textarea"]')
// const descriptionText = 'Разблокировка приложения'
// // fill topic
// const topicContainer = document.querySelector('[data-qa-id="topic-control-container"]')
// const topic = document.querySelector('[data-qa-id="topic-control-dropdown-item-3"]')
// const subtopic = document.querySelector('[data-qa-id="topic-control-dropdown-item-22"]');
//     await authors.click();
//     await akram.click();
//     await tags.click();
//     await spitamenpayTag.click();
//     await descriptionField.click();
//     descriptionField.value = descriptionText;
//     await topicContainer.click();
//     await topic.click();
//     await subtopic.click();
//   }
// }

document.onkeydown = async (e) => {
  if (e.altKey && e.key === "s") {
    // Select Akram
    const authors = document.querySelector(
      '[data-qa-id="select-agent-selected-name"]'
    )
    const akram = document.querySelector('[data-qa-id="select-agent-item-2"]')
    // Choose a tag
    const tags = document.querySelector('[data-qa-id="tags-control-input"]')
    const spitamenpayTag = document.querySelector('[data-qa-id="tag-1"]')
    // Fill the field with description
    const descriptionField = document.querySelector(
      '[data-qa-id="ipanel-description-textarea"]'
    )
    const descriptionText = "Разблокировка приложения"
    // Fill topic
    const topicContainer = document.querySelector(
      '[data-qa-id="topic-control-container"]'
    )
    const topic = document.querySelector(
      '[data-qa-id="topic-control-dropdown-item-3"]'
    )
    const subtopic = document.querySelector(
      '[data-qa-id="topic-control-dropdown-item-23"]'
    )

    if (authors) authors.click()
    if (akram) akram.click()
    if (tags) tags.click()
    if (spitamenpayTag) spitamenpayTag.click()
    if (descriptionField) {
      descriptionField.click()
      descriptionField.value = descriptionText
      descriptionField.dispatchEvent(new Event("input"))
    }
    if (topicContainer) topicContainer.click()
    if (topic) topic.click()
    if (subtopic) subtopic.click()
  }
}

