import { useState } from 'react';
import {  BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.scss';
import Navbar from './components/Navbar';
import Home from './components/Home';
import TextForm from './components/TextForm';
import About from './components/About';
import Footer from './components/Footer';
function App() {
  const toggleMood = () =>{
    if(moodText === 'light'){
      setMood('dark');
    }else{
      setMood('light');
    }
  }
  const [moodText, setMood] = useState('light')
  return (
    <>
      <Router>
        <Navbar title="FZ" aboutTile="About Us" homeText="Home" moodText={moodText} toggleMood={toggleMood}/>
          <div className="container">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/home' element={<Home />} />
              <Route path='/TextForm' element={<TextForm />} heading="Enter the text here" />
              <Route path='/About' element={<About />} aboutTile="About Us" />
            </Routes>
          </div>
        <Footer/>
      </Router>
    </>  
  );
}

export default App;
