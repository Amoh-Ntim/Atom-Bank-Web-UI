// import img1 from 'virtual:src/assets/image16.jpg';
// import img2 from 'virtual:src/assets/image23.jpg';
const HeroOne = () => {
  return (
    <div className="flex justify-between sm: flex-col items-center  md:flex-row">
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
             <span className="underline">See how it works</span>
           </p>
          </div>
      </div>
      <div className="relative mt-16 md:w-1/2 ">
      <img className="w-full h-auto" src="/image23.jpg" alt="My Image" />
      <img className=" absolute top-0 left-0 ml-40" src="/image16.jpg" alt="My Image" />
      </div>
    </div>
  )
}


export default HeroOne