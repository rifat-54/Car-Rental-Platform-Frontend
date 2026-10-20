"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import carImg from "../../../../../public/assets/hero-car.svg";
export default function MotionCar() {
  return (
    <motion.div
      initial={{ x: 50 }}
      animate={{ y: 40, x: 0 }}
      transition={{ ease: "easeOut", duration: 2 }}
      className="w-3/5 flex justify-end"
    >
      <div className="relative w-[750px] h-[750px]">
        <Image
          src={carImg}
          alt="Hero car"
          fill
          className="object-contain rounded-2xl"
          priority
        />
      </div>
    </motion.div>
  );
}