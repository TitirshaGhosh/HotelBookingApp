import React from "react"
import { Link } from "react-router-dom"

const Admin = () => {
	return (
		<section className="container mt-5">
			<h2>Welcome to Admin Panel</h2>
			<hr />
			<div style={{ display: 'flex', justifyContent: 'center',gap: '200px' }}>
			<Link to={"/existing-rooms"} className="btn btn-hotel btn-bg" >Manage Rooms</Link> 
			<Link to={"/existing-bookings"} className="btn btn-hotel btn-bg">Manage Bookings</Link>
			</div>
		 
		</section>
	)
}

export default Admin