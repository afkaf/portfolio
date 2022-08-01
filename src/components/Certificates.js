import React, { Component } from "react";

export default class Certificates extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="certificates">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1 style={{ fontSize: "3rem" }}>My Certificates.</h1>
            <div
              id="portfolio-wrapper"
              className="bgrid-quarters s-bgrid-thirds cf"
            >
              {resumeData.certificates &&
                resumeData.certificates.map((item) => {
                  return (
                    <div
                      style={{ width: "45%" }}
                      className="columns portfolio-item"
                    >
                      <div className="item-wrap">
                        <img src={item.imgurl} alt="" />

                        <form action={item.srcurl} target="_blank">
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
