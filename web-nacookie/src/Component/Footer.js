import React from 'react'
import { MDBContainer } from "mdbreact";
import { Container, Row, Col } from 'reactstrap'
import '../Component/footer.css'

function Footer () {
    return (
        <footer>
            <div className='footer'>
                {/* <h1 className='footer-as fw-bolder'>NACOOKIE OAT AS <br></br> AN HEALTHY FOOD</h1> */}
                    <section>
                        <Row>
                            <Col style={{textDecoration:"none"}}>
                                <h2 className='footer-font'>Get in Touch</h2>
                                <span className='footer-logo'>
                                    <a href='https://www.instagram.com/nacookie.oat/'><i class="ri-instagram-fill"></i></a>
                                </span>
                                <span className='footer-logo'>
                                    <a href='https://shopee.co.id/nacookie_oat?smtt=0.343699998-1652803549.9'><i class="ri-store-line" ></i></a>
                                </span>
                                <span className='footer-logo'>
                                    <a href='https://www.instagram.com/nacookie.oat/'><i class="ri-whatsapp-fill"></i></a>
                                </span>
                            </Col>
                            <Col>
                                <h2 className='footer-font'>Email </h2>
                                <a className='footer-logo' href='mailto:rhmawt09@gmail.com'><i className='ri-mail-line'></i> </a>
                            </Col>
                            <Col>
                                <h2 className='footer-font'>
                                    Location 
                                </h2>
                                <p className='footer-loc'>Jl. Tasik, Talang Semut, Kec. Bukit Kecil, <br>
                                </br>Kota Palembang, Sumatera Selatan 30121,
                                <br></br>Kambang Iwak Palembang</p>
                            </Col>
                        </Row>
                    </section>
                <MDBContainer fluid>
                    &copy; {new Date().getFullYear()} Copyright: <a href='https://www.instagram.com/ramaannis'> Rahmawati </a>
                </MDBContainer>
            </div>
        </footer>
        );
    }


export default Footer