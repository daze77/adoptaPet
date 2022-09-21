import React, { useEffect, useRef, useState } from 'react'
import { Redirect } from 'react-router-dom'
import { useStoreContext } from "../util/GlobalStore"
import fetchJSON from '../util/API'


function Reviews() {
  const [{ authOk, alert }, dispatch]= useStoreContext()
  const [reviewMessage, setReviewMessage] = useState({
          name: '',
          organization: '',
          subject: '',
          review: ''
  })


  const [allReviews, setAllReviews] = useState([])


  function handleChange(e){
    console.log('you typed a letter')
    console.log(e.target)
    let nam = e.target.name 
    let val = e.target.value

    setReviewMessage({...reviewMessage, [nam]:val})
    console.log('this is review', reviewMessage)

  }

  async function reviewLoad() {
    const { status, reviewList, message } = await fetchJSON('/api/reviews')
    
    if( !status ){
      // for simplicity, we simply log user out if an error (ex. forbidden for invalid session)
      dispatch({ type: "USER_LOGOUT", message })
      return
    }

    console.log(`Review load ${status}`, reviewList)
    setAllReviews(reviewList)
  }

  async function reviewSubmit(event) {
    event.preventDefault()
    let savedReview = {
      name: reviewMessage.name,
      organization: reviewMessage.organization,
      subject: reviewMessage.subject,
      review: reviewMessage.review
    }
    console.log(savedReview)

    // clear input
    setReviewMessage({
      name: '',
      organization: '',
      subject: '',
      review: ''

    })

    // remove was-validated class so that form is clean from validation check
    if(document.querySelector('.reviewsForm').classList.contains('was-validated')){
      document.querySelector('.reviewsForm').classList.remove('was-validated')
    }

    try {
      await fetchJSON('/api/reviews', 'post', savedReview)
      console.log("Review saved")
      reviewLoad()
    }
    catch (error) {
      alert(error)
    }
  }

  function validateSubmit(event){
    event.preventDefault()
    const form = event.target.ownerDocument.forms.reviewsForm

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
            <input  type="text" class="form-control " id="validationServer01"  name='name' value={reviewMessage.name} onChange={handleChange} required />
            <div class="valid-feedback">
              Looks good!
            </div>
          </div>
          <div class="col-12">
            <label for="validationServer02" class="form-label">Organization</label>
            <input  type="organization" class="form-control" id="validationServer02" name='organization' value={reviewMessage.organization} onChange={handleChange}/>

          </div>
          <div class="col-12">
            <label for="validationServer03" class="form-label">Subject</label>
            <input  type="subject" class="form-control " id="validationServer03" name='subject' value={reviewMessage.subject} onChange={handleChange} required />
            <div class="valid-feedback">
              Looks good!
            </div>
          </div>
          <div class="col-12">
            <label for="validationTextarea" class="form-label">Review</label>
            <textarea  class="form-control " id="validationTextarea"  required name='review' value={reviewMessage.review} onChange={handleChange}/>
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