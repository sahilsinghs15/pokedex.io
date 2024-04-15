import axios from "axios";
import { useEffect, useState } from "react";

function usePokemonList() {
    const [pokemonListState, setPokemonListState] = useState({
        pokemonList: [],
        isLoading: true,
        pokedexUrl: 'https://pokeapi.co/api/v2/pokemon',
        nextUrl: '',
        prevUrl: '',
    });

    async function downloadPokemons() {

            setPokemonListState((state) => ({ ...state, isLoading: true}));
            const response = await axios.get(pokemonListState.pokedexUrl); // this downloads list of 20 pokemons

            const pokemonResults = response.data.results;  // we get the Array of pokemons from result

            setPokemonListState((state) => ({
                ...state, 
                nextUrl: response.data.next, 
                prevUrl: response.data.previous
            }));
            const pokemonResultPromise = pokemonResults.map((pokemon) => axios.get(pokemon.url));//we will get the url Promise of each pokemon from pokemonResults[]

            // passing that promise array to axios.all
            const pokemonData = await axios.all(pokemonResultPromise); // array of 20 pokemon detailed data

            // now iterate on the data of each pokemon, and extract id, name, image, types

            const pokeListResult = pokemonData.map((pokeData) => {
                const pokemon = pokeData.data;//We will fetch a single pokemons data 
                return {
                    id: pokemon.id,
                    name: pokemon.name, 
                    image: (pokemon.sprites.other) ? pokemon.sprites.other.dream_world.front_default : pokemon.sprites.front_shiny, 
                    types: pokemon.types
                }
            });
            setPokemonListState((state) => ({
                ...state,
                pokemonList: pokeListResult, //We will get Array of Pokemons Data in the form of Object {id , name , image , types}
                isLoading: false
            }));
    }

    useEffect(() => {
        downloadPokemons();
    }, [pokemonListState.pokedexUrl]);

    return [pokemonListState, setPokemonListState];//Return PokemonListState which contain each Pokemon's id , name , image and types  
}

export default usePokemonList;