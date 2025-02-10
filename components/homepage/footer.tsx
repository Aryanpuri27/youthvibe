"use client";
import React, { useRef } from "react";
import { Input } from "../ui/input";
import Image from "next/image";
import {
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import {
  calcLength,
  motion,
  MotionValue,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import { FacebookIcon } from "lucide-react";
function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Footer() {
  const ref = useRef(null);
  return (
    <div ref={ref} className="flex justify-center">
      {
        <motion.footer
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          style={{ width: "100%" }}
          className="  bg-cover flex  flex-col bg-bottom  bg-no-repeat h-fit  md:h-[80vh]  text-white pb-8 rounded-t-[50px] justify-between"
        >
          <div className="text-center flex flex-col justify-center gap-6 mb-5">
            <div className="text-center flex flex-col justify-center gap-4">
              {/* <h1 className=" text-3xl  md:text-6xl font-semibold">
                Magni<span className="text-primary">tude</span>
              </h1> */}
              <div className="w-full flex justify-center">
                <Image src={"/new/lo.png"} width={200} height={40} alt="logo" />
              </div>
              <h1 className=" text-md md:text-lg  text-gray-300">
                Lovely Professional University's Open IntraUniversity
                Competition.
              </h1>
            </div>
            <a href="/magnitude/contact">
              <button className="bg-blue-800 text-gray-300 p-2 rounded-xl font-semibold text-xl px-4 ">
                Contact Us
              </button>
            </a>
            <div className="flex justify-center gap-4 p-5 text-gray-300 ">
              <a href="https://www.instagram.com/youthvibe.lpu/">
                <button>
                  <InstagramLogoIcon className="w-8 h-8" />
                </button>
              </a>
              <a href="">
                <button>
                  <TwitterLogoIcon className="w-8 h-8" />
                </button>
              </a>
              <a
                href="https://www.linkedin.com/company/youthvibelpu/"
                target="_blank"
              >
                <button>
                  <LinkedInLogoIcon className="w-8 h-8" />
                </button>
              </a>
              <a
                href="https://www.facebook.com/share/ZTTRJrmEbawLHGjB/?mibextid=LQQJ4d"
                target="_blank"
              >
                <button>
                  <FacebookIcon className="w-8 h-8" />
                </button>
              </a>
            </div>
          </div>
          <div className=" justify-self-end flex flex-col gap-4">
            <h1 className="text-center">
              &copy;2025 AEON 24. All rights reserved.
            </h1>
          </div>
        </motion.footer>
      }
    </div>
  );
}

export default Footer;
