'use client'
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, Menu, X, ChevronRight } from 'lucide-react';
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
      { title: "International", href: "/packages/adventure" },
      { title: "Domestic", href: "/packages/luxury" },
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
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="bg-white/70 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto">
          <nav className="flex items-center justify-between h-16 px-4">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/images/logo1.jpg"
                alt="Rebel Rover Logo"
                width={120}
                height={120}
                className="rounded-md"
              />
            </Link>

            {/* Desktop Navigation */}
            <NavigationMenu className="hidden md:flex">
              <NavigationMenuList className="gap-1">
                {menuItems.map((item, index) => (
                  <NavigationMenuItem key={index}>
                    {item.items ? (
                      <>
                        <NavigationMenuTrigger className="bg-transparent text-gray-700 hover:bg-gray-100 hover:text-gray-900 font-semibold">
                          {item.title}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="grid w-48 gap-3 p-4">
                            {item.items.map((subItem, subIndex) => (
                              <li key={subIndex}>
                                <NavigationMenuLink asChild>
                                  <Link
                                    href={subItem.href}
                                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 text-gray-700 font-medium"
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
                        <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                          {item.title}
                        </NavigationMenuLink>
                      </Link>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            {/* Search and Mobile Menu Buttons */}
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              >
                <Search className="h-5 w-5" />
                <span className="sr-only">Search</span>
              </Button>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
                <span className="sr-only">
                  {mobileMenuOpen ? "Close menu" : "Open menu"}
                </span>
              </Button>
            </div>
          </nav>
        </div>
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
            <div className="container flex flex-col items-start justify-start h-full py-16 px-6 space-y-6">
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X className="h-6 w-6" />
                <span className="sr-only">Close menu</span>
              </Button>
              {menuItems.map((item) => (
                <div key={item.title} className="w-full">
                  {item.items ? (
                    <>
                      <button
                        className="text-xl font-medium text-gray-700 hover:text-gray-900 transition-colors flex items-center justify-between w-full"
                        onClick={() => toggleSubmenu(item.title)}
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
                                className="block text-lg font-medium text-gray-600 hover:text-gray-900 transition-colors"
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
                      className="text-xl font-medium text-gray-700 hover:text-gray-900 transition-colors block"
                      onClick={handleLinkClick}
                    >
                      {item.title}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
