import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const Statistics = () => {
    const topics = useLoaderData();
    const topic = topics.data.map(topic => topic);

    return (
        <>
            <h1>Questions Graph</h1>
            <ResponsiveContainer className='m-auto mt-5' height={500} width="80%">
                <BarChart
                    // width={1000}
                    // height={500}
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
            </ResponsiveContainer>
        </>
    );
};

export default Statistics;