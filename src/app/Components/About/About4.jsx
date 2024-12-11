"use client"
import { useEffect } from 'react';
import counter from '../../../data/counter.json';
import data from '../../../data/services2.json';
import SectionTitle from '../Common/SectionTitle';
import loadBackgroudImages from '../Common/loadBackgroudImages';
import Link from 'next/link';
import Image from 'next/image';

const About4 = () => {

    useEffect(() => {
        loadBackgroudImages();
      }, []);

    return (
        <div className="about-section style-three" data-background="/assets/images/resource/about-bg3.jpg">
		<div className="container">
			<div className="row align-items-center " style={{ marginBottom: '20px' }}>
				<div className="col-lg-6 col-md-12">
					<div className="about-left-thumb">
					<Image src="/assets/images/resource/personal.webp" alt="img" width={580} height={493}   />
					</div>
				</div>
				<div className="col-lg-6">
					<div className="dexon-section-title">
						<h1>Personal Training</h1>
						
						<p>Get one-on-one support with customized workout plans that adapt as you progress. Our personal training sessions are focused on maximizing results while keeping you motivated, whether you’re at the gym or working out from home. <br/> <span>
						Enthusiastically negotiate highly efficient manufactured products whereas distributed services. Conveniently impact e-business
						</span></p>
					</div>
					<div className="about-button">
						<Link className="dexon-button" href="/service/personal-training">Start Your Training Journey Today <i className="bi bi-arrow-right-short"></i> </Link>
					</div>
				</div>
			</div>
			<div className="row align-items-center" style={{ marginBottom: '20px' }}>
				<div className="col-lg-6 col-md-12">
					<div className="about-left-thumb">
					<Image src="/assets/images/resource/nutrition.webp" alt="img" width={580} height={493}   />
					</div>
				</div>
				<div className="col-lg-6">
					<div className="dexon-section-title">
						<h1>Nutrition Coaching</h1>
						
						<p>Fuel your body right with our personalized nutrition coaching. We&apos;ll work together to create a nutrition plan that fits your lifestyle and helps you achieve your goals, whether thats weight loss, muscle gain, or simply feeling healthier<br/> <span>
						Enthusiastically negotiate highly efficient manufactured products whereas distributed services. Conveniently impact e-business
						</span></p>
					</div>
					<div className="about-button">
						<Link className="dexon-button" href="/service/nutrition-coaching">Get Your Nutrition Plan<i className="bi bi-arrow-right-short"></i> </Link>
					</div>
				</div>
			</div>
			<div className="row align-items-center " style={{ marginBottom: '20px' }}>
				<div className="col-lg-6 col-md-12">
					<div className="about-left-thumb">
					<Image src="/assets/images/resource/aerobics.webp" alt="img" width={580} height={493}   />
					</div>
				</div>
				<div className="col-lg-6" >
					<div className="dexon-section-title">
						<h1>Aerobics</h1>
						{/* Text for aerobics */}
						<p>Aerobics is a fantastic way to improve cardiovascular health, burn calories, and reduce stress. Our classes are tailored for all fitness levels, incorporating rhythmic movements, music, and high-energy routines. <br/> <span>
						Enthusiastically negotiate highly efficient manufactured products whereas distributed services. Conveniently impact e-business
						</span></p>
					</div>
					<div className="about-button">
						<Link className="dexon-button" href="/service/aerobics">Learn More About Aerobics <i className="bi bi-arrow-right-short"></i> </Link>
					</div>
				</div>
			</div>
			<div className="row align-items-center " style={{ marginBottom: '20px' }}>
				<div className="col-lg-6 col-md-12">
					<div className="about-left-thumb">
					<Image src="/assets/images/resource/athletics.webp" alt="img" width={580} height={493}   />
					</div>
				</div>
				<div className="col-lg-6" >
					<div className="dexon-section-title">
						<h1>Atheltic Mentoring</h1>
						
						<p>Our athletic mentoring focuses on skill enhancement, mental fortitude, and physical development. We provide tailored guidance for sports enthusiasts, ensuring they excel in their respective disciplines.
						</p>
					</div>
					<div className="about-button">
						<Link className="dexon-button" href="/service/athletics-mentoring">Learn More About Athletic Mentoring <i className="bi bi-arrow-right-short"></i> </Link>
					</div>
				</div>
			</div>
			<div className="row align-items-center " style={{ marginBottom: '20px' }}>
				<div className="col-lg-6 col-md-12">
					<div className="about-left-thumb">
					<Image src="/assets/images/resource/cardio.webp" alt="img" width={580} height={493}   />
					</div>
				</div>
				<div className="col-lg-6" >
					<div className="dexon-section-title">
						<h1>Cardio</h1>
						
						<p>Our cardio sessions combine variety and intensity to improve cardiovascular health. From treadmills to HIIT, we design programs that keep you motivated and maximize your results.</p>
					</div>
					<div className="about-button">
						<Link className="dexon-button" href="/service/cardio">Learn More About Cardio  <i className="bi bi-arrow-right-short"></i> </Link>
					</div>
				</div>
			</div>
			<div className="row align-items-center " style={{ marginBottom: '20px' }}>
				<div className="col-lg-6 col-md-12">
					<div className="about-left-thumb">
					<Image src="/assets/images/resource/about7.webp" alt="img" width={580} height={493}   />
					</div>
				</div>
				<div className="col-lg-6" >
					<div className="dexon-section-title">
						<h1>Karate and Boxing</h1>
						
						<p>Our Karate and Boxing programs are a blend of physical fitness, skill-building, and mental discipline. Learn self-defense while improving agility, strength, and focus.</p>
					</div>
					<div className="about-button">
						<Link className="dexon-button" href="/service/karate-and-boxing">Learn More About Karate and Boxing <i className="bi bi-arrow-right-short"></i> </Link>
					</div>
				</div>
			</div>
			
			<div className="row counter-bg">
            {counter.map((item, i) => (
				<div key={i} className="col-lg-3">
					<div className="single-counter-box">
						<div className="counter-title">
							<h1 className="counter">{item.number}</h1>
							<h1>{item.symbol}</h1>
						</div>
						<div className="counter-text">
							<p>{item.desc}</p>
						</div>
					</div>
				</div>
                ))}

			</div>
			<div className="row">
				<div className="col-lg-12">
					<div className="dexon-section-title text-center padding-lg">
                        <SectionTitle
                            Title="Summary of what we do"
                            Content="Distinctively supply exceptional services after uniquely integrate alternative markets rather emerging initiatives."
                        ></SectionTitle>
					</div>
				</div>
                {data.map((item, i) => (
				<div key={i} className="col-lg-4 col-md-6">
					<div className="single-choose-us-box">
						<div className="choose-icon">
						<Image src={item.icon} alt="img" width={30} height={28}   />
						</div>
						<div className="choose-content">
							<h3> {item.title} </h3>
							<p> {item.desc} </p>
						</div>
					</div>
				</div>
                ))}
				
			</div>
		</div>
	</div>
    );
};

export default About4;