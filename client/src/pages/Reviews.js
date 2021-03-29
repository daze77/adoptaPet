import React, { useRef } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


function Reviews() {
  const inputName = useRef()
  const inputReview = useRef()

  function reviewSubmit(event) {
    event.preventDefault() 
    let savedReview = {
      name: inputName.current.value,
      review: inputReview.current.value,
    }
    console.log(savedReview)
    // Add function that has API calls to send savedReview to the database
  }


  return (
    <div>
      <h1>Reviews</h1>
    <Form>
      <Form.Group controlId="exampleForm.ControlInput1">
        <Form.Label>Name</Form.Label>
        <Form.Control ref={inputName} type="name" placeholder="" />
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Review</Form.Label>
        <Form.Control ref={inputReview} as="textarea" rows={3} />
      </Form.Group>
      <Button onClick={reviewSubmit} variant="primary">Submit</Button>
    </Form>
    </div>
  )
}


export default Reviews