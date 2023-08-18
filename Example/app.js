document.addEventListener('DOMContentLoaded', function() {
  var myTable = document.getElementById('myTable');
  myTable.addEventListener('click', function() {
    var tableData = [
      // Bu kısma tablodan çekilen veriler eklenir
      // Örnek veri: ["Veri1", "Veri2", "Veri3"]
    ];

    var coreXmlStr =
      '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' +
      '<cp:coreProperties xmlns:cp="http://schemas.openxmlformats.org/package/2006/metadata/core-properties" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dcterms="http://purl.org/dc/terms/" xmlns:dcmitype="http://purl.org/dc/dcmitype/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">' +
      '<dc:creator>John Smith;Jane Jones</dc:creator>' +
      '<cp:lastModifiedBy>John Smith</cp:lastModifiedBy>' +
      '<dcterms:created xsi:type="dcterms:W3CDTF">2023-06-14T17:51:33Z</dcterms:created>' +
      '<dcterms:modified xsi:type="dcterms:W3CDTF">2023-06-14T17:53:15Z</dcterms:modified>' +
      '</cp:coreProperties>';

    var blob = new Blob([coreXmlStr], { type: 'application/vnd.openxmlformats-package.core-properties+xml' });

    var a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'excel_file.xlsx';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  });
});
