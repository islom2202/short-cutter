// import utils
// import copyPaste from "./utils/copypaste.mjs";


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


// alt hotkey functions
document.onkeydown = async (e) => {
  // tags filling functions
  if (e.altKey && e.key === "s") {
    e.preventDefault()
    appActivation()
  }
  if (e.altKey && e.key === "o") {
    e.preventDefault()
    onlineCredit()
  }
  // navigation inside jivo
  if(e.altKey && e.key === "ArrowLeft") {
    document.querySelector('[aria-label="Входящие"]').click();
  }
  if(e.altKey && e.key === "ArrowUp"){
    document.querySelector('[aria-label="Мои"]').click();
  }
  if (e.altKey && e.key === "ArrowRight") {
    document.querySelector('[aria-label="Все"]').click()
  }
  if (e.altKey && e.key === "ArrowDown") {
    document.querySelector('[class="listItem"]').click()
  }
}


async function appActivation(){
    try {
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
    } catch (error) {
      console.error("Something went wrong")
    }
}

async function onlineCredit() {
    // Select Akram
    const authors = document.querySelector(
      '[data-qa-id="select-agent-selected-name"]'
    )
    await authors.click()
    const akram = document.querySelector('[data-qa-id="select-agent-item-2"]')
    await akram.click()
    // Choose a tag
    const tags = document.querySelector('[data-qa-id="tags-control-input"]')
    await tags.click()
    new Promise((resolve) => setTimeout(resolve, 250))
    document.querySelector('[title="Банкомат"]').scrollIntoView({ block: "start" })

    // to wait after the scroll for 500 milliseconds before running following code
    new Promise((resolve) => setTimeout(resolve, 250))
    const onlineCreditTag = document.querySelector('[title="онлайн карз"]')
    await onlineCreditTag.click()
    // Fill the field with description
    const descriptionField = document.querySelector(
      '[data-qa-id="ipanel-description-textarea"]'
    )
    await descriptionField.click();
    const descriptionText = "Заявка на онлайн кредит - Экспресс"
    descriptionField.value = descriptionText
    // Fill topic
    const topicContainer = document.querySelector(
      '[data-qa-id="topic-control-container"]'
    )
    await topicContainer.click();
    document.querySelector('[title="Режим работы"]').scrollIntoView({block: "start"})
    new Promise((resolve) => setTimeout(resolve, 250))
    const topic = document.querySelector('[title="Кредит"]')
    await topic.click();
    const subtopic = document.querySelector('[title="Онлайн кредит"]')
    await subtopic.click();
}


