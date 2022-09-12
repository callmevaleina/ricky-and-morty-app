import { useState, useEffect } from "react";
import "./App.css";
import Locations from "./components/Locations";

function App() {
  return (
    <div className="App">
      {/* <header> */}
      {/* <img src="https://ae01.alicdn.com/kf/HTB1QZI1fbSYBuNjSspiq6xNzpXaj.jpg"/> */}
      {/* <img src="https://wallpaperaccess.com/full/4961464.jpg" /> */}
      {/* <img src="https://wallpaperaccess.com/full/4961464.jpg" /> */}
      {/* <img src="https://i.pinimg.com/originals/24/71/d3/2471d3b10b39c28ffc1df648e893b592.jpg"/> */}

      {/* <img className="backgroundHeader" src={header} height="100px" />
        
      
      </header> */}

      <Locations />
    </div>
  );
}

export default App;
