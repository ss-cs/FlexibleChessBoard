
import './card.css';
const Cards = (props) =>{

    return(
    <>
        <div className='card'>
            <div className='card__body' style={{backgroundColor: props.color, width: "100%", height: "100%"}}>
                <h2 className='card__title' >{props.value}</h2>
            </div>
        </div>
    </>
    )
}

export default Cards;