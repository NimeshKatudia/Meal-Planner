import React from "react";
import "./Item.css";

const Item = (props) => {
  return (
    <div className="item">
      <div className="submit">
        <h2>{props.day}</h2>
        <p>Breakfast: {props.breakfast}</p>
        <p>Lunch: {props.lunch}</p>
        <p>Dinner: {props.dinner}</p>
      </div>
    </div>
  );
};

export default Item;
