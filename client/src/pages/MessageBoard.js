import React, { useRef, useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import Modal from 'react-bootstrap/Modal'
// import 'bootstrap/dist/css/bootstrap.min.css';
import fetchJSON from '../util/API'


function MessageBoard() {
  const inputName = useRef()
  const inputSubject = useRef()
  const inputMessage = useRef()
  const inputReplyName = useRef()
  const inputReplySubject = useRef()
  const inputReplyMessage = useRef()
  const buttonValue = useRef()

  const [allMessages, setAllMessages] = useState([])
  const [show, setShow] = useState(false);
  const [messageID, setMessageID] = useState()

  const handleClose = () => setShow(false);
  const handleReply = (e) => {
    // Use the buttonValue ref to grab the value of the button that was clicked
    // Set the messageID to that value
    console.log("handleReply", e.target.value)
    setMessageID(e.target.value)
    setShow(true);
  }


  // function messageSubmit(event) {
  //   event.preventDefault()

  async function messageLoad() {
    // const { status, messages: name, subject, message }= await fetchJSON( '/api/messages' )
    const { status, messageList } = await fetchJSON('/api/messages')
    console.log(`Message load ${status}`, messageList)
    setAllMessages(messageList)

    // if( !status ){
    //   // for simplicity, we simply log user out if an error (ex. forbidden for invalid session)
    //   dispatch({ type: "USER_LOGOUT", message })
    //   return
    // }

    // // update tasks list
    // console.log( `.. GET /api/messages, messages:`, savedMessage )
    // dispatch({ type: "UPDATE_MESSAGES", messages: savedMessage })
  }

  async function messageSave(e) {
    e.preventDefault()
    let savedMessage = {
      name: inputName.current.value,
      subject: inputSubject.current.value,
      message: inputMessage.current.value
    }
    console.log(savedMessage)

    // clear input
    inputName.current.value = ''
    inputSubject.current.value = ''
    inputMessage.current.value = ''

    // const { messages: newMessage, savedMessage }= await fetchJSON( '/api/messages', 'post', { message: savedMessage } )
    try {
      await fetchJSON('/api/messages', 'post', savedMessage)
      console.log("Message saved")
      messageLoad()
    }
    catch (error) {
      alert(error)
    }
    // if( !status ){
    //   dispatch({ type: "ALERT_MESSAGE", message })
    //   return
    // }

    // dispatch({ type: "UPDATE_MESSAGES", message: savedMessage })
  }
  // Add function that has API calls to send savedMessage to the database

  async function addReply(e) {
    e.preventDefault()
    let repliedMessage = {
      id: messageID,
      name: inputReplyName.current.value,
      subject: inputReplySubject.current.value,
      message: inputReplyMessage.current.value
    }
    console.log(repliedMessage)

    // clear input
    inputReplyName.current.value = ''
    inputReplySubject.current.value = ''
    inputReplyMessage.current.value = ''
    try {
      await fetchJSON('/api/messagereply', 'post', repliedMessage)
      console.log("Reply saved")
      messageLoad()
    }
    catch (error) {
      alert(error)
    }

    setShow(false)
  }

  useEffect(function () {
    messageLoad()
  }, [])

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
        <Button onClick={messageSave} variant="primary">Submit</Button>
      </Form>
      <br />
      {allMessages.map(userMessage => (
        <div>
          <Card key={userMessage._id}>
            <Card.Body>
              <Card.Title>{userMessage.subject}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{userMessage.name}</Card.Subtitle>
              <Card.Text>{userMessage.message}</Card.Text>
              <Button onClick={handleReply} className="float-end" variant="primary" value={userMessage._id} ref={buttonValue} >Reply</Button>
            </Card.Body>
            <ListGroup className="list-group-flush">
              {userMessage.reply.map(reply => <ListGroupItem>
                <u>{reply.subject}</u> by <b>{reply.name}</b>: {reply.message}
              </ListGroupItem>)}
            </ListGroup>
          </Card>
          <br />
        </div>
      ))}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Message Reply</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control ref={inputReplyName} type="name" placeholder="" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Subject</Form.Label>
              <Form.Control ref={inputReplySubject} type="subject" placeholder="" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Message</Form.Label>
              <Form.Control ref={inputReplyMessage} as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={addReply}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}


export default MessageBoard