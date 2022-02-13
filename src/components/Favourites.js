import React,{useState, useEffect} from 'react';
import { useEffect } from 'react/cjs/react.development';
import Pagination from './Pagination';

function Favourites() {

  let genreids = {
    28: 'Action',
    12: 'Adventure',
    16: 'Animation', 35: 'Comedy', 80: 'Crime', 99: 'Documentary', 18: 'Drama', 10751: 'Family', 14: 'Fantasy', 36: 'History',
    27: 'Horror', 10402: 'Music', 9648: 'Mystery', 10749: 'Romance', 878: 'Sci-Fi', 10770: 'TV', 53: 'Thriller', 10752: 'War', 37: 'Western'
  }

  const [curGenre, setCurGenre] = useState('Action');
  const[Favourites, setFavourites] = useState([]);

  useEffect(()=> {
    let oldFav = localStorage.getItem("imdb";
        oldFav = JSON.parse(oldFav)
        setFavourites([...oldFav])
  }, [])
  const people = [
    {
      name: 'Jane Cooper',
      title: 'Regional Paradigm Technician',
      department: 'Optimization',
      role: 'Admin',
      email: 'jane.cooper@example.com',
      image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    // More people...
  ]
  const [favourites, setFavourites] = useState([]);
  const [genres, setGenres] = useState([])
  const [rating, setRating] = useState(0)
  const [popularity, setPopularity] = useState(0)
  const [search, setSearch] = useState("")
  const [rows, setRows] = useState(5)
  const [curPage, setCurPage] = useState(1)
  return <>
  <div className='mt-4 px-2 flex justify-center flex-wrap space-x-2 '>
    <button className={
      curGenre == "All Genres" ?
      'm-2 text-lg p-1 px-2 bg-blue-400 text-white rounded-xl font-bold':
      'm-2 text-lg p-1 px-2 bg-gray-400 hover:bg-blue-400 text-white rounded-xl font-bold'
    }> 
      All Genres
    </button>

    <button className={
      curGenre == "Action" ?
      'm-2 text-lg p-1 px-2 bg-blue-400 text-white rounded-xl font-bold':
      'm-2 text-lg p-1 px-2 bg-gray-400 hover:bg-blue-400 text-white rounded-xl font-bold'
    }> 
      Action
    </button>

    
  </div>
  <div className='text-center'>
    <input type="text" placeholder='Search' className='border border-3 text-center p-1 m-2'/>
    <input type="number" placeholder='Rows' className='border border-3 text-center p-1 m-2'/>

  </div>
  <div className="flex flex-col m-4">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    <div className='flex'>
                      <img src='https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-up-arrows-those-icons-lineal-those-icons-3.png' className='mr-2 cursor-pointer'
                        onClick={() => {
                          setPopularity(0)
                          setRating(-1)
                        }}
                      />
                      Rating
                      <img src='https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-down-arrows-those-icons-lineal-those-icons-4.png'
                        onClick={() => {
                          setPopularity(0)
                          setRating(1)
                        }}
                        className='ml-2 mr-2' />
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    <div className='flex'>
                      <img src='https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-up-arrows-those-icons-lineal-those-icons-3.png' className='mr-2 cursor-pointer'
                        onClick={() => {
                          setPopularity(0)
                          setRating(-1)
                        }}
                      />
                      Popularity
                      <img src='https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-down-arrows-those-icons-lineal-those-icons-4.png'
                        onClick={() => {
                          setPopularity(0)
                          setRating(1)
                        }}
                        className='ml-2 mr-2' />
                    </div>
                  </th>
             
                  {/* <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Popularity
                  </th> */}
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Genre
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Remove
                  </th>
                  
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {people.map((person) => (
                  <tr key={person.email}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <img className="h-10 w-10 rounded-full" src={person.image} alt="" />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{person.name}</div>
                          <div className="text-sm text-gray-500">{person.email}</div>
                        </div>
                      </div>
                    </td>
                    
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{person.title}</div>
                      <div className="text-sm text-gray-500">{person.department}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Active
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person.role}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <a href="#" className="text-indigo-600 hover:text-indigo-900">
                        Edit
                      </a>
                    </td>
                    
                  </tr>

                  
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  {/* <div>Pagination</div> */}
  <div className='mt-4'>
  <Pagination/>
  </div>
 

    </>;
}

export default Favourites;
