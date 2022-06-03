import React from 'react'
import Box from '@mui/material/Box';
import './AnswerPage.css'
import { Col, Row } from 'react-bootstrap';

export const AnswerPage = () => {
    return (
        <div>
            <h1> Answer Page </h1> 

            <Box className='ContentBox'
                sx={{
                width: 1200,
                height: 190,
                display: 'flex',
                alignItems: 'center',
                px: 10
                }}  
                
            > Answer: </Box>

            <div class="container">
               <Row> 
                    <Col className='LeftTextBlock'> 
                        <Row className='LeftText'> Selected Drone: </Row>
                        <Row className='LeftText'> Current Location: </Row> 
                        <Row className='LeftText'> Drone Wind Level: </Row> 
                        <Row className='LeftText'> Current Wind Condition </Row> 
                    </Col> 
                    <Col className='Map'> <img src={'https://dummyimage.com/600x400/000/fff&text=Map'} className='MapPic' alt="Map"/> </Col>
               </Row>

            </div>
      </div>
  );
}
