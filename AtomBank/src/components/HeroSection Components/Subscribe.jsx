const Subscribe = () => {
  return (
    <div className="flex bg-gray-200 w-full items-center justify-center text-black-500 ">
      <div>
        <div className="flex-col items-center">
         <h3 className="text-3xl mt-12">Subsribe Newsletter</h3>
         <h6 className="text-gray-500 mt-4">Financial transactions remotely using mobile</h6>
        </div>

        <div className=" justify-around mt-12 mb-12 sm: flex-col items-center md: flex-row">
          <input
            type="email"
            className="px-4 py-2 mr-8 max-w-md border border-gray-300 rounded-l"
            placeholder="Enter your email..."
          />
          <button className="px-4 py-2 bg-black text-white rounded-r">
            Submit
          </button>
        </div>
      </div>
    </div>
  )
}

export default Subscribe