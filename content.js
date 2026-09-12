function formatBlbTextToHtml(rawText) {
  const refRegex = /\b(?:[1-3]\s*)?[A-Za-z0-9.]+\s+\d+:\d+(?:-\d+)?\b/gi;
  const matches = rawText.match(refRegex);

  if (!matches || matches.length === 0) return null;

  let htmlContent = rawText;

  matches.forEach((ref) => {
    const trimmed = ref.trim();
    const lastSpace = trimmed.lastIndexOf(" ");
    if (lastSpace === -1) return;

    const bookRaw = trimmed.substring(0, lastSpace).replace(/\./g, "").replace(/\s+/g, "");
    const cvRaw = trimmed.substring(lastSpace + 1).replace(":", "/");
    const blbUrl = `https://www.blueletterbible.org/kjv/${bookRaw}/${cvRaw}/`;

    // Strict Google Docs HTML anchor formatting
    htmlContent = htmlContent.replace(
      ref,
      `<a href="${blbUrl}" style="color: #1155cc; text-decoration: underline;">${ref}</a>`
    );
  });

  htmlContent = htmlContent.replace(/\n/g, "<br>");
  return `<!DOCTYPE html><html><body><!--StartFragment--><span style="font-family: Arial, sans-serif;">${htmlContent}</span><!--EndFragment--></body></html>`;
}

// Override Clipboard events
document.addEventListener("copy", (event) => {
  const selection = window.getSelection();
  const rawText = selection ? selection.toString() : "";
  if (!rawText) return;

  const formattedHtml = formatBlbTextToHtml(rawText);
  if (!formattedHtml) return;

  if (event.clipboardData) {
    event.clipboardData.setData("text/html", formattedHtml);
    event.clipboardData.setData("text/plain", rawText);
    event.preventDefault();
    event.stopImmediatePropagation();
  }
}, true);

// Intercept navigator.clipboard.writeText (BLB built-in copy buttons)
if (navigator.clipboard && navigator.clipboard.writeText) {
  const originalWriteText = navigator.clipboard.writeText.bind(navigator.clipboard);
  navigator.clipboard.writeText = async function (text) {
    const formattedHtml = formatBlbTextToHtml(text);
    if (formattedHtml) {
      const copyHandler = (e) => {
        e.clipboardData.setData("text/html", formattedHtml);
        e.clipboardData.setData("text/plain", text);
        e.preventDefault();
      };
      document.addEventListener("copy", copyHandler);
      document.execCommand("copy");
      document.removeEventListener("copy", copyHandler);
      return;
    }
    return originalWriteText(text);
  };
}