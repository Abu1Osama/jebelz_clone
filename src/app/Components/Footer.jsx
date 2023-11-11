import Link from "next/link";
import React from "react";


function Footer() {
  return (
    <div className="footer bg-black text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6 px-3 py-10" id="footer">
      <div className="footer-child">
        <h4 className="text-2xl mb-5">Help</h4>
        <ul className="text-sm grid gap-3">
          <li>
            <Link href={"/payment"} className="text-white">Payments</Link>
          </li>
          <li>
            <Link href={"/shipping"}  className="text-white">Shipping</Link>
          </li>
          <li>
            <Link href={"/cancel"}  className="text-white">Cancellations &amp; Return</Link>
          </li>
          <li>
            <a href="" className="text-white">Warranty</a>
          </li>
          <li>
            <a href="" className="text-white">Service/Installation</a>
          </li>
          <li>
            <a href="" className="text-white">Help Centre</a>
          </li>
        </ul>
      </div>
      <div className="footer-child">
        <h4 className="text-2xl mb-5">Jebelz</h4>
        <ul className="text-sm grid gap-3">
          <li>
            <a href="" className="text-whit">Contact Us</a>
          </li>
          <li>
            <a href="" className="text-white">About Us</a>
          </li>
          <li>
            <a href="" className="text-white">Careers</a>
          </li>
          <li>
            <a href="" className="text-white">Blog</a>
          </li>
          <li>
            <a href="" className="text-white">FAQs</a>
          </li>
        </ul>
      </div>
      <div className="footer-child">
        <h4 className="text-2xl mb-5">Earn With Us</h4>
        <ul className="text-sm grid gap-3 ">
          <li>
            <Link href={"affiliate"} className="text-white">Affiliates</Link>
          </li>
          <li>
            <a href="" className="text-white">Sell on Jebelz</a>
          </li>
        </ul>
      </div>
      <div className="footer-child">
        <h4 className="text-2xl mb-5">Policies</h4>
        <ul className="text-sm grid gap-3">
          <li>
            <a href="" className="text-white">Terms of Use</a>
          </li>
          <li>
            <a href="" className="text-white">Security</a>
          </li>
          <li>
            <a href="" className="text-white">Privacy</a>
          </li>
          <li>
            <a href="" className="text-white">Infringement</a>
          </li>
        </ul>
      </div>
      <div className="footer-child ">
        <h4 className="text-2xl mb-5">Newsletter Signup</h4>
        <div className="footer-email relative w-full ">
          <input type="text" placeholder="Enter your email address" className="py-3 px-4 border-transparent w-full rounded-lg text-black"/>
          <img className="msg absolute right-3 top-1/2 transform -translate-y-1/2 bg-black h-10 p-2 rounded-md" src="https://www.jebelz.com/media/subscribe-icon.png" alt="" />
        </div>
        <div className="footer-contact">
          <ul className="text-sm grid gap-3 ">
            <li>
              <br />
              <b>Whatsapp Number:</b>
              <br />
              <a href="">+79999999999</a>
              <br />
              <br />
              <b>PHONE:</b>
              <br />
              <a href="">04040404</a>
            </li>
            <li>
              <b>EMAIL:</b>
              <br />
              <a href="">abu@gmail.com</a>
              <br />
              <br />
              <b>WORKING DAYS/HOURS:</b>
              <br />
              <span>Monday - Saturday: 9.00 AM - 6.00 PM</span>
            </li>
          </ul>
          <div className="footer-social">
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
