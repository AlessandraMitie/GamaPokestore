import React, { useState, useEffect } from 'react';
import Product from '../../components/Product';
import MarketCar from '../../components/MarketCar';

const pokemons = [
    {
        id: 1,
        name: Bulbasaur,
        type: grass,
        price: 1000
    },
    {
        id: 2,
        name: Ivysaur,
        type: fire,
        price: 500
    }
];

function Home() {
    const [carContent, setCarContent] = useState([]);
    const [pokemonList, setPokemonList] = useState([]);

    useEffect(() => {
        function loadPokemonList() {
            setPokemonList(pokemons);
        }
        loadPokemonList();
    }, []);

    function addCar(pokemon) {
        setCarContent([...carContent, pokemon]);
    }

    return (
      <div className="">
          <div>
          {pokemonList.map(item => (
            <Product 
                key={item.id} 
                pokemon={item} 
                addCar={addCar}
            />))}
            </div>
            <div>
                <MarketCar 
                    carContent={carContent}
                />
            </div>
      </div>
    );
}
  
export default Home;