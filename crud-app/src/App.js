import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import { Container } from '@material-ui/core';
import {Header}from "./components/Header";
import Home from './components/Home'
import UserDetail from './components/crud/UserDetail';
import AddUser from "./components/crud/AddUser"
import UpdateUser from './components/crud/UpdateUser'
import './App.css';


function App() {

  return (
    <div className="App">
       <Router>
         <Header />
         <Container className="container" maxWidth="lg">
            <Routes>  
               <Route path="/" element={<Home />}/>     
               <Route path="/adduser" element={<AddUser />}/> 
               <Route path="/edit/:id" element={<UpdateUser />}/>                             
               <Route path="/detail/:id"  element={<UserDetail />}/>
            </Routes>
        </Container>
        </Router>  
    </div>
  );
}

export default App;
