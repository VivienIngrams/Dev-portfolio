"use client";

import { WorkDataItem } from "./WorkData";
import Image from "next/image";
import {FaArrowCircleLeft, FaArrowCircleRight} from 'react-icons/fa'

import { useState } from "react";

interface WorkProps {
  work: WorkDataItem[];
}

export const Work: React.FC<WorkProps> = ({ work }) => {
  const [current, setCurrent] = useState(0);
  const length = work.length;

  const nextWorkImage = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevWorkImage = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(work) || work.length <= 0) {
    return null;
  }

  return (
    <div id="work">
      <h2>Work</h2>
      <div>
        {work.map((w, i) => (
          <div
            key={i}
            className={
              i === current ? "opacity-[1] ease-in duration-1000" : "opacity-0"
            }
          >
            <div className="relative flex justify-center p-4"> 
            <FaArrowCircleLeft onClick={prevWorkImage} className ='absolute top-[50%] left-[50px] text-white/50 cursor-pointer select-none z-[2]' size={50}/>
            {i === current && (
              <Image
                src={w.image}
                alt={`Work ${w.image}`}
                width={1440}
                height={200}
              />
            )}
                        <FaArrowCircleRight onClick={nextWorkImage} className ='absolute top-[50%] right-[50px] text-white/50 cursor-pointer select-none z-[2]' size={50}/>
</div>
          </div>
        ))}
      </div>
    </div>
  );
};
