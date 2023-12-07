import React, { useState } from "react";

const Navigation = ({ onInputChange }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    onInputChange(value);
  };

  return (
    <input
      className="input"
      type="text"
      placeholder="Faites une recherche en anglais"
      id="input"
      value={inputValue}
      onChange={handleInputChange}
    />
  );
};

export default Navigation;
