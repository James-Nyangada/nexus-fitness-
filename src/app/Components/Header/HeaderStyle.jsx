"use client";
import { useState } from "react";
import Nav from "./Nav";
import Link from "next/link";
import Image from "next/image";

export default function HeaderStyle({ variant }) {
  const [mobileToggle, setMobileToggle] = useState(false);

  return (
    <header
      className={`cs_site_header header_style_2 cs_style_1 ${
        variant ? variant : ""
      } cs_sticky_header cs_site_header_full_width ${
        mobileToggle ? "cs_mobile_toggle_active" : ""
      }`}
    >
      <div className="cs_main_header">
        <div className="container-fluid">
          <div className="cs_main_header_in">
            <div className="cs_main_header_left">
              <Link href="/" className="cs_site_branding">
                <Image src="/assets/images/3.png" alt="Logo" width={160} height={46} />
              </Link>
            </div>
            <div className="cs_main_header_center">
              <div className="cs_nav cs_primary_font fw-medium">
                <span
                  className={
                    mobileToggle
                      ? "cs-munu_toggle cs_teggle_active"
                      : "cs-munu_toggle"
                  }
                  onClick={() => setMobileToggle(!mobileToggle)}
                >
                  <span></span>
                </span>
                <Nav setMobileToggle={setMobileToggle} />
              </div>
            </div>
            <div className="cs_main_header_right">
              <div className="header-button">
                <Link href="mailto:thenexusfit@gmail.com">
                  <i className="bi bi-envelope"></i> thenexusfit@gmail.com
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
