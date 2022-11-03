import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';


const ShowCourses = ({ course }) => {
      const { title, _id } = course;

      return (
            <div className='text-center'>
                  <ListGroup>
                        <ListGroup.Item
                              className='mb-2' action>
                              <Link to={`/course-details/${_id}`} className='text-dark'>{title}</Link>
                        </ListGroup.Item>
                  </ListGroup>

            </div >
      );
};


export default ShowCourses;