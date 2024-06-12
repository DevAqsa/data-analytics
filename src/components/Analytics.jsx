import laptop from "../assets/laptop.jpg";

function Analytics() {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 ">
        <img className="w-[500px] mx-auto my-4" src={laptop} alt="laptop" />

        <div className="flex flex-col justify-center">
        <p className="text-[#00df9a] font-bold">DATA ANALYTICS DASHBOARD</p>
        <h1 className="md:text-4xl sm:text-3xl font-bold py-2 ">Manage data Analytics Centrally</h1>
        <p> This is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. </p>

        <button className="bg-[#000000] text-[#00df9a] w-[200px] rounded-md font-medium mx-auto md:mx-0 my-6 py-2 ">Get Started</button>
      </div>
      </div>
    </div>
  );
}

export default Analytics;
