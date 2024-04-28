import React from "react";
import "./NewCollections.css";
import mealPlan from "../meal_planer.json";
import Item from "../Item/Item";

import plan from "../Assets/plan-img.jpg";
import brkfast from "../Assets/brkfast.png";
export const NewCollections = () => {
  // Get the current day of the week
  const today = new Date().toLocaleString("en-us", { weekday: "long" });

  // Get the meal plan for the current day
  const currentDayPlan = mealPlan["7 Days"][today];

  return (
    <div className="plan">
      <h1>Today's Plan</h1>
      <hr />

      <div className="plan-img">
        {/* {new_collections.map((item, i)=>{
                return <Item 
                key={i} 
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}/>
            })} */}
        <img src={plan} alt="" />

        <div className="card">
          <div className="content">
            <div className="collections">
              <Item
                key={today}
                day={today}
                breakfast={currentDayPlan.Breakfast}
                lunch={currentDayPlan.Lunch}
                dinner={currentDayPlan.Dinner}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewCollections;
