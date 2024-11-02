import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormTorneo from './components/FormTorneo';
import FormJugador from './components/FormJugador';
import FormEquipo from './components/FormEquipo';

function App() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <FormTorneo  />
          </Col>
        </Row>
        <Row>
          <Col>
            <FormJugador />
          </Col>
        </Row>
        <Row>
          <Col>
            <FormEquipo />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;