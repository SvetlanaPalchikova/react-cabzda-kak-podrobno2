import React from 'react';
import './App.css';
import Rating from "./components/Rating";
import Accordion from "./components/Accordion";

function App() {
  return (
    <div >
      <AppTitle />
      <Rating/>
      <Accordion/>
    </div>
  );
  function AppTitle() {
    return (
        <div>
          Hello, my friends!
        </div>
    )
  }
}

export default App;
