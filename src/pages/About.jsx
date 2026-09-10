import dp from '../assets/dp.jpg';
import skillIcons from '../data/skillIcons';
import './About.css';

const skillGroups = [
  {
    title: 'Machine Learning & NLP',
    skills: ['Scikit-learn', 'TensorFlow/Keras', 'OpenCV', 'LangChain', 'LangGraph'],
  },
  {
    title: 'Generative AI',
    skills: ['Transformers (Hugging Face)', 'OpenAI API', 'RAG Systems', 'FastAPI'],
  },
  {
    title: 'Data Analysis & Databases',
    skills: ['Pandas', 'NumPy', 'SQL', 'Excel', 'MySQL', 'MongoDB'],
  },
  {
    title: 'Visualization',
    skills: ['Matplotlib', 'Seaborn', 'Plotly', 'Tableau', 'Power BI'],
  },
  {
    title: 'Software Engineering',
    skills: ['Git', 'GitHub', 'OOP', 'Data Structures', 'Algorithms'],
  },
  {
    title: 'Side Languages',
    skills: ['Java', 'HTML', 'CSS', 'Flask', 'JavaScript'],
  },
  {
    title: 'Cloud & Deployment',
    skills: ['Google Cloud', 'Docker', 'FastAPI', 'Streamlit'],
  },
];

const experiences = [
  {
    role: 'Computer Teacher',
    org: 'Beacon English Language & Computer Laboratories, Khairpur Mirs',
    period: 'July 2026 – Present',
    points: [
      'Delivering DIT and CIT training along with advanced computer and IT courses.',
      'Conducting practical, hands-on training and guiding students through course projects and assignments.',
      'Supporting students in developing practical and career-oriented IT skills.',
    ],
  },
  {
    role: 'Computer Teacher',
    org: 'The Future Foundation Girls School, Khairpur Mirs',
    period: 'July 2026 – Present',
    points: [
      'Teaching Computer Science and DIT (Diploma in Information Technology).',
      'Delivering theoretical and practical computer education to students.',
      'Conducting hands-on activities, assignments, and course-related projects.',
      'Helping students develop strong foundational and practical IT skills.',
    ],
  },
  {
    role: 'Virtual Internship',
    org: 'Engro Powergen Qadirpur',
    period: '2025',
    points: [
      'Completed a two-week internship focusing on digitalization of PTW (Permit to Work) and LOTOTOTO procedures.',
      'Utilized SharePoint, Power Apps, Power Automate, and Power BI to build a centralized system for real-time permit tracking.',
    ],
  },
];

const education = {
  degree: 'Bachelor of Engineering in Software Engineering',
  school: 'Mehran University of Engineering and Technology SZAB, Khairpur, Pakistan',
  period: 'Nov 2021 – Dec 2025',
  gpa: '3.82 / 4.00',
};

const achievements = [
  'Silver medalist',
  "Featured on the Dean's Honor List for academic excellence (2021–2025)",
  'Secured 2nd Runner-Up in Hult Prize Campus Round for social innovation (2022)',
  'Contributed to open-source projects in Hacktoberfest (2022)',
  'Selected as a Beta Microsoft Learn Student Ambassador (2024)',
];

function About() {
  return (
    <section className="about section page-enter">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-top reveal">
          <img src={dp} alt="Portrait of Muskan Ali Rizvi" className="about-photo" />
          <p className="about-bio">
            AI-focused Software Engineer with hands-on experience in Python, machine
            learning, NLP, and AI-based application development. I've worked on disease
            prediction models, sentiment analysis systems, and an AI-powered tutor
            chatbot, and completed a virtual internship at Engro Powergen Qadirpur
            contributing to the digitalization of the PTW (Permit to Work) system.
          </p>
        </div>

        <h3 className="section-heading">Skills</h3>
        <div className="skills-grid stagger">
          {skillGroups.map((group) => (
            <div className="skill-group reveal" key={group.title}>
              <h4>{group.title}</h4>
              <ul>
                {group.skills.map((skill) => {
                  const iconData = skillIcons[skill];
                  const Icon = iconData?.icon;
                  return (
                    <li key={skill} className="skill-item">
                      {Icon && (
                        <Icon className="skill-icon" style={{ color: iconData.color }} />
                      )}
                      {skill}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <h3 className="section-heading">Experience</h3>
        {experiences.map((exp) => (
          <div className="timeline-item reveal" key={exp.role + exp.org}>
            <div className="timeline-header">
              <h4>{exp.role} &middot; {exp.org}</h4>
              <span className="timeline-period">{exp.period}</span>
            </div>
            <ul className="timeline-points">
              {exp.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        ))}

        <h3 className="section-heading">Education</h3>
        <div className="timeline-item reveal">
          <div className="timeline-header">
            <h4>{education.degree}</h4>
            <span className="timeline-period">{education.period}</span>
          </div>
          <p className="timeline-sub">{education.school}</p>
          <p className="timeline-sub">CGPA: {education.gpa}</p>
        </div>

        <h3 className="section-heading">Achievements</h3>
        <ul className="achievements-list stagger">
          {achievements.map((item) => (
            <li className="reveal" key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default About;
