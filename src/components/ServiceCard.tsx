
import React from 'react';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const ServiceCard = ({ title, description, icon, className, style }: ServiceCardProps) => {
  return (
    <div 
      className={cn(
        "bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100",
        className
      )}
      style={style}
    >
      {icon && (
        <div className="mb-4 text-brand-teal">
          {icon}
        </div>
      )}
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-brand-gray">{description}</p>
    </div>
  );
};

export default ServiceCard;
