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
			<div className="cv-content">
				<div className="cv-education">
					<h2 className="education-title">Eduation</h2>
					{educationData.map((school) => {
						return (
							<div className="school" key={school.uuid}>
								<div className="school-date">
									<div>
										{school.start} - {school.end}
									</div>
								</div>
								<div className="school-degree">
									<div className="cv-school-name">{school.name}</div>
									<div className="cv-degree">{school.degree}</div>
								</div>
							</div>
						);
					})}
				</div>
				<div className="cv-experience">
					<h2 className="experience-title">Experience</h2>
					{experienceData.map((item) => {
						return (
							<div className="experience" key={item.uuid}>
								<div className="experience-date">
									<div>
										{item.start} - {item.end}
									</div>
									<div></div>
								</div>
								<div className="experience-details">
									<div className="experience-company">{item.name}</div>
									<div className="experience-position">{item.position}</div>
									<div className="experience-description">
										{item.description}
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}
