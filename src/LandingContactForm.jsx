import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';


export default function LandingContactForm() {
  return (
    <div className='d-flex flex-column gap-3'>
      <FloatingLabel
        controlId="floatingInput"
        label="Email"
      >
        <Form.Control type="text" placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput" label="Nombre">
        <Form.Control type="text" placeholder="Nombre" />
      </FloatingLabel>

    <FloatingLabel controlId="floatingSelect" label="Tema del contacto" >
      <Form.Select aria-label="Floating label select example">
        <option value="1">General</option>
        <option value="2">Asistencial Legal</option>
        <option value="3">Consultoria</option>
      </Form.Select>
    </FloatingLabel>

    <FloatingLabel controlId="floatingTextarea2" label="Mensaje" className=''>
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: '200px' }}
        />
      </FloatingLabel>

    </div>
  );
}

