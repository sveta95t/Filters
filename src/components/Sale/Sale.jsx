import {useEffect,useState} from 'react'
import axios  from 'axios';
import styles from './styles.module.css'
import Discount from '../Discount/Discount';



function Sale({product}) {


  const url = 'http://localhost:3333/'
  const [products, setProducts] = useState ([]);
  const [discount, setDiscount] = useState([5]);

  
  useEffect(() => {
    async function fetchData(){
      try{
        const response = await axios.get('http://localhost:3333/products/all'); 
        setProducts(response.data);
      }catch(error){
        console.log('Errorr fetching Sales', error)
      }
    }
    fetchData();
    }, []);

  return (
    <div className={styles.sales_block}>
      <div className={styles.sales_products}>
       <h3 className={styles.sales_h3}> Sale </h3>
       <div className={styles.line}></div>
           <button className= {styles.b_sales}> 
           All sale
            </button>
   </div>
   <div className={styles.sales_list}> 
       {Array.isArray(products)&&products.slice(0, 4).map((product) => ( 
          <div key={product.id}> 
        <div className={styles.items}>
          <div className={styles.products_images}>
          <img className={styles.product_img} src={`${url}/${product.image}`}alt={product.title}/>
</div>
          {product.discont_price && (
            <span className={styles.discount}> 
             {`-${Math.round(
              (1 - product.discont_price / product.price) *100
          )}%`}
          </span>
          )}
          </div>
           <p className={styles.product_title}>{product.title}</p> 
        <div className={styles.products}>
            <p className={styles.product_price}>${product.price}</p> 
            <p className={styles.discounted_price}>$10{product.price_discont}</p>
         </div>   
         </div>
       ))}
       </div>
       </div>

    )
 };


export default Sale






