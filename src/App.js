import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Movies from './components/Movies';
import Pagination from './components/Pagination';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Favourites from './components/Favourites';

function App() {
  return (
    <BrowserRouter>
   
    <NavBar></NavBar>
    <Routes>
      <Route path="/" element={<>
      <Banner/>
      <Movies/>
      {/* <Pagination/> */}
      </>
      }/>
      <Route path="/favourites" element={<Favourites />} />

      
    </Routes>
    {/* <Banner></Banner> */}
    {/* <Movies></Movies> */}
    {/* <Pagination></Pagination> */}

    {/* <h2> Trending Page </h2> */}
    {/* <h2> Pagination </h2> */}

    </BrowserRouter>
  );
}

export default App;
