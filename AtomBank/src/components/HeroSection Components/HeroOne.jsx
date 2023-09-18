
const HeroOne = () => {
  return (
    <div className="flex">
      <div className="flex flex-col  mt-16 ">
          <div className="text-5xl">
             <h2>Easy Way to </h2>
             <h2>Save your Money</h2>
             <h2>With <span className="font-bold">ATOM</span>BANK</h2>
          </div>
          <div>
              <h6>The best place to transact and save money.We make all payments easier </h6>
              <h6>and simplier. Receive and send payment funds without cash.</h6>
          </div>
          <div className=" flex text-center mt-16">
           <button className="bg-gray-700 hover:bg-gray-900 text-white font-bold py-3 px-6 rounded-lg">
             Download Now
           </button>
           <p className="mt-2 ml-4">
             <span className="underline">See how it works</span>
           </p>
          </div>
      </div>
      <div>
      {/* <img src={ require('./assets/image-16.png') } alt="My Image" /> */}
      </div>
    </div>
  )
}


export default HeroOne