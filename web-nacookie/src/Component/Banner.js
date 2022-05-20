import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import './banner.css'

function Banner () {
    return (
        <div className='banner' id='Home'>
            <div className='banner-title'>
                <h5 className='fs-1'>Enjoy with <br></br>Healthy cookies</h5>
                <p>Nacookie Oat menjadi Cookies rendah lemak sebagai <br></br>
                    pengganti cemilan yang memiliki berbagai kandungan <br></br>
                    bergizi dan kaya akan nutrisi yang baik dikonsumsi <br></br>
                    untuk menjaga program diet dan program kesehatan.
                </p>
            <Link to='/about'>
                <div className='baner-start'>
                    <div className='about-transparant-box'>
                    {/* <input type="text" placeholder="Search" /> */}
                        <button className="btn">Get Started</button>
                    {/* <Button className='banner-start'>GET STARTED</Button> */}
                    </div>
                </div>
            </Link>
            </div>
        </div>
    )
}

export default Banner