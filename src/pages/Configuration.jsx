import React, { useState } from "react";
import { TabView, TabPanel } from "primereact/tabview";
import DocumentDetails from "./DocumentDetails";
import SelectReviewer from "./SelectReviewer";
import { Button } from "primereact/button";
import DocumentReview from "../pages/DocumentReview";

function Configuration() {
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    { label: "Document Details" },
    { label: "Document Review" },
    { label: "Select Review" },
  ];

  return (
    <div className="card">
      <Button
        icon=" pi pi-chevron-circle-left"
        style={{ backgroundColor: "white" }}
        label="Upload Documents"
        className="p-button-raised p-button-text p-button-plain"
      />

      <br />
      <br />

      <TabView
        activeIndex={activeIndex}
        onTabChange={(e) => setActiveIndex(e.index)}
      >
        <TabPanel header="Document Details">
          <DocumentDetails></DocumentDetails>
        </TabPanel>

        <TabPanel header="Document Review">
          <DocumentReview></DocumentReview>
        </TabPanel>
        <TabPanel header="Select Review">
          <SelectReviewer />
        </TabPanel>
      </TabView>
    </div>
  );
}
export default Configuration;
