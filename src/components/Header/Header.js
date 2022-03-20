import React from 'react';
import {Navbar, Container, Image} from 'react-bootstrap'
import logo from '../resources/logo.svg'

const Header = () => {
  return (
    <>
      <Navbar bg="white" className="py-2">
        <Container>
          <Navbar.Brand href="#" className="d-flex justify-content-center m-0">
            <Image
              width={260}
              height={65}
              src={logo}
              alt="প্রথম আলো"
            ></Image>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
