import React from 'react';
import Container from 'react-bootstrap/Container';
import LeftSide from './LeftSide/LeftSide'
import { useLoaderData } from 'react-router-dom';
import RightSide from './RightSide/RightSide';
import './Courses.css'


const Courses = () => {
      const allCourses = useLoaderData();
      return (
            <div>
                  <Container className='mt-4'>
                        <div className='course-container'>
                              <div>
                                    <LeftSide></LeftSide>
                              </div>

                              <div>
                                    <RightSide allCourses={allCourses}></RightSide>
                              </div>
                        </div>
                  </Container >
            </div >
      );
};

export default Courses;