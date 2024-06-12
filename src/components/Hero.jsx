import { ReactTyped } from "react-typed";

function Hero() {
  return (
    <div className="text-white ">
      <div className="max-width[800px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#00df9a] font-bold p-2">
          GROWING WITH DATA ANALYTICS{" "}
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Grow with data.
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
            Fast, flexible , financing for
          </p>
          <ReactTyped
            className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-6 pl-4"
            strings={["Heap", "Cloud", "SASS", "BASS"]}
            typeSpeed={150}
            backSpeed={140}
            loop
          />
        </div>

        <p className="md:text-2xl text-xl font-bold pt-4 text-gray-500">
          Monitor your data analytics to increase revenue for BASS, SASS
          Plateforms
        </p>
        <button className="bg-[#00df9a]  w-[200px] rounded-md font-medium mx-auto my-6 py-2 text-black">Get Started</button>
      </div>
    </div>
  );
}

export default Hero;
