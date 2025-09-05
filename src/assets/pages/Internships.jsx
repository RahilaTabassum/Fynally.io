import "./Internships.css";

function Internships() {
  const internships = [
    {
      role: "Frontend Developer Intern",
      company: "Tech Solutions",
      location: "Remote",
      duration: "3 Months",
      stipend: "₹8,000 / month",
      link: "#"
    },
    {
      role: "Backend Developer Intern",
      company: "CodeWave",
      location: "Bangalore, India",
      duration: "6 Months",
      stipend: "₹12,000 / month",
      link: "#"
    },
    {
      role: "UI/UX Designer Intern",
      company: "Creative Minds",
      location: "Remote",
      duration: "2 Months",
      stipend: "₹5,000 / month",
      link: "#"
    },
    {
      role: "Data Science Intern",
      company: "Analytics Hub",
      location: "Hyderabad, India",
      duration: "4 Months",
      stipend: "₹10,000 / month",
      link: "#"
    }
  ];

  return (
    <div className="internships">
      <h1>Available Internships</h1>
      <p className="subtitle">Find internships to kickstart your career journey</p>
      
      <div className="internship-grid">
        {internships.map((item, index) => (
          <div key={index} className="internship-card">
            <h2>{item.role}</h2>
            <p><strong>Company:</strong> {item.company}</p>
            <p><strong>Location:</strong> {item.location}</p>
            <p><strong>Duration:</strong> {item.duration}</p>
            <p><strong>Stipend:</strong> {item.stipend}</p>
            <a href={item.link} className="btn">Apply Now</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Internships;
