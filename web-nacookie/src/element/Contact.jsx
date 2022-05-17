import React from 'react'
import '../element/Contact.css'
import { Container, Row, Col } from 'reactstrap'

const Contact = () => {
    return (
            <div className='contact'>
                <h6>How to Order way.</h6>
            <section>
                <Row className='text-center' xs='3'>
                    <Col>
                        <h7>Beli di tempat</h7>
                        <p>Anda dapat membeli secara langsung dengan mendatangi stand penjualan Nacookie.</p>
                    </Col>
                    <Col>
                        <h7>Pemesanan melalui whatsapp domisili palembang</h7>
                        <p>Pesan Nacookie melalui whatsapp untuk domisili palembang dengan minimal belanja 5 cookies dan pesananmu akan diantar.</p>
                    </Col >
                    <Col>
                        <h7>Pemesanan melalui shopee domisili luar palembang</h7>
                        <p>Pesan Nacookie melalui shopee untuk domisili luar palembang dan kami akan mengemas pesanan anda</p>
                    </Col>
                </Row>
            </section>
        </div>
    )
}

export default Contact