import './App.css';
import { Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import Favorites from './pages/Favorites.jsx';
import Details from './pages/Details.jsx';
import Discover from './pages/Discover.jsx';

function App() {
  return (
    <>
      <div className='min-h-screen p-6 bg-white text-grey-600 text-lg'>
        <Navbar/>
        <Routes>
          <Route
            path='/'
            element={
              <Home/>
            }
          />
          <Route
            path='/favorites'
            element={
              <Favorites />
            }
          />
          <Route
            path='/song-item/:id'
            element={<Details />}
          />
          <Route
          path='/discover'
          element={<Discover/>}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
