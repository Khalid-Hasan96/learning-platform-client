import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import './CourseContainer.css'

const CourseContainer = ({ course }) => {
      const { title, img, duration, price } = course;
      return (
            <Card className='course-detail'>
                  <Card.Img className='border p-2' height="220" variant="top" src={img} />
                  <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                              <p>{duration} week</p>
                              <p>${price}</p>
                        </Card.Text>

                  </Card.Body>
                  <Card.Footer>
                        <Button className='w-100' variant="info">Show Details</Button>
                  </Card.Footer>

            </Card>
      );
};

export default CourseContainer;