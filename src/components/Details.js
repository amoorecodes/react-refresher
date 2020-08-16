import React, { Component } from "react";
import pet from "@frontendmasters/pet";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import ThemeContext from "../ThemeContext";
import { navigate } from "@reach/router";
import Modal from "../hooks/Modal";

class Details extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      showModal: false,
    };
  }

  async componentDidMount() {
    await pet.animal(this.props.id).then(({ animal }) => {
      // console.log("animal: ", animal);
      this.setState({
        url: animal.url,
        name: animal.name,
        animal: animal.type,
        breed: animal.breeds.primary,
        location: `${animal.contact.address.city}, ${animal.contact.address.state}`,
        media: animal.photos,
        loading: false,
        description: animal.description,
      });
    }, console.error);
  }

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };

  adopt = () => navigate(this.state.url);

  render() {
    if (this.state.loading) {
      // throw new Error("render error");
      return <h1>Loading...</h1>;
    }

    const {
      animal,
      breed,
      location,
      description,
      name,
      media,
      showModal,
    } = this.state;
    return (
      <div className="details">
        <Carousel media={media} />
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} - ${breed} - ${location}`}</h2>
          <ThemeContext.Consumer>
            {(themeHook) => (
              <button
                onClick={this.toggleModal}
                style={{ backgroundColor: themeHook[0] }}
              >
                Adopt {name}
              </button>
            )}
          </ThemeContext.Consumer>
          <p>{description}</p>
          {showModal ? (
            <Modal>
              <div>
                <h1>Would you like to adopt {name}?</h1>
                <div className="buttons">
                  <button onClick={this.adopt}>YES</button>
                  <button onClick={this.toggleModal}>NO</button>
                </div>
              </div>
            </Modal>
          ) : null}
        </div>
      </div>
    );
  }
}
export default function DetailsErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <Details {...props} />
    </ErrorBoundary>
  );
}
