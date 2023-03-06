// ZELENIOT RAZDELUVACH›››

import "./GreenDelimiter.scss";
import { icons } from "../../style/assets/icons"
import { MultiStyleText } from "../../components/MultiStyleText/MultiStyleText";

const GreenDelimiter = (props) => {
  return (
      <div className="green-delimiter">
          <MultiStyleText text={props.text} />
        <div className="bottom-arrow"><img src={icons.extra.bottomArrow} /></div> 
      </div>
  );
};

export default GreenDelimiter;
