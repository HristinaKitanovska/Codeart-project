import CommentCard from "../../components/CommentCard/CommentCard";
import BuyNow from "../BuyNow/BuyNow";
import "./ProductInformation.scss";
import { mockup } from "../../mockup";
import { background } from "../../style/assets/images/background";
import { forwardRef } from "react";



const ProductInformation = (props, ref) => {
    return(
        <div ref={ref} className="product-info">
            <BuyNow moneyGuarantee={mockup.staticText.moneyGuarantee} />
            <div className="comment-cards">
                {/* <CommentCard />
                <CommentCard /> */}
            </div>
            {/* <div className="test">
                <img className="green-img" src={background.boxBackground} />
                <div className="green-img-text">
                    ajhsdkajdhsakjs
                </div>
            </div> */}
            
        </div>
    )
}

export default forwardRef (ProductInformation);