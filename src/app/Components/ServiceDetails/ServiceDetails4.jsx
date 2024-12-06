import Image from "next/image";
import Link from "next/link";

const ServiceDetails4 = () => {
    return (
        <div className="service-detials-area">
		<div className="container">
			<div className="row">
				<div className="col-lg-8 col-md-12">
					<div className="row">
						<div className="col-lg-12 col-sm-12">
							<div className="dexon-service-details-box">
								<div className="dexon-service-thumb">
								<Image src="/assets/images/resource/cardio.webp" alt="img" width={856} height={500}   />
								</div>
								<div className="service-details-content">
									<div className="service-page-title">
										<h1> Best Cardio Services</h1>
									</div>
									<div className="serivce-details-desc">
										<p>Our cardio sessions combine variety and intensity to improve cardiovascular health. From treadmills to HIIT, we design programs that keep you motivated and maximize your results.</p>
										
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-6 col-sm-6">
							<div className="service-details-box">
								<div className="service-details-icon">
								<Image src="/assets/images/resource/help-desk.png" alt="img" width={30} height={28}   />
								</div>
								<div className="service-details-title">
									<h4> Proper Services </h4>
								</div>
								<div className="services-detials-desc">
									<p>Custom Cardio Plans: Tailored to your fitness level and goals..</p>
									<p>Diverse Training: Choose from HIIT, running, cycling, and more.</p>
								</div>
							</div>
						</div>
						<div className="col-lg-6 col-sm-6">
							<div className="service-details-box">
								<div className="service-details-icon">
								<Image src="/assets/images/resource/support.png" alt="img" width={30} height={30}   />
								</div>
								<div className="service-details-title">
									<h4> Work Steps </h4>
								</div>
								<div className="services-detials-desc">
									<p>Assessment: Determine your cardiovascular health baseline.</p>
									<p>Training: Engage in dynamic and effective cardio routines.</p>
									<p>Monitoring: Track endurance and performance improvements.</p>
								</div>
							</div>
						</div>
						<div className="col-lg-6 col-sm-6">
							<div className="service-details-box">
								<div className="service-details-icon">
								<Image src="/assets/images/resource/graph.png" alt="img" width={34} height={30}   />
								</div>
								<div className="service-details-title">
									<h4>Maintain Trends </h4>
								</div>
								<div className="services-detials-desc">
									<p>Stay ahead with innovations like interval training and heart rate monitoring to optimize your cardio workouts.</p>
								</div>
							</div>
						</div>
						<div className="col-lg-6 col-sm-6">
							<div className="service-details-box">
								<div className="service-details-icon">
								<Image src="/assets/images/resource/24-7.png" alt="img" width={32} height={32}   />
								</div>
								<div className="service-details-title">
									<h4> 24/7 Services </h4>
								</div>
								<div className="services-detials-desc">
									<p>Get access to at-home cardio plans and virtual guidance whenever needed.</p>
								</div>
							</div>
						</div>
						<div className="col-lg-12">
							<div className="service-details-content">
								<div className="service-page-title2">
									<h1>Research Trend Market</h1>
								</div>
								<div className="serivce-details-desc">
									<p className="pb-4">We use advanced techniques like VO2 max tracking to ensure your cardio sessions are effective and result-driven.</p>
								</div>
							</div>
						</div>
						<div className="col-lg-5 col-md-6">
							<div className="service-details-thumb">
							<Image src="/assets/images/resource/benefits.png" alt="img" width={300} height={250}   />
							</div>
						</div>
						<div className="col-lg-7 col-md-6">
							<div className="service-details-icon-box">
								<div className="service-page-title2">
									<h1>What You Benifit</h1>
								</div>
								<div className="widget-service-details-icon">
									<p><i className="bi bi-check-lg"></i> <span>Improved Heart Health: Boost cardiovascular endurance.
										</span></p>
									<p><i className="bi bi-check-lg"></i> <span> Calorie Burn: Achieve your weight loss goals efficiently.</span></p>
									<p><i className="bi bi-check-lg"></i> <span> Endurance Building: Enhance stamina for daily activities.
										</span></p>
									<p><i className="bi bi-check-lg"></i> <span> Stress Reduction: Enjoy a healthier, happier you.</span></p>
								</div>
							</div>

						</div>
						<div className="col-lg-12">
							<div className="service-details-content pt-4">
								<div className="service-page-title2">
									<h1>Working Process</h1>
								</div>
								<div className="serivce-details-desc">
									<p className="pb-4">Prospective intellectual capital. Enthusiastically create strategic
										communities without reliable Holisticly embrace professional technologies create
										professional </p>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-sm-6">
							<div className="service-work-process-box">
								<div className="service-work-process-number">
									<span>01</span>
								</div>
								<div className="service-work-process-title">
									<h4> Plan </h4>
								</div>
								<div className="service-work-process-desc">
									<p>Develop a structured cardio plan tailored for you.</p>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-sm-6">
							<div className="service-work-process-box">
								<div className="service-work-process-number">
									<span>02</span>
								</div>
								<div className="service-work-process-title">
									<h4> Work </h4>
								</div>
								<div className="service-work-process-desc">
									<p>Perform workouts under guidance for optimal results.</p>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-sm-6">
							<div className="service-work-process-box">
								<div className="service-work-process-number">
									<span>03</span>
								</div>
								<div className="service-work-process-title">
									<h4> Result</h4>
								</div>
								<div className="service-work-process-desc">
									<p>Achieve peak cardiovascular health and endurance.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-lg-4 col-md-12">
					{/* <div className="widget_search mt-5 mt-lg-0">
						<form action="#" method="get">
							<input type="text" name="s" value="" placeholder="Search Here" title="Search for:" />
							<button type="submit" className="icons">
								<i className="fa fa-search"></i>
							</button>
						</form>
					</div> */}
					<div className="widget-categories-box">
						<div className="categories-title">
							<h4> Services </h4>
						</div>
						<div className="widget-categories-menu">
							<ul>
								<li className="active"><a href="/service/personal-training"> Personal Training </a></li>
								<li><a href="/service/nutrition-coaching"> Nutrition Coaching </a></li>
								<li><a href="/service/aerobics"> Aerobics </a></li>
								<li><a href="/service/athletics-mentoring"> Athletics Training</a></li>
								<li><a href="/service/karate-and-boxing"> Karate and Boxing </a></li>
							</ul>
						</div>
					</div>
					<div className="widget-categories-thumb">
						<div className="widget-categories-content text-center">
							<div className="logo-thumb">
								<Link href="/">
								<Image src="/assets/images/logo2.png" alt="img" width={124} height={26}   />
									 </Link>
							</div>
							<div className="widget-title2">
								<h3>Need Service?</h3>
							</div>
							<div className="widget-button">
								<Link href="/contact"> <i className="bi bi-envelope"></i> Book Now </Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
    );
};

export default ServiceDetails4;