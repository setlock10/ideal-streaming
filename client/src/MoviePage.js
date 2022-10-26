import {useState} from "react";

  
function MoviePage({user, selectedMovie}){

    const [isAdded,setIsAdded] = useState(false)
    // var logo = document.getElementById("logo")
 
     
 
     // logo.classList.add("spotlight")
     //console.log(selectedMovie.actor_names)
     function addFavorite(){
        console.log("faved")
        setIsAdded(true)

        // Creates Bookmark
        fetch(`/bookmarks`,{
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify({profile_id:1, movie_id: selectedMovie.id})
          })
          .then(res => {
              if(res.ok){
                  res.json().then(fav => {
  
                    console.log(fav)
                      // debugger
                  })
              }else {
                    console.log(selectedMovie)
                  res.json().then(json => console.log("error"))
              }
          })





     }

     function removeFavorite(){
        console.log("nope")
        setIsAdded(false)
     }



     let cast= selectedMovie.actor_names.map(element => {return <p className="lists">{element}</p>})
     let guests= selectedMovie.guest_names.map(element => {return <p className="lists">{element}</p>})

  
     return(
         <div> 
            <img className="backdropImage"   alt={selectedMovie.title} src={selectedMovie.backdropURL} />
            <div id="movieText">
                <img id="playIcon" alt="play" name="play" src="./play_icon.png"/>
                <div onClick={()=>isAdded?removeFavorite():addFavorite()}>
                    {isAdded?
                        (<img id="addIcon" alt="added to list" name="added" src="./added_icon.png"/>):
                        (<img id="addIcon" alt="add to list" name="add" src="./add_icon.png"/>)}
                </div>
                <h1>{selectedMovie.title}</h1>m ,nnn,
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