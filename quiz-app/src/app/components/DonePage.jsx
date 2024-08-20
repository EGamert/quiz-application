import React from 'react';
import Link from 'next/link'
import './DonePage.css'

const DonePage = (props) => {
  return (
    <div className="end-screen">
      <h1>Congratulations!</h1>
      <p>You have completed the quiz!</p>
      <p>Final Score: {props.score}/8</p>
      <a href="/">
        <button>Back to Home</button>
      </a>
    </div>
  );
};

export default DonePage;