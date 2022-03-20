import React from 'react';
import NewsDatetimeCalculation from '../NewsDatetimeCalculation/NewsDatetimeCalculation'
import { Card, Row, Col } from 'react-bootstrap';

const SidebarNews = (props) => {
  const {title, photo, description, time} = props.sidebarNewsList; 

  return (
    <>
      <Card className="border-bottom pt-4 pb-3">
        <a href="#">
            <Row className="d-flex">
              {
                (description === '' || description == null) ? 
                (
                  <Col xs={12} className="pe-0">
                    <Card.Img className="img-fluid" src={photo} alt={title} />
                  
                    <Card.Body className="px-0">
                        <Card.Title className="mb-0">{title}</Card.Title>
                    </Card.Body>
                  </Col>
                )
                : 
                (
                  <>
                    <Col xs={6}>
                      <Card.Img className="img-fluid" src={photo} alt={title} />
                    </Col>
                    <Col xs={6} className="pe-0">
                      <Card.Body className="p-0">
                        <Card.Title className="mb-0">{title}</Card.Title>
                      </Card.Body>
                    </Col>
                    <Col xs={12}>
                      <Card.Text>
                        <NewsDatetimeCalculation time={time} />
                      </Card.Text>
                    </Col>
                  </>
                )
              }
                
            </Row>
        </a>
      </Card>
    </>
  );
}

export default SidebarNews;
