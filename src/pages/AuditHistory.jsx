
 import './index.css';
 import ReactDOM from 'react-dom';
 
 import { Card } from 'primereact/card';
  
 
 import React, { Component } from 'react';
 
 import { SplitButton } from 'primereact/splitbutton';
 import { Menubar } from "primereact/menubar";
  
 import { DataTable } from 'primereact/datatable';
 import { Column } from 'primereact/column';
 import { Button } from 'primereact/button';
 import { Ripple } from 'primereact/ripple';
 import { Dropdown } from 'primereact/dropdown';
 import { InputText } from 'primereact/inputtext';
 import { CustomerService } from '../service/CustomerService';
 import { classNames } from 'primereact/utils';
 import { Link } from 'react-router-dom';
 
 export class AuditHistory extends Component {
 
    
   constructor(props) {
         super(props);
 
 
        
 
 
 
 
 
 
        //  this.items = [
        //      {
        //          label: 'Upload Single Document',
                 
        //          command: () => {
        //              this.toast.show({severity:'success', summary:'Updated', detail:'Data Updated'});
        //          }
        //      },
        //      {
        //          label: 'Upload Multiple Document',
                
        //          command: () => {
        //              this.toast.show({ severity: 'success', summary: 'Delete', detail: 'Data Deleted' });
        //          }
        //      }
             
        //  ];
 
 
         this.items1 = [
             {
                 label: 'Sent On Date',
                icon: "pi pi-fw pi-calendar",
             
          },
             {
                 label: 'Status',
                 items1:[
                     {
                         label:'Updated'
                     },
                     {
                         label:'Sent For Review',
                        
                      },
                      {
                         label:'Sent For Review',
                        
                      },
                      {
                         label:'Sent For Review',
                        
                      },
                 ]
 
 
                
              
             },
             {
                 label: 'Reviewer',
                 items1:[
                     {
                         label:'Updated'
                     },
                     {
                         label:'Sent For Review',
                        
                      },
                      {
                         label:'Sent For Review',
                        
                      },
                      {
                         label:'Sent For Review',
                        
                      },
                 ]
 
                
             }
         
             
         ];
 
 
 
         this.items2 = [
             {
                 label: 'Latest to Oldest',
                 
                 command: () => {
                     this.toast.show({severity:'success', summary:'Updated', detail:'Data Updated'});
                 }
             },
             {
                 label: 'Oldest to Latest',
                
                 command: () => {
                     this.toast.show({ severity: 'success', summary: 'Delete', detail: 'Data Deleted' });
                 }
             }
             
         ];
 
 
 
         
 
        this.state = {
             customers1: [],
             customers2: [],
             customers3: [],
             first1: 0,
             rows1: 6,
             first2: 0,
             rows2: 6,
             currentPage: 1,
             pageInputTooltip: 'Press \'Enter\' key to go to this page.'
         };
 
         this.customerService = new CustomerService();
 
         this.onCustomPage1 = this.onCustomPage1.bind(this);
         this.onCustomPage2 = this.onCustomPage2.bind(this);
         this.onPageInputKeyDown = this.onPageInputKeyDown.bind(this);
         this.onPageInputChange = this.onPageInputChange.bind(this);
     }
     
 
     
 
     onCustomPage1(event) {
         this.setState({
             first1: event.first,
             rows1: event.rows,
             currentPage: event.page + 1
         });
     }
 
     onCustomPage2(event) {
         this.setState({
             first2: event.first,
             rows2: event.rows
         });
     }
 
     onPageInputKeyDown(event, options) {
         if (event.key === 'Enter') {
             const page = parseInt(this.state.currentPage);
             if (page < 1 || page > options.totalPages) {
                 this.setState({ pageInputTooltip: `Value must be between 1 and ${options.totalPages}.`})
             }
             else {
                 const first = this.state.currentPage ? options.rows * (page - 1) : 0;
 
                 this.setState({ first1: first, pageInputTooltip: 'Press \'Enter\' key to go to this page.' });
             }
         }
     }
 
     onPageInputChange(event) {
         this.setState({ currentPage: event.target.value });
     }
 
     componentDidMount() {
         this.customerService.getCustomersLarge().then(data => this.setState({ customers1: data }));
         this.customerService.getCustomersLarge().then(data => this.setState({ customers2: data }));
         this.customerService.getCustomersLarge().then(data => this.setState({ customers3: data }));
     }
     
 
     
 
     render() {
         const paginatorLeft = <Button type="button" icon="pi pi-refresh" className="p-button-text" />;
         const paginatorRight = <Button type="button" icon="pi pi-cloud" className="p-button-text" />;
         const template1 = {
             layout: 'PrevPageLink PageLinks NextPageLink RowsPerPageDropdown CurrentPageReport',
             'PrevPageLink': (options) => {
                 return (
                     <button type="button" className={options.className} onClick={options.onClick} disabled={options.disabled}>
                         <span className="p-3">Previous</span>
                         <Ripple />
                     </button>
                 )
             },
             'NextPageLink': (options) => {
                 return (
                     <button type="button" className={options.className} onClick={options.onClick} disabled={options.disabled}>
                         <span className="p-3">Next</span>
                         <Ripple />
                     </button>
                 )
             },
             'PageLinks': (options) => {
                 if ((options.view.startPage === options.page && options.view.startPage !== 0) || (options.view.endPage === options.page && options.page + 1 !== options.totalPages)) {
                     const className = classNames(options.className, { 'p-disabled': true });
 
                     return <span className={className} style={{ userSelect: 'none' }}>...</span>;
                 }
 
                 return (
                     <button type="button" className={options.className} onClick={options.onClick}>
                         {options.page + 1}
                         <Ripple />
                     </button>
                 )
             },
             'RowsPerPageDropdown': (options) => {
                 const dropdownOptions = [
                     { label: 10, value: 10 },
                     { label: 20, value: 20 },
                     { label: 50, value: 50 },
                     { label: 'All', value: options.totalRecords }
                 ];
 
                 return <Dropdown value={options.value} options={dropdownOptions} onChange={options.onChange} />;
             },
             'CurrentPageReport': (options) => {
                 return (
                     <span className="mx-3" style={{ color: 'var(--text-color)', userSelect: 'none' }}>
                         Go to <InputText size="2" className="ml-1" value={this.state.currentPage} tooltip={this.state.pageInputTooltip}
                             onKeyDown={(e) => this.onPageInputKeyDown(e, options)} onChange={this.onPageInputChange}/>
                     </span>
                 )
             }
         };
         const template2 = {
             layout: 'RowsPerPageDropdown CurrentPageReport PrevPageLink NextPageLink',
             'RowsPerPageDropdown': (options) => {
                 const dropdownOptions = [
                     { label: 10, value: 10 },
                     { label: 20, value: 20 },
                     { label: 50, value: 50 }
                 ];
 
                 return (
                     <React.Fragment>
                         <span className="mx-1" style={{ color: 'var(--text-color)', userSelect: 'none' }}>Items per page: </span>
                         <Dropdown value={options.value} options={dropdownOptions} onChange={options.onChange} />
                     </React.Fragment>
 
                 );
             },
             'CurrentPageReport': (options) => {
                 return (
                     <span style={{ color: 'var(--text-color)', userSelect: 'none', width: '120px', textAlign: 'center' }}>
                         {options.first} - {options.last} of {options.totalRecords}
                     </span>
                 )
             }
         };
         
 
 
         return (
             <div>
                 
                 <div >
    
    <Button  style={{marginRight: "80%", backgroundColor:'white'}}  label="AuditHistory" icon="pi pi-history" className="p-button-raised p-button-secondary p-button-text" />  
      <br/>
      <br/>
      
<div  >
                 
                 
                 
         <div className="card">
             <br/>
                    
         {/* <div style={{marginRight:"150px"}}> */}
         <span className="p-input-icon-left">
           <i className="pi pi-search" />
 
           <InputText placeholder="Search" style={{marginRight:'60px'}}s />
           </span>
           {/* <div className='button'> */}
          
           Filter: &nbsp; <SplitButton style={{marginRight:'60px',backgroundColor:'white'}}  label="Select" model={this.items1} className="p-button-raised p-button-plain p-button-text mr-2"></SplitButton>
        
          Sort: &nbsp;
          <SplitButton style={{marginRight:'60px',backgroundColor:'white'}}  label="Select" model={this.items2} className="p-button-raised p-button-plain p-button-text mr-2 mb-2"></SplitButton>
           <SplitButton style={{float:'right'}}  label="ExportData" model={this.items} className="p-button-raised mr-2 mb-2"></SplitButton>       
               {/* </div> */}
 
 
               </div>
                     <DataTable value={this.state.customers2} paginator paginatorTemplate={template1} first={this.state.first1} rows={this.state.rows1} onPage={this.onCustomPage1} responsiveLayout="scroll">
                         <Column field="documentname" header="Document Name" style={{ width: '25%' }}></Column>
                         <Column field="description" header="Description" style={{ width: '25%' }}></Column>
                         <Column field="status" header="Status" style={{ width: '25%' }}></Column>
                         <Column field="senton" header="Sent On" style={{ width: '25%' }}></Column>
                     </DataTable>
                   
                                
 </div>
 
  </div> 
         
             </div>
         );
     }
 }
                 
 const rootElement = document.getElementById("root");
 ReactDOM.render(<AuditHistory />, rootElement);