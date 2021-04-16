import React from "react";
import "./Pokecard.css";
const Pokecard = props => {
  return (
    <div className="Pokecard">
      <div className="Pokecard-title">{props.name}</div>
      <div className="Pokecard-data">{props.type}</div>
      <div className="Pokecard-data">{props.base_experience}</div>
      <img
        className="Pokecard-image"
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`}
        alt=""
      ></img>
    </div>
  );
};
export default Pokecard;
