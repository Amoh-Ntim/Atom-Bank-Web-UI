import { useState } from "react";

const HamburgerMenu = () => {
    const imageUrl = 'https://www.istockphoto.com/search/2/image?phrase=green%20ball&alloweduse=availableforalluses&excludenudity=true&sort=best&mediatype=photography&utm_source=unsplash&utm_medium=affiliate&utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fgreen-ball&utm_term=green%20ball%3A%3A%3A';
    const [isMenuOpen, setIsMenuOpen] = useState(false);

      const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="flex justify-between">
      <div className="flex">
           {/* logo */}
           <img src={imageUrl}/>
           <h5> <span className="font-bold">Atom</span>Bank</h5>
        </div>
      <div className="relative">
        <button
          className="text-2xl focus:outline-none"
          onClick={toggleMenu}
        >
          &#9776; {/* Hamburger icon */}
        </button>
        {isMenuOpen && (
          <div className="absolute top-0 right-0 mt-12 bg-white p-4 border border-gray-300 shadow-md">
            {/* Menu items go here */}
            <ul>
            <li><a href="#" className="text-black-500 hover:text-blue-700">Services</a></li>
            <li><a href="#" className="text-black-500 hover:text-blue-700">Pricing</a></li>
            <li><a href="#" className="text-black-500 hover:text-blue-700">Features</a></li>
            <li><a href="#" className="text-black-500 hover:text-blue-700">AboutUs</a></li>
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default HamburgerMenu