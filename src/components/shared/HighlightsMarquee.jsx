import React from 'react';
import Marquee from 'react-fast-marquee';


const highlights = [
    "Hot deals 🔥",
    "Summer sale 50% OFF",
    "Free Delivery on orders over $50",
    "New Summer Collection Out Now !!",
    "20% OFF on selected items",
];

const HighlightsMarquee = () => {
    return (
        <div className="bg-[#FF7F50] py-4 border-y border-[#A43C12]">
            <Marquee speed={100} pauseOnHover={true} >
                {highlights.map((highlight, index) => (
                    <span key={index} className="text-[#6C2000]  font-semibold px-4">
                        {highlight}
                    </span>
                ))}
            </Marquee>
        </div>
    );
};

export default HighlightsMarquee;