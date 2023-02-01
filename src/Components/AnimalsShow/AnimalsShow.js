import React, { useState } from "react";
import "./AnimalsShow.css";
import bird from "../../images/bird.svg";
import cat from "../../images/cat.svg";
import cow from "../../images/cow.svg";
import dog from "../../images/dog.svg";
import gator from "../../images/gator.svg";
import heart from "../../images/heart.svg";
import horse from "../../images/horse.svg";

const animalObj = {
  bird,
  cat,
  cow,
  dog,
  gator,
  horse,
};

const AnimalsShow = ({ type }) => {
  const [size, setSize] = useState(0);
  return (
    <div className="animalWrap" onClick={() => setSize(size + 1)}>
      <img className="animal" src={animalObj[type]} alt="animal" />
      <img
        className="heart"
        src={heart}
        alt="heart"
        style={{ width: 10 + 10 * size + "px" }}
      />
    </div>
  );
};

export default AnimalsShow;
