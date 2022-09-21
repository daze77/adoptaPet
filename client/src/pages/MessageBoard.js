import React, { useRef, useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom'
import { useStoreContext } from "../util/GlobalStore"
import fetchJSON from '../util/API'
import './Pages.css'


function MessageBoard() {
  const [{ authOk, alert }, dispatch  ]= useStoreContext()

  const [messageBoard, setMessageBoard] = useState({
    name: '',
    subject: '',
    message: '',
    replyName: '',
    replySubject: '',
    replyMessage: ''
})


function handleChange(e){
  console.log('you typed a letter')
  console.log(e.target)
  let nam = e.target.name 
  let val = e.target.value

  setMessageBoard({...messageBoard, [nam]:val})
  console.log('this is messageBoard', messageBoard)

}


// try and get rid of useRef
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
    // setShow(true);
  }

  function validateSubmit(event){
    event.preventDefault()
    const form = event.target.form
    const formId = event.target.form.id

    console.log(!form.checkValidity())
    
    !form.checkValidity() ? form.classList.add('was-validated') : formId==='messageBoard'? messageSave(event) : addReply(event)
  }

  async function messageLoad() {
    const { status, messageList, message } = await fetchJSON('/api/messages')

    if( !status ){
      // for simplicity, we simply log user out if an error (ex. forbidden for invalid session)
      dispatch({ type: "USER_LOGOUT", message })
      return
    }

    console.log(`Message load ${status}`, messageList)
    setAllMessages(messageList)
    
  }

  async function messageSave(e) {
    e.preventDefault()
    let savedMessage = {
      name: messageBoard.name,
      subject: messageBoard.subject,
      message: messageBoard.message
    }
    console.log(savedMessage)

    // clear input
    setMessageBoard({
      ...messageBoard,
      name: '',
      subject: '',
      message: '' 
    
    })

    try {
      await fetchJSON('/api/messages', 'post', savedMessage)
      console.log("Message saved")

    // remove was-validated class so that form is clean from validation check
    if(document.querySelector('.messageBoard').classList.contains('was-validated')){
        document.querySelector('.messageBoard').classList.remove('was-validated')
      }

      messageLoad()
    }
    catch (error) {
      alert(error)
    }

  }
  // Add function that has API calls to send savedMessage to the database

  async function addReply(e) {
    e.preventDefault()
    const form = e.target.form
    console.log(form.id)
    let repliedMessage = {
      id: messageID,
      replyName: messageBoard.replyName,
      replySubject: messageBoard.replySubject,
      replyMessage: messageBoard.replyMessage
    }
    console.log('this is the replyMessages', repliedMessage)

    // clear input

    setMessageBoard({
      ...messageBoard,
      replyName: '',
      replySubject: '',
      replyMessage: '' 
    
    })

    // if all is good with the data trigger modal to close using the btn close element and click
    document.querySelector('.btn-close').click()

    // remove was-validated class so that form is clean from validation check
    if(document.querySelector('.replyMessageBoard').classList.contains('was-validated')){
      document.querySelector('.replyMessageBoard').classList.remove('was-validated')
    }


    setShow(false)
    try {
      await fetchJSON('/api/messagereply', 'post', repliedMessage)
      console.log("Reply saved", repliedMessage)
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
    <>
    { !authOk && <Redirect to='/login' /> }
    <div>
      <h1>Message Board</h1>

        <form class="row g-3 messageBoard " id="messageBoard" >
          <div class="col-12">
            <label for="validationServer01" class="form-label">Name</label>
            <input name='name' value={messageBoard.name}  type="name" class="form-control " id="validationServer01" onChange={handleChange} required />
            <div class="valid-feedback">
              Looks good!
            </div>
          </div>
          <div class="col-12">
            <label for="validationServer02" class="form-label">Subject</label>
            <input name='subject' value={messageBoard.subject} type="subject" class="form-control " id="validationServer02" onChange={handleChange} required />

          </div>

          <div class="col-12">
            <label for="validationTextarea" class="form-label">Message</label>
            <textarea name='message' value={messageBoard.message} class="form-control " id="validationTextarea" onChange={handleChange} required />
            <div class="valid-feedback">
              Looks good!
            </div>
          </div>

          <div class="col-12">
            <button onClick={validateSubmit} class="btn btn-primary" type="submit">Submit</button>
          </div>
        </form>

        <br />
          {allMessages.map(userMessage => (
            <div className="card mb-2 messageBoardCard">
              <div className="card-body">
                <h5 className="card-title">{userMessage.subject}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{userMessage.name}</h6>
                <p className="card-text">{userMessage.message}</p>
                <button onClick={handleReply} type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop" className="btn btn-primary" value={userMessage._id} ref={buttonValue}>Reply</button>
                <br />

                <ul className="list-group mt-2">

                  {userMessage.reply.map(reply => (
                    <li className="list-group-item replyMessageCard">
                      <u>{reply.subject}</u> by <b>{reply.name}</b>: {reply.message}
                    </li>
                  )
                  )}
                </ul>
              </div>
            </div>
          ))}




          <div className="modal fade replyModal" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="staticBackdrop">Message Reply</h5>
                  <button onClick={handleClose} type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">

                <form className="row g-3 replyMessageBoard" id='replyMessageBoard'>
                  <div className="col-12">
                    <label for="exampleFormControlInput1" className="form-label">Name</label>
                    <input name='replyName' value={messageBoard.replyName} onChange={handleChange} type="name" className="form-control" id="exampleFormControlInput1" placeholder="" required/>
                  </div>
 
                  <div className="col-12">
                    <label for="exampleFormControlInput1" class="form-label">Subject</label>
                    <input name='replySubject' value={messageBoard.replySubject} type="subject" className="form-control" id="exampleFormControlInput1" placeholder="" onChange={handleChange} required/>
                  </div>

                  <div className="col-12">
                    <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                    <textarea name='replyMessage' value={messageBoard.replyMessage} class="form-control" id="exampleFormControlTextarea1" rows="3" onChange={handleChange} required></textarea>
                  </div>




                  <div class="modal-footer">
                    <button onClick={validateSubmit} type="button" class="btn btn-primary" >Submit</button>
                  </div>

                </form>





                </div>

              </div>
            </div>
          </div>


        </div>
    </>
  )
}


export default MessageBoard