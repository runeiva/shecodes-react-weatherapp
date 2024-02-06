import React from "react";

export default function Temperature(props) {
	return (
		<span className="Temperature">
			<span className="temperatureRounded">{Math.round(props.celsius)}</span>
			<span className="unit">°C</span>
		</span>
	);
}