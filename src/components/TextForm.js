import React, { useState } from "react";

export default function TextForm(props) {
  const toUppercase = () => {
    let textUppercase = text.toUpperCase();

    setText(textUppercase);
  };

  const toLowercase = () => {
    let textLowercase = text.toLowerCase();

    setText(textLowercase);
  };

  const removeText = () => {
    setText("");
  };

  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  const [text, setText] = useState('');
  return (
    <>
      <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <label htmlFor="myBox" className="form-label"></label>
          <textarea
            className="form-control"
            id="myBox"
            rows="5"
            value={text}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={toUppercase}>
          Convert to Uppercase
        </button>
        <button className="btn btn-warning mx-1" onClick={toLowercase}>
          Convert to Lowercase
        </button>
        <button className="btn btn-secondary mx-1" onClick={removeText}>
          Remove Text
        </button>
      </div>
      <div className="container mt-3">
            <p><span className="fw-bold">{text.split(' ').length-1}</span> words, <span className="fw-bold ">{text.length}</span> characters</p>
            <h3>Text Preview</h3>
            <p>{text}</p>
      </div>
    </>
  );
}
