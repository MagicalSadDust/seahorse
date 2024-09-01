'use client'
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation'
import { menu } from './data';
const Header: React.FC = () => {
  const pathname = usePathname();
  return (
    <header className="relative flex bg-[#1A1A1A] text-white py-0  px-0 flex-col items-center">
      <div className="flex justify-center items-center bg-[url('/images/abstractDesign.svg')] bg-no-repeat bg-cover w-full h-16">
        Discover Your Dream Property with Seahorse
      </div>
      <div className="w-full flex justify-center">
        <nav className="flex relative justify-center items-center max-w-[120.00rem] w-full h-24">
          <div className="flex text-lg font-bold">
            <Link href="/">
              <Image src="/images/mainLogo.png" className="absolute bottom-0 left-0" alt="Seahorse Logo" width={120} height={32} />
            </Link>
          </div>
          <div className="flex space-x-4">
          {menu.map(({ name, link }) => (
            <Link 
              key={name}
              href={link} 
              className={pathname === link ? 'menuActive' : 'flex justify-center items-center w-24 h-14'}
            >
              {name}
            </Link>
          ))}
          </div>
        </nav>        
      </div>

    </header>
  )
}

export default Header