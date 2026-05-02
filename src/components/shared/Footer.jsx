import React from 'react';
import { CiGlobe, CiShare2 } from 'react-icons/ci';
import { FaFacebookF, FaRegEnvelope } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { RiInstagramFill } from 'react-icons/ri';

const Footer = () => {
    return (
        <footer className="bg-[#F5E6D3] py-16">
            <div className="container mx-auto px-8 grid grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                    <h2 className="text-xl font-bold">SunCart</h2>
                    <p className="mt-2 text-gray-700 text-sm max-w-10/12">© 2026 SUNCART Summer Essentials. Curated coastal living. We bring the Mediterranean warmth to your doorstep.</p>
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
                    <p>Shipping & Returns</p>
                    <div className='mt-4 flex gap-4'>
                        <CiGlobe /><CiShare2 /><FaRegEnvelope />
                    </div>

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