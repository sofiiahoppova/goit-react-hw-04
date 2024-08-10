import { useState, useEffect } from "react";
import axios from "axios";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import SearchBar from "./components/SearchBar/SearchBar";
import "./App.css";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchingValue, setSearchingValue] = useState("");

  /* useEffect(() => {
    async function getPhotos() {
      const { data } = await axios.get(
        "https://api.unsplash.com/search/photos",
        {
          headers: "A7YRUc57iXs06cE1X3dTKf3BBSG-taztQvX54TDLNgI",
        }
      );
      console.log(data);
    }
    getPhotos();
  }, [searchingValue]); */

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    setSearchingValue(form.elements.searchingValue.value);
  };

  return (
    <div>
      <SearchBar handleSubmit={handleSubmit} />
      {isLoading && <Loader />}
      {error && <ErrorMessage />}
      {true && <LoadMoreBtn />}
    </div>
  );
};

export default App;
