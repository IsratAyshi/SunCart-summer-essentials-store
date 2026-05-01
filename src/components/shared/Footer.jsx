import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { RiInstagramFill } from 'react-icons/ri';

const Footer = () => {
    return (
        <footer className="bg-[#F5E6D3] py-16">
            <div className="max-w-[1440px] mx-auto px-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                    <h2 className="text-xl font-bold">Sunstede</h2>
                    <p className="mt-2 text-gray-700">
                        Curated coastal living experience.
                    </p>
                </div>

                <div>
                    <h3 className="text-xl font-bold mb-2">Social Links</h3>

                    <div className="flex gap-4 ">
                        <div className="bg-white text-black p-2 rounded-full cursor-pointer">
                            <RiInstagramFill className='text-xl' />
                        </div>
                        <div className="bg-white text-black p-2 rounded-full cursor-pointer">
                            <FaFacebookF className='text-xl' />
                        </div>
                        <div className="bg-white text-black p-2 rounded-full cursor-pointer">
                            <FaXTwitter className='text-xl' />
                        </div>
                    </div>
                </div>


                <div>
                    <h3 className="text-xl font-bold">Support</h3>
                    <p>Contact</p>
                    <p>Shipping</p>

                </div>

                <div>
                    <h3 className="text-xl font-bold">Legal</h3>
                    <p>Privacy Policy</p>
                    <p>Terms & Conditions</p>
                </div>


            </div>
        </footer>
    );
};

export default Footer;