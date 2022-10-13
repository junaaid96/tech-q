import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const Questions = () => {
    const questions = useLoaderData();
    // const {}
    return (
        <div>
            <h2 className='mb-5'>Total Questions: {questions.data.questions.length}</h2>
            {
                questions.data.questions.map(question => <Question key={question.id} perQuestion={question}></Question>)
            }
            <div>

            </div>
        </div>
    );
};

export default Questions;