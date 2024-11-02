import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormTorneo from './components/FormTorneo';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <FormTorneo  />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;