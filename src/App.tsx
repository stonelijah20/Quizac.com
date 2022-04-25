import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Blog from './Components/Blog/Blog';
import Contactus from './Components/Contact_Us/Contactus';
import Contributor from './Components/Contributor/Contributor';
import Covid19 from './Components/Covid_19/Covid19';
import FAQs from './Components/FAQs/FAQs';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';

import Navigations from './Components/Navigations/Navigations';
import Signup from './Components/Sign_Up/Signup';

function App() {
  return (
    <Router>
      <div>
        <Navigations/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/faqs' element={<FAQs/>}></Route>
          <Route path='/blog' element={<Blog/>}></Route>
          <Route path='/contributor' element={<Contributor/>}></Route>
          <Route path='/contact_us' element={<Contactus/>}></Route>
          <Route path='/covid_19' element={<Covid19/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
