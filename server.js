require( 'dotenv' ).config() // looks for .env ; process.env gets it's values

const mongoose = require('mongoose')
const path = require('path')
const express = require('express')
const apiRouter = require('./app/router')
const app = express()
const Messages = require('./app/db/models/messages')
const Reviews = require('./app/db/models/reviews')







const PORT = process.env.PORT || 8080
const API_URL = process.env.NODE_ENV === 'production' ?
   'https://bthadoptapet.herokuapp.com' : `http://localhost:${PORT}`
// production uses REACT production-build content
const STATIC_PATH = process.env.NODE_ENV === 'production' ?
   path.join('client','build') : path.join('client','public')




if( !process.env.MONGODB_URI ){
   console.log( '*ERROR* You need a .env file (with MONGODB_URI,...)' )
   process.exit()
}





// for parsing incoming POST data
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// static paths (ex. assets, js, images, etc) served automatically from:
app.use(express.static( STATIC_PATH ))

// all our RESTful API routes come from
apiRouter( app, API_URL, STATIC_PATH )


// **OPTIONAL** If your REACT routing allows non-standard paths (ex. fake paths for React-Router)
// THEN you need to enable this for server-side serving to work
if (process.env.NODE_ENV === 'production') {
   app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, './client/build/index.html'))
   })
   console.log( '!! Be sure to run "npm run build" to prepare production react code!')
}


app.listen(PORT, function(){
   console.log( `Serving app on: ${API_URL}}` )
})