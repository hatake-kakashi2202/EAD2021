import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../bootstrap.min.css'
import { Row, Col, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Roomiebox from '../components/Roomiebox.js'
const roommates = () => {
  const [data, setRoommates] = useState([])
  const [q, setQ] = useState('')
  useEffect(() => {
    const fetchRoommates = async () => {
      const { data } = await axios.get(`${url}`+'api/roommates')
      setRoommates(data)
    }
    fetchRoommates()
  }, [])
  return (
    <div class='roomie'>
      <br />
      <br />
      <br />
      <br />
      <Container>
        <section class='py-5 bg-light'>
          <div class='container'>
            <div class='row px-4 px-lg-5 py-lg-4 align-items-center'>
              <div class='col-lg-9 col-sm-12 col-md-6'>
                <h1 class='h2 text-uppercase mb-0'>Roommates</h1>
              </div>
              <div class='col-lg-2 col-sm-12 col-md-6 float-right'>
                <Link className='btn btn-light my-3' to='/roomiereg'>
                  Register
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section class='py-5'>
          <Container className='p-0'>
            <Row>
              <Col lg={3} className='col-lg-3 order-2 order-lg-1'>
                <h5 class='text-uppercase mb-4'>Filter</h5>
                <div class='py-2 px-4 bg-light  mb-3'>
                  <strong class='small text-uppercase font-weight-bold'>
                    Gender
                  </strong>
                </div>
                <ul class='list-unstyled small text-muted pl-lg-4 font-weight-normal'>
                  <li class='mb-2'>
                    <a class='reset-anchor' href='#'>
                      Female
                    </a>
                  </li>
                  <li class='mb-2'>
                    <a class='reset-anchor' href='#'>
                      Male
                    </a>
                  </li>
                </ul>
                <div class='py-2 px-4 bg-light  mb-3'>
                  <strong class='small text-uppercase font-weight-bold'>
                    Hometown
                  </strong>
                </div>
                <ul class='list-unstyled small text-muted pl-lg-4 font-weight-normal'>
                  <li class='mb-2'>
                    <a class='reset-anchor' href='#'>
                      Hyderabad
                    </a>
                  </li>
                  <li class='mb-2'>
                    <a class='reset-anchor' href='#'>
                      Kakinada
                    </a>
                  </li>
                  <li class='mb-2'>
                    <a class='reset-anchor' href='#'>
                      Pretoria
                    </a>
                  </li>
                  <li class='mb-2'>
                    <a class='reset-anchor' href='#'>
                      Salem
                    </a>
                  </li>
                </ul>
                <div class='py-2 px-4 bg-light  mb-3'>
                  <strong class='small text-uppercase font-weight-bold'>
                    Roomtown
                  </strong>
                </div>
                <ul class='list-unstyled small text-muted pl-lg-4 font-weight-normal'>
                  <li class='mb-2'>
                    <a class='reset-anchor' href='#'>
                      Sricity
                    </a>
                  </li>
                  <li class='mb-2'>
                    <a class='reset-anchor' href='#'>
                      Hyderabad
                    </a>
                  </li>
                  <li class='mb-2'>
                    <a class='reset-anchor' href='#'>
                      Kakinada
                    </a>
                  </li>
                  <li class='mb-2'>
                    <a class='reset-anchor' href='#'>
                      Bengaluru
                    </a>
                  </li>
                </ul>
                <div class='py-2 px-4 bg-light  mb-3'>
                  <strong class='small text-uppercase font-weight-bold'>
                    Language
                  </strong>
                </div>
                <ul class='list-unstyled small text-muted pl-lg-4 font-weight-normal'>
                  <li class='mb-2'>
                    <a class='reset-anchor' href='#'>
                      Telugu
                    </a>
                  </li>
                  <li class='mb-2'>
                    <a class='reset-anchor' href='#'>
                      Hindi
                    </a>
                  </li>
                  <li class='mb-2'>
                    <a class='reset-anchor' href='#'>
                      Bhojpuri
                    </a>
                  </li>
                  <li class='mb-2'>
                    <a class='reset-anchor' href='#'>
                      Afrikaans
                    </a>
                  </li>
                </ul>
                <div class='py-2 px-4 bg-light  mb-3'>
                  <strong class='small text-uppercase font-weight-bold'>
                    Alcohol
                  </strong>
                </div>
                <ul class='list-unstyled small text-muted pl-lg-4 font-weight-normal'>
                  <li class='mb-2'>
                    <a class='reset-anchor' href='#'>
                      Yes
                    </a>
                  </li>
                  <li class='mb-2'>
                    <a class='reset-anchor' href='#'>
                      No
                    </a>
                  </li>
                </ul>
                <div class='py-2 px-4 bg-light  mb-3'>
                  <strong class='small text-uppercase font-weight-bold'>
                    Smoking
                  </strong>
                </div>
                <ul class='list-unstyled small text-muted pl-lg-4 font-weight-normal'>
                  <li class='mb-2'>
                    <a class='reset-anchor' href='#'>
                      Yes
                    </a>
                  </li>
                  <li class='mb-2'>
                    <a class='reset-anchor' href='#'>
                      No
                    </a>
                  </li>
                </ul>
                <div class='py-2 px-4 bg-light  mb-3'>
                  <strong class='small text-uppercase font-weight-bold'>
                    Food Preference
                  </strong>
                </div>
                <ul class='list-unstyled small text-muted pl-lg-4 font-weight-normal'>
                  <li class='mb-2'>
                    <a class='reset-anchor' href='#'>
                      Strictly Veg
                    </a>
                  </li>
                  <li class='mb-2'>
                    <a class='reset-anchor' href='#'>
                      Strictly Non-veg
                    </a>
                  </li>
                  <li class='mb-2'>
                    <a class='reset-anchor' href='#'>
                      Flexible
                    </a>
                  </li>
                </ul>
                <div class='py-2 px-4 bg-light  mb-3'>
                  <strong class='small text-uppercase font-weight-bold'>
                    Culinary Skills
                  </strong>
                </div>
                <ul class='list-unstyled small text-muted pl-lg-4 font-weight-normal'>
                  <li class='mb-2'>
                    <a class='reset-anchor' href='#'>
                      Can Cook
                    </a>
                  </li>
                  <li class='mb-2'>
                    <a class='reset-anchor' href='#'>
                      Cannot Cook
                    </a>
                  </li>
                  <li class='mb-2'>
                    <a class='reset-anchor' href='#'>
                      Sometimes
                    </a>
                  </li>
                </ul>
              </Col>
              <Col lg={9} className='order-1 order-lg-2 mb-5 mb-lg-0'>
                <Row>
                  {data.map((roommate) => (
                    <Col
                      sm={12}
                      md={6}
                      className='col-lg-4 order-1 order-lg-2 mb-5 mb-lg-0'
                    >
                      <Roomiebox roommate={roommate} />
                    </Col>
                  ))}
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
      </Container>
    </div>
  )
}

export default roommates
