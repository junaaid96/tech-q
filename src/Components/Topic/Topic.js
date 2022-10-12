import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Topic.css';

const Topic = ({topic}) => {
    const {id, name, logo, total} = topic;
    const navigate = useNavigate();

    const handleNavigate = () =>{
        navigate(`/topic/${id}`);
    }

    return (
        <div className='topic'>
            <img src={logo} alt="topic-logo" height={200}/>
            <h4>{name}</h4>
            <p>Total Quizes: {total}</p>
            <Button variant="outline-warning" onClick={handleNavigate}>Start</Button>
        </div>
    );
};

export default Topic;