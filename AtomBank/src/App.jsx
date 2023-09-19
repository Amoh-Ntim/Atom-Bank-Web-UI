import{ useState, useEffect } from 'react';
import './App.css'
import Navbar from "./components/Navbar Components/Navbar";
import HamburgerMenu from './components/Navbar Components/HamburgerMenu';
import HeroOne from './components/HeroSection Components/HeroOne';
import HeroTwo from './components/HeroSection Components/HeroTwo';
import Subscribe from './components/HeroSection Components/Subscribe';
import BottomNav from './components/BottomNav/BottomNav';
// "build": "vite build",
function App() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    // Check the screen width when the component mounts and on resize
    function handleResize() {
      setIsSmallScreen(window.innerWidth < 840); // Adjust the breakpoint as needed
    }

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <>

    <div>
      {isSmallScreen ? <HamburgerMenu /> : <Navbar />}
      <div>
      <HeroOne />
      <HeroTwo />
      </div>
    </div>
      <Subscribe />
      <BottomNav />
    </>

  )
}

export default App
