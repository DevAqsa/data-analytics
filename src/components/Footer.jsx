import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="max-w-[1240] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div>
        <h1 className="w-full tex-3xl font-bold text-[#00df9a]">FINANCE.</h1>
        <p className="py-4">
          simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been standard dummy text ever when an unknown printer took a
          galley of type and scrambled.
        </p>
        <div className="flex md:w-[75%] my-6 justify-between">
          <FaFacebookSquare size={30} />
          <FaInstagram size={30} />
          <FaTwitterSquare size={30} />
          <FaDribbbleSquare size={30} />
          <FaGithubSquare size={30} />
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between mt-6">
        <div>
          <h5 className="font-medium text-[#00df9a]">Solutions</h5>
          <ul>
            <li className="py-1 text-sm">Business Consulting</li>
            <li className="py-1 text-sm">Market Analysis</li>
            <li className="py-1 text-sm">Financial Consulting</li>
            <li className="py-1 text-sm">Project Management</li>
            <li className="py-1 text-sm">Investment Planning</li>
          </ul>
        </div>

        <div>
          <h5 className="font-medium text-[#00df9a]">Support</h5>
          <ul>
            <li className="py-1 text-sm"> Consulting</li>
            <li className="py-1 text-sm">Pricing</li>
            <li className="py-1 text-sm">Consulting</li>
            <li className="py-1 text-sm">Documentation</li>
            <li className="py-1 text-sm">API Status</li>
          </ul>
        </div>

        <div>
          <h5 className="font-medium text-[#00df9a]">Company</h5>
          <ul>
            <li className="py-1 text-sm"> About</li>
            <li className="py-1 text-sm">Blog</li>
            <li className="py-1 text-sm">Jobs</li>
            <li className="py-1 text-sm">Carears</li>
            <li className="py-1 text-sm">Press</li>
          </ul>
        </div>

        <div>
          <h5 className="font-medium text-[#00df9a]">Legal</h5>
          <ul>
            <li className="py-1 text-sm"> Claim</li>
            <li className="py-1 text-sm">Policy</li>
            <li className="py-1 text-sm">Jobs</li>
            <li className="py-1 text-sm">Terms</li>
            
          </ul>
        </div>
        
      </div>
      <div className=" text-[#00df9a]">Created By DevAqsa || All rights Reserved © 2024</div>                           
    </div>
  );
}

export default Footer;
