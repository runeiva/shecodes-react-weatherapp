import React from "react";
import Icon from "./Icon";

export default function ForecastDayInfo(props) {
	function maxTemperature() {
		let temperature = Math.round(props.data.temperature.maximum);
		return `${temperature}°`;
	}

	function minTemperature() {
		let temperature = Math.round(props.data.temperature.minimum);
		return `${temperature}°`;
	}

	function day() {
		let date = new Date(props.data.time * 1000);
		let day = date.getDay();
		let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

		return days[day];
	}

	return (
		<div className="ForecastDayInfo">
			<div className="Forecast-day">{day()}</div>
			<Icon code={props.data.condition.icon} size={36} />
			<div className="Forecast-temperatures">
				<span className="Forecast-temperature-max">
					{maxTemperature()}
				</span>
				<span className="Forecast-temperature-min">
					{minTemperature()}
				</span>
			</div>
		</div>
	);
}