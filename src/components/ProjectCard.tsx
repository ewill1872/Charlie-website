
import React from 'react';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  className?: string;
  style?: React.CSSProperties;
}

const ProjectCard = ({ title, description, image, tags, className, style }: ProjectCardProps) => {
  return (
    <div 
      className={cn(
        "group overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-xl",
        className
      )}
      style={style}
    >
      <div className="relative h-60 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-brand-gray mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="bg-brand-navy/10 text-brand-navy text-xs px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
