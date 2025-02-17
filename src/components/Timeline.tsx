import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="March 2025 - Present"
              iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
              icon={<FontAwesomeIcon icon={faBriefcase} />}
            >
              <h2 className="vertical-timeline-element-title">Comcast</h2>
              <h3 className="vertical-timeline-element-title">Software Engineer Intern</h3>
              <h4 className="vertical-timeline-element-subtitle">Philadelphia, PA</h4>
              <p>• Incoming Software Engineer Intern Spring/Summer 2025 on Comcast Next Generation Access Networks Team </p>
            </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="December 2024 - February 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h2 className="vertical-timeline-element-title">Palantir Technologies</h2>
            <h3 className="vertical-timeline-element-title">Software Engineer Fellow</h3>
            <h4 className="vertical-timeline-element-subtitle">New York, NY</h4>
            <p>• Developed cybersecurity platform with Palantir AIP to analyze 1M+ data points from SIEM logs, intrusion detection systems, and malware repos, displaying 84% accuracy in detecting threats to critical infrastructures. </p>
            <p>• Reduced threat response times by 27% by implementing machine learning pipelines, using TensorFlow for training and Apache Kafka for real-time processing, enhancing cyberattack mitigation.</p>
            <p>• Mapped cyber-attack patterns with Palantir Knowledge Graph, resulting in 13% improvement in threat detection.</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="May 2024 - Present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h2 className="vertical-timeline-element-title">Zhou Robotics Lab</h2>
            <h3 className="vertical-timeline-element-title">Machine Learning Researcher</h3>
            <h4 className="vertical-timeline-element-subtitle">Philadelphia, PA</h4>
            <p>• Developed Python library for Neural Network Architecture to support multi-robot coverage control, leveraging Spatio-Temporal features for efficient perception, communication, and action loops in decentralized systems.</p>
            <p>• Engineered Spatio-Temporal Graph Neural Network (STGNN) with attention mechanisms using PyTorch to process over 100,000 unique spatio-temporal data points across 32-robot multi-agent system.</p>
            <p>• Modified CNN-based deep-learning model, enhancing multi-agent robot obstacle detection accuracy by 20%.</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="April 2024 - September 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h2 className="vertical-timeline-element-title">InvestIQ LLC</h2>
            <h3 className="vertical-timeline-element-title">Software Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Pittsburgh, PA</h4>
            <p>• Engineered financial robo-advisor on full stack solution serving 500+ active users, utilizing LSTM-based model for stock prediction and sentiment analysis, providing actionable stock market investment advice.</p>
            <p>• Collaborated with business analysts to integrate stock market technical indicators into the neural network on AWS SageMaker, enhancing the model's input features and prediction accuracy by 10%.</p>
            <p>• Orchestrated CI/CD pipelines and unit tests, improving deployment efficiency by 24% and test coverage by 32%.</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="October 2023 - May 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h2 className="vertical-timeline-element-title">University of Pennsylania, Stevens Center for Innovation in Finance</h2>
            <h3 className="vertical-timeline-element-title">Software Engineer Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Philadelphia, PA</h4>
            <p>• Built Web App for Stevens Center to assist prospective college students in analyzing their potential college aid by leveraging Java and Spring Boot, accomplishing reliable evaluations for estimated user base of 3k+ students. </p>
            <p>• Migrated data processing workflows to AWS S3 and Lambda, streamlining data handling and reducing processing time by 30%, while ensuring better scalability for handling high volumes of financial aid data.</p>
            <p>• Optimized SQL queries and implemented caching strategies within PostgreSQL to reduce access latency by 8%.</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="February 2023 - September 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h2 className="vertical-timeline-element-title">Kumon North America, Inc.</h2>
            <h3 className="vertical-timeline-element-title">Head Teaching Assistant</h3>
            <h4 className="vertical-timeline-element-subtitle">Spring House, PA</h4>
            <p>• Tutored children K-12 in Math, covering topics from basic counting to Calculus 2, fostering strong foundational skills and advanced problem-solving abilities.</p>
            <p>• Tutored children K-12 in Reading, spanning from phonetic sounds to Shakespearean English, enhancing students' reading comprehension and fluency.</p>
            <p>• Input grades into a CMS Grading system and helped organize curriculums for over 75+ students, contributing to a 20% increase in overall academic performance and streamlined reporting processes.</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="June 2022 - August 2022"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h2 className="vertical-timeline-element-title">Philadelphia Chinatown Development Corportation (PCDC)</h2>
            <h3 className="vertical-timeline-element-title">Research Analyst Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Philadelphia, PA</h4>
            <p>• Proficiently organized and managed project-related data using Microsoft Excel, implementing cleaning and validation processes, resulting in a 20% increase in data accuracy.</p>
            <p>• Led data collection efforts for a significant urban development project, utilizing diverse data sources, which contributed to a 15% improvement in decision-making efficiency.</p>
            <p>• Collaborated with cross-functional teams to interpret and present data insights, facilitating strategic planning and resource allocation, leading to a 10% reduction in project costs and a 25% increase in resource utilization efficiency.</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;