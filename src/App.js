import { useState,useEffect } from 'react';
import './App.css';
import Login from './componets/login';
import SignIn from './componets/Signup';
import State from './componets/state';
import City from './componets/city';
import Colony from './componets/colony';
import Road from  './componets/road';
import House from './componets/house';
import Destination from './componets/destination';
import Levels from './componets/difficultyLevel';
import { UserContextprovider} from './context/UserAuthContex';
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
function App() {
  return (
    < UserContextprovider>
      <Routes>
        <Route path ="/"       element={<Login/>} />
        <Route path='/siginin'  element={<SignIn/>}/>
        <Route path ="/difficultyLevels"  element={<Levels/>} />
        <Route path ='/state'  element={<State/>}/>
        <Route path ='/city'   element={<City/>}/>
        <Route path ='/colony' element={<Colony/>}/>
        <Route path ='/road' element={<Road/>}/>
        <Route path ='/house' element={<House/>}/>
        <Route path='/destination' element={<Destination/>}/>
      </Routes>
    </ UserContextprovider>
    
  
  
  );
}

export default App;
