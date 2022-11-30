
import { InputText } from 'primereact/inputtext';
import { Link } from 'react-router-dom';
import { DataTable } from "primereact/datatable";
import { useState } from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

 

 function SearchDocument(key){
const [data, setData]=useState([])
async function search(key)
{
if(key.length>1){
    let result = await fetch(+key);
result = await result.json();
console.warn(result);
setData(result)

}

}

    return(
        <div >
       <div>     
    <Button  style={{marginRight: "80%", backgroundColor:'white'}}  label="SearchDocument" icon="pi pi-search" className="p-button-raised p-button-secondary p-button-text" />  
  <br/>
  <br/>
    </div> 


         <Card>

            <h2>Hi Aman, what can i help you Find Today</h2>
            
             <span className="p-input-icon-left">
        <i className="pi pi-search" />
         <InputText onChange={(e)=>SearchDocument(e.target.value)} placeholder="Search Document" />
         </span>


         </Card>
         {/* {

         data.length>0
         <DataTable value={results}>
        
        <Column field="documentname" header="Document Name" />
        <Column field="description" header="Description" />
        <Column field="status" header="Status" />
        <Column field="senton" header="Sent On" />
      </DataTable>
       : null;
 } */}


           
        </div>
    )
}
export default SearchDocument;