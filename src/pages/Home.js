import React, { useState } from "react";
import Title from "../components/Title";
import Navigation from "../components/Navigation";
import Dishes from "../components/Dishes";

const Home = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (value) => {
    setInputValue(value);
  };

  return (
    <div>
      <Title />
      <Navigation onInputChange={handleInputChange} />
      <Dishes inputValue={inputValue} />
    </div>
  );
};

export default Home;
