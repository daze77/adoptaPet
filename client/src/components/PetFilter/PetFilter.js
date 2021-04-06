import React from 'react'
import petAPI from '../../util/petAPI/petAPI'

function PetFilter(props) {
    return (




        <div>
            <div class="btn-group">
                <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    Choose Type
          </button>
                <ul class="dropdown-menu">
                    <li class="dropdown-item" onClick={props.dogFunc}>Dog</li>
                    <li class="dropdown-item" onClick={props.catFunc}>Cat</li>
                    <li class="dropdown-item" onClick={props.otherFunc}>Scales, Fins and Other</li>


                    {/* <li><hr class="dropdown-divider" /></li>
                            <li><a class="dropdown-item" href="#">Separated link</a></li> */}
                </ul>
            </div>
        </div>
    )
}

export default PetFilter