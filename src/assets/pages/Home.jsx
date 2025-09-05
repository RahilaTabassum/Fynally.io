import "./Home.css";

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <header className="hero">
        <div className="hero-content">
          <h1>Welcome to Fynally.io</h1>
          <p>
            Your companion from <strong>Student</strong> to <strong>Employee</strong>
          </p>
          <a href="/resources" className="btn hero-btn">
            Get Started
          </a>
        </div>
      </header>

      {/* Career Pathway */}
      <section className="pathway">
        <h2>Your Career Journey</h2>
        <div className="steps">
          <div className="step">
           <img
            src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=400&q=80"
            alt="Student"
           />
            <p>Student</p>
          </div>
          <div className="line"></div>
          <div className="step">
            <img
             src="https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=400&q=80"
             alt="Learner"
            />

            <p>Learner</p>
          </div>
          <div className="line"></div>
          <div className="step">
            <img
             src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=400&q=80"
             alt="Intern"
            />
            <p>Intern</p>
          </div>
          <div className="line"></div>
          <div className="step">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=400&q=80"
              alt="Employee"
            />
            <p>Employee</p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="features">
        <h2>Why Fynally.io?</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <img
  src="https://images.unsplash.com/photo-1498079022511-d15614cb1c02?auto=format&fit=crop&w=400&q=80"
  alt="Learning"
/>
            <h3>Learn</h3>
            <p>Access structured resources to upskill and grow.</p>
          </div>
          <div className="feature-card">
            <img
  src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80"
  alt="Internships"
/>
            <h3>Internships</h3>
            <p>Explore internship opportunities to gain experience.</p>
          </div>
          <div className="feature-card">
            <img
  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=400&q=80"
  alt="Employment"
/>
            <h3>Employment</h3>
            <p>Get career-ready with job opportunities and guidance.</p>
          </div>
          <div className="feature-card">
            <img
  src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=400&q=80"
  alt="Mentorship"
/>
            <h3>Mentorship</h3>
            <p>Connect with mentors who guide your career journey.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta">
        <h2>Start Your Career Journey Today</h2>
        <p>Join Fynally.io and take the first step towards success.</p>
        <a href="/resources" className="btn cta-btn">
          Explore Resources
        </a>
      </section>
    </div>
  );
}

export default Home;
