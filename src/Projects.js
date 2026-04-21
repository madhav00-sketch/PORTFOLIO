const projects = [
  {
    emoji: '🛒',
    type: 'Full Stack Application',
    title: 'ShopNest — E-Commerce Platform',
    description:
      'A full-stack e-commerce app with product listings, shopping cart, and order management. Features user registration and login with JWT-based authentication. Built with React on the frontend and Node.js/Express REST API on the backend.',
    tags: ['React', 'Node.js', 'Express', 'JWT Auth', 'REST API'],
    gradient: 'linear-gradient(135deg, #ff2d78, #ff6b1a)',
    github: 'https://github.com/madhav00-sketch/shopnest',
  },
  {
    emoji: '💬',
    type: 'Real-Time Application',
    title: 'ChatterBox — Real-Time Chat App',
    description:
      'A real-time chat application with online user tracking, typing indicators, and room-based messaging. Uses Socket.io for instant WebSocket communication. Includes a REST API for rooms and message history.',
    tags: ['React', 'Socket.io', 'Node.js', 'Express', 'WebSockets'],
    gradient: 'linear-gradient(135deg, #00d4ff, #7c3aed)',
    github: 'https://github.com/madhav00-sketch/chatterbox',
  },
  {
    emoji: '📝',
    type: 'Productivity Tool',
    title: 'TaskFlow — Project Management Tool',
    description:
      'A Kanban-style task management app where you can create, move, and delete tasks across To Do, In Progress, and Done columns. Includes a dashboard with team progress bars and a full REST API backend.',
    tags: ['React', 'Node.js', 'Express', 'REST API', 'CSS'],
    gradient: 'linear-gradient(135deg, #ffd93d, #ff6b1a)',
    github: 'https://github.com/madhav00-sketch/taskflow',
  },
  {
    emoji: '🧠',
    type: 'Quiz Application',
    title: 'QuizMind — Interactive Quiz App',
    description:
      'An interactive quiz platform with category selection, a countdown timer, instant answer feedback, and a score results page. Backed by a Node.js/Express API that serves questions by category and saves scores to a leaderboard.',
    tags: ['React', 'Node.js', 'Express', 'REST API', 'React Router'],
    gradient: 'linear-gradient(135deg, #7c3aed, #ff2d78)',
    github: 'https://github.com/madhav00-sketch/quizmind',
  },
];

export default function Projects() {
  return (
    <div className="page">
      <div className="blob blob1" />
      <div className="blob blob2" />

      <div className="projects-hero">
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(0,212,255,0.1)', border: '1px solid rgba(0,212,255,0.3)', color: '#00d4ff', fontSize: '0.78rem', fontWeight: 700, padding: '6px 14px', borderRadius: '100px', marginBottom: '24px', letterSpacing: '1px', textTransform: 'uppercase' }}>
          ✦ Portfolio Projects
        </div>
        <h1 style={{ background: 'linear-gradient(135deg, #00d4ff, #7c3aed)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
          Things I've Built
        </h1>
        <p style={{ marginTop: '14px' }}>
          A collection of projects showcasing my full stack skills — from real-time apps to AI-powered tools.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((proj, i) => (
          <div className="project-card" key={i}>
            <div className="project-banner" style={{ background: proj.gradient }}>
              <span style={{ fontSize: '3.5rem', position: 'relative', zIndex: 1 }}>{proj.emoji}</span>
            </div>
            <div className="project-body">
              <div className="project-type">{proj.type}</div>
              <h3>{proj.title}</h3>
              <p>{proj.description}</p>
              <div className="project-tags">
                {proj.tags.map((t, j) => (
                  <span key={j} className="project-tag">{t}</span>
                ))}
              </div>
              <a
                href={proj.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/>
                </svg>
                View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>

      <footer className="footer">
        Crafted with ❤️ by <span>N Jai Madhav</span> · Mahindra University · 2024
      </footer>
    </div>
  );
}
