
import NavBar from "./NavBar";
import FeatureCard from "./FeatureCard";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="min-h-screen bg-pattern">
      <NavBar />
      
      <div className="max-w-7xl mx-auto px-8 pt-8">
        <h1 className="text-4xl font-bold text-center text-[#1A1F2C] mb-4">
          Why Choose Us
        </h1>
        
        <div className="flex justify-center items-center space-x-2 text-sm mb-16">
          <Link to="/" className="text-[#1A1F2C] hover:text-[#FF0042]">Home</Link>
          <span className="text-gray-400">/</span>
          <span className="text-[#FF0042]">Why Choose Us</span>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-[#1A1F2C] mb-4">
              Why a Manually Crafted Resume{" "}
              <span className="text-[#FF0042]">Beats AI</span> and Templates Every Time
            </h2>
            <p className="text-[#1A1F2C] font-semibold mb-4">
              If Your Resume Sounds Like Everyone Else's, It Won't Get You Anywhere.
            </p>
            <p className="text-gray-600">
              In Today's Hyper-Competitive Job Market, Using An AI Tool Or Downloading A
              Generic Template Might Seem Like The Easy Fix. But Here's The Truth: AI Doesn't
              Understand Your Career, Your Achievements, Or How Hiring Really Works. And
              Templates? They're Built For Speed—Not Strategy.
            </p>
          </div>
          <div className="relative">
            <img 
              src="/lovable-uploads/49e333bd-41b5-4cd4-bade-c885c94205c0.png" 
              alt="Person thinking with AI elements" 
              className="w-full"
            />
          </div>
        </div>

        <div className="bg-[#FF0042] text-white py-16 px-8 rounded-lg mb-16">
          <h2 className="text-3xl font-bold text-center mb-4">
            What You Need Is Strategy, Positioning, And Precision.
          </h2>
          <p className="text-center mb-12">
            At ATS RESUME, Every Resume Is Crafted By A Seasoned HR Professional Who Understands
          </p>
          
          <div className="grid md:grid-cols-4 gap-8">
            <FeatureCard
              icon="/placeholder.svg"
              title="What Recruiters Actually Look For"
              description=""
            />
            <FeatureCard
              icon="/placeholder.svg"
              title="How Hiring Managers Make Decisions In 6 Seconds Or Less"
              description=""
            />
            <FeatureCard
              icon="/placeholder.svg"
              title="How ATS Software Reads And Ranks Resumes"
              description=""
            />
            <FeatureCard
              icon="/placeholder.svg"
              title="How To Turn Your Experience Into Value-Driven Impact Statements"
              description=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
