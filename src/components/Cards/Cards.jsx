import Card from '../Card/Card'
import styles from './Cards.module.css';

const Cards = ({pokemons}) => {
    return (
        <>
            <div className={styles.container}>
                {pokemons?.map((pokemon) =>
                    (<Card key={pokemon.id} pokemon={pokemon} />))}
            </div>
        </>
    );
};
export default Cards;