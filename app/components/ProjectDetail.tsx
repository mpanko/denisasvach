import React from 'react';
import Image from 'next/image';
import { projects } from '../data/projects';

type ProjectDetailProps = {
  projectId: string;
};

const ProjectDetail: React.FC<ProjectDetailProps> = ({ projectId }) => {
  const project = projects.find(p => p.id === projectId);

  if (!project) return <div>Project not found</div>;

  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-4xl font-light mb-8 tracking-wide">{project.title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {project.content.map((item, index) => (
          <div key={index} className={item.span ? "col-span-full" : ""}>
            {item.type === 'text' && (
              <p className="text-lg leading-relaxed text-gray-700">{item.content}</p>
            )}
            {item.type === 'image' && item.src && (
              <div className="relative aspect-[4/3]">
                <Image
                  src={item.src}
                  alt={item.alt || ''}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover rounded-sm"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectDetail;