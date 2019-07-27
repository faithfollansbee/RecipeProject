const store = require('../store')

const showRecipesTemplate = require('../templates/recipe-listing.handlebars')
// const updateRecipesTemplate = require('../templates/recipe-listing.handlebars')

const jQueryBridget = require('jquery-bridget')
const Isotope = require('isotope-layout')
// make Isotope a jQuery plugin
jQueryBridget('isotope', Isotope, $)

// const $grid = $('.grid').isotope({
//   //itemSelector: '.element-item',
//   layoutMode: 'fitRows'
//   // getSortData: {
//   //  name: '.name',
//   //  meal: '.meal',
//   //  cookingt_time: '.cooking-time',
//   //  category: '[data-category]'
//   // }
// })

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

const getRecipesSuccess = (data) => {
  $('.grid').show()
  const showRecipesHtml = showRecipesTemplate({ recipes: data.recipes })
  $('.content').html(showRecipesHtml)
}

const updateRecipeSuccess = (data) => {
  $('#message').text('updatedrecipe')
  // const updateRecipesHtml = updateRecipesTemplate({ recipes: data.recipes })
  // $('.content').html(updateRecipesHtml)
}

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
}
const signUpFailure = responseData => {
  $('#message').show()
  $('#message').text('Sign up didn\'t worK! Give it another try.!')
  $('form').trigger('reset')
}
const signInSuccessful = responseData => {
  $('#message').show()
  store.user = responseData.user
  $('.sign-up').hide()
  $('.sign-in').hide()
  $('.add-recipe').show()
  $('.view-recipes').show()
  $('.sign-out').show()
  $('.change-password').show()
  $('form').trigger('reset')
  $('#getRecipesButton').show()
}
const signInFailure = responseData => {
  $('#message').text('Wrong email or password. Try again.')
  $('form').trigger('reset')
}

const signOutSuccessful = responseData => {
  $('#message').show()
  $('#message').text('You signed out!')
  $('.change-password').hide()
  $('.sign-up').show()
  $('.sign-in').show()
  $('.sign-out').hide()
  $('.view-recipes').hide()
  $('.add-recipe').hide()
  hideMessaging()
  $('form').trigger('reset')
  $('.grid').hide()
  $('#getRecipesButton').hide()
  store.user = null
}

const signOutFailure = () => {
  $('#message').text('You failed to sign out successfully.')
}

const changePasswordSuccessful = responseData => {
  $('#message').text('You changed password successfully!')
  // store.user = responseData.user
  // $('#sign-up').hide()
  $('form').trigger('reset')
}

const changePasswordFailure = () => {
  $('#message').text('You failed to change password')
  $('form').trigger('reset')
}

const addRecipeSuccessful = () => {
  $('#message').text('added recipe!')
  $('form').trigger('reset')
}

const addRecipeFailure = () => {
  $('#message').text('didn\'t add recipe')
  $('form').trigger('reset')
}

const deleteRecipeSuccessful = () => {
  $('#message').text('deleted recipe')
}
const deleteRecipeFailure = () => {
  $('#message').text('didn\'t delete recipe')
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
