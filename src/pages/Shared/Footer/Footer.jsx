import React from 'react';
import facebook from '../../../assets/icon-facebook.svg';
import youtube from '../../../assets/icon-youtube.svg'
import twitter from '../../../assets/icon-twitter.svg'
import pinterest from '../../../assets/icon-pinterest.svg'
import instagram from '../../../assets/icon-instagram.svg'
import logo from '../../../assets/logo-white.svg'

const Footer = () => {
    return (
        
        <footer className="bg-blue-500">
        <div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
          {/* <!-- logo and social links container --> */}
          <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
    
            <div className="mx-auto my-6 text-center text-white md:hidden">
              copyright &copy; 2023, All Rights Reserved
            </div>
    
            {/* <!--  logo --> */}
            <div>
              <img src={logo} alt="" className="h-8"/>
            </div>
            {/* <!-- social links container --> */}
            <div className="flex justify-center space-x-4">
              {/* <!-- link 1  --> */}
              <a href="" >
                <img src={facebook} alt="" className="h-5"/>
              </a>
              {/* <!-- link 2  --> */}
              <a href="" >
                <img src={youtube} alt="" className="h-5"/>
              </a>
              {/* <!-- link 3  --> */}
              <a href="" >
                <img src={twitter} alt="" className="h-5"/>
              </a>
              {/* <!-- link 4  --> */}
              <a href="" >
                <img src={pinterest} alt="" className="h-5"/>
              </a>
              {/* <!-- link 5  --> */}
              <a href="" >
                <img src={instagram} alt="" className="h-5"/>
              </a>
            </div>
          </div>
            {/* <!-- list container --> */}
            <div className="flex justify-around space-x-32">
              <div className="flex flex-col space-y-3 text-white">
                <a href="" className="hover:text-bright-500">Home</a>
                <a href="" className="hover:text-bright-500">Recipe</a>
                <a href="" className="hover:text-bright-500">Pricing</a>
                <a href="" className="hover:text-bright-500">About</a>
              </div>
    
              <div className="flex flex-col space-y-3 text-white">
                <a href="" className="hover:text-bright-500">Careers</a>
                <a href="" className="hover:text-bright-500">Community</a>
                <a href="" className="hover:text-bright-500">Privacy Policy</a>
                
              </div>
            </div>
          {/* <!-- input container --> */}
          <div className="flex flex-col justify-between">
            <div>
              <div className="flex space-x-30">
                <input type="text" className="flex-1 px-4 rounded-full focus:outline-none" placeholder="Update in your inbox"/>
                  <button className="px-6 py-2 text-white rounded-full bg-red-500 hover:bg-red-100 focus:outline-none">Go</button>
                </div>
              </div>
            </div>
            <div className="hidden text-white md:block">
              copy &copy; 2023, All Rights Reserved
            </div>
          </div>
        
      </footer>
    );
};

export default Footer;