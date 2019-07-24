const store = require('./store')
// const showRecipesTemplate = require('../templates/recipe-listing.handlebars')

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
  $('.change-password').hide()
  $('.sign-up').show()
  $('.sign-in').show()
  $('.sign-out').hide()
  $('.add-recipe').hide()
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

const viewRecipesFailure = () => {
  $('#message').text('failed to see your recipes')
}

const viewRecipesSuccessful = (data) => {
  $('#message').text('here are your recipes')
  console.log(data)
}
const deleteRecipeSuccessful = () => {
}
const deleteRecipeFailure = () => {
}
const updateRecipeSuccessful = () => {
}
const updateRecipeFailure = () => {
}

// const showRecipesHtml = showRecipesTemplate({ recipes: data.recipes })
// 5. insert the HTML string onto the page using jQuery
// use append or HTML
// $('.content').html(showRecipesHtml)

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
  addRecipeFailure,
  deleteRecipeSuccessful,
  deleteRecipeFailure,
  viewRecipesSuccessful,
  viewRecipesFailure,
  updateRecipeSuccessful,
  updateRecipeFailure
}
