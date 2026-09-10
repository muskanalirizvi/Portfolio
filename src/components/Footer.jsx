import './Footer.css';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>&copy; {year} Muskan Ali Rizvi. Built with React, HTML5 &amp; CSS3.</p>
        <ul className="footer-links">
          <li>
            <a href="https://github.com/muskanalirizvi" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/muskanalirizvi/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="mailto:muskanalirizvi1@gmail.com">Email</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
