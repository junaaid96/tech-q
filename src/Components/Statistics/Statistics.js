import React from 'react';
import { Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const Statistics = () => {
    const topics = useLoaderData();
    const topic = topics.data.map(topic => topic);

    return (
        <Container fluid>
            <h1 className='mb-5'>Questions Graph</h1>
            <BarChart
                className='m-auto'
                width={1000}
                height={500}
                data={topic}
                margin={{
                    top: 5, right: 30, left: 20, bottom: 5
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="total" fill="#82ca9d" />
            </BarChart>
        </Container>
    );
};

export default Statistics;