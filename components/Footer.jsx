import Image from 'next/image'
import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <>
     <footer className='bg-[#003531]'>
      <img src="/images/footer-img.svg" alt="" />
     <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-11 gap-8">
          {/* Legal Section */}
          <div className='col-span-4'>
            <img src="/images/logo.png" alt="" className='max-w-[200px]' />
            <p className='text-gray-600 text-[15px] leading-[20px] mt-6 max-w-[390px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quod amet temporibus! Unde, possimus? Tempora fugiat vitae alias repudiandae recusandae?</p>
          </div>

          {/* Product Section */}
          <div className='col-span-2'>
            <h3 className="text-white font-semibold mb-6">PRODUCT</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-300 hover:text-white text-md">Why move?</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-md">Features</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-md">Omnichannel</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-md">Community</a></li>
          </ul>
          </div>

          {/* Company Section */}
          <div className='col-span-2'>
            <h3 className="text-white font-semibold mb-6">COMPANY</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-300 hover:text-white text-md">Team</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-md">About</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-md">Jobs</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-md">Partners</a></li>
            </ul>
          </div>

          {/* Social Links */}
         <div className="col-span-3">
         <div>
            <h3 className="text-white font-semibold mb-6">CONTACT</h3>
            <ul className="space-y-4">
              <li>
                <a href="mailto:info@example.com" className="text-gray-300 hover:text-white text-md flex items-center">
                  <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  info@example.com
                </a>
              </li>
              <li>
                <a href="tel:+1234567890" className="text-gray-300 hover:text-white text-md flex items-center">
                  <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +1 (234) 567-890
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white text-md flex items-center">
                  <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  123 Main St, City, Country
                </a>
              </li>
            </ul>
          </div>
         </div>
        </div>
    </div>
     </footer>
     <div className="sub-footer relative bg-teal-900 text-white py-6">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/AboutBanner.svg"
          layout="fill"
          objectFit=" cover"
          objectPosition="top"
          alt="Wave background"
          priority
        />
      </div>

      {/* Overlay for the dark effect */}
      <div className="absolute inset-0 bg-teal-900 opacity-80"></div>

      {/* Footer content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          {/* Company Name */}
          <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/images/logo1.jpg"
                alt="Rebel Rover Logo"
                width={120}
                height={120}
                className="rounded-md"
              />
            </Link>

          {/* Copyright */}
          <div className="text-sm">
            <p>&copy; {new Date().getFullYear()} Roamers Holdidyas All rights Reserved</p>
          </div>

          
          {/* Social Media Links */}
          <div className="flex justify-center space-x-4 mb-4 sm:mb-0">
            <Link href="#" className="hover:text-teal-300 transition-colors duration-300">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="hover:text-teal-300 transition-colors duration-300">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="hover:text-teal-300 transition-colors duration-300">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="hover:text-teal-300 transition-colors duration-300">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
    </ >
  )
}