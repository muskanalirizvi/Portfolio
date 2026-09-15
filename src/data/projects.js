const projects = [
  {
    id: 'ai-receptionist',
    category: 'Agentic AI',
    title: 'Smart Reception Assistant- Full-Stack Project',
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
    github: 'https://github.com/muskanalirizvi/Smart-Reception-Assistant.git',
    demo: 'https://drive.google.com/file/d/1XQPZrRWFv-4l-7ncn3Fq2V7xq-EQzs2S/view?usp=sharing',
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
    github: 'https://github.com/muskanalirizvi/Project-Random-Forest-for-Liver-Disease-Prediction-with-Oversampling.git',
    demo: '',
  },
  {
    id: 'biblioteq',
    category: 'Full-Stack Development',
    title: 'Biblioteq – AI-Powered Library Management System',
    summary:
      'Full-stack library management system with role-based access and AI-powered book recommendations.',
    description:
      'Developed a full-stack library management system with a FastAPI backend and React frontend, supporting role-based access (student, faculty, librarian) via JWT authentication. Designed and implemented a PostgreSQL database (deployed on Neon) with a relational schema for books, members, and transactions, including automated fine calculation and borrowing-limit enforcement. Integrated Google Gemini AI to deliver personalized book recommendations based on user reading history, with structured JSON output parsing for reliable UI rendering. Built a librarian admin dashboard for book and member management (CRUD operations, account status control), and deployed the application end-to-end (Render + Vercel).',
    tags: ['React', 'FastAPI', 'PostgreSQL', 'JWT Authentication', 'Google Gemini AI'],
    github: 'https://github.com/muskanalirizvi/Biblioteq.git',
    demo: 'https://biblioteq-six.vercel.app/',
  },
  {
    id: 'ai-travel-planner',
    category: 'Agentic AI',
    title: 'AI Travel Planner– Full-Stack Conversational AI Trip Assistant',
    summary:
      'Full-stack conversational travel assistant with a LangGraph agent planning trips through natural-language chat.',
    description:
      'Built a full-stack conversational travel assistant with a FastAPI backend and LangGraph agent orchestrating Google Gemini to plan trips through natural-language chat. Equipped the agent with tool-calling for real-time weather, currency conversion, distance/route lookup, web search, and Google Calendar event creation, plus MongoDB-backed persistent user preferences. Deployed end-to-end on Render (API) and Vercel (React + Vite frontend) with CORS-secured cross-origin access.',
    tags: ['React', 'FastAPI', 'LangGraph', 'Google Gemini', 'MongoDB'],
    github: 'https://github.com/muskanalirizvi/AI-travel-planner.git',
    demo: 'https://ai-travel-planner-umber-one.vercel.app/',
  },
  {
    id: 'sentimentiq',
    category: 'Machine Learning',
    title: 'SentimentIQ – AI-Powered Sentiment Analysis Tool',
    summary:
      'Bidirectional LSTM sentiment analysis app trained on Amazon review data with confidence scoring.',
    description:
      'Developed a sentiment analysis application using a Bidirectional LSTM neural network, trained on Amazon review data to classify text as Positive or Negative with confidence scoring. Designed the model architecture (Embedding + stacked Bidirectional LSTM layers + Dropout regularization) and implemented a full preprocessing pipeline (tokenization, sequence padding) for consistent inference. Built a Streamlit frontend for real-time predictions, with model and tokenizer artifacts serialized for lightweight, reproducible deployment. Documented the complete training workflow in a Jupyter notebook, covering data preprocessing, model training, and evaluation.',
    tags: ['Python', 'TensorFlow/Keras', 'Streamlit', 'Pandas'],
    github: 'https://github.com/muskanalirizvi/SentimentIQ.git',
    demo: '',
  },
  {
    id: 'patient-health-api',
    category: 'Machine Learning',
    title: 'Patient Health API – CRUD & Diabetes Prediction',
    summary:
      'Full-stack patient management system with CRUD operations and a diabetes risk prediction endpoint.',
    description:
      'Developed a full-stack patient management system with a FastAPI backend supporting complete CRUD operations (create, read, update, delete) for patient health records. Trained and integrated a Gradient Boosting Classifier to predict diabetes risk from 8 health metrics (glucose, BMI, blood pressure, etc.), returning probability-scored predictions via a dedicated API endpoint. Built an interactive Streamlit dashboard with Plotly visualizations displaying patient statistics, prediction summaries, and recent activity. Implemented a lightweight JSON-based local data store for patient records, with a health-check endpoint for system status monitoring.',
    tags: ['Python', 'FastAPI', 'Streamlit', 'Pandas', 'Plotly', 'Scikit-learn'],
    github: 'https://github.com/muskanalirizvi/Patient-Health-API-CRUD-Testing-with-ML-Prediction.git',
    demo: '',
  },
];

export default projects;
