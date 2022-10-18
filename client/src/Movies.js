import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";

function Movies() {

      // Setting State and Fetching the Movies
      const [movies,setMovies] = useState([])
  
    useEffect(() => {
        fetch("/movies")
          .then((r) => r.json())
          .then((data) => {
            console.log(data)
            setMovies(data)});
      }, []);


      let movieCards = movies.map(movie=>{return <MovieCard movie={movie} key={movie.id}/>})
    

    return(

        <div className="movieList">
            {movieCards}
        </div>



    )


}

export default Movies;