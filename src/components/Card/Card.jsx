import styles from './Card.module.css'
import { NavLink } from 'react-router-dom';
const Card = ({ pokemon }) => {   
    
    const colours = {
        normal: '#A8A77A', fire: '#EE8130', water: '#6390F0', electric: '#F7D02C',
        grass: '#7AC74C',
        ice: '#96D9D6',
        fighting: '#C22E28',
        poison: '#A33EA1',
        ground: '#E2BF65',
        flying: '#A98FF3',
        psychic: '#F95587',
        bug: '#A6B91A',
        rock: '#B6A136',
        ghost: '#735797',
        dragon: '#6F35FC',
        dark: '#705746',
        steel: '#B7B7CE',
        fairy: '#D685AD',
    };
    return (
        <NavLink to={`/Details/${pokemon.id}`} className={styles.container} style={{ backgroundImage: `linear-gradient(to bottom, ${colours[pokemon.types[0].name]},#fff)` }}>
            
            <img src={pokemon.image} alt={pokemon.name} className={styles.image} />
            <span className={styles.name}> {pokemon.name.toUpperCase()} </span>
            <span className={styles.types} > {pokemon.types[0]?.name.toLowerCase()} {pokemon.types[1] && `& ${pokemon.types[1].name.toLowerCase()}`}</span>
        </NavLink>
    );
};
export default Card;