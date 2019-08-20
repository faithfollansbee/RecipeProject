const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onSignUp = event => {
  event.preventDefault()
  const form = event.target//
  // event.preventDefault()
  const formData = getFormFields(form)
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
    .then(() => {
      api.getRecipes()
        .then(ui.getRecipesSuccess)
        // .catch(ui.onIndexFailure)
    })
    .catch(ui.signInFailure)
}

const onGuest = event => {
  event.preventDefault()
  const guestInfo = {
    'credentials': {
      'email': 'guest@guest',
      'password': 'guest'
    }
  }
  api.signIn(guestInfo)
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
  api.addRecipe(formData)
    .then(ui.addRecipeSuccessful)
    .then(() => onGetRecipes(event))
    .catch(ui.addRecipeFailure)
}

const onDeleteRecipe = (event) => {
  event.preventDefault()
  const recipeId = $(event.target).closest('section').data('id')
  api.deleteRecipe(recipeId)
    .then(ui.deleteRecipeSuccessful)
    .then(() => onGetRecipes(event))
    .catch(ui.failure)
}

const onGetRecipes = (event) => {
  event.preventDefault()
  api.getRecipes()
    .then(ui.getRecipesSuccess)
    .catch(ui.getRecipesFailure)
}

const addHandlers = () => {
  $('#getRecipesButton').on('click', onGetRecipes)
  $('.content').on('click', '.delete-recipe', onDeleteRecipe)
  $('.content').on('submit', '.update-recipe', onUpdateRecipe)
  $('.content').on('click', '.enlarge-recipe', function () {
    $(this).closest('.grid-item').toggleClass('active')
  })
  $('.content').on('click', '.close-recipe', function () {
    $(this).closest('.grid-item').toggleClass('closed')
  })
}

const onUpdateRecipe = (event) => {
  event.preventDefault()
  console.log('updated? in events file')
  // event.preventDefault()
  const id = $(event.target).closest('section').data('id')
  const formData = getFormFields(event.target)
  api.updateRecipe(formData, id)
    .then(ui.updateRecipeSuccess)
    .then(() => {
      api.getRecipes()
        .then(ui.getRecipesSuccess)
    })
  // api.getRecipes()
    // .then(ui.updateRecipeSuccess)
    // .then(ui.getRecipesSuccess)
    // .catch(ui.getRecipesFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword,
  onAddRecipe,
  onDeleteRecipe,
  onUpdateRecipe,
  onGetRecipes,
  addHandlers,
  onGuest
}
