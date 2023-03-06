import "./UsageDetailsBox.scss";
import { MultiStyleText } from "../MultiStyleText/MultiStyleText";

const UsageDetailsBox = (props) => {
    const details = props.details
    return(
        <div className="usage-details-box">
            <img className="usage-details-img" src={details.usageDetailsImgSrc} />
            {details.title && <MultiStyleText text={details.title}/>}
            {details.contents && details.contents.map(content => {
                return <MultiStyleText text={content}/>
            })}
            {details.contentRed && <MultiStyleText text={details.contentRed}/>}
        </div>
    )
}

export default UsageDetailsBox;