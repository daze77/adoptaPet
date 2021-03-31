import React, { useEffect, useRef, useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import fetchJSON from '../util/API'


function Reviews() {
  const inputName = useRef()
  const inputOrganization = useRef()
  const inputSubject = useRef()
  const inputReview = useRef()

  const [allReviews, setAllReviews] = useState([])

  async function reviewLoad() {
    const { status, reviewList } = await fetchJSON('/api/reviews')
    console.log(`Review load ${status}`, reviewList)
    setAllReviews(reviewList)
  }

  async function reviewSubmit(event) {
    event.preventDefault()
    let savedReview = {
      name: inputName.current.value,
      organization: inputOrganization.current.value,
      subject: inputSubject.current.value,
      review: inputReview.current.value
    }
    console.log(savedReview)

    // clear input
    inputName.current.value = ''
    inputOrganization.current.value = ''
    inputSubject.current.value = ''
    inputReview.current.value = ''

    try {
      await fetchJSON('/api/reviews', 'post', savedReview)
      console.log("Review saved")
      reviewLoad()
    }
    catch (error) {
      alert(error)
    }
  }

  useEffect(function () {
    reviewLoad()
  }, [])


    return (
      <div>
        <h1>Reviews</h1>
        <Form>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Name</Form.Label>
            <Form.Control ref={inputName} type="name" placeholder="" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Organization</Form.Label>
            <Form.Control ref={inputOrganization} type="organization" placeholder="" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Subject</Form.Label>
            <Form.Control ref={inputSubject} type="subject" placeholder="" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Review</Form.Label>
            <Form.Control ref={inputReview} as="textarea" rows={3} />
          </Form.Group>
          <Button onClick={reviewSubmit} variant="primary">Submit</Button>
        </Form>
        <br />
        {allReviews.map(userReview => (
          <div>
            <Card>
              <Card.Body>
                <Card.Title>{userReview.subject}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{userReview.organization}</Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">{userReview.name}</Card.Subtitle>
                <Card.Text>{userReview.review}</Card.Text>
              </Card.Body>
            </Card>
            <br />
          </div>
        ))}
      </div>
    )
}

export default Reviews