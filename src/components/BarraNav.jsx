import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function BarraNav() {
    return(
        <Navbar expand="lg" className='bg-body-tertiary'> 
            <Container>
                <Navbar.Brand>Reto de Programacion UD</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className='justify-content-end'>
                    <NavDropdown title="Crear">
                        <NavDropdown.Item>Torneo</NavDropdown.Item>
                        <NavDropdown.Item>Jugador</NavDropdown.Item>
                        <NavDropdown.Item>Equipo</NavDropdown.Item>
                    </NavDropdown>
                    <Nav className='mx-3'>
                        Ver
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default BarraNav;