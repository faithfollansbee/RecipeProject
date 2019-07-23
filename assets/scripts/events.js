const getFormFields = require('../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
// external js: isotope.pkgd.js
// const store = require('./store')

const onSignUp = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  console.log(formData)
  api.signUp(formData)
    .then(ui.signUpSuccessful)
    .catch(ui.signUpFailure)
}

const onSignIn = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.signIn(formData)
    .then(ui.signInSuccessful)
    .catch(ui.signInFailure)
}

const onSignOut = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)

  api.signOut(formData)
    .then(ui.signOutSuccessful)
    .catch(ui.signoutFailure)
}

const onChangePassword = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)

  api.changePassword(formData)
    .then(ui.changePasswordSuccessful)
    .catch(ui.changePasswordFailure)
}

const onAddRecipe = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  console.log(formData)
  api.addRecipe(formData)
    .then(ui.addRecipeSuccessful)
    .catch(ui.addRecipeFailure)
}

// var $grid = $('.grid').card({
//   itemSelector: '.element-item',
//   layoutMode: 'fitRows',
//   getSortData: {
//     name: '.name',
//     meal: '.meal',
//     time: '.cooking-time',
//     tag: '[tag]'
//   }
// })

// bind filter button click
// $('#filters').on('click', 'button', function() {
//       var filterValue = $(this.attr('data-filter')
//         // use filterFn if matches value
//         $grid.card({
//           filter: filterValue
//         })
//       }
//     })
// })

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword,
  onAddRecipe
}
