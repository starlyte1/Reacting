import { useState, useEffect } from 'react';
import { Rocket, Target, Zap, TrendingUp, Sparkles, Code2 } from 'lucide-react';
import ProjectCounter from './components/ProjectCounter';
import Timeline from './components/Timeline';
import ProjectCard from './components/ProjectCard';
import FloatingIcons from './components/FloatingIcons';
import './App.css';

function App() {
  const [completedProjects, setCompletedProjects] = useState(1);
  const targetProjects = 100;
  const currentYear = 2026;
  
  const upcomingProjects = [
    { id: 1, title: "E-commerce Dashboard", category: "Full-Stack", difficulty: "Intermediate" },
    { id: 2, title: "AI Image Generator", category: "AI Integration", difficulty: "Advanced" },
    { id: 3, title: "Real-time Chat App", category: "WebSockets", difficulty: "Intermediate" },
    { id: 4, title: "Crypto Portfolio Tracker", category: "Finance", difficulty: "Advanced" },
    { id: 5, title: "Fitness Tracking App", category: "Health", difficulty: "Beginner" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCompletedProjects(prev => {
        if (prev < 5) return prev + 0.01;
        return prev;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const progressPercentage = (completedProjects / targetProjects) * 100;

  return (
    <div className="app">
      <FloatingIcons />
      
      {/* Animated Background */}
      <div className="gradient-bg">
        <div className="gradient-1"></div>
        <div className="gradient-2"></div>
        <div className="gradient-3"></div>
      </div>

      <header className="header">
        <div className="logo">
          <Code2 className="logo-icon" />
          <h1>React<span className="highlight">100</span>Journey</h1>
        </div>
        <nav className="nav">
          <a href="#" className="nav-link">
            <Rocket size={18} />
            <span>Dashboard</span>
          </a>
          <a href="#" className="nav-link">
            <Target size={18} />
            <span>Goals</span>
          </a>
          <a href="#" className="nav-link">
            <TrendingUp size={18} />
            <span>Progress</span>
          </a>
        </nav>
      </header>

      <main className="main-content">
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-content">
            <div className="badge">
              <Sparkles size={16} />
              <span>2026 Journey Begins</span>
            </div>
            <h2 className="hero-title">
              Building <span className="gradient-text">100 React Projects</span>
              <br />
              This Year
            </h2>
            <p className="hero-subtitle">
              This is just the beginning of an epic coding adventure. 
              Join me as I build, learn, and grow through 100 React projects in {currentYear}.
            </p>
            
            <ProjectCounter 
              current={completedProjects}
              target={targetProjects}
              progress={progressPercentage}
            />
          </div>
          
          <div className="hero-visual">
            <div className="pulse-ring"></div>
            <div className="pulse-ring delay-1"></div>
            <div className="pulse-ring delay-2"></div>
            <div className="center-icon">
              <Zap className="hero-icon" />
            </div>
          </div>
        </section>

        {/* Progress Section */}
        <section className="progress-section">
          <h3 className="section-title">
            <Target className="section-icon" />
            Journey Progress
          </h3>
          
          <div className="progress-bar-container">
            <div className="progress-labels">
              <span>Start</span>
              <span className="current-progress">{completedProjects.toFixed(0)} / 100</span>
              <span>Finish</span>
            </div>
            <div className="progress-bar">
              <div 
                className="progress-fill" 
                style={{ width: `${progressPercentage}%` }}
              >
                <div className="progress-glow"></div>
              </div>
              <div className="progress-marker" style={{ left: `${progressPercentage}%` }}>
                <div className="marker-tooltip">
                  Project #{completedProjects.toFixed(0)}
                </div>
              </div>
            </div>
            <div className="milestones">
              {[0, 25, 50, 75, 100].map((milestone) => (
                <div 
                  key={milestone} 
                  className={`milestone ${completedProjects >= milestone ? 'reached' : ''}`}
                >
                  <div className="milestone-dot"></div>
                  <span>{milestone}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="timeline-section">
          <h3 className="section-title">
            <TrendingUp className="section-icon" />
            Project Roadmap
          </h3>
          <Timeline currentProject={completedProjects} />
        </section>

        {/* Upcoming Projects */}
        <section className="projects-section">
          <h3 className="section-title">
            <Rocket className="section-icon" />
            Upcoming Projects
          </h3>
          <div className="projects-grid">
            {upcomingProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="stats-section">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon">
                <Code2 />
              </div>
              <div className="stat-content">
                <h4>Projects Completed</h4>
                <p className="stat-number">{completedProjects.toFixed(0)}</p>
                <p className="stat-desc">Out of 100 target</p>
              </div>
            </div>
            
            <div className="stat-card">
              <div className="stat-icon">
                <Sparkles />
              </div>
              <div className="stat-content">
                <h4>Days in 2026</h4>
                <p className="stat-number">365</p>
                <p className="stat-desc">Days to build greatness</p>
              </div>
            </div>
            
            <div className="stat-card">
              <div className="stat-icon">
                <Zap />
              </div>
              <div className="stat-content">
                <h4>Avg. Pace</h4>
                <p className="stat-number">2.7</p>
                <p className="stat-desc">Projects per week</p>
              </div>
            </div>
            
            <div className="stat-card">
              <div className="stat-icon">
                <Target />
              </div>
              <div className="stat-content">
                <h4>Success Rate</h4>
                <p className="stat-number">100%</p>
                <p className="stat-desc">Learning guaranteed</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="cta-card">
            <h3>Ready to Follow This Journey?</h3>
            <p>
              Every line of code, every bug fix, every "Aha!" moment documented.
              This is more than coding—it's a transformation story.
            </p>
            <div className="cta-buttons">
              <button className="btn-primary">
                <Sparkles size={18} />
                Subscribe for Updates
              </button>
              <button className="btn-secondary">
                View GitHub Repo
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <Code2 className="footer-icon" />
            <span>React100Journey</span>
          </div>
          <p className="footer-text">
            Building the future, one component at a time. 
            Join me in {currentYear} as I embark on this 100-project adventure.
          </p>
          <div className="footer-social">
            <span>Stay tuned on:</span>
            <div className="social-links">
              <a href="#" className="social-link">GitHub</a>
              <a href="#" className="social-link">Twitter</a>
              <a href="#" className="social-link">LinkedIn</a>
              <a href="#" className="social-link">Blog</a>
            </div>
          </div>
          <p className="footer-copyright">
            © {currentYear} React 100 Projects Journey. Every project tells a story.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;