'use client'

import { useState } from 'react'
import NavbarComponent from '../components/Navbar'
import QuestionBox from '../components/QuestionBox'
import DonePage from '../components/DonePage'

export default function Page() {
  const [score, setScore] = useState(0)
  const [Index, setIndex] = useState(0)

  const questions = [
    {
      question: 'What is sin 30?',
      option: ['0', '1/2', '2', '1'],
      correctOption: '1/2',
    },
    {
      question: 'How do we represent differentiation?',
      option: ['sigma', 'd/dx', 'long s', 'nothing'],
      correctOption: 'd/dx'
    },
    {
      question: 'Find the conjugate of 2 - i',
      option: ['1', '2 - i', '2 + i', '2i'],
      correctOption: '2 + i'
    },
    {
      question: 'Find the integral of 2x',
      option: ['2x', 'x^2', '3x', 'x'],
      correctOption: 'x^2'
    },
    {
      question: 'What is the value of x in the equation 2x + 5 = 11?',
      option: ['2', '3', '4', '5'],
      correctOption: '3'
    },
    {
      question: 'What is the formula for the area of a circle?',
      option: ['πr', '2πr', 'πr^2', '2πr^2'],
      correctOption: 'πr^2'
    },
    {
      question: 'What is the slope of a line that passes through the points (2,3) and (4,5)?',
      option: ['1/2', '1', '2', '3'],
      correctOption: '1'
    },
    {
      question: 'What is the value of e in the equation 2e + 3 = 7?',
      option: ['1', '2', '3', '4'],
      correctOption: '2'
    }
  ]
  const [questionNo, setQuestionNo] = useState(1)
  const [option1, setOption1] = useState(questions[0].option[0])
  const [option2, setOption2] = useState(questions[0].option[1])
  const [option3, setOption3] = useState(questions[0].option[2])
  const [option4, setOption4] = useState(questions[0].option[3])
  const [question, setQuestion] = useState(questions[0].question)

  const [Next, setNext] = useState(false)

  const [EndScreen, setEndScreen] = useState(true)

  function updateScore(){
    setScore(score + 1)
  }
  function handleClick(){
    if (questionNo < questions.length) {
      setQuestionNo(questionNo + 1)
      setOption1(questions[questionNo].option[0])
      setOption2(questions[questionNo].option[1])
      setOption3(questions[questionNo].option[2])
      setOption4(questions[questionNo].option[3])
      setQuestion(questions[questionNo].question)
    } else {
        setEndScreen(false)
    }
  }

  function done(){
    setEndScreen(false)
  }

  return(
    <div className='question-page'>
      <NavbarComponent title={'Physics'} score={score} />
      {
        EndScreen  ? (
            <QuestionBox indexno={Index}
                   Index={setIndex}
                   question={question}
                   option1={option1} 
                   option2={option2} 
                   option3={option3} 
                   option4={option4} 
                   correctOption={questions[questionNo - 1].correctOption}
                   HandleSubmit={handleClick}
                   updateScore={updateScore}
                   Next={Next}
                   setNext={setNext}
                   setEndScreen={done}
                   />
        ):
        <DonePage score={score} />

      }
    </div>
  )
}