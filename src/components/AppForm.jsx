import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';


function AppForm({sendIpAddress}) {
  const [ipAddress, setIpAddress]=useState('');
  const handleSubmit = event =>{
  event.preventDefault();
sendIpAddress(ipAddress)
    }
    return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Dirección ip</Form.Label>
        <Form.Control 
        type="text" 
        placeholder="Introduce tu IP"
        name='ipAddress'
        value={ipAddress}
        onChange={event => setIpAddress(event.target.value)}
        />
        
    </Form.Group>

      
      <Button variant="primary" type="submit">
       Solicitar
      </Button>
    </Form>
  );
}

export default AppForm;