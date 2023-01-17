import React from 'react'
import { Button, Card, Form } from 'react-bootstrap'

const Cardd = ({el}) => {
  return (
    <div style={{display:"flex",justifyContent:"center", alignContent:"center"}}>
<Card style={{ width: '15rem'}}>
      <Card.Img style={{ width: '120px',height:"120px",marginLeft:"40px"}} variant="top"  src={el.imgURl} alt='img' />
      <Card.Body>
        <Card.Title style={{fontSize:"15px",marginLeft:"60px"}}>{el.name}</Card.Title>
        <Card.Title style={{fontSize:"18px",marginLeft:"40px"}}>{el.course}</Card.Title>
        
        <div>
          <Form.Label style={{fontSize:"15px"}} >Performance</Form.Label>
          <Form.Range />
        </div>
        <div>
          <Form.Label style={{fontSize:"15px"}}>One to One</Form.Label>
          <Form.Range />
        </div>
        <div>
          <Form.Label style={{fontSize:"15px"}}>Checkpoints</Form.Label>
          <Form.Range />
        </div>
        <Button style={{fontSize:"15px"}} variant="primary">Course progress</Button>
      </Card.Body>
    </Card>

    </div>
  )
}

export default Cardd