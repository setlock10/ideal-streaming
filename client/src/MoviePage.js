function MoviePage({selectedMovie}){


    // var logo = document.getElementById("logo")
 
     
 
     // logo.classList.add("spotlight")

 
  
     return(
         <div> 
           <img className="backdropImage"   alt={selectedMovie.title} src={selectedMovie.backdropURL} />
        </div>
    )
 
 
 
 }
 export default MoviePage;