import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../redux/store";
import { fetchAllMovies, fetchMovie } from "../redux/slices/movieslice";
import MovieList from "../components/MovieList";

function Movie() {
  const [term, setTerm] = useState("");

  const dispatch = useDispatch<AppDispatch>();
  const movieData = useSelector((state: any) => state.movie.movieData);
  const loading = useSelector((state: any) => state.movie.loading);
  const error = useSelector((state: any) => state.movie.error);


    const handleFetchMovie = () => {
      if (term.trim() !== "") {
        dispatch(fetchMovie(term));
      } else {
        dispatch(fetchAllMovies());
      }
    };

    const handleOnChange = (e: any) => {
      let inputValue = e.target.value;
      setTerm(inputValue);
      if(inputValue.length === 0) {
        dispatch(fetchAllMovies());
      }
    }

  useEffect(() => {
    dispatch(fetchAllMovies());
  }, []);

  return (
    <main className="pt-10 h-max">
      <h2 className="text-white font-nunito capitalize font-semibold flex justify-center text-2xl">
        Movies
      </h2>
      <div className="flex m-5 justify-center">
        <input
          className="py-[8px] pl-[20px] pr-[36px] rounded-full outline-none w-[300px] md:w-[250px] shadow-md transition-all duration-300 focus:shadow-sm text-[#666] focus:bg-[#ffffff] bg-[#fdfdfd] font-medium"
          type="text"
          placeholder="Search Movies"
          value={term}
          onChange={(e) => handleOnChange(e)}
        />
        <button className="btn btn-movie btn-getmovies" 
            disabled={loading}
            onClick={handleFetchMovie}>
            {loading ? "Loading..." : 
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
              </svg>
            }
        </button>
      </div>
      <MovieList movieData={movieData} error={error}></MovieList>
    </main>
  );
}

export default Movie;
