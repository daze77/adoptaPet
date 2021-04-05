import React, { useRef, useEffect, useState } from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css'
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
  // eslint-disable-next-line no-unused-vars
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
    setShow(false)
    try {
      await fetchJSON('/api/messagereply', 'post', repliedMessage)
      console.log("Reply saved")
      messageLoad()
    }
    catch (error) {
      alert(error)
    }
  }

  useEffect(function () {
    messageLoad()
  }, [])

  return (
    <div>
      <h1>Message Board</h1>
      <div className="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Name</label>
        <input ref={inputName} type="name" className="form-control" id="exampleFormControlInput1" placeholder="" />
        <div className="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Subject</label>
          <input ref={inputSubject} type="subject" className="form-control" id="exampleFormControlInput1" placeholder="" />
          <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">Message</label>
            <textarea ref={inputMessage} class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            <button onClick={messageSave} type="button" className="btn btn-primary">Submit</button>
          </div>
          <br />
          {allMessages.map(userMessage => (
            <div className="card mb-2">
              <div className="card-body">
                <h5 className="card-title">{userMessage.subject}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{userMessage.name}</h6>
                <p className="card-text">{userMessage.message}</p>
                <button onClick={handleReply} type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" className="btn btn-primary" value={userMessage._id} ref={buttonValue}>Reply</button>
                <br />

                <ul className="list-group mt-2">

                  {userMessage.reply.map(reply => (
                    <li className="list-group-item">
                      <u>{reply.subject}</u> by <b>{reply.name}</b>: {reply.message}
                    </li>
                  )
                    //  by {reply.name}: {reply.message})
                  )}

                </ul>
              </div>
            </div>
          ))}

          {/* <div className="modal" tabindex="-1" >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Message Reply</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  <p>
                    <div className="mb-3">
                      <label for="exampleFormControlInput1" className="form-label">Name</label>
                      <input type="name" className="form-control" id="exampleFormControlInput1" placeholder="" />
                      <div className="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Subject</label>
                        <input type="subject" className="form-control" id="exampleFormControlInput1" placeholder="" />
                        <div className="mb-3">
                          <label for="exampleFormControlTextarea1" className="form-label"></label>
                          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3">Message</textarea>
                        </div>
                      </div>
                    </div>
                  </p>
                </div>
                <div className="modal-footer">
                  <button onClick={addReply} type="button" class="btn btn-primary">Submit</button>
                </div>
              </div>
            </div>
          </div> */}
          <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">Message Reply</h5>
                  <button onClick={handleClose} type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Name</label>
                    <input ref={inputReplyName} type="name" className="form-control" id="exampleFormControlInput1" placeholder="" />
                    <div className="mb-3">
                      <label for="exampleFormControlInput1" class="form-label">Subject</label>
                      <input ref={inputReplySubject} type="subject" className="form-control" id="exampleFormControlInput1" placeholder="" />
                      <div className="mb-3">
                        <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                        <textarea ref={inputReplyMessage} class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="modal-footer">
                  <button onClick={addReply} type="button" class="btn btn-primary" data-bs-dismiss="modal">Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default MessageBoard