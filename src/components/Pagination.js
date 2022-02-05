import React, { useState } from 'react';

function Pagination({pageProp, goBehind, goAhead}) {

  return (<>
  <div className='w-full flex justify-center'>
      <button className='pa-5 border-2 border-indigo-500 text-indigo-500 border-r-0 rounded-l-xl bg-gray-100' 
      onClick={goBehind}
      >Previous
      </button>
      <button className='pa-5 border-2 border-indigo-500 text-indigo-500 bg-gray-300'>
        {pageProp}
        </button>
      <button className='pa-5 border-2 border-indigo-500 text-indigo-500 border-l-0 rounded-r-xl bg-gray-100' 
      onClick={goAhead}
      >Next</button>



  </div>

  </>);
}

export default Pagination;
