import { useState } from "react";
import "./styles/App-styles.css";
import User from "./user";
import CV from "./cv";
import { v4 as uuidv4 } from "uuid";
function App() {
	const defaultPersonalInfo = {
		name: "John Doe",
		email: "johndoe@gmail.com",
		phone: "0154684532",
		address: "Melbourne",
	};
	const defaultEducationInfo = [
		{
			uuid: uuidv4(),
			name: "Neverland University",
			degree: "Bachelors of Science in Computer Science",
			start: "24-02-2028",
			end: "28-6-2022",
		},
	];
	const [personalInfo, setPersonalInfo] = useState(defaultPersonalInfo);
	const [educationInfo, setEducationInfo] = useState(defaultEducationInfo);

	function handlePersonalInfo(e) {
		setPersonalInfo({ ...personalInfo, [e.target.id]: e.target.value });
	}
	function addEducation(e) {
		e.preventDefault();
		setEducationInfo([
			...educationInfo,
			{
				uuid: uuidv4(),
				name: "",
				degree: "",
				start: "",
				end: "",
			},
		]);
	}
	function handleEducationInfo(e) {
		setEducationInfo(
			educationInfo.map((item) => {
				if (item.uuid === e.target.parentElement.parentElement.id) {
					return { ...item, [e.target.id]: e.target.value };
				} else return item;
			})
		);
		console.log(educationInfo);
	}
	return (
		<>
			<header>
				<h1 className="header-title">Create Your CV</h1>
			</header>
			<main>
				<User
					className="user"
					personalData={personalInfo}
					show={handlePersonalInfo}
					addEducation={addEducation}
					educationData={educationInfo}
					handleEducationInfo={handleEducationInfo}
				/>
				<CV personalData={personalInfo} educationData={educationInfo}></CV>
			</main>
			<footer></footer>
		</>
	);
}

export default App;
