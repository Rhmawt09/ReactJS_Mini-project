import React from 'react'
import '../element/Review.css'
import { Container, Row, Col } from 'reactstrap'

const Review = () => {
    return (
        <div className='review-clas' id='review'>
            <section>
                <Row className='text-center' xs='2'>
                    <Col>
                        <h6 className='rev-judul fw-bolder'> Get to know about Nacookie from their. </h6>
                    </Col>
                    <Col>
                        <h8 className='rev-def'>
                            "Cookiesnya enak banget dan renyah gabikin eneg dan <br></br>
                            lebih penting lagi ternyata Cookiesnya gapake gula <br></br>
                            jd pasti sehat banget mana murah lagi"
                        </h8>
                        <p className='rev-coment'>@st.safira</p>
                        <h8 className='rev-def'>
                            "cookiesnya murah banget dan worth it banget dengan <br></br>
                            harga segitu mana lagi kandungannya ga main-main, <br></br>
                            keren banget deh bikin ngenyangin banget"
                        </h8>
                        <p className='rev-coment'>@miyah_bae</p>
                        <h8 className='rev-def'>
                            "suka banget sama cookies dan selernya. cookiesnya enak <br></br>
                            banget bikin kenyang dan selernya baik banget dan sangat <br></br>
                            responsif banget, next mau order lagi"
                        </h8>
                        <p className='rev-coment'>@imtiyazalwafa</p>
                    </Col>
                </Row>
            </section>
        </div>
    )
}

export default Review