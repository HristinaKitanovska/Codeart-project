// GLAVNIOT HEDER DA BIDE KAKO KOMPONENTA

import './Header.scss'
import { global } from "../../style/assets/images";
import { MultiStyleText } from '../../components/MultiStyleText/MultiStyleText';

const Header = (props) => {
    return(
        <>
            <img className="header-img" src={global.coverImg} alt="cover-img" />
            <div className="header-text">
                <MultiStyleText text={props.title} />
                <MultiStyleText text={props.subtitle} />
            </div>
        </>
        
    )
}

export default Header;