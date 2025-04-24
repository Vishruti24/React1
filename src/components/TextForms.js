import React , {useState} from 'react'



export default function TextForms(props) {

    const handleUpClick = () => {
        //console.log("Uppercase was clicked" + text);
        let newText=text.toLocaleUpperCase();
        setText("You have clicked on handleUpClick");//because of state change it is re rander..
        setText(newText)
    }
    
    const handleOnChange = (event)  =>{
        //console.log("On change");
        setText(event.target.value);//we can type in text new value 
    }



    //hook always put under the function we use array destructing we set text and setText both
    //text="new text"; WRONG WAYwe can't declare var or state like this
    //setText("new Text"); CORRECT WAY
    const [text, setText] = useState('Enter text here');
   
 
    
  return (
    <div>
        <h1>{props.heading}</h1>
<div className="mb-3">
  {/* <label for="myBox" class="form-label">Example textarea</label> */}
  <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="10"></textarea>
</div>
<button className="btn btn primary" onClick={handleUpClick}>Convert to UpperCase</button>
    </div>
  )
}
//how to handle event
//how to set state(hook using useState)
//how to listen event in js react using handler
