import "./App.css";

function App() {
  return (
    <main className="container">
      <h1>Kun Zhao</h1>
      <p className="text-left">
        <strong>Senior Software Engineer</strong> with 10+ years of experience
        in full-stack development, specializing in designing and developing
        high-performance, scalable applications.
      </p>

      <p className="text-left">
        <strong>Key Skills:</strong>
      </p>
      <ul className="skills-list">
        <li>
          <strong>C#</strong> (Advanced skills in .NET Core and ASP.NET)
        </li>
        <li>
          <strong>SQL Server</strong> (Performance tuning, stored procedures, complex queries)
        </li>
        <li>
          <strong>AWS</strong> (Lambda, RDS, S3, API Gateway, CloudFormation)
        </li>
        <li>
          <strong>System Optimization</strong> (Memory management, performance bottleneck resolution)
        </li>
        <li>
          <strong>Migration of Legacy Applications</strong> to AWS Cloud (EC2, S3, Serverless architectures)
        </li>
        <li>
          <strong>Automated Testing</strong> (Unit testing, integration testing, mocking frameworks)
        </li>
        <li>
          <strong>Data Pipelines</strong> (ETL processes, parallel processing, high-volume data integration)
        </li>
        <li>
          <strong>Agile Development</strong> (Scrum, sprint planning, and cross-functional collaboration)
        </li>
      </ul>

      <p className="text-left">
        <strong>Certifications:</strong> AWS Certified Developer – Associate
      </p>
      <div className="social-links">
        <a href="https://www.linkedin.com/in/uskzhao" target="_blank">
          <img src="/images/linkedin.jpeg" alt="LinkedIn" />
        </a>
      </div>
    </main>
  );
}

export default App;
