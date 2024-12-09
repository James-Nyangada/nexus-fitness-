'use client'
import Image from "next/image";
import { send } from "emailjs-com";
import { useState } from "react";

const Contact = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",

	  });
	// Handle input changes for name, email, mobile, and service type
  	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
 	};
	 // Handle form submission
	 const handleSubmit = (e) => {
		e.preventDefault();
	
		// Send email via EmailJS
		send(
		  "service_uk9zttx", // Replace with your EmailJS service ID
		  "template_ssd6d6o", // Replace with your EmailJS template ID
		  {
			name: formData.name,
			email: formData.email,
			message: formData.message,
		  },
		  "LKYT2ZF4AGUC6nwTf" // Replace with your EmailJS user ID
		)
		  .then((response) => {
			alert("Booking successful!");
			console.log("SUCCESS!", response.status, response.text);
		  })
		  .catch((err) => {
			alert("Failed to send booking.");
			console.log("FAILED...", err);
		  });
	  };
    return (
        <div className="contact-us">
		<div className="container">
			<div className="row">
				<div className="col-lg-6">
					<div className="contact-thumb">
					<Image src="/assets/images/resource/main-img.png" alt="img" width={624} height={681}   />
					</div>
				</div>
				<div className="col-lg-6">
					<div className="dexon-section-title padding-lg1">
						<h1>Send Us a Message</h1>
						<p>Send Us Your Valuable Message & We will reply your Message soon!</p>
					</div>
					<div className="contact-form-box3">
						<form onSubmit={handleSubmit} id="dreamit-form">
							<div className="row">
								<div className="col-lg-12">
									<h6 className="form-title"> Name*</h6>
									<div className="form-box">
										<input type="text" name="name" onChange={handleInputChange} required placeholder="Enter Your Name" />
									</div>
								</div>
								<div className="col-lg-12"> 
									<h6 className="form-title"> Your E-Mail*</h6>
									<div className="form-box">
										<input type="email" name="email" onChange={handleInputChange} placeholder="Enter E-Mail" />
									</div>
								</div>
								<div className="col-lg-12">
									<div className="form-box">
										<h6 className="form-title"> Comment*</h6>
										<textarea name="message" onChange={handleInputChange} id="massage" cols="30" rows="10" placeholder="Write Comment"></textarea>
									</div>
								</div>
								<div className="col-lg-12">
									<div className="contact-form style-two">
										<button type="submit">  Submit Now </button>
									</div>
								</div>
							</div>
						</form>
						<div id="status"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
    );
};

export default Contact;