import { Calendar, Code, TrendingUp, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

interface Project {
  id: number;
  title: string;
  category: string;
  difficulty: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'beginner': return '#10b981';
      case 'intermediate': return '#f59e0b';
      case 'advanced': return '#ef4444';
      default: return '#6b7280';
    }
  };

  return (
    <motion.div 
      className="project-card"
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="project-card-header">
        <div className="project-number">#{project.id}</div>
        <div 
          className="project-difficulty"
          style={{ backgroundColor: getDifficultyColor(project.difficulty) + '20', color: getDifficultyColor(project.difficulty) }}
        >
          {project.difficulty}
        </div>
      </div>
      
      <h4 className="project-title">{project.title}</h4>
      <p className="project-category">
        <Code size={14} />
        {project.category}
      </p>
      
      <div className="project-meta">
        <div className="meta-item">
          <Calendar size={14} />
          <span>Coming Soon</span>
        </div>
        <div className="meta-item">
          <TrendingUp size={14} />
          <span>#{(project.id + 1).toString().padStart(3, '0')}</span>
        </div>
      </div>
      
      <button className="project-preview-btn">
        <ExternalLink size={16} />
        Preview Details
      </button>
    </motion.div>
  );
};

export default ProjectCard;