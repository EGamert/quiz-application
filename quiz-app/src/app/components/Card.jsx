'use client'
import './Card.css'
import {useRouter} from 'next/navigation'

const Card = (props)=>{

    const router = useRouter()

    return(
        <div className="card" onClick={()=>{
            router.push(`/${props.link}`)
        }}>

        <div className="title">
            {props.title}
        </div>

        <div className="info">
            <u>{props.info}</u>
        </div>

        </div>
    )
}

export default Card