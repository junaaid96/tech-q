import React from 'react';

const Question = ({perQuestion}) => {
    const {id, question, options, correctAnswer} = perQuestion;
    return (
        <div>
            <h3>Question: {question}</h3>
            Options:
            {
            options.map(option=><p>{option}</p>)
            }
        </div>
    );
};

export default Question;