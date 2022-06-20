import React from 'react';
import { useParams } from 'react-router-dom';
import style from './styles/CatDetails.module.css';

const Details = () => {
  const params = useParams();
  return (
    <section className={style.catDetails}>
      <h2 className={style.categoryname}>Census Details</h2>
      <div className={style.detailMsg}>
        <h3>
          Zambian Population from 1961 - 2018
        </h3>
        <p>{params.code}</p>
      </div>
    </section>
  );
};

export default Details;
