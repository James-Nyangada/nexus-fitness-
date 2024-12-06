import Image from "next/image";
import Link from "next/link";

const ServiceDetails2 = () => {
    return (
        <div className="service-detials-area">
		<div className="container">
			<div className="row">
				<div className="col-lg-8 col-md-12">
					<div className="row">
						<div className="col-lg-12 col-sm-12">
							<div className="dexon-service-details-box">
								<div className="dexon-service-thumb">
								<Image src="/assets/images/resource/aerobics.webp" alt="img" width={856} height={500}   />
								</div>
								<div className="service-details-content">
									<div className="service-page-title">
										<h1> Best Aerobics Services</h1>
									</div>
									<div className="serivce-details-desc">
										<p>Aerobics is a fantastic way to improve cardiovascular health, burn calories, and reduce stress. Our classes are tailored for all fitness levels, incorporating rhythmic movements, music, and high-energy routines.</p>
										
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
									<p>Group Classes: Energizing sessions for all fitness levels.</p>
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
									<p>Join Classes: Sign up for sessions that match your schedule and goals.</p>
									<p>Engage & Move: Enjoy fun, guided aerobic exercises with expert instructors.</p>
									<p>Track Progress: Monitor your stamina and endurance improvements.</p>
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
									<p>Our aerobics routines incorporate popular trends like dance aerobics, step workouts, and high-intensity intervals to keep things fresh and exciting.</p>
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
									<p>Access pre-recorded sessions and training tips anytime, so you never miss a workout.</p>
								</div>
							</div>
						</div>
						<div className="col-lg-12">
							<div className="service-details-content">
								<div className="service-page-title2">
									<h1>Research Trend Market</h1>
								</div>
								<div className="serivce-details-desc">
									<p className="pb-4">We continuously update our programs by studying fitness trends, ensuring our aerobics classes deliver maximum fun and results.</p>
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
									<p><i className="bi bi-check-lg"></i> <span>Cardiovascular Health: Strengthen your heart and lungs.
										</span></p>
									<p><i className="bi bi-check-lg"></i> <span> Stress Relief: Feel energized and relaxed after every session.</span></p>
									<p><i className="bi bi-check-lg"></i> <span> Community Support: Work out with a group of like-minded individuals.
										</span></p>
									<p><i className="bi bi-check-lg"></i> <span> Increased Stamina: Build endurance with consistent training.</span></p>
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
									<h4> Plan Sessions </h4>
								</div>
								<div className="service-work-process-desc">
									<p>Join a program that matches your fitness goals and schedule.</p>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-sm-6">
							<div className="service-work-process-box">
								<div className="service-work-process-number">
									<span>02</span>
								</div>
								<div className="service-work-process-title">
									<h4> Training and Coaching </h4>
								</div>
								<div className="service-work-process-desc">
									<p>Experience engaging sessions led by experienced instructors.</p>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-sm-6">
							<div className="service-work-process-box">
								<div className="service-work-process-number">
									<span>03</span>
								</div>
								<div className="service-work-process-title">
									<h4> Deliver </h4>
								</div>
								<div className="service-work-process-desc">
									<p>Enjoy improved health, energy, and a love for movement.</p>
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

export default ServiceDetails2;