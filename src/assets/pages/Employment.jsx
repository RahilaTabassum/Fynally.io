import "./Employment.css";

function Employment() {
  const jobs = [
    {
      role: "Frontend Developer",
      company: "NextGen Tech",
      location: "Bangalore, India",
      type: "Full-time",
      salary: "₹6 – 8 LPA",
      link: "#"
    },
    {
      role: "Backend Developer",
      company: "CloudWorks",
      location: "Hyderabad, India",
      type: "Full-time",
      salary: "₹8 – 10 LPA",
      link: "#"
    },
    {
      role: "UI/UX Designer",
      company: "DesignHive",
      location: "Remote",
      type: "Contract",
      salary: "₹4 – 6 LPA",
      link: "#"
    },
    {
      role: "Data Analyst",
      company: "Insight Analytics",
      location: "Mumbai, India",
      type: "Full-time",
      salary: "₹5 – 7 LPA",
      link: "#"
    }
  ];

  return (
    <div className="employment">
      <h1>Employment Opportunities</h1>
      <p className="subtitle">Find full-time roles to grow your career</p>
      
      <div className="job-grid">
        {jobs.map((job, index) => (
          <div key={index} className="job-card">
            <h2>{job.role}</h2>
            <p><strong>Company:</strong> {job.company}</p>
            <p><strong>Location:</strong> {job.location}</p>
            <p><strong>Type:</strong> {job.type}</p>
            <p><strong>Salary:</strong> {job.salary}</p>
            <a href={job.link} className="btn">Apply Now</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Employment;
