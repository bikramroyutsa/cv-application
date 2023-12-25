// import { useState } from "react";

export default function User({ data, show }) {
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
							value={data.name}
							onChange={show}
						/>
					</div>
					<div className="form-input">
						<label htmlFor="email">Email</label>
						<input
							type="email"
							value={data.email}
							id="email"
							placeholder="Email"
							onChange={show}
						/>
					</div>

					<div className="form-input">
						<label htmlFor="phone">Phone Number</label>
						<input
							type="number"
							value={data.phone}
							id="phone"
							placeholder="Phone number"
							onChange={show}
						/>
					</div>

					<div className="form-input">
						<label htmlFor="address">Address</label>
						<input
							type="text"
							value={data.address}
							id="address"
							placeholder="Address"
							onChange={show}
						/>
					</div>
				</div>
				<div className="education form-section">
					<h2 style={{ margin: 0 }}>Education</h2>
				</div>
				<div className="education form-section"></div>
				<div className="work form-section">
					<h2 style={{ margin: 0 }}>Work</h2>
				</div>
			</form>
		</section>
	);
}
