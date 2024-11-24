"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

export default function OurClient() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const partners = [
    {
      image: "/images/arvog_logo.png",
      className: "text-[#FFA500]", // Orange color for Katana
    },
    {
      image: "/images/Xtreme-Media-1.png",
      className: "text-[#FFA500]", // Orange color for Katana
    },
    {
      image: "/images/smaslogo.svg",
      className: "text-[#FFA500]", // Orange color for Katana
    },
    {
      image: "/images/augmont-logo.webp",
      className: "text-[#FFA500]", // Orange color for Katana
    },
    {
      image: "/images/lohono-logo.svg",
      className: "text-[#FFA500]", // Orange color for Katana
    },
  ];

  return (
    <div className="mt-8 mb-14">
      <div className="container mx-auto border-[1px] rounded-[12px] py-6">
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-sky-900 pt-4">
            Our Tour Partner
          </h2>
        </div>

        <div className="px-8">
          <Slider {...settings}>
            {partners.map((partner, index) => (
              <div key={index} className="px-4">
                <div className="flex items-center justify-center h-20">
                  {/* Replace with actual partner logos */}
                  <Image src={partner.image} alt="" width={100} height={100} />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
