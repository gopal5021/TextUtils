import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpCLick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to uppercase" , "success");
  };

  const handleDownCLick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("converted to lowercase" , "success");
  };

  const handleClear = () => {
    let newText = "";
    setText(newText);
    props.showAlert("text has been cleared" , "success");
  };

  const handleCopy = () => {
    var text=document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("text has been copied to clipboard" , "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("extra spaces has been cleared" , "success");
  }

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  return (
    <>
      <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading} </h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{backgroundColor: props.mode==='light'?'white':'grey' , color: props.mode==='dark'?'white':'#042743'}}
            
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpCLick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleDownCLick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClear}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>
          Clear extra spaces
        </button>
      </div>
      <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h2>Your Text Summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes to read</p>
        <h4>Preview</h4>
        <p>{text.length>0?text:'Enter your text in the above box to preview it here'}</p>
      </div>
    </>
  );
}
