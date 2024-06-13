'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const CartModal = () => {
  const cartList = true;
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="w-max absolute p-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)] top-12 right-0 bg-white flex flex-col rounded-md gap-6 z-20"
    >
      {!cartList ? (
        <div>Cart List Is Empty</div>
      ) : (
        <>
          <h2>Shopping Cart</h2>
          {/* Item */}
          <div className="gap-8 flex flex-col">
            <div className="flex gap-4">
              <Image
                src={
                  'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600'
                }
                alt="pro"
                className="object-cover rounded-md"
                width={72}
                height={96}
              />
              <div className="flex flex-col justify-between w-full">
                {/* Top */}
                <div className="">
                  {/* Title */}
                  <div className="flex gap-8 items-center justify-between">
                    <h3 className="font-semibold">Product Title</h3>
                    <div className="p-1 rounded-sm bg-gray-50">E£50</div>
                  </div>
                  {/* Description */}
                  <div className="text-sm text-gray-500">available</div>
                </div>
                {/* Bottom */}
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Qty 1</span>
                  <span className="text-blue-500">Remove</span>
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <Image
                src={
                  'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600'
                }
                alt="pro"
                className="object-cover rounded-md"
                width={72}
                height={96}
              />
              <div className="flex flex-col justify-between w-full">
                {/* Top */}
                <div className="">
                  {/* Title */}
                  <div className="flex gap-8 items-center justify-between">
                    <h3 className="font-semibold">Product Title</h3>
                    <div className="p-1 rounded-sm bg-gray-50">E£50</div>
                  </div>
                  {/* Description */}
                  <div className="text-sm text-gray-500">available</div>
                </div>
                {/* Bottom */}
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Qty 1</span>
                  <span className="text-blue-500">Remove</span>
                </div>
              </div>
            </div>
          </div>
          {/* Bottom */}
          <div>
            <div className="flex items-center justify-between font-semibold">
              <span>Subtotal</span>
              <span>E£100</span>
            </div>
            <p className="text-sm text-gray-500 mt-2 mb-4 ">
              Shipping and taxes calculated at checkout.
            </p>
            <div className="flex items-center justify-between text-sm">
              <button className="py-3 px-4 rounded-md ring-1 ring-gray-300">
                View Cart
              </button>
              <button className="py-3 px-4 rounded-md bg-black text-white">
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </motion.div>
  );
};

export default CartModal;
