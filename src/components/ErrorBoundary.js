import React, { Component } from "react";
import Link from "@reach/router";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }
  static getDerivedStateFromErrror() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("EB caught an error: ", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <h1>
          There was an error. Please head back to home page{" "}
          <Link to="/">Home</Link>
        </h1>
      );
    }
    return this.props.children;
  }
}
