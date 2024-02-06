import React, { useState } from "react";
import axios from "axios";
import { LineWave } from "react-loader-spinner";
import Info from "./Info";
import Forecast from "./Forecast.js";

export default function WeatherContainer(props) {
	const [weatherData, setWeatherData] = useState({ ready: false });
	const [city, setCity] = useState(props.defaultCity);

	function handleResponse(response) {
		setWeatherData({
			temperature: response.data.temperature.current,
			coordinates: response.data.coordinates,
			wind: response.data.wind.speed,
			city: response.data.city,
			humidity: response.data.temperature.humidity,
			icon: response.data.condition.icon,
			description: response.data.condition.description,
			date: new Date(response.data.time * 1000),
			ready: true,
		});
	}

	function search() {
		const apiKey = "8b0f6dca34a0f66b303deotf68e3607e";

		let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
		axios.get(apiUrl).then(handleResponse);
	}

	function handleSubmit(event) {
		event.preventDefault();
		search(city);
	}

	function handleCityChange(event) {
		setCity(event.target.value);
	}

	if (weatherData.ready) {
		return (
			<div className="WeatherContainer">
				<form onSubmit={handleSubmit}>
					<div className="row">
						<div className="col-9">
							<input
								type="search"
								placeholder="Enter a city..."
								className="form-control"
								autoFocus="on"
								onChange={handleCityChange}
							/>
						</div>

						<div className="col-3">
							<input
								type="submit"
								value="Search"
								className="btn btn-primary w-100"
							/>
						</div>
					</div>
				</form>
				<Info data={weatherData} />
				<Forecast coordinates={weatherData.coordinates} />
			</div>
		);
	} else {
		search();
		return (
			<LineWave
  visible={true}
  height="100"
  width="100"
  color="#000000"
  ariaLabel="line-wave-loading"
  wrapperStyle={{}}
  wrapperClass=""
  firstLineColor=""
  middleLineColor=""
  lastLineColor=""
  />
		);
	}
}