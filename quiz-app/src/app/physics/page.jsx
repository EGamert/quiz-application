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
      question: 'Who discovered the universal law of gravitation?',
      option: ['Isaac Newton', 'Galileo Galilei', 'Albert Einstein', 'Alfred Nobel'],
      correctOption: 'Isaac Newton',
    },
    {
      question: 'From which ancient civilisation do we get the name "atom"?',
      option: ['Ancient Rome', "Ancient Greece", "Ancient India", "Ancient China"],
      correctOption: 'Ancient Greece'
    },
    {
      question: 'What is mass times velocity?',
      option: ['Force', 'Accelaration', 'Momentum', 'Displacement'],
      correctOption: 'Momentum'
    },{
        question: 'What is Moment of force?',
        option: ['Angular speed', 'Friction', "Torque", 'Velocity'],
        correctOption: 'Torque'
    },{
        question: 'What is the unit of force?',
        option: ['kg', 'm/s', 'N', 'kg/m^2'],
        correctOption: 'N'
    },{
        question: 'What is the unit of pressure?',
        option: ['kg/m^2', 'm/s', 'N', 'kg'],
        correctOption: 'kg/m^2'
    },{
        question: 'WHat balances an object hanging by string?',
        option: ['work', 'gravity', 'tension', 'energy'],
        correctOption: 'tension'
    },{
        question: "Which of the following is not a part of projectile motion?",
        option: ['Horizontal range', 'Maximum height', 'Total time', 'Skiding'],
        correctOption: 'Skiding'
    }
  ]

  const [questionNo, setQuestionNo] = useState(1)
  const [option1, setOption1] = useState(questions[0].option[0])
  const [option2, setOption2] = useState(questions[0].option[1])
  const [option3, setOption3] = useState(questions[0].option[2])
  const [option4, setOption4] = useState(questions[0].option[3])
  const [question, setQuestion] = useState(questions[0].question)

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
                   />
        ):
        <DonePage score={score} />

      }
    </div>
  )
}