//import React, { useState } from 'react'

export default function About(props) {

    // const [myStyle,setMyStyle]= useState({
    //     color: 'black',
    //     backgroundColor : 'white'
    // })
    let myStyle={
      color:props.mode==='dark'?'white':'black',
      backgroundColor:props.mode==='dark'?'#062a5e':'white',
      border:'2px solid',
      borderColor:props.mode==='dark'?'white':'062a5e',
    }
    
    
    
  return (
<div classNameName="container" style={myStyle}>
    <h1 classNameName="my-3">About Us</h1>
      <div className="accordion" id="accordionExample" style={myStyle}>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <strong>Analyze your text</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        <strong>Textutills gives you a way to analyze your text quickly.It word count,character count or preview your text with time of reading your text.</strong> 
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <strong>Free to use</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        <strong>Textutill is free tool that provide instant analyze your text.</strong> 
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      <strong>Browser compatiable</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        <strong>This website works in any web browser.</strong> 
      </div>
    </div>
  </div>
 </div>
 {/* <div classNameName="container my-3">
 <button  onClick={toggleStyle} type="button" className="btn btn-secondary mx-1">{btntext}</button>
 </div> */}
</div>
  )
}
