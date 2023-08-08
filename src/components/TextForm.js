import React,{useState} from 'react'


export default function TextForm(props) {
    const handleUpclick = ()=>{
        // console.log("Uppercase clicked" + text);
        let newText = text.toUpperCase();
        props.showAlert("Converted to Upper Case","success")
        setText(newText);
    }
    const handleLoclick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower Case","success")
    }
    const handleClearclick = ()=>{
        let newText = "";
        setText(newText);
        props.showAlert("Text cleared","success")

    }
    const handleCopyclick = ()=>{
     navigator.clipboard.writeText(text);
     document.getSelection().removeAllRanges();
     props.showAlert("Text Copied to clipboard","success")
    }
    const handleOnChange = (event)=>{
        // console.log("On change");
        setText(event.target.value)
    }
    const [text, setText] = useState("");
    // update text
    // text = "New text"; wrong way to change the state
    // setText("New text"); Correct way to change the state
  return (
    <>
<div className="container" style={{color:props.mode === 'light' ? 'black' : 'white'}}>
    <h2 className='mb-4'>{props.heading}</h2> 
    <div className="mb-2">
  <textarea placeholder='Enter your text' className="form-control" style={{backgroundColor:props.mode === 'dark' ? '#13466e' : 'white',color:props.mode === 'dark' ? 'white' : '#042743'}} value={text} onChange={handleOnChange} id="myBox" rows="6"></textarea>
    </div>
<button disabled = {text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleUpclick}>Convert to Uppercase</button>
<button disabled = {text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleLoclick}>Convert to Lowercase</button>
<button disabled = {text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleClearclick}>Clear</button>
<button disabled = {text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleCopyclick}>Copy to Clipboard</button>
</div>
<div className="container my-2" style={{color:props.mode === 'light' ? '#042743' : 'white'}}>
    <h2>Your text summary</h2>
    <p>{text.split(/\s+/).filter((element)=>{return element.length!== 0}).length} words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").filter((element)=>{return element.length!== 0}).length} Minutes to read</p>
    <h2>Preview</h2>
    <p>{text.length > 0 ?text:"Nothing preview to here...."}</p>
</div>
</>
  )
}
