import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

const ShowCourses = ({ course }) => {
      const { name } = course;
      return (
            <div>
                  <ListGroup>
                        <ListGroup.Item className='mb-2' action href="#link1">
                              {name}
                        </ListGroup.Item>
                  </ListGroup>
            </div>
      );
};

export default ShowCourses;