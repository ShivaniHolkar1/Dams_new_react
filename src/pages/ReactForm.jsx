import React, { useEffect, useState } from 'react';
import { Form, Field } from 'react-final-form';
import { Dropdown } from 'primereact/dropdown';
import { CustomerService } from '../service/CustomerService';
import ReactDOM from 'react-dom';
export const ReactForm  = () => {
    const [countries, setCountries] = useState([]);
    const customerservice = new CustomerService();
    useEffect(() => {
        customerservice.getCountries().then(data1 => setCountries(data1));
    }, []);

const onSubmit = ( ) => {
    // form.restart();
    };

    const isFieldValid = (meta) => !!(meta.touched && meta.error);
    const getFormErrorMessage = (meta) => {
        return isFieldValid(meta) && <small >{meta.error}</small>;
    };

    
    return (
        <div >
         <Form onSubmit={onSubmit} render={({ }) => (
            <Field name="country" render={({ input }) => (
                    <div>
         
                        
        <Dropdown  id="country" {...input} options={countries} optionLabel="name" />
                        </div>
                        
                                
          )} /> 
         )} />
                </div>
          
    );
}
   
const rootElement = document.getElementById("root");
ReactDOM.render(<ReactForm />, rootElement);