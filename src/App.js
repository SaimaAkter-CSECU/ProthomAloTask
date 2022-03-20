import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header/Header"
import NewsSection from "./components/NewsSection/NewsSection"
import Advertise from "./components/Advertise/Advertise"
import Footer from "./components/Footer/Footer" 

import { Container } from 'react-bootstrap';

function App() {
  return (
    <>
      <Header />
      <Container>
        <NewsSection />
        <Advertise />
      </Container>
      <Footer />
    </>
  );
}

export default App;
