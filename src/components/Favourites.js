import React,{useState} from 'react';
import Pagination from './Pagination';

function Favourites() {

  const [curGenre, setGenre] = useState('All Genres');
  return <>
  <div className='mt-4 px-2 flex justify-center flex-wrap space-x-2 '>
    <button className='m-2 text-lg p-1 px-2 bg-blue-400 text-white rounded-xl font-bold'> 
      All Genres
    </button>

    <button className='m-2 bg-gray-400 hover:bg-blue-400 text-lg p-1 px-2 bg-blue-400 text-white rounded-xl font-bold'> 
      Action 1
    </button>

    <button className='m-2 bg-gray-400 hover:bg-blue-400 text-lg p-1 px-2 bg-blue-400 text-white rounded-xl font-bold'> 
      Action 2
    </button>

    <button className='m-2 bg-gray-400  hover:bg-blue-400 text-lg p-1 px-2 bg-blue-400 text-white rounded-xl font-bold'> 
      Action 3
    </button>

    <button className='m-2  bg-gray-400 hover:bg-blue-400 text-lg p-1 px-2 bg-blue-400 text-white rounded-xl font-bold'> 
      Action 4
    </button>
  </div>
  <div className='text-center'>
    <input type="text" placeholder='Search' className='border border-3 text-center p-1 m-2'/>
    <input type="number" placeholder='Rows' className='border border-3 text-center p-1 m-2'/>

  </div>
  <div>Table Container</div>
  {/* <div>Pagination</div> */}
  <div className='mt-4'>
  <Pagination/>
  </div>
 

    </>;
}

export default Favourites;
