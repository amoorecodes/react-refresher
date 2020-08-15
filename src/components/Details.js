import React, { Component } from "react";
import pet from "@frontendmasters/pet";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";

class Details extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
    };
  }

  async componentDidMount() {
    await pet.animal(this.props.id).then(({ animal }) => {
      this.setState({
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

  render() {
    if (this.state.loading) {
      return <h1>Loading...</h1>;
    }

    const { animal, breed, location, description, name, media } = this.state;
    return (
      <div className="details">
        <Carousel media={media} />
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} - ${breed} - ${location}`}</h2>
          <button>Adopt {name}</button>
          <p>${description}</p>
        </div>
      </div>
    );
  }
}
export default function  DetailsWithErrorBoundary( props) => {
  return <ErrorBoundary>
    <Details {...props}/>
  </ErrorBoundary>
};
