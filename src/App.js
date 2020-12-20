import React, {useState} from "react";
import './App.css';
import Chip from './components/Chip/Chip';


function App() {
  const [selectedChannel, setChannel] = useState("Web Development");
  return (
    <div className="App">
      <img className="logo" src="https://dwglogo.com/wp-content/uploads/2020/05/1200px-YouTube_logo.png" alt="logo"></img>
      <h2 className="heading">YouTube Recommendor</h2>
      <div className="chips">
      
      <Chip />
      <Chip />
      <Chip />

      </div>
      

    </div>

  );
}

export default App;
