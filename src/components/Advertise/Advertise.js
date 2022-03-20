import React, {useState} from 'react'
import {  Container, Figure } from 'react-bootstrap'
import addImage from '../resources/advertise-img.png'

const Advertise = () => {
  const [width, setWidth] = useState(window.innerWidth); 
  return (
    <>
      <div className="section" id="Advertise">
        <Container>
          <Figure className="d-flex justify-content-center mb-0 py-3">
            <a href={"#"}>
              <img  
                className={width <= 1024 ? 'img-fluid' : ''}
                src={addImage}
                alt="Advertise"
              />
            </a>
          </Figure>
        </Container>
      </div>
    </>
  )
}

export default Advertise