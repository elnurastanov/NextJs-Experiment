// import { useState, useEffect } from 'react'
import Layout from '../components/layout'
import { getData } from '../controller/blogController'
import { Container, Row, Col, Card, Image, Pagination } from 'react-bootstrap'
import style from '../style/blog.module.css'

// const pages = [1, 2];
// let pageItems = [];

const Blog = ({ blogData }) => {

    // const [SelectedPage, setSelectedPage] = useState(1)

    return (
        <Layout>
            <Container>
                <Row className="mt-5 py-5">

                    <Col className="text-center">
                        <h1 className={style.header}>Blog</h1>
                    </Col>

                </Row>
                <Row>

                    {
                        blogData.map(data =>
                            (
                                <Col
                                    xs={12}
                                    sm={6}
                                    md={4}
                                    lg={3}
                                    key={data.id}
                                    className="p-2"
                                >
                                    <Card className="text-center" bg="dark" >
                                        <Card.Body>
                                            <Image variant="top" src={data.avatar} roundedCircle />
                                            <Card.Title className="text-light">{`${data.first_name} ${data.last_name}`}</Card.Title>
                                            <Card.Text className="text-warning">
                                                With supporting text below as a natural lead-in to additional content.
                                            </Card.Text>
                                            <Card.Text className="text-muted">
                                                2 days ago
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )
                        )
                    }



                </Row>
                {/* <Row>
                    <Col className="py-4">


                        <Pagination className={style.pagination} size="sm" >
                            <Pagination.First />
                            <Pagination.Prev />
                            {
                                pageItems = pages.map((data, index) => {
                                    return <Pagination.Item key={index} onClick={() => setSelectedPage(data)}>{data}</Pagination.Item>
                                })
                            }
                            <Pagination.Next />
                            <Pagination.Last />
                        </Pagination>
                    </Col>

                </Row> */}
            </Container>
        </Layout>
    )
}

export async function getServerSideProps(SelectedPage) {

    const blogData = await getData(SelectedPage).then(result => result.data)

    return {
        props: { blogData },
    }
}

export default Blog;