
import './index.css'
 
function MovieCard(props){
    

    
        const {movies,addStars,decStars,toggleFav,toggleCart}=props;
        const {title,plot,rating,price,stars,fav,cart,poster} = props.movies;
        return(
         <div className="main">
            <div className="movie-card">
                <div className="left">
                    <img alt="Poster" src={poster}/>
                </div>

                <div className="right">
                    <div className="title">{title}</div>
                    <div className="plot">{plot}</div>
                    <div className="price">Rs. {price}</div>
                  
                    <div className="footer">
                        <div className="rating">{rating}</div>
                        <div className="star-dis"> 
                            <img className="str-btn" 
                                 alt="minus"
                                 src="https://cdn-icons-png.flaticon.com/128/1828/1828906.png"
                                 onClick={()=>{decStars(movies)}}/>

                            <img className="stars"
                                 alt="star"  
                                 src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"/>
                           
                            <img className="str-btn"
                                 alt="plus"
                                 src="https://cdn-icons-png.flaticon.com/128/992/992651.png"
                                 onClick={()=>{addStars(movies)}}/>
                             &nbsp;<span>{stars}</span>
                        </div>
                        {/* {fav ? <button className="unfavourite-btn" onClick={handlefav}>Un-favourite</button>  : 
                               <button className="favourite-btn" onClick={handlefav}>Favourite</button> } */}
                        <button className={fav?"favourite-btn":"unfavourite-btn"} 
                        onClick={()=>{toggleFav(movies)}}>{props.movies.fav?"Unfavourite":"Favourite"}</button>
    

                         <button className={cart?"cart-btn":"remove-cart-btn"}
                          onClick={()=>{toggleCart(movies)} }>{cart?"Remove from cart":"Add to cart"}</button>
                    </div>
                
                </div>
            </div>
         </div>)
    }

export default MovieCard;