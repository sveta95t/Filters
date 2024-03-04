import React from 'react'
import styles from './styles.module.css';
import { Link } from 'react-router-dom';
import { data_url } from './url';





export const CategoryItem = ({ id, image, title }) => {
	return (
		<div className={styles.category_item} key={product.id}>
            {product.discount_price}
			{/* <Link to={`/categories/${id}`} state="category"> */}
				<div className={styles.img_wrapper}>
					<img className={styles.product_img} src={`${data_url}${image}`} alt={title}/>
				</div>
				<h3 className={styles.category_title}>{title}</h3>
			{/* </Link> */}
		</div>
	);
};

export default CategoryItem;






// COMPONENT FOR SINGLE PRODUCT
// import React from 'react'

// function PRoduct({ product, handleFunction }) {

//     function discount (price, discont_price) {
//        const procent = Math.round(((price - discont_price) / price) * 100);
//        return `-${procent}%`;
//     }

//   return (
//     <div>
//         <img src={product.src} onClick={handleFunction} />
//         <span>{product.title}</span>
//         <div>
//               {product.discont_price ? (
//                 <div className='discount'>
//                   {item.discont_price ? (
//                    discount(product.price, product.discont_price)
//                   ) : ""}
//                 </div>
//               ) : ""}
//             </div>
//     </div>
//   )
// }

// export default PRoduct;
