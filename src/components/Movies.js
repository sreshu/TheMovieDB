import React, {useState, useEffect} from 'react';
import Image from  '../images/wonderwoman.jpg'
import I2 from '../images/encanto.jpeg'
import I3 from '../images/batman.jpg'
import I4 from '../images/dilbechara.jpg'
import I5 from '../images/lifeofpi.jpeg'
import I6 from '../images/kw.jpeg'
import I7 from '../images/geh.jpg'
import I8 from '../images/minion.png'

import axios from 'axios';
import { Oval } from  'react-loader-spinner'
import Pagination from './Pagination';

function Movies() {

    const [movies,setMovies] = useState([])
    const [pageNumber, setPage] = useState(1);
    const[hover, setHover] = useState(' ')
    const[favourites, setFavourites] = useState([])
    function goAhead(){
      setPage(pageNumber + 1);
    }
  
    function goBehind(){
      if(pageNumber > 1)
      setPage(pageNumber - 1);
    }

    useEffect(function(){
        
        axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=e695929ac5370be44f5852f79e12052f&page=${pageNumber}`).
        then((res)=>
            {console.table(res.data.results)
            setMovies(res.data.results)
            let oldFav = localStorage.getItem("imdb");
            oldFav = JSON.parse(oldFav)
            setFavourites([...oldFav])

            }
        )

    }, [pageNumber])
 
    let add =  (movie) => {
        let newArray = [...favourites, movie]
        setFavourites([...newArray])
        console.log(newArray)
        localStorage.setItem("imdb", JSON.stringify(newArray))
    }

    let del = (movie) => {
        let newArray = favourites.filter((m) => m.id != movie.id)
        setFavourites([...newArray])
        localStorage.setItem("imdb", JSON.stringify(newArray))


    }

  return <>
  <div className="mb-8 text-center">
   <div className="mt-8 mb-8 font-bold text-2x1 text-center">Trending Movies</div>
   {

        movies.length == 0 ?
        <div className='flex justify-center'>
        <Oval
        heigth="100"
        width="100"
        color='grey'
        secondaryColor='grey'

        ariaLabel='loading'
      />
      </div> :

   
    <div className='flex flex-wrap justify-center'>

        {
            movies.map((movie)=>(

            <div className={`bg-[url(https:/image.tmdb.org/t/p/w500/${movie.backdrop_path})] 
            h-[30vh]
            w-[250px]
            bg-center bg-cover
            rounded-xl
            flex items-end  
            m-4
            hover:scale-110
            ease-out duration-300
            relative
        `}
        onMouseEnter={() => setHover(movie.id)}

        onMouseLeave={()=>setHover("")}
        >
            {
                hover == movie.id && 
                <>
                {
                    !favourites.find((m)=>m.id==movie.id) ?
                    <div className='absolute top-2 right-2 p-2 bg-gray-800 rounded-xl text-xl cursor-pointer' onClick={() => add(movie)}>❤️</div>
                    :
                    <div className='absolute top-2 right-2 p-2 bg-gray-800 rounded-xl text-xl cursor-pointer' onClick={() => del(movie)}>❌</div>


                }
             </>
            }
            
            <div className='w-full bg-gray-900 text-white py-2 text-center rounded-b-xl'>{movie.title}</div>
            </div>
            ))
        }
        {/* <div className={`bg-[url(${Image})] 
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

       </div> */}


       </div>
}


 


   </div>
   <Pagination pageProp={pageNumber} goBehind={goBehind} goAhead={goAhead}/>
  </>;
}

export default Movies;
