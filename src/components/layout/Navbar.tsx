import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import NavMenu from '../ui/NavMenu';
import Searchbar from '../Searchbar';
import NavIcons from '../NavIcons';
import { lgNavLinks } from '@/constants';

const Navbar = () => {
  return (
    <nav className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative ">
      {/* Mobile Screen */}
      <div className="md:hidden flex items-center justify-between h-full">
        {/* Logo */}
        <Link href={'/'}>
          <Image src={'/logo.svg'} alt="logo" width={50} height={50} />
        </Link>
        <NavMenu />
      </div>
      {/* Large Screen */}
      <div className="hidden md:flex items-center justify-between h-full">
        <div className="w-1/3 xl:w-1/2 flex items-center gap-12">
          <Link href={'/'} className="flex items-center gap-3">
            <Image
              src={'/logo.svg'}
              alt="logo"
              width={60}
              height={60}
              className="mt-[-15px]"
            />
            <div className=" tracking-wide text-2xl font-bold">ZAD</div>
          </Link>
          <div className="hidden xl:flex gap-4">
            {lgNavLinks.map(({ href, id, title }) => (
              <Link href={href} key={id}>
                {title}
              </Link>
            ))}
          </div>
        </div>
        <div className="w-2/3 xl:w-1/2 flex items-center justify-between gap-8 ">
          <Searchbar />
          <NavIcons />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
