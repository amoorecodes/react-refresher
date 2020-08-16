import React, { Component } from "react";
import { Link, Redirect } from "@reach/router";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      redirect: false,
    };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("EB caught an error: ", error, info);
  }

  componentDidUpdate() {
    if (this.state.hasError) {
      setTimeout(() => this.setState({ redirect: true }), 5000);
    }
    this.setState({ redirect: true });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" noThrow />;
    }
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

export default ErrorBoundary;
