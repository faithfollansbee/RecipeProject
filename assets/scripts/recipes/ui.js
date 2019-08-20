const store = require('../store')

const showRecipesTemplate = require('../templates/recipe-listing.handlebars')
// const updateRecipesTemplate = require('../templates/recipe-listing.handlebars')

const jQueryBridget = require('jquery-bridget')
const Isotope = require('isotope-layout')
// make Isotope a jQuery plugin
jQueryBridget('isotope', Isotope, $)

$('#filters').on('click', 'button', function () {
  const filterValue = $(this).attr('data-filter')
  // use filterFn if matches value
  $('.grid').isotope({ filter: filterValue })
})

$('.button-group').each(function (i, buttonGroup) {
  const $buttonGroup = $(buttonGroup)
  $buttonGroup.on('click', 'button', function () {
    $buttonGroup.find('.is-checked').removeClass('is-checked')
    $(this).addClass('is-checked')
  })
})

$('#filter').on('click', 'button', function () {
  const filterValue = $(this).attr('data-filter')
  // use filterFn if matches value
  $('.grid').isotope({ filter: filterValue })
})

$('.button-group').each(function (i, buttonGroup) {
  const $buttonGroup = $(buttonGroup)
  $buttonGroup.on('click', 'button', function () {
    $buttonGroup.find('.is-checked').removeClass('is-checked')
    $(this).addClass('is-checked')
  })
})

const getRecipesSuccess = (data) => {
  $('.grid').show()
  const showRecipesHtml = showRecipesTemplate({ recipes: data.recipes })
  $('#getMessage').show()
  $('.content').html(showRecipesHtml)
  $('#getMessage').text('Here are your recipes!')
  hideGetMessage()
}

const updateRecipeSuccess = (data) => {
  // event.preventDefault()
  $('#message').show()
  $('#updateRecipeModal').modal('hide')
  $('body').removeClass('modal-open')
  $('.modal-backdrop').remove()
  $('#message').text('updatedrecipe')
  hideMessaging()
}

const hideMessaging = function () {
  setTimeout(function () {
    $('#message').text('')
    $('#message').hide()
  }, 3000)
}

const hideGetMessage = function () {
  setTimeout(function () {
    $('#getMessage').text('')
    $('#getMessage').hide()
  }, 3000)
}

const hideLandingMessaging = function () {
  setTimeout(function () {
    $('#landing-message').text('')
    $('#landing-message').hide()
  }, 3000)
}

const signUpSuccessful = responseData => {
  $('#landing-message').show()
  $('#landing-message').text('You signed up!')
  $('#sign-up-modal').modal('hide')
  $('body').removeClass('modal-open')
  $('.modal-backdrop').remove()
  $('form').trigger('reset')
  hideLandingMessaging()
}

const signUpFailure = responseData => {
  $('#landing-message').show()
  $('#landing-message').text('Sign up didn\'t worK! Give it another try.!')
  $('form').trigger('reset')
  hideLandingMessaging()
}
const signInSuccessful = responseData => {
  $('#message').show()
  $('#message').text('you signed in!')
  hideMessaging()
  store.user = responseData.user
  $('.nav').show()
  $('.landing').hide()
  $('#hide-password').show()
  $('.add-recipe').show()
  $('#add-recipe').show()
  $('.view-recipes').show()
  // $('.sign-out').show()
  $('.change-password').show()
  $('#sign-in-modal').modal('hide')
  $('body').removeClass('modal-open')
  $('.modal-backdrop').remove()
  $('form').trigger('reset')
  // $('#getRecipesButton').show()
  $('#add-tag').show()
}
const signInFailure = responseData => {
  $('#landing-message').show()
  $('#landing-message').text('Wrong email or password. Try again.')
  $('form').trigger('reset')
  hideLandingMessaging()
}

const signOutSuccessful = responseData => {
  $('#landing-message').show()
  $('#landing-message').text('You signed out!')
  $('#hide-password').hide()
  $('.change-password').hide()
  $('.sign-up').show()
  $('.nav').hide()
  $('.landing').show()
  $('.sign-out').hide()
  $('.view-recipes').hide()
  $('.add-recipe').hide()
  hideLandingMessaging()
  $('form').trigger('reset')
  $('.grid').hide()
  $('#getRecipesButton').hide()
  store.user = null
}

const signOutFailure = () => {
  $('#message').show()
  $('#message').text('You failed to sign out successfully.')
  hideMessaging()
}

const changePasswordSuccessful = responseData => {
  $('#message').show()
  $('#message').text('You changed password successfully!')
  // store.user = responseData.user
  // $('#sign-up').hide()
  $('#change-password-modal').modal('hide')
  $('body').removeClass('modal-open')
  $('.modal-backdrop').remove()
  $('form').trigger('reset')
  hideMessaging()
}

const changePasswordFailure = () => {
  $('#message').show()
  $('#message').text('You failed to change password')
  $('form').trigger('reset')
  hideMessaging()
}

const addRecipeSuccessful = () => {
  $('#message').show()
  $('#message').text('added recipe!')
  $('#addRecipeModal').modal('hide')
  $('body').removeClass('modal-open')
  $('.modal-backdrop').remove()
  $('form').trigger('reset')
  hideMessaging()
}

const addRecipeFailure = () => {
  $('#message').show()
  $('#message').text('didn\'t add recipe')
  $('form').trigger('reset')
  hideMessaging()
}

const deleteRecipeSuccessful = () => {
  $('#message').show()
  $('#message').text('deleted recipe')
  hideMessaging()
}
const deleteRecipeFailure = () => {
  $('#message').show()
  $('#message').text('didn\'t delete recipe')
  hideMessaging()
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
  addRecipeFailure,
  deleteRecipeSuccessful,
  deleteRecipeFailure,
  getRecipesSuccess,
  updateRecipeSuccess
}
