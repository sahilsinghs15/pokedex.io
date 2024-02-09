import Search from "../Search/Search";
import PokemonList from "../PokemonList/Pokemonlist";
import {useState} from 'react';
//import css here
import "./Pokedex.css";
import PokemonDetails from "../PokemonDetails/PokemonDetails";

function Pokedex(){
    const [searchTerm , setSearchTerm] = useState('');
    return(
        <div className="pokedex-wrapper">
            <Search updateSearchTerm = {setSearchTerm} />
            {(!searchTerm) ? <PokemonList/> : <PokemonDetails key={searchTerm} pokemonName = {searchTerm} />}
        </div>
    )
}

export default Pokedex;