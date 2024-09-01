import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
const Header: React.FC = () => {
  return (
    <header className="relative flex bg-[#1A1A1A] text-white py-0  px-0 flex-col items-center">
      <div className="flex justify-center items-center bg-[url('/images/abstractDesign.svg')] bg-no-repeat bg-cover w-full h-16">
        Discover Your Dream Property with Seahorse
      </div>
      <div className="w-full flex justify-center">
        <nav className="flex relative justify-center items-center h-16 max-w-[120.00rem] w-full">
          <div className="flex text-lg font-bold">
            <Link href="/">
              <Image src="/images/mainLogo.png" className="absolute bottom-0 left-0" alt="Seahorse Logo" width={120} height={32} />
            </Link>
          </div>
          <div className="flex space-x-4">
            <Link href="/">
              Home
            </Link>
            <Link href="/properties">
              Properties
            </Link>
            <Link href="/services">
              Services
            </Link>
            <Link href="/contact">
              Contact
            </Link>
          </div>
        </nav>        
      </div>

    </header>
  )
}

export default Header