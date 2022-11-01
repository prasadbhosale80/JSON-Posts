import React from 'react'
import { Button, Card } from 'react-bootstrap'

const PostCard = (props:any) => {
    const handleClick=()=>{
        props.onClick(props.id);
    }
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <div style={{display:"flex", justifyContent:"space-between", alignItems:"self-start" }} >
                <Card.Title>{props.title}</Card.Title>
                <Button onClick={handleClick} variant="light">Edit</Button>
                </div>
                <Card.Text>
                    {props.details}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default PostCard