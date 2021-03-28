/*
    note how we wrap our api fetch in this function that allows us to do some
    additional error / message handling for all API calls...
*/
function fetchJSON( url, method='get', data={} ){
    method = method.toLowerCase()
    const fetchOptions = {
        method,
        headers: {
            'Content-Type': 'application/json',
            // looks for a session entry in localStorage, and if so pass it
            'Session': localStorage.session || ''
        }
    }
    // only attach the body for put/post
    if( method === 'post' || method === 'put' ) {
        fetchOptions.body = JSON.stringify( data )
    }
  
    return fetch( url,fetchOptions ).then( res=>res.json() )
}

export default fetchJSON