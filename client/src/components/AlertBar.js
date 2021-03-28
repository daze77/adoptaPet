import React, { useEffect } from 'react'
import { useStoreContext } from "../util/GlobalStore"

let timeout

function AlertBar() {
  const [{ alert }, dispatch ]= useStoreContext()

  function clearAlert(){
    // if user clicked on the box, then timeout may still exist, so clear it
    if( timeout ) clearTimeout( timeout )

    dispatch({ type: "ALERT_CLEAR" })
  }

  useEffect( function(){
    if( alert ){
      // monitor alert variable, if it is set, we trigger a 3s timer to clear it
      // (debounce an previous pending clears)
      if( timeout ){
        clearTimeout( timeout )
      }
      timeout = setTimeout( clearAlert, 3000 )
    }
  }, [ alert ])
  
  return ( 
    <>
      { alert && <div onClick={clearAlert} class="navbar fixed-top alert alert-warning mx-5">{alert}</div> }
    </>
  )
}

export default AlertBar