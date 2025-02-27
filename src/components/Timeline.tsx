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
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;