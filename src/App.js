import React, {useState} from "react";
import './App.css';
import Chip from './components/Chip/Chip';
import Card from './components/Card/Card';
import data from './data'
const channels = Object.keys(data)

function App() {
  const [selectedCategory, setCategory] = useState("Web Development");

  function categoryClickHandler(category){
    setCategory(category);

  }
  console.log(selectedCategory);
  
  return (
    <div className="App">
      <img className="logo" src="https://dwglogo.com/wp-content/uploads/2020/05/1200px-YouTube_logo.png" alt="logo"></img>
      <h2 className="heading">YouTube Recommendor</h2>
      <div className="chips">
      {channels.map((category) => (
        <button className="chip-button" onClick={() => categoryClickHandler(category)}>
        <Chip category={category} />
        </button>
      ))}
      </div>
      <div className="cards">
      {
      data[selectedCategory].map((channel) => (
        <Card channel={channel} />))}
      </div> 
      
      

    </div>

  );
}

export default App;
