import React, { useRef } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


function MessageBoard() {
  const inputName = useRef()
  const inputSubject = useRef()
  const inputMessage = useRef()

  function messageSubmit(event) {
    event.preventDefault() 
    let savedMessage = {
      name: inputName.current.value,
      subject: inputSubject.current.value,
      message: inputMessage.current.value
    }
    console.log(savedMessage)
    // Add function that has API calls to send savedMessage to the database
  }

  return (
    <div>
      <h1>Message Board</h1>
    <Form>
      <Form.Group controlId="exampleForm.ControlInput1">
        <Form.Label>Name</Form.Label>
        <Form.Control ref={inputName} type="name" placeholder="" />
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlInput1">
        <Form.Label>Subject</Form.Label>
        <Form.Control ref={inputSubject} type="subject" placeholder="" />
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Message</Form.Label>
        <Form.Control ref={inputMessage} as="textarea" rows={3} />
      </Form.Group>
      <Button onClick={messageSubmit} variant="primary">Submit</Button>
    </Form>
    </div>
  )
}


export default MessageBoard