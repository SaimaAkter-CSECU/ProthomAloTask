import React from 'react' 
import SidebarOwnAdvertisement from './SidebarOwnAdvertisement'
import { Container, Row, Col, Figure, Card } from 'react-bootstrap'
import sidebarAdvertiseImg from '../../resources/sidebar-img1.png'
import SidebarNews from './SidebarNews'


const Sidebar = (props) => {
  const sidebarNewsList = props.sidebarNewsList;
  // console.log(sidebarNewsList)
  return (
    <>
      <Container className="sidebar" fluid>
        <Row>
          <Col xs={12} className=" pe-0">
            <Figure className="mb-0 border-bottom pb-4">
              <img className="img-fluid" src={sidebarAdvertiseImg} alt="Nagad" />
            </Figure>
          </Col>
          <Col xs={12}>
            {
              sidebarNewsList.map(sidebarNewsList => <SidebarNews key={sidebarNewsList.sort} sidebarNewsList={sidebarNewsList}></SidebarNews>)
            }
          </Col>
          <Col xs={12} className="sidebarOwnAdvertise pe-0">
            <SidebarOwnAdvertisement />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Sidebar