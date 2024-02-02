import Search from "../Search/Search";
import PokemonList from "../PokemonList/Pokemonlist";
//import css here
import "./Pokedex.css";
function Pokedex(){
    return(
        <div className="pokedex-wrapper">
            <h1 id="pokedex-heading">Pokedex</h1>
            <Search/>

            <PokemonList />
        </div>
    )
}

export default Pokedex;