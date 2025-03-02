import React from "react";
const Footer = () => {
    return (
        <footer className="w-full bg-gray-900 text-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3 gap-y-8 md:gap-8 py-10 max-w-sm mx-auto sm:max-w-3xl lg:max-w-full">
                    {/* Logo Section */}
                    <div className="col-span-full mb-10 lg:col-span-2 lg:mb-0">
                        {/*<a href="/" className="flex items-center space-x-3">*/}
                        {/*    <img src="/images/logo1.jpg" className="h-10" alt="AutoCare Logo" />*/}
                        {/*</a>*/}
                        <p className="py-8 text-sm text-gray-400 lg:max-w-xs text-center lg:text-left">
                            Trusted by thousands of car owners for quality vehicle maintenance and repairs.
                        </p>
                        <a
                            href="#contact"
                            className="py-2.5 px-5 h-9 block w-fit bg-blue-600 rounded-full shadow-sm text-xs text-white mx-auto transition-all duration-500 hover:bg-blue-700 lg:mx-0"
                        >
                            Contact Us
                        </a>
                    </div>
                    {/* Navigation Section */}
                    <div className="lg:mx-auto text-left">
                        <h4 className="text-lg font-medium mb-7">Company</h4>
                        <ul className="text-sm transition-all duration-500">
                            <li className="mb-6">
                                <a href="/" className="text-gray-400 hover:text-white">Home</a>
                            </li>
                            <li className="mb-6">
                                <a href="/about" className="text-gray-400 hover:text-white">About</a>
                            </li>
                            <li>
                                <a href="/services" className="text-gray-400 hover:text-white">Services</a>
                            </li>
                        </ul>
                    </div>
                    {/* Services Section */}
                    <div className="lg:mx-auto text-left">
                        <h4 className="text-lg font-medium mb-7">Our Services</h4>
                        <ul className="text-sm transition-all duration-500">
                            <li className="mb-6">
                                <a href="/oil-change" className="text-gray-400 hover:text-white">Oil Change</a>
                            </li>
                            <li className="mb-6">
                                <a href="/tire-services" className="text-gray-400 hover:text-white">Tire Services</a>
                            </li>
                            <li>
                                <a href="/battery-replacement" className="text-gray-400 hover:text-white">Battery Replacement</a>
                            </li>
                        </ul>
                    </div>
                    {/* Support Section */}
                    <div className="lg:mx-auto text-left">
                        <h4 className="text-lg font-medium mb-7">Support</h4>
                        <ul className="text-sm transition-all duration-500">
                            <li className="mb-6">
                                <a href="/support" className="text-gray-400 hover:text-white">Customer Support</a>
                            </li>
                            <li className="mb-6">
                                <a href="/terms" className="text-gray-400 hover:text-white">Terms & Conditions</a>
                            </li>
                            <li>
                                <a href="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</a>
                            </li>
                        </ul>
                    </div>
                    {/* Subscribe Section */}
                    <div className="lg:mx-auto text-left">
                        <h4 className="text-lg font-medium mb-7">Subscribe</h4>
                        <p className="text-sm text-gray-400 leading-6 mb-7">
                            Subscribe to get the latest automotive service updates and offers.
                        </p>
                        <a
                            href="#subscribe"
                            className="flex items-center justify-center gap-2 border border-blue-600 rounded-full py-3 px-6 w-fit lg:mx-0 text-sm text-blue-400 font-semibold transition-all duration-500 hover:bg-blue-600 hover:text-white"
                        >
                            Subscribe
                        </a>
                    </div>
                </div>
                {/* Footer Bottom Section */}
                <div className="py-7 border-t border-gray-700">
                    <div className="flex items-center justify-center flex-col lg:justify-between lg:flex-row">
              <span className="text-sm text-gray-400">
                © <a href="/">AutoCare</a> 2025, All rights reserved.
              </span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
// 