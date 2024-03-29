import React from 'react';
import styles from './styles.module.css';



function Window(closeWindow) {

  return (
    <div className={styles.window_table}>
      Window
    <div className={styles.window}>
      <div className={styles.window_text}>
        <span className={styles.btn_close} onClick={closeWindow}></span>
        <h3 className={styles.congratulations}>Congratulations! </h3>
        <p className={styles.your_order}>
          Your order has been successfully placed on the website.</p>
          <p className={styles.manager}> 
          A manager will contact you shortly to confirm your order.</p>
    </div>
    </div>
    </div>

  )
}

export default Window