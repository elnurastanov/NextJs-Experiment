import { Container, Row, Col } from 'react-bootstrap'
import style from '../style/footer.module.css'

const Footer = () => {
    return (
        <footer className={style.footer}>
            <Container fluid>
                <Row className="bg-dark text-light p-3">

                    <Col className="text-center">
                        <span>&copy; 2020 Designed by Astanov Elnur</span>
                    </Col>

                </Row>
            </Container>
        </footer>
    )
}

export default Footer;