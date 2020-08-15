import React, { Component } from "react";
import pet from "@frontendmasters/pet";

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
        breed: animal.breed.primary,
        location: `${animal.contact.address.city}, ${animal.contact.address.state}`,
        media: animal.photos,
        loading: false,
        description: animal.description,
      });
    }, console.error);

    console.log("there is no state? :", this.state);
  }

  render() {
    console.log("state", this.state);

    if (this.state.loading) {
      <h>Loading...</h>;
    }

    const { animal, breed, location, description, name } = this.state;
    return (
      <div className="details">
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} - ${breed} - ${location}`}</h2>
          <button>Adopt ${name}</button>
          <p>${description}</p>
        </div>
      </div>
    );
  }
}
export default Details;
