import "./BuyNowCard.scss";
import { extra } from "../../style/assets/images";
import { MultiStyleText } from "../MultiStyleText/MultiStyleText";

const BuyNowCard = (props) => {
    const advanceText = props.details.text
    return(
        <div className="buy-now-card-box">
            <div className={"buy-now-card-heading" + " " + props.details.headerColor}>
                <MultiStyleText text={advanceText.title}/>
            </div>
            <MultiStyleText text={advanceText.subTitle}/>
            <img className="products-img" src={props.details.productsImgSrc} />
            <MultiStyleText text={advanceText.priceSection}/>
            <div className="yellow-button">
                <MultiStyleText text={advanceText.buyNowButton} />
            </div>
            <div className="defaultFlex">
                <MultiStyleText text={advanceText.regularPrice}/><span>$239.85</span>
            </div>
            <div className="norton-payment">
                <img src={extra.nortonLogo} />
                <img src={extra.securityPayment} />
            </div>
            <img className="visa" src={extra.paymentsList} />
        </div>
    )
} 

export default BuyNowCard;