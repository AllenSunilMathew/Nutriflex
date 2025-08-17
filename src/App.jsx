import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
// import { BrowserRouter as  Routes, Routes } from "react-router-dom";

import Diet from './Pages/Diet'
import Exercises from './Pages/Exercises'
import Home from './Pages/Home'


import './index.css';




function App() {
  return (
    <>
      <Header />
     
   <Routes>
            
            <Route path='/' element={<Home/>} />
            <Route path='/exercise' element={<Exercises/>} />
            <Route path='/diet' element={<Diet/>} />
         </Routes>



        
         
      <Footer />
    </>
  )

}

export default App;