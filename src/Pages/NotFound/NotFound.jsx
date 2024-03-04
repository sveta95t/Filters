import React from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.module.css'
import Image from '../../assets/img/404.png' 




function NotFound() {
  return (
    <section className={styles.block}>
        <img src={Image} alt="Not found"/>
        <h1>Page not Found</h1>
        <p>
        We’re sorry, the page you requested could not be found. Please go back to the homepage.
        </p>
        {/* <Link to="/"> */}
        <button>Go Home</button>
      {/* </Link> */}
        </section>
  )
}

export default NotFound