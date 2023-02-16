import styles from "../style.module.css";
import minus from "../images/icon-minus.svg"
import plus from "../images/icon-plus.svg"
import cart_icon from "../images/icon-cart.svg"

function ProductInfo({count, setCount, itemTotal, setItemTotal}) {


    const increment = () => {
      setCount(count + 1);
    };
  
    const decrement = () => {
      if (count > 0) {
        setCount(count - 1);
      }
    };

    const handleAddToCart = () => {
      setItemTotal(itemTotal + count);
      setCount(0);
  };

  

    return (<>

    <p className={styles.company}>SNEAKER COMPANY</p>
    
    <p className={styles.heading}>Fall Limited Edition Sneakers</p>
    
    <p className={styles.info}> These low-profile sneakers are your perfect casual wear companion. 
                                Featuring a durable rubber outer sole, 
                                they'll withstand everything the weather can offer. 
    </p>
    
    <p className={styles.price}>$125.00 <span>50%</span></p>
    
    <p className={styles.oldPrice}><strike>$250.00</strike></p>
    
    <div className={styles.cartButtons}>
        <span className={styles.minusPlus}>
            <img className={styles.minus} src={minus} alt="Minus" onClick={decrement} />
                <span>{count}</span>
            <img className={styles.plus} src={plus} alt="Plus" onClick={increment} />
        </span>
        <button className={styles.addToCartButton} onClick={handleAddToCart}><img src={cart_icon} alt="cart icon"/>Add to cart</button>
    </div>

    </>)
}
export default ProductInfo;