import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";

function Bookmarks({setSelectedMovie}) {

    const [bookmarks,setBookmarks] = useState([])

    useEffect(() => {
        fetch("/profile/saved")
          .then((r) => r.json())
          .then((data) => {
  
  
            setBookmarks(data)
            console.log(data)
            
           
            
         
        });
      }, []);
  
      let bookmarkCards = bookmarks.map(movie=>{return <MovieCard setSelectedMovie={setSelectedMovie} movie={movie} key={movie.id}/>})
 

    return(

        <div>
        <label>My Stuff</label>
        <div id="myStuff" className="movieList">
            {bookmarkCards}
        </div>
</div>
    )

}

export default Bookmarks;
