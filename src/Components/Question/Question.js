import React from 'react';
import { Button, Container } from 'react-bootstrap';
import './Question.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Question = ({ perQuestion }) => {
    const { id, question, options, correctAnswer } = perQuestion;

    const notify = () => toast(`Correct: ${correctAnswer}`);
    
    return (
        <Container className='question my-3 m-auto p-3'>
            <h3 className='text-primary'>Question: {question}</h3>
            {
                options.map(option => {
                    return (
                        <div class="form-check m-2">
                            <input class="form-check-input" type="radio" name={question} id={id} />
                            <label class="form-check-label" for="flexRadioDefault1">
                                {option}
                            </label>
                        </div>
                    )
                })
            }
            <Button className='mt-3' onClick={notify}>Correct Answer</Button>
            <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </Container>
    );
};

export default Question;