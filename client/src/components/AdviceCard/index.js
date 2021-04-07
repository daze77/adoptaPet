import React from "react"
import "./style.css"

function AdviceCard(props) {

    return (
      <div class="col">
        <div className="card mb-3" id="AdviceCard">
          <div className="row">
            <div className="col-md-4">
              <img src={props.image} className="card-img" alt={props.name} />
            </div>
            <div className="col-md-8">
              <div className="content" id="content">
                <ul>
                  <li><strong>{props.title}</strong></li>
                  
                  <a href={props.url}><strong>Read the Article</strong>{props.title}</a>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default AdviceCard;