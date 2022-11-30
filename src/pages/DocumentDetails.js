import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import React, { useState } from 'react';
import { FileUpload } from 'primereact/fileupload';
import DragDrop from './DragDrop';



// import { InputText } from 'primereact/inputtext';
// import {input} from 'primeflex/input';


function DocumentDetails(){
    const [value1, setValue1] = useState('');
    return(

<div class="card" style={{height:"100%"}}>
    <Card style={{borderLeft: "10px solid blue",backgroundColor:"#F3F3F3",width:'90%',height:'60%'}}>
   
    <div class="formgrid grid" >
        <div class="field col" >
            <label for="firstname2">DocumentName</label>
            <input id="firstname2" type="text" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"/>
        </div>
        <div class="field col">
            <label for="lastname2">Document Description</label>
            <input id="lastname2" type="text" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"/>
        </div>
        <div class="field col">
            <label for="lastname2">Client Name</label>
            <input id="lastname2" type="text" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"/>
        </div>
    </div>

<Card style={{backgroundColor:'lightblue',width:"550px", height:"30vh"  }}>
<> Upload Document</>
    {/* <div style={{border:"2px dotted",height:"100px",width:"500px",borderRadius:"5px"}}> */}
         <br/> 
       <div>
<DragDrop/>
 
        </div>
        <div>Eligible Format:DOCX,DOC and PDF</div>  
        
         
</Card>
</Card>
<br/>
<Button  style={{float:"right"}}  label="Submit" aria-label="Submit"  /> 


<Button style={{marginLeft:"950px"}} label="Cancel" className="p-button-outlined" />




</div>



    )







//         <div className='DocumentReview'>
//             <Card>
// <div>

// <div >
//                 <div className="p-fluid grid formgrid">
//                     <div className="field col-12 md:col-3">
//                         <label htmlFor="integeronly">Document Name</label>
//                         <InputText inputId="Document Name"   />
//                     </div>
//                     <div className="field col-12 md:col-3">
//                         <label htmlFor="withoutgrouping">Document Description</label>
//                         <InputText inputId="Document Description"   mode="decimal" useGrouping={false} />
//                     </div>
//                     <div className="field col-12 md:col-3">
//                         <label htmlFor="minmaxfraction">Client Name</label>
//                         <InputText inputId="Client Name"   mode="decimal" minFractionDigits={2} maxFractionDigits={5} />
//                     </div>
//                     {/* <div className="field col-12 md:col-3">
//                         <label htmlFor="minmax">Min-Max Boundaries</label>
//                         <InputText inputId="minmax"   mode="decimal" min={0} max={100} />
//                     </div> */}
// </div>
// </div>
// </div>

/* <Card style={{backgroundColor:'lightblue',width:"550px"}}>
<> Document Details:</>
    <div style={{border:"2px dotted",height:"70px",width:"480px",borderRadius:"5px"}}>
        Drag and drop or Choose File
        </div>
        <div>Eligible Format:DOCX,DOC and PDF</div>




    
</Card>




<Button label="Primary" className="p-button-outlined" />


                <Button label="Submit" aria-label="Submit"  />
            
               

           
          


 */


        //     </Card>

        // </div>
}

export default DocumentDetails;