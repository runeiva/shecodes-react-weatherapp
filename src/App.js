import "./App.css";
import WeatherContainer from "./WeatherContainer.js";
import Footer from "./Footer.js";

export default function App() {
	return (
		<div className="App">
			<div className="container">
				<WeatherContainer  defaultCity="Lisbon" />
				<Footer />
			</div>
		</div>
	);
}