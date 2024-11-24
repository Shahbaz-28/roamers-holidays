'use client'
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronRight, Facebook, Instagram } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const menuItems = [
  { title: "Home", href: "/" },
  {
    title: "Tours",
    items: [
      { title: "International", href: "/international" },
      { title: "Domestic", href: "/domestic" },
    ],
  },
  { title: "About Us", href: "/about" },
  { title: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
    setActiveSubmenu(null);
  };

  const toggleSubmenu = (title) => {
    setActiveSubmenu(activeSubmenu === title ? null : title);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="container mx-auto">
        <nav className="flex items-center justify-between h-20 px-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/images/logoNav.jpg"
              alt="Rebel Rover Logo"
              width={120}
              height={120}
              className="rounded-md"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <NavigationMenu>
              <NavigationMenuList className="gap-1">
                {menuItems.map((item, index) => (
                  <NavigationMenuItem key={index}>
                    {item.items ? (
                      <>
                        <NavigationMenuTrigger className="bg-transparent text-sky-600 hover:bg-sky-100 hover:text-sky-800 font-semibold transition-colors duration-200">
                          {item.title}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="grid w-48 gap-3 p-4 bg-white rounded-md shadow-lg">
                            {item.items.map((subItem, subIndex) => (
                              <li key={subIndex}>
                                <NavigationMenuLink asChild>
                                  <Link
                                    href={subItem.href}
                                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-sky-100 hover:text-sky-800 focus:bg-sky-100 focus:text-sky-800 text-sky-600 font-medium"
                                  >
                                    {subItem.title}
                                  </Link>
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <Link href={item.href} legacyBehavior passHref>
                        <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-semibold text-sky-600 hover:bg-sky-100 hover:text-sky-800 transition-colors duration-200">
                          {item.title}
                        </NavigationMenuLink>
                      </Link>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            {/* Social Media Icons for large screens */}
          </div>
          <div className="gap-4 hidden lg:flex">
          <Link
              href="#"
              className="text-sky-600 hover:text-sky-800 transition-colors duration-300"
              aria-label="Facebook"
            >
              <Facebook className="h-6 w-6" />
            </Link>
            <Link
              href="#"
              className="text-sky-600 hover:text-sky-800 transition-colors duration-300"
              aria-label="Instagram"
            >
              <Instagram className="h-6 w-6" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-sky-600 hover:bg-sky-100 hover:text-sky-800"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white overflow-y-auto md:hidden"
          >
            <div className="container flex flex-col items-start justify-start h-full py-20 px-6 space-y-6">
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 text-sky-600 hover:bg-sky-100 hover:text-sky-800"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </Button>
              {menuItems.map((item) => (
                <div key={item.title} className="w-full">
                  {item.items ? (
                    <>
                      <button
                        className="text-xl font-medium text-sky-600 hover:text-sky-800 transition-colors flex items-center justify-between w-full"
                        onClick={() => toggleSubmenu(item.title)}
                        aria-expanded={activeSubmenu === item.title}
                      >
                        {item.title}
                        <ChevronRight
                          className={`h-5 w-5 transition-transform duration-200 ease-in-out ${activeSubmenu === item.title ? "rotate-90" : ""}`}
                        />
                      </button>
                      <AnimatePresence>
                        {activeSubmenu === item.title && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="mt-2 ml-4 space-y-2"
                          >
                            {item.items.map((subItem) => (
                              <Link
                                key={subItem.title}
                                href={subItem.href}
                                className="block text-lg font-medium text-sky-600 hover:text-sky-800 transition-colors"
                                onClick={handleLinkClick}
                              >
                                {subItem.title}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-xl font-medium text-sky-600 hover:text-sky-800 transition-colors block"
                      onClick={handleLinkClick}
                    >
                      {item.title}
                    </Link>
                  )}
                </div>
              ))}
              {/* Social Media Icons for mobile menu */}
              <div className="mt-6 flex items-center space-x-4">
                <Link
                  href="#"
                  className="text-sky-600 hover:text-sky-800 transition-colors duration-300"
                  aria-label="Facebook"
                >
                  <Facebook className="h-6 w-6" />
                </Link>
                <Link
                  href="#"
                  className="text-sky-600 hover:text-sky-800 transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

