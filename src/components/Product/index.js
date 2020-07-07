import React from 'react';
import './styles.css';

function Product(props){
    const { id, name, image,types, price  } = props.pokemon;
   
      return(
        <div onClick={() => addCar(props.pokemon)}>
              <ul className="list-pokemon">
                <li className="cards" type={types}>
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