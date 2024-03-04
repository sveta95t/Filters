import React from 'react'
import { useState, useEffect } from 'react';
import styles from './styles.module.css';




function Filter({categoryId}) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [sortBy, setSortBy] = useState('default');
    const [filteredByDiscount, setFilteredByDiscount] = useState(false);
    const [filterByPriceLimit,setFilterByPriceLimit] = useState(false)

    useEffect(() => {
      fetchProducts(categoryId);
      }, [categoryId, sortBy, ]); 

      const handleSortChange = (e) =>{
        setSortBy(e.target.value);
      }
    
      const handleDiscountFilterChange =(e) =>{
        setFilteredByDiscount(e.target.checked);
      };

      const handlePriceLimit = (e) => {
        const { name, value } = e.target;
        setFilterByPriceLimit(prevRange => ({ ...prevRange, [name]: value }));
      };



      const fetchProducts = async (categoryId) => {
        try {
          const response = await fetch(
            `http://localhost:3333/categories/${categoryId}`
          );
          const data = await response.json();
    
          let sortedProducts = [...data.data];
          if (filteredByDiscount) {
            sortedProducts = sortedProducts.filter(product => product.discont_price);
          }
          
          if (sortBy === 'newest') {
            sortedProducts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

        } else if (sortBy === 'price-high-low') {
            sortedProducts.sort((a, b) => b.price - a.price);
          } else if (sortBy === 'price-low-high') {
            sortedProducts.sort((a, b) => a.price - b.price);
          }
          
          setProducts(sortedProducts); 
          setLoading(false);
    } catch (error) {
      console.error("Loadiing mistake...", error);
    }
  };

  return (
      <div className={styles.filtered_Products}>
              <div>
                  <label> Price</label>
                  <input
                      type="number"
                      name="mini"
                      placeholder="from"
                      onChange={handlePriceLimit} /> 
              </div>
              <input
                type="number"
                name="max"
                placeholder="to"
                onChange={handlePriceLimit}
                />
              <div>
                  <label>Discounted items </label>
                  <input type="checkbox"
                      className={styles.checkbox}
                      checked={filteredByDiscount}
                      placeholderonChange={handleDiscountFilterChange}/>
              </div>
              <label>Sorted</label>
              <select value={sortBy}
                      onChange={handleSortChange}>
                  <option value="default">by default</option>
                  <option value="newest"> newest</option>
                  <option value="price-high-low">Price: High to Low</option>
                  <option value="price-low-high">Price: High to Low</option>
                  <option value="price-high-low">Price: High to Low</option>
              </select>
              <div>
              </div>
          </div>
  )
}



export default Filter