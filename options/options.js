// fetch data from local storage (background.js) and generate html
chrome.storage.local.get(["dataTj"], (result) => {
  let list = document.querySelector("ol")
  let array = JSON.parse(result.dataTj)
  array.forEach((e) => {
    let li = document.createElement("li")
    li.setAttribute("contentEditable", "true")
    li.textContent = e
    list.appendChild(li)
  })
})
