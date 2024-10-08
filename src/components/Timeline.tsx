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
            <p>• Contributing to the development of a Neural Network architecture for a multi-robotic coverage control systems, with a focus on the integration of Spatio-Temporal features to enhance performance in dynamic environments.</p>
            <p>• Developing a CNN-based perception module that processes sensor data with a limited field of view, expected to enhance obstacle detection accuracy by 25% and improving overall decentralized navigation efficiency.</p>
            <p>• Engineering a Spatio-Temporal Graph Neural Network with attention mechanisms using PyTorch, aimed to enhance robot communication and coordination by 40%, resulting in more efficient decision-making.</p>
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
            <p>• Developed a neural network in PyTorch for analyzing tech stocks, using CNNs to identify price patterns and LSTMs to capture sequential trends, resulting in over 85% accuracy in historical stock price predictions.</p>
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
            <p>• Spearheaded cross-functional collaboration within an Agile framework to conceptualize and develop a college financial analysis tool, leveraging Java, PostgreSQL, and Spring Boot on AWS EC2 instances.</p>
            <p>• Developed the Student Aid Index (SAI) algorithm, enhancing financial assessment accuracy by 92.99%, utilizing AWS Lambda for serverless computing and AWS S3 for secure storage of algorithmic data inputs.</p>
            <p>• Enhance client-side data retrieval by optimizing SQL query performance and implementing efficient caching strategies using PostgreSQL, resulting in a 25% reduction in data access latency and improved user experience.</p>
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