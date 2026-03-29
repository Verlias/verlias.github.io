import React, { useEffect } from "react";
import {
  Main,
  Timeline,
  Expertise,
  Project,
  Navigation,
  Footer,
} from "./components";
import FadeIn from './components/FadeIn';
import './index.scss';

function App() {
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, []);

    return (
    <div className="main-container">
        <div className="noise-overlay"></div>
        <Navigation />
        <FadeIn transitionDuration={700}>
            <Main/>
            <Expertise/>
            <Timeline/>
            <Project/>
        </FadeIn>
        <Footer />
    </div>
    );
}

export default App;