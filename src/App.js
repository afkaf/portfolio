import React, { Component } from "react";
import {
  Header,
  Footer,
  About,
  Certificates,
  Portfolio,
  Resume,
  Testimonials,
} from "./components/index";
import resumeData from "./resumeData";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header resumeData={resumeData} />
        <Portfolio resumeData={resumeData} />
        <About resumeData={resumeData} />

        <Resume resumeData={resumeData} />

        <Testimonials resumeData={resumeData} />
        <Footer resumeData={resumeData} />
      </div>
    );
  }
}

export default App;
