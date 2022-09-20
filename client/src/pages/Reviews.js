import React, { useEffect, useRef, useState } from 'react'
import { Redirect } from 'react-router-dom'
import { useStoreContext } from "../util/GlobalStore"
import fetchJSON from '../util/API'


function Reviews() {
  const [{ authOk },  ]= useStoreContext()

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

  async function validateSubmit(event){
    event.preventDefault()
    const form = event.target.ownerDocument.forms[0]

    !form.checkValidity() ? form.classList.add('was-validated') : reviewSubmit(event)
    

  }

  useEffect(function () {
    reviewLoad()
  }, [])


  return (
    <>
        { !authOk && <Redirect to='/login' /> }

    
    <div className="pb-3">
      <h1>Leave Us A Review</h1>

  
        <form class="row g-3 reviewsForm " id="reviewsForm" >
          <div class="col-12">
            <label for="validationServer01" class="form-label">Name</label>
            <input ref={inputName} type="text" class="form-control " id="validationServer01"  required />
            <div class="valid-feedback">
              Looks good!
            </div>
          </div>
          <div class="col-12">
            <label for="validationServer02" class="form-label">Organization</label>
            <input ref={inputOrganization} type="organization" class="form-control " id="validationServer02" />

          </div>
          <div class="col-12">
            <label for="validationServer03" class="form-label">Subject</label>
            <input ref={inputSubject} type="subject" class="form-control " id="validationServer03"  required />
            <div class="valid-feedback">
              Looks good!
            </div>
          </div>
          <div class="col-12">
            <label for="validationTextarea" class="form-label">Review</label>
            <textarea ref={inputReview} class="form-control " id="validationTextarea"  required />
            <div class="valid-feedback">
              Looks good!
            </div>
          </div>

          <div class="col-12">
            <button  onClick={validateSubmit} class="btn btn-primary" type="submit">Submit</button>
          </div>
        </form>

        <br />

        <h1>Past Reviews</h1>



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
    </>

  )
}

export default Reviews