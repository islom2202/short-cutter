console.log('I am from background!');


chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log(request);
  console.log(sender);
  sendResponse({
    farewell: `Goodbye! ${sender.origin == "https://www.google.com" ? "Google" : "Friend"}`,
  })
})