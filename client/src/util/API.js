/*
    note how we wrap our api fetch in this function that allows us to do some
    additional error / message handling for all API calls...
*/
// async function addMessage(data = {}) {
//     const res = await fetch("/api/messages", {
//       method: "POST",
//       body: JSON.stringify(data),
//       headers: { "Content-Type": "application/json" }
//     });

//     const json = await res.json();

//     return json;
//   }

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
  console.log('this is the fetchJSON results from API', fetchOptions)
    return fetch( url,fetchOptions ).then( res=>res.json() )
}

export default fetchJSON