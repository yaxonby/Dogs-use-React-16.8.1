
import React from 'react';
import {
  PDFViewer, Document, Page, Text, View,
} from '@react-pdf/renderer';
// import pdfstyles from './pdfStyles';

// Create Document Component
const PDFPreview = ({ title }) => (
  <PDFViewer className='viewerPdf'>
    <Document>
      <Page size='A5'>
        <View>
          <Text>{title}</Text>
          <Text>This is a text in a generated PDF file.</Text>
        </View>
      </Page>
    </Document>
  </PDFViewer>
);

export default PDFPreview;