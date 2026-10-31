import React from "react";
import {
  Main,
  Timeline,
  About,
  Project,
  Navigation,
  Footer,
} from "./components";
import './index.scss';

function App() {
    return (
    <div className="main-container">
        <Navigation />
        <main>
            <Main/>
            <About/>
            <Timeline/>
            <Project/>
        </main>
        <Footer />
    </div>
    );
}

export default App;
