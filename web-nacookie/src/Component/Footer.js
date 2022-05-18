import React from 'react'
import { MDBContainer } from "mdbreact";
import { Container, Row, Col } from 'reactstrap'
import '../Component/footer.css'

function Footer () {
    return (
        <footer>
            <div className='footer'>
                <h1 className='footer-as fw-bolder'>NACOOKIE OAT AS <br></br> AN HEALTHY FOOD</h1>
                    <section>
                        <Row>
                            <Col>
                                <h2 className='footer-font'>Get in Touch</h2>
                                <ul>
                                <span className='footer-logo'>
                                    <a href='https://www.instagram.com/nacookie.oat/'>Instagram</a>
                                </span>
                                <span className='footer-logo'>
                                    <a href='https://shopee.co.id/nacookie_oat?smtt=0.343699998-1652803549.9'> Shopee</a>
                                </span>
                                <span className='footer-logo'>
                                    <a href='https://www.instagram.com/nacookie.oat/'>Whatsapp</a>
                                </span>
                                </ul>
                            </Col>
                            <Col>
                                <h2 className='footer-font'>Email </h2>
                                <p className='footer-logo'><i className='ri-mail-line'></i> rhmawt09@gmail.com </p>
                            </Col>
                            <Col>
                                <h2 className='footer-font'>
                                    Location 
                                </h2>
                                <p className='footer-logo'>Jl. Tasik, Talang Semut, Kec. Bukit Kecil, <br>
                                </br>Kota Palembang, Sumatera Selatan 30121,Kambang Iwak Palembang</p>
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