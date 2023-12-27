/* eslint-disable react/prop-types */
import "./styles/cv-styles.css";
export default function CV({ personalData, educationData, experienceData }) {
	return (
		<div className="actual-cv">
			<div className="cv-header">
				<h1 className="cv-name">{personalData.name}</h1>
				<div className="cv-contact-details">
					<div className="cv-email">{personalData.email}</div>
					<div className="cv-phone">{personalData.phone}</div>
					<div className="cv-address">{personalData.address}</div>
				</div>
			</div>
			<div className="cv-education">
				<h2>Eduation</h2>
				{educationData.map((school) => {
					return (
						<div className="school" key={school.uuid}>
							<div>{school.name}</div>
							<div>{school.degree}</div>
							<div>Start: {school.start}</div>
							<div>End: {school.end}</div>
						</div>
					);
				})}
			</div>
			<div className="cv-experience">
				<h2>experience</h2>
				{experienceData.map((item) => {
					return (
						<div key={item.uuid}>
							<div>{item.name}</div>
							<div>{item.position}</div>
							<div>Start: {item.start}</div>
							<div>End: {item.end}</div>
							<div>{item.description}</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
