import { useState } from "react";
import styles from "../style.module.css";
import logo from "../images/logo.svg"
import cart_icon from "../images/icon-cart.svg"
import avatar from "../images/image-avatar.png"
import Cart from "./Cart";
import MenuIcon from "./MenuIcon";
import PreviousIcon from "./PreviousIcon";
import NextIcon from "./NextIcon";
import minus from "../images/icon-minus.svg"
import plus from "../images/icon-plus.svg"
import CloseIcon from "./CloseIcon";

const MobileView = ({count, setCount, itemTotal, setItemTotal, currentImage, setCurrentImage, shoes}) => {

    const [showNav, setShowNav] = useState(false);

  const handlePreviousImage = () => {
    const previousIndex = (shoes.indexOf(currentImage) + shoes.length - 1) % shoes.length;
    setCurrentImage(shoes[previousIndex]);
  };

  const handleNextImage = () => {
    const nextIndex = (shoes.indexOf(currentImage) + 1) % shoes.length;
    setCurrentImage(shoes[nextIndex]);
  };

  const handleShowNav = () => {
    setShowNav(true);
  };

  const handleCloseNav = () => {
    setShowNav(false);
  }

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


  return (
    <div className={styles.reveal}>
                    <div className={styles.mobileHeader}>

                          <div className={styles.flex}>
                            <div className={styles.menuIcon} onClick={(handleShowNav)}><MenuIcon/></div>
                            <img className={styles.logo} src={logo} alt="Logo"/>
                          </div>
                    
                        <div className={styles.icons}>
                                <div className={styles.cartIcon}>
                                  <img className={styles.icon1} src={cart_icon} alt="Shopping Cart"/>
                                  {itemTotal > 0 && <span className={styles.itemCount}>{itemTotal}</span>}
                                </div>
                                    <div className={styles.cartContainer}>
                                          <div className={styles.cartTitle}>Cart
                                          </div>
                                            <div className={styles.cartContent}>
                                            <Cart count={count}
                                                setCount={setCount}
                                                itemTotal={itemTotal}
                                                setItemTotal={setItemTotal}/>
                                            </div>
                                    </div>
                                <div href="#">
                                    <img src={avatar} className={styles.avatar} alt="Avatar"/>
                                </div>
                        </div>
                    </div>

                      <div className={styles.imageContainerMB}>
                              <div className={styles.previous} onClick={handlePreviousImage}><PreviousIcon/></div>
                              <div className={styles.next} onClick={handleNextImage}><NextIcon/></div>
                              <img src={currentImage} alt="Modal" className={styles.imageMB}/>
                      </div>

                    <div className={styles.productInfoMB}>
                        <p className={styles.company}>SNEAKER COMPANY</p>
        
                        <p className={styles.heading}>Fall Limited Edition Sneakers</p>
                        
                        <p className={styles.info}> These low-profile sneakers are your perfect casual wear companion. 
                                                    Featuring a durable rubber outer sole, 
                                                    they'll withstand everything the weather can offer. 
                        </p>
                        
                        <p className={styles.price}>$125.00 <span>50%</span><strike>$250.00</strike></p>  
                    </div>
                
                    <div className={styles.minusPlusMB}>
                            <img className={styles.minus} src={minus} alt="Minus" onClick={decrement} />
                                <span>{count}</span>
                            <img className={styles.plus} src={plus} alt="Plus" onClick={increment} />      
                    </div>


                    <button className={styles.addToCartButtonMB} onClick={handleAddToCart}>
                        <img src={cart_icon} alt="cart icon"/>Add to cart
                    </button>

                   
                        {showNav && (
                        <>
                        <div className={styles.blackOut} onClick={handleCloseNav}></div>

                        <div className={styles.navMB}>
                            <div onClick={handleCloseNav}><CloseIcon/></div>
                            <nav>
                              <ul>
                                <li><a href="#">Collections</a></li>
                                <li><a href="#">Men</a></li>
                                <li><a href="#">Women</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Contact</a></li>
                              </ul>
                            </nav>
                        </div>
                        </>

                        )}
                    

    </div>
  )



}

export default MobileView;