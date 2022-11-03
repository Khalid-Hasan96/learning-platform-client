import React, { useEffect, useState } from 'react';
import ShowCourses from './ShowCourses/ShowCourses';

const LeftSide = () => {
      const [courses, setCourses] = useState([]);
      useEffect(() => {
            fetch('https://learning-platform-server-drab-omega.vercel.app/all-courses')
                  .then(res => res.json())
                  .then(data => setCourses(data))
      }, [])

      return (
            <div>
                  <h2 className='mb-4 text-center'>Courses</h2>

                  {
                        courses.map(course => <ShowCourses
                              key={course._id}
                              course={course}
                        ></ShowCourses>)
                  }


            </div>
      );
};

export default LeftSide;