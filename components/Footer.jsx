import Image from 'next/image'
import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative bg-teal-900 text-white py-6">
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
    </footer>
  )
}