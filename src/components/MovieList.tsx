
function MovieList({movieData, error}: {movieData:any, error: any}) {


  return (
    <div className="pt-10 grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3">
      {error && <p>{error}</p>}
      {movieData && movieData?.results.length > 0 
        ? 
        movieData?.results.map((movie: any) => (
          <div key={movie.id}
              className="m-8 rounded p-4 shadow-lg
                  transition-all duration-700 hover:scale-110"
          >
              <div className="flex flex-col gap-2 justify-center items-center">
                <img
                    className="w-520 h-380"
                    src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                    alt=""
                />
              </div>
            <div className="p-10 flex flex-col items-center justify-center">
              <h2 className="font-bold text-white text-xl">
                    {movie.original_title}
              </h2>
              <p className="text-gray-400">{movie.overview.slice(0, 100)}...</p>
            </div>
            
          </div>
        ))
        : <h2 className="text-white">No data</h2>
        }
    </div>
  );
}

export default MovieList;
