import React, { useState } from 'react';

// import 'primeicons/primeicons.css';
// IoLogInOutline
// import { IoLogInOutline} from "react-icons/io";
 import {
  
//     FaBars,
//     // FaRegComment,
//     // FaRegChartBar,
//     // FaCommentAlt,
FaShoppingBag
//     // FaThList
 }from "react-icons/fa";

// import { BiMessageRounded} from "react-icons/bi";

import {GrDocumentConfig } from "react-icons/gr";

import { MdHistory } from "react-icons/md";
import { AiOutlineAppstore , AiOutlineSearch } from "react-icons/ai";
import { NavLink } from 'react-router-dom';


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Documents",
            icon:<AiOutlineAppstore/>
        },
        {
            path:"/searchdocument",
            name:"SearchBot",
            icon:<AiOutlineSearch/>
        },
        {
            path:"/configuration",
            name:"Configuration",
            icon:<GrDocumentConfig/>
        },
        {
            path:"/audithistory",
            name:"History",
            icon:< MdHistory/>
        },
        //  {
        //  path:"/dash",
        //     name:"Dash",
        //    icon:<FaShoppingBag/>
        // },
        // // {
        //     path:"/productList",
        //     name:"Product List",
        //     icon:<FaThList/>
        // }
    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   {/* <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Logo</h1> */}
                   <div >
                       {/* <IoLogInOutline onClick={toggle}/> */}

                       <i style={{marginLeft: isOpen ? "150px" : "0px"}} onClick={toggle} id="bars"  className='pi pi-sign-in'></i>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" >
                           <div  activeclassName="active">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;