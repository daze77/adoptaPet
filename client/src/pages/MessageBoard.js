import React, { useRef, useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import fetchJSON from '../util/API'


function MessageBoard() {
  const inputName = useRef()
  const inputSubject = useRef()
  const inputMessage = useRef()

  const [allMessages, setAllMessages] = useState([])

  // function messageSubmit(event) {
  //   event.preventDefault()

    async function messageLoad(){
      // const { status, messages: name, subject, message }= await fetchJSON( '/api/messages' )
      const { status, messageList }= await fetchJSON( '/api/messages' )
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
  
    async function messageSave( e ){
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
      try {await fetchJSON( '/api/messages', 'post', savedMessage)
      console.log("Message saved")
      messageLoad()
    }
      catch(error){
        alert(error)
      }
      // if( !status ){
      //   dispatch({ type: "ALERT_MESSAGE", message })
      //   return
      // }
  
      // dispatch({ type: "UPDATE_MESSAGES", message: savedMessage })
    }
    // Add function that has API calls to send savedMessage to the database

    useEffect( function(){
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
        <Card>
        <Card.Body>
          <Card.Title>{userMessage.subject}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{userMessage.name}</Card.Subtitle>
          <Card.Text>{userMessage.message}</Card.Text>
        </Card.Body>
      </Card>
      <br />
      </div>
      ))}
  
    </div>
  )
}


export default MessageBoard