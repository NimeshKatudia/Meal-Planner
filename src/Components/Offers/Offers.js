import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import "./Offers.css";

export const Offers = () => {
  const [data, setData] = useState(null);
  // State variables to store the input values and list of allergens
  const [breakfastPreference, setBreakfastPreference] = useState("");
  const [lunchPreference, setLunchPreference] = useState("");
  const [snackPreference, setSnackPreference] = useState("");
  const [dinnerPreference, setDinnerPreference] = useState("");
  const [allergens, setAllergens] = useState([
    "Peanuts",
    "Tree Nuts",
    "Egg",
    "Fish",
  ]);

  // Function to handle form submission
  const handleSubmit = (event) => {
    // Prevent default form submission behavior
    event.preventDefault();

    // Create the content to be written to the file
    const fileContent = `
      Breakfast Preference: ${breakfastPreference}
      Lunch Preference: ${lunchPreference}
      Snack Preference: ${snackPreference}
      Dinner Preference: ${dinnerPreference}
      Allergens: ${allergens.join(", ")}
    `;

    // Function to download the file
    const downloadTxtFile = (content) => {
      const element = document.createElement("a");
      const file = new Blob([content], { type: "text/plain" });
      element.href = URL.createObjectURL(file);
      element.download = "output.txt";
      document.body.appendChild(element);
      element.click();
    };

    // Download the file
    downloadTxtFile(fileContent);
  };

  // Function to add a new allergen
  const handleAddAllergen = () => {
    // Prompt user to enter a new allergen
    const newAllergen = prompt("Enter a new allergen:");
    if (newAllergen) {
      setAllergens((prevAllergens) => [...prevAllergens, newAllergen]);
    }
  };

  return (
    <div className="offers">
      <h1>Customizations & Allergies</h1>
      <hr />
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
            <button className="save" type="submit">
              Save Preferences
            </button>
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
