import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, description, imgUrl, newsUrl, author, date, source } =
      this.props;
    return (
      <div>
        <div
          className="card my-3"
          style={{
            width: "20rem",
            height: "32rem",
            border: "3px solid black",
            boxShadow: "10px 8px 5px",
          }}
        >
          <img
            style={{ height: "18rem" }}
            src={
              imgUrl? imgUrl: "https://zem.outbrainimg.com/p/srv/sha/d3/72/01/806a5ac5edc5616a1632da3540ad154109.jpg?w=300&h=157&fit=crop&crop=center&thomcrop&fm=jpg&gam=20&testgroup"
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body" style={{ backgroundColor: "#ffffff" }}>
            <h5 className="card-title">
              {title}...
              <span className="position-absolute top-0  translate-middle badge rounded-pill " style={{backgroundColor: "#474242" , left:"85%" }}>
                {source}
              </span>
            </h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-muted">
                By {!author ? "Unkown" : author} {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read Out..
            </a>
          </div>
        </div>
      </div>
    );
  }
}
