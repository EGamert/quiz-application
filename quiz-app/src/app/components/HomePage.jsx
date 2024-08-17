import Card from './Card'
import './HomePage.css'

const HomePage = () => {
  return (
    <div className='cardbox'>
        <Card title={'Physics'} backgroundColor={'blue'} info={
            ''
        }
        color1={'#8dc1fc'} color2={'#1c33d9'}
        />

        <Card title={'Chemistry'} backgroundColor={'blue'} info={
            ''
        }
        color1={'#8dc1fc'} color2={'#1c33d9'}
        />

        <Card title={'Maths'} backgroundColor={'blue'} info={
            ''
        }
        color1={'#8dc1fc'} color2={'#1c33d9'}
        />
    </div>
  )
}

export default HomePage
