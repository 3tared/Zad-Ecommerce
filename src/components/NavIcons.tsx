'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import CartModal from './CartModal';

const NavIcons = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleProfileClick = () => {
    setIsProfileOpen((prev) => !prev);
  };

  return (
    <div className="flex items-center gap-4 xl:gap-6 relative">
      <Image
        src={'/profile.png'}
        alt=""
        width={22}
        height={22}
        className="cursor-pointer"
        onClick={handleProfileClick}
      />
      {isProfileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="absolute left-[-25%] top-12 shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-4 z-20 rounded-md text-sm"
        >
          <Link href={'/'}>Profile</Link>
          <div className="mt-2 cursor-pointer">Logout</div>
        </motion.div>
      )}
      <Image
        src={'/notification.png'}
        alt=""
        width={22}
        height={22}
        className="cursor-pointer"
      />
      <div className="relative cursor-pointer">
        <Image
          src={'/cart.png'}
          alt=""
          width={22}
          height={22}
          onClick={() => setIsCartOpen((prev) => !prev)}
        />
        <div className="absolute -top-4 -right-4 h-6 w-6 bg-primaryColor rounded-full flex items-center justify-center text-white text-sm">
          2
        </div>
      </div>
      {isCartOpen && <CartModal />}
    </div>
  );
};

export default NavIcons;
