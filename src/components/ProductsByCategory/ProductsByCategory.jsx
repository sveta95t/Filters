import styles from './styles.module.css'
import { useState, useEffect } from 'react';
import Filter from '../../components/Filter/Filter';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { data_url } from './url';
import CategoryItem from '../CategoryItem/CategoryItem';



function ProductsByCategory() {
    const {id} = useParams();
    const [ProductsByCategory, setProductsbyCategory] = useState([]);

    useEffect(() => {
      const items = axios.get(`http://localhost:3333/categories/${id}`);
        setProductsbyCategory(items);
    },[]);


    return (
      <div> 
        <div className={styles.allBtn}>
          <button
                  className={styles.MainPageButton}
                  onClick={() => {
                  
              } }
          >
              Main Page
          </button>
          <div className={styles.line}></div>
          <button
              className={styles.categoriesButton}
              onClick={() => {
  
              } }
          >
              Categories
          </button>
          <div className={styles.line}></div>
          <button
              className={styles.ToolsButton}
              onClick={() => {
              } }
          >
              Tools and Equipments
          </button>
      </div>
      <p className={styles.tools_equipment}> Tools and equipment </p>
      <Filter/>
      <div>
        {ProductsByCategory.map((product) => (
        <CategoryItem product ={product}/>
       ) )}
      </div>
      </div>
  );
}

export default ProductsByCategory;



    // function discount (price,discont_price){
    //   const procent = Math.round(((price - discount_price) / price) *100);
    //   return `-${procent}%`;
    // }


    // COMPONENT PAGE OF PRODUCTS FROM CATEGORIES
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// function Test() {
//   const { id } = useParams();
//   const [productsFromCategories, setProductsFromCategories] = useState([]);

//   useEffect(() => {
//     const items = axios.get(`local:3333/categories/${id}`);
//     setProductsFromCategories(items);
//   }, []);

//   const handleFunction = () => {}

//   return (
//     <div>
//       {productsFromCategories.map((product) => {
//        <PRoduct product={product} handleFunction={handleFunction} />

//       })}
//     </div>
//   );
// }

// export default Test;
