import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import NewsCard from './NewsCard';

const AllNews = (props) => {
  const news = props.mainSectionNewsList;
  const firstNewsSection = news.slice(0, 2); 
  const secondNewsSection = news.slice(2, 5); 
  const thirdNewsSection = news.slice(5, 8); 
  const forthNewsSection = news.slice(8, 11); 

  return (
    <>
      <Container fluid>
        <Row className="newsSectionDiv newsSectionDiv1 pb-pt-3 pb-2">
          { 
            firstNewsSection.map(firstNewsSection => <NewsCard key={firstNewsSection.sort} news={firstNewsSection} />)
          }
        </Row>
        <Row className="newsSectionDiv newsSectionDiv2 pt-3 pb-2">
          { 
            secondNewsSection.map(secondNewsSection => <NewsCard key={secondNewsSection.sort} news={secondNewsSection} />)
          }
        </Row>
        <Row className="newsSectionDiv newsSectionDiv3 pt-3 pb-2">
          { 
            thirdNewsSection.map(thirdNewsSection => <NewsCard key={thirdNewsSection.sort} news={thirdNewsSection} />)
          }
        </Row>
        <Row className="newsSectionDiv newsSectionDiv4 pt-3 pb-2">
          { 
            forthNewsSection.map(forthNewsSection => <NewsCard key={forthNewsSection.sort} news={forthNewsSection} />)
          }
        </Row>

      </Container>
    </>
  )
}

export default AllNews