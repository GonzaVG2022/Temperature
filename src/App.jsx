import { useState, useEffect } from 'react'
import AppForm from './components/AppForm'
import './assets/styles/App.css'
import { Container, Nav, Navbar } from 'react-bootstrap'
import axios from 'axios';


function App() {
  const [ipAddress, setIpAddress]=useState('');
  const [temperature, setTemperature]=useState('');
useEffect(()=>{
  ipAddress && axios.get(`http://api.weatherapi.com/v1/current.json?key=34b177ecf0fd409b836165148232502&q=${ipAddress}`)
  .then(res =>{
    const temperature={
      tempC: res.data.current.temp_c,
      tempF: res.data.current.temp_f,
    }
    
    setTemperature(temperature)
  })
  .catch(err => console.error(err))
},[ipAddress])
  return (
    <div className="App">
      <Navbar bg="primary" variant="dark">
        <Container id='navbar-container'>
          <Navbar.Brand href="#home">API Weather</Navbar.Brand>
          {/* <Nav>
            <Nav.Link href="#">Celcius: {temperature.tempC}°</Nav.Link>
            <Nav.Link href="#">Fahrenheit: {temperature.tempF}°</Nav.Link>
          </Nav> */}
        </Container>
      </Navbar>
      <h2>Introduce tu ip para saber la temperatura en tu zona</h2>
    <AppForm 
    sendIpAddress={ipAddress => setIpAddress(ipAddress)}
    />
    <div className='temperature'>
      <h3>Celcius: {temperature.tempC}°</h3>
      <h3>Fahrenheit: {temperature.tempF}°</h3>
    </div>
        
    </div>
  )
}

export default App
