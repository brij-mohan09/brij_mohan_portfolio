
const Resume = () => {
  return (
    <section className="resume-section">
      <div className="resume-container container">
        <h1 className="resume-title">My Resume</h1>
        <p className="resume-subtitle">
          Download or view my resume below
        </p>

        <div className="resume-actions">
          <a
            href="/public/resume/Brij_Mohan_React_Frontend_Developer.pdf"
            download
            className="resume-download"
          >
            Download Resume
          </a>
        </div>

        <div className="resume-viewer">
          <iframe
            src="/public/resume/Brij_Mohan_React_Frontend_Developer.pdf"
            title="Resume PDF"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default Resume;