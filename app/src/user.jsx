/* eslint-disable react/prop-types */
import "./styles/user-styles.css";
// import Icon from "@mdi/react";
// import { mdiArrowDownDropCircleOutline } from "@mdi/js";
function onToggle(e) {
	e.preventDefault();
	let current = e.target.parentElement;
	let nextSibling = current.nextElementSibling;
	const siblings = [];
	while (nextSibling) {
		siblings.push(nextSibling);
		nextSibling = nextSibling.nextElementSibling;
	}
	siblings.forEach((item) => {
		if (item.style.display !== "none") {
			return (item.style.display = "none");
		}
		return (item.style.display = "");
	});
}
export default function User({
	personalData,
	show,
	educationData,
	addEducation,
	handleEducationInfo,
	deleteEducation,
	addExperience,
	experienceData,
	handleExperienceInfo,
	deleteExperience,
}) {
	return (
		<section className="user">
			<form action="#" className="edit-cv">
				<div className="personal-details-user form-section">
					<div className="toggle-div">
						<h2 style={{ margin: 0 }}>Personal Details</h2>
						<button className="btn-toggle" onClick={onToggle}></button>
					</div>

					<div className="form-input">
						<label htmlFor="name">Name</label>
						<input
							type="text"
							placeholder="Name"
							id="name"
							value={personalData.name}
							onChange={show}
						/>
					</div>
					<div className="form-input">
						<label htmlFor="email">Email</label>
						<input
							type="email"
							value={personalData.email}
							id="email"
							placeholder="Email"
							onChange={show}
						/>
					</div>

					<div className="form-input">
						<label htmlFor="phone">Phone Number</label>
						<input
							type="text"
							value={personalData.phone}
							id="phone"
							placeholder="Phone number"
							onChange={show}
						/>
					</div>

					<div className="form-input">
						<label htmlFor="address">Address</label>
						<input
							type="text"
							value={personalData.address}
							id="address"
							placeholder="Address"
							onChange={show}
						/>
					</div>
				</div>
				<div className="education-user form-section">
					<h2 style={{ margin: 0 }}>Education</h2>
					<button onClick={addEducation} className="add-education" type="">
						Add
					</button>
					{educationData.map((item) => {
						return (
							<div className="school-form" key={item.uuid} id={item.uuid}>
								<div className="toggle-div">
									<h3>{item.name}</h3>
									<button className="btn-toggle" onClick={onToggle}></button>
								</div>
								<div className="form-input">
									<label htmlFor="name">College/ University</label>
									<input
										onChange={handleEducationInfo}
										value={item.name}
										type="text"
										id="name"
									/>
								</div>
								<div className="form-input">
									<label htmlFor="degree">Degree</label>
									<input
										onChange={handleEducationInfo}
										value={item.degree}
										type="text"
										id="degree"
									/>
								</div>
								<div className="form-input">
									<label htmlFor="start">Start</label>
									<input
										onChange={handleEducationInfo}
										value={item.start}
										type="text"
										id="start"
									/>
								</div>
								<div className="form-input">
									<label htmlFor="end">End date</label>
									<input
										onChange={handleEducationInfo}
										value={item.end}
										type="text"
										id="end"
									/>
								</div>
								<button onClick={deleteEducation} className="delete-education">
									Delete
								</button>
							</div>
						);
					})}
				</div>
				<div className="experience-user form-section">
					<h2 style={{ margin: 0 }}>Experience</h2>
					<button onClick={addExperience} className="add-experience" type="">
						Add
					</button>
					{experienceData.map((item) => {
						return (
							<div className="experience-form" key={item.uuid} id={item.uuid}>
								<div className="toggle-div">
									<h3>{item.name}</h3>
									<button className="btn-toggle" onClick={onToggle}></button>
								</div>
								<div className="form-input">
									<label htmlFor="name">Company Name</label>
									<input
										onChange={handleExperienceInfo}
										value={item.name}
										type="text"
										id="name"
									/>
								</div>
								<div className="form-input">
									<label htmlFor="position">Position</label>
									<input
										onChange={handleExperienceInfo}
										value={item.position}
										type="text"
										id="position"
									/>
								</div>
								<div className="form-input">
									<label htmlFor="start">Start</label>
									<input
										onChange={handleExperienceInfo}
										value={item.start}
										type="text"
										id="start"
									/>
								</div>
								<div className="form-input">
									<label htmlFor="end">End date</label>
									<input
										onChange={handleExperienceInfo}
										value={item.end}
										type="text"
										id="end"
									/>
								</div>
								<div className="form-input">
									<label htmlFor="description">Description</label>
									<textarea
										name="description"
										id="description"
										cols="30"
										rows="10"
										onChange={handleExperienceInfo}
										value={item.description}
									></textarea>
								</div>
								<button
									onClick={deleteExperience}
									className="delete-Experience"
								>
									Delete
								</button>
							</div>
						);
					})}
				</div>
			</form>
		</section>
	);
}
