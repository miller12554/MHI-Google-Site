import { Nav, Navbar, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'

import './navbar.css'

function Navigation() {

    const navigate = useNavigate();

    return (
        <Navbar className='navRed py-0' expand='lg' collapseOnSelect>
            <Container>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link onClick={() => navigate("/")}>Home</Nav.Link>
                        <Nav.Link onClick={() => navigate("/Contact")}>Contact</Nav.Link>


                    </Nav>

                    {/* This is the Start of the right sign in Navbar */}


                    <Nav>
                        <Nav.Link href="#deets">More deets</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Dank memes
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;

