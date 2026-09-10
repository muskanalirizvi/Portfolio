const projects = [
  {
    id: 'ai-receptionist',
    category: 'Agentic AI',
    title: 'AI Receptionist — Clinic Front-Desk System',
    summary:
      'Full-stack clinic front-desk platform with a LangGraph AI assistant for scheduling and natural-language (incl. Urdu) queries.',
    description:
      'Built a full-stack AI receptionist system for clinic front-desk operations, covering patient registration, appointment scheduling, and doctor management. Designed a React + Vite frontend backed by a FastAPI + SQLAlchemy API over SQL Server (via pyodbc). Integrated a LangGraph agent (LangChain + Gemini) exposed through MCP to handle natural-language queries, including Urdu, allowing staff and patients to interact conversationally instead of navigating forms. Implemented secure bcrypt-based authentication and automated SMTP email reminders for upcoming appointments.',
    tags: [
      'React',
      'Vite',
      'FastAPI',
      'SQLAlchemy',
      'SQL Server',
      'LangGraph',
      'LangChain',
      'Gemini',
      'MCP',
      'bcrypt',
      'SMTP',
    ],
    github: 'https://github.com/muskanalirizvi',
    demo: '',
  },
  {
    id: 'ptw-lototo-digitalization',
    category: 'Automation & Digitalization',
    title: 'PTW and LOTOTOTO Digitalization',
    summary: 'Digitalized Permit to Work and LOTOTOTO procedures at Engro Powergen Qadirpur.',
    description:
      'Contributed to a project at Engro Powergen Qadirpur focused on digitalizing PTW (Permit to Work) and LOTOTOTO procedures. Assisted in developing a centralized system for real-time permit tracking using SharePoint, Power Apps, and Power Automate. Supported isolation management, workflow automation, and enhanced pre-task inspection processes in line with updated HSE standards.',
    tags: ['SharePoint', 'Power Apps', 'Power Automate'],
    github: 'https://github.com/muskanalirizvi',
    demo: '',
  },
  {
    id: 'liver-disease-prediction',
    category: 'Machine Learning',
    title: 'Liver Disease Prediction — XRF-LR Framework',
    summary: 'Stacked ensemble model achieving 99.92% accuracy for clinical prediction.',
    description:
      'Built a stacked ensemble model using XGBoost and Random Forest with Logistic Regression as the meta-classifier. Addressed class imbalance through oversampling and applied robust data preprocessing techniques, achieving 99.92% accuracy with strong clinical relevance and predictive reliability.',
    tags: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Scikit-learn'],
    github: 'https://github.com/muskanalirizvi',
    demo: '',
  },
  {
    id: 'sentiment-dashboard-api',
    category: 'Machine Learning',
    title: 'Sentiment Dashboard API',
    summary: 'FastAPI + Streamlit app for real-time sentiment analysis and visualization.',
    description:
      'Developed a FastAPI backend to analyze sentiment from user reviews and social media posts, with a Streamlit frontend to visualize real-time sentiment trends and analysis scores. Implemented NLP-based sentiment scoring using TextBlob, achieving high interpretability and responsiveness.',
    tags: ['Python', 'FastAPI', 'TextBlob', 'Pandas', 'Streamlit'],
    github: 'https://github.com/muskanalirizvi',
    demo: '',
  },
  {
    id: 'tutorix',
    category: 'Generative AI',
    title: 'Tutorix — AI-Powered Tutor Chatbot',
    summary: 'Personalized, step-by-step AI tutoring chatbot with context-aware answers.',
    description:
      'Built an AI chatbot for personalized, step-by-step tutoring across multiple subjects. Integrated LangChain and FAISS for context-aware answers using uploaded notes (RAG), with real-time interaction and chat session management in Streamlit.',
    tags: ['Python', 'Streamlit', 'LangChain', 'FAISS', 'RAG', 'Cerebras API'],
    github: 'https://github.com/muskanalirizvi',
    demo: '',
  },
  {
    id: 'customer-shopping-behavior-analysis',
    category: 'Data Analytics',
    title: 'Customer Shopping Behavior Analysis',
    summary: 'Data cleaning, SQL analysis, and a Power BI dashboard on shopping behavior.',
    description:
      'Cleaned a 3,900-row dataset in Python; imputed missing ratings using category-level medians and engineered age group and purchase frequency features. Ran 10 SQL queries in SQL Server Management Studio to extract insights on revenue by gender/age group, customer segmentation (New, Returning, Loyal), discount dependency, and subscription behavior. Built a Power BI dashboard with dynamic filters displaying KPIs, revenue by category/age group, and subscription distribution.',
    tags: ['Python', 'Pandas', 'SQL Server', 'Power BI'],
    github: 'https://github.com/muskanalirizvi',
    demo: '',
  },
  {
    id: 'superstore-sales-dashboard',
    category: 'Data Analytics',
    title: 'Superstore Sales Dashboard',
    summary: 'Interactive Power BI dashboard analyzing sales performance and trends.',
    description:
      'Developed an interactive Sales Dashboard using Power BI to analyze sales performance and trends. Performed data cleaning and transformation, and created basic DAX measures for KPIs. Designed visualizations and filters to support data-driven decision making.',
    tags: ['Power BI', 'Data Visualization', 'DAX', 'Business Intelligence'],
    github: 'https://github.com/muskanalirizvi',
    demo: '',
  },
];

export default projects;
