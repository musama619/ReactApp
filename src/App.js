import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  const [mode, setMode] = useState(`light`);
  const [alert, setAlert] = useState(null);

  const showAlerts = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
        setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === "light") {
      setMode(`dark`);
      document.body.style.backgroundColor = 'black';
      showAlerts("Dark Mode is enabled", "success")
    } else {
      setMode(`light`);
      document.body.style.backgroundColor = 'white';
      showAlerts("Light Mode is enabled", "success")
    }
  };
  return (
    <>
      <Navbar
        navTitle="Text Analyzer"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert}/>
      <div className="container my-3">
        <TextForm heading="Enter Text Here" mode={mode} showAlert={showAlerts} />
      </div>
    </>
  );
}

export default App;
