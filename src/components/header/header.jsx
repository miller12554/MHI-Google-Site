import React from 'react'
import './header.css'
import { Row, Col } from 'react-bootstrap'
import Logo from './images/MHI-New_Logo.jpg'
import PhoneIcon from './images/Red-Phone-Icon.jpg'
import Navigation from '../navbar/navigation'

const header = () => {

    return (
        <>

            <div className="header-background">
                <Row>
                    <Col xxl={6} xl={6} lg={6} md={6} sm={12}><img src={Logo} className='pt-2 img-fluid logo' /></Col>
                    <Col xxl={6} xl={6} lg={6} md={6} sm={12}>
                        <a href="tel:4849033307" onclick="ga('send', 'event', { eventCategory: 'Contact', eventAction: 'Call', eventLabel: 'Mobile Button'});"><img src={PhoneIcon}
                            className=' d-block mx-auto img-fluid' /></a></Col>
                </Row>
                <Row>
                    <p style={{ color: 'white' }} className="text-center"><Navigation /></p>
                </Row>
            </div>

        </>
    )
}

export default header