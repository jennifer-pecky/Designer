import '../styles/home.css';

export default function Home() {
  return (
    <div className="h-[200vh]">
      <div className="home h-[130vh] grid justify-items-center content-center">
        <div className="text-center text-white">
          <h1 className="text-white text-3xl  font-bold">
            WE PROVIDE EVERYTHING
          </h1>
          <p className="text-6xl my-5">
            <span className="text-[#ff565b] font-extrabold">INTERIOR</span>{' '}
            <span className="text-white font-extrabold"> DESIGNER</span>
          </p>
          <button className="bg-[#fff]  text-[#ff565b] w-[200px] h-[60px] rounded-2xl hover:bg-[#ff565b] hover:text-[#fff] transition duration-700">
            Discover More
          </button>
        </div>
      </div>
      <div className="w-full flex justify-center items-center">
        <div className="grid gap-3 justify-items-center content-center absolute grid-row-2  grid-col-4 w-[80vw] shadow-xl h-[40vh] bg-white z-0">
          <div className="grid row-start-1 col-start-1 w-[15vw] h-[10vh]">
            <h3 className="font-extrabold text-lg">Search Work by Title</h3>
            <input
              type="text"
              className="border-[1px] border-gray-500 outline-none"
              placeholder="Type any work title...."
            />
          </div>
          <div className="grid row-start-1 col-start-2 w-[15vw] h-[10vh]">
            <h3 className="font-extrabold text-lg">Choose Category</h3>
            <select name="" id="">
              <option value="">Choose Category</option>
              <option value="">Exterior Design</option>
              <option value="">Interior Design</option>
              <option value="">New Videos</option>
              <option value="">Trend Design</option>
            </select>
          </div>
          <div className="grid row-start-1 col-start-3 w-[15vw] h-[10vh]">
            <h3 className="font-extrabold text-lg">Price Range</h3>
            <select name="" id="">
              <option value="">Choose Price</option>
              <option value="">$100 - $250</option>
              <option value="">$250 - $500</option>
              <option value="">$500 - $1000</option>
              <option value="">$1000+</option>
            </select>
          </div>
          <div className="grid row-start-1 col-start-4 w-[15vw] h-[10vh]">
            <h3 className="font-extrabold text-lg">Pick a Plan</h3>
            <select name="" id="">
              <option value="">Choose Plan</option>
              <option value="">Standard</option>
              <option value="">Proffessional</option>
              <option value="">Golden</option>
              <option value="">Premium</option>
            </select>
          </div>
          <div className="grid row-start-2 col-start-1 col-span-4 text-white mt-10 ">
            <button className="bg-[#ff565b] w-[76vw] h-[6vh] rounded-xl">
              Search Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
