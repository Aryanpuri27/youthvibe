"use client";
import React, { useState, useRef, useEffect } from "react";
import { LayoutGrid } from "../ui/layout-grid";

export function LayoutPerformances() {
  return (
    <div className="min-h-screen py-20 w-full">
      <LayoutGrid cards={cards} />
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">Diljit Dosanjh</p>
      {/* <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A serene and tranquil retreat, this house in the woods offers a peaceful
        escape from the hustle and bustle of city life.
      </p> */}
    </div>
  );
};
const SkeletonOne1 = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">Coldplay</p>
      {/* <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A serene and tranquil retreat, this house in the woods offers a peaceful
        escape from the hustle and bustle of city life.
      </p> */}
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">Anuv Jain</p>
      {/* <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Perched high above the world, this house offers breathtaking views and a
        unique living experience. It&apos;s a place where the sky meets home,
        and tranquility is a way of life.
      </p> */}
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">Karan Aujla</p>
      {/* <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house surrounded by greenery and nature&apos;s beauty. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p> */}
    </div>
  );
};
// const SkeletonFour = () => {
//   return (
//     <div>
//       <p className="font-bold md:text-4xl text-xl text-white">Asees Kaur</p>
//       <p className="font-normal text-base text-white"></p>
//     </div>
//   );
// };

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail: "/past/dil.jpg",
  },

  {
    id: 3,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail: "/past/anuv.jpg",
  },
  {
    id: 4,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail: "/past/q.jpg",
  },

  {
    id: 2,
    content: <SkeletonOne1 />,
    className: "md:col-span-2",
    thumbnail: "/past/coldplay.jpg",
  },
];
