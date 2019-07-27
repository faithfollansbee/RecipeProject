const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onSignUp = event => {
  const form = event.target
  event.preventDefault()
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
    .catch(ui.addRecipeFailure)
}

const onDeleteRecipe = (event) => {
  event.preventDefault()
  const recipeId = $(event.target).closest('section').data('id')
  api.deleteRecipe(recipeId)
    .then(() => onGetRecipes(event))
    .catch(ui.failure)
}
const onGetRecipes = (event) => {
  event.preventDefault()
  console.log('here?')
  api.getRecipes()
    .then(ui.getRecipesSuccess)
    .catch(ui.getRecipesFailure)
}

const addHandlers = () => {
  $('#getRecipesButton').on('click', onGetRecipes)
  $('.content').on('click', '.delete-recipe', onDeleteRecipe)
  $('.content').on('submit', '.update-recipe', onUpdateRecipe)
}

const onUpdateRecipe = (event) => {
  event.preventDefault()
  const id = $(event.target).closest('section').data('id')
  const formData = getFormFields(event.target)
  api.updateRecipe(formData, id)
  api.getRecipes()
    .then(ui.updateRecipeSuccess)
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
  addHandlers
}
