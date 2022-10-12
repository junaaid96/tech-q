import React from 'react';
import './Topic.css';

const Topic = (props) => {
    const {name, logo, total} = props.topic;
    return (
        <div className='topic'>
            <img src={logo} alt="" height={200}/>
            <h4>Name: {name}</h4>
            <p>Total Quizes: {total}</p>
            
        </div>
    );
};

export default Topic;