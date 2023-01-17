import React from 'react'
import { Nav } from 'react-bootstrap'




const HeaderNav = () => {
  return (
    <div style={{ marginTop:'15px'}}>
<Nav  style={{ display: 'flex',justifyContent:'space-around', backgroundColor:'light'}}
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}>
      <Nav.Item>
        <Nav.Link href="/home"><img style={{fontSize:"18px",height:'80px', width:'100px',marginTop:"-30px"}} src='https://www.flat6labs.com/wp-content/uploads/2021/03/Startup-Logos-Go-My-Code.jpg' alt='img'></img></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link style={{ color:'black'}} eventKey="link-1">Course</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link  style={{ color:'black'}} eventKey="link-2">One to One</Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link  style={{ color:'black'}} eventKey="link-3">Checkpoints</Nav.Link>
      </Nav.Item>
    </Nav>
    </div>
  )
}

export default HeaderNav