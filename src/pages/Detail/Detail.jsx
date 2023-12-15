import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemonById } from '../../redux/actions';
import styles from './Detail.module.css'

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemonById(id));
  }, [dispatch, id]);

  const pokemonDetail = useSelector((state) => state.pokemonDetail);

  return (
    <div className={styles.container}>
         <div className={styles.container1}>
            <img src={pokemonDetail?.image} alt={pokemonDetail?.name} className={styles.image} />
            <div>
                <h3>ID: {pokemonDetail?.id}</h3>
                <h3>Name: {pokemonDetail?.name}</h3>
                <h3>HP: {pokemonDetail?.hp}</h3>
                <h3>Attack: {pokemonDetail?.attack}</h3>    
                <h3>Defense: {pokemonDetail?.defense}</h3>
                {pokemonDetail?.speed && <h3>Speed: {pokemonDetail.speed}</h3>}
                {pokemonDetail?.weight && <h3>Weight: {pokemonDetail.weight}</h3>}
                {pokemonDetail?.height && <h3>Height: {pokemonDetail.height}</h3>}
               
            </div>
        </div>
    </div>
  );
};

export default Detail;