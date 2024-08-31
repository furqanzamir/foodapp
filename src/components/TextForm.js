import React, {useState} from 'react'

export default function TextForm(props) {
    const handleClick = () =>{
        let newtxt = text.toUpperCase();
        setText(newtxt)
        document.title= "TOUpperCase"
    }
    const handleClickLower = () =>{
        let newtxt2 = text.toLowerCase();
        setText(newtxt2)
    }
    const handleClickcleartext = () =>{
        let newtxt3 = '';
        setText(newtxt3)
    }
    const handleClickCopyTxt = () =>{
        const text = document.getElementById('exampleFormControlTextarea1');
        text.select();
        navigator.clipboard.writeText(text.value)
    }
    const handleClickremWhitespace = () =>{
        let newtext01 = text.split(/[ ]+/);
        setText(newtext01.join(" "));
    }
    const handleOnchange = (e) =>{
        setText(e.target.value);
        console.log('Handle on Chnage')
    }    
    // //usestate to set and update the value
    const [text, setText] = useState('');
    //wrong way to used directly assgin usestate always call as proper function
    // text("tesfdsf");
  return (
    <>
    <div className="container">
        <h2>{props.heading}</h2>
        <div className="mb-3">         
            <textarea className="form-control" value={text}  onChange={handleOnchange} placeholder='Enter the text click to convert uppercase' id="exampleFormControlTextarea1" rows="8"></textarea>
        </div>
        <button type='button' className='btn btn-primary me-2' onClick={handleClick}>Convert into Uppercase</button>
        <button type='button' className='btn btn-primary me-2' onClick={handleClickLower}>Convert into toLowercase</button>
        <button type='button' className='btn btn-primary me-2' onClick={handleClickcleartext}>Clear Text</button>
        <button type='button' className='btn btn-primary me-2' onClick={handleClickCopyTxt}>Copy Text</button>
        <button type='button' className='btn btn-primary me-2' onClick={handleClickremWhitespace}>Remove Whitespaces</button>
    </div>
    <div className="container mt-4">
        <div className="row p-4" style={{boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}}>
            <div className="col-lg-2">
                <h6>Character: {text.length}</h6>
            </div>
            <div className="col-lg-2">
                <h6>Words: {text.split(" ").length}</h6>
            </div>                
            <div className="col-lg-2">
                <h6>Minuts to Read: {Math.round(0.008 * text.split(" ").length)}</h6>
            </div>
            <div className="col-lg-2">
                <h6>Paragraph: {text.split("\n\n").length}</h6>
            </div>
            <div className="col-lg-2">
                <h6>Space: {text.split(" ").length}</h6>
            </div>
        </div>
    </div>
    <div className="container">
        <h4 className='mt-3'>Preview</h4>
        <p>{text}</p>
    </div>
        
    </>
  )
}

