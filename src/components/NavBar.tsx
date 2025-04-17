
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between py-4 px-8 max-w-7xl mx-auto">
      <div className="text-xl font-bold text-[#1A1F2C]">
        ATS RESUME<span className="text-[#FF0042] align-super text-sm">®</span>
      </div>
      
      <div className="hidden md:flex space-x-8">
        <Link to="/" className="text-[#1A1F2C] hover:text-[#FF0042]">Home</Link>
        <Link to="/about" className="text-[#1A1F2C] hover:text-[#FF0042]">About Us</Link>
        <Link to="/services" className="text-[#1A1F2C] hover:text-[#FF0042]">Our Services</Link>
        <Link to="/pricing" className="text-[#1A1F2C] hover:text-[#FF0042]">Pricing</Link>
        <Link to="/faq" className="text-[#1A1F2C] hover:text-[#FF0042]">FAQ</Link>
      </div>

      <div className="flex items-center space-x-4">
        <Button variant="ghost" className="text-[#1A1F2C] hover:text-[#FF0042]">
          Why Choose Us
        </Button>
        <Button className="bg-[#1A1F2C] text-white hover:bg-[#2A2F3C]">
          Contact
        </Button>
      </div>
    </nav>
  );
};

export default NavBar;
