import { useState } from "react";
import "./App-styles.css";
import User from "./user";
import CV from "./cv";
function App() {
	const defaultInfo = {
		name: "John Doe",
		email: "johndoe@gmail.com",
		phone: "0154684532",
		address: "Melbourne",
	};
	const [info, setInfo] = useState(defaultInfo);
	function handleChange(e) {
		setInfo({ ...info, [e.target.id]: e.target.value });
	}
	return (
		<>
			<header>
				<h1 className="header-title">Create Your CV</h1>
			</header>
			<main>
				<User className="user" data={info} show={handleChange} />
				<CV data={info}></CV>
			</main>
			<footer>
			</footer>
		</>
	);
}

export default App;
