import React, { Component } from "react";

export default class Carousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photos: [],
      active: 0,
    };
  }
  static getDerivedStateFromProps({media}) {
    let photos = ['http://placecorgi.com/600/600']
    if(media.length) {
      photos = media.map(({large}) => large)
    }

    return { photos }
  }

  render() {

    cosnt {photos, active} = this.state
    return (
    <div className="carousel">
      <img src={photos[active]} alt="animal" />
      <div className="carousel-smaller">
        {photos.map((photo, index) => (
          <img 
          key={photo}
          onClick={this.handleClick}
          data-index={index}
          className={index === active ? "active" : ""}
          alt="animal thumbail"
          />
        ))}
        
      </div>
    </div>
    );
  }
}
