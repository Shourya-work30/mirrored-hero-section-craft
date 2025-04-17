
interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 flex flex-col items-center text-center">
      <img src={icon} alt={title} className="w-16 h-16 mb-4 object-contain" />
      <h3 className="text-white font-semibold mb-2">{title}</h3>
      <p className="text-white/80 text-sm">{description}</p>
    </div>
  );
};

export default FeatureCard;
