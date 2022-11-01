import React, { useEffect, useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import useAddData from '../hooks/useAddData';

const AddPost = () => {

  const [title, setTitle] = useState("")
  const [details, setDetails] = useState("");
  const navigate = useNavigate();
  const { response, postData } = useAddData({});
  const URL = 'https://jsonplaceholder.typicode.com/posts';

  const handleTitleChange = (event: any) => {
    setTitle(event.target.value)
  }
  const handleDetailsChange = (event: any) => {
    setDetails(event.target.value)
  }
  const handleAdd = () => {
    if (title && details) {
      const obj = {
        title: title,
        body: details
      }
      postData(URL, obj);

      navigate('/')
    }

  }


  return (
    <Container>
      <h1>Add Post</h1>
      {
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" value={title} onChange={handleTitleChange} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Post</Form.Label>
            <Form.Control as="textarea" rows={5} value={details} onChange={handleDetailsChange} />
          </Form.Group>
          <Button variant="primary" onClick={handleAdd} >Add</Button>
        </Form>
      }
    </Container>
  )
}

export default AddPost