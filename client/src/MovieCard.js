import { useHistory } from "react-router-dom";
import { useState } from "react";


function MovieCard ({movie, setSelectedMovie}){

    let history = useHistory();
   // const [downXY, setDownXY] = useState({x:0,y:0});

  
    function handleClick(e){
       // console.log(e.target.x+"   ",e.target.y)
        //let clickXY={x:e.target.x, y:e.target.y}

       // if ((e.target.x===clickXY.x)&&(e.target.y===clickXY.y)){
            setSelectedMovie(movie)
            console.log(movie)
            history.push("/MoviePage")
    //}

    }

    function handleDown(e){
       // setDownXY({x:e.target.x, y:e.target.y})
        //console.log(e.target.x+"   ",e.target.y)
    }


    return (
        <div /*onMouseDown={(e)=>handleDown(e)}*/  onClick={(e)=>handleClick(e)} className="movieCard">
            <img className="movieCardImage"   alt={movie.title} src={movie.posterURL} />
        </div>
    )
}

export default MovieCard;