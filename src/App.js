import './App.css';

import CookieConsent from 'react-cookie-consent';

import {BsGithub} from 'react-icons/bs';
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


      <CookieConsent debug={true}
      location='bottom'
      buttonText='Ok Great!'
      style={{ background: '#2B373B', fontSize: '1rem', color: 'white', textAlign: 'center', padding: '1rem' ,display: 'flex', justifyContent: 'center', alignItems: 'center'}}
      buttonStyle={{ background: '#F5D04C', fontSize: '1rem', color: 'black', textAlign: 'center', padding: '1rem', borderRadius: '5px' }}
      >
        <p >This website was made by: <a style={{color: '#f5d04c',margin: '0 5px'}} href="https://github.com/theCodeDesigner" target='_blank'> <BsGithub/> theCodeDesigner</a>
        Everything used here is for educational purposes only,exploring React.js and its libraries. Pokemon is a trademark of Nintendo. 
        </p>
      </CookieConsent>
    </Router>
  );
}

export default App; 
