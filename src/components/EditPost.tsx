import React, { useEffect, useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom';
import useGetData from '../hooks/useGetData';
import usePatchData from '../hooks/usePatchData';
import Loader from './Loader';

const EditPost = () => {
    const { id } = useParams();
    const URL = `https://jsonplaceholder.typicode.com/posts/${id}`;
    const { data } = useGetData(URL)
    const [title, setTitle] = useState("")
    const [details, setDetails] = useState("");
    const { response, patchData } = usePatchData({});
    const navigate = useNavigate();


    useEffect(() => {
        setTitle(data?.title);
        setDetails(data?.body)
    }, [data])


    const handleTitleChange = (event: any) => {
        setTitle(event.target.value)
    }
    const handleDetailsChange = (event: any) => {
        setDetails(event.target.value)
    }
    const handleEdit = () => {
        const obj = {
            title: title,
            body: details
        }
        patchData(URL, obj)
       
        navigate('/')
    }

    console.log(response);

    return (
        <Container>
            <h1>Edit Post</h1>
            {!!data ?
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" value={title} onChange={handleTitleChange} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Post</Form.Label>
                        <Form.Control as="textarea" rows={5} value={details} onChange={handleDetailsChange} />
                    </Form.Group>
                    <Button variant="primary" onClick={handleEdit} >Edit</Button>
                </Form> :
                <Loader />
            }
        </Container>
    )
}

export default EditPost