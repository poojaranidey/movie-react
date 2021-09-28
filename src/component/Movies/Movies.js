import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Movie from '../Movie/Movie';
import './Movies.css'
const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [cart, setCart] = useState([]);
    const [prices, setPrices] = useState([]);

    useEffect(() => {
        fetch('./movies.JSON')
            .then(res => res.json())
            .then(data => setMovies(data));
    }, []);
    // button handle for movie list 

    const handleAddToCart = (movie, price) => {
        console.log(movie);
        const newCart = [...cart, movie];
        setCart(newCart);
        const newPrice = [...prices, price];
        setPrices(newPrice);
    }
    // button handle for total donation 

    return (
        <div>
            <div className="flim-container">
                <div className="movies-container"
                >
                    {movies.map((movie, i) => <Movie
                        key={i}
                        movie={movie}
                        handleAddToCart={handleAddToCart}

                    >
                    </Movie>)
                    }
                </div>
                <div className="cart-container">
                    <Cart cart={cart} prices={prices} ></Cart>
                </div>
            </div>
        </div>
    );
};

export default Movies;