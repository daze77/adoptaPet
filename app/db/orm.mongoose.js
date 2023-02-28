const mongoose = require( 'mongoose' )
const bcrypt = require( 'bcrypt' )

mongoose.connect(process.env.MONGODB_URI)
   // {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})

// include mongoose models (it will include each file in the models directory)
const db = require( './models' )

async function userRegister( userData ){
   if( !userData.name || !userData.email || !userData.password ){
      console.log( '[registerUser] invalid userData! ', userData )
      return { status: false, message: 'Invalid user data' }
   }

   // refuse duplicate user emails
   let duplicateUser = await db.users.findOne({ email: userData.email })
   if( duplicateUser && duplicateUser._id ){
      return { status: false, message: 'Duplicate email, try another or login' }
   }

   // hash the password (salt=10)
   const passwordHash = await bcrypt.hash(userData.password, 10)

   const saveData = {
      name: userData.name,
      email: userData.email || '',
      thumbnail: userData.thumbnail || '',
      password: passwordHash
   }
   const saveUser = await db.users.create( saveData )
   if( !saveUser._id ){
      return { status: false, message: `Sorry failed creating entry for ${saveUser.name}: ` }
   }

   return {
      status: true,
      message: `Success! ${saveUser.name} was successfully registered`,
      userData: {
         id: saveUser._id,
         name: saveUser.name,
         email: saveUser.email,
         thumbnail: saveUser.thumbnail
      }
   }
}

async function userLogin( email, password ) {
   const userData = await db.users.findOne({ email: email } )
   if( !userData || !userData._id ) {
      return { status: false, message: 'Invalid login' }
   }

   // compare the passwords to see if valid login
   const isValidPassword = await bcrypt.compare( password, userData.password )
   // console.log( ` [loginUser] checking password (password: ${password} ) hash(${userData.password})`, isValidPassword )
   if( !isValidPassword ) {
      return { status: false, message: 'Invalid password' }
   }

   return {
      status: true,
      message: `Logging in ${userData.name}...`,
      userData: {
         id: userData._id,
         name: userData.name,
         email: userData.email,
         thumbnail: userData.thumbnail
      }
   }
}

async function userSession( userId ){
   const userData = await db.users.findOne({ _id: userId })
   if( !userData || !userData._id ) {
      return { status: false, message: 'Invalid session' }
   }
   return {
      status: true,
      message: '',
      userData: {
         id: userData._id,
         name: userData.name,
         email: userData.email,
         thumbnail: userData.thumbnail
      }
   }
}

async function taskList( ownerId, message='' ){
   // refuse duplicate user emails
   const tasks = await db.tasks.find({ ownerId }, '-ownerId -__v')

   return {
      status: true,
      message,
      tasks
   }
}

async function taskSaveAndList( newTask, ownerId ){
   // refuse duplicate user emails
   const result = await db.tasks.create({ name: newTask, ownerId })
   if( !result._id ){
      return {
         status: false,
         message: 'Sorry could not save task!'
      }
   }

   return taskList( ownerId, 'Task saved' )
}

async function messageList( ownerId, subject='', message='' ){
   // refuse duplicate user emails
   const messageList = await db.messages.find({ ownerId }, '-ownerId -__v').populate('reply').sort({createdAt: -1})

   return {
      status: true,
      messageList,
      subject,
      message
   }
}

async function messageSaveAndList( newMessage, subject, name, ownerId ){
   // refuse duplicate user emails
   const result = await db.messages.create({ message: newMessage, subject: subject, name: name, ownerId })
   if( !result._id ){
      return {
         status: false,
         subject: 'Subject required',
         message: 'Sorry could not save message!'
      }
   }

   return messageList( ownerId, 'Message saved' )
}

async function messageReplySaveAndList( newMessage, subject, name, id, ownerId ){
   // refuse duplicate user emails
   const result = await db.messagereply.create({ message: newMessage, subject: subject, name: name, id: id, ownerId })
   if( !result._id ){
      return {
         status: false,
         subject: 'Subject required',
         message: 'Sorry could not save reply!'
      }
   }
   const result2 = await db.messages.findOneAndUpdate({ _id: mongoose.Types.ObjectId(`${id}`) }, { $push: { reply: result._id } })

   return messageList( ownerId, 'Reply saved' )
}

async function reviewList( ownerId, organization='', subject='', review='' ){
   // refuse duplicate user emails
   const reviewList = await db.reviews.find({ ownerId }, '-ownerId -__v').sort({createdAt: -1})

   return {
      status: true,
      reviewList,
      organization,
      subject,
      review
   }
}

async function reviewSaveAndList( newReview, subject, organization, name, ownerId ){
   // refuse duplicate user emails
   const result = await db.reviews.create({ review: newReview, subject: subject, organization: organization, name: name, ownerId })
   if( !result._id ){
      return {
         status: false,
         subject: 'Subject required',
         organization: 'Organization required',
         message: 'Sorry could not save review!'
      }
   }

   return reviewList( ownerId, 'Review saved' )
}


async function requisitionInformation( request){
   if(
      !request.name ||
      !request.lastname ||
      !request.email ||
      !request.address1 ||
      !request.address2 ||
      !request.city ||
      !request.postal ||
      !request.province
   ){
      console.log( '[requisition information] invalid request! ', request )
      return { status: false, message: 'Invalid requisition data' }
   }
   const saveRequisitionData = {
      name: request.name || '',
      lastname: request.lastname || '',
      email: request.email || '',
      address1: request.address1 || '',
      address2: request.address2 || '',
      city: request.city || '',
      postal: request.postal || '',
      province: request.province || ''
   }
   const saveRequisitionInfo = await db.requisition.create( saveRequisitionData )
   if( !saveRequisitionInfo._id ){
      return { status: false, message: `Sorry failed creating entry for ${saveRequisitionInfo.name}: ` }
   }

   return {
      status: true,
      message: `Success! ${saveRequisitionInfo.name} was successfully registered`,
      saveRequisitionData: {
         id: saveRequisitionInfo._id,
         name: saveRequisitionInfo.name,
         email: saveRequisitionInfo.email
      }
   }
}











module.exports = {
   userRegister,
   userLogin,
   userSession,
   taskList,
   taskSaveAndList,
   messageList,
   messageSaveAndList,
   messageReplySaveAndList,
   reviewList,
   reviewSaveAndList,
   requisitionInformation
};