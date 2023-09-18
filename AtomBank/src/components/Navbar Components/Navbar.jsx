
const Navbar = () => {
    const imageUrl = 'https://www.istockphoto.com/search/2/image?phrase=green%20ball&alloweduse=availableforalluses&excludenudity=true&sort=best&mediatype=photography&utm_source=unsplash&utm_medium=affiliate&utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fgreen-ball&utm_term=green%20ball%3A%3A%3A';
  return (
    <div className="flex justify-between">
        <div className="flex">
           {/* logo */}
           <img src={imageUrl}/>
           <h5> <span className="font-bold">Atom</span>Bank</h5>
        </div>

        {/* Links */}
        <div className="space-x-8">
        <a href="#" className="text-black-500 hover:text-blue-700">Services</a>
        <a href="#" className="text-black-500 hover:text-blue-700">Features</a>
        <a href="#" className="text-black-500 hover:text-blue-700">Pricing</a>
        <a href="#" className="text-black-500 hover:text-blue-700">AboutUs</a>
        </div>

        {/* Buttons */}
        <div className="space-x-4">
        <button className="bg-gray-300 hover:bg-slate-500 text-white font-bold py-2 px-4 rounded">
          Login
        </button>
        <button className="bg-slate-700 hover:bg-slate-900 text-white font-bold py-2 px-4 rounded">
          Register
        </button>
      </div>
    </div>
  )
}

export default Navbar