function Newslatter() {
  return (
    <div className="w-full py-16 text-white px-8">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 my-7">
          <h1 className="md:text-3xl sm:text-2xl text-xl font-bold py-2">
            Want tips & tricks to optimize your Flow?
          </h1>
          <p>Sign up to our Newslatter to stay up to date.</p>
        </div>
        <div className="my-4">
          <div className="flex flex-row sm:flex-row items-center justify-between gap-4 w-full">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 rounded-md"
            />
            <button className="bg-[#00df9a]  w-[200px] rounded-md font-medium mx-auto my-6 py-2 text-black">
              Subscribe
            </button>
          </div>
          <p>We care about the protection of your data. Read our <span className="text-[#00df9a]">Privacy Policy</span> </p>
        </div>
      </div>
    </div>
  );
}

export default Newslatter;
