import Image from "next/image";
import Link from "next/link";

const ServiceDetails = () => {
    return (
        <div className="service-detials-area">
		<div className="container">
			<div className="row">
				<div className="col-lg-8 col-md-12">
					<div className="row">
						<div className="col-lg-12 col-sm-12">
							<div className="dexon-service-details-box">
								<div className="dexon-service-thumb">
								<Image src="/assets/images/resource/personal.webp" alt="img" width={856} height={500}   />
								</div>
								<div className="service-details-content">
									<div className="service-page-title">
										<h1> Best Personal Training Services</h1>
									</div>
									<div className="serivce-details-desc">
										<p>Our personal training services are rooted in over a decade of experience. We combine science-backed techniques, individualized care, and motivational coaching to ensure you achieve results efficiently and safely. With us, its not just about workouts — its about building a healthier, stronger, and more confident you.</p>
										
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
									<p>One-on-One Sessions: Individualized focus for tailored results.</p>
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
									<p>Assessment: Understanding your current fitness level and goals.</p>
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
									<p>We integrate cutting-edge fitness trends like functional training, progressive overload techniques, and mobility work, ensuring you stay ahead in achieving your health goals.</p>
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
									<p>Enjoy access to fitness support around the clock with virtual check-ins, recovery tips, and lifestyle guidance, keeping you motivated at all times.</p>
								</div>
							</div>
						</div>
						<div className="col-lg-12">
							<div className="service-details-content">
								<div className="service-page-title2">
									<h1>Research Trend Market</h1>
								</div>
								<div className="serivce-details-desc">
									<p className="pb-4">We continually refine our methods by studying modern fitness methodologies. Whether its understanding the biomechanics of movement or the latest in recovery strategies, our services evolve with science.</p>
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
									<p><i className="bi bi-check-lg"></i> <span>Professional Expertise: Over 10 years of experience in fitness coaching.
										</span></p>
									<p><i className="bi bi-check-lg"></i> <span> Customized Plans: No cookie-cutter routines, only what works for you. </span></p>
									<p><i className="bi bi-check-lg"></i> <span> Turbo Boosting
										</span></p>
									<p><i className="bi bi-check-lg"></i> <span> Motivational Coaching: Consistent support to keep you on track. </span></p>
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
									<p>We start by learning about your goals and designing a structured fitness plan tailored for your success.</p>
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
									<p>Through detailed guidance, you&lsquo;ll build strength, endurance, and confidence.</p>
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
									<p>Achieve your desired results and transition into self-sustained fitness with our expertise.</p>
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
								<Image src="/assets/images/3.png" alt="img" width={124} height={26}   />
									 </Link>
							</div>
							<div className="widget-title2">
								<h3>Need Service?</h3>
							</div>
							<div className="widget-button">
								<Link href="/booking"> <i className="bi bi-envelope"></i> Book Now </Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
    );
};

export default ServiceDetails;