import React from "react";

const ListView = ({ images }) => {
  return (
    <table className="list-view">
      <thead>
        <tr>
          <th>Image</th>
          <th>Breed</th>
          <th>Alt Name</th>
        </tr>
      </thead>
      <tbody>
        {images.map((image) => (
          <tr key={image.id} className="list-item">
            <td>
              <img src={image.url} alt={image.breeds[0]?.name || "Cat"} width="100" height="100" />
            </td>
            <td>{image.breeds[0]?.name || "Unknown Breed"}</td>
            <td>{image.breeds[0]?.alt_names || "No alternative names"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ListView;
