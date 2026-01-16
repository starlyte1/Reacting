import { CheckCircle, Circle, Clock, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

interface TimelineProps {
  currentProject: number;
}

const Timeline = ({ currentProject }: TimelineProps) => {
  const milestones = [
    { stage: "Foundation", projects: "1-20", status: currentProject >= 1 ? "completed" : currentProject >= 0 ? "current" : "upcoming", description: "Mastering React Basics" },
    { stage: "Intermediate", projects: "21-50", status: currentProject >= 21 ? "completed" : currentProject >= 1 ? "current" : "upcoming", description: "Building Real Applications" },
    { stage: "Advanced", projects: "51-80", status: currentProject >= 51 ? "completed" : currentProject >= 21 ? "current" : "upcoming", description: "Complex State & Architecture" },
    { stage: "Expert", projects: "81-100", status: currentProject >= 81 ? "completed" : currentProject >= 51 ? "current" : "upcoming", description: "Production-Ready Systems" },
  ];

  return (
    <div className="timeline">
      {milestones.map((milestone, index) => (
        <motion.div 
          key={milestone.stage}
          className={`timeline-item ${milestone.status}`}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <div className="timeline-marker">
            {milestone.status === "completed" ? (
              <CheckCircle className="marker-icon" />
            ) : milestone.status === "current" ? (
              <Zap className="marker-icon current" />
            ) : (
              <Circle className="marker-icon" />
            )}
          </div>
          
          <div className="timeline-content">
            <div className="timeline-header">
              <h4>{milestone.stage}</h4>
              <span className="timeline-projects">{milestone.projects}</span>
            </div>
            <p className="timeline-description">{milestone.description}</p>
            {milestone.status === "current" && (
              <div className="current-indicator">
                <Clock size={14} />
                <span>Currently here: Project #{currentProject.toFixed(0)}</span>
              </div>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Timeline;