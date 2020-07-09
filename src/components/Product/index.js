import React from 'react';
import './styles.css';

function Product(props){
    
    const { addCar, pokemon } = props;
    const { id, name, image, types, price } = pokemon;
   
      return(
        <div className="product-container">
            <ul className="list-pokemon">
                <li className="cards" type={types} onClick={() => addCar(pokemon)}>
                <label>{types}</label>
                <p>{name}</p>
                <img className="fit-picture" src={image} alt={name} />
                <span className="price">Price: {price}</span>
                </li>
            </ul>
        </div>
    );
};

export default Product;