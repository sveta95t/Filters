import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { UseDispatch, useDispatch, useSelector } from 'react-redux'
import { Axios } from 'axios';
import { UseSelector } from 'react-redux';
import styles from './styles.module.css';
import { json } from 'react-router-dom';




        //In this example, `useSelector` is used to select the `user` object from the Redux store state. 
        //The component will automatically re-render whenever the `user` object in the Redux store state changes.

function MainBasket() {
    const products = useSelector()
    const [item, setItem] = useState([]);

    
        // In React with Redux, the `useSelector` hook is used to extract data from the Redux store state. 
        // const UserProfile = () => {
        // const user = useSelector(state => state.user);
    const dispatch = useDispatch();
    const{
        register,
        handleSubmit, 
        formState: {errors}, reset}
     = useForm();
    const [isWindowOpen, setWindowOpen] = useState(false);

    useEffect(() => {
        const ProductsfromStorage  = JSON.parse(localStorage.getItem('Item'))
         setItem(ProductsfromStorage);

         if ( ProductsfromStorage.length > 0){
            const items = JSON.parse(ProductsfromStorage)
            setItem(items)
         }else{
            setItem([]);
         } 
         
         //сначала получить если там что то есть в сторедж то parse а потом
    }
    )
  return (
    <div>MainBasket</div>
  )
}

export default MainBasket