// alert('Hello world!');





let data = [
  "Салом! Ба Шумо чӣ кумак расонем?",

  "Барои фаъол намудани барнома лутфан бо шиносномаатон ба наздиктарин филиали бонк муроҷиат намоед.  \n\nАгар ба Бонк ҳозир шуда натавонед, лутфан бо шиноснома ( ё ин ки шиносномаи хориҷӣ) дар дастатон дошта, видео кунед ва дар видео гуед: 'Ман мехоҳам барномаи Спитамен Бонкамро фаъол намоям' . \n\nБаъдан рақамҳои мобилиро нивисед ва акси шиносномаро низ дар алоҳидагӣ равон кунед. \n\nЧеҳраи шумо дар видео бояд дида шавад!",

  "Барномаатон фаъол шуд, метавонед истифода баред.",

  "Маълумотномаи музди меҳнат пешниҳод карда метавонед?",

  "Агар Шумо на кам аз 3 моҳ кор ва фаъолият баред, аммо имконияти пешниҳод кардани ҳуҷҷати даромадро надошта бошед, ба Шумо метавонем қарзи скоринг пешниҳод намоем то 15 000с бо 31% солона ба мӯҳлати 24 моҳ танҳо бо шиноснома вобаста аз ҷои истиқомат.",

  "Мо ба Шумо метавонем қарзи Истеъмолиро пешниҳод намоем. Метавонед то 70000 сомони қарз гиред муҳлаташ то 24 моҳ ва 24 % мебошад, ва бо доллари ИМА бошад то 7000доллар ва 14% аст.",

  "Саломат бошед! Ташаккур барои муроҷиат!",
]

dataCntrl = [
  "Привет! Чем я могу вам помочь?",

  "Для разблокировки приложения обратитесь в ближайшее отделение банка с паспортом. Если у вас нет возможности посетить банк лично, выполните следующие шаги:\n1. Держите паспорт (или заграничный паспорт) в руке.\n2. Снимите видео, на котором четко виден ваш документ и ваше лицо.\n3. На видео произнесите фразу: 'Я хочу активировать приложение Спитамен Банка'.\n4. Напишите номера ваших мобильных телефонов.\n5. Отправьте фото вашего паспорта отдельным файлом.\nУбедитесь, что ваше лицо хорошо видно на видео!",

  "Ваше приложение было успешно разблокировано. Вы можете приступить к использованию.",

  "Можете ли вы предоставить справку о заработной плате?",
]

// chrome.runtime.sendMessage({ messages: data }, (response) => {
//   console.log(response.result)
// })

document.addEventListener("keydown", e => {
  data.forEach((val, i) => {
    if (e.altKey && e.key === `${i}`) {
      e.preventDefault()
      copyPaste(val)
    }
  })
  // dataCntrl.forEach((val, i) => {
  //   if (e.ctrlKey && e.key === `${i}`) {
  //     e.preventDefault()
  //     copyPaste(val)
  //   }
  // })
})

async function copyPaste(text) {
  try {
    await navigator.clipboard.writeText(text)
    let read = await navigator.clipboard.readText()
    let activeElement = document.activeElement;
    let editableTags = ["INPUT", "TEXTAREA"]
    if (editableTags.includes(activeElement.tagName)) {
      activeElement.value = read;
      // dispatchMessage(activeElement)
    }else if(activeElement.tagName === "P" || activeElement.isContentEditable){
      activeElement.innerText = read;
      // dispatchMessage(activeElement)
    }
  } catch (error) {
    console.error("Error copying")
  }
}

// async function dispatchMessage(activeElement) {
//   await new Promise((resolve) => setTimeout(resolve, 100))
//   const event = new KeyboardEvent("keydown", { key: "Enter", bubbles: true })
//   activeElement.dispatchEvent(event)
// }




// function simulateEnterKeyPress(inputFieldId) {
//   // Get a reference to the input field
//   const inputField = document.getElementById(inputFieldId)

//   // Create a new KeyboardEvent object
//   const event = new KeyboardEvent("keydown", {key: "Enter"})

//   // Dispatch the event to the input field
//   inputField.dispatchEvent(event)
// }

// // Example usage:
// document.getElementById("myButton").addEventListener("click", () => {
//   simulateEnterKeyPress("myInputField")
// })