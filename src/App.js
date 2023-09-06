import "./App.css";
import { Routes, Route } from "react-router-dom";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
// import Footer from "./components/Footer";

export default class extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "aqua" }}>
        <Navbar />
        <Routes>
          <Route
            exact
            path="/"
            element={<News key="general" pageSize={6} category="general" />}
          />
          <Route
            exact
            path="/business"
            element={<News key="business" pageSize={6} category="business" />}
          ></Route>
          <Route
            exact
            path="/entertainment"
            element={
              <News key="entertainment" pageSize={6} category="entertainment" />
            }
          />
          <Route
            exact
            path="/health"
            key="health"
            element={<News pageSize={6} category="health" />}
          />
          <Route
            exact
            path="/science"
            element={<News key="science" pageSize={6} category="science" />}
          />
          <Route
            exact
            path="/sports"
            element={<News key="sports" pageSize={6} category="sports" />}
          />
          <Route
            exact
            path="/technology"
            element={
              <News key="technology" pageSize={6} category="technology" />
            }
          />
        </Routes>
        <div
          className="foot"
          style={{
            backgroundColor: "black",
            width: "100%",
            height: "10%",
            textAlign: "center",
            color: "white",
          }}
        >
          <h1>-------------------------</h1>
        </div>
      </div>
    );
  }
}
