import React, { Component } from "react";
import { InputText } from "primereact/inputtext";
import { Card } from "primereact/card";
import { NavLink } from "react-router-dom";
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";



 import { useState,useEffect } from "react";
  
  
  function UserDetails() {
      const [name,setName]=useState("");
      const [email,setEmail]=useState("");
      const [mobile,setMobile]=useState("");
      const [lazyItems, setLazyItems] = useState([]);
      const [lazyLoading, setLazyLoading] = useState(false);
      const [selectedCity1, setSelectedCity1] = useState(null);
      const [status, setStatus]= useState("");
      const [role, setRole] = useState("dumpling");

  
      // const cities = [
      //     { name: 'Admin', code: 'NY' },
      //     { name: 'User', code: 'RM' },
      //     { name: 'viewer', code: 'LDN' },
      //     { name: 'Reviewer', code: 'IST' },
      //     { name: 'Admin', code: 'PRS' }
      // ];
  
        useEffect(() => {
          setLazyItems(Array.from({ length: 100000 }));
          setLazyLoading(false);
      },[]); 
  
      const onCityChange = (e) => {
          setSelectedCity1(e.value);
      }
  
     


      const onSubmit = (e) => {
          e.preventDefault();
          console.log("refresh prevented");
        };
  
  
  
      function saveUser()
      {
        console.warn({name,email,mobile,status,role});
        let data={name,email,mobile,status,role}
        fetch(` ${process.env.REACT_APP_API_KEY}data1`,{
          method:'POST',
          headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
          },
          body:JSON.stringify(data)
             
          
        }).then((result)=>{
          // console.warn("result",result);
          result.json().then((resp)=>{console.warn("resp",resp)
        })      
      })
      }



    return (
      <div>
        <NavLink to="/role" className="link1">
          <Button
            icon=" pi pi-chevron-circle-left"
            style={{ backgroundColor: "white" }}
            label="Add New User"
            className="p-button-raised p-button-secondary p-button-text p-button-sm"
          />
        </NavLink>
        <br />
        <br />

        <Card>
        <form onSubmit={onSubmit}>
          <Card
            style={{
              borderLeft: "10px solid blue",
              backgroundColor: "#F3F3F3",
              width: "950px",
            }}
          >
          
            <div class="grid">
              <div class="col-12 md:col-6 lg:col-3">
                <label htmlFor="username1" className="block">
                  User Name
                </label>
               

<InputText style={{height:"40px"}} type="text" value={name} onChange={(e)=>{setName(e.target.value)}}name="name"/><br/><br/>
              </div>
              <div class="col-12 md:col-6 lg:col-3">
                <label htmlFor="username1" className="block">
                  Email ID
                </label>
                

<InputText style={{height:"40px"}} type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}} name="email"/><br/><br/>
              </div>
              <div class="col-12 md:col-6 lg:col-3">
                <label htmlFor="username1" className="block">
                  EMP ID
                </label>
               
                <InputText style={{height:"40px"}} type="text" value={mobile} onChange={(e)=>{setMobile(e.target.value)}} name="mobile"/><br/><br/>
              </div>
            </div>

<div style={{display:"flex"}}>
          
            <div class="col-12 md:col-6 lg:col-3">User Role
             {/* <Dropdown value={selectedCity1} options={cities} onChange={onCityChange} optionLabel="name" placeholder="Select a City" />  */}
              
<select style={{width:"200px",height:"50%"}} className="custom-select" value={role} onChange={(e) => {const selectedRole = e.target.value; 
setRole(selectedRole);
        }}
      >
        <option value="admin">Admin</option>
        <option value="reviewer">Reviewer</option>
        <option value="viewer">Viewer</option>
      </select>
     

            </div>

            
            <div class="col-12 md:col-6 lg:col-3">Status
            <br/>
            <br/>
   

              <div class="formgroup-inline">
                <div class="field-radiobutton">
                <input type="radio" name="status" value="Active" onChange={(e)=>{setStatus(e.target.value)}}  /> 
                  <label for="city7">Active</label>
                </div>
                <div class="field-radiobutton">
                <input type="radio" name="status" value="Deactive" onChange={(e)=>{setStatus(e.target.value)}}  /> 
                  <label for="city8">Deactive</label>
                </div>
              </div>
            </div>

     </div>
           
          </Card>
          <br />
          <br />


          <Button
            style={{ marginLeft: "80%" }}
            label="Cancel"
            className="p-button-outlined"
          />

          {/* <Button  type="button" onClick={saveUser}>Submit </Button> */}

          <Button
            style={{ float: "right" }}
            label="Submit"
            type="button"
            onClick={saveUser}
            className="p-button-outlined"
          />
           </form>
        </Card>
       
      </div>
    );
  }
  
export default UserDetails