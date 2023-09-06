import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Loading from "./Loading";
import PropTypes from "prop-types";
import newsimage from "./world-news.png";

export default class News extends Component {
  static defaultProps = {
    pageSize: 6,
    category: "gneral",
  };

  static propTypes = {
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async updateNews() {
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=9a95787629a34197b36403c324caf8d1&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let fetcheddata = await data.json();
    this.setState({
      articles: fetcheddata.articles,
      totalResults: fetcheddata.totalResults,
      loading: false,
    });
  }

  async componentDidMount() {
    this.updateNews();
  }

  next = async () => {
    this.setState({
      page: this.state.page + 1,
    });
    this.updateNews();
  };

  previous = async () => {
    this.setState({
      page: this.state.page - 1,
    });
    this.updateNews();
  };

  render() {
    return (
      <div className="container my-3">
        <div className="row">
          <div>
            <h2 className="text-center">
              <img src={newsimage} height="70%" width="7%"></img>News
              Hunt-Headlines.....
            </h2>
            {this.state.loading && <Loading />}
          </div>
          {!this.state.loading &&
            this.state.articles.map((element) => {
              return (
                <div className="col-md-4 my-3" key={element.url}>
                  <Newsitem
                    title={
                      element.title ? element.title.slice(0, 40) : "News Hunt"
                    }
                    discription={
                      element.description
                        ? element.description.slice(0, 80)
                        : "Sorry some contents are missing"
                    }
                    imageurl={
                      element.urlToImage
                        ? element.urlToImage
                        : "https://c.ndtvimg.com/2023-09/d9cv08r_earthlike-planet-solar-system-study-solar-system-planet-nine_625x300_05_September_23.jpg"
                    }
                    newsurl={element.url}
                    author={element.author ? element.author : "Unknown"}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
        </div>
        <div className="d-flex justify-content-between">
          <button
            type="button"
            disabled={this.state.page <= 1}
            onClick={this.previous}
            className="btn btn-dark"
          >
            &laquo; Previous
          </button>
          <button
            type="button"
            disabled={
              this.state.page + 1 >
              this.state.totalResults / this.props.pageSize
            }
            onClick={this.next}
            className="btn btn-dark"
          >
            Next &raquo;
          </button>
        </div>
      </div>
    );
  }
}
