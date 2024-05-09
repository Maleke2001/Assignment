import React, { useState } from 'react';
import './Survey.css'; // Styles



const SurveyForm = () => {
    const [ratings, setRatings] = useState({
      eatOut: 3,
      watchMovies: 3,
      watchTV: 3,
      listenToRadio: 3,
    });
  
    const handleRatingChange = (statement, rating) => {
      setRatings({
        ...ratings,
        [statement]: rating,
      });
    };
  
    return (
      <div className="survey-form">
        <h3>What is your favourite food? (You can choose more than 1 answer)</h3>
        <div className="food-options">
          <label>
            <input type="checkbox" name="food" value="Pizza" /> Pizza
          </label>
          <br />
          <label>
            <input type="checkbox" name="food" value="Pasta" /> Pasta
          </label>
          <br />
          <label>
            <input type="checkbox" name="food" value="Pap and Wors" /> Pap and Wors
          </label>
          <br />
          <label>
            <input type="checkbox" name="food" value="Other" /> Other
          </label>
        </div>
        <table>
          <thead>
            <tr>
              <th></th>
              <th className="header">Strongly Agree (1)</th>
              <th className="header">Agree (2)</th>
              <th className="header">Neutral (3)</th>
              <th className="header">Disagree (4)</th>
              <th className="header">Strongly Disagree (5)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>I like to eat out</td>
              <td>
                <RatingButton statement="eatOut" rating={1} currentRating={ratings.eatOut} onRatingChange={handleRatingChange} />
              </td>
              <td>
                <RatingButton statement="eatOut" rating={2} currentRating={ratings.eatOut} onRatingChange={handleRatingChange} />
              </td>
              <td>
                <RatingButton statement="eatOut" rating={3} currentRating={ratings.eatOut} onRatingChange={handleRatingChange} />
              </td>
              <td>
                <RatingButton statement="eatOut" rating={4} currentRating={ratings.eatOut} onRatingChange={handleRatingChange} />
              </td>
              <td>
                <RatingButton statement="eatOut" rating={5} currentRating={ratings.eatOut} onRatingChange={handleRatingChange} />
              </td>
            </tr>
            <tr>
              <td>I like to watch movies</td>
              <td>
                <RatingButton statement="watchMovies" rating={1} currentRating={ratings.watchMovies} onRatingChange={handleRatingChange} />
              </td>
              <td>
                <RatingButton statement="watchMovies" rating={2} currentRating={ratings.watchMovies} onRatingChange={handleRatingChange} />
              </td>
              <td>
                <RatingButton statement="watchMovies" rating={3} currentRating={ratings.watchMovies} onRatingChange={handleRatingChange} />
              </td>
              <td>
                <RatingButton statement="watchMovies" rating={4} currentRating={ratings.watchMovies} onRatingChange={handleRatingChange} />
              </td>
              <td>
                <RatingButton statement="watchMovies" rating={5} currentRating={ratings.watchMovies} onRatingChange={handleRatingChange} />
              </td>
            </tr>
            <tr>
              <td>I like to watch TV</td>
              <td>
                <RatingButton statement="watchTV" rating={1} currentRating={ratings.watchTV} onRatingChange={handleRatingChange} />
              </td>
              <td>
                <RatingButton statement="watchTV" rating={2} currentRating={ratings.watchTV} onRatingChange={handleRatingChange} />
              </td>
              <td>
                <RatingButton statement="watchTV" rating={3} currentRating={ratings.watchTV} onRatingChange={handleRatingChange} />
              </td>
              <td>
                <RatingButton statement="watchTV" rating={4} currentRating={ratings.watchTV} onRatingChange={handleRatingChange} />
              </td>
              <td>
                <RatingButton statement="watchTV" rating={5} currentRating={ratings.watchTV} onRatingChange={handleRatingChange} />
              </td>
            </tr>
            <tr>
              <td>I like to listen to the radio</td>
              <td>
                <RatingButton statement="listenToRadio" rating={1} currentRating={ratings.listenToRadio} onRatingChange={handleRatingChange} />
              </td>
              <td>
                <RatingButton statement="listenToRadio" rating={2} currentRating={ratings.listenToRadio} onRatingChange={handleRatingChange} />
              </td>
              <td>
                <RatingButton statement="listenToRadio" rating={3} currentRating={ratings.listenToRadio} onRatingChange={handleRatingChange} />
              </td>
              <td>
                <RatingButton statement="listenToRadio" rating={4} currentRating={ratings.listenToRadio} onRatingChange={handleRatingChange} />
              </td>
              <td>
                <RatingButton statement="listenToRadio" rating={5} currentRating={ratings.listenToRadio} onRatingChange={handleRatingChange} />
              </td>
            </tr>
          </tbody>
        </table>
        <button >Submit</button>
      </div>
    );
  };
  
  const RatingButton = ({ statement, rating, currentRating, onRatingChange }) => {
    const handleRatingClick = () => {
      onRatingChange(statement, rating);
    };
  
    return (
      <input type="radio" name={statement} value={rating} checked={currentRating === rating} onChange={handleRatingClick} />
    );
  };
  
  export default SurveyForm;