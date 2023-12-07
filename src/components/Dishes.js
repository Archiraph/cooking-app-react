import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import Navigation from "./Navigation";

const Dishes = ({ inputValue }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`)
      .then((res) => setData(res.data.meals));
  }, [inputValue]);

  return (
    <div>
      <ul>
        {data &&
          data.length > 0 &&
          data
            .filter((meal) => meal.strMeal.toLowerCase().includes(inputValue))
            .map((meal, index) => <Card key={index} meal={meal} />)}
      </ul>
    </div>
  );
};

export default Dishes;
