import React from 'react'
import { useForm } from 'react-hook-form'
import { UseDispatch, useDispatch, useSelector } from 'react-redux'
import { Axios } from 'axios';
import { UseSelector } from 'react-redux';
import styles from './styles.module.css';



function ContinueShopping() {
  return (
    <div className={styles.shopping_order}>
    <div className={styles.shop_block}>
        <h2 className={styles.shopping_cart}>Shopping cart</h2>
        <div className={styles.line}></div>
{/* <link to ={`/Discount`}> */}
    <button className={styles.text}> Back to the store </button>
{/* </link> */}
</div>
    <p className={styles.no_item}> Looks like you have no items in your basket currently.</p>
    <button className={styles.continue_shopping} onClick={''}>Continue Shopping</button>
    </div>
  )
}

export default ContinueShopping