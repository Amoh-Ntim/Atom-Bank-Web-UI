// import img1 from 'virtual:src/assets/image16.jpg';
// import img2 from 'virtual:src/assets/image23.jpg';
const HeroOne = () => {
  return (
    <div>

    <div className="flex justify-between sm: flex-col items-center  md:flex-row ">
      <div className="flex flex-col  mt-16 md:w-1/2">
          <div className="text-5xl">
             <h2>Easy Way to </h2>
             <h2>Save your Money</h2>
             <h2>With <span className="font-bold">ATOM</span>BANK</h2>
          </div>
          <div>
              <h6>The best place to transact and save money.We make all payments easier </h6>
              <h6>and simplier. Receive and send payment funds without cash.</h6>
          </div>
          <div className=" flex text-center mt-16 justify-center">
           <button className="bg-gray-700 hover:bg-gray-900 text-white font-bold py-3 px-6 rounded-lg">
             Download Now
           </button>
           <p className="mt-2 ml-4">
             <span className="underline text-black-300 hover:text-black-700"><a href="#">See How It Works</a></span>
             {'->'}
           </p>
          </div>
          {/* transition-transform transform scale-25 sm:scale-50 md:scale-75 lg:scale-100 */}
      </div>
      {/* Phone and Laptop images */}
      <div className="relative mt-16 mb-16 md:w-1/2 xs:justify-center">
      <img className="w-full h-auto" src="/image23.jpg" alt="My Image" />
        <div className="w-1/2 h-auto">
        <img className=" absolute top-0 left-0 ml-40" src="/image16.jpg" alt="My Image" />
        </div>
      </div>
    </div>
      {/* Black Background */}
      <div className=" flex bg-black text-white mt-56 rounded-xl items-center justify-between hidden lg:flex flex-row">
        <div className="flex  items-center">
        <img className="mt-16 ml-20" src="/Group 7.png" alt="My Image" />
         <div className="flex flex-col">
           <h5 className="">Fast and secure cashless payments</h5>
           <h6>Pay with AtomBank app,</h6>
           <h6>online, and in stores, and get added speed</h6>
           <h6> security</h6>
         </div>
        </div>

     <div className="flex">
      <img className="mt-16 mr-2" src="/Group 8.png" alt="My Image" />
      <div className="flex flex-col mt-24 mr-32  justify-start">
        <h5>Control over your account</h5>
        <h6>Your bank account lets you easyly lock your </h6>
        <h6>card in the app. and later reorder it with a tap of a</h6>
        <h6> button.</h6>
      </div>
     </div>   
      </div>

    </div>


  )
}


export default HeroOne