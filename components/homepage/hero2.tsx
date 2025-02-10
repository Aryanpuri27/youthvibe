"use client";
import React from "react";
import { ContainerScroll } from "../ui/container-scroll-animation";
import Image from "next/image";
import CountdownTimer from "./Countdown";
import Spline from "@splinetool/react-spline";

export function HeroScroll() {
  return (
    <div className="flex flex-col items-center align-middle pt-20">
      {/* <CountdownTimer /> */}
      {/* <ContainerScroll */}
      {/* // titleComponent= */}
      {
        <div className="flex flex-col items-center gap-3 mt-6">
          {/* <h1 className="md:text-4xl text-2xl font-semibold text-white">
            Welcome to
          </h1> */}
          <span className="text-4xl md:text-[6rem] font-extrabold mt-1 leading-none">
            {" "}
            {/* <span className="text-primary dunefont">AEON 24</span> */}
            <Image src={"/new/lo.png"} width={700} height={150} alt="logo" />
            {/* <Image
                src={"/logo/magnitude-text-2.png"}
                width={900}
                height={200}
                alt="logo"
              // /> */}
          </span>
        </div>
      }
      {/* // > */}
      {/* <video
          src="/trailer.mp4"
          autoPlay
          loop
          playsInline
          muted
          className="w-[100%] z-10   object-cover blur-sm "
        /> */}
      {/* <Spline scene="https://prod.spline.design/ydBDJltSJOKDAjwO/scene.splinecode" /> */}
      {/* </ContainerScroll> */}
      <Spline scene="https://prod.spline.design/1vPoFfhlJm8n1N6n/scene.splinecode" />
    </div>
  );
}
