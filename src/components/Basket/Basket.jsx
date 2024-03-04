// import React, { useEffect, useState } from 'react'
// import { useForm } from 'react-hook-form'
// import { UseDispatch, useDispatch, useSelector } from 'react-redux'
// import { Axios } from 'axios';
// import { UseSelector } from 'react-redux';
// import styles from './styles.module.css';


        //In this example, `useSelector` is used to select the `user` object from the Redux store state. 
        //The component will automatically re-render whenever the `user` object in the Redux store state changes.


// function Basket() {
    // const items = useSelector(state => state.cart.items);
        // In React with Redux, the `useSelector` hook is used to extract data from the Redux store state. 
        // const UserProfile = () => {
        //const user = useSelector(state => state.user);
    // const dispatch = useDispatch();
    // const{
    //     register,
    //     handleSubmit, 
    //     formState: {errors}, reset}
    //  = useForm();
    // const [isWindowOpen, setWindowOpen] = useState(false);

        // useEffect(()=> {
        //     const storedItems = JSON.parse(localStorage.getItem('Items')) || [];
        //     storedItems.forEach(item => dispatch({type: 'ADD_TO_BASKET', payload: item}));   
        // }, [dispatch]);

        //     const removeFromBasket = (itemId) =>{
        //     dispatch ({type: 'REMOVE_FROM_BASKET',  payload: itemId});
            
        // } 

        

//   return (
//     <div className={styles.shopping_order}>
//         <div className={styles.shop_block}>
//             <h2 className={styles.shopping_cart}>Shopping cart</h2>
//             <div className={styles.line}></div>
//     {/* <link to ={`/Discount`}> */}
//         <button className={styles.text}> Back to the store </button>
//     {/* </link> */}
//     </div>
//         <p className={styles.no_item}> Looks like you have no items in your basket currently.</p>
//         <button className={styles.continue_shopping} onClick={''}>Continue Shopping</button>
//    </div>

//   )
// }

// export default Basket