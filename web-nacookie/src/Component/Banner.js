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
            <a href='#about'>
                <div className='baner-start'>
                    <Button extra style={{backgroundColor:'#644a3f'}}>GET STARTED</Button>
                </div>
            </a>
            </div>
        </div>
    )
}

export default Banner