import React from 'react';
import './App.css';
import AddLeadModal from './Components/AddLeadModal';
import LeadTable from './Components/LeadTable';
function App() {
  return (
     
    <div>
    <div className="top"><h3>Lead Management Dashboad</h3></div>
   {<AddLeadModal/>}
   {<LeadTable/>} 
    </div>
  );
}

export default App;
