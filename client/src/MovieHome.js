import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";

function MovieHome() {

        // Setting State and Fetching the Movies
        const [adventures,setAdventures] = useState([])
        const [animations,setAnimations] = useState([])
        const [dramas,setDramas] = useState([])
        const [actions,setActions] = useState([])
        const [comedies,setComedies] = useState([])
        const [thrillers,setThrillers] = useState([])
  
        useEffect(() => {
            fetch("/adventure")
                .then((r) => r.json())
                .then((data) => {
                    setAdventures(data)
                    fetch("/animation")
                        .then((r) => r.json())
                        .then((data) => {
                            setAnimations(data)
                            fetch("/drama")
                                .then((r) => r.json())
                                .then((data) => {
                                    setDramas(data)
                                    fetch("/action")
                                        .then((r) => r.json())
                                        .then((data) => {
                                            setActions(data)
                                            fetch("/comedy")
                                                .then((r) => r.json())
                                                .then((data) => {
                                                    setComedies(data)
                                                    fetch("/thriller")
                                                        .then((r) => r.json())
                                                        .then((data) => {
                                                            setThrillers(data)
                                                            // console.log(data)
                                         
                                    });
        
                                });
    
                            });
        
    
                        });
    
                    });
                });
          }, []);
    
    
        let adventureCards = adventures.map(movie=>{return <MovieCard movie={movie} key={movie.id}/>})
        let animationCards = animations.map(movie=>{return <MovieCard movie={movie} key={movie.id}/>})
        let dramasCards = dramas.map(movie=>{return <MovieCard movie={movie} key={movie.id}/>})
        let actionCards = actions.map(movie=>{return <MovieCard movie={movie} key={movie.id}/>})
        let comedyCards = comedies.map(movie=>{return <MovieCard movie={movie} key={movie.id}/>})
        let thrillerCards = thrillers.map(movie=>{return <MovieCard movie={movie} key={movie.id}/>})
        

        let pos = { top: 0, left: 0, x: 0, y: 0 };
       // const ele = document.getElementById('adventure');
       // const ele = document.getElementsByClassName('movieList')
       var ele ={}

    
        const mouseDownHandler = function (e) {
            ele=e.target.parentElement.parentElement
           // debugger
            pos = {
                // The current scroll
                left: ele.scrollLeft,
                top: ele.scrollTop,
                // Get the current mouse position
                x: e.clientX,
                y: e.clientY,
            };

        document.addEventListener('mousemove', mouseMoveHandler);
        document.addEventListener('mouseup', mouseUpHandler);

        };

        document.addEventListener('mousedown', mouseDownHandler);
 
        const mouseMoveHandler = function (e) {
            // How far the mouse has been moved
            const dx = e.clientX - pos.x;
            const dy = e.clientY - pos.y;
        
            // Scroll the element
            ele.scrollTop = pos.top - dy;
            ele.scrollLeft = pos.left - dx;
        };

        const mouseUpHandler = function () {
            document.removeEventListener('mousemove', mouseMoveHandler);
            document.removeEventListener('mouseup', mouseUpHandler);
        
            ele.style.cursor = 'grab';
            ele.style.removeProperty('user-select');
        };
    
        return(
            <div>
                <label>Adventure</label>
                <div id="adventure" className="movieList">
                    {adventureCards}
                </div>
                <label>Animation</label>
                <div id="animation" className="movieList">
                    {animationCards}
                </div>
                <label>Drama</label>
                <div id="dramas" className="movieList">
                    {dramasCards}
                </div>
                <label>Action</label>
                <div id="action" className="movieList">
                    {actionCards}
                </div>
                <label>Comedy</label>
                <div id="comedy" className="movieList">
                    {comedyCards}
                </div>
                <label>Thriller</label>
                <div id="thriller" className="movieList">
                    {thrillerCards}
                </div>
            </div>
    
    
    
        )
    
    
    }


    export default MovieHome;