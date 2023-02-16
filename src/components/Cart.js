import { useState, useEffect } from "react";
import styles from "../style.module.css";
import productImage from "../images/image-product-1.jpg";
import bin from "../images/icon-delete.svg";

function Cart ({itemTotal, setItemTotal}) {

    const [text, setText] = useState('Fall Limited Edition Sneakers');
  
    useEffect(() => {
      if (window.innerWidth <= 768) {
        setText('Autumn Limited Edition...');
      }
    }, []);
  
    
    const reset = () => {
        setItemTotal(0)
    }
    
    return (
        <>
            {itemTotal === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <>
                    <div className={styles.cartItem}>
                        <img src={productImage} className={styles.shoeImage} alt="Fall Limited Edition Sneakers"/>
                        <p>{text}</p>
                        <p>$125.00 x {itemTotal} <span>${(125.00 * itemTotal).toFixed(2)}</span></p>
                        <img src={bin} className={styles.bin} alt="delete" onClick={reset}/> 
                        <button className={styles.checkoutButton}>Checkout</button>
                    </div>
                </>
            )}
        </>
    )
}

export default Cart;