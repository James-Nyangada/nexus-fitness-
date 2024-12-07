import Image from "next/image";

const Contact2 = () => {
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
						<form action="https://formspree.io/f/myyleorq" method="POST" id="dreamit-form">
							<div className="row">
								<div className="col-lg-12">
									<h6 className="form-title"> Name*</h6>
									<div className="form-box">
										<input type="text" placeholder="Enter Your Name" required/>
									</div>
								</div>
								<div className="col-lg-12"> 
									<h6 className="form-title"> Your E-Mail*</h6>
									<div className="form-box">
										<input type="text" placeholder="Enter E-Mail" required/>
									</div>
								</div>
								<div className="col-lg-12"> 
									<h6 className="form-title"> Your Phone Number *</h6>
									<div className="form-box">
										<input type="tel" placeholder="Enter Phone Number" required/>
									</div>
								</div>
								<div className="col-lg-12"> 
									<h6 className="form-title">Serivce*</h6>
									<div className="form-box">
										<select className="" required>
											<option>Personal Training</option>
											<option>Nutrition Coaching</option>
											<option>Athletics Mentoring</option>
											<option>Cardio</option>
											<option>Aerobics</option>
											<option>Zhumba</option>
											<option>Karate and Boxing</option>
										</select>
									</div>
								</div>
								<div className="col-lg-12"> 
									<h6 className="form-title">Duration*</h6>
									<div className="form-box">
									<select className="">
											<option>1 week</option>
											<option>2 Weeks</option>
											<option>3 Weeks</option>
											<option>1 Month</option>
											<option>2 Months</option>
											<option>3 Months</option>
											<option>6 Months</option>
											<option>7 Months</option>
										</select>
									</div>
								</div>
								<div className="col-lg-12">
									<div className="form-box">
										<h6 className="form-title"> Special Request*</h6>
										<textarea name="massage" id="massage" cols="30" rows="10" placeholder="If any give us a special Request"></textarea>
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

export default Contact2;