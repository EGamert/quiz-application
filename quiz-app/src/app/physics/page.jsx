'use client'

import { useState } from 'react'
import NavbarComponent from '../components/Navbar'

export default function Page(){

    const [score, setScore] = useState(0)

    return(
        <div className='question-page'>
            <NavbarComponent title={'Physics'} score={score}/>
        </div>
    )
}