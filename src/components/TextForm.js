import React, { useState } from "react";

export default function TextForm(props) {
  const [array, setArray] = useState([]);
  const [text, setText] = useState("");
  const [btntext, setBtnText] = useState("Convert to Uppercase");
  const [btnStyle, setBtnStyle] = useState("btn btn-primary mx-1");

  const toUppercase = () => {
    if (btntext === "Convert to Uppercase") {
      let textUppercase = text.toUpperCase();
      setText(textUppercase);
      setBtnText("Convert to Lowercase");
      setBtnStyle("btn btn-warning mx-1");
      props.showAlert("Converted to Uppercase", "primary");
    } else {
      let textLowercase = text.toLowerCase();
      setText(textLowercase);
      setBtnText("Convert to Uppercase");
      setBtnStyle("btn btn-primary mx-1");
      props.showAlert("Converted to Lowercase", "warning");
    }
  };

  const removeText = () => {
    if (text.length > 0) {
      setText("");
      props.showAlert("Text Removed", "danger");
    } else {
      props.showAlert("Nothing to Remove", "info");
    }
  };

  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  const speakText = () => {
    var message = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(message);
  };

  const handleKeyDown = (e) => {
    setArray((array) => [...array, e.target.value]);
  };

  const undoText = () => {
    if (array.length > 0) {
      const lastText = array.pop();
      console.log(lastText);
      setText(lastText);
    }
    else{
      props.showAlert("Nothing to Undo", "info");
    }
  };

  return (
    <>
      <div>
        <h1 style={{ color: props.mode === "light" ? "black" : "white" }}>
          {props.heading}
        </h1>
        <div className="mb-3">
          <label htmlFor="myBox" className="form-label"></label>
          <textarea
            className="form-control"
            id="myBox"
            rows="5"
            value={text}
            onChange={handleOnChange}
            onKeyDown={handleKeyDown}
            style={{
              backgroundColor: props.mode === "light" ? "white" : "black",
              color: props.mode === "light" ? "black" : "white",
            }}
          ></textarea>
        </div>
        <button className={btnStyle} onClick={toUppercase}>
          <span className="btn-label">
            <i
              className={`fa fa-chevron-${
                btntext === "Convert to Uppercase" ? "up" : "down"
              } mx-1`}
            ></i>
          </span>
          {btntext}
        </button>
        <button className="btn btn-success mx-1 text-white" onClick={speakText}>
          <span className="btn-label">
            <i className="fa fa-volume-up mx-1"></i>
          </span>
          Read Text
        </button>

        <button className="btn btn-secondary mx-1" onClick={removeText}>
          <span className="btn-label">
            <i className="fa fa-trash mx-1"></i>
          </span>
          Remove Text
        </button>

        <button className="btn btn-labeled btn-danger mx-1" onClick={undoText}>
          <span className="btn-label">
            <i className="fa fa-undo mx-1"></i>
          </span>
          Undo
        </button>
      </div>
      <div
        className="container mt-3"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <p>
          <span className="fw-bold">{text.split(" ").length - 1}</span> words,
          <span className="fw-bold ">{text.length}</span> characters
        </p>
        <h3>Text Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}
