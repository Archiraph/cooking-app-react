import React from "react";

const Card = ({ meal }) => {
  return (
    <li className="card">
      <h2>{meal.strMeal}</h2>
      <h4>Origin: {meal.strArea}</h4>
      <img src={meal.strMealThumb} alt={meal.strMeal} />
      <p>{meal.strInstructions}</p>
    </li>
  );
};

export default Card;
