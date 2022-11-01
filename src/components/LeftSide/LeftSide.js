import React, { useEffect, useState } from 'react';
import ShowCourses from './ShowCourses/ShowCourses';

const LeftSide = () => {
      const [courses, setCourses] = useState([]);
      useEffect(() => {
            fetch('http://localhost:5000/courses')
                  .then(res => res.json())
                  .then(data => setCourses(data))
      }, [])

      return (
            <div>
                  <h2 className='mb-4 text-center'>{courses.length} Courses to Start Your Journey</h2>
                  {
                        courses.map(course => <ShowCourses
                              key={course.id}
                              course={course}
                        ></ShowCourses>)
                  }
            </div>
      );
};

export default LeftSide;