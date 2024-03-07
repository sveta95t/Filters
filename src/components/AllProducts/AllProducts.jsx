import React from 'react'
import axios from 'axios'
import styles from './styles.module.css';
import './styles.module.css'
import { UseDispatch, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import ProCategoryFilter from '../ProductCategoryFilter/ProCategoryFilter';



function AllProducts(){
  const url = 'http://localhost:3333/'
  const [products, setProducts] = useState ([]);
  const [sortBy, setSortBy] = useState('default');
  const [filterByDiscount, setFilterByDiscount ] = useState(false);
  const [filterByPriceRange, setFilterByPriceRange] = useState({ min: 0, max: 1000 });
  const dispatch = useDispatch(); 
  
};


// //nfot the sorting 
//       if (sortBy === 'newest') {
//         sortedProducts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
//       } else if (sortBy === 'price-high-low') {
//         sortedProducts.sort((a, b) => b.price - a.price);
//       } else if (sortBy === 'price-low-high') {
//         sortedProducts.sort((a, b) => a.price - b.price);
//       }

//       setProducts(sortedProducts);
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       }
  

//   return (
//     <div> 
//     <div className={styles.all_products}>
//         <div className={styles.mainTable_allproducts}>
//             <div className={styles.all_products}>
//             <div className={styles.line}></div>
//             <link className={styles.text} to ="/products">All Products</link>
//             </div>
//             <h1 className={styles.h1_product}>All products</h1>
//         </div>
//     </div>
//     </div>
//   )
//   }
  

// export default AllProducts;