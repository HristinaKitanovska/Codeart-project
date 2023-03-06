import './IngridianCards.scss'
import { MultiStyleText } from '../../components/MultiStyleText/MultiStyleText';

const IngridianCards = (props) => {
    return(
        <div className='cards-container'>
            <MultiStyleText text={props.header} />
            {
                props.cards.map(card => {
                    return (
                        <>
                        <div className="card-item">
                            <div className="card-item-text">
                                <MultiStyleText text={card.text}/>
                                <MultiStyleText text={card.list}/>
                            </div>
                            <div className="card-item-img">
                                <img src={card.imageSrc}/>
                            </div>
                        </div>
                    </>)
                })
            }
        </div>
        
    )
}

export default IngridianCards;