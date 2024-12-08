'use client'
import { useState } from "react";
import Image from "next/image";
import { send } from "emailjs-com";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";
const Contact2 = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		mobile: "",
		serviceType: "",
		message: "",
		duration: "",
		dates: [],
		time: "",
		price: 0,
	  });
	    // Handle input changes for name, email, mobile, and service type
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
    // Handle calendar date selection and toggle selected dates
	const handleDateChange = (date) => {
		const dateStr = date.toISOString().split("T")[0];
		let updatedDates = formData.dates.includes(dateStr)
		  ? formData.dates.filter((d) => d !== dateStr) // Remove date if already selected
		  : [...formData.dates, dateStr]; // Add date if not selected
	
		setFormData({ ...formData, dates: updatedDates, price: updatedDates.length * 500 });
	  };
	
	  // Handle time selection
	  const handleTimeChange = (e) => {
		setFormData({ ...formData, time: e.target.value });
	  };
   // Handle form submission
   const handleSubmit = (e) => {
    e.preventDefault();

    // Send email via EmailJS
    send(
      "service_5v18slk", // Replace with your EmailJS service ID
      "template_gqny3x8", // Replace with your EmailJS template ID
      {
        name: formData.name,
        email: formData.email,
        mobile: formData.mobile,
        serviceType: formData.serviceType,
		message: formData.message,
		duration: formData.duration,
		dates: formData.dates.join(", "),
        time: formData.time,
        price: formData.price,
      },
      "NF9QhbBzn9FS2u1_7" // Replace with your EmailJS user ID
    )
      .then((response) => {
        alert("Booking successful Please check Email you have booked with!");
        console.log("SUCCESS!", response.status, response.text);
		 // Send auto-reply email to the user
		 send(
			"service_5v18slk",       // Same Service ID
			"template_pu4otaw",  // Auto-reply template ID
			{
			  userName: formData.name,
			  userEmail: formData.email,
			  serviceType: formData.serviceType,
			  duration: formData.duration,
			  dates: formData.dates.join(", "),
        		time: formData.time,
        		price: formData.price,
			},
			"NF9QhbBzn9FS2u1_7"        // Same Public Key
		)
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
						<h1>Book Now</h1>
						<p>Do not Miss out on amazing offers</p>
					</div>
					<div className="contact-form-box3">
						<form onSubmit={handleSubmit} id="dreamit-form">
							<div className="row">
								<div className="col-lg-12">
									<h6 className="form-title"> Name*</h6>
									<div className="form-box">
										<input type="text" name="name" onChange={handleInputChange} placeholder="Enter Your Name" required/>
									</div>
								</div>
								<div className="col-lg-12"> 
									<h6 className="form-title"> Your E-Mail*</h6>
									<div className="form-box">
										<input type="email" name="email" onChange={handleInputChange} placeholder="Enter E-Mail" required/>
									</div>
								</div>
								<div className="col-lg-12"> 
									<h6 className="form-title"> Your Phone Number *</h6>
									<div className="form-box">
										<input type="tel" name="mobile" onChange={handleInputChange} placeholder="Enter Phone Number" required/>
									</div>
								</div>
								<div className="col-lg-12"> 
									<h6 className="form-title">Serivce*</h6>
									<div className="form-box">
										<select className="" name="serviceType" onChange={handleInputChange} required>
											<option value="">Select Service</option>
											<option value="Personal Training">Personal Training</option>
											<option value="Nutrition Coaching">Nutrition Coaching</option>
											<option value="Athletics Mentoring">Athletics Mentoring</option>
											<option value="Cardio">Cardio</option>
											<option value="Aerobics">Aerobics</option>
											<option value="Zhumba">Zhumba</option>
											<option value="Karate and Boxing">Karate and Boxing</option>
										</select>
									</div>
								</div>
								<div className="col-lg-12"> 
									<h6 className="form-title">Duration*</h6>
									<div className="form-box">
									<select className="" name="duration" onChange={handleInputChange}>
										<option value="">Select Duration</option>
										<option value="1 week">1 week</option>
										<option value="2 weeks">2 Weeks</option>
										<option value="3 weeks">3 Weeks</option>
										<option value="1 month">1 Month</option>
										<option value="2 months">2 Months</option>
										<option value="3 months">3 Months</option>
										<option value="6 months">6 Months</option>
										<option value="7 months">7 Months</option>
										</select>
									</div>
								</div>
								<div className="col-lg-12">
									<div className="form-box">
										<h6 className="form-title"> Special Request*</h6>
										<textarea name="message" onChange={handleInputChange} id="massage" cols="30" rows="10" placeholder="If any give us a special Request"></textarea>
									</div>
								</div>
								<h2 className="text-2xl font-bold mb-4">Select Specific Days and Time if Necessary</h2>
								<div className="col-lg-12">
								
									<label className="block font-bold">Select Dates:</label>
									<Calendar
									onClickDay={handleDateChange}
									tileDisabled={({ date }) => date < new Date().setHours(0, 0, 0, 0)}
									tileClassName={({ date }) =>
										date < new Date().setHours(0, 0, 0, 0) ? "past-date" : formData.dates.includes(date.toISOString().split("T")[0]) ? "highlight" : null
									}
									/>

        							<label className="block font-bold mt-4">Select Time (9 AM - 9 PM):</label>
									<input
									type="time"
									min="09:00"
									max="21:00"
									className="w-full p-2 border rounded"
									onChange={handleTimeChange}
									required
									/>

        							<p className="font-bold text-black text-2xl">Total Price: ${formData.price}</p>
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

export default Contact2;