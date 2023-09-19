
const Navbar = () => {
  return (
    <div className="flex justify-between">
        <div className="flex">
           {/* logo */}
           <img  src="/Ellipse.png" alt="My Image" />
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