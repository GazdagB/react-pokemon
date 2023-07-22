import './App.css';

//Pages
import AllPokemons from './pages/AllPokemons';
import SearchPokemon from './pages/SearchPokemon';
import Home from './pages/Home';

//Components 
import Navbar from './components/Navbar.js';

//Dependecies
import { BrowserRouter as Router} from 'react-router-dom';
import AnimatedRoutes from './components/AnimatedRoutes';


function App() {
  return (
    <Router>
      <header>
        <Navbar />
      </header>
      <AnimatedRoutes />
    </Router>
  );
}

export default App; 
