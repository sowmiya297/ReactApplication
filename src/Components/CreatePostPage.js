import React, { useState } from 'react'
import axios from 'axios'
import { Button, Form, Col } from "react-bootstrap";

let formElements = [{
    label: "Id",
    key: "id"
},
{
    label: "UserId",
    key: "user_id"
},
{
    label: "Title",
    key: "title"
},
{
    label: "Content",
    key: "body"
}]

function CreatePostPage() {
    var myStyle = {
        border: "3px solid #73ad21",
        margin: "10px",
        padding: "10px",
        textAlign: "center",
    };
    const [formData, setFormData] = useState({ id: '', user_id: '', title: '', body: '' })

    const handleChange = (value, key) => {
        setFormData({ ...formData, ...{ [key]: value } })
    }
    function submit() {
        var post = formData;
        axios.post('https://gorest.co.in/public/v1/posts', post).then((response) => {
            alert(response.data);
        }).catch(error => {
            alert(error.message);
        })
    }
    return (
        <div>
            <h4> Enter the new post details.</h4>
            <div style={myStyle} className="center">
                <Form>
                    {formElements.map(formElement => {
                        return <div key={formElement.key} className="m-3">
                            <Form.Row>
                                <Col>
                                    {formElement.label} :
                                </Col>
                                <Col>
                                    <Form.Control type="text" value={formData[formElement.key]} onChange={(e) => { e.preventDefault(); handleChange(e.target.value, formElement.key) }} />
                                </Col>
                            </Form.Row>
                        </div>
                    })}
                </Form>
                <Button onClick={(e) => { e.preventDefault(); submit() }}>Submit</Button>
            </div>
        </div>
    )
}

export default (CreatePostPage)
