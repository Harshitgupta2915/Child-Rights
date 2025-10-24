import { PDFViewer, Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import React from "react";
// Define styles
const styles = StyleSheet.create({
  page: { flexDirection: "column", backgroundColor: "#fff", padding: 20 },
  section: { margin: 10, padding: 10, fontSize: 14 },
});

// Create a simple document
const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Hello, this is my first PDF with React!</Text>
      </View>
      <View style={styles.section}>
        <Text>It works just like writing React components.</Text>
      </View>
    </Page>
  </Document>
);

// App component to render PDF viewer
export default function Reactpdf() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <PDFViewer width="100%" height="100%">
        <MyDocument />
      </PDFViewer>
    </div>);
}