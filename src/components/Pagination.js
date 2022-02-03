import React from 'react';

function Pagination() {
  return <>
  <div className='w-full flex justify-center'>
      <button className='pa-5 border-2 border-indigo-500 text-indigo-500 border-r-0 rounded-l-xl bg-gray-100'>Previous</button>
      <button className='pa-5 border-2 border-indigo-500 text-indigo-500 bg-gray-300'>2</button>
      <button className='pa-5 border-2 border-indigo-500 text-indigo-500 border-l-0 rounded-r-xl bg-gray-100'>Next</button>



  </div>

  </>;
}

export default Pagination;
