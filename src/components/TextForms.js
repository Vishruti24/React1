import React , {useState} from 'react'



export default function TextForms(props) {

    const handleUpClick = () => {
        //console.log("Uppercase was clicked" + text);
        let newText=text.toUpperCase();
        setText("You have clicked on handleUpClick");//because of state change it is re rander..
        setText(newText)
    }
    const handleLoClick = () => {
      //console.log("Lowercase was clicked" + text);
      let newText=text.toLowerCase();
      setText("You have clicked on handleLoClick");//because of state change it is re rander..
      setText(newText)
   }
   const handleClearClick = () => {
    //console.log("Lowercase was clicked" + text);
    let newText='';
    setText("You have clicked on handleLoClick");//because of state change it is re rander..
    setText(newText)
 }
 const handleNubClick = () => {
  //console.log("Lowercase was clicked" + text);
  let newText=(text.match(/\d+/g) || []).join(" ");
  setText("You have clicked on handleNubClick");//because of state change it is re rander..
  setText(newText)
}
const handleLinkClick = () => {
  //console.log("Lowercase was clicked" + text);
  let newText= (text.match(/(https?:\/ \/[^\s]+|www\.[^\s]+)/g) || []).join(" ");
  setText("You have clicked on handleLinkClick");//because of state change it is re rander..
  setText(newText)
}
const handleExtraspace = () =>{
  let newText=text.split(/[ ]+/).join(" ");
setText("you have clicked on handleExtraspace");
setText(newText);

}


    const handleOnChange = (event)  =>{
        //console.log("On change");
        setText(event.target.value);//we can type in text new value 
    }

    //hook always put under the function we use array destructing we set text and setText both
    //text="new text"; WRONG WAYwe can't declare var or state like this
    //setText("new Text"); CORRECT WAY
    const [text, setText] = useState('');
   


  return (
    <>
    <div className='container' style={{color:props.mode!=='dark'?'black':'white'}}>
        <h1>{props.heading}</h1>
<div className="mb-3">
  {/* <label for="myBox" class="form-label">Example textarea</label> */}
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.Mode==='dark'?'gray':'white', color:props.mode!=='dark'?'black':'white'}}id="myBox" rows="10"></textarea>
</div>
<button className="btn btn-secondary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
<button className="btn btn-secondary mx-1" onClick={handleLoClick}>Convert to LowerCase</button>
<button className="btn btn-secondary mx-1" onClick={handleClearClick}>Clear Text</button>
<button className="btn btn-secondary mx-1" onClick={handleNubClick}>Extract Number</button>
<button className="btn btn-secondary mx-1" onClick={handleLinkClick}>Extract Link</button>
<button className="btn btn-secondary mx-1" onClick={handleExtraspace}>Remove Extra space</button>

    </div>
    <div className="container" my-3  style={{color:props.mode!=='dark'? 'black':'white'}}>
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} word and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes to read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter in the text for preview it"}</p>
    </div>
    </>
  )
}
//how to handle event
//how to set state(hook using useState)
//how to listen event in js react using handler
