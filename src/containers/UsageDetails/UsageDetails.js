// Delot so kartichki kade sto se objasnuva efekti od koristenjeto
// treba da se napravi dopolnitelna komponenta box za kartichkite
// treba da se napravi dopolnitelna komponenta box za komentari

import "./UsageDetails.scss";
import UsageDetailsBox from "../../components/UsageDetailsBox/UsageDetailsBox";
import { usageDetailsCards } from "../../mockup/usageDetailsCards";
import { MultiStyleText } from "../../components/MultiStyleText/MultiStyleText";
import CommentCard from "../../components/CommentCard/CommentCard";
import { extra } from "../../style/assets/images";
import { mockup } from "../../mockup";

const UsageDetails = (props) => {
    return <div className="usage-details">
        <div className="usage-details-cards">
        { usageDetailsCards.map(card => {
            return <UsageDetailsBox details={card}/>
        })}
        </div>
        <div className="usage-details-content">
        <div className="buy-now-button">
            <button className="text-bold size-30">{props.buyNow && props.buyNow.buyNowtext}</button>
        </div>
        <div className="money-guarantee">
            <img src={extra.moneyGuarantee} className="guarantee-icon" />
            <div className="money-guarantee-text size-20 text-black">
                <p>{props.moneyGuarantee && props.moneyGuarantee.lineOne}</p>
            </div>
        </div>
        
        <div id="money" className="comment-cards">
            <CommentCard comments={mockup.staticText.commentCard[0]}/>
            <CommentCard comments={mockup.staticText.commentCard[1]}/>
        </div>
        </div>
    </div>
}

export default UsageDetails