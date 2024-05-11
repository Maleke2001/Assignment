import React from "react";
import Navbar from "../../components/navbar/Navbar";
import "./SurveyResults.css";
const SurveyResults = ({
  totalSurveys,
  averageAge,
  oldestPerson,
  youngestPerson,
  pizzaPercentage,
  pastaPercentage,
  papWorsPercentage,
  movieLovers,
  radioLovers,
  eatOutLovers,
  tvLovers,
  averageRating,
}) => {
  return (
    <div className="results-container">
      <Navbar />
       <h2>Survey Results</h2>
      <div className="result-food-container">

     
      <div className="personal-details-container">
        <div className="number-of-surveys">
          <p>Total number of surveys: </p>
          <p>#surveys{totalSurveys}</p>
        </div>

        <div className="number-of-surveys">
          <p>Average Age: </p>
          <p>#avarage age{averageAge}</p>
        </div>

        <div className="number-of-surveys">
          <p>Oldest person who participated in survey: </p>
          <p>Oldest person {oldestPerson}</p>
        </div>

        <div className="number-of-surveys">
          <p>Youngest person who participated in survey: </p>
          <p>Youngest person {youngestPerson}</p>
        </div>
      </div>

      <div className="food-container">
        <div className="number-of-surveys">
          <p>Percentage of people who like Pizza</p>
          <p> Pizza: {pizzaPercentage}%</p>
        </div>

        <div className="number-of-surveys">
          <p>Percentage of people who like Pasta: </p>
          <p>Pasta: {pastaPercentage}%</p>
        </div>

        <div className="number-of-surveys">
          <p>Percentage of people who like Pap and Wors: </p>
          <p> Pap and Wors: {papWorsPercentage}%</p>
        </div>
      </div>

      <div className="rate-container">
        <div className="number-of-surveys">
          <p>People who like to watch movies:</p>
          <p> watch movies: {movieLovers}</p>
        </div>
        <div className="number-of-surveys">
          <p>People who like to listen to radio: </p>
          <p> radio: {radioLovers}</p>
        </div>
        <div className="number-of-surveys">
          <p>People who like to eat out:</p>
          <p> eat out: {eatOutLovers}</p>
        </div>
        <div className="number-of-surveys">
          <p>People who like to watch TV: </p>
          <p> watch TV: {tvLovers}</p>
        </div>
        <div className="number-of-surveys">
          <p>Average rating:</p>
          <p>Average rating: {averageRating}</p>
        </div>
      </div>

      </div>
      
    </div>
  );
};

export default SurveyResults;
