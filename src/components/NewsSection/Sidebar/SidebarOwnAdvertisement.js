import React from 'react'
import sidebarOwnAdvertise from '../../resources/epaper_img (1).png'
import {Card, Row, Col} from 'react-bootstrap'

const SidebarOwnAdvertisement = () => {
  return (
    <>
        <Card>
            <a href={"#"}>
                <Row className="d-flex align-items-center">
                    <Col xs={6} className="pe-0">
                    <Card.Body className="px-0">
                        <Card.Title className="mb-0">ছাপা কাগজের মতো পড়ুন আজকের পত্রিকা</Card.Title>
                    </Card.Body>
                    </Col>
                    <Col xs={6}>
                    <Card.Img className="img-fluid" src={sidebarOwnAdvertise} alt="প্রথম আলো" />
                    </Col>
                </Row>
            </a>
        </Card>
    </>
  )
}

export default SidebarOwnAdvertisement