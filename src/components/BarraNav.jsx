import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function BarraNav() {
    return(
        <Navbar expand="lg" className='bg-body-tertiary'> 
            <Container>
                <Navbar.Brand>
                    <Link to={'/'} className='nav-link'>
                        Reto de Programacion UD
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className='justify-content-end'>
                    <NavDropdown title="Crear">
                        <NavDropdown.Item as='div'>
                            <Link to={'torneos/crear'} className='nav-link'>
                                Torneo
                            </Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item as='div'>
                            <Link to={'jugadores/crear'} className='nav-link'>
                                Jugador
                            </Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item as='div'>
                            <Link to={'equipos/crear'} className='nav-link'>
                                Equipo
                            </Link>
                        </NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Ver" className='mx-3'>
                        <NavDropdown.Item as='div'>
                            <Link to={'/'} className='nav-link'>
                                Torneos
                            </Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item as='div'>
                            <Link to={'jugadores/ver'} className='nav-link'>
                                Jugadores
                            </Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item as='div'>
                            <Link to={'equipos/ver'} className='nav-link'>
                                Equipos
                            </Link>
                        </NavDropdown.Item>
                    </NavDropdown>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default BarraNav;