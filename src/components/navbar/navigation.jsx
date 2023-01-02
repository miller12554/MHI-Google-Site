import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'
import React from 'react';
import './navbar.css'
import ContactModal from '../pages/Contact-Us/ContactModal';
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

                        <NavDropdown title="Remodeling Services"
                            id="nav-dropdown" >
                            <NavDropdown.Item onClick={() => navigate("/bathrooms")}><p className='dropdown-menu-list'>Bathrooms</p></NavDropdown.Item>
                            <NavDropdown.Item onClick={() => navigate("/kitchens")}><p className='dropdown-menu-list'>Kitchens</p></NavDropdown.Item>
                            <NavDropdown.Item onClick={() => navigate("/basements")}><p className='dropdown-menu-list'>Basements</p></NavDropdown.Item>
                            <NavDropdown.Item onClick={() => navigate("/otherremodeling")}><p className='dropdown-menu-list'>Interior / Exterior</p></NavDropdown.Item>

                            <NavDropdown.Item onClick={() => navigate("/photogallerymain")}><p className='dropdown-menu-list'>Photo Gallerys</p></NavDropdown.Item>


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

