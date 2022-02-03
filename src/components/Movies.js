import React from 'react';
import Image from  '../images/wonderwoman.jpg'
import I2 from '../images/encanto.jpeg'
import I3 from '../images/batman.jpg'
import I4 from '../images/dilbechara.jpg'
import I5 from '../images/lifeofpi.jpeg'
import I6 from '../images/kw.jpeg'
import I7 from '../images/geh.jpg'
import I8 from '../images/minion.png'

function Movies() {
  return <>
  <div className="mb-8 ">
   <div className="mt-8 mb-8 font-bold text-2x1 text-center">Trending Movies</div>
   
    <div className='flex flex-wrap justify-center  '>
        <div className={`bg-[url(${Image})] 
            h-[30vh]
            w-[250px]
            bg-center bg-cover
            rounded-xl
            flex items-end  
            m-4
            hover:scale-110
            ease-out duration-300
        `}>

            <div className='w-full bg-gray-900 text-white py-2 text-center rounded-b-xl'>Wonder Woman</div>

       </div>

       <div className={`bg-[url(${I2})] 
            h-[30vh]
            w-[250px]
            bg-center bg-cover
            rounded-xl
            flex items-end  
            m-4
            hover:scale-110
            ease-out duration-300
        `}>

            <div className='w-full bg-gray-900 text-white py-2 text-center rounded-b-xl'>Enacnto</div>

       </div>

       <div className={`bg-[url(${I3})] 
            h-[30vh]
            w-[250px]
            bg-center bg-cover
            rounded-xl
            flex items-end  
            m-4
            hover:scale-110
            ease-out duration-300
        `}>

            <div className='w-full bg-gray-900 text-white py-2 text-center rounded-b-xl'>Batman</div>

       </div>

       <div className={`bg-[url(${I4})] 
            h-[30vh]
            w-[250px]
            bg-center bg-cover
            rounded-xl
            flex items-end  
            m-4
            hover:scale-110
            ease-out duration-300
        `}>

            <div className='w-full bg-gray-900 text-white py-2 text-center rounded-b-xl'>Dil Bechara</div>

       </div>

       <div className={`bg-[url(${I5})] 
            h-[30vh]
            w-[250px]
            bg-center bg-cover
            rounded-xl
            flex items-end  
            m-4
            hover:scale-110
            ease-out duration-300
        `}>

            <div className='w-full bg-gray-900 text-white py-2 text-center rounded-b-xl'>Life of Pi</div>

       </div>

       <div className={`bg-[url(${I6})] 
            h-[30vh]
            w-[250px]
            bg-center bg-cover
            rounded-xl
            flex items-end  
            m-4
            hover:scale-110  
            ease-out duration-300 
        `}>

            <div className='w-full bg-gray-900 text-white py-2 text-center rounded-b-xl'>Kimi no Na wa ( 君の名は )</div>

       </div>

       <div className={`bg-[url(${I7})] 
            h-[30vh]
            w-[250px]
            bg-center bg-cover
            rounded-xl
            flex items-end 
            m-4  
            hover:scale-110  
            ease-out duration-300
        `}>

            <div className='w-full bg-gray-900 text-white py-2 text-center rounded-b-xl'>Gehraiyaan</div>

       </div>

       <div className={`bg-[url(${I8})] 
            h-[30vh]
            w-[250px]
            bg-center bg-cover
            rounded-xl
            flex items-end  
            m-4   
            hover:scale-110
            ease-out duration-300
        `}>

            <div className='w-full bg-gray-900 text-white py-2 text-center rounded-b-xl'>Desipicable Me</div>

       </div>

   </div>
 


   </div>
  </>;
}

export default Movies;
