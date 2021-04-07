import React, { Component } from "react"
import Advice from "../util/advice.json"


class Articles extends Component {
  render(){
    return(
      <div>
        <h2>Advice for New Pet Owners</h2>
        <div class="row row-cols-1 row-cols-md-2 g-2 gx-3">
        { Advice.map( advice =>{
        return(
            <div className="col">
              <div key = {advice.id} className="card mb-3" id="adviceCard" >
                <img src={advice.image} className="card-img-top" id="adviceImage" alt="advice article"/>
                <div className="card-body">
                  <p className="card-text"><strong><i>{advice.title}</i></strong> by {advice.source}</p>
                  <a href={advice.link} target="_blank" rel="noreferrer" id="AdviceBtn" className="btn btn-primary">Read Full Article</a>
                </div>
              </div>
            </div>
         
          )
        })}
        </div>
      </div>
    )
  }
}
export default Articles