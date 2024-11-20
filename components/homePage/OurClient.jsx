'use client'

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

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
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  }

  const partners = [
    {
      name: "Katana",
      logo: "/images/katana.svg",
      className: "text-[#FFA500]" // Orange color for Katana
    },
    {
      name: "Travava",
      logo: "/images/travava.svg",
      className: "text-gray-800"
    },
    {
      name: "Bigui",
      logo: "/images/bigui.svg",
      className: "text-gray-800"
    },
    {
      name: "Booking.com",
      logo: "/images/booking.svg",
      className: "text-[#003580]" // Booking.com blue
    },
    {
      name: "Jakmaen",
      logo: "/images/jakmaen.svg",
      className: "text-[#0066CC]" // Blue color for Jakmaen
    }
  ]

  return (
    <div className="max-w-6x mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 text-blue-900">Our tour partner</h2>
        {/* <p className=" text-blue-700">
          There are many variation of passage of lorem ipsum available but
          <br />
          the majority have suffered alteration
        </p> */}
      </div>

      <div className="px-8">
        <Slider {...settings}>
          {partners.map((partner, index) => (
            <div key={index} className="px-4">
              <div className="flex items-center justify-center h-20">
                {/* Replace with actual partner logos */}
                <div className={`text-2xl font-bold ${partner.className}`}>
                  {partner.name}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}