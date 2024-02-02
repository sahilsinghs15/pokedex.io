import "./Pokemon.css";
function Pokemon({name , image}){
    return (
        <div className="pokemon">
            <div className="name">{name}</div>
            <div><img className="pokemon-image" src= {image}/></div>
        </div>
    )
}

export default Pokemon;