"use client"
import { useEffect } from 'react';
import data from '../../../data/feature3.json';
import SectionTitle from '../Common/SectionTitle';
import loadBackgroudImages from '../Common/loadBackgroudImages';
import Image from 'next/image';

const Feature3 = () => {
    
    useEffect(() => {
        loadBackgroudImages();
      }, []);

    return (
        <div className="why-choose-us" data-background="/assets/images/resource/service-bg.png">
		<div className="container">
			<div className="row">
				<div className="col-lg-12">
					<div className="dexon-section-title text-center white padding-lg about-chosse-content">
                        <SectionTitle
                            Title="What are the Benefits You will <br> Get From Nexus?"
                            Content="Our team of professionals will work with you to develop a comprehensive plan that will help you achieve your fitness goals. We will provide you with the tools and support you need to succeed."
                        ></SectionTitle>
					</div>
				</div>
			</div>
			<div className="row">
            {data.map((item, i) => (
				<div key={i} className="col-lg-4 col-md-6">
					<div className="single-choose-us-box">
						<div className="choose-icon">
						<Image src={item.icon} alt="img" width={36} height={36}   />
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

export default Feature3;