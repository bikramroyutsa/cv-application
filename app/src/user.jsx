/* eslint-disable react/prop-types */
import "./styles/user-styles.css";
export default function User({
	personalData,
	show,
	educationData,
	addEducation,
	handleEducationInfo,
}) {
	return (
		<section className="user">
			<form action="#" className="edit-cv">
				<div className="personal-details form-section">
					<h2 style={{ margin: 0 }}>Personal Details</h2>
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
							type="number"
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
				<div className="education form-section">
					<h2 style={{ margin: 0 }}>Education</h2>
					<button onClick={addEducation} className="add-education" type="">
						Add
					</button>
					{educationData.map((item) => {
						return (
							<div className="school-form" key={item.uuid} id={item.uuid}>
								<div className="form-input">
									<label htmlFor="name">School Name</label>
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
							</div>
						);
					})}
				</div>
				<div className="work form-section">
					<h2 style={{ margin: 0 }}>Work</h2>
				</div>
			</form>
		</section>
	);
}
