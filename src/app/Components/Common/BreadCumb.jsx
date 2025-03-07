"use client"
import { useEffect } from "react";
import loadBackgroudImages from "./loadBackgroudImages";
import parse from 'html-react-parser';
import Image from "next/image";

const BreadCumb = ({bgImg,subTitle,title,content}) => {
    
    useEffect(() => {
        loadBackgroudImages();
      }, []);

    return (

      <div className="breatcam-section d-flex align-items-center" data-background={bgImg}>
      <div className="container">
        <div className="row dream-bg align-items-center">
          <div className="col-lg-12">
            <div className="breatcam-content text-center">
              <h4> <span> {subTitle} </span> </h4>
              <h1 className="text-white">{parse(title)}</h1>
              <p className="text-white font-[800]">{content}</p>
            </div>
          </div>
          <div className="inner-page-shape">
            <div className="inner-shape">
             <Image src="/assets/images/resource/shape-2.png" alt="img" width={46} height={46}   />
            </div>
            <div className="inner-shape2">
            <Image src="/assets/images/resource/shap-2.png" alt="img" width={40} height={40}   />
            </div>
            <div className="inner-shape3">
            <Image src="/assets/images/resource/icon4.png" alt="img" width={70} height={70}   />
            </div>
          </div>
        </div>
      </div>
    </div>

    );
};

export default BreadCumb;