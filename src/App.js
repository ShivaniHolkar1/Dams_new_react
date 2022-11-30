import React from 'react';
import './App.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
 import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';

import Dashboard from './pages/Dashboard';

// import About from './pages/About.jsx';
import Configuration from './pages/Configuration.jsx';
import {AuditHistory} from './pages/AuditHistory.jsx';
// import Product from './pages/Product.jsx';
// import ProductList from './pages/ProductList.jsx';
import Navbar from "./components/Navbar";
import GlobalStyle from './components/GlobalStyle';
import 'primeflex/primeflex.css';
import SearchDocument from './pages/SearchDocument';
import {Bookmark} from './pages/Bookmark';
import {ReactForm} from './pages/ReactForm';
import Section from './pages/Section';
import { Export } from './pages/Export';



const App = () => {
  return (
    
    <BrowserRouter>
    <Navbar/>
      {/* <Section/>    */}

    
      <Sidebar>
      {/* <ReactForm/>     */}
      {/* <Export/> */}
        
      <GlobalStyle/>
        <div className='navigations'>
        <Routes>
          <Route path="/" element={<Dashboard />}  />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/searchdocument" element={<SearchDocument />} />  
          <Route path="/audithistory" element={<AuditHistory />} />
           <Route path="/configuration" element={<Configuration />} /> 
          <Route path="/bookmark" element={<Bookmark />} />  
          {/* <Route path="/product" element={<Product />} />
          <Route path="/productList" element={<ProductList />} /> */}
          
        </Routes>
        </div>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;