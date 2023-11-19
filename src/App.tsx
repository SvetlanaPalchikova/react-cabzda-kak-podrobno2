import React from 'react';
import './App.css';
import Rating from "./components/Rating";
import Accordion from "./components/Accordion";

function App() {
  return (
    <div >
      <PageTitle title={"Hello, my friends!"}/>
      <Rating value={3}/>
      <Accordion title={"menu1"}/>
      <Accordion title={"menu2"}/>
      <Rating value={2}/>
    </div>
  );
  function PageTitle(props: any) {
    return (
        <h1>
          {props.title}
        </h1>
    )
  }
}

export default App;
