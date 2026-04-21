import { Link } from 'react-router-dom';

const skills = [
  { name: 'C', cls: 'skill-1' },
  { name: 'C++', cls: 'skill-2' },
  { name: 'Full Stack Dev', cls: 'skill-3' },
  { name: 'React', cls: 'skill-4' },
  { name: 'Node.js', cls: 'skill-5' },
  { name: 'HTML & CSS', cls: 'skill-1' },
  { name: 'JavaScript', cls: 'skill-2' },
  { name: 'Git & GitHub', cls: 'skill-3' },
  { name: 'REST APIs', cls: 'skill-4' },
  { name: 'MongoDB', cls: 'skill-5' },
];

const details = [
  { icon: '👤', label: 'Full Name', value: 'N Jai Madhav', bg: 'rgba(255,45,120,0.12)' },
  { icon: '📱', label: 'Phone', value: '+91 7995708375', bg: 'rgba(0,212,255,0.1)' },
  { icon: '✉️', label: 'Personal Email', value: 'jaimadhav53@gmail.com', bg: 'rgba(124,58,237,0.12)' },
  { icon: '🎓', label: 'College Email', value: 'se23ucse122@mahindrauniversity.edu.in', bg: 'rgba(255,107,26,0.12)' },
  { icon: '🏫', label: 'University', value: 'Mahindra University', bg: 'rgba(255,217,61,0.1)' },
  { icon: '💻', label: 'Branch', value: 'Computer Science Engineering', bg: 'rgba(255,45,120,0.12)' },
];

export default function Home() {
  return (
    <div className="page">
      {/* Background blobs */}
      <div className="blob blob1" />
      <div className="blob blob2" />
      <div className="blob blob3" />

      {/* Hero */}
      <section className="hero">
        <div>
          <div className="hero-tag">Available for Internships</div>
          <h1>
            Hi, I'm <br />
            <span className="gradient-text">N Jai Madhav</span>
          </h1>
          <p className="hero-subtitle">
            Full Stack Developer & CSE student at Mahindra University, passionate about
            building impactful web experiences and exploring the frontiers of Quantum Computing.
          </p>
          <div className="hero-buttons">
            <Link to="/projects" className="btn-primary">
              View Projects →
            </Link>
            <a href="mailto:jaimadhav53@gmail.com" className="btn-secondary">
              📧 Contact Me
            </a>
          </div>
        </div>

        <div className="avatar-wrap">
          <div className="avatar-ring">
            <div className="avatar-inner">JM</div>
          </div>
          <div className="avatar-badge">🎓 CSE Student</div>
        </div>
      </section>

      {/* About Me */}
      <section className="section">
        <div className="section-header">
          <span className="section-num">01</span>
          <h2 className="section-title">About Me</h2>
          <div className="section-line" />
        </div>
        <div className="card">
          <p className="about-text">
            I'm <strong style={{ color: '#f0f0f8' }}>N Jai Madhav</strong>, a Computer Science Engineering student at
            Mahindra University with a deep love for technology and problem solving. I specialize in
            Full Stack Development — crafting responsive, performant web applications from the
            database layer all the way to polished user interfaces.
          </p>
          <br />
          <p className="about-text">
            Beyond web development, I'm drawn to the exciting intersection of physics and computing —
            particularly <strong style={{ color: '#00d4ff' }}>Quantum Computing</strong>. I believe the next
            decade of computing will be defined by quantum breakthroughs, and I'm actively learning
            how quantum algorithms and qubits can reshape everything from cryptography to AI.
          </p>
          <br />
          <p className="about-text">
            I'm always eager to collaborate on meaningful projects, contribute to open source, and grow
            with like-minded developers. Let's build something extraordinary together.
          </p>
        </div>
      </section>

      {/* Personal Details */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="section-header">
          <span className="section-num">02</span>
          <h2 className="section-title">Personal Details</h2>
          <div className="section-line" />
        </div>
        <div className="details-grid">
          {details.map((d, i) => (
            <div className="detail-item" key={i}>
              <div className="detail-icon" style={{ background: d.bg }}>
                {d.icon}
              </div>
              <div>
                <div className="detail-label">{d.label}</div>
                <div className="detail-value">{d.value}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="section-header">
          <span className="section-num">03</span>
          <h2 className="section-title">Skills</h2>
          <div className="section-line" />
        </div>
        <div className="card">
          <div className="skills-grid">
            {skills.map((s, i) => (
              <span key={i} className={`skill-tag ${s.cls}`}>{s.name}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Research Interests */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="section-header">
          <span className="section-num">04</span>
          <h2 className="section-title">Research Interests</h2>
          <div className="section-line" />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div className="research-card">
            <div className="research-icon">⚛️</div>
            <div>
              <h3>Quantum Computing</h3>
              <p>
                Fascinated by quantum algorithms, qubits, and superposition. I'm exploring how
                quantum computing can solve classically intractable problems — from breaking RSA
                encryption with Shor's algorithm to accelerating machine learning with quantum
                neural networks. Currently studying quantum gates and circuit models.
              </p>
            </div>
          </div>
          <div className="research-card">
            <div className="research-icon">🌐</div>
            <div>
              <h3>Distributed Systems & Web Architecture</h3>
              <p>
                Interested in designing highly scalable distributed systems and microservices
                architectures. I explore concepts like consensus algorithms, event-driven design,
                and the CAP theorem to understand how modern platforms like Netflix and Google
                handle millions of concurrent requests reliably.
              </p>
            </div>
          </div>
          <div className="research-card">
            <div className="research-icon">🤖</div>
            <div>
              <h3>Human-Computer Interaction & AI</h3>
              <p>
                Exploring how intelligent interfaces and AI can reshape user experiences. I'm
                curious about natural language interfaces, AI-assisted development tools, and
                the ethical implications of embedding AI into everyday software systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        Crafted with ❤️ by <span>N Jai Madhav</span> · Mahindra University · 2024
      </footer>
    </div>
  );
}
