import React, { Component } from "react";

export default class Newsitem extends Component {
  render() {
    let { title, discription, imageurl, newsurl, author, date, source } =
      this.props;
    return (
      <div>
        <div className="card text-bg-dark mb-3 ">
          <span
            class="position-absolute top-0  translate-middle badge rounded-pill bg-danger"
            style={{ left: "90%", zIndex: "1" }}
          >
            {source}
          </span>
          <img src={imageurl} class="card-img-top" alt="image" />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{discription}...</p>
            <p class="card-text">
              By {author} on {new Date(date).toGMTString()}
            </p>
            <a href={newsurl} className="btn btn-sm btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
