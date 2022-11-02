import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';

const ShowCourses = ({ course }) => {
      const { name, course_id } = course;

      return (
            <div className='text-center'>
                  <ListGroup>
                        <Link to={`/http://localhost:5000/course/${course_id}`}>
                              <ListGroup.Item className='mb-2 text-primary' action>
                                    {name}
                              </ListGroup.Item>
                        </Link>
                  </ListGroup>
            </div>
      );
};

export default ShowCourses;