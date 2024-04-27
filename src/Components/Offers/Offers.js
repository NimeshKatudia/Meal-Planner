import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import "./Offers.css";

export const Offers = () => {
  // State variables to store the input values and list of allergens
  const [breakfastPreference, setBreakfastPreference] = useState("");
  const [lunchPreference, setLunchPreference] = useState("");
  const [snackPreference, setSnackPreference] = useState("");
  const [dinnerPreference, setDinnerPreference] = useState("");
  const [allergens, setAllergens] = useState(["Peanuts", "Tree Nuts", "Egg", "Fish"]);

  // Function to handle form submission
  const handleSubmit = (event) => {
    // Prevent default form submission behavior
    event.preventDefault();

    // Log or process the input values as needed
    console.log("Breakfast Preference:", breakfastPreference);
    console.log("Lunch Preference:", lunchPreference);
    console.log("Snack Preference:", snackPreference);
    console.log("Dinner Preference:", dinnerPreference);

    // You can further process or store the input values here
  };

  // Function to add a new allergen
  const handleAddAllergen = () => {
    // Prompt user to enter a new allergen
    const newAllergen = prompt("Enter a new allergen:");
    if (newAllergen) {
      setAllergens(prevAllergens => [...prevAllergens, newAllergen]);
    }
  };

  return (
    <div className="offers">
      <h1>Hello</h1>
      <div className="custom">
        <div className="custom_left">
          <h2>Any Likings For Today?</h2>
          <form onSubmit={handleSubmit}>
            <div className="favourites">
              <h3>For Breakfast</h3>
              <input
                type="text"
                placeholder="Enter Your Preference"
                value={breakfastPreference}
                onChange={(e) => setBreakfastPreference(e.target.value)}
              />
            </div>
            <div className="favourites">
              <h3>For Lunch</h3>
              <input
                type="text"
                placeholder="Enter Your Preference"
                value={lunchPreference}
                onChange={(e) => setLunchPreference(e.target.value)}
              />
            </div>
            <div className="favourites">
              <h3>For Snack</h3>
              <input
                type="text"
                placeholder="Enter Your Preference"
                value={snackPreference}
                onChange={(e) => setSnackPreference(e.target.value)}
              />
            </div>
            <div className="favourites">
              <h3>For Dinner</h3>
              <input
                type="text"
                placeholder="Enter Your Preference"
                value={dinnerPreference}
                onChange={(e) => setDinnerPreference(e.target.value)}
              />
            </div>
            <button type="submit">Save Preferences</button>
          </form>
        </div>
        <div className="custom_right">
          <h2>What Are You Allergic to?</h2>
          <ul>
            {allergens.map((allergen, index) => (
              <li key={index}>{allergen}</li>
            ))}
            <li onClick={handleAddAllergen}>
              <FontAwesomeIcon icon={faPlusCircle} /> Add More
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Offers;
