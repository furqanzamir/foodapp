import React, { useState } from 'react'
import Accordion from 'react-bootstrap/Accordion';

export default function About(props) {
    const [myStyle,setmyStyle] = useState({
        color: 'black',
        backgroundColor: 'white'
    });

const toggleMystyle = () =>{
    if(myStyle.color === 'white'){
        setmyStyle({
            color: 'black',
            backgroundColor : 'white'
        })        
    }else{
        setmyStyle({
            color: 'white',
            backgroundColor : 'black'
        })  
    }
}
  return (
    <>
        <div className="container">
            <h2>{props.Abouttile}</h2>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0" style={myStyle}>
                    <Accordion.Header style={myStyle}>Accordion Item #1</Accordion.Header>
                    <Accordion.Body style={myStyle}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1" style={myStyle}>
                    <Accordion.Header style={myStyle}>Accordion Item #2</Accordion.Header>
                    <Accordion.Body style={myStyle}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <button type='button' onClick={toggleMystyle} className='btn btn-primary'>Enable Dark Mood</button>
        </div>
    </>
  )
}
