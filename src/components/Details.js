/* eslint-disable max-len */
import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchPopulation } from '../redux/population/population';
import style from './styles/CatDetails.module.css';

const Details = () => {
  const data = useSelector((state) => state.population);
  const countries = data.population;

  const dispatch = useDispatch();

  useEffect(() => {
    if (data.length === 0) {
      dispatch(fetchPopulation());
    }
  }, []);

  const country = useParams();

  const mapped = countries?.filter((obj) => obj.country === country.code);
  return (
    <section className={style.catDetails}>
      {
        mapped?.map((popInfo) => (
          <div key={popInfo.code}>
            <h2 className={style.categoryname}>
              {popInfo.country}
              <br />
              1960 - 2018 Census
            </h2>
            <div className={style.Titles}>
              <h3>YEAR</h3>
              <h3>POPULATION</h3>
            </div>
            {popInfo.populationCounts.map((pop) => (
              <li key={pop.year} className={style.metricsData}>
                <p>{pop.year}</p>
                <p>{pop.value}</p>
              </li>
            ))}
            <div className={style.detailMsg} />
          </div>
        ))
    }
    </section>
  );
};

export default Details;
