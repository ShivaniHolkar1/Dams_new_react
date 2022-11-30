import React from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";


const DocumentReview = () => {
  const footer = (
    <span>
      <Button label="Save" icon="pi pi-check" />
      <Button
        label="Cancel"
        icon="pi pi-times"
        className="p-button-secondary ml-2"
      />
    </span>
  );

  return (
    <div>
      <div class="grid">
        <div class="col-6">
          <Card
            icon={{}}
            title="Identified Section"
            // style={{
            //   borderLeft: "6px solid blue",
            //   backgroundColor: "#F3F3F3",
            //   width: "40%",
            //   height: "50%",
            // }}
          >
            <div class="card">
              <div class="sectionCard">Section 1: Name</div>
              <div class="sectionCard">Section 2: Name</div>
              <div class="sectionCard" icon="pi-chevron-circle-right">
                Section 3: Name
              </div>
              <div class="sectionCard" icon="pi-chevron-circle-right">
                Section 4: Name
              </div>
              <div class="sectionCard" icon="pi-chevron-circle-right">
                Section 5: Name
              </div>
            </div>
          </Card>
        </div>

        <div class="col-6">
          <Card
            icon={{}}
            title="Identified Section Keywords"
            // style={{
            //   borderLeft: "6px solid blue",
            //   backgroundColor: "#F3F3F3",
            //   width: "40%",
            //   height: "50%",
            // }}
          ></Card>
        </div>
      </div>
    </div>
  );
};

export default DocumentReview;
