import React from 'react';
import './NewCollections.css';
import mealPlan from '../meal_planer.json';
import Item from '../Item/Item';

export const NewCollections = () => {
  // Get the current day of the week
  const today = new Date().toLocaleString('en-us', { weekday: 'long' });
  
  // Get the meal plan for the current day
  const currentDayPlan = mealPlan['7 Days'][today];

  return (
    <div className='new-collections'>
      <h1>NEW COLLECTIONS</h1>
      <hr />
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
  );
};

export default NewCollections;
