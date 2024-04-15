import "./Pokemonlist.css";
import Pokemon from '../Pokemon/Pokemon';
import usePokemonList from '../../hooks/usePokemonList';
import { useEffect } from "react";

function PokemonList(){

    const [pokemonListState , setPokemonListStates] = usePokemonList(false);

    useEffect(() => {
        console.log("render")
    })
    return (
        <div className="pokemon-list-wrapper">

            <div className='pokemon-wrapper'>
                {(pokemonListState.isLoading) ? "Loading ..." :
                    pokemonListState.pokemonList.map((p) => <Pokemon name = {p.name} image = {p.image} key={p.id} id = {p.id}/>) 
                }
            </div>
            
            <div className='controls'>
                <button disabled={pokemonListState.prevUrl == null} onClick={() => { console.log("Previous button clicked"); setPokemonListStates({...pokemonListState , pokedexUrl : pokemonListState.prevUrl}); }}>Prev</button>
                <button disabled={pokemonListState.nextUrl == null} onClick={() => { console.log("Next button clicked"); setPokemonListStates({...pokemonListState , pokedexUrl : pokemonListState.nextUrl}); }}>Next</button>

            </div>

        </div>
    )
}

export default PokemonList;