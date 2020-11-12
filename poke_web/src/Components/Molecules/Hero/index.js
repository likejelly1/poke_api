import React from 'react'
import { Button, Row } from 'react-bootstrap'
import { scrollingPage } from '../../../Utils'

const Hero = () => {
    return (
        <section className="pt-5 mt-5">
            <div className="container">
                <Row className="align-items-center" style={{marginTop:50}}>
                    <div className="col-auto pr-5" style={{width:422}}>
                        <h1 className="h2 font-weight-bold line-height-1 mb3">
                            <u>F</u>orget Busy Work,<br />
                            <u>C</u>atch The Pokemon
                        </h1>
                        <p className="mb-5 font-weight-light w-75">
                            This provide what you need to play. Time to catch ur Pokemon!
                        </p>
                        <Button className="btn btn-success btn-shadow-success" onClick={scrollingPage}>See Pokemon!</Button>
                    </div>
                </Row>

            </div>
        </section>
    )
}

export default Hero
