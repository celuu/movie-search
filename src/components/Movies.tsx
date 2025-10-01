import React, { useEffect, useState } from "react"
import { getMovies } from "../utils"


export const Movies = () => {
  const [search, setSearch] = useState<string>('spiderman');
  const [movies, setMovies] = useState<any>();

  useEffect(() => {
    if (!search) {
      setMovies([]);
      return;
    }

    const timeoutId = setTimeout(() => {
      const fetchMovies = async () => {
        const data = await getMovies(search);
        setMovies(data);
      };
      fetchMovies();
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [search]);

  if (!movies) return <div>Loading...</div>;


  const onSubmit = async (e: any) => {
    e.preventDefault();
    if (!search) return;

    const data = await getMovies(search);
    setMovies(data);
  };


  return (
    <div>
      <h2>Search Movies</h2>
      <form onSubmit={onSubmit}>
        <input type="search" placeholder="Search a movie" onChange={(e) => setSearch(e.target.value)}></input>
        <button type="submit">Submit</button>
      </form>
  
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "15px" }}>
        <div style={{ width: "10vw" }}>
          <img src={movies.Poster}></img>
          {movies.Title}
        </div>
      </div>
      {search && movies.Search.map((movie:any) => (
        <div>
          <img src={movie.Poster}></img>
          {movie.Title}
          </div>
      ))}
    </div>
  );

}