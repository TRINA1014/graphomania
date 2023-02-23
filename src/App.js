
import './App.css';
import Navbar from './COMPONENT/Navbar';
import Home from './COMPONENT/Home';
import Reg from './COMPONENT/Reg';
import Login from './COMPONENT/Login';
import Contactus from './COMPONENT/Contactus';
import Adminlogin from './COMPONENT/Adminlogin';
import Adminafterlogin from './COMPONENT/Adminafterlogin';

import{BrowserRouter,Route, Routes}from 'react-router-dom';
function App(){
  return  (
    <div align ="center">
        <h1>PROJECT NAME</h1>
        <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='' element ={<Home />} />
          <Route path='/userreg' element ={<Reg />} />
          <Route path='/userlogin' element ={<Login />} />
          <Route path='/contactus' element ={<Contactus />} />
          <Route path='/adminlogin' element ={<Adminlogin />} />
          <Route path='/adminafterlogin' element ={<Adminafterlogin />} />
        </Routes>
        </BrowserRouter>
    </div>
  );
}
export default App;
