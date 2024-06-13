'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  {
    id: 1,
    title: 'Summer Sale Collections',
    description: 'Sale! Up to 50% off!',
    img: '/vin1.png',
    url: '/',
    style: 'linear-gradient(135deg, #e0e0e0 30%, #22c55e 70%, #0f62fe 100%)',
  },
  {
    id: 2,
    title: 'Winter Sale Collections',
    description: 'Sale! Up to 50% off!',
    img: '/salt1.png',
    url: '/',
    style: 'linear-gradient(135deg, #ffffff 30%, #0048ba 70%, #009933 100%)',
  },
  {
    id: 3,
    title: 'Spring Sale Collections',
    description: 'Sale! Up to 50% off!',
    img: '/vin2.png',
    url: '/',
    style: 'linear-gradient(135deg, #e0e0e0 30%, #756664 70%, #744419 100%)',
  },
];

const Slider = () => {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrent((prevCurrent) => (prevCurrent + 1) % slides.length);
  //   }, 7000);

  //   return () => clearInterval(interval);
  // }, []);

  const slideVariants = {
    initial: { opacity: 0, x: '100%' },
    animate: { opacity: 1, x: '0%' },
    exit: { opacity: 0, x: '-100%' },
  };

  return (
    <div className="relative h-[calc(100vh-80px)] overflow-hidden">
      <div className="relative w-full h-full flex">
        <AnimatePresence initial={false}>
          {slides.map(
            ({ description, id, img, title, url, style }, idx) =>
              current === idx && (
                <motion.div
                  key={id}
                  className={`absolute w-full h-full flex-col xl:flex-row flex gap-16`}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={slideVariants}
                  transition={{ duration: 1 }}
                  style={{ background: style }}
                >
                  {/* Content */}
                  <div className="h-1/2 xl:h-full xl:w-1/2 flex flex-col gap-8 items-center justify-center text-center 2xl:gap-12">
                    <h2 className="text-xl xl:text-3xl 2xl:text-5xl">
                      {description}
                    </h2>
                    <h1 className="text-5xl xl:text-6xl 2xl:text-8xl font-semibold">
                      {title}
                    </h1>
                    <Link href={url}>
                      <button className="py-3 px-4 bg-black text-white rounded-md">
                        Shop Now!
                      </button>
                    </Link>
                  </div>
                  {/* Image */}
                  <div className="h-1/2 xl:h-full xl:w-1/2 relative">
                    <Image
                      src={img}
                      alt={title}
                      fill
                      sizes="100%"
                      className="object-cover bg-transparent"
                    />
                  </div>
                </motion.div>
              )
          )}
        </AnimatePresence>
      </div>
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-8 flex gap-4">
        {slides.map((_, idx) => (
          <div
            className={`w-3 h-3 rounded-full ring-1 ring-black flex items-center justify-center cursor-pointer ${
              current === idx ? 'scale-125' : ''
            }`}
            key={idx}
            onClick={() => {
              setCurrent(idx);
              setIsAnimating(true);
            }}
          >
            {current === idx && (
              <div className="w-[6px] h-[6px] rounded-full bg-black" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
