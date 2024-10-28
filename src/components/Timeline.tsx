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
            date="May 2024 - Present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h2 className="vertical-timeline-element-title">Zhou Robotics Lab</h2>
            <h3 className="vertical-timeline-element-title">Machine Learning Researcher</h3>
            <h4 className="vertical-timeline-element-subtitle">Philadelphia, PA</h4>
            <p>• Developed Python library for Neural Network Architecture to support multi-robot coverage control, leveraging Spatio-Temporal features for efficient perception, communication, and action loops in decentralized systems.</p>
            <p>• Engineering Spatio-Temporal Graph Neural Network (STGNN) with attention mechanisms using PyTorch to process over 100,000 unique spatio-temporal data points across 32-robot multi-agent system.</p>
            <p>• Modifying CNN-based deep-learning model that processes sensor data with limited vision, enhancing multi-agent robot obstacle detection accuracy by 20% and improving decentralized navigation efficiency.</p>
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
            <p>•Engineered financial robo-advisor serving 500+ active users, utilizing CNN and LSTM-based models for stock prediction and sentiment analysis, providing actionable stock market investment advice.</p>
            <p>• Collaborated with business analysts to integrate stock market technical indicators like RSI, MACD, and Bollinger Bands into the neural network, enhancing the model's input features and increasing prediction accuracy by 10%.</p>
            <p>• Applied advanced data cleaning and preprocessing techniques using Python and Pandas to manage and refine over 500,000 data records from diverse sources, enhancing data quality and model training efficiency by 30%.</p>
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
            <p>• Built Web App for Stevens Center to assist prospective college students in analyzing their potential college aid by leveraging Java and Spring Boot, accomplishing reliable evaluations for estimated user base of 2k+ students.</p>
            <p>• Created the Student Aid Index algorithm, improving financial assessment accuracy by 97% through statistical modeling of income, asset data, and enrollment variables, utilizing AWS S3 for algorithmic data storage.</p>
            <p>• Enhanced client-side data retrieval by optimizing SQL query performance and implementing efficient caching strategies within PostgreSQL to reduce data access latency by 8%.</p>
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