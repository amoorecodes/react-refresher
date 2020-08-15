import React from "react";
import Pet from "./Pet";

export default function Results({ pets }) {
  return (
    <div className="search">
      {pets.length ? (
        pets.map((pet) => (
          <Pet
            animal={pet.type}
            key={pet.id}
            name={pet.name}
            breed={pet.breed}
            media={pet.photos}
            location={`${pet.conact.address.city}, ${pet.contact.address.state} `}
            id={pet.id}
          />
        ))
      ) : (
        <p>No Pets Found</p>
      )}
    </div>
  );
}
