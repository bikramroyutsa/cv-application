import "./cv-styles.css";
export default function CV({ data }) {
	return (
		<div className="actual-cv">
			<div className="cv-header">
				<h1 className="cv-name">{data.name}</h1>
				<div className="cv-contact-details">
					<div className="cv-email">{data.email}</div>
					<div className="cv-phone">{data.phone}</div>
					<div className="cv-address">{data.address}</div>
				</div>
			</div>
		</div>
	);
}
