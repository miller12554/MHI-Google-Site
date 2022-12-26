import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'
import React from 'react';
import './navbar.css'
import ContactModal from '../pages/Contact-Us/ContactModal';
import HandyMan from '../pages/HandyMan/HandyMan';
function Navigation() {
    const [modalShow, setModalShow] = React.useState(false);
    const navigate = useNavigate();

    return (
        <Navbar className='navRed py-0' expand='lg' collapseOnSelect>
            <Container>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link onClick={() => navigate("/")}>Home</Nav.Link>
                        <Nav.Link onClick={() => setModalShow(true)}>Contact</Nav.Link>

                        <ContactModal
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                        />

                        <Nav.Link onClick={() => navigate("/handyman")}>Handy-Man Services</Nav.Link>

                        <NavDropdown title="Remodeling Services" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Something else here
                            </NavDropdown.Item>
                        </NavDropdown>


                    </Nav>

                    {/* This is the Start of the right sign in Navbar */}


                    <Nav>
                        <Nav.Link className='link1' onClick={() => navigate("/ofers")}>Our Customers</Nav.Link>
                        <Nav.Link className='link1' onClick={() => navigate("/signup")}>Sign In</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;

