'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
// use require without a reference to ensure a file is bundled
// require('./example')

const events = require('././recipes/events.js')

$(() => {
  $('#myTab a').on('click', function (e) {
    e.preventDefault()
    $(this).tab('show')
  })
  $('#myTab a[href="#profile"]').tab('show') // Select tab by name
  $('#myTab li:first-child a').tab('show') // Select first tab
  $('#myTab li:last-child a').tab('show') // Select last tab
  $('#myTab li:nth-child(3) a').tab('show') // Select third tab

  $('#sign-up').on('submit', events.onSignUp)
  $('#sign-in').on('submit', events.onSignIn)
  $('#sign-out').on('click', events.onSignOut)
  $('#change-password').on('submit', events.onChangePassword)
  $('.add-recipe').on('submit', events.onAddRecipe)
  // $('#add-tag').on('submit', events.onAddTag)
  // $('.view-recipes').on('click', events.onViewRecipes)
  $('.delete-book').on('click', events.onDeleteRecipe)
  // $('.update-book').on('submit', events.onUpdateRecipe)
  events.addHandlers()
  // $(function () {
  //   $('.grid-item').click(function () { $(this).toggleClass('active') })
  // })
  // $('.grid-item {{recipe.meal}}').on('click', events.onClick)
  // $(function () {
  //  $('div').click(function () { $(this).toggleClass('active') })
//  })
})
// class="grid-item {{recipe.meal}}">
