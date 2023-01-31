import React from "react";

const AllMovies = () => {

const [inputTitle, setInputTitle] = useState("");

const filterMovies = movies.filter(movie => (
    movie.title.toLowerCase().includes(inputTitle.toLowerCase())
))
  
  return (
    <Input value={inputTitle}
        className="SearchBar"
        placeholder="Buscar por titulo"
        onChange={(e) => setInputTitle(e.target.value)}
    />
  );

};

export default AllMovies;
