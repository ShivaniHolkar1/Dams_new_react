import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import {Routes, Route, useNavigate} from 'react-router-dom';
import { Bookmark } from './Bookmark';
import { Documents } from './Documents';

export default function Dashboard() {
  const navigate = useNavigate();

  const navigateToBookmark = () => {
    
    navigate('/Bookmark');
  };

  const navigateDocuments = () => {
    
    navigate('/');
  };

  return (
    <div>
      <div>
      
{/*         
        <Button >Sent for review</Button> */}
        {/* <div className='demo'style={{width:"20%"}}>
      */}
        <Button  className="demo" onClick={navigateDocuments}>Dashboard</Button>
        
        <Button  className="demo"   onClick={navigateToBookmark}>Bookmark</Button>
        {/* </div> */}
        
        <Routes>
          <Route path="/Bookmark" element={<Bookmark />} />
          <Route path="/" element={<Documents />} />
        </Routes>
     
      </div>
    </div>
  );
}

