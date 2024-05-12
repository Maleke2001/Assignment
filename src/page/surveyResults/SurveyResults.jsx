/** @format */

// SurveyResults.jsx
import React, { useState, useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import "./SurveyResults.css";

const SurveyResults = () => {
	const [surveyData, setSurveyData] = useState([]);
	const [totalSurveys, setTotalSurveys] = useState(0);
	const [averageAge, setAverageAge] = useState(0);
	const [oldestPerson, setOldestPerson] = useState("");
	const [youngestPerson, setYoungestPerson] = useState("");
	const [pizzaPercentage, setPizzaPercentage] = useState(0);
	const [pastaPercentage, setPastaPercentage] = useState(0);
	const [papWorsPercentage, setPapWorsPercentage] = useState(0);
	const [movieLovers, setMovieLovers] = useState(0);
	const [radioLovers, setRadioLovers] = useState(0);
	const [tvLovers, setTvLovers] = useState(0);
	const [eatOutAverageRating, setEatOutAverageRating] = useState(0);

	useEffect(() => {
		fetch("http://localhost:5000/surveyData")
			.then((response) => {
				if (!response.ok) {
					throw new Error("Failed to fetch survey data from the server.");
				}
				return response.json();
			})
			.then((data) => {
				setSurveyData(data);
				setTotalSurveys(data.length);

				const ages = data.map(
					(entry) =>
						new Date().getFullYear() - new Date(entry.dob).getFullYear()
				);
				const sum = ages.reduce((acc, curr) => acc + curr, 0);
				setAverageAge(sum / data.length);
				setOldestPerson(Math.max(...ages));
				setYoungestPerson(Math.min(...ages));

				const pizzaLovers = data.filter((entry) =>
					entry.food.includes("Pizza")
				).length;
				setPizzaPercentage((pizzaLovers / data.length) * 100);

				const pastaLovers = data.filter((entry) =>
					entry.food.includes("Pasta")
				).length;
				setPastaPercentage((pastaLovers / data.length) * 100);

				const papWorsLovers = data.filter((entry) =>
					entry.food.includes("Pap and Wors")
				).length;
				setPapWorsPercentage((papWorsLovers / data.length) * 100);

				const movieLoversCount = data.filter(
					(entry) => entry.ratings && entry.ratings.watchMovies <= 3
				).length;
				setMovieLovers(movieLoversCount);

				const radioLoversCount = data.filter(
					(entry) => entry.ratings && entry.ratings.listenToRadio <= 3
				).length;
				setRadioLovers(radioLoversCount);

				const tvLoversCount = data.filter(
					(entry) => entry.ratings && entry.ratings.watchTV <= 3
				).length;
				setTvLovers(tvLoversCount);

				const eatOutRatings = data
					.filter(
						(entry) => entry.ratings && entry.ratings.eatOut !== undefined
					)
					.map((entry) => entry.ratings.eatOut);

				if (eatOutRatings.length > 0) {
					const averageRating =
						eatOutRatings.reduce((acc, curr) => acc + curr, 0) /
						eatOutRatings.length;
					setEatOutAverageRating(averageRating);
				} else {
					setEatOutAverageRating(0);
				}
			})
			.catch((error) => {
				console.error("Error:", error);
			});
	}, []);

	return (
		<div className='results-container'>
			<Navbar />
			<h2>Survey Results</h2>
			<div className='result-food-container'>
				<div className='personal-details-container'>
					<div className='number-of-surveys'>
						<p>Total number of surveys: </p>
						<p className='results'>{totalSurveys}</p>
					</div>

					<div className='number-of-surveys'>
						<p>Average Age: </p>
						<p className='results'>{averageAge}</p>
					</div>

					<div className='number-of-surveys'>
						<p>Oldest person who participated in survey: </p>
						<p className='results'>{oldestPerson}</p>
					</div>

					<div className='number-of-surveys'>
						<p>Youngest person who participated in survey: </p>
						<p className='results'>{youngestPerson}</p>
					</div>
				</div>

				<div className='food-container'>
					<div className='number-of-surveys'>
						<p>Percentage of people who like Pizza</p>
						<p className='results'>{pizzaPercentage.toFixed(1)}%</p>
					</div>

					<div className='number-of-surveys'>
						<p>Percentage of people who like Pasta: </p>
						<p className='results'>{pastaPercentage.toFixed(1)}%</p>
					</div>

					<div className='number-of-surveys'>
						<p>Percentage of people who like Pap and Wors: </p>
						<p className='results'>{papWorsPercentage.toFixed(1)}%</p>
					</div>
				</div>

				<div className='rate-container'>
					<div className='number-of-surveys'>
						<p>People who like to watch movies:</p>
						<p className='results'>{movieLovers}</p>
					</div>
					<div className='number-of-surveys'>
						<p>People who like to listen to radio: </p>
						<p className='results'>{radioLovers}</p>
					</div>
					<div className='number-of-surveys'>
						<p>People who like to eat out:</p>
						<p className='results'>{eatOutAverageRating}</p>
					</div>
					<div className='number-of-surveys'>
						<p>People who like to watch TV: </p>
						<p className='results'>{tvLovers}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SurveyResults;
