import React from 'react'
import {Row, Col, Card} from 'react-bootstrap'
import NewsDatetimeCalculation from '../NewsDatetimeCalculation/NewsDatetimeCalculation'
import TextTruncate from 'react-text-truncate';

const NewsCard = (props) => {
  const {sort, id, title, photo, description, time} = props.news;  
  const subtitle= props.news.suptitle; 
  return (
    <>
        {
          (sort === 1) ? 
          
            <Col xs={12} md={8} className="newsCardDiv">
              <Card className="newsCard">
                <a href="#">
                  <Row>
                    <Col xs={6} className="">
                      <Card.Body className="px-0">
                          <Card.Title className="mb-0">
                            {(subtitle == '' || subtitle == null) ? '' : <span> <span className="card-sub-title pe-1">{subtitle} </span> <span> / </span> </span> }
                            {title}
                          </Card.Title>
                          <Card.Text className="mb-0 description py-3">
                            <TextTruncate
                                line={3}
                                element="span"
                                truncateText="…"
                                text={description}
                            />
                          </Card.Text>
                          <Card.Text className="mb-0"> 
                            <NewsDatetimeCalculation time={time} /> 
                          </Card.Text>
                      </Card.Body>
                    </Col>
                    <Col xs={6} className="">
                      <Card.Img 
                        className="img-fluid rounded-0" 
                        src={photo} 
                        alt={title} 
                      />
                    </Col>
                  </Row>
                </a>
              </Card> 
            </Col>
          
          : 
          
            <Col xs={12} md={4} className="newsCardDiv">
              <Card className="newsCard">
                  <a href="#">
                    <Row>
                    {
                      (sort >1 && sort <6) ?
                        <>
                          <Col xs={12} className="">
                            <Card.Body className="px-0">
                                <Card.Title className="mb-0">
                                  {(subtitle == '' || subtitle == null) ? '' : <span> <span className="card-sub-title pe-1">{subtitle} </span> <span> / </span> </span> }
                                  {title}
                                </Card.Title>
                                <Card.Text className="mb-0 description py-3">
                                  <TextTruncate
                                      line={3}
                                      element="span"
                                      truncateText="…"
                                      text={description}
                                  />
                                </Card.Text>
                                <Card.Text className="mb-0">
                                  <NewsDatetimeCalculation time={time} /> 
                                </Card.Text>
                            </Card.Body> 
                          </Col> 
                        </>
                      :
                        <>
                          <Col xs={6} className="pe-0">
                            <Card.Body className="p-0">
                              <Card.Title className="mb-0 pb-3">
                                {(subtitle == '' || subtitle == null) ? '' : <span> <span className="card-sub-title pe-1">{subtitle} </span> <span> / </span> </span> }
                                {title}
                              </Card.Title>
                              <Card.Text>
                                <NewsDatetimeCalculation time={time} />
                              </Card.Text>
                            </Card.Body>
                          </Col>
                          <Col xs={6}>
                            <Card.Img className="img-fluid" src={photo} alt={title} />
                          </Col>
                        </>
                    }
                    </Row>
                  </a>
              </Card>
            </Col>
        } 
      
    </>
  )
}

export default NewsCard