import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import useGetData from '../hooks/useGetData'
import Loader from './Loader';
import PostCard from './UI/PostCard';
import { useNavigate } from 'react-router-dom';

const AllPosts = () => {
   
    const navigate = useNavigate();
    const { data } = useGetData('https://jsonplaceholder.typicode.com/posts');

    const editPost = (id: any) => {
        navigate(`edit/${id}`);
    }

    const RowData = () => {
        return (
            <Row style={{ display: "flex", alignItems: "center", justifyContent: "center" }} >
                {!!data &&
                    data.map((item: any) => {
                        return <Col xs={12} md={6} sm={12} lg={4} key={item.idCategory}
                            style={{ display: "flex", alignItems: "center", justifyContent: "center" }}  >
                            <PostCard id={item.id} title={item.title} details={item.body} onClick={editPost} />
                        </Col>
                    })
                }
            </Row>
        )
    }

    return (
        <Container >
            <>
                <h1 style={{ marginTop: "2rem" }} >All JSON Posts</h1>
                {!!data ? <RowData /> : <Loader />}
            </>
        </Container>
    )
}

export default AllPosts