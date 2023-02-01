import React from "react";
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
  return (
    <div>
      <img src={animalObj[type]} alt="animal" />
      <img src={heart} alt="heart" />
    </div>
  );
};

export default AnimalsShow;
