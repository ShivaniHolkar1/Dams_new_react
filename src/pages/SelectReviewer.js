import { Dropdown } from "primereact/dropdown";
import React, { useState,useEffect } from "react";
import { CustomerService } from '../service/CustomerService';

import { Card } from "primereact/card";
function SelectReviewer() {


  const [countries, setCountries] = useState([]);
    const customerservice = new CustomerService();
    useEffect(() => {
        customerservice.getCountries().then(data1 => setCountries(data1));
    }, []);

  // const [city, setCity] = useState([]);
  // const citySelectItems = [
  //   { label: "Reviewer 1", value: "NY" },
  //   { label:"Reviewer 2", value: "RM" },
  //   { label: "Reviewer 3", value: "LDN" },
  //   { label: "Reviewer 4", value: "IST" },
  //   { label:"Reviewer5", value: "PRS" },
  // ];


  const onSubmit = ( ) => {
    // form.restart();
    };

    const isFieldValid = (meta) => !!(meta.touched && meta.error);
    const getFormErrorMessage = (meta) => {
        return isFieldValid(meta) && <small >{meta.error}</small>;
    };


  
  return (
    <Card style={{borderLeft: "10px solid blue",backgroundColor:"#F3F3F3",width:'950px'}}>
       <div style={{marginRight:"850px"}} > 
       
     
      
        SelectReviewer:
    
      </div>
      

      
   
      <Dropdown  id="country"  options={countries} optionLabel="name" />
                              
    
                      
                        
{/* <Dropdown   style={{marginRight:"800px",  width:'300px'}}   value={city} options={citySelectItems} onChange={(e) => setCity(e.value)} placeholder="Select "/> */}

    </Card>
  );
}

export default SelectReviewer;
