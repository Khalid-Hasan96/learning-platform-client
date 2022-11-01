import React from 'react';
import CourseContainer from '../CourseContainer';
import './RightSide.css'

const RightSide = ({ allCourses }) => {
      return (
            <div className='course'>
                  {
                        allCourses.map(course => <CourseContainer
                              key={course._id}
                              course={course}></CourseContainer>)
                  }

            </div>
      );
};

export default RightSide;