import React from "react";

const CardView = ({ images }) => {
  return (
    <div className="card-view">
      {images.map((image) => (
        <div key={image.id} className="card">
          <img src={image.url} alt={image.breeds.length > 0 ? image.breeds[0].name : "Cat"} height="200" width="200" />
          <div className="card-info">
            <h3>{image.breeds.length > 0 ? image.breeds[0].name : "Unknown Breed"}</h3>
            <p>{image.breeds.length > 0 ? image.breeds[0].alt_names : "No alternative names"}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardView;
