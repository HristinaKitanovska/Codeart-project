import "./BuyNow.scss";
import BuyNowCard from "../../components/BuyNowCard/BuyNowCard";
import { MultiStyleText } from "../../components/MultiStyleText/MultiStyleText";
import { buyNowCards } from "../../mockup/buyNowCards";
import { extra } from "../../style/assets/images";


const BuyNow = (props) => {
    return(
        <div className="default-flex">
            {props.title && (<MultiStyleText text={props.title} />)}
            {props.title && (<MultiStyleText text={props.subTitle} /> )}
            <div className="column-flex">
                <BuyNowCard details={buyNowCards.beigeCard}/>
                <BuyNowCard details={buyNowCards.greenCard}/>
            </div>
            <div className="money-guarantee">
                <img src={extra.moneyGuarantee} className="guarantee-icon" />
                <div className="money-guarantee-text size-20 text-black">
                    <p>{props.moneyGuarantee && props.moneyGuarantee.lineOne}</p>
                    <p>{props.moneyGuarantee && props.moneyGuarantee.lineTwo}</p>
                </div>
            </div>
        </div>
    )
}

export default BuyNow;