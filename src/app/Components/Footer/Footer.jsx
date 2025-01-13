"use client"
import { useEffect } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {

      const UsefulLinks = [
        {title:'About Company', link:'/about'},
        {title:'Services', link:'/service'},
        /* {title:'Team Member', link:'/team'}, */
        {title:'Our Facilites', link:'/facilities'},
        {title:'Contact Us', link:'/contact'}
      ];  

      const AdressContent = {
        address:'Bypass Kamakis',
        email:'thenexusfit@gmail.com',
        Number:'0797348630'
      }

      const LogoContent = {
        img1:'/assets/images/logo2.png',
        Content:'Welcome to your fitness home'
      }
      const LogoContent1 = {
        img1:'/assets/images/image2.png',
        Content:'Welcome to your fitness home'
      }

      useEffect(() => {
        loadBackgroudImages();
      }, []);

    return (
        <div className="footer-section" data-background="/assets/images/resource/footer-bg.png"> 
		<div className="container">
			<div className="row">
				<div className="col-lg-3 col-md-6">
					<div className="widget widgets-company-info">
						<div className="dreamhub-logo">
						<Link className="logo_thumb" href="/" title="dreamhub">
						<Image src={LogoContent.img1} alt="img" width={124} height={26}   />
						</Link>
					</div>
						<div className="company-info-desc">
							<p> {LogoContent.Content}  </p>
						</div>
						<div className="follow-company-icon">
							<a href="https://web.facebook.com/profile.php?id=61570228142994"><i className="bi bi-facebook"></i> </a>
							<a href="https://www.instagram.com/thenexusfit/"> <i className="bi bi-instagram"></i></a>
							<a href="https://www.tiktok.com/@thenexusfit"> <i className="bi bi-tiktok"></i> </a>
							
						</div>
					</div>					
				</div>
				<div className="col-lg-3 col-md-6 pl-40">
					<div className="widget widget-nav-menu">
						<h4 className="widget-title">Informations</h4>
						<div className="menu-quick-link-content">
							<ul className="footer-menu">
                            {UsefulLinks.map((item, i) => (
								<li key={i}><Link href={item.link}> {item.title} </Link></li>
                            ))}
							</ul>
						</div>
					</div>
				</div>	
				<div className="col-lg-3 col-md-6">
					<div className="widget widget-nav-menu">
						<h4 className="widget-title"> Contact Us </h4>
						<div className="menu-quick-info-content">
							<ul className="footer-info">
								<li> {AdressContent.address} </li>
								<li><span className="border-undr"> {AdressContent.email} </span></li>
								<li> {AdressContent.Number}</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="col-lg-3 col-md-6 pr-0">
					<div className="menu-quick-link-contact">
						
						<h4 className="widget-title"> Newsletter </h4>
						<div className="subscribe-widget">
							<form action="#" method="get">
								<input type="text" className="src-input-box" placeholder="Search Here" name="s" value=""
									title="src-input-box" />
									<span className="input-icn"><i className="bi bi-send-fill"></i></span>
							</form>
						</div>
						<div className="widget-desc">
							<p>Subscribe to our Newsletter to get daily fitness updates and tips</p>
						</div>
					</div>
				</div>
			</div>
			<div className="row footer-bg">
				<div className="col-lg-6 col-md-6">
					<div className="footer-bottom-content">
						<div className="footer-bottom-content-copy">
							<p>All Rights Reserved 2024| Website designed by <Link className="link-one" href={"https://estetica-agency.vercel.app/"}>Estetica Agency</Link>| Powered by <Link href="mailto:andysfitnessexercises@gmail.com" className="link-one" target="_blank">Andy&apos;s fitness exercise <Image src={LogoContent1.img1} alt="img" width={60} height={60}   /></Link>  </p>
						</div>
					</div>
				</div>
				<div className="col-lg-6 col-md-6">
					<div className="footer-bottom-menu text-right">
						<ul>
							<li><Link href="/about">About</Link></li>
							<li><Link href="/service">Services</Link></li>
							<li><Link href="/contact">Contact</Link></li>
							<li><Link href="/faq">Faq</Link></li>
							<li><Link href="/facilites">Our Facilites</Link></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>	
    );
};

export default Footer;