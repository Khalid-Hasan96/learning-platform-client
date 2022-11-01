import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import './CourseContainer.css'

const CourseContainer = ({ course }) => {
      const { title, img, duration, price } = course;
      return (
            <Card>
                  <Card.Img className='p-2' height="250" variant="top" src={img} />
                  <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                              <p className='mt-4'>Duration: {duration} week</p>
                              <p>Price: ${price}</p>
                        </Card.Text>

                  </Card.Body>
                  <Card.Footer>
                        <Button className='w-100' variant="info">Show Details</Button>
                  </Card.Footer>

            </Card>
      );
};

export default CourseContainer;