import React, {useState} from "react";
import './App.css';
import Chip from './components/Chip/Chip';
import Card from './components/Card/Card';
import data from './data';
import Footer from './components/Footer/Footer';
import youtubeLogo from './images/youtubeLogo.png';

const channels = Object.keys(data)

function App() {
  const [selectedCategory, setCategory] = useState("Web Development");

  function categoryClickHandler(category){
    setCategory(category);

  }
  
  return (
    <div className="App">
      <img className="logo" src={youtubeLogo} alt="logo"></img>
      <h2 className="heading">You<span className="youtube">Tube</span> Recommender</h2>
      <div className="chips">
      {channels.map((category) => (
        <button className="chip-button" onClick={() => categoryClickHandler(category)}>
        <Chip category={category} selected={selectedCategory} />
        </button>
      ))}
      </div>
      <div className="cards">
      {
      data[selectedCategory].map((channel) => (
        <Card channel={channel} />))}
      </div> 
      
      <Footer />
    </div>

  );
}

export default App;
