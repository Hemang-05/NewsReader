import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {

  state={
    progress : 10
  }

  setProgress=(progress)=>{
      this.setState({progress: progress})
  }
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <Navbar />
          <LoadingBar
            color="#f11946"
            progress={this.state.progress}
           
          />

          <div className="p-3 mb-2 bg-white">
            <Routes>
              <Route
                exact
                path="/"
                element={<News setProgress={this.setProgress}   key="general" category="General" />}
              ></Route>
              <Route
                exact
                path="/business"
                element={<News setProgress={this.setProgress}   key="business" category="Business" />}
              ></Route>
              <Route
                exact
                path="/Entertainment"
                element={<News setProgress={this.setProgress}   key="Entertainment" category="Entertainment" />}
              ></Route>
              <Route
                exact
                path="/Health"
                element={<News setProgress={this.setProgress}   key="Health" category="Health" />}
              ></Route>
              <Route
                exact
                path="/Science"
                element={<News setProgress={this.setProgress}   key="Science" category="Science" />}
              ></Route>
              <Route
                exact
                path="/Sports"
                element={<News setProgress={this.setProgress}   key="Sports" category="Sports" />}
              ></Route>
              <Route
                exact
                path="/Technology"
                element={<News setProgress={this.setProgress}   key="Technology" category="Technology" />}
              ></Route>
            </Routes>
          </div>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}
