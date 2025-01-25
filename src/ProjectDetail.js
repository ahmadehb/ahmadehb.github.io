import React from "react";
import { useParams } from "react-router-dom";
import "./ProjectDetail.css";

// Import images directly
import outputImage from "./assets/output.png";
import sharedImage from "./assets/SharedImage.png";
import bioinformaticsImage from "./assets/Bioinformatics.jpeg";

function ProjectDetail() {
  const { id } = useParams(); // Get project ID from the URL

  // Project details
  const projectDetails = {
    "personal-project": {
      title: "Data Analysis Using SQL, Python, and Machine Learning",
      subtitle: "Analysis of Gaming Behavior Dataset",
      description: `
        This project explores the relationship between player demographics, gaming engagement levels, and in-game behavior.
        With a focus on understanding factors that drive player retention, engagement, and spending, I investigated trends
        across various metrics such as session duration, achievements unlocked, and game difficulty. Using machine learning
        models, I predicted player engagement levels and identified the most important factors influencing gaming habits.

        My analysis incorporated techniques such as SQL querying, data visualization, and custom machine learning implementations.
        I utilized the dataset to analyze demographic trends (age, gender, location) and their correlation with in-game purchases,
        while also exploring engagement patterns across different game genres. Visualizations such as bar plots, stacked charts,
        and line graphs were created to convey actionable insights. Additionally, predictive models like Random Forest and
        custom-built logistic regression were developed to classify player engagement levels.
      `,
      image: outputImage, // Use imported image
      pdfLink: "/GameAnalysisPDF.pdf",
      technologies: [
        "Python (pandas, numpy, matplotlib, seaborn, scikit-learn)",
        "SQL (SQLite)",
        "TeX (LaTeX for report generation)",
      ],
      date: "December 2024",
      affiliation: "Independent Project",
      githubLink: "https://github.com/ahmadehb/GamingBehaviorAnalysis",
    },
    "group-project": {
      title: "Sentiment Analysis Using NLP, Python, and Machine Learning",
      subtitle: "Analysis of Amazon Product Reviews",
      description: `
        This project focuses on sentiment analysis of Amazon product reviews, leveraging state-of-the-art Natural Language
        Processing (NLP) techniques to derive insights from customer feedback.

        We analyzed over 568,000 Amazon reviews, exploring customer sentiment to understand trends, highlight key review themes,
        and identify patterns in customer behavior. Using a pre-trained Hugging Face Twitter-roBERTa-base model, the project
        processed textual data to classify reviews into Positive, Neutral, and Negative sentiments. This project showcases the
        practical applications of NLP in business insights and strategy enhancement.
      `,
      image: sharedImage, // Use imported image
      pdfLink: "/SentimentAnalysis.pdf",
      technologies: [
        "Python: For scripting, EDA, and visualization.",
        "Hugging Face Transformers: Pre-trained roBERTa model for NLP.",
        "PyTorch: Model inference and optimization.",
        "Matplotlib & Seaborn: Data visualizations.",
        "Pandas: Data preprocessing.",
      ],
      date: "November 2024",
      affiliation: "National Student Data Corps",
      githubLink: "",
    },
    "bioinformatics-project": {
      title: "Bioinformatics Using Python",
      subtitle: "Analysis of DNA Dataset",
      description: `
        This project focuses on bioinformatics analysis, implementing key computational biology techniques to process nucleotide
        sequences, identify open reading frames, and translate them into protein sequences. The aim is to derive biologically
        significant insights by analyzing the overlaps and patterns in the sequence data.

        I developed a Python script to handle essential bioinformatics tasks, including reading sequence and codon files,
        calculating reverse complements, identifying reading frames, and translating nucleotide sequences into amino acids.
        The project highlights the importance of computational tools in modern biology for analyzing genomic data.
      `,
      image: bioinformaticsImage, // Use imported image
      technologies: [
        "Python (Bioinformatics algorithms)",
        "FASTQ/FASTA Parsing",
        "Command Line Interface (CLI)",
      ],
      date: "April 2024",
      affiliation: "CSB 10 (Research Methods in Computational Biology",
      githubLink: "https://github.com/ahmadehb/BioinfotmaticsProject",
    },
  };

  const project = projectDetails[id];

  if (!project) {
    return (
      <div className="project-detail-container">
        <h1>Project not found.</h1>
      </div>
    );
  }

  return (
    <div className="project-detail-container">
      <h1>{project.title}</h1>
      <h3>{project.subtitle}</h3>
      <img src={project.image} alt={project.title} className="project-detail-image" />
      <p>{project.description}</p>
      <div className="project-info">
        <p>
          <strong>Technologies Used:</strong> {project.technologies.join(", ")}
        </p>
        <p>
          <strong>Date:</strong> {project.date}
        </p>
        <p>
          <strong>Affiliation:</strong> {project.affiliation}
        </p>
        {project.pdfLink && (
          <p>
            <a href={project.pdfLink} target="_blank" rel="noopener noreferrer">
              Download Full Project as PDF
            </a>
          </p>
        )}
        {project.githubLink && (
          <p>
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </p>
        )}
      </div>
    </div>
  );
}

export default ProjectDetail;
