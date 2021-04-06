import React, { useEffect, useRef, useState } from 'react'
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
      <div className="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Name</label>
        <input ref={inputName} type="name" className="form-control" id="exampleFormControlInput1" placeholder="" />
        <div className="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Organization</label>
          <input ref={inputOrganization} type="organization" className="form-control" id="exampleFormControlInput1" placeholder="" />
          <div className="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Subject</label>
            <input ref={inputSubject} type="subject" className="form-control" id="exampleFormControlInput1" placeholder="" />
            <div className="mb-3">
              <label for="exampleFormControlTextarea1" className="form-label">Review</label>
              <textarea ref={inputReview} class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              <button onClick={reviewSubmit} type="button" className="btn btn-primary">Submit</button>
            </div>
          </div>
        </div>
      </div>
      <br />

      {allReviews.map(userReview => (
        <div className="card mb-2">
          <div className="card-body">
            <h5 className="card-title">{userReview.subject}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{userReview.organization}</h6>
            <h6 className="card-subtitle mb-2 text-muted">{userReview.name}</h6>
            <p className="card-text">{userReview.review}</p>
            <br />
          </div>
        </div>
      )
      )
      }
    </div>
  )
}

export default Reviews