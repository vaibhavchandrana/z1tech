import React, { useEffect, useState } from "react";
import "./App.css";
import { getBreedList, getCatImages } from "./api";
import CardView from "./CardView";
import ListView from "./ListView";

const App = () => {
  const [limit, setLimit] = useState(10);
  const [breed, setBreed] = useState("");
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [breedList, setBreedList] = useState([]);
  const [viewMode, setViewMode] = useState("card");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const breeds = await getBreedList();
      setBreedList(breeds);
      const images = await getCatImages(limit, breed, page);
      setImages(images);
      setLoading(false);
    }
    fetchData();
  }, [limit, breed, page]);

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <div>
      <nav>Cat Hub</nav>
      <main>
        <div style={{ margin: "16px 0", padding: "8px", borderRadius: "8px" }}>
          <label htmlFor="breed-select" style={{ marginRight: "8px" }}>Filter by Breed:</label>
          <select
            id="breed-select"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
            style={{ padding: "4px", borderRadius: "4px" }}
          >
            <option value="">All Breeds</option>
            {breedList.map((b) => (
              <option key={b.id} value={b.id}>
                {b.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <button onClick={() => setViewMode("card")}>Card View</button>
          <button onClick={() => setViewMode("list")}>List View</button>
        </div>
        <div>
          {loading ? (
            <p>Loading...</p>
          ) : viewMode === "card" ? (
            <CardView images={images} />
          ) : (
            <ListView images={images} />
          )}
        </div>
        <div style={{ display: "flex", justifyContent: "center", marginTop: "16px" }}>
          <button onClick={handlePreviousPage} disabled={page === 1}>
            Previous Page
          </button>
          <button onClick={handleNextPage}>Next Page</button>
        </div>
      </main>
    </div>
  );
};

export default App;
