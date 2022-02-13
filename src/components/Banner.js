import React from 'react';
import Image from  '../images/wonderwoman.jpg'
function Banner() {
  return <>
  <div className={`bg-[url(${Image})] h-[50vh] md:h-[80vh]
  bg-center bg-cover
  flex items-end `
  }>
    <div className="text-3x1 text-white
    p-4
    bg-gray-900 bg-opacity-50
    w-full
    flex justify-center 
    "> Wonder-Woman</div>
    </div>
  </>;
}

export default Banner;
