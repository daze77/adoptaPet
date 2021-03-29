// load models from model directory
const path = require('path')
const fs = require('fs')
const files = fs.readdirSync(__dirname)
let db = {}
files.forEach( function( filename ){
   let filebase = filename.split('.')[0]
   if( filename !== 'index.js' ) {
      console.log(`   > loading mongoose model: ${filename}`)
      db[filebase] = require(path.join(__dirname, filename))
   }
})

module.exports = db