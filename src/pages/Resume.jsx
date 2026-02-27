
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
            href="/resume/Brij_Mohan_Frontend_Developer_React_Resume.pdf"
            download
            className="resume-download"
          >
            Download Resume
          </a>
        </div>

        <div className="resume-viewer">
          <iframe
            src="/resume/Brij_Mohan_Frontend_Developer_React_Resume.pdf"
            title="Resume PDF"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default Resume;