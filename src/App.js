import React, { useState } from 'react';
import Header from "./components/Header";
import MobileView from './components/MobileView';
import ProductImage from "./components/ProductImage";
import shoes1 from './images/image-product-1.jpg'
import shoes2 from './images/image-product-2.jpg'
import shoes3 from './images/image-product-3.jpg'
import shoes4 from './images/image-product-4.jpg'

function App() {

  
  const shoes = [shoes1, shoes2, shoes3, shoes4,];
  const [count, setCount] = useState(0);
  const [itemTotal, setItemTotal] = useState(0);
  const [currentImage, setCurrentImage] = useState(shoes[0]);



  return (
    <div className="App">
      <Header shoes={shoes}
              currentImage={currentImage}
              setCurrentImage={setCurrentImage}
              count={count}
              setCount={setCount}
              itemTotal={itemTotal}
              setItemTotal={setItemTotal}/>

      <ProductImage shoes={shoes}
                    currentImage={currentImage}
                    setCurrentImage={setCurrentImage}
                    count={count}
                    setCount={setCount}
                    itemTotal={itemTotal}
                    setItemTotal={setItemTotal}/>
                    
      <MobileView   shoes={shoes}
                    currentImage={currentImage}
                    setCurrentImage={setCurrentImage}
                    count={count}
                    setCount={setCount}
                    itemTotal={itemTotal}
                    setItemTotal={setItemTotal} />
    </div>
  );
}

export default App;
