import { IconType } from 'react-icons';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: IconType;
}

export default function ServiceCard({ title, description, icon: Icon }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#024885]/20">
      <div className="mb-4 text-[#024885]">
        <Icon size={48} />
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#024885] transition-colors">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}

