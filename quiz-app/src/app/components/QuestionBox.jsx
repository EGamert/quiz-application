import { useState } from 'react';
import './QuestionBox.css'

export default function QuestionBox(props) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [correctOption, setCorrectOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    if (option === props.correctOption) {
      setCorrectOption(option);
      props.updateScore()
    } else {
      setCorrectOption(null);
    }

    props.HandleSubmit()
    
  };

  return (
    <div className="question-box">
      <div className="question-text">
        <h2>{props.question}</h2>
      </div>
      <div className="options">
        <div
          className={`option ${selectedOption === props.option1 && (correctOption === props.option1 ? 'correct' : 'incorrect')}`}
          onClick={() => handleOptionClick(props.option1)}
        >
          <p>{props.option1}</p>
        </div>
        <div
          className={`option ${selectedOption === props.option2 && (correctOption === props.option2 ? 'correct' : 'incorrect')}`}
          onClick={() => handleOptionClick(props.option2)}
        >
          <p>{props.option2}</p>
        </div>
        <div
          className={`option ${selectedOption === props.option3 && (correctOption === props.option3 ? 'correct' : 'incorrect')}`}
          onClick={() => handleOptionClick(props.option3)}
        >
          <p>{props.option3}</p>
        </div>
        <div
          className={`option ${selectedOption === props.option4 && (correctOption === props.option4 ? 'correct' : 'incorrect')}`}
          onClick={() => handleOptionClick(props.option4)}
        >
          <p>{props.option4}</p>
        </div>
      </div>
    </div>
  );
}