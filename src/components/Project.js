import React from 'react'
import Card from 'react-bootstrap/Card'

export default function Project(props) {
  return (
    <a href={props.url} target="_blank" style={{ textDecoration: 'none', color: 'black'}}>
      <Card style={{ width: '380px', margin: '20px'}}>
        <Card.Body>
          <Card.Img variant="center" src={props.image} style={{ width: '300px'}} />
          <Card.Title>[{props.year}] {props.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{props.subtitle}</Card.Subtitle>
          <Card.Text>
            {props.description}
            <p style={{ margin: '10px 0px 10px 15px', lineHeight: '0.9'}}><strong>-> ROLE:</strong> {props.role}</p>
            <p style={{ marginLeft: '15px', lineHeight: '0.7'}}><strong>-> MADE IN:</strong> {props.stack}</p>
          </Card.Text>
        </Card.Body>
    </Card>
    </a>
  )
}
