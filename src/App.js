import './App.css';
import { Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Details from './pages/Details';
import Discover from './pages/Discover';

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
