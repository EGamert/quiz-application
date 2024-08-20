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
      question: 'What is the atomic number of Carbon?',
      option: ['6', '12', '14', '16'],
      correctOption: '6',
    },
    {
      question: 'What is the chemical symbol for Gold?',
      option: ['Ag', 'Au', 'Hg', 'Pb'],
      correctOption: 'Au',
    },
    {
      question: 'What is the process by which water moves through a plant?',
      option: ['Respiration', 'Photosynthesis', 'Transpiration', 'Osmosis'],
      correctOption: 'Transpiration',
    },
    {
      question: 'What is the pH of a neutral solution?',
      option: ['0', '7', '14', '28'],
      correctOption: '7',
    },
    {
      question: 'What is the chemical formula for water?',
      option: ['H2O', 'H2S', 'CO2', 'O2'],
      correctOption: 'H2O',
    },
    {
      question: 'What is the type of bond that forms between two atoms that share one or more pairs of electrons?',
      option: ['Ionic', 'Covalent', 'Hydrogen', 'Electrostatic'],
      correctOption: 'Covalent',
    },
    {
      question: 'What is the process by which an atom gains or loses electrons to form ions?',
      option: ['Ionization', 'Electrolysis', 'Oxidation', 'Reduction'],
      correctOption: 'Ionization',
    },
    {
      question: 'What is the chemical formula for sodium chloride?',
      option: ['NaCl', 'Na2Cl', 'NaCl2', 'Na3Cl'],
      correctOption: 'NaCl',
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
  function resetScore(){
    setScore(0)
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
      <NavbarComponent title={'Chemistry'} score={score} />
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
        ) :
        <DonePage score={score} />
      }
    </div>
  )
}