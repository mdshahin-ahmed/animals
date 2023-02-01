import { useState } from "react";
import "./App.css";
import AnimalsShow from "./Components/AnimalsShow/AnimalsShow";

const randomAnimals = () => {
  const animals = ["bird", "cat", "cow", "dog", "gator", "horse"];

  return animals[Math.floor(Math.random() * animals.length)];
};

function App() {
  const [animals, setAnimals] = useState([]);
  const handleOnClick = () => {
    setAnimals([...animals, randomAnimals()]);
  };

  const showAnimals = animals.map((animal, index) => {
    return <AnimalsShow type={animal} key={index} />;
  });

  return (
    <div className="App">
      <button onClick={handleOnClick}>Add Animals</button>
      <div>{showAnimals}</div>
    </div>
  );
}

export default App;
