import React from "react";

function Affilate() {
  return (
    <div id="affilate" className="affilate mt-10">
       <div className="affilate-top relative max-w-7xl mx-auto px-5">
        <div className="top-content absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-10">
          <h2 className="text-xl md:text-xl mb-6">Recommend & Earn with the Jebelz Affiliate Program</h2>
          <div className="affilate-top-btn">
            <button className="px-4 py-2 bg-blue-500 rounded text-white">SIGN UP</button>
          </div>
        </div>
        <div className="image-container">
          <img
            src="https://www.jebelz.com/media/wysiwyg/jebelzez_affiliate/banner1.jpg"
            alt=""
            className="w-full"
          />
        </div>
      </div>
      <div className="affliate-first mx-auto my-8 max-w-7xl text-center  px-5">
        <h3 className="text-2xl mb-4">Jebelz Affiliate Program</h3>
        <p className="text-base">
          Earn commissions for every converted customer that you refer to Jebelz, all while delivering delight to your clients and referrals.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 mb-12">
          <div className="main-child text-center">
            <img
              src="https://www.jebelz.com/media/wysiwyg/jebelzez_affiliate/TapHand_Join.svg"
              alt=""
              className="w-16 mx-auto mb-4"
            />
            <div className="child-data">
              <span className="bg-black text-white rounded-full px-2 py-1">1</span>
              <h4 className="text-xl mb-2 mt-4">Register</h4>
              <p className="text-sm">
                Fill out our affiliate application - it’s free and only takes up to two minutes.
              </p>
            </div>
          </div>
          <div className="main-child text-center">
            <img
              src="https://www.jebelz.com/media/wysiwyg/jebelzez_affiliate/RecommendPage.svg"
              alt=""
              className="w-16 mx-auto mb-4"
            />
            <div className="child-data">
              <span className="bg-black text-white rounded-full px-2 py-1">2</span>
              <h4 className="text-xl mb-2 mt-4">Promote</h4>
              <p className="text-sm">
                To earn that sweet recurring commission, all you need to do is start sharing our products in all the right places.
              </p>
            </div>
          </div>
          <div className="main-child text-center">
            <img
              src="https://www.jebelz.com/media/wysiwyg/jebelzez_affiliate/EarnBag.svg"
              alt=""
              className="w-16 mx-auto mb-4"
            />
            <div className="child-data">
              <span className="bg-black text-white rounded-full px-2 py-1">3</span>
              <h4 className="text-xl mb-2 mt-4">Make Money</h4>
              <p className="text-sm">
                Earn affiliate commission income from qualifying purchases and programs. Our competitive conversion rates help maximize earnings.
              </p>
            </div>
          </div>
        </div>
        <div className="faq-heading mb-6">
          <h3 className="text-2xl">FAQ</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="fq-child">
            <h4 className="text-xl">How Does It Work?</h4>
            <p className="text-sm">
              You can share products and available programs on Amazon with your audience through customized linking tools and earn money on qualifying purchases and customer actions like signing up for a free trial program.
            </p>
          </div>
          <div className="fq-child">
            <h4 className="text-xl">How Do I Get Paid?</h4>
            <p className="text-sm">
              You earn from qualifying purchases and programs through the traffic you drive to Amazon. Commission income for qualifying purchases and programs differs based on the product category.
            </p>
          </div>
          <div className="fq-child">
            <h4 className="text-xl">When Do I Get Paid?</h4>
            <p className="text-sm">
              We have a 14-day refund policy on our product. Following the clearance of the purchase, we will pay you on the 25th of the month.
            </p>
          </div>
          <div className="fq-child">
            <h4 className="text-xl">What is the Lapse period?</h4>
            <p className="text-sm">
              The customer should complete their order within 24 hours of the initial click from the unique affiliate link.
            </p>
          </div>
        </div>
        <div className="affliate-bottom bg-black grid grid-cols-1 md:grid-cols-2 text-white justify-center items-center mt-12 py-8">
          <div className="affliate-bottom-ch border-r pr-6">
            <img
              src="https://www.jebelz.com/media/wysiwyg/jebelzez_affiliate/white-logo.png"
              alt=""
              className="w-2/3 mx-auto"
            />
          </div>
          <div className="grid gap-4">
            <p className="text-sm">Recommend & Earn with the Jebelz Affiliate Program</p>
            <button className="px-4 py-2 w-max   bg-blue-500 rounded text-white mt-4">Signup</button>
          </div>
        </div>
      </div>
      <div className="af-footer mt-8 py-4 text-center  px-5">
        <button className="px-4 py-2 bg-blue-500 rounded text-white">Contact Us</button>
        <p className=" mt-2 text-xs">&copy; 2022 - Jebelz - All Rights Reserved</p>
      </div>
    </div>
  );
}

export default Affilate;
