import "./Resources.css";

function Resources() {
  const resources = [
    {
      title: "Learning Materials",
      description: "Access curated notes, guides, and e-books to strengthen your concepts.",
      link: "#"
    },
    {
      title: "Skill Development",
      description: "Practical exercises and tutorials to build job-ready skills.",
      link: "#"
    },
    {
      title: "Career Guidance",
      description: "Get mentorship and advice to prepare for your career journey.",
      link: "#"
    },
    {
      title: "Tools & Templates",
      description: "Download resume templates, cover letters, and productivity tools.",
      link: "#"
    }
  ];

  return (
    <div className="resources">
      <h1>Student Resources</h1>
      <p className="subtitle">Explore learning materials, guides, and tools for your journey</p>
      
      <div className="resource-grid">
        {resources.map((item, index) => (
          <div key={index} className="resource-card">
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <a href={item.link} className="btn">Explore</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Resources;
