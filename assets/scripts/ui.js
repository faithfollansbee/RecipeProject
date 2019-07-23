const store = require('./store')
const hideMessaging = function () {
  setTimeout(function () {
    $('#message').text('')
    $('#message').hide()
  }, 4000)
}

const signUpSuccessful = responseData => {
  $('#message').show()
  $('#message').text('You signed up!')
  $('form').trigger('reset')
  console.log('maybe sign up worked')
}
const signUpFailure = responseData => {
  $('#message').show()
  $('#message').text('Sign up didn\'t worK! Give it another try.!')
  $('form').trigger('reset')
  console.log('sign up failed')
}
const signInSuccessful = responseData => {
  $('#message').show()
  store.user = responseData.user
  $('.sign-up').hide()
  $('.sign-in').hide()
  $('.add-recipe').show()
  $('.sign-out').show()
  $('.change-password').show()
  $('#change-password').text()
  $('form').trigger('reset')
  console.log('sign in successful!')
}
const signInFailure = responseData => {
  $('#message').text('Wrong email or password. Try again.')
  $('form').trigger('reset')
  console.log('sign in failure')
}

const signOutSuccessful = responseData => {
  $('#message').show()
  $('#message').text('You signed out!')
  $('#change-password').hide()
  $('#game-record').hide()
  $('.sign-up').show()
  $('.sign-in').show()
  $('#sign-out').hide()
  $('.gameboard').hide()
  hideMessaging()
  $('form').trigger('reset')
  store.user = null
  console.log('you signed out')
}

const signOutFailure = () => {
  $('#message').text('You failed to sign out successfully.')
}

const changePasswordSuccessful = responseData => {
  $('#message').text('You changed password successfully!')
  // store.user = responseData.user
  $('#sign-up').hide()
  $('form').trigger('reset')
}

const changePasswordFailure = () => {
  $('#message').text('You failed to change password')
  $('form').trigger('reset')
}

const addRecipeSuccessful = () => {
  $('#message').text('added recipe!')
}

const addRecipeFailure = () => {
  $('#message').text('didn\'t add recipe')
}
module.exports = {
  signUpSuccessful,
  signUpFailure,
  signInSuccessful,
  signInFailure,
  signOutSuccessful,
  signOutFailure,
  changePasswordSuccessful,
  changePasswordFailure,
  addRecipeSuccessful,
  addRecipeFailure
}
