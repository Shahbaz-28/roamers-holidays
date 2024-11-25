import Link from "next/link"
import { Facebook, Instagram } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="w-full py-4 bg-[#0c4a6e] text-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
           <Link href='/'>
          <Image
                src="/images/logoNav.jpg"
                alt=""
                width={100}
                height={100}
                className="max-w-[200px] rounded-lg"
              />
              </Link>
          </div>
          {/* <nav className="flex gap-6 mb-4 md:mb-0">
            <Link href="/" className="text-sm font-medium hover:text-[#7dd3fc]">
              Home
            </Link>
            <Link href="/tours" className="text-sm font-medium hover:text-[#7dd3fc]">
              Tours
            </Link>
            <Link href="/about-us" className="text-sm font-medium hover:text-[#7dd3fc]">
              About Us
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-[#7dd3fc]">
              Contact
            </Link>
          </nav> */}
             <p>
                &copy; {new Date().getFullYear()} Roamers Holidays All rights
                Reserved
              </p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-[#7dd3fc]">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="hover:text-[#7dd3fc]">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

