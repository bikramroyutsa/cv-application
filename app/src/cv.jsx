/* eslint-disable react/prop-types */
import "./styles/cv-styles.css";
export default function CV({ personalData, educationData }) {
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
		</div>
	);
}
