import React, { Component } from "react";
import Spinner from "./Spinner";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
  static defaultProps = {
    category: "General",
    language: "en",
    country: "in",
  };

  static propTypes = {
    category: PropTypes.string,
    language: PropTypes.string,
    country: PropTypes.string,
  };

  constructor(props) {
    super(props);

    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0,
    };
  }

  async componentDidMount() {
   this.updateNews();

  }

  updateNews=async()=>{
    this.props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9a5fd96991a0456fb77fe19106040e8e&page=${this.state.page}&pageSize=20`;
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress(30);
    let parseData = await data.json();
    this.props.setProgress(70);
    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
      loading: false,
    });
    this.props.setProgress(100);
  }



  fetchMoreData = async () => {
    this.setState({
      page: this.state.page  + 1
    });
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9a5fd96991a0456fb77fe19106040e8e&page=${this.state.page+1}&pageSize=20`;
    // this.setState({ loading: true });
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parseData.articles),
      totalResults: parseData.totalResults
    })
  };

  // <InfiniteScroll
  //         dataLength={this.state.articles.length}
  //         next={this.fetchMoreData}
  //         hasMore={this.state.articles.length !== this.state.totalResults}
  //         loader={<Spinner />}
  //       ></InfiniteScroll>


  prevNews=()=>{
    
    this.setState({
      page : this.state.page - 1,
      
    })
    this.updateNews();
   
  }


  nextNews=()=>{
    
    this.setState({
      page : this.state.page + 1,
    
    })
    this.updateNews();
  
  }

  render() {
    return (
      <>
        <h2 className="text-center">
          Top {this.props.category} Headlines-Stay Updated
          {this.state.loading && <Spinner />}
           </h2> 
        
          <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<h4 className="text-center"><Spinner/></h4>}
        >

          <div className="container">
          <div className="row my-4">
            { this.state.articles.map((element) => {
              return  <div className="col-md-4" key={element.url} >
                  <NewsItem
                  
                    title={
                      element.title ? element.title.slice(0, 55) : "Latest News"
                    }
                    description={
                      element.description
                        ? element.description.slice(0, 68)
                        : "Click to Read Out"
                    }
                    imgUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              
            })}
          </div>
          </div>
          </InfiniteScroll>
          {/* <div className="d-flex justify-content-between">
          <button  disabled ={this.state.page<=1}type="button" className="btn btn-info" onClick={this.prevNews}>Prev</button>
          <button type="button" className="btn btn-info" onClick={this.nextNews}>Next</button>
          </div> */}
        

        </>
      
    );
  }
}
