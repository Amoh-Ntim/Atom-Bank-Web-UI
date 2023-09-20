
const HeroTwo = () => {
  return (
    <div>
      <div className="flex mt-32 justify-around sm: flex-col items-center mt-48  md:flex-row">
          <img className="hidden sm:flex" src="/image 18.png"/>
          <div className="text-black mt-24 ">
              <h3 className="text-5xl mb-12" ><span className="font-bold">Atom</span>Bank For Your Easy</h3>
              <h6>The best place to transact and save money. More organized finances no </h6>
              <h6>longer a discourse. Enjoy the life you want, without wasting time on</h6>
              <h6> unnecessary financial matters</h6>
              <div className="flex mt-12 align-start xs: flex-col sm:justify-center flex-row md: justify-start flex-row">
              <img className="" src="/g4036.png" />
              <img className="" src="/Group.png" />
              </div>
          </div>
      </div>


          <div className=" flex justify-around mt-28 sm: flex-col items-center mt-48  md:flex-row">
          <div>
              <h3 className="text-5xl mb-12" ><span className="font-bold">Atom</span>Bank for the Future</h3>
              <h6 className="text-gray-500">All conveniences are at hand.Its time to go ahead and make dreams </h6>
              <h6  className="text-gray-500">come true one by one. Open, manage and withdraw competitive</h6>
              <h6  className="text-gray-500"> interest savings without going to the bank.</h6>
              <div>
              <div className="flex justify-center">
               <h6 className="underline mb-8 text-green-400 hover:text-green-500"><a href="#">Learn more</a></h6>
               <span><h6 className="text-green-400 ml-4">{'->'}</h6></span>
               </div>
              </div> 
          </div>
           <img src="/image 19.png"/>
          </div>

          <div className="flex items-center justify-around sm: flex-col items-center  md:flex-row">
          <img src="/image 22.png"/>
          <div className="text-black mt-24 ">
            <h3 className="text-5xl mb-12">Costumable Debit Card</h3>
            <h6 className="text-gray-500">Choose a debit card design that suits you. Practically withdraw cash</h6>
            <h6 className="text-gray-500"> and transact worldwide.</h6>
            <div className="flex justify-center">
            <h6 className="underline mb-8 text-green-400 hover:text-green-500"><a href="#">Learn more</a></h6>
            <span><h6 className="text-green-400 ml-4">{'->'}</h6></span>
            </div>
          </div>
          </div>
    </div>
  )
}

export default HeroTwo