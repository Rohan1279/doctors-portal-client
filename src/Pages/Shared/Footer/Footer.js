import React from "react";
import { Link } from "react-router-dom";
import background from "../../../assets/images/footer.png";
const Footer = () => {
  return (
    <footer
      className="p-10 neutral-content"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
      }}
    >
      <div className="footer ">
        <div>
          <span className="footer-title">Services</span>
          <Link href="/" className="link link-hover">
            Branding
          </Link>
          <Link href="/" className="link link-hover">
            Design
          </Link>
          <Link href="/" className="link link-hover">
            Marketing
          </Link>
          <Link href="/" className="link link-hover">
            Advertisement
          </Link>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <Link href="/" className="link link-hover">
            About us
          </Link>
          <Link href="/" className="link link-hover">
            Contact
          </Link>
          <Link href="/" className="link link-hover">
            Jobs
          </Link>
          <Link href="/" className="link link-hover">
            Press kit
          </Link>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <Link href="/" className="link link-hover">
            Terms of use
          </Link>
          <Link href="/" className="link link-hover">
            Privacy policy
          </Link>
          <Link href="/" className="link link-hover">
            Cookie policy
          </Link>
        </div>
      </div>
      <div className="items-center grid-flow-col text-center mt-32">
        <p>Copyright © 2022 - All right reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
