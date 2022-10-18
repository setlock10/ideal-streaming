
function MovieCard ({movie}){


    return (
        <div className="movieCard">
            <img className="movieCardImage"   alt={movie.title} src={movie.posterURL} />
        </div>
    )
}

export default MovieCard;