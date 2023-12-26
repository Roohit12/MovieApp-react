
import './index.css'
import MovieCard from "./Moviecard";



function MovieList (props){


        //const {title,plot,price,poster,rating,fav,cart,stars}=this.state.movies;
        const {movies,addStars,decStars,toggleCart,toggleFav}=this.props;
        return(
            <>
            {movies.map((movie)=><MovieCard movies={movie} addStars ={addStars}
                                                           decStars={decStars} 
                                                           toggleFav={toggleFav}
                                                           toggleCart={toggleCart}
                                                           key={movie.id}/>
)}
          
            
            </>
          


        )
    }

export default MovieList;