import React from 'react';
import './styles.css';

function Product(props){
    const { id, name, type, price } = props.pokemon;

    return(
        <div onClick={() => addCar(props.pokemon)}>
            <div>
                {name}
                {id}
            </div>
        </div>
    );
};


export default Product;