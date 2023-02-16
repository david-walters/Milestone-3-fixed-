import styles from "../style.module.css";
import logo from "../images/logo.svg"
import cart_icon from "../images/icon-cart.svg"
import avatar from "../images/image-avatar.png"
import Cart from "./Cart";

const Header = ({count, setCount, itemTotal, setItemTotal}) => {


    return (<>
      <div className={styles.header}>
          <nav className={styles.navHide}>
                <div>
                  <img className={styles.logo} src={logo} alt="Logo"/>
                </div>
                
                <ul>
                  <li><a href="#">Collections</a></li>
                  <li><a href="#">Men</a></li>
                  <li><a href="#">Women</a></li>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Contact</a></li>
                </ul>
          </nav>
            <div className={styles.icons}>
                <div className={styles.cartIcon}>
                    <img className={styles.icon1} src={cart_icon} alt="Shopping Cart"/>
                    {itemTotal > 0 && <span className={styles.itemCount}>{itemTotal}</span>}
                </div>
                    <div className={styles.cartContainer}>
                          <div className={styles.cartTitle}>Cart</div>
                            <div className={styles.cartContent}>
                                <Cart count={count}
                                      setCount={setCount}
                                      itemTotal={itemTotal}
                                      setItemTotal={setItemTotal}/>
                            </div>
                    </div>
                <a href="#">
                    <img src={avatar} className={styles.avatar} alt="Avatar"/>
                </a>
            </div>
      </div>
    <div className={styles.border}></div>
    </>)

      
      
    }

export default Header