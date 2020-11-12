import { LogoPokeBall } from '../../../Assets'
import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

const Header = () => {
    return (
        <header className="spacing-sm">
            <Navbar fixed="top" className="navbar" collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="/" className="brand-text" ><u>P</u><span><img className="brand-logo-pokeball" src={LogoPokeBall} alt="o"/></span>kemon</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
                        <Nav className="bg-light p-2">
                            <Nav.Link href="#pokemonList">Pokemon List</Nav.Link>
                            <Nav.Link href="#myPokemonList">My Pokemon List</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>

                </Container>
                    
            </Navbar>

        </header>
    )
}

export default Header
