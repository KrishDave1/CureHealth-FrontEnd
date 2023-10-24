/** @format */

import { SocialIcon } from "react-social-icons";

const Footer = () => {
  var today = new Date();
  return (
    <>
      <footer className='bg-[#F4F7FB] text-[#485156] text-center bottom-0 w-full rounded-lg'>
        <div className='footer-wrapper flex wrap justify-evenly py-5 px-2 bg-[#EEF4FF]'>
          <div className='footer-legal-info'>
            <div className='footer-section'>
              <h3 className='text-[#4f585e] text-2xl font-semibold mb-3'>
                Legal Information
              </h3>
              <ul className='text-xl text-left'>
                <li className='hover:text-gray-500 mb-2 transition ease-linear'>
                  <a href='/terms'>Terms of Use</a>
                </li>
                <li className='hover:text-gray-500 mb-2 transition ease-linear'>
                  <a href='/privacy'>Privacy Policy</a>
                </li>
                <li className='hover:text-gray-500 mb-2 transition ease-linear'>
                  <a href='/cookies'>Cookies Policy</a>
                </li>
                <li className='hover:text-gray-500 mb-2 transition ease-linear'>
                  <a href='/return'>Return Policy</a>
                </li>
              </ul>
            </div>
          </div>
          <div className='footer-company-info'>
            <div className='footer-section'>
              <h3 className='text-[#4f585e] text-2xl font-semibold mb-3'>
                Company
              </h3>
              <ul className='text-xl text-left'>
                <li className='hover:text-gray-500 mb-2 transition ease-linear'>
                  <a href='/about'>About Us</a>
                </li>
                <li className='hover:text-gray-500 mb-2 transition ease-linear'>
                  <a href='/blog'>Blog</a>
                </li>
                <li className='hover:text-gray-500 mb-2 transition ease-linear'>
                  <a href='/careers'>Careers</a>
                </li>
                <li className='hover:text-gray-500 mb-2 transition ease-linear'>
                  <a href='/testimonials'>Testimonials</a>
                </li>
              </ul>
            </div>
          </div>
          <div className='footer-connect'>
            <div className='footer-section'>
              <h3 className='text-[#4f585e] text-2xl font-semibold mb-8'>
                Connect with Us
              </h3>
              <ul>
                <div style={{ padding: "10px", display: "inline" }}>
                  <SocialIcon
                    style={{ height: "40px", width: "40px", margin: "10px" }}
                    url='https://instagram.com'
                  />
                </div>
                <div style={{ padding: "10px", display: "inline" }}>
                  <SocialIcon
                    style={{ height: "40px", width: "40px" }}
                    url='https://facebook.com'
                  />
                </div>
                <div style={{ padding: "10px", display: "inline" }}>
                  <SocialIcon
                    style={{ height: "40px", width: "40px" }}
                    url='https://twitter.com'
                  />
                </div>
                <div style={{ padding: "10px", display: "inline" }}>
                  <SocialIcon
                    style={{ height: "40px", width: "40px" }}
                    url='https://whatsapp.com'
                  />
                </div>
              </ul>
            </div>
          </div>
        </div>
        <div
          className='footer-copyright bg-[#EEF4FF] text-sm
        '
        >
          &copy; {today.getFullYear()} CureHealth. All Rights Reserved.<br/> All
          medicines are dispensed in compliance with the Drugs and Cosmetics
          Act, 1940 and Drugs and Cosmetics Rules, 1945. We do not process
          requests for Schedule X and habit forming drugs.
        </div>
      </footer>
    </>
  );
};

export default Footer;
