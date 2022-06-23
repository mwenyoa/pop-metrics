/* eslint-disable max-len */
import { React, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FaSearchLocation } from 'react-icons/fa';
import { BsArrowRightCircle } from 'react-icons/bs';
import { fetchPopulation } from '../redux/population/population';
import style from './styles/Category.module.css';

const Category = () => {
  const popData = useSelector((state) => state.population);
  const dispatch = useDispatch();
  useEffect(() => {
    if (popData.length === 0) {
      dispatch(fetchPopulation());
    }
  }, []);

  const mapped = popData.population?.map((obj) => obj.country);
  const filtered = mapped?.filter(
    (country, code) => mapped?.indexOf(country) === code,
  );
  const sorted = filtered?.sort((a, b) => a.localeCompare(b));
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const search = query.get('search') || '';
  const sortedData = sorted?.filter((country) => country.toLowerCase().includes(search.toLowerCase()));
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState(search);

  const countryFilterOnChange = (event) => {
    navigate(event.target.value ? `?search=${event.target.value}` : '');
    setSearchValue(event.target.value);
  };

  return (
    <>
      <section className={style.searchAreac}>
        <form className="form">
          <div className="search-bar">
            <FaSearchLocation className={style.FaSearchLocation} />
            <div>
              <input
                className={style.search}
                type="text"
                value={searchValue}
                placeholder="Search"
                onChange={countryFilterOnChange}
              />
            </div>
          </div>
        </form>
      </section>
      <section className={style.Category}>
        {
          sortedData?.map((country) => {
            if (country === '') {
              return null;
            }
            return (
              <div key={country}>
                <Link to={{ pathname: `/Details/${country}` }}>
                  <div className={style.categorie}>
                    <h1 className={style.content}>{country}</h1>
                    <BsArrowRightCircle className={style.rightCircle} />
                  </div>
                </Link>
              </div>
            );
          })
    }
      </section>
    </>
  );
};
export default Category;
