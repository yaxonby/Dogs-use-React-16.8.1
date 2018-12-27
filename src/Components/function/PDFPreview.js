
import React from 'react';
import {
  PDFViewer, Document, Page, Text, View, StyleSheet,
} from '@react-pdf/renderer';
// import pdfstyles from './pdfStyles';


const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

// Create Document Component
const PDFPreview = ({ title }) => (
  <PDFViewer className='viewerPdf'>
    <Document>
      <Page size='A4' style={styles.page}>
        <View style={styles.section}>
          <Text>{title}</Text>
          <Text>This is a text in a generated PDF file.</Text>
        </View>
      </Page>
    </Document>
  </PDFViewer>
);

export default PDFPreview;