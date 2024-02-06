import React from "react";
import Date from "./Date.js";
import Icon from "./Icon";
import Temperature from "./Temperature";

export default function Info(props) {
	return (
		<div className="Info">
			<h1>{props.data.city}</h1>
			<ul>
				<li>
					<Date date={props.data.date} />
				</li>
				<li className="text-capitalize">{props.data.description}</li>
			</ul>
			<div className="row mt-3">
				<div className="col-6">
					<div className="float-left">
						<Icon code={props.data.icon} size={52} />
						<Temperature celsius={props.data.temperature} />
					</div>
				</div>
				<div className="col-6">
					<ul>
						<li>Humidity: {Math.round(props.data.humidity)}%</li>
						<li>
							Wind: {Math.round(props.data.wind)}
							m/s
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}