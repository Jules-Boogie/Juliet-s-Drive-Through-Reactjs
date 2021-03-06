import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

function navigationBar() {
    return (

        <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">
                    <img src="https://cdn1.vectorstock.com/i/1000x1000/02/20/breakfast-with-egg-and-toast-vector-21370220.jpg" width="30" height="30"></img>
                    Juliet's BLT</Navbar.Brand>
                <Nav className="ml-auto">
                    <Nav.Link  href="/">Menu</Nav.Link>
                    <Nav.Link  href="/">BLT Builder</Nav.Link>
                    <Nav.Link  href="/checkout">Checkout</Nav.Link>
                    <Nav.Link  href="/orders"> My Orders</Nav.Link>
                </Nav>
            </Navbar>
        


    )

}

export default navigationBar;