import { useState } from 'react';
// import {  BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.scss';
import Navbar from './components/Navbar';
// import Home from './components/Home';
import TextForm from './components/TextForm';
// import About from './components/About';
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
     <Navbar title="FZ" aboutTile="About Us" homeText="Home" moodText={moodText} toggleMood={toggleMood}/>
     <TextForm heading="Enter the text here"  />
     <Footer/>    
    </>  
  );
}

export default App;
