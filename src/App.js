import './App.css';

//Pages
import AllPokemons from './pages/AllPokemons';
import SearchPokemon from './pages/SearchPokemon';
import Home from './pages/Home';

//Components 
import Navbar from './components/Navbar.js';

//Dependecies
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


function App() {
  return (
    <Router>
      <header>
        <Navbar />
      </header>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-pokemon" element={<AllPokemons />} />
        <Route path="/search-pokemon" element={<SearchPokemon />} />
     </Routes>
    </Router>
  );
}

export default App; 
