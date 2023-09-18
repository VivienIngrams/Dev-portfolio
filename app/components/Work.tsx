"use client";

import { WorkDataItem } from "./WorkData";
import Image from "next/image";

import { useEffect, useState } from "react";

interface WorkProps {
  work: WorkDataItem[];
}

export const Work: React.FC<WorkProps> = ({ work }) => {
  const [current, setCurrent] = useState(0);
  const length = work.length;




  useEffect(() => {
      const nextWorkImage = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const handleMouseWheel = (event: WheelEvent) => {
      if (event.deltaY > 0) {
        // Scrolling down
        nextWorkImage();
      }
    };

    window.addEventListener("wheel", handleMouseWheel);

    return () => {
      window.removeEventListener("wheel", handleMouseWheel);
    };
  }, [current, length]);

  if (!Array.isArray(work) || work.length <= 0) {
    return null;
  }

  return (
    <div className=" sm:p-5 z-[2] mt-[10rem] text-white font-pt">

    <div id="work" className="max-w-[1240px] mx-auto my-auto">
      <h2 className="text-2xl font-bold text-center p-4">Work</h2>

      <div className="relative flex justify-center p-4">
        {work.map((w, i) => (
          <div
            key={i}
            className={
              i === current ? "opacity-[1] ease-in duration-500" : "opacity-0"
            }
          >
          
            {i === current && (
              <Image
                src={w.image}
                alt={`Work ${w.image}`}
                width={1440}
                height={200}
              
              />
            )}
         
          </div>
        ))}
      </div>
    </div></div>
  );
};