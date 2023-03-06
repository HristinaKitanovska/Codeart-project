import "./BuyNowButton";

import {useRef} from 'react';
import ProductInformation from "../../containers/ProductInformation/ProductInformation";

export default function BuyNowButton() {
  const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
  };

  return (
    <div>
      <button onClick={handleClick}>BUY NOW</button>

      <div/>

      <div ref={ref} style={{backgroundColor: 'lime'}}>
        {/* <ProductInformation /> */}
      </div>

      <div />
    </div>
  );
}