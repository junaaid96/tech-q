import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from '../Components/Header/Header';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container className='p-5'>
                <Row>
                    <Col sm={12} md={4} lg={6}>
                        <img src="logo.png" alt="logo" height={200} />
                    </Col>
                    <Col sm={12} md={8} lg={6}>
                        <p>A quiz is a type of game or mind sport in which participants try to accurately answer inquiries about a particular or range of topics. In education and related industries, quizzes can be used as a quick assessment to gauge changes in students' knowledge, skills, or abilities. A quiz is typically a type of student assessment in an educational setting, however it frequently comprises fewer and simpler questions and takes less time to complete than a test. For instance, a quiz in a math class might be used to assess students' understanding of a certain kind of mathematical activity. A personality test can also consist of a number of questions about the respondent with numerous choices but no right or incorrect answers.</p>
                        <Link to="/topic"><Button>Go to All Topics</Button></Link>
                        
                    </Col>
                </Row>
            </Container>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;