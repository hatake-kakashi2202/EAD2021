import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import img from './images/picc5.jpg'
import axios from 'axios'
import {
  Container,
  Row,
  Col,
  Image,
  ListGroup,
  Tab,
  Form,
  Button,
} from 'react-bootstrap'

const Roomies = ({ match }) => {
  const [data, setRoommates] = useState([])

  useEffect(() => {
    const fetchRoommates = async () => {
      const { data } = await axios.get(
        `${url}`+"api/roommates/${match.params.id}"
      )
      setRoommates(data)
    }
    fetchRoommates()
  }, [])
  return (
    <div class='roomiedetails'>
      <br />
      <br />
      <br />
      <br />
      <Container>
        <Link className='btn btn-light my-3' to='/roommates/'>
          Go Back
        </Link>
        <h1>PROFILE</h1>
        <br />
        <Row>
          <Col md={6}>
            <Image src={img} alt={data.name} fluid />
          </Col>
          <br />
          <Col>
            <h4 className='py-3'>
              Hi I am <b>{data.name}</b>
            </h4>
            <br />
            <Tab.Container
              id='list-group-tabs-example'
              defaultActiveKey='#link1'
            >
              <Row>
                <Col sm={12}>
                  <ListGroup horizontal>
                    <ListGroup.Item action href='#link1'>
                      About Me
                    </ListGroup.Item>
                    <ListGroup.Item action href='#link2'>
                      Occupation
                    </ListGroup.Item>
                    <ListGroup.Item action href='#link3'>
                      Habits
                    </ListGroup.Item>
                    <ListGroup.Item action href='#link4'>
                      Food
                    </ListGroup.Item>
                  </ListGroup>
                </Col>
                <Col>
                  <Tab.Content>
                    <Tab.Pane eventKey='#link1'>
                      <br />
                      <br />I am a {data.gender} looking for a roommate. I hail
                      form {data.hometown} and I currently reside in{' '}
                      {data.roomtown}. My native language is {data.language}
                    </Tab.Pane>
                    <Tab.Pane eventKey='#link2'>
                      <br />
                      <br />I am {data.occupation} with {data.course} as
                      my speciality.
                    </Tab.Pane>
                    <Tab.Pane eventKey='#link3'>
                      <br />
                      <br />I say {data.alcohol} to Alcohol and {data.smoking}{' '}
                      to smoking.
                    </Tab.Pane>
                    <Tab.Pane eventKey='#link4'>
                      <br />
                      <br />I {data.culinary} cook and my food preference is{' '}
                      {data.food_preference}.
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </Col>
        </Row>
        <br />
        <br />
        <br />
        <br />
        <div className='mb-4'>
          <hr className='dashed' />
        </div>
        <br />
        <br />
        <br />
        <br />
        <div>
          <Row>
            <Col xs={5}>
              <h2 className='text-centre'>Connect with Me</h2>
            </Col>
            <Col xs={7}>
              <Form className='justify-content-md-center'>
                <Form.Row>
                  <Col xs={10}>
                    <Form.Control type='text' placeholder='Message' />
                  </Col>
                  <Col>
                    <Button variant='primary' type='submit'>
                      Connect
                    </Button>
                  </Col>
                </Form.Row>
              </Form>
            </Col>
          </Row>
        </div>
      </Container>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  )
}

export default Roomies
