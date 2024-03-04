import React from 'react'
import axios from 'axios'
import styles from './styles.module.css';



function AllProducts(){
  return (
    <div className={styles.all_products}>
        <div className={styles.mainTable_allproducts}>
            <div className={styles.all_products}>
            <div className={styles.line}></div>
            <link className={styles.text} to ="/products">All Products</link>
            </div>
            <h1 className={styles.h1_product}>All products</h1>
        </div>
    </div>
  )
}

export default AllProducts