import { useState } from "react";
import Leftbar from "./components/leftbar/Leftbar";
import Navbar from "./components/navbar/Navbar";
import Rightbar from "./components/rightbar/Rightbar";
import Update from "./components/update/Update";
import "./App.css";

function App() {

  const [name, setName] = useState("Hilmi");
  
  return (
    <>
      <Navbar name={name} />
      <div className="container">
        <Leftbar />
        <Update />
        <Rightbar />
      </div>
    </>
  );
}

export default App;
