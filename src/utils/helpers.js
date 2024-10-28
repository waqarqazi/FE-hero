export function formatBytes(bytes, decimals = 2) {
  if (!+bytes) return "0 Bytes";

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
}

export const convertFileToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      resolve(reader.result);
    };

    reader.onerror = function (error) {
      reject("Error: ", error);
    };
  });
};

export const sortAlphabetically = (arr = [], key = "") =>
  arr.sort((a, b) => a[key].toLowerCase().localeCompare(b[key].toLowerCase()));
export const showImageInNewWindow = (base64Data, fileName) => {
  // Create a new window
  const newWindow = window.open();

  // Write the HTML content to the new window
  newWindow.document.write(`
  <html>
  <head>
    <title>${fileName || "Image Preview"}</title>
  </head>
  <body style="margin: 0; display: flex; flex-direction: column; justify-content: center; align-items: center; height: 100vh;">
    <img src="data:image/png;base64,${base64Data}" alt="Preview" style="max-width: 100%; max-height: 80%;" />
    <p style="margin-top: 10px;">Filename: ${fileName || "Untitled"}</p>
    <button onclick="downloadImage('${base64Data}', '${
    fileName || "image.png"
  }')">Download</button>
  </body>
  <script>
    function downloadImage(base64Data, fileName) {
      const link = document.createElement('a');
      link.href = 'data:image/png;base64,' + base64Data;
      link.download = fileName;
      link.click();
    }
  </script>
</html>
    `);
};
