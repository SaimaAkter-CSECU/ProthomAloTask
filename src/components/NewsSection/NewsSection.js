import React from 'react'
import { Row, Col} from 'react-bootstrap'
import AllNews from './News/AllNews'
import Sidebar from './Sidebar/Sidebar' 

import newsData from './DummyData/data';

const NewsSection = () => {

  const allSortedNews = newsData.sort( (x, y) => x.sort - y.sort );
  const mainSectionNewsList = allSortedNews.slice(0, - 2 ); 
  const sidebarNewsList = allSortedNews.slice(-2);

  return (
    <>
        <Row className="py-4 border-bottom">
            <Col xs={12} md={9} className="MainNewsSection">
                <AllNews mainSectionNewsList={mainSectionNewsList} />
            </Col>
            <Col xs={12} md={3}>
                <Sidebar sidebarNewsList={sidebarNewsList} />
            </Col>
        </Row>
    </>
  )
}

export default NewsSection