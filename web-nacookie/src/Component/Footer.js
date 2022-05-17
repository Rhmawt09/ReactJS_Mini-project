import React from 'react'
import { MDBContainer } from "mdbreact";
import { Container, Row, Col } from 'reactstrap'
import '../Component/footer.css'

function Footer () {
    return (
        <footer>
            <div className='footer'>
                <h1 className='footer-as'>NACOOKIE OAT AS <br></br> AN HEALTHY FOOD</h1>
                    <section>
                        <Row>
                            <Col>
                                <h2 className='footer-font'>Get in Touch</h2>
                                <ul>
                                <li className='footer-logo'>
                                    <a href='https://www.instagram.com/nacookie.oat/'>instagram</a>
                                </li>
                                <li className='footer-logo'>
                                    <a href='https://shopee.co.id/nacookie_oat?smtt=0.343699998-1652803549.9'>Shoope</a>
                                </li>
                                <li className='footer-logo'>
                                    <a href='https://www.instagram.com/nacookie.oat/'>Whatsapp</a>
                                </li>
                                </ul>
                            </Col>
                            <Col>
                                <h2 className='footer-font'>Email </h2>
                                <p> rhmawt09@gmail.com </p>
                            </Col>
                            <Col>
                                <h2 className='footer-font'>
                                    Location 
                                </h2>
                                <p>Jl. Tasik, Talang Semut, Kec. Bukit Kecil, <br>
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