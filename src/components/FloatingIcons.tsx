import { Code2, Sparkles, Zap, Cpu, Database, Cloud } from 'lucide-react';

const FloatingIcons = () => {
  const icons = [
    { Icon: Code2, size: 24, delay: 0 },
    { Icon: Sparkles, size: 20, delay: 1 },
    { Icon: Zap, size: 22, delay: 2 },
    { Icon: Cpu, size: 26, delay: 3 },
    { Icon: Database, size: 24, delay: 4 },
    { Icon: Cloud, size: 22, delay: 5 },
  ];

  return (
    <div className="floating-icons">
      {icons.map(({ Icon, size, delay }, index) => (
        <div 
          key={index}
          className="floating-icon"
          style={{
            left: `${10 + (index * 15)}%`,
            animationDelay: `${delay}s`,
            animationDuration: `${15 + index * 2}s`,
          }}
        >
          <Icon size={size} />
        </div>
      ))}
    </div>
  );
};

export default FloatingIcons;