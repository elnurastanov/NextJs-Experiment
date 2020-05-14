import Link from 'next/link'
import { Navbar, Nav } from 'react-bootstrap'
import style from '../style/navigation.module.css'

const Navigation = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="fixed-top">

            <Link href="/">
                <Navbar.Brand className={style.brand}>Next Js</Navbar.Brand>
            </Link>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <Link href="/blog">
                        <Nav.Link href="#blog">Blog</Nav.Link>
                    </Link>
                    <Link href="/about">
                        <Nav.Link href="#about">About</Nav.Link>
                    </Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>

    )
}

export default Navigation;