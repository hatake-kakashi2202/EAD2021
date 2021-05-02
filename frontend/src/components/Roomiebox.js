import React from 'react'
import { Link } from 'react-router-dom'
import img from './images/picc5.jpg'
import { Card } from 'react-bootstrap'
const Roomiebox = ({ roommate }) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/roommates/${roommate._id}`}>
        <Card.Img src={img} variant='top' />
      </Link>
      <Card.Body>
        <Link to={`/roommates/${roommate._id}`}>
          <Card.Title as='div'>
            <strong>{roommate.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as='div'>
          <div className='my-3'>
            {roommate.gender},{roommate.roomtown}
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Roomiebox
