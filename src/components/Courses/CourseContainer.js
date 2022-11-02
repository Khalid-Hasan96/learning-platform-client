import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

import './CourseContainer.css'

const CourseContainer = ({ course }) => {
      const { title, img, duration, price, _id } = course;
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
                        <Link to={`/course-details/${_id}`}><Button className='w-100' variant="info">Show Details</Button></Link>
                  </Card.Footer>
            </Card>
      );
};

export default CourseContainer;