import styles from "../style.module.css";
import shortid from 'shortid'
import ReactDOM from "react-dom";
import CloseIcon from "./CloseIcon";
import NextIcon from "./NextIcon";
import PreviousIcon from "./PreviousIcon";

function Modal ({shoes, setShowModal, currentImage, setCurrentImage}) {

      const handleCloseModal = () => {
        setShowModal(false);
      };
    
      const handlePreviousImage = () => {
        const previousIndex = (shoes.indexOf(currentImage) + shoes.length - 1) % shoes.length;
        setCurrentImage(shoes[previousIndex]);
      };
    
      const handleNextImage = () => {
        const nextIndex = (shoes.indexOf(currentImage) + 1) % shoes.length;
        setCurrentImage(shoes[nextIndex]);
      };

    return ReactDOM.createPortal(

    <>
        <div className={styles.overlay} onClick={handleCloseModal}></div>
        <div className={styles.modal}>
          
          <div className={styles.close} onClick={handleCloseModal}><CloseIcon/></div>
          <div className={styles.previous} onClick={handlePreviousImage}><PreviousIcon/></div>
          <div className={styles.next} onClick={handleNextImage}><NextIcon/></div>
          
          <img src={currentImage} alt="Modal" className={styles.modalImage}/>
            
            <div className={styles.thumbnailContainerModal}>
                  {shoes.map((image) => (
                    <div className={`${styles.thumbnailDiv} ${currentImage === image ? 
                          `${styles.selectedDiv}` : ""}`} key={shortid.generate()}>
                        <img
                          src={image}
                          alt="Thumbnail"
                          className={`${styles.thumbnail} ${currentImage === image ? `${styles.selected}` : ""}`}
                          onClick={() => setCurrentImage(image)}/>
                    </div>))}
            </div>
        </div>
    </>,  document.getElementById('portal') )
}

export default Modal;