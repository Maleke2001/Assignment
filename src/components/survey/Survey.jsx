/** @format */

// Survey.jsx
import React from "react";
import "./Survey.css";
import { useFormContext } from "../../context/FormContext";
import { useState } from "react";
const SurveyForm = () => {
	const { formData = {}, updateFormData } = useFormContext();
	const [errorMessage, setErrorMessage] = useState("");
	const handleChange = (e) => {
		const { name, value } = e.target;
		updateFormData((prevFormData) => ({
			...prevFormData,
			[name]: value,
		}));
	};

	const handleRatingChange = (statement, rating) => {
		updateFormData((prevFormData) => ({
			...prevFormData,
			ratings: {
				...prevFormData.ratings,
				[statement]: rating,
			},
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (
			!formData.fullName ||
			!formData.email ||
			!formData.dob ||
			!formData.contactNumber
		) {
			setErrorMessage("**Please fill in all required fields.**");
			return;
		}
		if (
			!formData.ratings ||
			!Object.values(formData.ratings).every((rating) => rating)
		) {
			setErrorMessage("**Please select a rating for each question.**");
			return;
		}

		const age = new Date().getFullYear() - new Date(formData.dob).getFullYear();
		if (age < 5 || age > 120) {
			setErrorMessage("**Please enter a valid age (between 5 and 120).**");
			return;
		}
    const numericContactNumber = formData.contactNumber.replace(/\D/g, "");
		if (numericContactNumber.length < 10 || numericContactNumber.length > 15) {
			setErrorMessage("**It must be digit and between 10 and 15 digits.**");
			return;
		}

		fetch("http://localhost:5000/surveyData", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				...formData,
				food: Array.from(
					document.querySelectorAll('input[name="food"]:checked')
				).map((input) => input.value),
			}),
		})
			.then((response) => {
				if (!response.ok) {
					throw new Error("Failed to insert data into the server.");
				}

				alert("Data inserted successfully.");
				updateFormData({
					fullName: "",
					email: "",
					dob: "",
					contactNumber: "",
					ratings: {
						eatOut: 3,
						watchMovies: 3,
						watchTV: 3,
						listenToRadio: 3,
					},
				});

				setErrorMessage("");
			})
			.catch((error) => {
				console.error("Error:", error);
			});
	};

	return (
		<div className='survey-form'>
			<form onSubmit={handleSubmit}>
				<span
					className='error-message'
					style={{ color: "red" }}
				>
					{errorMessage}
				</span>
				<div className='survey'>
					<h3>What is your favourite food?</h3>
					<div className='food-options'>
						<label>
							<input
								type='checkbox'
								name='food'
								value='Pizza'
								onChange={handleChange}
							/>{" "}
							Pizza
						</label>
						<br />
						<label>
							<input
								type='checkbox'
								name='food'
								value='Pasta'
								onChange={handleChange}
							/>{" "}
							Pasta
						</label>
						<br />
						<label>
							<input
								type='checkbox'
								name='food'
								value='Pap and Wors'
								onChange={handleChange}
							/>{" "}
							Pap and Wors
						</label>
						<br />
						<label>
							<input
								type='checkbox'
								name='food'
								value='Other'
								onChange={handleChange}
							/>{" "}
							Other
						</label>
					</div>
				</div>
				<h3 className='heading'>
					Please rate your level of agreement on the scale from 1 to 5, 1 being
					strong "strongly agree" and 5 being "strongly disagree"
				</h3>
				<table>
					<thead>
						<tr>
							<th></th>
							<th className='header'>Strongly Agree (1)</th>
							<th className='header'>Agree (2)</th>
							<th className='header'>Neutral (3)</th>
							<th className='header'>Disagree (4)</th>
							<th className='header'>Strongly Disagree (5)</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>I like to eat out</td>
							<td className='rate-level'>
								<RatingButton
									statement='eatOut'
									rating={1}
									currentRating={formData.ratings?.eatOut}
									onRatingChange={handleRatingChange}
								/>
							</td>
							<td className='rate-level'>
								<RatingButton
									statement='eatOut'
									rating={2}
									currentRating={formData.ratings?.eatOut}
									onRatingChange={handleRatingChange}
								/>
							</td>
							<td className='rate-level'>
								<RatingButton
									statement='eatOut'
									rating={3}
									currentRating={formData.ratings?.eatOut}
									onRatingChange={handleRatingChange}
								/>
							</td>
							<td className='rate-level'>
								<RatingButton
									statement='eatOut'
									rating={4}
									currentRating={formData.ratings?.eatOut}
									onRatingChange={handleRatingChange}
								/>
							</td>
							<td className='rate-level'>
								<RatingButton
									statement='eatOut'
									rating={5}
									currentRating={formData.ratings?.eatOut}
									onRatingChange={handleRatingChange}
								/>
							</td>
						</tr>
						<tr>
							<td>I like to watch movies</td>
							<td className='rate-level'>
								<RatingButton
									statement='watchMovies'
									rating={1}
									currentRating={formData.ratings?.watchMovies}
									onRatingChange={handleRatingChange}
								/>
							</td>
							<td className='rate-level'>
								<RatingButton
									statement='watchMovies'
									rating={2}
									currentRating={formData.ratings?.watchMovies}
									onRatingChange={handleRatingChange}
								/>
							</td>
							<td className='rate-level'>
								<RatingButton
									statement='watchMovies'
									rating={3}
									currentRating={formData.ratings?.watchMovies}
									onRatingChange={handleRatingChange}
								/>
							</td>
							<td className='rate-level'>
								<RatingButton
									statement='watchMovies'
									rating={4}
									currentRating={formData.ratings?.watchMovies}
									onRatingChange={handleRatingChange}
								/>
							</td>
							<td className='rate-level'>
								<RatingButton
									statement='watchMovies'
									rating={5}
									currentRating={formData.ratings?.watchMovies}
									onRatingChange={handleRatingChange}
								/>
							</td>
						</tr>
						<tr>
							<td>I like to watch TV</td>
							<td className='rate-level'>
								<RatingButton
									statement='watchTV'
									rating={1}
									currentRating={formData.ratings?.watchTV}
									onRatingChange={handleRatingChange}
								/>
							</td>
							<td className='rate-level'>
								<RatingButton
									statement='watchTV'
									rating={2}
									currentRating={formData.ratings?.watchTV}
									onRatingChange={handleRatingChange}
								/>
							</td>
							<td className='rate-level'>
								<RatingButton
									statement='watchTV'
									rating={3}
									currentRating={formData.ratings?.watchTV}
									onRatingChange={handleRatingChange}
								/>
							</td>
							<td className='rate-level'>
								<RatingButton
									statement='watchTV'
									rating={4}
									currentRating={formData.ratings?.watchTV}
									onRatingChange={handleRatingChange}
								/>
							</td>
							<td className='rate-level'>
								<RatingButton
									statement='watchTV'
									rating={5}
									currentRating={formData.ratings?.watchTV}
									onRatingChange={handleRatingChange}
								/>
							</td>
						</tr>
						<tr>
							<td>I like to listen to the radio</td>
							<td className='rate-level'>
								<RatingButton
									statement='listenToRadio'
									rating={1}
									currentRating={formData.ratings?.listenToRadio}
									onRatingChange={handleRatingChange}
								/>
							</td>
							<td className='rate-level'>
								<RatingButton
									statement='listenToRadio'
									rating={2}
									currentRating={formData.ratings?.listenToRadio}
									onRatingChange={handleRatingChange}
								/>
							</td>
							<td className='rate-level'>
								<RatingButton
									statement='listenToRadio'
									rating={3}
									currentRating={formData.ratings?.listenToRadio}
									onRatingChange={handleRatingChange}
								/>
							</td>
							<td className='rate-level'>
								<RatingButton
									statement='listenToRadio'
									rating={4}
									currentRating={formData.ratings?.listenToRadio}
									onRatingChange={handleRatingChange}
								/>
							</td>
							<td className='rate-level'>
								<RatingButton
									statement='listenToRadio'
									rating={5}
									currentRating={formData.ratings?.listenToRadio}
									onRatingChange={handleRatingChange}
								/>
							</td>
						</tr>
					</tbody>
				</table>
				<button
					className='btn'
					type='submit'
				>
					Submit
				</button>
			</form>
		</div>
	);
};

const RatingButton = ({ statement, rating, currentRating, onRatingChange }) => {
	const handleRatingClick = () => {
		onRatingChange(statement, rating);
	};

	return (
		<input
			type='radio'
			name={statement}
			value={rating}
			checked={currentRating === rating}
			onChange={handleRatingClick}
		/>
	);
};

export default SurveyForm;
