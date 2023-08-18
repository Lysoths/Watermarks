$(document).ready(function() {

  $('#myTable').DataTable( {
    dom: 'Bfrtip',
    buttons: [
        {
          extend: 'excel',
          title: '',
          customize: function ( xlsx ) {
 
            const coreXmlStr = 
                   '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' + 
                   '<cp:coreProperties xmlns:cp="http://schemas.openxmlformats.org/package/2006/metadata/core-properties" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dcterms="http://purl.org/dc/terms/" xmlns:dcmitype="http://purl.org/dc/dcmitype/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">' +
                       '<dc:creator>John Smith;Jane Jones</dc:creator>' + 
                       '<cp:lastModifiedBy>John Smith</cp:lastModifiedBy>' + 
                       '<dcterms:created xsi:type="dcterms:W3CDTF">2023-06-14T17:51:33Z</dcterms:created>' + 
                       '<dcterms:modified xsi:type="dcterms:W3CDTF">2023-06-14T17:53:15Z</dcterms:modified>' + 
                   '</cp:coreProperties>';

            const parser = new window.DOMParser();
            const coreXmlDoc = parser.parseFromString( coreXmlStr, 'text/xml' );

            xlsx.docProps = {};
            xlsx.docProps['core.xml'] = coreXmlDoc;

            var contentTypes = xlsx['[Content_Types].xml'];
            $( 'Types', contentTypes ).append( '<Override PartName="/docProps/core.xml" ContentType="application/vnd.openxmlformats-package.core-properties+xml"/>' );

            var rels = xlsx._rels['.rels'];
            $( 'Relationships', rels ).append( '<Relationship Id="rId2" Type="http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties" Target="docProps/core.xml"/>' );
          }
        }
    ]
  } );

});