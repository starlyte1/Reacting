import { Target, TrendingUp, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProjectCounterProps {
  current: number;
  target: number;
  progress: number;
}

const ProjectCounter = ({ current, target, progress }: ProjectCounterProps) => {
  const projectsLeft = target - current;
  const estimatedCompletion = new Date();
  estimatedCompletion.setDate(estimatedCompletion.getDate() + projectsLeft * 3);

  return (
    <motion.div 
      className="counter-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="counter-main">
        <div className="counter-numbers">
          <span className="current-number">{current.toFixed(1)}</span>
          <span className="counter-divider">/</span>
          <span className="target-number">{target}</span>
        </div>
        <span className="counter-label">Projects Completed</span>
      </div>

      <div className="counter-details">
        <div className="counter-detail">
          <Target className="detail-icon" size={20} />
          <div>
            <span className="detail-value">{projectsLeft.toFixed(0)}</span>
            <span className="detail-label">Projects Left</span>
          </div>
        </div>
        
        <div className="counter-detail">
          <TrendingUp className="detail-icon" size={20} />
          <div>
            <span className="detail-value">{progress.toFixed(1)}%</span>
            <span className="detail-label">Progress</span>
          </div>
        </div>
        
        <div className="counter-detail">
          <Clock className="detail-icon" size={20} />
          <div>
            <span className="detail-value">
              {estimatedCompletion.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
            </span>
            <span className="detail-label">Est. Completion</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCounter;