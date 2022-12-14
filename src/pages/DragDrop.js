import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["DOC", "DOCX", "PDF"];

function DragDrop() {
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
  };
  return (
    <FileUploader  handleChange={handleChange} name="file" types={fileTypes} />
  );
}



export default DragDrop;






// import React from 'react';


// function DragDrop() {
//   // drag state
//   const [dragActive, setDragActive] = React.useState(false);
//   // ref
//   const inputRef = React.useRef(null);
  
//   // handle drag events
//   const handleDrag = function(e) {
//     e.preventDefault();
//     e.stopPropagation();
//     if (e.type === "dragenter" || e.type === "dragover") {
//       setDragActive(true);
//     } else if (e.type === "dragleave") {
//       setDragActive(false);
//     }
//   };
  
//   // triggers when file is dropped
//   const handleDrop = function(e) {
//     e.preventDefault();
//     e.stopPropagation();
//     setDragActive(false);
//     if (e.dataTransfer.files && e.dataTransfer.files[0]) {
//       // handleFiles(e.dataTransfer.files);
//     }
//   };
  
//   // triggers when file is selected with click
//   const handleChange = function(e) {
//     e.preventDefault();
//     if (e.target.files && e.target.files[0]) {
//       // handleFiles(e.target.files);
//     }
//   };
  
// // triggers the input when the button is clicked
//   const onButtonClick = () => {
//     inputRef.current.click();
//   };
  
//   return (
//     <form id="form-file-upload" onDragEnter={handleDrag} onSubmit={(e) => e.preventDefault()}>
//       <input ref={inputRef} type="file" id="input-file-upload" multiple={true} onChange={handleChange} />
//       <label id="label-file-upload" htmlFor="input-file-upload" className={dragActive ? "drag-active" : "" }>
//         <div>
//           <p>Drag and drop your file here or</p>
//           <button className="upload-button" onClick={onButtonClick}>Upload a file</button>
//         </div> 
//       </label>
//       { dragActive && <div id="drag-file-element" onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}></div> }
//     </form>
//   );
// };
// export default DragDrop;