import React, { createRef } from 'react';
import { Button, Container } from 'react-bootstrap';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Pdf from 'react-to-pdf';

const ref = createRef();
const CourseDetails = () => {
      const singleCourse = useLoaderData();
      const { _id, img, title, details, duration, price } = singleCourse;
      const navigate = useNavigate();
      const handleAccess = () => {
            navigate(`/checkout/${_id}`, { state: { title, price } })
      }
      console.log('single course courseDetails', singleCourse)

      return (
            <Container className='mt-4'>
                  <div className='d-flex justify-content-between align-items-center'>
                        <h2>Course Details</h2>
                        <Pdf targetRef={ref} filename="code-example.pdf">
                              {({ toPdf }) => <Button variant='info' onClick={toPdf}>Download</Button>}
                        </Pdf>

                  </div>
                  <Card className='mt-4'>
                        <Card.Img variant="top" height='550' src={img} />
                        <Card.Body ref={ref}>
                              <Card.Title>{title}</Card.Title>
                              <Card.Text>
                                    <p><small>{details}</small></p>
                                    <p>Duration: {duration} week</p>
                                    <p>Price: <span className='fs-3 fw-bold'>${price}</span></p>
                              </Card.Text>
                              <Button onClick={handleAccess} variant="primary">Get Premium Access</Button>
                        </Card.Body>
                  </Card>
            </Container>
      );
};

export default CourseDetails;