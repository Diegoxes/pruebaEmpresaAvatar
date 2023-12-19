import { useDispatch, useSelector } from 'react-redux';
import Cards from '../../components/Cards/Cards';
import styles from './Home.module.css';
import { useEffect, useState } from 'react';
import { setIndexPage } from '../../redux/actions';

const Home = () => {
  const updatedShowPokemons = useSelector((state) => state.updatedShowPokemons);
  const indexPage = useSelector((state) => state.indexPage);
  const quantityPages = useSelector((state) => state.quantityPages);

  const [showPokemons, setShowPokemons] = useState([]);

  const dispatch = useDispatch();

  
  const handleClick = (event) => { //Index
    let index = event.target.value === '-' ? indexPage - 1 : indexPage + 1;
    dispatch(setIndexPage(index));
  };

  const handlePageClick = (pageNumber) => {
    dispatch(setIndexPage(pageNumber));
  };

  useEffect(() => {
    setShowPokemons(updatedShowPokemons);
  }, [updatedShowPokemons]);

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= quantityPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => handlePageClick(i)}
          className={indexPage === i ? styles.activePage : ''}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  return (
    <div>
      <Cards pokemons={showPokemons} />
      <div className={styles.paginate}>
        <button onClick={handleClick} value={'-'} disabled={indexPage === 1}>
          Previous
        </button>
          {renderPageNumbers()}
        <span>Page {indexPage} of {quantityPages || 1}</span>
        <button onClick={handleClick} value={'+'} disabled={indexPage >= quantityPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Home;