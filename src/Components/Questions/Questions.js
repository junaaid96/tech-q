import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Questions = () => {
    const questions = useLoaderData();
    // const {}
    return (
        <div>
            <h1>Total Questions: {questions.data.questions.length}</h1>
            {
                questions.data.questions.map(question => console.log(question))
            }
            <div>

            </div>
        </div>
    );
};

export default Questions;