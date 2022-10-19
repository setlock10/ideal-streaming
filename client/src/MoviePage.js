import {useState} from "react";

  
  function MoviePage({selectedMovie}){

    const [isAdded,setIsAdded] = useState(false)
    // var logo = document.getElementById("logo")
 
     
 
     // logo.classList.add("spotlight")
     console.log(selectedMovie.actor_names)

     let cast= selectedMovie.actor_names.map(element => {return <p>{element}</p>})
     let guests= selectedMovie.guest_names.map(element => {return <p>{element}</p>})

  
     return(
         <div> 
            <img className="backdropImage"   alt={selectedMovie.title} src={selectedMovie.backdropURL} />
            <div id="movieText">
                <img id="playIcon" alt="play" name="play" src="./play_icon.png"/>
                <div onClick={()=>isAdded?setIsAdded(false):setIsAdded(true)}>
                    {isAdded?
                        (<img id="addIcon" alt="add to list" name="add to list" src="./added_icon.png"/>):
                        (<img id="addIcon" alt="add to list" name="add to list" src="./add_icon.png"/>)}
                </div>
                <h1>{selectedMovie.title}</h1>
                <h4> {selectedMovie.year+"       "+selectedMovie.runtime+" min"}</h4>
                <p>{selectedMovie.overview}</p>
                <h2>Cast</h2>
                {cast}
                <h3>Directed By</h3>
                {guests}
            </div>
        </div>
    )
 
 
 
 }
 export default MoviePage;