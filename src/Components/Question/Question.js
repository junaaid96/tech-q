import React from 'react';
import { Container } from 'react-bootstrap';
import './Question.css';

const Question = ({ perQuestion }) => {
    const { id, question, options, correctAnswer } = perQuestion;
    return (
        <Container className='question my-3 m-auto p-3'>
            <h3 className='text-primary'>Question: {question}</h3>
            {
                options.map(option => {
                    return (
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name={question} id={id} />
                            <label class="form-check-label" for="flexRadioDefault1">
                                {option}
                            </label>
                        </div>
                    )
                })
            }
        </Container>
    );
};

export default Question;