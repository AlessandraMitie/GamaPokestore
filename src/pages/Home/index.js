import React, { useState, useEffect } from 'react';
import Product from '../../components/Product';
import MarketCar from '../../components/MarketCar';
import api from '../../services/api'

function Home(props) {
    const [carContent, setCarContent] = useState([]);
    const [pokemonList, setPokemonList] = useState([]);

    useEffect(() => {
        function loadPokemonList() {
            api.get('/pokemon')  
            .then(res => {
              const pokemons =  res.data.results;
        
              const pokemonData = pokemons.map((pokemon) => {
                return api.get(`/pokemon/${pokemon.name}`)
                  .then(res => {
                    const pokemonImg =  res.data.sprites.front_shiny
                    const pokemonType =  res.data.types[0].type.name
                    const pokemonID = res.data.id 
                    const price  =  res.data.weight
                    return {
                        id: pokemonID,
                        name: pokemon.name,
                        image: pokemonImg,
                        types: pokemonType,
                        price: price
                    }
                })
              })
              Promise.all(pokemonData).then(data => {
                localStorage.setItem('pokemons',JSON.stringify(data))
              })
            })
            let pokemons = localStorage.getItem('pokemons')
            pokemons = JSON.parse(pokemons)
            setPokemonList(pokemons);
        }
        loadPokemonList();
    }, []);


    function addCar(pokemon) {
        setCarContent([...carContent, pokemon]);
    }

    return (
        <> 
          <div >
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
        </>
    );
}
  
export default Home;