'use client';
import { navLinks } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const NavMenu = () => {
  const [IsOpen, setIsOpen] = useState(false);
  const [rotate, setRotate] = useState(0);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
    setRotate((prev) => prev + 180); // Rotate by 180 degrees on each click
  };

  return (
    <div>
      <motion.div animate={{ rotate }}>
        <Image
          src={'/menu.png'}
          alt="nav-menu"
          width={28}
          height={28}
          className="cursor-pointer"
          onClick={handleClick}
        />
      </motion.div>
      <motion.div
        initial={{ x: '-100%' }}
        animate={{ x: IsOpen ? 0 : '-100%' }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="absolute left-0 top-20 h-[calc(100vh-80px)] bg-primaryColor text-white flex items-center justify-center flex-col w-full gap-8 z-10"
      >
        {navLinks.map(({ href, id, title }) => (
          <Link href={href} key={id} className="hover:text-[#454b36]">
            {title}
          </Link>
        ))}
      </motion.div>
    </div>
  );
};

export default NavMenu;
