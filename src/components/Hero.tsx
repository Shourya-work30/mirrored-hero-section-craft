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
              src="/lovable-uploads/577d7f6d-56ea-4ef0-8e8b-862a7b0eb5c8.png" 
              alt="Person writing notes and thinking creatively" 
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
              icon="/lovable-uploads/09f9f5f2-7679-43b8-a911-8199358fd7ca.png"
              title="Manual Crafting Excellence"
              description="We carefully write and review each resume by hand"
            />
            <FeatureCard
              icon="/lovable-uploads/815a78b1-9a53-41bc-8214-f2f339dc09f4.png"
              title="5-Star Reviews"
              description="Consistently rated excellent by our satisfied clients"
            />
            <FeatureCard
              icon="/lovable-uploads/9f11442a-e866-4039-a561-37ba7f29edfd.png"
              title="Expert Career Guidance"
              description="Professional advice for your career advancement"
            />
            <FeatureCard
              icon="/lovable-uploads/8868f6ee-aa80-4865-836a-e46cbbb514b7.png"
              title="Proven Track Record"
              description="Helping candidates achieve their career goals"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
