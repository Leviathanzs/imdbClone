import {Navbar, Nav, Container} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'

const Header = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">OMDb</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto text-center">
                <div className="nav-link">
                    <NavLink to={''}>Home</NavLink>
                    <NavLink to={'film'}>Film</NavLink>
                </div>
            </Nav>
            <div className="text-center">
                <button className="btn btn-outline-primary rounded-1">Subscribe</button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default Header