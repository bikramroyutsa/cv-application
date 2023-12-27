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
	const defaultExperienceInfo = [
		{
			uuid: uuidv4(),
			name: "idontknow",
			position: "ceo",
			start: "32-23-2923",
			end: "432-33-22",
			description:
				"Quis tempor non deserunt pariatur ullamco magna. Irure incididunt cupidatat sint irure reprehenderit sunt ex ut aliqua fugiat reprehenderit. Non proident laboris Lorem esse. Velit occaecat mollit est do do dolor voluptate dolore non. Eu do do deserunt ut voluptate exercitation culpa ex consequat. Sunt in mollit aliquip excepteur do consequat minim minim. Ullamco dolore exercitation quis est enim ad velit incididunt tempor anim.",
		},
	];
	const [personalInfo, setPersonalInfo] = useState(defaultPersonalInfo);
	const [educationInfo, setEducationInfo] = useState(defaultEducationInfo);
	const [experienceInfo, setExperienceInfo] = useState(defaultExperienceInfo);
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
	}
	function deleteEducation(e) {
		e.preventDefault();
		setEducationInfo(
			educationInfo.filter((item) => {
				return item.uuid !== e.target.parentElement.id;
			})
		);
	}
	function addExperience(e) {
		e.preventDefault();
		setExperienceInfo([
			...experienceInfo,
			{
				uuid: uuidv4(),
				name: "",
				position: "",
				start: "",
				end: "",
				description: "",
			},
		]);
	}
	function handleExperienceInfo(e) {
		e.preventDefault();
		setExperienceInfo(
			experienceInfo.map((item) => {
				if (item.uuid === e.target.parentElement.parentElement.id) {
					return { ...item, [e.target.id]: e.target.value };
				} else return item;
			})
		);
	}
	function deleteExperience(e) {
		e.preventDefault();
		setExperienceInfo(
			experienceInfo.filter((item) => {
				return item.uuid !== e.target.parentElement.id;
			})
		);
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
					deleteEducation={deleteEducation}
					addExperience={addExperience}
					handleExperienceInfo={handleExperienceInfo}
					experienceData={experienceInfo}
					deleteExperience={deleteExperience}
				/>
				<CV
					personalData={personalInfo}
					experienceData={experienceInfo}
					educationData={educationInfo}
				></CV>
			</main>
			<footer></footer>
		</>
	);
}

export default App;
