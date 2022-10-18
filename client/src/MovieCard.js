import { useHistory } from "react-router-dom";

function MovieCard ({movie, setSelectedMovie}){

    let history = useHistory();
  
    function handleClick(movie){

        setSelectedMovie(movie)
        console.log(movie)
        history.push("/MoviePage")





    }


    return (
        <div onClick={()=>handleClick(movie)} className="movieCard">
            <img className="movieCardImage"   alt={movie.title} src={movie.posterURL} />
        </div>
    )
}

export default MovieCard;