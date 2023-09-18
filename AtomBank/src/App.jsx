import{ useState, useEffect } from 'react';
import './App.css'
import Navbar from "./components/Navbar Components/Navbar";
import HamburgerMenu from './components/Navbar Components/HamburgerMenu';
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
    <div>
      {isSmallScreen ? <HamburgerMenu /> : <Navbar />}
    </div>
  )
}

export default App
