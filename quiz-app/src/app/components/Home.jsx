import Card from './Card'
import './Home.css'
import Link from 'next/link' 

export default function HomePage(){

    

    return (
        <div className="home-page">
            <div className="home-title">
                PCM Quiz
            </div>

            <div className="container">

                <Card color1={'#6b96da'} color2={'#1a2691'} title={'Physics'} link={'physics'} info={
                    'Here have a look at the quiz about physics'
                } 
                />

                <Card color1={'#6b96da'} color2={'#1a2691'} title={'Chemistry'} link={'chemistry'} info={
                    'Here have a look at the quiz about chemistry'
                } />

                <Card color1={'#6b96da'} color2={'#1a2691'} title={'Maths'} link={'maths'} info={
                    'Here have a look at the quiz about maths'
                } />

            </div>
        </div>
    )
}