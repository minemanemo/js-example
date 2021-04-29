function jsonToCsv(filename, json) {
  var keys = Object.keys(json);
  var csv = "\ufeff";

  keys.forEach(function (key) {
    csv += key;
    csv += ",";
    csv += json[key];
    csv += "\r\n";
  });
  console.log(csv);

  var csvFile = new Blob([csv], { type: "text/csv;charset=utf-8" });

  if (navigator.msSaveOrOpenBlob) {
    navigator.msSaveOrOpenBlob(csvFile, filename);
  } else {
    var downloadLink = document.createElement("a");

    downloadLink.download = filename;
    downloadLink.href = window.URL.createObjectURL(csvFile);
    downloadLink.style.display = "none";

    downloadLink.click();
  }
}
