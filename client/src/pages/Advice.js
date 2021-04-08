import React, { Component } from "react"
import Advice from "../util/advice.json"
import '../components/AdviceCard/style.css'


class Articles extends Component {
  render(){
    return(
      <div>
        <h2>Advice for New Pet Owners</h2>
        <div class="row row-cols-1 row-cols-md-2 g-2 gx-3">
        { Advice.map( advice =>{
        return(
          <a href={advice.link} target="_blank" rel="noreferrer">
            <div className="col ">
              <div key = {advice.id} className="card h-100 mb-3 advicecardformat" id="advicecardformat" >
                <img src={advice.image} className="card-img-top" id="adviceImage" alt="advice article"/>
                <div class="overlay centered">Click me for Article</div>
                <div className="card-body">
                  <p className="card-text"><strong><i>{advice.title}</i></strong> by {advice.source}</p>
                </div>
              </div>
            </div>
         </a>
          )
        })}
        </div>
      </div>
    )
  }
}
export default Articles