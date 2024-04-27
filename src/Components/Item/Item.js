import React from "react";
import "./Item.css";
const Item = (props) => {
  return (
    <div className="item">
      <div className="image">
        <img src={props.image} />
      </div>

      <div className="submit">
        <p>{props.name}</p>
        <button>Hello</button>
      </div>
    </div>
  );
};

export default Item;
