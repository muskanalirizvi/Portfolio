import { Link } from 'react-router-dom';
import dp from '../assets/dp.jpg';
import './Home.css';

function Home() {
  return (
    <section className="hero section">
      <div className="container hero-inner">
        <div className="hero-text">
          <p className="hero-eyebrow">Hi, my name is</p>
          <h1>Muskan Ali Rizvi.</h1>
          <h2 className="hero-subtitle">
            I build <span className="accent-text">AI-powered</span> applications with{' '}
            <span className="accent-text">data</span>.
          </h2>
          <p className="hero-desc">
            AI-focused Software Engineer with hands-on experience in Python, machine
            learning, NLP, and AI-based application development — from disease
            prediction models to an AI-powered tutor chatbot.
          </p>
          <div className="hero-actions">
            <Link to="/projects" className="btn btn-solid">
              View My Work
            </Link>
            <Link to="/contact" className="btn">
              Get In Touch
            </Link>
          </div>
        </div>
        <div className="hero-photo">
          <img src={dp} alt="Portrait" />
        </div>
      </div>
    </section>
  );
}

export default Home;
