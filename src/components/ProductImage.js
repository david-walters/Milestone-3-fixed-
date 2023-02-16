import React, { useState } from 'react'
import styles from "../style.module.css";
import ProductInfo from './ProductInfo'
import Modal from './Modal'
import shortid from 'shortid'



function ProductImage({shoes, count, setCount, itemTotal, setItemTotal, currentImage, setCurrentImage}) {
  
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = (img) => {
    setCurrentImage(img);
    setShowModal(true);
  };


  return (
  <div className={styles.wrapper}>
    <div className={styles.productImage}>
      <img src={currentImage} alt="Product" className={styles.mainImage} onClick={() => handleShowModal(currentImage)}/>
        <div className={styles.thumbnailContainer}>
            {shoes.map((image) => (
        <div className={`${styles.thumbnailDiv} ${currentImage === image ? `${styles.selectedDiv}` : ""}`} key={shortid.generate()}>
          <img
            src={image}
            alt="Thumbnail"
            className={`${styles.thumbnail} ${currentImage === image ? `${styles.selected}` : ""}`}
            onClick={() => setCurrentImage(image)}/>
        </div>
             ))}
        </div>
    </div>
      <div className={styles.productInfo}><ProductInfo 
                                            count={count}
                                            setCount={setCount}
                                            itemTotal={itemTotal}
                                            setItemTotal={setItemTotal}/>
      </div>

      <div>
            {showModal && (
              <Modal shoes={shoes}
              setShowModal={setShowModal}
              currentImage={currentImage}
              setCurrentImage={setCurrentImage}/>
            )}
      </div>
      
  </div>
  );
}

export default ProductImage;
