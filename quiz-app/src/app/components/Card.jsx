import './Card.css'

const Card = (props)=>{
    return (
        <div className="card" style={
            {
                background: `linear-gradient(135deg,${props.color1}, ${props.color2} )`
            }
        }>

            <div className="card-title">
                <h2>{props.title}</h2>
            </div>

            <div className="card-info">
                <p>{props.info}</p>
            </div>

        </div>
    )
}

export default Card