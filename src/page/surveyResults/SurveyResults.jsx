import React from 'react';

const SurveyResults = ({ totalSurveys, averageAge, oldestPerson, youngestPerson, pizzaPercentage, pastaPercentage, papWorsPercentage, movieLovers, radioLovers, eatOutLovers, tvLovers, averageRating }) => {
  return (
    <div>
      <h2>Survey Results</h2>
      <div>
        <p>Total number of surveys: {totalSurveys}</p>
        <p>Average Age: {averageAge}</p>
        <p>Oldest person who participated in survey: {oldestPerson}</p>
        <p>Youngest person who participated in survey: {youngestPerson}</p>
      </div>
      <div>
        <p>Percentage of people who like Pizza: {pizzaPercentage}%</p>
        <p>Percentage of people who like Pasta: {pastaPercentage}%</p>
        <p>Percentage of people who like Pap and Wors: {papWorsPercentage}%</p>
      </div>
      <div>
        <p>People who like to watch movies: {movieLovers}</p>
        <p>People who like to listen to radio: {radioLovers}</p>
        <p>People who like to eat out: {eatOutLovers}</p>
        <p>People who like to watch TV: {tvLovers}</p>
      </div>
      <div>
        <p>Average rating: {averageRating}</p>
      </div>
    </div>
  );
};

export default SurveyResults;
