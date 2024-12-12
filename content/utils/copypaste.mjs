export default async function copyPaste(text) {
  try {
    await navigator.clipboard.writeText(text)
    let read = await navigator.clipboard.readText()
    let activeElement = document.activeElement
    let editableTags = ["INPUT", "TEXTAREA"]
    if (editableTags.includes(activeElement.tagName)) {
      activeElement.value = read
    } else if (
      activeElement.tagName === "P" ||
      activeElement.isContentEditable
    ) {
      activeElement.innerText = read
    }
  } catch (error) {
    console.error("Error copying")
  }
}
