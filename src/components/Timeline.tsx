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
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="July 2024 - present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h2 className="vertical-timeline-element-title">InvestIQ</h2>
            <h3 className="vertical-timeline-element-title">Product Manager</h3>
            <h4 className="vertical-timeline-element-subtitle">Pittsburgh, PA</h4>
              <p>• Managed a team of 5 software engineers, delegating tasks and ensuring timely delivery of high-quality software within Agile and Scrum frameworks, achieving a 25% reduction in project timelines.</p>
              <p>• Facilitated sprint planning, daily stand-ups, and retrospective meetings, driving a 20% increase in team productivity and fostering a culture of continuous improvement.</p>
              <p>• Collaborated with cross-functional teams, including product management, design, and QA, to streamline development processes and enhance project delivery speed by 15%, aligning with business objectives.</p>
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
            <p>• Researched Spatio-Temporal Graph Neural Networks & Attention-Based mechanisms in Advancing Coverage and Exploration within Multi-Robot Systems</p>
            <p>• Engineered an LPAC architecture for multi-robotic coverage control, integrating a Spatio-Temporal Graph Neural Network with attention mechanisms, resulting in a 20% increase in area coverage efficiency</p>
            <p>• Implemented a CNN-based perception module that processes sensor data with a limited field of view, enhancing obstacle detection accuracy by 25% and improving overall decentralized navigation efficiency</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="April 2024 - Present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h2 className="vertical-timeline-element-title">InvestIQ</h2>
            <h3 className="vertical-timeline-element-title">Software Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Pittsburgh, PA</h4>
            <p>• Engineered and implemented advanced machine learning models and statistical algorithms tailored for trading and risk management, utilizing PyTorch achieving a significant 15% increase in portfolio returns</p>
            <p>• Collaborated with business analysts to engineer trading algorithms, integrating technical indicators like RSI, MACD, and Bollinger Bands, achieving a 10% increase in trading strategy effectiveness</p>
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
            <p>• Spearheaded cross-functional collaboration within an Agile framework to conceptualize and develop an college financial analysis tool, leveraging Java, PostgreSQL, and SpringBoot on AWS EC2 instances</p>
            <p>• Developed the Student Aid Index (SAI) algorithm, enhancing financial assessment accuracy by 92.99%, utilizing AWS Lambda for serverless computing and AWS S3 for secure storage of algorithmic data inputs</p>
            <p>• Implemented advanced functionalities, utilizing PostgreSQL for efficient data management and Spring Boot for API development, achieving a 30% improvement in college expense estimation accuracy</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;