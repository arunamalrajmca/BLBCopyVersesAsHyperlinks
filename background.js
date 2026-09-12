chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === "WRITE_TO_CLIPBOARD") {
    chrome.scripting.executeScript({
      target: { tabId: sender.tab.id },
      func: (htmlData, plainText) => {
        const copyHandler = (e) => {
          e.clipboardData.setData("text/html", htmlData);
          e.clipboardData.setData("text/plain", plainText);
          e.preventDefault();
        };
        document.addEventListener("copy", copyHandler, true);
        document.execCommand("copy");
        document.removeEventListener("copy", copyHandler, true);
      },
      args: [request.html, request.text]
    });
    sendResponse({ success: true });
  }
});