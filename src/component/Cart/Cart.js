import React from 'react';
// fontawesome 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm, faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons';
import './Cart.css'
const Cart = (props) => {
    console.log(props.cart);
    const names = props.cart;
    const prices = props.prices;
    console.log(prices);
    let totalPrice = 0;
    for (const price of prices) {
        totalPrice = totalPrice + price;
    }
    const watchIcon = <FontAwesomeIcon icon={faFilm} />
    const DonateIcon = <FontAwesomeIcon icon={faHandHoldingHeart} />
    return (
        <div className="Donate-cart">
            <h3>Movie and Donate summary</h3>
            <h5>Movies wishlist: {names.length}</h5>
            <br />
            <h4>total Donate: {totalPrice} tk </h4>
            {
                names.map((name, i) => <h4 key={i}>Movies name:{name} </h4>)
            }

            <button className="Donate-btn">{DonateIcon}   Donate now</button>
            <button className="watch-movie-btn">{watchIcon}  Watch Movie</button>
        </div>
    );
};

export default Cart;