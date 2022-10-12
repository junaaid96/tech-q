import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Topic = () => {
    const topics = useLoaderData();
    return (
        <div>
            <h1>Topic: {topics.data.length}</h1>
            {
                topics.data.map(topic=><div>
                    <p>Name: {topic.name}</p>
                </div>)
            }
            
            
        </div>
    );
};

export default Topic;