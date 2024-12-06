console.log('I am from background!');


// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//   console.log(request);
//   console.log(sender);
//   sendResponse({
//     farewell: `Goodbye! ${sender.origin == "https://www.google.com" ? "Google" : "Friend"}`,
//   })
// })

// chrome.runtime.onMessage((request, sender, sendResponse) => {
//   sendResponse({ result: "Sent to popup" })
//   chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
//     chrome.tabs.sendMessage(tabs[0].id, {messages})
//   })
// })