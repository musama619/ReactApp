import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const [btntext, setBtnText] = useState("Convert to Uppercase");
  const [btnStyle, setBtnStyle] = useState("btn btn-primary mx-1");

  const toUppercase = () => {
    //let btnname = btntext
    //setBtnText("Convert to Lowercase");
    if (btntext === "Convert to Uppercase") {
      let textUppercase = text.toUpperCase();
      setText(textUppercase);
      setBtnText("Convert to Lowercase");
      setBtnStyle("btn btn-warning mx-1");
    } else {
      let textLowercase = text.toLowerCase();
      setText(textLowercase);
      setBtnText("Convert to Uppercase");
      setBtnStyle("btn btn-primary mx-1")
    }
  };

  //   const toLowercase = () => {
  //     let textLowercase = text.toLowerCase();

  //     setText(textLowercase);
  //   };

  const removeText = () => {
    setText("");
  };

  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <div>
      {/* style={{color: props.mode === 'light'?'black': 'white' }} */}
        <h1 style={{color: props.mode === 'light'?'black': 'white' }}>{props.heading}</h1>
        <div className="mb-3">
          <label htmlFor="myBox" className="form-label"></label>
          <textarea
            className="form-control"
            id="myBox"
            rows="5"
            value={text}
            onChange={handleOnChange}
            style={{backgroundColor : props.mode === 'light'?'white': 'black', color: props.mode === 'light'?'black': 'white'  }}
          ></textarea>
        </div>
        <button className={btnStyle} onClick={toUppercase}>
          {btntext}
        </button>
        {/* <button className="btn btn-warning mx-1" onClick={toLowercase}>
          Convert to Lowercase
        </button> */}
        <button className="btn btn-secondary mx-1" onClick={removeText}>
          Remove Text
        </button>
      </div>
      <div className="container mt-3" style={{color: props.mode === 'light'?'black': 'white' }}>
        <p>
          <span className="fw-bold">{text.split(" ").length - 1}</span> words,{" "}
          <span className="fw-bold ">{text.length}</span> characters
        </p>
        <h3>Text Preview</h3>
        <p>{text}</p>
      </div>

      

    </>
  );
}
