import logo from './logo.svg';
import './App.css';
import Navbar from "./Pages/Navbar"
import { Routes,Route } from 'react-router-dom';
import Carousels from './Pages/Carousels';
import Home from "./component/Home";

import Agent_Career from './component/Agent_Career';
import Benefits from "./component/Benefits";
import Procedure from "./component/Procedure"
import Achievers from "./component/Achievers"
import Contactus from './component/Contactus';
import Cityagent from './component/Cityagent';
import Who from './component/Who';
import How from "./component/How";
import FreePension from "./component/FreePension";
import Milestone from "./component/Milestone";
import Working from "./component/Working";
import Aboutus from './component/Aboutus';
import Policy from "./component/Policy";
import Term from "./component/Term";
import Licagent from './component/Licagent';
import Apply_Online from './component/Apply_Online';
import Footer from "./component/Footer";




function App() {
  return (
    <div>
   <Navbar/>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path='/Aboutus' element={<Aboutus/>}/>
  <Route path='/Apply_Online' element={<Apply_Online/>}/>
    <Route path='/Benefits' element={<Benefits/>}/>
    <Route path='/Procedure' element={<Procedure/>}/>
    <Route path="/Achievers" element={<Achievers/>}/>
    <Route path='/Contactus' element={<Contactus/>}/>
    <Route path='/Cityagent' element={<Cityagent/>}/>
    <Route path='/Who' element={<Who/>}/>
  <Route path="/How" element={<How/>}/>
  <Route path='/FreePension' element={<FreePension/>}/>
  <Route path='/Milestone' element={<Milestone/>}/>
  <Route path='/Working' element={<Working/>}/>
  <Route path='/Policy' element={<Policy/>}/>
  <Route path='/Term' element={<Term/>}/>
  <Route path='/Licagent' element={<Licagent/>}/>

   </Routes>
   <Footer/>
   </div>
  );
}

export default App;
