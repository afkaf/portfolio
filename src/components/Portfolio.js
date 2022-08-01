import React, { Component } from "react";

export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;

    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1 style={{ fontSize: "3rem" }}>Some of My Works.</h1>
            <div
              id="portfolio-wrapper"
              className="bgrid-quarters s-bgrid-thirds cf"
            >
              {resumeData.portfolio &&
                resumeData.portfolio.map((item) => {
                  return (
                    <div
                      style={{ width: "45%" }}
                      className="columns portfolio-item"
                    >
                      <div className="item-wrap">
                        <video width="100%" controls autoPlay muted loop>
                          <source src={item.src} type="video/mp4" />
                        </video>
                        <form
                          action="https://ipfs.io/ipfs/QmXMsZw1CwoPRqxjS6gWvoAsfEu1N8vRjDKmfEgRLfbXG7/home.html?"
                          target="_blank"
                        >
                          <button
                            style={{
                              textAlign: "start",
                            }}
                            className="overlay"
                          >
                            <div
                              style={{
                                height: "100%",
                                margin: "0",
                                padding: "1.2em",
                              }}
                              className="portfolio-item-meta"
                            >
                              <h5>{item.name}</h5>
                              <p>{item.description}</p>
                            </div>
                          </button>
                        </form>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
