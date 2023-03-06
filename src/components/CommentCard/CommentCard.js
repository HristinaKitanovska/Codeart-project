import "./CommentCard.scss";
import { extra } from "../../style/assets/icons/extra";


const CommentCard = (props) => {
    console.log("-------------")
    console.log(props)
    return(
        <div className="comment-card-container">
            <p>{props.comments.text}</p>
            <div className="stars">
                <p className="text-lime text-bold">{props.comments.user}</p>
                {Array.from({length: props.comments.numberOfStars}).map(x => {
                    return <img src={extra.fullStar}/>
                })}
            </div>
        </div>
    )
}
export default CommentCard;
