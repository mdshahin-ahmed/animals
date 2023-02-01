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
    <div className="app">
      <button onClick={handleOnClick}>Add Animal</button>
      <div className="animalList">{showAnimals}</div>
    </div>
  );
}

export default App;
