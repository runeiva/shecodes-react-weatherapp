import React, { useState, useEffect } from "react";
import axios from "axios";
import ForecastDayInfo from "./ForecastDayInfo.js";

export default function WeatherForecast(props) {
	const [loaded, setLoaded] = useState(false);
	const [forecast, setForecast] = useState(null);

	useEffect(() => {
		setLoaded(false);
	}, [props.coordinates]);

	function handleResponse(response) {
		setForecast(response.data.daily);
		setLoaded(true);
	}
	if (loaded) {
		return (
			<div className="Forecast">
				<div className="row">
					{forecast.map(function (dailyForecast, index) {
						if (index < 5) {
							return (
								<div className="col">
									<ForecastDayInfo data={dailyForecast} />
								</div>
							);
						} else {
							return null;
						}
					})}
				</div>
			</div>
		);
	} else {
		const apiKey = "8b0f6dca34a0f66b303deotf68e3607e";
		let lon = props.coordinates.longitude;
		let lat = props.coordinates.latitude;
		let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${lon}&lat=${lat}&key=${apiKey}&units=imperial`;

		axios.get(apiUrl).then(handleResponse);

		return null;
	}
}