import React from 'react'
import { Container } from 'react-bootstrap'
// const toBn = n => n.replace(/\d/g, d => "০১২৩৪৫৬৭৮৯"[d]); 

const Footer = () => {
  const year = new Date().getFullYear();
  const thisYear = year => year.replace(/\d/g, d => "০১২৩৪৫৬৭৮৯"[d]); 
  
  return (
    <>
      <Container>
        <div className="footer-div pt-3 pb-5">
          <div className="d-flex justify-content-center">
            <p>স্বত্ব &copy; {thisYear} ২০২২ প্রথম আলো | সম্পাদক ও প্রকাশক: মতিউর রহমান</p>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Footer