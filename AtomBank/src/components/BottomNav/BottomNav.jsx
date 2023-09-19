const BottomNav = () => {
  return (
    <div className=' flex bg-black text-white items-center pt-20 pb-20 sm: flex-col md:flex-row justify-around'>
      <div className="flex">
        <div className=" flex ">
           <img  src="/Ellipse.png" alt="My Image" />
           <h5> <span className="font-bold">Atom</span>Bank</h5>
        </div>
      </div>

      <div className="flex-col sm: mb-8">
        <h3>Lokasi</h3>
        <h3>Lorem ipsum</h3>
      </div>

      <div className="sm:mb-8">
      <h3>Kontak</h3>
      <h3>Costumer Service 0812 - 1234 -5678</h3>
      </div>
     <div>
      <div className="flex mt-8">
        <img src="/FacebookLogo.png"/>
        <h3 className="hover:text-green-500"><a href="#">@atombank</a></h3>
      </div>
      <div className="flex">
       <img src="/InstagramLogo.png"/>
       <h3 className="hover:text-green-500"><a href="#">@atombank</a></h3>
      </div>
     </div>
    </div>
  )
}

export default BottomNav